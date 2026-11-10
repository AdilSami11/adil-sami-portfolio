import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { MoveDownRight } from "lucide-react";

const ProjectsSection = () => {
  return (
    <div className="w-full py-10 px-5">
      <div className="max-w-6xl mx-auto px-5">
        {/* project-sec-title-wrapper */}
        <div className="flex items-center justify-center mb-5">
          <h3 className="text-2xl font-medium tracking-wide text-[#C4F82A]  md:text-4xl">
            PROJECTS
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-7 py-14 px-2 md:grid-cols-3 md:px-5">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
      <div className="mt-13 flex items-center justify-center ">
        <MoveDownRight size={40} className="text-[#C4F82A]" />
      </div>
    </div>
  );
};

export default ProjectsSection;
