"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function SovereignGoldSculpture() {
  const groupRef = useRef<THREE.Group>(null);
  const goldRingOne = useRef<THREE.Mesh>(null);
  const goldRingTwo = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const scrollRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollRef.current = max > 0 ? window.scrollY / max : 0;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useFrame((state, delta) => {
    const s = scrollRef.current;

    if (groupRef.current) {
      const targetX = Math.sin(s * Math.PI * 2) * 1.1;
      const targetY = Math.cos(s * Math.PI) * 0.25;
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.04);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.04);

      groupRef.current.rotation.y += delta * 0.1;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        s * Math.PI + state.pointer.y * 0.18,
        0.04
      );
      groupRef.current.rotation.z = THREE.MathUtils.lerp(
        groupRef.current.rotation.z,
        -state.pointer.x * 0.18,
        0.04
      );
    }

    if (coreRef.current) {
      coreRef.current.rotation.y -= delta * 0.16;
      coreRef.current.rotation.x += delta * 0.08;
    }

    if (goldRingOne.current) {
      goldRingOne.current.rotation.z += delta * 0.12;
    }

    if (goldRingTwo.current) {
      goldRingTwo.current.rotation.x -= delta * 0.09;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Outer Ivory Wireframe Crest */}
      <mesh>
        <octahedronGeometry args={[2.15, 0]} />
        <meshStandardMaterial color="#F9F9F8" wireframe transparent opacity={0.14} />
      </mesh>

      {/* Secondary Gold Wireframe Shield */}
      <mesh rotation={[0, Math.PI / 4, 0]}>
        <octahedronGeometry args={[1.65, 0]} />
        <meshStandardMaterial color="#D4AF37" wireframe transparent opacity={0.32} />
      </mesh>

      {/* Deep Obsidian Sculptural Core */}
      <mesh ref={coreRef}>
        <dodecahedronGeometry args={[0.95, 0]} />
        <meshStandardMaterial color="#1A1A1A" roughness={0.2} metalness={0.9} flatShading />
      </mesh>

      {/* Royal Gold Orbital Ring (Creator-Brand Axis) */}
      <mesh ref={goldRingOne} rotation={[Math.PI / 2.2, 0.25, 0]}>
        <torusGeometry args={[2.85, 0.012, 16, 100]} />
        <meshBasicMaterial color="#D4AF37" transparent opacity={0.42} />
      </mesh>

      {/* Ivory Secondary Orbital Ring */}
      <mesh ref={goldRingTwo} rotation={[0.45, Math.PI / 3, 0]}>
        <torusGeometry args={[3.25, 0.008, 12, 90]} />
        <meshBasicMaterial color="#F9F9F8" transparent opacity={0.18} />
      </mesh>
    </group>
  );
}

export default function VidhaanScene() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mq.matches) setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <Canvas
        dpr={[1, 1.25]}
        camera={{ position: [0, 0, 6.2], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.85} />
        <directionalLight position={[5, 6, 4]} intensity={2.0} color="#D4AF37" />
        <directionalLight position={[-5, -4, -3]} intensity={1.1} color="#F9F9F8" />
        <SovereignGoldSculpture />
      </Canvas>
    </div>
  );
                       }
