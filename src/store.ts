import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { GameState, BuildingType, ResourceType, BUILDING_COSTS, RESOURCE_GENERATION } from './types';

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
      buildings: [],
      selectedBuilding: null,
      isBuilding: false,
      day: 1,

      addResource: (type: ResourceType, amount: number) =>
        set((state) => ({
          resources: {
            ...state.resources,
            [type]: state.resources[type] + amount,
          },
        })),

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

      addBuilding: (type: BuildingType, position: [number, number, number]) => {
        const state = get();
        const cost = BUILDING_COSTS[type];
        
        // Check if can afford
        let canAfford = true;
        (Object.keys(cost) as ResourceType[]).forEach((res) => {
          if ((state.resources[res] || 0) < (cost[res] || 0)) {
            canAfford = false;
          }
        });

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
        }
      },

      setSelectedBuilding: (type: BuildingType | null) =>
        set({ selectedBuilding: type, isBuilding: !!type }),

      tick: () => {
        set((state) => {
          const newResources = { ...state.resources };
          
          // Survival Mechanic: Food Consumption
          // Base consumption + cost per building (workers)
          const consumption = 0.5 + (state.buildings.length * 0.2);
          
          if (newResources.food >= consumption) {
            newResources.food -= consumption;
            
            // Calculate production from buildings (only if fed)
            state.buildings.forEach((building) => {
                const production = RESOURCE_GENERATION[building.type];
                if (production) {
                (Object.keys(production) as ResourceType[]).forEach((res) => {
                    newResources[res] += (production[res] || 0);
                });
                }
            });
          } else {
             // Starvation: No production, food stays at 0
             newResources.food = 0;
          }

          return {
            resources: newResources,
            day: state.day + 0.005 // Increment day slowly (slower than before for day/night cycle)
          };
        });
      },

      reset: () => {
        set({
            resources: {
                wood: 100,
                food: 50,
                stone: 0,
                iron: 0,
            },
            buildings: [],
            selectedBuilding: null,
            isBuilding: false,
            day: 1,
        });
      },
    }),
    {
      name: 'homestead-storage', // name of the item in the storage (must be unique)
      partialize: (state) => ({ 
        resources: state.resources, 
        buildings: state.buildings, 
        day: state.day 
      }), // only persist these fields
    }
  )
);
