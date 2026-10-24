import React, { useState } from 'react';
import { Feather, Sparkles, Smartphone, ChevronDown } from 'lucide-react';
import { PhoneMockup } from './PhoneMockup';

interface AngelWingsHeroProps {
  onOpenDownload: () => void;
  currentFrame?: number;
}

export const AngelWingsHero: React.FC<AngelWingsHeroProps> = ({
  onOpenDownload,
  currentFrame = 1,
}) => {
  const [viewMode, setViewMode] = useState<'video' | 'interactive'>('video');

  // Fade out hero prompts as user scrubs through the frames
  const promptOpacity = Math.max(0, 1 - (currentFrame - 1) / 35);

  return (
    <section
      id="hero-wings"
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent select-none"
    >
      {/* =========================================================================
          FOREGROUND CONTROLS & SERAPHIC OVERLAYS (z-30)
          ========================================================================= */}
      <div 
        className="absolute top-28 z-30 flex flex-col items-center px-4 pointer-events-auto text-center transition-opacity duration-300"
        style={{ opacity: viewMode === 'interactive' ? 1 : Math.max(0.25, promptOpacity) }}
      >
        {/* Seraphic Cycle Tracking Pill Kicker */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-white/15 backdrop-blur-md mb-3 text-xs text-purple-200 shadow-xl">
          <Feather size={12} className="text-cyan-300" />
          <span>Seraphic Cycle Tracking & Astral Harmony</span>
          <span className="text-stone-500">·</span>
          <a
            href="#wings-sanctuary"
            className="text-cyan-300 hover:text-white font-medium flex items-center gap-1 cursor-pointer transition-colors"
          >
            Explore Wings Sanctuary ↓
          </a>
        </div>

        {/* Toggle between Scroll Animation & 3D Interactive Phone Dial */}
        <div className="inline-flex items-center p-1 rounded-full bg-black/50 border border-white/10 backdrop-blur-md text-[11px] text-stone-300 gap-1 shadow-lg">
          <button
            onClick={() => setViewMode('video')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all cursor-pointer ${
              viewMode === 'video'
                ? 'bg-purple-600/90 text-white font-medium shadow-[0_0_12px_rgba(168,85,247,0.5)]'
                : 'hover:text-white text-stone-400'
            }`}
          >
            <Sparkles size={12} className={viewMode === 'video' ? 'text-amber-300' : ''} />
            Scroll Animation ({currentFrame} / 160)
          </button>
          <button
            onClick={() => setViewMode('interactive')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all cursor-pointer ${
              viewMode === 'interactive'
                ? 'bg-purple-600/90 text-white font-medium shadow-[0_0_12px_rgba(168,85,247,0.5)]'
                : 'hover:text-white text-stone-400'
            }`}
          >
            <Smartphone size={12} />
            Interactive Dial
          </button>
        </div>
      </div>

      {/* Interactive 3D Dial Mode (optional toggle view) */}
      {viewMode === 'interactive' && (
        <div className="absolute inset-0 z-25 flex items-center justify-center pt-20 pointer-events-auto bg-black/50 backdrop-blur-xs animate-in fade-in">
          <PhoneMockup />
        </div>
      )}

      {/* Scroll guidance indicator - smoothly vanishes as user initiates scroll */}
      <div
        className="absolute bottom-6 z-30 flex flex-col items-center gap-1 text-[11px] text-stone-400 pointer-events-none transition-opacity duration-300"
        style={{ opacity: promptOpacity }}
      >
        <span className="font-mono tracking-widest uppercase text-purple-200 drop-shadow-sm">
          Scroll to unfurl wings & explore universe
        </span>
        <ChevronDown size={14} className="animate-bounce text-cyan-300" />
      </div>
    </section>
  );
};
