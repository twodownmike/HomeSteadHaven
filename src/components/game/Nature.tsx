import React, { useState, useRef, useMemo } from 'react';
import { useGameStore } from '../../store';
import { Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { FloatingText } from './FloatingText';
import * as THREE from 'three';

interface FloatingTextItem {
  id: string;
  text: string;
  color: string;
}

const LeafParticle: React.FC<{ color: string }> = ({ color }) => {
  const ref = useRef<THREE.Mesh>(null);
  const data = useMemo(() => ({
    speed: 0.2 + Math.random() * 0.5,
    rotationSpeed: Math.random() * 2,
    offset: Math.random() * Math.PI * 2,
    radius: 0.5 + Math.random() * 1.5,
  }), []);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * data.speed;
    const cycle = (t + data.offset) % 5; // 5 second fall cycle
    const progress = cycle / 5;
    
    ref.current.position.y = 3 - progress * 4; // fall from tree top
    ref.current.position.x = Math.sin(t * 2 + data.offset) * 0.5;
    ref.current.position.z = Math.cos(t * 1.5 + data.offset) * 0.5;
    
    ref.current.rotation.x = t * data.rotationSpeed;
    ref.current.rotation.y = t * data.rotationSpeed * 0.8;
    
    if (ref.current.material instanceof THREE.MeshStandardMaterial) {
      ref.current.material.opacity = progress < 0.1 ? progress * 10 : (progress > 0.8 ? (1 - progress) * 5 : 1);
    }
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[0.1, 0.02, 0.1]} />
      <meshStandardMaterial color={color} transparent opacity={0} />
    </mesh>
  );
};

const FallingLeaves: React.FC<{ active: boolean; season: string }> = ({ active, season }) => {
  if (!active || season !== 'autumn') return null;
  return (
    <group>
      {Array.from({ length: 5 }).map((_, i) => (
        <LeafParticle key={i} color={['#CD853F', '#D2691E', '#8B4513'][i % 3]} />
      ))}
    </group>
  );
};

const Particle: React.FC<{ color: string }> = ({ color }) => {
  const ref = useRef<THREE.Mesh>(null);
  const velocity = useMemo(() => new THREE.Vector3(
    (Math.random() - 0.5) * 2,
    Math.random() * 2 + 1,
    (Math.random() - 0.5) * 2
  ), []);

  useFrame((state) => {
    if (!ref.current) return;
    const delta = state.clock.getDelta();
    
    ref.current.position.addScaledVector(velocity, delta);
    velocity.y -= delta * 5; // gravity
    ref.current.scale.multiplyScalar(0.95);
    if (ref.current.material instanceof THREE.MeshStandardMaterial) {
      ref.current.material.opacity = Math.max(0, ref.current.material.opacity - delta);
    }
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[0.1, 0.1, 0.1]} />
      <meshStandardMaterial color={color} transparent opacity={1} />
    </mesh>
  );
};

const GatherEffect: React.FC<{ position: [number, number, number]; color: string; active: boolean }> = ({ position, color, active }) => {
  if (!active) return null;
  return (
    <group position={position}>
      {Array.from({ length: 8 }).map((_, i) => (
        <Particle key={i} color={color} />
      ))}
    </group>
  );
};

interface NatureProps {
  id: string;
  position: [number, number, number];
  scale?: number;
}

