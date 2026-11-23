import { Github, ExternalLink, ArrowUpRight, CheckCircle2, Terminal } from 'lucide-react';
import { PROJECTS } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 lg:py-36 relative z-10 reveal-on-scroll overflow-hidden">
      {/* Background Subtle Ambient Lighting */}
      <div
        className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-crimson-dark/12 rounded-full blur-[180px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -right-32 w-[650px] h-[650px] bg-crimson-dark/10 rounded-full blur-[170px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================================================================ */}
        {/* SECTION HEADER                                                  */}
        {/* ================================================================ */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            {/* Section Identifier */}
            <div className="flex items-center gap-2.5 mb-4 font-mono text-xs text-crimson tracking-widest uppercase font-semibold">
              <span>03</span>
              <span className="w-8 h-[1px] bg-crimson" />
              <span>SELECTED WORKS</span>
            </div>

            {/* Large Heading */}
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05]">
              FEATURED <span className="text-crimson text-glow-crimson">PROJECTS.</span>
            </h2>
          </div>

          {/* Right Subtitle */}
          <p className="font-mono text-xs sm:text-sm text-silver-muted tracking-widest uppercase font-medium md:text-right">
            06 PRODUCTION-GRADE IMPLEMENTATIONS
          </p>
        </div>

        {/* Blueprint Section Divider with Crimson Leading Accent */}
        <div className="relative w-full h-[1px] bg-void-800/80 mb-14 lg:mb-24 overflow-hidden">
          <div className="absolute left-0 top-0 w-24 h-[1px] bg-gradient-to-r from-crimson via-crimson/60 to-transparent" />
        </div>

        {/* ================================================================ */}
        {/* ALL 6 PROJECTS: INDIVIDUAL EDITORIAL SHOWCASE ENTRIES           */}
        {/* ================================================================ */}
        <div className="space-y-20 sm:space-y-28 lg:space-y-36">
          {PROJECTS.map((project, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
              >
                {/* Visual Showcase (7 Cols on Desktop) */}
                <div
                  className={`lg:col-span-7 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="group relative rounded-xl overflow-hidden border border-void-800/90 bg-void-950/80 hover:border-crimson/50 transition-all duration-500 shadow-[0_15px_35px_rgba(0,0,0,0.85)] hover:shadow-[0_20px_50px_rgba(229,9,20,0.2)]">
                    
                    {/* Top System Chrome Bar */}
                    <div className="flex items-center justify-between px-4 py-2.5 bg-void-950 border-b border-void-800/90">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-crimson" />
                        <span className="w-2.5 h-2.5 rounded-full bg-void-700" />
                        <span className="w-2.5 h-2.5 rounded-full bg-void-800" />
                      </div>
                      <div className="font-mono text-[11px] text-silver-muted uppercase tracking-wider">
                        SYS // PRJ_{project.number}
                      </div>
                      <div>
                        {project.liveUrl ? (
                          <span className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/60">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            LIVE SYSTEM
                          </span>
                        ) : (
                          <span className="font-mono text-[10px] text-crimson-accent font-semibold px-2 py-0.5 rounded bg-crimson/10 border border-crimson/30">
                            ENGINEERED
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Project Graphic / Visual Preview */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-void-950 flex items-center justify-center p-2">
                      <img
                        src={project.image}
                        alt={`${project.title} Preview`}
                        className="w-full h-full object-cover rounded-md select-none transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                      {/* Ambient Bottom Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-void-950/70 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Bottom Metadata Status Bar */}
                    <div className="px-4 py-2 bg-void-950/95 border-t border-void-800/80 flex items-center justify-between font-mono text-[11px] text-silver-muted">
                      <span className="truncate pr-2">TARGET: {project.title.toUpperCase()}</span>
                      <span className="text-crimson/80 flex items-center gap-1.5 flex-shrink-0">
                        <Terminal className="w-3 h-3 text-crimson" />
                        <span>PRODUCTION READY</span>
                      </span>
                    </div>

                  </div>
                </div>

                {/* Narrative Details (5 Cols on Desktop) */}
                <div
                  className={`lg:col-span-5 space-y-5 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  {/* Project Number Header */}
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm sm:text-base text-crimson font-bold tracking-widest">
                      {project.number} / 06
                    </span>
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-void-800 to-transparent" />
                  </div>

                  {/* Title and Category */}
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-crimson font-medium block mb-1.5">
                      {project.category}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-sm sm:text-base text-silver-light/90 leading-relaxed font-light">
                    {project.description}
                  </p>

                  {/* Key Capabilities / Highlights List */}
                  <div className="space-y-2.5 pt-2">
                    <h4 className="font-mono text-[11px] uppercase tracking-wider text-silver-muted font-bold flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-crimson" />
                      <span>KEY CAPABILITIES &amp; HIGHLIGHTS</span>
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {project.highlights.map((highlight, hIdx) => (
                        <li
                          key={hIdx}
                          className="flex items-start gap-2 font-sans text-xs sm:text-sm text-silver-light/85"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-crimson flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology Stack Pills */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-xs px-2.5 py-1 rounded bg-void-900 border border-void-800 text-silver-light hover:border-void-700 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons: GitHub always, Live Demo only when available */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-4 border-t border-void-800/80">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-sm bg-void-900/90 hover:bg-crimson border border-void-700 hover:border-crimson text-white font-mono text-xs uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(229,9,20,0.4)] min-h-[44px]"
                    >
                      <Github className="w-4 h-4" />
                      <span>VIEW GITHUB</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-silver-muted group-hover:text-white transition-colors" />
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-sm bg-crimson hover:bg-crimson-glow border border-crimson/60 hover:border-crimson-glow/60 text-white font-mono text-xs font-semibold tracking-wider transition-all duration-300 shadow-[0_4px_16px_rgba(229,9,20,0.25)] hover:shadow-[0_0_25px_rgba(229,9,20,0.6)] min-h-[44px]"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>LIVE DEMO</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
