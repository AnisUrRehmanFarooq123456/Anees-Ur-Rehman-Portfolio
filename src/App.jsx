import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Focus from "./components/Focus";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="editor-bg" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Focus />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;