import Link from "next/link";
import { Menu, CodeXml } from "lucide-react";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between gap-4 w-[90%] max-w-3xl mx-auto top-5 bg-[#171717] fixed z-50  left-1/2 -translate-x-1/2 py-4 px-6 rounded-full border  border-[#333333] backdrop-blur-md ">
      <div className="text-center text-[20px] text-[#C4F82A]">
        <span className="flex items-center justify-center gap-1 ">
          Adil.Dev <CodeXml size={20} className="text-[#C4F82A]" />
        </span>
      </div>

      <div className="hidden md:flex items-center justify-center gap-4">
        <Link href="/" className="text-[#A3A3A3]">
          Home
        </Link>
        <Link href="/" className="text-[#A3A3A3]">
          About
        </Link>
        <Link href="/" className="text-[#A3A3A3]">
          Contact Me
        </Link>
      </div>

      <span className="text-2xl md:hidden">
        <Menu size={24} />
      </span>
    </nav>
  );
};

export default Navbar;
