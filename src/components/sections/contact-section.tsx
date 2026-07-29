import { useState } from 'react'
import { Mail, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string
const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return

    setStatus('sending')
    try {
      const { error } = await supabase.from('contact_messages').insert({
        name: form.name,
        email: form.email,
        message: form.message,
      })

      if (error) throw error

      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-500/10 rounded-full blur-[140px]" />

      <div className="section-container relative z-10">
        <div className="max-w-2xl mb-12">
          <span className="text-brand-400 font-mono text-sm tracking-wider uppercase">06 — Contact</span>
          <h2 className="section-title mt-3">
            Let's <span className="gradient-text">talk data</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind, a role to fill, or just want to discuss the latest in data analytics?
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="glass-card p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center">
                <Mail className="text-brand-400" size={22} />
              </div>
              <div>
                <div className="text-ink-400 text-sm">Email</div>
                <div className="text-white font-medium">deepakomaxe743@gmail.com</div>
              </div>
            </div>
            <div className="glass-card p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center">
                <MapPin className="text-brand-400" size={22} />
              </div>
              <div>
                <div className="text-ink-400 text-sm">Location</div>
                <div className="text-white font-medium">Omaxe City, Palwal , haryana </div>
              </div>
            </div>
            <div className="glass-card p-6">
              <div className="text-ink-400 text-sm mb-2">Response time</div>
              <div className="text-white font-medium">Usually within 24 hours</div>
              <div className="mt-4 flex items-center gap-2 text-brand-400 text-sm">
                <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
                Currently available
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 glass-card p-6 md:p-8 flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="text-ink-300 text-sm font-medium mb-2 block">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-ink-800/60 border border-ink-700 text-white placeholder:text-ink-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                  required
                />
              </div>
              <div>
                <label className="text-ink-300 text-sm font-medium mb-2 block">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-ink-800/60 border border-ink-700 text-white placeholder:text-ink-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                  required
                />
              </div>
            </div>
            <div>
              <label className="text-ink-300 text-sm font-medium mb-2 block">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project or opportunity..."
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-ink-800/60 border border-ink-700 text-white placeholder:text-ink-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors resize-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending' || status === 'sent'}
              className="px-6 py-3.5 rounded-xl bg-brand-500 text-white font-medium hover:bg-brand-400 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending' && (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              )}
              {status === 'sent' && (
                <>
                  <CheckCircle2 size={18} />
                  Message sent!
                </>
              )}
              {status === 'idle' && (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
              {status === 'error' && 'Try again'}
            </button>

            {status === 'error' && (
              <p className="text-red-400 text-sm">Something went wrong. Please try again or email me directly.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
