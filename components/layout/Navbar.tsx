"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Me" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Academic Research" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || !isHome
            ? "bg-white/95 backdrop-blur-md border-b border-[var(--color-border)] py-3 shadow-[0_1px_12px_0_rgba(0,0,0,0.06)]"
            : "bg-transparent py-5"
        }`}
      >
        <nav
          className="container-site flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="font-bold text-[var(--color-fg)] tracking-tight text-sm hover:opacity-75 transition-opacity"
            aria-label="Ben Nguyen — home"
          >
            BEN NGUYEN
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-7" role="list">
            {navLinks.map((link) => {
              const targetHref = isHome ? link.href : `/${link.href}`;
              return (
                <li key={link.href}>
                  <Link
                    href={targetHref}
                    className="nav-link text-xs font-semibold uppercase tracking-wider"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/documents/Ben-Nguyen-Resume.pdf"
              className="btn-secondary text-xs py-2 px-4"
              target="_blank"
              rel="noopener noreferrer"
              download="Ben-Nguyen-Resume.pdf"
              aria-label="Download Ben Nguyen's resume"
            >
              Resume (PDF)
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-[var(--color-surface)] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
              className="block w-5 h-0.5 bg-[var(--color-fg)] origin-center"
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1 }}
              className="block w-5 h-0.5 bg-[var(--color-fg)]"
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
              className="block w-5 h-0.5 bg-[var(--color-fg)] origin-center"
            />
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-white flex flex-col"
            role="dialog"
            aria-label="Mobile navigation menu"
            aria-modal="true"
          >
            <div className="container-site py-5 flex items-center justify-between border-b border-[var(--color-border)]">
              <span className="font-bold text-sm tracking-tight">BEN NGUYEN</span>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-[var(--color-surface)]"
                aria-label="Close menu"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <nav className="container-site flex-1 flex flex-col justify-center gap-2" aria-label="Mobile navigation">
              {navLinks.map((link, i) => {
                const targetHref = isHome ? link.href : `/${link.href}`;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={targetHref}
                      className="block text-2xl font-semibold text-[var(--color-fg)] py-2.5 border-b border-[var(--color-border)] hover:text-[var(--color-accent)] transition-colors tracking-tight"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <div className="container-site py-8 border-t border-[var(--color-border)]">
              <a
                href="/documents/Ben-Nguyen-Resume.pdf"
                className="btn-primary w-full justify-center text-sm py-3"
                target="_blank"
                rel="noopener noreferrer"
                download="Ben-Nguyen-Resume.pdf"
                onClick={() => setMenuOpen(false)}
              >
                Download Resume (PDF)
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
