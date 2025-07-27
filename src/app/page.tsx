import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Service from "@/components/sections/Service";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Service />
      <Contact />
      <Footer />
    </main>
  );
}
