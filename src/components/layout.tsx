import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../store/portfolio-store'
import { scrollToSection, cn } from '../utils/utils'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    function App() {
  // Yeh raha security code jo background mein chalega
  useEffect(() => {
    // 1. Right-click disable karne ke liye
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    
    // 2. F12, Ctrl+U, Ctrl+Shift+I jaise shortcuts block karne ke liye
    const handleKeyDown = (keyboardEvent: KeyboardEvent) => {
      if (
        keyboardEvent.key === 'F12' || 
        (keyboardEvent.ctrlKey && keyboardEvent.shiftKey && (keyboardEvent.key === 'I' || keyboardEvent.key === 'J' || keyboardEvent.key === 'C')) || 
        (keyboardEvent.ctrlKey && keyboardEvent.key === 'U')
      ) {
        keyboardEvent.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    // Clean up function
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div>
      {/* Aapka baaki sara portfolio ka code yahan pehle se hoga */}
    </div>
  );
}

export default App;
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = ['home', ...navLinks.map((l) => l.id)]
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(id)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id: string) => {
    scrollToSection(id)
    setMobileOpen(false)
  }

  return (
    <div className="min-h-screen bg-ink-950">
      {/* Nav */}
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-ink-950/80 backdrop-blur-xl border-b border-ink-800/60 py-3'
            : 'bg-transparent py-5',
        )}
      >
        <div className="section-container flex items-center justify-between">
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-lg bg-brand-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-white font-display font-bold text-lg">D</span>
            </div>
            <span className="font-display font-bold text-white text-lg hidden sm:block">
              Data<span className="text-brand-400">Lab</span>
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all',
                  activeSection === link.id
                    ? 'text-brand-400 bg-brand-500/10'
                    : 'text-ink-400 hover:text-white hover:bg-ink-800/50',
                )}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('contact')}
              className="ml-2 px-5 py-2 rounded-lg bg-brand-500 text-white text-sm font-medium hover:bg-brand-400 transition-colors"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden section-container mt-3">
            <div className="glass-card p-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={cn(
                    'px-4 py-3 rounded-lg text-left text-sm font-medium transition-all',
                    activeSection === link.id
                      ? 'text-brand-400 bg-brand-500/10'
                      : 'text-ink-300 hover:text-white hover:bg-ink-800/50',
                  )}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNav('contact')}
                className="mt-2 px-4 py-3 rounded-lg bg-brand-500 text-white text-sm font-medium text-center"
              >
                Hire Me
              </button>
            </div>
          </div>
        )}
      </nav>

      <main>{children}</main>

      {/* Footer */}
      <footer className="border-t border-ink-800/60 py-10 mt-20">
        <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center">
              <span className="text-white font-display font-bold text-sm">D</span>
            </div>
            <span className="text-ink-400 text-sm">
              © {new Date().getFullYear()} DataLab. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-6 text-ink-400 text-sm">
            <button onClick={() => handleNav('about')} className="hover:text-brand-400 transition-colors">About</button>
            <button onClick={() => handleNav('projects')} className="hover:text-brand-400 transition-colors">Projects</button>
            <button onClick={() => handleNav('contact')} className="hover:text-brand-400 transition-colors">Contact</button>
          </div>
        </div>
      </footer>
    </div>
  )
}
