import { AnimatedSection } from "@/components/ui/AnimatedSection";

interface JobEntry {
  role: string;
  company: string;
  location?: string;
  dates: string;
  description?: string;
  responsibilities: string[];
}

const experiences: JobEntry[] = [
  {
    role: "Video Editor & Content Creator",
    company: "Digital Newspaper [Ben to confirm newspaper name]",
    location: "Remote / Melbourne, Australia",
    dates: "September 2025 – Present",
    description:
      "Responsible for producing high-quality short-form video reports across key social channels under strict newsroom deadlines.",
    responsibilities: [
      "Partnered with a team of 5+ journalists, editors, and designers to produce 30+ short-form news videos each month across Facebook, TikTok, and YouTube.",
      "Managed 5–8 video projects simultaneously, maintaining 100% on-time delivery while meeting editorial and quality standards.",
      "Communicated daily with 15+ clients and internal stakeholders to refine project requirements, address feedback, and optimize publishing flow.",
      "Edited mobile-first videos using CapCut and DaVinci Resolve, ensuring high-impact storytelling, accurate subtitles, and consistent visual branding.",
      "Developed social video assets that reached a combined average of 100,000+ monthly views across platform channels.",
      "Optimized production steps to reduce average editing turnaround times by 20% through improved workflow organization."
    ],
  },
  {
    role: "Administrative Assistant",
    company: "Senadheera & Gordon Lawyers (SG Lawyers)",
    location: "Glen Waverley, Victoria, Australia",
    dates: "July 2025 – July 2026",
    description:
      "Managed front desk operations and client correspondence in a busy, fast-paced legal environment.",
    responsibilities: [
      "Welcomed clients and visitors, delivering professional and empathetic front-desk customer service.",
      "Scheduled and coordinated client appointments weekly while managing phone calls and email enquiries.",
      "Entered and maintained sensitive client records in database systems with high accuracy and strict confidentiality.",
      "Coordinated multiple administrative requests and documentation procedures under tight timelines.",
      "Strengthened interpersonal communication, dispute resolution, and time management capabilities."
    ],
  },
  {
    role: "Volunteer Activity Coordinator",
    company: "Charity Program for Children with Disabilities",
    location: "Vietnam",
    dates: "December 2023",
    description:
      "Supported children with disabilities and coordinated community engagement activities.",
    responsibilities: [
      "Coordinated inclusive play and learning activities for children with disabilities during local community events.",
      "Communicated respectfully and empathetically with children, families, and team volunteers to foster a safe environment.",
      "Demonstrated patience, flexibility, and adaptation to support children with diverse cognitive and physical needs."
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
          <p className="section-label mb-5">Experience</p>
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <h2
            id="experience-heading"
            className="display-md text-[var(--color-fg)] mb-12"
          >
            Professional Experience
          </h2>
        </AnimatedSection>

        <div className="space-y-12">
          {experiences.map((job, index) => (
            <AnimatedSection
              key={`${job.company}-${job.role}`}
              delay={index * 0.08}
              className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-8 md:p-10 shadow-[var(--shadow-soft)]"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-[var(--color-fg)] tracking-tight mb-1">
                    {job.role}
                  </h3>
                  <p className="text-[var(--color-accent)] font-medium">
                    {job.company}
                  </p>
                  {job.location && (
                    <p className="text-xs text-[var(--color-muted)] mt-1">
                      {job.location}
                    </p>
                  )}
                </div>
                <div className="text-sm font-medium text-[var(--color-muted)] md:text-right shrink-0">
                  {job.dates}
                </div>
              </div>

              {job.description && (
                <p className="text-[var(--color-muted)] text-sm mb-6 leading-relaxed italic">
                  {job.description}
                </p>
              )}

              <div className="border-t border-[var(--color-border)] pt-6">
                <h4 className="text-[10px] uppercase tracking-widest text-[var(--color-muted-light)] font-bold mb-4">
                  Key Responsibilities & Achievements
                </h4>
                <ul className="space-y-3" role="list">
                  {job.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] flex-shrink-0 mt-2"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-[var(--color-muted)] leading-relaxed">
                        {resp}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
