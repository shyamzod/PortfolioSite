import BioComponent from "./components/BioComponent";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Page() {
  return (
    // <div className="flex items-center justify-center">
    //   <h1>Under Construction!! Planning a deployment soon</h1>
    // </div>
    <div>
      <Navbar />
      <BioComponent />
      <div className="flex flex-row ">
        <div className="mx-10">
          <Experience />
        </div>
        <div className="mx-10">
          <Projects />
        </div>
      </div>
    </div>
  );
}
