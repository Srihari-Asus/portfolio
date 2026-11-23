import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 lg:py-36 relative z-10 bg-void-950/40 reveal-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-void-800">
          <div>
            <div className="flex items-center gap-2 mb-3 font-mono text-xs text-crimson tracking-widest uppercase">
              <span>04</span>
              <span className="w-8 h-[1px] bg-crimson" />
              <span>INDUSTRY TRACK</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              PRACTICAL <span className="text-crimson">EXPERIENCE.</span>
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-silver-muted tracking-wider mt-4 md:mt-0 uppercase">
            SOFTWARE ENGINEERING INTERNSHIP
          </p>
        </div>

        {/* Modern Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Glowing Line */}
          <div className="absolute top-0 bottom-0 left-3 sm:left-8 w-[2px] bg-gradient-to-b from-crimson via-void-700 to-transparent" />

          {EXPERIENCE_DATA.map((exp, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-20 py-4 group">
              
              {/* Glowing Timeline Marker */}
              <div className="absolute left-[6px] sm:left-[24px] top-6 w-3.5 h-3.5 rounded-full bg-crimson border-4 border-void-950 shadow-[0_0_12px_#ff2a38] group-hover:scale-125 transition-transform duration-300" />

              {/* Experience Card */}
              <div className="p-4 sm:p-7 lg:p-10 rounded-xl bg-void-900/70 border border-void-800 hover:border-crimson/50 hover:bg-void-900 transition-all duration-300 shadow-xl">
                
                {/* Meta details header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 mb-4 pb-4 border-b border-void-800">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-crimson font-bold block mb-1">
                      {exp.type.toUpperCase()}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-white">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 font-display text-base sm:text-lg text-silver-light font-semibold mt-1">
                      <span>{exp.company}</span>
                      {exp.location && (
                        <>
                          <span className="text-void-600">•</span>
                          <span className="font-sans text-xs text-silver-muted flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-crimson" />
                            {exp.location}
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-void-950 border border-void-700/80 font-mono text-xs text-crimson-accent font-semibold shadow-inner self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Key Responsibilities */}
                <div className="space-y-3">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-silver-muted font-bold mb-3">
                    CORE DELIVERABLES &amp; IMPACT
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-3 font-sans text-sm text-silver-light">
                        <CheckCircle2 className="w-4 h-4 text-crimson flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
