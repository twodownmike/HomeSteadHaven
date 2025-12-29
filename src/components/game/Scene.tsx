import React, { useState } from 'react';
import { useGameStore } from '../../store';
import { BuildingModel } from './BuildingModel';
import { EnvironmentProps } from './Nature';

export const Scene: React.FC = () => {
  const { buildings, selectedBuilding, isBuilding, addBuilding } = useGameStore();
  const [hoverPos, setHoverPos] = useState<[number, number, number] | null>(null);
  
  // Grid size for snapping
  const GRID_SIZE = 2;

  const handlePointerMove = (e: any) => {
    if (!isBuilding || !selectedBuilding) {
      if (hoverPos) setHoverPos(null);
      return;
    }
    
    // Snap to grid
    const x = Math.round(e.point.x / GRID_SIZE) * GRID_SIZE;
    const z = Math.round(e.point.z / GRID_SIZE) * GRID_SIZE;
    
    // Don't update if same to avoid re-renders
    if (!hoverPos || hoverPos[0] !== x || hoverPos[2] !== z) {
        setHoverPos([x, 0, z]);
    }
  };

  const handleClick = (e: any) => {
    // Prevent click propagation if we clicked a building (handled separately if needed)
    // For ground clicks:
    if (isBuilding && selectedBuilding && hoverPos) {
      e.stopPropagation();
      addBuilding(selectedBuilding, hoverPos);
    } else {
        // Deselect if clicking ground
        // setSelectedBuilding(null);
    }
  };

  return (
    <group>
      <EnvironmentProps />
      
      {/* Ground */}
      <mesh 
        rotation={[-Math.PI / 2, 0, 0]} 
        position={[0, -0.1, 0]} 
        receiveShadow
        onPointerMove={handlePointerMove}
        onClick={handleClick}
      >
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#5C8C46" />
      </mesh>
      
      {/* Grid Helper to visualize tiles */}
      <gridHelper args={[100, 50, 0xffffff, 0xffffff]} position={[0, 0.01, 0]} material-opacity={0.2} material-transparent />

      {/* Render Existing Buildings */}
      {buildings.map((building) => (
        <group key={building.id} position={building.position}>
          <BuildingModel type={building.type} />
        </group>
      ))}

      {/* Render Ghost Building for placement */}
      {isBuilding && selectedBuilding && hoverPos && (
        <group position={hoverPos}>
          <BuildingModel type={selectedBuilding} ghost />
        </group>
      )}
    </group>
  );
};
