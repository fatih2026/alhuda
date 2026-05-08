import React, { useState } from 'react';
import { useCMSContext } from '../lib/CMSContext';
import { Save, Lock, Layout, Type, AlignLeft } from 'lucide-react';

export default function Admin() {
  const { content, updateContent } = useCMSContext();
  const [password, setPassword] = useState('');
  const [localContent, setLocalContent] = useState<any>(null);
  const [status, setStatus] = useState('');

  // Sync local content once loaded
  React.useEffect(() => {
    if (content && !localContent) {
      setLocalContent(content);
    }
  }, [content, localContent]);

  if (!localContent) return <div className="p-10">Loading CMS...</div>;

  const handleSave = async () => {
    try {
      setStatus('Saving...');
      await updateContent(localContent, password);
      setStatus('Success!');
      setTimeout(() => setStatus(''), 3000);
    } catch (err: any) {
      setStatus('Error: ' + err.message);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 p-6 md:p-12 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-bold text-zinc-900 border-b-4 border-emerald-500 inline-block">Admin Panel</h1>
            <p className="text-zinc-500 mt-2">Custom konten landing page Anda secara real-time.</p>
          </div>
          <a href="/" className="text-emerald-600 font-bold hover:underline">← Kembali ke Situs</a>
        </header>

        <div className="bg-white rounded-3xl shadow-xl border border-zinc-200 overflow-hidden">
          <div className="p-8 bg-zinc-900 text-white flex items-center gap-4">
            <Lock className="w-5 h-5 text-emerald-400" />
            <input
              type="password"
              placeholder="Admin Password"
              className="bg-transparent border-b border-zinc-700 outline-none flex-1 py-1 focus:border-emerald-400 transition-colors"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="p-8 space-y-12">
            {/* Section: General */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Layout className="w-5 h-5 text-emerald-600" />
                <h2 className="text-xl font-bold">General Metadata</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-400 mb-1">Nama Masjid</label>
                  <input
                    type="text"
                    className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-2xl outline-none focus:border-emerald-500 transition-colors"
                    value={localContent.mosqueName}
                    onChange={(e) => setLocalContent({ ...localContent, mosqueName: e.target.value })}
                  />
                </div>
              </div>
            </section>

            {/* Section: Hero */}
            <section className="pt-8 border-t border-zinc-100">
              <div className="flex items-center gap-3 mb-6">
                <Type className="w-5 h-5 text-emerald-600" />
                <h2 className="text-xl font-bold">Hero Section</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-400 mb-1">Subtitle</label>
                  <input
                    type="text"
                    className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-2xl outline-none focus:border-emerald-500 transition-colors"
                    value={localContent.hero.subtitle}
                    onChange={(e) => setLocalContent({ 
                      ...localContent, 
                      hero: { ...localContent.hero, subtitle: e.target.value } 
                    })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-400 mb-1">Main Title</label>
                  <input
                    type="text"
                    className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-2xl outline-none focus:border-emerald-500 transition-colors"
                    value={localContent.hero.title}
                    onChange={(e) => setLocalContent({ 
                      ...localContent, 
                      hero: { ...localContent.hero, title: e.target.value } 
                    })}
                  />
                  <p className="text-[10px] text-zinc-400 mt-1">* Gunakan koma (,) untuk membagi baris judul pertama dan kedua (gradient).</p>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-400 mb-1">Description</label>
                  <textarea
                    rows={4}
                    className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-2xl outline-none focus:border-emerald-500 transition-colors resize-none"
                    value={localContent.hero.description}
                    onChange={(e) => setLocalContent({ 
                      ...localContent, 
                      hero: { ...localContent.hero, description: e.target.value } 
                    })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-400 mb-1">Button Text</label>
                  <input
                    type="text"
                    className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-2xl outline-none focus:border-emerald-500 transition-colors"
                    value={localContent.hero.buttonText}
                    onChange={(e) => setLocalContent({ 
                      ...localContent, 
                      hero: { ...localContent.hero, buttonText: e.target.value } 
                    })}
                  />
                </div>
              </div>
            </section>
          </div>

          <div className="p-8 bg-zinc-50 border-t border-zinc-200 flex justify-end items-center gap-6">
            {status && (
              <span className={`text-sm font-bold ${status.includes('Error') ? 'text-red-500' : 'text-emerald-600'}`}>
                {status}
              </span>
            )}
            <button
              onClick={handleSave}
              className="px-10 py-4 bg-emerald-600 text-white font-bold rounded-2xl flex items-center gap-3 shadow-lg hover:bg-emerald-700 transition-all"
            >
              <Save className="w-5 h-5" />
              Simpan Perubahan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
