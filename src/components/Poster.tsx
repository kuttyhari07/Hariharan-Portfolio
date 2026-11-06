import type { ReactNode } from 'react';
import type { Palette, Project } from '../data/portfolio';

/**
 * Generated "key art" for thumbnails — layered gradients, light falloff and a motif.
 * No stock imagery: every card is art-directed from its palette.
 */
export function PosterBackdrop({ palette, children, className = '' }: { palette: Palette; children?: ReactNode; className?: string }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(120% 90% at 85% 10%, ${palette.via} 0%, transparent 60%),
          radial-gradient(90% 80% at 0% 100%, ${palette.from} 0%, transparent 70%),
          linear-gradient(160deg, ${palette.from} 0%, ${palette.to} 100%)`,
      }}
    >
      <div
        aria-hidden
        className="absolute -right-1/4 -top-1/3 h-[140%] w-[70%] rotate-[18deg] opacity-40 blur-2xl"
        style={{ background: `linear-gradient(90deg, transparent, ${palette.accent}55, transparent)` }}
      />
      <div aria-hidden className="absolute inset-0 opacity-[0.18] [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_4px)]" />
      {children}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
    </div>
  );
}

/** Motif illustrations for each Original, built from the project's own architecture. */
export function ProjectArt({ project, className = '' }: { project: Project; className?: string }) {
  const a = project.palette.accent;
  return (
    <PosterBackdrop palette={project.palette} className={className}>
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <radialGradient id={`g-${project.id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={a} stopOpacity="0.55" />
            <stop offset="100%" stopColor={a} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="290" cy="120" r="130" fill={`url(#g-${project.id})`} />

        {/* Shield / Exam motif for EvalTech */}
        {project.motif === 'shield' && (
          <g transform="translate(230 40)" fill="none" stroke={a} strokeOpacity="0.85">
            <path d="M58 0 L116 22 V78 C116 120 90 146 58 160 C26 146 0 120 0 78 V22 Z" strokeWidth="2" />
            <path d="M58 16 L102 33 V78 C102 111 82 132 58 144 C34 132 14 111 14 78 V33 Z" strokeWidth="1" strokeOpacity="0.4" />
            {[0, 1, 2, 3].map((i) => (
              <line key={i} x1="30" x2={i % 2 ? 72 : 86} y1={56 + i * 16} y2={56 + i * 16} strokeWidth="3" strokeLinecap="round" strokeOpacity={0.4 + i * 0.1} />
            ))}
            <path d="M40 126 l12 12 l26 -28" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        )}

        {/* Flow / Agency network motif for GMHK Tech Studio & ParkEase */}
        {project.motif === 'flow' && (
          <g fill="none" stroke={a}>
            <rect x="200" y="56" width="150" height="94" rx="12" strokeWidth="2" strokeOpacity="0.85" />
            <rect x="214" y="72" width="28" height="20" rx="4" strokeOpacity="0.7" />
            <line x1="214" x2="330" y1="124" y2="124" strokeWidth="3" strokeOpacity="0.4" strokeDasharray="18 8" />
            <g transform="translate(176 196)" fontFamily="Inter" fontSize="10" fill={a} stroke="none" letterSpacing="2">
              <circle cx="16" cy="16" r="16" fill="none" stroke={a} strokeWidth="2" />
              <path d="M34 16 h46" stroke={a} strokeWidth="2" />
              <circle cx="96" cy="16" r="16" fill="none" stroke={a} strokeWidth="2" strokeOpacity="0.8" />
              <path d="M112 8 l38 -22 M112 24 l38 22" stroke={a} strokeWidth="2" strokeOpacity="0.6" />
              <circle cx="166" cy="-18" r="10" fill={a} fillOpacity="0.8" />
              <circle cx="166" cy="50" r="10" fill="none" stroke={a} strokeWidth="2" strokeOpacity="0.5" />
            </g>
          </g>
        )}

        {/* E-Commerce Shopping Cart Motif for FashionStore */}
        {project.motif === 'cart' && (
          <g transform="translate(210 50)" fill="none" stroke={a}>
            {/* Shopping bag / cart */}
            <rect x="20" y="50" width="100" height="90" rx="12" strokeWidth="2.5" strokeOpacity="0.85" />
            <path d="M44 50 V34 C44 20 54 12 70 12 C86 12 96 20 96 34 V50" strokeWidth="2.5" strokeLinecap="round" />
            {/* Tag & price check */}
            <circle cx="70" cy="85" r="14" strokeWidth="2" strokeOpacity="0.6" />
            <path d="M64 85 h12 M70 79 v12" strokeWidth="2" strokeLinecap="round" />
            {/* UPI wave pulses */}
            <path d="M10 160 Q 70 140 130 160" strokeWidth="2" strokeDasharray="8 6" strokeOpacity="0.7" />
            <path d="M25 175 Q 70 160 115 175" strokeWidth="1.5" strokeDasharray="6 4" strokeOpacity="0.4" />
          </g>
        )}

        {/* College Events Portal Motif */}
        {project.motif === 'portal' && (
          <g transform="translate(215 50)" fill="none" stroke={a}>
            {/* Calendar / Ticket */}
            <rect x="20" y="24" width="110" height="110" rx="14" strokeWidth="2.5" strokeOpacity="0.85" />
            <line x1="20" x2="130" y1="56" y2="56" strokeWidth="2" strokeOpacity="0.7" />
            <line x1="50" x2="50" y1="12" y2="32" strokeWidth="3" strokeLinecap="round" />
            <line x1="100" x2="100" y1="12" y2="32" strokeWidth="3" strokeLinecap="round" />
            {/* Date dots */}
            <circle cx="45" cy="80" r="4" fill={a} />
            <circle cx="75" cy="80" r="4" fill={a} />
            <circle cx="105" cy="80" r="4" fill={a} />
            <circle cx="45" cy="108" r="4" fill={a} />
            <circle cx="75" cy="108" r="4" fill={a} />
            <circle cx="105" cy="108" r="4" fill={a} opacity="0.3" />
          </g>
        )}

        {/* Collaborative Knowledge Hub Motif */}
        {project.motif === 'tenants' && (
          <g fill="none" stroke={a}>
            {[0, 1, 2].map((r) =>
              [0, 1, 2, 3].map((c) => (
                <rect
                  key={`${r}-${c}`}
                  x={196 + c * 44}
                  y={50 + r * 44}
                  width="34"
                  height="34"
                  rx="7"
                  strokeWidth="1.6"
                  strokeOpacity={0.25 + ((r + c) % 3) * 0.25}
                  fill={(r + c) % 4 === 0 ? a : 'none'}
                  fillOpacity="0.25"
                />
              )),
            )}
            <path d="M188 200 h190" strokeWidth="2" strokeOpacity="0.7" />
            <path d="M188 214 h190" strokeWidth="1" strokeOpacity="0.35" />
            <path d="M188 228 h190" strokeWidth="1" strokeOpacity="0.2" />
          </g>
        )}
      </svg>
    </PosterBackdrop>
  );
}

/** Fictional platform mark used in the nav and on cards — modern 'H' monogram for Hariharan */
export function SeriesMark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <svg viewBox="0 0 24 32" className="h-[1.15em] w-auto drop-shadow-[0_0_8px_rgba(0,210,255,0.6)]" aria-hidden>
        <path
          d="M5 6v20M19 6v20M5 16h14"
          fill="none"
          stroke="#00d2ff"
          strokeWidth="3.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-sans text-[0.62em] font-bold tracking-[0.36em] text-mist">ORIGINALS</span>
    </span>
  );
}
