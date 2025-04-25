import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import "./Hero.css";
import logo from '../../assets/images/azn.png'
import profile from '../../assets/images/imae001.png'

export const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-logos">
        <img
          src={logo}
          alt="Allen Logo"
          className="hero-logo-main"
        />
        {/* <img
          src={logo}
          alt="Allen Zipho"
          className="hero-logo-secondary"
        />*/}
      </div>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi my name is Allen. 
          </h1>
          <h2>
          Finally made it past Hello World 😂 😂 😂
          </h2>

          <div className="animate">
            <h1>I am a <TypeAnimation
              sequence={[
                "Data Engineer",
                1000,
                "Full Stack Developer",
                1000,
                "Software Engineer",
                1000,
              ]}
              wrapper="span"
              speed={180}
              repeat={Infinity}
            /></h1>
            
          </div>
          <p className="hero-subtitle">
            Crafting digital experiences that make a difference.
          </p>
        </div>
        <div className="hero-image-container">
          <img
            src={profile}
            alt="Allen Profile"
            className="profile-image"
          />
          <div className="social-links">
            <a href="https://github.com/allen-zie" target="_blank" rel="noopener noreferrer" className="social-link">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/allen-zipho-ndlovu-a39488204/" target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin size={24} />
            </a>
            <a href="https://x.com/AllenZNdlovu3" target="_blank" rel="noopener noreferrer" className="social-link">
              <Twitter size={24} />
            </a>
            <a href="https://www.instagram.com/concerned_grootman/" target="_blank" rel="noopener noreferrer" className="social-link">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};