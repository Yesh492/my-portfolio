import { useFadeIn } from '../hooks/useFadeIn'

const projects = [
  {
    icon: '🧠',
    name: 'Trust-Aware Enterprise RAG QA System',
    accentColor: '#3b82f6',
    glowColor: 'rgba(59,130,246,0.18)',
    borderHover: 'rgba(59,130,246,0.55)',
    description: (
      <>
        Full-stack enterprise Q&A system with a <b className="text-[#60a5fa]">trust-aware RAG pipeline</b> featuring
        citation verification and confidence scoring. Validated{' '}
        <b className="text-[#60a5fa]">10x throughput</b> (100+ concurrent users), deployed on AWS with horizontal pod
        autoscaling. Achieved <b className="text-[#60a5fa]">22% retrieval accuracy improvement</b> via Hybrid Search
        (Dense + Sparse).
      </>
    ),
    tags: ['Python', 'FastAPI', 'React', 'FAISS', 'Docker', 'AWS'],
    tagColor: '#3b82f6',
    tagBg: 'rgba(59,130,246,0.08)',
    tagBorder: 'rgba(59,130,246,0.22)',
  },
  {
    icon: '👁️',
    name: 'Mobile Stair Detection for Blind Navigation',
    accentColor: '#8b5cf6',
    glowColor: 'rgba(139,92,246,0.18)',
    borderHover: 'rgba(139,92,246,0.55)',
    description: (
      <>
        Achieved <b className="text-[#a78bfa]">sub-200ms inference latency</b> (down from 600ms) on constrained mobile
        hardware via YOLOv8 quantization and C++ optimization. Improved{' '}
        <b className="text-[#a78bfa]">low-light detection accuracy by 18%</b> through IMU + computer vision sensor
        fusion.
      </>
    ),
    tags: ['C++', 'Python', 'YOLOv8', 'Android NDK', 'CUDA'],
    tagColor: '#8b5cf6',
    tagBg: 'rgba(139,92,246,0.08)',
    tagBorder: 'rgba(139,92,246,0.22)',
  },
]

export default function Projects() {
  const ref = useFadeIn()

  return (
    <section id="projects" className="py-28 px-[5%] bg-[#080810]" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="fade-up mb-12">
          <p
            className="text-xs font-semibold tracking-[0.15em] uppercase text-[#3b82f6] mb-3"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Featured Projects
          </p>
          <h2
            className="text-white font-bold"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              letterSpacing: '-0.03em',
            }}
          >
            Things I've shipped
          </h2>
          <span className="section-heading-line" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`fade-up delay-${i + 1} glass-card flex flex-col gap-4 bg-[#0c0c18]/80 border border-[#16163a]
                          rounded-2xl p-8 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden`}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = p.borderHover
                e.currentTarget.style.boxShadow   = `0 24px 60px ${p.glowColor}`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#16163a'
                e.currentTarget.style.boxShadow   = 'none'
              }}
            >
              {/* Corner glow */}
              <div
                className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${p.glowColor} 0%, transparent 70%)`,
                }}
              />

              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                style={{
                  background: p.tagBg,
                  border: `1px solid ${p.tagBorder}`,
                }}
              >
                {p.icon}
              </div>

              <h3
                className="text-white font-bold text-lg leading-snug"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {p.name}
              </h3>

              <p className="text-[#94a3b8] text-sm leading-relaxed flex-1">{p.description}</p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {p.tags.map(t => (
                  <span
                    key={t}
                    className="text-xs font-semibold px-2.5 py-1 rounded-md"
                    style={{
                      color: p.tagColor,
                      background: p.tagBg,
                      border: `1px solid ${p.tagBorder}`,
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
