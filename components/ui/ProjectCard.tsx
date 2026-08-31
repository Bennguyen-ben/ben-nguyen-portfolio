"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

// Category colour mapping
function categoryColor(cat: string): string {
  if (cat.includes("Social")) return "bg-blue-50 text-blue-700 border-blue-200";
  if (cat.includes("Analytics") || cat.includes("Data")) return "bg-violet-50 text-violet-700 border-violet-200";
  if (cat.includes("Marketing") || cat.includes("Consumer")) return "bg-emerald-50 text-emerald-700 border-emerald-200";
  if (cat.includes("Content") || cat.includes("Video") || cat.includes("Short")) return "bg-orange-50 text-orange-700 border-orange-200";
  if (cat.includes("Audience")) return "bg-sky-50 text-sky-700 border-sky-200";
  if (cat.includes("Digital") || cat.includes("AI")) return "bg-indigo-50 text-indigo-700 border-indigo-200";
  if (cat.includes("Brand")) return "bg-rose-50 text-rose-700 border-rose-200";
  return "bg-[var(--color-surface)] text-[var(--color-muted)] border-[var(--color-border)]";
}

// Abstract preview SVG based on project category
function ProjectPreview({ project }: { project: Project }) {
  const patterns: Record<string, string> = {
    "nac-social-media-strategy": "#2563EB",
    "lilys-little-lunchboxes": "#059669",
    "social-media-analytics": "#7C3AED",
    "content-portfolio": "#EA580C",
    "portfolio-website": "#1D4ED8",
  };
  const color = patterns[project.slug] ?? "#2563EB";

  return (
    <div
      className="w-full h-full flex items-center justify-center"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 400 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <rect width="400" height="260" fill={`${color}08`} />
        {/* Grid lines */}
        {[0, 1, 2, 3].map((i) => (
          <line
            key={`h${i}`}
            x1="40"
            y1={60 + i * 50}
            x2="360"
            y2={60 + i * 50}
            stroke={`${color}18`}
            strokeWidth="1"
          />
        ))}
        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={`v${i}`}
            x1={60 + i * 70}
            y1="40"
            x2={60 + i * 70}
            y2="220"
            stroke={`${color}18`}
            strokeWidth="1"
          />
        ))}
        {/* Bar chart representation */}
        {project.slug === "social-media-analytics" && (
          <>
            <rect x="80" y="150" width="32" height="60" rx="4" fill={`${color}30`} />
            <rect x="130" y="120" width="32" height="90" rx="4" fill={`${color}50`} />
            <rect x="180" y="90" width="32" height="120" rx="4" fill={`${color}70`} />
            <rect x="230" y="110" width="32" height="100" rx="4" fill={`${color}50`} />
            <rect x="280" y="70" width="32" height="140" rx="4" fill={`${color}`} />
          </>
        )}
        {/* Social graph / network for NAC */}
        {project.slug === "nac-social-media-strategy" && (
          <>
            <circle cx="200" cy="130" r="28" fill={`${color}20`} stroke={color} strokeWidth="1.5" />
            <circle cx="120" cy="90" r="18" fill={`${color}15`} stroke={color} strokeWidth="1" />
            <circle cx="290" cy="85" r="22" fill={`${color}15`} stroke={color} strokeWidth="1" />
            <circle cx="100" cy="180" r="14" fill={`${color}10`} stroke={color} strokeWidth="1" />
            <circle cx="310" cy="170" r="16" fill={`${color}10`} stroke={color} strokeWidth="1" />
            <line x1="200" y1="130" x2="120" y2="90" stroke={`${color}40`} strokeWidth="1.5" />
            <line x1="200" y1="130" x2="290" y2="85" stroke={`${color}40`} strokeWidth="1.5" />
            <line x1="200" y1="130" x2="100" y2="180" stroke={`${color}30`} strokeWidth="1" />
            <line x1="200" y1="130" x2="310" y2="170" stroke={`${color}30`} strokeWidth="1" />
          </>
        )}
        {/* Strategy grid for Lily's */}
        {project.slug === "lilys-little-lunchboxes" && (
          <>
            <rect x="70" y="65" width="110" height="60" rx="8" fill={`${color}15`} stroke={color} strokeWidth="1.5" />
            <rect x="220" y="65" width="110" height="60" rx="8" fill={`${color}15`} stroke={color} strokeWidth="1.5" />
            <rect x="70" y="155" width="110" height="60" rx="8" fill={`${color}10`} stroke={color} strokeWidth="1" />
            <rect x="220" y="155" width="110" height="60" rx="8" fill={`${color}10`} stroke={color} strokeWidth="1" />
            <line x1="180" y1="95" x2="220" y2="95" stroke={`${color}60`} strokeWidth="1.5" strokeDasharray="4 3" />
            <line x1="125" y1="125" x2="125" y2="155" stroke={`${color}60`} strokeWidth="1.5" strokeDasharray="4 3" />
            <line x1="275" y1="125" x2="275" y2="155" stroke={`${color}60`} strokeWidth="1.5" strokeDasharray="4 3" />
          </>
        )}
        {/* Content grid for portfolio */}
        {project.slug === "content-portfolio" && (
          <>
            <rect x="70" y="60" width="120" height="80" rx="8" fill={`${color}20`} />
            <rect x="210" y="60" width="120" height="38" rx="8" fill={`${color}15`} />
            <rect x="210" y="104" width="120" height="38" rx="8" fill={`${color}10`} />
            <rect x="70" y="158" width="56" height="56" rx="8" fill={`${color}15`} />
            <rect x="136" y="158" width="56" height="56" rx="8" fill={`${color}20`} />
            <rect x="210" y="158" width="56" height="56" rx="8" fill={`${color}15`} />
            <rect x="274" y="158" width="56" height="56" rx="8" fill={`${color}10`} />
          </>
        )}
        {/* Portfolio/code for website */}
        {project.slug === "portfolio-website" && (
          <>
            <rect x="60" y="55" width="280" height="160" rx="12" fill={`${color}08`} stroke={`${color}30`} strokeWidth="1.5" />
            <rect x="76" y="80" width="100" height="8" rx="4" fill={`${color}40`} />
            <rect x="76" y="96" width="160" height="6" rx="3" fill={`${color}20`} />
            <rect x="76" y="110" width="140" height="6" rx="3" fill={`${color}20`} />
            <rect x="76" y="130" width="72" height="26" rx="13" fill={`${color}`} opacity="0.85" />
            <rect x="160" y="130" width="72" height="26" rx="13" fill={`${color}20`} stroke={`${color}40`} strokeWidth="1" />
          </>
        )}
        {/* Project number watermark */}
        <text
          x="340"
          y="220"
          fontSize="48"
          fontWeight="700"
          fill={`${color}10`}
          textAnchor="middle"
          fontFamily="system-ui"
        >
          {project.number}
        </text>
      </svg>
    </div>
  );
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="project-card group"
      aria-label={`Project: ${project.title} — ${project.subtitle}`}
    >
      {/* Preview image area */}
      <div className="relative h-52 sm:h-60 overflow-hidden bg-[var(--color-surface)]">
        <ProjectPreview project={project} />
        {/* Project number overlay */}
        <div className="absolute top-4 left-4">
          <span className="project-number bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full border border-[var(--color-border)] text-[10px]">
            {project.number}
          </span>
        </div>
        {/* Project label */}
        {project.projectLabel && (
          <div className="absolute top-4 right-4">
            <span className="text-[10px] font-medium bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full border border-[var(--color-border)] text-[var(--color-muted)]">
              {project.projectLabel}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 md:p-7">
        {/* Categories */}
        <div className="flex flex-wrap gap-1.5 mb-4" aria-label="Project categories">
          {project.categories.map((cat) => (
            <span
              key={cat}
              className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${categoryColor(cat)}`}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-[var(--color-fg)] tracking-tight mb-1 leading-snug">
          {project.title}
        </h3>
        <p className="text-sm text-[var(--color-accent)] font-medium mb-3">
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6 line-clamp-3">
          {project.tagline}
        </p>

        {/* Platforms */}
        {project.platforms && project.platforms.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-5" aria-label="Platforms used">
            {project.platforms.slice(0, 4).map((platform) => (
              <span
                key={platform}
                className="text-[10px] text-[var(--color-muted)] bg-[var(--color-surface)] border border-[var(--color-border)] px-2 py-0.5 rounded"
              >
                {platform}
              </span>
            ))}
            {project.platforms.length > 4 && (
              <span className="text-[10px] text-[var(--color-muted-light)] px-2 py-0.5">
                +{project.platforms.length - 4} more
              </span>
            )}
          </div>
        )}

        {/* CTA */}
        <Link
          href={`/work/${project.slug}`}
          className="btn-primary text-sm py-2.5 px-5 inline-flex"
          aria-label={`View case study: ${project.title}`}
        >
          View Case Study
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2.5 7H11.5M11.5 7L8 3.5M11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </motion.article>
  );
}
