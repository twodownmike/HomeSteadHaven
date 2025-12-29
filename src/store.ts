import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { GameState, BuildingType, ResourceType, BUILDING_COSTS, NatureType, BUILDING_STATS, LogEntry, WeatherType, Season, Settler, Building, Objective, GameSaveData, RESOURCE_GENERATION } from './types';

// Simple ID generator to avoid extra dependency for now if uuid is not installed, 
// but I'll use a simple random string for now.
const generateId = () => Math.random().toString(36).substr(2, 9);

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
          { id: 'settler-1', name: 'John', position: [0, 0, 0] as [number, number, number], targetPosition: null, state: 'idle', actionTimer: 0 },
          { id: 'settler-2', name: 'Jane', position: [2, 0, 2] as [number, number, number], targetPosition: null, state: 'idle', actionTimer: 0 },
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

      addLog: (message: string, type: LogEntry['type'] = 'info') => {
          set((state) => {
              const newLog: LogEntry = {
                  id: generateId(),
                  message,
                  timestamp: Date.now(),
                  type
              };
              // Keep only last 20 logs
              return { logs: [newLog, ...state.logs].slice(0, 20) };
          });
      },

      addResource: (type: ResourceType, amount: number) =>
        set((state) => {
            const baseStorage = 100;
            const additionalStorage = state.buildings.reduce((acc, b) => acc + ((BUILDING_STATS[b.type].storage || 0) * b.level), 0);
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
        const item = state.nature.find(n => n.id === id);
        if (item) {
            state.addLog(`Cleared ${item.type}`, 'info');
            set((state) => ({
                nature: state.nature.filter((item) => item.id !== id)
            }));
        }
      },

      addBuilding: (type: BuildingType, position: [number, number, number]) => {
        const state = get();

        if (type === 'barn') {
            state.addLog('The Barn already anchors your homestead and cannot be placed again.', 'warning');
            return;
        }
        
        const barn = state.buildings.find(b => b.type === 'barn');
        if (!barn) {
          // Safety: auto-insert barn if missing
          set((s) => ({ buildings: [initialBarn, ...s.buildings] }));
          return;
        }

        const requiredLevel = BARN_LEVEL_REQUIREMENTS[type];
        if (requiredLevel && barn.level < requiredLevel) {
          state.addLog(`Upgrade the Barn to level ${requiredLevel} to unlock ${type}.`, 'warning');
          return;
        }
        
        // Validate collision again (server-side validation style)
        const buildingCollision = state.buildings.some(b => 
            b.position[0] === position[0] && b.position[2] === position[2]
        );
        
        const minX = position[0] - 0.8;
        const maxX = position[0] + 0.8;
        const minZ = position[2] - 0.8;
        const maxZ = position[2] + 0.8;

        const natureCollision = state.nature.some(n => 
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
            const employed = state.buildings.reduce((acc, b) => acc + (BUILDING_STATS[b.type].workers || 0), 0);
            if (state.settlers.length - employed < stats.workers) {
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
        const building = state.buildings.find(b => b.id === id);
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
                 buildings: state.buildings.map(b => 
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
        const building = state.buildings.find(b => b.id === id);
        if (building?.type === 'barn') {
          state.addLog('The Barn is the heart of the homestead and cannot be demolished.', 'warning');
          return;
        }
        if (building) {
          state.addLog(`Demolished ${building.type}`, 'danger');
            
            // Unassign workers
            const newSettlers = state.settlers.map(s => 
                s.job === id ? { ...s, job: undefined, state: 'idle' as const } : 
                s.home === id ? { ...s, home: undefined } : s
            );

            set((state) => ({
                buildings: state.buildings.filter(b => b.id !== id),
                settlers: newSettlers,
                selectedBuildingId: null
            }));
          }
      },

      assignWorker: (buildingId: string) => {
          const state = get();
          const building = state.buildings.find(b => b.id === buildingId);
          if (!building) return;

          const stats = BUILDING_STATS[building.type];
          if (!stats.workers) {
              state.addLog(`${building.type} does not require workers.`, 'warning');
              return;
          }

          const currentWorkers = state.settlers.filter(s => s.job === buildingId).length;
          if (currentWorkers >= (stats.workers || 0)) {
              state.addLog(`${building.type} is fully staffed.`, 'warning');
              return;
          }

          // Find unemployed settler
          const unemployed = state.settlers.find(s => !s.job);
          if (unemployed) {
              set((state) => ({
                  settlers: state.settlers.map(s => 
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
          const worker = state.settlers.find(s => s.job === buildingId);
          if (worker) {
              set((state) => ({
                  settlers: state.settlers.map(s => 
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
                food: state.resources.food - costFood,
                wood: state.resources.wood - costWood,
            },
        }));

        const watchtowers = state.buildings.filter(b => b.type === 'watchtower').length;
        const luck = Math.random() + watchtowers * 0.05;

        if (luck > 0.65) {
            // Big success: gain resources + maybe a settler
            const woodGain = 40 + Math.round(Math.random() * 40);
            const foodGain = 30 + Math.round(Math.random() * 30);
            const stoneGain = Math.round(Math.random() * 30);
            set((state) => ({
                resources: {
                    ...state.resources,
                    wood: state.resources.wood + woodGain,
                    food: state.resources.food + foodGain,
                    stone: state.resources.stone + stoneGain,
                },
                settlers: Math.random() > 0.6 ? [
                    ...state.settlers,
                    {
                        id: generateId(),
                        name: `Scout ${state.settlers.length + 1}`,
                        position: [0, 0, 0],
                        targetPosition: null,
                        state: 'idle',
                        actionTimer: 0
                    }
                ] : state.settlers,
            }));
            state.addLog(`Expedition returned with riches! +${woodGain} wood, +${foodGain} food${stoneGain ? `, +${stoneGain} stone` : ''}`, 'success');
        } else if (luck > 0.35) {
            const ironGain = 5 + Math.round(Math.random() * 10);
            set((state) => ({
                resources: {
                    ...state.resources,
                    iron: state.resources.iron + ironGain,
                }
            }));
            state.addLog(`Expedition found rare iron veins! +${ironGain} iron`, 'info');
        } else {
            // Failure
            const penalty = Math.max(5, Math.round(state.resources.wood * 0.05));
            set((state) => ({
                resources: {
                    ...state.resources,
                    wood: Math.max(0, state.resources.wood - penalty),
                },
                happiness: Math.max(0, state.happiness - 5),
            }));
            state.addLog('Expedition ran into trouble and limped home. Lost some supplies.', 'danger');
        }
      },

      claimObjective: (id: string) => {
        const state = get();
        const objective = state.objectives.find(o => o.id === id);
        if (!objective || !objective.complete || objective.claimed) return;

        set((state) => ({
            resources: {
                ...state.resources,
                wood: state.resources.wood + (objective.reward.wood || 0),
                food: state.resources.food + (objective.reward.food || 0),
                stone: state.resources.stone + (objective.reward.stone || 0),
                iron: state.resources.iron + (objective.reward.iron || 0),
            },
            objectives: state.objectives.map(o => o.id === id ? { ...o, claimed: true } : o),
        }));

        state.addLog(`Claimed reward: ${objective.title}`, 'success');
      },

      loadSaveData: (data: Partial<GameSaveData>) => {
        const current = get();
        const incomingBuildings = data.buildings || current.buildings;
        const ensureBarnBuildings = incomingBuildings.some(b => b.type === 'barn')
          ? incomingBuildings
          : [initialBarn, ...incomingBuildings];
        set({
          resources: data.resources || current.resources,
          settlers: data.settlers || current.settlers,
          happiness: data.happiness ?? current.happiness,
          buildings: ensureBarnBuildings,
          nature: data.nature || current.nature,
          logs: data.logs || current.logs,
          weather: data.weather || current.weather,
          season: data.season || current.season,
          day: data.day ?? current.day,
          objectives: data.objectives || current.objectives,
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
          const additionalStorage = state.buildings.reduce(
            (acc, b) => acc + ((BUILDING_STATS[b.type].storage || 0) * b.level),
            0
          );
          const maxStorage = baseStorage + additionalStorage;

          // Resource generation
          state.buildings.forEach((b) => {
            const gen = RESOURCE_GENERATION[b.type];
            (Object.keys(gen) as ResourceType[]).forEach((res) => {
              const amount = (gen[res] || 0) * b.level * 0.1;
              newResources[res] = Math.min(maxStorage, newResources[res] + amount);
            });
          });

          // Food consumption
          const foodCost = state.settlers.length * 0.04;
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

          // Settler AI (movement/work)
          newSettlers = newSettlers.map((settler) => {
            const timeOfDay = newDay % 1;
            const isNight = timeOfDay > 0.75 || timeOfDay < 0.2;
            const isWorkTime = timeOfDay > 0.25 && timeOfDay < 0.7;

            if (settler.job && isWorkTime) {
              const workplace = state.buildings.find((b) => b.id === settler.job);
              if (workplace) {
                const dist = Math.hypot(settler.position[0] - workplace.position[0], settler.position[2] - workplace.position[2]);
                if (dist > 2) {
                  return { ...settler, state: 'walking', targetPosition: workplace.position };
                }
                return { ...settler, state: 'working', targetPosition: null };
              }
            }

            if (isNight) {
              const target: [number, number, number] = [0, 0, 0];
              const dist = Math.hypot(settler.position[0] - target[0], settler.position[2] - target[2]);
              if (dist > 2) {
                return { ...settler, state: 'walking', targetPosition: target };
              }
              return { ...settler, state: 'resting', targetPosition: null };
            }

            if (
              settler.state === 'idle' ||
              (settler.state === 'working' && !isWorkTime) ||
              (settler.state === 'resting' && !isNight)
            ) {
              if (Math.random() < 0.02) {
                const angle = Math.random() * Math.PI * 2;
                const dist = 3 + Math.random() * 8;
                const tx = Math.cos(angle) * dist;
                const tz = Math.sin(angle) * dist;
                return { ...settler, state: 'walking', targetPosition: [tx, 0, tz] };
              }
              return { ...settler, state: 'idle' };
            }

            if (settler.state === 'walking' && settler.targetPosition) {
              const dx = settler.targetPosition[0] - settler.position[0];
              const dz = settler.targetPosition[2] - settler.position[2];
              const dist = Math.hypot(dx, dz);
              const speed = 0.08;
              if (dist < speed) {
                return { ...settler, position: settler.targetPosition, targetPosition: null, state: 'idle' };
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
            return settler;
          });

          const updatedObjectives = state.objectives.map((o) => {
            if (o.complete) return o;
            let met = false;
            if (o.goal.type === 'resource' && o.goal.key) {
              met = newResources[o.goal.key as ResourceType] >= o.goal.amount;
            } else if (o.goal.type === 'building' && o.goal.key) {
              met = state.buildings.filter((b) => b.type === o.goal.key).length >= o.goal.amount;
            } else if (o.goal.type === 'population') {
              met = newSettlers.length >= o.goal.amount;
            } else if (o.goal.type === 'happiness') {
              met = newHappiness >= o.goal.amount;
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
                { id: 'settler-1', name: 'John', position: [0, 0, 0] as [number, number, number], targetPosition: null, state: 'idle', actionTimer: 0 },
                { id: 'settler-2', name: 'Jane', position: [2, 0, 2] as [number, number, number], targetPosition: null, state: 'idle', actionTimer: 0 },
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
        });
      },
    }),
    {
      name: 'homestead-storage', // name of the item in the storage (must be unique)
      version: 2,
      migrate: (persistedState, _version) => {
        const state = persistedState as GameState;
        if (!state.buildings) state.buildings = [];
        if (!state.buildings.some((b) => b.type === 'barn')) {
          state.buildings = [initialBarn, ...state.buildings];
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
      }), // only persist these fields
    }
  )
);
