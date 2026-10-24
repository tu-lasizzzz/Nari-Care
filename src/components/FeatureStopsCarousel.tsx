import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Heart, Droplets, Moon, Users, Baby } from 'lucide-react';

interface StopItem {
  id: string;
  tabLabel: string;
  kicker: string;
  headline: string;
  description: string;
}

const STOPS: StopItem[] = [
  {
    id: 'overview',
    tabLabel: 'OVERVIEW',
    kicker: 'OVERVIEW',
    headline: "Hi, we're NaviCare",
    description: "A women-founded, women-built cycle tracking app that helps you explore your hormonal health universe. Your body isn't a void of mysterious happenings. It's a cyclical system of hormones, phases, symptoms, signals, and patterns that you can map, study, and apply to your every day.",
  },
  {
    id: 'cycle-tracking',
    tabLabel: 'CYCLE TRACKING',
    kicker: 'CYCLE TRACKING',
    headline: 'Know thy cycle, know thyself',
    description: "Your cycle is constantly communicating with you—but what's it saying? We help decode the mystery messages, so you can anticipate what your body needs, not just when to pack tampons.",
  },
  {
    id: 'uncover-patterns',
    tabLabel: 'UNCOVER PATTERNS',
    kicker: 'UNCOVER PATTERNS',
    headline: "Map your body's subtle cosmos",
    description: "Track moods, physical signals, cravings, and energetic peaks. NaviCare's celestial algorithm correlates your symptoms across lunar months so you can forecast your personal seasons.",
  },
  {
    id: 'inner-circle',
    tabLabel: 'INNER CIRCLE',
    kicker: 'INNER CIRCLE',
    headline: 'Cycle syncing with your cosmic coven',
    description: 'Sync orbits with friends, partners, and sisters. See when your moons align, anticipate emotional tides, and communicate what you need with zero guesswork and seraphic grace.',
  },
  {
    id: 'pregnancy-tracking',
    tabLabel: 'PREGNANCY TRACKING',
    kicker: 'PREGNANCY TRACKING',
    headline: 'Divine creators look inward, too',
    description: "Maybe you're not tracking your cycle but building a human? With Divine Creator Mode, you can monitor the seismic shifts happening to both your body and your baby—plus, unlock baby-parent astrological compatibility and AR baby vision to fully step into your cool mom era.",
  },
];

