import { motion } from 'motion/react';
import { 
  BookOpen, 
  Users, 
  Heart, 
  Baby, 
  Moon, 
  Zap, 
  Clock, 
  Calendar,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

const programs = [
  {
    title: 'Majelis Ilmu',
    desc: 'Menyelami kedalaman ajaran Islam melalui kajian kitab dan diskusi tematik yang membangun nalar kritis serta akhlakul karimah.',
    icon: BookOpen,
    color: 'from-emerald-500 to-emerald-700',
  },
  {
    title: 'Generasi Qur\'ani',
    desc: 'Membimbing ananda untuk mencintai Al-Qur\'an sejak dini melalui metode Tahsin dan Tahfidz yang interaktif dan menyenangkan.',
    icon: Baby,
    color: 'from-blue-500 to-blue-700',
  },
  {
    title: 'Muda-Mudi Al-Huda',
    desc: 'Ruang kolaborasi bagi pemuda muslim untuk berkarya, berorganisasi, dan menebar manfaat dalam semangat ukhuwah islamiya.',
    icon: Zap,
    color: 'from-orange-500 to-orange-700',
  },
  {
    title: 'Khidmat Sosial',
    desc: 'Wujud kepedulian nyata bagi sesama melalui penyaluran bantuan rutin yang transparan dan tepat sasaran bagi mereka yang membutuhkan.',
    icon: Heart,
    color: 'from-rose-500 to-rose-700',
  },
  {
    title: 'Idul Qurban',
    desc: 'Memfasilitasi ibadah kurban mulai dari penyediaan hewan, penyembelihan yang syar\'i, hingga distribusi daging yang amanah bagi yang berhak.',
    icon: Moon,
    color: 'from-amber-600 to-amber-800',
  },
  {
    title: 'Sentra Ummah',
    desc: 'Layanan holistik mulai dari bimbingan ibadah hingga bantuan pemulasaran jenazah sebagai bentuk pengabdian penuh untuk jamaah.',
    icon: Users,
    color: 'from-zinc-500 to-zinc-700',
  },
];

export default function Services() {
  return (
    <section id="program" className="py-32 relative bg-emerald-primary overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-500/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-[1px] w-12 bg-emerald-600"></span>
              <span className="text-emerald-700 font-bold tracking-[0.3em] text-xs uppercase">Program Layanan</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-zinc-900 leading-tight">
              Aktifitas & <span className="text-gradient">Pelayanan</span>
            </h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-zinc-500 md:max-w-sm text-sm leading-relaxed"
          >
            Beragam program kami hadirkan untuk melayani kebutuhan spiritual dan sosial jamaah 
            dalam satu atap ukhuwah islamiya yang modern dan inklusif.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-10 rounded-[3rem] glass-emerald hover:border-emerald-200 transition-all duration-500 flex flex-col h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                <p.icon className="w-24 h-24 text-emerald-900" />
              </div>

              <div className={cn(
                "w-16 h-16 rounded-2xl flex items-center justify-center mb-10 bg-gradient-to-br shadow-lg group-hover:scale-110 transition-transform relative z-10",
                p.color
              )}>
                <p.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-zinc-800 mb-4 group-hover:text-emerald-600 transition-colors relative z-10">
                {p.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-10 flex-grow relative z-10">
                {p.desc}
              </p>
              <div className="flex items-center justify-between pt-8 border-t border-emerald-100 relative z-10">
                <div className="flex items-center gap-3 text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">
                  <Clock className="w-3.5 h-3.5 text-emerald-600" />
                  Rutin Mingguan
                </div>
                <button className="w-10 h-10 rounded-full glass flex items-center justify-center text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all group/btn">
                  <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 rounded-[3rem] p-12 bg-emerald-dark border border-emerald-100 relative overflow-hidden group shadow-sm"
        >
          <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')] grayscale" />
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-emerald-accent/5 rounded-full blur-[100px] group-hover:bg-emerald-accent/10 transition-colors" />
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-emerald-700 font-bold text-xs tracking-widest uppercase mb-4 block">Idul Qurban 1447H</span>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-zinc-900 mb-4">
                Tunaikan Qurban, Raih Keberkahan
              </h3>
              <p className="text-zinc-500 mb-6 leading-relaxed">
                Tersedia layanan tabungan kurban dan penyaluran daging kurban untuk masyarakat di pelosok yang lebih membutuhkan.
              </p>
              <div className="flex items-center gap-6 text-zinc-400 text-sm">
                <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-emerald-600" /> 10 Dzulhijjah, 1447H</span>
                <span className="flex items-center gap-2 font-display font-bold text-lg text-emerald-600 tracking-wider">OPEN REGISTRATION</span>
              </div>
            </div>
            <button className="whitespace-nowrap px-10 py-5 bg-emerald-600 text-white shadow-xl shadow-emerald-200 rounded-2xl font-bold hover:bg-emerald-700 transition-all">
              Jadwal Lengkap
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
