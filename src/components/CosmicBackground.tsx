import React, { useMemo, useState, useEffect } from 'react';

export const CosmicBackground: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll position across the entire page for smooth color transition
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollEl = document.documentElement;
          const maxScroll = scrollEl.scrollHeight - window.innerHeight;
          if (maxScroll > 0) {
            const currentY = window.pageYOffset || scrollEl.scrollTop || 0;
            const progress = Math.min(1, Math.max(0, currentY / maxScroll));
            setScrollProgress(progress);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Compute smooth continuous opacities for the 4 gradient stages:
  // 1. Light Blue / Teal Cosmic Dust (Top / Hero)
  // 2. Deep Navy Blue
  // 3. Dark Indigo
  // 4. Darkest Midnight Blue / Black (Bottom / Footer)
  const op1 = Math.max(0, 1 - scrollProgress * 3.2);
  const op2 = Math.max(0, Math.min(1, 1 - Math.abs(scrollProgress - 0.35) * 3.4));
  const op3 = Math.max(0, Math.min(1, 1 - Math.abs(scrollProgress - 0.68) * 3.2));
  const op4 = Math.max(0, (scrollProgress - 0.62) * 2.7);

  // Generate deterministic stars with varied colors and sizes
  const stars = useMemo(() => {
    const starList = [];
    const colors = ['#ffffff', '#e0f2fe', '#bae6fd', '#ddd6fe', '#fef08a'];

    for (let i = 0; i < 125; i++) {
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const size = Math.random() * 2.2 + 0.8;
      const opacity = Math.random() * 0.75 + 0.2;
      const duration = Math.random() * 4.5 + 2.5;
      const delay = Math.random() * 6;
      const color = colors[Math.floor(Math.random() * colors.length)];
      starList.push({ id: i, top, left, size, opacity, duration, delay, color });
    }
    return starList;
  }, []);

  // Prominent 4-point sparkling star flares
  const sparkleStars = useMemo(() => {
    return [
      { id: 's1', top: '12%', left: '18%', size: 14, delay: 0 },
      { id: 's2', top: '22%', left: '84%', size: 18, delay: 1.4 },
      { id: 's3', top: '38%', left: '10%', size: 12, delay: 2.1 },
      { id: 's4', top: '48%', left: '92%', size: 16, delay: 0.7 },
      { id: 's5', top: '65%', left: '15%', size: 20, delay: 1.8 },
      { id: 's6', top: '78%', left: '80%', size: 15, delay: 2.6 },
      { id: 's7', top: '88%', left: '25%', size: 13, delay: 1.1 },
      { id: 's8', top: '94%', left: '68%', size: 17, delay: 0.3 },
    ];
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* =========================================================================
          STAGE 1: LIGHT BLUE / TEAL COSMIC DUST GRADIENT (Scroll 0% - ~25%)
          ========================================================================= */}
      <div
        className="absolute inset-0 transition-opacity duration-300 ease-out will-change-[opacity]"
        style={{ opacity: op1 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_90%_at_50%_20%,#0c3442_0%,#08242f_35%,#051820_65%,#030e15_100%)]" />
        {/* Luminous teal & cyan cosmic dust clouds */}
        <div className="absolute -top-[10%] left-[15%] w-[850px] h-[650px] rounded-full bg-cyan-400/25 blur-[130px] animate-cosmic-drift mix-blend-screen" />
        <div className="absolute top-[10%] right-[10%] w-[750px] h-[600px] rounded-full bg-teal-300/20 blur-[140px] animate-cosmic-swirl mix-blend-screen" />
        <div className="absolute top-[25%] left-[30%] w-[600px] h-[500px] rounded-full bg-sky-400/22 blur-[120px] mix-blend-screen" />
      </div>

      {/* =========================================================================
          STAGE 2: DEEP NAVY BLUE GRADIENT (Scroll 25% - ~55%)
          ========================================================================= */}
      <div
        className="absolute inset-0 transition-opacity duration-300 ease-out will-change-[opacity]"
        style={{ opacity: op2 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_90%_at_50%_35%,#0b2140_0%,#071830_38%,#040f20_68%,#020812_100%)]" />
        {/* Sapphire and deep royal navy swirling nebulae */}
        <div className="absolute top-[20%] left-[10%] w-[850px] h-[700px] rounded-full bg-blue-500/24 blur-[140px] animate-cosmic-swirl-rev mix-blend-screen" />
        <div className="absolute top-[35%] right-[15%] w-[700px] h-[650px] rounded-full bg-indigo-500/22 blur-[130px] animate-cosmic-drift mix-blend-screen" />
        <div className="absolute top-[15%] right-[30%] w-[550px] h-[450px] rounded-full bg-sky-500/18 blur-[110px] mix-blend-screen" />
      </div>

      {/* =========================================================================
          STAGE 3: DARK INDIGO GRADIENT (Scroll 55% - ~80%)
          ========================================================================= */}
      <div
        className="absolute inset-0 transition-opacity duration-300 ease-out will-change-[opacity]"
        style={{ opacity: op3 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_90%_at_50%_45%,#160e36_0%,#0f0927_40%,#0a061b_70%,#05030e_100%)]" />
        {/* Violet & amethyst swirling celestial dust */}
        <div className="absolute top-[40%] left-[20%] w-[800px] h-[650px] rounded-full bg-purple-600/20 blur-[135px] animate-cosmic-swirl mix-blend-screen" />
        <div className="absolute top-[55%] right-[10%] w-[750px] h-[600px] rounded-full bg-indigo-600/24 blur-[140px] animate-cosmic-swirl-rev mix-blend-screen" />
        <div className="absolute top-[48%] left-[40%] w-[550px] h-[450px] rounded-full bg-fuchsia-600/15 blur-[120px] mix-blend-screen" />
      </div>

      {/* =========================================================================
          STAGE 4: DARKEST MIDNIGHT BLUE / BLACK GRADIENT (Scroll 80% - 100%)
          ========================================================================= */}
      <div
        className="absolute inset-0 transition-opacity duration-300 ease-out will-change-[opacity]"
        style={{ opacity: op4 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_90%_at_50%_50%,#080516_0%,#04020c_45%,#020106_75%,#000000_100%)]" />
        {/* Deep abyss celestial whisper */}
        <div className="absolute bottom-[10%] left-[25%] w-[700px] h-[550px] rounded-full bg-purple-950/25 blur-[150px] mix-blend-screen" />
        <div className="absolute bottom-[20%] right-[20%] w-[600px] h-[500px] rounded-full bg-indigo-950/20 blur-[140px] mix-blend-screen" />
      </div>

      {/* =========================================================================
          SWIRLING COSMIC NEBULA CLUSTERS (Dynamic Multi-Directional Rotation)
          ========================================================================= */}
      <div className="absolute inset-0 opacity-80 mix-blend-screen pointer-events-none">
        {/* Swirling Nebula 1: Upper-left Cyan/Teal Cosmic Vortex */}
        <div
          className="absolute -top-[15%] -left-[10%] w-[800px] h-[800px] rounded-full blur-[130px] animate-cosmic-swirl"
          style={{
            background:
              'radial-gradient(circle, rgba(56,189,248,0.25) 0%, rgba(20,184,166,0.18) 45%, transparent 70%)',
          }}
        />

        {/* Swirling Nebula 2: Central Azure-Electric Corona */}
        <div
          className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[900px] h-[750px] rounded-full blur-[125px] animate-cosmic-drift"
          style={{
            background:
              'radial-gradient(ellipse, rgba(59,130,246,0.22) 0%, rgba(14,165,233,0.18) 40%, rgba(99,102,241,0.1) 70%, transparent 85%)',
          }}
        />

        {/* Swirling Nebula 3: Mid-Space Reverse Indigo Swirl */}
        <div
          className="absolute top-[45%] right-[-5%] w-[850px] h-[850px] rounded-full blur-[140px] animate-cosmic-swirl-rev"
          style={{
            background:
              'radial-gradient(circle, rgba(139,92,246,0.22) 0%, rgba(99,102,241,0.18) 45%, transparent 70%)',
          }}
        />

        {/* Swirling Nebula 4: Deep Stardust Band */}
        <div
          className="absolute top-[70%] left-[-5%] w-[800px] h-[800px] rounded-full blur-[140px] animate-cosmic-swirl"
          style={{
            background:
              'radial-gradient(circle, rgba(168,85,247,0.18) 0%, rgba(79,70,229,0.15) 50%, transparent 75%)',
          }}
        />
      </div>

      {/* =========================================================================
          SCATTERED SPARKLING STARLIGHT (Twinkling Starfield)
          ========================================================================= */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color,
            opacity: star.opacity,
            animation: `celestial-float ${star.duration}s ease-in-out infinite alternate`,
            animationDelay: `${star.delay}s`,
            boxShadow:
              star.size > 2
                ? `0 0 6px ${star.color}, 0 0 12px rgba(255, 255, 255, 0.4)`
                : undefined,
          }}
        />
      ))}

      {/* 4-Point Sparkling Star Flares (Cross Light Flares) */}
      {sparkleStars.map((s) => (
        <div
          key={s.id}
          className="absolute pointer-events-none flex items-center justify-center animate-sparkle"
          style={{
            top: s.top,
            left: s.left,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
          }}
        >
          {/* Horizontal Spike */}
          <div className="absolute w-full h-[1.5px] bg-gradient-to-r from-transparent via-cyan-200 to-transparent shadow-[0_0_8px_#38bdf8]" />
          {/* Vertical Spike */}
          <div className="absolute h-full w-[1.5px] bg-gradient-to-b from-transparent via-cyan-200 to-transparent shadow-[0_0_8px_#38bdf8]" />
          {/* Bright Center Core */}
          <div className="w-[3px] h-[3px] rounded-full bg-white shadow-[0_0_6px_#ffffff]" />
        </div>
      ))}
    </div>
  );
};
