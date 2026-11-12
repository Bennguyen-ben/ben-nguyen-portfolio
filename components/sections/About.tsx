import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const infoItems = [
  { label: "Location", value: "Melbourne, Victoria, Australia" },
  {
    label: "Education",
    value: "Bachelor of Business\nDeakin University (Burwood, Melbourne)\nMajor: Business and Digital Communication\nJuly 2025 – Present (Expected May 2028)",
  },
  {
    label: "Core Specialisations",
    value: "Digital Content Creation\nSocial Media Strategy & Pacing\nAudience Research & Marketing Analysis\nProcurement Operations & Business Administration",
  },
];

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section bg-[var(--color-bg)]"
    >
      <div className="container-site">
        <AnimatedSection>
          <p className="section-label mb-4">About Me</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Bio & Photo layout */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row gap-8 items-start">
            {/* Real Profile Photo */}
            <AnimatedSection delay={0.1} className="w-full sm:w-52 shrink-0">
              <div className="relative aspect-[3/4] w-full sm:w-52 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-[var(--shadow-soft)] bg-[var(--color-surface)]">
                <Image
                  src="/images/profile/ben-nguyen-profile.png"
                  alt="Ben Nguyen — Portrait Photo"
                  fill
                  sizes="(max-width: 640px) 100vw, 208px"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </AnimatedSection>

            <div className="flex-1">
              <AnimatedSection delay={0.05}>
                <h2
                  id="about-heading"
                  className="display-md text-[var(--color-fg)] mb-5"
                >
                  About Ben Nguyen
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={0.12}>
                <div className="space-y-4 text-[var(--color-muted)] text-sm md:text-base leading-relaxed">
                  <p>
                    I focus on digital content creation, social media strategy, audience research, and marketing analysis, turning data-informed insights into high-retention visual storytelling. Through high-volume short-form news production at Mekong ASEAN, purchasing operations at FPT Telecom, and administrative client service at SENADHEERA & GORDON Law Firm, I combine creative media execution with structured business communication.
                  </p>
                  <p>
                    I am actively seeking digital marketing internships and early-career opportunities where audience research, creative content production, and disciplined operational habits drive measurable engagement.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Info panel */}
          <AnimatedSection delay={0.18} className="lg:col-span-5">
            <aside
              className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-7 md:p-8 shadow-[var(--shadow-soft)]"
              aria-label="Profile information"
            >
              <p className="text-xs font-bold tracking-widest uppercase text-[var(--color-muted-light)] mb-6">
                Profile Overview
              </p>
              <dl className="space-y-5">
                {infoItems.map((item) => (
                  <div key={item.label} className="flex flex-col gap-1 border-b border-[var(--color-border)] pb-4 last:border-0 last:pb-0">
                    <dt className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-muted-light)]">
                      {item.label}
                    </dt>
                    <dd className="text-sm font-semibold text-[var(--color-fg)] leading-snug whitespace-pre-line">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row gap-3">
                <a
                  href="/documents/Ben-Nguyen-Resume.pdf"
                  className="btn-primary flex-1 justify-center text-xs py-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Ben-Nguyen-Resume.pdf"
                  aria-label="Download resume"
                >
                  Download Resume (PDF)
                </a>
                <a
                  href="#contact"
                  className="btn-secondary flex-1 justify-center text-xs py-3"
                >
                  Get in Touch
                </a>
              </div>
            </aside>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
