import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { GameState, BuildingType, ResourceType, BUILDING_COSTS, NatureType, BUILDING_STATS, LogEntry, WeatherType, Season, Settler, Building, Objective, GameSaveData, RESOURCE_GENERATION, ResearchId, RESEARCH_TREE, BUILDING_RESEARCH_REQ, Resources, Trait, TRAIT_DEFINITIONS, TradeOffer, BUILDING_WORKSTATIONS, FloatingEffect, Expedition } from './types';

// Simple ID generator to avoid extra dependency for now if uuid is not installed, 
// but I'll use a simple random string for now.
const generateId = () => Math.random().toString(36).substr(2, 9);

const generateTradeOffers = (day: number): TradeOffer[] => {
    const offers: TradeOffer[] = [];
    const count = 3;
    const resources: ResourceType[] = ['wood', 'food', 'stone', 'iron'];
    
    for(let i=0; i<count; i++) {
        const giveRes = resources[Math.floor(Math.random() * resources.length)];
        let wantRes = resources[Math.floor(Math.random() * resources.length)];
        while(wantRes === giveRes) {
             wantRes = resources[Math.floor(Math.random() * resources.length)];
        }
        
        const baseAmount = 20 + Math.floor(Math.random() * 50);
        // Adjust amount based on value rarity (Iron > Stone > Food > Wood) roughly
        // But for simplicity, let's keep it somewhat random but fair-ish.
        
        offers.push({
            id: generateId(),
            gives: { [giveRes]: baseAmount },
            wants: { [wantRes]: Math.floor(baseAmount * (0.5 + Math.random())) }, // 0.5 to 1.5 exchange rate roughly
            expiresAt: day + 5
        });
    }
    return offers;
};

const getRandomTraits = (): Trait[] => {
  const num = Math.random() > 0.7 ? 2 : 1;
  const allTraits = Object.values(TRAIT_DEFINITIONS);
  const selected: Trait[] = [];
  for(let i=0; i<num; i++) {
      const t = allTraits[Math.floor(Math.random() * allTraits.length)];
      if(!selected.find(s => s.type === t.type)) {
          selected.push(t);
      }
  }
  return selected;
};

const initialBarn: Building = {
  id: 'barn-initial',
  type: 'barn',
  position: [0, 0, 0],
  level: 1,
  lastCollected: Date.now(),
  inventory: { wood: 0, food: 0, stone: 0, iron: 0, tools: 0, relics: 0, waste: 0 },
};

export const BARN_LEVEL_REQUIREMENTS: Partial<Record<BuildingType, number>> = {
  mine: 2,
  warehouse: 2,
  bakery: 2,
  watchtower: 2,
  fishery: 3,
};

