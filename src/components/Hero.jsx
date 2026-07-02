import { useEffect, useRef, useState } from 'react'

const roles = ['Software Engineer', 'ML Systems Builder', 'Cloud Architect', 'AI-Native Developer']

export default function Hero() {
  const els = useRef([])

  // Staggered entrance
  useEffect(() => {
    els.current.forEach((el, i) => {
      if (!el) return
      setTimeout(() => el.classList.add('visible'), 120 + i * 130)
    })
  }, [])

  // Typing effect
  const [typedText, setTypedText]   = useState('')
  const [roleIndex, setRoleIndex]   = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout
    if (!isDeleting) {
      if (typedText.length < current.length) {
        timeout = setTimeout(() => setTypedText(current.slice(0, typedText.length + 1)), 80)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2200)
      }
    } else {
      if (typedText.length > 0) {
        timeout = setTimeout(() => setTypedText(typedText.slice(0, -1)), 42)
      } else {
        setIsDeleting(false)
        setRoleIndex(i => (i + 1) % roles.length)
      }
    }
    return () => clearTimeout(timeout)
  }, [typedText, isDeleting, roleIndex])

  const ref = i => el => { els.current[i] = el }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-[5%] pt-24 pb-16 overflow-hidden"
      style={{ backgroundColor: '#050508' }}
    >
      {/* Aurora blob 1 — blue, top-right */}
      <div
        className="aurora-blob-1 absolute pointer-events-none"
        style={{
          top: '-15%', right: '-8%',
          width: '70%', height: '70%',
          background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.14) 0%, rgba(59,130,246,0.04) 45%, transparent 72%)',
          filter: 'blur(55px)',
        }}
      />
      {/* Aurora blob 2 — purple, bottom-left */}
      <div
        className="aurora-blob-2 absolute pointer-events-none"
        style={{
          bottom: '0%', left: '-12%',
          width: '55%', height: '55%',
          background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.11) 0%, rgba(139,92,246,0.03) 45%, transparent 72%)',
          filter: 'blur(70px)',
        }}
      />

      {/* Grid overlay */}
      <div className="hero-grid" />

      <div className="relative max-w-4xl">
        {/* Availability badge */}
        <div
          ref={ref(0)}
          className="fade-up inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-[#16163a] rounded-full text-xs text-[#64748b] bg-[#0c0c18]/60"
        >
          <span className="pulse-dot w-2 h-2 rounded-full bg-[#10b981] shadow-[0_0_8px_#10b981]" />
          Available for full-time roles
        </div>

        {/* Name with soft pulsing glow behind it */}
        <div ref={ref(1)} className="fade-up delay-1 relative mb-3">
          {/* Glow blob behind name */}
          <div
            className="absolute pointer-events-none"
            style={{
              inset: '-30px -50px',
              background: 'radial-gradient(ellipse 65% 85% at 35% 50%, rgba(59,130,246,0.2) 0%, rgba(139,92,246,0.12) 45%, transparent 80%)',
              filter: 'blur(28px)',
              animation: 'aurora-move 6s ease-in-out infinite',
            }}
          />
          <h1
            className="font-head leading-[1.04] tracking-tight text-white"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(2.8rem, 6.5vw, 5.5rem)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
            }}
          >
            Yeshvanth<br />
            <span
              style={{
                background: 'linear-gradient(135deg, #60a5fa 0%, #818cf8 40%, #a78bfa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Kumar Domala
            </span>
          </h1>
        </div>

        {/* Typing effect */}
        <div
          ref={ref(2)}
          className="fade-up delay-2 mb-3 flex items-center"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(1.05rem, 1.9vw, 1.35rem)',
            fontWeight: 600,
            color: '#60a5fa',
            minHeight: '2em',
          }}
        >
          {typedText}
          <span
            className="cursor-blink"
            style={{
              display: 'inline-block',
              width: '2px',
              height: '1.1em',
              background: '#60a5fa',
              marginLeft: '2px',
              verticalAlign: 'text-bottom',
              borderRadius: '1px',
            }}
          />
        </div>

        {/* Tagline */}
        <p
          ref={ref(3)}
          className="fade-up delay-2 text-[#64748b] font-medium mb-6"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(0.88rem, 1.5vw, 1.05rem)' }}
        >
          MS Computer Science @ Cal State East Bay &nbsp;·&nbsp; Graduated May 2026
        </p>

        {/* Statement */}
        <p
          ref={ref(4)}
          className="fade-up delay-3 text-[#cbd5e1] leading-relaxed mb-10 max-w-2xl"
          style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)', lineHeight: 1.8 }}
        >
          I'm a software engineer who builds at the intersection of{' '}
          <span className="text-[#60a5fa] font-semibold">foundational systems engineering</span>{' '}
          and <span className="text-[#60a5fa] font-semibold">modern AI</span>. I architect
          cloud-scale infrastructure, design distributed data pipelines, and ship production ML models.
          Experienced across the stack, from{' '}
          <span className="text-[#a78bfa] font-semibold">AWS backend architecture</span> to building autonomous robotic systems using tools like MCP and PyTorch.
        </p>

        {/* CTAs */}
        <div ref={ref(5)} className="fade-up delay-4 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="btn-shimmer inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm
                       bg-[#3b82f6] text-[#050508] border-2 border-[#3b82f6]
                       hover:bg-transparent hover:text-[#3b82f6] hover:-translate-y-0.5
                       hover:shadow-[0_8px_32px_rgba(59,130,246,0.45)]
                       transition-all duration-250"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
              <path d="M9 17l6-5-6-5"/>
            </svg>
            View My Work
          </a>
          <a
            href="#contact"
            className="btn-shimmer inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm
                       bg-transparent text-[#e2e8f0] border-2 border-[#16163a]
                       hover:border-[#3b82f6] hover:text-[#3b82f6] hover:-translate-y-0.5
                       transition-all duration-250"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
            </svg>
            Let's Connect
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-[5%] flex items-center gap-3 text-[#2d3748] text-[0.7rem] tracking-widest uppercase">
        <span className="scroll-line h-px bg-[#2d3748]" style={{ width: 36 }} />
        Scroll
      </div>
    </section>
  )
}
