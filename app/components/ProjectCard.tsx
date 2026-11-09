import type { Project } from "../types/projectType";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="flex flex-col items-center gap-4  py-5 px-2 rounded-2xl border border-white/10 bg-[#111]  hover:border-[#C4F82A] transition-all duration-300 ease-in-out hover:-translate-y-1 ">
      <div className="w-full  overflow-hidden ">
        <img
          className="w-full h-full object-cover"
          src={project.image}
          alt={project.title}
        />
      </div>

      <h2 className="text-2xl text-[#c5f82ad1]">{project.title}</h2>
      <p className="text-[#A3A3A3] text-center  ">{project.description}</p>
      <div className="flex flex-row items-center justify-center flex-wrap gap-2.5">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-white/10 bg-white/4 px-2.5 py-1 text-[13px] text-neutral-300 "
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex items-center w-full justify-between px-5">
        <button className="flex items-center gap-1.5 p-2 rounded-md text-[#c5f82ad1]">
          GitHub <FaGithub size={22} />
        </button>
        <Link href={project.live}>
          <button className="flex items-center gap-1.5 p-2 rounded-md text-[#c5f82ad1] cursor-pointer translate-x-0 hover:translate-x-1 transition all">
            Live <ArrowUpRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
