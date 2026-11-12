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

function VideoPlayerCard({
  title,
  role,
  platform,
  description,
  src,
  embedUrl,
  thumbnail,
}: {
  title: string;
  role?: string;
  platform?: string;
  description?: string;
  src?: string;
  embedUrl?: string;
  thumbnail?: string;
}) {
  if (!src && !embedUrl) return null;

  return (
    <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-soft)] flex flex-col h-full w-full max-w-[340px] mx-auto">
      <div className="relative aspect-[9/16] bg-neutral-950 flex items-center justify-center overflow-hidden">
        {src ? (
          <video
            controls
            preload="metadata"
            playsInline
            className="w-full h-full object-cover"
            poster={thumbnail}
          >
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
        ) : null}
      </div>
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h4 className="text-sm font-semibold text-[var(--color-fg)] mb-1.5 leading-snug">{title}</h4>
          {role && (
            <p className="text-xs text-[var(--color-muted)] mb-1">
              <span className="font-semibold text-[var(--color-fg)]">Role:</span> {role}
            </p>
          )}
          {platform && (
            <p className="text-xs text-[var(--color-muted)] mb-2">
              <span className="font-semibold text-[var(--color-fg)]">Platform:</span> {platform}
            </p>
          )}
          {description && (
            <p className="text-xs text-[var(--color-muted-light)] leading-relaxed mt-2">{description}</p>
          )}
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
      <div className="container-site pt-28 sm:pt-32 pb-6 relative z-10">
        <Link
          href={project.slug === "content-portfolio" ? "/#experience" : "/#projects"}
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors py-2 px-3 rounded-lg hover:bg-[var(--color-surface)] border border-transparent hover:border-[var(--color-border)]"
          aria-label={project.slug === "content-portfolio" ? "Back to Professional Experience" : "Back to Academic Projects"}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M13 8H3M3 8L7 4M3 8L7 12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {project.slug === "content-portfolio" ? "Back to Experience" : "Back to Academic Projects"}
        </Link>
      </div>

      {/* Hero */}
      <header className="container-site pb-14 relative z-10">
        <AnimatedSection>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-6">
            <span className="font-bold text-sm tracking-wide text-[var(--color-fg)]">BEN NGUYEN</span>
            <span className="text-[var(--color-border)] select-none" aria-hidden="true">•</span>
            {project.projectLabel && (
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                {project.projectLabel}
              </span>
            )}
            <span className="text-[var(--color-border)] select-none" aria-hidden="true">•</span>
            <span className="text-xs font-medium text-[var(--color-muted)]">{project.year}</span>
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

            {/* Objective */}
            {cs?.objective && (
              <AnimatedSection className="mb-12">
                <h2 className="text-xl font-semibold text-[var(--color-fg)] tracking-tight mb-4">
                  Objective
                </h2>
                <p className="text-[var(--color-muted)] text-base leading-relaxed">
                  {cs.objective}
                </p>
              </AnimatedSection>
            )}

            {/* Context */}
            {cs?.context && (
              <AnimatedSection delay={0.04} className="mb-12">
                <h2 className="text-xl font-semibold text-[var(--color-fg)] tracking-tight mb-4">
                  Context & Background
                </h2>
                <p className="text-[var(--color-muted)] text-base leading-relaxed">
                  {cs.context}
                </p>
              </AnimatedSection>
            )}

            {/* Team vs Individual Scope */}
            {(cs?.teamScope || cs?.individualContribution) && (
              <AnimatedSection delay={0.06} className="mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-6">
                  {cs.teamScope && (
                    <div>
                      <h3 className="cs-section-label mb-2 text-[var(--color-fg)]">Team Scope & Collaboration</h3>
                      <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                        {cs.teamScope}
                      </p>
                    </div>
                  )}
                  {cs.individualContribution && (
                    <div>
                      <h3 className="cs-section-label mb-2 text-[var(--color-accent)]">My Individual Contribution</h3>
                      <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                        {cs.individualContribution}
                      </p>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            )}

            {/* Challenge */}
            {cs?.challenge && (
              <AnimatedSection delay={0.08} className="mb-12">
                <h2 className="text-xl font-semibold text-[var(--color-fg)] tracking-tight mb-4">
                  The Strategic Challenge
                </h2>
                <p className="text-[var(--color-muted)] text-base leading-relaxed mb-4">
                  {cs.challenge}
                </p>
                {cs.challengeList && cs.challengeList.length > 0 && (
                  <ul className="space-y-2.5 bg-[var(--color-card)] border border-[var(--color-border)] rounded-[var(--radius-md)] p-5" role="list">
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

            {/* Methods & Tools */}
            {cs?.methodsAndTools && cs.methodsAndTools.length > 0 && (
              <AnimatedSection delay={0.1} className="mb-12">
                <h2 className="text-xl font-semibold text-[var(--color-fg)] tracking-tight mb-6">
                  Methods & Tools Applied
                </h2>
                <div className="space-y-6">
                  {cs.methodsAndTools.map((section) => (
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

            {/* Research & Audit */}
            {cs?.research && cs.research.length > 0 && (
              <AnimatedSection delay={0.12} className="mb-12">
                <h2 className="text-xl font-semibold text-[var(--color-fg)] tracking-tight mb-6">
                  Research & Analysis
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
                  Key Findings & Insights
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

            {/* Strategy & Recommendations */}
            {cs?.strategy && cs.strategy.length > 0 && (
              <AnimatedSection delay={0.16} className="mb-12">
                <h2 className="text-xl font-semibold text-[var(--color-fg)] tracking-tight mb-6">
                  Strategy & Execution Plan
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

            {/* Deliverables */}
            {cs?.deliverables && cs.deliverables.length > 0 && (
              <AnimatedSection delay={0.18} className="mb-12">
                <h2 className="text-xl font-semibold text-[var(--color-fg)] tracking-tight mb-6">
                  Deliverables Produced
                </h2>
                <div className="space-y-6">
                  {cs.deliverables.map((section) => (
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

            {/* Results & Evidence */}
            {cs?.resultsAndEvidence && cs.resultsAndEvidence.length > 0 && (
              <AnimatedSection delay={0.2} className="mb-12">
                <h2 className="text-xl font-semibold text-[var(--color-fg)] tracking-tight mb-6">
                  Verified Results & Evidence
                </h2>
                <div className="space-y-6">
                  {cs.resultsAndEvidence.map((section) => (
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

            {/* Video Showcase (Mekong ASEAN) */}
            {project.videos && project.videos.length > 0 && (
              <AnimatedSection delay={0.22} className="mb-12">
                <h2 className="text-xl font-semibold text-[var(--color-fg)] tracking-tight mb-6">
                  Published Video Showcase
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
                  {project.videos.map((video) => (
                    <VideoPlayerCard
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
                {/* TikTok button */}
                <div className="mt-8 text-center sm:text-left">
                  <a
                    href="https://www.tiktok.com/@kinhtevietnam_asean"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 btn-primary"
                  >
                    <span>Watch Verified Channel on TikTok</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              </AnimatedSection>
            )}

            {/* Project Files (Downloads) */}
            {cs?.projectFiles && cs.projectFiles.length > 0 && (
              <AnimatedSection delay={0.24} className="mb-12">
                <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-6 sm:p-8 shadow-[var(--shadow-soft)]">
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent)] shrink-0" aria-hidden="true" />
                    <h2 className="text-xl font-semibold text-[var(--color-fg)] tracking-tight">
                      Verified Project Files & Documentation
                    </h2>
                  </div>
                  <p className="text-sm text-[var(--color-muted)] mb-6">
                    View and download original project deliverables:
                  </p>
                  <div className="flex flex-col sm:flex-row flex-wrap gap-3.5">
                    {cs.projectFiles.map((file, i) => (
                      <a
                        key={i}
                        href={file.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="btn-primary inline-flex items-center justify-center gap-2.5 py-3 px-5 text-sm font-medium"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        <span>{file.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            )}

            {/* Reflection / What I Learned */}
            {cs?.reflection && (
              <AnimatedSection delay={0.26} className="mb-12">
                <h2 className="text-xl font-semibold text-[var(--color-fg)] tracking-tight mb-4">
                  What I Learned & Reflection
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
                <p className="cs-section-label mb-4">Focus Areas</p>
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

              {/* Back to section */}
              <Link
                href={project.slug === "content-portfolio" ? "/#experience" : "/#projects"}
                className="btn-secondary w-full justify-center text-sm"
                aria-label={project.slug === "content-portfolio" ? "Back to Experience" : "View all academic projects"}
              >
                {project.slug === "content-portfolio" ? "← Back to Experience" : "← All Academic Projects"}
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
