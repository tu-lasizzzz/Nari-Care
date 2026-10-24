import React, { useState } from 'react';
import { X, Apple, Smartphone, QrCode, Sparkles, Check, Download } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const [downloadTriggered, setDownloadTriggered] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSimulateDownload = (platform: string) => {
    setDownloadTriggered(platform);
    setTimeout(() => setDownloadTriggered(null), 3000);
  };

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md bg-[#120b27] border border-white/15 rounded-3xl p-6 sm:p-8 text-white shadow-[0_0_80px_rgba(168,85,247,0.3)] relative text-center"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-stone-400 hover:text-white transition-colors"
        >
          <X size={16} />
        </button>

        <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-500 mx-auto flex items-center justify-center shadow-lg shadow-purple-600/30 mb-4">
          <Sparkles size={28} className="text-white" />
        </div>

        <h3 className="font-serif text-3xl font-bold text-[#F6F4EB] mb-2">
          Experience NaviCare
        </h3>
        <p className="text-xs text-stone-300 leading-relaxed mb-6">
          Synchronize your hormonal universe with the crystal angel wings. Available worldwide across Apple iOS and Google Android.
        </p>

        {downloadTriggered && (
          <div className="mb-4 p-3 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 text-xs flex items-center justify-center gap-2">
            <Check size={14} />
            Redirecting to {downloadTriggered}...
          </div>
        )}

        {/* Download Buttons */}
        <div className="space-y-3 mb-6">
          <button
            onClick={() => handleSimulateDownload('Apple App Store')}
            className="w-full py-3 px-5 rounded-2xl bg-white text-slate-900 font-semibold hover:bg-stone-100 transition-all flex items-center justify-center gap-3 cursor-pointer shadow-md"
          >
            <Apple size={20} className="text-black" />
            <div className="text-left">
              <span className="block text-[10px] text-stone-600 leading-none">Download on the</span>
              <span className="text-sm font-bold">App Store</span>
            </div>
          </button>

          <button
            onClick={() => handleSimulateDownload('Google Play Store')}
            className="w-full py-3 px-5 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-semibold border border-white/15 transition-all flex items-center justify-center gap-3 cursor-pointer"
          >
            <Smartphone size={20} className="text-purple-300" />
            <div className="text-left">
              <span className="block text-[10px] text-stone-400 leading-none">Get it on</span>
              <span className="text-sm font-bold">Google Play</span>
            </div>
          </button>
        </div>

        {/* QR Code Quick Sync */}
        <div className="p-4 rounded-2xl bg-black/40 border border-white/10 flex items-center gap-4 text-left">
          <div className="w-16 h-16 bg-white p-1 rounded-xl flex items-center justify-center shrink-0">
            <QrCode size={52} className="text-black" />
          </div>
          <div>
            <h4 className="text-xs font-semibold text-white">Scan to install</h4>
            <p className="text-[11px] text-stone-400 leading-tight mt-0.5">
              Point your camera to instantly open the NaviCare Seraphic Universe on your phone.
            </p>
          </div>
        </div>

        <div className="mt-4 text-[10px] text-stone-500">
          Encrypted sovereign sync · No tracking cookies · Private to you
        </div>
      </div>
    </div>
  );
};
