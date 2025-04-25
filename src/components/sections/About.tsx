export const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 lg:px-8 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-primary animate-fadeIn">About Me</h2>
        <div className="space-y-6 text-lg text-foreground/80">
          <p className="animate-fadeIn" style={{ animationDelay: "200ms" }}>
            Hello! I'm Allen, a passionate Techie with a keen eye for creating
            elegant solutions to complex problems. Be it web development, data
            engineering, network engineer or software engineering, I thrive on challenges and love to push the to limits of technology.
          </p>
          <p className="animate-fadeIn" style={{ animationDelay: "400ms" }}>
            With several years of experience in web development, I specialize in building
            scalable applications that deliver exceptional user experiences.
          </p>
          <p className="animate-fadeIn" style={{ animationDelay: "600ms" }}>
            When I'm not coding, you can find me exploring new technologies, Shoouting at TV screens hoping to see Lewis Hamilton become an 8 time world champion, or watch grown men trying to kill each other on the field in what americans call Football but we call it American Football (NFL) or sharing my knowledge with the developer community.
          </p>
        </div>
      </div>
    </section>
  );
};