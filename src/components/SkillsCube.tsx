import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Update the import path for ReactJS to use .webp instead of .png
import reactImage from '@/assets/images/ReactJS.webp';
import javascriptImage from '@/assets/images/javascript.png';
import typescriptImage from '@/assets/images/typescript.png';
import htmlImage from '@/assets/images/html.png';
import cssImage from '@/assets/images/css.png';
import nextjsImage from '@/assets/images/nextjs.png';
import tailwindImage from '@/assets/images/tailwind.png';
import threejsImage from '@/assets/images/threejs.png';
import reduxImage from '@/assets/images/redux.png';
import jestImage from '@/assets/images/jest.png';
import gitImage from '@/assets/images/git.png';
import dockerImage from '@/assets/images/docker.png';
import nodeImage from '@/assets/images/node.png';
import expressImage from '@/assets/images/express.png';
import postgresqlImage from '@/assets/images/postgresql.png';
import pythonImage from '@/assets/images/python.png';
import djangoImage from '@/assets/images/django.png';
import fastApiImage from '@/assets/images/fastapi.png';
import solidityImage from '@/assets/images/solidity.png';
import reactNativeImage from '@/assets/images/react-native.png';

const SkillsCube = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Cube Geometry and Materials
    const textureLoader = new THREE.TextureLoader();

    const materials = [
      new THREE.MeshBasicMaterial({ map: textureLoader.load(reactImage) }),
      new THREE.MeshBasicMaterial({ map: textureLoader.load(javascriptImage) }),
      new THREE.MeshBasicMaterial({ map: textureLoader.load(typescriptImage) }),
      new THREE.MeshBasicMaterial({ map: textureLoader.load(htmlImage) }),
      new THREE.MeshBasicMaterial({ map: textureLoader.load(cssImage) }),
      new THREE.MeshBasicMaterial({ map: textureLoader.load(nextjsImage) }),
      new THREE.MeshBasicMaterial({ map: textureLoader.load(tailwindImage) }),
      new THREE.MeshBasicMaterial({ map: textureLoader.load(threejsImage) }),
      new THREE.MeshBasicMaterial({ map: textureLoader.load(reduxImage) }),
      new THREE.MeshBasicMaterial({ map: textureLoader.load(jestImage) }),
      new THREE.MeshBasicMaterial({ map: textureLoader.load(gitImage) }),
      new THREE.MeshBasicMaterial({ map: textureLoader.load(dockerImage) }),
      new THREE.MeshBasicMaterial({ map: textureLoader.load(nodeImage) }),
      new THREE.MeshBasicMaterial({ map: textureLoader.load(expressImage) }),
      new THREE.MeshBasicMaterial({ map: textureLoader.load(postgresqlImage) }),
      new THREE.MeshBasicMaterial({ map: textureLoader.load(pythonImage) }),
      new THREE.MeshBasicMaterial({ map: textureLoader.load(djangoImage) }),
      new THREE.MeshBasicMaterial({ map: textureLoader.load(fastApiImage) }),
      new THREE.MeshBasicMaterial({ map: textureLoader.load(solidityImage) }),
      new THREE.MeshBasicMaterial({ map: textureLoader.load(reactNativeImage) }),
    ];

    const geometry = new THREE.BoxGeometry(3, 3, 3);
    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    camera.position.z = 5;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Handle Resize
    const handleResize = () => {
      if (!mountRef.current) return;
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ width: '300px', height: '300px' }} />;
};

export default SkillsCube;
