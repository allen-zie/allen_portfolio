
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import pizzasales from '@/assets/images/PizzaSales.webp';
import anchorofchrist from '@/assets/images/Anchor of Christ.webp';
import "./Projects.css";

export const Projects = () => {
  const projects = [
    {
      title: "The Anchor of Christ International Ministries",
      description: "A website for a church to evangelise the word of the Lord, God almight.",
      tech: ["WordPress", "Div"],
      image: anchorofchrist,
      //link: "https://github.com/username/ecommerce-platform",
      demo: "https://anchorofchrist.org/",
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard with data visualization.",
      tech: ["SQL", "Excel", "Microsoft Power BI"],
      image: anchorofchrist,
      link: "https://github.com/allen-zie/Pizza-Sales-Dashboard-Practise.git",
      //demo: "https://analytics.example.com",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool for remote teams.",
      tech: ["Next.js", "TypeScript", "PostgreSQL"],
      image: pizzasales,
      link: "https://github.com/username/task-management",
      demo: "https://task-app.example.com",
    },
  ];

  return (
    <section id="projects" className="projects-section flex items-center justify-center">
      <div className="projects-container">
        <h2 className="projects-heading text-primary animate-fade-in">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="project-card bg-secondary/10 backdrop-blur-sm border-secondary/20 hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="project-image">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary/90">{project.title}</CardTitle>
                <CardDescription className="text-foreground/70">{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="project-tech-item"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="project-footer">
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
