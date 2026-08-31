"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

/**
 * Contact section
 *
 * To connect to Formspree:
 *   1. Create an account at formspree.io
 *   2. Create a form and get your endpoint URL
 *   3. Replace the action URL below with your Formspree endpoint
 *
 * Email and LinkedIn placeholders:
 *   Search for [ADD EMAIL] and [ADD LINKEDIN] in this file and replace them.
 */

const EMAIL = "bennguyen112007@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/haminhnguyenkhac";
const WEBSITE = "bennguyen.com";

const contactLinks = [
  {
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <rect x="2" y="4" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 6.5L9 10.5L16 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/haminhnguyenkhac",
    href: LINKEDIN,
    external: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5.5 7.5V13M5.5 5.5V5.51M8.5 13V10C8.5 8.895 9.395 8 10.5 8C11.605 8 12.5 8.895 12.5 10V13M8.5 7.5V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Website",
    value: WEBSITE,
    href: `https://${WEBSITE}`,
    external: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="9" cy="9" r="7" />
        <line x1="2" y1="9" x2="16" y2="9" />
        <path d="M9 2a15.3 15.3 0 0 1 4 7 15.3 15.3 0 0 1-4 7 15.3 15.3 0 0 1-4-7 15.3 15.3 0 0 1 4-7z" />
      </svg>
    ),
  },
  {
    label: "Resume",
    value: "Download CV",
    href: "/documents/Ben-Nguyen-Resume.pdf",
    download: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M9 2V11M9 11L6 8M9 11L12 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 14H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

type FormStatus = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    // mailto fallback — opens email client
    // To integrate Formspree, replace the form action attribute and remove this handler
    const mailtoLink = `mailto:${EMAIL}?subject=Portfolio Enquiry from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setStatus("idle");
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section bg-[var(--color-bg)]"
    >
      <div className="container-site">
        <AnimatedSection>
          <p className="section-label mb-5">Contact</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left col */}
          <div className="lg:col-span-5">
            <AnimatedSection delay={0.05}>
              <h2
                id="contact-heading"
                className="display-md text-[var(--color-fg)] mb-5"
              >
                Let&apos;s Connect
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <p className="text-[var(--color-muted)] text-base leading-relaxed mb-10">
                I&apos;m interested in internship, graduate and entry-level opportunities in digital
                marketing, social media, content and brand marketing.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <ul className="space-y-5" role="list">
                {contactLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="flex items-start gap-4 group"
                      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      {...(link.download ? { download: true } : {})}
                      aria-label={`${link.label}: ${link.value}`}
                    >
                      <span className="mt-0.5 w-9 h-9 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-muted)] group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-accent)] group-hover:bg-[var(--color-accent-light)] transition-all flex-shrink-0">
                        {link.icon}
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted-light)] mb-0.5">
                          {link.label}
                        </p>
                        <p className="text-sm font-medium text-[var(--color-fg)] group-hover:text-[var(--color-accent)] transition-colors break-all">
                          {link.value}
                        </p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="mt-8 pt-8 border-t border-[var(--color-border)]">
              <p className="text-xs text-[var(--color-muted-light)]">
                📍 Melbourne, Australia
              </p>
            </AnimatedSection>
          </div>

          {/* Contact form */}
          <AnimatedSection delay={0.12} className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-8 md:p-10 shadow-[var(--shadow-soft)]"
              aria-label="Contact form"
              noValidate
            >
              {/* To integrate Formspree, add: action="https://formspree.io/f/YOUR_ID" method="POST" */}
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-[var(--color-fg)] mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="form-input"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-[var(--color-fg)] mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="form-input"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-[var(--color-fg)] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    className="form-input resize-none"
                    placeholder="Tell me about the opportunity..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                  aria-label="Send message"
                >
                  {status === "sending" ? "Opening email..." : "Send Message"}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M2 8H14M14 8L10 4M14 8L10 12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {status === "success" && (
                  <p role="status" className="text-sm text-emerald-600 font-medium text-center">
                    Message sent successfully!
                  </p>
                )}
                {status === "error" && (
                  <p role="alert" className="text-sm text-red-600 font-medium text-center">
                    Something went wrong. Please try emailing directly.
                  </p>
                )}
              </div>

              <p className="text-xs text-[var(--color-muted-light)] mt-5 text-center">
                Form submits via your email client. For server-side sending, integrate Formspree.
              </p>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
