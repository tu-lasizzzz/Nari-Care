import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface AngelWingsHeroProps {
  onOpenDownload?: () => void;
  currentFrame?: number;
}

export const AngelWingsHero: React.FC<AngelWingsHeroProps> = ({
  currentFrame = 1,
}) => {
  // Fade out hero quote and scroll hint as user scrolls to unfurl the wings
  // Only displays on initial page load during the initial wing-opening sequence
  const scrollFadeOpacity = Math.max(0, 1 - (currentFrame - 1) / 25);

  return (
    <section
      id="hero-wings"
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent select-none"
    >
      {/* =========================================================================
          ETHEREAL HERO TEXT ANIMATION (Slow & Subtle Reveal on Initial Wing Opening)
          "The universe assigned you an angelic body, but forgot to include a user manual. We wrote it."
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 20, filter: 'blur(10px)', scale: 0.97 }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
        transition={{ duration: 2.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-24 sm:top-28 md:top-32 z-30 max-w-2xl sm:max-w-3xl md:max-w-4xl px-6 text-center pointer-events-none transition-opacity duration-300"
        style={{ opacity: scrollFadeOpacity }}
      >
        <p className="ethereal-hero-text font-serif italic text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-[1.3] tracking-tight drop-shadow-sm select-none">
          “The universe assigned you an angelic body, but forgot to include a user manual.{' '}
          <span className="inline-block not-italic font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[42px] tracking-normal mt-1 sm:mt-0">
            We wrote it.”
          </span>
        </p>
      </motion.div>

      {/* =========================================================================
          SCROLL GUIDANCE INDICATOR
          Smoothly dissolves as user initiates scroll, never re-appearing downstairs
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1.8 }}
        className="absolute bottom-6 z-30 flex flex-col items-center gap-1 text-[11px] text-stone-400 pointer-events-none transition-opacity duration-300"
        style={{ opacity: scrollFadeOpacity }}
      >
        <span className="font-mono tracking-widest uppercase text-purple-200 drop-shadow-sm">
          Scroll to unfurl wings & explore universe
        </span>
        <ChevronDown size={14} className="animate-bounce text-cyan-300" />
      </motion.div>
    </section>
  );
};
