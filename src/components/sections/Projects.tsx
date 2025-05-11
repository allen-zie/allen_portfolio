
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import pizzasales from '../../assets/images/PizzaSales.png';

export const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management.",
      tech: ["React", "Node.js", "MongoDB"],
      image: pizzasales,
      link: "https://github.com/username/ecommerce-platform",
      demo: "https://ecommerce-demo.example.com",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool for remote teams.",
      tech: ["Next.js", "TypeScript", "PostgreSQL"],
      image: pizzasales,
      link: "https://github.com/username/task-management",
      demo: "https://task-app.example.com",
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard with data visualization.",
      tech: ["React", "D3.js", "Python"],
      image: pizzasales,
      link: "https://github.com/username/analytics-dashboard",
      demo: "https://analytics.example.com",
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-primary animate-fade-in">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="bg-secondary/10 backdrop-blur-sm border-secondary/20 hover:border-primary/50 transition-all duration-300 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary/90">{project.title}</CardTitle>
                <CardDescription className="text-foreground/70">{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between">
                {project.link && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                )}
                {project.demo && (
                  <Button variant="default" size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
