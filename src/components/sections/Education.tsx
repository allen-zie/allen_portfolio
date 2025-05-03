
import { GraduationCap, Briefcase, CalendarDays } from "lucide-react";
import "./Education.css";

export const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education & Experience</h2>
        
        <div className="timeline">
          <div className="timeline-container right-container">
            <div className="timeline-icon">
              <Briefcase size={24} />
            </div>
            <div className="timeline-content">
              <h3>Networks and Data Intern</h3>
              <p className="timeline-location">City of Bulawayo</p>
              <div className="timeline-date">
                <CalendarDays size={16} />
                <span>2023 - 2025</span>
              </div>
            </div>
          </div>
          
          <div className="timeline-container left-container">
            <div className="timeline-icon">
              <Briefcase size={24} />
            </div>
            <div className="timeline-content">
              <h3>Substitute Computer Science Teacher</h3>
              <p className="timeline-location">Embakwe High School</p>
              <div className="timeline-date">
                <CalendarDays size={16} />
                <span>2023</span>
              </div>
            </div>
          </div>
          
          <div className="timeline-container right-container">
            <div className="timeline-icon">
              <Briefcase size={24} />
            </div>
            <div className="timeline-content">
              <h3>Student Intern</h3>
              <p className="timeline-location">Wozatel Communications</p>
              <div className="timeline-date">
                <CalendarDays size={16} />
                <span>2021</span>
              </div>
            </div>
          </div>

          <div className="timeline-container left-container">
            <div className="timeline-icon">
              <GraduationCap size={24} />
            </div>
            <div className="timeline-content">
              <h3>BSc Honours Degree in Computer Science</h3>
              <p className="timeline-location">NUST Zimbabwe</p>
              <div className="timeline-date">
                <CalendarDays size={16} />
                <span>2018 - 2022</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
