import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Portfolio from "@/components/sections/Portfolio";
import Skills from "@/components/sections/Skills";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Skills />
      <CTA />


    </main>
  );
}