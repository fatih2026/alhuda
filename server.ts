import express from "express";
import { createServer as createViteServer } from "vite";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  const CONTENT_PATH = path.join(process.cwd(), "src", "cms-content.json");
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";

  // API to get content
  app.get("/api/content", (req, res) => {
    try {
      const data = fs.readFileSync(CONTENT_PATH, "utf-8");
      res.json(JSON.parse(data));
    } catch (error) {
      res.status(500).json({ error: "Failed to read content" });
    }
  });

  // API to update content
  app.post("/api/content", (req, res) => {
    const { password, content } = req.body;

    if (password !== ADMIN_PASSWORD) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    try {
      fs.writeFileSync(CONTENT_PATH, JSON.stringify(content, null, 2));
      res.json({ message: "Content updated successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to save content" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    if (fs.existsSync(distPath)) {
      app.use(express.static(distPath));
      app.get("*", (req, res) => {
        res.sendFile(path.join(distPath, "index.html"));
      });
    }
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
