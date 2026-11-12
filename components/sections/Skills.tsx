import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Link from "next/link";

interface SkillItem {
  name: string;
  evidence: string;
  href?: string;
}

interface SkillGroup {
  category: string;
  description: string;
  skills: SkillItem[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Digital Content & Video Production",
    description: "High-cadence vertical newsroom editing, mobile hook design, and typographic captions for silent viewing.",
    skills: [
      {
        name: "Digital Content Creation",
        evidence: "Produced 30–40 published vertical video reports monthly for newsroom channels",
        href: "/work/content-portfolio",
      },
      {
        name: "Video Editing (DaVinci Resolve & CapCut)",
        evidence: "Engineered pacing, color correction, and dynamic subtitles for mobile news reports",
        href: "/work/content-portfolio",
      },
      {
        name: "Content Planning & Scheduling",
        evidence: "Managed 5–8 concurrent video projects from script to publication under tight daily deadlines",
        href: "/work/content-portfolio",
      },
    ],
  },
  {
    category: "Social Media & Marketing Strategy",
    description: "Multi-channel auditing, audience segmentation, competitor benchmarking, and platform-tailored content strategies.",
    skills: [
      {
        name: "Social Media Strategy",
        evidence: "Formulated multi-channel engagement strategies across Instagram, TikTok, and YouTube in ALM216",
        href: "/work/nac-social-media-strategy",
      },
      {
        name: "Audience Research & Persona Profiling",
        evidence: "Constructed data-backed demographic and psychographic profiles in MMK101 & ALM216",
        href: "/work/lilys-little-lunchboxes",
      },
      {
        name: "Marketing Strategy & 4Ps Planning",
        evidence: "Developed end-to-end product, pricing, distribution, and promotional frameworks in MMK101",
        href: "/work/lilys-little-lunchboxes",
      },
      {
        name: "Consumer Behaviour Analysis",
        evidence: "Investigated student price elasticity and convenience drivers in Australian ready-meal markets",
        href: "/work/lilys-little-lunchboxes",
      },
      {
        name: "Competitor Analysis & Benchmarking",
        evidence: "Evaluated competitor positioning and engagement baselines across non-profit and commercial sectors",
        href: "/work/nac-social-media-strategy",
      },
      {
        name: "Brand Audit & Equity Diagnostic",
        evidence: "Applied Keller's CBBE framework to evaluate brand elements and resonance in MMK280",
        href: "/work/pokemon-brand-audit",
      },
    ],
  },
  {
    category: "Marketing Analytics & Business Operations",
    description: "Data-driven performance evaluation, spreadsheet modeling, and cross-functional administrative coordination.",
    skills: [
      {
        name: "Marketing Analytics & Auditing",
        evidence: "Audited 279 social media posts across 4 platforms to evaluate format-specific engagement rates",
        href: "/work/nac-social-media-strategy",
      },
      {
        name: "Data Visualisation & Spreadsheets (Excel)",
        evidence: "Organized complex dataset tables, engagement calculation models, and administrative records",
      },
      {
        name: "Professional Communication",
        evidence: "Maintained daily communication with 15+ newsroom stakeholders, clients, and legal clients",
      },
      {
        name: "Team Collaboration & Cross-Functional Work",
        evidence: "Collaborated seamlessly with journalists, designers, purchasing staff, and solicitors",
      },
    ],
  },
];

const verifiedTools = [
  { name: "DaVinci Resolve", category: "Video Editing" },
  { name: "CapCut", category: "Short-Form Video" },
  { name: "Microsoft Excel", category: "Data & Analytics" },
  { name: "Canva", category: "Content Design" },
  { name: "Microsoft PowerPoint", category: "Strategy Presentation" },
  { name: "Microsoft Word", category: "Formal Documentation" },
];

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="section bg-[var(--color-bg)]"
    >
      <div className="container-site">
        <AnimatedSection>
          <p className="section-label mb-4">Core Competencies</p>
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <h2
                id="skills-heading"
                className="display-md text-[var(--color-fg)] max-w-xl mb-2"
              >
                Skills & Capabilities
              </h2>
              <p className="text-[var(--color-accent)] font-semibold text-base">
                Digital Marketing • Social Media Strategy • Video Editing • Business Analysis
              </p>
            </div>
            <p className="text-[var(--color-muted)] text-base max-w-md md:text-right">
              All capabilities are grounded in published professional work, legal administration, and verified university marketing coursework.
            </p>
          </div>
        </AnimatedSection>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {skillGroups.map((group, groupIndex) => (
            <AnimatedSection
              key={group.category}
              delay={groupIndex * 0.08}
              className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-7 flex flex-col justify-between shadow-[var(--shadow-soft)]"
            >
              <div>
                <h3 className="text-base font-bold text-[var(--color-fg)] tracking-tight mb-2">
                  {group.category}
                </h3>
                <p className="text-xs text-[var(--color-muted)] mb-6 leading-relaxed">
                  {group.description}
                </p>

                <ul className="space-y-4" role="list">
                  {group.skills.map((skill) => (
                    <li key={skill.name} className="border-t border-[var(--color-border)] pt-3">
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-sm font-semibold text-[var(--color-fg)] leading-snug">
                          {skill.name}
                        </span>
                        {skill.href && (
                          <Link
                            href={skill.href}
                            className="text-[10px] text-[var(--color-accent)] hover:underline shrink-0 font-medium"
                            aria-label={`View evidence for ${skill.name}`}
                          >
                            Evidence →
                          </Link>
                        )}
                      </div>
                      <p className="text-xs text-[var(--color-muted)] mt-1 leading-relaxed">
                        {skill.evidence}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Verified Tools Bar */}
        <AnimatedSection delay={0.2}>
          <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-6 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--color-fg)]">
                  Verified Software & Tools
                </h4>
                <p className="text-xs text-[var(--color-muted)] mt-0.5">
                  Production and analytical software used across professional and academic deliverables.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {verifiedTools.map((tool) => (
                <div
                  key={tool.name}
                  className="bg-white border border-[var(--color-border)] rounded-full px-3.5 py-1.5 flex items-center gap-2 shadow-xs"
                >
                  <span className="text-xs font-semibold text-[var(--color-fg)]">
                    {tool.name}
                  </span>
                  <span className="text-[10px] font-medium text-[var(--color-muted-light)] bg-[var(--color-surface)] px-2 py-0.5 rounded-full">
                    {tool.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
