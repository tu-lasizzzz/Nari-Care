import React, { useState } from 'react';
import { Info, Sparkles, ShieldCheck } from 'lucide-react';

interface PlanetInfoModal {
  title: string;
  subtitle: string;
  lore: string;
  frequency: string;
  actionHref?: string;
}

export const CelestialPlanets: React.FC = () => {
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetInfoModal | null>(null);

  const planetData: Record<string, PlanetInfoModal> = {
    yellowGas: {
      title: 'Your Data is Private. Period.',
      subtitle: 'Solar Vitalis & Sovereign Health Encryption',
      lore: 'We do not sell data. Never have, never will. Our business is built on subscriptions, not your personal information. Protected by SuperTokens decoupled authentication.',
      frequency: '528 Hz · Zero Data Brokerage',
      actionHref: '#privacy-section',
    },
    pinkOrb: {
      title: 'Cybele Prime (About Us)',
      subtitle: 'The Magenta Resonance Sphere',
      lore: 'The mother archetype of hormonal cycles. Symbolizes intuition, deep blood tides, and the sanctuary of renewal before rebirth.',
      frequency: '432 Hz · Divine Feminine',
      actionHref: '#about-orb',
    },
    saturnGreen: {
      title: 'Aurelia Ringed Titan',
      subtitle: 'The Luminous Emerald-Gold Ringed Planet',
      lore: 'Ringed in crystal dust and orbital order. Channels the luteal phase: boundary setting, architectural precision, and sacred discernment.',
      frequency: '639 Hz · Relational Harmony',
    },
    bluePurpleOrb: {
      title: 'Nephila Depths',
      subtitle: 'The Cobalt-Violet Atmospheric Sphere',
      lore: 'The guardian planet of dreams and melatonin synthesis. Its banded stratospheres govern emotional depth and astral flight during restorative sleep.',
      frequency: '963 Hz · Seraphic Crown',
    },
  };

  const scrollToSection = (href?: string) => {
    if (!href) return;
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* LEFT PLANET CLUSTER (Foreground Golden Gas Giant + Background Pink Orb) */}
      <div className="absolute left-[-40px] sm:left-[2%] md:left-[5%] lg:left-[8%] top-[20%] md:top-[28%] z-10 select-none">
        
        {/* Background Pink/Magenta Sphere (Screenshot 1 / Video Frame 1) */}
        <div 
          onClick={() => scrollToSection('#about-orb')}
          className="absolute -top-16 sm:-top-20 left-12 sm:left-16 w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full cursor-pointer transition-transform hover:scale-105 group"
          title="Click to visit About Us"
        >
          <div 
            className="w-full h-full rounded-full shadow-[inset_-18px_-18px_30px_rgba(0,0,0,0.8),inset_10px_10px_20px_rgba(255,255,255,0.3),0_0_40px_rgba(236,72,153,0.35)] relative overflow-hidden"
            style={{
              background: 'radial-gradient(circle at 35% 30%, #f472b6 0%, #ec4899 45%, #9d174d 85%, #500724 100%)',
            }}
          >
            <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[repeating-linear-gradient(0deg,transparent,transparent_8px,rgba(0,0,0,0.5)_8px,rgba(0,0,0,0.5)_14px)]" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-white/20 pointer-events-none" />
          </div>

          <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] text-pink-200 border border-pink-500/30 whitespace-nowrap pointer-events-none">
            About Us
          </div>
        </div>

        {/* Foreground Yellow/Gold Gas Giant with "Your Data" pill (Video Frame 3) */}
        <div 
          onClick={() => scrollToSection('#privacy-section')}
          className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-68 md:h-68 rounded-full cursor-pointer transition-transform hover:scale-105 group flex items-center justify-center"
          title="Click to view Your Data privacy statement"
        >
          <div 
            className="w-full h-full rounded-full shadow-[inset_-25px_-20px_45px_rgba(0,0,0,0.85),inset_15px_15px_25px_rgba(255,255,255,0.35),0_0_50px_rgba(234,179,8,0.25)] relative overflow-hidden"
            style={{
              background: 'radial-gradient(circle at 35% 30%, #fef08a 0%, #facc15 35%, #eab308 60%, #ca8a04 85%, #713f12 100%)',
            }}
          >
            <div className="absolute inset-0 opacity-60 mix-blend-color-burn bg-[repeating-linear-gradient(0deg,rgba(180,83,9,0.3),rgba(180,83,9,0.3)_6px,rgba(254,240,138,0.1)_6px,rgba(254,240,138,0.1)_16px,rgba(146,64,14,0.5)_16px,rgba(146,64,14,0.5)_24px)]" />
            <div className="absolute bottom-4 left-0 right-0 h-8 bg-gradient-to-r from-red-500/40 via-amber-600/50 to-red-600/30 blur-sm" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-white/25 pointer-events-none" />
          </div>

          {/* "Your Data" Pill Overlay exactly as in Frame 3 of the video */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white font-serif text-sm tracking-wide shadow-lg group-hover:scale-110 group-hover:bg-black/80 transition-all pointer-events-none">
            Your Data
          </div>
        </div>
      </div>

      {/* RIGHT PLANET CLUSTER (Foreground Lime Ringed Planet + Background Cobalt Orb) */}
      <div className="absolute right-[-40px] sm:right-[2%] md:right-[5%] lg:right-[8%] top-[22%] md:top-[30%] z-10 select-none">
        
        {/* Background Blue/Purple Banded Sphere */}
        <div 
          onClick={() => setSelectedPlanet(planetData.bluePurpleOrb)}
          className="absolute -top-16 sm:-top-20 right-14 sm:right-20 w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full cursor-pointer transition-transform hover:scale-105 group"
          title="Click to inspect Nephila Depths"
        >
          <div 
            className="w-full h-full rounded-full shadow-[inset_-20px_-20px_35px_rgba(0,0,0,0.8),inset_12px_12px_22px_rgba(255,255,255,0.3),0_0_40px_rgba(59,130,246,0.3)] relative overflow-hidden"
            style={{
              background: 'radial-gradient(circle at 35% 30%, #38bdf8 0%, #2563eb 40%, #7c3aed 75%, #1e1b4b 100%)',
            }}
          >
            <div className="absolute inset-0 opacity-50 bg-[repeating-linear-gradient(0deg,rgba(96,165,250,0.2),rgba(96,165,250,0.2)_8px,rgba(168,85,247,0.3)_8px,rgba(168,85,247,0.3)_18px)]" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-white/25 pointer-events-none" />
          </div>

          <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] text-cyan-200 border border-cyan-500/30 whitespace-nowrap pointer-events-none">
            Nephila Depths
          </div>
        </div>

        {/* Foreground Lime Saturn-like Ringed Gas Giant */}
        <div 
          onClick={() => scrollToSection('#feature-stops')}
          className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-68 md:h-68 cursor-pointer transition-transform hover:scale-105 group flex items-center justify-center"
          title="Click to view Cycle Features"
        >
          {/* Tilted Ring System */}
          <div 
            className="absolute w-[240px] sm:w-[320px] md:w-[380px] h-[70px] sm:h-[95px] md:h-[110px] rounded-[100%] border-[14px] sm:border-[20px] md:border-[24px] border-[#a3e635] shadow-[0_0_30px_rgba(163,230,53,0.3)] -rotate-12 pointer-events-none z-20 opacity-90"
            style={{
              background: 'transparent',
              borderColor: 'rgba(163, 230, 53, 0.75)',
              clipPath: 'polygon(0% 45%, 100% 45%, 100% 100%, 0% 100%)',
            }}
          />

          {/* Central Lime Sphere */}
          <div 
            className="w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full shadow-[inset_-22px_-20px_40px_rgba(0,0,0,0.85),inset_12px_12px_24px_rgba(255,255,255,0.35),0_0_40px_rgba(132,204,22,0.25)] relative overflow-hidden z-10"
            style={{
              background: 'radial-gradient(circle at 35% 30%, #d9f99d 0%, #a3e635 35%, #65a30d 70%, #365314 100%)',
            }}
          >
            <div className="absolute inset-0 opacity-40 bg-[repeating-linear-gradient(0deg,rgba(77,124,15,0.3),rgba(77,124,15,0.3)_6px,rgba(217,249,157,0.1)_6px,rgba(217,249,157,0.1)_14px)]" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-white/20 pointer-events-none" />
          </div>

          {/* Back half of ring */}
          <div 
            className="absolute w-[240px] sm:w-[320px] md:w-[380px] h-[70px] sm:h-[95px] md:h-[110px] rounded-[100%] border-[14px] sm:border-[20px] md:border-[24px] border-[#84cc16]/60 -rotate-12 pointer-events-none z-0"
            style={{
              background: 'transparent',
              borderColor: 'rgba(132, 204, 22, 0.45)',
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%)',
            }}
          />

          <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-7 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] text-lime-200 border border-lime-500/30 whitespace-nowrap pointer-events-none z-30">
            Aurelia Titan
          </div>
        </div>
      </div>

      {/* Planetary lore modal */}
      {selectedPlanet && (
        <div 
          onClick={() => setSelectedPlanet(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md cursor-pointer animate-in fade-in"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm rounded-3xl bg-[#140e2b] border border-purple-500/30 p-6 text-white shadow-2xl relative"
          >
            <div className="flex items-center gap-2 text-purple-300 text-xs font-mono uppercase tracking-wider mb-2">
              <Sparkles size={14} />
              Celestial Body Alignment
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#F6F4EB] mb-1">
              {selectedPlanet.title}
            </h3>
            <p className="text-xs text-purple-200/70 mb-4 font-medium">
              {selectedPlanet.subtitle}
            </p>
            <p className="text-sm text-stone-300 leading-relaxed mb-4">
              {selectedPlanet.lore}
            </p>
            <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-800/40 text-xs text-purple-200 flex items-center justify-between">
              <span className="font-mono text-purple-300">{selectedPlanet.frequency}</span>
              <span className="text-[10px] text-stone-400">Harmonic Lock</span>
            </div>
            <button
              onClick={() => setSelectedPlanet(null)}
              className="mt-5 w-full py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-medium text-stone-200 transition-colors"
            >
              Close Orbit
            </button>
          </div>
        </div>
      )}
    </>
  );
};
