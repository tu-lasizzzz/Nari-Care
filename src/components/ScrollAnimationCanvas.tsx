import React, { useEffect, useRef, useState, useCallback } from 'react';

const TOTAL_FRAMES = 160;

function getFrameUrl(index: number) {
  const pad = String(index).padStart(6, '0');
  return `/frames/frame_${pad}.png`;
}

interface ScrollAnimationCanvasProps {
  scrollProgress: number; // 0 to 1
  className?: string;
}

export const ScrollAnimationCanvas: React.FC<ScrollAnimationCanvasProps> = ({
  scrollProgress,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES + 1).fill(null));
  const isLoadedRef = useRef<Uint8Array>(new Uint8Array(TOTAL_FRAMES + 1));
  const currentDrawnRef = useRef<number>(-1);
  const targetProgressRef = useRef<number>(scrollProgress);
  const currentProgressRef = useRef<number>(scrollProgress);
  const isAnimatingRef = useRef<boolean>(false);

  const [loadedCount, setLoadedCount] = useState<number>(0);
  const [isPreloadComplete, setIsPreloadComplete] = useState<boolean>(false);

  // Update target progress when prop changes
  useEffect(() => {
    targetProgressRef.current = scrollProgress;
    requestRender();
  }, [scrollProgress]);

  // Fallback to nearest available frame to guarantee zero flicker
  const getBestFrame = useCallback((index: number) => {
    if (isLoadedRef.current[index] === 1 && imagesRef.current[index]) {
      return imagesRef.current[index];
    }
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

      const img = getBestFrame(frameIndex);
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;

      // Cover scaling: fills entire canvas preserving aspect ratio
      const scale = Math.max(cw / iw, ch / ih);
      const sw = iw * scale;
      const sh = ih * scale;
      const sx = (cw - sw) / 2;
      const sy = (ch - sh) / 2;

      ctx.drawImage(img, 0, 0, iw, ih, sx, sy, sw, sh);
      currentDrawnRef.current = frameIndex;
    },
    [getBestFrame]
  );

  // Continuous animation loop with LERP smoothing
  const renderLoop = useCallback(() => {
    const delta = targetProgressRef.current - currentProgressRef.current;
    const LERP_FACTOR = 0.14;

    if (Math.abs(delta) > 0.0001) {
      currentProgressRef.current += delta * LERP_FACTOR;
    } else {
      currentProgressRef.current = targetProgressRef.current;
    }

    const targetFrame = Math.min(
      TOTAL_FRAMES,
      Math.max(1, Math.round(1 + currentProgressRef.current * (TOTAL_FRAMES - 1)))
    );

    if (targetFrame !== currentDrawnRef.current) {
      drawFrame(targetFrame);
    }

    if (Math.abs(targetProgressRef.current - currentProgressRef.current) > 0.0001) {
      requestAnimationFrame(renderLoop);
    } else {
      isAnimatingRef.current = false;
    }
  }, [drawFrame]);

  const requestRender = useCallback(() => {
    if (!isAnimatingRef.current) {
      isAnimatingRef.current = true;
      requestAnimationFrame(renderLoop);
    }
  }, [renderLoop]);

  // Handle canvas resize with Hi-DPI scaling
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

  // Initialize and Preload all 300 frames
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    let count = 0;

    // 1. Immediately load Frame 1
    const f1 = new Image();
    imagesRef.current[1] = f1;
    f1.onload = () => {
      isLoadedRef.current[1] = 1;
      count++;
      setLoadedCount(count);
      drawFrame(1);
    };
    f1.src = getFrameUrl(1);

    // 2. Preload remaining 299 frames
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

        // If user is currently near this frame, refresh canvas
        const currentTarget = Math.min(
          TOTAL_FRAMES,
          Math.max(1, Math.round(1 + currentProgressRef.current * (TOTAL_FRAMES - 1)))
        );
        if (Math.abs(currentTarget - i) <= 2 || currentDrawnRef.current === 1) {
          drawFrame(currentTarget);
        }
      };

      img.src = getFrameUrl(i);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize, drawFrame]);

  const loadPercent = Math.round((loadedCount / TOTAL_FRAMES) * 100);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Subtle loading bar at top while buffering */}
      {!isPreloadComplete && (
        <div className="absolute top-0 left-0 w-full h-[2px] bg-white/5 z-50 pointer-events-none">
          <div
            className="h-full bg-gradient-to-r from-rose-400 via-purple-400 to-cyan-300 transition-all duration-100 shadow-[0_0_8px_rgba(236,72,153,0.8)]"
            style={{ width: `${loadPercent}%` }}
          />
        </div>
      )}

      {/* Main Canvas Element */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block object-cover will-change-transform"
      />
    </div>
  );
};
