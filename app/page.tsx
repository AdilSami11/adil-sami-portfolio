import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
export default function Home() {
  return (
    <div className="min-h-screen w-full relative">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
    </div>
  );
}
