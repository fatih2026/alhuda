import { 
  Instagram, 
  Twitter, 
  Youtube, 
  MapPin, 
  Phone, 
  Mail, 
  Send,
  Heart,
  Facebook
} from 'lucide-react';

import { useCMSContext } from '@/src/lib/CMSContext';

export default function Footer() {
  const { content } = useCMSContext();
  const mosqueName = content?.mosqueName || "AL-HUDA";
  const nameParts = mosqueName.split(' ');
  const mainName = nameParts[0] + (nameParts[1] ? ' ' + nameParts[1] : '');
  const subName = nameParts.slice(2).join(' ');

  return (
    <footer className="bg-emerald-50/50 pt-32 pb-12 relative overflow-hidden border-t border-emerald-100">
      <div className="absolute inset-0 islamic-pattern opacity-[0.02]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-20 mb-24">
          <div className="lg:col-span-5">
             <div className="flex items-center gap-4 mb-8">
               <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center border border-emerald-400 shadow-lg">
                 <span className="text-2xl">🕌</span>
               </div>
               <div className="flex flex-col">
                 <span className="font-display font-bold leading-none tracking-tight text-zinc-900 text-lg uppercase">{mainName}</span>
                 <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-emerald-700">{subName}</span>
               </div>
             </div>
             <p className="text-zinc-500 text-sm leading-relaxed mb-10 max-w-sm">
                Menjadi pusat peradaban dan keteduhan umat di lingkungan Kompleks Timah, 
                melayani dengan hati berlandaskan Al-Qur'an dan Sunnah.
             </p>
             <div className="flex gap-4">
               {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                 <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-emerald-600 hover:text-white hover:bg-emerald-600 transition-all border border-emerald-100 shadow-sm">
                   <Icon className="w-5 h-5 focus:outline-none" />
                 </a>
               ))}
             </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
               <h4 className="text-emerald-800 font-bold mb-8 uppercase tracking-widest text-[10px] opacity-60">Navigasi</h4>
               <ul className="space-y-4">
                 {['Home', 'Program', 'Sejarah', 'Donasi', 'Kontak'].map((item) => (
                   <li key={item}>
                     <a href="#" className="text-zinc-500 hover:text-emerald-600 text-sm transition-colors group flex items-center gap-2">
                       <span className="w-1 h-1 rounded-full bg-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                       {item}
                     </a>
                   </li>
                 ))}
               </ul>
            </div>

            <div>
               <h4 className="text-emerald-800 font-bold mb-8 uppercase tracking-widest text-[10px] opacity-60">Alamat</h4>
               <p className="text-zinc-500 text-sm leading-relaxed max-w-[15rem]">
                  Komplek Timah Kelapa Dua, Jl. Tugu Raya, Kec. Cimanggis, Depok, 16951
               </p>
            </div>

            <div className="col-span-2 md:col-span-1">
               <h4 className="text-emerald-800 font-bold mb-8 uppercase tracking-widest text-[10px] opacity-60">Newsletter</h4>
               <div className="relative">
                 <input 
                   type="email" 
                   placeholder="Email aktif..."
                   className="w-full bg-white border border-emerald-100 rounded-2xl py-4 px-6 text-zinc-900 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/30 transition-all placeholder:text-zinc-300"
                 />
                 <button className="absolute right-2 top-2 bottom-2 aspect-square bg-emerald-600 rounded-xl flex items-center justify-center hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-100">
                   <Send className="w-4 h-4 text-white" />
                 </button>
               </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-emerald-100 flex flex-col md:flex-row items-center justify-between gap-8 text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">
           <p>© 2026 MASJID AL-HUDA KOMPLEKS TIMAH.</p>
           <div className="flex items-center gap-6">
              <a href="/admin" className="hover:text-emerald-600 transition-colors">Admin</a>
              <a href="#" className="hover:text-emerald-600 transition-colors">Privacy</a>
              <a href="#" className="hover:text-emerald-600 transition-colors">Terms</a>
           </div>
        </div>
      </div>
    </footer>
  );
}
