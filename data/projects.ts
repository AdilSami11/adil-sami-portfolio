import type { Project } from "@/app/types/projectType";

export const projects: Project[] = [
  {
    id: 1,
    title: "NAQSH",
    description:
      "An e-commerce application for bags.An e-commerce application for bags ",
    image: "/images/EcommereceStore.webp",
    tech: ["Node.js", "Express", "EJS", "MongoDB"],
    github: "https://github.com/AdilSami11",
    live: "",
  },
  {
    id: 2,
    title: "Netflix Clone",
    description:
      "A responsive movie browsing application.A responsive movie browsing application ",
    image: "/images/Netflix_Clone.webp",
    tech: ["React", "CSS", "API"],
    github: "https://github.com/AdilSami11",
    live: "https://netflix-clone-website-navy.vercel.app/",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A responsive personal portfolio.",
    image: "/images/Portfolio.webp",
    tech: ["Nexts.js", "TypeScript.js", "Tailwind"],
    github: "https://github.com/AdilSami11",
    live: "",
  },
];
