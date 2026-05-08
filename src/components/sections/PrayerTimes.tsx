import { motion } from 'motion/react';
import { Clock, Bell, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/src/lib/utils';

const prayerTimes = [
  { name: 'Imsak', time: '04:25' },
  { name: 'Subuh', time: '04:35' },
  { name: 'Terbit', time: '05:52' },
  { name: 'Dzuhur', time: '11:53' },
  { name: 'Ashar', time: '15:15' },
  { name: 'Maghrib', time: '17:51' },
  { name: 'Isya', time: '19:02' },
];

export default function PrayerTimes() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden bg-emerald-primary">
      <div className="absolute inset-0 islamic-pattern opacity-[0.03]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Header info */}
          <div className="lg:col-span-12 mb-12 flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-emerald-700 font-bold tracking-[0.3em] text-xs uppercase mb-6"
              >
                <div className="w-12 h-[1px] bg-emerald-600" />
                Prayer Times
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 mb-6 leading-tight">
                Waktu Ibadah <br />
                <span className="text-gradient">Hari Ini</span>
              </h2>
            </div>
            
            <div className="flex items-center gap-6 p-6 rounded-3xl glass-emerald backdrop-blur-2xl border border-emerald-100">
              <div className="w-16 h-16 rounded-2xl bg-emerald-600 flex items-center justify-center shadow-lg">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">Waktu Sekarang</span>
                <p className="text-3xl font-display font-bold text-zinc-900 leading-none mt-1">
                  {time.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                </p>
              </div>
            </div>
          </div>

          {/* Times Grid */}
          <div className="lg:col-span-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {prayerTimes.map((prayer, i) => {
              const isNext = prayer.name === 'Maghrib'; 
              return (
                <motion.div
                  key={prayer.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={cn(
                    "relative group overflow-hidden rounded-[2.5rem] p-8 flex flex-col items-center justify-center gap-4 transition-all duration-500 shadow-sm",
                    isNext 
                      ? "bg-emerald-600 text-white scale-105 z-10 shadow-xl shadow-emerald-200" 
                      : "bg-emerald-50/50 hover:bg-emerald-100/50 border border-emerald-100"
                  )}
                >
                  <span className={cn(
                    "text-[10px] font-bold tracking-[0.2em] uppercase",
                    isNext ? "text-emerald-100" : "text-zinc-400"
                  )}>
                    {prayer.name}
                  </span>
                  <span className={cn(
                    "text-3xl font-display font-bold tracking-tight",
                    isNext ? "text-white" : "text-zinc-800"
                  )}>{prayer.time}</span>
                  {isNext && (
                    <div className="flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full">
                       <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                       <span className="text-[10px] font-bold text-white uppercase tracking-widest">Next</span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
