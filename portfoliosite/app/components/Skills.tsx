import Image from "next/image";
export default function skills() {
  const paths = [
    "csharp.svg",
    "dotnet.svg",
    "sql.svg",
    "react.svg",
    "nodejs.svg",
    "nextjs.svg",
    "aws.svg",
    "postgres.svg",
    "docker.svg",
    "typescript.svg",
    "javascript.svg",
    "tailwindcss.svg",
    "html.svg",
    "css3.svg",
  ];
  return (
    <div>
      <div>
        <h3 className="text-4xl font-bold mb-5 mt-5 text-center">Skills</h3>
      </div>
      <div className="flex justify-center items-center space-x-3 text-3xl">
        {paths.map((x, index) =>
          x != "nextjs.svg" ? (
            <div key={index}>
              <Image src={`/skillicons/${x}`} alt={x} width={40} height={40} />
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
  );
}
