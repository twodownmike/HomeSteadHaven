import React, { useMemo, useRef, useState, useEffect } from 'react';
import { BuildingType } from '../../types';
import { Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface AnimalProps {
  type: 'cow' | 'chicken';
  position: [number, number, number];
  rotation?: [number, number, number];
  ghost?: boolean;
  opacity?: number;
  transparent?: boolean;
}

interface BuildingModelProps {
    type: BuildingType;
    level?: number;
    selected?: boolean;
    ghost?: boolean;
    isValid?: boolean;
    constructionProgress?: number;
    onClick?: (e: any) => void;
}

const Scaffolding: React.FC<{ progress: number }> = ({ progress }) => {
  return (
    <group>
      {/* Base platform */}
      <mesh position={[0, 0.1, 0]} receiveShadow>
        <boxGeometry args={[3, 0.2, 3]} />
        <meshStandardMaterial color="#451a03" />
      </mesh>
      
      {/* Scaffolding structure */}
      <group>
        {[[-1.4, -1.4], [1.4, -1.4], [-1.4, 1.4], [1.4, 1.4]].map(([x, z], i) => (
          <mesh key={i} position={[x, 1.5, z]} castShadow>
            <boxGeometry args={[0.15, 3, 0.15]} />
            <meshStandardMaterial color="#5d4037" />
          </mesh>
        ))}
        {/* Horizontal planks */}
        {[0.8, 1.8, 2.8].map((y, i) => (
          <mesh key={i} position={[0, y, 0]} receiveShadow>
            <boxGeometry args={[3, 0.05, 3]} />
            <meshStandardMaterial color="#8b4513" transparent opacity={0.8} />
          </mesh>
        ))}
        
        {/* Dynamic Building Progress Visual */}
        <group position={[0, progress * 1.5, 0]} scale={[progress, progress, progress]}>
          <mesh castShadow>
            <boxGeometry args={[2.5, 0.1, 2.5]} />
            <meshStandardMaterial color="#451a03" />
          </mesh>
          <mesh position={[0, 0.5, 0]} castShadow>
             <boxGeometry args={[2, 1, 2]} />
             <meshStandardMaterial color="#b45309" transparent opacity={0.6} />
          </mesh>
        </group>
      </group>

      {/* Crossbeams */}
      <mesh position={[0, 1.5, 1.4]} castShadow>
        <boxGeometry args={[3, 0.1, 0.1]} />
        <meshStandardMaterial color="#78350f" />
      </mesh>
      <mesh position={[0, 1.5, -1.4]} castShadow>
        <boxGeometry args={[3, 0.1, 0.1]} />
        <meshStandardMaterial color="#78350f" />
      </mesh>
      <mesh position={[1.4, 1.5, 0]} rotation={[0, Math.PI/2, 0]} castShadow>
        <boxGeometry args={[3, 0.1, 0.1]} />
        <meshStandardMaterial color="#78350f" />
      </mesh>
      <mesh position={[-1.4, 1.5, 0]} rotation={[0, Math.PI/2, 0]} castShadow>
        <boxGeometry args={[3, 0.1, 0.1]} />
        <meshStandardMaterial color="#78350f" />
      </mesh>

      {/* Building "In Progress" - semi-transparent placeholder that scales up with progress */}
      <mesh position={[0, 1.5 * progress, 0]} scale={[progress, progress, progress]}>
        <boxGeometry args={[2.5, 3, 2.5]} />
        <meshStandardMaterial color="#fbbf24" transparent opacity={0.3} />
      </mesh>

      {/* Progress Label */}
      <Html position={[0, 3.5, 0]} center>
        <div className="bg-black/80 text-white text-[10px] px-2 py-0.5 rounded backdrop-blur-sm border border-yellow-500/50 flex flex-col items-center">
          <div className="font-bold uppercase tracking-tighter">Constructing...</div>
          <div className="text-yellow-400 font-mono">{Math.floor(progress * 100)}%</div>
          <div className="w-16 h-1 bg-gray-700 rounded-full mt-1 overflow-hidden">
            <div className="h-full bg-yellow-500 transition-all duration-300" style={{ width: `${progress * 100}%` }} />
          </div>
        </div>
      </Html>
    </group>
  );
};

const Animal: React.FC<AnimalProps> = ({ type, position, rotation = [0, 0, 0], ghost, opacity, transparent }) => {
  const meshRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ghost || !meshRef.current) return;
    const t = state.clock.elapsedTime;
    
    // Gentle bobbing/breathing
    meshRef.current.position.y = position[1] + Math.sin(t * (type === 'chicken' ? 4 : 1)) * 0.02;
    
    // Chicken pecking animation
    if (type === 'chicken' && headRef.current) {
        headRef.current.rotation.x = Math.sin(t * 8) > 0.8 ? 0.5 : 0;
    }
    
    // Subtle wandering rotation
    meshRef.current.rotation.y = rotation[1] + Math.sin(t * 0.5) * 0.1;
  });

  if (type === 'cow') {
    return (
      <group ref={meshRef} position={position} rotation={rotation}>
        {/* Body */}
        <mesh position={[0, 0.4, 0]} castShadow>
          <boxGeometry args={[0.6, 0.4, 0.4]} />
          <meshStandardMaterial color="#ffffff" transparent={transparent} opacity={opacity} />
        </mesh>
        {/* Spots */}
        <mesh position={[0.1, 0.4, 0.21]}>
          <boxGeometry args={[0.2, 0.2, 0.01]} />
          <meshStandardMaterial color="#000000" transparent={transparent} opacity={opacity} />
        </mesh>
        <mesh position={[-0.15, 0.5, -0.21]}>
          <boxGeometry args={[0.2, 0.2, 0.01]} />
          <meshStandardMaterial color="#000000" transparent={transparent} opacity={opacity} />
        </mesh>
        {/* Head */}
        <mesh position={[0.35, 0.5, 0]} castShadow>
          <boxGeometry args={[0.25, 0.25, 0.2]} />
          <meshStandardMaterial color="#ffffff" transparent={transparent} opacity={opacity} />
        </mesh>
        {/* Legs */}
        {[[-0.2, 0.1, 0.15], [0.2, 0.1, 0.15], [-0.2, 0.1, -0.15], [0.2, 0.1, -0.15]].map((p, i) => (
          <mesh key={i} position={p as [number, number, number]} castShadow>
            <boxGeometry args={[0.1, 0.2, 0.1]} />
            <meshStandardMaterial color="#ffffff" transparent={transparent} opacity={opacity} />
          </mesh>
        ))}
      </group>
    );
  }

  return (
    <group ref={meshRef} position={position} rotation={rotation}>
      {/* Body */}
      <mesh position={[0, 0.15, 0]} castShadow>
        <boxGeometry args={[0.2, 0.2, 0.15]} />
        <meshStandardMaterial color="#ffffff" transparent={transparent} opacity={opacity} />
      </mesh>
      {/* Head */}
      <mesh ref={headRef} position={[0.1, 0.25, 0]} castShadow>
        <boxGeometry args={[0.1, 0.1, 0.08]} />
        <meshStandardMaterial color="#ffffff" transparent={transparent} opacity={opacity} />
      </mesh>
      {/* Comb */}
      <mesh position={[0.1, 0.32, 0]}>
        <boxGeometry args={[0.05, 0.05, 0.02]} />
        <meshStandardMaterial color="#ef4444" transparent={transparent} opacity={opacity} />
      </mesh>
      {/* Beak */}
      <mesh position={[0.16, 0.24, 0]}>
        <boxGeometry args={[0.04, 0.03, 0.03]} />
        <meshStandardMaterial color="#fbbf24" transparent={transparent} opacity={opacity} />
      </mesh>
    </group>
  );
};

