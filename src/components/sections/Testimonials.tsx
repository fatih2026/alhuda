import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    content: "Di Al-Huda, kenyamanan ibadah bukan sekadar janji. Fasilitas yang modern dipadukan dengan kehangatan warganya membuat saya merasa benar-benar pulang.",
    author: "Pak Andi",
    role: "Warga Kompleks Timah",
    avatar: "/src/assets/images/regenerated_image_1778197657619.png"
  },
  {
    content: "Kajian-kajian yang dihadirkan bukan hanya menenangkan hati, tapi juga membuka wawasan baru tentang Islam yang rahmatan lil alamin.",
    author: "Ibu Rahma",
    role: "Jamaah Rutin",
    avatar: "/src/assets/images/regenerated_image_1778197660796.png"
  },
  {
    content: "Transparansi dan kemudahan dalam berdonasi memberikan ketenangan bagi kami. Senang melihat manfaat nyata dari setiap sedekah yang tersalurkan.",
    author: "Bpk. Heru",
    role: "Donatur",
    avatar: "/src/assets/images/regenerated_image_1778197664099.png"
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-emerald-primary overflow-hidden relative">
      <div className="absolute inset-0 islamic-pattern opacity-[0.03]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
           <div className="lg:col-span-4">
              <span className="text-emerald-700 font-bold text-xs tracking-[0.3em] uppercase mb-4 block">Testimoni</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 mb-6">Cerita <span className="text-gradient">Jamaah</span></h2>
              <p className="text-zinc-500 leading-relaxed text-sm">
                Apa yang dirasakan jamaah dan masyarakat tentang pelayanan dan perkembangan Masjid Al-Huda di lingkungan Kompleks Timah.
              </p>
           </div>
           
           <div className="lg:col-span-8 flex flex-col md:flex-row gap-6">
              {testimonials.map((t, i) => (
                 <motion.div
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="flex-1 p-10 rounded-[3rem] bg-emerald-50/50 hover:bg-emerald-50 transition-all duration-500 relative border border-emerald-100 shadow-sm"
                 >
                    <Quote className="w-12 h-12 text-emerald-600/5 absolute top-8 right-8" />
                    <p className="text-zinc-600 italic mb-8 relative z-10 leading-relaxed text-sm">"{t.content}"</p>
                    <div className="flex items-center gap-4 pt-6 border-t border-emerald-100">
                       <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full object-cover border-2 border-emerald-100 shadow-sm" />
                       <div>
                          <h5 className="font-bold text-zinc-900 tracking-tight">{t.author}</h5>
                          <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">{t.role}</p>
                       </div>
                    </div>
                 </motion.div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
}
