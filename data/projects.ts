export type ProjectCategory =
  | "Social Media Strategy"
  | "Audience Analysis"
  | "Content Strategy"
  | "Marketing Strategy"
  | "Consumer Research"
  | "Target Audience"
  | "Content Creation"
  | "Video Editing"
  | "Short-form Content"
  | "Data & Analytics"
  | "Brand Management"
  | "Brand Strategy"
  | "AI-Assisted Development"
  | "Digital"
  | "Personal Branding";

export type Platform =
  | "Instagram"
  | "TikTok"
  | "YouTube"
  | "LinkedIn"
  | "Facebook"
  | "X / Twitter";

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectVideo {
  src?: string;
  embedUrl?: string;
  thumbnail?: string;
  title: string;
  role?: string;
  platform?: string;
  description?: string;
  tools?: string[];
  tiktokUrl?: string;
}

export interface CaseStudySection {
  label: string;
  content: string;
  list?: string[];
}

export interface Project {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  categories: ProjectCategory[];
  year: string;
  tagline: string;
  description: string;
  role?: string;
  tools?: string[];
  platforms?: Platform[];
  featured: boolean;
  showOnHome: boolean;
  type: "academic" | "personal" | "professional";
  projectLabel?: string;
  previewImage?: string;
  verifiedDeliverable?: string;
  images?: ProjectImage[];
  videos?: ProjectVideo[];
  caseStudy?: {
    objective?: string;
    context?: string;
    challenge?: string;
    challengeList?: string[];
    teamScope?: string;
    individualContribution?: string;
    methodsAndTools?: CaseStudySection[];
    research?: CaseStudySection[];
    keyFindings?: CaseStudySection[];
    strategy?: CaseStudySection[];
    deliverables?: CaseStudySection[];
    resultsAndEvidence?: CaseStudySection[];
    measurement?: CaseStudySection[];
    reflection?: string;
    skills?: string[];
    projectFiles?: { label: string; href: string }[];
  };
}

