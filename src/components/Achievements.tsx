import { Trophy, Award, BookOpen } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data/portfolio';

export default function Achievements() {
  const getBadgeIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Trophy className="w-3.5 h-3.5 flex-shrink-0" />;
      case 1:
        return <Award className="w-3.5 h-3.5 flex-shrink-0" />;
      case 2:
      default:
        return <BookOpen className="w-3.5 h-3.5 flex-shrink-0" />;
    }
  };

  return (
    <section id="achievements" className="py-20 sm:py-28 lg:py-36 relative z-10 reveal-on-scroll overflow-hidden">
      {/* Background Subtle Ambient Lighting */}
      <div
        className="absolute top-1/4 -right-32 w-[550px] h-[550px] bg-crimson-dark/12 rounded-full blur-[180px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] bg-crimson-dark/10 rounded-full blur-[160px] pointer-events-none -z-10"
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
              <span>05</span>
              <span className="w-8 h-[1px] bg-crimson" />
              <span>HONORS &amp; RECOGNITION</span>
            </div>

            {/* Large Heading */}
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05]">
              AWARDS &amp; <br className="sm:hidden" />
              <span className="text-crimson text-glow-crimson">ACHIEVEMENTS.</span>
            </h2>
          </div>

          {/* Right Subtitle */}
          <p className="font-mono text-xs sm:text-sm text-silver-muted tracking-widest uppercase font-medium md:text-right">
            COMPETITIVE MERIT · HACKATHONS
          </p>
        </div>

        {/* Blueprint Section Divider with Crimson Leading Accent */}
        <div className="relative w-full h-[1px] bg-void-800/80 mb-12 lg:mb-16 overflow-hidden">
          <div className="absolute left-0 top-0 w-24 h-[1px] bg-gradient-to-r from-crimson via-crimson/60 to-transparent" />
        </div>

        {/* ================================================================ */}
        {/* ACHIEVEMENTS GRID (3 Cards: Dhruva '26 Highlighted + SIH + Editor) */}
        {/* ================================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {ACHIEVEMENTS_DATA.map((item, idx) => {
            const isPrimary = item.isPrimary;

            return (
              <div
                key={idx}
                className={`relative p-5 sm:p-7 lg:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden group ${
                  isPrimary
                    ? 'bg-gradient-to-br from-void-900 via-void-950 to-void-950 border border-crimson/50 hover:border-crimson shadow-[0_12px_35px_rgba(229,9,20,0.15)] hover:shadow-[0_18px_45px_rgba(229,9,20,0.25)]'
                    : 'bg-gradient-to-br from-void-950/90 via-void-950 to-void-950 border border-void-800 hover:border-crimson/60 shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_15px_35px_rgba(229,9,20,0.12)]'
                }`}
              >
                {/* Ambient Glow in Card */}
                <div
                  className={`absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl pointer-events-none transition-all duration-500 ${
                    isPrimary
                      ? 'bg-crimson/15 group-hover:bg-crimson/25'
                      : 'bg-crimson/5 group-hover:bg-crimson/15'
                  }`}
                  aria-hidden="true"
                />

                <div>
                  {/* Top Metadata Row: Large Number & Badge */}
                  <div className="flex items-start justify-between gap-3 mb-6">
                    <span className="font-display text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-crimson to-void-700 leading-none">
                      {item.number}
                    </span>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-crimson/15 border border-crimson/40 text-crimson font-mono text-[11px] font-bold tracking-wider uppercase shadow-sm">
                      {getBadgeIcon(idx)}
                      <span className="truncate">{item.badge}</span>
                    </div>
                  </div>

                  {/* Achievement Information */}
                  <div className="space-y-2.5">
                    {/* Category Tag */}
                    <div className="font-mono text-xs uppercase tracking-wider text-crimson-accent font-semibold">
                      {item.tag}
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white group-hover:text-crimson-accent transition-colors leading-tight">
                      {item.title}
                    </h3>

                    {/* Organization */}
                    <p className="font-mono text-xs text-silver-muted font-light">
                      {item.organization}
                    </p>
                  </div>
                </div>

                {/* Description Divider & Paragraph */}
                <div className="pt-5 mt-6 border-t border-void-800/80">
                  <p className="font-sans text-sm sm:text-base text-silver-light/90 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Decorative Edge Glow */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-[2px] transition-all duration-500 ${
                    isPrimary
                      ? 'bg-crimson/80 group-hover:bg-gradient-to-r group-hover:from-crimson-dark group-hover:via-crimson group-hover:to-crimson-glow'
                      : 'bg-void-800 group-hover:bg-gradient-to-r group-hover:from-crimson/60 group-hover:via-crimson group-hover:to-crimson-glow'
                  }`}
                  aria-hidden="true"
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
