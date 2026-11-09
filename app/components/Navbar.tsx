"use client";

import Link from "next/link";
import { Menu, CodeXml, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="flex items-center justify-between gap-4 w-[90%] max-w-3xl mx-auto top-5 bg-[#171717] fixed z-50  left-1/2 -translate-x-1/2 py-4 px-6 rounded-full border  border-[#333333] backdrop-blur-md  hover:border-[#C4F82A] hover:text-[#C4F82A] transition-all duration-200 ease-in">
      <div className="text-center text-[20px] text-[#C4F82A]">
        <span className="flex items-center justify-center gap-1 ">
          Adil.Dev <CodeXml size={20} className="text-[#C4F82A]" />
        </span>
      </div>

      <div className="hidden md:flex items-center justify-center gap-4">
        <Link
          href="#heroSec"
          className="text-[#A3A3A3] hover:text-[#C4F82A] transition-all duration-300 ease-in-out"
        >
          Home
        </Link>
        <Link
          href="/"
          className="text-[#A3A3A3] hover:text-[#C4F82A] transition-all duration-300 ease-in-out"
        >
          About
        </Link>
        <Link
          href="/"
          className="text-[#A3A3A3] hover:text-[#C4F82A] transition-all duration-300 ease-in-out"
        >
          Contact Me
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-[#C4F82A]"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-18 left-0 w-full bg-[#171717] border border-[#333333] rounded-2xl p-5 flex flex-col gap-5 md:hidden shadow-xl">
          <Link
            href="#heroSec"
            onClick={closeMenu}
            className="text-[#A3A3A3] hover:text-[#C4F82A] transition-colors"
          >
            Home
          </Link>

          <Link
            href="#aboutSec"
            onClick={closeMenu}
            className="text-[#A3A3A3] hover:text-[#C4F82A] transition-colors"
          >
            About
          </Link>

          <Link
            href="#contactSec"
            onClick={closeMenu}
            className="text-[#A3A3A3] hover:text-[#C4F82A] transition-colors"
          >
            Contact Me
          </Link>
        </div>
      )}
      {/* <span className="text-2xl md:hidden">
        <Menu size={24} />
      </span> */}
    </nav>
  );
};

export default Navbar;
