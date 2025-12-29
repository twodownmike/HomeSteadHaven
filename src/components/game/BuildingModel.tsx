import React, { useMemo } from 'react';
import { BuildingType } from '../../types';
import { Html } from '@react-three/drei';

interface BuildingModelProps {
  type: BuildingType;
  level?: number;
  selected?: boolean;
  ghost?: boolean;
  isValid?: boolean;
  onClick?: (e: any) => void;
}

export const BuildingModel: React.FC<BuildingModelProps> = ({ type, level = 1, selected, ghost, isValid = true, onClick }) => {
  const color = useMemo(() => {
    if (ghost && !isValid) return '#ff0000'; // Red if invalid placement

    switch (type) {
      case 'cabin': return '#8B4513'; // SaddleBrown
      case 'farm': return '#DAA520'; // GoldenRod
      case 'lumberMill': return '#556B2F'; // DarkOliveGreen
      case 'mine': return '#696969'; // DimGray
      default: return '#ffffff';
    }
  }, [type, ghost, isValid]);

  const opacity = ghost ? 0.5 : 1;
  const transparent = ghost;

  return (
    <group onClick={onClick}>
      {/* Base */}
      <mesh position={[0, 1, 0]} castShadow receiveShadow>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color={color} transparent={transparent} opacity={opacity} />
      </mesh>
      
      {/* Roof for Cabin and Farm */}
      {(type === 'cabin' || type === 'farm') && (
        <mesh position={[0, 2.5, 0]} castShadow>
          <coneGeometry args={[1.6, 1.5, 4]} />
          <meshStandardMaterial color="#4A3B2C" transparent={transparent} opacity={opacity} />
        </mesh>
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
