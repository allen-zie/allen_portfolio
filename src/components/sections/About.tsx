
import './About.css';

export const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title text-primary animate-fadeIn">About Me</h2>
        <div className="about-content">
          <p className="animate-fadeIn" style={{ animationDelay: "200ms" }}>
            Hello! I'm Allen, a passionate Full Stack Developer with a keen eye for creating
            elegant solutions to complex problems.
          </p>
          <p className="animate-fadeIn" style={{ animationDelay: "400ms" }}>
            With several years of experience in web development, I specialize in building
            scalable applications that deliver exceptional user experiences.
          </p>
          <p className="animate-fadeIn" style={{ animationDelay: "600ms" }}>
            When I'm not coding, you can find me exploring new technologies, contributing to
            open-source projects, or sharing my knowledge with the developer community.
          </p>
        </div>
      </div>
    </section>
  );
};
