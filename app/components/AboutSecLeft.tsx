const AboutSecLeft = () => {
  return (
    <div className="w-full md:w-1/2 flex flex-col gap-5">
      {/* Main Heading */}
      <h3 className="text-3xl md:text-4xl font-semibold leading-tight text-white">
        I turn ideas into{" "}
        <span className="text-[#C4F82A]">functional web applications.</span>
      </h3>

      {/* Introduction */}
      <p className="text-base md:text-lg leading-relaxed text-gray-400">
        I'm a Software Engineering student focused on full-stack web
        development. I work with React, Next.js, Node.js and MongoDB to build
        responsive interfaces and develop the backend functionality behind them.
      </p>

      {/* Experience */}
      <p className="text-base md:text-lg leading-relaxed text-gray-400">
        Through projects like NAQSH Store and Netflix Clone, I've gained
        practical experience in frontend development, backend functionality and
        problem-solving.
      </p>

      {/* Current Focus */}
      <div className="flex items-center gap-3 mt-2">
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#C4F82A] opacity-75 animate-ping"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-[#C4F82A]"></span>
        </span>

        <p className="text-sm md:text-base text-white">
          Currently focused on{" "}
          <span className="text-[#C4F82A]">Full-Stack Development</span>
        </p>
      </div>
    </div>
  );
};

export default AboutSecLeft;
