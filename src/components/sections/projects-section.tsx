import { useState } from 'react'
import { ArrowUpRight, TrendingUp } from 'lucide-react'
import { projects } from '../../store/portfolio-store'
import { cn } from '../../utils/utils'

export default function ProjectsSection() {
  const [selected, setSelected] = useState<string | null>(null)

  const selectedProject = projects.find((p) => p.id === selected)

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="section-container">
        <div className="max-w-2xl mb-12">
          <span className="text-brand-400 font-mono text-sm tracking-wider uppercase">03 — Projects</span>
          <h2 className="section-title mt-3">
            Selected <span className="gradient-text">work</span>
          </h2>
          <p className="section-subtitle">
            A curated set of projects spanning machine learning, business intelligence,
            and statistical analysis. Each one solved a real business problem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <button
              key={project.id}
              onClick={() => setSelected(project.id)}
              className="glass-card p-6 text-left group hover:border-brand-500/30 transition-all hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {/* Top bar */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-brand-400 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20">
                  {project.category}
                </span>
                <ArrowUpRight className="text-ink-500 group-hover:text-brand-400 transition-colors" size={20} />
              </div>

              {/* Gradient visual */}
              <div className={cn('h-32 rounded-xl bg-gradient-to-br mb-4 relative overflow-hidden', project.gradient)}>
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                  {project.metrics.slice(0, 3).map((m) => (
                    <div key={m.label} className="text-white">
                      <div className="font-display text-xl font-bold">{m.value}</div>
                      <div className="text-[10px] opacity-80">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="font-display text-lg font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-ink-400 text-sm leading-relaxed line-clamp-2">{project.description}</p>

              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-mono text-ink-300 px-2 py-1 rounded bg-ink-800/60">
                    {tag}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <div
            className="glass-card max-w-2xl w-full p-8 max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="text-xs font-mono text-brand-400">{selectedProject.category}</span>
                <h3 className="font-display text-2xl font-bold text-white mt-1">{selectedProject.title}</h3>
              </div>
              <button onClick={() => setSelected(null)} className="text-ink-400 hover:text-white text-2xl leading-none">
                &times;
              </button>
            </div>

            <div className={cn('h-40 rounded-xl bg-gradient-to-br mb-6 relative overflow-hidden', selectedProject.gradient)}>
              <div className="absolute inset-0 grid-bg opacity-30" />
            </div>

            <p className="text-ink-300 leading-relaxed mb-6">{selectedProject.description}</p>

            <div className="grid grid-cols-3 gap-4 mb-6">
              {selectedProject.metrics.map((m) => (
                <div key={m.label} className="bg-ink-800/50 rounded-xl p-4 text-center">
                  <div className="font-display text-2xl font-bold text-brand-400">{m.value}</div>
                  <div className="text-ink-400 text-xs mt-1">{m.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {selectedProject.tags.map((tag) => (
                <span key={tag} className="text-xs font-mono text-ink-300 px-3 py-1.5 rounded-lg bg-ink-800/60 border border-ink-700">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 mt-6 text-ink-400 text-sm">
              <TrendingUp size={16} className="text-brand-400" />
              Click outside to close
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
