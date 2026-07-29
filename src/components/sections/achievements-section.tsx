import { BarChart3, Cpu, PieChart, Database, Brain, Award, type LucideIcon } from 'lucide-react'
import { achievements } from '../../store/portfolio-store'

const iconMap: Record<string, LucideIcon> = {
  BarChart3,
  Cpu,
  PieChart,
  Database,
  Brain,
}

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 md:py-32 relative">
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-500/10 rounded-full blur-[120px]" />

      <div className="section-container relative z-10">
        <div className="max-w-2xl mb-12">
          <span className="text-brand-400 font-mono text-sm tracking-wider uppercase">05 — Achievements</span>
          <h2 className="section-title mt-3">
            Certifications & <span className="gradient-text">credentials</span>
          </h2>
          <p className="section-subtitle">
            Continuous learning is core to my practice. These certifications validate expertise across the data spectrum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((ach, i) => {
            const Icon = iconMap[ach.icon] || Award
            return (
              <div
                key={ach.id}
                className="glass-card p-6 group hover:border-brand-500/30 transition-all hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center shrink-0 group-hover:bg-brand-500/20 transition-colors">
                    <Icon size={24} className="text-brand-400" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-white leading-snug">{ach.title}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-accent-400 text-sm font-medium">{ach.issuer}</span>
                      <span className="text-ink-600">•</span>
                      <span className="text-ink-400 text-sm font-mono">{ach.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
