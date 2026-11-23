import { GraduationCap, Code2, BarChart3, ShieldCheck, Cpu, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

export default function About() {
  const technicalDimensions = [
    {
      category: '01 // SOFTWARE DEVELOPMENT',
      title: 'Full-Stack Engineering',
      desc: 'Building responsive applications with modern frontend technologies, backend services, REST APIs, and database-driven systems.',
      keywords: ['React', 'TypeScript', 'Java', 'Spring Boot', 'Node.js', 'REST APIs'],
      icon: Code2,
    },
    {
      category: '02 // DATA ANALYSIS',
      title: 'Data Analysis & Insights',
      desc: 'Exploring datasets, identifying patterns, analyzing customer behavior, and transforming raw information into meaningful insights and visualizations.',
      keywords: ['Python', 'SQL', 'Power BI', 'Data Visualization', 'Analytical Thinking'],
      icon: BarChart3,
    },
    {
      category: '03 // SOFTWARE TESTING',
      title: 'Software Quality & Testing',
      desc: 'Validating application functionality, testing API integrations, identifying defects, debugging issues, and ensuring software behaves as expected.',
      keywords: ['Functional Testing', 'API Testing', 'Selenium', 'Debugging', 'Validation'],
      icon: ShieldCheck,
    },
    {
      category: '04 // AI & COMPUTER VISION',
      title: 'Applied AI & Intelligent Systems',
      desc: 'Experimenting with AI-powered applications, computer vision, intelligent automation, and context-aware systems to solve practical problems.',
      keywords: ['Gemini API', 'OpenCV', 'YOLO', 'AI Integration', 'Computer Vision'],
      icon: Cpu,
    },
  ];

  const methodologies = [
    {
      step: '01',
      title: 'Build practical solutions.',
      desc: 'Develop applications that solve meaningful problems instead of building features without purpose.',
    },
    {
      step: '02',
      title: 'Analyze before implementing.',
      desc: 'Understand the problem, explore possible approaches, and make decisions based on logic and available information.',
    },
    {
      step: '03',
      title: 'Test and refine.',
      desc: 'Validate functionality, identify issues, debug, and improve the reliability of software.',
    },
    {
      step: '04',
      title: 'Learn and adapt.',
      desc: 'Explore new technologies, experiment with ideas, and continuously improve development practices.',
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative z-10 reveal-on-scroll">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-void-800">
          <div>
            <div className="flex items-center gap-2 mb-3 font-mono text-xs text-crimson tracking-widest uppercase font-semibold">
              <span>01</span>
              <span className="text-crimson/50">—</span>
              <span>ABOUT IDENTITY</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05]">
              ENGINEERING WITH <br className="hidden sm:inline" />
              <span className="text-crimson text-glow-crimson">PURPOSE.</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 md:text-right font-mono text-xs sm:text-sm text-silver-muted tracking-wider uppercase space-y-1">
            <div className="text-silver-light font-medium">B.E. CSE · COIMBATORE</div>
            <div className="text-crimson font-semibold">2024–2028</div>
          </div>
        </div>

        {/* Editorial Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Narrative Introduction & Core Technical Dimensions */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Introduction Paragraphs */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-crimson space-y-5">
              <p className="text-lg sm:text-xl md:text-[1.25rem] text-silver-light font-sans font-light leading-relaxed">
                I'm a Computer Science and Engineering student passionate about building impactful digital solutions through{' '}
                <span className="text-white font-medium">software development</span>,{' '}
                <span className="text-white font-medium">data analysis</span>,{' '}
                <span className="text-white font-medium">software testing</span>, and{' '}
                <span className="text-white font-medium">AI-driven technologies</span>.
              </p>

              <p className="text-base sm:text-lg text-silver-muted font-sans font-light leading-relaxed">
                I enjoy transforming ideas into practical applications, developing full-stack systems, analyzing data to uncover insights, and testing software to improve functionality and reliability. My interests span application development, intelligent systems, computer vision, data-driven problem-solving, and software quality.
              </p>

              <p className="text-base sm:text-lg text-silver-light/95 font-sans font-light leading-relaxed">
                I believe in building technology that is not only functional, but{' '}
                <span className="text-white font-medium">useful</span>,{' '}
                <span className="text-white font-medium">reliable</span>,{' '}
                <span className="text-white font-medium">scalable</span>, and thoughtfully designed.
              </p>
            </div>

            {/* Core Technical Dimensions Feature Blocks */}
            <div className="space-y-6 pt-2">
              <div className="flex items-center justify-between pb-2 border-b border-void-800/80">
                <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-silver-muted font-bold">
                  CORE TECHNICAL DIMENSIONS
                </h3>
                <span className="font-mono text-[11px] text-crimson font-medium">
                  4 SPECIALIZATION DOMAINS
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {technicalDimensions.map((dim, idx) => {
                  const Icon = dim.icon;
                  return (
                    <div
                      key={idx}
                      className="group p-5 sm:p-6 rounded-xl bg-void-900/60 border border-void-800 hover:border-crimson/50 hover:bg-void-900/90 transition-all duration-300 relative overflow-hidden"
                    >
                      <div className="flex items-start gap-4 sm:gap-5">
                        <div className="p-2.5 rounded-lg bg-void-950 border border-void-800 text-crimson group-hover:bg-crimson group-hover:text-white group-hover:border-crimson transition-colors duration-300 flex-shrink-0 mt-0.5">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-[10px] tracking-widest text-crimson-accent uppercase font-bold">
                              {dim.category}
                            </span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-void-600 group-hover:text-crimson group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                          </div>

                          <h4 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-crimson-accent transition-colors">
                            {dim.title}
                          </h4>

                          <p className="font-sans text-xs sm:text-sm text-silver-muted leading-relaxed">
                            {dim.desc}
                          </p>

                          {/* Technical Keywords Pills */}
                          <div className="flex flex-wrap gap-1.5 pt-2">
                            {dim.keywords.map((kw, kIdx) => (
                              <span
                                key={kIdx}
                                className="font-mono text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-void-950/80 border border-void-800 text-silver-light/80 group-hover:border-void-700 transition-colors"
                              >
                                {kw}
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

          </div>

          {/* Right Column: Formal Education & Developer Methodology */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Education Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-void-900 to-void-950 border border-void-800 hover:border-crimson/40 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-36 h-36 bg-crimson/10 rounded-full blur-3xl pointer-events-none group-hover:bg-crimson/15 transition-colors duration-500" />
              
              <div className="flex items-center gap-3.5 mb-6">
                <div className="p-2.5 rounded-lg bg-crimson/15 border border-crimson/30 text-crimson group-hover:scale-105 transition-transform duration-300">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-[11px] text-crimson uppercase tracking-wider block font-semibold">
                    FORMAL EDUCATION
                  </span>
                  <h4 className="font-display text-lg font-bold text-white">
                    Computer Science &amp; Engineering
                  </h4>
                </div>
              </div>

              <div className="space-y-4 border-t border-void-800/80 pt-5">
                <div>
                  <span className="font-mono text-[11px] text-silver-muted block uppercase tracking-wider">INSTITUTION</span>
                  <span className="font-sans text-sm font-semibold text-silver-light block mt-0.5">
                    {PERSONAL_INFO.education.institution}
                  </span>
                </div>

                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="font-mono text-[11px] text-silver-muted block uppercase tracking-wider">DEGREE DETAILS</span>
                    <span className="font-sans text-sm text-silver-light block mt-0.5">
                      {PERSONAL_INFO.education.degree}
                    </span>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="font-mono text-[11px] text-silver-muted block uppercase tracking-wider">TIMELINE</span>
                    <span className="font-mono text-xs text-crimson font-bold bg-void-950 border border-void-800 px-2.5 py-1 rounded inline-block mt-0.5">
                      {PERSONAL_INFO.education.duration}
                    </span>
                  </div>
                </div>

                <div className="pt-2 text-xs text-silver-muted leading-relaxed font-sans border-t border-void-800/50">
                  {PERSONAL_INFO.education.focus}
                </div>
              </div>
            </div>

            {/* Developer Methodology Panel */}
            <div className="p-6 sm:p-7 rounded-2xl bg-void-900/60 border border-void-800 hover:border-void-700 transition-colors duration-300">
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-void-800">
                <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-silver-muted font-bold">
                  DEVELOPER METHODOLOGY
                </h4>
                <span className="w-2 h-2 rounded-full bg-crimson shadow-[0_0_8px_#ff2a38]" />
              </div>

              <div className="space-y-4">
                {methodologies.map((item, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-3.5 rounded-lg bg-void-950/60 border border-void-800/60 hover:border-crimson/40 hover:bg-void-950 transition-all duration-200 group"
                  >
                    <div className="flex items-baseline gap-2.5 mb-1">
                      <span className="font-mono text-xs text-crimson font-bold">
                        {item.step}
                      </span>
                      <h5 className="font-display text-sm font-bold text-white group-hover:text-crimson-accent transition-colors">
                        {item.title}
                      </h5>
                    </div>
                    <p className="font-sans text-xs text-silver-muted leading-relaxed pl-6">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