const SmokeParticle: React.FC<{ delay: number }> = ({ delay }) => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!ref.current) return;
    const t = (state.clock.elapsedTime + delay) % 2;
    const progress = t / 2;
    
    ref.current.position.y = progress * 1.5;
    ref.current.scale.setScalar(0.2 + progress * 0.8);
    ref.current.rotation.y = progress * Math.PI;
    ref.current.rotation.z = progress * Math.PI * 0.5;
    
    if (ref.current.material instanceof THREE.MeshStandardMaterial) {
      ref.current.material.opacity = (1 - progress) * 0.4;
    }
  });

  return (
    <mesh ref={ref} castShadow>
      <boxGeometry args={[0.3, 0.3, 0.3]} />
      <meshStandardMaterial color="#9ca3af" transparent opacity={0.4} />
    </mesh>
  );
};

const Smoke: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  return (
    <group position={position}>
      <SmokeParticle delay={0} />
      <SmokeParticle delay={0.7} />
      <SmokeParticle delay={1.4} />
    </group>
  );
};

const Campfire: React.FC<{ ghost?: boolean; transparent?: boolean; opacity?: number }> = ({ ghost, transparent, opacity }) => {
  const fireRef = useRef<THREE.Mesh>(null);
  const lightRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    if (ghost || !fireRef.current) return;
    const t = state.clock.elapsedTime;
    
    // Flicker scale
    const s = 1 + Math.sin(t * 10) * 0.1 + Math.sin(t * 25) * 0.05;
    fireRef.current.scale.set(s, s, s);
    
    // Flicker color
    if (fireRef.current.material instanceof THREE.MeshStandardMaterial) {
      const r = 0.9 + Math.sin(t * 15) * 0.1;
      fireRef.current.material.color.setRGB(r, 0.45, 0.1);
      fireRef.current.material.emissiveIntensity = 1 + Math.sin(t * 20) * 0.4;
    }

    if (lightRef.current) {
        lightRef.current.intensity = 2 + Math.sin(t * 15) * 0.5;
    }
  });

  return (
    <group>
      <mesh position={[0, 0.8, 0]} castShadow>
        <cylinderGeometry args={[0.6, 0.7, 0.4, 10]} />
        <meshStandardMaterial color="#92400e" transparent={transparent} opacity={opacity} />
      </mesh>
      <mesh ref={fireRef} position={[0, 1.1, 0]}>
        <coneGeometry args={[0.5, 0.6, 10]} />
        <meshStandardMaterial color="#f97316" emissive="#fb923c" emissiveIntensity={ghost ? 0 : 1.2} transparent={transparent} opacity={opacity} />
      </mesh>
      <mesh position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1, 0.1, 8, 24]} />
        <meshStandardMaterial color="#57534e" transparent={transparent} opacity={opacity} />
      </mesh>
      {!ghost && <pointLight ref={lightRef} position={[0, 1.5, 0]} color="#f97316" intensity={2} distance={5} />}
      {!ghost && <Smoke position={[0, 1.5, 0]} />}
    </group>
  );
};

