export const Skills = () => {
  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "CI/CD"] },
    { category: "Soft Skills", items: ["Problem Solving", "Team Leadership", "Communication", "Agile"] },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 lg:px-8 py-20">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-primary">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillSet) => (
            <div key={skillSet.category} className="p-6 rounded-lg bg-secondary/10 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary/80">{skillSet.category}</h3>
              <ul className="space-y-2">
                {skillSet.items.map((item) => (
                  <li key={item} className="text-foreground/70">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};