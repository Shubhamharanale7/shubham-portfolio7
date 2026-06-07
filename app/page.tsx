import Navbar       from "@/components/sections/Navbar";
import Hero         from "@/components/sections/Hero";
import TrustBar     from "@/components/sections/TrustBar";
import About        from "@/components/sections/About";
import Skills       from "@/components/sections/Skills";
import Projects     from "@/components/sections/Projects";
import Process      from "@/components/sections/Process";
import Services     from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Impact       from "@/components/sections/Impact";
import CTA          from "@/components/sections/CTA";
import Footer       from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Skills />
      <Projects />
      <Process />
      <Services />
      <Testimonials />
      <Impact />
      <CTA />
      <Footer />
    </main>
  );
}
