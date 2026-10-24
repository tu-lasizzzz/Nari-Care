import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Sparkles, Feather, Shield, Compass, Heart, Eye } from 'lucide-react';

interface AngelNumberData {
  number: string;
  title: string;
  meaning: string;
  phaseMatch: string;
}

const ANGEL_NUMBERS: AngelNumberData[] = [
  {
    number: '111',
    title: 'Intuitive New Genesis',
    meaning: 'Your cellular portal is open. A complete hormonal reset invites fresh intention.',
    phaseMatch: 'Menstrual Phase · Days 1-5',
  },
  {
    number: '333',
    title: 'Ascension & Creative Flight',
    meaning: 'The cherubic wings unfurl. Rising estrogen ignites visionary work and social grace.',
    phaseMatch: 'Follicular Phase · Days 6-12',
  },
  {
    number: '777',
    title: 'The Seraphic Crown (Euphoria)',
    meaning: 'Peak magnetism. You are human champagne in a crystal universe; radiate fearlessly.',
    phaseMatch: 'Ovulatory Phase · Days 13-16',
  },
  {
    number: '444',
    title: 'The Archangel Sanctuary',
    meaning: 'Protection and quiet armor. Progesterone grounds your spirit in sacred self-care.',
    phaseMatch: 'Mid-Luteal Phase · Days 17-24',
  },
  {
    number: '999',
    title: 'The Astral Veil & Rebirth',
    meaning: 'Completion of the cyclical orbit. Shed what is heavy; dawn is already preparing.',
    phaseMatch: 'Late Luteal · Days 25-28',
  },
];

