"use client";

import { motion, useReducedMotion, type Transition } from "framer-motion";

const pillars = [
  "Digital Marketing & Content",
  "Social Media Strategy",
  "Short-Form Video Production",
  "Audience Research",
];

const easeCubic: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const transition = (delay: number, duration: number = 0.6): Transition =>
    prefersReducedMotion ? { duration: 0 } : { duration, delay, ease: easeCubic };

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-[var(--color-bg)]"
    >
      {/* Grid background */}
      <div className="hero-grid-bg" aria-hidden="true" />

      {/* Accent blobs */}
      <div
        className="hero-dot-accent w-[600px] h-[600px] bg-[var(--color-accent)] -top-48 -right-48"
        aria-hidden="true"
      />
      <div
        className="hero-dot-accent w-[400px] h-[400px] bg-blue-300 top-1/2 -left-32"
        aria-hidden="true"
        style={{ opacity: 0.06 }}
      />

      <div className="container-site relative z-10 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="max-w-4xl">
          {/* Status pill */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition(0, 0.5)}
            className="inline-flex items-center gap-2.5 bg-white border border-[var(--color-border)] rounded-full px-4 py-2 mb-8 shadow-[var(--shadow-soft)]"
          >
            <span
              className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
              aria-hidden="true"
            />
            <span className="text-xs font-semibold text-[var(--color-muted)] tracking-wide">
              Available for Marketing Internships & Graduate Opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition(0.08, 0.7)}
            className="display-xl text-[var(--color-fg)] mb-3"
          >
            Ben Nguyen
          </motion.h1>

          {/* Positioning */}
          <motion.p
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition(0.14, 0.65)}
            className="text-[var(--color-accent)] font-bold text-lg md:text-xl tracking-wide mb-3"
          >
            Digital Marketing & Content
          </motion.p>

          {/* Pillars */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={transition(0.2, 0.6)}
            className="flex flex-wrap items-center gap-2 mb-8"
            aria-label="Areas of focus"
          >
            {pillars.map((pillar, i) => (
              <span key={pillar} className="flex items-center gap-2">
                <span className="text-xs md:text-sm font-medium text-[var(--color-muted)]">
                  {pillar}
                </span>
                {i < pillars.length - 1 && (
                  <span className="text-[var(--color-border)] text-xs" aria-hidden="true">
                    •
                  </span>
                )}
              </span>
            ))}
          </motion.div>

          {/* Headline */}
          <motion.p
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition(0.24, 0.7)}
            className="display-md text-[var(--color-fg)] mb-6 max-w-2xl"
          >
            Turning audience insights into content and marketing strategies.
          </motion.p>

          {/* Supporting text */}
          <motion.p
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition(0.3, 0.65)}
            className="text-[var(--color-muted)] text-base md:text-lg leading-relaxed max-w-2xl mb-10"
          >
            I&apos;m a Bachelor of Business student at Deakin University, majoring in Business and Digital Communication. I have experience in digital content production, video editing, procurement, and business administration, alongside university projects in social media strategy and marketing research.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition(0.36, 0.6)}
            className="flex flex-wrap gap-4 items-center mb-10"
          >
            <a
              href="/documents/Ben-Nguyen-Resume.pdf"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              download="Ben-Nguyen-Resume.pdf"
              aria-label="View Ben Nguyen's resume"
            >
              View Resume
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 2V11M8 11L5 8M8 11L11 8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 13H14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            </a>
            <a
              href="#contact"
              className="btn-secondary"
              aria-label="Contact Ben Nguyen"
            >
              Contact Me
            </a>
            <a
              href="#experience"
              className="btn-ghost text-sm font-semibold"
              aria-label="Explore professional experience"
            >
              Explore Experience
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={transition(0.42, 0.5)}
            className="flex items-center gap-5"
          >
            <a
              href="https://www.linkedin.com/in/haminhnguyenkhac"
              className="btn-ghost text-sm"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ben Nguyen on LinkedIn"
            >
              LinkedIn
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@kinhtevietnam_asean"
              className="btn-ghost text-sm"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mekong ASEAN published TikTok channel"
            >
              Published TikTok
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 10L10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="mailto:bennguyen112007@gmail.com"
              className="btn-ghost text-sm"
              aria-label="Email Ben Nguyen"
            >
              Email
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 10L10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[var(--color-muted-light)]">
            Explore
          </span>
          <motion.div
            animate={prefersReducedMotion ? {} : { y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-[var(--color-border)] to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
