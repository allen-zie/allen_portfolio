import { useState } from "react";
import { cn } from "@/lib/utils";
import { Home, User, Code, Briefcase, Mail, Menu, X, ChevronRight } from "lucide-react";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Code },
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
        className="fixed top-4 right-4 z-50 p-2 bg-primary rounded-full lg:hidden"
      >
        {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
      </button>
      <nav
        className={cn(
          "fixed right-0 top-0 h-full bg-secondary/90 backdrop-blur-sm transition-all duration-300 ease-in-out z-40",
          isCollapsed ? "w-[60px]" : "w-[80px] lg:w-[100px]",
          !isOpen && "translate-x-full lg:translate-x-0"
        )}
      >
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -left-3 top-1/2 transform -translate-y-1/2 bg-primary p-1 rounded-full hidden lg:block"
        >
          <ChevronRight
            className={cn(
              "w-4 h-4 text-white transition-transform duration-300",
              isCollapsed ? "rotate-180" : ""
            )}
          />
        </button>
        <div className="space-y-8 mt-20">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="w-full flex flex-col items-center justify-center space-y-1 group"
            >
              <item.icon className="w-6 h-6 text-primary group-hover:text-primary/80 transition-colors" />
              {!isCollapsed && (
                <span className="text-xs text-primary/80 group-hover:text-primary transition-colors animate-fadeIn">
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