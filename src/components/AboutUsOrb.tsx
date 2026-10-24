import React, { useState } from 'react';
import { ChevronDown, Sparkles, Heart, Shield, Users } from 'lucide-react';

export const AboutUsOrb: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const scrollToOverview = () => {
    const el = document.getElementById('overview');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about-orb" className="relative min-h-[85vh] flex flex-col items-center justify-center py-20 px-4 overflow-hidden">
      
      {/* Background ethereal radial bloom */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-pink-600/10 blur-[130px] pointer-events-none" />

      {/* THE GIANT "ABOUT US" CELESTIAL SPHERE FROM SCREENSHOT 2 */}
      <div className="relative flex flex-col items-center justify-center">
        
        {/* The Giant Sphere */}
        <div
          onClick={() => setIsExpanded(!isExpanded)}
          className="relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] md:w-[540px] md:h-[540px] rounded-full cursor-pointer transition-transform duration-500 hover:scale-[1.02] flex items-center justify-center select-none group"
          title="Click to discover the NaviCare celestial constellation"
        >
          {/* Sphere Body with realistic lighting & striations */}
          <div 
            className="w-full h-full rounded-full shadow-[inset_-35px_-30px_60px_rgba(0,0,0,0.85),inset_20px_20px_40px_rgba(255,255,255,0.35),0_0_80px_rgba(219,39,119,0.35)] relative overflow-hidden flex items-center justify-center"
            style={{
              background: 'radial-gradient(circle at 35% 30%, #f472b6 0%, #db2777 38%, #9d174d 70%, #4c0519 100%)',
            }}
          >
            {/* Fine horizontal striated gas rings matching Screenshot 2 */}
            <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[repeating-linear-gradient(0deg,transparent,transparent_6px,rgba(0,0,0,0.6)_6px,rgba(0,0,0,0.6)_14px)]" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-white/20 pointer-events-none" />

            {/* "About Us" Bold Serif Typography Superimposed (from Screenshot 2) */}
            <h2 className="relative z-10 font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tight text-[#F6F4EB] text-center drop-shadow-[0_4px_25px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-300">
              About Us
            </h2>
          </div>

          {/* Interactive touch hint */}
          <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-xs text-pink-200 border border-pink-500/30 whitespace-nowrap pointer-events-none">
            {isExpanded ? 'Click to minimize story' : 'Click to read our founding ethos'}
          </div>
        </div>

        {/* Down Arrow Indicator beneath sphere (from Screenshot 2) */}
        <button
          onClick={scrollToOverview}
          aria-label="Scroll to overview section"
          className="mt-8 text-[#F6F4EB] hover:text-white transition-all transform hover:translate-y-1 animate-bounce cursor-pointer p-2 flex flex-col items-center gap-1 group"
        >
          <span className="text-2xl font-serif">↓</span>
          <span className="text-[10px] uppercase tracking-widest text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity">
            Scroll to Overview
          </span>
        </button>
      </div>

      {/* Expanded Ethos & Angelic Philosophy Drawer/Card */}
      {isExpanded && (
        <div className="mt-8 max-w-2xl w-full bg-[#160f2d]/90 border border-pink-500/30 rounded-3xl p-6 sm:p-8 backdrop-blur-xl animate-in fade-in zoom-in-95 shadow-2xl">
          <div className="flex items-center gap-2 text-pink-300 text-xs font-mono uppercase tracking-wider mb-2">
            <Sparkles size={14} />
            Our Constellation & Genesis
          </div>
          <h3 className="font-serif text-3xl text-white font-bold mb-3">
            Born from Stardust, Guided by Angelic Cycles
          </h3>
          <p className="text-sm text-stone-300 leading-relaxed mb-4">
            NaviCare was founded on a simple truth: feminine physiology is not a glitch or an inconvenience to be silenced. It is a profound celestial clockwork synchronized with planetary tides, hormonal rhythms, and divine energetic frequencies.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-white/10 text-xs">
            <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5">
              <span className="font-semibold text-pink-200 block mb-1">Women-Led Sovereignty</span>
              <span className="text-stone-400">Zero sellable health data. Private as the depths of space.</span>
            </div>
            <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5">
              <span className="font-semibold text-pink-200 block mb-1">Crystalline Accuracy</span>
              <span className="text-stone-400">Hormone modeling mapped to your unique biological signals.</span>
            </div>
            <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5">
              <span className="font-semibold text-pink-200 block mb-1">Wings of Grace</span>
              <span className="text-stone-400">Transforming cyclical exhaustion into celestial wings.</span>
            </div>
          </div>
          <button
            onClick={() => setIsExpanded(false)}
            className="mt-5 w-full py-2 rounded-full bg-white/10 hover:bg-white/15 text-xs text-stone-300 transition-colors"
          >
            Close Constellation
          </button>
        </div>
      )}
    </section>
  );
};
