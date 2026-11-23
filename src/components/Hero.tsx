import { ArrowDown, MessageSquare, Terminal, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';
import HeroScene from './three/HeroScene';

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
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-silver-muted font-medium">
              HELLO, I'M
            </span>
          </div>

          {/* Name Dominating Composition */}
          <h1 className="font-display font-black tracking-tight text-white leading-[0.95] mb-4 text-[clamp(2.25rem,6.8vw,3.75rem)] sm:text-[clamp(3rem,6.5vw,4.5rem)] lg:text-[clamp(3.6rem,4.3vw,5.25rem)] xl:text-[5.25rem] whitespace-nowrap">
            SRIHARI <span className="text-crimson text-glow-crimson">S.</span>
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

        {/* Right Column: 3D Scene & Portrait Visual */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          {/* Outer glowing containment frame */}
          <div className="relative w-full max-w-md aspect-[4/5] rounded-xl overflow-hidden border border-void-700/80 bg-gradient-to-b from-void-900/90 via-void-950 to-void-950 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group">
            
            {/* Interactive 3D Canvas in Background/Midground */}
            <div className="absolute inset-0 z-10 flex items-center justify-center opacity-85 group-hover:opacity-100 transition-opacity duration-500">
              <HeroScene />
            </div>

            {/* Silhouette / Portrait Image Placeholder Layer
                To replace with your actual photograph:
                Swap src to your photo (e.g., "/assets/profile/portrait.png") 
            */}
            <img
              src="/assets/profile/portrait-silhouette.svg"
              alt="Srihari S. Portrait Silhouette"
              className="relative z-20 w-full h-full object-cover object-center mix-blend-screen opacity-90 transition-transform duration-700 ease-out group-hover:scale-102"
              loading="eager"
            />

            {/* Corner Tech Accents */}
            <div className="absolute top-3 left-3 z-30 font-mono text-[10px] tracking-widest text-silver-muted bg-void-950/80 px-2 py-0.5 rounded border border-void-800 flex items-center gap-1.5">
              <Sparkles className="w-2.5 h-2.5 text-crimson" />
              <span>3D INTERACTIVE CORE</span>
            </div>

            <div className="absolute bottom-3 right-3 z-30 font-mono text-[10px] tracking-wider text-silver-muted bg-void-950/80 px-2 py-0.5 rounded border border-void-800">
              ROTATE WITH CURSOR
            </div>

            {/* Subtle red bottom ambient rim light */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-crimson/30 blur-2xl pointer-events-none z-20" />
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
