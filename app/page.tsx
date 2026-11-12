import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Work } from "@/components/sections/Work";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        {/* 1. Hero */}
        <Hero />
        {/* 2. About Me */}
        <About />
        {/* 3. Professional Experience (Mekong ASEAN videos, FPT Telecom, SG Lawyers) */}
        <Experience />
        {/* 4. Academic Research & Projects (NAC ALM216, Pokémon MMK280, Lily's MMK101) */}
        <Work />
        {/* 5. Skills */}
        <Skills />
        {/* 6. Contact */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
