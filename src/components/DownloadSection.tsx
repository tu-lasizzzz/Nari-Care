import React from 'react';
import { QrCode, Apple, Smartphone, Sparkles } from 'lucide-react';

interface DownloadSectionProps {
  onOpenDownloadModal: () => void;
}

export const DownloadSection: React.FC<DownloadSectionProps> = ({ onOpenDownloadModal }) => {
  return (
    <section id="download-section" className="relative py-24 px-6 text-center border-t border-white/5 bg-gradient-to-b from-transparent to-[#0a0618]/90 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-purple-900/15 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
        {/* Title matching Frame 9 in video */}
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F6F4EB] font-normal tracking-tight mb-8">
          Download to unlock the<br />NaviCare universe
        </h2>

        {/* QR Code Container matching Frame 9 */}
        <div 
          onClick={onOpenDownloadModal}
          className="p-4 sm:p-5 rounded-3xl bg-white shadow-[0_0_50px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform duration-300 cursor-pointer group mb-8"
          title="Click to view full download options"
        >
          <div className="w-36 h-36 sm:w-44 sm:h-44 bg-white flex items-center justify-center relative">
            <QrCode size={150} className="text-slate-900" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-xs rounded-xl">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">
                Click to Open
              </span>
            </div>
          </div>
        </div>

        <p className="text-xs text-stone-400 max-w-xs mb-6">
          Scan with your phone camera to download directly, or select your platform below:
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onOpenDownloadModal}
            className="px-5 py-2.5 rounded-full bg-white text-slate-900 font-semibold text-xs hover:bg-stone-100 transition-all flex items-center gap-2 cursor-pointer shadow-md"
          >
            <Apple size={16} />
            Apple App Store
          </button>
          <button
            onClick={onOpenDownloadModal}
            className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-xs border border-white/15 transition-all flex items-center gap-2 cursor-pointer"
          >
            <Smartphone size={16} className="text-purple-300" />
            Google Play Store
          </button>
        </div>
      </div>
    </section>
  );
};
