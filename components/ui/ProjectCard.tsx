"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

function categoryColor(cat: string): string {
  if (cat.includes("Social")) return "bg-blue-50 text-blue-700 border-blue-200";
  if (cat.includes("Analytics") || cat.includes("Data")) return "bg-violet-50 text-violet-700 border-violet-200";
  if (cat.includes("Marketing") || cat.includes("Consumer")) return "bg-emerald-50 text-emerald-700 border-emerald-200";
  if (cat.includes("Content") || cat.includes("Video") || cat.includes("Short")) return "bg-orange-50 text-orange-700 border-orange-200";
  if (cat.includes("Audience")) return "bg-sky-50 text-sky-700 border-sky-200";
  if (cat.includes("Brand") || cat.includes("Management")) return "bg-amber-50 text-amber-800 border-amber-200";
  return "bg-[var(--color-surface)] text-[var(--color-muted)] border-[var(--color-border)]";
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.55,
        delay: prefersReducedMotion ? 0 : index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="project-card group flex flex-col justify-between"
      aria-label={`Project: ${project.title} — ${project.subtitle}`}
    >
      <div>
        {/* Preview image / document thumbnail */}
        <div className="relative h-56 sm:h-60 overflow-hidden bg-[var(--color-surface)] border-b border-[var(--color-border)]">
          {project.previewImage ? (
            <div className="relative w-full h-full">
              <Image
                src={project.previewImage}
                alt={`${project.title} deliverable preview`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-stone-100 text-[var(--color-muted)]">
              <span className="text-xs font-mono">{project.number}</span>
            </div>
          )}

          {/* Unit pill */}
          {project.projectLabel && (
            <div className="absolute top-3.5 left-3.5 z-10">
              <span className="text-[10px] font-bold bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full border border-[var(--color-border)] text-[var(--color-accent)] shadow-sm">
                {project.projectLabel}
              </span>
            </div>
          )}

          {/* Project Year */}
          <div className="absolute top-3.5 right-3.5 z-10">
            <span className="text-[10px] font-semibold bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full border border-[var(--color-border)] text-[var(--color-muted)] shadow-sm">
              {project.year}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-7">
          {/* Categories */}
          <div className="flex flex-wrap gap-1.5 mb-3.5" aria-label="Project focus areas">
            {project.categories.slice(0, 3).map((cat) => (
              <span
                key={cat}
                className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full border ${categoryColor(cat)}`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Title & Subtitle */}
          <h3 className="text-lg font-semibold text-[var(--color-fg)] tracking-tight mb-1 leading-snug">
            {project.title}
          </h3>
          <p className="text-sm text-[var(--color-accent)] font-medium mb-3">
            {project.subtitle}
          </p>

          {/* Role / Contribution */}
          {project.role && (
            <div className="mb-3 flex items-start gap-1.5 text-xs text-[var(--color-muted)]">
              <span className="font-semibold text-[var(--color-fg)] shrink-0">Contribution:</span>
              <span>{project.role}</span>
            </div>
          )}

          {/* Brief Objective / Tagline */}
          <p className="text-xs text-[var(--color-muted)] leading-relaxed mb-4 line-clamp-2">
            {project.tagline}
          </p>

          {/* Verified Deliverables / Methods */}
          {project.verifiedDeliverable && (
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-sm)] p-3 mb-5">
              <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-fg)] mb-1">
                Main Deliverables & Analysis
              </p>
              <p className="text-xs text-[var(--color-muted)] leading-relaxed line-clamp-3">
                {project.verifiedDeliverable}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Action footer */}
      <div className="px-6 pb-6 md:px-7 md:pb-7 pt-0">
        <Link
          href={`/work/${project.slug}`}
          className="btn-primary w-full justify-center text-sm py-2.5 px-5"
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
