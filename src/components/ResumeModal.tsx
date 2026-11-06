import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/portfolio';
import { useScrollLock } from '../hooks/smoothScroll';
import { useMedia } from '../hooks/useMedia';
import { EASE } from './fx';
import { ResumeSheet } from './ResumeViewer';

/** Full-screen resume viewer. On mobile/touch devices or whenever preferred, renders the interactive designed sheet. */
export default function ResumeModal({ onClose }: { onClose: () => void }) {
  useScrollLock(true);
  const small = useMedia('(max-width: 767px)');

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[140] flex flex-col bg-black/90 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label="Resume"
    >
      <div className="gutter flex h-16 shrink-0 items-center justify-between gap-3 pt-[env(safe-area-inset-top)]">
        <p className="truncate font-display text-2xl tracking-wide text-bone">The Full Story · Resume</p>
        <div className="flex items-center gap-2">
          <a
            href={profile.resumePdf}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex rounded-md border border-[#00d2ff]/30 bg-white/5 px-3.5 py-2 text-xs font-semibold text-bone transition hover:bg-white/15 hover:text-[#00d2ff]"
          >
            ↗ Open Original PDF
          </a>
          <a
            href={profile.resumePdf}
            download="Hariharan_G_Resume.pdf"
            className="rounded-md bg-[#00d2ff] px-4 py-2 text-xs font-bold text-ink shadow-[0_0_20px_rgba(0,210,255,0.4)] transition hover:bg-white"
          >
            ⤓ Download PDF
          </a>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close resume"
            data-cursor="close"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-bone hover:bg-white/20"
          >
            ✕
          </button>
        </div>
      </div>
      <motion.div
        className="gutter flex-1 pb-6"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        {small ? (
          <div data-lenis-prevent className="h-full overflow-y-auto">
            <ResumeSheet />
            <a
              href={profile.resumePdf}
              target="_blank"
              rel="noreferrer"
              className="glass mt-4 flex min-h-12 items-center justify-center rounded-md text-sm font-semibold text-bone border border-[#00d2ff]/30"
            >
              Open original PDF file ↗
            </a>
          </div>
        ) : (
          <div data-lenis-prevent className="h-full overflow-y-auto">
            <ResumeSheet />
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
