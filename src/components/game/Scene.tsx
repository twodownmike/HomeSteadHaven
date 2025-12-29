import React, { useState } from 'react';
import { useGameStore } from '../../store';
import { BuildingModel } from './BuildingModel';
import { EnvironmentProps } from './Nature';
import { Settler } from './Settler';

export const Scene: React.FC = () => {
  const { buildings, nature, selectedBuilding, selectedBuildingId, isBuilding, addBuilding, selectBuildingId, setSelectedBuilding, season, settlers } = useGameStore();
  const [hoverPos, setHoverPos] = useState<[number, number, number] | null>(null);
  const [isValidPlacement, setIsValidPlacement] = useState(true);
  
  // Grid size for snapping
  const GRID_SIZE = 2;

  const getGroundColor = () => {
      switch (season) {
          case 'spring': return '#5C8C46';
          case 'summer': return '#4A7036';
          case 'autumn': return '#8B7355'; // More brownish
          case 'winter': return '#F0F8FF'; // AliceBlue
          default: return '#5C8C46';
      }
  };

  const checkCollision = (pos: [number, number, number]) => {
    // Check collision with existing buildings
    const buildingCollision = buildings.some(b => 
        b.position[0] === pos[0] && b.position[2] === pos[2]
    );
    if (buildingCollision) return true;

    // Check collision with nature
    // Building is 2x2 centered at pos. Bounds: x +/- 1, z +/- 1
    const minX = pos[0] - 0.8; // Give a little leeway so we don't collide with adjacent cells visually if nature is on edge
    const maxX = pos[0] + 0.8;
    const minZ = pos[2] - 0.8;
    const maxZ = pos[2] + 0.8;

    const natureCollision = nature.some(n => 
        n.position[0] > minX && n.position[0] < maxX &&
        n.position[2] > minZ && n.position[2] < maxZ
    );
    
    return natureCollision;
  };

  const handlePointerMove = (e: any) => {
    if (!isBuilding || !selectedBuilding) {
      if (hoverPos) setHoverPos(null);
      return;
    }
    
    // Snap to grid
    const x = Math.round(e.point.x / GRID_SIZE) * GRID_SIZE;
    const z = Math.round(e.point.z / GRID_SIZE) * GRID_SIZE;
    
    const newPos: [number, number, number] = [x, 0, z];

    // Don't update if same to avoid re-renders
    if (!hoverPos || hoverPos[0] !== x || hoverPos[2] !== z) {
        setHoverPos(newPos);
        setIsValidPlacement(!checkCollision(newPos));
    }
  };

  const handleClick = (e: any) => {
    // For ground clicks:
    if (isBuilding && selectedBuilding && hoverPos) {
      e.stopPropagation();
      if (isValidPlacement) {
          addBuilding(selectedBuilding, hoverPos);
      }
    } else {
        // Deselect if clicking ground and not clicking a building (buildings stop propagation)
        // However, this click handler is on the ground mesh.
        // If we click a building, it shouldn't reach here because we'll stop propagation in BuildingModel's click.
        selectBuildingId(null);
        setSelectedBuilding(null);
    }
  };

  const handleBuildingClick = (e: any, id: string) => {
    if (isBuilding) return; // Don't select if trying to place
    e.stopPropagation();
    selectBuildingId(id);
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
        <meshStandardMaterial color={getGroundColor()} />
      </mesh>
      
      {/* Grid Helper to visualize tiles */}
      <gridHelper args={[100, 50, 0xffffff, 0xffffff]} position={[0, 0.01, 0]} material-opacity={0.2} material-transparent />

      {/* Render Existing Buildings */}
      {buildings.map((building) => (
        <group key={building.id} position={building.position}>
          <BuildingModel 
            type={building.type} 
            level={building.level}
            selected={selectedBuildingId === building.id}
            onClick={(e) => handleBuildingClick(e, building.id)}
          />
        </group>
      ))}

      {/* Render Settlers */}
      {settlers.map((settler) => (
        <Settler key={settler.id} settler={settler} />
      ))}

      {/* Render Ghost Building for placement */}
      {isBuilding && selectedBuilding && hoverPos && (
        <group position={hoverPos}>
          <BuildingModel type={selectedBuilding} ghost isValid={isValidPlacement} />
        </group>
      )}
    </group>
  );
};
