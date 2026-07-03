"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { NeuralOrb } from "@/components/three/neural-orb";

export function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 42 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <Suspense fallback={null}>
        <NeuralOrb />
      </Suspense>
    </Canvas>
  );
}
