import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ChevronDown, Users, Calendar, Heart, GraduationCap } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const stats = [
  { label: 'Jamaah Aktif', value: '1.2k+', icon: Users },
  { label: 'Program Mingguan', value: '12+', icon: Calendar },
  { label: 'Kegiatan Sosial', value: '8+', icon: Heart },
  { label: 'Santri TPA', value: '150+', icon: GraduationCap },
];

import { useCMSContext } from '@/src/lib/CMSContext';

export default function Hero() {
  const { content } = useCMSContext();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  const hero = content?.hero || {
    subtitle: "The Modern Islamic Hub",
    title: "Merangkai Ukhuwah, Menjemput Berkah.",
    description: "Lebih dari sekadar tempat ibadah, Masjid Al-Huda hadir sebagai rumah bagi setiap jiwa yang mencari keteduhan, ilmu, dan kehangatan persaudaraan di jantung Kompleks Timah.",
    buttonText: "Jelajahi Program"
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <img
          id="hero-bg-image"
          src="https://images.unsplash.com/photo-1590076212dee-71ec44415893?auto=format&fit=crop&w=1920&q=80"
          alt="Mosque Exterior"
          className="w-full h-full object-cover scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="absolute inset-0 ornament-pattern opacity-[0.03]" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-[1px] w-12 bg-emerald-600"></span>
            <span className="text-emerald-700 font-semibold tracking-widest text-xs uppercase">{hero.subtitle}</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[82px] font-display font-bold text-zinc-900 leading-[1.05] mb-8 tracking-tight">
            {hero.title.split(',')[0]}, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-600">
              {hero.title.split(',')[1]}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-600 max-w-xl mb-12 leading-relaxed">
            {hero.description}
          </p>

          <div className="flex flex-wrap items-center gap-6 mb-20">
            <button className="px-8 py-4 bg-emerald-600 text-white font-bold rounded-2xl flex items-center gap-3 shadow-xl hover:bg-emerald-700 transition-all group">
              {hero.buttonText}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex -space-x-4 items-center">
              <div className="w-12 h-12 rounded-full border-2 border-white bg-emerald-100/80 backdrop-blur-sm" />
              <div className="w-12 h-12 rounded-full border-2 border-white bg-emerald-200/80 backdrop-blur-sm" />
              <div className="w-12 h-12 rounded-full border-2 border-white bg-emerald-300/80 backdrop-blur-sm" />
              <div className="pl-8 flex flex-col justify-center">
                <span className="text-sm font-display font-bold text-zinc-900 tracking-tight">1,250+ Jamaah</span>
                <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest">Aktif Berkontribusi</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-[#00b017] text-[10px] font-bold tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown className="text-[#00b017] w-6 h-6" />
      </motion.div>

      {/* Decorative Ornaments */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-40 left-10 w-64 h-64 bg-gold-accent/10 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}
