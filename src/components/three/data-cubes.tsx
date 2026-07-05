"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function FloatingCube({
  position,
  size,
  speed,
  color,
}: {
  position: [number, number, number];
  size: number;
  speed: number;
  color: string;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const offset = useMemo(() => Math.random() * 10, []);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed + offset;
    ref.current.position.y = position[1] + Math.sin(t) * 0.3;
    ref.current.rotation.x = t * 0.3;
    ref.current.rotation.y = t * 0.22;
  });

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial
        color="#0d1117"
        emissive={color}
        emissiveIntensity={0.4}
        metalness={0.85}
        roughness={0.2}
        transparent
        opacity={0.75}
      />
    </mesh>
  );
}

export function DataCubes() {
  return (
    <group>
      <ambientLight intensity={0.5} />
      <pointLight position={[3, 2, 4]} intensity={30} color="#009DFF" />
      <pointLight position={[-3, -2, -2]} intensity={16} color="#7FD3FF" />
      <FloatingCube position={[-1.6, 0.6, 0]} size={0.9} speed={0.5} color="#009DFF" />
      <FloatingCube position={[1.5, -0.5, -0.6]} size={0.6} speed={0.7} color="#009DFF" />
      <FloatingCube position={[0.3, 1.1, -1.2]} size={0.4} speed={0.9} color="#7FD3FF" />
      <FloatingCube position={[-0.7, -1.1, 0.4]} size={0.35} speed={0.6} color="#009DFF" />
    </group>
  );
}
