
import { Code, Smartphone, Network, Database, Brain, Link } from "lucide-react";
import "./Specializations.css";

interface SpecializationCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
  color: string;
}

const SpecializationCard = ({ title, description, icon, color }: SpecializationCardProps) => {
  return (
    <div className="specialization-card" style={{ borderColor: color }}>
      <div className="specialization-icon" style={{ backgroundColor: color }}>
        {icon}
      </div>
      <h3 className="specialization-title">{title}</h3>
      <p className="specialization-description">{description}</p>
    </div>
  );
};

export const Specializations = () => {
  const specializations = [
    {
      title: "Web Design & Development",
      description: "Creating cool websites using ReactJS, HTML, JavaScript, and Django.",
      icon: <Code className="w-8 h-8" />,
      color: "#9b87f5"
    },
    {
      title: "Mobile App Development",
      description: "Building mobile apps for fun using React-Native.",
      icon: <Smartphone className="w-8 h-8" />,
      color: "#7E69AB"
    },
    {
      title: "Network Design & Engineering",
      description: "Planning, designing, and implementing networks using CISCO packet tracer and GNS3.",
      icon: <Network className="w-8 h-8" />,
      color: "#6E59A5"
    },
    {
      title: "Data Analysis & Visualization",
      description: "Data cleaning and analysis using SQL and Python with MS Power BI for visualization.",
      icon: <Database className="w-8 h-8" />,
      color: "#E5DEFF"
    },
    {
      title: "AI & Machine Learning",
      description: "Building machine learning programs and leveraging AI tools for efficient solutions.",
      icon: <Brain className="w-8 h-8" />,
      color: "#D6BCFA"
    },
    {
      title: "Blockchain",
      description: "Exploring decentralized systems with Python, JavaScript, and Solidity.",
      icon: <Link className="w-8 h-8" />,
      color: "#F2FCE2"
    }
  ];

  return (
    <section id="specializations" className="specializations-section">
      <h2 className="section-title">Specializations</h2>
      <p className="section-subtitle">Areas of expertise and interest</p>
      
      <div className="specializations-grid">
        {specializations.map((spec, index) => (
          <SpecializationCard
            key={index}
            title={spec.title}
            description={spec.description}
            icon={spec.icon}
            color={spec.color}
          />
        ))}
      </div>
    </section>
  );
};
