import type { Project } from "../types/projectType";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="flex flex-col items-center gap-4  py-5 px-2 rounded-2xl border border-white/10 bg-[#111]  hover:border-[#C4F82A] transition-all duration-300 ease-in-out hover:-translate-y-1 ">
      <div className="w-full  overflow-hidden ">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1779896412371-e7576b47b584?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDE%3D"
          alt={project.title}
        />
      </div>

      <h2 className="text-2xl text-[#c5f82ad1]">{project.title}</h2>
      <p className="text-[#A3A3A3] text-center  ">{project.description}</p>
      <div className="flex flex-row items-center justify-center gap-2.5">
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
          Github
        </button>
        <button className="flex items-center gap-1.5 p-2 rounded-md text-[#c5f82ad1]">
          Live <ArrowUpRight />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
