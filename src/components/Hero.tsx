import { ArrowDown, MessageSquare, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

export default function Hero() {
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
      {/* Background Cinematic Radial Lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-crimson/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-crimson-dark/15 rounded-full blur-[160px] pointer-events-none -z-10" />
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
              className="group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-sm bg-crimson hover:bg-crimson-glow text-white font-mono text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(229,9,20,0.4)] hover:shadow-[0_0_35px_rgba(229,9,20,0.65)] active:scale-95"
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

        {/* Right Column: Seamless Cinematic Portrait Visual */}
        <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end mt-4 lg:mt-0">
          <div className="relative w-full max-w-lg lg:max-w-none flex items-center justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out fill-mode-forwards">
            
            {/* Cinematic Crimson Atmospheric Ambient Glow Behind Portrait */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[420px] lg:w-[480px] h-[300px] sm:h-[420px] lg:h-[480px] rounded-full bg-crimson/20 blur-[100px] pointer-events-none -z-10"
              aria-hidden="true"
            />
            <div
              className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[320px] lg:w-[360px] h-[220px] sm:h-[320px] lg:h-[360px] rounded-full bg-crimson-glow/15 blur-[70px] pointer-events-none -z-10"
              aria-hidden="true"
            />

            {/* Seamless Cinematic Portrait Container */}
            <div className="relative w-full flex items-center justify-center">
              <img
                src="/assets/profile/portrait.png"
                alt="Srihari S. — Full-Stack Developer & AI Enthusiast"
                className="relative z-10 w-auto h-auto max-h-[440px] sm:max-h-[540px] md:max-h-[580px] lg:max-h-[640px] xl:max-h-[680px] max-w-full object-contain object-bottom drop-shadow-[0_15px_35px_rgba(229,9,20,0.25)] select-none pointer-events-none"
                style={{
                  maskImage:
                    'linear-gradient(to bottom, black 0%, black 75%, rgba(0, 0, 0, 0.4) 90%, transparent 100%)',
                  WebkitMaskImage:
                    'linear-gradient(to bottom, black 0%, black 75%, rgba(0, 0, 0, 0.4) 90%, transparent 100%)',
                }}
                loading="eager"
                decoding="async"
              />

              {/* Bottom Edge Cinematic Gradient Blend into Hero Background */}
              <div
                className="absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t from-void-950 via-void-950/70 to-transparent pointer-events-none z-20"
                aria-hidden="true"
              />
            </div>

          </div>
        </div>

      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 font-mono text-[11px] text-silver-muted opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
        <span>SCROLL TO EXPLORE</span>
        <div className="w-4 h-7 rounded-full border border-void-600 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-crimson animate-bounce" />
        </div>
      </div>
    </section>
  );
}
