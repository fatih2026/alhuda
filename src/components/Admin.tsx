import React, { useState } from 'react';
import { useCMSContext } from '../lib/CMSContext';
import { Save, Lock, Layout, Type, AlignLeft, BarChart3, Briefcase, History, PhoneCall, Plus, Trash2, Camera } from 'lucide-react';

export default function Admin() {
  const { content, updateContent } = useCMSContext();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [localContent, setLocalContent] = useState<any>(null);
  const [status, setStatus] = useState('');
  const [activeTab, setActiveTab] = useState('general');

  // Sync local content once loaded
  React.useEffect(() => {
    if (content && !localContent) {
      setLocalContent(content);
    }
  }, [content, localContent]);

  if (!localContent) return <div className="p-10 font-sans">Loading CMS...</div>;

  const handleSave = async () => {
    try {
      setStatus('Saving...');
      await updateContent(localContent, username, password);
      setStatus('Success!');
      setTimeout(() => setStatus(''), 3000);
    } catch (err: any) {
      setStatus('Error: ' + err.message);
    }
  };

  const addItem = (section: string, template: any) => {
    const newData = { ...localContent };
    newData[section] = [...(newData[section] || []), template];
    setLocalContent(newData);
  };

  const removeItem = (section: string, index: number) => {
    const newData = { ...localContent };
    newData[section] = newData[section].filter((_: any, i: number) => i !== index);
    setLocalContent(newData);
  };

  const updateItem = (section: string, index: number, field: string, value: any) => {
    const newData = { ...localContent };
    newData[section][index][field] = value;
    setLocalContent(newData);
  };

  const tabs = [
    { id: 'general', label: 'General', icon: Layout },
    { id: 'hero', label: 'Hero Section', icon: Type },
    { id: 'stats', label: 'Stats Bar', icon: BarChart3 },
    { id: 'programs', label: 'Programs', icon: Briefcase },
    { id: 'gallery', label: 'Gallery', icon: Camera },
    { id: 'history', label: 'Sejarah', icon: History },
    { id: 'contact', label: 'Kontak', icon: PhoneCall },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 p-6 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-3xl font-bold text-zinc-900 border-b-4 border-emerald-500 inline-block">Admin Panel</h1>
            <p className="text-zinc-500 mt-2">Custom seluruh konten landing page secara real-time.</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="/" className="px-6 py-3 bg-zinc-200 text-zinc-700 font-bold rounded-xl hover:bg-zinc-300 transition-all">Situs Utama</a>
            <button
              onClick={handleSave}
              className="px-8 py-3 bg-emerald-600 text-white font-bold rounded-xl flex items-center gap-3 shadow-lg shadow-emerald-100 hover:bg-emerald-700 transition-all"
            >
              <Save className="w-5 h-5" />
              Simpan Perubahan
            </button>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Nav */}
          <div className="lg:w-64 space-y-2">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all text-left ${
                  activeTab === tab.id 
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-100' 
                    : 'bg-white text-zinc-500 hover:bg-emerald-50 hover:text-emerald-600'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
            <div className="mt-8 p-6 bg-zinc-900 rounded-3xl text-white">
              <div className="flex items-center gap-2 mb-4">
                <Lock className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Security Access</span>
              </div>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-sm outline-none focus:border-emerald-500"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-sm outline-none focus:border-emerald-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-white rounded-[2.5rem] shadow-xl border border-zinc-100 overflow-hidden">
            <div className="p-8 md:p-12">
              {activeTab === 'general' && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h2 className="text-2xl font-bold mb-8">Informasi Dasar</h2>
                  <div className="space-y-4">
                    <label className="block text-xs font-bold uppercase text-zinc-400">Nama Masjid (Header/Footer)</label>
                    <input
                      type="text"
                      className="admin-input"
                      value={localContent.mosqueName}
                      onChange={(e) => setLocalContent({ ...localContent, mosqueName: e.target.value })}
                    />
                  </div>
                </div>
              )}

              {activeTab === 'hero' && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h2 className="text-2xl font-bold mb-8">Hero Section (Beranda)</h2>
                  <div className="grid gap-6">
                    <div>
                      <label className="admin-label">Subtitle (Teks Kecil Atas)</label>
                      <input
                        type="text"
                        className="admin-input"
                        value={localContent.hero.subtitle}
                        onChange={(e) => setLocalContent({ ...localContent, hero: { ...localContent.hero, subtitle: e.target.value } })}
                      />
                    </div>
                    <div>
                      <label className="admin-label">Main Title (Gunakan koma untuk baris baru)</label>
                      <input
                        type="text"
                        className="admin-input"
                        value={localContent.hero.title}
                        onChange={(e) => setLocalContent({ ...localContent, hero: { ...localContent.hero, title: e.target.value } })}
                      />
                    </div>
                    <div>
                      <label className="admin-label">Description (Paragraf)</label>
                      <textarea
                        rows={4}
                        className="admin-input resize-none"
                        value={localContent.hero.description}
                        onChange={(e) => setLocalContent({ ...localContent, hero: { ...localContent.hero, description: e.target.value } })}
                      />
                    </div>
                    <div>
                      <label className="admin-label">Teks Tombol Utama</label>
                      <input
                        type="text"
                        className="admin-input"
                        value={localContent.hero.buttonText}
                        onChange={(e) => setLocalContent({ ...localContent, hero: { ...localContent.hero, buttonText: e.target.value } })}
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'stats' && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold">Statistik Counter</h2>
                    <button onClick={() => addItem('stats', { label: 'New Stat', value: '0' })} className="admin-btn-add">
                      <Plus className="w-4 h-4" /> Tambah Stat
                    </button>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {localContent.stats.map((stat: any, idx: number) => (
                      <div key={idx} className="p-6 bg-zinc-50 rounded-3xl border border-zinc-100 relative group">
                        <button onClick={() => removeItem('stats', idx)} className="admin-btn-remove opacity-0 group-hover:opacity-100">
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="admin-label">Value (e.g. 1.2k+)</label>
                            <input
                              type="text"
                              className="admin-input-small"
                              value={stat.value}
                              onChange={(e) => updateItem('stats', idx, 'value', e.target.value)}
                            />
                          </div>
                          <div>
                            <label className="admin-label">Label</label>
                            <input
                              type="text"
                              className="admin-input-small"
                              value={stat.label}
                              onChange={(e) => updateItem('stats', idx, 'label', e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'programs' && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold">Daftar Program & Layanan</h2>
                    <button onClick={() => addItem('programs', { title: 'New Program', desc: '', icon: 'BookOpen', color: 'from-emerald-500 to-emerald-700' })} className="admin-btn-add">
                      <Plus className="w-4 h-4" /> Tambah Program
                    </button>
                  </div>
                  <div className="space-y-6">
                    {localContent.programs.map((p: any, idx: number) => (
                      <div key={idx} className="p-8 bg-zinc-50 rounded-[2rem] border border-zinc-100 relative group">
                        <button onClick={() => removeItem('programs', idx)} className="admin-btn-remove opacity-0 group-hover:opacity-100">
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <div>
                              <label className="admin-label">Judul Program</label>
                              <input type="text" className="admin-input-small" value={p.title} onChange={(e) => updateItem('programs', idx, 'title', e.target.value)} />
                            </div>
                            <div>
                              <label className="admin-label">Ikon (Lucide Name)</label>
                              <input type="text" className="admin-input-small" value={p.icon} onChange={(e) => updateItem('programs', idx, 'icon', e.target.value)} />
                            </div>
                          </div>
                          <div>
                            <label className="admin-label">Deskripsi Singkat</label>
                            <textarea rows={3} className="admin-input-small h-[94px]" value={p.desc} onChange={(e) => updateItem('programs', idx, 'desc', e.target.value)} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'gallery' && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold">Galeri Foto Kegiatan</h2>
                    <button onClick={() => addItem('gallery', { id: Date.now(), title: 'New Photo', category: 'Kajian', image: 'https://images.unsplash.com/photo-1590076212dee-71ec44415893', span: 'md:col-span-1 md:row-span-1' })} className="admin-btn-add">
                      <Plus className="w-4 h-4" /> Tambah Foto
                    </button>
                  </div>
                  <div className="space-y-6">
                    {localContent.gallery.map((item: any, idx: number) => (
                      <div key={idx} className="p-8 bg-zinc-50 rounded-[2rem] border border-zinc-100 relative group">
                        <button onClick={() => removeItem('gallery', idx)} className="admin-btn-remove opacity-0 group-hover:opacity-100">
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <div>
                              <label className="admin-label">Judul Foto</label>
                              <input type="text" className="admin-input-small" value={item.title} onChange={(e) => updateItem('gallery', idx, 'title', e.target.value)} />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label className="admin-label">Kategori</label>
                                <input type="text" className="admin-input-small" value={item.category} onChange={(e) => updateItem('gallery', idx, 'category', e.target.value)} />
                              </div>
                              <div>
                                <label className="admin-label">Layout Span (Tailwind)</label>
                                <input type="text" className="admin-input-small" value={item.span} onChange={(e) => updateItem('gallery', idx, 'span', e.target.value)} />
                              </div>
                            </div>
                          </div>
                          <div>
                            <label className="admin-label">URL Gambar</label>
                            <input type="text" className="admin-input-small mb-4" value={item.image} onChange={(e) => updateItem('gallery', idx, 'image', e.target.value)} />
                            <div className="w-full h-24 rounded-xl overflow-hidden bg-zinc-200">
                              <img src={item.image} className="w-full h-full object-cover" alt="Preview" />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'history' && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold">Timeline Sejarah</h2>
                    <button onClick={() => addItem('history', { year: '2025', title: '', desc: '' })} className="admin-btn-add">
                      <Plus className="w-4 h-4" /> Tambah Jejak
                    </button>
                  </div>
                  <div className="space-y-6">
                    {localContent.history.map((h: any, idx: number) => (
                      <div key={idx} className="p-8 bg-zinc-50 rounded-[2rem] border border-zinc-100 relative group">
                        <button onClick={() => removeItem('history', idx)} className="admin-btn-remove opacity-0 group-hover:opacity-100">
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <div className="grid grid-cols-4 gap-6">
                          <div className="col-span-1">
                            <label className="admin-label">Tahun</label>
                            <input type="text" className="admin-input-small" value={h.year} onChange={(e) => updateItem('history', idx, 'year', e.target.value)} />
                          </div>
                          <div className="col-span-3">
                            <label className="admin-label">Judul Peristiwa</label>
                            <input type="text" className="admin-input-small mb-4" value={h.title} onChange={(e) => updateItem('history', idx, 'title', e.target.value)} />
                            <label className="admin-label">Keterangan</label>
                            <textarea rows={2} className="admin-input-small" value={h.desc} onChange={(e) => updateItem('history', idx, 'desc', e.target.value)} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'contact' && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h2 className="text-2xl font-bold mb-8">Kontak & Lokasi</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="admin-label">Judul Section</label>
                      <input type="text" className="admin-input" value={localContent.contact.title} onChange={(e) => setLocalContent({ ...localContent, contact: { ...localContent.contact, title: e.target.value } })} />
                    </div>
                    <div>
                      <label className="admin-label">Deskripsi</label>
                      <textarea rows={3} className="admin-input" value={localContent.contact.description} onChange={(e) => setLocalContent({ ...localContent, contact: { ...localContent.contact, description: e.target.value } })} />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="admin-label">Alamat Lengkap</label>
                        <input type="text" className="admin-input" value={localContent.contact.address} onChange={(e) => setLocalContent({ ...localContent, contact: { ...localContent.contact, address: e.target.value } })} />
                      </div>
                      <div className="space-y-6">
                        <div>
                          <label className="admin-label">Telepon</label>
                          <input type="text" className="admin-input" value={localContent.contact.phone} onChange={(e) => setLocalContent({ ...localContent, contact: { ...localContent.contact, phone: e.target.value } })} />
                        </div>
                        <div>
                          <label className="admin-label">Email</label>
                          <input type="email" className="admin-input" value={localContent.contact.email} onChange={(e) => setLocalContent({ ...localContent, contact: { ...localContent.contact, email: e.target.value } })} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-8 bg-zinc-50 border-t border-zinc-100 flex justify-end items-center gap-6">
              {status && (
                <span className={`text-sm font-bold ${status.includes('Error') ? 'text-red-500' : 'text-emerald-600'}`}>
                  {status}
                </span>
              )}
              <button
                onClick={handleSave}
                className="px-10 py-4 bg-emerald-600 text-white font-bold rounded-2xl flex items-center gap-3 shadow-xl hover:bg-emerald-700 transition-all"
              >
                <Save className="w-5 h-5" />
                Simpan Semua Perubahan
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .admin-input {
          width: 100%;
          padding: 1rem 1.5rem;
          background: #fafafa;
          border: 1px solid #e5e7eb;
          border-radius: 1rem;
          outline: none;
          transition: all 0.3s;
          font-size: 0.875rem;
        }
        .admin-input:focus {
          border-color: #059669;
          background: white;
          box-shadow: 0 4px 12px rgba(5, 150, 105, 0.05);
        }
        .admin-label {
          display: block;
          font-size: 0.65rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #9ca3af;
          margin-bottom: 0.5rem;
          margin-left: 0.25rem;
        }
        .admin-input-small {
          width: 100%;
          padding: 0.75rem 1rem;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 0.75rem;
          outline: none;
          transition: all 0.3s;
          font-size: 0.875rem;
        }
        .admin-input-small:focus {
          border-color: #059669;
        }
        .admin-btn-add {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: #ecfdf5;
          color: #059669;
          font-weight: 700;
          font-size: 0.75rem;
          text-transform: uppercase;
          border-radius: 0.75rem;
          transition: all 0.3s;
        }
        .admin-btn-add:hover {
          background: #d1fae5;
        }
        .admin-btn-remove {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 2rem;
          height: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fee2e2;
          color: #ef4444;
          border-radius: 0.5rem;
          transition: all 0.3s;
        }
        .admin-btn-remove:hover {
          background: #fecaca;
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}
