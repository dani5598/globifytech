"use client";

import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import {
  Billboard,
  Environment,
  Float,
  Lightformer,
  MeshTransmissionMaterial,
  Text,
  Trail,
} from "@react-three/drei";
import * as THREE from "three";

const CYAN = "#00E5FF";
const ROYAL = "#009DFF";
const VIOLET = "#7C3AED";
const NAVY = "#0B1120";
const ICE = "#BFE9FF";
const GOLD = "#D9B36C";
const CHROME = "#DFE6EE";

const SKILLS = [
  "AI",
  "ML",
  "WEB DEV",
  "UI/UX",
  "CLOUD",
  "DATA",
  "SECURITY",
  "ROBOTICS",
  "AUTOMATION",
  "DESIGN",
  "VIDEO",
  "MARKETING",
];

function useGlowTexture() {
  return useMemo(() => {
    const size = 256;
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = size;
    const ctx = canvas.getContext("2d")!;
    const g = ctx.createRadialGradient(
      size / 2,
      size / 2,
      0,
      size / 2,
      size / 2,
      size / 2
    );
    g.addColorStop(0, "rgba(255,255,255,1)");
    g.addColorStop(0.3, "rgba(255,255,255,0.35)");
    g.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, size, size);
    return new THREE.CanvasTexture(canvas);
  }, []);
}

/** Volumetric-style glow halos behind the core (fake bloom, no postprocessing). */
function CoreGlow() {
  const texture = useGlowTexture();
  const cyanRef = useRef<THREE.Sprite>(null);
  const whiteRef = useRef<THREE.Sprite>(null);

  useFrame((state) => {
    const pulse = 1 + Math.sin(state.clock.elapsedTime * 1.6) * 0.08;
    cyanRef.current?.scale.setScalar(5.4 * pulse);
    whiteRef.current?.scale.setScalar(2 * pulse);
  });

  return (
    <group>
      <sprite ref={cyanRef} position={[0, 0, -0.6]} scale={5.4}>
        <spriteMaterial
          map={texture}
          color={ROYAL}
          transparent
          opacity={0.35}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </sprite>
      <sprite ref={whiteRef} position={[0, 0, -0.3]} scale={2}>
        <spriteMaterial
          map={texture}
          color="#ffffff"
          transparent
          opacity={0.22}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </sprite>
      <sprite position={[-1.8, -1.4, -1.2]} scale={3.2}>
        <spriteMaterial
          map={texture}
          color={VIOLET}
          transparent
          opacity={0.28}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </sprite>
    </group>
  );
}

/** Pulsing energy nucleus with an internal neural network. */
function EnergyNucleus() {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const matRef = useRef<THREE.MeshStandardMaterial>(null);
  const lightRef = useRef<THREE.PointLight>(null);

  const { neurons, links } = useMemo(() => {
    const count = 26;
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < count; i++) {
      const v = new THREE.Vector3()
        .randomDirection()
        .multiplyScalar(0.4 + Math.random() * 0.45);
      pts.push(v);
    }
    const neuronArr = new Float32Array(count * 3);
    pts.forEach((p, i) => p.toArray(neuronArr, i * 3));

    const linkPts: number[] = [];
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        if (pts[i].distanceTo(pts[j]) < 0.55) {
          linkPts.push(...pts[i].toArray(), ...pts[j].toArray());
        }
      }
    }
    const linkGeom = new THREE.BufferGeometry();
    linkGeom.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(linkPts), 3)
    );
    return { neurons: neuronArr, links: linkGeom };
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.25;
    const pulse = 1 + Math.sin(t * 2.2) * 0.06;
    coreRef.current?.scale.setScalar(pulse);
    if (matRef.current)
      matRef.current.emissiveIntensity = 1.6 + Math.sin(t * 2.2) * 0.7;
    if (lightRef.current)
      lightRef.current.intensity = 12 + Math.sin(t * 2.2) * 5;
  });

  return (
    <group ref={groupRef}>
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.5, 1]} />
        <meshStandardMaterial
          ref={matRef}
          color={NAVY}
          emissive={CYAN}
          emissiveIntensity={1.6}
          metalness={0.3}
          roughness={0.25}
        />
      </mesh>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[neurons, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color={ICE}
          size={0.03}
          sizeAttenuation
          transparent
          opacity={0.9}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
      <lineSegments geometry={links}>
        <lineBasicMaterial
          color={CYAN}
          transparent
          opacity={0.35}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>
      <pointLight ref={lightRef} color={CYAN} intensity={12} distance={7} />
    </group>
  );
}

