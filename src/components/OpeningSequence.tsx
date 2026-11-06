import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { profile } from '../data/portfolio';
import { useReducedMotionPref } from '../hooks/useMedia';
import { EASE, Magnetic } from './fx';

/**
 * The signature cinematic opening sequence:
 * black → studio card → HARIHARAN G → THE DEVELOPER SERIES → portrait reveal → intro & role → ▶ PLAY
 */
const TIMELINE = [
  { at: 300, beat: 1 }, // studio card
  { at: 1800, beat: 2 }, // name
  { at: 2600, beat: 3 }, // THE SERIES
  { at: 3300, beat: 4 }, // portrait reveal
  { at: 4200, beat: 5 }, // developer introduction & role
  { at: 5000, beat: 6 }, // play button
];

export default function OpeningSequence({ onDone }: { onDone: () => void }) {
  const reduced = useReducedMotionPref();
  const [beat, setBeat] = useState(reduced ? 6 : 0);

  useEffect(() => {
    if (reduced) return;
    const timers = TIMELINE.map(({ at, beat }) => window.setTimeout(() => setBeat(beat), at));
    return () => timers.forEach(clearTimeout);
  }, [reduced]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter') onDone();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[120] overflow-hidden bg-[#03060d]"
      exit={{ opacity: 0, scale: 1.04, filter: 'blur(12px)' }}
      transition={{ duration: 0.9, ease: EASE }}
      role="dialog"
      aria-label="Opening titles"
    >
      {/* letterbox bars */}
      <motion.div className="absolute inset-x-0 top-0 z-30 h-[7vh] bg-black" initial={{ y: 0 }} animate={{ y: beat >= 6 ? '-100%' : 0 }} transition={{ duration: 1.2, ease: EASE }} />
      <motion.div className="absolute inset-x-0 bottom-0 z-30 h-[7vh] bg-black" initial={{ y: 0 }} animate={{ y: beat >= 6 ? '100%' : 0 }} transition={{ duration: 1.2, ease: EASE }} />

      {/* projector flicker light (electric cyan & deep navy) */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={{ background: 'radial-gradient(60% 50% at 50% 52%, rgba(0,210,255,0.22), rgba(0,102,255,0.08), transparent 70%)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: beat >= 2 ? [0, 0.9, 0.45, 1] : 0 }}
        transition={{ duration: 1.4 }}
      />

      {/* studio card */}
      <AnimatePresence>
        {beat === 1 && (
          <motion.div
            key="studio"
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, filter: 'blur(6px)' }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              className="font-sans text-xs font-semibold uppercase tracking-[0.6em] text-[#00d2ff] sm:text-sm"
              initial={{ letterSpacing: '0.2em', opacity: 0 }}
              animate={{ letterSpacing: '0.6em', opacity: 1 }}
              transition={{ duration: 1.6, ease: EASE }}
            >
              {profile.originalLabel}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* portrait */}
      <motion.div
        className="absolute inset-x-0 bottom-0 z-0 mx-auto flex h-[70vh] max-w-[850px] items-end justify-center"
        initial={{ opacity: 0, scale: 1.12, filter: 'blur(18px) brightness(0.3)' }}
        animate={beat >= 4 ? { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1)' } : {}}
        transition={{ duration: 1.6, ease: EASE }}
      >
        <img
          src={profile.portrait.src}
          srcSet={profile.portrait.srcSet}
          sizes="(max-width: 768px) 100vw, 850px"
          alt={profile.portrait.alt}
          className="h-full w-auto max-w-none object-contain object-bottom [mask-image:linear-gradient(to_bottom,black_55%,transparent_98%)]"
        />
      </motion.div>
      <div aria-hidden className="absolute inset-0 z-[1] bg-[radial-gradient(70%_60%_at_50%_40%,transparent_30%,rgba(3,6,13,0.85)_100%)]" />

      {/* title */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center">
        <motion.h1
          className="font-display leading-[0.82] text-bone drop-shadow-[0_8px_40px_rgba(0,0,0,0.9)]"
          style={{ fontSize: 'clamp(2.5rem, 15vw, 13rem)' }}
          initial={{ opacity: 0, scale: 1.3, filter: 'blur(20px)', letterSpacing: '0.5em' }}
          animate={beat >= 2 ? { opacity: 1, scale: 1, filter: 'blur(0px)', letterSpacing: '0.04em', y: beat >= 4 ? '-28vh' : 0 } : {}}
          transition={{ duration: 1.3, ease: EASE }}
        >
          {profile.displayName.toUpperCase()}
        </motion.h1>
        <motion.p
          className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.35em] sm:tracking-[0.7em] text-[#00d2ff] [text-shadow:0_0_20px_rgba(0,210,255,0.6)] sm:text-base"
          initial={{ opacity: 0, letterSpacing: '1.4em' }}
          animate={beat >= 3 ? { opacity: 1, letterSpacing: '0.7em', y: beat >= 4 ? '-28vh' : 0 } : {}}
          transition={{ duration: 1.1, ease: EASE }}
        >
          {profile.seriesTag}
        </motion.p>
      </div>

      {/* role + developer intro + play */}
      <div className="absolute inset-x-0 bottom-[8vh] z-20 flex flex-col items-center gap-4 px-4 text-center">
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, y: 14 }}
          animate={beat >= 5 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <p className="font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-[#00d2ff] sm:text-xs sm:tracking-[0.4em]">
            {profile.tagline.join('  •  ')}
          </p>
          <p className="mt-1 font-serif text-sm italic text-bone/90 sm:text-base">
            &ldquo;Building Digital Experiences, One Project at a Time.&rdquo;
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={beat >= 6 ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.7, ease: EASE }}>
          <Magnetic>
            <button
              type="button"
              data-cursor="play"
              onClick={onDone}
              tabIndex={beat >= 6 ? 0 : -1}
              className="group flex items-center gap-3 rounded-full bg-bone px-9 py-4 font-sans text-base font-bold tracking-wide text-ink shadow-[0_0_60px_rgba(0,210,255,0.45)] transition hover:bg-white hover:shadow-[0_0_80px_rgba(0,210,255,0.7)]"
            >
              <span className="text-lg transition-transform group-hover:scale-125 text-[#00d2ff]">▶</span> ENTER EXPERIENCE
            </button>
          </Magnetic>
        </motion.div>
      </div>

      <button
        type="button"
        onClick={onDone}
        className="absolute right-4 top-[calc(7vh+12px)] z-40 rounded-full border border-white/20 px-4 py-2 font-sans text-[11px] font-semibold tracking-[0.2em] text-mist transition hover:border-[#00d2ff] hover:text-[#00d2ff]"
      >
        SKIP INTRO
      </button>
    </motion.div>
  );
}
