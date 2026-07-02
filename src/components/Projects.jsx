import { useFadeIn } from '../hooks/useFadeIn'

const projects = [
  {
    icon: '🧠',
    name: 'Atlas AI — RAG Knowledge Platform',
    accentColor: '#3b82f6',
    glowColor: 'rgba(59,130,246,0.18)',
    borderHover: 'rgba(59,130,246,0.55)',
    description: (
      <>
        Built a full-stack RAG platform enabling natural-language search across document collections with citation-aware responses. Deployed on AWS with Docker, improving retrieval accuracy by <b className="text-[#60a5fa]">22%</b> over a dense-only baseline through hybrid dense-sparse search.
      </>
    ),
    tags: ['Python', 'FastAPI', 'React', 'FAISS', 'Docker', 'AWS'],
    tagColor: '#3b82f6',
    tagBg: 'rgba(59,130,246,0.08)',
    tagBorder: 'rgba(59,130,246,0.22)',
  },
  {
    icon: '🚁',
    name: 'SkyPilot AI — Autonomous Drone Mission Platform',
    accentColor: '#8b5cf6',
    glowColor: 'rgba(139,92,246,0.18)',
    borderHover: 'rgba(139,92,246,0.55)',
    description: (
      <>
        Developed an autonomous drone mission platform integrating Amazon Bedrock, ROS2, AWS IoT Core, and YOLOv8 for natural-language mission planning, real-time object detection, and cloud telemetry. Achieved <b className="text-[#a78bfa]">93% object detection accuracy</b> with sub-250ms end-to-end telemetry latency in simulation.
      </>
    ),
    tags: ['Python', 'ROS2', 'FastAPI', 'AWS IoT Core', 'Amazon Bedrock', 'YOLOv8'],
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
