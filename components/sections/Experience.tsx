import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Image from "next/image";
import Link from "next/link";

interface ExperienceItem {
  role: string;
  company: string;
  companyLogo?: string;
  location?: string;
  dates: string;
  teamScope?: string;
  individualResponsibilities: string[];
  personalDeliverables: string[];
  verifiedResults: string[];
  skillsDeveloped: string[];
  links?: { label: string; href: string; external?: boolean }[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Video Editor & Content Creator",
    company: "Mekong ASEAN",
    companyLogo: "/images/mekong-asean-logo.png",
    dates: "September 2025 – Present",
    teamScope:
      "Partnered in a newsroom production team of 5+ journalists, editors, and designers; collaborated with 15+ clients and internal editorial stakeholders to coordinate publishing flow.",
    individualResponsibilities: [
      "Assembled and edited mobile-first vertical news videos using CapCut and DaVinci Resolve.",
      "Designed dynamic, high-contrast captions and typography to maximize comprehension for silent mobile viewing.",
      "Structured algorithmic hook pacing within the initial 3 seconds to optimize viewer retention on TikTok, Facebook, and YouTube Shorts.",
      "Managed rapid revision cycles and tight turnaround times following breaking economic developments.",
    ],
    personalDeliverables: [
      "Produced 30–40 published short-form news videos each month across Facebook, TikTok, and YouTube.",
      "Simultaneously managed 5–8 video projects from raw script to published social asset.",
    ],
    verifiedResults: [
      "100,000+ monthly views reached across social media channels.",
      "100% on-time delivery rate maintained across all assigned projects under daily editorial deadlines.",
      "20% average reduction in editing turnaround time achieved through template libraries and keyboard workflow optimization.",
    ],
    skillsDeveloped: [
      "Short-form Video Editing",
      "Algorithmic Retention Hook Design",
      "Typographic Overlay & Subtitle Design",
      "High-Pressure Workflow Organization",
      "Cross-functional Newsroom Collaboration",
    ],
    links: [
      { label: "View Case Study & Videos", href: "/work/content-portfolio" },
      { label: "Published TikTok Channel", href: "https://www.tiktok.com/@kinhtevietnam_asean", external: true },
    ],
  },
  {
    role: "Administrative Assistant",
    company: "Senadheera & Gordon Lawyers (SG Lawyers)",
    location: "Glen Waverley, Victoria, Australia",
    dates: "July 2025 – July 2026",
    teamScope:
      "Legal practice administrative operations supporting principal solicitors, legal staff, and diverse multicultural clients.",
    individualResponsibilities: [
      "Managed the front desk, delivering welcoming, empathetic, and professional client service.",
      "Scheduled and coordinated client appointments weekly while managing high-volume telephone and email enquiries.",
      "Entered and maintained sensitive client records in legal database systems with strict confidentiality.",
      "Coordinated documentation procedures, filings, and urgent administrative requests under strict timelines.",
    ],
    personalDeliverables: [
      "Daily reception operations and appointment schedules.",
      "Accurately updated and verified client databases and matter files.",
    ],
    verifiedResults: [
      "Maintained 100% confidentiality compliance handling sensitive legal records over a 12-month tenure.",
      "Zero reported scheduling conflicts through disciplined calendar coordination.",
    ],
    skillsDeveloped: [
      "Client Relationship Management",
      "Front-Desk Administration",
      "Confidential Data Governance",
      "Empathetic & Professional Communication",
      "Time Management Under Pressure",
    ],
  },
  {
    role: "Volunteer Activity Coordinator",
    company: "Charity Program for Children with Disabilities",
    location: "Vietnam",
    dates: "December 2023",
    teamScope:
      "Community volunteer group supporting children with diverse physical and cognitive needs and their families.",
    individualResponsibilities: [
      "Coordinated inclusive play and interactive learning activities during community events.",
      "Communicated empathetically with children, families, and team volunteers to foster a safe, welcoming environment.",
      "Adapted activities dynamically to meet varied physical and sensory requirements.",
    ],
    personalDeliverables: [
      "Organized daily inclusive activity sessions and community engagement workshops.",
    ],
    verifiedResults: [
      "Successfully created an accessible, secure event space that fostered community participation and connection.",
    ],
    skillsDeveloped: [
      "Empathetic Communication",
      "Active Listening",
      "Situational Adaptability",
      "Inclusive Group Coordination",
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
          <p className="section-label mb-4">Background</p>
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <h2
              id="experience-heading"
              className="display-md text-[var(--color-fg)] max-w-xl"
            >
              Professional Experience
            </h2>
            <p className="text-[var(--color-muted)] text-base max-w-md md:text-right">
              Demonstrated contributions across newsroom video editing, legal administration, and community engagement.
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-10">
          {experiences.map((job, index) => (
            <AnimatedSection
              key={`${job.company}-${job.role}`}
              delay={index * 0.08}
              className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-7 md:p-10 shadow-[var(--shadow-soft)]"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6 pb-6 border-b border-[var(--color-border)]">
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-fg)] tracking-tight mb-1.5">
                    {job.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-[var(--color-accent)] font-semibold text-base">
                      {job.company}
                    </span>
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
                <div className="text-sm font-semibold text-[var(--color-muted)] md:text-right shrink-0 bg-[var(--color-surface)] px-3 py-1.5 rounded-full border border-[var(--color-border)] inline-block">
                  {job.dates}
                </div>
              </div>

              {/* Team Scope */}
              {job.teamScope && (
                <div className="mb-6 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-md)] p-4">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-fg)] mb-1">
                    Team Scope & Setting
                  </p>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                    {job.teamScope}
                  </p>
                </div>
              )}

              {/* Grid: Responsibilities & Deliverables vs Results */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                {/* Left: Individual Responsibilities & Personal Deliverables */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-fg)] mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]" aria-hidden="true" />
                      Individual Responsibilities
                    </h4>
                    <ul className="space-y-2.5" role="list">
                      {job.individualResponsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--color-muted)] leading-relaxed">
                          <span className="text-[var(--color-accent)] font-bold shrink-0 mt-0.5">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-fg)] mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-600" aria-hidden="true" />
                      Personal Deliverables
                    </h4>
                    <ul className="space-y-2.5" role="list">
                      {job.personalDeliverables.map((deliv, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--color-muted)] leading-relaxed">
                          <span className="text-emerald-600 font-bold shrink-0 mt-0.5">•</span>
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right: Verified Results & Skills */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-fg)] mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-600" aria-hidden="true" />
                      Verified Measurable Results
                    </h4>
                    <ul className="space-y-2.5" role="list">
                      {job.verifiedResults.map((result, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--color-muted)] leading-relaxed bg-[var(--color-surface)] p-2.5 rounded-lg border border-[var(--color-border)]">
                          <svg className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="font-medium text-[var(--color-fg)]">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-muted-light)] mb-3">
                      Skills Developed
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
              </div>

              {/* Action Links */}
              {job.links && job.links.length > 0 && (
                <div className="pt-5 border-t border-[var(--color-border)] flex flex-wrap gap-3">
                  {job.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="btn-primary text-xs py-2 px-4"
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
