import React, { useMemo } from 'react';

export const CosmicBackground: React.FC = () => {
  // Generate deterministic stars for universe background
  const stars = useMemo(() => {
    const starList = [];
    for (let i = 0; i < 90; i++) {
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const size = Math.random() * 2 + 0.8;
      const opacity = Math.random() * 0.7 + 0.2;
      const duration = Math.random() * 4 + 3;
      const delay = Math.random() * 5;
      starList.push({ id: i, top, left, size, opacity, duration, delay });
    }
    return starList;
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Deep universe space gradient */}
      <div className="absolute inset-0 bg-radial from-[#181135]/40 via-[#0d0920] to-[#080512]" />

      {/* Subtle cosmic nebula whispers */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-indigo-950/20 blur-[130px]" />
      <div className="absolute top-2/3 right-1/4 w-[500px] h-[400px] rounded-full bg-fuchsia-950/15 blur-[120px]" />

      {/* Twinkling star field */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animation: `celestial-float ${star.duration}s ease-in-out infinite alternate`,
            animationDelay: `${star.delay}s`,
            boxShadow: star.size > 2 ? '0 0 4px rgba(255, 255, 255, 0.8)' : undefined,
          }}
        />
      ))}
    </div>
  );
};
