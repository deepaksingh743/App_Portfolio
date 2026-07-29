import { Briefcase, CheckCircle2 } from 'lucide-react'
import { experience } from '../../store/portfolio-store'

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="section-container">
        <div className="max-w-2xl mb-12">
          <span className="text-brand-400 font-mono text-sm tracking-wider uppercase">04 — Experience</span>
          <h2 className="section-title mt-3">
            My <span className="gradient-text">journey</span>
          </h2>
          <p className="section-subtitle">
            A track record of turning analytical challenges into business wins across multiple organizations.
          </p>
        </div>

        <div className="relative max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-5 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500 via-ink-700 to-transparent" />

          <div className="flex flex-col gap-12">
            {experience.map((exp, i) => (
              <div
                key={exp.id}
                className="relative pl-16 md:pl-20 animate-slide-up"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {/* Dot */}
                <div className="absolute left-3 md:left-4 top-1.5 w-6 h-6 rounded-full bg-brand-500 flex items-center justify-center ring-4 ring-ink-950">
                  <Briefcase size={12} className="text-white" />
                </div>

                <div className="glass-card p-6 hover:border-brand-500/30 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-1">
                    <h3 className="font-display text-lg font-semibold text-white">{exp.role}</h3>
                    <span className="text-brand-400 font-mono text-sm">{exp.period}</span>
                  </div>
                  <div className="text-accent-400 text-sm font-medium mb-3">{exp.company}</div>
                  <p className="text-ink-400 text-sm leading-relaxed mb-4">{exp.description}</p>
                  <ul className="flex flex-col gap-2">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-ink-300 text-sm">
                        <CheckCircle2 size={16} className="text-brand-400 mt-0.5 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
