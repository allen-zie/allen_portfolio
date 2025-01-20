import { TypeAnimation } from "react-type-animation";
import "./Hero.css";

export const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-logos">
        <img
          src="/logo-Allen.png"
          alt="Allen Logo"
          className="hero-logo-main"
        />
        <img
          src="/AllenZipho.png"
          alt="Allen Zipho"
          className="hero-logo-secondary"
        />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">
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
        <p className="hero-subtitle">
          Crafting digital experiences that make a difference
        </p>
      </div>
    </section>
  );
};