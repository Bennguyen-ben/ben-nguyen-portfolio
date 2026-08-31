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
  images?: ProjectImage[];
  videos?: ProjectVideo[];
  caseStudy?: {
    challenge?: string;
    challengeList?: string[];
    context?: string;
    research?: CaseStudySection[];
    keyFindings?: CaseStudySection[];
    strategy?: CaseStudySection[];
    creativeDirection?: CaseStudySection[];
    measurement?: CaseStudySection[];
    reflection?: string;
    skills?: string[];
  };
}

export const projects: Project[] = [
  // ─── PROJECT 01: NAC SOCIAL MEDIA STRATEGY ─────────────────
  {
    slug: "nac-social-media-strategy",
    number: "01",
    title: "Nature Advocates Collective (NAC)",
    subtitle: "Social Media Audit & Content Strategy",
    categories: ["Social Media Strategy", "Audience Analysis", "Content Strategy"],
    year: "2026",
    tagline:
      "A data-driven social media audit and strategic content recommendation for a national environmental advocacy organisation.",
    description:
      "Completed as part of a social media strategy unit (ALM216), this project involved a platform-wide social media audit of Nature Advocates Collective (NAC) followed by a comprehensive, platform-specific content strategy focusing on Instagram, LinkedIn, and YouTube Shorts.",
    role: "Social Media Strategist (Student Project)",
    tools: ["Microsoft Excel", "Microsoft PowerPoint", "Canva"],
    platforms: ["Instagram", "TikTok", "YouTube", "LinkedIn", "Facebook", "X / Twitter"],
    featured: true,
    showOnHome: true,
    type: "academic",
    projectLabel: "Academic Strategy Project",
    previewImage: "/images/projects/nac/preview.png",
    caseStudy: {
      context:
        "Nature Advocates Collective (NAC) is a national environmental organisation dedicated to protecting and regenerating Australia's nature. This strategy project analyzed observed platform metrics and designed content recommendations to bridge the gap between user engagement and environmental advocacy.",
      challenge:
        "While NAC had established communities across social media, it suffered from inconsistent branding, lack of platform-specific CTA/links, and sub-optimal posting schedules. Educational posts (like Science Explainers) lagged in engagement, and there was no YouTube Shorts presence despite the high engagement of short-form video in key demographics.",
      challengeList: [
        "Inconsistent landing page linking and weak Call-to-Actions (CTAs) across Facebook, LinkedIn, X, and YouTube.",
        "Underperforming Science Explainer posts on Instagram (0.49% average engagement rate) compared to Community Story content (1.37% ER).",
        "No YouTube Shorts in use, missing out on massive reach among Gen Z and Millennials.",
        "Lack of trackable UTM parameters to measure social-driven traffic and conversions.",
      ],
      research: [
        {
          label: "Instagram Performance Audit",
          content:
            "Evaluated 279 posts (172 Reels, 70 Carousels, 37 Images) to establish key baseline metrics:",
          list: [
            "Followers: 30K followers (58% female, 56% aged 25-44, concentrated in Sydney at 28% and Melbourne at 26%).",
            "Average Engagement Rate: 0.98%, exceeding the industry average benchmark of 0.48%.",
            "Engagement by Format: Reels generated the highest engagement, while static image posts lagged.",
            "Campaign Engagement: Community Story posts yielded 1.37% ER, while Science Explainers sat at 0.49% ER.",
          ],
        },
        {
          label: "TikTok Performance Audit",
          content:
            "Analyzed younger demographics and content relevance on TikTok:",
          list: [
            "Followers: 12.0K followers (62% female, 38% aged 18-24, 28% aged 25-34, concentrated in Sydney at 26% and Melbourne at 24%).",
            "Top Post: The 'Nature Laws' post achieved the highest engagement rate (4.32%), led by a timely, news-driven hook ('OMG it happened?').",
          ],
        },
        {
          label: "YouTube and LinkedIn Benchmarks",
          content:
            "Identified highly engaged but under-utilized channels:",
          list: [
            "YouTube: Long-form content achieved a 4.90% average ER (above the 3.87% benchmark), but lacked any short-form content.",
            "LinkedIn: Achieved a 5.27% average ER (above the 5.20% benchmark), with Community Stories performing exceptionally well at ~7.5% ER.",
          ],
        },
      ],
      keyFindings: [
        {
          label: "Core Audiences & Behaviors",
          content:
            "Demographics differed sharply by platform: TikTok captured younger advocates (18-24), while Instagram and LinkedIn attracted professional cohorts (25-44). Human-driven storytelling (Community Stories) consistently outperformed text-heavy informational updates.",
        },
      ],
      strategy: [
        {
          label: "YouTube Shorts Expansion",
          content:
            "Proposed a dedicated YouTube Shorts campaign to capture Millennial and Gen Z demographics:",
          list: [
            "Cadence: Establish YouTube Shorts by publishing 2–3 videos per week for six months.",
            "Objectives: Target a 6% average engagement rate on Shorts and 80K total reach within six months.",
            "Creative Format: 30-second rapid explainer videos focusing on 'Nature Laws' using on-screen captions, high-tempo visual loops, and a clear 'Take Action' CTA.",
          ],
        },
        {
          label: "Instagram Optimization",
          content:
            "Proposed systematic formatting and timing updates:",
          list: [
            "Timing: Schedule 80%+ of posts during peak windows (7-9 AM and 5-8 PM AEST), focusing on Wednesdays and Thursdays.",
            "Objective: Increase average engagement rate from 0.98% to 1.50% within six months through human-led, Reel-first storytelling.",
            "Tracking: Deploy trackable UTM parameters on all bio links within the first month.",
          ],
        },
        {
          label: "LinkedIn Professional Campaign",
          content:
            "Designed a B2B and professional advocacy approach:",
          list: [
            "Cadence: Increase frequency to at least two platform-specific posts per week.",
            "Timing: Post during peak professional hours (8-10 AM and 12-1 PM AEST), Wednesday priority.",
            "Format: Showcase curated professional content (e.g. Community Story profiles connecting individual action with systemic change).",
          ],
        },
      ],
      measurement: [
        {
          label: "Proposed Performance Indicators",
          content:
            "To evaluate the success of the strategy, the following measurement plan was proposed:",
          list: [
            "Track monthly short-form video views and average viewer retention rates on YouTube Shorts.",
            "Compare monthly engagement rates on Instagram Reels before and after scheduling changes.",
            "Monitor LinkedIn traffic click-throughs via UTM tracking to measure actual landing page entries.",
          ],
        },
      ],
      reflection:
        "This project highlighted the necessity of platform-specific customization. Re-sharing identical content across channels limits reach. Designing tailored formats (such as 30-second Shorts for YouTube and thought-leadership profiles for LinkedIn) maximizes impact and bridges the gap between passive views and active community participation.",
      skills: [
        "Social Media Audit",
        "Audience Segmentation",
        "Competitor Benchmarking",
        "SMART Objectives",
        "UTM Link Tracking",
        "Content Calendar Planning",
        "Short-form Video Strategy",
      ],
    },
  },

  // ─── PROJECT 02: VIDEO & CONTENT PORTFOLIO ────────────────
  {
    slug: "content-portfolio",
    number: "02",
    title: "Video & Content Work",
    subtitle: "Short-form News & Media Editing",
    categories: ["Content Creation", "Video Editing", "Short-form Content"],
    year: "2025 - Current",
    tagline:
      "A curation of professional short-form news and entertainment videos edited for digital social platforms.",
    description:
      "Contains real examples of short-form content produced during employment as a Video Editor & Content Creator for a digital newspaper. The videos target high-retention formats on Facebook, TikTok, and YouTube Shorts.",
    role: "Video Editor & Content Creator [Ben to confirm/review details]",
    tools: ["CapCut", "DaVinci Resolve"],
    platforms: ["Facebook", "TikTok", "YouTube"],
    featured: true,
    showOnHome: true,
    type: "professional",
    projectLabel: "Professional Work",
    previewImage: "/images/projects/video/preview.png",
    videos: [
      {
        title: "VinFast Business News Report",
        role: "Video Editor [Ben to confirm/review details]",
        platform: "Facebook & TikTok",
        description:
          "Edited a short-form business news video analyzing VinFast's market trends. Focused on incorporating clean typography, fast-paced transitions, and descriptive captions for high silent-play retention.",
        tools: ["DaVinci Resolve", "CapCut"],
        src: "/images/projects/video/vinfast-news.mp4",
      },
      {
        title: "Anh Trai Entertainment Trend Report",
        role: "Video Editor [Ben to confirm/review details]",
        platform: "Facebook & TikTok",
        description:
          "Edited an entertainment segment detailing trending topics from the popular 'Anh Trai' series. Developed high-tempo visual loops, custom text overlays, and sound design to sustain viewer interest.",
        tools: ["DaVinci Resolve", "CapCut"],
        src: "/images/projects/video/anh-trai-news.mp4",
      },
    ],
    caseStudy: {
      context:
        "Producing daily short-form video in a rapid newsroom environment requires strict time management, technical speed, and a strong understanding of algorithmic hook structures.",
      challenge:
        "Maintaining a high volume of output (30+ short-form videos monthly) while ensuring 100% on-time delivery. The content needed to grab attention in the first three seconds and retain viewers until the end of the video, achieving high performance on mobile-first algorithms.",
      research: [
        {
          label: "Silent Viewing Optimization",
          content:
            "Since a large percentage of mobile users watch videos without sound, integrating accurate, high-contrast, and dynamic captions was crucial to maintaining engagement.",
        },
        {
          label: "Workflow Acceleration",
          content:
            "Leveraged template structures in CapCut and keyboard shortcuts in DaVinci Resolve, reducing editing turnaround times by 20% on average.",
        },
      ],
      keyFindings: [
        {
          label: "Engagement Indicators",
          content:
            "Observed data showed news reports containing human hooks and energetic pacing generated higher shares and click-through rates.",
        },
      ],
      strategy: [
        {
          label: "Algorithmic Pacing",
          content:
            "Structured every video to open with a high-impact visual or question in the first 3 seconds, followed by concise narrative points and a clear end-screen CTA to click the article link.",
        },
      ],
      reflection:
        "Working in a high-volume newspaper environment honed my speed and technical precision. Video editing is not just about aesthetics; it is about keeping the viewer engaged frame-by-frame and conveying information clearly within seconds.",
      skills: [
        "Short-form Video Editing",
        "Typographic Overlay Design",
        "Algorithmic Hook Design",
        "Pacing & Sound Design",
        "High-volume Production Workflow",
      ],
    },
  },

  // ─── PROJECT 03: LILY'S LITTLE LUNCHBOXES ──────────────────
  {
    slug: "lilys-little-lunchboxes",
    number: "03",
    title: "Lily's Little Lunchboxes",
    subtitle: "Marketing Plan & Segment Strategy",
    categories: ["Marketing Strategy", "Consumer Research", "Target Audience"],
    year: "2025",
    tagline:
      "A strategic marketing mix and consumer profiling project to position a healthy ready-meal brand for university students.",
    description:
      "A university marketing plan (MMK101) exploring how Brisbane-based dietitian ready-meal delivery brand Lily's Little Lunchboxes could target a younger, cost-conscious student demographic.",
    role: "Marketing Analyst (Student Project)",
    tools: ["Microsoft Excel", "Microsoft PowerPoint", "Canva"],
    platforms: ["TikTok", "Instagram", "YouTube"],
    featured: true,
    showOnHome: true,
    type: "academic",
    projectLabel: "Academic Marketing Project",
    previewImage: "/images/projects/lilys/preview.png",
    caseStudy: {
      context:
        "Lily's Little Lunchboxes is an established Brisbane meal-delivery business offering dietitian-approved, fresh ready-meals. Traditionally targeting families, kids, and seniors, this project evaluated the feasibility of expanding into the university student segment.",
      challenge:
        "University students represent an under-utilized segment but have high price sensitivity and limited budgets. The challenge was proposing an adjusted product line, an affordable pricing model, and a relevant channels strategy to secure student adoption without diluting the core premium brand image.",
      challengeList: [
        "High student price sensitivity (target segment average income of $15,000–$25,000 per year).",
        "Busy, time-poor schedules requiring convenient, zero-preparation meals.",
        "Under-optimized promotional content that lacked interactive or lifestyle-focused storytelling.",
      ],
      research: [
        {
          label: "Target Market & Consumer Profiling",
          content:
            "Defined the student persona through geographic, demographic, and psychographic segmentation:",
          list: [
            "Demographics: University students aged 18–24, living in Brisbane, sharing rental accommodation, working part-time.",
            "Psychographics: Value health, freshness, and convenience, but face extreme time scarcity and financial constraints.",
            "Media Habits: Heavily active on TikTok, Instagram, and YouTube for entertainment and meal inspiration.",
          ],
        },
        {
          label: "Industry & Competitor Analysis",
          content:
            "Analyzed ready-meal industry trends in Australia:",
          list: [
            "Market Growth: Australian ready-meal sales reached AUD $2.6 billion in 2024, expected to grow to AUD $3.3 billion by 2029.",
            "Competitors: HelloFresh targets cooking-oriented adults; fast-food chains offer cheap convenience but lack essential nutritional values.",
          ],
        },
      ],
      keyFindings: [
        {
          label: "Survey Insights",
          content:
            "Survey data indicated student lunch decisions are driven by protein content, taste, and portability. Packaging aesthetics and heating times are secondary considerations.",
        },
      ],
      strategy: [
        {
          label: "Product: 'Box of Fresh' (BOF)",
          content:
            "Proposed a dedicated student ready-meal line:",
          list: [
            "Design: Pre-portioned, high-protein meals made with the 5 core food groups.",
            "Packaging: Portable, recyclable, and microwave-safe boxes designed for university transit.",
          ],
        },
        {
          label: "Pricing & Bundles",
          content:
            "Developed pricing tiers to match tight student budgets:",
          list: [
            "Individual Meal: Proposed at ~$14.99 per meal.",
            "Weekly Bundle: Proposed at ~$69.99 for five meals.",
            "Student Discount: Recommended a 10%–15% discount validated with student ID.",
          ],
        },
        {
          label: "Integrated Marketing Communications (IMC)",
          content:
            "Designed a multi-touchpoint communication strategy:",
          list: [
            "Influencer Partnerships: Partner with local student-lifestyle micro-influencers on TikTok to show real, budget-friendly convenience.",
            "On-Campus Pop-up tasting booths: Sampling campaigns at university campuses during orientation and exam periods.",
            "Interactivity: Launch a digital 'Build your BOF' campaign where students vote on social media polls for upcoming proteins and snacks.",
          ],
        },
      ],
      measurement: [
        {
          label: "Proposed Evaluation Metrics",
          content:
            "Recommended a performance scorecard to track conceptual success:",
          list: [
            "Product: Track repeat purchase rates and student customer reviews.",
            "Price: Measure discount coupon redemption rates and bundle order frequency.",
            "Promotion: Audit TikTok/Instagram post interaction rates (likes, comments, shares) and campaign voting counts.",
          ],
        },
      ],
      reflection:
        "Proposing marketing ideas for a new demographic requires deep empathy for their constraints. For students, health cannot come at an unrealistic price. The project demonstrated how tailoring the classic 4Ps (Product, Price, Place, Promotion) is essential when adapting an established brand to a younger customer profile.",
      skills: [
        "Market Segmentation",
        "Consumer Persona Profiling",
        "Competitor Analysis",
        "Marketing Mix (4Ps) Formulation",
        "Pricing & Bundle Strategy",
        "Integrated Marketing Communications",
      ],
    },
  },

  // ─── PROJECT 04: PERSONAL PORTFOLIO WEBSITE ────────────────
  {
    slug: "portfolio-website",
    number: "04",
    title: "Personal Portfolio Website",
    subtitle: "AI-Assisted Frontend Development",
    categories: ["AI-Assisted Development", "Digital", "Personal Branding"],
    year: "2026",
    tagline:
      "Designed and developed a professional, responsive personal branding website using Next.js 15 and Tailwind CSS.",
    description:
      "Built a professional digital portfolio to showcase digital marketing strategy, content creation projects, and video editing work in a clean, modern, editorial format. The development workflow integrated AI-assisted coding tools.",
    role: "Project Owner, UI Designer & Frontend Developer",
    tools: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS v4", "Framer Motion", "GitHub", "Google Antigravity"],
    platforms: [],
    featured: true,
    showOnHome: true,
    type: "personal",
    projectLabel: "Personal Project",
    previewImage: "/images/projects/portfolio/preview.png",
    caseStudy: {
      context:
        "As an emerging digital marketer, having a highly professional online presence is key. This project represents the design and build of my digital portfolio, functioning as a real-world demonstration of digital content layout and technical communication.",
      challenge:
        "Create an editorial, agency-style portfolio that presents academic assignments and video files in an interactive format. Ensure it is responsive, mobile-first, SEO-friendly, and accessible (A11y).",
      strategy: [
        {
          label: "UI Design Direction",
          content:
            "Implemented a minimal, editorial layout prioritizing generous whitespace, high-contrast typography, and smooth transitions. The color system uses a clean off-white background (#FAFAF9) and deep dark text (#111110) with a strong blue accent (#1D4ED8) to direct user attention to CTAs and links.",
        },
        {
          label: "Technical Implementation",
          content:
            "Used Next.js 15 App Router for static rendering and performance. Deployed Framer Motion for scroll-triggered entrance animations, and built custom SVG illustrations to represent analytics and data streams dynamically.",
        },
        {
          label: "AI-Assisted Workflow",
          content:
            "Utilized modern AI-assisted engineering systems (such as Google Antigravity) to write code and optimize layouts, demonstrating how emerging professionals can use AI to build technical assets efficiently.",
        },
      ],
      reflection:
        "This project allowed me to sit in both the strategist and designer seats. Treating my own experience as the 'product' forced me to refine my positioning and communicate my value proposition as a digital marketing and content professional concisely.",
      skills: [
        "Digital Personal Branding",
        "Responsive UI/UX Design",
        "Frontend Layout Development",
        "AI-Assisted Engineering",
        "Search Engine Optimization (SEO)",
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
