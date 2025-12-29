import React, { useState } from 'react';
import { useGameStore } from '../../store';
import { BuildingType, BUILDING_COSTS, ResourceType } from '../../types';
import { Trees, Wheat, Hammer, Mountain, Settings, RefreshCw } from 'lucide-react';

const ResourceIcon = ({ type }: { type: ResourceType }) => {
  switch (type) {
    case 'wood': return <Trees className="w-4 h-4 text-amber-700" />;
    case 'food': return <Wheat className="w-4 h-4 text-yellow-600" />;
    case 'stone': return <Hammer className="w-4 h-4 text-stone-500" />;
    case 'iron': return <Mountain className="w-4 h-4 text-slate-400" />;
  }
};

export const GameUI: React.FC = () => {
  const { resources, isBuilding, selectedBuilding, setSelectedBuilding, day, reset } = useGameStore();
  const [showSettings, setShowSettings] = useState(false);

  const handleBuildSelect = (type: BuildingType) => {
    if (selectedBuilding === type && isBuilding) {
      setSelectedBuilding(null);
    } else {
      setSelectedBuilding(type);
    }
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to reset your progress? This cannot be undone.')) {
        reset();
        setShowSettings(false);
    }
  };

  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4">
      {/* Top HUD: Resources */}
      <div className="flex justify-between items-start pointer-events-auto">
        <div className="flex gap-4 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 text-white shadow-xl">
            {Object.entries(resources).map(([key, value]) => (
                <div key={key} className="flex items-center gap-2 min-w-[80px]">
                    <ResourceIcon type={key as ResourceType} />
                    <div className="flex flex-col">
                        <span className="text-xs uppercase opacity-60 font-bold tracking-wider">{key}</span>
                        <span className="font-mono font-bold">{Math.floor(value)}</span>
                    </div>
                </div>
            ))}
        </div>

        <div className="flex gap-2">
            <div className="bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 text-white shadow-xl">
                <div className="text-sm font-bold">Day {day.toFixed(1)}</div>
            </div>
            <button 
                onClick={() => setShowSettings(!showSettings)}
                className="bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 text-white shadow-xl hover:bg-white/10 transition-colors"
            >
                <Settings className="w-5 h-5" />
            </button>
        </div>
      </div>

      {/* Settings Menu */}
      {showSettings && (
          <div className="absolute top-20 right-4 bg-black/80 backdrop-blur-md p-4 rounded-xl border border-white/10 text-white shadow-xl pointer-events-auto z-50 flex flex-col gap-2 min-w-[200px]">
              <h3 className="font-bold text-lg mb-2">Settings</h3>
              <button 
                onClick={handleReset}
                className="flex items-center gap-2 bg-red-500/20 hover:bg-red-500/40 text-red-200 px-4 py-2 rounded-lg transition-colors w-full text-left"
              >
                  <RefreshCw className="w-4 h-4" />
                  Reset Progress
              </button>
              <div className="text-xs text-gray-400 mt-2">
                  v0.1.0 Alpha
              </div>
          </div>
      )}

      {/* Bottom HUD: Build Menu */}
      <div className="flex flex-col items-center gap-4 pointer-events-auto mb-4 w-full px-4">
        {isBuilding && (
            <div className="bg-black/80 text-white px-6 py-3 rounded-full text-base animate-pulse border border-yellow-500/50 shadow-lg">
                Placing {selectedBuilding}... (Tap to build)
            </div>
        )}
        
        <div className="flex gap-3 bg-black/80 backdrop-blur-md p-3 rounded-2xl border border-white/10 shadow-2xl overflow-x-auto w-full max-w-full scrollbar-hide">
          {(Object.keys(BUILDING_COSTS) as BuildingType[]).map((type) => {
            const costs = BUILDING_COSTS[type];
            const isSelected = selectedBuilding === type;
            const canAfford = (Object.keys(costs) as ResourceType[]).every(
                (r) => resources[r] >= (costs[r] || 0)
            );

            return (
              <button
                key={type}
                onClick={() => handleBuildSelect(type)}
                disabled={!canAfford}
                className={`
                  relative group flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-200 min-w-[110px] flex-shrink-0
                  ${isSelected ? 'bg-yellow-600 text-white ring-2 ring-yellow-400' : 'bg-white/5 hover:bg-white/10 text-gray-300'}
                  ${!canAfford ? 'opacity-50 cursor-not-allowed grayscale' : 'active:scale-95'}
                `}
              >
                <span className="capitalize font-bold text-sm md:text-base">{type.replace(/([A-Z])/g, ' $1').trim()}</span>
                
                {/* Cost Tooltip/Indicator */}
                <div className="flex gap-2 text-xs">
                    {Object.entries(costs).map(([res, amount]) => (
                        <div key={res} className="flex items-center gap-1">
                             {/* Just simple text for cost to keep it clean */}
                             <span className={resources[res as ResourceType] < amount ? "text-red-400" : "text-gray-400"}>
                                {amount} {res.charAt(0).toUpperCase()}
                             </span>
                        </div>
                    ))}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
