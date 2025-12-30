import React, { useState } from 'react';
import { useGameStore } from '../../store';
import { Html } from '@react-three/drei';

interface TreeProps {
  id: string;
  position: [number, number, number];
  scale?: number;
}

export const Tree: React.FC<TreeProps> = ({ id, position, scale = 1 }) => {
  const { addResource, removeNature, isBuilding, season } = useGameStore();
  const [hovered, setHovered] = useState(false);
  const [lastGathered, setLastGathered] = useState(0);
  const [clicks, setClicks] = useState(0);

  const getLeafColor = () => {
    switch (season) {
        case 'spring': return hovered ? "#2e8b2e" : "#228B22";
        case 'summer': return hovered ? "#008000" : "#006400";
        case 'autumn': return hovered ? "#CD853F" : "#D2691E"; // Orange-ish
        case 'winter': return hovered ? "#F0FFFF" : "#E0FFFF"; // Snowy
        default: return hovered ? "#2e8b2e" : "#228B22";
    }
  };

  const handleClick = (e: any) => {
    e.stopPropagation();
    addResource('wood', 10);
    setLastGathered(Date.now());
    
    const newClicks = clicks + 1;
    setClicks(newClicks);
    
    if (newClicks >= 5) {
        removeNature(id);
    }
  };

  return (
    <group 
        position={position} 
        scale={[scale * (hovered ? 1.1 : 1), scale * (hovered ? 1.1 : 1), scale * (hovered ? 1.1 : 1)]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={handleClick}
    >
      {/* Trunk */}
      <mesh position={[0, 0.75, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.3, 1.5, 6]} />
        <meshStandardMaterial color={hovered ? "#6d4c3d" : "#5C4033"} />
      </mesh>
      {/* Leaves */}
      <mesh position={[0, 2, 0]} castShadow>
        <coneGeometry args={[1, 2, 8]} />
        <meshStandardMaterial color={getLeafColor()} />
      </mesh>
      <mesh position={[0, 3, 0]} castShadow>
        <coneGeometry args={[0.8, 1.5, 8]} />
        <meshStandardMaterial color={getLeafColor()} />
      </mesh>
      
      {hovered && !isBuilding && (
         <Html position={[0, 4, 0]} center distanceFactor={10}>
            <div className="bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm whitespace-nowrap pointer-events-none flex flex-col items-center">
               <span>Gather Wood (+10)</span>
               <span className="text-[10px] text-gray-300">({5 - clicks} more to clear)</span>
            </div>
         </Html>
      )}
      
      {Date.now() - lastGathered < 1000 && (
         <Html position={[0, 2, 0]} center distanceFactor={10} zIndexRange={[100, 0]}>
            <div className="text-green-400 font-bold text-sm animate-bounce pointer-events-none">
               +10 Wood
            </div>
         </Html>
      )}
    </group>
  );
};

interface RockProps {
  id: string;
  position: [number, number, number];
  scale?: number;
}

export const Rock: React.FC<RockProps> = ({ id, position, scale = 1 }) => {
    const { addResource, removeNature, isBuilding, season } = useGameStore();
    const [hovered, setHovered] = useState(false);
    const [lastGathered, setLastGathered] = useState(0);
    const [clicks, setClicks] = useState(0);

    const getRockColor = () => {
        if (season === 'winter') return hovered ? "#cbd5e1" : "#e2e8f0";
        if (season === 'autumn') return hovered ? "#b0a18f" : "#8b7c6a";
        return hovered ? "#9ca3af" : "#6b7280";
    };

    const handleClick = (e: any) => {
        e.stopPropagation();
        addResource('stone', 5);
        if (Math.random() > 0.7) {
            addResource('iron', 2);
        }
        setLastGathered(Date.now());

        const newClicks = clicks + 1;
        setClicks(newClicks);
        
        if (newClicks >= 5) {
            removeNature(id);
        }
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

            {hovered && !isBuilding && (
                <Html position={[0, 1.5, 0]} center distanceFactor={10}>
                    <div className="bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm whitespace-nowrap pointer-events-none flex flex-col items-center">
                        <span>Gather Stone (+5)</span>
                        <span className="text-[10px] text-gray-300">({5 - clicks} more to clear)</span>
                    </div>
                </Html>
            )}

            {Date.now() - lastGathered < 1000 && (
                <Html position={[0, 1, 0]} center distanceFactor={10} zIndexRange={[100, 0]}>
                    <div className="text-gray-300 font-bold text-sm animate-bounce pointer-events-none">
                        +5 Stone
                    </div>
                </Html>
            )}
        </group>
    )
}

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
