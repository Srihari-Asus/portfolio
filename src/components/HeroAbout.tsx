import { useEffect, useRef, useState } from 'react';
import {
  ArrowDown,
  MessageSquare,
  Terminal,
  GraduationCap,
  MapPin,
  Calendar,
  Code2,
  BarChart3,
  ShieldCheck,
  Brain,
  Cpu,
  Eye,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';
import { gsap } from '../hooks/useGSAPAnimations';

export default function HeroAbout() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const heroSlotRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const aboutSlotRef = useRef<HTMLDivElement>(null);
  const portraitWrapperRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  // Mouse spotlight state for Hero section
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const targetPos = useRef({ x: 50, y: 50 });
  const animFrame = useRef<number | null>(null);

  // Hero interactive spotlight lerp
  useEffect(() => {
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

  // GSAP ScrollTrigger Transition & Sticky Orchestration
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // DESKTOP: Smooth right-to-left glide & sticky lock
      mm.add('(min-width: 1024px)', () => {
        if (
          !heroSlotRef.current ||
          !aboutSlotRef.current ||
          !portraitWrapperRef.current ||
          !heroRef.current ||
          !aboutRef.current
        ) {
          return;
        }

        // Dynamic offset calculation immune to current scroll position
        const getOffsets = () => {
          if (!heroSlotRef.current || !aboutSlotRef.current) return { dx: 0, dy: 0 };
          const heroRect = heroSlotRef.current.getBoundingClientRect();
          const aboutRect = aboutSlotRef.current.getBoundingClientRect();
          const scrollY = window.scrollY;
          const scrollX = window.scrollX;

          const heroInitialLeft = heroRect.left + scrollX;
          const aboutInitialLeft = aboutRect.left + scrollX;
          const dx = heroInitialLeft - aboutInitialLeft;

          // Hero slot vertical center relative to sticky top (top-28 = 112px)
          const heroInitialTop = heroRect.top + scrollY;
          const containerInitialTop =
            containerRef.current!.getBoundingClientRect().top + scrollY;
          const heroRelativeTop = heroInitialTop - containerInitialTop;
          const dy = heroRelativeTop - 112;

          return { dx, dy };
        };

        const initial = getOffsets();

        // Initial state at scroll = 0: portrait positioned in Hero right column
        gsap.set(portraitWrapperRef.current, {
          x: initial.dx,
          y: initial.dy,
          willChange: 'transform',
        });

        // About HUD badges start hidden in Hero
        gsap.set('.about-hud-element', { opacity: 0 });

        // Hero-to-About scroll transition timeline
        const transitionTl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom 25%',
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        });

        transitionTl
          .fromTo(
            portraitWrapperRef.current,
            {
              x: () => getOffsets().dx,
              y: () => getOffsets().dy,
            },
            {
              x: 0,
              y: 0,
              ease: 'power2.inOut',
            },
            0
          )
          .fromTo(
            heroTextRef.current,
            {
              opacity: 1,
              y: 0,
            },
            {
              opacity: 0,
              y: -40,
              ease: 'power2.out',
            },
            0
          )
          .fromTo(
            '.about-hud-element',
            {
              opacity: 0,
            },
            {
              opacity: 1,
              ease: 'power2.out',
            },
            0.35
          );

        // Glow intensity shift during About scroll
        if (glowRef.current) {
          gsap.to(glowRef.current, {
            scale: 1.15,
            opacity: 0.9,
            scrollTrigger: {
              trigger: aboutRef.current,
              start: 'top 30%',
              end: 'bottom 80%',
              scrub: 1.5,
            },
          });
        }
      });

      // Progressive scroll reveal for right-side content blocks (Mobile & Desktop)
      const blocks = gsap.utils.toArray<HTMLElement>('.about-scroll-block');
      blocks.forEach((block) => {
        gsap.fromTo(
          block,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: block,
              start: 'top 82%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const whatIDoItems = [
    {
      title: 'FULL-STACK DEVELOPMENT',
      subtitle: 'Modern Web & Distributed Services',
      desc: 'Building responsive web applications, developing frontend experiences, implementing backend APIs, and connecting database-driven systems.',
      icon: Code2,
      accent: 'border-crimson/30 hover:border-crimson/70',
      tagColor: 'text-crimson-accent',
      skills: ['React', 'TypeScript', 'Node.js', 'Spring Boot', 'REST APIs', 'PostgreSQL'],
    },
    {
      title: 'DATA ANALYSIS',
      subtitle: 'Data Patterns & Requirements',
      desc: 'Understanding requirements, examining systems and data, identifying patterns, breaking down problems, and converting findings into practical solutions.',
      icon: BarChart3,
      accent: 'border-void-800 hover:border-crimson/60',
      tagColor: 'text-amber-400',
      skills: ['Data Modeling', 'SQL', 'Pattern Recognition', 'Power BI'],
    },
    {
      title: 'SOFTWARE TESTING',
      subtitle: 'Quality Assurance & Validation',
      desc: 'Validating application functionality, testing API integrations, identifying bugs, debugging issues, and improving reliability and user experience.',
      icon: ShieldCheck,
      accent: 'border-void-800 hover:border-crimson/60',
      tagColor: 'text-emerald-400',
      skills: ['API Verification', 'Selenium', 'Functional Testing', 'Debugging', 'Defect Analysis'],
    },
  ];

  const engineeringInterests = [
    { title: 'Artificial Intelligence', icon: Brain, tag: '01' },
    { title: 'Full-Stack Development', icon: Layers, tag: '02' },
    { title: 'Data Analytics', icon: BarChart3, tag: '03' },
    { title: 'Computer Vision', icon: Eye, tag: '04' },
    { title: 'Software Quality', icon: ShieldCheck, tag: '05' },
    { title: 'Intelligent Systems', icon: Cpu, tag: '06' },
  ];

  return (
    <div
      id="hero-about-journey"
      ref={containerRef}
      className="relative w-full overflow-visible"
    >
      {/* ================================================================ */}
      {/* AMBIENT BACKGROUND LIGHTING (Shared cinematic crimson atmosphere) */}
      {/* ================================================================ */}
      <div
        className="absolute top-24 left-1/4 w-[600px] h-[600px] bg-crimson-dark/15 rounded-full blur-[160px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 -right-20 w-[650px] h-[700px] bg-gradient-to-b from-crimson-dark/20 via-crimson/10 to-transparent rounded-full blur-[170px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 -left-32 w-[550px] h-[550px] bg-crimson-dark/10 rounded-full blur-[160px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-crimson-dark/12 rounded-full blur-[180px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Interactive Cursor-Responsive Ambient Spotlight (Desktop only) */}
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

      {/* ================================================================ */}
      {/* SECTION 1: HERO SECTION                                         */}
      {/* ================================================================ */}
      <section
        id="hero"
        ref={heroRef}
        className="relative min-h-screen w-full flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-visible"
      >
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center z-10">
          
          {/* Left Column: Text & CTA */}
          <div
            ref={heroTextRef}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Small Introduction */}
            <div className="inline-flex items-center gap-2.5 sm:gap-3 px-3 py-1.5 rounded-full bg-void-900 border border-void-700/80 w-fit mb-5 sm:mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-crimson animate-pulse" />
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.40em] sm:tracking-[0.50em] text-silver-muted font-medium">
                HELLO, I'M
              </span>
            </div>

            {/* Name Dominating Composition - Fully Responsive clamp font */}
            <h1 className="font-display font-black tracking-tight text-white leading-[0.95] mb-3 sm:mb-4 text-[clamp(2.1rem,9vw,3.6rem)] sm:text-[clamp(3rem,6.8vw,4.5rem)] lg:text-[clamp(3.6rem,4.3vw,5.25rem)] xl:text-[5.25rem]">
              SRIHARI <span className="text-crimson text-glow-crimson">S</span>
            </h1>

            {/* Main Title */}
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <div className="h-[2px] w-6 sm:w-8 bg-crimson flex-shrink-0" />
              <h2 className="font-mono text-base sm:text-xl lg:text-2xl font-bold tracking-wider text-crimson-accent uppercase">
                {PERSONAL_INFO.tagline}
              </h2>
            </div>

            {/* Supporting Text */}
            <p className="font-sans text-sm sm:text-lg lg:text-xl text-silver-light/90 max-w-2xl leading-relaxed mb-6 sm:mb-8 font-light">
              {PERSONAL_INFO.heroDescription}
            </p>

            {/* Action Buttons - Stacked on tiny screens, inline on sm+ */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10 w-full sm:w-auto">
              <button
                type="button"
                onClick={scrollToProjects}
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-sm bg-crimson hover:bg-crimson-glow border border-crimson/60 hover:border-crimson-glow/60 text-white font-mono text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 ease-out shadow-[0_4px_16px_rgba(229,9,20,0.25)] hover:shadow-[0_0_35px_rgba(229,9,20,0.6),0_0_15px_rgba(255,42,56,0.4)] active:scale-[0.98] min-h-[44px]"
              >
                <span>EXPLORE PROJECTS</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-200" />
              </button>

              <button
                type="button"
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-sm bg-void-900/80 hover:bg-void-800 border border-void-600 hover:border-silver-muted text-silver-light hover:text-white font-mono text-xs sm:text-sm tracking-wider transition-all duration-300 active:scale-95 min-h-[44px]"
              >
                <MessageSquare className="w-4 h-4 text-crimson" />
                <span>LET'S CONNECT</span>
              </button>
            </div>

            {/* Secondary Information Bar */}
            <div className="pt-4 sm:pt-6 border-t border-void-800/80 flex items-center gap-2.5 sm:gap-3">
              <Terminal className="w-4 h-4 text-crimson flex-shrink-0" />
              <p className="font-mono text-[11px] sm:text-xs tracking-wider text-silver-muted uppercase leading-snug">
                {PERSONAL_INFO.secondaryInfo}
              </p>
            </div>
          </div>

          {/* Right Column: Hero Spacer Slot (Desktop only - marks initial target) */}
          <div className="hidden lg:flex lg:col-span-5 relative items-center justify-center lg:justify-end mt-8 lg:mt-0">
            <div
              ref={heroSlotRef}
              className="w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] aspect-[4/5] invisible pointer-events-none"
              aria-hidden="true"
            />
          </div>

        </div>
      </section>

      {/* ================================================================ */}
      {/* THE SINGLE PORTRAIT DOM INSTANCE                                */}
      {/* Desktop (lg+): Sticky traveling frame transitioning Right -> Left */}
      {/* Mobile (<lg): Clean natural flow between Hero & About           */}
      {/* ================================================================ */}
      <div className="relative lg:absolute lg:inset-0 pointer-events-none z-20 overflow-visible">
        <div className="lg:sticky lg:top-28 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            {/* The Animated Portrait Frame */}
            <div
              ref={portraitWrapperRef}
              className="lg:col-span-5 pointer-events-auto flex flex-col items-center mx-auto lg:mx-0 w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[360px] lg:max-w-[420px] my-6 sm:my-8 lg:my-0"
            >
              <div className="relative w-full aspect-[4/5] group">

                {/* Ambient Subtle Crimson Glow Behind the Portrait Frame */}
                <div
                  ref={glowRef}
                  className="absolute -inset-4 sm:-inset-6 rounded-[36px] bg-gradient-to-tr from-crimson/25 via-crimson-dark/20 to-transparent blur-[40px] sm:blur-[50px] pointer-events-none -z-10 group-hover:bg-crimson/35 group-hover:blur-[55px] transition-all duration-700 ease-out"
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-x-8 -bottom-8 h-20 sm:h-24 bg-crimson/25 blur-3xl pointer-events-none -z-10 group-hover:bg-crimson/40 transition-all duration-700 ease-out"
                  aria-hidden="true"
                />

                {/* Minimal Technical HUD Label (Top) - Fades in during About transition */}
                <div className="about-hud-element absolute -top-3 left-4 sm:left-6 z-30 px-2.5 sm:px-3 py-1 rounded bg-void-950/90 border border-void-800 text-[9px] sm:text-[10px] font-mono tracking-widest text-silver-muted flex items-center gap-1.5 shadow-sm transition-opacity duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse" />
                  <span>SYS // IDENTITY_FRAME</span>
                </div>

                {/* Premium Rounded Portrait Frame Container */}
                <div className="relative w-full h-full rounded-[24px] sm:rounded-[28px] overflow-hidden border border-crimson/30 hover:border-crimson/60 bg-gradient-to-b from-void-900 via-void-950 to-void-950 shadow-[0_15px_35px_rgba(0,0,0,0.85)] group-hover:shadow-[0_25px_60px_rgba(229,9,20,0.25)] transition-all duration-500 ease-out flex items-center justify-center">

                  {/* EXACTLY ONE PORTRAIT IMAGE INSTANCE IN THE DOM */}
                  <img
                    src="/assets/profile/portrait.png"
                    alt="Srihari S. — Full-Stack Developer & AI Enthusiast"
                    className="w-full h-full object-cover object-top sm:object-center select-none pointer-events-none transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="eager"
                    decoding="async"
                  />

                  {/* Gentle Bottom Gradient Fade into Dark Void */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t from-void-950 via-void-950/70 to-transparent pointer-events-none z-10"
                    aria-hidden="true"
                  />

                  {/* Ultra-subtle Inner Border Highlight */}
                  <div
                    className="absolute inset-0 rounded-[24px] sm:rounded-[28px] border border-white/5 pointer-events-none z-20"
                    aria-hidden="true"
                  />

                  {/* Minimal Technical HUD Badge (Bottom Left) - Fades in during About transition */}
                  <div className="about-hud-element absolute bottom-3 sm:bottom-4 left-3 sm:left-4 z-20 font-mono text-[9px] sm:text-[10px] tracking-wider text-silver-light/80 bg-void-950/80 backdrop-blur-md px-2 sm:px-2.5 py-1 rounded border border-void-800/80 transition-opacity duration-300">
                    SRIHARI S. // 2024–2028
                  </div>
                </div>

              </div>

              {/* Quick Identification Meta Below Frame (Desktop only) */}
              <div className="about-hud-element hidden lg:flex items-center justify-between w-full pt-4 font-mono text-[11px] text-silver-muted transition-opacity duration-300">
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-crimson" />
                  <span>SCROLL TO DISCOVER</span>
                </span>
                <span className="text-crimson-accent font-medium">B.E. CSE</span>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* ================================================================ */}
      {/* SECTION 2: ABOUT SECTION                                        */}
      {/* ================================================================ */}
      <section
        id="about"
        ref={aboutRef}
        className="py-20 sm:py-28 lg:py-36 relative z-10 overflow-visible"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Two-Column Scroll-Driven Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative">

            {/* Left Column: About Spacer Slot (Desktop only - reserves space for sticky frame) */}
            <div className="hidden lg:flex lg:col-span-5 relative flex-col items-center self-start">
              <div
                ref={aboutSlotRef}
                className="w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] aspect-[4/5] invisible pointer-events-none"
                aria-hidden="true"
              />
              <div className="w-full pt-4 h-8 invisible pointer-events-none" aria-hidden="true" />
            </div>

            {/* Right Column: Progressive Scroll-Driven Content Blocks */}
            <div className="lg:col-span-7 space-y-24 sm:space-y-32">

              {/* ------------------------------------------------------ */}
              {/* SECTION 01 — PROFILE                                   */}
              {/* ------------------------------------------------------ */}
              <div className="about-scroll-block space-y-8 pt-2">

                {/* Header Badge */}
                <div className="flex items-center gap-2.5 font-mono text-xs text-crimson tracking-widest uppercase font-semibold">
                  <span>01</span>
                  <span className="text-crimson/50">—</span>
                  <span>PROFILE</span>
                </div>

                {/* Headline */}
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05]">
                  ENGINEERING WITH <br />
                  <span className="text-crimson text-glow-crimson">PURPOSE.</span>
                </h2>

                {/* Profile Description */}
                <div className="relative pl-4 sm:pl-6 border-l-2 border-crimson space-y-4">
                  <p className="text-base sm:text-lg lg:text-xl text-silver-light font-sans font-light leading-relaxed">
                    I'm a Computer Science and Engineering student passionate about building practical digital solutions through software development, data analysis, software testing, and AI-driven technologies.
                  </p>
                  <p className="text-sm sm:text-base text-silver-muted font-sans font-light leading-relaxed">
                    I enjoy transforming ideas into applications, analyzing systems to uncover insights, and testing software to improve functionality and reliability. My interests span full-stack development, intelligent systems, data-driven problem-solving, and software quality.
                  </p>
                </div>

                {/* Three Role Tags */}
                <div className="flex flex-wrap items-center gap-2.5 pt-2">
                  <span className="font-mono text-xs px-4 py-1.5 rounded-full bg-void-900 border border-void-700/80 text-silver-light hover:border-crimson hover:text-white transition-colors duration-200">
                    FULL-STACK DEVELOPER
                  </span>
                  <span className="font-mono text-xs px-4 py-1.5 rounded-full bg-void-900 border border-void-700/80 text-silver-light hover:border-crimson hover:text-white transition-colors duration-200">
                    DATA ANALYST
                  </span>
                  <span className="font-mono text-xs px-4 py-1.5 rounded-full bg-void-900 border border-void-700/80 text-silver-light hover:border-crimson hover:text-white transition-colors duration-200">
                    SOFTWARE TESTER
                  </span>
                </div>

              </div>

              {/* ------------------------------------------------------ */}
              {/* SECTION 02 — EDUCATION                                 */}
              {/* ------------------------------------------------------ */}
              <div className="about-scroll-block space-y-6">

                {/* Header Badge */}
                <div className="flex items-center gap-2.5 font-mono text-xs text-crimson tracking-widest uppercase font-semibold">
                  <span>02</span>
                  <span className="text-crimson/50">—</span>
                  <span>EDUCATION</span>
                </div>

                {/* Compact Premium Education Card */}
                <div className="p-4 sm:p-7 lg:p-8 rounded-2xl bg-gradient-to-b from-void-900 via-void-900/90 to-void-950 border border-void-800 hover:border-crimson/50 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-36 h-36 bg-crimson/10 rounded-full blur-3xl pointer-events-none group-hover:bg-crimson/20 transition-all duration-500" />

                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 mb-6">
                    <div className="flex items-center gap-3.5">
                      <div className="p-2.5 sm:p-3 rounded-xl bg-crimson/15 border border-crimson/30 text-crimson group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                        <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div>
                        <span className="font-mono text-[10px] text-crimson uppercase tracking-widest font-bold block mb-0.5">
                          UNDERGRADUATE STUDIES
                        </span>
                        <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-bold text-white">
                          B.E. Computer Science &amp; Engineering
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-void-950 border border-void-800 font-mono text-xs text-crimson font-bold shadow-inner self-start sm:self-auto">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>2024 – 2028</span>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-void-800/80">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="font-mono text-[11px] text-silver-muted block uppercase tracking-wider">
                          INSTITUTION
                        </span>
                        <span className="font-sans text-base font-semibold text-silver-light">
                          Sri Krishna College of Technology
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs text-silver-muted font-sans sm:self-end">
                        <MapPin className="w-3.5 h-3.5 text-crimson" />
                        <span>Coimbatore, India</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-silver-muted leading-relaxed font-sans pt-1">
                      Focused on scalable computing architectures, modern full-stack systems, algorithmic problem solving, and intelligent technology integration.
                    </p>
                  </div>

                </div>

              </div>

              {/* ------------------------------------------------------ */}
              {/* SECTION 03 — WHAT I DO                                 */}
              {/* ------------------------------------------------------ */}
              <div className="about-scroll-block space-y-6">

                {/* Header Badge */}
                <div className="flex items-center justify-between pb-2 border-b border-void-800/80">
                  <div className="flex items-center gap-2.5 font-mono text-xs text-crimson tracking-widest uppercase font-semibold">
                    <span>03</span>
                    <span className="text-crimson/50">—</span>
                    <span>WHAT I DO</span>
                  </div>
                  <span className="font-mono text-[11px] text-silver-muted">
                    CORE SPECIALIZATION AREAS
                  </span>
                </div>

                {/* Three Distinct Structured Blocks */}
                <div className="space-y-4 sm:space-y-5">
                  {whatIDoItems.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={idx}
                        className={`p-4 sm:p-6 lg:p-7 rounded-2xl bg-void-900/60 border ${item.accent} hover:bg-void-900/90 transition-all duration-300 relative overflow-hidden group`}
                      >
                        <div className="flex items-start gap-3.5 sm:gap-5">
                          <div className="p-2.5 sm:p-3 rounded-xl bg-void-950 border border-void-800 text-crimson group-hover:bg-crimson group-hover:text-white transition-colors duration-300 flex-shrink-0 mt-0.5">
                            <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                          </div>
                          <div className="flex-1 space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="font-mono text-[10px] tracking-widest text-crimson-accent uppercase font-bold">
                                DISCIPLINE 0{idx + 1}
                              </span>
                              <span className={`font-mono text-[10px] ${item.tagColor} font-semibold uppercase`}>
                                ACTIVE FOCUS
                              </span>
                            </div>

                            <h4 className="font-display text-base sm:text-lg lg:text-xl font-bold text-white group-hover:text-crimson-accent transition-colors">
                              {item.title}
                            </h4>

                            <p className="font-sans text-xs sm:text-sm text-silver-muted leading-relaxed">
                              {item.desc}
                            </p>

                            {/* Technical Highlights */}
                            <div className="flex flex-wrap gap-1.5 pt-2 sm:pt-3">
                              {item.skills.map((skill, sIdx) => (
                                <span
                                  key={sIdx}
                                  className="font-mono text-[10px] sm:text-[11px] px-2.5 py-1 rounded bg-void-950 border border-void-800 text-silver-light/80 group-hover:border-void-700 transition-colors"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>

              {/* ------------------------------------------------------ */}
              {/* SECTION 04 — ENGINEERING INTERESTS                     */}
              {/* ------------------------------------------------------ */}
              <div className="about-scroll-block space-y-6">

                {/* Header Badge */}
                <div className="flex items-center justify-between pb-2 border-b border-void-800/80">
                  <div className="flex items-center gap-2.5 font-mono text-xs text-crimson tracking-widest uppercase font-semibold">
                    <span>04</span>
                    <span className="text-crimson/50">—</span>
                    <span>ENGINEERING INTERESTS</span>
                  </div>
                  <span className="font-mono text-[11px] text-crimson font-medium">
                    ACTIVE RESEARCH &amp; LEARNING
                  </span>
                </div>

                {/* Clean Minimalist Technical Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                  {engineeringInterests.map((interest, idx) => {
                    const Icon = interest.icon;
                    return (
                      <div
                        key={idx}
                        className="p-3.5 sm:p-4 rounded-xl bg-void-900/60 border border-void-800 hover:border-crimson/50 hover:bg-void-900 transition-all duration-200 flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-void-950 border border-void-800 text-silver-muted group-hover:text-crimson group-hover:border-crimson/40 transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="font-display text-sm font-bold text-white group-hover:text-crimson-accent transition-colors">
                            {interest.title}
                          </span>
                        </div>

                        <span className="font-mono text-[11px] text-silver-muted font-bold group-hover:text-crimson transition-colors">
                          #{interest.tag}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Concluding Philosophy Footnote */}
                <div className="p-4 rounded-xl bg-void-950/70 border border-void-800/80 flex items-center gap-3 text-xs text-silver-muted font-sans">
                  <CheckCircle2 className="w-4 h-4 text-crimson flex-shrink-0" />
                  <span>
                    Committed to building production-grade software that bridges robust engineering with practical real-world impact.
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
