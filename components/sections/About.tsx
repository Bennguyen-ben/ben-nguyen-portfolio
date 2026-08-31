import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const infoItems = [
  { label: "Based in", value: "Melbourne, Australia" },
  {
    label: "Current Education",
    value: "Bachelor of Business\nDeakin University (Burwood)\nMajor: Business & Digital Communication",
  },
  {
    label: "Focus & Interests",
    value: "Digital Marketing\nSocial Media Strategy\nContent & Video Editing\nBrand Strategy",
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
        {/* Section label */}
        <AnimatedSection>
          <p className="section-label mb-5">About</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Bio & Photo layout */}
          <div className="lg:col-span-7 flex flex-col md:flex-row gap-8 items-start">
            {/* Real Profile Photo */}
            <AnimatedSection delay={0.1} className="w-full md:w-48 shrink-0">
              <div className="relative aspect-[2/3] w-full md:w-48 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-[var(--shadow-soft)] bg-[var(--color-surface)]">
                <Image
                  src="/images/profile/ben-nguyen.png"
                  alt="Ben Nguyen — Portrait Photo"
                  fill
                  sizes="(max-width: 768px) 100vw, 192px"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </AnimatedSection>

            <div className="flex-1">
              <AnimatedSection delay={0.05}>
                <h2
                  id="about-heading"
                  className="display-md text-[var(--color-fg)] mb-6"
                >
                  About Me
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={0.12}>
                <div className="space-y-4 text-[var(--color-muted)] text-sm md:text-base leading-relaxed">
                  <p>
                    Hi, I&apos;m Ben.
                  </p>
                  <p>
                    I am currently completing a Bachelor of Business at Deakin University in Melbourne, majoring in Business and Digital Communication. My focus is on bridging the gap between audience research, creative content creation, and brand strategy.
                  </p>
                  <p>
                    Alongside my studies, I have gained hands-on experience in video production and administration. Working as a short-form video editor for a digital newspaper has taught me how to analyze social engagement and coordinate content across Facebook, TikTok, and YouTube under daily deadlines.
                  </p>
                  <p>
                    I enjoy translating data-driven audience insights into clean, engaging visual narratives and marketing strategies that resonate with younger consumers.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Info panel */}
          <AnimatedSection delay={0.18} className="lg:col-span-5">
            <aside
              className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-8 shadow-[var(--shadow-soft)]"
              aria-label="Profile information"
            >
              <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-muted-light)] mb-6">
                Profile Overview
              </p>
              <dl className="space-y-6">
                {infoItems.map((item) => (
                  <div key={item.label} className="flex flex-col gap-1.5">
                    <dt className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted-light)]">
                      {item.label}
                    </dt>
                    <dd className="text-sm font-medium text-[var(--color-fg)] leading-snug whitespace-pre-line">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
                <a
                  href="#contact"
                  className="btn-primary w-full justify-center text-sm py-3"
                >
                  Let&apos;s Connect
                </a>
              </div>
            </aside>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
