import { useFadeIn } from '../hooks/useFadeIn'

export default function Resume() {
  const ref = useFadeIn()

  return (
    <section id="resume" className="py-28 px-[5%] bg-[#080810]" ref={ref}>
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <div className="fade-up mb-8">
          <p
            className="text-xs font-semibold tracking-[0.15em] uppercase text-[#3b82f6] mb-3"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Resume
          </p>
          <h2
            className="text-white font-bold"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              letterSpacing: '-0.03em',
            }}
          >
            View My Resume
          </h2>
          <span className="section-heading-line mx-auto" />
        </div>

        <div className="fade-up delay-1 text-[#94a3b8] leading-[1.85] text-[1.02rem] mb-10 max-w-2xl">
          <p>
            Interested in learning more about my background, experience, and the impact I've made? Feel free to view or download my comprehensive resume below.
          </p>
        </div>

        <div className="fade-up delay-2 flex flex-col sm:flex-row gap-5">
          <a
            href="/YeshnvResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-md bg-[#3b82f6] text-[#050508] font-semibold text-sm transition-all hover:bg-[#60a5fa] hover:scale-105"
          >
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            View Resume
          </a>
          <a
            href="/YeshnvResume.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-md border border-[#3b82f6] text-[#3b82f6] font-semibold text-sm transition-all hover:bg-[#3b82f6]/10 hover:scale-105"
          >
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}
