import { useState } from 'react';
import {
  Code2,
  Layers,
  Server,
  Database,
  Eye,
  BarChart3,
  Terminal,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { SKILL_CATEGORIES, SkillCategory } from '../data/portfolio';

const categoryIcons: Record<string, React.ElementType> = {
  'PROGRAMMING LANGUAGES': Code2,
  'FRONTEND ENGINEERING': Layers,
  'BACKEND ARCHITECTURE': Server,
  'DATABASES & STORAGE': Database,
  'AI & COMPUTER VISION': Eye,
  'DATA ANALYTICS': BarChart3,
  'DEVELOPER TOOLS': Terminal,
  'TESTING & QUALITY ASSURANCE': ShieldCheck,
};

const FILTER_ITEMS = [
  'ALL',
  'PROGRAMMING LANGUAGES',
  'FRONTEND ENGINEERING',
  'BACKEND ARCHITECTURE',
  'DATABASES & STORAGE',
  'AI & COMPUTER VISION',
  'DATA ANALYTICS',
  'DEVELOPER TOOLS',
  'TESTING & QA',
];

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const filteredCategories: SkillCategory[] =
    activeFilter === 'ALL'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter(
          (c) => c.filterLabel === activeFilter || c.category === activeFilter
        );

  return (
    <section
      id="skills"
      className="py-24 sm:py-32 lg:py-36 relative z-10 bg-void-950/80 reveal-on-scroll overflow-hidden"
    >
      {/* Background Subtle Ambient Lighting */}
      <div
        className="absolute top-1/4 -right-32 w-[550px] h-[550px] bg-crimson-dark/12 rounded-full blur-[170px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] bg-crimson-dark/10 rounded-full blur-[160px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* ================================================================ */}
        {/* 1. SECTION HEADER                                               */}
        {/* ================================================================ */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            {/* Section Identifier */}
            <div className="flex items-center gap-2.5 mb-4 font-mono text-xs text-crimson tracking-widest uppercase font-semibold">
              <span>02</span>
              <span className="w-8 h-[1px] bg-crimson" />
              <span>TECHNICAL ARSENAL</span>
            </div>

            {/* Large Heading */}
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.05]">
              SKILLS &amp; <br className="sm:hidden" />
              <span className="text-crimson text-glow-crimson">TECHNOLOGY.</span>
            </h2>
          </div>

          {/* Right Subtitle */}
          <p className="font-mono text-xs sm:text-sm text-silver-muted tracking-widest uppercase font-medium md:text-right">
            PRACTICAL STACK · ZERO ARBITRARY PERCENTAGES
          </p>
        </div>

        {/* Thin Divider Beneath Heading */}
        <div className="w-full h-[1px] bg-void-800/80 mb-10" />

        {/* ================================================================ */}
        {/* 2. CATEGORY FILTER NAVIGATION                                    */}
        {/* ================================================================ */}
        <div className="relative mb-14">
          <div className="flex items-center gap-2.5 overflow-x-auto pb-4 scrollbar-none -mx-6 px-6 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0">
            {FILTER_ITEMS.map((filter) => {
              const isSelected = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`font-mono text-xs px-4 py-2.5 rounded-lg uppercase tracking-wider whitespace-nowrap transition-all duration-300 border flex-shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-crimson border-crimson text-white shadow-[0_0_20px_rgba(229,9,20,0.35)] font-semibold'
                      : 'bg-void-900/90 border-void-800 text-silver-muted hover:text-white hover:border-crimson/50 hover:bg-void-900 hover:shadow-[0_0_12px_rgba(229,9,20,0.15)]'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* ================================================================ */}
        {/* 3. SKILL GROUP STRUCTURE & 4. TECHNOLOGY CARDS                  */}
        {/* ================================================================ */}
        <div
          key={activeFilter}
          className="space-y-16 animate-in fade-in duration-300 ease-out"
        >
          {filteredCategories.map((catGroup) => {
            const Icon = categoryIcons[catGroup.category] || Terminal;
            const techCountFormatted =
              catGroup.skills.length < 10
                ? `0${catGroup.skills.length}`
                : `${catGroup.skills.length}`;

            return (
              <div
                key={catGroup.id}
                className="space-y-6 rounded-2xl bg-void-950/40 p-1 sm:p-0"
              >
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-void-800/80">
                  <div className="flex items-start sm:items-center gap-3.5">
                    {/* Small Dark Square with Category Icon */}
                    <div className="p-2.5 rounded-lg bg-void-900 border border-void-800 text-crimson flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div>
                      {/* Category Title */}
                      <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-wide uppercase">
                        {catGroup.category}
                      </h3>

                      {/* Short Category Description */}
                      <p className="font-mono text-xs text-silver-muted mt-0.5">
                        {catGroup.description}
                      </p>
                    </div>
                  </div>

                  {/* Number of Technologies Badge */}
                  <span className="font-mono text-xs text-crimson font-bold tracking-widest uppercase whitespace-nowrap bg-void-900/90 border border-void-800 px-3 py-1.5 rounded-md self-start sm:self-auto shadow-inner">
                    {techCountFormatted} TECHNOLOGIES
                  </span>
                </div>

                {/* Technology Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-1">
                  {catGroup.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group relative p-5 rounded-xl bg-void-900/70 border border-void-800/90 hover:border-crimson/50 hover:bg-void-900 transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_16px_rgba(0,0,0,0.4)] hover:shadow-[0_10px_30px_rgba(229,9,20,0.18)] flex flex-col justify-between overflow-hidden"
                    >
                      {/* Top Row: Technology Name & Tech Glyph */}
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <h4 className="font-display text-base sm:text-lg font-bold text-white tracking-wide group-hover:text-crimson-accent transition-colors">
                            {skill.name}
                          </h4>
                          <Sparkles className="w-3.5 h-3.5 text-void-700 group-hover:text-crimson transition-colors flex-shrink-0" />
                        </div>

                        {/* Short Description */}
                        <p className="font-sans text-xs text-silver-muted leading-relaxed line-clamp-2">
                          {skill.description}
                        </p>
                      </div>

                      {/* Subtle Bottom Accent Highlight on Hover */}
                      <div
                        className="absolute bottom-0 left-4 right-4 h-[1.5px] bg-transparent group-hover:bg-crimson/80 transition-all duration-300 rounded-full"
                        aria-hidden="true"
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
