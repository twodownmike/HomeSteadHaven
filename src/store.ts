import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { GameState, BuildingType, ResourceType, BUILDING_COSTS, NatureType, BUILDING_STATS, LogEntry, WeatherType, Season, Settler, Building, Objective, GameSaveData, RESOURCE_GENERATION, ResearchId, RESEARCH_TREE, BUILDING_RESEARCH_REQ, Resources, Trait, TRAIT_DEFINITIONS, TradeOffer, BUILDING_WORKSTATIONS, FloatingEffect } from './types';

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
  id: 'barn-main',
  type: 'barn',
  position: [0, 0, 0],
  level: 1,
  lastCollected: Date.now(),
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
        wood: 100,
        food: 50,
        stone: 0,
        iron: 0,
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
      ] as Objective[],
      unlockedResearch: [] as ResearchId[],
      currentResearch: null as ResearchId | null,
      researchProgress: 0,
      tradeOffers: [] as TradeOffer[],
      lastTradeRefresh: 0,
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
          floatingTexts: state.floatingTexts.filter(ft => ft.id !== id)
        }));
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
            state.addLog('Not enough supplies to send an expedition.', 'warning');
            return;
        }

        // Deduct supplies
        set((state) => ({
            resources: {
                ...state.resources,
                food: (state.resources?.food || 0) - costFood,
                wood: (state.resources?.wood || 0) - costWood,
            },
        }));

        const watchtowers = (state.buildings || []).filter(b => b.type === 'watchtower').length;
        const luck = Math.random() + watchtowers * 0.05;

        if (luck > 0.65) {
            // Big success: gain resources + maybe a settler
            const woodGain = 40 + Math.round(Math.random() * 40);
            const foodGain = 30 + Math.round(Math.random() * 30);
            const stoneGain = Math.round(Math.random() * 30);
            set((state) => ({
                resources: {
                    ...state.resources,
                    wood: (state.resources?.wood || 0) + woodGain,
                    food: (state.resources?.food || 0) + foodGain,
                    stone: (state.resources?.stone || 0) + stoneGain,
                },
                settlers: Math.random() > 0.6 ? [
                    ...(state.settlers || []),
                    {
                        id: generateId(),
                        name: `Scout ${(state.settlers || []).length + 1}`,
                        position: [0, 0, 0] as [number, number, number],
                        targetPosition: null,
                        state: 'idle' as const,
                        actionTimer: 0,
                        hunger: 100,
                        energy: 100,
                        traits: getRandomTraits(),
                    }
                ] : (state.settlers || []),
            }));
            state.addLog(`Expedition returned with riches! +${woodGain} wood, +${foodGain} food${stoneGain ? `, +${stoneGain} stone` : ''}`, 'success');
        } else if (luck > 0.35) {
            const ironGain = 5 + Math.round(Math.random() * 10);
            set((state) => ({
                resources: {
                    ...state.resources,
                    iron: (state.resources?.iron || 0) + ironGain,
                }
            }));
            state.addLog(`Expedition found rare iron veins! +${ironGain} iron`, 'info');
        } else {
            // Failure
            const penalty = Math.max(5, Math.round((state.resources?.wood || 0) * 0.05));
            set((state) => ({
                resources: {
                    ...state.resources,
                    wood: Math.max(0, (state.resources?.wood || 0) - penalty),
                },
                happiness: Math.max(0, (state.happiness || 0) - 5),
            }));
            state.addLog('Expedition ran into trouble and limped home. Lost some supplies.', 'danger');
        }
      },

      claimObjective: (id: string) => {
        const state = get();
        const objective = (state.objectives || []).find(o => o.id === id);
        if (!objective || !objective.complete || objective.claimed) return;

        set((state) => ({
            resources: {
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

          // Resource generation
          (state.buildings || []).forEach((b) => {
            const gen = RESOURCE_GENERATION[b.type];
            if (!gen) return;
            (Object.keys(gen) as ResourceType[]).forEach((res) => {
              const amount = (gen[res] || 0) * b.level * 0.1;
              newResources[res] = Math.min(maxStorage, newResources[res] + amount);
              
              // Trigger floating text occasionally for production
              if (amount > 0 && Math.random() < 0.05) {
                const color = res === 'wood' ? 'text-amber-400' : res === 'food' ? 'text-yellow-400' : res === 'stone' ? 'text-stone-300' : 'text-blue-300';
                get().addFloatingText(`+${Math.floor(amount * 10)} ${res}`, [b.position[0], b.position[1] + 2, b.position[2]], color);
              }
            });
          });

          // Food consumption
          const foodCost = (state.settlers || []).length * 0.04;
          newResources.food = Math.max(0, newResources.food - foodCost);
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


            // Find home if not assigned
            let settlerHomeId = settler.home;
            if (!settlerHomeId) {
                const availableHome = (state.buildings || []).find(b => {
                    const stats = BUILDING_STATS[b.type];
                    if (!stats.housing) return false;
                    const occupants = (state.settlers || []).filter(s => s.home === b.id).length;
                    return occupants < (stats.housing * b.level);
                });
                if (availableHome) settlerHomeId = availableHome.id;
            }

            if (settler.job && isWorkTime) {
              const workplace = (state.buildings || []).find((b) => b.id === settler.job);
              if (workplace) {
                const stations = BUILDING_WORKSTATIONS[workplace.type] || [[0, 0, 0]];
                const workerIndex = (state.settlers || []).filter(s => s.job === workplace.id).indexOf(settler);
                const offset = stations[workerIndex % stations.length] || [0, 0, 0];
                const targetPos: [number, number, number] = [
                    workplace.position[0] + offset[0],
                    workplace.position[1] + offset[1],
                    workplace.position[2] + offset[2]
                ];

                const dist = Math.hypot(settler.position[0] - targetPos[0], settler.position[2] - targetPos[2]);
                if (dist > 0.5) {
                  return { ...settler, home: settlerHomeId, state: 'walking', targetPosition: targetPos };
                }
                return { ...settler, home: settlerHomeId, state: 'working', targetPosition: null };
              }
            }

            if (isNight) {
              const home = (state.buildings || []).find(b => b.id === settlerHomeId) || (state.buildings || []).find(b => b.type === 'barn');
              const target: [number, number, number] = home ? home.position : [0, 0, 0];
              const dist = Math.hypot(settler.position[0] - target[0], settler.position[2] - target[2]);
              if (dist > 0.5) {
                return { ...settler, home: settlerHomeId, state: 'walking', targetPosition: target };
              }
              return { ...settler, home: settlerHomeId, state: 'resting', targetPosition: null };
            }

            if (
              settler.state === 'idle' ||
              (settler.state === 'working' && !isWorkTime) ||
              (settler.state === 'resting' && !isNight)
            ) {
              // Idle wandering logic
              if (Math.random() < 0.02) {
                // Try to visit a social spot (Campfire, Well)
                const socialSpots = (state.buildings || []).filter(b => b.type === 'campfire' || b.type === 'well');
                if (socialSpots.length > 0 && Math.random() < 0.5) {
                    const spot = socialSpots[Math.floor(Math.random() * socialSpots.length)];
                    const stations = BUILDING_WORKSTATIONS[spot.type] || [[0, 0, 0]];
                    const offset = stations[Math.floor(Math.random() * stations.length)] || [0, 0, 0];
                    return { ...settler, home: settlerHomeId, state: 'walking', targetPosition: [spot.position[0] + offset[0], 0, spot.position[2] + offset[2]] };
                }

                // Or just wander nearby
                const angle = Math.random() * Math.PI * 2;
                const dist = 3 + Math.random() * 8;
                const tx = Math.cos(angle) * dist;
                const tz = Math.sin(angle) * dist;
                return { ...settler, home: settlerHomeId, state: 'walking', targetPosition: [tx, 0, tz] };
              }
              return { ...settler, home: settlerHomeId, state: 'idle' };
            }

            if (settler.state === 'walking' && settler.targetPosition) {
              const dx = settler.targetPosition[0] - settler.position[0];
              const dz = settler.targetPosition[2] - settler.position[2];
              const dist = Math.hypot(dx, dz);
              let speed = 0.08;
              if (settler.traits?.some(t => t.type === 'fast')) speed *= 1.5;

              if (dist < speed) {
                // Determine next state based on context
                let nextState: 'idle' | 'working' | 'resting' = 'idle';
                if (isWorkTime && settler.job) {
                    const workplace = (state.buildings || []).find(b => b.id === settler.job);
                    if (workplace) {
                        const stations = BUILDING_WORKSTATIONS[workplace.type] || [[0, 0, 0]];
                        const isAtStation = stations.some(s => 
                            Math.hypot(settler.targetPosition![0] - (workplace.position[0] + s[0]), 
                                       settler.targetPosition![2] - (workplace.position[2] + s[2])) < 0.1
                        );
                        if (isAtStation) nextState = 'working';
                    }
                } else if (isNight) {
                    nextState = 'resting';
                }

                return { ...settler, position: settler.targetPosition, targetPosition: null, state: nextState };
              }
              return {
                ...settler,
                position: [
                  settler.position[0] + (dx / dist) * speed,
                  0,
                  settler.position[2] + (dz / dist) * speed,
                ] as [number, number, number],
              };
            }
            // Needs adjustments
            let hungerDrop = 0.1;
            if (settler.traits?.some(t => t.type === 'glutton')) hungerDrop *= 1.5;
            if (settler.traits?.some(t => t.type === 'ascetic')) hungerDrop *= 0.7;

            let hunger = Math.max(0, Math.min(100, settler.hunger - hungerDrop)); // gradual hunger drop
            let energy = settler.energy;

            if (settler.state === 'working' || settler.state === 'walking') {
              let energyDrop = 0.2;
              if (settler.traits?.some(t => t.type === 'strong')) energyDrop *= 0.6;
              energy = Math.max(0, energy - energyDrop);
            } else if (settler.state === 'resting') {
              let energyGain = 0.6;
              if (settler.traits?.some(t => t.type === 'insomniac')) energyGain *= 1.5;
              energy = Math.min(100, energy + energyGain);
              hunger = Math.max(0, hunger - 0.05);
            } else {
              energy = Math.min(100, energy + 0.1);
            }

            // Slight happiness influence from needs
            if (hunger < 20) newHappiness = Math.max(0, newHappiness - 0.2);
            if (energy < 20) newHappiness = Math.max(0, newHappiness - 0.1);
            if (hunger > 70 && energy > 70) newHappiness = Math.min(100, newHappiness + 0.05);
            
            // Workaholic trait: gain happiness when working? or just don't lose it?
            // Let's say workaholics gain a tiny bit of happiness when working
            if (settler.state === 'working' && settler.traits?.some(t => t.type === 'workaholic')) {
                 newHappiness = Math.min(100, newHappiness + 0.01);
            }

            return { ...settler, hunger, energy };
          });

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
            },
            settlers: [
                { id: 'settler-1', name: 'John', position: [0, 0, 0] as [number, number, number], targetPosition: null, state: 'idle', actionTimer: 0, hunger: 100, energy: 100, traits: [TRAIT_DEFINITIONS.strong] },
                { id: 'settler-2', name: 'Jane', position: [2, 0, 2] as [number, number, number], targetPosition: null, state: 'idle', actionTimer: 0, hunger: 100, energy: 100, traits: [TRAIT_DEFINITIONS.fast] },
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
            tickRate: 1000,
            objectives: get().objectives.map(o => ({ ...o, complete: false, claimed: false })),
            unlockedResearch: [],
            currentResearch: null,
            researchProgress: 0,
            tradeOffers: [],
            lastTradeRefresh: 0,
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
