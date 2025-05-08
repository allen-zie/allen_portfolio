
import './Skills.css';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import SkillsCube from '../SkillsCube';

// Import skill images
import reactImage from '@/assets/images/ReactJS.png';
import pythonImage from '@/assets/images/Python.png';
import cssImage from '@/assets/images/CSS.png';
import javascriptImage from '@/assets/images/Javascript.png';
import htmlImage from '@/assets/images/HTML.png';

interface Skill {
  name: string;
  image: string;
  percentage: number;
}

export const Skills = () => {
  const skills: Skill[] = [
    { name: "React", image: reactImage, percentage: 90 },
    { name: "HTML", image: javascriptImage, percentage: 90 },
    { name: "CSS", image: javascriptImage, percentage: 95 },
    { name: "Java", image: javascriptImage, percentage: 65 },
    { name: "Javascript", image: javascriptImage, percentage: 80 },
    { name: "SQL", image: javascriptImage, percentage: 85 },
    { name: "Python", image: pythonImage, percentage: 65 },
    { name: "Microsoft Power BI", image: javascriptImage, percentage: 90 },
    { name: "Solidity", image: javascriptImage, percentage: 15 },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">Skills & Expertise</h2>

        <div className="skills-cube-container">
          <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
            <ambientLight intensity={1.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Suspense fallback={null}>
              <SkillsCube />
            </Suspense>
            <OrbitControls 
              autoRotate
              autoRotateSpeed={1.5}
              enableZoom={false}
              enablePan={false}
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={Math.PI * 3 / 4}
            />
          </Canvas>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <div className="skill-icon">
                  <img src={skill.image} alt={`${skill.name} icon`} />
                </div>
                <h3 className="skill-name">{skill.name}</h3>
              </div>
              
              <div className="skill-bar-container">
                <div 
                  className="skill-bar" 
                  style={{ width: `${skill.percentage}%` }}
                >
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
