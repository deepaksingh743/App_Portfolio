import { useState } from 'react'
import { skills } from '../../store/portfolio-store'
import type { Skill } from '../../types/portfolio-types'
import { cn } from '../../utils/utils'

const categories: Skill['category'][] = ['Languages', 'Tools', 'Frameworks', 'Databases']

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<Skill['category'] | 'All'>('All')

  const filtered = activeCategory === 'All' ? skills : skills.filter((s) => s.category === activeCategory)

  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent-500/10 rounded-full blur-[100px]" />

      <div className="section-container relative z-10">
        <div className="max-w-2xl mb-12">
          <span className="text-brand-400 font-mono text-sm tracking-wider uppercase">02 — Skills</span>
          <h2 className="section-title mt-3">
            Tools of the <span className="gradient-text">trade</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive toolkit built over years of hands-on experience across the data stack.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {(['All', ...categories] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                'px-4 py-2 rounded-lg text-sm font-medium transition-all',
                activeCategory === cat
                  ? 'bg-brand-500 text-white'
                  : 'bg-ink-900/60 text-ink-400 border border-ink-800 hover:text-white hover:border-ink-700',
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {filtered.map((skill, i) => (
            <div key={skill.name} className="animate-slide-in-right" style={{ animationDelay: `${i * 0.05}s` }}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium text-sm">{skill.name}</span>
                <span className="text-ink-400 font-mono text-xs">{skill.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-ink-800 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500 transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
