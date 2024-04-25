import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useState } from 'react'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const { scene } = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.45} groundColor='red' />
      <spotLight
        position={[0, 20, 40]}
        angle={0.1}
        penumbra={1}
        intensity={1}
        castShadow
        shadowMapSize={1024} 
      />
      <pointLight intensity={1} />
      <primitive
        object={scene} // corrected from computer.scene to scene
        scale={isMobile? 0.7: 1.1}
        position={isMobile?[5, -10.5, 0.5]:[7.8, -6.5, 1.5]}
        rotation={[0.0, -0.46, -0.2]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addListener(handleMediaQueryChange);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: isMobile ? [60, 30, 20] : [40, 30, 20], fov: 20 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enablePan={false} 
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas; 
