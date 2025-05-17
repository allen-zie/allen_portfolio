
import './About.css';

export const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title text-primary animate-fadeIn">About Me</h2>
        <div className="about-content">
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
            In Network Engineering and Design I focus on designing, implementing, and optimizing 
            robust network infrastructures. I specialize in enterprise networking, cloud networking, 
            security. I and am passionate about creating efficient, scalable, and secure solutions and
            optimizing network performance while reducing operational costs. 
          </p>
          <p className="animate-fadeIn" style={{ animationDelay: "800ms" }}>
            When I'm not coding, you'll find me exploring new technologies, shouting at the telly 
            hoping to see Lewis Hamilton become an eighth world champion, or watching grown men 
            clatter into each other on the pitch in what Americans call football but we call American 
            football (NFL), or sightseeing and travelling.
          </p>
          <p className="animate-fadeIn" style={{ animationDelay: "1000ms" }}><b><i>
            "Coding solves problems, but sports and travel fuel my creativity and keep me balanced."
          </i></b>
          </p>
        </div>
      </div>
    </section>
  );
};
