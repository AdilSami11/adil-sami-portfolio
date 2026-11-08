import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
  FaChevronRight,
} from "react-icons/fa";
import { FaCode } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0a0a0a] text-white border-t border-[#C4F82A]">
      <div className="max-w-6xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1 - Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <FaCode size={30} color="#C4F82A" />

              <h2 className="text-3xl font-semibold">
                Adil <span className="text-[#C4F82A]">Sami</span>
              </h2>
            </div>

            <h3 className="text-gray-300 font-medium mb-3">
              Building ideas into web experiences.
            </h3>

            <p className="max-w-sm text-gray-400 leading-relaxed">
              A Full-Stack Developer passionate about creating modern,
              responsive and scalable web applications.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://github.com/AdilSami11"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 flex items-center justify-center border border-[#333] rounded-full text-white hover:text-[#C4F82A] hover:border-[#C4F82A] transition-all"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="YOUR_LINKEDIN_URL"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 flex items-center justify-center border border-[#333] rounded-full text-white hover:text-[#C4F82A] hover:border-[#C4F82A] transition-all"
              >
                <FaLinkedinIn size={20} />
              </a>

              <a
                href="mailto:adilsamikhan2005@gmail.com"
                aria-label="Email"
                className="w-11 h-11 flex items-center justify-center border border-[#333] rounded-full text-white hover:text-[#C4F82A] hover:border-[#C4F82A] transition-all"
              >
                <FaEnvelope size={19} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h2 className="text-xl font-semibold mb-6">Quick Links</h2>

            <div className="flex flex-col gap-4">
              {[
                { name: "Home", link: "#home" },
                { name: "Projects", link: "#projects" },
                { name: "About", link: "#about" },
                { name: "Contact", link: "#contact" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className="flex items-center gap-3 text-gray-400 hover:text-[#C4F82A] transition-colors"
                >
                  <FaChevronRight size={12} color="#C4F82A" />
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3 - Location & Contact */}
          <div>
            <h2 className="text-xl font-semibold mb-6">Location</h2>

            <div className="flex items-center gap-3 text-gray-400">
              <FaMapMarkerAlt color="#C4F82A" size={18} />
              Peshawar, Pakistan 🇵🇰
            </div>

            <h2 className="text-xl font-semibold mt-9 mb-4">Let's Connect</h2>

            <p className="text-gray-400 mb-5">
              Feel free to reach out anytime!
            </p>

            <a
              href="mailto:adilsamikhan2005@gmail.com"
              className="inline-flex items-center gap-2 text-[#C4F82A] hover:text-white transition-colors"
            >
              Send me an email
              <FaEnvelope size={15} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#292929]">
        <div className="max-w-6xl mx-auto px-5 py-6 flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-gray-400 text-sm text-center">
            © 2026 <span className="text-[#C4F82A]">Adil Sami.</span> All rights
            reserved.
          </p>

          <p className="text-gray-500 text-xs tracking-[0.3em]">
            DREAM <span className="text-[#C4F82A]">•</span> CODE{" "}
            <span className="text-[#C4F82A]">•</span> BUILD
          </p>

          <a
            href="#home"
            aria-label="Back to top"
            className="w-11 h-11 rounded-full border border-[#C4F82A] flex items-center justify-center text-[#C4F82A] hover:bg-[#C4F82A] hover:text-black transition-all"
          >
            <FaArrowUp size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
