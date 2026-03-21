import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { Suspense } from "react";

function FloatingSphere({ position, color, speed, distort, scale }: {
  position: [number, number, number];
  color: string;
  speed: number;
  distort: number;
  scale: number;
}) {
  return (
    <Float speed={speed} rotationIntensity={1.5} floatIntensity={2}>
      <mesh position={position} scale={scale}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.6}
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

function FloatingTorus({ position, color }: {
  position: [number, number, number];
  color: string;
}) {
  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
      <mesh position={position} scale={0.6}>
        <torusGeometry args={[1, 0.4, 16, 32]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.5}
          distort={0.2}
          speed={3}
          roughness={0.3}
          metalness={0.9}
        />
      </mesh>
    </Float>
  );
}

const FloatingScene = () => {
  return (
    <div className="absolute inset-0 -z-5 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.8} color="#2dd4a8" />
          <pointLight position={[-10, -10, -10]} intensity={0.4} color="#a855f7" />
          <FloatingSphere position={[-3, 1.5, 0]} color="#2dd4a8" speed={2} distort={0.4} scale={0.8} />
          <FloatingSphere position={[3.5, -1, 1]} color="#a855f7" speed={1.5} distort={0.3} scale={0.6} />
          <FloatingTorus position={[2, 2.5, -1]} color="#2dd4a8" />
          <FloatingSphere position={[-2, -2, 0.5]} color="#7c3aed" speed={1} distort={0.5} scale={0.5} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default FloatingScene;