const WellModel: React.FC<{ ghost?: boolean; transparent?: boolean; opacity?: number }> = ({ ghost, transparent, opacity }) => {
  const waterRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ghost || !waterRef.current) return;
    const t = state.clock.elapsedTime;
    waterRef.current.position.y = 1.1 + Math.sin(t * 2) * 0.05;
  });

  return (
    <>
      <mesh ref={waterRef} position={[0, 1.1, 0]} castShadow>
        <cylinderGeometry args={[0.85, 0.85, 0.1, 16]} />
        <meshStandardMaterial color="#3b82f6" transparent opacity={0.8} />
      </mesh>
      <mesh position={[0, 1.1, 0]} castShadow>
        <cylinderGeometry args={[0.9, 0.9, 1.2, 16]} />
        <meshStandardMaterial color="#60a5fa" transparent={transparent} opacity={opacity} />
      </mesh>
      <mesh position={[0, 1.7, 0]} castShadow>
        <torusGeometry args={[0.8, 0.12, 8, 24]} />
        <meshStandardMaterial color="#1d4ed8" transparent={transparent} opacity={opacity} />
      </mesh>
      <mesh position={[0, 2.3, 0]} castShadow>
        <cylinderGeometry args={[0.12, 0.12, 0.8, 8]} />
        <meshStandardMaterial color="#9ca3af" transparent={transparent} opacity={opacity} />
      </mesh>
    </>
  );
};

const FisheryModel: React.FC<{ ghost?: boolean; transparent?: boolean; opacity?: number }> = ({ ghost, transparent, opacity }) => {
  const waterRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ghost || !waterRef.current) return;
    const t = state.clock.elapsedTime;
    waterRef.current.position.y = 0.2 + Math.sin(t * 1.5) * 0.02;
  });

  return (
    <group>
      <mesh position={[0, 1, 0]} castShadow>
        <boxGeometry args={[2.5, 1.6, 2]} />
        <meshStandardMaterial color="#0ea5e9" transparent={transparent} opacity={opacity} />
      </mesh>
      <mesh position={[0, 2.3, 0]} castShadow>
        <boxGeometry args={[2.7, 0.4, 2.2]} />
        <meshStandardMaterial color="#075985" transparent={transparent} opacity={opacity} />
      </mesh>
      <mesh position={[1.6, 0.5, 0]} castShadow>
        <boxGeometry args={[1.5, 0.3, 1]} />
        <meshStandardMaterial color="#7c3aed" transparent={transparent} opacity={opacity} />
      </mesh>
      <mesh ref={waterRef} position={[0, 0.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[3, 3]} />
        <meshStandardMaterial color="#38bdf8" transparent opacity={0.3} />
      </mesh>
    </group>
  );
};

const TradingPostModel: React.FC<{ ghost?: boolean; transparent?: boolean; opacity?: number }> = ({ ghost, transparent, opacity }) => {
  const canopyRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ghost || !canopyRef.current) return;
    const t = state.clock.elapsedTime;
    canopyRef.current.rotation.x = (Math.PI / 6) + Math.sin(t * 2) * 0.02;
  });

  return (
    <group>
      {/* Main Stall */}
      <mesh position={[0, 1, 0]} castShadow>
         <boxGeometry args={[2.5, 1.5, 1.5]} />
         <meshStandardMaterial color="#78350f" transparent={transparent} opacity={opacity} />
      </mesh>
      {/* Counter */}
      <mesh position={[0, 0.8, 1]} castShadow>
         <boxGeometry args={[2.5, 0.8, 0.5]} />
         <meshStandardMaterial color="#b45309" transparent={transparent} opacity={opacity} />
      </mesh>
      {/* Canopy stripes */}
      <mesh ref={canopyRef} position={[0, 2.2, 0.5]} rotation={[Math.PI / 6, 0, 0]} castShadow>
         <boxGeometry args={[2.8, 0.2, 2.5]} />
         <meshStandardMaterial color="#ef4444" transparent={transparent} opacity={opacity} />
      </mesh>
      {/* Crates */}
      <mesh position={[-0.8, 0.4, 1.4]} castShadow>
         <boxGeometry args={[0.5, 0.5, 0.5]} />
         <meshStandardMaterial color="#d97706" transparent={transparent} opacity={opacity} />
      </mesh>
      <mesh position={[0.8, 0.4, 1.4]} castShadow>
         <boxGeometry args={[0.5, 0.5, 0.5]} />
         <meshStandardMaterial color="#fcd34d" transparent={transparent} opacity={opacity} />
      </mesh>
    </group>
  );
};

