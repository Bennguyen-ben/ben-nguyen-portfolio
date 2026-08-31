import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProjectBySlug, projects } from "@/data/projects";
import { CaseStudyLayout } from "@/components/work/CaseStudyLayout";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Ben Nguyen",
    };
  }

  return {
    title: `${project.title} — ${project.subtitle} | Ben Nguyen Portfolio`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Ben Nguyen`,
      description: project.tagline,
      type: "article",
    },
  };
}

export default async function WorkPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <CaseStudyLayout project={project} />
      </main>
      <Footer />
    </>
  );
}
