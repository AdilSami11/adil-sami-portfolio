import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiGit,
  SiGithub,
  SiPostman,
  SiMysql,
  SiTypescript,
} from "react-icons/si";

import { Code2, Server, Database, Wrench } from "lucide-react";

const AboutSecRight = () => {
  const techStack = [
    {
      title: "Frontend",
      icon: <Code2 />,
      tech: [
        { name: "HTML", icon: <SiHtml5 /> },
        { name: "CSS", icon: <SiCss /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "React", icon: <SiReact /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
      ],
    },
    {
      title: "Backend",
      icon: <Server />,
      tech: [
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "TypeScript", icon: <SiTypescript /> },
      ],
    },

    {
      title: "Database",
      icon: <Database />,
      tech: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Mongoose", icon: <SiMongoose /> },
        { name: "MySQL", icon: <SiMysql /> },
      ],
    },
    {
      title: "Tools & Others",
      icon: <Wrench />,
      tech: [
        { name: "Git", icon: <SiGit /> },
        { name: "GitHub", icon: <SiGithub /> },
        { name: "Postman", icon: <SiPostman /> },
      ],
    },
  ];

  return (
    <div className="w-full md:w-1/2 bg-[#111111] border border-[#292929] rounded-2xl p-6 md:p-8">
      <h2 className="text-2xl font-semibold text-white mb-8">My Tech Stack</h2>

      <div className="flex flex-col gap-7">
        {techStack.map((category) => (
          <div key={category.title}>
            <div className="flex items-center gap-2 mb-3 text-[#C4F82A]">
              {category.icon}
              <h3 className="text-base font-medium">{category.title}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.tech.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-2 px-3 py-2 bg-[#1c1c1c] border border-[#303030] rounded-lg text-gray-300 hover:border-[#C4F82A] transition-colors duration-300"
                >
                  <span className="text-[#C4F82A] text-lg">{item.icon}</span>

                  <span className="text-sm">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSecRight;
