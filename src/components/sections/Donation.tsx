import { motion } from 'motion/react';
import { Heart, CreditCard, Copy, CheckCircle2, ShieldCheck, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/src/lib/utils';

export default function Donation() {
  const [copied, setCopied] = useState(false);
  const accountNo = "1234567890";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(accountNo);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="donasi" className="py-32 relative overflow-hidden bg-emerald-primary">
       <div className="absolute inset-0 islamic-pattern opacity-[0.03]" />
       <div className="absolute inset-0 ornament-pattern opacity-[0.02]" />
       
       {/* Ornaments */}
       <div className="absolute -left-20 top-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]" />
       <div className="absolute -right-20 bottom-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px]" />

       <div className="max-w-7xl mx-auto px-6 relative z-10">
         <div className="grid lg:grid-cols-2 gap-20 items-center">
           <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-8"
              >
                <span className="h-[1px] w-12 bg-emerald-600"></span>
                <span className="text-emerald-700 font-bold tracking-[0.2em] text-xs uppercase">Sedekah Jariyah</span>
              </motion.div>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-zinc-900 mb-8 leading-tight">
                Menanam Kebaikan, <br />
                <span className="text-gradient">Menuai Keberkahan.</span>
              </h2>
              <p className="text-lg text-zinc-500 mb-12 leading-relaxed">
                Setiap rupiah yang Anda titipkan adalah benih kebaikan yang akan terus bertumbuh, membantu operasional dakwah, memuliakan para pencari ilmu, dan meringankan beban saudara kita yang membutuhkan.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-12">
                 <div className="p-8 rounded-[2.5rem] glass-emerald">
                    <TrendingUp className="w-8 h-8 text-amber-600 mb-4" />
                    <h4 className="text-zinc-800 font-bold mb-2">Transparansi</h4>
                    <p className="text-zinc-400 text-[10px] uppercase font-bold tracking-widest leading-relaxed">Accountability First</p>
                 </div>
                 <div className="p-8 rounded-[2.5rem] glass-emerald">
                    <ShieldCheck className="w-8 h-8 text-emerald-600 mb-4" />
                    <h4 className="text-zinc-800 font-bold mb-2">Amanah</h4>
                    <p className="text-zinc-400 text-[10px] uppercase font-bold tracking-widest leading-relaxed">Trusted Management</p>
                 </div>
              </div>
           </div>

           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative"
           >
              <div className="glass-emerald shadow-xl rounded-[3rem] p-10 lg:p-12 overflow-hidden relative border border-emerald-100">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full -mr-16 -mt-16 blur-2xl" />
                 
                 <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center">
                       <CreditCard className="w-6 h-6 text-white" />
                    </div>
                    <div>
                       <h3 className="text-xl font-display font-bold text-zinc-900">Transfer Bank</h3>
                       <p className="text-[10px] text-zinc-400 uppercase font-bold tracking-widest">Bank BNI Syariah</p>
                    </div>
                 </div>

                 <div className="space-y-6">
                    <div className="p-8 rounded-3xl bg-white border border-emerald-100 flex flex-col gap-6 group hover:border-emerald-300 transition-colors shadow-sm">
                       <div className="flex justify-between items-center opacity-60">
                          <span className="text-lg font-bold text-emerald-900 tracking-widest uppercase">BNI</span>
                          <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-[0.2em]">Official Account</span>
                       </div>
                       <div>
                          <span className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest mb-2 block">Nomor Rekening</span>
                          <div className="flex items-center justify-between">
                             <p className="text-3xl font-display font-bold text-zinc-900 tracking-wider">{accountNo}</p>
                             <button 
                                onClick={copyToClipboard}
                                className="p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 transition-all group relative"
                             >
                                 {copied ? <CheckCircle2 className="w-5 h-5 text-emerald-600" /> : <Copy className="w-5 h-5 text-zinc-400" />}
                             </button>
                          </div>
                          <p className="text-emerald-600 font-bold text-xs mt-3 uppercase tracking-widest">DKM AL-HUDA KOMPLEKS TIMAH</p>
                       </div>
                    </div>

                    <div className="p-8 rounded-3xl bg-amber-500 text-white flex items-center justify-between group cursor-pointer hover:scale-[1.02] transition-transform shadow-lg shadow-amber-200">
                        <div>
                           <p className="text-[10px] font-bold uppercase tracking-widest mb-1 opacity-80">Scan QRIS</p>
                           <h4 className="text-xl font-bold font-display">Semua Pembayaran Digital</h4>
                        </div>
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                           <ShieldCheck className="w-6 h-6 text-white" />
                        </div>
                    </div>

                    <button className="w-full py-5 bg-emerald-600 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-100 uppercase tracking-widest text-xs">
                       Konfirmasi Donasi
                    </button>
                 </div>
              </div>
           </motion.div>
         </div>
       </div>
    </section>
  );
}
