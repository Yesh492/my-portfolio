import { useFadeIn } from '../hooks/useFadeIn'

const jobs = [
  {
    company: 'Amazon Web Services (AWS)',
    role: 'Software Development Engineer Intern',
    date: 'Jun – Aug 2025',
    location: 'Seattle, WA',
    isAws: true,
    bullets: [
      <>Architected a <b>serverless telemetry pipeline</b> processing <b>4–6 TB/hour</b> using AWS Glue, S3, Lambda, and Athena</>,
      <>Reduced Athena query costs by <b>75%</b> via partition projection and Zstandard compression</>,
      <>Automated infrastructure with <b>AWS CDK</b> and integrated agentic tools (MCP/Q CLI) for natural language query generation</>,
    ],
  },
  {
    company: 'Cal State East Bay',
    role: 'Graduate Research Assistant, Applied ML & Robotics',
    date: 'Oct 2024 – Present',
    location: 'Hayward, CA',
    isAws: false,
    bullets: [
      <>Reduced end-to-end inference latency by <b>38%</b> using multithreaded CUDA on NVIDIA Jetson within ROS2</>,
      <>Built real-time telemetry dashboards enabling <b>2x faster</b> fault diagnosis in distributed robotics experiments</>,
    ],
  },
  {
    company: 'Intellect Design Arena',
    role: 'Software Engineer',
    date: 'Jan 2024 – Jul 2024', /* Placeholder date since none was provided */
    location: 'Chennai, India',
    isAws: false,
    bullets: [
      <>Applied Generative AI and LangChain to develop internal models, designing and implementing comprehensive evaluation metrics to rigorously assess performance and effectiveness</>,
      <>Bridged technical modelling with business requirements by fine-tuning models to deliver actionable insights, focusing on efficiency improvements in data interpretation and analysis</>,
    ],
  },
  {
    company: 'Cloud Counselage Pvt. Ltd',
    role: 'Software Developer',
    date: 'Jul 2023 – Jun 2024',
    location: 'Pune, India',
    isAws: false,
    bullets: [
      <>Built full-stack <b>React + Node.js</b> application with PostgreSQL supporting <b>200+ concurrent users</b></>,
      <>Reduced data processing time by <b>60%</b> with optimized ETL pipelines</>,
    ],
  },
  {
    company: 'DRDO',
    role: 'Software Engineer Intern',
    date: 'May – Jul 2023',
    location: 'Hyderabad, India',
    isAws: false,
    bullets: [
      <>Increased throughput by <b>20%</b> under 10k+ parallel requests using async I/O and connection pooling in Node.js and C++</>,
    ],
  },
]

const LocationIcon = () => (
  <svg width="11" height="11" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
  </svg>
)

export default function Experience() {
  const ref = useFadeIn()

  return (
    <section id="experience" className="py-28 px-[5%] bg-[#050508]" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="fade-up mb-12">
          <p
            className="text-xs font-semibold tracking-[0.15em] uppercase text-[#3b82f6] mb-3"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Work Experience
          </p>
          <h2
            className="text-white font-bold"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              letterSpacing: '-0.03em',
            }}
          >
            Where I've built
          </h2>
          <span className="section-heading-line" />
        </div>

        <div className="flex flex-col gap-5">
          {jobs.map((job, i) => {
            const accent     = job.isAws ? '#ff9900' : '#3b82f6'
            const glowShadow = job.isAws
              ? '0 16px 48px rgba(255,153,0,0.18)'
              : '0 16px 48px rgba(59,130,246,0.14)'
            const borderHover = job.isAws
              ? 'rgba(255,153,0,0.5)'
              : 'rgba(59,130,246,0.5)'
            const dateGlow   = job.isAws ? 'rgba(255,153,0,0.15)' : 'rgba(59,130,246,0.1)'
            const dateBorder = job.isAws ? 'rgba(255,153,0,0.3)'  : 'rgba(59,130,246,0.25)'

            return (
              <div
                key={i}
                className={`fade-up delay-${Math.min(i + 1, 4)} glass-card relative bg-[#0c0c18]/80 border border-[#16163a] rounded-2xl
                            px-8 py-7 overflow-hidden hover:translate-x-1.5
                            transition-all duration-300 group`}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = borderHover
                  e.currentTarget.style.boxShadow   = glowShadow
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#16163a'
                  e.currentTarget.style.boxShadow   = 'none'
                }}
              >
                {/* Left accent bar */}
                <div
                  className="absolute top-0 left-0 w-1 h-full rounded-l-2xl"
                  style={{ background: `linear-gradient(180deg, ${accent}, transparent)` }}
                />

                <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                  <div>
                    <div
                      className="font-bold text-lg"
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        color: job.isAws ? '#ff9900' : 'white',
                      }}
                    >
                      {job.company}
                    </div>
                    <div className="text-sm font-semibold text-[#64748b] mt-0.5">{job.role}</div>
                    <div className="flex items-center gap-1 text-xs text-[#334155] mt-1">
                      <LocationIcon />
                      {job.location}
                    </div>
                  </div>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap"
                    style={{ color: accent, background: dateGlow, border: `1px solid ${dateBorder}` }}
                  >
                    {job.date}
                  </span>
                </div>

                <ul className="mt-4 flex flex-col gap-2">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="text-sm text-[#94a3b8] leading-relaxed pl-4 relative">
                      <span className="absolute left-0 top-[0.2em] text-[0.65rem]" style={{ color: accent }}>▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
