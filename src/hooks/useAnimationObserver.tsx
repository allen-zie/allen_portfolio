
import { useEffect, useRef } from 'react';

export const useAnimationObserver = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            // Uncomment below to remove animation when scrolling out of view
            // entry.target.classList.remove('is-visible');
          }
        });
      },
      { 
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px' 
      }
    );
    
    animateElements.forEach((element) => {
      observerRef.current?.observe(element);
    });
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  
  return observerRef;
};
