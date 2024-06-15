import Image from "next/image";
interface ProjectCardProps {
  ProjectName: string;
  imagepath: string;
  techstack: string;
}
export default function ProjectCard({
  ProjectName,
  imagepath,
  techstack,
}: ProjectCardProps) {
  return (
    <div className="relative flex w-80 mt-10 flex-col rounded-xl bg-gray-800 bg-clip-border text-white shadow-md transform transition-transform duration-300 hover:scale-105">
      <div className="h-48 w-full relative rounded-t-xl overflow-hidden">
        <Image
          src={imagepath}
          alt={ProjectName}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
        />
      </div>
      <div className="p-4">
        <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal antialiased">
          {ProjectName}
        </h5>
        <p className="text-xs">{techstack}</p>
      </div>
    </div>
  );
}
