import { AnimatedSection } from "@/components/ui/AnimatedSection";

interface LearningItem {
  title: string;
  institution: string;
  period: string;
  type: string;
  description: string;
  topics: string[];
}

const verifiedLearning: LearningItem[] = [
  {
    title: "Bachelor of Business",
    institution: "Deakin University (Burwood, Melbourne)",
    period: "July 2025 – Expected May 2028",
    type: "Undergraduate Degree",
    description:
      "Majoring in Business and Digital Communication. Focusing on data-driven social media analytics, strategic brand management, consumer psychology, and integrated marketing communications.",
    topics: [
      "Brand Management (MMK280)",
      "Social Media Strategy (ALM216)",
      "Marketing Fundamentals (MMK101)",
      "Digital Communication Strategies",
    ],
  },
  {
    title: "Video Editing and AI for Digital Content Creation",
    institution: "Online Professional Course",
    period: "November 2024 (2 Weeks)",
    type: "Professional Certificate",
    description:
      "Intensive 2-week curriculum exploring AI-assisted workflows in digital content creation, vertical video assembly, visual pacing, and modern editing automation.",
    topics: [
      "AI Tools in Content Workflows",
      "Short-form Video Assembly",
      "Motion Typography & Audio Pacing",
    ],
  },
];

export function CurrentLearning() {
  return (
    <section
      id="learning"
      aria-labelledby="learning-heading"
      className="section bg-[var(--color-bg)]"
    >
      <div className="container-site">
        <AnimatedSection>
          <p className="section-label mb-4">Studies & Certifications</p>
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <h2
              id="learning-heading"
              className="display-md text-[var(--color-fg)] max-w-xl"
            >
              Current Studies & Certifications
            </h2>
            <p className="text-[var(--color-muted)] text-base max-w-md md:text-right">
              Formal academic degree coursework and verified technical credentials.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {verifiedLearning.map((item, index) => (
            <AnimatedSection
              key={item.title}
              delay={index * 0.08}
              className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-7 md:p-8 flex flex-col justify-between shadow-[var(--shadow-soft)]"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-accent)] bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                    {item.type}
                  </span>
                  <span className="text-xs font-semibold text-[var(--color-muted)]">
                    {item.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[var(--color-fg)] tracking-tight mb-1">
                  {item.title}
                </h3>
                <p className="text-sm font-semibold text-[var(--color-accent)] mb-4">
                  {item.institution}
                </p>

                <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-5 border-t border-[var(--color-border)]">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-muted-light)] mb-2.5">
                  Verified Topics & Completed Units
                </p>
                <div className="flex flex-wrap gap-1.5" role="list">
                  {item.topics.map((topic) => (
                    <span
                      key={topic}
                      className="text-xs font-medium bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-fg)] px-2.5 py-1 rounded-md"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