export const WingsSanctuarySection: React.FC = () => {
  const [selectedNumber, setSelectedNumber] = useState<AngelNumberData>(ANGEL_NUMBERS[2]);
  const [wingFilter, setWingFilter] = useState<'pure' | 'aurora' | 'amethyst' | 'solar'>('pure');

  // Ref for tracking scroll parallax of the wings container
  const wingsShowcaseRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: wingsShowcaseRef,
    offset: ['start end', 'end start'],
  });

  // Smooth springs for high-fidelity physics
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 24,
    restDelta: 0.001,
  });

  // Parallax transforms:
  // As the user scrolls into view, the wings spread outward (scale from 0.92 to 1.07),
  // rotate slightly in 3D perspective, and translate vertically
  const wingScale = useTransform(smoothProgress, [0, 0.5, 1], [0.92, 1.04, 1.08]);
  const wingY = useTransform(smoothProgress, [0, 1], [-25, 30]);
  const wingRotateX = useTransform(smoothProgress, [0, 0.5, 1], [10, 0, -8]);
  const wingSpread = useTransform(smoothProgress, [0, 0.5, 1], [0.96, 1.02, 1.05]);
  const auraGlow = useTransform(smoothProgress, [0, 0.5, 1], [0.35, 0.75, 0.4]);

  const filterStyles = {
    pure: 'filter drop-shadow-[0_0_35px_rgba(255,255,255,0.7)]',
    aurora: 'filter hue-rotate-30 drop-shadow-[0_0_40px_rgba(56,189,248,0.7)] brightness-110',
    amethyst: 'filter hue-rotate-90 drop-shadow-[0_0_40px_rgba(192,132,252,0.8)]',
    solar: 'filter hue-rotate-330 drop-shadow-[0_0_40px_rgba(250,204,21,0.7)] saturate-150',
  };

  return (
    <section id="wings-sanctuary" className="relative py-28 px-6 max-w-6xl mx-auto overflow-hidden">
      
      {/* Background ethereal light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-900/10 blur-[150px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/25 text-xs text-cyan-200 mb-4">
          <Feather size={14} className="text-cyan-300" />
          <span>The Crystalline Seraphim Archetype</span>
        </div>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F6F4EB] font-normal tracking-tight mb-4">
          The Wings in the Universe
        </h2>
        <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
          In ancient star lore, the human menstrual cycle was revered as the earthly reflection of seraphic wings — expanding into radiant light, and folding inward into sacred quietude.
        </p>
      </div>

      {/* Showcase: Featured Wings Interactive Exhibit with Scroll Parallax */}
      <div 
        ref={wingsShowcaseRef}
        className="relative rounded-3xl bg-[#0f0923]/90 border border-white/10 p-6 sm:p-10 mb-16 backdrop-blur-md overflow-hidden shadow-2xl"
        style={{ perspective: 1200 }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-serif text-2xl text-white font-semibold">
                Seraphic Diamond Plumage
              </h3>
              <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-400/30 text-[10px] text-cyan-300 font-mono">
                <Sparkles size={10} /> Scroll Parallax Active
              </span>
            </div>
            <p className="text-xs text-stone-400 mt-0.5">
              High-resolution crystal structure rendered in cosmic deep-space resonance
            </p>
          </div>

          {/* Wing Aura Tint Controls */}
          <div className="flex items-center gap-1.5 bg-black/50 p-1 rounded-full border border-white/10">
            <span className="text-[10px] text-stone-400 font-mono uppercase px-2">Aura:</span>
            <button
              onClick={() => setWingFilter('pure')}
              className={`px-3 py-1 rounded-full text-xs transition-all cursor-pointer ${
                wingFilter === 'pure' ? 'bg-white text-slate-900 font-medium' : 'text-stone-300 hover:text-white'
              }`}
            >
              Diamond
            </button>
            <button
              onClick={() => setWingFilter('aurora')}
              className={`px-3 py-1 rounded-full text-xs transition-all cursor-pointer ${
                wingFilter === 'aurora' ? 'bg-cyan-400 text-slate-900 font-medium' : 'text-stone-300 hover:text-white'
              }`}
            >
              Cyan Nebula
            </button>
            <button
              onClick={() => setWingFilter('amethyst')}
              className={`px-3 py-1 rounded-full text-xs transition-all cursor-pointer ${
                wingFilter === 'amethyst' ? 'bg-purple-400 text-slate-900 font-medium' : 'text-stone-300 hover:text-white'
              }`}
            >
              Amethyst
            </button>
            <button
              onClick={() => setWingFilter('solar')}
              className={`px-3 py-1 rounded-full text-xs transition-all cursor-pointer ${
                wingFilter === 'solar' ? 'bg-amber-300 text-slate-900 font-medium' : 'text-stone-300 hover:text-white'
              }`}
            >
              Solar
            </button>
          </div>
        </div>

        {/* The Wings Centerpiece with dynamic scroll-driven 3D perspective shift & spreading */}
        <div className="relative py-12 flex items-center justify-center min-h-[380px] sm:min-h-[480px]">
          
          {/* Scroll-driven ethereal ambient radial light */}
          <motion.div 
            style={{ opacity: auraGlow }}
            className="absolute inset-0 max-w-3xl mx-auto rounded-full bg-gradient-to-r from-blue-500/20 via-cyan-400/30 to-purple-500/20 blur-[100px] pointer-events-none" 
          />

          {/* Parallax Motion Image Container */}
          <motion.div
            style={{
              scale: wingScale,
              y: wingY,
              rotateX: wingRotateX,
              scaleX: wingSpread,
              transformStyle: 'preserve-3d',
            }}
            className="relative w-full flex items-center justify-center will-change-transform"
          >
            <img
              src="/assets/aistudio/Screenshot_2026-10-24_220703_1ad15653.png"
              alt="Central Ethereal Angel Wings in Universe"
              className={`w-full max-w-4xl max-h-[480px] object-contain transition-[filter] duration-700 pointer-events-auto ${filterStyles[wingFilter]}`}
            />
          </motion.div>
        </div>

        {/* Wings 4 Quadrants Lore */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-white/10 text-left">
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="text-cyan-300 font-mono text-xs mb-1">01. Apex Primaries</div>
            <h4 className="font-serif text-lg text-white mb-1">Estrogen Ascension</h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              Feathers that lift your vision into orbit. Synapses fire faster, energy climbs, and creative output soars.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="text-amber-300 font-mono text-xs mb-1">02. Crystal Diamonds</div>
            <h4 className="font-serif text-lg text-white mb-1">Ovulatory Crown</h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              The glistening core where hormonal champagne is poured. Highest social confidence, charisma, and biological radiance.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="text-purple-300 font-mono text-xs mb-1">03. Archangel Armor</div>
            <h4 className="font-serif text-lg text-white mb-1">Progesterone Shield</h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              Protective outer plumage that shelters your nervous system. Prioritizes discernment, nesting, and boundaries.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="text-rose-300 font-mono text-xs mb-1">04. Astral Down</div>
            <h4 className="font-serif text-lg text-white mb-1">Seraphic Rebirth</h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              Soft celestial down that cradles you during menstruation. Deep astral regeneration before the next cosmic flight.
            </p>
          </div>
        </div>
      </div>

      {/* Angel Numbers & Synchronicity Tracker */}
      <div className="bg-[#120b29]/80 border border-purple-500/20 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-purple-300">
              Synchronicity Engine
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold mt-1">
              Angel Numbers Aligned with Hormonal Cycles
            </h3>
          </div>
          <span className="text-xs text-stone-400">
            Select an angel frequency to read its cyclical meaning
          </span>
        </div>

        {/* Number Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {ANGEL_NUMBERS.map((item) => (
            <button
              key={item.number}
              onClick={() => setSelectedNumber(item)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                selectedNumber.number === item.number
                  ? 'bg-purple-600 text-white font-bold shadow-[0_0_15px_rgba(168,85,247,0.5)]'
                  : 'bg-white/5 text-stone-300 hover:bg-white/10 border border-white/5'
              }`}
            >
              #{item.number}
            </button>
          ))}
        </div>

        {/* Active Number Display Card */}
        <div className="p-6 rounded-2xl bg-black/40 border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-900 to-indigo-700 flex items-center justify-center font-mono text-2xl font-bold text-white shrink-0 shadow-lg">
              {selectedNumber.number}
            </div>
            <div>
              <div className="text-xs font-mono text-purple-300 mb-1">
                {selectedNumber.phaseMatch}
              </div>
              <h4 className="font-serif text-2xl text-white font-semibold mb-1">
                {selectedNumber.title}
              </h4>
              <p className="text-sm text-stone-300 leading-relaxed max-w-xl">
                {selectedNumber.meaning}
              </p>
            </div>
          </div>

          <div className="shrink-0 p-3 rounded-xl bg-purple-950/40 border border-purple-800/30 text-center">
            <span className="text-[10px] text-stone-400 block uppercase tracking-wider">Sync State</span>
            <span className="text-sm font-semibold text-purple-200">Angelically Calibrated</span>
          </div>
        </div>
      </div>

    </section>
  );
};
