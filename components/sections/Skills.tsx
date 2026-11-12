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
    category: "Marketing Strategy & Brand Analytics",
    description: "Data-driven audience research, brand equity diagnostic frameworks, and commercial marketing plans.",
    skills: [
      {
        name: "Social Media Channel Auditing",
        evidence: "Audited 279 posts to establish platform baselines in ALM216",
        href: "/work/nac-social-media-strategy",
      },
      {
        name: "Customer-Based Brand Equity (CBBE)",
        evidence: "Evaluated 7 brand elements and brand resonance in MMK280",
        href: "/work/pokemon-brand-audit",
      },
      {
        name: "Audience Segmentation & Persona Profiling",
        evidence: "Constructed student demographic profiles in MMK101 & ALM216",
        href: "/work/lilys-little-lunchboxes",
      },
      {
        name: "Integrated Marketing Communications (IMC)",
        evidence: "Designed campus and TikTok creator activation plans",
        href: "/work/lilys-little-lunchboxes",
      },
    ],
  },
  {
    category: "Content & Video Production",
    description: "High-cadence vertical newsroom editing engineered for silent viewing and mobile retention.",
    skills: [
      {
        name: "Short-Form Video Editing",
        evidence: "Edited 30–40 news videos/month in DaVinci Resolve & CapCut",
        href: "/work/content-portfolio",
      },
      {
        name: "Algorithmic Hook & Retention Pacing",
        evidence: "Engineered 3-second opening hooks achieving 100k+ monthly views",
        href: "/work/content-portfolio",
      },
      {
        name: "Mobile Subtitle & Typographic Design",
        evidence: "Designed dual-level captions for 100% silent comprehension",
        href: "/work/content-portfolio",
      },
    ],
  },
  {
    category: "Operations & Client Administration",
    description: "Front-desk client management, confidential documentation, and structured project governance.",
    skills: [
      {
        name: "Front-Desk Client Relationship Management",
        evidence: "Managed client reception and weekly scheduling at SG Lawyers",
      },
      {
        name: "Confidential Data Governance",
        evidence: "100% compliance record handling sensitive legal client files",
      },
      {
        name: "Cross-Functional Collaboration",
        evidence: "Coordinated daily with 15+ newsroom and client stakeholders",
      },
      {
        name: "Empathetic Communication & Dispute Handling",
        evidence: "Demonstrated across legal client intake and volunteer programs",
      },
    ],
  },
];

const verifiedTools = [
  { name: "DaVinci Resolve", category: "Video Production" },
  { name: "CapCut", category: "Short-Form Video" },
  { name: "Canva", category: "Visual Design" },
  { name: "Microsoft Excel", category: "Data & Auditing" },
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
          <p className="section-label mb-4">Capabilities</p>
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <h2
              id="skills-heading"
              className="display-md text-[var(--color-fg)] max-w-xl"
            >
              Skills Grounded in Evidence
            </h2>
            <p className="text-[var(--color-muted)] text-base max-w-md md:text-right">
              Every documented skill corresponds directly to a completed university research project or professional role.
            </p>
          </div>
        </AnimatedSection>

        {/* 3 Core Skill Groups */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {skillGroups.map((group, gi) => (
            <AnimatedSection
              key={group.category}
              delay={gi * 0.08}
              className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-7 flex flex-col justify-between shadow-[var(--shadow-soft)]"
            >
              <div>
                <h3 className="font-bold text-[var(--color-fg)] text-lg tracking-tight mb-2">
                  {group.category}
                </h3>
                <p className="text-xs text-[var(--color-muted)] leading-relaxed mb-6">
                  {group.description}
                </p>

                <div className="space-y-4">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="border-t border-[var(--color-border)] pt-3"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-sm font-semibold text-[var(--color-fg)]">
                          {skill.name}
                        </span>
                      </div>
                      <p className="text-xs text-[var(--color-muted)] leading-relaxed mb-1.5">
                        {skill.evidence}
                      </p>
                      {skill.href && (
                        <Link
                          href={skill.href}
                          className="text-[11px] font-semibold text-[var(--color-accent)] hover:underline inline-flex items-center gap-1"
                        >
                          View Evidence Project
                          <span aria-hidden="true">→</span>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Verified Tools */}
        <AnimatedSection delay={0.15}>
          <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-7 md:p-8">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--color-muted-light)] mb-4">
              Verified Tools & Software
            </h3>
            <div className="flex flex-wrap gap-2.5" role="list" aria-label="Tools list">
              {verifiedTools.map((tool) => (
                <div
                  key={tool.name}
                  className="bg-white border border-[var(--color-border)] px-3.5 py-1.5 rounded-full text-xs font-medium text-[var(--color-fg)] shadow-xs flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" aria-hidden="true" />
                  <span>{tool.name}</span>
                  <span className="text-[10px] text-[var(--color-muted-light)] border-l border-[var(--color-border)] pl-2">
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
