import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Program', href: '#program' },
  { name: 'Dokumentasi', href: '#dokumentasi' },
  { name: 'Sejarah', href: '#sejarah' },
  { name: 'Donasi', href: '#donasi' },
  { name: 'Kontak', href: '#kontak' },
  { name: 'Admin', href: '/admin' },
];

import { useCMSContext } from '@/src/lib/CMSContext';

export default function Navbar() {
  const { content } = useCMSContext();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const mosqueName = content?.mosqueName || "AL-HUDA";
  const nameParts = mosqueName.split(' ');
  const mainName = nameParts[0] + (nameParts[1] ? ' ' + nameParts[1] : '');
  const subName = nameParts.slice(2).join(' ');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4',
        isScrolled ? 'py-3' : 'py-6'
      )}
    >
      <div
        className={cn(
          'max-w-7xl mx-auto rounded-full transition-all duration-500 flex items-center justify-between px-6 py-2',
          isScrolled ? 'glass-emerald shadow-2xl' : 'bg-transparent'
        )}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-4 group">
          <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center border border-emerald-400/30 shadow-lg group-hover:scale-110 transition-transform duration-300">
            <span className="text-2xl">🕌</span>
          </div>
          <div className="flex flex-col">
            <span className={cn(
              "font-display font-bold leading-none tracking-tight text-lg uppercase",
              isScrolled ? "text-zinc-900" : "text-zinc-900"
            )}>{mainName}</span>
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-emerald-700">{subName}</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (link.href.startsWith('/')) {
                  e.preventDefault();
                  window.history.pushState({}, '', link.href);
                  window.dispatchEvent(new PopStateEvent('popstate'));
                }
              }}
              className={cn(
                "text-sm font-medium transition-all duration-300 hover:text-emerald-600 relative group",
                isScrolled ? "text-zinc-700" : "text-zinc-700"
              )}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#donasi"
            className="flex items-center gap-2 px-6 py-2.5 bg-emerald-600 text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-emerald-700 transition-all duration-300 shadow-lg border border-emerald-400"
          >
            Donasi Sekarang
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="text-zinc-900" />
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-white mt-4 rounded-3xl shadow-2xl border border-emerald-100"
      >
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                setIsMobileMenuOpen(false);
                if (link.href.startsWith('/')) {
                  e.preventDefault();
                  window.history.pushState({}, '', link.href);
                  window.dispatchEvent(new PopStateEvent('popstate'));
                }
              }}
              className="text-lg font-medium text-zinc-900 hover:text-emerald-600 px-4 py-2 hover:bg-emerald-50 rounded-xl transition-all"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#donasi"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 w-full py-4 bg-emerald-600 text-white rounded-2xl font-bold"
          >
            <Heart className="w-5 h-5 text-white fill-current" />
            Donasi Sekarang
          </a>
        </div>
      </motion.div>
    </nav>
  );
}
