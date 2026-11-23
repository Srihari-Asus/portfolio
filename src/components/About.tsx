import { GraduationCap, Code2, Cpu, Compass, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

export default function About() {
  const pillars = [
    {
      icon: Code2,
      title: 'Full-Stack Engineering',
      desc: 'Architecting robust web applications with responsive React/TypeScript interfaces, RESTful microservices, and reliable database systems.',
    },
    {
      icon: Cpu,
      title: 'Applied AI & Computer Vision',
      desc: 'Translating multimodal LLMs (Gemini API) and edge computer vision (OpenCV, YOLO) into practical, context-aware agricultural and monitoring solutions.',
    },
    {
      icon: Compass,
      title: 'Practical Problem Solving',
      desc: 'Focused on solving tangible problems through technology—from farmers diagnosing crop diseases to acoustic deterrence and retail intelligence.',
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative z-10 reveal-on-scroll">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-void-800">
          <div>
            <div className="flex items-center gap-2 mb-3 font-mono text-xs text-crimson tracking-widest uppercase">
              <span>01</span>
              <span className="w-8 h-[1px] bg-crimson" />
              <span>ABOUT IDENTITY</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              ENGINEERING WITH <span className="text-crimson">PURPOSE.</span>
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-silver-muted tracking-wider mt-4 md:mt-0 uppercase">
            B.E. CSE · COIMBATORE · 2024–2028
          </p>
        </div>

        {/* Editorial Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Core Narrative & Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <div className="relative pl-6 border-l-2 border-crimson">
              <p className="text-lg sm:text-xl md:text-2xl text-white font-sans font-light leading-relaxed">
                "{PERSONAL_INFO.aboutText}"
              </p>
            </div>

            {/* Core Pillars */}
            <div className="pt-6 space-y-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-silver-muted font-bold">
                CORE TECHNICAL DIMENSIONS
              </h3>

              <div className="grid grid-cols-1 gap-4">
                {pillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={idx}
                      className="group p-5 rounded-lg bg-void-900/60 border border-void-800 hover:border-crimson/50 hover:bg-void-900 transition-all duration-300 flex items-start gap-4"
                    >
                      <div className="p-2.5 rounded-md bg-void-800 border border-void-700 text-crimson group-hover:bg-crimson group-hover:text-white transition-colors duration-300 flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-display text-base font-bold text-white mb-1 group-hover:text-crimson-accent transition-colors">
                          {pillar.title}
                        </h4>
                        <p className="font-sans text-sm text-silver-muted leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Academic Credential & Approach */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Education Card */}
            <div className="p-6 sm:p-8 rounded-xl bg-gradient-to-b from-void-900 to-void-950 border border-void-700/80 shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-crimson/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-crimson/15 border border-crimson/30 text-crimson">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-[11px] text-crimson uppercase tracking-wider block">
                    FORMAL EDUCATION
                  </span>
                  <h4 className="font-display text-lg font-bold text-white">
                    Computer Science &amp; Engineering
                  </h4>
                </div>
              </div>

              <div className="space-y-4 border-t border-void-800/80 pt-5">
                <div>
                  <span className="font-mono text-xs text-silver-muted block">INSTITUTION</span>
                  <span className="font-sans text-sm font-semibold text-silver-light">
                    {PERSONAL_INFO.education.institution}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-mono text-xs text-silver-muted block">DEGREE</span>
                    <span className="font-sans text-sm text-silver-light">{PERSONAL_INFO.education.degree}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-xs text-silver-muted block">TIMELINE</span>
                    <span className="font-mono text-xs text-crimson font-bold bg-void-800 px-2.5 py-1 rounded">
                      {PERSONAL_INFO.education.duration}
                    </span>
                  </div>
                </div>

                <div className="pt-2 text-xs text-silver-muted leading-relaxed font-sans">
                  {PERSONAL_INFO.education.focus}
                </div>
              </div>
            </div>

            {/* Approach to Engineering */}
            <div className="p-6 sm:p-8 rounded-xl bg-void-900/50 border border-void-800">
              <h4 className="font-mono text-xs uppercase tracking-widest text-silver-muted font-bold mb-4">
                DEVELOPER METHODOLOGY
              </h4>
              <ul className="space-y-3 font-sans text-sm text-silver-light">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-crimson flex-shrink-0" />
                  <span>Build prototypes rapidly, benchmark early, iterate based on real feedback.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-crimson flex-shrink-0" />
                  <span>Type safety and clean interfaces across every layer of the tech stack.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-crimson flex-shrink-0" />
                  <span>Bridge edge computer vision algorithms with accessible web dashboards.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-crimson flex-shrink-0" />
                  <span>Production-focused code: maintainable, self-documenting, and resilient.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
