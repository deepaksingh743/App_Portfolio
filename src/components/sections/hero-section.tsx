import { useEffect, useState } from 'react'
import { ArrowDown, Download, Sparkles } from 'lucide-react'
import { scrollToSection } from '../../utils/utils'
import { stats, techStack } from '../../store/portfolio-store'

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 1500
    const steps = 60
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [value])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden grid-bg noise-overlay">
      {/* Glow orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-500/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="section-container relative z-10 pt-28 pb-16">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-sm font-medium animate-fade-in">
            <Sparkles size={14} />
            Available for new opportunities
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl md:text-7xl font-bold text-white max-w-4xl leading-tight animate-slide-up">
            Turning raw data into{' '}
            <span className="gradient-text">actionable insights</span>
          </h1>

          {/* Subtitle */}
          <p className="text-ink-400 text-lg md:text-xl max-w-2xl leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Data Analyst specializing in predictive modeling, business intelligence,
            and storytelling through data. I help organizations make smarter decisions.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3.5 rounded-xl bg-brand-500 text-white font-medium hover:bg-brand-400 transition-all hover:scale-105 glow"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3.5 rounded-xl bg-ink-800/80 text-white font-medium border border-ink-700 hover:bg-ink-700 transition-all hover:scale-105 flex items-center gap-2 justify-center"
            >
              <Download size={18} />
              Get in Touch
            </button>
          </div>

          {/* Tech marquee */}
          <div className="w-full max-w-4xl mt-12 overflow-hidden">
            <div className="flex gap-3 animate-scroll-x" style={{ width: 'max-content' }}>
              {[...techStack, ...techStack].map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-lg bg-ink-900/60 border border-ink-800 text-ink-300 text-sm font-mono whitespace-nowrap"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 w-full max-w-3xl">
            {stats.map((stat, i) => (
              <div
                key={stat.id}
                className="glass-card p-4 md:p-6 text-center animate-slide-up"
                style={{ animationDelay: `${0.3 + i * 0.1}s` }}
              >
                <div className="font-display text-2xl md:text-4xl font-bold text-brand-400">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-ink-400 text-xs md:text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-500 hover:text-brand-400 transition-colors animate-float"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  )
}
