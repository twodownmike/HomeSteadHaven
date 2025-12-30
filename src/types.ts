export type ResourceType = 'wood' | 'food' | 'stone' | 'iron';

export interface Resources {
  wood: number;
  food: number;
  stone: number;
  iron: number;
}

export type BuildingType = 'barn' | 'cabin' | 'farm' | 'mine' | 'lumberMill' | 'warehouse' | 'bakery' | 'well' | 'campfire' | 'watchtower' | 'fishery' | 'workshop' | 'infirmary' | 'tradingPost';

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
  hunger: number; // 0-100, lower is hungrier
  energy: number; // 0-100, lower is tired
  traits: Trait[];
}

export type TraitType = 'strong' | 'fast' | 'glutton' | 'ascetic' | 'insomniac' | 'workaholic';

export interface Trait {
  type: TraitType;
  name: string;
  description: string;
}

export const TRAIT_DEFINITIONS: Record<TraitType, Trait> = {
  strong: { type: 'strong', name: 'Strong', description: 'Consumes energy slower while working.' },
  fast: { type: 'fast', name: 'Fast', description: 'Moves significantly faster.' },
  glutton: { type: 'glutton', name: 'Glutton', description: 'Gets hungry faster.' },
  ascetic: { type: 'ascetic', name: 'Ascetic', description: 'Needs less food.' },
  insomniac: { type: 'insomniac', name: 'Insomniac', description: 'Regains energy faster while resting.' },
  workaholic: { type: 'workaholic', name: 'Workaholic', description: 'Loses happiness slower when working.' },
};

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

export type ResearchId = 'toolmaking' | 'herbalism' | 'fishing' | 'fortifications' | 'baking';

export interface ResearchTopic {
  id: ResearchId;
  name: string;
  description: string;
  cost: Partial<Resources>;
  barnLevelReq: number;
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
  unlockedResearch: ResearchId[];
  currentResearch: ResearchId | null;
  researchProgress: number;
}

export interface TradeOffer {
  id: string;
  gives: Partial<Resources>;
  wants: Partial<Resources>;
  expiresAt: number;
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
  unlockedResearch: ResearchId[];
  currentResearch: ResearchId | null;
  researchProgress: number; // 0..1 for current research
  tradeOffers: TradeOffer[];
  lastTradeRefresh: number; // Day number
  
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
  startResearch: (id: ResearchId) => void;
  cancelResearch: () => void;
  acceptTrade: (offerId: string) => void;
  refreshTrades: () => void;
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
  workshop: { wood: 80, stone: 30, iron: 10 },
  infirmary: { wood: 70, stone: 50 },
  tradingPost: { wood: 100, stone: 20, food: 50 },
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
  workshop: { workers: 1 },
  infirmary: { workers: 1, happiness: 0.6 },
  tradingPost: { workers: 1 },
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
  workshop: { wood: 1, stone: 1 },
  infirmary: { },
  tradingPost: { },
};

export const RESEARCH_TREE: ResearchTopic[] = [
  {
    id: 'toolmaking',
    name: 'Toolmaking',
    description: 'Craft tools to boost production and unlock Workshops.',
    cost: { wood: 80, stone: 30 },
    barnLevelReq: 2,
  },
  {
    id: 'herbalism',
    name: 'Herbalism',
    description: 'Basic medicine to keep settlers healthier; unlocks Infirmary.',
    cost: { wood: 60, food: 40 },
    barnLevelReq: 2,
  },
  {
    id: 'fishing',
    name: 'Fishing Nets',
    description: 'Unlock Fisheries for steady food.',
    cost: { wood: 50, stone: 20 },
    barnLevelReq: 2,
  },
  {
    id: 'fortifications',
    name: 'Fortifications',
    description: 'Improve defense; unlock Watchtowers.',
    cost: { wood: 90, stone: 70 },
    barnLevelReq: 3,
  },
  {
    id: 'baking',
    name: 'Baking',
    description: 'Unlock Bakeries and better food variety.',
    cost: { wood: 70, stone: 30 },
    barnLevelReq: 2,
  },
];

export const BUILDING_RESEARCH_REQ: Partial<Record<BuildingType, ResearchId>> = {
  fishery: 'fishing',
  watchtower: 'fortifications',
  bakery: 'baking',
  workshop: 'toolmaking',
  infirmary: 'herbalism',
};
