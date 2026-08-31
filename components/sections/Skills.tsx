import { AnimatedSection } from "@/components/ui/AnimatedSection";

const skillGroups = [
  {
    category: "Marketing",
    icon: "📊",
    skills: [
      "Digital Marketing",
      "Social Media Strategy",
      "Content Strategy",
      "Audience Analysis",
      "Campaign Planning",
      "Integrated Marketing Communications",
    ],
  },
  {
    category: "Content",
    icon: "✍️",
    skills: [
      "Video Editing",
      "Content Creation",
      "Short-form Content Production",
      "Visual Storytelling",
      "Social Media Content Production",
      "AI for Digital Content Creation",
    ],
  },
  {
    category: "Analytics",
    icon: "🔎",
    skills: [
      "Social Media Analytics",
      "Audience Research",
      "Engagement Analysis",
      "Data Interpretation",
      "Campaign Performance Measurement",
    ],
  },
  {
    category: "Professional Skills",
    icon: "🤝",
    skills: [
      "Interpersonal Communication",
      "Client Relationship Management",
      "Team Collaboration",
      "Front-desk Administration",
      "Time Management",
      "Attention to Detail",
      "Problem Solving",
    ],
  },
];

const confirmedTools = [
  "DaVinci Resolve",
  "CapCut",
  "Canva",
  "Microsoft Excel",
  "Microsoft PowerPoint",
  "Google Workspace",
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
          <p className="section-label mb-5">Capabilities</p>
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <h2
            id="skills-heading"
            className="display-md text-[var(--color-fg)] mb-14"
          >
            Skills & Capabilities
          </h2>
        </AnimatedSection>

        {/* Skill groups grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
          {skillGroups.map((group, gi) => (
            <AnimatedSection
              key={group.category}
              delay={gi * 0.08}
              className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-6 shadow-[var(--shadow-soft)]"
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="text-xl" aria-hidden="true">{group.icon}</span>
                <h3 className="font-semibold text-[var(--color-fg)] text-sm tracking-tight">
                  {group.category}
                </h3>
              </div>
              <ul className="space-y-2" role="list" aria-label={`${group.category} skills`}>
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-2">
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] flex-shrink-0 mt-2"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-[var(--color-muted)]">{skill}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          ))}
        </div>

        {/* Tools */}
        <AnimatedSection delay={0.15}>
          <div className="border-t border-[var(--color-border)] pt-10">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--color-muted-light)] mb-5">
              Tools & Software
            </h3>
            <div
              className="flex flex-wrap gap-3"
              role="list"
              aria-label="Tools and software"
            >
              {confirmedTools.map((tool) => (
                <span
                  key={tool}
                  role="listitem"
                  className="skill-tag text-xs"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
