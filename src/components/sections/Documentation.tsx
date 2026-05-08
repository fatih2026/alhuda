import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, ExternalLink, Play } from 'lucide-react';

const gallery = [
  {
    id: 1,
    title: 'Kajian Subuh Berjamaah',
    category: 'Kajian',
    image: '/images/regenerated_image_1778220366150.jpg',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 2,
    title: 'Penyaluran Paket Zakat',
    category: 'Sosial',
    image: '/images/regenerated_image_1778221023421.jpg',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 3,
    title: 'Ibadah Tarawih Khidmat',
    category: 'Ramadhan',
    image: '/images/regenerated_image_1778221024762.webp',
    span: 'md:col-span-1 md:row-span-2',
  },
  {
    id: 4,
    title: 'Bakti Bersih Lingkungan',
    category: 'Sosial',
    image: '/images/regenerated_image_1778221026139.png',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 5,
    title: 'Pelaksanaan Idul Qurban',
    category: 'Qurban',
    image: '/images/regenerated_image_1778221030078.png',
    span: 'md:col-span-2 md:row-span-1',
  },
  {
    id: 6,
    title: 'Tahsin & Quranic Class',
    category: 'Kajian',
    image: '/images/regenerated_image_1778221033587.png',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 7,
    title: 'Layanan Kesehatan Gratis',
    category: 'Sosial',
    image: '/images/regenerated_image_1778221036855.png',
    span: 'md:col-span-1 md:row-span-1',
  },
];

const categories = ['Semua', 'Kajian', 'Sosial', 'Ramadhan', 'Qurban'];

export default function Documentation() {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filteredGallery = activeCategory === 'Semua' 
    ? gallery 
    : gallery.filter(item => item.category === activeCategory);

  return (
    <section id="dokumentasi" className="py-32 bg-emerald-primary overflow-hidden">
      <div className="absolute inset-0 islamic-pattern opacity-[0.02]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-emerald-700 font-bold tracking-[0.3em] text-xs uppercase mb-6"
            >
              <div className="w-12 h-[1px] bg-emerald-600" />
              Moments
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 leading-tight">
              Dokumentasi <span className="text-gradient">Kegiatan</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-2xl text-[10px] font-bold tracking-widest uppercase transition-all ${
                  activeCategory === cat 
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-100 border border-emerald-500' 
                    : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:auto-rows-[200px]"
        >
          <AnimatePresence mode='popLayout'>
            {filteredGallery.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`group relative overflow-hidden rounded-[2.5rem] min-h-[300px] md:min-h-0 ${item.span}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-white via-white/80 to-transparent transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                   <span className="text-emerald-700 text-[10px] font-bold tracking-widest uppercase mb-2 block">{item.category}</span>
                   <h4 className="text-zinc-900 text-lg font-display font-bold flex items-center justify-between">
                     {item.title}
                     <div className="w-10 h-10 rounded-full bg-emerald-600 shadow-lg flex items-center justify-center group-hover:bg-emerald-700 transition-colors">
                       <ExternalLink className="w-4 h-4 text-white" />
                     </div>
                   </h4>
                </div>
                <div className="absolute top-6 right-6 p-3 rounded-2xl bg-white/80 backdrop-blur-md shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <Camera className="w-4 h-4 text-emerald-600" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-24 flex flex-col items-center">
           <div className="w-full max-w-4xl aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white shadow-emerald-200/20">
             <iframe 
               className="w-full h-full"
               src="https://www.youtube.com/embed/cSDOxDNvzhs" 
               title="Masjid Al Huda Komplek Timah, Depok" 
               frameBorder="0" 
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
               referrerPolicy="strict-origin-when-cross-origin" 
               allowFullScreen
             ></iframe>
           </div>
           <motion.div 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="mt-8 flex items-center gap-4 text-emerald-800 font-bold"
           >
              <div className="w-8 h-[1px] bg-emerald-600/30" />
              <span className="text-[10px] uppercase tracking-[0.4em]">Video Profil Masjid Al-Huda</span>
              <div className="w-8 h-[1px] bg-emerald-600/30" />
           </motion.div>
        </div>
      </div>
    </section>
  );
}
