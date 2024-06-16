import BioComponent from "./components/BioComponent";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Project1 from "./components/Projects1";
import Skills from "./components/Skills";

export default function Page() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center flex-col mb-20">
        <div className="flex justify-center items-center">
          <BioComponent />
        </div>
        <div>
          <Skills />
        </div>
        <div className="mx-10">
          <Experience />
        </div>
        <div>
          <Project1 />
        </div>
      </div>
    </div>
  );
}
