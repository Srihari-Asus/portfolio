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
      className="py-20 sm:py-28 lg:py-36 relative z-10 bg-void-950/80 reveal-on-scroll overflow-hidden"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05]">
              SKILLS &amp; <br className="sm:hidden" />
              <span className="text-crimson text-glow-crimson">TECHNOLOGY.</span>
            </h2>
          </div>

          {/* Right Subtitle */}
          <p className="font-mono text-xs sm:text-sm text-silver-muted tracking-widest uppercase font-medium md:text-right">
            PRACTICAL STACK · ZERO ARBITRARY PERCENTAGES
          </p>
        </div>

        {/* Blueprint Section Divider with Crimson Leading Accent */}
        <div className="relative w-full h-[1px] bg-void-800/80 mb-10 overflow-hidden">
          <div className="absolute left-0 top-0 w-24 h-[1px] bg-gradient-to-r from-crimson via-crimson/60 to-transparent" />
        </div>

        {/* ================================================================ */}
        {/* 2. CATEGORY FILTER NAVIGATION                                    */}
        {/* ================================================================ */}
        <div className="relative mb-14">
          <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
            {FILTER_ITEMS.map((filter) => {
              const isSelected = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`font-mono text-xs px-3.5 py-2 min-h-[40px] rounded-md uppercase tracking-wider whitespace-nowrap transition-all duration-300 border flex-shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-crimson border-crimson text-white shadow-[0_0_18px_rgba(229,9,20,0.35)] font-semibold'
                      : 'bg-void-950/90 border-void-800/80 text-silver-muted hover:text-white hover:border-crimson/40 hover:bg-void-900 hover:shadow-[0_0_12px_rgba(229,9,20,0.12)]'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* ================================================================ */}
        {/* 3. SKILL GROUP STRUCTURE & TECHNICAL SKELETON CARDS             */}
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
                className="space-y-4 rounded-xl bg-void-950/20"
              >
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:items-center justify-between gap-3 sm:gap-4 pb-1">
                  <div className="flex items-start sm:items-center gap-3">
                    {/* Small Dark Square with Category Icon */}
                    <div className="p-2 rounded-md bg-void-950 border border-void-800/90 text-crimson flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Icon className="w-4 h-4" />
                    </div>

                    <div>
                      {/* Category Title */}
                      <h3 className="font-display text-base sm:text-lg font-bold text-white tracking-wider uppercase">
                        {catGroup.category}
                      </h3>

                      {/* Short Category Description */}
                      <p className="font-mono text-xs text-silver-muted mt-0.5 font-light">
                        {catGroup.description}
                      </p>
                    </div>
                  </div>

                  {/* Number of Technologies Badge (Blueprint style) */}
                  <div className="flex items-center gap-2 font-mono text-[11px] text-silver-muted bg-void-950/90 border border-void-800/90 px-3 py-1 rounded-sm self-start sm:self-auto shadow-inner">
                    <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse" />
                    <span className="text-crimson font-bold tracking-widest">{techCountFormatted}</span>
                    <span className="text-silver-muted tracking-wider">TECHNOLOGIES</span>
                  </div>
                </div>

                {/* Blueprint Category Separator with Crimson Leading Edge */}
                <div className="relative w-full h-[1px] bg-void-800/70 mb-5 overflow-hidden">
                  <div className="absolute left-0 top-0 w-16 h-[1px] bg-gradient-to-r from-crimson/80 to-transparent" />
                </div>

                {/* Technology Cards Grid (Engineered technical skeleton) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-3.5">
                  {catGroup.skills.map((skill, idx) => (
                    <div
                      key={skill.name}
                      className="group relative p-3.5 sm:p-4 rounded-lg bg-void-950/80 border border-void-800/70 hover:border-crimson/40 hover:bg-void-900/80 transition-all duration-300 hover:-translate-y-1 shadow-[0_2px_10px_rgba(0,0,0,0.5)] hover:shadow-[0_4px_20px_rgba(229,9,20,0.12)] flex flex-col justify-between overflow-hidden"
                    >
                      {/* Micro HUD Corner Notch (Top-Left) */}
                      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-void-700/60 group-hover:border-crimson/80 transition-colors duration-300 rounded-tl-sm pointer-events-none" />

                      {/* Top Row: Technology Name & Tech Index Marker */}
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <h4 className="font-display text-sm sm:text-base font-bold text-white tracking-wide group-hover:text-crimson-accent transition-colors">
                            {skill.name}
                          </h4>
                          <div className="flex items-center gap-1 font-mono text-[10px] text-void-600 group-hover:text-crimson/80 transition-colors select-none">
                            <span className="w-1 h-1 rounded-full bg-void-700 group-hover:bg-crimson transition-colors" />
                            <span>{idx < 9 ? `0${idx + 1}` : idx + 1}</span>
                          </div>
                        </div>

                        {/* Short Description */}
                        <p className="font-sans text-xs text-silver-muted leading-relaxed line-clamp-2 font-light">
                          {skill.description}
                        </p>
                      </div>

                      {/* Subtle bottom edge structural hairline */}
                      <div
                        className="absolute bottom-0 left-3 right-3 h-[1px] bg-transparent group-hover:bg-crimson/40 transition-colors duration-300 pointer-events-none"
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