export const projects: Project[] = [
  // ─── PROJECT 01: MEKONG ASEAN VIDEO & CONTENT WORK ────────
  {
    slug: "content-portfolio",
    number: "01",
    title: "Mekong ASEAN Video & Content Work",
    subtitle: "Short-form Business & Economic News Editing",
    categories: ["Content Creation", "Video Editing", "Short-form Content"],
    year: "2025 – Present",
    tagline:
      "Daily vertical news and business reports produced for digital newspaper channels, engineered for high retention and mobile-first engagement.",
    description:
      "A curation of verified short-form business and financial news reports edited during employment as a Video Editor & Content Creator for Mekong ASEAN digital newspaper. Content is optimized for rapid mobile viewing across Facebook, TikTok, and YouTube Shorts.",
    role: "Video Editor & Content Creator",
    verifiedDeliverable:
      "Produced 30+ short-form news videos monthly across Facebook, TikTok, and YouTube; 100,000+ monthly views; 20% turnaround time reduction via workflow templates; 100% on-time delivery across 5–8 concurrent projects.",
    tools: ["CapCut", "DaVinci Resolve"],
    platforms: ["Facebook", "TikTok", "YouTube"],
    featured: true,
    showOnHome: true,
    type: "professional",
    projectLabel: "Professional Work",
    previewImage: "/images/projects/video/preview.png",
    videos: [
      {
        title: "Sacombank Leadership News",
        role: "Video Editor & Content Creator",
        platform: "Facebook, TikTok & YouTube Shorts",
        description:
          "Vertical economic news segment analyzing Sacombank leadership restructuring. Implemented dynamic captions, high-contrast headline typography, and tight pacing for silent mobile viewing.",
        tools: ["DaVinci Resolve", "CapCut"],
        src: "/images/projects/video/scb-leadership-news.mp4",
        thumbnail: "/images/projects/video/scb-poster.png",
      },
      {
        title: "Masan Executive Appointments",
        role: "Video Editor & Content Creator",
        platform: "Facebook, TikTok & YouTube Shorts",
        description:
          "Editorial business report detailing senior executive board appointments at Masan Group. Structured the narrative with opening visual hooks, corporate b-roll transitions, and synchronized text overlays.",
        tools: ["DaVinci Resolve", "CapCut"],
        src: "/images/projects/video/masan-executive-appointments.mp4",
        thumbnail: "/images/projects/video/masan-poster.png",
      },
    ],
    caseStudy: {
      objective:
        "Translate complex corporate and economic announcements into fast, accessible, 50-second vertical video news updates that capture viewer attention within the first 3 seconds and sustain engagement on mobile platforms.",
      context:
        "Mekong ASEAN is a digital business and economic publication covering financial markets, corporate developments, and regional commerce. Producing daily video news in this environment requires strict adherence to journalistic accuracy, high technical speed, and mobile algorithm pacing.",
      teamScope:
        "Collaborated with a cross-functional newsroom team of 5+ journalists, editors, and graphic designers. Maintained daily communication with 15+ internal and external stakeholders to align video scripts with editorial standards.",
      individualContribution:
        "Sole video editor and visual creator for assigned video segments: sourced supporting b-roll, trimmed narrative pacing, created high-contrast typographical overlays, color-graded footage, and timed dynamic subtitles for 100% silent-viewing comprehension in CapCut and DaVinci Resolve.",
      challenge:
        "Maintaining a consistent high volume (30+ videos per month) while managing 5–8 video projects simultaneously under strict same-day editorial publication deadlines without sacrificing visual quality or narrative accuracy.",
      challengeList: [
        "Rapid editorial turnaround: completing full video assembly, motion typography, and subtitle verification within hours of breaking corporate announcements.",
        "Mobile silent viewing: ensuring viewer comprehension without audio through engaging caption design and visual hierarchies.",
        "Algorithmic retention: designing hook structures in the first 3 seconds to prevent swipe-away drop-off on TikTok, Facebook, and Shorts.",
      ],
      methodsAndTools: [
        {
          label: "Editing & Motion Workflow",
          content:
            "Utilized DaVinci Resolve for primary color correction and audio equalization; built reusable typography and motion asset presets in CapCut for rapid deployment.",
        },
        {
          label: "Caption & Typographic Hierarchy",
          content:
            "Implemented dual-level text styling: prominent bold yellow/white headline hooks for immediate context, paired with center-weighted synchronized subtitles for dialogue.",
        },
      ],
      deliverables: [
        {
          label: "Published Video Reports",
          content:
            "Produced vertical (9:16) video reports for major economic topics, including Sacombank executive restructuring and Masan Group board appointments.",
          list: [
            "Sacombank Leadership News (50.6s, 1080×1920 mobile portrait).",
            "Masan Executive Appointments (48.1s, 1080×1920 mobile portrait).",
          ],
        },
      ],
      resultsAndEvidence: [
        {
          label: "Documented Newsroom Metrics",
          content:
            "All metrics reflect verified operational performance during employment:",
          list: [
            "Published Output: 30–40 short-form news videos delivered monthly across Facebook, TikTok, and YouTube.",
            "Delivery Reliability: 100% on-time delivery across 5–8 concurrent video projects under high-pressure news cycles.",
            "Audience Reach: Video assets contributed to a combined average of 100,000+ monthly views across platform channels.",
            "Efficiency Gain: Reduced average editing turnaround time by 20% through standardized template libraries and keyboard shortcuts.",
          ],
        },
      ],
      reflection:
        "Working in a high-cadence digital newsroom demonstrated that video editing is fundamentally an exercise in audience retention and clarity. Every frame, text transition, and sound element must serve to inform the viewer quickly and accurately.",
      skills: [
        "Short-form Video Editing",
        "Mobile-first Hook Design",
        "Pacing & Audio Synchronization",
        "Typographic Subtitle Design",
        "High-Volume Workflow Optimization",
        "Cross-functional Newsroom Collaboration",
      ],
    },
  },

  // ─── PROJECT 02: NAC SOCIAL MEDIA AUDIT & STRATEGY ─────────
  {
    slug: "nac-social-media-strategy",
    number: "02",
    title: "Nature Advocates Collective (NAC)",
    subtitle: "Social Media Audit & Content Strategy",
    categories: ["Social Media Strategy", "Audience Analysis", "Content Strategy"],
    year: "2026",
    tagline:
      "A data-driven social media audit and strategic content recommendation for a national environmental advocacy organisation.",
    description:
      "Completed as part of a social media strategy unit (ALM216) at Deakin University, this project involved a platform-wide social media audit of Nature Advocates Collective (NAC) followed by a comprehensive, channel-specific content strategy focusing on Instagram, LinkedIn, and YouTube Shorts.",
    role: "Social Media Strategist (Student Project)",
    verifiedDeliverable:
      "Comprehensive social media audit analyzing 279 posts to establish platform baselines, paired with an integrated channel strategy introducing YouTube Shorts and Reel-first schedules.",
    tools: ["Microsoft Excel", "Microsoft PowerPoint", "Canva"],
    platforms: ["Instagram", "TikTok", "YouTube", "LinkedIn", "Facebook", "X / Twitter"],
    featured: true,
    showOnHome: true,
    type: "academic",
    projectLabel: "Academic Strategy Project",
    previewImage: "/images/projects/nac/preview.png",
    caseStudy: {
      objective:
        "Audit existing digital presence across major platforms to identify engagement bottlenecks, evaluate content format performance, and design actionable, platform-tailored strategic recommendations for environmental advocacy.",
      context:
        "Nature Advocates Collective (NAC) is an Australian environmental organisation dedicated to nature regeneration. While maintaining active communities across multiple platforms, its digital outreach struggled with format fragmentation and inconsistent conversion pathways.",
      individualContribution:
        "100% individual student audit and strategy report formulation: compiled raw post data across 279 social posts, calculated format-specific engagement rates, conducted competitor benchmarking, and formulated multi-channel operational frameworks.",
      challenge:
        "Educational advocacy posts (such as Science Explainers) lagged significantly behind community storytelling. The organization lacked trackable UTM tracking, had no YouTube Shorts presence despite high short-form video consumption among target demographics, and maintained inconsistent posting schedules.",
      challengeList: [
        "Inconsistent landing page linking and lack of trackable UTM parameters across channels.",
        "Underperforming Science Explainer posts on Instagram (0.49% average ER) compared to Community Story content (1.37% ER).",
        "Absence of YouTube Shorts, missing reach opportunities among Gen Z and Millennials.",
        "Fragmented scheduling windows failing to capture peak commuter traffic.",
      ],
      research: [
        {
          label: "Instagram Performance Audit (Observed Baseline)",
          content:
            "Evaluated 279 total posts (172 Reels, 70 Carousels, 37 Images) to establish empirical performance baselines:",
          list: [
            "Follower Base: 30K followers (58% female, 56% aged 25–44; Sydney 28%, Melbourne 26%).",
            "Observed Average Engagement Rate: 0.98% (surpassing the non-profit industry benchmark of 0.48%).",
            "Format Breakdown: Reels achieved the highest reach; static single-image posts produced the lowest interaction.",
            "Content Categorization: Community Story posts reached 1.37% ER; technical Science Explainers averaged 0.49% ER.",
          ],
        },
        {
          label: "TikTok Channel Audit (Observed Baseline)",
          content:
            "Audited younger audience demographic engagement:",
          list: [
            "Follower Base: 12.0K followers (62% female, 38% aged 18–24, 28% aged 25–34).",
            "Top Post ER: Timely news hook post ('Nature Laws') achieved 4.32% ER through conversational framing.",
          ],
        },
        {
          label: "YouTube & LinkedIn Channel Benchmarks",
          content:
            "Identified underleveraged opportunities on professional and video channels:",
          list: [
            "YouTube: Long-form videos averaged 4.90% ER (above the 3.87% industry benchmark), but lacked any short-form Shorts.",
            "LinkedIn: Averaged 5.27% ER (above 5.20% benchmark), with Community Stories performing up to ~7.5% ER.",
          ],
        },
      ],
      keyFindings: [
        {
          label: "Audience Segmentation & Behavioral Split",
          content:
            "Observed data showed sharp demographic divergence: TikTok engaged younger activists (18–24), whereas Instagram and LinkedIn engaged working professionals (25–44). Human-led narrative stories consistently outperformed text-heavy policy summaries.",
        },
      ],
      strategy: [
        {
          label: "Strategy 1: YouTube Shorts Launch (Proposed Recommendation)",
          content:
            "Proposed a 6-month short-form video expansion:",
          list: [
            "Cadence: 2–3 vertical Shorts per week for 6 months.",
            "Target Goal: Strive for 6.0% average ER and 80K total reach within 6 months.",
            "Format: 30-second rapid explainer videos using on-screen text overlays and a distinct 'Take Action' end-screen CTA.",
          ],
        },
        {
          label: "Strategy 2: Instagram Schedule & Content Shift (Proposed Recommendation)",
          content:
            "Proposed calendar restructuring to boost organic reach:",
          list: [
            "Timing: Move 80%+ of posts into peak commuter windows (7–9 AM and 5–8 PM AEST, Wednesday/Thursday focus).",
            "Target Goal: Aim to increase average engagement rate from 0.98% to 1.50% via human-first Reels.",
            "Tracking: Deploy standardized UTM parameters on all link-in-bio paths.",
          ],
        },
        {
          label: "Strategy 3: LinkedIn Thought-Leadership Series (Proposed Recommendation)",
          content:
            "Target B2B and policy stakeholders with weekly case profiles connecting individual volunteer actions with systemic environmental reform.",
        },
      ],
      resultsAndEvidence: [
        {
          label: "Empirical Audit Deliverables vs Strategic Targets",
          content:
            "Clear distinction between documented findings and proposed strategy goals:",
          list: [
            "Documented Audit Deliverable: 279 posts analyzed across Instagram, TikTok, LinkedIn, and YouTube.",
            "Documented Finding: Reels and Community Stories drive over 2.7x higher engagement than static informational images.",
            "Proposed Strategic Target: Reach 1.50% average ER on Instagram and 6.0% on YouTube Shorts through structured scheduling.",
          ],
        },
      ],
      reflection:
        "This project reinforced that effective social strategy is never about cross-posting the exact same asset everywhere. Each channel has distinct algorithmic expectations and demographic needs. Tailoring formats to individual platforms is essential for converting passive impressions into meaningful action.",
      skills: [
        "Social Media Audit",
        "Audience Segmentation",
        "Competitor Benchmarking",
        "SMART Objective Setting",
        "UTM Link Tracking Architecture",
        "Content Calendar Planning",
      ],
      projectFiles: [
        { label: "View / Download Social Media Audit (PDF)", href: "/documents/Ben-Nguyen-ALM216-Social-Media-Audit.pdf" },
        { label: "View / Download Social Media Strategy (PDF)", href: "/documents/Ben-Nguyen-ALM216-Social-Media-Strategy.pdf" },
      ],
    },
  },

  // ─── PROJECT 03: LILY'S LITTLE LUNCHBOXES ──────────────────
  {
    slug: "lilys-little-lunchboxes",
    number: "03",
    title: "Lily's Little Lunchboxes",
    subtitle: "Marketing Mix & Segment Expansion Strategy",
    categories: ["Marketing Strategy", "Consumer Research", "Target Audience"],
    year: "2025",
    tagline:
      "A strategic marketing mix and consumer profiling project to position a healthy ready-meal brand for university students.",
    description:
      "A comprehensive marketing plan (MMK101 Marketing Fundamentals, Deakin University) exploring how Brisbane-based ready-meal delivery brand Lily's Little Lunchboxes could successfully expand beyond its traditional family segment into cost-conscious university students.",
    role: "Marketing Analyst (Student Project)",
    verifiedDeliverable:
      "Developed a dedicated student market expansion strategy with consumer personas, 4Ps formulation, 'Box of Fresh' product line, and an integrated promotional campaign.",
    tools: ["Microsoft Excel", "Microsoft PowerPoint", "Canva"],
    platforms: ["TikTok", "Instagram", "YouTube"],
    featured: true,
    showOnHome: true,
    type: "academic",
    projectLabel: "Academic Marketing Project",
    previewImage: "/images/projects/lilys/preview.png",
    caseStudy: {
      objective:
        "Evaluate market feasibility and formulate a targeted marketing mix (Product, Price, Place, Promotion) enabling a premium dietitian ready-meal company to capture the student market without diluting its core brand reputation.",
      context:
        "Lily's Little Lunchboxes is an established Brisbane meal delivery provider offering fresh ready-meals primarily marketed to families and seniors. The company sought strategies to tap into the expanding Australian ready-meal market.",
      individualContribution:
        "Individual academic coursework report (1,427 words): conducted demographic and psychographic segmentation, analyzed competitor pricing models (HelloFresh, fast-food alternatives), and formulated an end-to-end 4Ps strategic proposal.",
      challenge:
        "University students experience severe time scarcity and value nutrition, but face strict budget limitations ($15k–$25k annual income) and high price sensitivity. Standard premium retail pricing created a major barrier to student adoption.",
      challengeList: [
        "High student price sensitivity contrasting with premium ready-meal ingredient costs.",
        "Zero-prep convenience requirements for students sharing accommodation.",
        "Lack of existing youth-oriented lifestyle brand touchpoints.",
      ],
      research: [
        {
          label: "Market & Segment Analysis",
          content:
            "Synthesized industry trends and student behavioral characteristics:",
          list: [
            "Industry Context: Australian ready-meal sales reached AUD $2.6B in 2024, projected to reach AUD $3.3B by 2029.",
            "Target Persona: Full-time university students aged 18–24 living in Brisbane, balancing study and part-time employment.",
            "Behavioral Drivers: Primary purchase decisions driven by protein content, taste, and portability; prep time under 3 minutes is critical.",
          ],
        },
      ],
      strategy: [
        {
          label: "Product: 'Box of Fresh' (BOF) Ready Meals",
          content:
            "Proposed a customized student meal format:",
          list: [
            "Nutritional Focus: Pre-portioned, high-protein meals utilizing the 5 core food groups.",
            "Transit-Friendly Packaging: 100% recyclable, microwave-safe containers designed for university backpacks.",
          ],
        },
        {
          label: "Price: Tiered Bundling & Student Concessions",
          content:
            "Formulated an accessible price model to overcome budget objections:",
          list: [
            "Individual Meal: Positioned at $14.99 per unit.",
            "Weekly 5-Meal Pack: Bundled at $69.99 ($14.00/meal equivalent).",
            "Student Incentive: 10%–15% discount verified via university email/ID.",
          ],
        },
        {
          label: "Promotion: Integrated Campus & Creator Campaign (IMC)",
          content:
            "Multi-channel promotional roadmap:",
          list: [
            "TikTok Micro-Creators: Partner with Brisbane student lifestyle creators showing budget convenience and study-fuel meal prep.",
            "On-Campus Tasting Kiosks: Pop-up sampling booths during university Orientation and exam revision weeks.",
            "Interactive Polling: 'Build your BOF' monthly social media voting campaigns to select upcoming protein options.",
          ],
        },
      ],
      resultsAndEvidence: [
        {
          label: "Deliverables vs Proposed Success Metrics",
          content:
            "Outcomes formulated within the academic project:",
          list: [
            "Academic Deliverable: Comprehensive 1,427-word marketing plan evaluated under MMK101 standards.",
            "Proposed Performance Scorecard: Track student discount redemption rates, 5-pack bundle re-order frequency, and creator engagement rates.",
          ],
        },
      ],
      reflection:
        "Adapting an established brand to a younger segment requires balancing affordability with quality. This project highlighted how careful 4Ps alignment allows a brand to lower friction for price-conscious consumers while preserving its nutritional identity.",
      skills: [
        "Market Segmentation",
        "Consumer Persona Profiling",
        "Competitor Benchmarking",
        "Marketing Mix (4Ps) Formulation",
        "Pricing & Bundle Strategy",
        "Integrated Marketing Communications (IMC)",
      ],
      projectFiles: [
        { label: "View / Download Full Marketing Strategy (PDF)", href: "/documents/Ben-Nguyen-MMK101-Lilys-Little-Lunchboxes-Marketing-Strategy.pdf" },
      ],
    },
  },

  // ─── PROJECT 04: THE POKÉMON COMPANY BRAND AUDIT ───────────
  {
    slug: "pokemon-brand-audit",
    number: "04",
    title: "The Pokémon Company",
    subtitle: "Brand Audit & Launch Activation Strategy",
    categories: ["Brand Strategy", "Brand Management", "Audience Analysis", "Content Strategy"],
    year: "2026",
    tagline:
      "A strategic brand audit evaluating Customer-Based Brand Equity (CBBE) and formulating an integrated launch activation for young-adult fans.",
    description:
      "Completed for MMK280 Brand Management at Deakin University (Trimester 2, 2026), this comprehensive brand audit evaluated The Pokémon Company's global brand equity using Keller's CBBE framework, analyzed its brand inventory across 7Ps, and designed a concept launch activation leveraging contemporary creature-collection discourse.",
    role: "Brand Strategist & Analyst (Individual Student Project)",
    verifiedDeliverable:
      "Conducted an end-to-end brand audit assessing 7 brand elements across 6 criteria, built perceptual positioning maps, and developed the 'There's Only One Pokémon' cross-channel launch activation strategy.",
    tools: ["Microsoft Word", "Academic Literature & Secondary Research"],
    platforms: ["TikTok", "Instagram", "YouTube"],
    featured: false,
    showOnHome: true,
    type: "academic",
    projectLabel: "Academic Brand Strategy (MMK280)",
    previewImage: "/images/projects/pokemon/preview.png",
    caseStudy: {
      objective:
        "Perform a rigorous brand audit of The Pokémon Company, evaluate its brand inventory and equity dimensions under Keller's Customer-Based Brand Equity (CBBE) framework, and formulate an actionable launch activation campaign targeting young-adult consumers.",
      context:
        "Originating in 1996, The Pokémon Company manages a multi-billion dollar global entertainment ecosystem spanning video games, trading cards, animation, and retail. With over 85 billion TCG cards distributed globally and US$12B in licensed retail sales (ranked 7th globally), the brand commands immense awareness but faces evolving consumer expectations in a competitive gaming market.",
      individualContribution:
        "100% individual student assessment (1,894 words): authored full secondary research synthesis, conducted brand element inventory evaluations, constructed the CBBE framework, and formulated the launch campaign concept.",
      challenge:
        "While Pokémon enjoys unparalleled nostalgic brand equity among adults who grew up with the franchise, recent core video game releases experienced consumer criticism regarding graphical fidelity and technical performance (e.g., Pokémon Scarlet 3.5/10 Metacritic user score). Concurrently, emerging competitor titles like Palworld demonstrated strong consumer appetite for fresh creature-collection experiences. The strategic challenge was re-engaging young adults (aged 18–24) without relying solely on passive nostalgia.",
      challengeList: [
        "Brand Performance Vulnerability: Technical criticisms in recent releases weakening perceived product quality.",
        "Generational Reconnection: Transitioning young-adult childhood nostalgia into active engagement with upcoming titles.",
        "Competitive Discourse: Responding to market disruption from high-profile creature-collecting alternatives (Palworld).",
      ],
      research: [
        {
          label: "Brand Inventory & 6 Criteria Evaluation",
          content:
            "Evaluated 7 core brand elements against Keller's criteria (Memorability, Meaningfulness, Likeability, Transferability, Adaptability, Protectability):",
          list: [
            "Brand Name ('Pokémon'): Distinctive, high familiarity, globally trademarked.",
            "Logo Wordmark: High visual salience; colorful presentation signals brand variety and approachable playfulness.",
            "Poké Ball Symbol: Simple, iconic visual asset immediately recognizable across diverse media touchpoints.",
            "Pikachu Character: Globally identifiable mascot symbolizing companionship and emotional warmth.",
            "Slogan ('Gotta Catch 'Em All!'): Highly memorable call-to-action reinforcing the core brand function of discovery.",
            "Center Healing Jingle: Powerful proprietary sonic branding asset signaling recovery and positive achievement.",
            "Packaging: Evolving game artwork utilizing consistent visual framing to anchor retail recognition.",
          ],
        },
        {
          label: "Perceptual Mapping & Brand Mantra",
          content:
            "Positioned Pokémon against competitors (Magic: The Gathering, Yu-Gi-Oh!, Palworld). Formulated Pokémon's guiding brand mantra:",
          list: [
            "Emotional Modifier: Joyful",
            "Descriptive Modifier: Shared",
            "Brand Function: Discovery",
            "Core Mantra: 'Joyful Shared Discovery'",
          ],
        },
        {
          label: "Customer-Based Brand Equity (CBBE) Analysis",
          content:
            "Analyzed the four tiers of Keller's brand equity pyramid:",
          list: [
            "Salience: Deep, broad awareness established through lifelong exposure; strong visual recognition in adulthood.",
            "Performance & Imagery: Diverse gameplay mechanisms (battling, trading, exploration) offset by recent technical critique.",
            "Judgements & Feelings: High perceived heritage and nostalgic affection, tempered by expectations of modern technical quality.",
            "Resonance: High fan community loyalty, fan art, competitive tournaments, and enduring multi-generational bonds.",
          ],
        },
      ],
      keyFindings: [
        {
          label: "Strategic Opportunity: Re-igniting Active Discourse",
          content:
            "Childhood nostalgia remains an exceptionally strong emotional asset, but requires a contemporary cultural hook to convert into active purchasing and social sharing. The widespread online debate comparing Palworld with Pokémon provided an organic opening for provocative, discussion-driven short-form content.",
        },
      ],
      strategy: [
        {
          label: "Campaign Concept: 'There's Only One Pokémon'",
          content:
            "Designed a launch activation for concept release 'Pokémon Wind and Waves' targeting young adults (18–24):",
          list: [
            "Core Hook: Use the visual comparison debate directly on TikTok, Instagram Reels, and YouTube Shorts.",
            "Opening Hook (0–3s): Side-by-side comparison of Pikachu and Sparkit with the provocative question: 'In your mind, which one is Pikachu?'",
            "Nostalgic Transition (3–15s): Zoom-in on Pikachu transitioning to Poké Ball catching sequences: 'When was the last time you caught a Pokémon?'",
            "Product Reveal & CTA (15–30s): Smooth cut into Pokémon Wind and Waves gameplay followed by: 'Do you want to catch them again?' and a clear link to the official game page.",
          ],
        },
        {
          label: "Multi-Touchpoint Social Distribution",
          content:
            "Focused distribution on short-form vertical video channels with high young-adult density (TikTok, Instagram Reels, YouTube Shorts) to provoke comment debates, shares, and organic reach.",
        },
      ],
      resultsAndEvidence: [
        {
          label: "Academic Submission Deliverables",
          content:
            "Evidence of comprehensive academic brand management formulation:",
          list: [
            "1,894-word formal brand audit and launch activation strategy document.",
            "Rigorous empirical grounding with over 20 peer-reviewed marketing citations (Keller, Allison, Tobin, Song et al.).",
            "Complete 7Ps marketing mix alignment and brand inventory evaluation matrix.",
          ],
        },
      ],
      reflection:
        "Conducting this brand audit taught me that iconic legacy brands cannot rely on nostalgia alone. By objectively diagnosing vulnerabilities in brand performance and using cultural conversations as engagement catalysts, brand managers can revitalize legacy affinity into active modern relevance.",
      skills: [
        "Customer-Based Brand Equity (CBBE)",
        "Brand Audit & Inventory Analysis",
        "Brand Element Evaluation (6 Criteria)",
        "Perceptual Positioning Maps",
        "Brand Mantra Formulation",
        "7Ps Marketing Mix Alignment",
        "Competitive Repositioning",
      ],
      projectFiles: [
        { label: "View / Download MMK280 Brand Audit Report (PDF)", href: "/documents/Ben-Nguyen-MMK280-Pokemon-Brand-Audit.pdf" },
        { label: "Download Original Assessment (.docx)", href: "/documents/Nguyen_Ben_225443664_MMK280.docx" },
      ],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getHomeProjects(): Project[] {
  return projects.filter((p) => p.showOnHome);
}

/**
 * FPT Telecom Internship Case Study Template (Confidential / Internal)
 * 
 * Prepared in accordance with confidentiality and non-disclosure obligations.
 * Not rendered on the public website until confirmed details and disclosure approval are provided.
 */
export interface FPTTelecomCaseStudyTemplate {
  department: string;
  role: string;
  internshipDates: string;
  responsibilities: string[];
  tools: string[];
  personalContribution: string[];
  teamContribution: string[];
  verifiedOutcomes: string[];
  skillsLearned: string[];
  isConfirmed: boolean;
}

export const fptTelecomCaseStudyDraft: FPTTelecomCaseStudyTemplate = {
  department: "", // [Pending Confirmation from Ben Nguyen]
  role: "", // [Pending Confirmation from Ben Nguyen]
  internshipDates: "", // [Pending Confirmation from Ben Nguyen]
  responsibilities: [],
  tools: [],
  personalContribution: [],
  teamContribution: [],
  verifiedOutcomes: [],
  skillsLearned: [],
  isConfirmed: false,
};
