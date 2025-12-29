import React, { useState } from 'react';
import { useGameStore } from '../../store';
import { BuildingType, BUILDING_COSTS, ResourceType, BUILDING_STATS, Objective } from '../../types';
import { Trees, Wheat, Hammer, Mountain, Settings, RefreshCw, ArrowUpCircle, Trash2, X, Users, Package, CloudRain, Sun, Snowflake, Smile, Trophy, Gift, PartyPopper, Compass, CheckCircle2 } from 'lucide-react';

const ResourceIcon = ({ type }: { type: ResourceType }) => {
  switch (type) {
    case 'wood': return <Trees className="w-4 h-4 text-amber-700" />;
    case 'food': return <Wheat className="w-4 h-4 text-yellow-600" />;
    case 'stone': return <Hammer className="w-4 h-4 text-stone-500" />;
    case 'iron': return <Mountain className="w-4 h-4 text-slate-400" />;
  }
};

export const GameUI: React.FC = () => {
  const { 
    resources, 
    settlers,
    happiness,
    weather,
    isBuilding, 
    selectedBuilding, 
    setSelectedBuilding, 
    day, 
    reset,
    season,
    buildings,
    selectedBuildingId,
    selectBuildingId,
    upgradeBuilding,
    demolishBuilding,
    logs,
    tickRate,
    setTickRate,
    objectives,
    claimObjective,
    celebrateFestival,
    sendExpedition,
    assignWorker,
    unassignWorker,
  } = useGameStore();
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

  const selectedBuildingData = selectedBuildingId ? buildings.find(b => b.id === selectedBuildingId) : null;
  const upgradeCost = selectedBuildingData ? BUILDING_COSTS[selectedBuildingData.type] : null;
  const upgradeMultiplier = selectedBuildingData ? selectedBuildingData.level + 1 : 1;
  const selectedStats = selectedBuildingData ? BUILDING_STATS[selectedBuildingData.type] : null;
  const assignedWorkers = selectedBuildingData ? settlers.filter(s => s.job === selectedBuildingData.id).length : 0;

  const canAffordUpgrade = upgradeCost && Object.keys(upgradeCost).every(res => {
      const type = res as ResourceType;
      return resources[type] >= (upgradeCost[type] || 0) * upgradeMultiplier;
  });

  // Calculate Max Storage
  const baseStorage = 100;
  const additionalStorage = buildings.reduce((acc, b) => acc + ((BUILDING_STATS[b.type].storage || 0) * b.level), 0);
  const maxStorage = baseStorage + additionalStorage;

  const canFestival = resources.wood >= 30 && resources.food >= 40;
  const canExpedition = resources.food >= 25 && resources.wood >= 15;

  const objectiveProgress = (obj: Objective) => {
      const { goal } = obj;
      if (goal.type === 'resource' && goal.key) {
          const current = resources[goal.key as ResourceType];
          return Math.min(current / goal.amount, 1);
      }
      if (goal.type === 'building' && goal.key) {
          const count = buildings.filter(b => b.type === goal.key).length;
          return Math.min(count / goal.amount, 1);
      }
      if (goal.type === 'population') {
          return Math.min(settlers.length / goal.amount, 1);
      }
      if (goal.type === 'happiness') {
          return Math.min(happiness / goal.amount, 1);
      }
      return 0;
  };

  const objectiveProgressLabel = (obj: Objective) => {
      const { goal } = obj;
      if (goal.type === 'resource' && goal.key) {
          const current = Math.floor(resources[goal.key as ResourceType]);
          return `${current}/${goal.amount}`;
      }
      if (goal.type === 'building' && goal.key) {
          const count = buildings.filter(b => b.type === goal.key).length;
          return `${count}/${goal.amount}`;
      }
      if (goal.type === 'population') {
          return `${settlers.length}/${goal.amount}`;
      }
      if (goal.type === 'happiness') {
          return `${Math.floor(happiness)}% / ${goal.amount}%`;
      }
      return '';
  };

  const workerCapacity = selectedStats?.workers || 0;
  const workerText = workerCapacity ? `${assignedWorkers}/${workerCapacity} workers` : 'No workers needed';

  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4">
      {/* Top HUD: Resources + Quick actions */}
        <div className="flex justify-between items-start pointer-events-auto">
        <div className="flex gap-4">
            {/* Resources */}
            <div className="flex gap-4 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 text-white shadow-xl">
                {Object.entries(resources).map(([key, value]) => (
                    <div key={key} className="flex items-center gap-2 min-w-[80px]">
                        <ResourceIcon type={key as ResourceType} />
                        <div className="flex flex-col">
                            <span className="text-xs uppercase opacity-60 font-bold tracking-wider">{key}</span>
                            <span className={`font-mono font-bold ${value >= maxStorage ? 'text-red-400' : ''}`}>
                                {Math.floor(value)}
                            </span>
                        </div>
                    </div>
                ))}
                
                {/* Storage Indicator */}
                <div className="border-l border-white/10 pl-4 flex items-center gap-2">
                    <Package className="w-4 h-4 text-gray-400" />
                    <div className="flex flex-col">
                        <span className="text-xs uppercase opacity-60 font-bold tracking-wider">Cap</span>
                        <span className="font-mono font-bold text-gray-300">{maxStorage}</span>
                    </div>
                </div>
            </div>

            {/* Population */}
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 text-white shadow-xl min-w-[80px]">
                <Users className="w-4 h-4 text-blue-400" />
                <div className="flex flex-col">
                    <span className="text-xs uppercase opacity-60 font-bold tracking-wider">Pop</span>
                    <span className="font-mono font-bold">{settlers.length}</span>
                </div>
            </div>

            {/* Happiness */}
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 text-white shadow-xl min-w-[80px]">
                <Smile className={`w-4 h-4 ${happiness > 80 ? 'text-green-400' : happiness > 40 ? 'text-yellow-400' : 'text-red-400'}`} />
                <div className="flex flex-col">
                    <span className="text-xs uppercase opacity-60 font-bold tracking-wider">Happy</span>
                    <span className="font-mono font-bold">{Math.floor(happiness)}%</span>
                </div>
            </div>
        </div>

        <div className="flex gap-2 items-stretch">
            <div className="flex gap-2">
            <div className="bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 text-white shadow-xl">
                <div className="text-sm font-bold">Day {day.toFixed(1)}</div>
            </div>
            <div className="bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 text-white shadow-xl flex items-center gap-2">
                {weather === 'sunny' && <Sun className="w-4 h-4 text-yellow-300" />}
                {weather === 'rain' && <CloudRain className="w-4 h-4 text-blue-300" />}
                {weather === 'snow' && <Snowflake className="w-4 h-4 text-cyan-200" />}
                <div className="flex flex-col leading-tight">
                    <span className="text-xs uppercase opacity-60 font-bold tracking-wider">Weather</span>
                    <span className="font-mono font-bold capitalize">{weather}</span>
                </div>
            </div>
            <div className="bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 text-white shadow-xl flex flex-col leading-tight">
                <span className="text-xs uppercase opacity-60 font-bold tracking-wider">Season</span>
                <span className="font-mono font-bold capitalize">{season}</span>
            </div>
            </div>
            {/* Quick Actions */}
            <div className="flex gap-2">
              <button
                onClick={celebrateFestival}
                disabled={!canFestival}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-sm font-semibold transition-colors ${canFestival ? 'bg-pink-600/30 border-pink-400 text-pink-100 hover:bg-pink-600/50' : 'bg-white/5 border-white/10 text-gray-400 cursor-not-allowed'}`}
              >
                <PartyPopper className="w-4 h-4" />
                Festival
              </button>
              <button
                onClick={sendExpedition}
                disabled={!canExpedition}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-sm font-semibold transition-colors ${canExpedition ? 'bg-indigo-600/30 border-indigo-400 text-indigo-100 hover:bg-indigo-600/50' : 'bg-white/5 border-white/10 text-gray-400 cursor-not-allowed'}`}
              >
                <Compass className="w-4 h-4" />
                Expedition
              </button>
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
              <div className="flex flex-col gap-2">
                  <span className="text-xs uppercase opacity-60 font-bold tracking-wider">Game Speed</span>
                  <div className="grid grid-cols-3 gap-2">
                      {[1200, 800, 500].map((rate) => (
                          <button
                            key={rate}
                            onClick={() => setTickRate(rate)}
                            className={`px-3 py-2 rounded-lg text-sm font-semibold border transition-colors ${tickRate === rate ? 'bg-green-600/30 border-green-400 text-green-100' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
                          >
                            {Math.round(1000 / rate)}x
                          </button>
                      ))}
                  </div>
                  <div className="text-[11px] text-gray-400">Higher speeds update the world more frequently.</div>
              </div>
              <button 
                onClick={handleReset}
                className="flex items-center gap-2 bg-red-500/20 hover:bg-red-500/40 text-red-200 px-4 py-2 rounded-lg transition-colors w-full text-left"
              >
                  <RefreshCw className="w-4 h-4" />
                  Reset Progress
              </button>
              <div className="text-xs text-gray-400 mt-2">
                  v0.2.0 Beta
              </div>
          </div>
      )}

      {/* Event Logs */}
      <div className="absolute bottom-32 left-4 flex flex-col gap-2 w-[300px] pointer-events-none opacity-80">
          {logs.slice(0, 5).map((log) => (
              <div 
                key={log.id}
                className={`
                    p-2 rounded-lg text-sm font-medium backdrop-blur-md shadow-lg border border-white/5 animate-in slide-in-from-left-4 fade-in duration-300
                    ${log.type === 'success' ? 'bg-green-900/60 text-green-100' : 
                      log.type === 'warning' ? 'bg-yellow-900/60 text-yellow-100' :
                      log.type === 'danger' ? 'bg-red-900/60 text-red-100' :
                      'bg-gray-900/60 text-gray-100'}
                `}
              >
                  {log.message}
              </div>
          ))}
      </div>

      {/* Building Inspection Panel */}
      {selectedBuildingData && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-white shadow-2xl pointer-events-auto z-40 min-w-[300px]">
              <div className="flex justify-between items-start mb-4">
                  <div>
                      <h3 className="font-bold text-xl capitalize">{selectedBuildingData.type}</h3>
                      <p className="text-gray-400 text-sm">Level {selectedBuildingData.level}</p>
                  </div>
                  <button onClick={() => selectBuildingId(null)} className="text-gray-400 hover:text-white">
                      <X className="w-5 h-5" />
                  </button>
              </div>

              <div className="flex flex-col gap-3">
                  {/* Stats */}
                  {selectedStats && (
                    <div className="grid grid-cols-2 gap-2 text-xs bg-white/5 border border-white/10 rounded-xl p-3">
                        {selectedStats.housing && <div className="text-gray-200">Housing: +{selectedStats.housing}</div>}
                        {selectedStats.storage && <div className="text-gray-200">Storage: +{selectedStats.storage * selectedBuildingData.level}</div>}
                        {selectedStats.happiness && <div className="text-gray-200">Happiness: +{(selectedStats.happiness * selectedBuildingData.level).toFixed(1)}</div>}
                        {selectedStats.workers !== undefined && (
                            <div className="text-gray-200">{workerText}</div>
                        )}
                    </div>
                  )}

                  {/* Staffing */}
                  {selectedStats?.workers && (
                    <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl p-3 text-sm">
                        <div>
                            <div className="font-semibold">Workers</div>
                            <div className="text-gray-300">{workerText}</div>
                        </div>
                        <div className="flex gap-2">
                            <button 
                              onClick={() => assignWorker(selectedBuildingData.id)}
                              className="px-3 py-2 rounded-lg bg-green-600/30 hover:bg-green-600/50 border border-green-400 text-green-50 text-xs"
                            >
                              + Assign
                            </button>
                            <button 
                              onClick={() => unassignWorker(selectedBuildingData.id)}
                              className="px-3 py-2 rounded-lg bg-yellow-600/30 hover:bg-yellow-600/50 border border-yellow-400 text-yellow-50 text-xs"
                            >
                              - Unassign
                            </button>
                        </div>
                    </div>
                  )}

                  <button 
                      onClick={() => upgradeBuilding(selectedBuildingData.id)}
                      disabled={!canAffordUpgrade}
                      className={`
                          flex items-center justify-between p-3 rounded-xl border border-white/10 transition-all
                          ${canAffordUpgrade ? 'bg-green-600/20 hover:bg-green-600/40 border-green-500/50' : 'bg-gray-800/50 opacity-50 cursor-not-allowed'}
                      `}
                  >
                      <div className="flex items-center gap-2">
                          <ArrowUpCircle className="w-5 h-5 text-green-400" />
                          <div className="text-left">
                              <div className="font-bold">Upgrade</div>
                              <div className="text-xs text-gray-300">Increases efficiency</div>
                          </div>
                      </div>
                      
                      {/* Upgrade Cost */}
                      <div className="flex flex-col items-end text-xs">
                          {upgradeCost && Object.entries(upgradeCost).map(([res, amount]) => (
                              <div key={res} className={resources[res as ResourceType] < amount * upgradeMultiplier ? 'text-red-400' : 'text-gray-300'}>
                                  {amount * upgradeMultiplier} {res.charAt(0).toUpperCase()}
                              </div>
                          ))}
                      </div>
                  </button>

                  <button 
                      onClick={() => demolishBuilding(selectedBuildingData.id)}
                      className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 hover:bg-red-500/30 border border-red-500/30 text-red-200 transition-colors"
                  >
                      <Trash2 className="w-5 h-5" />
                      Demolish Building
                  </button>
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

      {/* Objectives */}
      <div className="w-full max-w-4xl flex flex-col gap-2 bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-white shadow-2xl">
          <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-300" />
              <h3 className="text-lg font-bold">Objectives</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {objectives.map((obj) => {
                  const progress = objectiveProgress(obj);
                  const label = objectiveProgressLabel(obj);
                  const complete = obj.complete;
                  const claimed = obj.claimed;
                  return (
                      <div key={obj.id} className={`p-3 rounded-xl border ${complete ? 'border-green-400/40 bg-green-900/20' : 'border-white/10 bg-white/5'} shadow-inner`}>
                          <div className="flex justify-between items-start">
                              <div>
                                  <div className="font-bold">{obj.title}</div>
                                  <div className="text-xs text-gray-300">{obj.description}</div>
                              </div>
                              {complete ? <CheckCircle2 className="w-5 h-5 text-green-300" /> : null}
                          </div>
                          <div className="mt-2 h-2 bg-white/10 rounded-full overflow-hidden">
                              <div className={`h-full ${complete ? 'bg-green-400' : 'bg-blue-400'}`} style={{ width: `${progress * 100}%` }} />
                          </div>
                          <div className="text-[11px] text-gray-300 mt-1">Progress: {label}</div>
                          <div className="flex items-center justify-between mt-2">
                              <div className="flex items-center gap-1 text-xs text-amber-200">
                                  <Gift className="w-3 h-3" />
                                  {Object.entries(obj.reward).map(([k,v]) => `${v} ${k[0].toUpperCase()}`).join(', ')}
                              </div>
                              {complete && !claimed && (
                                  <button
                                    onClick={() => claimObjective(obj.id)}
                                    className="px-3 py-1 rounded-lg bg-green-600/60 hover:bg-green-600 text-sm font-semibold"
                                  >
                                    Claim
                                  </button>
                              )}
                              {claimed && <span className="text-green-300 text-xs">Claimed</span>}
                          </div>
                      </div>
                  );
              })}
          </div>
      </div>
    </div>
  );
};
