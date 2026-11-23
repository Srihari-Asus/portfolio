import { useEffect, useRef, useState } from 'react';
import { ArrowDown, MessageSquare, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const targetPos = useRef({ x: 50, y: 50 });
  const animFrame = useRef<number | null>(null);

  useEffect(() => {
    // Check if touch device or prefers reduced motion
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      targetPos.current = { x, y };
    };

    const smoothUpdate = () => {
      setMousePos((prev) => {
        // Slow, smooth lerp factor (0.035) - graceful drift that never follows aggressively
        const dx = targetPos.current.x - prev.x;
        const dy = targetPos.current.y - prev.y;
        if (Math.abs(dx) < 0.03 && Math.abs(dy) < 0.03) return prev;
        return {
          x: prev.x + dx * 0.035,
          y: prev.y + dy * 0.035,
        };
      });
      animFrame.current = requestAnimationFrame(smoothUpdate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animFrame.current = requestAnimationFrame(smoothUpdate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
    };
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-16 px-6 sm:px-8 lg:px-12 overflow-hidden"
    >
      {/* Background Cinematic Radial Lighting - Atmospheric Dark Crimson Wash */}
      <div
        className="absolute -top-24 left-1/4 w-[600px] h-[600px] bg-crimson-dark/15 rounded-full blur-[160px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 -right-20 w-[650px] h-[700px] bg-gradient-to-b from-crimson-dark/20 via-crimson/10 to-transparent rounded-full blur-[170px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-28 left-1/3 w-[720px] h-[340px] bg-gradient-to-t from-crimson-dark/18 via-crimson/6 to-transparent rounded-full blur-[150px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Interactive Cursor-Responsive Ambient Spotlight (Desktop only, reduced-motion friendly) */}
      <div
        className="hidden md:block absolute w-[700px] h-[700px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 -z-10 transition-opacity duration-1000 ease-out"
        style={{
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          background:
            'radial-gradient(circle, rgba(229, 9, 20, 0.07) 0%, rgba(150, 0, 10, 0.025) 45%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 cinematic-grid opacity-30 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Column: Text & CTA */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          {/* Small Introduction */}
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-void-900 border border-void-700/80 w-fit mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-crimson animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.50em] text-silver-muted font-medium">
              HELLO, I'M
            </span>
          </div>

          {/* Name Dominating Composition */}
          <h1 className="font-display font-black tracking-tight text-white leading-[0.95] mb-4 text-[clamp(2.25rem,6.8vw,3.75rem)] sm:text-[clamp(3rem,6.5vw,4.5rem)] lg:text-[clamp(3.6rem,4.3vw,5.25rem)] xl:text-[5.25rem] whitespace-nowrap">
            SRIHARI <span className="text-crimson text-glow-crimson">S</span>
          </h1>

          {/* Main Title */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[2px] w-8 bg-crimson" />
            <h2 className="font-mono text-lg sm:text-2xl font-bold tracking-wider text-crimson-accent uppercase">
              {PERSONAL_INFO.tagline}
            </h2>
          </div>

          {/* Supporting Text */}
          <p className="font-sans text-base sm:text-xl text-silver-light/90 max-w-2xl leading-relaxed mb-8 font-light">
            {PERSONAL_INFO.heroDescription}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-10">
            <button
              type="button"
              onClick={scrollToProjects}
              className="group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-sm bg-crimson hover:bg-crimson-glow border border-crimson/60 hover:border-crimson-glow/60 text-white font-mono text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 ease-out shadow-[0_4px_16px_rgba(229,9,20,0.25)] hover:shadow-[0_0_35px_rgba(229,9,20,0.6),0_0_15px_rgba(255,42,56,0.4)] active:scale-[0.98] active:shadow-[0_0_20px_rgba(229,9,20,0.4)]"
            >
              <span>EXPLORE PROJECTS</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-200" />
            </button>

            <button
              type="button"
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-sm bg-void-900/80 hover:bg-void-800 border border-void-600 hover:border-silver-muted text-silver-light hover:text-white font-mono text-xs sm:text-sm tracking-wider transition-all duration-300 active:scale-95"
            >
              <MessageSquare className="w-4 h-4 text-crimson" />
              <span>LET'S CONNECT</span>
            </button>
          </div>

          {/* Secondary Information Bar */}
          <div className="pt-6 border-t border-void-800/80 flex items-center gap-3">
            <Terminal className="w-4 h-4 text-crimson flex-shrink-0" />
            <p className="font-mono text-xs tracking-wider text-silver-muted uppercase leading-snug">
              {PERSONAL_INFO.secondaryInfo}
            </p>
          </div>
        </div>

        {/* Right Column: Clean, Premium Rounded Vertical Portrait Frame */}
        <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
          <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] aspect-[4/5] group">
            
            {/* Ambient Subtle Crimson Glow Behind the Portrait Frame */}
            <div
              className="absolute -inset-4 sm:-inset-6 rounded-[36px] bg-gradient-to-tr from-crimson/25 via-crimson-dark/20 to-transparent blur-[45px] pointer-events-none -z-10 group-hover:bg-crimson/35 group-hover:blur-[55px] transition-all duration-700 ease-out"
              aria-hidden="true"
            />
            <div
              className="absolute inset-x-8 -bottom-8 h-24 bg-crimson/25 blur-3xl pointer-events-none -z-10 group-hover:bg-crimson/40 transition-all duration-700 ease-out"
              aria-hidden="true"
            />

            {/* Premium Rounded Portrait Frame Container */}
            <div className="relative w-full h-full rounded-[28px] overflow-hidden border border-crimson/30 hover:border-crimson/60 bg-gradient-to-b from-void-900 via-void-950 to-void-950 shadow-[0_15px_35px_rgba(0,0,0,0.85)] group-hover:shadow-[0_20px_50px_rgba(229,9,20,0.25)] transition-all duration-500 ease-out flex items-center justify-center">
              
              {/* Portrait Image */}
              <img
                src="/assets/profile/portrait.png"
                alt="Srihari S. — Full-Stack Developer & AI Enthusiast"
                className="w-full h-full object-cover object-top sm:object-center select-none pointer-events-none transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                loading="eager"
                decoding="async"
              />

              {/* Gentle Bottom Gradient Blend into Dark Void */}
              <div
                className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-void-950 via-void-950/60 to-transparent pointer-events-none z-10"
                aria-hidden="true"
              />

              {/* Ultra-subtle Inner Border Highlight */}
              <div
                className="absolute inset-0 rounded-[28px] border border-white/5 pointer-events-none z-20"
                aria-hidden="true"
              />
            </div>

          </div>
        </div>

      </div>

      {/* Floating Scroll Indicator
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 font-mono text-[11px] text-silver-muted opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
        <span>SCROLL TO EXPLORE</span>
        <div className="w-4 h-7 rounded-full border border-void-600 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-crimson animate-bounce" />
        </div>
      </div> */}
    </section>
  );
}
