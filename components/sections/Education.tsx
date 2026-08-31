import { AnimatedSection } from "@/components/ui/AnimatedSection";

const relevantAreas = [
  "Digital Marketing",
  "Social Media Strategy",
  "Business Communication",
  "Digital Media & Content",
  "Marketing Fundamentals",
  "Brand Management Strategy",
];

export function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="section bg-[var(--color-surface)]"
    >
      <div className="container-site">
        <AnimatedSection>
          <p className="section-label mb-5">Education</p>
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <h2
            id="education-heading"
            className="display-md text-[var(--color-fg)] mb-12"
          >
            Education
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <article
            className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-8 md:p-10 shadow-[var(--shadow-soft)]"
            aria-label="Deakin University education"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-[var(--color-fg)] tracking-tight mb-1">
                  Deakin University
                </h3>
                <p className="text-[var(--color-accent)] font-medium mb-1">
                  Bachelor of Business
                </p>
                <p className="text-sm text-[var(--color-muted)] font-medium">
                  Major: Business and Digital Communication
                </p>
                <p className="text-xs text-[var(--color-muted-light)] mt-1">
                  Burwood Campus, Melbourne, Australia
                </p>
              </div>

              <dl className="flex flex-col gap-3 text-sm md:text-right shrink-0">
                <div>
                  <dt className="text-[10px] uppercase tracking-widest text-[var(--color-muted-light)] font-semibold mb-0.5">
                    Study Period
                  </dt>
                  <dd className="text-sm font-medium text-[var(--color-fg)]">
                    July 2025 – Present
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-widest text-[var(--color-muted-light)] font-semibold mb-0.5">
                    Expected Completion
                  </dt>
                  <dd className="text-sm font-medium text-[var(--color-fg)]">
                    May 2028
                  </dd>
                </div>
              </dl>
            </div>

            <div className="border-t border-[var(--color-border)] pt-7">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted-light)] mb-4">
                Relevant Academic Coursework
              </h4>
              <div className="flex flex-wrap gap-2" role="list" aria-label="Coursework areas">
                {relevantAreas.map((area) => (
                  <span key={area} role="listitem" className="skill-tag text-xs">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </AnimatedSection>
      </div>
    </section>
  );
}
