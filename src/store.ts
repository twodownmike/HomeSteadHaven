import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { GameState, BuildingType, ResourceType, BUILDING_COSTS, RESOURCE_GENERATION, NatureType, BUILDING_STATS, LogEntry, WeatherType } from './types';

// Simple ID generator to avoid extra dependency for now if uuid is not installed, 
// but I'll use a simple random string for now.
const generateId = () => Math.random().toString(36).substr(2, 9);

export const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      resources: {
        wood: 100,
        food: 50,
        stone: 0,
        iron: 0,
      },
      population: 2, // Start with 2 settlers
      buildings: [],
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
      logs: [],
      weather: 'sunny',
      selectedBuilding: null,
      selectedBuildingId: null,
      isBuilding: false,
      day: 1,

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
            if (state.population - employed < stats.workers) {
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
          if (building) {
            state.addLog(`Demolished ${building.type}`, 'danger');
            set((state) => ({
                buildings: state.buildings.filter(b => b.id !== id),
                selectedBuildingId: null
            }));
          }
      },

      setSelectedBuilding: (type: BuildingType | null) =>
        set({ selectedBuilding: type, isBuilding: !!type, selectedBuildingId: null }),

      selectBuildingId: (id: string | null) =>
        set({ selectedBuildingId: id, selectedBuilding: null, isBuilding: false }),

      tick: () => {
        set((state) => {
          const newResources = { ...state.resources };
          let newPopulation = state.population;
          let newWeather = state.weather;
          let newLogs = [...state.logs];

          // Weather Change (1% chance)
          if (Math.random() < 0.01) {
              const types: WeatherType[] = ['sunny', 'rain', 'snow'];
              // Simple weighted probability or just random
              // Let's bias slightly towards sunny
              const r = Math.random();
              if (r < 0.6) newWeather = 'sunny';
              else if (r < 0.85) newWeather = 'rain';
              else newWeather = 'snow';

              if (newWeather !== state.weather) {
                  const log: LogEntry = { id: generateId(), message: `Weather changed to ${newWeather}!`, timestamp: Date.now(), type: 'info' };
                  newLogs = [log, ...newLogs].slice(0, 20);
              }
          }
          
          // Calculate Storage
          const baseStorage = 100;
          const additionalStorage = state.buildings.reduce((acc, b) => acc + ((BUILDING_STATS[b.type].storage || 0) * b.level), 0);
          const maxStorage = baseStorage + additionalStorage;
          
          // Survival Mechanic: Food Consumption
          // Base consumption + cost per building (workers)
          const consumption = 0.5 + (state.population * 0.5); // 0.5 food per person
          
          if (newResources.food >= consumption) {
            newResources.food -= consumption;
            
            // Growth: If food is abundant (> 2x consumption) and housing available, chance to grow
            if (newResources.food > consumption * 2 && newPopulation < state.population + state.buildings.reduce((acc, b) => acc + (BUILDING_STATS[b.type].housing || 0), 2)) {
                if (Math.random() < 0.05) { // 5% chance per tick to grow
                    newPopulation += 1;
                }
            }

            // Calculate production from buildings (only if fed and staffed)
            // For simplicity, we assume if we are fed, we work. 
            // Check if we have enough workers for ALL buildings?
            // Or just reduce production proportional to missing workers?
            
            const totalWorkersNeeded = state.buildings.reduce((acc, b) => acc + (BUILDING_STATS[b.type].workers || 0), 0);
            const efficiency = totalWorkersNeeded > 0 ? Math.min(1, state.population / totalWorkersNeeded) : 1;
            
            state.buildings.forEach((building) => {
                const production = RESOURCE_GENERATION[building.type];
                if (production) {
                (Object.keys(production) as ResourceType[]).forEach((res) => {
                    // Apply efficiency based on workforce
                    // Also scale by building level
                    let amount = (production[res] || 0) * efficiency * building.level;
                    
                    // Apply Weather Modifiers
                    if (newWeather === 'rain') {
                        if (res === 'food') amount *= 1.2; // +20% Food
                    } else if (newWeather === 'snow') {
                        if (res === 'food') amount *= 0.5; // -50% Food
                    }

                    // Cap at maxStorage
                    newResources[res] = Math.min(newResources[res] + amount, maxStorage);
                });
                }
            });
          } else {
             // Starvation
             newResources.food = 0;
             if (Math.random() < 0.1 && newPopulation > 1) {
                 newPopulation -= 1;
             }
          }
          
          // Let's handle log updates for population changes here manually by appending to logs
          if (newPopulation > state.population) {
              const log: LogEntry = { id: generateId(), message: "A new settler arrived!", timestamp: Date.now(), type: 'success' as LogEntry['type'] };
              newLogs = [log, ...newLogs].slice(0, 20);
          } else if (newPopulation < state.population) {
              const log: LogEntry = { id: generateId(), message: "A settler died from starvation!", timestamp: Date.now(), type: 'danger' as LogEntry['type'] };
              newLogs = [log, ...newLogs].slice(0, 20);
          }

          return {
            resources: newResources,
            population: newPopulation,
            weather: newWeather,
            day: state.day + 0.005,
            logs: newLogs
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
            population: 2,
            buildings: [],
            nature: items,
            logs: [],
            weather: 'sunny',
            selectedBuilding: null,
            selectedBuildingId: null,
            isBuilding: false,
            day: 1,
        });
      },
    }),
    {
      name: 'homestead-storage', // name of the item in the storage (must be unique)
      partialize: (state) => ({ 
        resources: state.resources, 
        population: state.population,
        buildings: state.buildings, 
        nature: state.nature,
        logs: state.logs,
        weather: state.weather,
        day: state.day 
      }), // only persist these fields
    }
  )
);