const LumberMillModel: React.FC<{ ghost?: boolean; transparent?: boolean; opacity?: number }> = ({ ghost, transparent, opacity }) => {
  const sawRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ghost || !sawRef.current) return;
    sawRef.current.rotation.x = state.clock.elapsedTime * 10;
  });

  return (
    <group>
      <mesh position={[0, 1, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.5, 2, 2.5]} />
        <meshStandardMaterial color="#556b2f" transparent={transparent} opacity={opacity} />
      </mesh>
      <mesh position={[0, 2.2, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.8, 0.8, 2.2, 8]} />
        <meshStandardMaterial color="#DEB887" transparent={transparent} opacity={opacity} />
      </mesh>
      {/* Saw Blade */}
      <mesh ref={sawRef} position={[1.3, 0.8, 0]} rotation={[0, Math.PI / 2, 0]} castShadow>
        <cylinderGeometry args={[0.6, 0.6, 0.05, 12]} />
        <meshStandardMaterial color="#9ca3af" metalness={0.8} roughness={0.2} transparent={transparent} opacity={opacity} />
      </mesh>
      {/* Saw Table */}
      <mesh position={[1.3, 0.4, 0]} castShadow>
        <boxGeometry args={[0.4, 0.8, 1.2]} />
        <meshStandardMaterial color="#4a3728" transparent={transparent} opacity={opacity} />
      </mesh>
    </group>
  );
};

const MineModel: React.FC<{ ghost?: boolean; transparent?: boolean; opacity?: number }> = ({ ghost, transparent, opacity }) => {
  const bucketRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ghost || !bucketRef.current) return;
    bucketRef.current.position.y = 1.5 + Math.sin(state.clock.elapsedTime * 2) * 1.2;
  });

  return (
    <group>
      <mesh position={[0, 1, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.5, 2, 2.5]} />
        <meshStandardMaterial color="#404040" transparent={transparent} opacity={opacity} />
      </mesh>
      {/* Entrance */}
      <mesh position={[0, 0.8, 1.26]} castShadow>
        <boxGeometry args={[1.2, 1.6, 0.1]} />
        <meshStandardMaterial color="#1a1a1a" transparent={transparent} opacity={opacity} />
      </mesh>
      {/* Pulley Structure */}
      <mesh position={[0.8, 2.5, 0.8]} castShadow>
        <boxGeometry args={[0.2, 3, 0.2]} />
        <meshStandardMaterial color="#262626" transparent={transparent} opacity={opacity} />
      </mesh>
      <mesh position={[0.8, 4, 0.4]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.1, 0.1, 1, 8]} />
        <meshStandardMaterial color="#262626" transparent={transparent} opacity={opacity} />
      </mesh>
      {/* Elevator Bucket */}
      <group ref={bucketRef} position={[0.8, 1.5, 0]}>
        <mesh castShadow>
          <boxGeometry args={[0.6, 0.6, 0.6]} />
          <meshStandardMaterial color="#525252" transparent={transparent} opacity={opacity} />
        </mesh>
        <mesh position={[0, 0.3, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 2, 4]} />
          <meshStandardMaterial color="#171717" transparent={transparent} opacity={opacity} />
        </mesh>
      </group>
    </group>
  );
};
const WorkshopModel: React.FC<{ ghost?: boolean; transparent?: boolean; opacity?: number }> = ({ ghost, transparent, opacity }) => {
  const gearRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ghost) return;
    const t = state.clock.elapsedTime;
    if (gearRef.current) gearRef.current.rotation.z = t * 2;
  });

  return (
    <group>
      <mesh position={[0, 1, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.5, 2, 2.5]} />
        <meshStandardMaterial color="#4b5563" transparent={transparent} opacity={opacity} />
      </mesh>
      {/* Gear */}
      <mesh ref={gearRef} position={[0, 2.2, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.8, 0.8, 0.2, 8]} />
        <meshStandardMaterial color="#9ca3af" metalness={0.8} roughness={0.2} transparent={transparent} opacity={opacity} />
      </mesh>
      {/* Spark Effect */}
      {!ghost && Math.random() > 0.9 && (
        <pointLight position={[1, 1, 1]} color="#60a5fa" intensity={2} distance={3} />
      )}
    </group>
  );
};

const WarehouseModel: React.FC<{ transparent?: boolean; opacity?: number }> = ({ transparent, opacity }) => {
  return (
    <group>
      <mesh position={[0, 1.2, 0]} castShadow receiveShadow>
        <boxGeometry args={[3, 2.4, 3]} />
        <meshStandardMaterial color="#78350f" transparent={transparent} opacity={opacity} />
      </mesh>
      {/* Loading Dock */}
      <mesh position={[0, 0.4, 1.6]} castShadow>
        <boxGeometry args={[2, 0.8, 0.4]} />
        <meshStandardMaterial color="#451a03" transparent={transparent} opacity={opacity} />
      </mesh>
      {/* Crates */}
      {[[-1.2, 0.4, 1.6], [1.2, 0.4, 1.6]].map((p, i) => (
        <mesh key={i} position={p as [number, number, number]} castShadow>
          <boxGeometry args={[0.6, 0.6, 0.6]} />
          <meshStandardMaterial color="#b45309" transparent={transparent} opacity={opacity} />
        </mesh>
      ))}
    </group>
  );
};

