import React from 'react';
import { Feather, Sparkles } from 'lucide-react';

interface FooterProps {
  onOpenDownload: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDownload, onOpenContact }) => {
  // 12 spectral dots for the footer moon ring from Frame 9
  const footerDots = [
    '#ffffff', '#a855f7', '#6366f1', '#3b82f6', '#06b6d4', '#10b981',
    '#84cc16', '#eab308', '#f97316', '#ef4444', '#ec4899', '#d946ef'
  ];

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#070414] pt-20 pb-28 px-6 text-stone-300">
      <div className="max-w-6xl mx-auto">
        
        {/* 4 COLUMNS WITH CENTRAL SPECTRAL MOON RING (Directly from Frame 9 in video) */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center text-center md:text-left mb-16">
          
          {/* Column 1 */}
          <div className="flex flex-col space-y-3 text-xs uppercase tracking-widest font-mono text-stone-400">
            <a href="#feature-stops" className="hover:text-white transition-colors">App Features</a>
            <a href="#overview" className="hover:text-white transition-colors">Moon Magic</a>
            <a href="#wings-sanctuary" className="hover:text-white transition-colors">NaviCare Buzz</a>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col space-y-3 text-xs uppercase tracking-widest font-mono text-stone-400">
            <a href="#hero-wings" className="hover:text-white transition-colors">The Wormhole</a>
            <a href="#about-orb" className="hover:text-white transition-colors">About Us</a>
            <a href="#privacy-section" className="hover:text-white transition-colors text-amber-300 font-semibold">Your Data</a>
          </div>

          {/* Center Column: Spectral Moon Ring (from Frame 9) */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-center justify-center my-4 md:my-0">
            <div className="relative w-20 h-20 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="30" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                {footerDots.map((color, idx) => {
                  const angle = (idx / footerDots.length) * Math.PI * 2 - Math.PI / 2;
                  const cx = 40 + 30 * Math.cos(angle);
                  const cy = 40 + 30 * Math.sin(angle);
                  return (
                    <circle
                      key={idx}
                      cx={cx}
                      cy={cy}
                      r={idx === 0 ? 3.5 : 2.5}
                      fill={color}
                      className="transition-transform hover:scale-125"
                    />
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col space-y-3 text-xs uppercase tracking-widest font-mono text-stone-400">
            <button onClick={onOpenDownload} className="text-left hover:text-white transition-colors cursor-pointer">Shop</button>
            <button onClick={onOpenContact} className="text-left hover:text-white transition-colors cursor-pointer">FAQ</button>
            <button onClick={onOpenContact} className="text-left hover:text-white transition-colors cursor-pointer">Cookie Settings</button>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col space-y-3 text-xs uppercase tracking-widest font-mono text-stone-400">
            <button onClick={onOpenDownload} className="text-left hover:text-white transition-colors cursor-pointer">Apple App Store</button>
            <button onClick={onOpenDownload} className="text-left hover:text-white transition-colors cursor-pointer">Google Play</button>
            <button onClick={onOpenDownload} className="text-left hover:text-white transition-colors cursor-pointer">Manage Subscription</button>
          </div>

        </div>

        {/* BOTTOM METADATA ROW FROM FRAME 9 IN VIDEO */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-[10px] font-mono tracking-wider text-stone-500 uppercase">
          <div className="flex flex-wrap items-center gap-6">
            <a href="#privacy-section" className="hover:text-stone-300 transition-colors">Terms of Use</a>
            <a href="#privacy-section" className="hover:text-stone-300 transition-colors">Privacy Policy</a>
            <a href="#privacy-section" className="hover:text-stone-300 transition-colors">Health and Data Privacy Policy</a>
          </div>

          <div className="flex items-center gap-4">
            <span>Website by Human</span>
            <span>·</span>
            <span>Copyright 2025 NaviCare</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
