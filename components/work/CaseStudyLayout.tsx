import Link from "next/link";
import type { Project } from "@/data/projects";
import { projects } from "@/data/projects";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

interface CaseStudyLayoutProps {
  project: Project;
}

function SectionBlock({
  label,
  content,
  list,
}: {
  label: string;
  content: string;
  list?: string[];
}) {
  return (
    <div className="mb-8">
      <h3 className="cs-section-label mb-3">{label}</h3>
      <p className="text-[var(--color-muted)] text-base leading-relaxed mb-3">{content}</p>
      {list && list.length > 0 && (
        <ul className="space-y-2 mt-3" role="list">
          {list.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] flex-shrink-0" aria-hidden="true" />
              <span className="text-[var(--color-muted)] text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function VideoPlaceholder({ title, role, platform, description, src, embedUrl, thumbnail }: {
  title: string;
  role?: string;
  platform?: string;
  description?: string;
  src?: string;
  embedUrl?: string;
  thumbnail?: string;
}) {
  return (
    <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-soft)] flex flex-col h-full">
      <div className="relative aspect-video bg-black flex items-center justify-center">
        {src ? (
          <video controls preload="metadata" className="w-full h-full object-cover" poster={thumbnail}>
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : embedUrl ? (
          <iframe
            src={embedUrl}
            title={title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="text-center space-y-3 p-4">
            <div className="w-14 h-14 rounded-full bg-[var(--color-border)] flex items-center justify-center mx-auto">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <path d="M8 5.5L17 11L8 16.5V5.5Z" fill="currentColor" className="text-[var(--color-muted)]" />
              </svg>
            </div>
            <p className="text-xs font-mono text-[var(--color-muted-light)]">[ADD VIDEO]</p>
          </div>
        )}
      </div>
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h4 className="text-sm font-semibold text-[var(--color-fg)] mb-1">{title}</h4>
          {role && <p className="text-xs text-[var(--color-muted)] mb-1"><span className="font-medium text-[var(--color-fg)]">Role:</span> {role}</p>}
          {platform && <p className="text-xs text-[var(--color-muted)] mb-2"><span className="font-medium text-[var(--color-fg)]">Platform:</span> {platform}</p>}
          {description && <p className="text-xs text-[var(--color-muted-light)] mt-1">{description}</p>}
        </div>
      </div>
    </div>
  );
}

export function CaseStudyLayout({ project }: CaseStudyLayoutProps) {
  const cs = project.caseStudy;

  // Find previous/next project for navigation
  const allSlugs = projects.map((p) => p.slug);
  const currentIndex = allSlugs.indexOf(project.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <>
      {/* Back link */}
      <div className="container-site pt-28 pb-6">
        <Link
          href="/#work"
          className="btn-ghost text-sm"
          aria-label="Back to all work"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M13 8H3M3 8L7 4M3 8L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          All Work
        </Link>
      </div>

      {/* Hero */}
      <header className="container-site pb-16">
        <AnimatedSection>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="project-number bg-[var(--color-surface)] border border-[var(--color-border)] px-3 py-1 rounded-full">
              {project.number}
            </span>
            {project.projectLabel && (
              <span className="text-xs font-medium bg-[var(--color-surface)] border border-[var(--color-border)] px-3 py-1 rounded-full text-[var(--color-muted)]">
                {project.projectLabel}
              </span>
            )}
            <span className="text-xs text-[var(--color-muted-light)]">{project.year}</span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.06}>
          <h1 className="display-lg text-[var(--color-fg)] mb-3 max-w-3xl">
            {project.title}
          </h1>
          <p className="text-[var(--color-accent)] text-xl font-semibold mb-6">
            {project.subtitle}
          </p>
          <p className="text-[var(--color-muted)] text-base md:text-lg leading-relaxed max-w-2xl">
            {project.description}
          </p>
        </AnimatedSection>
      </header>

      {/* Divider */}
      <div className="container-site">
        <div className="divider" />
      </div>

      {/* Meta bar */}
      <AnimatedSection delay={0.1} className="container-site py-10">
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {project.role && (
            <div>
              <dt className="cs-section-label mb-1.5">My Role</dt>
              <dd className="text-sm text-[var(--color-fg)] font-medium leading-snug">{project.role}</dd>
            </div>
          )}
          {project.tools && project.tools.length > 0 && (
            <div>
              <dt className="cs-section-label mb-1.5">Tools</dt>
              <dd className="text-sm text-[var(--color-muted)] leading-snug">
                {project.tools.join(", ")}
              </dd>
            </div>
          )}
          {project.platforms && project.platforms.length > 0 && (
            <div>
              <dt className="cs-section-label mb-1.5">Platforms</dt>
              <dd className="text-sm text-[var(--color-muted)] leading-snug">
                {project.platforms.join(", ")}
              </dd>
            </div>
          )}
          <div>
            <dt className="cs-section-label mb-1.5">Year</dt>
            <dd className="text-sm text-[var(--color-fg)] font-medium">{project.year}</dd>
          </div>
        </dl>
      </AnimatedSection>

      <div className="container-site">
        <div className="divider" />
      </div>

      {/* Main content */}
      <div className="container-site py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Body */}
          <div className="lg:col-span-8">

            {/* Context */}
            {cs?.context && (
              <AnimatedSection className="mb-12">
                <h2 className="text-xl font-semibold text-[var(--color-fg)] tracking-tight mb-4">
                  Context
                </h2>
                <p className="text-[var(--color-muted)] text-base leading-relaxed">
                  {cs.context}
                </p>
              </AnimatedSection>
            )}

            {/* Challenge */}
            {cs?.challenge && (
              <AnimatedSection delay={0.06} className="mb-12">
                <h2 className="text-xl font-semibold text-[var(--color-fg)] tracking-tight mb-4">
                  The Challenge
                </h2>
                <p className="text-[var(--color-muted)] text-base leading-relaxed mb-4">
                  {cs.challenge}
                </p>
                {cs.challengeList && cs.challengeList.length > 0 && (
                  <ul className="space-y-2.5 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-md)] p-5" role="list">
                    {cs.challengeList.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] flex-shrink-0" aria-hidden="true" />
                        <span className="text-sm text-[var(--color-muted)]">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </AnimatedSection>
            )}

            {/* Research */}
            {cs?.research && cs.research.length > 0 && (
              <AnimatedSection delay={0.1} className="mb-12">
                <h2 className="text-xl font-semibold text-[var(--color-fg)] tracking-tight mb-6">
                  Research & Audit
                </h2>
                <div className="space-y-6">
                  {cs.research.map((section) => (
                    <SectionBlock
                      key={section.label}
                      label={section.label}
                      content={section.content}
                      list={section.list}
                    />
                  ))}
                </div>
              </AnimatedSection>
            )}

            {/* Key Findings */}
            {cs?.keyFindings && cs.keyFindings.length > 0 && (
              <AnimatedSection delay={0.14} className="mb-12">
                <h2 className="text-xl font-semibold text-[var(--color-fg)] tracking-tight mb-6">
                  Key Findings
                </h2>
                <div className="space-y-6">
                  {cs.keyFindings.map((section) => (
                    <SectionBlock
                      key={section.label}
                      label={section.label}
                      content={section.content}
                      list={section.list}
                    />
                  ))}
                </div>
              </AnimatedSection>
            )}

            {/* Strategy */}
            {cs?.strategy && cs.strategy.length > 0 && (
              <AnimatedSection delay={0.18} className="mb-12">
                <h2 className="text-xl font-semibold text-[var(--color-fg)] tracking-tight mb-6">
                  Strategy & Recommendations
                </h2>
                <div className="space-y-6">
                  {cs.strategy.map((section) => (
                    <SectionBlock
                      key={section.label}
                      label={section.label}
                      content={section.content}
                      list={section.list}
                    />
                  ))}
                </div>
              </AnimatedSection>
            )}

            {/* Measurement */}
            {cs?.measurement && cs.measurement.length > 0 && (
              <AnimatedSection delay={0.22} className="mb-12">
                <h2 className="text-xl font-semibold text-[var(--color-fg)] tracking-tight mb-6">
                  Measurement
                </h2>
                <div className="space-y-6">
                  {cs.measurement.map((section) => (
                    <SectionBlock
                      key={section.label}
                      label={section.label}
                      content={section.content}
                      list={section.list}
                    />
                  ))}
                </div>
              </AnimatedSection>
            )}

            {/* Video gallery (content portfolio) */}
            {project.videos && project.videos.length > 0 && (
              <AnimatedSection delay={0.14} className="mb-12">
                <h2 className="text-xl font-semibold text-[var(--color-fg)] tracking-tight mb-6">
                  Video Work
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {project.videos.map((video) => (
                    <VideoPlaceholder
                      key={video.title}
                      title={video.title}
                      role={video.role}
                      platform={video.platform}
                      description={video.description}
                      src={video.src}
                      embedUrl={video.embedUrl}
                      thumbnail={video.thumbnail}
                    />
                  ))}
                </div>
              </AnimatedSection>
            )}

            {/* Reflection */}
            {cs?.reflection && (
              <AnimatedSection delay={0.26} className="mb-12">
                <h2 className="text-xl font-semibold text-[var(--color-fg)] tracking-tight mb-4">
                  Reflection
                </h2>
                <blockquote className="border-l-2 border-[var(--color-accent)] pl-5">
                  <p className="text-[var(--color-muted)] text-base leading-relaxed italic">
                    {cs.reflection}
                  </p>
                </blockquote>
              </AnimatedSection>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4" aria-label="Project sidebar">
            <div className="sticky top-28 space-y-6">
              {/* Categories */}
              <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-6 shadow-[var(--shadow-soft)]">
                <p className="cs-section-label mb-4">Categories</p>
                <div className="flex flex-wrap gap-2">
                  {project.categories.map((cat) => (
                    <span key={cat} className="skill-tag text-xs">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skills demonstrated */}
              {cs?.skills && cs.skills.length > 0 && (
                <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-6 shadow-[var(--shadow-soft)]">
                  <p className="cs-section-label mb-4">Skills Demonstrated</p>
                  <ul className="space-y-2" role="list">
                    {cs.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] flex-shrink-0" aria-hidden="true" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Back to work */}
              <Link
                href="/#work"
                className="btn-secondary w-full justify-center text-sm"
                aria-label="View all work"
              >
                ← All Work
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {/* Next / Prev navigation */}
      <div className="border-t border-[var(--color-border)]">
        <div className="container-site py-12">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-6">
            {prevProject ? (
              <Link
                href={`/work/${prevProject.slug}`}
                className="group flex flex-col gap-1 max-w-xs"
                aria-label={`Previous project: ${prevProject.title}`}
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted-light)] flex items-center gap-1.5">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M10 6H2M2 6L5 3M2 6L5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  Previous
                </span>
                <span className="text-[var(--color-fg)] font-semibold group-hover:text-[var(--color-accent)] transition-colors">
                  {prevProject.title}
                </span>
              </Link>
            ) : <div />}

            {nextProject && (
              <Link
                href={`/work/${nextProject.slug}`}
                className="group flex flex-col gap-1 max-w-xs sm:text-right sm:items-end"
                aria-label={`Next project: ${nextProject.title}`}
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted-light)] flex items-center gap-1.5">
                  Next
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 6H10M10 6L7 3M10 6L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
                <span className="text-[var(--color-fg)] font-semibold group-hover:text-[var(--color-accent)] transition-colors">
                  {nextProject.title}
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
