import React, { useState, useEffect, useRef } from 'react';
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
  const animFrameRef = useRef<number | null>(null);

  // Orbital state
  const [orbitAngle, setOrbitAngle] = useState(0);
  const [windowDim, setWindowDim] = useState({
    w: typeof window !== 'undefined' ? window.innerWidth : 1400,
    h: typeof window !== 'undefined' ? window.innerHeight : 900,
  });

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
      actionHref: '#feature-stops',
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

  // Continuous 3D Circular/Elliptical Orbital Motion
  useEffect(() => {
    const onResize = () => {
      setWindowDim({ w: window.innerWidth, h: window.innerHeight });
    };
    window.addEventListener('resize', onResize);

    let startTime = performance.now();
    let scrollAdd = 0;

    const handleScroll = () => {
      const scrollMax = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollMax > 0) {
        scrollAdd = (window.scrollY / scrollMax) * Math.PI * 2;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const loop = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      // Slow majestic continuous orbit speed: ~90 seconds for a full rotation + scroll modulation
      const baseAngle = (elapsed * (Math.PI * 2)) / 90;
      setOrbitAngle(baseAngle + scrollAdd * 0.7);
      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', handleScroll);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  // Compute 3D elliptical coordinates for each planet
  // Rx and Ry keep the planets orbiting gracefully along the outer perimeter of the screen
  const cx = windowDim.w / 2;
  const cy = windowDim.h / 2;
  const rx = Math.max(280, windowDim.w * 0.44);
  const ry = Math.max(220, windowDim.h * 0.38);

  const getPlanetTransform = (phaseOffset: number) => {
    const theta = orbitAngle + phaseOffset;
    const x = cx + rx * Math.cos(theta);
    const y = cy + ry * Math.sin(theta);
    const zDepth = Math.sin(theta); // -1 (deep background) to +1 (near perimeter)

    // Scale: between 0.72 (far in distance) and 0.98 (near sides)
    const scale = 0.75 + 0.22 * ((zDepth + 1) / 2);
    // Opacity: between 0.65 and 0.95
    const opacity = 0.68 + 0.28 * ((zDepth + 1) / 2);

    return {
      x,
      y,
      scale,
      opacity,
      zIndex: zDepth > 0 ? 12 : 3,
    };
  };

  // Planets with 90° orbital phase separations
  const p1 = getPlanetTransform(0); // Yellow Gas Giant (Your Data)
  const p2 = getPlanetTransform(Math.PI * 0.5); // Pink/Magenta Sphere (About Us)
  const p3 = getPlanetTransform(Math.PI); // Lime Ringed Planet (Aurelia Titan)
  const p4 = getPlanetTransform(Math.PI * 1.5); // Cobalt/Violet Sphere (Nephila Depths)

  return (
    <>
      {/* FIXED CONTINUOUS 3D ORBITAL WRAPPER (Never drifts off screen or disappears) */}
      <div className="fixed inset-0 pointer-events-none z-[3] overflow-hidden">
        {/* =========================================================================
            PLANET 1: GOLDEN GAS GIANT ("Your Data" Sovereign Encryption)
            ========================================================================= */}
        <div
          className="absolute will-change-transform pointer-events-auto cursor-pointer select-none group"
          style={{
            transform: `translate3d(${p1.x - 90}px, ${p1.y - 90}px, 0) scale(${p1.scale})`,
            opacity: p1.opacity,
            transition: 'opacity 0.2s ease-out',
          }}
          onClick={() => scrollToSection('#privacy-section')}
          title="Click to view Your Data privacy statement"
        >
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full flex items-center justify-center">
            <div
              className="w-full h-full rounded-full shadow-[inset_-25px_-20px_45px_rgba(0,0,0,0.85),inset_15px_15px_25px_rgba(255,255,255,0.35),0_0_45px_rgba(234,179,8,0.25)] relative overflow-hidden animate-float-slow"
              style={{
                background:
                  'radial-gradient(circle at 35% 30%, #fef08a 0%, #facc15 35%, #eab308 60%, #ca8a04 85%, #713f12 100%)',
              }}
            >
              <div className="absolute inset-0 opacity-60 mix-blend-color-burn bg-[repeating-linear-gradient(0deg,rgba(180,83,9,0.3),rgba(180,83,9,0.3)_6px,rgba(254,240,138,0.1)_6px,rgba(254,240,138,0.1)_16px,rgba(146,64,14,0.5)_16px,rgba(146,64,14,0.5)_24px)]" />
              <div className="absolute bottom-4 left-0 right-0 h-8 bg-gradient-to-r from-red-500/40 via-amber-600/50 to-red-600/30 blur-sm" />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-white/25 pointer-events-none" />
            </div>

            {/* "Your Data" Pill Overlay */}
            <div className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white font-serif text-xs tracking-wide shadow-lg group-hover:scale-110 group-hover:bg-black/80 transition-all pointer-events-none">
              Your Data
            </div>
          </div>
        </div>

        {/* =========================================================================
            PLANET 2: PINK/MAGENTA SPHERE ("Cybele Prime" / About Us)
            ========================================================================= */}
        <div
          className="absolute will-change-transform pointer-events-auto cursor-pointer select-none group"
          style={{
            transform: `translate3d(${p2.x - 70}px, ${p2.y - 70}px, 0) scale(${p2.scale})`,
            opacity: p2.opacity,
            transition: 'opacity 0.2s ease-out',
          }}
          onClick={() => scrollToSection('#about-orb')}
          title="Click to visit About Us"
        >
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full flex items-center justify-center">
            <div
              className="w-full h-full rounded-full shadow-[inset_-18px_-18px_30px_rgba(0,0,0,0.8),inset_10px_10px_20px_rgba(255,255,255,0.3),0_0_35px_rgba(236,72,153,0.3)] relative overflow-hidden animate-float-reverse"
              style={{
                background:
                  'radial-gradient(circle at 35% 30%, #f472b6 0%, #ec4899 45%, #9d174d 85%, #500724 100%)',
              }}
            >
              <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[repeating-linear-gradient(0deg,transparent,transparent_8px,rgba(0,0,0,0.5)_8px,rgba(0,0,0,0.5)_14px)]" />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-white/20 pointer-events-none" />
            </div>

            <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-7 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] text-pink-200 border border-pink-500/30 whitespace-nowrap pointer-events-none">
              About Us
            </div>
          </div>
        </div>

        {/* =========================================================================
            PLANET 3: LIME RINGED TITAN ("Aurelia Titan" / Feature Stops)
            ========================================================================= */}
        <div
          className="absolute will-change-transform pointer-events-auto cursor-pointer select-none group"
          style={{
            transform: `translate3d(${p3.x - 90}px, ${p3.y - 90}px, 0) scale(${p3.scale})`,
            opacity: p3.opacity,
            transition: 'opacity 0.2s ease-out',
          }}
          onClick={() => scrollToSection('#feature-stops')}
          title="Click to view Cycle Features"
        >
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center">
            {/* Tilted Ring Front */}
            <div
              className="absolute w-[220px] sm:w-[260px] h-[65px] sm:h-[80px] rounded-[100%] border-[12px] sm:border-[16px] border-[#a3e635]/80 shadow-[0_0_25px_rgba(163,230,53,0.3)] -rotate-12 pointer-events-none z-20"
              style={{
                clipPath: 'polygon(0% 45%, 100% 45%, 100% 100%, 0% 100%)',
              }}
            />

            {/* Central Lime Sphere */}
            <div
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full shadow-[inset_-20px_-18px_35px_rgba(0,0,0,0.85),inset_10px_10px_20px_rgba(255,255,255,0.35),0_0_35px_rgba(132,204,22,0.25)] relative overflow-hidden z-10 animate-float-slow"
              style={{
                background:
                  'radial-gradient(circle at 35% 30%, #d9f99d 0%, #a3e635 35%, #65a30d 70%, #365314 100%)',
              }}
            >
              <div className="absolute inset-0 opacity-40 bg-[repeating-linear-gradient(0deg,rgba(77,124,15,0.3),rgba(77,124,15,0.3)_6px,rgba(217,249,157,0.1)_6px,rgba(217,249,157,0.1)_14px)]" />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-white/20 pointer-events-none" />
            </div>

            {/* Tilted Ring Back */}
            <div
              className="absolute w-[220px] sm:w-[260px] h-[65px] sm:h-[80px] rounded-[100%] border-[12px] sm:border-[16px] border-[#84cc16]/50 -rotate-12 pointer-events-none z-0"
              style={{
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%)',
              }}
            />

            <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-6 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] text-lime-200 border border-lime-500/30 whitespace-nowrap pointer-events-none z-30">
              Aurelia Titan
            </div>
          </div>
        </div>

        {/* =========================================================================
            PLANET 4: COBALT-VIOLET SPHERE ("Nephila Depths")
            ========================================================================= */}
        <div
          className="absolute will-change-transform pointer-events-auto cursor-pointer select-none group"
          style={{
            transform: `translate3d(${p4.x - 70}px, ${p4.y - 70}px, 0) scale(${p4.scale})`,
            opacity: p4.opacity,
            transition: 'opacity 0.2s ease-out',
          }}
          onClick={() => setSelectedPlanet(planetData.bluePurpleOrb)}
          title="Click to inspect Nephila Depths"
        >
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full flex items-center justify-center">
            <div
              className="w-full h-full rounded-full shadow-[inset_-20px_-20px_35px_rgba(0,0,0,0.8),inset_12px_12px_22px_rgba(255,255,255,0.3),0_0_35px_rgba(59,130,246,0.3)] relative overflow-hidden animate-float-reverse"
              style={{
                background:
                  'radial-gradient(circle at 35% 30%, #38bdf8 0%, #2563eb 40%, #7c3aed 75%, #1e1b4b 100%)',
              }}
            >
              <div className="absolute inset-0 opacity-50 bg-[repeating-linear-gradient(0deg,rgba(96,165,250,0.2),rgba(96,165,250,0.2)_8px,rgba(168,85,247,0.3)_8px,rgba(168,85,247,0.3)_18px)]" />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-white/25 pointer-events-none" />
            </div>

            <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-7 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] text-cyan-200 border border-cyan-500/30 whitespace-nowrap pointer-events-none">
              Nephila Depths
            </div>
          </div>
        </div>
      </div>

      {/* Planetary Lore Modal */}
      {selectedPlanet && (
        <div
          onClick={() => setSelectedPlanet(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md cursor-pointer animate-in fade-in"
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
