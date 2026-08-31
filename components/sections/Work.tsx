import { getHomeProjects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function Work() {
  const projects = getHomeProjects();

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="section bg-[var(--color-surface)]"
    >
      <div className="container-site">
        {/* Header */}
        <AnimatedSection>
          <p className="section-label mb-5">Work</p>
        </AnimatedSection>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <AnimatedSection delay={0.05}>
            <h2
              id="work-heading"
              className="display-md text-[var(--color-fg)] max-w-md"
            >
              Selected Work
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-[var(--color-muted)] text-base max-w-sm md:text-right">
              A selection of marketing, social media and content projects.
            </p>
          </AnimatedSection>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
