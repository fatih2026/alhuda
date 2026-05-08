import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import PrayerTimes from './components/sections/PrayerTimes';
import Services from './components/sections/Services';
import Documentation from './components/sections/Documentation';
import History from './components/sections/History';
import Team from './components/sections/Team';
import Testimonials from './components/sections/Testimonials';
import Donation from './components/sections/Donation';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import { motion, useScroll, useSpring } from 'motion/react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative selection:bg-emerald-accent/20 selection:text-emerald-accent bg-emerald-primary min-h-screen overflow-x-hidden">
      {/* Background Pattern and Glows */}
      <div className="fixed inset-0 islamic-pattern opacity-[0.05] pointer-events-none z-0" />
      <div className="fixed inset-0 ornament-pattern opacity-[0.03] pointer-events-none z-0" />
      <div className="fixed top-[-20%] left-[-10%] w-[60%] h-[80%] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-5%] w-[40%] h-[60%] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Floating Ornaments */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
        <div className="absolute top-[15%] left-[5%] opacity-10 animate-bounce transition-all duration-[5000ms]">
          <span className="text-6xl text-emerald-600">🌙</span>
        </div>
        <div className="absolute top-[60%] right-[10%] opacity-5 animate-pulse transition-all duration-[7000ms]">
          <span className="text-8xl text-emerald-600">✯</span>
        </div>
        <div className="absolute top-[40%] right-[5%] opacity-10 animate-bounce transition-all duration-[6000ms]">
          <span className="text-4xl text-emerald-600">📿</span>
        </div>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-emerald-accent z-[100] origin-left shadow-[0_0_15px_rgba(16,185,129,0.5)]"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <PrayerTimes />
        <Services />
        <Documentation />
        <History />
        <Team />
        <Testimonials />
        <Donation />
        <Contact />
      </main>

      <Footer />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-[60] flex flex-col gap-4">
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-14 h-14 bg-white/80 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-2xl border border-zinc-100 hover:bg-white transition-all group"
          >
            <ArrowUp className="w-6 h-6 text-emerald-primary group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
        <motion.a
          href="https://wa.me/628123456789"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 bg-[#00b017] rounded-2xl flex items-center justify-center shadow-2xl shadow-[#00b017]/20 group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          <MessageCircle className="w-7 h-7 text-white relative z-10 border border-[#26b358] rounded-full p-1" />
        </motion.a>
      </div>

      {/* Running Text Info */}
      <div className="fixed bottom-0 left-0 right-0 h-10 bg-[#2de999] backdrop-blur-md z-[70] flex items-center border-t border-emerald-400 shadow-[0_-5px_20px_rgba(45,233,153,0.3)]">
        <div className="whitespace-nowrap px-10 animate-[marquee_40s_linear_infinite] flex items-center gap-16">
          {[
            "Kajian Rutin Malam Jumat: Fiqih Ibadah",
            "Penerimaan Santri Baru TPA Al-Huda Dibuka!",
            "Mari bantu renovasi atap masjid, donasi melalui rekening BNI...",
            "Ramadhan Center 1447H: Menuju Kemenangan Sejati",
            "Selamat Hari Raya Idul Qurban 1447H",
            "Shalat Jumat di Masjid Al-Huda: Khotib Ust. Ahmad"
          ].map((text, i) => (
            <span key={i} className="text-emerald-950 text-[10px] font-bold tracking-[0.2em] uppercase flex items-center gap-5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-800 shadow-[0_0_8px_rgba(6,78,59,0.4)]" />
              {text}
            </span>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
}
