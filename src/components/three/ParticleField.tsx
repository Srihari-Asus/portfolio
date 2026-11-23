import { useEffect, useRef } from 'react';

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Particle array: enhanced with subtle crimson illumination & slow, graceful drift
    const particleCount = Math.min(Math.floor(width / 32), 48);
    const particles = Array.from({ length: particleCount }, () => {
      const isCrimson = Math.random() > 0.35;
      const isGlow = isCrimson && Math.random() > 0.4;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.7,
        speedX: (Math.random() - 0.5) * 0.18,
        speedY: (Math.random() - 0.5) * 0.18 - 0.08,
        alpha: Math.random() * 0.35 + 0.1,
        color: isCrimson
          ? Math.random() > 0.5
            ? '255, 42, 56'
            : '229, 9, 20'
          : '190, 190, 205',
        isGlow,
      };
    });

    let isVisible = true;
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(canvas);

    const render = () => {
      if (isVisible) {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.x += p.speedX;
          p.y += p.speedY;

          // Wrap edges
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;

          if (p.isGlow) {
            ctx.shadowBlur = 12;
            ctx.shadowColor = `rgba(${p.color}, 0.65)`;
          } else {
            ctx.shadowBlur = 4;
            ctx.shadowColor = `rgba(${p.color}, 0.3)`;
          }

          ctx.fill();
        }
      }
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1] opacity-70"
      aria-hidden="true"
    />
  );
}
