"use client";

import { motion } from "framer-motion";

const pillars = [
  "Social Media Strategy",
  "Content Creation",
  "Marketing Strategy",
];

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative min-h-screen flex items-center overflow-hidden bg-[var(--color-bg)]"
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

      <div className="container-site relative z-10 pt-28 pb-24 md:pt-32 md:pb-28">
        <div className="max-w-4xl">
          {/* Status pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 bg-white border border-[var(--color-border)] rounded-full px-4 py-2 mb-8 shadow-[var(--shadow-soft)]"
          >
            <span
              className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
              aria-hidden="true"
            />
            <span className="text-xs font-medium text-[var(--color-muted)] tracking-wide">
              Available for internships & graduate marketing roles
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="display-xl text-[var(--color-fg)] mb-4"
          >
            Ben Nguyen
          </motion.h1>

          {/* Positioning */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="text-[var(--color-accent)] font-semibold text-lg md:text-xl tracking-wide mb-3"
          >
            Digital Marketing & Content
          </motion.p>

          {/* Pillars */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="flex flex-wrap items-center gap-2 mb-10"
            aria-label="Areas of focus"
          >
            {pillars.map((pillar, i) => (
              <span key={pillar} className="flex items-center gap-2">
                <span className="text-sm font-medium text-[var(--color-muted)]">
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="display-md text-[var(--color-fg)] mb-6 max-w-2xl"
          >
            I turn audience insights into content and marketing strategies.
          </motion.p>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="text-[var(--color-muted)] text-base md:text-lg leading-relaxed max-w-xl mb-10"
          >
            Bachelor of Business student at Deakin University majoring in Business and Digital Communication, with hands-on experience developing social media campaigns, producing short-form video content, and conducting audience research.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.46, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4 items-center mb-10"
          >
            <a
              href="#work"
              className="btn-primary"
              aria-label="View Ben Nguyen's work"
            >
              View My Work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="/documents/Ben-Nguyen-Resume.pdf"
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Ben Nguyen's resume"
            >
              View Resume
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.54 }}
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
              href="mailto:bennguyen112007@gmail.com"
              className="btn-ghost text-sm"
              aria-label="Email Ben Nguyen"
            >
              Email
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-[var(--color-muted-light)]">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-[var(--color-border)] to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