export const Tree: React.FC<NatureProps> = ({ id, position, scale = 1 }) => {
  const { addResource, removeNature, isBuilding, season } = useGameStore();
  const [hovered, setHovered] = useState(false);
  const [floatingTexts, setFloatingTexts] = useState<FloatingTextItem[]>([]);
  const [clicks, setClicks] = useState(0);
  const [isGathering, setIsGathering] = useState(false);
  const leafGroupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const windSpeed = 1.5;
    const windStrength = 0.03;
    
    if (leafGroupRef.current) {
      leafGroupRef.current.rotation.x = Math.sin(t * windSpeed) * windStrength;
      leafGroupRef.current.rotation.z = Math.cos(t * windSpeed * 0.7) * windStrength;
    }
  });

  const getLeafColor = () => {
    switch (season) {
      case 'spring': return hovered ? "#2e8b2e" : "#228B22";
      case 'summer': return hovered ? "#008000" : "#006400";
      case 'autumn': return hovered ? "#CD853F" : "#D2691E";
      case 'winter': return hovered ? "#F0FFFF" : "#E0FFFF";
      default: return hovered ? "#2e8b2e" : "#228B22";
    }
  };

  const handleClick = (e: any) => {
    e.stopPropagation();
    addResource('wood', 10);
    setIsGathering(true);
    setTimeout(() => setIsGathering(false), 500);
    
    const textId = Math.random().toString(36).substr(2, 9);
    setFloatingTexts(prev => [...prev, { id: textId, text: '+10 Wood', color: 'text-green-400' }]);
    
    const newClicks = clicks + 1;
    setClicks(newClicks);
    if (newClicks >= 5) removeNature(id);
  };

  return (
    <group 
      position={position} 
      scale={[scale * (hovered ? 1.1 : 1), scale * (hovered ? 1.1 : 1), scale * (hovered ? 1.1 : 1)]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={handleClick}
    >
      <mesh position={[0, 0.75, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.3, 1.5, 6]} />
        <meshStandardMaterial color={hovered ? "#6d4c3d" : "#5C4033"} />
      </mesh>
      <group ref={leafGroupRef}>
        <mesh position={[0, 2, 0]} castShadow>
          <coneGeometry args={[1, 2, 8]} />
          <meshStandardMaterial color={getLeafColor()} />
        </mesh>
        <mesh position={[0, 3, 0]} castShadow>
          <coneGeometry args={[0.8, 1.5, 8]} />
          <meshStandardMaterial color={getLeafColor()} />
        </mesh>
      </group>
      
      <GatherEffect position={[0, 1.5, 0]} color="#4d7c0f" active={isGathering} />
      <FallingLeaves active={!isBuilding} season={season} />
      
      {hovered && !isBuilding && (
        <Html position={[0, 4, 0]} center distanceFactor={10}>
          <div className="bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm whitespace-nowrap pointer-events-none flex flex-col items-center">
            <span>Gather Wood (+10)</span>
            <span className="text-[10px] text-gray-300">({5 - clicks} more to clear)</span>
          </div>
        </Html>
      )}
      
      {floatingTexts.map(ft => (
        <FloatingText 
          key={ft.id} 
          text={ft.text} 
          position={[0, 2, 0]} 
          color={ft.color}
          onComplete={() => setFloatingTexts(prev => prev.filter(t => t.id !== ft.id))}
        />
      ))}
    </group>
  );
};

export const Rock: React.FC<NatureProps> = ({ id, position, scale = 1 }) => {
  const { addResource, removeNature, isBuilding, season } = useGameStore();
  const [hovered, setHovered] = useState(false);
  const [floatingTexts, setFloatingTexts] = useState<FloatingTextItem[]>([]);
  const [clicks, setClicks] = useState(0);
  const [isGathering, setIsGathering] = useState(false);

  const getRockColor = () => {
    if (season === 'winter') return hovered ? "#cbd5e1" : "#e2e8f0";
    if (season === 'autumn') return hovered ? "#b0a18f" : "#8b7c6a";
    return hovered ? "#9ca3af" : "#6b7280";
  };

  const handleClick = (e: any) => {
    e.stopPropagation();
    addResource('stone', 5);
    setIsGathering(true);
    setTimeout(() => setIsGathering(false), 500);
    
    const newTexts: FloatingTextItem[] = [{ id: Math.random().toString(36).substr(2, 9), text: '+5 Stone', color: 'text-gray-300' }];
    if (Math.random() > 0.7) {
      addResource('iron', 2);
      newTexts.push({ id: Math.random().toString(36).substr(2, 9), text: '+2 Iron', color: 'text-blue-300' });
    }
    setFloatingTexts(prev => [...prev, ...newTexts]);

    const newClicks = clicks + 1;
    setClicks(newClicks);
    if (newClicks >= 5) removeNature(id);
  };

  return (
    <group 
      position={position} 
      scale={[scale * (hovered ? 1.1 : 1), scale * (hovered ? 1.1 : 1), scale * (hovered ? 1.1 : 1)]} 
      rotation={[0, Math.random() * Math.PI, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={handleClick}
    >
      <mesh castShadow receiveShadow>
        <dodecahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial color={getRockColor()} flatShading />
      </mesh>

      <GatherEffect position={[0, 0.5, 0]} color="#4b5563" active={isGathering} />

      {hovered && !isBuilding && (
        <Html position={[0, 1.5, 0]} center distanceFactor={10}>
          <div className="bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm whitespace-nowrap pointer-events-none flex flex-col items-center">
            <span>Gather Stone (+5)</span>
            <span className="text-[10px] text-gray-300">({5 - clicks} more to clear)</span>
          </div>
        </Html>
      )}

      {floatingTexts.map(ft => (
        <FloatingText 
          key={ft.id} 
          text={ft.text} 
          position={[0, 1, 0]} 
          color={ft.color}
          onComplete={() => setFloatingTexts(prev => prev.filter(t => t.id !== ft.id))}
        />
      ))}
    </group>
  );
};

export const EnvironmentProps: React.FC = () => {
  const natureItems = useGameStore((state) => state.nature);

  return (
    <group>
      {(natureItems || []).map((item) => (
        item.type === 'tree' ? 
        <Tree key={item.id} id={item.id} position={item.position} scale={item.scale} /> :
        <Rock key={item.id} id={item.id} position={item.position} scale={item.scale} />
      ))}
    </group>
  );
};
