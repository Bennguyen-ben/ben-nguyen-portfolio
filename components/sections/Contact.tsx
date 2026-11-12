"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";

const EMAIL = "bennguyen112007@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/haminhnguyenkhac";

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
    label: "Resume",
    value: "Download Resume (PDF)",
    href: "/documents/Ben-Nguyen-Digital-Marketing-Resume.pdf",
    download: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M9 2V11M9 11L6 8M9 11L12 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 14H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section bg-[var(--color-bg)]"
    >
      <div className="container-site">
        <AnimatedSection>
          <p className="section-label mb-4">Contact</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left col */}
          <div className="lg:col-span-6">
            <AnimatedSection delay={0.05}>
              <h2
                id="contact-heading"
                className="display-md text-[var(--color-fg)] mb-5"
              >
                Let&apos;s Connect
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <p className="text-[var(--color-muted)] text-base md:text-lg leading-relaxed mb-8">
                I am actively seeking marketing internships, early-career content creation, and graduate business opportunities. Whether you want to discuss a role, review my work, or collaborate on a project, I would welcome the conversation.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <ul className="space-y-4" role="list">
                {contactLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="flex items-center gap-4 group p-3 rounded-[var(--radius-md)] bg-[var(--color-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all shadow-xs"
                      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      {...(link.download ? { download: true } : {})}
                      aria-label={`${link.label}: ${link.value}`}
                    >
                      <span className="w-10 h-10 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-muted)] group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-accent)] group-hover:bg-[var(--color-accent-light)] transition-all flex-shrink-0">
                        {link.icon}
                      </span>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-muted-light)]">
                          {link.label}
                        </p>
                        <p className="text-sm font-semibold text-[var(--color-fg)] group-hover:text-[var(--color-accent)] transition-colors break-all">
                          {link.value}
                        </p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="mt-8 pt-6 border-t border-[var(--color-border)]">
              <p className="text-xs text-[var(--color-muted-light)] flex items-center gap-2">
                <span>📍</span>
                <span>Based in Melbourne, Victoria, Australia (Available for on-site & hybrid roles)</span>
              </p>
            </AnimatedSection>
          </div>

          {/* Right col: Direct Message Prompt / Card */}
          <div className="lg:col-span-6">
            <AnimatedSection delay={0.15}>
              <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-8 shadow-[var(--shadow-soft)]">
                <h3 className="text-xl font-bold text-[var(--color-fg)] tracking-tight mb-2">
                  Direct Email Outreach
                </h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                  Feel free to send an email directly to discuss potential opportunities or request complete academic transcripts.
                </p>

                <div className="space-y-4">
                  <div className="bg-[var(--color-surface)] p-4 rounded-[var(--radius-md)] border border-[var(--color-border)]">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-muted-light)] mb-1">
                      Direct Email
                    </p>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="text-base font-semibold text-[var(--color-accent)] hover:underline break-all"
                    >
                      {EMAIL}
                    </a>
                  </div>

                  <a
                    href={`mailto:${EMAIL}?subject=Opportunity%20Inquiry%20-%20Ben%20Nguyen`}
                    className="btn-primary w-full justify-center text-sm py-3"
                  >
                    Open Email Client
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2.5 7H11.5M11.5 7L8 3.5M11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
