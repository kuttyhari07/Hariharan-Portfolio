import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { profile, viewerProfiles, type ProfileId } from '../data/portfolio';
import { EASE } from './fx';

export function ProfileAvatar({ id, size = 'lg' }: { id: ProfileId; size?: 'sm' | 'lg' }) {
  const p = viewerProfiles.find((v) => v.id === id)!;
  const box = size === 'lg' ? 'h-24 w-24 sm:h-32 sm:w-32 md:h-36 md:w-36 rounded-2xl' : 'h-8 w-8 rounded-lg';

  if (id === 'explorer') {
    return (
      <span
        className={`relative block overflow-hidden border border-white/10 ${box}`}
        style={{ background: 'radial-gradient(circle at 50% 30%, #0052cc, #04122b)' }}
      >
        <img
          src="/assets/portrait-420.webp"
          alt="Hariharan G"
          className="absolute inset-x-0 bottom-0 mx-auto h-[115%] w-auto max-w-none object-cover object-top"
        />
      </span>
    );
  }

  const glyph = { recruiter: '💼', developer: '</>' }[id as 'recruiter' | 'developer'];

  return (
    <span
      className={`relative flex items-center justify-center overflow-hidden border border-white/10 font-mono text-bone ${box}`}
      style={{ background: `linear-gradient(145deg, ${p.color}33, #050811 120%)`, boxShadow: `inset 0 0 20px ${p.color}22` }}
    >
      <span className={size === 'lg' ? 'text-3xl sm:text-4xl' : 'text-xs'}>{glyph}</span>
    </span>
  );
}

export default function ProfileSelector({ onPick }: { onPick: (id: ProfileId) => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onPick('explorer');
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onPick]);

  const badges: Record<ProfileId, string> = {
    recruiter: 'RECRUITER',
    developer: 'DEVELOPER',
    explorer: 'EXPLORER',
  };

  return (
    <motion.div
      className="fixed inset-0 z-[110] flex flex-col items-center justify-center overflow-y-auto bg-[#050811] px-4 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.08, filter: 'blur(10px)' }}
      transition={{ duration: 0.7, ease: EASE }}
      role="dialog"
      aria-label="Who's watching?"
    >
      {/* Background ambient lighting */}
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(0,210,255,0.18),transparent_70%)]" />

      <motion.div
        className="relative mb-10 text-center"
        initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <p className="mb-2 font-sans text-xs font-bold uppercase tracking-[0.4em] text-[#00d2ff]">
          Personalized Portfolio Experience
        </p>
        <h2 className="font-sans text-3xl font-medium tracking-tight text-bone sm:text-5xl">
          Who&apos;s watching?
        </h2>
      </motion.div>

      <motion.ul
        className="relative flex flex-wrap justify-center gap-6 sm:gap-10"
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.08, delayChildren: 0.2 }}
      >
        {viewerProfiles.map((p) => (
          <motion.li key={p.id} variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}>
            <button
              type="button"
              onClick={() => onPick(p.id)}
              data-cursor="play"
              className="group flex flex-col items-center gap-3 text-center"
            >
              <span className="relative rounded-2xl ring-2 ring-transparent transition duration-300 group-hover:scale-105 group-hover:ring-[#00d2ff] group-focus-visible:ring-[#00d2ff]">
                <ProfileAvatar id={p.id} />
                <span
                  className="absolute -right-2 -top-2 rounded-full px-2 py-0.5 text-[9px] font-bold tracking-[0.16em] text-white shadow-lg"
                  style={{ background: p.color }}
                >
                  {badges[p.id]}
                </span>
              </span>
              <span className="font-sans text-base font-semibold text-mist transition group-hover:text-bone sm:text-lg">
                {p.name}
              </span>
              <span className="max-w-[10rem] text-[11px] leading-snug text-smoke">
                {p.blurb}
              </span>
            </button>
          </motion.li>
        ))}
      </motion.ul>

      <p className="relative mt-14 max-w-md text-center text-xs leading-relaxed text-smoke">
        Every profile explores the verified work of {profile.displayName} — tailored to what you want to see first.
      </p>
    </motion.div>
  );
}
