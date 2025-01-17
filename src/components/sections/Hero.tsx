import { TypeAnimation } from "react-type-animation";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 lg:px-8 relative">
      <div className="absolute top-8 left-8">
        <div className="flex flex-col items-center space-y-4">
          <img
            src="/logo-Allen.png"
            alt="Allen Logo"
            className="w-48 h-auto opacity-80"
          />
          <img
            src="/AllenZipho.png"
            alt="Allen Zipho"
            className="w-32 h-auto opacity-70"
          />
        </div>
      </div>
      <div className="max-w-4xl mx-auto text-center animate-fadeIn">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Allen Z Ndlovu
        </h1>
        <div className="text-xl lg:text-2xl text-foreground/80 mb-8 h-[60px]">
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              1000,
              "Software Engineer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>
        <p className="text-lg text-foreground/60 animate-fadeIn">
          Crafting digital experiences that make a difference
        </p>
      </div>
    </section>
  );
};