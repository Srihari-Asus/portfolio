import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  baseSpeedX: number;
  driftAmp: number;
  driftFreq: number;
  driftPhase: number;
  baseAlpha: number;
  alphaPulseSpeed: number;
  alphaPhase: number;
  colorRgb: string;
  hasGlow: boolean;
  glowBlur: number;
  glowColor: string;
  depth: number;
}

export default function CrimsonParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animId: number;
    let isPaused = false;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];

    // Check for user's reduced motion preference
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const prefersReducedMotion = motionQuery.matches;

    // Density calculation based on viewport width
    const getParticleCount = (w: number): number => {
      if (w < 768) return 22; // Mobile (15-25 range)
      if (w <= 1024) return 36; // Tablet (30-40 range)
      return 56; // Desktop (45-65 range)
    };

    // Color palette definitions
    const CRIMSON_PRIMARY = '255, 16, 40'; // Vivid energetic crimson
    const CRIMSON_ACCENT = '229, 9, 20'; // Brand signature crimson
    const CRIMSON_DARK = '165, 12, 24'; // Deeper ember red for background depth
    const SILVER_WHITE = '225, 230, 242'; // Occasional faint stardust for 3D depth

    const createParticle = (initialRandomY = true): Particle => {
      // Depth layer between 0 (far background) and 1 (foreground)
      const depth = Math.random();

      // Color selection based on depth and natural distribution
      const colorRoll = Math.random();
      let colorRgb: string;
      let isWhite = false;

      if (colorRoll < 0.12) {
        // ~12% dim silver/white particles for atmospheric depth
        colorRgb = SILVER_WHITE;
        isWhite = true;
      } else if (colorRoll < 0.50) {
        // Primary glowing crimson
        colorRgb = CRIMSON_PRIMARY;
      } else if (colorRoll < 0.82) {
        // Brand crimson
        colorRgb = CRIMSON_ACCENT;
      } else {
        // Deeper crimson for distant embers
        colorRgb = CRIMSON_DARK;
      }

      // Size scaled with depth (far particles: 0.7px - 1.2px, near: up to 2.4px)
      const size = isWhite
        ? Math.random() * 0.8 + 0.6
        : (Math.random() * 1.3 + 0.7) * (0.6 + depth * 0.6);

      // Upward floating speed scaled with depth
      const speedY = (Math.random() * 0.35 + 0.2) * (0.5 + depth * 0.65);

      // Horizontal subtle wave drift
      const baseSpeedX = (Math.random() - 0.5) * 0.15;
      const driftAmp = Math.random() * 0.45 + 0.2;
      const driftFreq = Math.random() * 0.002 + 0.001;
      const driftPhase = Math.random() * Math.PI * 2;

      // Opacity and twinkle pulse
      const baseAlpha = isWhite
        ? Math.random() * 0.25 + 0.2
        : (Math.random() * 0.4 + 0.25) * (0.5 + depth * 0.55);
      const alphaPulseSpeed = Math.random() * 0.02 + 0.01;
      const alphaPhase = Math.random() * Math.PI * 2;

      // Glow effect on selected mid/foreground particles (approx 30% of particles)
      const hasGlow = !isWhite && depth > 0.45 && Math.random() > 0.4;
      const glowBlur = hasGlow ? Math.round(8 + depth * 8) : 0;
      const glowColor = hasGlow ? `rgba(${CRIMSON_PRIMARY}, 0.75)` : '';

      return {
        x: Math.random() * width,
        y: initialRandomY ? Math.random() * height : height + Math.random() * 20,
        size,
        speedY,
        baseSpeedX,
        driftAmp,
        driftFreq,
        driftPhase,
        baseAlpha,
        alphaPulseSpeed,
        alphaPhase,
        colorRgb,
        hasGlow,
        glowBlur,
        glowColor,
        depth,
      };
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      // Re-initialize particles to maintain optimal density for current screen size
      const targetCount = getParticleCount(width);
      particles = Array.from({ length: targetCount }, () => createParticle(true));
    };

    resize();

    // Debounced resize handler
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        resize();
        if (prefersReducedMotion) {
          drawStatic();
        }
      }, 150);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Handle visibility to save battery and GPU cycles when tab is unfocused
    const handleVisibility = () => {
      if (document.hidden) {
        isPaused = true;
      } else {
        if (isPaused) {
          isPaused = false;
          if (!prefersReducedMotion) {
            lastTime = performance.now();
            animId = requestAnimationFrame(render);
          }
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);

    // Static rendering for reduced-motion users
    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.colorRgb}, ${p.baseAlpha})`;
        if (p.hasGlow) {
          ctx.shadowBlur = p.glowBlur;
          ctx.shadowColor = p.glowColor;
        } else {
          ctx.shadowBlur = 0;
        }
        ctx.fill();
      }
    };

    if (prefersReducedMotion) {
      drawStatic();
      return () => {
        window.removeEventListener('resize', handleResize);
        document.removeEventListener('visibilitychange', handleVisibility);
        clearTimeout(resizeTimer);
      };
    }

    // Dynamic 60fps render loop with smooth delta-time interpolation
    let lastTime = performance.now();

    const render = (currentTime: number) => {
      if (isPaused) return;

      const delta = Math.min((currentTime - lastTime) / 16.667, 2.5); // Normalized to ~60fps, capped against tab switch lag
      lastTime = currentTime;

      ctx.clearRect(0, 0, width, height);

      const len = particles.length;
      for (let i = 0; i < len; i++) {
        const p = particles[i];

        // Move particle upward
        p.y -= p.speedY * delta;

        // Apply gentle horizontal wave drift
        p.driftPhase += p.driftFreq * delta * 16.667;
        p.x += (p.baseSpeedX + Math.sin(p.driftPhase) * p.driftAmp * 0.4) * delta;

        // Twinkle / gentle breathing of alpha
        p.alphaPhase += p.alphaPulseSpeed * delta;
        const alphaWave = 0.8 + 0.2 * Math.sin(p.alphaPhase);

        // Edge fade-out: smooth transparency fade near top 80px
        let edgeMultiplier = 1;
        if (p.y < 80) {
          edgeMultiplier = Math.max(0, p.y / 80);
        } else if (p.y > height - 40) {
          edgeMultiplier = Math.max(0, (height - p.y) / 40);
        }

        const renderAlpha = Math.max(0, Math.min(1, p.baseAlpha * alphaWave * edgeMultiplier));

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.colorRgb}, ${renderAlpha})`;

        if (p.hasGlow && renderAlpha > 0.1) {
          ctx.shadowBlur = p.glowBlur;
          ctx.shadowColor = p.glowColor;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fill();

        // Wrap or respawn when particle moves off screen
        if (p.y < -15) {
          // Re-seed from bottom
          p.y = height + Math.random() * 20;
          p.x = Math.random() * width;
        } else if (p.x < -20) {
          p.x = width + 10;
        } else if (p.x > width + 20) {
          p.x = -10;
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
      cancelAnimationFrame(animId);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1] select-none"
      aria-hidden="true"
    />
  );
}
