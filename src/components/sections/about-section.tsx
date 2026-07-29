import { Code2, Brain, TrendingUp, Users } from 'lucide-react'

const aboutCards = [
  {
    icon: Code2,
    title: 'Data Analysis',
    desc: 'Building dashboards and Analysing complex data into simple framwork your business needs.',
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    desc: 'Developing predictive models that turn historical data into forward-looking intelligence.',
  },
  {
    icon: TrendingUp,
    title: 'Business Intelligence',
    desc: 'Creating dashboards and reports that make complex metrics accessible to every stakeholder.',
  },
  {
    icon: Users,
    title: 'Data Storytelling',
    desc: 'Translating technical findings into clear narratives that drive executive decision-making.',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="section-container">
        <div className="max-w-2xl mb-16">
          <span className="text-brand-400 font-mono text-sm tracking-wider uppercase">01 — About</span>
          <h2 className="section-title mt-3">
            I make data <span className="gradient-text">make sense</span>
          </h2>
          <p className="section-subtitle">
            With over 6 Months of training in data analytics and data science, I bridge the gap
            between raw data and strategic decisions. My work spans the entire data lifecycle —
            from pipeline construction to executive-level presentations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {aboutCards.map((card, i) => {
            const Icon = card.icon
            return (
              <div
                key={i}
                className="glass-card p-6 group hover:border-brand-500/30 transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mb-4 group-hover:bg-brand-500/20 transition-colors">
                  <Icon className="text-brand-400" size={24} />
                </div>
                <h3 className="font-display text-lg font-semibold text-white mb-2">{card.title}</h3>
                <p className="text-ink-400 text-sm leading-relaxed">{card.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
