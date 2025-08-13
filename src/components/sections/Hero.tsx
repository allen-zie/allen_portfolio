
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import "./Hero.css";
import logo from '@/assets/images/azn.webp'
import profile from '@/assets/images/imae001.webp'

export const Hero = () => {
  return (
    <section id="home" className="hero relative overflow-hidden">
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
      <div className="hero-container relative z-10">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi my name is Allen. 
          </h1>
          <h2 className="hero-subtitle">
            Finally made it past Hello World 😂 😂 😂
          </h2>

          <div className="animate">
            <h1 className="relative">I am <TypeAnimation
              sequence={[
                "an aspiring Web3 Developer",
                500,
                "a Data Engineer",
                1000,
                "a Full Stack Developer",
                1000,
                "a Software Engineer",
                1000,
                "a Network Engineer",
                1000,
              ]}
              wrapper="span"
              speed={{ type: 'keyStrokeDelayInMs', value: 180 }}
              repeat={Infinity}
            /></h1>
            
          </div>
          <p className="hero-subtitle">
            Crafting digital experience that make's a difference.
          </p>
        </div>
        <div className="hero-image-container">
          <img
            src={profile}
            alt="Allen Profile"
            className="profile-image relative z-10"
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
      
      {/* Additional floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary/20 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-secondary/30 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
      <div className="absolute bottom-32 left-20 w-2 h-2 bg-primary/40 rounded-full animate-bounce" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
      <div className="absolute top-60 right-40 w-5 h-5 bg-secondary/20 rounded-full animate-bounce" style={{animationDelay: '0.5s', animationDuration: '3.5s'}}></div>
      <div className="absolute bottom-20 right-10 w-3 h-3 bg-primary/30 rounded-full animate-bounce" style={{animationDelay: '1.5s', animationDuration: '4.5s'}}></div>
      <div className="absolute top-80 left-40 w-4 h-4 bg-secondary/25 rounded-full animate-bounce" style={{animationDelay: '2.5s', animationDuration: '6s'}}></div>
    </section>
  );
};
