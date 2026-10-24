import React, { useState } from 'react';
import { Sparkles, ArrowRight, Activity, Flame, Shield, Compass } from 'lucide-react';

interface PhaseDot {
  id: number;
  label: string;
  name: string;
  color: string;
  hormone: string;
  angelResonance: string;
  tip: string;
}

const PHASES: PhaseDot[] = [
  {
    id: 0,
    label: 'Apex 0°',
    name: 'Seraphic New Moon (Day 1)',
    color: '#a855f7',
    hormone: 'Estrogen & Progesterone Reset',
    angelResonance: 'Archangel Michael · Inner Protection',
    tip: 'Take rest as a sacred decree. Your intuition is at its deepest clarity.',
  },
  {
    id: 1,
    label: '30°',
    name: 'Waxing Crescent (Day 4)',
    color: '#6366f1',
    hormone: 'FSH Activation',
    angelResonance: 'Cherubic Renewal · Still Waters',
    tip: 'Gentle hydration and stretching allow dormant energy to crystallize.',
  },
  {
    id: 2,
    label: '60°',
    name: 'Early Follicular (Day 7)',
    color: '#3b82f6',
    hormone: 'Rising Estrogen',
    angelResonance: 'Wing Unfurling · Creative Starlight',
    tip: 'Your brain is receptive to bold plans and learning new disciplines.',
  },
  {
    id: 3,
    label: '90°',
    name: 'Mid-Follicular (Day 10)',
    color: '#06b6d4',
    hormone: 'Estrogen Acceleration',
    angelResonance: 'Ascension · Diamond Vitality',
    tip: 'Physical endurance surges. Great for strength training and high-focus projects.',
  },
  {
    id: 4,
    label: '120°',
    name: 'Pre-Ovulation (Day 13)',
    color: '#10b981',
    hormone: 'LH Surge Imminent',
    angelResonance: 'Radiance · Magnetic Field',
    tip: 'Verbal fluencies peak. Conversations flow like liquid sunlight.',
  },
  {
    id: 5,
    label: '150°',
    name: 'Ovulatory Full Bloom (Day 14)',
    color: '#84cc16',
    hormone: 'Peak Estrogen & LH',
    angelResonance: 'Seraphic Supernova · Human Champagne',
    tip: 'You are at maximum magnetism. Celebrate, express, and shine.',
  },
  {
    id: 6,
    label: '180°',
    name: 'Post-Ovulation (Day 17)',
    color: '#eab308',
    hormone: 'Progesterone Emergence',
    angelResonance: 'Golden Archangel · Deep Grounding',
    tip: 'Incorporate warming foods and root vegetables to sustain steady stamina.',
  },
  {
    id: 7,
    label: '210°',
    name: 'Early Luteal (Day 20)',
    color: '#f97316',
    hormone: 'Progesterone Dominance',
    angelResonance: 'Guardian Shield · Critical Vision',
    tip: 'Your eye for detail is razor-sharp. Edit, organize, and prune distractions.',
  },
  {
    id: 8,
    label: '240°',
    name: 'Mid Luteal (Day 23)',
    color: '#ef4444',
    hormone: 'Secondary Estrogen Wave',
    angelResonance: 'Sanctuary · Divine Discernment',
    tip: 'Protect boundaries fiercely. Saying no to trivial requests creates cosmic peace.',
  },
  {
    id: 9,
    label: '270°',
    name: 'Late Luteal (Day 26)',
    color: '#ec4899',
    hormone: 'Hormonal Withdrawal Drop',
    angelResonance: 'Astral Recluse · The Veil',
    tip: 'Emotional honesty reveals deep truths. Journal what needs transformation.',
  },
  {
    id: 10,
    label: '300°',
    name: 'Pre-Menstrual Dusk (Day 28)',
    color: '#d946ef',
    hormone: 'Lowest Hormonal Baseline',
    angelResonance: 'Wing Folding · Sacred Solitude',
    tip: 'Sleep deeply, dim harsh lights, and prepare for the cycle to renew.',
  },
];

