import Image from "next/image";

export default function Skills() {
  const Frontend = [
    "react.svg",
    "nextjs.svg",
    "typescript.svg",
    "javascript.svg",
    "tailwindcss.svg",
    "html.svg",
    "css3.svg",
  ];
  const Backend = ["csharp.svg", "dotnet.svg", "nodejs.svg"];
  const Devops = ["aws.svg", "Git.svg", "docker.svg"];
  const Database = ["sql.svg", "postgres.svg", "MongoDB.svg"];

  return (
    <div className="sm:flex sm:flex-col sm:items-center md:flex md:items-center md:flex-col space-y-10">
      <div>
        <h3 className="text-4xl font-bold mb-5 mt-5 text-center">Skills</h3>
      </div>

      <div className="space-y-10 md:space-y-0 md:flex md:flex-row md:space-x-10">
        <div className="p-6 bg-gray-800 rounded-2xl">
          <div className="text-center">
            <h5 className="text-xl font-semibold">Frontend</h5>
          </div>
          <div className="flex justify-center items-center space-x-4 text-3xl mt-4">
            {Frontend.map((x, index) => (
              <div key={index}>
                <Image
                  src={`/skillicons/${x}`}
                  alt={x}
                  width={40}
                  height={40}
                  className={x === "nextjs.svg" ? "bg-white rounded-lg" : ""}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="p-6 bg-gray-800 rounded-2xl">
          <div className="text-center">
            <h5 className="text-xl font-semibold">Backend</h5>
          </div>
          <div className="flex justify-center items-center space-x-4 text-3xl mt-4">
            {Backend.map((x, index) => (
              <div key={index}>
                <Image
                  src={`/skillicons/${x}`}
                  alt={x}
                  width={40}
                  height={40}
                  className={x === "nextjs.svg" ? "bg-white rounded-lg" : ""}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="p-6 bg-gray-800 rounded-2xl">
          <div className="text-center">
            <h5 className="text-xl font-semibold">Database</h5>
          </div>
          <div className="flex justify-center items-center space-x-4 text-3xl mt-4">
            {Database.map((x, index) => (
              <div key={index}>
                <Image
                  src={`/skillicons/${x}`}
                  alt={x}
                  width={40}
                  height={40}
                  className={
                    x === "MongoDB.svg" ? "bg-white rounded-lg p-1" : ""
                  }
                />
              </div>
            ))}
          </div>
        </div>
        <div className="p-6 bg-gray-800 rounded-2xl">
          <div className="text-center">
            <h5 className="text-xl font-semibold">Devops</h5>
          </div>
          <div className="flex justify-center items-center space-x-4 text-3xl mt-4">
            {Devops.map((x, index) => (
              <div key={index}>
                <Image
                  src={`/skillicons/${x}`}
                  alt={x}
                  width={40}
                  height={40}
                  className={x === "nextjs.svg" ? "bg-white rounded-lg" : ""}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
