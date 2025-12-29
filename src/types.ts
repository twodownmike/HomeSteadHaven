export type ResourceType = 'wood' | 'food' | 'stone' | 'iron';

export interface Resources {
  wood: number;
  food: number;
  stone: number;
  iron: number;
}

export type BuildingType = 'barn' | 'cabin' | 'farm' | 'mine' | 'lumberMill' | 'warehouse' | 'bakery' | 'well' | 'campfire' | 'watchtower' | 'fishery';

export interface Building {
  id: string;
  type: BuildingType;
  position: [number, number, number];
  level: number;
  lastCollected?: number;
}

export type NatureType = 'tree' | 'rock';

export type WeatherType = 'sunny' | 'rain' | 'snow';

export type Season = 'spring' | 'summer' | 'autumn' | 'winter';

export interface Settler {
  id: string;
  name: string;
  position: [number, number, number];
  targetPosition: [number, number, number] | null;
  state: 'idle' | 'walking' | 'working' | 'resting';
  job?: string; // buildingId
  home?: string; // buildingId
  actionTimer: number; // Time until next state change or action completion
}

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

export type ObjectiveGoalType = 'resource' | 'building' | 'population' | 'happiness';

export interface ObjectiveGoal {
  type: ObjectiveGoalType;
  key?: ResourceType | BuildingType;
  amount: number;
}

export interface Objective {
  id: string;
  title: string;
  description: string;
  goal: ObjectiveGoal;
  reward: Partial<Resources>;
  complete: boolean;
  claimed: boolean;
}

export interface GameSaveData {
  resources: Resources;
  settlers: Settler[];
  happiness: number;
  buildings: Building[];
  nature: NatureItem[];
  logs: LogEntry[];
  weather: WeatherType;
  season: Season;
  day: number;
  objectives: Objective[];
}

export interface GameState {
  resources: Resources;
  settlers: Settler[];
  happiness: number;
  buildings: Building[];
  nature: NatureItem[];
  logs: LogEntry[];
  weather: WeatherType;
  season: Season;
  selectedBuilding: BuildingType | null; // For placement
  selectedBuildingId: string | null; // For inspecting existing building
  isBuilding: boolean;
  tickRate: number;
  day: number;
  objectives: Objective[];
  
  // Actions
  addResource: (type: ResourceType, amount: number) => void;
  removeResource: (type: ResourceType, amount: number) => boolean;
  addBuilding: (type: BuildingType, position: [number, number, number]) => void;
  upgradeBuilding: (id: string) => void;
  demolishBuilding: (id: string) => void;
  assignWorker: (buildingId: string) => void;
  unassignWorker: (buildingId: string) => void;
  removeNature: (id: string) => void;
  addLog: (message: string, type?: LogEntry['type']) => void;
  setSelectedBuilding: (type: BuildingType | null) => void;
  selectBuildingId: (id: string | null) => void;
  setTickRate: (rateMs: number) => void;
  claimObjective: (id: string) => void;
  celebrateFestival: () => void;
  sendExpedition: () => void;
  loadSaveData: (data: Partial<GameSaveData>) => void;
  tick: () => void;
  reset: () => void;
}

export const BUILDING_COSTS: Record<BuildingType, Partial<Resources>> = {
  barn: { wood: 120, stone: 60 },
  cabin: { wood: 10 },
  farm: { wood: 20, stone: 5 },
  lumberMill: { wood: 50, stone: 10 },
  mine: { wood: 100, stone: 50 },
  warehouse: { wood: 100, stone: 20 },
  bakery: { wood: 60, stone: 20 },
  well: { wood: 30, stone: 40 },
  campfire: { wood: 30, stone: 5 },
  watchtower: { wood: 80, stone: 30 },
  fishery: { wood: 40, stone: 10 },
};

export const BUILDING_STATS: Record<BuildingType, { housing?: number; workers?: number; storage?: number; happiness?: number }> = {
  barn: { housing: 2, storage: 100, happiness: 0.5 },
  cabin: { housing: 4 },
  farm: { workers: 1 },
  lumberMill: { workers: 2 },
  mine: { workers: 3 },
  warehouse: { storage: 200 },
  bakery: { workers: 2, happiness: 0.4 },
  well: { happiness: 0.6 },
  campfire: { housing: 1, happiness: 1.2 },
  watchtower: { workers: 1, happiness: 0.2 },
  fishery: { workers: 1 },
};

export const RESOURCE_GENERATION: Record<BuildingType, Partial<Resources>> = {
  barn: { },
  cabin: { }, // Cabins increase max population maybe?
  farm: { food: 5 },
  lumberMill: { wood: 5 },
  mine: { stone: 2, iron: 1 },
  warehouse: { },
  bakery: { food: 8 },
  well: { },
  campfire: { },
  watchtower: { },
  fishery: { food: 6 },
};
