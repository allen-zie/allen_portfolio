import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
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
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi my name is Allen
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
        <div className="hero-image-container">
          <img
            src="/AllenZipho.png"
            alt="Allen Profile"
            className="profile-image"
          />
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <Twitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};