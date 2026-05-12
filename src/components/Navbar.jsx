import { useState, useEffect } from 'react'

const links = [
  { label: 'About',      href: '#about',      id: 'about' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Projects',   href: '#projects',   id: 'projects' },
  { label: 'Skills',     href: '#skills',     id: 'skills' },
  { label: 'Resume',     href: '#resume',     id: 'resume' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const [active, setActive]     = useState('')

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-35% 0px -55% 0px' }
    )
    links.forEach(l => {
      const el = document.getElementById(l.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const navBase =
    'fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] transition-all duration-300'
  const navHeight = scrolled ? 'h-14' : 'h-16'
  const navBg     = scrolled
    ? 'bg-[#050508]/95 backdrop-blur-xl border-b border-[#16163a]'
    : 'bg-[#050508]/70 backdrop-blur-lg border-b border-[#16163a]/50'

  return (
    <>
      <nav className={`${navBase} ${navHeight} ${navBg}`}>
        {/* Logo */}
        <div
          className="font-head text-white font-bold text-lg tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          YKD<span className="text-[#3b82f6]">.</span>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`nav-link-underline${active === l.id ? ' active' : ''} text-sm font-medium transition-colors duration-200 tracking-wide ${
                  active === l.id ? 'text-[#3b82f6]' : 'text-[#64748b] hover:text-[#3b82f6]'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="btn-shimmer text-xs font-semibold text-[#3b82f6] border border-[#3b82f6] px-4 py-1.5 rounded-md
                         hover:bg-[#3b82f6] hover:text-[#050508] transition-all duration-200"
            >
              Let's Talk
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1 cursor-pointer"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#e2e8f0] rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#e2e8f0] rounded transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#e2e8f0] rounded transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed top-14 left-0 right-0 z-40 bg-[#050508]/98 border-b border-[#16163a] px-[5%] py-5 flex flex-col gap-4 md:hidden">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-[#64748b] hover:text-[#3b82f6] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="text-sm font-semibold text-[#3b82f6] border border-[#3b82f6] px-4 py-2 rounded-md text-center
                       hover:bg-[#3b82f6] hover:text-[#050508] transition-all"
          >
            Let's Talk
          </a>
        </div>
      )}
    </>
  )
}
