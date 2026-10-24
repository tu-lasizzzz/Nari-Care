import React, { useRef, useState, useEffect } from 'react';
import { Feather, Sparkles, Smartphone, ChevronDown } from 'lucide-react';
import { PhoneMockup } from './PhoneMockup';
import { CelestialPlanets } from './CelestialPlanets';
import { ScrollAnimationCanvas } from './ScrollAnimationCanvas';

interface AngelWingsHeroProps {
  onOpenDownload: () => void;
}

export const AngelWingsHero: React.FC<AngelWingsHeroProps> = ({ onOpenDownload }) => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'video' | 'interactive'>('video');

  // Track scroll position within the hero pinned track
  useEffect(() => {
    const handleScroll = () => {
      const hero = heroRef.current;
      if (!hero) return;

      const rect = hero.getBoundingClientRect();
      const heroHeight = hero.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollableDistance = heroHeight - windowHeight;

      if (scrollableDistance <= 0) {
        setScrollProgress(0);
        return;
      }

      // Progress is 0 when hero top hits window top, 1 when hero bottom reaches window bottom
      const progress = Math.min(1, Math.max(0, -rect.top / scrollableDistance));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      id="hero-wings"
      ref={heroRef}
      className="relative w-full min-h-[320vh] bg-[#0b0819]"
    >
      {/* Sticky Fullscreen Experience */}
      <div id="phone-section" className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* Background Canvas: The 300-Frame Scroll-Based Video Animation */}
        <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center pointer-events-none">
          <ScrollAnimationCanvas
            scrollProgress={scrollProgress}
            className="w-full h-full object-cover"
          />
          {/* Subtle celestial vignette overlay for cosmic depth */}
          <div className="absolute inset-0 bg-radial from-transparent via-[#0b0819]/25 to-[#0b0819]/85 pointer-events-none" />
        </div>

        {/* LEFT & RIGHT CELESTIAL PLANET ORBITS FROM SCREENSHOT 1 */}
        <div className="relative z-20 w-full h-full pointer-events-none">
          <div className="pointer-events-auto">
            <CelestialPlanets />
          </div>
        </div>

        {/* FOREGROUND CONTROLS & OVERLAYS */}
        <div className="absolute top-28 z-30 flex flex-col items-center px-4 pointer-events-auto text-center">
          
          {/* Subtle Angelic / Cosmic Kicker */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-white/15 backdrop-blur-md mb-3 text-xs text-purple-200 shadow-lg">
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
          <div className="inline-flex items-center p-1 rounded-full bg-black/50 border border-white/10 backdrop-blur-md text-[11px] text-stone-300 gap-1 shadow-md">
            <button
              onClick={() => setViewMode('video')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all cursor-pointer ${
                viewMode === 'video'
                  ? 'bg-purple-600/90 text-white font-medium shadow-[0_0_12px_rgba(168,85,247,0.5)]'
                  : 'hover:text-white text-stone-400'
              }`}
            >
              <Sparkles size={12} className={viewMode === 'video' ? 'text-amber-300' : ''} />
              Scroll Animation ({Math.round(1 + scrollProgress * 299)} / 300)
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

        {/* If user switches to Interactive 3D Dial mode, display PhoneMockup directly */}
        {viewMode === 'interactive' && (
          <div className="absolute inset-0 z-20 flex items-center justify-center pt-20 pointer-events-auto bg-black/40 backdrop-blur-xs">
            <PhoneMockup />
          </div>
        )}

        {/* Scroll down guidance indicator (fades as user scrolls) */}
        <div
          className="absolute bottom-6 z-30 flex flex-col items-center gap-1 text-[11px] text-stone-400 pointer-events-none transition-opacity duration-300"
          style={{ opacity: Math.max(0, 1 - scrollProgress * 3.5) }}
        >
          <span className="font-mono tracking-widest uppercase text-purple-200">
            Scroll to unfurl wings & explore
          </span>
          <ChevronDown size={14} className="animate-bounce text-cyan-300" />
        </div>
      </div>
    </section>
  );
};