/** Faceted crystal-glass shell with chromatic refraction, plus a holo lattice. */
function CrystalShell() {
  const shellRef = useRef<THREE.Mesh>(null);
  const latticeRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (shellRef.current) shellRef.current.rotation.y += delta * 0.1;
    if (latticeRef.current) {
      latticeRef.current.rotation.y -= delta * 0.06;
      latticeRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <group>
      <mesh ref={shellRef}>
        <icosahedronGeometry args={[1.22, 0]} />
        <MeshTransmissionMaterial
          samples={6}
          resolution={256}
          transmission={1}
          thickness={0.7}
          ior={1.4}
          roughness={0.02}
          chromaticAberration={0.4}
          distortion={0.12}
          distortionScale={0.4}
          attenuationDistance={1.5}
          attenuationColor="#9FD8FF"
          color="#D7ECFF"
          flatShading
        />
      </mesh>
      <mesh ref={latticeRef} scale={1.32}>
        <icosahedronGeometry args={[1.22, 1]} />
        <meshBasicMaterial
          color={CYAN}
          wireframe
          transparent
          opacity={0.12}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

/** Liquid-chrome band with a minimal gold accent ring. */
function ChromeBand() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) {
      groupRef.current.rotation.x = 1.15 + Math.sin(t * 0.4) * 0.08;
      groupRef.current.rotation.y = Math.sin(t * 0.25) * 0.15;
    }
  });

  return (
    <group ref={groupRef} rotation={[1.15, 0, -0.25]}>
      <mesh>
        <torusGeometry args={[1.62, 0.045, 48, 220]} />
        <meshStandardMaterial color={CHROME} metalness={1} roughness={0.15} />
      </mesh>
      <mesh>
        <torusGeometry args={[1.8, 0.006, 16, 200]} />
        <meshStandardMaterial
          color={GOLD}
          metalness={0.9}
          roughness={0.3}
          emissive={GOLD}
          emissiveIntensity={0.25}
        />
      </mesh>
    </group>
  );
}

/** Illuminated orbit ring with a comet node that leaves a light trail. */
function OrbitRing({
  radius,
  speed,
  tilt,
  color,
}: {
  radius: number;
  speed: number;
  tilt: number;
  color: string;
}) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = tilt;
      groupRef.current.rotation.y = state.clock.elapsedTime * speed;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius, 0.004, 8, 160]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      <Trail
        width={0.5}
        length={5}
        color={color}
        attenuation={(w) => w * w}
      >
        <mesh position={[radius, 0, 0]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      </Trail>
    </group>
  );
}

/** A floating holographic label chip, always facing the camera. */
function SkillChip({
  label,
  position,
}: {
  label: string;
  position: THREE.Vector3;
}) {
  const w = 0.4 + label.length * 0.068;
  const h = 0.3;
  const edges = useMemo(
    () => new THREE.EdgesGeometry(new THREE.PlaneGeometry(w, h)),
    [w]
  );

  return (
    <Float
      position={position}
      speed={1.6}
      rotationIntensity={0}
      floatIntensity={0.25}
    >
      <Billboard>
        <mesh>
          <planeGeometry args={[w, h]} />
          <meshBasicMaterial
            color={NAVY}
            transparent
            opacity={0.55}
            depthWrite={false}
            side={THREE.DoubleSide}
          />
        </mesh>
        <lineSegments geometry={edges}>
          <lineBasicMaterial color={CYAN} transparent opacity={0.45} />
        </lineSegments>
        <mesh position={[0, -h / 2, 0]}>
          <circleGeometry args={[0.018, 12]} />
          <meshBasicMaterial color={CYAN} />
        </mesh>
        <Text
          fontSize={0.1}
          letterSpacing={0.12}
          color={ICE}
          anchorX="center"
          anchorY="middle"
          position={[0, 0, 0.01]}
        >
          {label}
        </Text>
      </Billboard>
    </Float>
  );
}

