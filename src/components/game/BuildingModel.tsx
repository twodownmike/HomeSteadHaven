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
