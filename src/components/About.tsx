import { useEffect, useRef } from 'react';
import {
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
  Terminal,
} from 'lucide-react';
import { gsap } from '../hooks/useGSAPAnimations';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Progressive scroll reveal for right-side content blocks
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

      // Subtle atmospheric glow intensity shift behind sticky portrait as user scrolls
      if (glowRef.current) {
        gsap.to(glowRef.current, {
          scale: 1.15,
          opacity: 0.9,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 30%',
            end: 'bottom 80%',
            scrub: 1.5,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
    <section
      id="about"
      ref={sectionRef}
      className="py-24 sm:py-32 lg:py-36 relative z-10 overflow-visible"
    >
      {/* Background Subtle Ambient Lighting */}
      <div
        className="absolute top-1/4 -left-32 w-[550px] h-[550px] bg-crimson-dark/10 rounded-full blur-[160px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-crimson-dark/12 rounded-full blur-[180px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Main Two-Column Scroll-Driven Layout with Parent Boundary for Sticky */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative">

          {/* ======================================================== */}
          {/* LEFT COLUMN: STICKY CINEMATIC PORTRAIT FRAME             */}
          {/* Constrained strictly to the height of this About section */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start z-20 flex flex-col items-center">

            <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] aspect-[4/5] group">

              {/* Dynamic Scroll-Responsive Ambient Crimson Glow */}
              <div
                ref={glowRef}
                className="absolute -inset-4 sm:-inset-6 rounded-[36px] bg-gradient-to-tr from-crimson/25 via-crimson-dark/20 to-transparent blur-[50px] pointer-events-none -z-10 transition-all duration-700 ease-out"
                aria-hidden="true"
              />
              <div
                className="absolute inset-x-8 -bottom-8 h-24 bg-crimson/25 blur-3xl pointer-events-none -z-10"
                aria-hidden="true"
              />

              {/* Minimal Technical HUD Label (Top) */}
              <div className="absolute -top-3 left-6 z-30 px-3 py-1 rounded bg-void-950/90 border border-void-800 text-[10px] font-mono tracking-widest text-silver-muted flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse" />
                <span>SYS // IDENTITY_FRAME</span>
              </div>

              {/* Portrait Frame Container */}
              <div className="relative w-full h-full rounded-[28px] overflow-hidden border border-crimson/30 hover:border-crimson/60 bg-gradient-to-b from-void-900 via-void-950 to-void-950 shadow-[0_20px_50px_rgba(0,0,0,0.85)] group-hover:shadow-[0_25px_60px_rgba(229,9,20,0.25)] transition-all duration-500 ease-out flex items-center justify-center">

                {/* Portrait Image */}
                <img
                  src="/assets/profile/portrait.png"
                  alt="Srihari S. — Full-Stack Developer & AI Enthusiast"
                  className="w-full h-full object-cover object-top sm:object-center select-none pointer-events-none transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  loading="eager"
                  decoding="async"
                />

                {/* Gentle Bottom Gradient Fade into Dark Void */}
                <div
                  className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-void-950 via-void-950/70 to-transparent pointer-events-none z-10"
                  aria-hidden="true"
                />

                {/* Ultra-subtle Inner Border Highlight */}
                <div
                  className="absolute inset-0 rounded-[28px] border border-white/5 pointer-events-none z-20"
                  aria-hidden="true"
                />

                {/* Minimal Technical HUD Badge (Bottom Left) */}
                <div className="absolute bottom-4 left-4 z-20 font-mono text-[10px] tracking-wider text-silver-light/80 bg-void-950/80 backdrop-blur-md px-2.5 py-1 rounded border border-void-800/80">
                  SRIHARI S. // 2024–2028
                </div>
              </div>

            </div>

            {/* Quick Identification Meta Below Frame (Desktop only) */}
            <div className="hidden lg:flex items-center justify-between w-full max-w-[420px] pt-4 font-mono text-[11px] text-silver-muted">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-crimson" />
                <span>SCROLL TO DISCOVER</span>
              </span>
              <span className="text-crimson-accent font-medium">B.E. CSE</span>
            </div>

          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: PROGRESSIVE SCROLL-DRIVEN CONTENT BLOCKS   */}
          {/* ======================================================== */}
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
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05]">
                ENGINEERING WITH <br />
                <span className="text-crimson text-glow-crimson">PURPOSE.</span>
              </h2>

              {/* Profile Description */}
              <div className="relative pl-6 border-l-2 border-crimson space-y-4">
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
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-void-900 via-void-900/90 to-void-950 border border-void-800 hover:border-crimson/50 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-36 h-36 bg-crimson/10 rounded-full blur-3xl pointer-events-none group-hover:bg-crimson/20 transition-all duration-500" />

                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 rounded-xl bg-crimson/15 border border-crimson/30 text-crimson group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-crimson uppercase tracking-widest font-bold block mb-0.5">
                        UNDERGRADUATE STUDIES
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                        B.E. Computer Science &amp; Engineering
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-void-950 border border-void-800 font-mono text-xs text-crimson font-bold shadow-inner">
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
              <div className="space-y-5">
                {whatIDoItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className={`p-6 sm:p-7 rounded-2xl bg-void-900/60 border ${item.accent} hover:bg-void-900/90 transition-all duration-300 relative overflow-hidden group`}
                    >
                      <div className="flex items-start gap-4 sm:gap-5">
                        <div className="p-3 rounded-xl bg-void-950 border border-void-800 text-crimson group-hover:bg-crimson group-hover:text-white transition-colors duration-300 flex-shrink-0 mt-0.5">
                          <Icon className="w-5 h-5" />
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

                          <h4 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-crimson-accent transition-colors">
                            {item.title}
                          </h4>

                          <p className="font-sans text-xs sm:text-sm text-silver-muted leading-relaxed">
                            {item.desc}
                          </p>

                          {/* Technical Highlights */}
                          <div className="flex flex-wrap gap-1.5 pt-3">
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

              {/* Clean Minimalist Technical Grid (No percentages) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {engineeringInterests.map((interest, idx) => {
                  const Icon = interest.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-void-900/60 border border-void-800 hover:border-crimson/50 hover:bg-void-900 transition-all duration-200 flex items-center justify-between group"
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
  );
}
