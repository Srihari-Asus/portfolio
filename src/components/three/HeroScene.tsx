import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

interface SceneMeshProps {
  mousePos: { x: number; y: number };
}

// Inner Geometric Core & Outer Orbital Rings
function CrimsonArtifact({ mousePos }: SceneMeshProps) {
  const meshRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      // Smooth subtle tracking towards cursor
      const targetRotationY = t * 0.25 + mousePos.x * 0.4;
      const targetRotationX = Math.sin(t * 0.2) * 0.15 - mousePos.y * 0.3;
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotationY, 0.05);
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotationX, 0.05);
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * 0.4;
      ring1Ref.current.rotation.y += delta * 0.2;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= delta * 0.3;
      ring2Ref.current.rotation.z += delta * 0.25;
    }

    if (innerRef.current) {
      innerRef.current.rotation.y += delta * 0.5;
      innerRef.current.rotation.x -= delta * 0.3;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Central Metallic Geometric Icosahedron */}
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[1.35, 1]} />
        <meshStandardMaterial
          color="#150608"
          roughness={0.25}
          metalness={0.9}
          emissive="#730007"
          emissiveIntensity={0.65}
          wireframe={false}
        />
      </mesh>

      {/* Wireframe outer lattice */}
      <mesh>
        <icosahedronGeometry args={[1.37, 1]} />
        <meshBasicMaterial
          color="#ff2a38"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Inner pulsing core point light */}
      <pointLight color="#ff2a38" intensity={4} distance={6} />

      {/* Primary Orbital Torus Ring */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.0, 0.03, 16, 100]} />
        <meshStandardMaterial
          color="#ff2a38"
          emissive="#ff1f2d"
          emissiveIntensity={0.8}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Secondary Tilted Orbital Torus Ring */}
      <mesh ref={ring2Ref} rotation={[Math.PI / 3, 0, Math.PI / 4]}>
        <torusGeometry args={[2.3, 0.02, 16, 100]} />
        <meshStandardMaterial
          color="#e50914"
          emissive="#800008"
          emissiveIntensity={0.5}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>
    </group>
  );
}

// Surrounding Ambient Dust Particles
function FloatingParticles({ count = 120 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const redColor = new THREE.Color('#ff2a38');
    const dimColor = new THREE.Color('#4a1518');
    const silverColor = new THREE.Color('#e0e0e0');

    for (let i = 0; i < count; i++) {
      // Distribute particles in a spherical cloud around the artifact
      const r = 2.0 + Math.random() * 3.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);

      const roll = Math.random();
      const chosenColor = roll > 0.6 ? redColor : roll > 0.3 ? dimColor : silverColor;
      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.06;
      pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Fallback visual if WebGL is unavailable or fails
function WebGLFallback() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="w-64 h-64 rounded-full border border-crimson/30 animate-pulse flex items-center justify-center">
        <div className="w-48 h-48 rounded-full border border-crimson/50 animate-spin-slow flex items-center justify-center">
          <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-crimson-dark to-crimson shadow-[0_0_50px_rgba(229,9,20,0.5)]" />
        </div>
      </div>
    </div>
  );
}

export default function HeroScene() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates to [-1, 1]
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!hasWebGL) {
    return <WebGLFallback />;
  }

  return (
    <div className="w-full h-full relative pointer-events-none select-none">
      <Canvas
        camera={{ position: [0, 0, 5.8], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]} // optimized device pixel ratio to save GPU
        style={{ pointerEvents: 'none' }}
      >
        <ambientLight intensity={0.5} />
        {/* Cinematic Red Key Light */}
        <directionalLight position={[4, 5, 4]} intensity={2.5} color="#ff3b47" />
        {/* Cool Rim Light */}
        <directionalLight position={[-4, -3, -3]} intensity={1.2} color="#ffffff" />
        {/* Deep Ruby Fill Light */}
        <pointLight position={[0, -2, 2]} intensity={2} color="#96000a" />

        <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.8}>
          <CrimsonArtifact mousePos={mousePos} />
          <FloatingParticles count={110} />
        </Float>
      </Canvas>
    </div>
  );
}
