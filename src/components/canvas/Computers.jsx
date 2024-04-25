import { Canvas } from '@react-three/fiber'
import React, { Suspense, useState } from 'react'
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
        scale={1.1}
        position={ [7.8, -6.5, 1.5]}
        rotation={[0.0, -0.46, -0.2]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [40, 30, 20], fov: 20 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense >
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
