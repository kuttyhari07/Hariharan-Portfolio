import { useState, useRef, type FormEvent } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { profile } from '../data/portfolio';
import { useSmoothScroll } from '../hooks/smoothScroll';
import { EASE, Magnetic, Particles } from './fx';
import { SeriesMark } from './Poster';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function FinalCTA({ onReplay }: { onReplay: () => void }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollTo } = useSmoothScroll();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 0.2'] });
  const spacing = useTransform(scrollYProgress, [0, 1], ['0.6em', '0.02em']);
  const blur = useTransform(scrollYProgress, [0, 1], ['blur(16px)', 'blur(0px)']);
  const opacity = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  // Contact form state
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const errs: Partial<FormState> = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      errs.name = 'Please provide your name (at least 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim() || !emailRegex.test(form.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!form.subject.trim() || form.subject.trim().length < 3) {
      errs.subject = 'Please enter a subject.';
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      errs.message = 'Please write a message with at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(form.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(
    `From: ${form.name} (${form.email})\n\nMessage:\n${form.message}`,
  )}`;

  const handleCopy = () => {
    const text = `Subject: ${form.subject}\nFrom: ${form.name} (${form.email})\n\n${form.message}`;
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const ctas = [
    { label: 'GitHub Profile', href: profile.links.github, cursor: 'link' },
    { label: 'LinkedIn', href: profile.links.linkedin, cursor: 'link' },
    { label: 'GMHK Studio', href: profile.links.studio, cursor: 'link' },
    { label: 'Email Directly', href: `mailto:${profile.email}`, cursor: 'link' },
  ];

  return (
    <section id="contact" ref={ref} className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_50%,rgba(0,210,255,0.14),transparent_70%)]" />
      <Particles count={36} color="0,210,255" />

      <motion.p
        className="relative mb-4 text-[11px] font-bold uppercase tracking-[0.5em] text-[#00d2ff]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        The Next Episode
      </motion.p>

      <motion.h2
        className="relative font-display leading-[0.85] text-bone"
        style={{ fontSize: 'clamp(3.2rem, 12vw, 10rem)', letterSpacing: spacing, filter: blur, opacity }}
      >
        TO BE CONTINUED…
      </motion.h2>

      <motion.div
        className="relative mt-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
      >
        <p className="font-sans text-2xl font-bold tracking-[0.2em] text-bone sm:text-3xl">{profile.displayName.toUpperCase()}</p>
        <p className="mt-1.5 font-mono text-xs font-semibold tracking-[0.3em] text-[#38bdf8] sm:text-sm">{profile.role.toUpperCase()}</p>
        <p className="mt-2 text-xs text-mist">{profile.college} (2024–2028)</p>
      </motion.div>

      {/* Modern Glassmorphic Contact Form */}
      <motion.div
        className="relative z-10 mt-12 w-full max-w-xl text-left"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
      >
        <div className="glass rounded-2xl p-6 sm:p-8 border border-[#00d2ff]/25 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          <div className="mb-6 border-b border-white/10 pb-4">
            <h3 className="font-display text-2xl tracking-wide text-bone">Send a Message</h3>
            <p className="text-xs text-mist mt-1">Get in touch for internships, full-stack collaborations, or engineering projects.</p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label htmlFor="name" className="block text-[11px] font-bold uppercase tracking-wider text-[#38bdf8] mb-1.5">
                  Your Name *
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => {
                    setForm({ ...form, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  placeholder="e.g. Alex Johnson"
                  className="w-full rounded-lg border border-white/15 bg-black/40 px-3.5 py-2.5 text-sm text-bone placeholder-smoke focus:border-[#00d2ff] focus:outline-none focus:ring-1 focus:ring-[#00d2ff]"
                />
                {errors.name && <p className="mt-1 text-xs text-rose-400">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-[11px] font-bold uppercase tracking-wider text-[#38bdf8] mb-1.5">
                  Your Email *
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: undefined });
                  }}
                  placeholder="e.g. alex@company.com"
                  className="w-full rounded-lg border border-white/15 bg-black/40 px-3.5 py-2.5 text-sm text-bone placeholder-smoke focus:border-[#00d2ff] focus:outline-none focus:ring-1 focus:ring-[#00d2ff]"
                />
                {errors.email && <p className="mt-1 text-xs text-rose-400">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="subject" className="block text-[11px] font-bold uppercase tracking-wider text-[#38bdf8] mb-1.5">
                  Subject *
                </label>
                <input
                  id="subject"
                  type="text"
                  value={form.subject}
                  onChange={(e) => {
                    setForm({ ...form, subject: e.target.value });
                    if (errors.subject) setErrors({ ...errors, subject: undefined });
                  }}
                  placeholder="e.g. Project Inquiry / Opportunity"
                  className="w-full rounded-lg border border-white/15 bg-black/40 px-3.5 py-2.5 text-sm text-bone placeholder-smoke focus:border-[#00d2ff] focus:outline-none focus:ring-1 focus:ring-[#00d2ff]"
                />
                {errors.subject && <p className="mt-1 text-xs text-rose-400">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-[11px] font-bold uppercase tracking-wider text-[#38bdf8] mb-1.5">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => {
                    setForm({ ...form, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: undefined });
                  }}
                  placeholder="Write your message here..."
                  className="w-full rounded-lg border border-white/15 bg-black/40 px-3.5 py-2.5 text-sm text-bone placeholder-smoke focus:border-[#00d2ff] focus:outline-none focus:ring-1 focus:ring-[#00d2ff]"
                />
                {errors.message && <p className="mt-1 text-xs text-rose-400">{errors.message}</p>}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#00d2ff] px-6 py-3 font-sans text-sm font-bold tracking-wide text-ink shadow-[0_0_30px_rgba(0,210,255,0.4)] transition hover:bg-white"
                >
                  Validate &amp; Prepare Message →
                </button>
              </div>
            </form>
          ) : (
            <div className="rounded-xl border border-[#00d2ff]/30 bg-[#00d2ff]/10 p-5 text-center">
              <div className="mb-2 text-2xl text-[#00d2ff]">✓</div>
              <h4 className="font-sans text-base font-bold text-bone">Message Form Validated!</h4>
              <p className="mt-2 text-xs leading-relaxed text-mist">
                Notice: Since no automated external backend is attached to this static portfolio build, messages are not quietly sent to a server. You can dispatch this message directly via your email client or copy the formatted text:
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <a
                  href={mailtoUrl}
                  className="rounded-lg bg-[#00d2ff] px-5 py-2.5 text-xs font-bold text-ink shadow-[0_0_20px_rgba(0,210,255,0.3)] transition hover:bg-white"
                >
                  ✉ Open in Email Client
                </a>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-xs font-semibold text-bone hover:bg-white/20"
                >
                  {copied ? '✓ Copied to Clipboard!' : '📋 Copy Drafted Text'}
                </button>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="rounded-lg border border-transparent px-3 py-2 text-xs text-mist hover:text-bone"
                >
                  Edit Form
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {/* Social and quick links */}
      <motion.div
        className="relative mt-10 flex flex-wrap justify-center gap-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.08, delayChildren: 0.35 }}
      >
        {ctas.map((c) => (
          <motion.div key={c.label} variants={{ hidden: { opacity: 0, y: 20, scale: 0.9 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: EASE } } }}>
            <Magnetic>
              <a
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                data-cursor={c.cursor}
                className="flex min-h-12 items-center gap-2 rounded-full border border-white/25 px-6 text-xs font-bold tracking-[0.12em] text-bone transition hover:border-[#00d2ff] hover:text-[#00d2ff] hover:bg-white/5"
              >
                {c.label.toUpperCase()}
                <span className="text-mist">↗</span>
              </a>
            </Magnetic>
          </motion.div>
        ))}
      </motion.div>

      <div className="relative mt-14 flex flex-wrap justify-center gap-6 text-xs font-semibold tracking-[0.24em] text-smoke">
        <button type="button" onClick={() => scrollTo(0, { offset: 0 })} className="hover:text-bone">
          ↺ BACK TO TOP
        </button>
        <button type="button" onClick={onReplay} className="hover:text-bone text-[#00d2ff]">
          ▶ REPLAY OPENING SEQUENCE
        </button>
      </div>

      <footer className="absolute inset-x-0 bottom-0 px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] text-center">
        <div className="mb-2 text-base">
          <SeriesMark />
        </div>
        <p className="text-[11px] leading-relaxed text-smoke">
          © {new Date().getFullYear()} {profile.displayName}. IT Student &amp; Full Stack Developer · Erode Sengunthar Engineering College.
        </p>
      </footer>
    </section>
  );
}
