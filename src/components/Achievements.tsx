import { useRef } from 'react';
import { motion } from 'framer-motion';
import { achievements, certifications } from '../data/portfolio';
import { EASE, SectionHeading, Tilt } from './fx';
import { RailButtons } from './Rail';

function Laurel({ side }: { side: 'l' | 'r' }) {
  return (
    <svg viewBox="0 0 30 64" className={`h-14 w-auto text-[#00d2ff] ${side === 'r' ? '-scale-x-100' : ''}`} aria-hidden>
      <path d="M26 62C10 52 4 36 8 4" fill="none" stroke="currentColor" strokeWidth="1.4" />
      {[10, 18, 26, 34, 42, 50].map((y, i) => (
        <ellipse key={y} cx={i < 2 ? 9 : 8 + i * 1.6} cy={y} rx="5" ry="2.2" fill="currentColor" opacity="0.85" transform={`rotate(-40 ${8 + i * 1.6} ${y})`} />
      ))}
    </svg>
  );
}

export default function Achievements() {
  const rail = useRef<HTMLDivElement>(null);
  const issuers = Array.from(new Set(certifications.map((c) => c.issuer)));

  return (
    <>
      <SectionHeading kicker="Awards & Honors" title="Achievements & Certifications" />

      <div className="gutter grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto [perspective:1400px]">
        {achievements.map((a, i) => (
          <motion.div
            key={a.id}
            initial={{ opacity: 0, y: 50, rotateX: 18 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ duration: 0.9, delay: i * 0.1, ease: EASE }}
          >
            <Tilt max={8} className="group h-full rounded-2xl">
              <article className="relative flex h-full min-h-[360px] flex-col items-center overflow-hidden rounded-2xl bg-[radial-gradient(120%_80%_at_50%_0%,#091b33,#050f1f_60%,#03070f)] px-6 pb-6 pt-8 text-center ring-1 ring-[#00d2ff]/20 transition duration-500 group-hover:ring-[#00d2ff]/60 group-hover:shadow-[0_20px_50px_rgba(0,210,255,0.2)]">
                <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00d2ff]/70 to-transparent" />
                <div aria-hidden className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[#00d2ff]/10 blur-3xl transition duration-700 group-hover:bg-[#00d2ff]/25" />

                <div className="relative flex items-center gap-1">
                  <Laurel side="l" />
                  <div className="px-2">
                    <p className="text-[10px] font-bold uppercase leading-tight tracking-[0.24em] text-[#00d2ff]">{a.laurel}</p>
                  </div>
                  <Laurel side="r" />
                </div>

                <h3 className="relative mt-6 font-display text-[2.2rem] leading-[0.92] tracking-wide text-bone">{a.title}</h3>
                <p className="relative mt-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#38bdf8]">{a.org}</p>
                <p className="relative mt-4 text-[13px] leading-relaxed text-bone/75">{a.detail}</p>

                {/* Certificate placeholder badge */}
                <div className="relative mt-auto pt-6 flex flex-col items-center gap-1">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#00d2ff]/30 bg-[#00d2ff]/10 px-3 py-1 text-[11px] font-semibold text-[#00d2ff]">
                    <span>✓</span> Verified Credential
                  </span>
                  <span className="text-[10px] text-smoke">Certificate on record</span>
                </div>
              </article>
            </Tilt>
          </motion.div>
        ))}
      </div>

      {/* certifications rail */}
      <div className="mt-16">
        <div className="gutter mb-2 flex flex-wrap items-end justify-between gap-2">
          <h3 className="font-sans text-lg font-semibold text-bone sm:text-2xl">
            Certified Credentials <span className="text-[#00d2ff]">· Verified</span>
          </h3>
          <p className="text-xs font-mono text-smoke">{issuers.join(' · ')}</p>
        </div>
        <div className="group/rail relative">
          <div ref={rail} className="rail gutter flex snap-x gap-4 overflow-x-auto py-5">
            {certifications.map((c, i) => (
              <motion.div
                key={c.name}
                className="group relative flex w-[280px] shrink-0 snap-start flex-col justify-between rounded-xl bg-ink-2 p-5 ring-1 ring-white/10 transition hover:-translate-y-1 hover:ring-[#00d2ff]/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#00d2ff]">{c.issuer}</span>
                  <span className="text-xs font-semibold text-[#38bdf8]">{c.scoreOrDetail}</span>
                </div>
                <p className="mt-6 text-sm font-semibold leading-snug text-bone">{c.name}</p>
                <div className="mt-4 flex items-center gap-2 pt-3 border-t border-white/5 text-[11px] text-mist">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00d2ff]" />
                  <span>Credential ID Available</span>
                </div>
              </motion.div>
            ))}
          </div>
          <RailButtons rail={rail} />
        </div>
      </div>
    </>
  );
}