const InfirmaryModel: React.FC<{ transparent?: boolean; opacity?: number }> = ({ transparent, opacity }) => {
  return (
    <group>
      <mesh position={[0, 1, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.5, 2, 2.5]} />
        <meshStandardMaterial color="#f8fafc" transparent={transparent} opacity={opacity} />
      </mesh>
      {/* Red Cross Symbol */}
      <mesh position={[0, 1.2, 1.26]}>
        <boxGeometry args={[0.8, 0.2, 0.05]} />
        <meshStandardMaterial color="#ef4444" transparent={transparent} opacity={opacity} />
      </mesh>
      <mesh position={[0, 1.2, 1.26]}>
        <boxGeometry args={[0.2, 0.8, 0.05]} />
        <meshStandardMaterial color="#ef4444" transparent={transparent} opacity={opacity} />
      </mesh>
      {/* Roof */}
      <mesh position={[0, 2.2, 0]} rotation={[0, 0, Math.PI / 12]} castShadow>
        <boxGeometry args={[2.8, 0.2, 2.8]} />
        <meshStandardMaterial color="#334155" transparent={transparent} opacity={opacity} />
      </mesh>
    </group>
  );
};
const SelectionRing: React.FC = () => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    const scale = 1 + Math.sin(t * 4) * 0.05;
    ref.current.scale.set(scale, scale, 1);
  });

  return (
    <mesh ref={ref} position={[0, 0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <ringGeometry args={[1.5, 1.7, 32]} />
      <meshBasicMaterial color="#00ff00" transparent opacity={0.6} />
    </mesh>
  );
};

const WatchtowerModel: React.FC<{ ghost?: boolean; transparent?: boolean; opacity?: number }> = ({ ghost, transparent, opacity }) => {
  const lightRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ghost || !lightRef.current) return;
    lightRef.current.rotation.y = state.clock.elapsedTime * 0.5;
  });

  return (
    <group>
      <mesh position={[0, 2, 0]} castShadow>
        <cylinderGeometry args={[0.7, 0.7, 4, 8]} />
        <meshStandardMaterial color="#9ca3af" transparent={transparent} opacity={opacity} />
      </mesh>
      <mesh position={[0, 4.2, 0]} castShadow>
        <boxGeometry args={[2.2, 0.4, 2.2]} />
        <meshStandardMaterial color="#4b5563" transparent={transparent} opacity={opacity} />
      </mesh>
      <mesh position={[0, 4.8, 0]} castShadow>
        <coneGeometry args={[1.6, 1, 6]} />
        <meshStandardMaterial color="#1f2937" transparent={transparent} opacity={opacity} />
      </mesh>
      {/* Rotating Lookout Light */}
      {!ghost && (
        <group ref={lightRef} position={[0, 4.4, 0]}>
          <pointLight 
            color="#fef08a" 
            intensity={2} 
            distance={15} 
            castShadow 
          />
          <mesh position={[0.5, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.1, 0.1, 0.4, 8]} />
            <meshStandardMaterial color="#fbbf24" emissive="#f59e0b" emissiveIntensity={1} />
          </mesh>
        </group>
      )}
    </group>
  );
};

const UpgradeParticle: React.FC<{ color: string }> = ({ color }) => {
  const ref = useRef<THREE.Mesh>(null);
  const velocity = useMemo(() => new THREE.Vector3(
    (Math.random() - 0.5) * 4,
    Math.random() * 4 + 2,
    (Math.random() - 0.5) * 4
  ), []);

  useFrame((_state, delta) => {
    if (!ref.current) return;
    ref.current.position.addScaledVector(velocity, delta);
    velocity.y -= delta * 8; // gravity
    ref.current.scale.multiplyScalar(0.96);
    if (ref.current.material instanceof THREE.MeshStandardMaterial) {
      ref.current.material.opacity = Math.max(0, ref.current.material.opacity - delta * 0.8);
    }
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[0.2, 0.2, 0.2]} />
      <meshStandardMaterial color={color} transparent opacity={1} emissive={color} emissiveIntensity={2} />
    </mesh>
  );
};

const UpgradeEffect: React.FC<{ active: boolean }> = ({ active }) => {
  if (!active) return null;
  return (
    <group position={[0, 1, 0]}>
      {Array.from({ length: 20 }).map((_, i) => (
        <UpgradeParticle key={i} color="#fcd34d" />
      ))}
    </group>
  );
};

const MonumentModel: React.FC<{ ghost?: boolean; transparent?: boolean; opacity?: number }> = ({ ghost, transparent, opacity }) => {
  const relicRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ghost || !relicRef.current) return;
    const t = state.clock.elapsedTime;
    relicRef.current.rotation.y = t * 2;
    relicRef.current.position.y = 3.5 + Math.sin(t * 3) * 0.15;
  });

  return (
    <group>
      {/* Grand Base */}
      <mesh position={[0, 0.4, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.2, 0.8, 3.2]} />
        <meshStandardMaterial color="#44403c" transparent={transparent} opacity={opacity} />
      </mesh>
      <mesh position={[0, 1, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.6, 0.4, 2.6]} />
        <meshStandardMaterial color="#57534e" transparent={transparent} opacity={opacity} />
      </mesh>
      
      {/* Pillars */}
      {[[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([x, z], i) => (
        <mesh key={i} position={[x, 2.2, z]} castShadow>
          <boxGeometry args={[0.4, 2, 0.4]} />
          <meshStandardMaterial color="#78716c" transparent={transparent} opacity={opacity} />
        </mesh>
      ))}

      {/* Top Arch/Frame */}
      <mesh position={[0, 3.2, 0]} castShadow>
        <boxGeometry args={[2.8, 0.4, 2.8]} />
        <meshStandardMaterial color="#57534e" transparent={transparent} opacity={opacity} />
      </mesh>

      {/* Floating Relic */}
      <group ref={relicRef} position={[0, 3.5, 0]}>
        <mesh castShadow>
          <octahedronGeometry args={[0.4, 0]} />
          <meshStandardMaterial 
            color="#a855f7" 
            emissive="#d8b4fe" 
            emissiveIntensity={ghost ? 0 : 2} 
            transparent={transparent} 
            opacity={opacity} 
          />
        </mesh>
        {!ghost && <pointLight color="#d8b4fe" intensity={2} distance={6} />}
      </group>
    </group>
  );
};

