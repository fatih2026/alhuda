import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="kontak" className="py-32 bg-emerald-primary relative overflow-hidden">
      <div className="absolute inset-0 islamic-pattern opacity-[0.03]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="glass-emerald shadow-xl rounded-[4rem] overflow-hidden border border-emerald-100">
          <div className="grid lg:grid-cols-2">
            {/* Contact Info */}
            <div className="p-12 lg:p-20 bg-emerald-50/30 relative">
               <div className="absolute inset-0 bg-emerald-500/5 blur-3xl rounded-full" />
               
               <div className="relative z-10">
                 <motion.div
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   className="flex items-center gap-3 text-emerald-700 font-bold tracking-[0.3em] text-xs uppercase mb-8"
                 >
                   <div className="w-12 h-[1px] bg-emerald-600" />
                   Connect
                 </motion.div>
                 <h2 className="text-4xl md:text-6xl font-display font-bold text-zinc-900 mb-8">Pintu Kami <br /><span className="text-gradient">Selalu Terbuka.</span></h2>
                 <p className="text-zinc-500 mb-16 max-w-md leading-relaxed text-sm">
                   Punya pertanyaan seputar program masjid, layanan sosial, atau ingin memberikan saran? 
                   Silakan hubungi kami melalui formulir atau kontak di bawah ini.
                 </p>

                 <div className="space-y-10">
                   {[
                     { icon: MapPin, title: 'Alamat Masjid', text: 'Komplek Timah Kelapa Dua, Kec. Cimanggis, Kota Depok, Jawa Barat 16951' },
                     { icon: Phone, title: 'Layanan Telepon', text: '0812-3456-7890 (Operasional)' },
                     { icon: Mail, title: 'Email Resmi', text: 'info@masjidalhuda.id' }
                   ].map((item, i) => (
                     <div key={i} className="flex items-start gap-8 group">
                       <div className="w-14 h-14 rounded-2xl bg-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 shadow-lg shadow-emerald-100 transition-all duration-500">
                         <item.icon className="w-6 h-6 text-white" />
                       </div>
                       <div>
                         <h4 className="font-bold text-emerald-800 mb-1 uppercase tracking-widest text-[10px] opacity-60">{item.title}</h4>
                         <p className="text-zinc-600 text-sm leading-relaxed">{item.text}</p>
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
            </div>

            {/* Contact Form */}
            <div className="p-12 lg:p-20 bg-white relative">
               <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-emerald-50/50 to-transparent pointer-events-none" />
               <form className="space-y-8 relative z-10">
                 <div className="grid md:grid-cols-2 gap-8">
                   <div className="space-y-3">
                     <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest ml-1">Nama Lengkap</label>
                     <input 
                      type="text" 
                      placeholder="Nama Anda"
                      className="w-full bg-emerald-50/50 border border-emerald-100 rounded-2xl py-4 px-6 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all placeholder:text-zinc-400 text-sm"
                     />
                   </div>
                   <div className="space-y-3">
                     <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest ml-1">Email</label>
                     <input 
                      type="email" 
                      placeholder="email@contoh.com"
                      className="w-full bg-emerald-50/50 border border-emerald-100 rounded-2xl py-4 px-6 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all placeholder:text-zinc-400 text-sm"
                     />
                   </div>
                 </div>

                 <div className="space-y-3">
                   <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest ml-1">Subjek</label>
                   <select className="w-full bg-emerald-50/50 border border-emerald-100 rounded-2xl py-4 px-6 text-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all appearance-none text-sm">
                     <option>Tanya Program Masjid</option>
                     <option>Donasi & Infaq</option>
                     <option>Layanan Sosial</option>
                     <option>Saran & Kritik</option>
                   </select>
                 </div>

                 <div className="space-y-3">
                   <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest ml-1">Pesan</label>
                   <textarea 
                    rows={5}
                    placeholder="Tulis pesan Anda..."
                    className="w-full bg-emerald-50/50 border border-emerald-100 rounded-2xl py-4 px-6 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all resize-none placeholder:text-zinc-400 text-sm"
                   ></textarea>
                 </div>

                 <button className="w-full py-5 bg-emerald-600 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-100 border border-emerald-500 text-xs uppercase tracking-widest group">
                   Kirim Pesan Sekarang
                   <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                 </button>
               </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
