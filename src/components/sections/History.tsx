import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

const history = [
  { year: '1985', title: 'Awal Perjuangan', desc: 'Peletakan batu pertama Musholla kecil yang menjadi saksi bisu semangat gotong royong warga Kompleks Timah.' },
  { year: '1995', title: 'Tumbuh Bersama', desc: 'Renovasi besar pertama untuk menyambut jamaah yang kian bertambah, ditandai dengan hadirnya kubah hijau yang ikonik.' },
  { year: '2010', title: 'Menjadi Masjid Jami', desc: 'Transformasi dari Musholla menjadi Masjid Jami denga fasilitas yang lebih lengkap untuk melayani umat lebih luas.' },
  { year: '2023', title: 'Era Modernisasi', desc: 'Digitalisasi layanan dan pembaharuan fasilitas demi kenyamanan ibadah di era modern tanpa meninggalkan nilai luhur.' },
];

export default function History() {
  return (
    <section id="sejarah" className="py-32 bg-emerald-primary relative overflow-hidden">
       <div className="absolute inset-0 islamic-pattern opacity-[0.03]" />
       <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
             <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className="flex items-center justify-center gap-3 mb-6"
             >
                <div className="w-12 h-[1px] bg-emerald-600" />
                <span className="text-emerald-700 font-bold text-[10px] tracking-[0.4em] uppercase">The Legacy</span>
                <div className="w-12 h-[1px] bg-emerald-600" />
             </motion.div>
             <h2 className="text-4xl md:text-5xl font-display font-bold text-zinc-900">
               Jejak Sejarah <span className="text-gradient">Al-Huda</span>
             </h2>
          </div>

          <div className="relative">
             {/* Line */}
             <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-emerald-100 hidden md:block" />
             
             <div className="space-y-12 md:space-y-32">
                {history.map((item, i) => (
                   <motion.div
                     key={item.year}
                     initial={{ opacity: 0, y: 50 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className={cn(
                       "relative flex flex-col md:flex-row items-center gap-8",
                       i % 2 === 0 ? "md:flex-row-reverse" : ""
                     )}
                   >
                      <div className="flex-1 md:text-right hidden md:block">
                         {i % 2 === 0 ? (
                           <div className="pr-16 group">
                              <h3 className="text-3xl font-display font-bold text-zinc-900 mb-4 group-hover:text-emerald-500 transition-colors">{item.title}</h3>
                              <p className="text-zinc-500 text-sm leading-relaxed max-w-sm ml-auto">{item.desc}</p>
                           </div>
                         ) : null}
                      </div>

                      <div className="w-20 h-20 rounded-[1.5rem] glass-emerald text-emerald-600 flex items-center justify-center font-display font-bold text-2xl shadow-lg relative z-10 shrink-0 border border-emerald-100">
                         {item.year}
                      </div>

                      <div className="flex-1">
                         {i % 2 !== 0 ? (
                           <div className="pl-16 group">
                              <h3 className="text-3xl font-display font-bold text-zinc-900 mb-4 group-hover:text-emerald-500 transition-colors">{item.title}</h3>
                              <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">{item.desc}</p>
                           </div>
                         ) : (
                           <div className="md:hidden">
                              <h3 className="text-3xl font-display font-bold text-zinc-900 mb-2">{item.title}</h3>
                              <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                           </div>
                         )}
                      </div>
                   </motion.div>
                ))}
             </div>
          </div>
       </div>
    </section>
  );
}
