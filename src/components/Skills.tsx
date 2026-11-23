import { useState } from 'react';
import {
  Code,
  Layers,
  Server,
  Database,
  Eye,
  Wrench,
  Sparkles,
  Terminal,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolio';

const categoryIcons: Record<string, React.ElementType> = {
  'Programming Languages': Code,
  'Frontend Engineering': Layers,
  'Backend Architecture': Server,
  'Databases & Storage': Database,
  'AI & Computer Vision': Eye,
  'Developer Tools & Systems': Wrench,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...SKILL_CATEGORIES.map((c) => c.category)];

  const filteredCategories =
    activeCategory === 'All'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.category === activeCategory);

  return (
    <section id="skills" className="py-24 sm:py-32 relative z-10 bg-void-950/60 reveal-on-scroll">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-void-800">
          <div>
            <div className="flex items-center gap-2 mb-3 font-mono text-xs text-crimson tracking-widest uppercase">
              <span>02</span>
              <span className="w-8 h-[1px] bg-crimson" />
              <span>TECHNICAL ARSENAL</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              SKILLS &amp; <span className="text-crimson">TECHNOLOGY.</span>
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-silver-muted tracking-wider mt-4 md:mt-0 uppercase">
            PRACTICAL STACK · ZERO ARBITRARY PERCENTAGES
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`font-mono text-xs px-4 py-2 rounded-sm uppercase tracking-wider whitespace-nowrap transition-all duration-200 border ${
                  isSelected
                    ? 'bg-crimson border-crimson text-white shadow-[0_0_15px_rgba(229,9,20,0.4)]'
                    : 'bg-void-900 border-void-800 text-silver-muted hover:text-white hover:border-void-600'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Categories Stack */}
        <div className="space-y-12">
          {filteredCategories.map((catGroup) => {
            const Icon = categoryIcons[catGroup.category] || Terminal;
            return (
              <div key={catGroup.category} className="space-y-5">
                {/* Category Header */}
                <div className="flex items-center justify-between pb-2 border-b border-void-800/60">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-void-900 border border-void-800 text-crimson">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-white tracking-wide">
                        {catGroup.category}
                      </h3>
                      <p className="font-mono text-xs text-silver-muted">
                        {catGroup.description}
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-crimson font-medium">
                    {catGroup.skills.length} TECHNOLOGIES
                  </span>
                </div>

                {/* Skills Interactive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                  {catGroup.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group relative p-4 rounded-lg bg-void-900/60 border border-void-800 hover:border-crimson/60 hover:bg-void-900 transition-all duration-200 hover:-translate-y-1 shadow-sm hover:shadow-[0_10px_25px_rgba(229,9,20,0.1)]"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-display text-base font-bold text-white group-hover:text-crimson-accent transition-colors">
                          {skill.name}
                        </span>
                        <Sparkles className="w-3.5 h-3.5 text-void-600 group-hover:text-crimson transition-colors" />
                      </div>
                      <p className="font-sans text-xs text-silver-muted line-clamp-2 leading-relaxed">
                        {skill.description}
                      </p>

                      {/* Active underline indicator */}
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-crimson transition-all duration-300 rounded-b-lg" />
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
