
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Specializations } from "@/components/sections/Specializations";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { useAnimationObserver } from "@/hooks/useAnimationObserver";

const Index = () => {
  const observerRef = useAnimationObserver();
  
  useEffect(() => {
    // Add animation classes to all section elements with variety
    const sections = document.querySelectorAll('section');
    const animationTypes = ['slide-in-left', 'slide-in-right', 'scale-in', 'flip-in'];
    
    sections.forEach((section, index) => {
      if (!section.classList.contains('animate-on-scroll')) {
        section.classList.add('animate-on-scroll');
        
        // Add variety to section animations
        const animationType = animationTypes[index % animationTypes.length];
        section.classList.add(animationType);
        
        // Add floating effect to some elements
        if (index % 2 === 0) {
          section.classList.add('floating-element');
        }
      }
    });
    
    // Add 3D perspective to the main container
    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.style.transformStyle = 'preserve-3d';
      mainElement.style.perspective = '1200px';
    }
    
    // Refresh the observer
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((element) => {
      observerRef.current?.observe(element);
    });
  }, [observerRef]);

  return (
    <div className="bg-[#1A1F2C] text-white min-h-screen" style={{ transformStyle: 'preserve-3d', perspective: '1200px' }}>
      <Navigation />
      <main className="pr-[80px] lg:pr-[100px]" style={{ transformStyle: 'preserve-3d' }}>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Specializations />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
