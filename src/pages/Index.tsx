
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
    // Add animation class to all section elements
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      if (!section.classList.contains('animate-on-scroll')) {
        section.classList.add('animate-on-scroll');
      }
    });
    
    // Refresh the observer
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((element) => {
      observerRef.current?.observe(element);
    });
  }, [observerRef]);

  return (
    <div className="bg-[#1A1F2C] text-white min-h-screen">
      <Navigation />
      <main className="pr-[80px] lg:pr-[100px]">
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
