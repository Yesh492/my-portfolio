import { useEffect, useRef, useState } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'
import profileImg from '../assets/profile.png'

/* Count-up stat card — animates numeric values when scrolled into view */
function StatCard({ stat }) {
  const [displayVal, setDisplayVal] = useState(stat.animate ? `0${stat.suffix}` : stat.number)
  const cardRef  = useRef(null)
  const startedRef = useRef(false)

  useEffect(() => {
    if (!stat.animate) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true
          observer.disconnect()
          const duration = 1400
          let startTime = null
          const step = ts => {
            if (!startTime) startTime = ts
            const progress = Math.min((ts - startTime) / duration, 1)
            const ease = 1 - Math.pow(1 - progress, 3) // ease-out cubic
            setDisplayVal(Math.floor(ease * stat.target) + stat.suffix)
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.4 }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [stat.animate, stat.target, stat.suffix])

  return (
    <div
      ref={cardRef}
      className="glass-card bg-[#0c0c18]/80 border border-[#16163a] rounded-xl p-6
                 hover:border-[#3b82f6]/50 hover:-translate-y-1
                 hover:shadow-[0_10px_36px_rgba(59,130,246,0.14)]
                 transition-all duration-300"
    >
      <div
        className="font-bold tracking-tight text-[#60a5fa]"
        style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '2rem', letterSpacing: '-0.03em' }}
      >
        {displayVal}
      </div>
      <div className="text-sm text-[#64748b] mt-1 leading-snug">{stat.label}</div>
    </div>
  )
}

const stats = [
  { number: '75%',  label: 'Athena query cost reduction @ AWS', animate: false },
  { number: '38%',  label: 'Inference latency cut via CUDA',    animate: true,  target: 38, suffix: '%' },
  { number: '6 TB', label: 'Telemetry processed per hour',      animate: false },
  { number: '22%',  label: 'RAG retrieval accuracy gain',        animate: true,  target: 22, suffix: '%' },
]

export default function About() {
  const ref = useFadeIn()

  return (
    <section id="about" className="py-28 px-[5%] bg-[#080810]" ref={ref}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

        {/* Left: photo + text */}
        <div className="fade-up flex flex-col gap-8">

          {/* Profile photo with rotating gradient ring */}
          <div className="relative" style={{ width: 128, height: 128 }}>
            {/* Outer glow */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                inset: -12,
                background: 'radial-gradient(circle, rgba(59,130,246,0.28) 0%, rgba(139,92,246,0.15) 50%, transparent 75%)',
                filter: 'blur(14px)',
              }}
            />
            {/* Spinning conic ring */}
            <div
              className="ring-spin absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #a78bfa, #60a5fa, #3b82f6)',
              }}
            />
            {/* Background fill to create ring gap */}
            <div
              className="absolute rounded-full"
              style={{ inset: '3px', background: '#080810' }}
            />
            {/* Photo */}
            <img
              src={profileImg}
              alt="Yeshvanth Kumar"
              className="absolute rounded-full object-cover"
              style={{ inset: '3px', width: 'calc(100% - 6px)', height: 'calc(100% - 6px)' }}
            />
          </div>

          {/* Text */}
          <div>
            <p
              className="text-xs font-semibold tracking-[0.15em] uppercase text-[#3b82f6] mb-3"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              About Me
            </p>
            <h2
              className="text-white font-bold leading-tight mb-2"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                letterSpacing: '-0.03em',
              }}
            >
              Building at the<br />edge of what's possible
            </h2>
            <span className="section-heading-line" />
            <div className="space-y-4 text-[#94a3b8] leading-[1.85] text-[1.02rem] mt-8">
              <p>
                My journey spans{' '}
                <span className="text-[#60a5fa] font-semibold">robotics labs</span>,{' '}
                <span className="text-[#60a5fa] font-semibold">AWS internships</span>, and full-stack
                product work across three countries. I thrive on the hardest parts of engineering —
                slashing inference latency, designing petabyte-scale pipelines, and making distributed
                systems actually reliable.
              </p>
              <p>
                What excites me most about building today is the convergence of{' '}
                <span className="text-[#a78bfa] font-semibold">rigorous systems work with AI-native workflows</span>.
                I don't just build with AI tools — I integrate them deeply into how I develop, deploy, and iterate.
              </p>
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-5 fade-up delay-2">
          {stats.map((s, i) => (
            <StatCard key={i} stat={s} />
          ))}
        </div>
      </div>
    </section>
  )
}
