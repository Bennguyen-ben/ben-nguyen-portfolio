import { AnimatedSection } from "@/components/ui/AnimatedSection";

interface ProgressionStep {
  period: string;
  stageTitle: string;
  organization: string;
  focusArea: string;
  transferableSkills: string[];
  documentedOutcome: string;
}

const progressionSteps: ProgressionStep[] = [
  {
    period: "December 2023",
    stageTitle: "Community & Inclusive Coordination",
    organization: "Charity Program for Children with Disabilities (Vietnam)",
    focusArea: "Human-centered communication & inclusive event support",
    transferableSkills: [
      "Empathetic communication with diverse families",
      "Active listening and patience under shifting conditions",
      "Situational adaptability in community group settings",
    ],
    documentedOutcome:
      "Successfully facilitated inclusive play and interactive workshops supporting children with cognitive and physical disabilities.",
  },
  {
    period: "July 2025 – July 2026",
    stageTitle: "Administrative & Operational Operations",
    organization: "Senadheera & Gordon Lawyers (SG Lawyers)",
    focusArea: "Client relationship management & confidential legal administration",
    transferableSkills: [
      "Front-desk client intake and empathetic dispute handling",
      "Confidential records management and legal database governance",
      "Systematic calendar and appointment scheduling under pressure",
    ],
    documentedOutcome:
      "Maintained 100% confidentiality compliance on all client records with zero scheduling conflicts across a 12-month professional legal tenure.",
  },
  {
    period: "September 2025 – Present",
    stageTitle: "High-Cadence Content Production",
    organization: "Mekong ASEAN Digital Newspaper",
    focusArea: "Fast-turnaround short-form news editing & mobile retention",
    transferableSkills: [
      "Algorithmic retention pacing and 3-second hook construction",
      "Dynamic subtitle styling and typography for silent mobile viewing",
      "Cross-functional collaboration with journalists, editors, and clients",
      "Workflow template optimization in CapCut and DaVinci Resolve",
    ],
    documentedOutcome:
      "Delivered 30–40 published vertical news videos monthly with 100% on-time delivery; contributed to 100,000+ monthly views; reduced average turnaround time by 20%.",
  },
  {
    period: "July 2025 – Expected May 2028",
    stageTitle: "Strategic Marketing & Brand Analytics",
    organization: "Deakin University (Bachelor of Business)",
    focusArea: "Empirical audience research, brand equity & strategic marketing mix",
    transferableSkills: [
      "Empirical social media auditing across multiple platforms (ALM216)",
      "Customer-Based Brand Equity (CBBE) framework analysis (MMK280)",
      "Target demographic persona profiling & 4Ps marketing mix (MMK101)",
      "Competitive benchmarking and commercial feasibility modeling",
    ],
    documentedOutcome:
      "Authored 3 extensive strategic deliverables: a 279-post environmental social audit (NAC), a student ready-meal expansion plan (Lily's Little Lunchboxes), and a global brand audit report (The Pokémon Company).",
  },
];

export function CareerProgression() {
  return (
    <section
      id="progression"
      aria-labelledby="progression-heading"
      className="section bg-[var(--color-surface)] border-y border-[var(--color-border)]"
    >
      <div className="container-site">
        <AnimatedSection>
          <p className="section-label mb-4">Progression</p>
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <h2
              id="progression-heading"
              className="display-md text-[var(--color-fg)] max-w-xl"
            >
              Career Progression
            </h2>
            <p className="text-[var(--color-muted)] text-base max-w-md md:text-right">
              A cumulative development path linking frontline administration, high-cadence digital video production, and rigorous academic marketing strategy.
            </p>
          </div>
        </AnimatedSection>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {progressionSteps.map((step, index) => (
            <AnimatedSection
              key={step.stageTitle}
              delay={index * 0.08}
              className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-7 md:p-8 flex flex-col justify-between shadow-[var(--shadow-soft)] hover:border-[var(--color-accent)] transition-all"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-xs font-bold text-[var(--color-accent)] bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                    {step.period}
                  </span>
                  <span className="text-[10px] font-mono text-[var(--color-muted-light)]">
                    Phase 0{index + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[var(--color-fg)] tracking-tight mb-1">
                  {step.stageTitle}
                </h3>
                <p className="text-sm font-medium text-[var(--color-accent)] mb-3">
                  {step.organization}
                </p>
                <p className="text-xs text-[var(--color-muted)] mb-5 italic">
                  Focus: {step.focusArea}
                </p>

                {/* Transferable Skills */}
                <div className="mb-5">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-fg)] mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                    Transferable Skills Developed
                  </p>
                  <ul className="space-y-1.5" role="list">
                    {step.transferableSkills.map((skill, i) => (
                      <li key={i} className="text-xs text-[var(--color-muted)] flex items-start gap-2">
                        <span className="text-[var(--color-accent)] mt-0.5">•</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Documented Outcome */}
              <div className="pt-4 border-t border-[var(--color-border)] bg-[var(--color-surface)] -mx-7 -mb-7 md:-mx-8 md:-mb-8 p-5 rounded-b-[var(--radius-lg)]">
                <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 mb-1 flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Documented Outcome
                </p>
                <p className="text-xs text-[var(--color-fg)] font-medium leading-relaxed">
                  {step.documentedOutcome}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

