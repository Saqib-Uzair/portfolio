
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce application with user authentication, product management, and payment integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API", "Redux"],
      features: ["User Authentication", "Shopping Cart", "Payment Processing", "Admin Dashboard", "Order Tracking"],
      githubUrl: "https://github.com/Saqib-Uzair",
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with real-time data visualization and scheduling features.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      technologies: ["React", "Express.js", "MongoDB", "Chart.js", "Socket.io", "JWT"],
      features: ["Real-time Analytics", "Post Scheduling", "Multi-platform Integration", "Custom Charts", "Team Collaboration"],
      githubUrl: "https://github.com/Saqib-Uzair",
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Collaborative task management application with drag-and-drop functionality and team workspace features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "React DnD"],
      features: ["Drag & Drop", "Real-time Collaboration", "File Attachments", "Time Tracking", "Project Templates"],
      githubUrl: "https://github.com/Saqib-Uzair",
    },
    {
      id: 4,
      title: "Weather Forecast App",
      description: "Beautiful weather application with location-based forecasts, weather maps, and severe weather alerts.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
      technologies: ["React", "Node.js", "OpenWeather API", "MongoDB", "Express", "PWA"],
      features: ["5-Day Forecast", "Weather Maps", "Location Services", "Offline Support", "Weather Alerts"],
      githubUrl: "https://github.com/Saqib-Uzair",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 group">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-white group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-400">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {project.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button
                    size="sm"
                    className="bg-gray-700 hover:bg-gray-600 text-white flex items-center gap-2"
                  >
                    <Github size={16} />
                    Code
                  </Button>
                  {/* <Button
                    size="sm"
                    className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white flex items-center gap-2"
                  >
                    <ArrowRight size={16} />
                    Live Demo
                  </Button> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
