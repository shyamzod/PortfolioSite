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
      {/* <Skills /> */}
      <Experience />
      {/* <Projects /> */}
    </div>
  );
}
