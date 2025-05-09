
import { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

// Import skill images
import reactImage from '@/assets/images/ReactJS.png';
import pythonImage from '@/assets/images/Python.png';
import cssImage from '@/assets/images/CSS.png';
import javascriptImage from '@/assets/images/Javascript.png';
import htmlImage from '@/assets/images/HTML.png';
// Note: We're using JavaScript image for Java since there's no Java image in the assets

const SkillsCube = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Load textures for each face of the cube
  const textures = useLoader(THREE.TextureLoader, [
    reactImage,    // Front
    pythonImage,   // Back
    cssImage,      // Top
    javascriptImage, // Bottom
    htmlImage,     // Left
    javascriptImage  // Right (using JavaScript image for Java temporarily)
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
