"use client";
import Image from "next/image";

export default function Skills() {
  const skills = {
    Frontend: [
      "react.svg",
      "nextjs.svg",
      "typescript.svg",
      "javascript.svg",
      "tailwindcss.svg",
      "html.svg",
      "css3.svg",
    ],
    Backend: ["csharp.svg", "dotnet.svg", "nodejs.svg"],
    Database: ["sql.svg", "postgres.svg", "MongoDB.svg"],
    DevOps: ["aws.svg", "Git.svg", "docker.svg"],
  };

  const highlightIcon = ["nextjs.svg", "MongoDB.svg"];

  return (
    <div className="flex flex-col items-center mt-10 px-4 md:px-8 lg:px-16">
      <h3 className="text-4xl font-bold mb-10 text-center">Skills</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 w-full">
        {Object.entries(skills).map(([category, icons], i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6 shadow-xl backdrop-blur-md hover:shadow-green-500/20 transition-shadow"
          >
            <h5 className="text-xl font-semibold text-center mb-4">
              {category}
            </h5>
            <div className="flex flex-wrap justify-center items-center gap-4">
              {icons.map((icon, idx) => (
                <div key={idx} className="group relative">
                  <Image
                    src={`/skillicons/${icon}`}
                    alt={icon}
                    width={40}
                    height={40}
                    className={`rounded-lg transition-transform duration-300 group-hover:scale-125 ${
                      highlightIcon.includes(icon) ? "bg-white p-1" : ""
                    }`}
                  />
                  <span className="absolute opacity-0 group-hover:opacity-100 transition text-xs text-center w-max px-2 py-1 bg-gray-700 text-white rounded bottom-[-1.5rem] left-1/2 transform -translate-x-1/2">
                    {icon.replace(".svg", "").toUpperCase()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
