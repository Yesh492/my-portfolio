import { useEffect, useRef } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'

const categories = [
  {
    icon: '💻',
    name: 'Languages',
    items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C', 'C++', 'SQL', 'Bash'],
    isAiTools: false,
  },
  {
    icon: '⚡',
    name: 'Frontend & Backend',
    items: ['React', 'Node.js', 'FastAPI', 'gRPC', 'REST APIs', 'GraphQL'],
    isAiTools: false,
  },
  {
    icon: '☁️',
    name: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
    isAiTools: false,
  },
  {
    icon: '🤖',
    name: 'AI & ML',
    items: ['PyTorch', 'TensorFlow', 'YOLOv8', 'Transformers', 'RAG', 'CUDA'],
    isAiTools: false,
  },
  {
    icon: '✨',
    name: 'AI Dev Tools',
    items: ['Claude Code', 'Cursor', 'GitHub Copilot', 'MCP'],
    isAiTools: true,
  },
]

export default function Skills() {
  const sectionRef = useFadeIn()
  const badgeObserver = useRef(null)

  // Staggered badge fade-in via IntersectionObserver
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const badges = el.querySelectorAll('.badge-fade')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -15px 0px' }
    )
    badges.forEach(b => observer.observe(b))
    badgeObserver.current = observer
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-28 px-[5%] bg-[#050508]" ref={sectionRef}>
      <div className="max-w-5xl mx-auto">
        <div className="fade-up mb-12">
          <p
            className="text-xs font-semibold tracking-[0.15em] uppercase text-[#3b82f6] mb-3"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Technical Skills
          </p>
          <h2
            className="text-white font-bold"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              letterSpacing: '-0.03em',
            }}
          >
            My toolkit
          </h2>
          <span className="section-heading-line" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => {
            const isAi = cat.isAiTools

            return (
              <div
                key={i}
                className={`fade-up delay-${Math.min(i + 1, 4)} glass-card bg-[#0c0c18]/80 rounded-2xl p-6
                            hover:-translate-y-1 transition-all duration-300`}
                style={{
                  border: `1px solid ${isAi ? 'rgba(139,92,246,0.3)' : '#16163a'}`,
                  background: isAi
                    ? 'linear-gradient(135deg, rgba(139,92,246,0.06), rgba(59,130,246,0.04))'
                    : 'rgba(12,12,24,0.8)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = isAi ? 'rgba(139,92,246,0.55)' : 'rgba(59,130,246,0.4)'
                  e.currentTarget.style.boxShadow   = isAi
                    ? '0 12px 40px rgba(139,92,246,0.14)'
                    : '0 12px 40px rgba(59,130,246,0.1)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = isAi ? 'rgba(139,92,246,0.3)' : '#16163a'
                  e.currentTarget.style.boxShadow   = 'none'
                }}
              >
                {/* Category header with glow line */}
                <div className="flex items-center gap-2.5 mb-1">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-base"
                    style={{
                      background: isAi ? 'rgba(139,92,246,0.15)' : 'rgba(59,130,246,0.1)',
                      border: `1px solid ${isAi ? 'rgba(139,92,246,0.3)' : 'rgba(59,130,246,0.2)'}`,
                    }}
                  >
                    {cat.icon}
                  </div>
                  <span
                    className="text-sm font-bold text-white"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {cat.name}
                  </span>
                </div>
                {/* Glowing category header line */}
                <div
                  className="mb-4"
                  style={{
                    height: '1px',
                    background: isAi
                      ? 'linear-gradient(90deg, rgba(139,92,246,0.5), transparent)'
                      : 'linear-gradient(90deg, rgba(59,130,246,0.4), transparent)',
                    borderRadius: '1px',
                  }}
                />

                {/* Staggered badges */}
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, idx) => (
                    <span
                      key={item}
                      className="badge-fade text-xs font-medium px-3 py-1.5 rounded-lg transition-all duration-200 cursor-default"
                      style={{
                        transitionDelay: `${idx * 55}ms`,
                        color: '#94a3b8',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid #16163a',
                        fontFamily: "'Space Grotesk', sans-serif",
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.color      = isAi ? '#a78bfa' : '#60a5fa'
                        e.currentTarget.style.background = isAi ? 'rgba(139,92,246,0.12)' : 'rgba(59,130,246,0.1)'
                        e.currentTarget.style.borderColor = isAi ? 'rgba(139,92,246,0.4)' : 'rgba(59,130,246,0.35)'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.color      = '#94a3b8'
                        e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                        e.currentTarget.style.borderColor = '#16163a'
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
