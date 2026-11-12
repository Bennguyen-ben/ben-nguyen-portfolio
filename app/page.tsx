import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Work } from "@/components/sections/Work";
import { Experience } from "@/components/sections/Experience";
import { CareerProgression } from "@/components/sections/CareerProgression";
import { Skills } from "@/components/sections/Skills";
import { CurrentLearning } from "@/components/sections/CurrentLearning";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Work />
        <Experience />
        <CareerProgression />
        <Skills />
        <CurrentLearning />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
