import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Image from "next/image";
import Link from "next/link";

interface VideoShowcaseItem {
  title: string;
  role: string;
  platform: string;
  description: string;
  tools: string[];
  src: string;
  thumbnail: string;
}

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  department?: string;
  companyLogo?: string;
  location?: string;
  dates: string;
  responsibilities: string[];
  skillsDeveloped: string[];
  videos?: VideoShowcaseItem[];
  links?: { label: string; href: string; external?: boolean }[];
  note?: string;
}

const experiences: ExperienceItem[] = [
  // ─── 1. MEKONG ASEAN ───
  {
    id: "mekong-asean",
    role: "Video Editor & Content Creator",
    company: "Mekong ASEAN",
    companyLogo: "/images/mekong-asean-logo.png",
    dates: "September 2025 – Present",
    responsibilities: [
      "Produced 30+ short-form news videos monthly in collaboration with journalists, editors, and designers.",
      "Managed 5–8 video projects simultaneously, maintaining 100% on-time delivery while meeting production quality standards in a high-pressure production environment.",
      "Edited videos using CapCut and DaVinci Resolve for Facebook, TikTok, and YouTube.",
      "Reduced average editing turnaround time by 20% through improved workflow organisation.",
    ],
    skillsDeveloped: [
      "Short-form Video Editing",
      "Algorithmic Retention Hook Design",
      "Typographic Subtitle Design for Silent Viewing",
      "Cross-functional Newsroom Collaboration",
      "Fast-turnaround Workflow Organisation",
    ],
    videos: [
      {
        title: "Sacombank Leadership News",
        role: "Video Editor & Content Creator",
        platform: "Facebook, TikTok & YouTube Shorts",
        description:
          "Vertical economic news segment analyzing Sacombank leadership restructuring. Implemented dynamic captions, high-contrast typography, and tight pacing for mobile silent viewing.",
        tools: ["DaVinci Resolve", "CapCut"],
        src: "/images/projects/video/scb-leadership-news.mp4",
        thumbnail: "/images/projects/video/scb-poster.png",
      },
      {
        title: "Masan Executive Appointments",
        role: "Video Editor & Content Creator",
        platform: "Facebook, TikTok & YouTube Shorts",
        description:
          "Editorial business report detailing senior executive board appointments at Masan Group. Structured narrative with opening visual hooks, corporate b-roll transitions, and synchronized text overlays.",
        tools: ["DaVinci Resolve", "CapCut"],
        src: "/images/projects/video/masan-executive-appointments.mp4",
        thumbnail: "/images/projects/video/masan-poster.png",
      },
    ],
    links: [
      { label: "View Detailed Video Case Study", href: "/work/content-portfolio" },
      { label: "Watch on TikTok (@kinhtevietnam_asean)", href: "https://www.tiktok.com/@kinhtevietnam_asean", external: true },
    ],
  },

  // ─── 2. FPT TELECOM ───
  {
    id: "fpt-telecom",
    role: "Purchasing Department Intern",
    company: "FPT Telecom",
    department: "Purchasing Department (Ban Mua Hàng)",
    dates: "November 2026 – Present",
    responsibilities: [
      "Processed purchase orders and reviewed supporting documents in accordance with internal procurement procedures.",
      "Checked purchasing requests for accuracy and completeness before further processing.",
      "Maintained supplier information and procurement records to support daily business operations.",
      "Followed internal purchasing regulations and confidentiality requirements when handling procurement documentation.",
    ],
    skillsDeveloped: [
      "Business Documentation & Procurement Administration",
      "Purchase Order Processing",
      "Spreadsheet Management & Attention to Detail",
      "Cross-Departmental Business Communication",
      "Records Management & Confidentiality Protocols",
    ],
  },

  // ─── 3. SENADHEERA & GORDON LAW FIRM ───
  {
    id: "senadheera-gordon",
    role: "Administrative Assistant",
    company: "SENADHEERA & GORDON Law Firm",
    location: "Glen Waverley, Victoria, Australia",
    dates: "July 2025 – August 2026",
    responsibilities: [
      "Assisted approximately 10–20 clients and visitors daily while managing front desk operations.",
      "Scheduled client appointments and responded to enquiries in person and by phone.",
      "Maintained accurate client records while protecting confidential information.",
    ],
    skillsDeveloped: [
      "Front-Desk Client Relationship Management",
      "Empathetic & Professional Communication",
      "Confidential Data Governance",
      "Calendar Coordination & Scheduling",
      "Time Management Under Pressure",
    ],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="section bg-[var(--color-bg)]"
    >
      <div className="container-site">
        <AnimatedSection>
          <p className="section-label mb-4">Experience</p>
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <h2
                id="experience-heading"
                className="display-md text-[var(--color-fg)] max-w-xl mb-2"
              >
                Professional Experience
              </h2>
              <p className="text-[var(--color-accent)] font-semibold text-base">
                Digital Content Production • Procurement Operations • Legal Administration
              </p>
            </div>
            <p className="text-[var(--color-muted)] text-base max-w-md md:text-right">
              Demonstrated contributions across fast-turnaround video newsrooms, business procurement administration, and frontline client service.
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-12">
          {experiences.map((job, index) => (
            <AnimatedSection
              key={job.id}
              delay={index * 0.08}
              className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-7 md:p-10 shadow-[var(--shadow-soft)]"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6 pb-6 border-b border-[var(--color-border)]">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[var(--color-fg)] tracking-tight mb-1.5">
                    {job.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-[var(--color-accent)] font-bold text-base md:text-lg">
                      {job.company}
                    </span>
                    {job.department && (
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                        {job.department}
                      </span>
                    )}
                    {job.companyLogo && (
                      <Image
                        src={job.companyLogo}
                        alt={`${job.company} logo`}
                        width={110}
                        height={32}
                        className="h-6 w-auto object-contain inline-block"
                      />
                    )}
                    {job.location && (
                      <>
                        <span className="text-[var(--color-border)] select-none" aria-hidden="true">•</span>
                        <span className="text-xs text-[var(--color-muted)] font-medium">
                          {job.location}
                        </span>
                      </>
                    )}
                  </div>
                </div>
                <div className="text-xs md:text-sm font-semibold text-[var(--color-muted)] md:text-right shrink-0 bg-[var(--color-surface)] px-3.5 py-1.5 rounded-full border border-[var(--color-border)] inline-block">
                  {job.dates}
                </div>
              </div>

              {/* Grid: Responsibilities vs Skills Developed */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-6">
                {/* Left: Responsibilities */}
                <div className="lg:col-span-7 space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-fg)] mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]" aria-hidden="true" />
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2.5" role="list">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--color-muted)] leading-relaxed">
                        <span className="text-[var(--color-accent)] font-bold shrink-0 mt-0.5">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Skills Developed */}
                <div className="lg:col-span-5 space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-muted-light)] mb-3">
                    Transferable Skills & Capabilities
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {job.skillsDeveloped.map((skill) => (
                      <span key={skill} className="skill-tag text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* INTEGRATED VIDEO PORTFOLIO (for Mekong ASEAN) */}
              {job.videos && job.videos.length > 0 && (
                <div className="mt-8 pt-8 border-t border-[var(--color-border)]">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                    <div>
                      <h4 className="text-lg font-bold text-[var(--color-fg)] tracking-tight">
                        Featured Short-Form Video Portfolio
                      </h4>
                      <p className="text-xs text-[var(--color-muted)] mt-0.5">
                        Verified 9:16 portrait video reports edited for Mekong ASEAN digital newspaper mobile channels.
                      </p>
                    </div>
                    <a
                      href="https://www.tiktok.com/@kinhtevietnam_asean"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-xs py-2 px-4 inline-flex items-center gap-2 self-start sm:self-auto shrink-0"
                    >
                      <span>Watch on TikTok</span>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>

                  {/* 2 Videos Side-by-Side on Desktop, Stacked on Mobile */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                    {job.videos.map((video) => (
                      <div
                        key={video.title}
                        className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-lg)] overflow-hidden shadow-xs flex flex-col"
                      >
                        {/* 9:16 Video player */}
                        <div className="relative aspect-[9/16] bg-neutral-950 flex items-center justify-center overflow-hidden">
                          <video
                            controls
                            preload="metadata"
                            playsInline
                            className="w-full h-full object-cover"
                            poster={video.thumbnail}
                          >
                            <source src={video.src} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div className="p-4 flex-1 flex flex-col justify-between">
                          <div>
                            <h5 className="text-sm font-semibold text-[var(--color-fg)] mb-1 leading-snug">
                              {video.title}
                            </h5>
                            <p className="text-[11px] text-[var(--color-muted)] mb-2">
                              <span className="font-semibold text-[var(--color-fg)]">Role:</span> {video.role}
                            </p>
                            <p className="text-xs text-[var(--color-muted)] leading-relaxed">
                              {video.description}
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-3 pt-3 border-t border-[var(--color-border)]">
                            {video.tools.map((t) => (
                              <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-[var(--color-card)] border border-[var(--color-border)] text-[var(--color-muted)] font-mono">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Links */}
              {job.links && job.links.length > 0 && (
                <div className="pt-6 border-t border-[var(--color-border)] flex flex-wrap gap-3 mt-6">
                  {job.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="btn-secondary text-xs py-2 px-4"
                    >
                      {link.label}
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  ))}
                </div>
              )}
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
