import { Mail, ArrowUpRight, MapPin } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const ContactSection = () => {
  const socials = [
    {
      name: "GitHub",
      description: "Explore my projects and code",
      icon: <FaGithub size={22} />,
      link: "https://github.com/AdilSami11",
    },
    {
      name: "LinkedIn",
      description: "Connect with me professionally",
      icon: <FaLinkedinIn size={22} />,
      link: "https://www.linkedin.com/in/your-profile",
    },
    {
      name: "Email",
      description: "adilsamikhan2005@gmail.com",
      icon: <Mail size={22} />,
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=adilsamikhan2005@gmail.com&su=Portfolio%20Contact",
    },
  ];

  return (
    <section className="w-full px-5 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C4F82A]/30 text-[#C4F82A] text-sm mb-5">
            <span className="w-2 h-2 rounded-full bg-[#C4F82A] animate-pulse"></span>
            GET IN TOUCH
          </span>

          <h2 className="text-3xl md:text-5xl font-semibold text-white">
            Let's build something <span className="text-[#C4F82A]">great.</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-xl mx-auto leading-relaxed">
            Have an opportunity, project idea, or just want to connect? Feel
            free to reach out. I'd love to hear from you.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {socials.map((item) => (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 p-5 md:p-6 bg-[#111111] border border-[#292929] rounded-xl hover:border-[#C4F82A]/60 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#1c1c1c] text-[#C4F82A] group-hover:bg-[#C4F82A] group-hover:text-black transition-all duration-300">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-white font-medium text-lg">
                    {item.name}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    {item.description}
                  </p>
                </div>
              </div>

              <ArrowUpRight
                size={21}
                className="text-gray-500 group-hover:text-[#C4F82A] group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300"
              />
            </a>
          ))}
        </div>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 mt-10 text-gray-500 text-sm">
          <MapPin size={16} className="text-[#C4F82A]" />
          Peshawar, Pakistan
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
