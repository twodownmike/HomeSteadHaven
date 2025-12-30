import React, { useEffect, useMemo, useState } from 'react';
import { useGameStore } from '../../store';
import { BuildingType, BUILDING_COSTS, ResourceType, BUILDING_STATS, Objective, RESOURCE_GENERATION, RESEARCH_TREE } from '../../types';
import { Trees, Wheat, Hammer, Mountain, RefreshCw, ArrowUpCircle, Trash2, X, CloudRain, Sun, Snowflake, Smile, Trophy, Gift, PartyPopper, Compass, CheckCircle2, Save, LogIn, LogOut, Brain, Menu, Users, HeartPulse, Zap, Utensils } from 'lucide-react';
import { auth, signInWithGoogle, signOutUser, saveGameData, loadGameData } from '../../firebase';
import { onAuthStateChanged, User } from 'firebase/auth';

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
    nature,
    tickRate,
    setTickRate,
    objectives,
    claimObjective,
    celebrateFestival,
    sendExpedition,
    assignWorker,
    unassignWorker,
    loadSaveData,
    unlockedResearch,
    currentResearch,
    researchProgress,
    startResearch,
    cancelResearch,
    tradeOffers,
    lastTradeRefresh,
    acceptTrade,
  } = useGameStore();
  const [showMenu, setShowMenu] = useState(false);
  const [showBuildMenu, setShowBuildMenu] = useState(false);
  const [showObjectives, setShowObjectives] = useState(false);
  const [showResearch, setShowResearch] = useState(false);
  const [showPopulation, setShowPopulation] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [isLoadingSave, setIsLoadingSave] = useState(false);

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
        setShowMenu(false);
    }
  };

  const selectedBuildingData = selectedBuildingId ? buildings.find(b => b.id === selectedBuildingId) : null;
  const upgradeCost = selectedBuildingData ? BUILDING_COSTS[selectedBuildingData.type] : null;
  const upgradeMultiplier = selectedBuildingData ? selectedBuildingData.level + 1 : 1;
  const selectedStats = selectedBuildingData ? BUILDING_STATS[selectedBuildingData.type] : null;
  const assignedWorkers = selectedBuildingData ? settlers.filter(s => s.job === selectedBuildingData.id).length : 0;
  const barn = buildings.find(b => b.type === 'barn');

  const canAffordUpgrade = upgradeCost && Object.keys(upgradeCost).every(res => {
      const type = res as ResourceType;
      return resources[type] >= (upgradeCost[type] || 0) * upgradeMultiplier;
  });

  const canFestival = resources.wood >= 30 && resources.food >= 40;
  const canExpedition = resources.food >= 25 && resources.wood >= 15;
  const avgHunger = settlers.length ? Math.round(settlers.reduce((a,s)=>a+s.hunger,0)/settlers.length) : 100;
  const avgEnergy = settlers.length ? Math.round(settlers.reduce((a,s)=>a+s.energy,0)/settlers.length) : 100;
  const lowNeeds = settlers.filter(s => s.hunger < 30 || s.energy < 30).length;

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

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u: User | null) => {
      setUser(u);
      if (u) {
        setIsLoadingSave(true);
        const save = await loadGameData(u.uid);
        if (save) {
          loadSaveData(save);
        }
        setIsLoadingSave(false);
      }
    });
    return () => unsub();
  }, [loadSaveData]);

  const handleLogin = async () => {
    await signInWithGoogle();
  };

  const handleLogout = async () => {
    await signOutUser();
    setUser(null);
  };

  const handleSave = async () => {
    if (!user) {
      await handleLogin();
      return;
    }
    setIsSaving(true);
    await saveGameData(user.uid, {
      resources,
      settlers,
      happiness,
      buildings,
      nature,
      logs,
      weather,
      season,
      day,
      objectives,
      unlockedResearch,
      currentResearch,
      researchProgress,
      tradeOffers,
      lastTradeRefresh,
    });
    setIsSaving(false);
  };

  const buildBenefits = useMemo(() => {
    const map: Record<BuildingType, string[]> = {} as Record<BuildingType, string[]>;
    (Object.keys(BUILDING_COSTS) as BuildingType[]).forEach((type) => {
      const stats = BUILDING_STATS[type];
      const production = RESOURCE_GENERATION[type];
      const perks: string[] = [];
      if (stats.housing) perks.push(`Housing +${stats.housing}`);
      if (stats.storage) perks.push(`Storage +${stats.storage} per level`);
      if (stats.workers) perks.push(`Needs ${stats.workers} worker${stats.workers > 1 ? 's' : ''}`);
      if (stats.happiness) perks.push(`Happiness +${stats.happiness} per level`);
      if (production) {
        Object.entries(production).forEach(([res, amt]) => {
          if (amt && amt > 0) perks.push(`Produces ${amt}/tick ${res}`);
        });
      }
      // Flavor
      if (type === 'campfire') perks.push('Cozy spot that boosts happiness and eases bad weather.');
      if (type === 'watchtower') perks.push('Mitigates storms, improves expeditions.');
      if (type === 'fishery') perks.push('Food income even through winter.');
      if (type === 'well') perks.push('Reduces rain/snow mood penalty.');
      if (type === 'bakery') perks.push('Extra food and morale.');
      if (type === 'warehouse') perks.push('Major storage expansion.');
      if (type === 'tradingPost') perks.push('Trade resources with traveling merchants.');
      map[type] = perks;
    });
    return map;
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col justify-between z-30">
      {/* Top Bar: Menu + Resources */}
      <div className="pointer-events-auto flex flex-col gap-2 p-3 w-full max-w-full">
        <div className="flex items-center gap-2 w-full">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 text-white shadow-xl hover:bg-white/10 transition-colors shrink-0"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="flex-1 overflow-x-auto no-scrollbar flex gap-2 mask-linear-fade">
            {(['wood', 'food', 'stone', 'iron'] as ResourceType[]).map((res) => (
              <div key={res} className="bg-black/60 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 text-white shadow-xl flex items-center gap-2 min-w-fit">
                <ResourceIcon type={res} />
                <div className="text-sm font-bold">{Math.floor(resources[res])}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Status Bar: Compact stats */}
        <div className="flex flex-wrap gap-2">
          <div className="bg-black/60 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 text-white shadow-xl flex items-center gap-3 text-xs sm:text-sm">
            <div className="font-bold">Day {day.toFixed(0)}</div>
            <div className="w-px h-3 bg-white/20" />
            <div className="flex items-center gap-1 capitalize">
              {weather === 'rain' && <CloudRain className="w-3 h-3 text-blue-300" />}
              {weather === 'snow' && <Snowflake className="w-3 h-3 text-cyan-100" />}
              {weather === 'sunny' && <Sun className="w-3 h-3 text-amber-300" />}
              <span className="hidden sm:inline">{weather}</span>
            </div>
            <div className="w-px h-3 bg-white/20" />
            <div className="flex items-center gap-1">
              <Smile className={`w-3 h-3 ${happiness > 70 ? 'text-green-300' : 'text-yellow-300'}`} />
              <span>{Math.floor(happiness)}%</span>
            </div>
          </div>

          <button onClick={() => setShowPopulation(true)} className="bg-black/60 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 text-white shadow-xl flex items-center gap-3 text-xs sm:text-sm hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-1">
              <Users className="w-3 h-3 text-gray-300" />
              <span>{settlers.length}</span>
            </div>
            <div className="w-px h-3 bg-white/20" />
            <div className={`flex items-center gap-1 ${lowNeeds > 0 ? 'text-yellow-300' : 'text-gray-300'}`}>
              <HeartPulse className="w-3 h-3" />
              <span>{Math.round((avgHunger + avgEnergy) / 2)}%</span>
            </div>
          </button>
        </div>
      </div>

      {/* Main Menu Drawer */}
      {showMenu && (
        <div className="absolute top-16 left-3 w-64 bg-black/90 backdrop-blur-xl p-4 rounded-2xl border border-white/10 text-white shadow-2xl pointer-events-auto z-50 flex flex-col gap-4 animate-in slide-in-from-left-4 fade-in duration-200">
          {/* Actions Section */}
          <div className="flex flex-col gap-2">
            <div className="text-xs uppercase opacity-60 font-bold tracking-wider mb-1">Actions</div>
            
            <button onClick={() => { setShowObjectives((v) => !v); setShowMenu(false); }} className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors">
              <Trophy className="w-4 h-4 text-emerald-300" /> Objectives
            </button>
            
            <button onClick={() => { setShowResearch((v) => !v); setShowMenu(false); }} className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors">
              <Brain className="w-4 h-4 text-cyan-300" /> Research
            </button>

            <button onClick={celebrateFestival} disabled={!canFestival} className={`flex items-center gap-3 px-3 py-2 rounded-xl border border-white/5 transition-colors ${canFestival ? 'bg-pink-600/20 hover:bg-pink-600/30 text-pink-100' : 'bg-white/5 opacity-50 cursor-not-allowed'}`}>
              <PartyPopper className="w-4 h-4 text-pink-300" /> Festival
            </button>

            <button onClick={sendExpedition} disabled={!canExpedition} className={`flex items-center gap-3 px-3 py-2 rounded-xl border border-white/5 transition-colors ${canExpedition ? 'bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-100' : 'bg-white/5 opacity-50 cursor-not-allowed'}`}>
              <Compass className="w-4 h-4 text-indigo-300" /> Expedition
            </button>
          </div>

          <div className="h-px bg-white/10" />

          {/* System Section */}
          <div className="flex flex-col gap-2">
            <div className="text-xs uppercase opacity-60 font-bold tracking-wider mb-1">System</div>
            
            {user ? (
              <div className="flex flex-col gap-2">
                <div className="px-3 text-xs text-gray-400">Signed in as {user.displayName}</div>
                <button onClick={handleSave} disabled={isSaving || isLoadingSave} className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors">
                  <Save className="w-4 h-4 text-yellow-300" /> {isSaving ? 'Saving...' : 'Save Game'}
                </button>
                <button onClick={handleLogout} className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors">
                  <LogOut className="w-4 h-4 text-red-300" /> Logout
                </button>
              </div>
            ) : (
              <button onClick={handleLogin} className="flex items-center gap-3 px-3 py-2 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-blue-100 transition-colors">
                <LogIn className="w-4 h-4" /> Sign In with Google
              </button>
            )}

            <span className="text-xs uppercase opacity-60 font-bold tracking-wider mt-2">Game Speed</span>
            <div className="grid grid-cols-3 gap-2">
              {[1200, 800, 500].map((rate) => (
                <button
                  key={rate}
                  onClick={() => setTickRate(rate)}
                  className={`px-2 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${tickRate === rate ? 'bg-green-600/30 border-green-400 text-green-100' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
                >
                  {Math.round(1000 / rate)}x
                </button>
              ))}
            </div>
          </div>
          
          <button 
            onClick={handleReset}
            className="flex items-center gap-3 bg-red-500/20 hover:bg-red-500/30 text-red-200 px-3 py-2 rounded-xl transition-colors w-full text-left border border-red-500/20"
          >
              <RefreshCw className="w-4 h-4 text-red-300" />
              Reset Progress
          </button>
          <div className="text-[10px] text-gray-500 text-center">
              v0.2.0 Beta
          </div>
        </div>
      )}

      {/* Research Panel */}
      {showResearch && (
        <div className="pointer-events-auto w-full max-w-4xl bg-black/85 backdrop-blur-md p-4 rounded-2xl border border-cyan-400/30 text-white shadow-2xl mx-auto mt-20 sm:mt-24 max-h-[70vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-cyan-300" />
              <h3 className="text-lg font-bold">Research</h3>
              {currentResearch && <span className="text-xs text-cyan-200">In progress…</span>}
            </div>
            <button onClick={() => setShowResearch(false)} className="text-gray-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {RESEARCH_TREE.map((topic) => {
              const unlocked = unlockedResearch.includes(topic.id);
              const inProgress = currentResearch === topic.id;
              const barnReqMet = (barn?.level || 0) >= topic.barnLevelReq;
              const canAfford = (Object.keys(topic.cost) as ResourceType[]).every(
                (r) => resources[r] >= (topic.cost[r] || 0)
              );
              const disabled = unlocked || inProgress || !barnReqMet || !canAfford;
              return (
                <div key={topic.id} className={`p-3 rounded-xl border ${unlocked ? 'border-green-400/40 bg-green-900/10' : 'border-white/10 bg-white/5'} flex flex-col gap-2`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold">{topic.name}</div>
                      <div className="text-xs text-gray-300">{topic.description}</div>
                    </div>
                    {unlocked && <CheckCircle2 className="w-5 h-5 text-green-300" />}
                  </div>
                  <div className="text-xs text-gray-200 flex flex-wrap gap-2">
                    <span className="px-2 py-1 rounded-full bg-white/10 border border-white/10">Barn lvl {topic.barnLevelReq}</span>
                    {(Object.entries(topic.cost) as [string, number][])
                      .map(([res, amt]) => (
                        <span key={res} className={`px-2 py-1 rounded-full border ${resources[res as ResourceType] < amt ? 'border-red-400/60 text-red-200' : 'border-white/20 text-white'}`}>
                          {amt} {res}
                        </span>
                      ))}
                  </div>
                  {inProgress && (
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-400" style={{ width: `${Math.min(100, researchProgress * 100)}%` }} />
                    </div>
                  )}
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-300">
                      {unlocked ? 'Unlocked' : inProgress ? 'Researching…' : barnReqMet ? (canAfford ? 'Ready to research' : 'Need resources') : 'Barn level too low'}
                    </span>
                    {inProgress ? (
                      <button
                        onClick={cancelResearch}
                        className="text-xs px-3 py-1 rounded-lg border border-cyan-400 text-cyan-100 hover:bg-cyan-500/20"
                      >
                        Cancel
                      </button>
                    ) : (
                      <button
                        onClick={() => startResearch(topic.id)}
                        disabled={disabled}
                        className={`text-xs px-3 py-1 rounded-lg border ${disabled ? 'border-white/10 text-gray-400 opacity-60 cursor-not-allowed' : 'border-cyan-400 text-cyan-100 hover:bg-cyan-500/20'}`}
                      >
                        {unlocked ? 'Done' : 'Research'}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Population Panel */}
      {showPopulation && (
        <div className="pointer-events-auto w-full max-w-4xl bg-black/85 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-white shadow-2xl mx-auto mt-20 sm:mt-24 max-h-[70vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-300" />
              <h3 className="text-lg font-bold">Population</h3>
              <span className="text-xs text-gray-400">({settlers.length} Settlers)</span>
            </div>
            <button onClick={() => setShowPopulation(false)} className="text-gray-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {settlers.map(settler => {
                const jobBuilding = settler.job ? buildings.find(b => b.id === settler.job) : null;
                
                return (
                    <div key={settler.id} className="p-3 rounded-xl border border-white/10 bg-white/5 flex flex-col gap-2">
                        <div className="flex justify-between items-start">
                            <div>
                                <div className="font-bold text-sm">{settler.name}</div>
                                <div className="text-xs text-gray-400 capitalize">{settler.state}</div>
                            </div>
                            {jobBuilding ? (
                                <div className="text-[10px] px-2 py-1 rounded bg-blue-500/20 text-blue-200 border border-blue-500/30 capitalize truncate max-w-[100px]">
                                    {jobBuilding.type}
                                </div>
                            ) : (
                                <div className="text-[10px] px-2 py-1 rounded bg-white/10 text-gray-400 border border-white/10">
                                    Unemployed
                                </div>
                            )}
                        </div>
                        
                        <div className="grid grid-cols-2 gap-2 mt-1">
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-1 text-xs text-gray-300">
                                    <Utensils className="w-3 h-3 text-orange-300" />
                                    <span>{Math.floor(settler.hunger)}%</span>
                                </div>
                                <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                                    <div className="h-full bg-orange-400" style={{ width: `${settler.hunger}%` }} />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-1 text-xs text-gray-300">
                                    <Zap className="w-3 h-3 text-yellow-300" />
                                    <span>{Math.floor(settler.energy)}%</span>
                                </div>
                                <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                                    <div className="h-full bg-yellow-400" style={{ width: `${settler.energy}%` }} />
                                </div>
                            </div>
                        </div>

                        {settler.traits && settler.traits.length > 0 && (
                            <div className="mt-2 pt-2 border-t border-white/5">
                                <div className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-1">Traits</div>
                                <div className="flex flex-wrap gap-1">
                                    {settler.traits.map((trait, i) => (
                                        <div key={i} className="group relative cursor-help">
                                            <span className="px-1.5 py-0.5 rounded text-[10px] bg-purple-500/20 text-purple-200 border border-purple-500/30">
                                                {trait.name}
                                            </span>
                                            {/* Tooltip */}
                                            <div className="absolute bottom-full left-0 mb-1 hidden group-hover:block w-32 p-2 bg-black/90 text-xs text-white rounded border border-white/10 z-50">
                                                {trait.description}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
          </div>
        </div>
      )}

      {/* Event Logs */}
      <div className="absolute bottom-32 left-3 sm:left-4 flex flex-col gap-2 w-[300px] pointer-events-none opacity-80">
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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-white shadow-2xl pointer-events-auto z-40 min-w-[300px] max-w-[90vw]">
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
            {selectedStats && (
              <div className="grid grid-cols-2 gap-2 text-xs bg-white/5 border border-white/10 rounded-xl p-3">
                {selectedStats.housing && <div className="text-gray-200">Housing: +{selectedStats.housing}</div>}
                {selectedStats.storage && <div className="text-gray-200">Storage: +{selectedStats.storage * selectedBuildingData.level}</div>}
                {selectedStats.happiness && <div className="text-gray-200">Happiness: +{(selectedStats.happiness * selectedBuildingData.level).toFixed(1)}</div>}
                {selectedStats.workers !== undefined && <div className="text-gray-200">{workerText}</div>}
              </div>
            )}

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
              <div className="flex flex-col items-end text-xs">
                {upgradeCost && Object.entries(upgradeCost).map(([res, amount]) => (
                  <div key={res} className={resources[res as ResourceType] < (amount as number) * upgradeMultiplier ? 'text-red-400' : 'text-gray-300'}>
                    {(amount as number) * upgradeMultiplier} {res.charAt(0).toUpperCase()}
                  </div>
                ))}
              </div>
            </button>

            {selectedBuildingData.type === 'tradingPost' && (
              <div className="flex flex-col gap-2 bg-white/5 border border-white/10 rounded-xl p-3">
                <div className="flex items-center justify-between">
                   <h4 className="font-bold text-sm text-amber-300">Active Trade Offers</h4>
                   <span className="text-[10px] text-gray-400">Refreshes every 3 days</span>
                </div>
                {tradeOffers.length === 0 ? (
                    <div className="text-xs text-gray-400 italic py-2 text-center">No traders currently available.</div>
                ) : (
                    <div className="flex flex-col gap-2">
                        {tradeOffers.map(offer => {
                            const canAfford = (Object.keys(offer.wants) as ResourceType[]).every(res => resources[res] >= (offer.wants[res] || 0));
                            return (
                                <div key={offer.id} className="bg-black/20 rounded-lg p-2 flex items-center justify-between">
                                    <div className="flex flex-col text-xs gap-1">
                                        <div className="flex items-center gap-1 text-red-300">
                                            <span className="font-bold">Give:</span>
                                            {Object.entries(offer.wants).map(([k, v]) => (
                                                <span key={k} className="flex items-center gap-0.5">
                                                    {v} <ResourceIcon type={k as ResourceType} />
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-1 text-green-300">
                                            <span className="font-bold">Get:</span>
                                            {Object.entries(offer.gives).map(([k, v]) => (
                                                <span key={k} className="flex items-center gap-0.5">
                                                    {v} <ResourceIcon type={k as ResourceType} />
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => acceptTrade(offer.id)}
                                        disabled={!canAfford}
                                        className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors ${canAfford ? 'bg-green-600/30 border-green-500 text-green-100 hover:bg-green-600/50' : 'bg-gray-700/30 border-gray-600 text-gray-500 cursor-not-allowed'}`}
                                    >
                                        Trade
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                )}
              </div>
            )}

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

      {/* Objectives Panel (top) */}
      {showObjectives && (
        <div className="pointer-events-auto w-full max-w-4xl bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-white shadow-2xl mx-auto mt-20 sm:mt-24 max-h-[70vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-300" />
              <h3 className="text-lg font-bold">Objectives</h3>
              {isLoadingSave && <span className="text-xs text-gray-300">Loading save...</span>}
            </div>
            <button onClick={() => setShowObjectives(false)} className="text-gray-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
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
      )}

      {/* Bottom HUD */}
      <div className="pointer-events-none w-full pb-4 flex flex-col gap-3">
        <div className="pointer-events-auto fixed bottom-4 left-0 right-0 flex justify-center z-40 px-3 sm:px-0">
          <button
            onClick={() => setShowBuildMenu((v: boolean) => !v)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold shadow-lg transition-colors w-full max-w-xs ${showBuildMenu ? 'bg-yellow-500/20 border-yellow-300 text-yellow-100' : 'bg-black/70 border-white/10 text-white hover:bg-white/10'}`}
          >
            <Hammer className="w-4 h-4" />
            {showBuildMenu ? 'Close Build' : 'Build'}
          </button>
        </div>

        {showBuildMenu && (
          <div className="pointer-events-auto mx-auto w-full max-w-5xl bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-2xl mt-12 mb-16">
            {isBuilding && selectedBuilding && (
              <div className="mb-3 bg-yellow-500/15 border border-yellow-400/40 text-yellow-100 px-4 py-2 rounded-lg text-sm font-semibold">
                Placing {selectedBuilding}... tap ground to confirm.
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[320px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-white/20">
              {(Object.keys(BUILDING_COSTS) as BuildingType[]).map((type) => {
                const costs = BUILDING_COSTS[type];
                const perks = buildBenefits[type] || [];
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
                      text-left flex flex-col gap-2 p-3 rounded-xl transition-all duration-200 border
                      ${isSelected ? 'bg-yellow-600/20 border-yellow-400/60 ring-2 ring-yellow-400/70 text-white' : 'bg-white/5 border-white/10 hover:bg-white/10 text-gray-200'}
                      ${!canAfford ? 'opacity-50 cursor-not-allowed grayscale' : 'active:scale-95'}
                    `}
                  >
                    <div className="flex items-center justify-between">
                      <span className="capitalize font-bold text-base">{type.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <span className="text-[11px] px-2 py-1 rounded-full bg-white/10 border border-white/10">
                        {canAfford ? 'Build' : 'Need resources'}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs text-gray-200">
                      {Object.entries(costs).map(([res, amount]) => (
                        <span key={res} className={`px-2 py-1 rounded-full border ${resources[res as ResourceType] < (amount as number) ? 'border-red-400/60 text-red-200' : 'border-white/20 text-white'}`}>
                          {amount as number} {res}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-col gap-1 text-xs text-gray-300">
                      {perks.length ? perks.map((p, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-white/40 mt-1" />
                          <span>{p}</span>
                        </div>
                      )) : <span className="text-gray-400">No special benefits.</span>}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
