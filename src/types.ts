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

export type NatureType = 'tree' | 'rock';

export interface NatureItem {
  id: string;
  type: NatureType;
  position: [number, number, number];
  scale: number;
}

export interface LogEntry {
  id: string;
  message: string;
  timestamp: number;
  type: 'info' | 'success' | 'warning' | 'danger';
}

export interface GameState {
  resources: Resources;
  population: number;
  buildings: Building[];
  nature: NatureItem[];
  logs: LogEntry[];
  selectedBuilding: BuildingType | null; // For placement
  selectedBuildingId: string | null; // For inspecting existing building
  isBuilding: boolean;
  day: number;
  
  // Actions
  addResource: (type: ResourceType, amount: number) => void;
  removeResource: (type: ResourceType, amount: number) => boolean;
  addBuilding: (type: BuildingType, position: [number, number, number]) => void;
  upgradeBuilding: (id: string) => void;
  demolishBuilding: (id: string) => void;
  removeNature: (id: string) => void;
  addLog: (message: string, type?: LogEntry['type']) => void;
  setSelectedBuilding: (type: BuildingType | null) => void;
  selectBuildingId: (id: string | null) => void;
  tick: () => void;
  reset: () => void;
}

export const BUILDING_COSTS: Record<BuildingType, Partial<Resources>> = {
  cabin: { wood: 10 },
  farm: { wood: 20, stone: 5 },
  lumberMill: { wood: 50, stone: 10 },
  mine: { wood: 100, stone: 50 },
};

export const BUILDING_STATS: Record<BuildingType, { housing?: number; workers?: number }> = {
  cabin: { housing: 4 },
  farm: { workers: 1 },
  lumberMill: { workers: 2 },
  mine: { workers: 3 },
};

export const RESOURCE_GENERATION: Record<BuildingType, Partial<Resources>> = {
  cabin: { }, // Cabins increase max population maybe?
  farm: { food: 5 },
  lumberMill: { wood: 5 },
  mine: { stone: 2, iron: 1 },
};
