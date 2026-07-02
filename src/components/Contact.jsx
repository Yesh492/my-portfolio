import { useFadeIn } from '../hooks/useFadeIn'

const links = [
  {
    type: 'Email',
    value: 'dyeshvanthk@gmail.com',
    href: 'mailto:dyeshvanthk@gmail.com',
    hoverColor: '#60a5fa',
    hoverGlow: 'rgba(59,130,246,0.18)',
    hoverBorder: 'rgba(59,130,246,0.55)',
    iconBg: 'rgba(59,130,246,0.1)',
    iconBorder: 'rgba(59,130,246,0.22)',
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
  },
  {
    type: 'Phone',
    value: '510-362-8040',
    href: 'tel:5103628040',
    hoverColor: '#34d399',
    hoverGlow: 'rgba(52,211,153,0.15)',
    hoverBorder: 'rgba(52,211,153,0.5)',
    iconBg: 'rgba(16,185,129,0.1)',
    iconBorder: 'rgba(16,185,129,0.22)',
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
      </svg>
    ),
  },
  {
    type: 'LinkedIn',
    value: 'linkedin.com/in/yeshvanth-kumar',
    href: 'https://linkedin.com/in/yeshvanth-kumar',
    hoverColor: '#0ea5e9',
    hoverGlow: 'rgba(10,102,194,0.18)',
    hoverBorder: 'rgba(10,102,194,0.55)',
    iconBg: 'rgba(10,102,194,0.1)',
    iconBorder: 'rgba(10,102,194,0.22)',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    type: 'GitHub',
    value: 'github.com/Yesh492',
    href: 'https://github.com/Yesh492',
    hoverColor: '#e2e8f0',
    hoverGlow: 'rgba(226,232,240,0.12)',
    hoverBorder: 'rgba(226,232,240,0.4)',
    iconBg: 'rgba(255,255,255,0.07)',
    iconBorder: 'rgba(255,255,255,0.15)',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
  },
]

export default function Contact() {
  const ref = useFadeIn()

  return (
    <section id="contact" className="py-28 px-[5%] bg-[#080810]" ref={ref}>
      <div className="max-w-3xl mx-auto text-center">
        <div className="fade-up">
          <p
            className="text-xs font-semibold tracking-[0.15em] uppercase text-[#3b82f6] mb-3"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Contact
          </p>
          <h2
            className="text-white font-bold mb-4"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              letterSpacing: '-0.03em',
            }}
          >
            Let's Connect
          </h2>
          <div className="flex justify-center">
            <span className="section-heading-line mb-6" />
          </div>
          <p className="text-[#64748b] text-base mb-10">
            Open to{' '}
            <span className="text-[#60a5fa] font-semibold">full-time SWE, ML, and Cloud roles</span>.
          </p>
        </div>

        <div className="fade-up delay-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {links.map((l, i) => (
            <a
              key={i}
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="glass-card flex items-center gap-3 px-5 py-4 bg-[#0c0c18]/80 border border-[#16163a] rounded-xl
                         text-left no-underline hover:-translate-y-0.5 transition-all duration-250 group"
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = l.hoverBorder
                e.currentTarget.style.boxShadow   = `0 12px 36px ${l.hoverGlow}`
                const icon = e.currentTarget.querySelector('.contact-icon')
                if (icon) {
                  icon.style.color       = l.hoverColor
                  icon.style.background  = l.hoverGlow
                  icon.style.borderColor = l.hoverBorder
                }
                const val = e.currentTarget.querySelector('.contact-value')
                if (val) val.style.color = l.hoverColor
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#16163a'
                e.currentTarget.style.boxShadow   = 'none'
                const icon = e.currentTarget.querySelector('.contact-icon')
                if (icon) {
                  icon.style.color       = l.hoverColor
                  icon.style.background  = l.iconBg
                  icon.style.borderColor = l.iconBorder
                }
                const val = e.currentTarget.querySelector('.contact-value')
                if (val) val.style.color = '#e2e8f0'
              }}
            >
              <div
                className="contact-icon w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200"
                style={{
                  color: l.hoverColor,
                  background: l.iconBg,
                  border: `1px solid ${l.iconBorder}`,
                }}
              >
                {l.icon}
              </div>
              <div>
                <div className="text-[0.68rem] font-semibold tracking-widest uppercase text-[#334155] mb-0.5">
                  {l.type}
                </div>
                <div
                  className="contact-value text-sm font-semibold text-[#e2e8f0] transition-colors duration-200"
                >
                  {l.value}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
