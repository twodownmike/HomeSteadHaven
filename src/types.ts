export type ResourceType = 'wood' | 'food' | 'stone' | 'iron';

export interface Resources {
  wood: number;
  food: number;
  stone: number;
  iron: number;
}

export type BuildingType = 'cabin' | 'farm' | 'mine' | 'lumberMill';

export interface Building {
  id: string;
  type: BuildingType;
  position: [number, number, number];
  level: number;
  lastCollected?: number;
}

export interface GameState {
  resources: Resources;
  buildings: Building[];
  selectedBuilding: BuildingType | null;
  isBuilding: boolean;
  day: number;
  
  // Actions
  addResource: (type: ResourceType, amount: number) => void;
  removeResource: (type: ResourceType, amount: number) => boolean;
  addBuilding: (type: BuildingType, position: [number, number, number]) => void;
  setSelectedBuilding: (type: BuildingType | null) => void;
  tick: () => void;
  reset: () => void;
}

export const BUILDING_COSTS: Record<BuildingType, Partial<Resources>> = {
  cabin: { wood: 10 },
  farm: { wood: 20, stone: 5 },
  lumberMill: { wood: 50, stone: 10 },
  mine: { wood: 100, stone: 50 },
};

export const RESOURCE_GENERATION: Record<BuildingType, Partial<Resources>> = {
  cabin: { }, // Cabins increase max population maybe?
  farm: { food: 5 },
  lumberMill: { wood: 5 },
  mine: { stone: 2, iron: 1 },
};
