import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Metrics from "@/components/sections/Metrics";
import Technologies from "@/components/sections/Technologies";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Technologies />
      <Metrics />
      <Contact />
    </>
  );
}
