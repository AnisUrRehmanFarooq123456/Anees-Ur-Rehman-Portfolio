import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Focus from "../components/Focus";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Focus />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
};
export default HomePage;
