import { getFeaturedProjects, projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function Work() {
  const featured = getFeaturedProjects();
  const additional = projects.filter((p) => !p.featured);

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="section bg-[var(--color-surface)]"
    >
      <div className="container-site">
        {/* Header */}
        <AnimatedSection>
          <p className="section-label mb-4">Portfolio</p>
        </AnimatedSection>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <AnimatedSection delay={0.05}>
            <h2
              id="work-heading"
              className="display-md text-[var(--color-fg)] max-w-xl"
            >
              Featured Work
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-[var(--color-muted)] text-base max-w-md md:text-right">
              Evidence-based marketing strategy, audience audits, and verified short-form video production.
            </p>
          </AnimatedSection>
        </div>

        {/* Featured 3 projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        {/* Main Work Collection: Additional Academic & Brand Strategy */}
        {additional.length > 0 && (
          <div className="pt-10 border-t border-[var(--color-border)]">
            <AnimatedSection>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-[var(--color-fg)] tracking-tight mb-1">
                    Academic Research & Brand Strategy
                  </h3>
                  <p className="text-sm text-[var(--color-muted)]">
                    In-depth strategic brand equity audits and coursework evaluations.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {additional.map((project, i) => (
                <ProjectCard key={project.slug} project={project} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
