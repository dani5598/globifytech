"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { DataCubes } from "@/components/three/data-cubes";

export function DataCubesScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 40 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <Suspense fallback={null}>
        <DataCubes />
      </Suspense>
    </Canvas>
  );
}
