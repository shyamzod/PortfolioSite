import BioComponent from "./components/BioComponent";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Page() {
  return (
    <div>
      <Navbar />
      <BioComponent />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}
