import { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Icosahedron, Sphere, Torus } from "@react-three/drei";
import type { Group, Mesh } from "three";

function Orb() {
  const group = useRef<Group>(null);
  const core = useRef<Mesh>(null);
  const { pointer } = useThree();

  useFrame((_state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.18;
    group.current.rotation.x += (pointer.y * 0.35 - group.current.rotation.x) * 0.05;
    group.current.position.x += (pointer.x * 0.35 - group.current.position.x) * 0.05;
    if (core.current) core.current.rotation.z += delta * 0.12;
  });

  return (
    <group ref={group}>
      <Sphere args={[1.35, 64, 64]}>
        <meshStandardMaterial color="#4F8CFF" roughness={0.15} metalness={0.85} emissive="#1b2a6b" emissiveIntensity={0.6} />
      </Sphere>
      <Icosahedron ref={core} args={[1.85, 1]}>
        <meshBasicMaterial color="#00E5FF" wireframe transparent opacity={0.35} />
      </Icosahedron>
      <Icosahedron args={[2.3, 0]}>
        <meshBasicMaterial color="#8B5CF6" wireframe transparent opacity={0.22} />
      </Icosahedron>
      <Torus args={[2.6, 0.012, 12, 120]} rotation={[Math.PI / 2.2, 0.2, 0]}>
        <meshBasicMaterial color="#00E5FF" transparent opacity={0.6} />
      </Torus>
      <Torus args={[2.95, 0.01, 12, 120]} rotation={[Math.PI / 1.7, 0.6, 0.4]}>
        <meshBasicMaterial color="#8B5CF6" transparent opacity={0.5} />
      </Torus>
    </group>
  );
}

function Particles() {
  const group = useRef<Group>(null);
  useFrame((_s, delta) => {
    if (group.current) group.current.rotation.y -= delta * 0.06;
  });
  const dots = Array.from({ length: 46 }, (_, i) => {
    const a = (i / 46) * Math.PI * 2;
    const r = 3.1 + (i % 5) * 0.16;
    return [Math.cos(a) * r, Math.sin(a * 1.7) * 1.5, Math.sin(a) * r] as [number, number, number];
  });
  return (
    <group ref={group}>
      {dots.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.035, 8, 8]} />
          <meshBasicMaterial color={i % 3 === 0 ? "#00E5FF" : "#4F8CFF"} transparent opacity={0.8} />
        </mesh>
      ))}
    </group>
  );
}

export default function TechOrb() {
  return (
    <Canvas camera={{ position: [0, 0, 7.5], fov: 45 }} dpr={[1, 1.6]} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 4, 5]} intensity={90} color="#8B5CF6" />
      <pointLight position={[-5, -3, 3]} intensity={70} color="#00E5FF" />
      <Suspense fallback={null}>
        <Orb />
        <Particles />
      </Suspense>
    </Canvas>
  );
}
