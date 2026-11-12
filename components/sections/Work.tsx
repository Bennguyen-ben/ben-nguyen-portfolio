import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function Work() {
  // Academic projects in required exact order:
  // 1. Nature Advocates Collective (ALM216)
  // 2. The Pokémon Company (MMK280)
  // 3. Lily's Little Lunchboxes (MMK101)
  const orderedSlugs = [
    "nac-social-media-strategy",
    "pokemon-brand-audit",
    "lilys-little-lunchboxes",
  ];

  const academicProjects = orderedSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="section bg-[var(--color-surface)] border-t border-[var(--color-border)]"
    >
      <div className="container-site">
        {/* Header */}
        <AnimatedSection>
          <p className="section-label mb-4">Academic Work</p>
        </AnimatedSection>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <AnimatedSection delay={0.05}>
            <div>
              <h2
                id="projects-heading"
                className="display-md text-[var(--color-fg)] max-w-xl mb-2"
              >
                Academic Research & Projects
              </h2>
              <p className="text-[var(--color-accent)] font-semibold text-base">
                Deakin University Coursework • Strategic Marketing • Brand Management
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-[var(--color-muted)] text-base max-w-md md:text-right">
              Evidence-based marketing strategies, multi-channel audience audits, and brand equity frameworks backed by verified coursework reports.
            </p>
          </AnimatedSection>
        </div>

        {/* 3 Academic Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {academicProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
