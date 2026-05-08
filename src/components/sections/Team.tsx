import { motion } from 'motion/react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const team = [
  { 
    name: 'Dr. H. Ahmad Fauzi, M.A.', 
    role: 'Ketua Umum DKM Al-Huda', 
    image: '/src/assets/images/regenerated_image_1778197611995.png' 
  },
  { 
    name: 'Ir. H. Bambang Subroto', 
    role: 'Sekretaris Umum', 
    image: '/src/assets/images/regenerated_image_1778197608461.png' 
  },
  { 
    name: 'Drs. H. M. Sulaiman', 
    role: 'Bendahara Umum', 
    image: '/src/assets/images/regenerated_image_1778197615096.png' 
  },
  { 
    name: 'Ustadz H. Rizky Mubarok', 
    role: 'Bidang Takmir & Ibadah', 
    image: '/src/assets/images/regenerated_image_1778197653735.png' 
  },
];

export default function Team() {
  return (
    <section className="py-32 bg-emerald-primary overflow-hidden relative">
      <div className="absolute inset-0 islamic-pattern opacity-[0.02]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-12 h-[1px] bg-emerald-600" />
            <span className="text-emerald-700 font-bold text-[10px] tracking-[0.4em] uppercase">Leadership</span>
            <div className="w-12 h-[1px] bg-emerald-600" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 leading-tight">
            Struktur <span className="text-gradient">Pengurus DKM</span>
          </h2>
          <p className="max-w-2xl mx-auto text-zinc-500 mt-6 text-sm leading-relaxed">
            Dedikasi dan khidmat para pengurus dalam mengelola amanah untuk kemaslahatan jamaah dan lingkungan sekitar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden mb-8 glass-emerald border border-emerald-100 shadow-sm">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                   <div className="bg-white p-4 rounded-2xl flex items-center justify-center gap-6 shadow-xl border border-emerald-100">
                      <Instagram className="w-5 h-5 text-emerald-600 hover:text-emerald-800 cursor-pointer transition-colors" />
                      <Twitter className="w-5 h-5 text-emerald-600 hover:text-emerald-800 cursor-pointer transition-colors" />
                      <Linkedin className="w-5 h-5 text-emerald-600 hover:text-emerald-800 cursor-pointer transition-colors" />
                   </div>
                </div>
              </div>
              <h4 className="text-xl font-display font-bold text-zinc-800 group-hover:text-emerald-600 transition-colors text-center">{member.name}</h4>
              <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest text-center mt-2">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
