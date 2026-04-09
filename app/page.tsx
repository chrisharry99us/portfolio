import Nav from "@/components/Nav";
import HeroAbout from "@/components/HeroAbout";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav /> 
      <HeroAbout />
      <Skills />
      <Projects />
      <Blog />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}