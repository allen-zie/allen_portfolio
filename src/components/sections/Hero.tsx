export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 lg:px-8">
      <div className="max-w-4xl mx-auto text-center animate-fadeIn">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Allen Z Ndlovu
        </h1>
        <p className="text-xl lg:text-2xl text-foreground/80 mb-8">
          Full Stack Developer & Software Engineer
        </p>
        <p className="text-lg text-foreground/60">
          Crafting digital experiences that make a difference
        </p>
      </div>
    </section>
  );
};