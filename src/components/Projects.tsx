import { Github, CheckCircle } from 'lucide-react';
import { PROJECTS } from '../data/portfolio';

// Map of project id to custom project graphic
const projectVisuals: Record<string, string> = {
  agroplay: '/assets/projects/agroplay.svg',
  avianguard: '/assets/projects/avianguard.svg',
  nutridairy: '/assets/projects/nutridairy.svg',
  'quiz-management': '/assets/projects/quiz-management.svg',
  'customer-behavior': '/assets/projects/shopping-behavior.svg',
};

export default function Projects() {
  const flagshipProjects = PROJECTS.slice(0, 3);
  const secondaryProjects = PROJECTS.slice(3, 5);

  return (
    <section id="projects" className="py-24 sm:py-32 relative z-10 reveal-on-scroll">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-6 border-b border-void-800">
          <div>
            <div className="flex items-center gap-2 mb-3 font-mono text-xs text-crimson tracking-widest uppercase">
              <span>03</span>
              <span className="w-8 h-[1px] bg-crimson" />
              <span>SELECTED WORKS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              FEATURED <span className="text-crimson">PROJECTS.</span>
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-silver-muted tracking-wider mt-4 md:mt-0 uppercase">
            5 PRODUCTION-READY IMPLEMENTATIONS
          </p>
        </div>

        {/* Flagship Projects: Large Alternating Feature Story Sections */}
        <div className="space-y-28 lg:space-y-36">
          {flagshipProjects.map((project, idx) => {
            const isReversed = idx % 2 === 1;
            const visualSrc = projectVisuals[project.id];

            return (
              <div
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Showcase (7 Cols) */}
                <div
                  className={`lg:col-span-7 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="group relative rounded-xl overflow-hidden border border-void-700 bg-void-900/90 shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:border-crimson/60 transition-all duration-500">
                    
                    {/* Top Browser / System Chrome Bar */}
                    <div className="flex items-center justify-between px-4 py-2.5 bg-void-950 border-b border-void-800">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-crimson" />
                        <span className="w-2.5 h-2.5 rounded-full bg-void-700" />
                        <span className="w-2.5 h-2.5 rounded-full bg-void-800" />
                      </div>
                      <div className="font-mono text-[11px] text-silver-muted uppercase tracking-wider">
                        {project.category}
                      </div>
                      <div className="font-mono text-[10px] text-crimson-accent font-semibold px-2 py-0.5 rounded bg-crimson/10 border border-crimson/30">
                        FLAGSHIP
                      </div>
                    </div>

                    {/* Project Graphic / Visual Preview */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-void-950 flex items-center justify-center p-2">
                      <img
                        src={visualSrc}
                        alt={`${project.title} Preview`}
                        className="w-full h-full object-contain rounded-md transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                      {/* Ambient corner overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-void-950/60 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Screenshot Replace Info Footnote */}
                    <div className="px-4 py-2 bg-void-950/90 border-t border-void-800/80 flex items-center justify-between text-[11px] font-mono text-silver-muted">
                      <span>ASSET: {visualSrc}</span>
                      <span className="text-crimson/80">REPLACEABLE WITH SCREENSHOT</span>
                    </div>
                  </div>
                </div>

                {/* Narrative Details (5 Cols) */}
                <div
                  className={`lg:col-span-5 space-y-6 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  {/* Project Number */}
                  <div className="flex items-center gap-4">
                    <span className="font-display text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-crimson to-void-700 tracking-tighter">
                      {project.number}
                    </span>
                    <div className="h-[2px] flex-1 bg-gradient-to-r from-void-700 to-transparent" />
                  </div>

                  {/* Title and Subtitle */}
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-crimson block mb-1">
                      {project.subtitle}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-sm sm:text-base text-silver-light/90 leading-relaxed font-light">
                    {project.description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="space-y-2.5 pt-2">
                    <h4 className="font-mono text-[11px] uppercase tracking-wider text-silver-muted font-bold">
                      KEY ARCHITECTURAL FEATURES
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 font-sans text-xs sm:text-sm text-silver-light">
                          <CheckCircle className="w-4 h-4 text-crimson flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-xs px-2.5 py-1 rounded bg-void-900 border border-void-700/80 text-silver-light"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-void-800">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-void-900 hover:bg-crimson border border-void-700 hover:border-crimson text-white font-mono text-xs uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(229,9,20,0.4)]"
                      >
                        <Github className="w-4 h-4" />
                        <span>VIEW ON GITHUB</span>
                      </a>
                    ) : null}

                    {/* Demo link or Coming Soon indicator */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded bg-void-950 border border-void-800/80 text-silver-muted font-mono text-xs cursor-not-allowed">
                      <span className="w-1.5 h-1.5 rounded-full bg-void-600" />
                      <span>DEMO COMING SOON</span>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary Featured Projects (Projects 04 and 05) */}
        <div className="mt-28 lg:mt-36">
          <div className="mb-10 flex items-center gap-3">
            <span className="w-3 h-3 bg-crimson" />
            <h3 className="font-display text-2xl font-bold text-white tracking-tight">
              SYSTEMS ARCHITECTURE &amp; DATA ANALYTICS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {secondaryProjects.map((project) => {
              const visualSrc = projectVisuals[project.id];
              return (
                <div
                  key={project.id}
                  className="rounded-xl overflow-hidden border border-void-800 bg-void-900/60 hover:border-crimson/50 hover:bg-void-900 transition-all duration-300 flex flex-col justify-between group shadow-lg"
                >
                  <div>
                    {/* Visual Preview */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-void-950 p-2 border-b border-void-800">
                      <img
                        src={visualSrc}
                        alt={`${project.title} Preview`}
                        className="w-full h-full object-contain rounded transition-transform duration-500 group-hover:scale-102"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4 bg-void-950/90 border border-void-700 px-2.5 py-1 rounded font-mono text-[11px] text-crimson font-bold">
                        PROJECT {project.number}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8 space-y-4">
                      <div>
                        <span className="font-mono text-xs uppercase tracking-wider text-crimson block mb-1">
                          {project.subtitle}
                        </span>
                        <h4 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-crimson-accent transition-colors">
                          {project.title}
                        </h4>
                      </div>

                      <p className="font-sans text-sm text-silver-light/85 leading-relaxed font-light">
                        {project.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-1.5 pt-2">
                        {project.features.slice(0, 4).map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2 font-sans text-xs text-silver-muted">
                            <span className="w-1.5 h-1.5 rounded-full bg-crimson" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.technologies.map((t) => (
                          <span
                            key={t}
                            className="font-mono text-[11px] px-2 py-0.5 rounded bg-void-950 border border-void-800 text-silver-light"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="p-6 sm:px-8 sm:pb-8 pt-0 flex items-center justify-between border-t border-void-800/60 mt-4">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-xs text-white hover:text-crimson transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>VIEW REPOSITORY</span>
                      </a>
                    ) : null}

                    <span className="font-mono text-[11px] text-silver-muted">
                      LINK COMING SOON
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
