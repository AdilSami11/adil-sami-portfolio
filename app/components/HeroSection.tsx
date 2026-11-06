import Link from "next/link";
import { Download, MoveDownLeft, MapPin, FolderGit2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="flex w-full h-screen items-center justify-center px-6 py-14 md:px-10 md:py-40">
      <div className="flex flex-col items-center text-center gap-1 px-3 mt-5  max-w-3xl mx-auto">
        <span className=" flex items-center gap-1.5 text-[15px]  text-[#A3A3A3] tracking-[1px] mt-5  md:text-[18px]">
          <MapPin size={15} className="text-[#C4F82A]" />
          Based in Peshawar, Pakistan
        </span>
        <h1 className="text-2xl text-white leading-tight md:text-6xl">
          Hey, I'm Adil Sami.
        </h1>
        <h1 className="text-2xl text-[#C4F82A] mb-1.5  leading-tight font-medium md:text-4xl ">
          Full-Stack Developer
        </h1>
        <p className="text-lg max-w-xl text-[#A3A3A3] font-normal leading-normal tracking-normal mb-1 md:text-xl md:max-w-2xl  ">
          I'm a Software Engineering student who builds web applications using
          React, Next.js, and Node.js. I enjoy working on the frontend, building
          backend functionality, and figuring out how everything fits together.
        </p>

        <div className="flex gap-3 mt-3">
          <Link href={"https://github.com/AdilSami11"} target="_blank">
            <button className="flex items-center justify-center gap-2 py-2 px-2.5 bg-[#C4F82A] border-amber-100 text-black rounded-2xl text-center font-medium md:py-2.5 md:px-6 ">
              <FaGithub size={20} />
              Github
            </button>
          </Link>
          <button className="flex items-center justify-center gap-2 py-2 px-2.5 bg-[#C4F82A] border-amber-100 text-black rounded-2xl text-center font-medium md:py-2.5 md:px-6 ">
            <Download size={20} />
            Downlaod Cv
          </button>
        </div>
        <div className="mt-13 ">
          <MoveDownLeft size={40} className="text-[#C4F82A]" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
