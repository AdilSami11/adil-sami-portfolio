import AboutSecLeft from "./AboutSecLeft";
import AboutSecRight from "./AboutSecRight";

const AboutSection = () => {
  return (
    <section className="w-full px-5 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex items-center justify-center mb-14">
          <h2 className="text-3xl font-semibold tracking-wide text-white md:text-4xl">
            A Little About <span className="text-[#C4F82A]">Me.</span>
          </h2>
        </div>

        {/* About Content */}
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start">
          <AboutSecLeft />
          <AboutSecRight />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
