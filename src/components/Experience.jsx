import { useFadeIn } from '../hooks/useFadeIn'

const jobs = [
  {
    company: 'California State University, East Bay',
    role: 'Graduate Research Assistant — Applied ML & Robotics',
    date: 'Jan 2025 – Present',
    location: 'Hayward, CA',
    isAws: false,
    bullets: [
      <>Accelerated robotic perception by <b>38%</b> through CUDA optimization on NVIDIA Jetson platforms, enabling real-time inference for autonomous robotic navigation.</>,
      <>Developed telemetry visualization and evaluation pipelines for LLM-enabled robotic systems using ROS2 and PyTorch, improving experiment reproducibility and streamlining debugging workflows.</>,
    ],
  },
  {
    company: 'Amazon Web Services (AWS) — Aurora',
    role: 'Software Development Engineer Intern',
    date: 'May 2025 – Aug 2025',
    location: 'Redmond, WA',
    isAws: true,
    bullets: [
      <>Designed and deployed a distributed telemetry ETL platform processing <b>4–6 TB/hour</b> of Amazon Aurora production logs using AWS Glue, Lambda, Athena, and S3, reducing manual investigation time by 90%.</>,
      <>Engineered a schema-agnostic PySpark framework parsing 40–50 dynamic telemetry metrics into optimized Parquet and Amazon Ion datasets, reducing Athena storage costs by <b>75%</b> through partition projection and Zstandard compression.</>,
      <>Integrated <b>Model Context Protocol (MCP)</b> tooling to enable natural-language querying of production telemetry datasets, simplifying Athena SQL generation and improving engineering productivity.</>,
    ],
  },
  {
    company: 'Saama',
    role: 'Software Engineer',
    date: 'Jul 2023 – Jul 2024',
    location: 'Pune, India',
    isAws: false,
    bullets: [
      <>Engineered cloud-native data pipelines using <b>Snowflake, StreamSets, and SQL</b> for enterprise insurance datasets, supporting scalable analytics and financial reporting workflows.</>,
      <>Built reusable data transformation and validation components, reducing pipeline execution time by <b>35%</b> while improving downstream reporting reliability across multiple business teams.</>,
    ],
  },
  {
    company: 'Defense Research & Development Organization (DRDO)',
    role: 'Software Engineer Intern',
    date: 'May 2023 – Jul 2023',
    location: 'Hyderabad, India',
    isAws: false,
    bullets: [
      <>Improved backend throughput by <b>20%</b> under high-concurrency workloads using asynchronous I/O and connection pooling in Node.js and C++.</>,
      <>Implemented centralized ELK-stack logging and automated testing pipelines, improving failure detection and reducing production incidents.</>,
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
