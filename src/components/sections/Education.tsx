
import { GraduationCap, Briefcase, CalendarDays, FileText } from "lucide-react";
import "./Education.css";
import { Button } from "../ui/button";

export const Education = () => {
  const openResume = () => {
    const link = document.createElement("a");
    link.href = "/assets/documents/Allen Zipho Ndlovu Resume1.pdf"; // use / for public folder reference
    link.download = "Allen Zipho Ndlovu Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education & Experience</h2>
        
        <div className="timeline">
          
          <div className="timeline-container left-container">
            <div className="timeline-icon">
              <Briefcase size={24} />
            </div>
            <div className="timeline-content">
              <h3>Techincal Consualtant</h3>
              <p className="timeline-location">Pique Squid</p>
              <div className="timeline-date">
                <CalendarDays size={16} />
                <span>2025 - present</span>
              </div>
            </div>
          </div>

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
        
        <div className="resume-button-container">
          <Button 
            onClick={openResume} 
            className="resume-button"
            variant="default"
          >
            <FileText className="mr-2" />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};