const WastePitModel: React.FC<{ ghost?: boolean; transparent?: boolean; opacity?: number }> = ({ ghost, transparent, opacity }) => {
  return (
    <group>
      {/* Pit hole */}
      <mesh position={[0, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[2.5, 2.5]} />
        <meshStandardMaterial color="#1a1a1a" transparent={transparent} opacity={opacity} />
      </mesh>
      {/* Fence around the pit */}
      {[[-1.3, -1.3], [1.3, -1.3], [-1.3, 1.3], [1.3, 1.3]].map(([x, z], i) => (
        <mesh key={i} position={[x, 0.4, z]} castShadow>
          <boxGeometry args={[0.1, 0.8, 0.1]} />
          <meshStandardMaterial color="#451a03" transparent={transparent} opacity={opacity} />
        </mesh>
      ))}
      {/* Waste pile (simple brown hills) */}
      <mesh position={[0, 0.2, 0]} castShadow>
        <sphereGeometry args={[0.8, 8, 8, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#3f2b1a" transparent={transparent} opacity={opacity} />
      </mesh>
      {!ghost && <pointLight position={[0, 1, 0]} color="#451a03" intensity={0.5} distance={3} />}
    </group>
  );
};

export const BuildingModel: React.FC<BuildingModelProps> = ({ type, level = 1, selected, ghost = false, isValid = true, constructionProgress = 1, onClick }) => {
  const [showUpgrade, setShowUpgrade] = useState(false);
  const [mountScale, setMountScale] = useState(0);
  const [hovered, setHovered] = useState(false);
  const prevLevel = useRef(level);
  const groupRef = useRef<THREE.Group>(null);

  const isUnderConstruction = constructionProgress < 1 && !ghost;

  useEffect(() => {
    // Pop animation on mount
    setMountScale(0);
    const timeout = setTimeout(() => setMountScale(1), 50);
    
    if (level > prevLevel.current && !ghost) {
      setShowUpgrade(true);
      const timer = setTimeout(() => setShowUpgrade(false), 1500);
      prevLevel.current = level;
      return () => {
        clearTimeout(timer);
        clearTimeout(timeout);
      };
    }
    prevLevel.current = level;
    return () => clearTimeout(timeout);
  }, [level, ghost]);

  useFrame((state) => {
    if (groupRef.current && !ghost) {
      const targetScale = hovered ? mountScale * 1.05 : mountScale;
      groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.15);
    }
    
    if (groupRef.current && ghost) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 5) * 0.05;
      groupRef.current.scale.set(pulse, pulse, pulse);
    }
  });

  const opacity = ghost ? 0.5 : 1;
  const transparent = ghost;

  return (
    <group 
      ref={groupRef} 
      onClick={onClick} 
      onPointerOver={() => !ghost && setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={ghost ? [1, 1, 1] : [0, 0, 0]}
    >
      {/* Ghost overlay tint */}
      {ghost && !isValid && (
        <mesh position={[0, 1, 0]}>
          <boxGeometry args={[3.5, 4, 3.5]} />
          <meshStandardMaterial color="#ff0000" transparent opacity={0.2} />
        </mesh>
      )}

      {isUnderConstruction ? (
        <Scaffolding progress={constructionProgress} />
      ) : (
        <>
          {/* Barn */}
          {type === 'barn' && (
            <>
              {/* Main body */}
              <mesh position={[0, 1.5, 0]} castShadow receiveShadow>
                <boxGeometry args={[3, 3, 2.5]} />
                <meshStandardMaterial color="#b45309" roughness={0.7} transparent={transparent} opacity={opacity} />
              </mesh>
              {/* Accent trims */}
              <mesh position={[0, 1.6, 1.3]} castShadow>
                <boxGeometry args={[2.8, 0.2, 0.2]} />
                <meshStandardMaterial color="#fbbf24" emissive="#f59e0b" emissiveIntensity={ghost ? 0 : 0.2} transparent={transparent} opacity={opacity} />
              </mesh>
              {/* Roof */}
              <mesh position={[0, 3, 0]} rotation={[0, 0, Math.PI / 10]} castShadow>
                <boxGeometry args={[3.4, 0.25, 3]} />
                <meshStandardMaterial color="#78350f" roughness={0.5} transparent={transparent} opacity={opacity} />
              </mesh>
              <mesh position={[0, 3.2, 0]} rotation={[0, Math.PI, -Math.PI / 10]} castShadow>
                <boxGeometry args={[3.4, 0.25, 3]} />
                <meshStandardMaterial color="#652b0b" roughness={0.5} transparent={transparent} opacity={opacity} />
              </mesh>
              {/* Doors */}
              <mesh position={[0, 0.8, 1.31]} castShadow>
                <boxGeometry args={[1.2, 1.6, 0.1]} />
                <meshStandardMaterial color="#f8fafc" transparent={transparent} opacity={opacity} />
              </mesh>
              <mesh position={[0, 1.6, 1.32]} castShadow>
                <boxGeometry args={[0.6, 0.4, 0.1]} />
                <meshStandardMaterial color="#e2e8f0" transparent={transparent} opacity={opacity} />
              </mesh>
              {/* Loft window */}
              <mesh position={[0, 2.4, 1.26]} castShadow>
                <boxGeometry args={[0.7, 0.5, 0.1]} />
                <meshStandardMaterial color="#bfdbfe" emissive="#60a5fa" emissiveIntensity={ghost ? 0 : 0.5} transparent={transparent} opacity={opacity} />
              </mesh>
              {/* Silos for higher levels */}
              {level >= 2 && (
                <mesh position={[2, 1.5, -1]} castShadow>
                  <cylinderGeometry args={[0.5, 0.6, 3, 12]} />
                  <meshStandardMaterial color="#d4d4d8" transparent={transparent} opacity={opacity} />
                </mesh>
              )}
              {level >= 3 && (
                <mesh position={[-2, 1.7, 1]} castShadow>
                  <cylinderGeometry args={[0.6, 0.7, 3.4, 12]} />
                  <meshStandardMaterial color="#c084fc" emissive="#a855f7" emissiveIntensity={ghost ? 0 : 0.6} transparent={transparent} opacity={opacity} />
                </mesh>
              )}
            </>
          )}

          {/* Workshop */}
          {type === 'workshop' && (
            <WorkshopModel ghost={ghost} transparent={transparent} opacity={opacity} />
          )}

          {/* Warehouse */}
          {type === 'warehouse' && (
            <WarehouseModel transparent={transparent} opacity={opacity} />
          )}

          {/* Infirmary */}
          {type === 'infirmary' && (
            <InfirmaryModel transparent={transparent} opacity={opacity} />
          )}
          
          {/* Cabin details */}
          {type === 'cabin' && (
            <>
              {/* Timber walls */}
              <mesh position={[0, 1.2, 0]} castShadow receiveShadow>
                <boxGeometry args={[2.2, 1.6, 2.2]} />
                <meshStandardMaterial color="#8b5a2b" roughness={0.8} transparent={transparent} opacity={opacity} />
              </mesh>
              {/* Door */}
              <mesh position={[0, 0.6, 1.11]} castShadow>
                <boxGeometry args={[0.6, 1, 0.1]} />
                <meshStandardMaterial color="#5b3314" transparent={transparent} opacity={opacity} />
              </mesh>
              {/* Windows */}
              <mesh position={[-0.9, 1.1, 0]} castShadow>
                <boxGeometry args={[0.1, 0.6, 0.6]} />
                <meshStandardMaterial color="#93c5fd" emissive="#60a5fa" emissiveIntensity={ghost ? 0 : 0.4} transparent={transparent} opacity={opacity} />
              </mesh>
              <mesh position={[0.9, 1.1, 0]} castShadow>
                <boxGeometry args={[0.1, 0.6, 0.6]} />
                <meshStandardMaterial color="#93c5fd" emissive="#60a5fa" emissiveIntensity={ghost ? 0 : 0.4} transparent={transparent} opacity={opacity} />
              </mesh>
              {/* Roof */}
              <mesh position={[0, 2.4, 0]} rotation={[0, 0, Math.PI / 9]} castShadow>
                <boxGeometry args={[2.4, 0.2, 2.6]} />
                <meshStandardMaterial color="#4a3424" roughness={0.6} transparent={transparent} opacity={opacity} />
              </mesh>
              <mesh position={[0, 2.6, 0]} rotation={[0, Math.PI, -Math.PI / 9]} castShadow>
                <boxGeometry args={[2.4, 0.2, 2.6]} />
                <meshStandardMaterial color="#3b2a1c" roughness={0.6} transparent={transparent} opacity={opacity} />
              </mesh>
              {/* Chimney */}
              <mesh position={[0.7, 2.8, 0.7]} castShadow>
                <boxGeometry args={[0.4, 0.8, 0.4]} />
                <meshStandardMaterial color="#9ca3af" roughness={0.4} transparent={transparent} opacity={opacity} />
              </mesh>
              {!ghost && <Smoke position={[0.7, 3.2, 0.7]} />}
            </>
          )}

          {/* Farm details */}
          {type === 'farm' && (
            <>
              {/* Soil plot */}
              <mesh position={[0, 0.1, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                <planeGeometry args={[3, 3]} />
                <meshStandardMaterial color="#8b5a2b" transparent={transparent} opacity={opacity} />
              </mesh>
              {/* Raised rows */}
              {[ -1, -0.3, 0.4, 1.1 ].map((x, i) => (
                <mesh key={i} position={[x, 0.25, 0]} receiveShadow castShadow>
                  <boxGeometry args={[0.4, 0.2, 2.6]} />
                  <meshStandardMaterial color="#a16207" roughness={0.9} transparent={transparent} opacity={opacity} />
                </mesh>
              ))}
              {/* Crops */}
              {Array.from({ length: 8 }).map((_, i) => {
                const x = -1.2 + (i % 4) * 0.8;
                const z = -1 + Math.floor(i / 4) * 1.2;
                return (
                  <mesh key={`crop-${i}`} position={[x, 0.65, z]} castShadow>
                    <coneGeometry args={[0.18, 0.7, 6]} />
                    <meshStandardMaterial color="#22c55e" emissive="#16a34a" emissiveIntensity={ghost ? 0 : 0.3} transparent={transparent} opacity={opacity} />
                  </mesh>
                );
              })}
              {/* Animals */}
              {!ghost && (
                <>
                  <Animal type="cow" position={[-1, 0, -1]} rotation={[0, Math.PI / 4, 0]} opacity={opacity} transparent={transparent} />
                  <Animal type="chicken" position={[1, 0, 0.5]} rotation={[0, -Math.PI / 2, 0]} opacity={opacity} transparent={transparent} />
                  <Animal type="chicken" position={[0.5, 0, -0.8]} rotation={[0, Math.PI / 3, 0]} opacity={opacity} transparent={transparent} />
                </>
              )}
              {/* Barn shed */}
              <mesh position={[0, 1, 1.4]} castShadow>
                <boxGeometry args={[1.4, 1.2, 0.8]} />
                <meshStandardMaterial color="#b45309" roughness={0.8} transparent={transparent} opacity={opacity} />
              </mesh>
              <mesh position={[0, 1.8, 1.4]} castShadow>
                <boxGeometry args={[1.6, 0.3, 1]} />
                <meshStandardMaterial color="#92400e" roughness={0.7} transparent={transparent} opacity={opacity} />
              </mesh>
              {/* Fence corners */}
              {[[-1.6, -1.6], [1.6, -1.6], [-1.6, 1.6], [1.6, 1.6]].map(([fx, fz], i) => (
                <mesh key={`fence-${i}`} position={[fx, 0.6, fz]} castShadow>
                  <boxGeometry args={[0.15, 1.2, 0.15]} />
                  <meshStandardMaterial color="#d97706" transparent={transparent} opacity={opacity} />
                </mesh>
              ))}
            </>
          )}
          
          {/* Details for Mine */}
          {type === 'mine' && (
            <MineModel ghost={ghost} transparent={transparent} opacity={opacity} />
          )}

          {/* Details for Lumber Mill */}
          {type === 'lumberMill' && (
            <LumberMillModel ghost={ghost} transparent={transparent} opacity={opacity} />
          )}

          {/* Details for Bakery */}
          {type === 'bakery' && (
            <>
              <mesh position={[0, 2.3, 0]} castShadow>
                <cylinderGeometry args={[0.9, 0.9, 1.2, 12]} />
                <meshStandardMaterial color="#fbbf24" transparent={transparent} opacity={opacity} />
              </mesh>
              <mesh position={[0.6, 2.9, 0]} castShadow>
                <coneGeometry args={[0.4, 0.6, 6]} />
                <meshStandardMaterial color="#7c2d12" transparent={transparent} opacity={opacity} />
              </mesh>
              {!ghost && <Smoke position={[0.6, 3.2, 0]} />}
            </>
          )}

          {/* Details for Well */}
          {type === 'well' && (
            <WellModel ghost={ghost} transparent={transparent} opacity={opacity} />
          )}

          {/* Campfire */}
          {type === 'campfire' && (
            <Campfire ghost={ghost} transparent={transparent} opacity={opacity} />
          )}

          {/* Watchtower */}
          {type === 'watchtower' && (
            <WatchtowerModel ghost={ghost} transparent={transparent} opacity={opacity} />
          )}

          {/* Fishery */}
          {type === 'fishery' && (
            <FisheryModel ghost={ghost} transparent={transparent} opacity={opacity} />
          )}

          {/* Trading Post */}
          {type === 'tradingPost' && (
            <TradingPostModel ghost={ghost} transparent={transparent} opacity={opacity} />
          )}

          {/* Monument */}
          {type === 'monument' && (
            <MonumentModel ghost={ghost} transparent={transparent} opacity={opacity} />
          )}

          {/* Waste Pit */}
          {type === 'wastePit' && (
            <WastePitModel ghost={ghost} transparent={transparent} opacity={opacity} />
          )}
        </>
      )}

      {/* Selection Ring */}
      {selected && !ghost && (
        <SelectionRing />
      )}

      {/* Upgrade Burst */}
      <UpgradeEffect active={showUpgrade} />
      
      {/* Label/Level (only for real buildings) */}
      {!ghost && !isUnderConstruction && (
         <Html position={[0, 3, 0]} center distanceFactor={15}>
            <div className="bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm whitespace-nowrap">
               Lvl {level}
            </div>
         </Html>
      )}
    </group>
  );
};
