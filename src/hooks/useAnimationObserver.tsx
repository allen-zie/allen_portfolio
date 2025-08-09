
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
            
            // Add random animation classes for variety
            const animations = ['perspective-slide', 'depth-emerge', 'scale-in', 'flip-in'];
            const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
            
            // Only add if not already present
            if (!entry.target.classList.contains('perspective-slide') && 
                !entry.target.classList.contains('depth-emerge') &&
                !entry.target.classList.contains('scale-in') &&
                !entry.target.classList.contains('flip-in')) {
              entry.target.classList.add(randomAnimation);
            }
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
