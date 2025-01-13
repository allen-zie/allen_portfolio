export const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management.",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool for remote teams.",
      tech: ["Next.js", "TypeScript", "PostgreSQL"],
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard with data visualization.",
      tech: ["React", "D3.js", "Python"],
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 lg:px-8 py-20">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-primary">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="p-6 rounded-lg bg-secondary/10 backdrop-blur-sm hover:bg-secondary/20 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-3 text-primary/80">{project.title}</h3>
              <p className="text-foreground/70 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};