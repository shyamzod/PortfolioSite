import Image from "next/image";
export default function skills() {
  const paths = [, , "react.svg", , "nextjs.svg", , , ,];
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
    <div className="sm:flex sm:justify-center sm:items-center md:flex md:items-center md:flex-col">
      <div>
        <h3 className="text-4xl font-bold mb-5 mt-5 text-center">Skills</h3>
      </div>

      <div className="sm:flex sm:flex-col sm:justify-center sm:items-center md:flex md:flex-row md:space-x-10 sm:space-y-30 md:space-y-0">
        <div className="p-6 bg-gray-800 rounded-2xl">
          <div className="text-center">
            <h5>Frontend</h5>
          </div>

          <div className="flex justify-center items-center space-x-4 text-3xl">
            {Frontend.map((x, index) =>
              x != "nextjs.svg" ? (
                <div key={index}>
                  <Image
                    src={`/skillicons/${x}`}
                    alt={x}
                    width={40}
                    height={40}
                  />
                </div>
              ) : (
                <div key={index}>
                  <Image
                    className=" bg-white rounded-lg"
                    src={`/skillicons/${x}`}
                    alt={x}
                    width={40}
                    height={40}
                  />
                </div>
              )
            )}
          </div>
        </div>
        <div className="p-6 bg-gray-800 rounded-2xl">
          <div>
            <h5 className="text-center">Backend</h5>
          </div>
          <div className="flex justify-center items-center space-x-4 text-3xl">
            {Backend.map((x, index) =>
              x != "nextjs.svg" ? (
                <div key={index}>
                  <Image
                    src={`/skillicons/${x}`}
                    alt={x}
                    width={40}
                    height={40}
                  />
                </div>
              ) : (
                <div key={index}>
                  <Image
                    className=" bg-white rounded-lg"
                    src={`/skillicons/${x}`}
                    alt={x}
                    width={40}
                    height={40}
                  />
                </div>
              )
            )}
          </div>
        </div>
        <div className="p-5 bg-gray-800 rounded-2xl">
          <div>
            <h5 className="text-center">Database</h5>
          </div>
          <div className="flex justify-center items-center space-x-4 text-3xl">
            {Database.map((x, index) =>
              x != "MongoDB.svg" ? (
                <div key={index}>
                  <Image
                    src={`/skillicons/${x}`}
                    alt={x}
                    width={40}
                    height={40}
                  />
                </div>
              ) : (
                <div key={index}>
                  <Image
                    className=" bg-white rounded-lg p-1"
                    src={`/skillicons/${x}`}
                    alt={x}
                    width={40}
                    height={40}
                  />
                </div>
              )
            )}
          </div>
        </div>
        <div className="p-6 bg-gray-800 rounded-2xl">
          <div>
            <h5 className="text-center">Devops</h5>
          </div>
          <div className="flex justify-center items-center space-x-4 text-3xl">
            {Devops.map((x, index) =>
              x != "nextjs.svg" ? (
                <div key={index}>
                  <Image
                    src={`/skillicons/${x}`}
                    alt={x}
                    width={40}
                    height={40}
                  />
                </div>
              ) : (
                <div key={index}>
                  <Image
                    className=" bg-white rounded-lg"
                    src={`/skillicons/${x}`}
                    alt={x}
                    width={40}
                    height={40}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
