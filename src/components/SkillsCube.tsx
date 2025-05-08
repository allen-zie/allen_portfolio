
import { useRef, useEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import * as THREE from 'three';

// Import skill images
import reactImage from '@/assets/images/ReactJS.png';
import pythonImage from '@/assets/images/Python.png';
import cssImage from '@/assets/images/CSS.png';
import javascriptImage from '@/assets/images/Javascript.png';
import htmlImage from '@/assets/images/HTML.png';
import javaImage from javascriptImage; // Temporarily using JS icon for Java

const SkillsCube = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Load textures for each face of the cube
  const textures = useLoader(TextureLoader, [
    reactImage,    // Front
    pythonImage,   // Back
    cssImage,      // Top
    javascriptImage, // Bottom
    htmlImage,     // Left
    javaImage      // Right
  ]);

  // Create materials for each face
  const materials = textures.map(texture => {
    // Set texture properties
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 1);

    // Create a material with the texture
    return new THREE.MeshStandardMaterial({
      map: texture,
      transparent: true,
      opacity: 0.95,
    });
  });

  // Animate the cube rotation
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Rotate slowly around y and x axes
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.rotation.x += delta * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[0.5, 0.5, 0]}>
      <boxGeometry args={[3, 3, 3]} />
      {materials.map((material, index) => (
        <primitive
          key={index}
          object={material}
          attach={`material-${index}`}
        />
      ))}
    </mesh>
  );
};

export default SkillsCube;
