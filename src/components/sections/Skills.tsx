
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './Skills.css';

// Import skill images
import reactImage from '@/assets/images/ReactJS.png';
import pythonImage from '@/assets/images/Python.png';
import cssImage from '@/assets/images/CSS.png';
import javascriptImage from '@/assets/images/Javascript.png';
import htmlImage from '@/assets/images/HTML.png';

export const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "CI/CD"] },
    { category: "Soft Skills", items: ["Problem Solving", "Team Leadership", "Communication", "Agile"] },
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75, 
      containerRef.current.clientWidth / containerRef.current.clientHeight, 
      0.1, 
      1000
    );
    
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create textures
    const textureLoader = new THREE.TextureLoader();
    const textures = [
      textureLoader.load(reactImage),    // Front
      textureLoader.load(pythonImage),   // Back
      textureLoader.load(cssImage),      // Top
      textureLoader.load(javascriptImage), // Bottom
      textureLoader.load(htmlImage),     // Right
      textureLoader.load(pythonImage),   // Left - Using Python as placeholder for other skills
    ];
    
    // Create materials with textures
    const materials = textures.map(texture => {
      return new THREE.MeshBasicMaterial({ 
        map: texture,
        transparent: true,
      });
    });

    // Create cube
    const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);
    const cube = new THREE.Mesh(cubeGeometry, materials);
    scene.add(cube);

    // Position camera
    camera.position.z = 4;

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate cube
      cube.rotation.x += 0.005;
      cube.rotation.y += 0.01;
      
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title text-primary">Skills & Expertise</h2>

        {/* 3D Cube */}
        <div ref={containerRef} className="skills-cube-container"></div>

        {/* Skills Categories */}
        <div className="skills-categories">
          {skills.map((skillSet) => (
            <div key={skillSet.category} className="skill-category">
              <h3 className="category-title">{skillSet.category}</h3>
              <ul className="skills-list">
                {skillSet.items.map((item) => (
                  <li key={item} className="skill-item">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
