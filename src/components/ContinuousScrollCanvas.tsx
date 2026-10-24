import React, { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Constrained strictly to frames 1 - 160 (no frames beyond 160)
const TOTAL_FRAMES = 160;

function getFrameUrl(index: number): string {
  const pad = String(index).padStart(6, '0');
  return `/frames/frame_${pad}.png`;
}

interface ContinuousScrollCanvasProps {
  currentFrameCallback?: (frame: number) => void;
}

export const ContinuousScrollCanvas: React.FC<ContinuousScrollCanvasProps> = ({
  currentFrameCallback,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasWrapperRef = useRef<HTMLDivElement | null>(null);
  const glowWrapperRef = useRef<HTMLDivElement | null>(null);

  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES + 1).fill(null));
  const isLoadedRef = useRef<Uint8Array>(new Uint8Array(TOTAL_FRAMES + 1));
  const currentDrawnRef = useRef<number>(-1);
  const targetFrameRef = useRef<number>(1);

  const [loadedCount, setLoadedCount] = useState<number>(0);
  const [isPreloadComplete, setIsPreloadComplete] = useState<boolean>(false);

  // Retrieve nearest loaded frame to guarantee zero flicker
  const getBestFrame = useCallback((index: number) => {
    if (isLoadedRef.current[index] === 1 && imagesRef.current[index]) {
      return imagesRef.current[index];
    }
    // Search outwards for nearest available frame within 1 - 160 range
    for (let offset = 1; offset <= TOTAL_FRAMES; offset++) {
      const prev = index - offset;
      if (prev >= 1 && isLoadedRef.current[prev] === 1 && imagesRef.current[prev]) {
        return imagesRef.current[prev];
      }
      const next = index + offset;
      if (next <= TOTAL_FRAMES && isLoadedRef.current[next] === 1 && imagesRef.current[next]) {
        return imagesRef.current[next];
      }
    }
    return imagesRef.current[1];
  }, []);

  // Draw frame on canvas with high-quality cover scaling
  const drawFrame = useCallback(
    (frameIndex: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d', { alpha: false });
      if (!ctx) return;

      const safeIndex = Math.min(TOTAL_FRAMES, Math.max(1, frameIndex));
      const img = getBestFrame(safeIndex);
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;

      // Cover scaling: fills canvas preserving pristine aspect ratio
      const scale = Math.max(cw / iw, ch / ih);
      const sw = iw * scale;
      const sh = ih * scale;
      const sx = (cw - sw) / 2;
      const sy = (ch - sh) / 2;

      ctx.drawImage(img, 0, 0, iw, ih, sx, sy, sw, sh);
      currentDrawnRef.current = safeIndex;

      if (currentFrameCallback) {
        currentFrameCallback(safeIndex);
      }
    },
    [getBestFrame, currentFrameCallback]
  );

  // Hi-DPI responsive canvas sizing
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    const w = rect.width || window.innerWidth;
    const h = rect.height || window.innerHeight;

    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    if (currentDrawnRef.current > 0) {
      drawFrame(currentDrawnRef.current);
    } else {
      drawFrame(1);
    }
  }, [drawFrame]);

  // 1. Initial Frame Load & Preloading of Frames 1 - 160 ONLY
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    let count = 0;

    // Load Frame 1 immediately
    const f1 = new Image();
    imagesRef.current[1] = f1;
    f1.onload = () => {
      isLoadedRef.current[1] = 1;
      count++;
      setLoadedCount(count);
      drawFrame(1);
    };
    f1.src = getFrameUrl(1);

    // Preload remaining frames strictly up to 160
    for (let i = 2; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      imagesRef.current[i] = img;

      img.onload = () => {
        isLoadedRef.current[i] = 1;
        count++;
        setLoadedCount(count);

        if (count >= TOTAL_FRAMES) {
          setIsPreloadComplete(true);
        }

        if (Math.abs(targetFrameRef.current - i) <= 1 || currentDrawnRef.current === 1) {
          drawFrame(targetFrameRef.current);
        }
      };

      img.src = getFrameUrl(i);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize, drawFrame]);

  // 2. High-Performance GSAP ScrollTrigger Integration with scrub: 0.5 (Frames 1 - 160)
  useEffect(() => {
    const heroEl = document.getElementById('hero-wings');
    if (!heroEl) return;

    // GSAP ScrollTrigger 1: Concise Pinned Hero Transformation (frames 1 -> 160)
    // Fast, responsive, fluid sequence over concise ~1100px scroll distance
    const heroST = ScrollTrigger.create({
      trigger: '#hero-wings',
      start: 'top top',
      end: '+=1100',
      pin: true,
      pinSpacing: true,
      scrub: 0.5, // Butter-smooth weightless scrub
      onUpdate: (self) => {
        const frameIndex = Math.min(
          TOTAL_FRAMES,
          Math.max(1, Math.round(1 + self.progress * (TOTAL_FRAMES - 1)))
        );
        targetFrameRef.current = frameIndex;
        drawFrame(frameIndex);
      },
    });

    // GSAP ScrollTrigger 2: Downstream Continuous Parallel Flow
    // Retains majestic unfurled wings and gently breathes between frames 130 and 160
    // as the user scrolls past Hero into About Us, Data Privacy, Features, and Download
    const downstreamST = ScrollTrigger.create({
      trigger: '#about-orb',
      start: 'top bottom',
      end: 'bottom bottom',
      endTrigger: '#download-section',
      scrub: 0.5,
      onUpdate: (self) => {
        const progress = self.progress;
        const wave = Math.sin(progress * Math.PI * 4); // Organic gentle cycle
        const frameIndex = Math.round(145 + wave * 14); // Stays in 131 - 159 range
        const clamped = Math.min(TOTAL_FRAMES, Math.max(120, frameIndex));
        targetFrameRef.current = clamped;
        drawFrame(clamped);
      },
    });

    // GSAP ScrollTrigger 3: Smooth Downstream Opacity Transition
    // Keeps wings visible as a soft celestial backdrop (0.2) behind downstream cards & typography
    const opacityST = ScrollTrigger.create({
      trigger: '#about-orb',
      start: 'top 80%',
      end: 'bottom 20%',
      scrub: 0.4,
      onUpdate: (self) => {
        const p = self.progress;
        const targetOpacity = Math.max(0.2, 1 - p * 0.8);
        if (canvasWrapperRef.current) {
          canvasWrapperRef.current.style.opacity = String(targetOpacity);
        }
        if (glowWrapperRef.current) {
          glowWrapperRef.current.style.opacity = String(Math.max(0.35, 1 - p * 0.65));
        }
      },
    });

    return () => {
      heroST.kill();
      downstreamST.kill();
      opacityST.kill();
    };
  }, [drawFrame]);

  const loadPercent = Math.round((loadedCount / TOTAL_FRAMES) * 100);

  return (
    <>
      {/* Preloading progress bar for 160 frames */}
      {!isPreloadComplete && (
        <div className="fixed top-0 left-0 w-full h-[2px] bg-white/5 z-50 pointer-events-none">
          <div
            className="h-full bg-gradient-to-r from-rose-400 via-purple-400 to-cyan-300 transition-all duration-100 shadow-[0_0_8px_rgba(236,72,153,0.8)]"
            style={{ width: `${loadPercent}%` }}
          />
        </div>
      )}

      {/* =========================================================================
          LAYER 1 (z-[4]): SOFT COOL BLUE-WHITE ATMOSPHERIC GLOW & ELECTRIC-BLUE RIM LIGHT
          Anchors the pure white crystal wings and sanitary napkin seamlessly into deep space
          ========================================================================= */}
      <div 
        ref={glowWrapperRef}
        className="fixed inset-0 pointer-events-none z-[4] flex items-center justify-center overflow-hidden transition-opacity duration-300"
      >
        {/* Soft cool blue-white atmospheric core glow radiating directly behind the wings */}
        <div className="w-[88vw] max-w-[1260px] h-[75vh] max-h-[850px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(224,242,254,0.42)_0%,rgba(56,189,248,0.26)_32%,rgba(37,99,235,0.12)_60%,transparent_78%)] blur-[85px] sm:blur-[110px] animate-pulse-gentle" />

        {/* Electric-blue outer wing corona wrapping the plumage expanse */}
        <div className="absolute w-[74vw] max-w-[1020px] h-[56vh] max-h-[640px] rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.38)_0%,rgba(99,102,241,0.22)_48%,transparent_72%)] blur-[55px] animate-electric-rim" />

        {/* Precision electric-blue perimeter rim halo */}
        <div className="absolute w-[68vw] max-w-[940px] h-[50vh] max-h-[560px] rounded-[48%] border border-cyan-300/40 blur-[12px] shadow-[0_0_65px_rgba(56,189,248,0.6),inset_0_0_40px_rgba(14,165,233,0.35)]" />
      </div>

      {/* =========================================================================
          LAYER 2 (z-[5]): FIXED CONTINUOUS BACKGROUND VIDEO CANVAS (FRAMES 1 - 160)
          Unaltered white wings & napkin feathered smoothly into deep space
          ========================================================================= */}
      <div 
        ref={canvasWrapperRef}
        className="fixed inset-0 pointer-events-none z-[5] flex items-center justify-center overflow-hidden transition-opacity duration-300"
      >
        <div
          className="w-full h-full relative flex items-center justify-center"
          style={{
            maskImage:
              'radial-gradient(ellipse 72% 64% at 50% 50%, rgba(0,0,0,1) 45%, rgba(0,0,0,0.88) 60%, rgba(0,0,0,0.3) 76%, transparent 92%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 72% 64% at 50% 50%, rgba(0,0,0,1) 45%, rgba(0,0,0,0.88) 60%, rgba(0,0,0,0.3) 76%, transparent 92%)',
          }}
        >
          <canvas
            ref={canvasRef}
            className="w-full h-full block object-cover will-change-transform"
          />
        </div>
      </div>
    </>
  );
};