export const FeatureStopsCarousel: React.FC = () => {
  const [activeStopIndex, setActiveStopIndex] = useState(1); // Default to 'CYCLE TRACKING' as shown in Frame 7

  const activeStop = STOPS[activeStopIndex];

  const handlePrev = () => {
    setActiveStopIndex((prev) => (prev > 0 ? prev - 1 : STOPS.length - 1));
  };

  const handleNext = () => {
    setActiveStopIndex((prev) => (prev < STOPS.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="feature-stops" className="relative py-20 px-6 max-w-6xl mx-auto overflow-hidden">
      
      {/* TOP HORIZONTAL SUB-NAV WITH STOPS FROM VIDEO (Frames 7 & 8) */}
      <div className="relative mb-12 flex flex-col items-center">
        {/* Tab row in dark capsule */}
        <div className="w-full max-w-3xl flex items-center justify-between overflow-x-auto no-scrollbar rounded-full bg-black/60 border border-white/10 px-3 py-2 backdrop-blur-md">
          {STOPS.map((stop, idx) => (
            <button
              key={stop.id}
              onClick={() => setActiveStopIndex(idx)}
              className={`px-3 sm:px-5 py-1.5 rounded-full text-[11px] sm:text-xs font-mono tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                activeStopIndex === idx
                  ? 'text-white font-bold bg-white/15 shadow-sm'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              {stop.tabLabel}
            </button>
          ))}
        </div>

        {/* The White Stepper Track Bar with Arrow Controls (from Frame 7 & 8) */}
        <div className="w-full max-w-3xl flex items-center justify-between mt-3 bg-white/10 rounded-full p-1 border border-white/15">
          <button
            onClick={handlePrev}
            aria-label="Previous stop"
            className="w-8 h-8 rounded-full bg-black/50 hover:bg-black text-white flex items-center justify-center cursor-pointer transition-colors"
          >
            <ChevronLeft size={16} />
          </button>

          {/* Stepper progress indicator */}
          <div className="flex-1 mx-4 h-1 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-500 rounded-full"
              style={{
                width: `${((activeStopIndex + 1) / STOPS.length) * 100}%`,
              }}
            />
          </div>

          <button
            onClick={handleNext}
            aria-label="Next stop"
            className="w-8 h-8 rounded-full bg-black/50 hover:bg-black text-white flex items-center justify-center cursor-pointer transition-colors"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* STOP CONTENT CONTAINER */}
      <div className="relative min-h-[460px] flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full">
          
          {/* Left Column: Headline and Copy matching Video */}
          <div className="lg:col-span-7 text-left space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B3A8D8] font-semibold">
              {activeStop.kicker}
            </span>

            <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F6F4EB] font-normal tracking-tight leading-[1.1]">
              {activeStop.headline}
            </h3>

            <p className="text-stone-300 text-base sm:text-lg font-light leading-relaxed max-w-xl">
              {activeStop.description}
            </p>

            {/* Quick action pill */}
            <div className="pt-2">
              <a
                href="#download-section"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs text-white transition-all"
              >
                <Sparkles size={13} className="text-purple-300" />
                Explore {activeStop.tabLabel} in App
              </a>
            </div>
          </div>

          {/* Right Column: Visual Component matching Video */}
          <div className="lg:col-span-5 flex items-center justify-center">
            
            {/* Visual 1: CYCLE TRACKING (Frame 7 - Glowing Teardrop & Period Card) */}
            {activeStop.id === 'cycle-tracking' && (
              <div className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-3xl bg-gradient-to-b from-[#1b1238] to-[#0c081e] border border-purple-500/30 p-8 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(168,85,247,0.25)] relative overflow-hidden group">
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 mb-6">
                  CURRENT PHASE
                </span>

                {/* Glowing celestial teardrop from Frame 7 */}
                <div className="relative w-20 h-28 flex items-center justify-center mb-4">
                  <div 
                    className="w-16 h-24 rounded-full rounded-t-[100%] shadow-[0_0_35px_rgba(244,63,94,0.6)]"
                    style={{
                      background: 'radial-gradient(circle at 50% 60%, #f43f5e 0%, #a855f7 65%, #6366f1 100%)',
                      clipPath: 'polygon(50% 0%, 100% 70%, 100% 100%, 0% 100%, 0% 70%)',
                    }}
                  />
                  {/* Subtle lower crescent glow */}
                  <div className="absolute bottom-2 w-12 h-6 rounded-b-full bg-gradient-to-t from-pink-400 to-transparent opacity-80" />
                </div>

                <span className="font-serif text-3xl font-bold text-white tracking-tight">
                  Period
                </span>
                <span className="text-xs text-purple-300/80 mt-1">Day 1 of 28</span>
              </div>
            )}

            {/* Visual 2: PREGNANCY TRACKING (Frame 8 - Fetus inside undulated Moon Garland) */}
            {activeStop.id === 'pregnancy-tracking' && (
              <div className="w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] relative flex items-center justify-center">
                {/* Undulating Moon Garland from Frame 8 */}
                <svg className="w-full h-full animate-spin" style={{ animationDuration: '60s' }} viewBox="0 0 200 200">
                  {/* Scalloped wavy ring of dots/phases */}
                  {Array.from({ length: 36 }).map((_, i) => {
                    const angle = (i / 36) * Math.PI * 2;
                    // Undulated flower radius
                    const r = 70 + Math.sin(angle * 7) * 12;
                    const cx = 100 + r * Math.cos(angle);
                    const cy = 100 + r * Math.sin(angle);
                    const hue = (i / 36) * 360;
                    return (
                      <circle
                        key={i}
                        cx={cx}
                        cy={cy}
                        r={i % 3 === 0 ? 3 : 1.8}
                        fill={`hsl(${hue}, 80%, 75%)`}
                        opacity={0.85}
                      />
                    );
                  })}
                </svg>

                {/* Floating Celestial Embryo in center from Frame 8 */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="relative p-5 rounded-full bg-radial from-pink-500/20 via-purple-900/10 to-transparent flex items-center justify-center">
                    <Baby size={52} className="text-pink-200 drop-shadow-[0_0_15px_rgba(244,114,182,0.8)] animate-pulse" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-pink-300 mt-2">
                    Divine Creator Mode
                  </span>
                </div>
              </div>
            )}

            {/* Visual 3: UNCOVER PATTERNS */}
            {activeStop.id === 'uncover-patterns' && (
              <div className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-3xl bg-black/40 border border-white/10 p-6 flex flex-col justify-between shadow-xl">
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300">
                  COSMIC SYMPTOM CORRELATIONS
                </span>
                <div className="space-y-3 my-auto">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-stone-300">Dream Vividness</span>
                    <span className="font-mono text-cyan-300">92% Peak</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-400 w-[92%] rounded-full" />
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-stone-300">Creative Intuition</span>
                    <span className="font-mono text-amber-300">88% Rising</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-400 w-[88%] rounded-full" />
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-stone-300">Social Stamina</span>
                    <span className="font-mono text-fuchsia-300">Seraphic Max</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-fuchsia-400 w-[95%] rounded-full" />
                  </div>
                </div>
                <span className="text-[10px] text-stone-500 font-mono">Calibrated to personal lunar cycle</span>
              </div>
            )}

            {/* Visual 4: INNER CIRCLE */}
            {activeStop.id === 'inner-circle' && (
              <div className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-3xl bg-black/40 border border-white/10 p-6 flex flex-col items-center justify-center text-center shadow-xl">
                <Users size={44} className="text-purple-300 mb-3" />
                <h4 className="font-serif text-xl text-white font-semibold mb-1">
                  Coven Orbital Sync
                </h4>
                <p className="text-xs text-stone-300 mb-4 max-w-xs">
                  3 connected partners in phase alignment.
                </p>
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-pink-500/40 border border-pink-400 flex items-center justify-center text-[10px] font-bold">M</span>
                  <span className="w-7 h-7 rounded-full bg-purple-500/40 border border-purple-400 flex items-center justify-center text-[10px] font-bold">S</span>
                  <span className="w-7 h-7 rounded-full bg-cyan-500/40 border border-cyan-400 flex items-center justify-center text-[10px] font-bold">A</span>
                </div>
              </div>
            )}

            {/* Visual 5: OVERVIEW */}
            {activeStop.id === 'overview' && (
              <div className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-3xl bg-black/40 border border-white/10 p-6 flex flex-col items-center justify-center text-center shadow-xl">
                <Moon size={48} className="text-amber-200 mb-3 animate-pulse" />
                <h4 className="font-serif text-2xl text-white font-semibold mb-1">
                  Cyclical Clockwork
                </h4>
                <p className="text-xs text-stone-300 max-w-xs leading-relaxed">
                  28 days of celestial tides, neurochemical shifts, and seraphic grace.
                </p>
              </div>
            )}

          </div>

        </div>
      </div>

    </section>
  );
};
