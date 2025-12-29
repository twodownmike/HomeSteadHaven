import React, { useEffect, useMemo, useState } from 'react';
import { useGameStore } from '../../store';
import { BuildingType, BUILDING_COSTS, ResourceType, BUILDING_STATS, Objective, RESOURCE_GENERATION } from '../../types';
import { Trees, Wheat, Hammer, Mountain, Settings, RefreshCw, ArrowUpCircle, Trash2, X, CloudRain, Sun, Snowflake, Smile, Trophy, Gift, PartyPopper, Compass, CheckCircle2, Save, LogIn, LogOut } from 'lucide-react';
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
  } = useGameStore();
  const [showSettings, setShowSettings] = useState(false);
  const [showBuildMenu, setShowBuildMenu] = useState(false);
  const [showObjectives, setShowObjectives] = useState(false);
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
      map[type] = perks;
    });
    return map;
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none px-3 sm:px-4 py-3 flex flex-col gap-4">
      {/* Top HUD (mobile-friendly wrap) */}
      <div className="pointer-events-auto flex flex-col gap-3">
        <div className="flex flex-wrap gap-2 sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            <div className="bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 text-white shadow-xl min-w-[110px]">
              <div className="text-sm font-bold">Day {day.toFixed(1)}</div>
            </div>
            <div className="bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 text-white shadow-xl min-w-[110px]">
              <div className="text-sm font-bold capitalize">{season}</div>
              <div className="text-xs text-gray-300 flex items-center gap-1">
                {weather === 'rain' && <CloudRain className="w-4 h-4 text-blue-300" />}
                {weather === 'snow' && <Snowflake className="w-4 h-4 text-cyan-100" />}
                {weather === 'sunny' && <Sun className="w-4 h-4 text-amber-300" />}
                {weather}
              </div>
            </div>
            <div className="bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 text-white shadow-xl min-w-[140px]">
              <div className="text-sm font-bold flex items-center gap-2">
                <Smile className="w-4 h-4 text-green-300" /> Happiness
              </div>
              <div className="text-sm">{Math.floor(happiness)}%</div>
              <div className="w-full h-2 bg-white/10 rounded-full mt-1 overflow-hidden">
                <div className="h-full bg-green-400" style={{ width: `${happiness}%` }} />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {(['wood','food','stone','iron'] as ResourceType[]).map((res) => (
              <div key={res} className="bg-black/60 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 text-white shadow-xl flex items-center gap-2 min-w-[84px] justify-between">
                <ResourceIcon type={res} />
                <div className="text-sm font-bold">{resources[res]}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <div className="flex gap-2">
            <div className="bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 text-white shadow-xl min-w-[140px]">
              <div className="text-sm font-bold">Population</div>
              <div className="text-sm">{settlers.length} settlers</div>
              <div className="text-xs text-gray-300">{buildings.length} buildings</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 justify-end">
            <button
              onClick={celebrateFestival}
              disabled={!canFestival}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-xs sm:text-sm font-semibold transition-colors ${canFestival ? 'bg-pink-600/30 border-pink-400 text-pink-100 hover:bg-pink-600/50' : 'bg-white/5 border-white/10 text-gray-400 cursor-not-allowed'}`}
            >
              <PartyPopper className="w-4 h-4" />
              Festival
            </button>
            <button
              onClick={sendExpedition}
              disabled={!canExpedition}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-xs sm:text-sm font-semibold transition-colors ${canExpedition ? 'bg-indigo-600/30 border-indigo-400 text-indigo-100 hover:bg-indigo-600/50' : 'bg-white/5 border-white/10 text-gray-400 cursor-not-allowed'}`}
            >
              <Compass className="w-4 h-4" />
              Expedition
            </button>
            <button 
              onClick={() => setShowObjectives((v) => !v)}
              className={`px-3 py-2 rounded-xl border text-xs sm:text-sm font-semibold transition-colors ${showObjectives ? 'bg-emerald-600/30 border-emerald-400 text-emerald-100' : 'bg-white/5 border-white/10 text-white hover:bg-white/10'}`}
            >
              Objectives
            </button>
            <button
              onClick={handleSave}
              disabled={isSaving || isLoadingSave}
              className={`px-3 py-2 rounded-xl border text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 ${isSaving ? 'bg-yellow-600/30 border-yellow-400 text-yellow-100' : 'bg-white/5 border-white/10 text-white hover:bg-white/10'}`}
            >
              <Save className="w-4 h-4" />
              {isSaving ? 'Saving...' : 'Save'}
            </button>
            {user ? (
              <button
                onClick={handleLogout}
                className="px-3 py-2 rounded-xl border border-white/10 text-xs sm:text-sm font-semibold flex items-center gap-2 bg-white/10 hover:bg-white/20"
              >
                <LogOut className="w-4 h-4" />
                {user.displayName || 'Logout'}
              </button>
            ) : (
              <button
                onClick={handleLogin}
                className="px-3 py-2 rounded-xl border border-white/10 text-xs sm:text-sm font-semibold flex items-center gap-2 bg-white/5 hover:bg-white/10"
              >
                <LogIn className="w-4 h-4" />
                Sign in
              </button>
            )}
            <button 
              onClick={() => setShowSettings(!showSettings)}
              className="bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 text-white shadow-xl hover:bg-white/10 transition-colors"
            >
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Settings Menu */}
      {showSettings && (
        <div className="absolute top-20 right-3 sm:right-4 bg-black/80 backdrop-blur-md p-4 rounded-xl border border-white/10 text-white shadow-xl pointer-events-auto z-50 flex flex-col gap-2 min-w-[200px]">
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
        <div className="pointer-events-auto w-full max-w-4xl bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-white shadow-2xl mx-auto mt-2 sm:mt-4">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-300" />
            <h3 className="text-lg font-bold">Objectives</h3>
            {isLoadingSave && <span className="text-xs text-gray-300">Loading save...</span>}
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
          <div className="pointer-events-auto mx-auto w-full max-w-5xl bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-2xl mt-12">
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
