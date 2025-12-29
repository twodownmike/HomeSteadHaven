import React, { useMemo, useState } from 'react';
import { useGameStore } from '../../store';
import { Html } from '@react-three/drei';

interface TreeProps {
  position: [number, number, number];
  scale?: number;
}

export const Tree: React.FC<TreeProps> = ({ position, scale = 1 }) => {
  const addResource = useGameStore((state) => state.addResource);
  const [hovered, setHovered] = useState(false);
  const [lastGathered, setLastGathered] = useState(0);

  const handleClick = (e: any) => {
    e.stopPropagation();
    addResource('wood', 10);
    setLastGathered(Date.now());
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
        <meshStandardMaterial color={hovered ? "#2e8b2e" : "#228B22"} />
      </mesh>
      <mesh position={[0, 3, 0]} castShadow>
        <coneGeometry args={[0.8, 1.5, 8]} />
        <meshStandardMaterial color={hovered ? "#2e8b2e" : "#228B22"} />
      </mesh>
      
      {hovered && (
         <Html position={[0, 4, 0]} center distanceFactor={10}>
            <div className="bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm whitespace-nowrap pointer-events-none">
               Click to Gather Wood
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
  position: [number, number, number];
  scale?: number;
}

export const Rock: React.FC<RockProps> = ({ position, scale = 1 }) => {
    const addResource = useGameStore((state) => state.addResource);
    const [hovered, setHovered] = useState(false);
    const [lastGathered, setLastGathered] = useState(0);

    const handleClick = (e: any) => {
        e.stopPropagation();
        addResource('stone', 5);
        if (Math.random() > 0.7) {
            addResource('iron', 2);
        }
        setLastGathered(Date.now());
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
                <meshStandardMaterial color={hovered ? "#909090" : "#808080"} flatShading />
            </mesh>

            {hovered && (
                <Html position={[0, 1.5, 0]} center distanceFactor={10}>
                    <div className="bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm whitespace-nowrap pointer-events-none">
                        Click to Gather Stone
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
    // Generate random positions for trees and rocks, avoiding the center area
    const items = useMemo(() => {
        const _items = [];
        for (let i = 0; i < 40; i++) {
            const angle = Math.random() * Math.PI * 2;
            const radius = 15 + Math.random() * 30; // Outside the immediate center
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;
            const type = Math.random() > 0.3 ? 'tree' : 'rock';
            const scale = 0.8 + Math.random() * 0.5;
            _items.push({ id: i, x, z, type, scale });
        }
        return _items;
    }, []);

    return (
        <group>
            {items.map((item) => (
                item.type === 'tree' ? 
                <Tree key={item.id} position={[item.x, 0, item.z]} scale={item.scale} /> :
                <Rock key={item.id} position={[item.x, 0.4, item.z]} scale={item.scale} />
            ))}
        </group>
    );
};
