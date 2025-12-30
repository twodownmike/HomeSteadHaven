import React, { useMemo, useRef } from 'react';
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
  onClick?: (e: any) => void;
}

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

export const BuildingModel: React.FC<BuildingModelProps> = ({ type, level = 1, selected, ghost, isValid = true, onClick }) => {
  const color = useMemo(() => {
    if (ghost && !isValid) return '#ff0000'; // Red if invalid placement

    switch (type) {
      case 'cabin': return '#8B4513'; // SaddleBrown
      case 'farm': return '#DAA520'; // GoldenRod
      case 'lumberMill': return '#556B2F'; // DarkOliveGreen
      case 'mine': return '#696969'; // DimGray
      case 'warehouse': return '#A0522D'; // Sienna
      case 'bakery': return '#d97706'; // Warm bread tone
      case 'well': return '#3b82f6'; // Water blue
      case 'campfire': return '#f97316'; // Orange glow
      case 'watchtower': return '#9ca3af'; // Gray timber
      case 'fishery': return '#0ea5e9'; // Water teal
      default: return '#ffffff';
    }
  }, [type, ghost, isValid]);

  const opacity = ghost ? 0.5 : 1;
  const transparent = ghost;

  return (
    <group onClick={onClick}>
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

      {/* Base (skip for farm to allow custom ground) */}
      {type !== 'farm' && (
        <mesh position={[0, 1, 0]} castShadow receiveShadow>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color={color} transparent={transparent} opacity={opacity} />
        </mesh>
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
        <mesh position={[0.8, 0.5, 0.8]} castShadow>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#2F2F2F" transparent={transparent} opacity={opacity} />
        </mesh>
      )}

      {/* Details for Lumber Mill */}
      {type === 'lumberMill' && (
        <mesh position={[0, 2.2, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.8, 0.8, 2.2, 8]} />
          <meshStandardMaterial color="#DEB887" transparent={transparent} opacity={opacity} />
        </mesh>
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
        </>
      )}

      {/* Details for Well */}
      {type === 'well' && (
        <>
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
      )}

      {/* Campfire */}
      {type === 'campfire' && (
        <>
          <mesh position={[0, 0.8, 0]} castShadow>
            <cylinderGeometry args={[0.6, 0.7, 0.4, 10]} />
            <meshStandardMaterial color="#92400e" transparent={transparent} opacity={opacity} />
          </mesh>
          <mesh position={[0, 1.1, 0]}>
            <coneGeometry args={[0.5, 0.6, 10]} />
            <meshStandardMaterial color="#f97316" emissive="#fb923c" emissiveIntensity={ghost ? 0 : 1.2} transparent={transparent} opacity={opacity} />
          </mesh>
          <mesh position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[1, 0.1, 8, 24]} />
            <meshStandardMaterial color="#57534e" transparent={transparent} opacity={opacity} />
          </mesh>
        </>
      )}

      {/* Watchtower */}
      {type === 'watchtower' && (
        <>
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
          <mesh position={[1, 1.2, 1]} rotation={[0, 0, Math.PI / 2]}>
            <boxGeometry args={[0.2, 2, 0.5]} />
            <meshStandardMaterial color="#d1d5db" transparent={transparent} opacity={opacity} />
          </mesh>
        </>
      )}

      {/* Fishery */}
      {type === 'fishery' && (
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
          <mesh position={[0, 0.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[3, 3]} />
            <meshStandardMaterial color="#38bdf8" transparent opacity={0.3} />
          </mesh>
        </group>
      )}

      {/* Trading Post */}
      {type === 'tradingPost' && (
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
          <mesh position={[0, 2.2, 0.5]} rotation={[Math.PI / 6, 0, 0]} castShadow>
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
      )}

      {/* Selection Ring */}
      {selected && !ghost && (
        <mesh position={[0, 0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[1.5, 1.7, 32]} />
          <meshBasicMaterial color="#00ff00" />
        </mesh>
      )}
      
      {/* Label/Level (only for real buildings) */}
      {!ghost && (
         <Html position={[0, 3, 0]} center distanceFactor={15}>
            <div className="bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm whitespace-nowrap">
               Lvl {level}
            </div>
         </Html>
      )}
    </group>
  );
};
