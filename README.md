# Ben Nguyen — Portfolio Website

A professional portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

---

## Getting Started

### 1. Install Node.js

Download and install Node.js from [nodejs.org](https://nodejs.org) (LTS version recommended).

### 2. Install dependencies

```bash
cd /Users/minhnguyen/Documents/HM/Anitu
npm install
```

### 3. Run in development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 4. Build for production

```bash
npm run build
npm run start
```

---

## Replacing Placeholders

Search for `[ADD ...]` throughout the project to find all placeholders.

### Key placeholders to replace

| Placeholder | File | What to add |
|---|---|---|
| `[ADD EMAIL]` | `components/sections/Contact.tsx` | Your real email address |
| `[ADD LINKEDIN]` | `components/sections/Contact.tsx` | Your LinkedIn URL |
| `[ADD CV]` | `components/layout/Navbar.tsx`, `Contact.tsx`, `Footer.tsx` | Your resume filename, e.g. `ben-nguyen-resume.pdf` |
| `[ADD PHOTO]` | `components/sections/About.tsx` | Replace the placeholder box with an `<Image>` component |
| `[ADD GRADUATION YEAR]` | `components/sections/Education.tsx` | e.g. `2026` or `Expected 2027` |
| `[ADD GPA IF DESIRED]` | `components/sections/Education.tsx` | Your GPA (optional) |
| `[ADD VIDEO SOFTWARE]` | `data/projects.ts` + `Skills.tsx` | e.g. `Adobe Premiere Pro`, `CapCut`, `DaVinci Resolve` |
| `[ADD VIDEO]` | `data/projects.ts` (Project 04) | Add video embed URLs or MP4 paths |
| `[ADD COMPANY]`, `[ADD ROLE]`, etc. | `components/sections/Experience.tsx` | Real work experience |

---

## Adding a New Project

All projects live in one file: `data/projects.ts`.

To add a new project:

1. Open `data/projects.ts`
2. Copy an existing project object
3. Update every field:
   - `slug` — unique URL identifier (e.g. `"my-new-project"`)
   - `number` — display number (e.g. `"06"`)
   - `title`, `subtitle`, `categories`, `year`
   - `tagline` — short one-liner for cards
   - `description` — fuller paragraph for case study
   - `role`, `tools`, `platforms`
   - `featured: true` to feature it
   - `showOnHome: true` to show on homepage grid
   - `projectLabel` — e.g. `"Academic Project"` or `"Personal Project"`
   - `caseStudy` — fill in all case study sections
4. Save the file — the homepage and case study page generate automatically.

---

## Adding Your CV

1. Save your resume as a PDF in `public/documents/`
2. Name it something clean, e.g. `ben-nguyen-resume.pdf`
3. Update `Navbar.tsx`, `Contact.tsx`, and `Footer.tsx`:
   - Find: `/documents/[ADD CV]`
   - Replace with: `/documents/ben-nguyen-resume.pdf`

---

## Adding a Professional Portrait

In `components/sections/About.tsx`, find the portrait placeholder div and replace it:

```tsx
// Before (placeholder)
<div className="w-32 h-32 rounded-2xl bg-[var(--color-surface)] ...">
  <span className="placeholder-field">[ADD PHOTO]</span>
</div>

// After (real photo)
import Image from "next/image";

<Image
  src="/images/profile/ben-nguyen.jpg"
  alt="Ben Nguyen — Digital Marketing & Content"
  width={128}
  height={128}
  className="w-32 h-32 rounded-2xl object-cover"
  priority
/>
```

Save your photo to `public/images/profile/`.

---

## Adding Videos (Project 04)

In `data/projects.ts`, find Project 04 (`content-portfolio`) and update the `videos` array:

```ts
{
  title: "Campaign Reel — NAC",
  role: "Editor",
  platform: "Instagram",
  description: "Short-form Reel cut for the NAC social strategy project.",
  tools: ["Adobe Premiere Pro"],
  embedUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
  // OR for Vimeo:
  // embedUrl: "https://player.vimeo.com/video/YOUR_VIDEO_ID",
}
```

Then update `CaseStudyLayout.tsx` to render the `embedUrl` in an `<iframe>` instead of the placeholder.

---

## Updating Email & LinkedIn

Open `components/sections/Contact.tsx` and update:

```ts
const EMAIL = "ben.nguyen@email.com";      // ← your real email
const LINKEDIN = "https://linkedin.com/in/your-profile"; // ← your real LinkedIn
```

---

## Connecting Formspree (Optional)

Instead of the mailto fallback, connect a real form backend:

1. Sign up at [formspree.io](https://formspree.io)
2. Create a form — you'll get an endpoint like `https://formspree.io/f/xyzabcde`
3. In `Contact.tsx`, update the `handleSubmit` function:

```ts
async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setStatus("sending");

  const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  setStatus(res.ok ? "success" : "error");
}
```

---

## Deploying to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Vercel auto-detects Next.js — no config needed
4. Click Deploy

Your site will be live at `your-project.vercel.app`.

To use a custom domain:
- Go to Vercel → Project → Domains
- Add your domain and follow DNS instructions

---

## Deploying to Cloudflare Pages

```bash
npm run build
```

Then deploy the `.next` output via Cloudflare Pages with Next.js adapter, or use `@cloudflare/next-on-pages`.

---

## Project Structure

```
app/
  layout.tsx          ← Root layout, metadata, fonts
  page.tsx            ← Homepage
  globals.css         ← Design system tokens + global styles
  work/
    [slug]/page.tsx   ← Dynamic case study pages

components/
  layout/
    Navbar.tsx        ← Sticky navbar
    Footer.tsx        ← Footer
  sections/
    Hero.tsx          ← First screen
    About.tsx         ← About section
    Work.tsx          ← Project grid
    Skills.tsx        ← Skills & capabilities
    Education.tsx     ← Education section
    Experience.tsx    ← Work experience (placeholder)
    CareerDirection.tsx ← Career interests
    Contact.tsx       ← Contact form
  ui/
    AnimatedSection.tsx ← Scroll animations
    ProjectCard.tsx   ← Project card component
    Placeholder.tsx   ← Placeholder indicator component
  work/
    CaseStudyLayout.tsx ← Full case study template

data/
  projects.ts         ← ALL project content (edit here to add projects)

public/
  images/
    profile/          ← Add portrait here
    projects/
      nac/            ← NAC project images
      lilys/          ← Lily's project images
      video/          ← Content portfolio images
  documents/          ← Add CV PDF here
```

---

## Design System

All design tokens (colours, spacing, fonts) are in `app/globals.css`.

Key variables:
- `--color-bg` — page background (`#FAFAF9`)
- `--color-fg` — text (`#111110`)
- `--color-accent` — blue accent (`#1D4ED8`)
- `--color-muted` — secondary text (`#78716C`)

To change the accent colour, update `--color-accent` and `--color-accent-light` in `globals.css`.
