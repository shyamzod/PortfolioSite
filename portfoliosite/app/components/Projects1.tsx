import ProjectCard from "./ProjectCard";

export default function Project1() {
  return (
    <div className="flex flex-col items-center">
      <div>
        <h3 className="text-4xl font-bold mt-10 text-center">Projects</h3>
      </div>
      <div className="sm:flex sm:flex-col sm:justify-center sm:items-center">
        <div className="sm:flex sm:flex-col sm:justify-center sm:items-center md:flex md:flex-row md:space-x-6">
          <ProjectCard
            ProjectName="DeXchange"
            imagepath="/Projects/DeXchange.png"
            techstack="Node, Express, React, Postgres, Typescript, Aws, Docker, Tailwindcss."
          />
          <ProjectCard
            ProjectName="Reliance General Insurance"
            imagepath="/Projects/RelianceProject.png"
            techstack=".Net Core, Asp.Net MVC, Web Api, SQL, C#, Razor pages, JavaScript, jQuery, HTML, CSS."
          />
          <ProjectCard
            ProjectName="StackOverFlow Clone"
            imagepath="/Projects/stackoverflow.png"
            techstack=".Net Core, Asp.Net MVC, Web Api, SQL, C#, Razor pages, JavaScript, jQuery, HTML, CSS."
          />
          <ProjectCard
            ProjectName="Amazon Clone"
            imagepath="/Projects/amazon.png"
            techstack="Node, Express, React, Postgres, Typescript, Aws, Docker, Tailwindcss."
          />
        </div>
        <div className="sm:flex sm:flex-col sm:justify-center sm:items-center md:flex md:flex-row space-x-6"></div>
      </div>
    </div>
  );
}
