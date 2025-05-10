
import { useState } from "react";
import { Home, User, Code, Briefcase, Mail, Menu, X, ChevronRight, GraduationCap, Brain } from "lucide-react";
import "./Navigation.css";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "skills", label: "Skills", icon: Code },
  { id: "specializations", label: "Specializations", icon: Brain },
  { id: "projects", label: "Projects", icon: Briefcase },
  { id: "contact", label: "Contact", icon: Mail },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 bg-primary rounded-full lg:hidden animate-fade-in"
      >
        {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
      </button>
      <nav
        className={`navigation ${isCollapsed ? 'navigation-collapsed' : 'navigation-expanded'} ${
          !isOpen && 'translate-x-full lg:translate-x-0'
        } animate-slide-in-left lg:animate-fade-in`}
      >
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="navigation-button hidden lg:block animate-fade-in"
          style={{ animationDelay: "300ms" }}
        >
          <ChevronRight
            className={`navigation-icon ${isCollapsed ? 'navigation-icon-collapsed' : ''}`}
          />
        </button>
        <div className="navigation-menu">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="navigation-item animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <item.icon className="navigation-item-icon" />
              {!isCollapsed && (
                <span className="navigation-item-label">
                  {item.label}
                </span>
              )}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
};
