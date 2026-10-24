import React, { useState } from 'react';
import { Menu, X, Sparkles, ChevronRight, Download, ShieldCheck, Heart } from 'lucide-react';

interface NavbarProps {
  onOpenDownload: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDownload, onOpenContact }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Celestial Wings Alignment', href: '#hero-wings' },
    { label: '3D Phone Tracker', href: '#phone-section' },
    { label: 'About Us Sphere', href: '#about-orb' },
    { label: 'Your Data is Private', href: '#privacy-section' },
    { label: 'Feature Stops & Cycles', href: '#feature-stops' },
    { label: 'Angelic Wings Sanctuary', href: '#wings-sanctuary' },
    { label: 'Download QR & Mobile App', href: '#download-section' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-6 py-5 flex items-center justify-between pointer-events-none">
        {/* Brand Zone - Left Logo Pill */}
        <div className="pointer-events-auto">
          <a
            href="#hero-wings"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/40 border border-white/15 backdrop-blur-md hover:border-white/30 transition-all group shadow-lg shadow-black/40"
          >
            <span className="font-serif text-2xl tracking-tight text-[#F6F4EB] group-hover:text-white">
              NaviCare
            </span>
          </a>
        </div>

        {/* Right Zone: Menu Icon + Download App Pill */}
        <div className="flex items-center gap-3 pointer-events-auto">
          {/* Hamburger Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            className="w-10 h-10 rounded-full bg-black/40 border border-white/15 backdrop-blur-md flex items-center justify-center text-[#F6F4EB] hover:text-white hover:border-white/30 transition-all cursor-pointer"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          {/* Download App Button */}
          <button
            onClick={onOpenDownload}
            className="px-5 py-2 text-sm font-medium text-slate-900 bg-[#F6F4EB] hover:bg-white rounded-full transition-all shadow-md hover:shadow-white/20 hover:scale-[1.02] active:scale-[0.98] cursor-pointer whitespace-nowrap"
          >
            Download App
          </button>
        </div>
      </header>

      {/* Slide-over Mobile/Desktop Menu Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm transition-opacity">
          <div className="w-full max-w-md h-full bg-[#100b24] border-l border-white/10 p-8 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="font-serif text-2xl text-[#F6F4EB]">NaviCare</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-purple-900/50 text-purple-200 border border-purple-500/30">
                    Cosmic Wings Edition
                  </span>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-stone-300 hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="mt-8">
                <p className="text-xs uppercase tracking-widest text-purple-300/70 mb-4 font-semibold">
                  Celestial Navigation
                </p>
                <nav className="flex flex-col space-y-3">
                  {navLinks.map((item, idx) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-white/15 transition-all text-[#F6F4EB]"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-purple-400">0{idx + 1}</span>
                        <span className="font-serif text-lg">{item.label}</span>
                      </div>
                      <ChevronRight size={16} className="text-stone-400 group-hover:translate-x-1 transition-transform" />
                    </a>
                  ))}
                </nav>
              </div>

              <div className="mt-8 p-4 rounded-xl bg-purple-950/40 border border-purple-800/30">
                <div className="flex items-center gap-2 text-purple-200 text-sm font-medium mb-1">
                  <Sparkles size={16} className="text-purple-300" />
                  Angelic Sovereignty & Privacy
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  End-to-end encrypted cyclical data. Your hormonal constellation and angel frequencies belong entirely to you.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onOpenDownload();
                }}
                className="w-full py-3 rounded-full bg-[#F6F4EB] text-slate-900 font-medium hover:bg-white transition-all flex items-center justify-center gap-2"
              >
                <Download size={16} />
                Download NaviCare for iOS & Android
              </button>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-stone-300 border border-white/10 text-xs transition-all"
              >
                Celestial Support & Community
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
