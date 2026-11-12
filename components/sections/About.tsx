import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const infoItems = [
  { label: "Location", value: "Melbourne, Victoria, Australia" },
  {
    label: "Education",
    value: "Bachelor of Business\nDeakin University (Burwood)\nMajor: Business & Digital Communication",
  },
  {
    label: "Core Specialisations",
    value: "Brand Strategy & Auditing\nSocial Media Strategy & Pacing\nShort-Form Video Production\nAudience Segmentation",
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
          <p className="section-label mb-4">About</p>
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
                    I am an early-career marketing and content creator completing a Bachelor of Business at Deakin University in Melbourne, majoring in Business and Digital Communication.
                  </p>
                  <p>
                    My professional work centers on bridging empirical audience research with high-retention visual storytelling. As a short-form video editor for Mekong ASEAN digital newspaper, I produce 30+ vertical news reports each month under tight deadlines, designing hook structures and dynamic captions for mobile audiences.
                  </p>
                  <p>
                    Combined with a background in frontline legal administration at SG Lawyers, I bring disciplined organizational habits, empathetic stakeholder communication, and rigorous analytical skills to graduate and internship marketing roles.
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
                  href="/documents/Ben-Nguyen-Digital-Marketing-Resume.pdf"
                  className="btn-primary flex-1 justify-center text-xs py-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
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