/** Twelve discipline chips orbiting the core, tethered by faint data links. */
function SkillConstellation() {
  const groupRef = useRef<THREE.Group>(null);

  const chips = useMemo(
    () =>
      SKILLS.map((label, i) => {
        const angle = (i / SKILLS.length) * Math.PI * 2;
        const radius = i % 2 === 0 ? 2.55 : 2.95;
        return {
          label,
          position: new THREE.Vector3(
            Math.cos(angle) * radius,
            Math.sin(i * 2.1) * 1.05,
            Math.sin(angle) * radius
          ),
        };
      }),
    []
  );

  const tethers = useMemo(() => {
    const pts: number[] = [];
    chips.forEach(({ position }) => {
      pts.push(
        ...position.clone().multiplyScalar(0.45).toArray(),
        ...position.clone().multiplyScalar(0.86).toArray()
      );
    });
    const geom = new THREE.BufferGeometry();
    geom.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(pts), 3)
    );
    return geom;
  }, [chips]);

  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.06;
  });

  return (
    <group ref={groupRef}>
      <lineSegments geometry={tethers}>
        <lineBasicMaterial
          color={ROYAL}
          transparent
          opacity={0.18}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>
      {chips.map(({ label, position }) => (
        <SkillChip key={label} label={label} position={position} />
      ))}
    </group>
  );
}

function ParticleCloud({
  count,
  color,
  size,
  minRadius,
  maxRadius,
  speed,
}: {
  count: number;
  color: string;
  size: number;
  minRadius: number;
  maxRadius: number;
  speed: number;
}) {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = minRadius + Math.random() * (maxRadius - minRadius);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = radius * Math.cos(phi);
    }
    return arr;
  }, [count, minRadius, maxRadius]);

  useFrame((_, delta) => {
    if (pointsRef.current) pointsRef.current.rotation.y += delta * speed;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={color}
        size={size}
        sizeAttenuation
        transparent
        opacity={0.55}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export function NeuralOrb() {
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  const target = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    target.current.x = (state.pointer.x * Math.PI) / 10;
    target.current.y = (state.pointer.y * Math.PI) / 14;
    if (groupRef.current) {
      groupRef.current.rotation.y +=
        (target.current.x - groupRef.current.rotation.y) * 0.04;
      groupRef.current.rotation.x +=
        (-target.current.y - groupRef.current.rotation.x) * 0.04;
    }
  });

  const scale = Math.min(1, viewport.width / 6);

  return (
    <>
      <group ref={groupRef} scale={scale}>
        <ambientLight intensity={0.5} />
        <pointLight position={[4, 3, 4]} intensity={50} color={ROYAL} />
        <pointLight position={[-4, -2, -3]} intensity={30} color={VIOLET} />
        <CoreGlow />
        <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.5}>
          <EnergyNucleus />
          <CrystalShell />
          <ChromeBand />
        </Float>
        <OrbitRing radius={1.95} speed={0.4} tilt={0.5} color={CYAN} />
        <OrbitRing radius={2.35} speed={-0.28} tilt={-0.95} color={ROYAL} />
        <OrbitRing radius={2.75} speed={0.16} tilt={1.35} color={VIOLET} />
        <SkillConstellation />
        <ParticleCloud
          count={260}
          color="#7FD3FF"
          size={0.025}
          minRadius={2.4}
          maxRadius={4.6}
          speed={0.02}
        />
        <ParticleCloud
          count={140}
          color={VIOLET}
          size={0.022}
          minRadius={2.2}
          maxRadius={4.2}
          speed={-0.015}
        />
      </group>
      <Environment resolution={256} frames={1}>
        <Lightformer
          form="rect"
          intensity={5}
          color="#ffffff"
          position={[0, 4, 2]}
          scale={[6, 2, 1]}
        />
        <Lightformer
          form="rect"
          intensity={1.5}
          color="#AFC8E8"
          position={[0, -4, 1]}
          rotation-x={0.9}
          scale={[6, 2, 1]}
        />
        <Lightformer
          form="rect"
          intensity={2}
          color={CYAN}
          position={[4, 0, 3]}
          rotation-y={-0.8}
          scale={[3, 4, 1]}
        />
        <Lightformer
          form="rect"
          intensity={2}
          color={VIOLET}
          position={[-4, -1, 2]}
          rotation-y={0.8}
          scale={[3, 4, 1]}
        />
      </Environment>
    </>
  );
}