export const OverviewSection: React.FC = () => {
  const [selectedPhaseIndex, setSelectedPhaseIndex] = useState(0);

  const selected = PHASES[selectedPhaseIndex];

  return (
    <section id="overview" className="relative min-h-[90vh] flex flex-col items-center justify-center py-24 px-6 text-center overflow-hidden">
      
      {/* Background ethereal light */}
      <div className="absolute w-[600px] h-[400px] rounded-full bg-indigo-900/10 blur-[140px] pointer-events-none" />

      {/* CONTENT REPRODUCING SCREENSHOT 3 */}
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        
        {/* OVERVIEW Kicker */}
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B3A8D8] mb-4">
          OVERVIEW
        </span>

        {/* Big Serif Heading: "Hi, we're NaviCare" */}
        <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#F6F4EB] tracking-tight mb-8">
          Hi, we&apos;re NaviCare
        </h2>

        {/* Manifesto Paragraphs matching Screenshot 3 */}
        <div className="space-y-6 text-base sm:text-lg md:text-xl text-stone-300 font-light leading-relaxed max-w-2xl text-center">
          <p>
            A women-founded, women-built cycle tracking app that helps you explore your hormonal health universe.
          </p>
          <p>
            Your body isn&apos;t a void of mysterious happenings. It&apos;s a cyclical system of hormones, phases, symptoms, signals, and patterns that you can map, study, and apply to your every day.
          </p>
          <p className="font-medium text-[#F6F4EB]">
            That&apos;s why we&apos;re here.
          </p>
        </div>

        {/* THE CIRCULAR RAINBOW SPECTRAL MOON PHASES RING FROM SCREENSHOT 3 */}
        <div className="mt-14 flex flex-col items-center">
          <div className="relative w-28 h-28 flex items-center justify-center">
            
            {/* SVG Ring with colorful crescent moon phase dots */}
            <svg className="w-full h-full" viewBox="0 0 100 100">
              {/* Center subtle guide circle */}
              <circle cx="50" cy="50" r="36" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
              
              {/* Render spectral dots in a circle */}
              {PHASES.map((phase, idx) => {
                const angle = (idx / PHASES.length) * 360 - 90;
                const rad = (angle * Math.PI) / 180;
                const r = 36;
                const cx = 50 + r * Math.cos(rad);
                const cy = 50 + r * Math.sin(rad);
                const isSelected = selectedPhaseIndex === idx;

                return (
                  <g 
                    key={phase.id} 
                    onClick={() => setSelectedPhaseIndex(idx)}
                    className="cursor-pointer group"
                  >
                    {/* Glowing highlight ring for selected */}
                    {isSelected && (
                      <circle
                        cx={cx}
                        cy={cy}
                        r="6"
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="1.5"
                        className="animate-pulse"
                      />
                    )}

                    {/* Crescent Dot */}
                    <circle
                      cx={cx}
                      cy={cy}
                      r={isSelected ? 4 : 3}
                      fill={phase.color}
                      className="transition-all duration-300 group-hover:scale-125"
                      style={{
                        filter: isSelected ? `drop-shadow(0 0 6px ${phase.color})` : undefined,
                      }}
                    />
                  </g>
                );
              })}

              {/* Active Center Dot or indicator */}
              <circle cx="50" cy="14" r="3" fill="#ffffff" />
            </svg>
          </div>

          <span className="text-[11px] text-purple-300/80 font-mono tracking-wider uppercase mt-2">
            Click dots to explore spectral phases
          </span>

          {/* Interactive Phase Detail Card */}
          <div className="mt-4 max-w-md w-full bg-[#130d2a]/80 border border-white/10 rounded-2xl p-4 text-left backdrop-blur-md transition-all">
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="font-semibold text-white flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ backgroundColor: selected.color }} />
                {selected.name}
              </span>
              <span className="text-[10px] font-mono text-purple-300 bg-purple-900/30 px-2 py-0.5 rounded-full">
                {selected.hormone}
              </span>
            </div>
            <p className="text-xs text-stone-300 mt-1 leading-relaxed">
              {selected.tip}
            </p>
            <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-stone-400">
              <span className="text-purple-200 font-medium">{selected.angelResonance}</span>
              <span>Spectral Resonance</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
