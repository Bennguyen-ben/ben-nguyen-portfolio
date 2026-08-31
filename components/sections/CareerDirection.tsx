import { AnimatedSection } from "@/components/ui/AnimatedSection";

const interests = [
  "Digital Marketing",
  "Social Media",
  "Content Marketing",
  "Brand Marketing",
  "Marketing Communications",
];

export function CareerDirection() {
  return (
    <section
      id="career"
      aria-labelledby="career-heading"
      className="section bg-[var(--color-surface)]"
    >
      <div className="container-site">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <p className="section-label mb-5 justify-center flex">
              What I&apos;m Looking For
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.06}>
            <h2
              id="career-heading"
              className="display-md text-[var(--color-fg)] mb-6"
            >
              What I&apos;m Looking For
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.12}>
            <p className="text-[var(--color-muted)] text-base md:text-lg leading-relaxed mb-8">
              I&apos;m interested in opportunities where I can develop my experience in:
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.18}>
            <div
              className="flex flex-wrap gap-2.5 justify-center mb-10"
              role="list"
              aria-label="Career interests"
            >
              {interests.map((item) => (
                <span
                  key={item}
                  role="listitem"
                  className="bg-[var(--color-accent-light)] text-[var(--color-accent)] border border-blue-200 font-medium px-4 py-2 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.24}>
            <p className="text-[var(--color-muted)] text-sm md:text-base leading-relaxed mb-10 max-w-lg mx-auto">
              I&apos;m particularly interested in roles that combine audience insights, creative content and marketing strategy.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <a
              href="#contact"
              className="btn-primary inline-flex mx-auto"
              aria-label="Get in touch with Ben Nguyen"
            >
              Let&apos;s Connect
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
