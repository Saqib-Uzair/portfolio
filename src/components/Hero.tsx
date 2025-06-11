
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-blue-900/20"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mt-20">
        {/* Profile Image */}
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-blue-400 p-1">
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
              <img
                src="https://pbs.twimg.com/profile_images/1932723447471165440/kA9dFI5X_400x400.jpg"
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Saqib Uzair
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-4 animate-fade-in">
          Full Stack Developer
        </p>

        {/* Mission Statement */}
        <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in">
          Creating fast, scalable, and user-friendly web solutions with the MERN stack
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in">
          <Button
            onClick={scrollToProjects}
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
          >
            View Projects
          </Button>
          <a href="/resume.pdf" download>
            <Button
            variant="outline"
            className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-gray-900 px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
          >
            Download Resume
          </Button>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ArrowDown className="mx-auto text-gray-400" size={32} />
        </div>
      </div>
    </section>
  );
};
