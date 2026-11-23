import { Trophy, Award } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data/portfolio';

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 sm:py-32 relative z-10 reveal-on-scroll">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-void-800">
          <div>
            <div className="flex items-center gap-2 mb-3 font-mono text-xs text-crimson tracking-widest uppercase">
              <span>05</span>
              <span className="w-8 h-[1px] bg-crimson" />
              <span>HONORS &amp; RECOGNITION</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              AWARDS &amp; <span className="text-crimson">ACHIEVEMENTS.</span>
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-silver-muted tracking-wider mt-4 md:mt-0 uppercase">
            COMPETITIVE MERIT · HACKATHONS
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {ACHIEVEMENTS_DATA.map((item, idx) => (
            <div
              key={idx}
              className="relative p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-void-900/90 via-void-950 to-void-950 border border-void-700/80 hover:border-crimson/70 transition-all duration-300 shadow-2xl overflow-hidden group hover:-translate-y-1"
            >
              {/* Cinematic Ambient Glow in card */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-crimson/10 rounded-full blur-3xl pointer-events-none group-hover:bg-crimson/20 transition-all duration-500" />

              {/* Top metadata */}
              <div className="flex items-start justify-between mb-8">
                <span className="font-display text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-crimson to-void-700 leading-none">
                  {item.number}
                </span>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-crimson/15 border border-crimson/40 text-crimson font-mono text-xs font-bold tracking-wider uppercase">
                  {idx === 0 ? <Trophy className="w-3.5 h-3.5" /> : <Award className="w-3.5 h-3.5" />}
                  <span>{item.badge}</span>
                </div>
              </div>

              {/* Achievement Information */}
              <div className="space-y-3">
                <div className="font-mono text-xs uppercase tracking-wider text-crimson-accent">
                  {item.tag}
                </div>
                
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white group-hover:text-crimson-accent transition-colors leading-tight">
                  {item.title}
                </h3>

                <p className="font-mono text-xs sm:text-sm text-silver-muted">
                  {item.organization}
                </p>

                <div className="pt-4 border-t border-void-800/80">
                  <p className="font-sans text-base text-silver-light/90 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom Decorative Edge Glow */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-void-800 group-hover:bg-gradient-to-r group-hover:from-crimson-dark group-hover:via-crimson group-hover:to-crimson-glow transition-all duration-500" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