export const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      resources: {
        wood: 120,
        food: 60,
        stone: 40,
        iron: 0,
        tools: 0,
        relics: 0,
        waste: 0,
      },
      settlers: [
          { id: 'settler-1', name: 'John', position: [0, 0, 0] as [number, number, number], targetPosition: null, state: 'idle', actionTimer: 0, hunger: 100, energy: 100, traits: [TRAIT_DEFINITIONS.strong] },
          { id: 'settler-2', name: 'Jane', position: [2, 0, 2] as [number, number, number], targetPosition: null, state: 'idle', actionTimer: 0, hunger: 100, energy: 100, traits: [TRAIT_DEFINITIONS.fast] },
      ] as Settler[],
 
      happiness: 100,
      buildings: [initialBarn] as Building[],
      nature: (() => {
        // Initial nature generation
        const items = [];
        for (let i = 0; i < 40; i++) {
            const angle = Math.random() * Math.PI * 2;
            const radius = 15 + Math.random() * 30; // Outside the immediate center
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;
            const type: NatureType = Math.random() > 0.3 ? 'tree' : 'rock';
            const scale = 0.8 + Math.random() * 0.5;
            items.push({ id: `nature-${i}`, position: [x, 0, z] as [number, number, number], type, scale });
        }
        return items;
      })(),
      logs: [] as LogEntry[],
      weather: 'sunny' as WeatherType,
      season: 'spring' as Season,
      selectedBuilding: null as BuildingType | null,
      selectedBuildingId: null as string | null,
      isBuilding: false,
      tickRate: 1000,
      day: 1,
      cameraTarget: null as string | null,
      productionStats: {
        wood: 0,
        food: 0,
        stone: 0,
        iron: 0,
        tools: 0,
        relics: 0,
      } as Record<ResourceType, number>,
      objectives: [
          {
              id: 'obj-wood',
              title: 'Gatherer',
              description: 'Stockpile 150 wood to prove the village can build.',
              goal: { type: 'resource', key: 'wood', amount: 150 },
              reward: { food: 40 },
              complete: false,
              claimed: false,
          },
          {
              id: 'obj-farm',
              title: 'First Harvest',
              description: 'Build a farm to secure food.',
              goal: { type: 'building', key: 'farm', amount: 1 },
              reward: { wood: 60, food: 30 },
              complete: false,
              claimed: false,
          },
          {
              id: 'obj-pop',
              title: 'New Neighbors',
              description: 'Reach 6 settlers in your homestead.',
              goal: { type: 'population', amount: 6 },
              reward: { stone: 50, food: 50 },
              complete: false,
              claimed: false,
          },
          {
              id: 'obj-happy',
              title: 'Joyous Village',
              description: 'Raise happiness to 85% or higher.',
              goal: { type: 'happiness', amount: 85 },
              reward: { wood: 80, iron: 20 },
              complete: false,
              claimed: false,
          },
          {
              id: 'obj-monument',
              title: 'Legacy of the Ancients',
              description: 'Build an Ancient Monument to secure your place in history.',
              goal: { type: 'building', key: 'monument', amount: 1 },
              reward: { wood: 500, food: 500, stone: 500 },
              complete: false,
              claimed: false,
          },
      ] as Objective[],
      unlockedResearch: [] as ResearchId[],
      currentResearch: null as ResearchId | null,
      researchProgress: 0,
      tradeOffers: [] as TradeOffer[],
      lastTradeRefresh: 0,
      expeditions: [] as Expedition[],
      floatingTexts: [] as FloatingEffect[],

      addFloatingText: (text: string, position: [number, number, number], color: string = 'text-white') => {
        set((state) => ({
          floatingTexts: [
            ...state.floatingTexts,
            { id: generateId(), text, position, color }
          ]
        }));
      },

      removeFloatingText: (id: string) => {
        set((state) => ({
          floatingTexts: state.floatingTexts.filter((t) => t.id !== id),
        }));
      },

      setCameraTarget: (id: string | null) => {
        set({ cameraTarget: id });
      },

      addLog: (message: string, type: LogEntry['type'] = 'info') => {
          set((state) => {
              const newLog: LogEntry = {
                  id: generateId(),
                  message,
                  timestamp: Date.now(),
                  type
              };
              // Keep only last 20 logs
              return { logs: [newLog, ...(state.logs || [])].slice(0, 20) };
          });
      },

      addResource: (type: ResourceType, amount: number) =>
        set((state) => {
            const baseStorage = 100;
            const additionalStorage = (state.buildings || []).reduce((acc, b) => acc + ((BUILDING_STATS[b.type]?.storage || 0) * b.level), 0);
            const maxStorage = baseStorage + additionalStorage;
            
            const currentAmount = state.resources[type];
            const newAmount = Math.min(currentAmount + amount, maxStorage);
            
            return {
                resources: {
                    ...state.resources,
                    [type]: newAmount,
                },
            };
        }),

      removeResource: (type: ResourceType, amount: number) => {
        const state = get();
        if (state.resources[type] >= amount) {
          set((state) => ({
            resources: {
              ...state.resources,
              [type]: state.resources[type] - amount,
            },
          }));
          return true;
        }
        return false;
      },

      removeNature: (id: string) => {
        const state = get();
        const item = (state.nature || []).find(n => n.id === id);
        if (item) {
            state.addLog(`Cleared ${item.type}`, 'info');
            set((state) => ({
                nature: (state.nature || []).filter((item) => item.id !== id)
            }));
        }
      },

      addBuilding: (type: BuildingType, position: [number, number, number]) => {
        const state = get();

        if (type === 'barn') {
            state.addLog('The Barn already anchors your homestead and cannot be placed again.', 'warning');
            return;
        }
        
        const barn = (state.buildings || []).find(b => b.type === 'barn');
        if (!barn) {
          // Safety: auto-insert barn if missing
          set((s) => ({ buildings: [initialBarn, ...(s.buildings || [])] }));
        }
        
        const requiredLevel = BARN_LEVEL_REQUIREMENTS[type];
        if (requiredLevel && (!barn || barn.level < requiredLevel)) {
          state.addLog(`Upgrade the Barn to level ${requiredLevel} to unlock ${type}.`, 'warning');
          return;
        }
        const researchReq = BUILDING_RESEARCH_REQ[type];
        if (researchReq && !(state.unlockedResearch || []).includes(researchReq)) {
          state.addLog(`Research "${researchReq}" to unlock ${type}.`, 'warning');
          return;
        }
        
        // Validate collision again (server-side validation style)
        const buildingCollision = (state.buildings || []).some(b => 
            b.position[0] === position[0] && b.position[2] === position[2]
        );
        
        const minX = position[0] - 0.8;
        const maxX = position[0] + 0.8;
        const minZ = position[2] - 0.8;
        const maxZ = position[2] + 0.8;

        const natureCollision = (state.nature || []).some(n => 
            n.position[0] > minX && n.position[0] < maxX &&
            n.position[2] > minZ && n.position[2] < maxZ
        );

        if (buildingCollision || natureCollision) {
            state.addLog('Cannot build here!', 'warning');
            return; // Failed to build
        }

        const cost = BUILDING_COSTS[type];
        const stats = BUILDING_STATS[type];
        
        // Check if can afford resources
        let canAfford = true;
        (Object.keys(cost) as ResourceType[]).forEach((res) => {
          if ((state.resources[res] || 0) < (cost[res] || 0)) {
            canAfford = false;
          }
        });

        if (!canAfford) {
            state.addLog('Not enough resources!', 'warning');
            return;
        }

        // Check if has enough workers (if workers required)
        if (stats.workers) {
            // Calculate current employed
            const employed = (state.buildings || []).reduce((acc, b) => acc + (BUILDING_STATS[b.type]?.workers || 0), 0);
            if ((state.settlers || []).length - employed < stats.workers) {
                canAfford = false;
                state.addLog('Not enough workers!', 'warning');
                return;
            }
        }

        if (canAfford) {
          // Deduct resources
          (Object.keys(cost) as ResourceType[]).forEach((res) => {
            state.removeResource(res, cost[res] || 0);
          });

          // Add building
          set((state) => ({
            buildings: [
              ...state.buildings,
              {
                id: generateId(),
                type,
                position,
                level: 1,
                lastCollected: Date.now(),
                constructionProgress: 0,
                inventory: { wood: 0, food: 0, stone: 0, iron: 0, tools: 0, relics: 0, waste: 0 },
              },
            ],
            isBuilding: false,
            selectedBuilding: null,
          }));
          
          state.addLog(`Built ${type}!`, 'success');
        }
      },
      
      upgradeBuilding: (id: string) => {
        const state = get();
        const building = (state.buildings || []).find(b => b.id === id);
        if (!building) return;
        
        const baseCost = BUILDING_COSTS[building.type];
        // Upgrade cost scales with level: base * (level + 1)
        const multiplier = building.level + 1;
        
        let canAfford = true;
        (Object.keys(baseCost) as ResourceType[]).forEach((res) => {
             const costAmount = (baseCost[res] || 0) * multiplier;
             if ((state.resources[res] || 0) < costAmount) {
                 canAfford = false;
             }
        });
        
        if (canAfford) {
             (Object.keys(baseCost) as ResourceType[]).forEach((res) => {
                 const costAmount = (baseCost[res] || 0) * multiplier;
                 state.removeResource(res, costAmount);
             });
             
             set((state) => ({
                 buildings: (state.buildings || []).map(b => 
                     b.id === id ? { ...b, level: b.level + 1 } : b
                 )
             }));
             state.addLog(`Upgraded ${building.type} to level ${building.level + 1}`, 'success');
        } else {
            state.addLog('Not enough resources to upgrade!', 'warning');
        }
      },

      demolishBuilding: (id: string) => {
        const state = get();
        const building = (state.buildings || []).find(b => b.id === id);
        if (building?.type === 'barn') {
          state.addLog('The Barn is the heart of the homestead and cannot be demolished.', 'warning');
          return;
        }
        if (building) {
          state.addLog(`Demolished ${building.type}`, 'danger');
            
            // Unassign workers
            const newSettlers = (state.settlers || []).map(s => 
                s.job === id ? { ...s, job: undefined, state: 'idle' as const } : 
                s.home === id ? { ...s, home: undefined } : s
            );

            set((state) => ({
                buildings: (state.buildings || []).filter(b => b.id !== id),
                settlers: newSettlers,
                selectedBuildingId: null
            }));
          }
      },

      assignWorker: (buildingId: string) => {
          const state = get();
          const building = (state.buildings || []).find(b => b.id === buildingId);
          if (!building) return;

          const stats = BUILDING_STATS[building.type];
          if (!stats.workers) {
              state.addLog(`${building.type} does not require workers.`, 'warning');
              return;
          }

          const currentWorkers = (state.settlers || []).filter(s => s.job === buildingId).length;
          if (currentWorkers >= (stats.workers || 0)) {
              state.addLog(`${building.type} is fully staffed.`, 'warning');
              return;
          }

          // Find unemployed settler
          const unemployed = (state.settlers || []).find(s => !s.job);
          if (unemployed) {
              set((state) => ({
                  settlers: (state.settlers || []).map(s => 
                      s.id === unemployed.id ? { ...s, job: buildingId, state: 'walking', targetPosition: building.position } : s
                  )
              }));
              state.addLog(`${unemployed.name} assigned to ${building.type}.`, 'success');
          } else {
              state.addLog('No unemployed settlers available.', 'warning');
          }
      },

      unassignWorker: (buildingId: string) => {
          const state = get();
          // Find a worker at this building
          const worker = (state.settlers || []).find(s => s.job === buildingId);
          if (worker) {
              set((state) => ({
                  settlers: (state.settlers || []).map(s => 
                      s.id === worker.id ? { ...s, job: undefined, state: 'idle' } : s
                  )
              }));
              state.addLog(`${worker.name} unassigned from job.`, 'info');
          }
      },

      setSelectedBuilding: (type: BuildingType | null) =>
        set({ selectedBuilding: type, isBuilding: !!type, selectedBuildingId: null }),

      selectBuildingId: (id: string | null) =>
        set({ selectedBuildingId: id, selectedBuilding: null, isBuilding: false }),

      setTickRate: (rateMs: number) => {
        const clamped = Math.min(2000, Math.max(300, rateMs));
        set({ tickRate: clamped });
      },

      celebrateFestival: () => {
        const state = get();
        const costWood = 30;
        const costFood = 40;

        if (state.resources.wood < costWood || state.resources.food < costFood) {
            state.addLog('Not enough supplies for a festival!', 'warning');
            return;
        }

        set((state) => ({
            resources: {
                ...state.resources,
                wood: state.resources.wood - costWood,
                food: state.resources.food - costFood,
            },
            happiness: Math.min(100, state.happiness + 15),
        }));
        state.addLog('You held a lively festival! Happiness soared.', 'success');
      },

      sendExpedition: () => {
        const state = get();
        const costFood = 25;
        const costWood = 15;

        if (state.resources.food < costFood || state.resources.wood < costWood) {
          state.addLog('Not enough supplies (25 Food, 15 Wood) to send an expedition.', 'warning');
          return;
        }

        set((state) => {
          const availableSettlers = state.settlers.filter(s => s.state === 'idle' || s.state === 'resting');
          if (availableSettlers.length < 2) {
            return {
              logs: [{
                id: generateId(),
                message: "Not enough idle settlers for an expedition (need 2).",
                timestamp: Date.now(),
                type: 'warning' as LogEntry['type']
              }, ...state.logs].slice(0, 20)
            };
          }

          const expeditionSettlers = availableSettlers.slice(0, 2).map(s => s.id);
          const newExpedition: Expedition = {
            id: generateId(),
            settlerIds: expeditionSettlers,
            startTime: state.day,
            duration: 2,
            type: 'explore',
            status: 'ongoing'
          };

          return {
            resources: {
              ...state.resources,
              food: state.resources.food - costFood,
              wood: state.resources.wood - costWood,
            },
            expeditions: [...state.expeditions, newExpedition],
            settlers: state.settlers.map(s => 
              expeditionSettlers.includes(s.id) ? { ...s, state: 'idle', job: undefined } : s
            ),
            logs: [{
              id: generateId(),
              message: "An expedition has set out into the wilderness!",
              timestamp: Date.now(),
              type: 'info' as LogEntry['type']
            }, ...state.logs].slice(0, 20)
          };
        });
      },

      claimObjective: (id: string) => {
        const state = get();
        const objective = (state.objectives || []).find(o => o.id === id);
        if (!objective || !objective.complete || objective.claimed) return;

        set((state) => ({
            resources: {
                ...state.resources,
                wood: state.resources.wood + (objective.reward.wood || 0),
                food: state.resources.food + (objective.reward.food || 0),
                stone: state.resources.stone + (objective.reward.stone || 0),
                iron: state.resources.iron + (objective.reward.iron || 0),
            },
            objectives: (state.objectives || []).map(o => o.id === id ? { ...o, claimed: true } : o),
        }));

        state.addLog(`Claimed reward: ${objective.title}`, 'success');
      },

      startResearch: (id: ResearchId) => {
        const state = get();
        if ((state.unlockedResearch || []).includes(id)) {
          state.addLog('Research already unlocked.', 'warning');
          return;
        }
        if (state.currentResearch === id) {
          state.addLog('Research already in progress.', 'info');
          return;
        }
        const topic = RESEARCH_TREE.find((r) => r.id === id);
        if (!topic) return;
        const barn = (state.buildings || []).find((b) => b.type === 'barn');
        if (!barn || barn.level < topic.barnLevelReq) {
          state.addLog(`Barn level ${topic.barnLevelReq} required.`, 'warning');
          return;
        }
        // Check costs
        const canAfford = (Object.keys(topic.cost) as ResourceType[]).every(
          (r) => state.resources[r] >= (topic.cost[r] || 0)
        );
        if (!canAfford) {
          state.addLog('Not enough resources for research.', 'warning');
          return;
        }
        // Pay costs
        set((s) => ({
          resources: {
            ...s.resources,
            ...(Object.keys(topic.cost) as ResourceType[]).reduce((acc, res) => {
              acc[res] = s.resources[res] - (topic.cost[res] || 0);
              return acc;
            }, {} as Resources),
          },
          currentResearch: id,
          researchProgress: 0,
        }));
        state.addLog(`Started research: ${topic.name}`, 'success');
      },

      cancelResearch: () => {
        const state = get();
        if (!state.currentResearch) return;
        set({ currentResearch: null, researchProgress: 0 });
        state.addLog('Research cancelled.', 'info');
      },

      acceptTrade: (offerId: string) => {
          const state = get();
          const offer = (state.tradeOffers || []).find(o => o.id === offerId);
          if (!offer) return;
          
          // Check costs
          const canAfford = (Object.keys(offer.wants) as ResourceType[]).every(
              res => (state.resources[res] || 0) >= (offer.wants[res] || 0)
          );
          
          if (!canAfford) {
              state.addLog('Not enough resources for this trade.', 'warning');
              return;
          }

          set((s) => ({
              resources: {
                  ...s.resources,
                  ...(Object.keys(offer.wants) as ResourceType[]).reduce((acc, res) => {
                      acc[res] = s.resources[res] - (offer.wants[res] || 0);
                      return acc;
                  }, {} as Resources),
                  ...(Object.keys(offer.gives) as ResourceType[]).reduce((acc, res) => {
                      acc[res] = (s.resources[res] || 0) + (offer.gives[res] || 0);
                      return acc;
                  }, {} as Resources),
              },
              tradeOffers: (s.tradeOffers || []).filter(o => o.id !== offerId)
          }));
          state.addLog('Trade completed!', 'success');
      },

      refreshTrades: () => {
          const state = get();
          set({
              tradeOffers: generateTradeOffers(state.day),
              lastTradeRefresh: state.day
          });
          state.addLog('New traders have arrived at the Trading Post.', 'info');
      },

      loadSaveData: (data: Partial<GameSaveData>) => {
        const current = get();
        const incomingBuildings = data.buildings || current.buildings || [];
        const ensureBarnBuildings = (incomingBuildings || []).some(b => b.type === 'barn')
          ? incomingBuildings
          : [initialBarn, ...incomingBuildings];
        
        // Ensure settlers have traits
        const incomingSettlers = (data.settlers || current.settlers).map(s => ({
          ...s,
          traits: s.traits || []
        }));

        set({
          resources: data.resources || current.resources,
          settlers: incomingSettlers,
          happiness: data.happiness ?? current.happiness,
          buildings: ensureBarnBuildings,
          nature: data.nature || current.nature,
          logs: data.logs || current.logs,
          weather: data.weather || current.weather,
          season: data.season || current.season,
          day: data.day ?? current.day,
          objectives: data.objectives || current.objectives,
          unlockedResearch: data.unlockedResearch || current.unlockedResearch,
          currentResearch: data.currentResearch ?? current.currentResearch,
          researchProgress: data.researchProgress ?? current.researchProgress,
          tradeOffers: data.tradeOffers || [],
          lastTradeRefresh: data.lastTradeRefresh || 0,
          selectedBuilding: null,
          selectedBuildingId: null,
          isBuilding: false,
        });
        current.addLog('Loaded save data.', 'info');
      },

      tick: () => {
        set((state) => {
          let newResources = { ...state.resources };
          let newHappiness = state.happiness;
          let newLogs = state.logs;
          let newWeather = state.weather;
          let newSeason = state.season;
          let newSettlers = [...state.settlers];

          const baseStorage = 100;
          const additionalStorage = (state.buildings || []).reduce(
            (acc, b) => acc + ((BUILDING_STATS[b.type]?.storage || 0) * b.level),
            0
          );
          const maxStorage = baseStorage + additionalStorage;

          // Resource generation and Production Chains
          let currentProduction: Record<ResourceType, number> = {
            wood: 0,
            food: 0,
            stone: 0,
            iron: 0,
            tools: 0,
            relics: 0,
            waste: 0,
          };

          (state.buildings || []).forEach((b) => {
            // Only finished buildings produce resources
            if (b.constructionProgress !== undefined && b.constructionProgress < 1) {
              // Progress construction if workers are assigned or auto-progress
              const buildingWorkers = state.settlers.filter(s => s.job === b.id);
              if (buildingWorkers.length > 0) {
                b.constructionProgress = Math.min(1, b.constructionProgress + 0.05);
              }
              return;
            }

            const gen = RESOURCE_GENERATION[b.type];
            if (!gen) return;

            // Calculate efficiency based on workers having tools
            const buildingWorkers = state.settlers.filter(s => s.job === b.id);
            const workersWithTools = buildingWorkers.filter(s => s.hasTool).length;
            const toolMultiplier = 1 + (workersWithTools / Math.max(1, buildingWorkers.length)) * 0.5; // Up to 50% boost

            // Workshop production: Wood + Iron -> Tools
            if (b.type === 'workshop' && buildingWorkers.length > 0) {
              const woodCost = 0.2 * b.level;
              const ironCost = 0.1 * b.level;
              if (newResources.wood >= woodCost && newResources.iron >= ironCost) {
                newResources.wood -= woodCost;
                newResources.iron -= ironCost;
                currentProduction.wood -= woodCost;
                currentProduction.iron -= ironCost;
                const gain = 0.05 * b.level * toolMultiplier;
                newResources.tools = Math.min(maxStorage, newResources.tools + gain);
                currentProduction.tools += gain;
              }
            }

            // Bakery production: Food -> Better Food
            if (b.type === 'bakery' && buildingWorkers.length > 0) {
              const hasWell = (state.buildings || []).some(wb => wb.type === 'well' && (wb.constructionProgress === undefined || wb.constructionProgress >= 1));
              const foodCost = 0.2 * b.level;
              if (hasWell && newResources.food >= foodCost) {
                newResources.food -= foodCost;
                currentProduction.food -= foodCost;
                const gain = 0.5 * b.level * toolMultiplier;
                newResources.food = Math.min(maxStorage, newResources.food + gain);
                currentProduction.food += gain;
              } else if (!hasWell && Math.random() < 0.01) {
                get().addLog("Bakery needs a Well nearby to operate at full capacity.", "warning");
              }
            }

            (Object.keys(gen) as ResourceType[]).forEach((res) => {
              const amount = (gen[res] || 0) * b.level * 0.1 * toolMultiplier;
              const localLimit = 50 * b.level;
              b.inventory[res] = Math.min(localLimit, (b.inventory[res] || 0) + amount);
              
              // Waste generation from production
              if (res === 'iron' || res === 'stone' || b.type === 'workshop') {
                const wasteAmount = 0.05 * b.level;
                newResources.waste = Math.min(1000, newResources.waste + wasteAmount);
                currentProduction.waste += wasteAmount;
              }

              // Trigger floating text occasionally for production (now internal)
              if (amount > 0 && Math.random() < 0.05) {
                const color = res === 'wood' ? 'text-amber-400' : res === 'food' ? 'text-yellow-400' : res === 'stone' ? 'text-stone-300' : 'text-blue-300';
                get().addFloatingText(`+${Math.floor(amount * 10)} ${res}`, [b.position[0], b.position[1] + 2, b.position[2]], color);
              }
            });
          });

          // Waste Pit logic: Reduce global waste
          const wastePitWorkers = state.settlers.filter(s => {
            const jobBuilding = state.buildings.find(b => b.id === s.job);
            return jobBuilding?.type === 'wastePit';
          });
          if (wastePitWorkers.length > 0) {
            const wasteReduction = wastePitWorkers.length * 0.2;
            newResources.waste = Math.max(0, newResources.waste - wasteReduction);
            currentProduction.waste -= wasteReduction;
          }

          // Global waste impact
          if (newResources.waste > 100) {
            const penalty = (newResources.waste - 100) * 0.001;
            newHappiness = Math.max(0, newHappiness - penalty);
            if (Math.random() < penalty * 0.1) {
              get().addLog("Pollution is making settlers unhappy.", "warning");
            }
          }

          // Logistics Logic: Move resources from buildings to global storage
          const logisticsWorkers = state.settlers.filter(s => {
            const jobBuilding = state.buildings.find(b => b.id === s.job);
            return jobBuilding?.type === 'warehouse' || jobBuilding?.type === 'barn';
          });

          const hasWarehouse = state.buildings.some(b => b.type === 'warehouse' && (b.constructionProgress === undefined || b.constructionProgress >= 1));
          const logisticsEfficiency = hasWarehouse ? 1.0 : 0.4; // Better efficiency with a warehouse

          if (logisticsWorkers.length > 0) {
            const collectionPower = logisticsWorkers.length * 0.8 * logisticsEfficiency;
            (state.buildings || []).forEach(b => {
              // Don't collect from the storage buildings themselves
              if (b.type === 'warehouse' || b.type === 'barn') return;
              
              (Object.keys(b.inventory) as ResourceType[]).forEach(res => {
                if (b.inventory[res] > 0) {
                  const toMove = Math.min(b.inventory[res], collectionPower);
                  b.inventory[res] -= toMove;
                  newResources[res] = Math.min(maxStorage, newResources[res] + toMove);
                  currentProduction[res] += toMove;

                  // Visual feedback: Assign "carrying" status to a worker
                  const availableWorker = logisticsWorkers.find(w => !w.carrying);
                  if (availableWorker) {
                    availableWorker.carrying = res;
                  }
                }
              });
            });
          }

          // Clear carrying status for workers who aren't working/logistics anymore or after some time
          newSettlers = newSettlers.map(s => {
            if (s.carrying && Math.random() < 0.1) {
              s.carrying = undefined;
            }
            return s;
          });

          // Tool equipping and health logic
          newSettlers = newSettlers.map(s => {
            if (s.hasTool) {
              s.toolHealth = (s.toolHealth || 100) - 0.05; // Tools degrade over time
              if (s.toolHealth <= 0) {
                s.hasTool = false;
                s.toolHealth = 0;
                get().addLog(`${s.name}'s tool has broken!`, 'warning');
              }
            }
            return s;
          });

          if (newResources.tools >= 1) {
            const workerWithoutTool = newSettlers.find(s => s.job && !s.hasTool);
            if (workerWithoutTool) {
              newResources.tools -= 1;
              currentProduction.tools -= 1;
              workerWithoutTool.hasTool = true;
              workerWithoutTool.toolHealth = 100;
              const workplace = (state.buildings || []).find(b => b.id === workerWithoutTool.job);
              const pos = workplace ? workplace.position : workerWithoutTool.position;
              get().addFloatingText(`Equipped Tool!`, [pos[0], pos[1] + 2.5, pos[2]], 'text-blue-400');
              get().addLog(`${workerWithoutTool.name} equipped a tool for better efficiency!`, 'success');
            }
          }

          // Expedition Progression
          let newExpeditions = (state.expeditions || []).map(exp => {
            if (exp.status === 'ongoing' && newDay >= exp.startTime + exp.duration) {
              return { ...exp, status: 'completed' as const };
            }
            return exp;
          });

          // Handle completed expeditions (collect rewards)
          newExpeditions.forEach(exp => {
            if (exp.status === 'completed') {
              const watchtowers = (state.buildings || []).filter(b => b.type === 'watchtower').length;
              const luck = Math.random() + watchtowers * 0.1;
              
              let message = "";
              let type: LogEntry['type'] = 'info';

              if (luck > 0.7) {
                const relicsGain = 1;
                const ironGain = 15 + Math.floor(Math.random() * 20);
                newResources.relics += relicsGain;
                newResources.iron += ironGain;
                
                // Chance to find a new settler
                if (Math.random() > 0.5) {
                  const newSettler: Settler = {
                    id: generateId(),
                    name: `Survivor ${newSettlers.length + 1}`,
                    position: [0, 0, 0],
                    targetPosition: null,
                    state: 'idle',
                    actionTimer: 0,
                    hunger: 100,
                    energy: 100,
                    health: 100,
                    traits: getRandomTraits(),
                  };
                  newSettlers.push(newSettler);
                  message = `Expedition successful! Found ${relicsGain} Ancient Relic, ${ironGain} Iron, and rescued a survivor!`;
                } else {
                  message = `Expedition successful! Found ${relicsGain} Ancient Relic and ${ironGain} Iron!`;
                }
                type = 'success';
              } else if (luck > 0.3) {
                const woodGain = 50 + Math.floor(Math.random() * 50);
                const foodGain = 40 + Math.floor(Math.random() * 40);
                newResources.wood = Math.min(maxStorage, newResources.wood + woodGain);
                newResources.food = Math.min(maxStorage, newResources.food + foodGain);
                message = `Expedition returned with supplies: ${woodGain} Wood and ${foodGain} Food.`;
              } else {
                newHappiness = Math.max(0, newHappiness - 10);
                message = "Expedition encountered danger and barely escaped. Happiness decreased.";
                type = 'danger';
              }

              get().addLog(message, type);
              exp.status = 'returned';
              
              // Visual feedback for return
              const barn = (state.buildings || []).find(b => b.type === 'barn');
              const pos = barn ? barn.position : [0, 2, 0];
              get().addFloatingText("Expedition Returned!", [pos[0], pos[1] + 3, pos[2]], type === 'success' ? 'text-green-400' : type === 'danger' ? 'text-red-400' : 'text-blue-400');
            }
          });

          // Remove returned expeditions from list
          newExpeditions = newExpeditions.filter(exp => exp.status !== 'returned');

          // Food consumption
          const foodCost = (state.settlers || []).length * 0.04;
          newResources.food = Math.max(0, newResources.food - foodCost);
          currentProduction.food -= foodCost;
          if (newResources.food <= 0.1) {
            newHappiness = Math.max(0, newHappiness - 0.5);
          } else {
            newHappiness = Math.min(100, newHappiness + 0.02);
          }

          // Weather/Season simple variation
          if (Math.random() < 0.01) {
            const options: WeatherType[] = ['sunny', 'rain', 'snow'];
            newWeather = options[Math.floor(Math.random() * options.length)];
          }
          const newDay = state.day + 0.005;
          const seasonRoll = newDay % 4;
          newSeason = seasonRoll < 1 ? 'spring' : seasonRoll < 2 ? 'summer' : seasonRoll < 3 ? 'autumn' : 'winter';

          // Trading Post logic
          let newTradeOffers = state.tradeOffers || [];
          let newLastTradeRefresh = state.lastTradeRefresh || 0;
          
          const hasTradingPost = (state.buildings || []).some(b => b.type === 'tradingPost');
          if (hasTradingPost && newDay - state.lastTradeRefresh > 3) { // Refresh every 3 days
              newTradeOffers = generateTradeOffers(newDay);
              newLastTradeRefresh = newDay;
              const tradeLog: LogEntry = { id: generateId(), message: 'Traders have arrived with new offers.', timestamp: Date.now(), type: 'info' };
              newLogs = [tradeLog, ...newLogs].slice(0, 20);
          }

          // Settler AI (movement/work)
          newSettlers = (state.settlers || []).map((settler) => {
            const timeOfDay = newDay % 1;
            const isNight = timeOfDay > 0.75 || timeOfDay < 0.2;
            const isWorkTime = timeOfDay > 0.25 && timeOfDay < 0.7;

            let currentSettler = { ...settler };

            // Find home if not assigned
            if (!currentSettler.home) {
                const availableHome = (state.buildings || []).find(b => {
                    const stats = BUILDING_STATS[b.type];
                    if (!stats.housing) return false;
                    const occupants = (state.settlers || []).filter(s => s.home === b.id).length;
                    return occupants < (stats.housing * b.level);
                });
                if (availableHome) currentSettler.home = availableHome.id;
            }

            // 1. Goal Determination
            if (currentSettler.job && isWorkTime) {
              const workplace = (state.buildings || []).find((b) => b.id === currentSettler.job);
              if (workplace) {
                const stations = BUILDING_WORKSTATIONS[workplace.type] || [[0, 0, 0]];
                const workerIndex = (state.settlers || []).filter(s => s.job === workplace.id).indexOf(settler);
                const offset = stations[workerIndex % stations.length] || [0, 0, 0];
                const targetPos: [number, number, number] = [
                    workplace.position[0] + offset[0],
                    workplace.position[1] + offset[1],
                    workplace.position[2] + offset[2]
                ];

                const dist = Math.hypot(currentSettler.position[0] - targetPos[0], currentSettler.position[2] - targetPos[2]);
                if (dist > 0.5) {
                  currentSettler.state = 'walking';
                  currentSettler.targetPosition = targetPos;
                } else {
                  currentSettler.state = 'working';
                  currentSettler.targetPosition = null;
                }
              }
            } else if (isNight) {
              const home = (state.buildings || []).find(b => b.id === currentSettler.home) || (state.buildings || []).find(b => b.type === 'barn');
              const target: [number, number, number] = home ? home.position : [0, 0, 0];
              const dist = Math.hypot(currentSettler.position[0] - target[0], currentSettler.position[2] - target[2]);
              if (dist > 0.5) {
                currentSettler.state = 'walking';
                currentSettler.targetPosition = target;
              } else {
                currentSettler.state = 'resting';
                currentSettler.targetPosition = null;
              }
            } else if (
              currentSettler.state === 'idle' ||
              currentSettler.state === 'walking' ||
              (currentSettler.state === 'working' && !isWorkTime) ||
              (currentSettler.state === 'resting' && !isNight)
            ) {
              // Idle wandering logic
              if (Math.random() < 0.02) {
                const socialSpots = (state.buildings || []).filter(b => b.type === 'campfire' || b.type === 'well');
                if (socialSpots.length > 0 && Math.random() < 0.5) {
                    const spot = socialSpots[Math.floor(Math.random() * socialSpots.length)];
                    const stations = BUILDING_WORKSTATIONS[spot.type] || [[0, 0, 0]];
                    const offset = stations[Math.floor(Math.random() * stations.length)] || [0, 0, 0];
                    currentSettler.state = 'walking';
                    currentSettler.targetPosition = [spot.position[0] + offset[0], 0, spot.position[2] + offset[2]];
                } else {
                    const angle = Math.random() * Math.PI * 2;
                    const dist = 3 + Math.random() * 8;
                    currentSettler.state = 'walking';
                    currentSettler.targetPosition = [Math.cos(angle) * dist, 0, Math.sin(angle) * dist];
                }
              } else if (currentSettler.state !== 'walking') {
                currentSettler.state = 'idle';
              }
            }

            // 2. Movement Execution
            if (currentSettler.state === 'walking' && currentSettler.targetPosition) {
              const dx = currentSettler.targetPosition[0] - currentSettler.position[0];
              const dz = currentSettler.targetPosition[2] - currentSettler.position[2];
              const dist = Math.hypot(dx, dz);
              let speed = 0.08;
              if (currentSettler.traits?.some(t => t.type === 'fast')) speed *= 1.5;

              if (dist < speed) {
                currentSettler.position = currentSettler.targetPosition;
                currentSettler.targetPosition = null;
                if (isWorkTime && currentSettler.job) currentSettler.state = 'working';
                else if (isNight) currentSettler.state = 'resting';
                else currentSettler.state = 'idle';
              } else {
                currentSettler.position = [
                  currentSettler.position[0] + (dx / dist) * speed,
                  0,
                  currentSettler.position[2] + (dz / dist) * speed,
                ];
              }
            }

            // 3. Needs Update
            let hungerDrop = 0.1;
            if (currentSettler.traits?.some(t => t.type === 'glutton')) hungerDrop *= 1.5;
            if (currentSettler.traits?.some(t => t.type === 'ascetic')) hungerDrop *= 0.7;

            currentSettler.hunger = Math.max(0, Math.min(100, currentSettler.hunger - hungerDrop));
            
            if (currentSettler.state === 'working' || currentSettler.state === 'walking') {
              let energyDrop = 0.2;
              if (currentSettler.traits?.some(t => t.type === 'strong')) energyDrop *= 0.6;
              currentSettler.energy = Math.max(0, currentSettler.energy - energyDrop);
            } else if (currentSettler.state === 'resting') {
              let energyGain = 0.6;
              if (currentSettler.traits?.some(t => t.type === 'insomniac')) energyGain *= 1.5;
              currentSettler.energy = Math.min(100, currentSettler.energy + energyGain);
              currentSettler.hunger = Math.max(0, currentSettler.hunger - 0.05);
            } else {
              currentSettler.energy = Math.min(100, currentSettler.energy + 0.1);
            }

            // Health and Sickness Logic
            const hasInfirmaryStaffed = (state.buildings || []).some(b => 
                b.type === 'infirmary' && state.settlers.some(s => s.job === b.id)
            );

            // Chance to get sick (higher if low hunger/energy or bad weather)
            if (!currentSettler.isSick && Math.random() < 0.0005) {
                let sicknessChance = 0.01;
                if (currentSettler.hunger < 30) sicknessChance += 0.05;
                if (currentSettler.energy < 30) sicknessChance += 0.05;
                if (state.weather !== 'sunny') sicknessChance += 0.02;
                
                if (Math.random() < sicknessChance) {
                    currentSettler.isSick = true;
                    get().addLog(`${currentSettler.name} has fallen ill!`, 'warning');
                }
            }

            // Health decay/gain
            let healthChange = 0;
            if (currentSettler.isSick) {
                healthChange -= 0.1;
                if (hasInfirmaryStaffed) healthChange += 0.15; // Net gain if infirmary is active
            } else {
                if (currentSettler.hunger > 80 && currentSettler.energy > 80) healthChange += 0.05;
                if (currentSettler.hunger < 10) healthChange -= 0.05;
            }

            // Global health boost from active infirmary
            if (hasInfirmaryStaffed) healthChange += 0.02;

            // Monument Happiness and Health Aura
            const hasMonument = (state.buildings || []).some(b => b.type === 'monument');
            if (hasMonument) {
              newHappiness = Math.min(100, newHappiness + 0.05);
              healthChange += 0.01;
            }

            currentSettler.health = Math.max(0, Math.min(100, (currentSettler.health || 100) + healthChange));

            // Recovery from sickness
            if (currentSettler.isSick && currentSettler.health > 90 && Math.random() < 0.01) {
                currentSettler.isSick = false;
                get().addLog(`${currentSettler.name} has recovered from illness!`, 'success');
            }

            // Death logic
            if (currentSettler.health <= 0) {
                get().addLog(`${currentSettler.name} has passed away.`, 'danger');
                newHappiness = Math.max(0, newHappiness - 20);
                return null;
            }

            if (currentSettler.hunger < 20) newHappiness = Math.max(0, newHappiness - 0.2);
            if (currentSettler.energy < 20) newHappiness = Math.max(0, newHappiness - 0.1);
            if (currentSettler.hunger > 70 && currentSettler.energy > 70) newHappiness = Math.min(100, newHappiness + 0.05);
            
            if (currentSettler.state === 'working' && currentSettler.traits?.some(t => t.type === 'workaholic')) {
                 newHappiness = Math.min(100, newHappiness + 0.01);
            }

            return currentSettler;
          }).filter((s): s is Settler => s !== null);

          // Research progression
          if (state.currentResearch) {
            const topic = RESEARCH_TREE.find((r) => r.id === state.currentResearch);
            const progressPerTick = 0.01; // 100 ticks to complete
            const progressed = state.researchProgress + progressPerTick;
            if (progressed >= 1 && topic) {
              const researchLog: LogEntry = { id: generateId(), message: `Research completed: ${topic.name}`, timestamp: Date.now(), type: 'success' };
              newLogs = [researchLog, ...newLogs].slice(0, 20);
              return {
                resources: newResources,
                settlers: newSettlers,
                happiness: newHappiness,
                weather: newWeather,
                season: newSeason,
                day: newDay,
                logs: newLogs,
                tickRate: state.tickRate,
                buildings: state.buildings,
                nature: state.nature,
                selectedBuilding: state.selectedBuilding,
                selectedBuildingId: state.selectedBuildingId,
                isBuilding: state.isBuilding,
                objectives: state.objectives,
                unlockedResearch: [...new Set([...state.unlockedResearch, state.currentResearch])],
                currentResearch: null,
                researchProgress: 0,
                tradeOffers: newTradeOffers,
                lastTradeRefresh: newLastTradeRefresh,
                productionStats: currentProduction,
              };
            } else {
              return {
                resources: newResources,
                settlers: newSettlers,
                happiness: newHappiness,
                weather: newWeather,
                season: newSeason,
                day: newDay,
                logs: newLogs,
                tickRate: state.tickRate,
                buildings: state.buildings,
                nature: state.nature,
                selectedBuilding: state.selectedBuilding,
                selectedBuildingId: state.selectedBuildingId,
                isBuilding: state.isBuilding,
                objectives: state.objectives,
                unlockedResearch: state.unlockedResearch,
                currentResearch: state.currentResearch,
                researchProgress: progressed,
                tradeOffers: newTradeOffers,
                lastTradeRefresh: newLastTradeRefresh,
                productionStats: currentProduction,
              };
            }
          }

          const updatedObjectives = (state.objectives || []).map((o) => {
            if (o.complete) return o;
            let met = false;
            if (o.goal.type === 'resource' && o.goal.key) {
              met = (newResources[o.goal.key as ResourceType] || 0) >= o.goal.amount;
            } else if (o.goal.type === 'building' && o.goal.key) {
              met = (state.buildings || []).filter((b) => b.type === o.goal.key).length >= o.goal.amount;
            } else if (o.goal.type === 'population') {
              met = (newSettlers || []).length >= o.goal.amount;
            } else if (o.goal.type === 'happiness') {
              met = (newHappiness || 0) >= o.goal.amount;
            }
            return met ? { ...o, complete: true } : o;
          });

          return {
            resources: newResources,
            settlers: newSettlers,
            happiness: newHappiness,
            weather: newWeather,
            season: newSeason,
            day: newDay,
            logs: newLogs,
            tickRate: state.tickRate,
            buildings: state.buildings,
            nature: state.nature,
            selectedBuilding: state.selectedBuilding,
            selectedBuildingId: state.selectedBuildingId,
            isBuilding: state.isBuilding,
            objectives: updatedObjectives,
            unlockedResearch: state.unlockedResearch,
            currentResearch: state.currentResearch,
            researchProgress: state.researchProgress,
            tradeOffers: newTradeOffers,
            lastTradeRefresh: newLastTradeRefresh,
            productionStats: currentProduction,
          };
        });
      },

      reset: () => {
        // Regenerate nature on reset
        const items = [];
        for (let i = 0; i < 40; i++) {
            const angle = Math.random() * Math.PI * 2;
            const radius = 15 + Math.random() * 30;
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;
            const type: NatureType = Math.random() > 0.3 ? 'tree' : 'rock';
            const scale = 0.8 + Math.random() * 0.5;
            items.push({ id: `nature-${i}`, position: [x, 0, z] as [number, number, number], type, scale });
        }

        set({
            resources: {
                wood: 100,
                food: 50,
                stone: 0,
                iron: 0,
                tools: 0,
                relics: 0,
                waste: 0,
            },
            settlers: [
                { id: 'settler-1', name: 'John', position: [0, 0, 0] as [number, number, number], targetPosition: null, state: 'idle', actionTimer: 0, hunger: 100, energy: 100, health: 100, traits: [TRAIT_DEFINITIONS.strong] },
                { id: 'settler-2', name: 'Jane', position: [2, 0, 2] as [number, number, number], targetPosition: null, state: 'idle', actionTimer: 0, hunger: 100, energy: 100, health: 100, traits: [TRAIT_DEFINITIONS.fast] },
            ] as Settler[],
            happiness: 100,
            buildings: [initialBarn] as Building[],
            nature: items,
            logs: [],
            weather: 'sunny' as WeatherType,
            season: 'spring' as Season,
            selectedBuilding: null,
            selectedBuildingId: null,
            isBuilding: false,
            day: 1,
            cameraTarget: null as string | null,
            productionStats: {
              wood: 0,
              food: 0,
              stone: 0,
              iron: 0,
              tools: 0,
              relics: 0,
              waste: 0,
            } as Record<ResourceType, number>,
            tickRate: 1000,
            expeditions: [],
            floatingTexts: [],
            objectives: get().objectives.map(o => ({ ...o, complete: false, claimed: false })),
            unlockedResearch: [],
            currentResearch: null,
            researchProgress: 0,
        });
      },
    }),
    {
      name: 'homestead-storage', // name of the item in the storage (must be unique)
      version: 2,
      migrate: (persistedState, _version) => {
        const state = persistedState as GameState;
        if (!state.buildings) state.buildings = [];
        if (!(state.buildings || []).some((b) => b.type === 'barn')) {
          state.buildings = [initialBarn, ...state.buildings];
        }
        if (state.settlers) {
          state.settlers = state.settlers.map(s => ({
            ...s,
            traits: s.traits || []
          }));
        }
        return state;
      },
      partialize: (state) => ({ 
        resources: state.resources, 
        settlers: state.settlers,
        happiness: state.happiness,
        buildings: state.buildings, 
        nature: state.nature,
        logs: state.logs,
        weather: state.weather,
        season: state.season,
        day: state.day,
        tickRate: state.tickRate,
        objectives: state.objectives,
        unlockedResearch: state.unlockedResearch,
        currentResearch: state.currentResearch,
        researchProgress: state.researchProgress,
        tradeOffers: state.tradeOffers,
        lastTradeRefresh: state.lastTradeRefresh,
      }), // only persist these fields
    }
  )
);
