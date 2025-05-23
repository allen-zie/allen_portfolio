
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import pizzasales from '@/assets/images/PizzaSales.webp';
import anchorofchrist from '@/assets/images/Anchor.webp';
import piquesquid from '@/assets/images/PiqueSquid.webp';
import gis from '@/assets/images/GIS.webp';
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
      title: "Pizza Sales Analytics Dashboard",
      description: "Learning data visualization using Power BI with the creation of pizza sales analytics dashboard.",
      tech: ["SQL", "Excel", "Microsoft Power BI"],
      image: pizzasales,
      link: "https://github.com/allen-zie/Pizza-Sales-Dashboard-Practise.git",
      //demo: "https://analytics.example.com",
    },
    {
      title: "Pique Squid Website",
      description: "A collaborative team effort that brought the PiqueSquid website to life, and provided an amazing opportunity to work with some of the most innovative minds in Zim-Tech Industry.",
      tech: ["HTML", "Javascript", "Bootstrap 5", "PostgreSQL"],
      image: piquesquid,
      //link: "https://github.com/username/task-management",
      demo: "https://www.piquesquid.com/",
    },
    {
      title: "GIS Data Cleaning and Analysis",
      description: "A project that involved cleaning and analyzing GIS data using Python and Pandas.",
      tech: ["Python", "Pandas", "Geopandas"],
      image: gis,
      link: "https://github.com/allen-zie/GIS_Data_CleanerAnalysis.git",
      //demo: "https://www.piquesquid.com/",
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
                <CardDescription style={{ color: "#E5DEFF" }}>{project.description}</CardDescription>
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
