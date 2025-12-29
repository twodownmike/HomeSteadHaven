import{r as ce,z as d,I as dn,w as yh,J as vh,K as wh,Q as si,X as Yr,Y as Eh,Z as Ih,_ as Th,p as bh,R as jc,$ as Ah}from"./vendor-CvYXfu-e.js";import{c as Rh,C as Sh,S as xh,a as Ph,b as Ch,P as kh,d as Nh,B as Aa,e as Dh,L as Vh,f as Mh,g as Oh,R as Lh,h as Ra,X as jh,A as Fh,T as Uh,i as Bh,G as $h,H as Fc,M as qh,W as Gh,j as zh,E as Hh,k as Wh,l as Kh,V as Qh}from"./game-BcMaBDyh.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const Jh={};function Xh(n,e){let t;try{t=n()}catch{return}return{getItem:s=>{var o;const a=u=>u===null?null:JSON.parse(u,void 0),c=(o=t.getItem(s))!=null?o:null;return c instanceof Promise?c.then(a):a(c)},setItem:(s,o)=>t.setItem(s,JSON.stringify(o,void 0)),removeItem:s=>t.removeItem(s)}}const nr=n=>e=>{try{const t=n(e);return t instanceof Promise?t:{then(r){return nr(r)(t)},catch(r){return this}}}catch(t){return{then(r){return this},catch(r){return nr(r)(t)}}}},Yh=(n,e)=>(t,r,s)=>{let o={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:T=>T,version:0,merge:(T,D)=>({...D,...T}),...e},a=!1;const c=new Set,u=new Set;let f;try{f=o.getStorage()}catch{}if(!f)return n((...T)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),t(...T)},r,s);const m=nr(o.serialize),I=()=>{const T=o.partialize({...r()});let D;const V=m({state:T,version:o.version}).then(F=>f.setItem(o.name,F)).catch(F=>{D=F});if(D)throw D;return V},R=s.setState;s.setState=(T,D)=>{R(T,D),I()};const x=n((...T)=>{t(...T),I()},r,s);let k;const C=()=>{var T;if(!f)return;a=!1,c.forEach(V=>V(r()));const D=((T=o.onRehydrateStorage)==null?void 0:T.call(o,r()))||void 0;return nr(f.getItem.bind(f))(o.name).then(V=>{if(V)return o.deserialize(V)}).then(V=>{if(V)if(typeof V.version=="number"&&V.version!==o.version){if(o.migrate)return o.migrate(V.state,V.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return V.state}).then(V=>{var F;return k=o.merge(V,(F=r())!=null?F:x),t(k,!0),I()}).then(()=>{D==null||D(k,void 0),a=!0,u.forEach(V=>V(k))}).catch(V=>{D==null||D(void 0,V)})};return s.persist={setOptions:T=>{o={...o,...T},T.getStorage&&(f=T.getStorage())},clearStorage:()=>{f==null||f.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>C(),hasHydrated:()=>a,onHydrate:T=>(c.add(T),()=>{c.delete(T)}),onFinishHydration:T=>(u.add(T),()=>{u.delete(T)})},C(),k||x},Zh=(n,e)=>(t,r,s)=>{let o={storage:Xh(()=>localStorage),partialize:C=>C,version:0,merge:(C,T)=>({...T,...C}),...e},a=!1;const c=new Set,u=new Set;let f=o.storage;if(!f)return n((...C)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),t(...C)},r,s);const m=()=>{const C=o.partialize({...r()});return f.setItem(o.name,{state:C,version:o.version})},I=s.setState;s.setState=(C,T)=>{I(C,T),m()};const R=n((...C)=>{t(...C),m()},r,s);s.getInitialState=()=>R;let x;const k=()=>{var C,T;if(!f)return;a=!1,c.forEach(V=>{var F;return V((F=r())!=null?F:R)});const D=((T=o.onRehydrateStorage)==null?void 0:T.call(o,(C=r())!=null?C:R))||void 0;return nr(f.getItem.bind(f))(o.name).then(V=>{if(V)if(typeof V.version=="number"&&V.version!==o.version){if(o.migrate)return[!0,o.migrate(V.state,V.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,V.state];return[!1,void 0]}).then(V=>{var F;const[U,J]=V;if(x=o.merge(J,(F=r())!=null?F:R),t(x,!0),U)return m()}).then(()=>{D==null||D(x,void 0),x=r(),a=!0,u.forEach(V=>V(x))}).catch(V=>{D==null||D(void 0,V)})};return s.persist={setOptions:C=>{o={...o,...C},C.storage&&(f=C.storage)},clearStorage:()=>{f==null||f.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>k(),hasHydrated:()=>a,onHydrate:C=>(c.add(C),()=>{c.delete(C)}),onFinishHydration:C=>(u.add(C),()=>{u.delete(C)})},o.skipHydration||k(),x||R},ed=(n,e)=>"getStorage"in e||"serialize"in e||"deserialize"in e?((Jh?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),Yh(n,e)):Zh(n,e),td=ed,an={barn:{wood:120,stone:60},cabin:{wood:10},farm:{wood:20,stone:5},lumberMill:{wood:50,stone:10},mine:{wood:100,stone:50},warehouse:{wood:100,stone:20},bakery:{wood:60,stone:20},well:{wood:30,stone:40},campfire:{wood:30,stone:5},watchtower:{wood:80,stone:30},fishery:{wood:40,stone:10},workshop:{wood:80,stone:30,iron:10},infirmary:{wood:70,stone:50}},Ot={barn:{housing:2,storage:100,happiness:.5},cabin:{housing:4},farm:{workers:1},lumberMill:{workers:2},mine:{workers:3},warehouse:{storage:200},bakery:{workers:2,happiness:.4},well:{happiness:.6},campfire:{housing:1,happiness:1.2},watchtower:{workers:1,happiness:.2},fishery:{workers:1},workshop:{workers:1},infirmary:{workers:1,happiness:.6}},Uc={barn:{},cabin:{},farm:{food:5},lumberMill:{wood:5},mine:{stone:2,iron:1},warehouse:{},bakery:{food:8},well:{},campfire:{},watchtower:{},fishery:{food:6},workshop:{wood:1,stone:1},infirmary:{}},gi=[{id:"toolmaking",name:"Toolmaking",description:"Craft tools to boost production and unlock Workshops.",cost:{wood:80,stone:30},barnLevelReq:2},{id:"herbalism",name:"Herbalism",description:"Basic medicine to keep settlers healthier; unlocks Infirmary.",cost:{wood:60,food:40},barnLevelReq:2},{id:"fishing",name:"Fishing Nets",description:"Unlock Fisheries for steady food.",cost:{wood:50,stone:20},barnLevelReq:2},{id:"fortifications",name:"Fortifications",description:"Improve defense; unlock Watchtowers.",cost:{wood:90,stone:70},barnLevelReq:3},{id:"baking",name:"Baking",description:"Unlock Bakeries and better food variety.",cost:{wood:70,stone:30},barnLevelReq:2}],nd={fishery:"fishing",watchtower:"fortifications",bakery:"baking",workshop:"toolmaking",infirmary:"herbalism"},Zr=()=>Math.random().toString(36).substr(2,9),Hn={id:"barn-main",type:"barn",position:[0,0,0],level:1,lastCollected:Date.now()},rd={mine:2,warehouse:2,bakery:2,watchtower:2,fishery:3},bt=Rh()(td((n,e)=>({resources:{wood:100,food:50,stone:0,iron:0},settlers:[{id:"settler-1",name:"John",position:[0,0,0],targetPosition:null,state:"idle",actionTimer:0,hunger:100,energy:100},{id:"settler-2",name:"Jane",position:[2,0,2],targetPosition:null,state:"idle",actionTimer:0,hunger:100,energy:100}],happiness:100,buildings:[Hn],nature:(()=>{const t=[];for(let r=0;r<40;r++){const s=Math.random()*Math.PI*2,o=15+Math.random()*30,a=Math.cos(s)*o,c=Math.sin(s)*o,u=Math.random()>.3?"tree":"rock",f=.8+Math.random()*.5;t.push({id:`nature-${r}`,position:[a,0,c],type:u,scale:f})}return t})(),logs:[],weather:"sunny",season:"spring",selectedBuilding:null,selectedBuildingId:null,isBuilding:!1,tickRate:1e3,day:1,objectives:[{id:"obj-wood",title:"Gatherer",description:"Stockpile 150 wood to prove the village can build.",goal:{type:"resource",key:"wood",amount:150},reward:{food:40},complete:!1,claimed:!1},{id:"obj-farm",title:"First Harvest",description:"Build a farm to secure food.",goal:{type:"building",key:"farm",amount:1},reward:{wood:60,food:30},complete:!1,claimed:!1},{id:"obj-pop",title:"New Neighbors",description:"Reach 6 settlers in your homestead.",goal:{type:"population",amount:6},reward:{stone:50,food:50},complete:!1,claimed:!1},{id:"obj-happy",title:"Joyous Village",description:"Raise happiness to 85% or higher.",goal:{type:"happiness",amount:85},reward:{wood:80,iron:20},complete:!1,claimed:!1}],unlockedResearch:[],currentResearch:null,researchProgress:0,addLog:(t,r="info")=>{n(s=>({logs:[{id:Zr(),message:t,timestamp:Date.now(),type:r},...s.logs].slice(0,20)}))},addResource:(t,r)=>n(s=>{const c=100+s.buildings.reduce((m,I)=>m+(Ot[I.type].storage||0)*I.level,0),u=s.resources[t],f=Math.min(u+r,c);return{resources:{...s.resources,[t]:f}}}),removeResource:(t,r)=>e().resources[t]>=r?(n(o=>({resources:{...o.resources,[t]:o.resources[t]-r}})),!0):!1,removeNature:t=>{const r=e(),s=r.nature.find(o=>o.id===t);s&&(r.addLog(`Cleared ${s.type}`,"info"),n(o=>({nature:o.nature.filter(a=>a.id!==t)})))},addBuilding:(t,r)=>{const s=e();if(t==="barn"){s.addLog("The Barn already anchors your homestead and cannot be placed again.","warning");return}const o=s.buildings.find(D=>D.type==="barn");if(!o){n(D=>({buildings:[Hn,...D.buildings]}));return}const a=rd[t];if(a&&o.level<a){s.addLog(`Upgrade the Barn to level ${a} to unlock ${t}.`,"warning");return}const c=nd[t];if(c&&!s.unlockedResearch.includes(c)){s.addLog(`Research "${c}" to unlock ${t}.`,"warning");return}const u=s.buildings.some(D=>D.position[0]===r[0]&&D.position[2]===r[2]),f=r[0]-.8,m=r[0]+.8,I=r[2]-.8,R=r[2]+.8,x=s.nature.some(D=>D.position[0]>f&&D.position[0]<m&&D.position[2]>I&&D.position[2]<R);if(u||x){s.addLog("Cannot build here!","warning");return}const k=an[t],C=Ot[t];let T=!0;if(Object.keys(k).forEach(D=>{(s.resources[D]||0)<(k[D]||0)&&(T=!1)}),!T){s.addLog("Not enough resources!","warning");return}if(C.workers){const D=s.buildings.reduce((V,F)=>V+(Ot[F.type].workers||0),0);if(s.settlers.length-D<C.workers){T=!1,s.addLog("Not enough workers!","warning");return}}T&&(Object.keys(k).forEach(D=>{s.removeResource(D,k[D]||0)}),n(D=>({buildings:[...D.buildings,{id:Zr(),type:t,position:r,level:1,lastCollected:Date.now()}],isBuilding:!1,selectedBuilding:null})),s.addLog(`Built ${t}!`,"success"))},upgradeBuilding:t=>{const r=e(),s=r.buildings.find(u=>u.id===t);if(!s)return;const o=an[s.type],a=s.level+1;let c=!0;Object.keys(o).forEach(u=>{const f=(o[u]||0)*a;(r.resources[u]||0)<f&&(c=!1)}),c?(Object.keys(o).forEach(u=>{const f=(o[u]||0)*a;r.removeResource(u,f)}),n(u=>({buildings:u.buildings.map(f=>f.id===t?{...f,level:f.level+1}:f)})),r.addLog(`Upgraded ${s.type} to level ${s.level+1}`,"success")):r.addLog("Not enough resources to upgrade!","warning")},demolishBuilding:t=>{const r=e(),s=r.buildings.find(o=>o.id===t);if((s==null?void 0:s.type)==="barn"){r.addLog("The Barn is the heart of the homestead and cannot be demolished.","warning");return}if(s){r.addLog(`Demolished ${s.type}`,"danger");const o=r.settlers.map(a=>a.job===t?{...a,job:void 0,state:"idle"}:a.home===t?{...a,home:void 0}:a);n(a=>({buildings:a.buildings.filter(c=>c.id!==t),settlers:o,selectedBuildingId:null}))}},assignWorker:t=>{const r=e(),s=r.buildings.find(u=>u.id===t);if(!s)return;const o=Ot[s.type];if(!o.workers){r.addLog(`${s.type} does not require workers.`,"warning");return}if(r.settlers.filter(u=>u.job===t).length>=(o.workers||0)){r.addLog(`${s.type} is fully staffed.`,"warning");return}const c=r.settlers.find(u=>!u.job);c?(n(u=>({settlers:u.settlers.map(f=>f.id===c.id?{...f,job:t,state:"walking",targetPosition:s.position}:f)})),r.addLog(`${c.name} assigned to ${s.type}.`,"success")):r.addLog("No unemployed settlers available.","warning")},unassignWorker:t=>{const r=e(),s=r.settlers.find(o=>o.job===t);s&&(n(o=>({settlers:o.settlers.map(a=>a.id===s.id?{...a,job:void 0,state:"idle"}:a)})),r.addLog(`${s.name} unassigned from job.`,"info"))},setSelectedBuilding:t=>n({selectedBuilding:t,isBuilding:!!t,selectedBuildingId:null}),selectBuildingId:t=>n({selectedBuildingId:t,selectedBuilding:null,isBuilding:!1}),setTickRate:t=>{const r=Math.min(2e3,Math.max(300,t));n({tickRate:r})},celebrateFestival:()=>{const t=e(),r=30,s=40;if(t.resources.wood<r||t.resources.food<s){t.addLog("Not enough supplies for a festival!","warning");return}n(o=>({resources:{...o.resources,wood:o.resources.wood-r,food:o.resources.food-s},happiness:Math.min(100,o.happiness+15)})),t.addLog("You held a lively festival! Happiness soared.","success")},sendExpedition:()=>{const t=e(),r=25,s=15;if(t.resources.food<r||t.resources.wood<s){t.addLog("Not enough supplies to send an expedition.","warning");return}n(c=>({resources:{...c.resources,food:c.resources.food-r,wood:c.resources.wood-s}}));const o=t.buildings.filter(c=>c.type==="watchtower").length,a=Math.random()+o*.05;if(a>.65){const c=40+Math.round(Math.random()*40),u=30+Math.round(Math.random()*30),f=Math.round(Math.random()*30);n(m=>({resources:{...m.resources,wood:m.resources.wood+c,food:m.resources.food+u,stone:m.resources.stone+f},settlers:Math.random()>.6?[...m.settlers,{id:Zr(),name:`Scout ${m.settlers.length+1}`,position:[0,0,0],targetPosition:null,state:"idle",actionTimer:0,hunger:100,energy:100}]:m.settlers})),t.addLog(`Expedition returned with riches! +${c} wood, +${u} food${f?`, +${f} stone`:""}`,"success")}else if(a>.35){const c=5+Math.round(Math.random()*10);n(u=>({resources:{...u.resources,iron:u.resources.iron+c}})),t.addLog(`Expedition found rare iron veins! +${c} iron`,"info")}else{const c=Math.max(5,Math.round(t.resources.wood*.05));n(u=>({resources:{...u.resources,wood:Math.max(0,u.resources.wood-c)},happiness:Math.max(0,u.happiness-5)})),t.addLog("Expedition ran into trouble and limped home. Lost some supplies.","danger")}},claimObjective:t=>{const r=e(),s=r.objectives.find(o=>o.id===t);!s||!s.complete||s.claimed||(n(o=>({resources:{...o.resources,wood:o.resources.wood+(s.reward.wood||0),food:o.resources.food+(s.reward.food||0),stone:o.resources.stone+(s.reward.stone||0),iron:o.resources.iron+(s.reward.iron||0)},objectives:o.objectives.map(a=>a.id===t?{...a,claimed:!0}:a)})),r.addLog(`Claimed reward: ${s.title}`,"success"))},startResearch:t=>{const r=e();if(r.unlockedResearch.includes(t)){r.addLog("Research already unlocked.","warning");return}if(r.currentResearch===t){r.addLog("Research already in progress.","info");return}const s=gi.find(c=>c.id===t);if(!s)return;const o=r.buildings.find(c=>c.type==="barn");if(!o||o.level<s.barnLevelReq){r.addLog(`Requires Barn level ${s.barnLevelReq} to research ${s.name}.`,"warning");return}if(!Object.keys(s.cost).every(c=>(r.resources[c]||0)>=(s.cost[c]||0))){r.addLog("Not enough resources for research.","warning");return}n(c=>({resources:{...c.resources,...Object.keys(s.cost).reduce((u,f)=>(u[f]=c.resources[f]-(s.cost[f]||0),u),{})},currentResearch:t,researchProgress:0})),r.addLog(`Started research: ${s.name}`,"success")},cancelResearch:()=>{const t=e();t.currentResearch&&(n({currentResearch:null,researchProgress:0}),t.addLog("Research cancelled.","info"))},loadSaveData:t=>{const r=e(),s=t.buildings||r.buildings,o=s.some(a=>a.type==="barn")?s:[Hn,...s];n({resources:t.resources||r.resources,settlers:t.settlers||r.settlers,happiness:t.happiness??r.happiness,buildings:o,nature:t.nature||r.nature,logs:t.logs||r.logs,weather:t.weather||r.weather,season:t.season||r.season,day:t.day??r.day,objectives:t.objectives||r.objectives,unlockedResearch:t.unlockedResearch||r.unlockedResearch,currentResearch:t.currentResearch??r.currentResearch,researchProgress:t.researchProgress??r.researchProgress,selectedBuilding:null,selectedBuildingId:null,isBuilding:!1}),r.addLog("Loaded save data.","info")},tick:()=>{n(t=>{let r={...t.resources},s=t.happiness,o=t.logs,a=t.weather,c=t.season,u=[...t.settlers];const f=100,m=t.buildings.reduce((T,D)=>T+(Ot[D.type].storage||0)*D.level,0),I=f+m;t.buildings.forEach(T=>{const D=Uc[T.type];Object.keys(D).forEach(V=>{const F=(D[V]||0)*T.level*.1;r[V]=Math.min(I,r[V]+F)})});const R=t.settlers.length*.04;if(r.food=Math.max(0,r.food-R),r.food<=.1?s=Math.max(0,s-.5):s=Math.min(100,s+.02),Math.random()<.01){const T=["sunny","rain","snow"];a=T[Math.floor(Math.random()*T.length)]}const x=t.day+.005,k=x%4;if(c=k<1?"spring":k<2?"summer":k<3?"autumn":"winter",u=u.map(T=>{const D=x%1,V=D>.75||D<.2,F=D>.25&&D<.7;if(T.job&&F){const W=t.buildings.find(v=>v.id===T.job);if(W)return Math.hypot(T.position[0]-W.position[0],T.position[2]-W.position[2])>2?{...T,state:"walking",targetPosition:W.position}:{...T,state:"working",targetPosition:null}}if(V){const W=[0,0,0];return Math.hypot(T.position[0]-W[0],T.position[2]-W[2])>2?{...T,state:"walking",targetPosition:W}:{...T,state:"resting",targetPosition:null}}if(T.state==="idle"||T.state==="working"&&!F||T.state==="resting"&&!V){if(Math.random()<.02){const W=Math.random()*Math.PI*2,v=3+Math.random()*8,g=Math.cos(W)*v,_=Math.sin(W)*v;return{...T,state:"walking",targetPosition:[g,0,_]}}return{...T,state:"idle"}}if(T.state==="walking"&&T.targetPosition){const W=T.targetPosition[0]-T.position[0],v=T.targetPosition[2]-T.position[2],g=Math.hypot(W,v),_=.08;return g<_?{...T,position:T.targetPosition,targetPosition:null,state:"idle"}:{...T,position:[T.position[0]+W/g*_,0,T.position[2]+v/g*_]}}let U=Math.max(0,Math.min(100,T.hunger-.1)),J=T.energy;return T.state==="working"||T.state==="walking"?J=Math.max(0,J-.2):T.state==="resting"?(J=Math.min(100,J+.6),U=Math.max(0,U-.05)):J=Math.min(100,J+.1),U<20&&(s=Math.max(0,s-.2)),J<20&&(s=Math.max(0,s-.1)),U>70&&J>70&&(s=Math.min(100,s+.05)),{...T,hunger:U,energy:J}}),t.currentResearch){const T=gi.find(F=>F.id===t.currentResearch),V=t.researchProgress+.01;return V>=1&&T?(o=[{id:Zr(),message:`Research completed: ${T.name}`,timestamp:Date.now(),type:"success"},...o].slice(0,20),{resources:r,settlers:u,happiness:s,weather:a,season:c,day:x,logs:o,tickRate:t.tickRate,buildings:t.buildings,nature:t.nature,selectedBuilding:t.selectedBuilding,selectedBuildingId:t.selectedBuildingId,isBuilding:t.isBuilding,objectives:t.objectives,unlockedResearch:[...new Set([...t.unlockedResearch,t.currentResearch])],currentResearch:null,researchProgress:0}):{resources:r,settlers:u,happiness:s,weather:a,season:c,day:x,logs:o,tickRate:t.tickRate,buildings:t.buildings,nature:t.nature,selectedBuilding:t.selectedBuilding,selectedBuildingId:t.selectedBuildingId,isBuilding:t.isBuilding,objectives:t.objectives,unlockedResearch:t.unlockedResearch,currentResearch:t.currentResearch,researchProgress:V}}const C=t.objectives.map(T=>{if(T.complete)return T;let D=!1;return T.goal.type==="resource"&&T.goal.key?D=r[T.goal.key]>=T.goal.amount:T.goal.type==="building"&&T.goal.key?D=t.buildings.filter(V=>V.type===T.goal.key).length>=T.goal.amount:T.goal.type==="population"?D=u.length>=T.goal.amount:T.goal.type==="happiness"&&(D=s>=T.goal.amount),D?{...T,complete:!0}:T});return{resources:r,settlers:u,happiness:s,weather:a,season:c,day:x,logs:o,tickRate:t.tickRate,buildings:t.buildings,nature:t.nature,selectedBuilding:t.selectedBuilding,selectedBuildingId:t.selectedBuildingId,isBuilding:t.isBuilding,objectives:C,unlockedResearch:t.unlockedResearch,currentResearch:t.currentResearch,researchProgress:t.researchProgress}})},reset:()=>{const t=[];for(let r=0;r<40;r++){const s=Math.random()*Math.PI*2,o=15+Math.random()*30,a=Math.cos(s)*o,c=Math.sin(s)*o,u=Math.random()>.3?"tree":"rock",f=.8+Math.random()*.5;t.push({id:`nature-${r}`,position:[a,0,c],type:u,scale:f})}n({resources:{wood:100,food:50,stone:0,iron:0},settlers:[{id:"settler-1",name:"John",position:[0,0,0],targetPosition:null,state:"idle",actionTimer:0,hunger:100,energy:100},{id:"settler-2",name:"Jane",position:[2,0,2],targetPosition:null,state:"idle",actionTimer:0,hunger:100,energy:100}],happiness:100,buildings:[Hn],nature:t,logs:[],weather:"sunny",season:"spring",selectedBuilding:null,selectedBuildingId:null,isBuilding:!1,day:1,tickRate:1e3,objectives:e().objectives.map(r=>({...r,complete:!1,claimed:!1})),unlockedResearch:[],currentResearch:null,researchProgress:0})}}),{name:"homestead-storage",version:2,migrate:(n,e)=>{const t=n;return t.buildings||(t.buildings=[]),t.buildings.some(r=>r.type==="barn")||(t.buildings=[Hn,...t.buildings]),t},partialize:n=>({resources:n.resources,settlers:n.settlers,happiness:n.happiness,buildings:n.buildings,nature:n.nature,logs:n.logs,weather:n.weather,season:n.season,day:n.day,tickRate:n.tickRate,objectives:n.objectives,unlockedResearch:n.unlockedResearch,currentResearch:n.currentResearch,researchProgress:n.researchProgress})}));var Sa={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},sd=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[t++];e[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[t++],a=n[t++],c=n[t++],u=((s&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const o=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return e.join("")},$c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,c=a?n[s+1]:0,u=s+2<n.length,f=u?n[s+2]:0,m=o>>2,I=(o&3)<<4|c>>4;let R=(c&15)<<2|f>>6,x=f&63;u||(x=64,a||(R=64)),r.push(t[m],t[I],t[R],t[x])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Bc(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):sd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const f=s<n.length?t[n.charAt(s)]:64;++s;const I=s<n.length?t[n.charAt(s)]:64;if(++s,o==null||c==null||f==null||I==null)throw new id;const R=o<<2|c>>4;if(r.push(R),f!==64){const x=c<<4&240|f>>2;if(r.push(x),I!==64){const k=f<<6&192|I;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class id extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const od=function(n){const e=Bc(n);return $c.encodeByteArray(e,!0)},fs=function(n){return od(n).replace(/\./g,"")},qc=function(n){try{return $c.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd=()=>ad().__FIREBASE_DEFAULTS__,ld=()=>{if(typeof process>"u"||typeof Sa>"u")return;const n=Sa.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ud=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&qc(n[1]);return e&&JSON.parse(e)},Ps=()=>{try{return cd()||ld()||ud()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Gc=n=>{var e,t;return(t=(e=Ps())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},hd=n=>{const e=Gc(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},zc=()=>{var n;return(n=Ps())===null||n===void 0?void 0:n.config},Hc=n=>{var e;return(e=Ps())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[fs(JSON.stringify(t)),fs(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ne())}function md(){var n;const e=(n=Ps())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function _d(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function yd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vd(){const n=Ne();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function wd(){return!md()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ed(){try{return typeof indexedDB=="object"}catch{return!1}}function Id(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var o;e(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td="FirebaseError";class ut extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Td,Object.setPrototypeOf(this,ut.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pr.prototype.create)}}class pr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?bd(o,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new ut(s,c,r)}}function bd(n,e){return n.replace(Ad,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Ad=/\{\$([^}]+)}/g;function Rd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ps(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const o=n[s],a=e[s];if(xa(o)&&xa(a)){if(!ps(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function xa(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Sd(n,e){const t=new xd(n,e);return t.subscribe.bind(t)}class xd{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Pd(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=ii),s.error===void 0&&(s.error=ii),s.complete===void 0&&(s.complete=ii);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Pd(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ii(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(n){return n&&n._delegate?n._delegate:n}class Bt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new dd;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Nd(e))try{this.getOrInitializeService({instanceIdentifier:Mt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(e=Mt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mt){return this.instances.has(e)}getOptions(e=Mt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&e(a,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:kd(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mt){return this.component?this.component.multipleInstances?e:Mt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kd(n){return n===Mt?void 0:n}function Nd(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Cd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Q||(Q={}));const Vd={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},Md=Q.INFO,Od={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},Ld=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Od[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fi{constructor(e){this.name=e,this._logLevel=Md,this._logHandler=Ld,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Vd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const jd=(n,e)=>e.some(t=>n instanceof t);let Pa,Ca;function Fd(){return Pa||(Pa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ud(){return Ca||(Ca=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wc=new WeakMap,_i=new WeakMap,Kc=new WeakMap,oi=new WeakMap,Ui=new WeakMap;function Bd(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(wt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Wc.set(t,n)}).catch(()=>{}),Ui.set(e,n),e}function $d(n){if(_i.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});_i.set(n,e)}let yi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return _i.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Kc.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return wt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function qd(n){yi=n(yi)}function Gd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(ai(this),e,...t);return Kc.set(r,e.sort?e.sort():[e]),wt(r)}:Ud().includes(n)?function(...e){return n.apply(ai(this),e),wt(Wc.get(this))}:function(...e){return wt(n.apply(ai(this),e))}}function zd(n){return typeof n=="function"?Gd(n):(n instanceof IDBTransaction&&$d(n),jd(n,Fd())?new Proxy(n,yi):n)}function wt(n){if(n instanceof IDBRequest)return Bd(n);if(oi.has(n))return oi.get(n);const e=zd(n);return e!==n&&(oi.set(n,e),Ui.set(e,n)),e}const ai=n=>Ui.get(n);function Hd(n,e,{blocked:t,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,e),c=wt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(wt(a.result),u.oldVersion,u.newVersion,wt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{o&&u.addEventListener("close",()=>o()),s&&u.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const Wd=["get","getKey","getAll","getAllKeys","count"],Kd=["put","add","delete","clear"],ci=new Map;function ka(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ci.get(e))return ci.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Kd.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Wd.includes(t)))return;const o=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let f=u.store;return r&&(f=f.index(c.shift())),(await Promise.all([f[t](...c),s&&u.done]))[0]};return ci.set(e,o),o}qd(n=>({...n,get:(e,t,r)=>ka(e,t)||n.get(e,t,r),has:(e,t)=>!!ka(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Jd(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Jd(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vi="@firebase/app",Na="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot=new Fi("@firebase/app"),Xd="@firebase/app-compat",Yd="@firebase/analytics-compat",Zd="@firebase/analytics",ef="@firebase/app-check-compat",tf="@firebase/app-check",nf="@firebase/auth",rf="@firebase/auth-compat",sf="@firebase/database",of="@firebase/data-connect",af="@firebase/database-compat",cf="@firebase/functions",lf="@firebase/functions-compat",uf="@firebase/installations",hf="@firebase/installations-compat",df="@firebase/messaging",ff="@firebase/messaging-compat",pf="@firebase/performance",mf="@firebase/performance-compat",gf="@firebase/remote-config",_f="@firebase/remote-config-compat",yf="@firebase/storage",vf="@firebase/storage-compat",wf="@firebase/firestore",Ef="@firebase/vertexai-preview",If="@firebase/firestore-compat",Tf="firebase",bf="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi="[DEFAULT]",Af={[vi]:"fire-core",[Xd]:"fire-core-compat",[Zd]:"fire-analytics",[Yd]:"fire-analytics-compat",[tf]:"fire-app-check",[ef]:"fire-app-check-compat",[nf]:"fire-auth",[rf]:"fire-auth-compat",[sf]:"fire-rtdb",[of]:"fire-data-connect",[af]:"fire-rtdb-compat",[cf]:"fire-fn",[lf]:"fire-fn-compat",[uf]:"fire-iid",[hf]:"fire-iid-compat",[df]:"fire-fcm",[ff]:"fire-fcm-compat",[pf]:"fire-perf",[mf]:"fire-perf-compat",[gf]:"fire-rc",[_f]:"fire-rc-compat",[yf]:"fire-gcs",[vf]:"fire-gcs-compat",[wf]:"fire-fst",[If]:"fire-fst-compat",[Ef]:"fire-vertex","fire-js":"fire-js",[Tf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=new Map,Rf=new Map,Ei=new Map;function Da(n,e){try{n.container.addComponent(e)}catch(t){ot.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function fn(n){const e=n.name;if(Ei.has(e))return ot.debug(`There were multiple attempts to register component ${e}.`),!1;Ei.set(e,n);for(const t of ms.values())Da(t,n);for(const t of Rf.values())Da(t,n);return!0}function Bi(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function tt(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Et=new pr("app","Firebase",Sf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Bt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Et.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=bf;function Qc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:wi,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Et.create("bad-app-name",{appName:String(s)});if(t||(t=zc()),!t)throw Et.create("no-options");const o=ms.get(s);if(o){if(ps(t,o.options)&&ps(r,o.config))return o;throw Et.create("duplicate-app",{appName:s})}const a=new Dd(s);for(const u of Ei.values())a.addComponent(u);const c=new xf(t,r,a);return ms.set(s,c),c}function Jc(n=wi){const e=ms.get(n);if(!e&&n===wi&&zc())return Qc();if(!e)throw Et.create("no-app",{appName:n});return e}function It(n,e,t){var r;let s=(r=Af[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const c=[`Unable to register library "${s}" with version "${e}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ot.warn(c.join(" "));return}fn(new Bt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf="firebase-heartbeat-database",Cf=1,rr="firebase-heartbeat-store";let li=null;function Xc(){return li||(li=Hd(Pf,Cf,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(rr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Et.create("idb-open",{originalErrorMessage:n.message})})),li}async function kf(n){try{const t=(await Xc()).transaction(rr),r=await t.objectStore(rr).get(Yc(n));return await t.done,r}catch(e){if(e instanceof ut)ot.warn(e.message);else{const t=Et.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ot.warn(t.message)}}}async function Va(n,e){try{const r=(await Xc()).transaction(rr,"readwrite");await r.objectStore(rr).put(e,Yc(n)),await r.done}catch(t){if(t instanceof ut)ot.warn(t.message);else{const r=Et.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ot.warn(r.message)}}}function Yc(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf=1024,Df=30*24*60*60*1e3;class Vf{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Of(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ma();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=Df}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ot.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ma(),{heartbeatsToSend:r,unsentEntries:s}=Mf(this._heartbeatsCache.heartbeats),o=fs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return ot.warn(t),""}}}function Ma(){return new Date().toISOString().substring(0,10)}function Mf(n,e=Nf){const t=[];let r=n.slice();for(const s of n){const o=t.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Oa(t)>e){o.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Oa(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Of{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ed()?Id().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await kf(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Va(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Va(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Oa(n){return fs(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lf(n){fn(new Bt("platform-logger",e=>new Qd(e),"PRIVATE")),fn(new Bt("heartbeat",e=>new Vf(e),"PRIVATE")),It(vi,Na,n),It(vi,Na,"esm2017"),It("fire-js","")}Lf("");var jf="firebase",Ff="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It(jf,Ff,"app");function $i(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Zc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Uf=Zc,el=new pr("auth","Firebase",Zc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs=new Fi("@firebase/auth");function Bf(n,...e){gs.logLevel<=Q.WARN&&gs.warn(`Auth (${In}): ${n}`,...e)}function is(n,...e){gs.logLevel<=Q.ERROR&&gs.error(`Auth (${In}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(n,...e){throw Gi(n,...e)}function Be(n,...e){return Gi(n,...e)}function qi(n,e,t){const r=Object.assign(Object.assign({},Uf()),{[e]:t});return new pr("auth","Firebase",r).create(e,{appName:n.name})}function Ft(n){return qi(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $f(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&He(n,"argument-error"),qi(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Gi(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return el.create(n,...e)}function q(n,e,...t){if(!n)throw Gi(e,...t)}function nt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw is(e),new Error(e)}function at(n,e){n||nt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function qf(){return La()==="http:"||La()==="https:"}function La(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qf()||_d()||"connection"in navigator)?navigator.onLine:!0}function zf(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,t){this.shortDelay=e,this.longDelay=t,at(t>e,"Short delay should be less than long delay!"),this.isMobile=pd()||yd()}get(){return Gf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(n,e){at(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf=new gr(3e4,6e4);function Hi(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Tn(n,e,t,r,s={}){return nl(n,s,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const c=mr(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const f=Object.assign({method:e,headers:u},o);return gd()||(f.referrerPolicy="no-referrer"),tl.fetch()(rl(n,n.config.apiHost,t,c),f)})}async function nl(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Hf),e);try{const s=new Qf(n),o=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw es(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const c=o.ok?a.errorMessage:a.error.message,[u,f]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw es(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw es(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw es(n,"user-disabled",a);const m=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw qi(n,m,f);He(n,m)}}catch(s){if(s instanceof ut)throw s;He(n,"network-request-failed",{message:String(s)})}}async function Kf(n,e,t,r,s={}){const o=await Tn(n,e,t,r,s);return"mfaPendingCredential"in o&&He(n,"multi-factor-auth-required",{_serverResponse:o}),o}function rl(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?zi(n.config,s):`${n.config.apiScheme}://${s}`}class Qf{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Be(this.auth,"network-request-failed")),Wf.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function es(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Be(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jf(n,e){return Tn(n,"POST","/v1/accounts:delete",e)}async function sl(n,e){return Tn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Xf(n,e=!1){const t=Le(n),r=await t.getIdToken(e),s=Wi(r);q(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:s,token:r,authTime:Xn(ui(s.auth_time)),issuedAtTime:Xn(ui(s.iat)),expirationTime:Xn(ui(s.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function ui(n){return Number(n)*1e3}function Wi(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return is("JWT malformed, contained fewer than 3 sections"),null;try{const s=qc(t);return s?JSON.parse(s):(is("Failed to decode base64 JWT payload"),null)}catch(s){return is("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ja(n){const e=Wi(n);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ut&&Yf(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Yf({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xn(this.lastLoginAt),this.creationTime=Xn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _s(n){var e;const t=n.auth,r=await n.getIdToken(),s=await sr(n,sl(t,{idToken:r}));q(s==null?void 0:s.users.length,t,"internal-error");const o=s.users[0];n._notifyReloadListener(o);const a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?il(o.providerUserInfo):[],c=tp(n.providerData,a),u=n.isAnonymous,f=!(n.email&&o.passwordHash)&&!(c!=null&&c.length),m=u?f:!1,I={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new Ti(o.createdAt,o.lastLoginAt),isAnonymous:m};Object.assign(n,I)}async function ep(n){const e=Le(n);await _s(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tp(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function il(n){return n.map(e=>{var{providerId:t}=e,r=$i(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function np(n,e){const t=await nl(n,{},async()=>{const r=mr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:o}=n.config,a=rl(n,s,"/v1/token",`key=${o}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",tl.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function rp(n,e){return Tn(n,"POST","/v2/accounts:revokeToken",Hi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ja(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){q(e.length!==0,"internal-error");const t=ja(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:o}=await np(e,t);this.updateTokensAndExpiration(r,s,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:o}=t,a=new cn;return r&&(q(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(q(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),o&&(q(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new cn,this.toJSON())}_performRefresh(){return nt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(n,e){q(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class rt{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,o=$i(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Zf(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Ti(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await sr(this,this.stsTokenManager.getToken(this.auth,e));return q(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Xf(this,e)}reload(){return ep(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new rt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await _s(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tt(this.auth.app))return Promise.reject(Ft(this.auth));const e=await this.getIdToken();return await sr(this,Jf(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,o,a,c,u,f,m;const I=(r=t.displayName)!==null&&r!==void 0?r:void 0,R=(s=t.email)!==null&&s!==void 0?s:void 0,x=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,k=(a=t.photoURL)!==null&&a!==void 0?a:void 0,C=(c=t.tenantId)!==null&&c!==void 0?c:void 0,T=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,D=(f=t.createdAt)!==null&&f!==void 0?f:void 0,V=(m=t.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:F,emailVerified:U,isAnonymous:J,providerData:W,stsTokenManager:v}=t;q(F&&v,e,"internal-error");const g=cn.fromJSON(this.name,v);q(typeof F=="string",e,"internal-error"),mt(I,e.name),mt(R,e.name),q(typeof U=="boolean",e,"internal-error"),q(typeof J=="boolean",e,"internal-error"),mt(x,e.name),mt(k,e.name),mt(C,e.name),mt(T,e.name),mt(D,e.name),mt(V,e.name);const _=new rt({uid:F,auth:e,email:R,emailVerified:U,displayName:I,isAnonymous:J,photoURL:k,phoneNumber:x,tenantId:C,stsTokenManager:g,createdAt:D,lastLoginAt:V});return W&&Array.isArray(W)&&(_.providerData=W.map(w=>Object.assign({},w))),T&&(_._redirectEventId=T),_}static async _fromIdTokenResponse(e,t,r=!1){const s=new cn;s.updateFromServerResponse(t);const o=new rt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await _s(o),o}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];q(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?il(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(o!=null&&o.length),c=new cn;c.updateFromIdToken(r);const u=new rt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Ti(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(o!=null&&o.length)};return Object.assign(u,f),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa=new Map;function st(n){at(n instanceof Function,"Expected a class definition");let e=Fa.get(n);return e?(at(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Fa.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ol.type="NONE";const Ua=ol;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(n,e,t){return`firebase:${n}:${e}:${t}`}class ln{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:o}=this.auth;this.fullUserKey=os(this.userKey,s.apiKey,o),this.fullPersistenceKey=os("persistence",s.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new ln(st(Ua),e,r);const s=(await Promise.all(t.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let o=s[0]||st(Ua);const a=os(r,e.config.apiKey,e.name);let c=null;for(const f of t)try{const m=await f._get(a);if(m){const I=rt._fromJSON(e,m);f!==o&&(c=I),o=f;break}}catch{}const u=s.filter(f=>f._shouldAllowMigration);return!o._shouldAllowMigration||!u.length?new ln(o,e,r):(o=u[0],c&&await o._set(a,c.toJSON()),await Promise.all(t.map(async f=>{if(f!==o)try{await f._remove(a)}catch{}})),new ln(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ul(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(al(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(dl(e))return"Blackberry";if(fl(e))return"Webos";if(cl(e))return"Safari";if((e.includes("chrome/")||ll(e))&&!e.includes("edge/"))return"Chrome";if(hl(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function al(n=Ne()){return/firefox\//i.test(n)}function cl(n=Ne()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ll(n=Ne()){return/crios\//i.test(n)}function ul(n=Ne()){return/iemobile/i.test(n)}function hl(n=Ne()){return/android/i.test(n)}function dl(n=Ne()){return/blackberry/i.test(n)}function fl(n=Ne()){return/webos/i.test(n)}function Ki(n=Ne()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function sp(n=Ne()){var e;return Ki(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ip(){return vd()&&document.documentMode===10}function pl(n=Ne()){return Ki(n)||hl(n)||fl(n)||dl(n)||/windows phone/i.test(n)||ul(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(n,e=[]){let t;switch(n){case"Browser":t=Ba(Ne());break;case"Worker":t=`${Ba(Ne())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${In}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((a,c)=>{try{const u=e(o);a(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ap(n,e={}){return Tn(n,"GET","/v2/passwordPolicy",Hi(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp=6;class lp{constructor(e){var t,r,s,o;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:cp,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,o,a,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsUppercaseLetter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $a(this),this.idTokenSubscription=new $a(this),this.beforeStateQueue=new op(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=el,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=st(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ln.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await sl(this,{idToken:e}),r=await rt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(tt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(s=u.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await _s(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zf()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(tt(this.app))return Promise.reject(Ft(this));const t=e?Le(e):null;return t&&q(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return tt(this.app)?Promise.reject(Ft(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return tt(this.app)?Promise.reject(Ft(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(st(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ap(this),t=new lp(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new pr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await rp(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&st(e)||this._popupRedirectResolver;q(t,this,"argument-error"),this.redirectPersistenceManager=await ln.create(this,[st(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(c,this,"internal-error"),c.then(()=>{a||o(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ml(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Bf(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Cs(n){return Le(n)}class $a{constructor(e){this.auth=e,this.observer=null,this.addObserver=Sd(t=>this.observer=t)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function hp(n){Qi=n}function dp(n){return Qi.loadJS(n)}function fp(){return Qi.gapiScript}function pp(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mp(n,e){const t=Bi(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),o=t.getOptions();if(ps(o,e??{}))return s;He(s,"already-initialized")}return t.initialize({options:e})}function gp(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(st);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function _p(n,e,t){const r=Cs(n);q(r._canInitEmulator,r,"emulator-config-failed"),q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,o=gl(e),{host:a,port:c}=yp(e),u=c===null?"":`:${c}`;r.config.emulator={url:`${o}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})}),vp()}function gl(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function yp(n){const e=gl(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const o=s[1];return{host:o,port:qa(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:qa(a)}}}function qa(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function vp(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return nt("not implemented")}_getIdTokenResponse(e){return nt("not implemented")}_linkToIdToken(e,t){return nt("not implemented")}_getReauthenticationResolver(e){return nt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function un(n,e){return Kf(n,"POST","/v1/accounts:signInWithIdp",Hi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp="http://localhost";class $t extends _l{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new $t(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):He("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,o=$i(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new $t(r,s);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return un(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,un(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,un(e,t)}buildRequest(){const e={requestUri:wp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=mr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends Ji{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt extends _r{constructor(){super("facebook.com")}static credential(e){return $t._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gt.credential(e.oauthAccessToken)}catch{return null}}}gt.FACEBOOK_SIGN_IN_METHOD="facebook.com";gt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et extends _r{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return $t._fromParams({providerId:et.PROVIDER_ID,signInMethod:et.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return et.credentialFromTaggedObject(e)}static credentialFromError(e){return et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return et.credential(t,r)}catch{return null}}}et.GOOGLE_SIGN_IN_METHOD="google.com";et.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends _r{constructor(){super("github.com")}static credential(e){return $t._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _t.credential(e.oauthAccessToken)}catch{return null}}}_t.GITHUB_SIGN_IN_METHOD="github.com";_t.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends _r{constructor(){super("twitter.com")}static credential(e,t){return $t._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return yt.credential(t,r)}catch{return null}}}yt.TWITTER_SIGN_IN_METHOD="twitter.com";yt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const o=await rt._fromIdTokenResponse(e,r,s),a=Ga(r);return new pn({user:o,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Ga(r);return new pn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Ga(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys extends ut{constructor(e,t,r,s){var o;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ys.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new ys(e,t,r,s)}}function yl(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ys._fromErrorAndOperation(n,o,e,r):o})}async function Ep(n,e,t=!1){const r=await sr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return pn._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ip(n,e,t=!1){const{auth:r}=n;if(tt(r.app))return Promise.reject(Ft(r));const s="reauthenticate";try{const o=await sr(n,yl(r,s,e,n),t);q(o.idToken,r,"internal-error");const a=Wi(o.idToken);q(a,r,"internal-error");const{sub:c}=a;return q(n.uid===c,r,"user-mismatch"),pn._forOperation(n,s,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&He(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tp(n,e,t=!1){if(tt(n.app))return Promise.reject(Ft(n));const r="signIn",s=await yl(n,r,e),o=await pn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(o.user),o}function bp(n,e,t,r){return Le(n).onIdTokenChanged(e,t,r)}function Ap(n,e,t){return Le(n).beforeAuthStateChanged(e,t)}function Rp(n,e,t,r){return Le(n).onAuthStateChanged(e,t,r)}function Sp(n){return Le(n).signOut()}const vs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(vs,"1"),this.storage.removeItem(vs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp=1e3,Pp=10;class wl extends vl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=pl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);ip()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Pp):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},xp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}wl.type="LOCAL";const Cp=wl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El extends vl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}El.type="SESSION";const Il=El;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kp(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new ks(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:o}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async f=>f(t.origin,o)),u=await kp(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ks.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,a;return new Promise((c,u)=>{const f=Xi("",20);s.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(I){const R=I;if(R.data.eventId===f)switch(R.data.status){case"ack":clearTimeout(m),o=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),c(R.data.response);break;default:clearTimeout(m),clearTimeout(o),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(){return window}function Dp(n){qe().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(){return typeof qe().WorkerGlobalScope<"u"&&typeof qe().importScripts=="function"}async function Vp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Mp(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Op(){return Tl()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl="firebaseLocalStorageDb",Lp=1,ws="firebaseLocalStorage",Al="fbase_key";class yr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ns(n,e){return n.transaction([ws],e?"readwrite":"readonly").objectStore(ws)}function jp(){const n=indexedDB.deleteDatabase(bl);return new yr(n).toPromise()}function bi(){const n=indexedDB.open(bl,Lp);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ws,{keyPath:Al})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ws)?e(r):(r.close(),await jp(),e(await bi()))})})}async function za(n,e,t){const r=Ns(n,!0).put({[Al]:e,value:t});return new yr(r).toPromise()}async function Fp(n,e){const t=Ns(n,!1).get(e),r=await new yr(t).toPromise();return r===void 0?null:r.value}function Ha(n,e){const t=Ns(n,!0).delete(e);return new yr(t).toPromise()}const Up=800,Bp=3;class Rl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bi(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Bp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Tl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ks._getInstance(Op()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Vp(),!this.activeServiceWorker)return;this.sender=new Np(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Mp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bi();return await za(e,vs,"1"),await Ha(e,vs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>za(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Fp(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ha(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const o=Ns(s,!1).getAll();return new yr(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:o}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Up)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Rl.type="LOCAL";const $p=Rl;new gr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(n,e){return e?st(e):(q(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi extends _l{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return un(e,this._buildIdpRequest())}_linkToIdToken(e,t){return un(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return un(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function qp(n){return Tp(n.auth,new Yi(n),n.bypassAuthState)}function Gp(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),Ip(t,new Yi(n),n.bypassAuthState)}async function zp(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),Ep(t,new Yi(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,t,r,s,o=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:o,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qp;case"linkViaPopup":case"linkViaRedirect":return zp;case"reauthViaPopup":case"reauthViaRedirect":return Gp;default:He(this.auth,"internal-error")}}resolve(e){at(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){at(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp=new gr(2e3,1e4);async function Wp(n,e,t){if(tt(n.app))return Promise.reject(Be(n,"operation-not-supported-in-this-environment"));const r=Cs(n);$f(n,e,Ji);const s=Sl(r,t);return new Lt(r,"signInViaPopup",e,s).executeNotNull()}class Lt extends xl{constructor(e,t,r,s,o){super(e,t,s,o),this.provider=r,this.authWindow=null,this.pollId=null,Lt.currentPopupAction&&Lt.currentPopupAction.cancel(),Lt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){at(this.filter.length===1,"Popup operations only handle one event");const e=Xi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Be(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Be(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Lt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Be(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Hp.get())};e()}}Lt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp="pendingRedirect",as=new Map;class Qp extends xl{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=as.get(this.auth._key());if(!e){try{const r=await Jp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}as.set(this.auth._key(),e)}return this.bypassAuthState||as.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Jp(n,e){const t=Zp(e),r=Yp(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Xp(n,e){as.set(n._key(),e)}function Yp(n){return st(n._redirectPersistence)}function Zp(n){return os(Kp,n.config.apiKey,n.name)}async function em(n,e,t=!1){if(tt(n.app))return Promise.reject(Ft(n));const r=Cs(n),s=Sl(r,e),a=await new Qp(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm=10*60*1e3;class nm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rm(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Pl(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Be(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tm&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wa(e))}saveEventToCache(e){this.cachedEventUids.add(Wa(e)),this.lastProcessedEventTime=Date.now()}}function Wa(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Pl({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function rm(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pl(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sm(n,e={}){return Tn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const im=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,om=/^https?/;async function am(n){if(n.config.emulator)return;const{authorizedDomains:e}=await sm(n);for(const t of e)try{if(cm(t))return}catch{}He(n,"unauthorized-domain")}function cm(n){const e=Ii(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!om.test(t))return!1;if(im.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm=new gr(3e4,6e4);function Ka(){const n=qe().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function um(n){return new Promise((e,t)=>{var r,s,o;function a(){Ka(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ka(),t(Be(n,"network-request-failed"))},timeout:lm.get()})}if(!((s=(r=qe().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((o=qe().gapi)===null||o===void 0)&&o.load)a();else{const c=pp("iframefcb");return qe()[c]=()=>{gapi.load?a():t(Be(n,"network-request-failed"))},dp(`${fp()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw cs=null,e})}let cs=null;function hm(n){return cs=cs||um(n),cs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dm=new gr(5e3,15e3),fm="__/auth/iframe",pm="emulator/auth/iframe",mm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _m(n){const e=n.config;q(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?zi(e,pm):`https://${n.config.authDomain}/${fm}`,r={apiKey:e.apiKey,appName:n.name,v:In},s=gm.get(n.config.apiHost);s&&(r.eid=s);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${mr(r).slice(1)}`}async function ym(n){const e=await hm(n),t=qe().gapi;return q(t,n,"internal-error"),e.open({where:document.body,url:_m(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mm,dontclear:!0},r=>new Promise(async(s,o)=>{await r.restyle({setHideOnLeave:!1});const a=Be(n,"network-request-failed"),c=qe().setTimeout(()=>{o(a)},dm.get());function u(){qe().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{o(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wm=500,Em=600,Im="_blank",Tm="http://localhost";class Qa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function bm(n,e,t,r=wm,s=Em){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},vm),{width:r.toString(),height:s.toString(),top:o,left:a}),f=Ne().toLowerCase();t&&(c=ll(f)?Im:t),al(f)&&(e=e||Tm,u.scrollbars="yes");const m=Object.entries(u).reduce((R,[x,k])=>`${R}${x}=${k},`,"");if(sp(f)&&c!=="_self")return Am(e||"",c),new Qa(null);const I=window.open(e||"",c,m);q(I,n,"popup-blocked");try{I.focus()}catch{}return new Qa(I)}function Am(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm="__/auth/handler",Sm="emulator/auth/handler",xm=encodeURIComponent("fac");async function Ja(n,e,t,r,s,o){q(n.config.authDomain,n,"auth-domain-config-required"),q(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:In,eventId:s};if(e instanceof Ji){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Rd(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,I]of Object.entries({}))a[m]=I}if(e instanceof _r){const m=e.getScopes().filter(I=>I!=="");m.length>0&&(a.scopes=m.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const m of Object.keys(c))c[m]===void 0&&delete c[m];const u=await n._getAppCheckToken(),f=u?`#${xm}=${encodeURIComponent(u)}`:"";return`${Pm(n)}?${mr(c).slice(1)}${f}`}function Pm({config:n}){return n.emulator?zi(n,Sm):`https://${n.authDomain}/${Rm}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi="webStorageSupport";class Cm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Il,this._completeRedirectFn=em,this._overrideRedirectResult=Xp}async _openPopup(e,t,r,s){var o;at((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await Ja(e,t,r,Ii(),s);return bm(e,a,Xi())}async _openRedirect(e,t,r,s){await this._originValidation(e);const o=await Ja(e,t,r,Ii(),s);return Dp(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:o}=this.eventManagers[t];return s?Promise.resolve(s):(at(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await ym(e),r=new nm(e);return t.register("authEvent",s=>(q(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(hi,{type:hi},s=>{var o;const a=(o=s==null?void 0:s[0])===null||o===void 0?void 0:o[hi];a!==void 0&&t(!!a),He(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=am(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return pl()||cl()||Ki()}}const km=Cm;var Xa="@firebase/auth",Ya="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Vm(n){fn(new Bt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;q(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ml(n)},f=new up(r,s,o,u);return gp(f,t),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),fn(new Bt("auth-internal",e=>{const t=Cs(e.getProvider("auth").getImmediate());return(r=>new Nm(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),It(Xa,Ya,Dm(n)),It(Xa,Ya,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm=5*60,Om=Hc("authIdTokenMaxAge")||Mm;let Za=null;const Lm=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Om)return;const s=t==null?void 0:t.token;Za!==s&&(Za=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function jm(n=Jc()){const e=Bi(n,"auth");if(e.isInitialized())return e.getImmediate();const t=mp(n,{popupRedirectResolver:km,persistence:[$p,Cp,Il]}),r=Hc("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=Lm(o.toString());Ap(t,a,()=>a(t.currentUser)),bp(t,c=>a(c))}}const s=Gc("auth");return s&&_p(t,`http://${s}`),t}function Fm(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}hp({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const o=Be("internal-error");o.customData=s,t(o)},r.type="text/javascript",r.charset="UTF-8",Fm().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Vm("Browser");var ec=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ut,Cl;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,g){function _(){}_.prototype=g.prototype,v.D=g.prototype,v.prototype=new _,v.prototype.constructor=v,v.C=function(w,E,A){for(var y=Array(arguments.length-2),je=2;je<arguments.length;je++)y[je-2]=arguments[je];return g.prototype[E].apply(w,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,g,_){_||(_=0);var w=Array(16);if(typeof g=="string")for(var E=0;16>E;++E)w[E]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(E=0;16>E;++E)w[E]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=v.g[0],_=v.g[1],E=v.g[2];var A=v.g[3],y=g+(A^_&(E^A))+w[0]+3614090360&4294967295;g=_+(y<<7&4294967295|y>>>25),y=A+(E^g&(_^E))+w[1]+3905402710&4294967295,A=g+(y<<12&4294967295|y>>>20),y=E+(_^A&(g^_))+w[2]+606105819&4294967295,E=A+(y<<17&4294967295|y>>>15),y=_+(g^E&(A^g))+w[3]+3250441966&4294967295,_=E+(y<<22&4294967295|y>>>10),y=g+(A^_&(E^A))+w[4]+4118548399&4294967295,g=_+(y<<7&4294967295|y>>>25),y=A+(E^g&(_^E))+w[5]+1200080426&4294967295,A=g+(y<<12&4294967295|y>>>20),y=E+(_^A&(g^_))+w[6]+2821735955&4294967295,E=A+(y<<17&4294967295|y>>>15),y=_+(g^E&(A^g))+w[7]+4249261313&4294967295,_=E+(y<<22&4294967295|y>>>10),y=g+(A^_&(E^A))+w[8]+1770035416&4294967295,g=_+(y<<7&4294967295|y>>>25),y=A+(E^g&(_^E))+w[9]+2336552879&4294967295,A=g+(y<<12&4294967295|y>>>20),y=E+(_^A&(g^_))+w[10]+4294925233&4294967295,E=A+(y<<17&4294967295|y>>>15),y=_+(g^E&(A^g))+w[11]+2304563134&4294967295,_=E+(y<<22&4294967295|y>>>10),y=g+(A^_&(E^A))+w[12]+1804603682&4294967295,g=_+(y<<7&4294967295|y>>>25),y=A+(E^g&(_^E))+w[13]+4254626195&4294967295,A=g+(y<<12&4294967295|y>>>20),y=E+(_^A&(g^_))+w[14]+2792965006&4294967295,E=A+(y<<17&4294967295|y>>>15),y=_+(g^E&(A^g))+w[15]+1236535329&4294967295,_=E+(y<<22&4294967295|y>>>10),y=g+(E^A&(_^E))+w[1]+4129170786&4294967295,g=_+(y<<5&4294967295|y>>>27),y=A+(_^E&(g^_))+w[6]+3225465664&4294967295,A=g+(y<<9&4294967295|y>>>23),y=E+(g^_&(A^g))+w[11]+643717713&4294967295,E=A+(y<<14&4294967295|y>>>18),y=_+(A^g&(E^A))+w[0]+3921069994&4294967295,_=E+(y<<20&4294967295|y>>>12),y=g+(E^A&(_^E))+w[5]+3593408605&4294967295,g=_+(y<<5&4294967295|y>>>27),y=A+(_^E&(g^_))+w[10]+38016083&4294967295,A=g+(y<<9&4294967295|y>>>23),y=E+(g^_&(A^g))+w[15]+3634488961&4294967295,E=A+(y<<14&4294967295|y>>>18),y=_+(A^g&(E^A))+w[4]+3889429448&4294967295,_=E+(y<<20&4294967295|y>>>12),y=g+(E^A&(_^E))+w[9]+568446438&4294967295,g=_+(y<<5&4294967295|y>>>27),y=A+(_^E&(g^_))+w[14]+3275163606&4294967295,A=g+(y<<9&4294967295|y>>>23),y=E+(g^_&(A^g))+w[3]+4107603335&4294967295,E=A+(y<<14&4294967295|y>>>18),y=_+(A^g&(E^A))+w[8]+1163531501&4294967295,_=E+(y<<20&4294967295|y>>>12),y=g+(E^A&(_^E))+w[13]+2850285829&4294967295,g=_+(y<<5&4294967295|y>>>27),y=A+(_^E&(g^_))+w[2]+4243563512&4294967295,A=g+(y<<9&4294967295|y>>>23),y=E+(g^_&(A^g))+w[7]+1735328473&4294967295,E=A+(y<<14&4294967295|y>>>18),y=_+(A^g&(E^A))+w[12]+2368359562&4294967295,_=E+(y<<20&4294967295|y>>>12),y=g+(_^E^A)+w[5]+4294588738&4294967295,g=_+(y<<4&4294967295|y>>>28),y=A+(g^_^E)+w[8]+2272392833&4294967295,A=g+(y<<11&4294967295|y>>>21),y=E+(A^g^_)+w[11]+1839030562&4294967295,E=A+(y<<16&4294967295|y>>>16),y=_+(E^A^g)+w[14]+4259657740&4294967295,_=E+(y<<23&4294967295|y>>>9),y=g+(_^E^A)+w[1]+2763975236&4294967295,g=_+(y<<4&4294967295|y>>>28),y=A+(g^_^E)+w[4]+1272893353&4294967295,A=g+(y<<11&4294967295|y>>>21),y=E+(A^g^_)+w[7]+4139469664&4294967295,E=A+(y<<16&4294967295|y>>>16),y=_+(E^A^g)+w[10]+3200236656&4294967295,_=E+(y<<23&4294967295|y>>>9),y=g+(_^E^A)+w[13]+681279174&4294967295,g=_+(y<<4&4294967295|y>>>28),y=A+(g^_^E)+w[0]+3936430074&4294967295,A=g+(y<<11&4294967295|y>>>21),y=E+(A^g^_)+w[3]+3572445317&4294967295,E=A+(y<<16&4294967295|y>>>16),y=_+(E^A^g)+w[6]+76029189&4294967295,_=E+(y<<23&4294967295|y>>>9),y=g+(_^E^A)+w[9]+3654602809&4294967295,g=_+(y<<4&4294967295|y>>>28),y=A+(g^_^E)+w[12]+3873151461&4294967295,A=g+(y<<11&4294967295|y>>>21),y=E+(A^g^_)+w[15]+530742520&4294967295,E=A+(y<<16&4294967295|y>>>16),y=_+(E^A^g)+w[2]+3299628645&4294967295,_=E+(y<<23&4294967295|y>>>9),y=g+(E^(_|~A))+w[0]+4096336452&4294967295,g=_+(y<<6&4294967295|y>>>26),y=A+(_^(g|~E))+w[7]+1126891415&4294967295,A=g+(y<<10&4294967295|y>>>22),y=E+(g^(A|~_))+w[14]+2878612391&4294967295,E=A+(y<<15&4294967295|y>>>17),y=_+(A^(E|~g))+w[5]+4237533241&4294967295,_=E+(y<<21&4294967295|y>>>11),y=g+(E^(_|~A))+w[12]+1700485571&4294967295,g=_+(y<<6&4294967295|y>>>26),y=A+(_^(g|~E))+w[3]+2399980690&4294967295,A=g+(y<<10&4294967295|y>>>22),y=E+(g^(A|~_))+w[10]+4293915773&4294967295,E=A+(y<<15&4294967295|y>>>17),y=_+(A^(E|~g))+w[1]+2240044497&4294967295,_=E+(y<<21&4294967295|y>>>11),y=g+(E^(_|~A))+w[8]+1873313359&4294967295,g=_+(y<<6&4294967295|y>>>26),y=A+(_^(g|~E))+w[15]+4264355552&4294967295,A=g+(y<<10&4294967295|y>>>22),y=E+(g^(A|~_))+w[6]+2734768916&4294967295,E=A+(y<<15&4294967295|y>>>17),y=_+(A^(E|~g))+w[13]+1309151649&4294967295,_=E+(y<<21&4294967295|y>>>11),y=g+(E^(_|~A))+w[4]+4149444226&4294967295,g=_+(y<<6&4294967295|y>>>26),y=A+(_^(g|~E))+w[11]+3174756917&4294967295,A=g+(y<<10&4294967295|y>>>22),y=E+(g^(A|~_))+w[2]+718787259&4294967295,E=A+(y<<15&4294967295|y>>>17),y=_+(A^(E|~g))+w[9]+3951481745&4294967295,v.g[0]=v.g[0]+g&4294967295,v.g[1]=v.g[1]+(E+(y<<21&4294967295|y>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+A&4294967295}r.prototype.u=function(v,g){g===void 0&&(g=v.length);for(var _=g-this.blockSize,w=this.B,E=this.h,A=0;A<g;){if(E==0)for(;A<=_;)s(this,v,A),A+=this.blockSize;if(typeof v=="string"){for(;A<g;)if(w[E++]=v.charCodeAt(A++),E==this.blockSize){s(this,w),E=0;break}}else for(;A<g;)if(w[E++]=v[A++],E==this.blockSize){s(this,w),E=0;break}}this.h=E,this.o+=g},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var g=1;g<v.length-8;++g)v[g]=0;var _=8*this.o;for(g=v.length-8;g<v.length;++g)v[g]=_&255,_/=256;for(this.u(v),v=Array(16),g=_=0;4>g;++g)for(var w=0;32>w;w+=8)v[_++]=this.g[g]>>>w&255;return v};function o(v,g){var _=c;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=g(v)}function a(v,g){this.h=g;for(var _=[],w=!0,E=v.length-1;0<=E;E--){var A=v[E]|0;w&&A==g||(_[E]=A,w=!1)}this.g=_}var c={};function u(v){return-128<=v&&128>v?o(v,function(g){return new a([g|0],0>g?-1:0)}):new a([v|0],0>v?-1:0)}function f(v){if(isNaN(v)||!isFinite(v))return I;if(0>v)return T(f(-v));for(var g=[],_=1,w=0;v>=_;w++)g[w]=v/_|0,_*=4294967296;return new a(g,0)}function m(v,g){if(v.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(v.charAt(0)=="-")return T(m(v.substring(1),g));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=f(Math.pow(g,8)),w=I,E=0;E<v.length;E+=8){var A=Math.min(8,v.length-E),y=parseInt(v.substring(E,E+A),g);8>A?(A=f(Math.pow(g,A)),w=w.j(A).add(f(y))):(w=w.j(_),w=w.add(f(y)))}return w}var I=u(0),R=u(1),x=u(16777216);n=a.prototype,n.m=function(){if(C(this))return-T(this).m();for(var v=0,g=1,_=0;_<this.g.length;_++){var w=this.i(_);v+=(0<=w?w:4294967296+w)*g,g*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(k(this))return"0";if(C(this))return"-"+T(this).toString(v);for(var g=f(Math.pow(v,6)),_=this,w="";;){var E=U(_,g).g;_=D(_,E.j(g));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(v);if(_=E,k(_))return A+w;for(;6>A.length;)A="0"+A;w=A+w}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function k(v){if(v.h!=0)return!1;for(var g=0;g<v.g.length;g++)if(v.g[g]!=0)return!1;return!0}function C(v){return v.h==-1}n.l=function(v){return v=D(this,v),C(v)?-1:k(v)?0:1};function T(v){for(var g=v.g.length,_=[],w=0;w<g;w++)_[w]=~v.g[w];return new a(_,~v.h).add(R)}n.abs=function(){return C(this)?T(this):this},n.add=function(v){for(var g=Math.max(this.g.length,v.g.length),_=[],w=0,E=0;E<=g;E++){var A=w+(this.i(E)&65535)+(v.i(E)&65535),y=(A>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);w=y>>>16,A&=65535,y&=65535,_[E]=y<<16|A}return new a(_,_[_.length-1]&-2147483648?-1:0)};function D(v,g){return v.add(T(g))}n.j=function(v){if(k(this)||k(v))return I;if(C(this))return C(v)?T(this).j(T(v)):T(T(this).j(v));if(C(v))return T(this.j(T(v)));if(0>this.l(x)&&0>v.l(x))return f(this.m()*v.m());for(var g=this.g.length+v.g.length,_=[],w=0;w<2*g;w++)_[w]=0;for(w=0;w<this.g.length;w++)for(var E=0;E<v.g.length;E++){var A=this.i(w)>>>16,y=this.i(w)&65535,je=v.i(E)>>>16,ht=v.i(E)&65535;_[2*w+2*E]+=y*ht,V(_,2*w+2*E),_[2*w+2*E+1]+=A*ht,V(_,2*w+2*E+1),_[2*w+2*E+1]+=y*je,V(_,2*w+2*E+1),_[2*w+2*E+2]+=A*je,V(_,2*w+2*E+2)}for(w=0;w<g;w++)_[w]=_[2*w+1]<<16|_[2*w];for(w=g;w<2*g;w++)_[w]=0;return new a(_,0)};function V(v,g){for(;(v[g]&65535)!=v[g];)v[g+1]+=v[g]>>>16,v[g]&=65535,g++}function F(v,g){this.g=v,this.h=g}function U(v,g){if(k(g))throw Error("division by zero");if(k(v))return new F(I,I);if(C(v))return g=U(T(v),g),new F(T(g.g),T(g.h));if(C(g))return g=U(v,T(g)),new F(T(g.g),g.h);if(30<v.g.length){if(C(v)||C(g))throw Error("slowDivide_ only works with positive integers.");for(var _=R,w=g;0>=w.l(v);)_=J(_),w=J(w);var E=W(_,1),A=W(w,1);for(w=W(w,2),_=W(_,2);!k(w);){var y=A.add(w);0>=y.l(v)&&(E=E.add(_),A=y),w=W(w,1),_=W(_,1)}return g=D(v,E.j(g)),new F(E,g)}for(E=I;0<=v.l(g);){for(_=Math.max(1,Math.floor(v.m()/g.m())),w=Math.ceil(Math.log(_)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),A=f(_),y=A.j(g);C(y)||0<y.l(v);)_-=w,A=f(_),y=A.j(g);k(A)&&(A=R),E=E.add(A),v=D(v,y)}return new F(E,v)}n.A=function(v){return U(this,v).h},n.and=function(v){for(var g=Math.max(this.g.length,v.g.length),_=[],w=0;w<g;w++)_[w]=this.i(w)&v.i(w);return new a(_,this.h&v.h)},n.or=function(v){for(var g=Math.max(this.g.length,v.g.length),_=[],w=0;w<g;w++)_[w]=this.i(w)|v.i(w);return new a(_,this.h|v.h)},n.xor=function(v){for(var g=Math.max(this.g.length,v.g.length),_=[],w=0;w<g;w++)_[w]=this.i(w)^v.i(w);return new a(_,this.h^v.h)};function J(v){for(var g=v.g.length+1,_=[],w=0;w<g;w++)_[w]=v.i(w)<<1|v.i(w-1)>>>31;return new a(_,v.h)}function W(v,g){var _=g>>5;g%=32;for(var w=v.g.length-_,E=[],A=0;A<w;A++)E[A]=0<g?v.i(A+_)>>>g|v.i(A+_+1)<<32-g:v.i(A+_);return new a(E,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Cl=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=m,Ut=a}).apply(typeof ec<"u"?ec:typeof self<"u"?self:typeof window<"u"?window:{});var ts=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var kl,Kn,Nl,ls,Ai,Dl,Vl,Ml;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,l,h){return i==Array.prototype||i==Object.prototype||(i[l]=h.value),i};function t(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof ts=="object"&&ts];for(var l=0;l<i.length;++l){var h=i[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(i,l){if(l)e:{var h=r;i=i.split(".");for(var p=0;p<i.length-1;p++){var b=i[p];if(!(b in h))break e;h=h[b]}i=i[i.length-1],p=h[i],l=l(p),l!=p&&l!=null&&e(h,i,{configurable:!0,writable:!0,value:l})}}function o(i,l){i instanceof String&&(i+="");var h=0,p=!1,b={next:function(){if(!p&&h<i.length){var S=h++;return{value:l(S,i[S]),done:!1}}return p=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}s("Array.prototype.values",function(i){return i||function(){return o(this,function(l,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(i){var l=typeof i;return l=l!="object"?l:i?Array.isArray(i)?"array":l:"null",l=="array"||l=="object"&&typeof i.length=="number"}function f(i){var l=typeof i;return l=="object"&&i!=null||l=="function"}function m(i,l,h){return i.call.apply(i.bind,arguments)}function I(i,l,h){if(!i)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,p),i.apply(l,b)}}return function(){return i.apply(l,arguments)}}function R(i,l,h){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:I,R.apply(null,arguments)}function x(i,l){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),i.apply(this,p)}}function k(i,l){function h(){}h.prototype=l.prototype,i.aa=l.prototype,i.prototype=new h,i.prototype.constructor=i,i.Qb=function(p,b,S){for(var O=Array(arguments.length-2),ne=2;ne<arguments.length;ne++)O[ne-2]=arguments[ne];return l.prototype[b].apply(p,O)}}function C(i){const l=i.length;if(0<l){const h=Array(l);for(let p=0;p<l;p++)h[p]=i[p];return h}return[]}function T(i,l){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(u(p)){const b=i.length||0,S=p.length||0;i.length=b+S;for(let O=0;O<S;O++)i[b+O]=p[O]}else i.push(p)}}class D{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function V(i){return/^[\s\xa0]*$/.test(i)}function F(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function U(i){return U[" "](i),i}U[" "]=function(){};var J=F().indexOf("Gecko")!=-1&&!(F().toLowerCase().indexOf("webkit")!=-1&&F().indexOf("Edge")==-1)&&!(F().indexOf("Trident")!=-1||F().indexOf("MSIE")!=-1)&&F().indexOf("Edge")==-1;function W(i,l,h){for(const p in i)l.call(h,i[p],p,i)}function v(i,l){for(const h in i)l.call(void 0,i[h],h,i)}function g(i){const l={};for(const h in i)l[h]=i[h];return l}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(i,l){let h,p;for(let b=1;b<arguments.length;b++){p=arguments[b];for(h in p)i[h]=p[h];for(let S=0;S<_.length;S++)h=_[S],Object.prototype.hasOwnProperty.call(p,h)&&(i[h]=p[h])}}function E(i){var l=1;i=i.split(":");const h=[];for(;0<l&&i.length;)h.push(i.shift()),l--;return i.length&&h.push(i.join(":")),h}function A(i){c.setTimeout(()=>{throw i},0)}function y(){var i=Kt;let l=null;return i.g&&(l=i.g,i.g=i.g.next,i.g||(i.h=null),l.next=null),l}class je{constructor(){this.h=this.g=null}add(l,h){const p=ht.get();p.set(l,h),this.h?this.h.next=p:this.g=p,this.h=p}}var ht=new D(()=>new Ar,i=>i.reset());class Ar{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Qe,xt=!1,Kt=new je,Rr=()=>{const i=c.Promise.resolve(void 0);Qe=()=>{i.then(Sr)}};var Sr=()=>{for(var i;i=y();){try{i.h.call(i.g)}catch(h){A(h)}var l=ht;l.j(i),100>l.h&&(l.h++,i.next=l.g,l.g=i)}xt=!1};function $e(){this.s=this.s,this.C=this.C}$e.prototype.s=!1,$e.prototype.ma=function(){this.s||(this.s=!0,this.N())},$e.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ue(i,l){this.type=i,this.g=this.target=l,this.defaultPrevented=!1}ue.prototype.h=function(){this.defaultPrevented=!0};var xr=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,l=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const h=()=>{};c.addEventListener("test",h,l),c.removeEventListener("test",h,l)}catch{}return i}();function Je(i,l){if(ue.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var h=this.type=i.type,p=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=l,l=i.relatedTarget){if(J){e:{try{U(l.nodeName);var b=!0;break e}catch{}b=!1}b||(l=null)}}else h=="mouseover"?l=i.fromElement:h=="mouseout"&&(l=i.toElement);this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Pr[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&Je.aa.h.call(this)}}k(Je,ue);var Pr={2:"touch",3:"pen",4:"mouse"};Je.prototype.h=function(){Je.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Pt="closure_listenable_"+(1e6*Math.random()|0),Cr=0;function qs(i,l,h,p,b){this.listener=i,this.proxy=null,this.src=l,this.type=h,this.capture=!!p,this.ha=b,this.key=++Cr,this.da=this.fa=!1}function Qt(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function oe(i){this.src=i,this.g={},this.h=0}oe.prototype.add=function(i,l,h,p,b){var S=i.toString();i=this.g[S],i||(i=this.g[S]=[],this.h++);var O=Ct(i,l,p,b);return-1<O?(l=i[O],h||(l.fa=!1)):(l=new qs(l,this.src,S,!!p,b),l.fa=h,i.push(l)),l};function Xe(i,l){var h=l.type;if(h in i.g){var p=i.g[h],b=Array.prototype.indexOf.call(p,l,void 0),S;(S=0<=b)&&Array.prototype.splice.call(p,b,1),S&&(Qt(l),i.g[h].length==0&&(delete i.g[h],i.h--))}}function Ct(i,l,h,p){for(var b=0;b<i.length;++b){var S=i[b];if(!S.da&&S.listener==l&&S.capture==!!h&&S.ha==p)return b}return-1}var ye="closure_lm_"+(1e6*Math.random()|0),xn={};function Jt(i,l,h,p,b){if(Array.isArray(l)){for(var S=0;S<l.length;S++)Jt(i,l[S],h,p,b);return null}return h=Dn(h),i&&i[Pt]?i.K(l,h,f(p)?!!p.capture:!1,b):kr(i,l,h,!1,p,b)}function kr(i,l,h,p,b,S){if(!l)throw Error("Invalid event type");var O=f(b)?!!b.capture:!!b,ne=kn(i);if(ne||(i[ye]=ne=new oe(i)),h=ne.add(l,h,p,O,S),h.proxy)return h;if(p=Nr(),h.proxy=p,p.src=i,p.listener=h,i.addEventListener)xr||(b=O),b===void 0&&(b=!1),i.addEventListener(l.toString(),p,b);else if(i.attachEvent)i.attachEvent(Dr(l.toString()),p);else if(i.addListener&&i.removeListener)i.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Nr(){function i(h){return l.call(i.src,i.listener,h)}const l=Vr;return i}function Pn(i,l,h,p,b){if(Array.isArray(l))for(var S=0;S<l.length;S++)Pn(i,l[S],h,p,b);else p=f(p)?!!p.capture:!!p,h=Dn(h),i&&i[Pt]?(i=i.i,l=String(l).toString(),l in i.g&&(S=i.g[l],h=Ct(S,h,p,b),-1<h&&(Qt(S[h]),Array.prototype.splice.call(S,h,1),S.length==0&&(delete i.g[l],i.h--)))):i&&(i=kn(i))&&(l=i.g[l.toString()],i=-1,l&&(i=Ct(l,h,p,b)),(h=-1<i?l[i]:null)&&Cn(h))}function Cn(i){if(typeof i!="number"&&i&&!i.da){var l=i.src;if(l&&l[Pt])Xe(l.i,i);else{var h=i.type,p=i.proxy;l.removeEventListener?l.removeEventListener(h,p,i.capture):l.detachEvent?l.detachEvent(Dr(h),p):l.addListener&&l.removeListener&&l.removeListener(p),(h=kn(l))?(Xe(h,i),h.h==0&&(h.src=null,l[ye]=null)):Qt(i)}}}function Dr(i){return i in xn?xn[i]:xn[i]="on"+i}function Vr(i,l){if(i.da)i=!0;else{l=new Je(l,this);var h=i.listener,p=i.ha||i.src;i.fa&&Cn(i),i=h.call(p,l)}return i}function kn(i){return i=i[ye],i instanceof oe?i:null}var Nn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Dn(i){return typeof i=="function"?i:(i[Nn]||(i[Nn]=function(l){return i.handleEvent(l)}),i[Nn])}function fe(){$e.call(this),this.i=new oe(this),this.M=this,this.F=null}k(fe,$e),fe.prototype[Pt]=!0,fe.prototype.removeEventListener=function(i,l,h,p){Pn(this,i,l,h,p)};function ve(i,l){var h,p=i.F;if(p)for(h=[];p;p=p.F)h.push(p);if(i=i.M,p=l.type||l,typeof l=="string")l=new ue(l,i);else if(l instanceof ue)l.target=l.target||i;else{var b=l;l=new ue(p,i),w(l,b)}if(b=!0,h)for(var S=h.length-1;0<=S;S--){var O=l.g=h[S];b=Xt(O,p,!0,l)&&b}if(O=l.g=i,b=Xt(O,p,!0,l)&&b,b=Xt(O,p,!1,l)&&b,h)for(S=0;S<h.length;S++)O=l.g=h[S],b=Xt(O,p,!1,l)&&b}fe.prototype.N=function(){if(fe.aa.N.call(this),this.i){var i=this.i,l;for(l in i.g){for(var h=i.g[l],p=0;p<h.length;p++)Qt(h[p]);delete i.g[l],i.h--}}this.F=null},fe.prototype.K=function(i,l,h,p){return this.i.add(String(i),l,!1,h,p)},fe.prototype.L=function(i,l,h,p){return this.i.add(String(i),l,!0,h,p)};function Xt(i,l,h,p){if(l=i.i.g[String(l)],!l)return!0;l=l.concat();for(var b=!0,S=0;S<l.length;++S){var O=l[S];if(O&&!O.da&&O.capture==h){var ne=O.listener,Ie=O.ha||O.src;O.fa&&Xe(i.i,O),b=ne.call(Ie,p)!==!1&&b}}return b&&!p.defaultPrevented}function Mr(i,l,h){if(typeof i=="function")h&&(i=R(i,h));else if(i&&typeof i.handleEvent=="function")i=R(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(i,l||0)}function Or(i){i.g=Mr(()=>{i.g=null,i.i&&(i.i=!1,Or(i))},i.l);const l=i.h;i.h=null,i.m.apply(null,l)}class M extends $e{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Or(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function L(i){$e.call(this),this.h=i,this.g={}}k(L,$e);var ee=[];function pe(i){W(i.g,function(l,h){this.g.hasOwnProperty(h)&&Cn(l)},i),i.g={}}L.prototype.N=function(){L.aa.N.call(this),pe(this)},L.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var re=c.JSON.stringify,Ee=c.JSON.parse,me=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function Yt(){}Yt.prototype.h=null;function Vo(i){return i.h||(i.h=i.i())}function Mo(){}var Vn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Gs(){ue.call(this,"d")}k(Gs,ue);function zs(){ue.call(this,"c")}k(zs,ue);var kt={},Oo=null;function Lr(){return Oo=Oo||new fe}kt.La="serverreachability";function Lo(i){ue.call(this,kt.La,i)}k(Lo,ue);function Mn(i){const l=Lr();ve(l,new Lo(l))}kt.STAT_EVENT="statevent";function jo(i,l){ue.call(this,kt.STAT_EVENT,i),this.stat=l}k(jo,ue);function De(i){const l=Lr();ve(l,new jo(l,i))}kt.Ma="timingevent";function Fo(i,l){ue.call(this,kt.Ma,i),this.size=l}k(Fo,ue);function On(i,l){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},l)}function Ln(){this.g=!0}Ln.prototype.xa=function(){this.g=!1};function Qu(i,l,h,p,b,S){i.info(function(){if(i.g)if(S)for(var O="",ne=S.split("&"),Ie=0;Ie<ne.length;Ie++){var Y=ne[Ie].split("=");if(1<Y.length){var Se=Y[0];Y=Y[1];var xe=Se.split("_");O=2<=xe.length&&xe[1]=="type"?O+(Se+"="+Y+"&"):O+(Se+"=redacted&")}}else O=null;else O=S;return"XMLHTTP REQ ("+p+") [attempt "+b+"]: "+l+`
`+h+`
`+O})}function Ju(i,l,h,p,b,S,O){i.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+b+"]: "+l+`
`+h+`
`+S+" "+O})}function Zt(i,l,h,p){i.info(function(){return"XMLHTTP TEXT ("+l+"): "+Yu(i,h)+(p?" "+p:"")})}function Xu(i,l){i.info(function(){return"TIMEOUT: "+l})}Ln.prototype.info=function(){};function Yu(i,l){if(!i.g)return l;if(!l)return null;try{var h=JSON.parse(l);if(h){for(i=0;i<h.length;i++)if(Array.isArray(h[i])){var p=h[i];if(!(2>p.length)){var b=p[1];if(Array.isArray(b)&&!(1>b.length)){var S=b[0];if(S!="noop"&&S!="stop"&&S!="close")for(var O=1;O<b.length;O++)b[O]=""}}}}return re(h)}catch{return l}}var jr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Uo={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Hs;function Fr(){}k(Fr,Yt),Fr.prototype.g=function(){return new XMLHttpRequest},Fr.prototype.i=function(){return{}},Hs=new Fr;function dt(i,l,h,p){this.j=i,this.i=l,this.l=h,this.R=p||1,this.U=new L(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Bo}function Bo(){this.i=null,this.g="",this.h=!1}var $o={},Ws={};function Ks(i,l,h){i.L=1,i.v=qr(Ye(l)),i.m=h,i.P=!0,qo(i,null)}function qo(i,l){i.F=Date.now(),Ur(i),i.A=Ye(i.v);var h=i.A,p=i.R;Array.isArray(p)||(p=[String(p)]),ra(h.i,"t",p),i.C=0,h=i.j.J,i.h=new Bo,i.g=Ea(i.j,h?l:null,!i.m),0<i.O&&(i.M=new M(R(i.Y,i,i.g),i.O)),l=i.U,h=i.g,p=i.ca;var b="readystatechange";Array.isArray(b)||(b&&(ee[0]=b.toString()),b=ee);for(var S=0;S<b.length;S++){var O=Jt(h,b[S],p||l.handleEvent,!1,l.h||l);if(!O)break;l.g[O.key]=O}l=i.H?g(i.H):{},i.m?(i.u||(i.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,l)):(i.u="GET",i.g.ea(i.A,i.u,null,l)),Mn(),Qu(i.i,i.u,i.A,i.l,i.R,i.m)}dt.prototype.ca=function(i){i=i.target;const l=this.M;l&&Ze(i)==3?l.j():this.Y(i)},dt.prototype.Y=function(i){try{if(i==this.g)e:{const xe=Ze(this.g);var l=this.g.Ba();const nn=this.g.Z();if(!(3>xe)&&(xe!=3||this.g&&(this.h.h||this.g.oa()||ua(this.g)))){this.J||xe!=4||l==7||(l==8||0>=nn?Mn(3):Mn(2)),Qs(this);var h=this.g.Z();this.X=h;t:if(Go(this)){var p=ua(this.g);i="";var b=p.length,S=Ze(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Nt(this),jn(this);var O="";break t}this.h.i=new c.TextDecoder}for(l=0;l<b;l++)this.h.h=!0,i+=this.h.i.decode(p[l],{stream:!(S&&l==b-1)});p.length=0,this.h.g+=i,this.C=0,O=this.h.g}else O=this.g.oa();if(this.o=h==200,Ju(this.i,this.u,this.A,this.l,this.R,xe,h),this.o){if(this.T&&!this.K){t:{if(this.g){var ne,Ie=this.g;if((ne=Ie.g?Ie.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!V(ne)){var Y=ne;break t}}Y=null}if(h=Y)Zt(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Js(this,h);else{this.o=!1,this.s=3,De(12),Nt(this),jn(this);break e}}if(this.P){h=!0;let Fe;for(;!this.J&&this.C<O.length;)if(Fe=Zu(this,O),Fe==Ws){xe==4&&(this.s=4,De(14),h=!1),Zt(this.i,this.l,null,"[Incomplete Response]");break}else if(Fe==$o){this.s=4,De(15),Zt(this.i,this.l,O,"[Invalid Chunk]"),h=!1;break}else Zt(this.i,this.l,Fe,null),Js(this,Fe);if(Go(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),xe!=4||O.length!=0||this.h.h||(this.s=1,De(16),h=!1),this.o=this.o&&h,!h)Zt(this.i,this.l,O,"[Invalid Chunked Response]"),Nt(this),jn(this);else if(0<O.length&&!this.W){this.W=!0;var Se=this.j;Se.g==this&&Se.ba&&!Se.M&&(Se.j.info("Great, no buffering proxy detected. Bytes received: "+O.length),ni(Se),Se.M=!0,De(11))}}else Zt(this.i,this.l,O,null),Js(this,O);xe==4&&Nt(this),this.o&&!this.J&&(xe==4?_a(this.j,this):(this.o=!1,Ur(this)))}else gh(this.g),h==400&&0<O.indexOf("Unknown SID")?(this.s=3,De(12)):(this.s=0,De(13)),Nt(this),jn(this)}}}catch{}finally{}};function Go(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Zu(i,l){var h=i.C,p=l.indexOf(`
`,h);return p==-1?Ws:(h=Number(l.substring(h,p)),isNaN(h)?$o:(p+=1,p+h>l.length?Ws:(l=l.slice(p,p+h),i.C=p+h,l)))}dt.prototype.cancel=function(){this.J=!0,Nt(this)};function Ur(i){i.S=Date.now()+i.I,zo(i,i.I)}function zo(i,l){if(i.B!=null)throw Error("WatchDog timer not null");i.B=On(R(i.ba,i),l)}function Qs(i){i.B&&(c.clearTimeout(i.B),i.B=null)}dt.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(Xu(this.i,this.A),this.L!=2&&(Mn(),De(17)),Nt(this),this.s=2,jn(this)):zo(this,this.S-i)};function jn(i){i.j.G==0||i.J||_a(i.j,i)}function Nt(i){Qs(i);var l=i.M;l&&typeof l.ma=="function"&&l.ma(),i.M=null,pe(i.U),i.g&&(l=i.g,i.g=null,l.abort(),l.ma())}function Js(i,l){try{var h=i.j;if(h.G!=0&&(h.g==i||Xs(h.h,i))){if(!i.K&&Xs(h.h,i)&&h.G==3){try{var p=h.Da.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var b=p;if(b[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<i.F)Qr(h),Wr(h);else break e;ti(h),De(18)}}else h.za=b[1],0<h.za-h.T&&37500>b[2]&&h.F&&h.v==0&&!h.C&&(h.C=On(R(h.Za,h),6e3));if(1>=Ko(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Vt(h,11)}else if((i.K||h.g==i)&&Qr(h),!V(l))for(b=h.Da.g.parse(l),l=0;l<b.length;l++){let Y=b[l];if(h.T=Y[0],Y=Y[1],h.G==2)if(Y[0]=="c"){h.K=Y[1],h.ia=Y[2];const Se=Y[3];Se!=null&&(h.la=Se,h.j.info("VER="+h.la));const xe=Y[4];xe!=null&&(h.Aa=xe,h.j.info("SVER="+h.Aa));const nn=Y[5];nn!=null&&typeof nn=="number"&&0<nn&&(p=1.5*nn,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const Fe=i.g;if(Fe){const Xr=Fe.g?Fe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xr){var S=p.h;S.g||Xr.indexOf("spdy")==-1&&Xr.indexOf("quic")==-1&&Xr.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(Ys(S,S.h),S.h=null))}if(p.D){const ri=Fe.g?Fe.g.getResponseHeader("X-HTTP-Session-Id"):null;ri&&(p.ya=ri,se(p.I,p.D,ri))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-i.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var O=i;if(p.qa=wa(p,p.J?p.ia:null,p.W),O.K){Qo(p.h,O);var ne=O,Ie=p.L;Ie&&(ne.I=Ie),ne.B&&(Qs(ne),Ur(ne)),p.g=O}else ma(p);0<h.i.length&&Kr(h)}else Y[0]!="stop"&&Y[0]!="close"||Vt(h,7);else h.G==3&&(Y[0]=="stop"||Y[0]=="close"?Y[0]=="stop"?Vt(h,7):ei(h):Y[0]!="noop"&&h.l&&h.l.ta(Y),h.v=0)}}Mn(4)}catch{}}var eh=class{constructor(i,l){this.g=i,this.map=l}};function Ho(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Wo(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Ko(i){return i.h?1:i.g?i.g.size:0}function Xs(i,l){return i.h?i.h==l:i.g?i.g.has(l):!1}function Ys(i,l){i.g?i.g.add(l):i.h=l}function Qo(i,l){i.h&&i.h==l?i.h=null:i.g&&i.g.has(l)&&i.g.delete(l)}Ho.prototype.cancel=function(){if(this.i=Jo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Jo(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let l=i.i;for(const h of i.g.values())l=l.concat(h.D);return l}return C(i.i)}function th(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(u(i)){for(var l=[],h=i.length,p=0;p<h;p++)l.push(i[p]);return l}l=[],h=0;for(p in i)l[h++]=i[p];return l}function nh(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(u(i)||typeof i=="string"){var l=[];i=i.length;for(var h=0;h<i;h++)l.push(h);return l}l=[],h=0;for(const p in i)l[h++]=p;return l}}}function Xo(i,l){if(i.forEach&&typeof i.forEach=="function")i.forEach(l,void 0);else if(u(i)||typeof i=="string")Array.prototype.forEach.call(i,l,void 0);else for(var h=nh(i),p=th(i),b=p.length,S=0;S<b;S++)l.call(void 0,p[S],h&&h[S],i)}var Yo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rh(i,l){if(i){i=i.split("&");for(var h=0;h<i.length;h++){var p=i[h].indexOf("="),b=null;if(0<=p){var S=i[h].substring(0,p);b=i[h].substring(p+1)}else S=i[h];l(S,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Dt(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof Dt){this.h=i.h,Br(this,i.j),this.o=i.o,this.g=i.g,$r(this,i.s),this.l=i.l;var l=i.i,h=new Bn;h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),Zo(this,h),this.m=i.m}else i&&(l=String(i).match(Yo))?(this.h=!1,Br(this,l[1]||"",!0),this.o=Fn(l[2]||""),this.g=Fn(l[3]||"",!0),$r(this,l[4]),this.l=Fn(l[5]||"",!0),Zo(this,l[6]||"",!0),this.m=Fn(l[7]||"")):(this.h=!1,this.i=new Bn(null,this.h))}Dt.prototype.toString=function(){var i=[],l=this.j;l&&i.push(Un(l,ea,!0),":");var h=this.g;return(h||l=="file")&&(i.push("//"),(l=this.o)&&i.push(Un(l,ea,!0),"@"),i.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&i.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&i.push("/"),i.push(Un(h,h.charAt(0)=="/"?oh:ih,!0))),(h=this.i.toString())&&i.push("?",h),(h=this.m)&&i.push("#",Un(h,ch)),i.join("")};function Ye(i){return new Dt(i)}function Br(i,l,h){i.j=h?Fn(l,!0):l,i.j&&(i.j=i.j.replace(/:$/,""))}function $r(i,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);i.s=l}else i.s=null}function Zo(i,l,h){l instanceof Bn?(i.i=l,lh(i.i,i.h)):(h||(l=Un(l,ah)),i.i=new Bn(l,i.h))}function se(i,l,h){i.i.set(l,h)}function qr(i){return se(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Fn(i,l){return i?l?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Un(i,l,h){return typeof i=="string"?(i=encodeURI(i).replace(l,sh),h&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function sh(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var ea=/[#\/\?@]/g,ih=/[#\?:]/g,oh=/[#\?]/g,ah=/[#\?@]/g,ch=/#/g;function Bn(i,l){this.h=this.g=null,this.i=i||null,this.j=!!l}function ft(i){i.g||(i.g=new Map,i.h=0,i.i&&rh(i.i,function(l,h){i.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}n=Bn.prototype,n.add=function(i,l){ft(this),this.i=null,i=en(this,i);var h=this.g.get(i);return h||this.g.set(i,h=[]),h.push(l),this.h+=1,this};function ta(i,l){ft(i),l=en(i,l),i.g.has(l)&&(i.i=null,i.h-=i.g.get(l).length,i.g.delete(l))}function na(i,l){return ft(i),l=en(i,l),i.g.has(l)}n.forEach=function(i,l){ft(this),this.g.forEach(function(h,p){h.forEach(function(b){i.call(l,b,p,this)},this)},this)},n.na=function(){ft(this);const i=Array.from(this.g.values()),l=Array.from(this.g.keys()),h=[];for(let p=0;p<l.length;p++){const b=i[p];for(let S=0;S<b.length;S++)h.push(l[p])}return h},n.V=function(i){ft(this);let l=[];if(typeof i=="string")na(this,i)&&(l=l.concat(this.g.get(en(this,i))));else{i=Array.from(this.g.values());for(let h=0;h<i.length;h++)l=l.concat(i[h])}return l},n.set=function(i,l){return ft(this),this.i=null,i=en(this,i),na(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[l]),this.h+=1,this},n.get=function(i,l){return i?(i=this.V(i),0<i.length?String(i[0]):l):l};function ra(i,l,h){ta(i,l),0<h.length&&(i.i=null,i.g.set(en(i,l),C(h)),i.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],l=Array.from(this.g.keys());for(var h=0;h<l.length;h++){var p=l[h];const S=encodeURIComponent(String(p)),O=this.V(p);for(p=0;p<O.length;p++){var b=S;O[p]!==""&&(b+="="+encodeURIComponent(String(O[p]))),i.push(b)}}return this.i=i.join("&")};function en(i,l){return l=String(l),i.j&&(l=l.toLowerCase()),l}function lh(i,l){l&&!i.j&&(ft(i),i.i=null,i.g.forEach(function(h,p){var b=p.toLowerCase();p!=b&&(ta(this,p),ra(this,b,h))},i)),i.j=l}function uh(i,l){const h=new Ln;if(c.Image){const p=new Image;p.onload=x(pt,h,"TestLoadImage: loaded",!0,l,p),p.onerror=x(pt,h,"TestLoadImage: error",!1,l,p),p.onabort=x(pt,h,"TestLoadImage: abort",!1,l,p),p.ontimeout=x(pt,h,"TestLoadImage: timeout",!1,l,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=i}else l(!1)}function hh(i,l){const h=new Ln,p=new AbortController,b=setTimeout(()=>{p.abort(),pt(h,"TestPingServer: timeout",!1,l)},1e4);fetch(i,{signal:p.signal}).then(S=>{clearTimeout(b),S.ok?pt(h,"TestPingServer: ok",!0,l):pt(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(b),pt(h,"TestPingServer: error",!1,l)})}function pt(i,l,h,p,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),p(h)}catch{}}function dh(){this.g=new me}function fh(i,l,h){const p=h||"";try{Xo(i,function(b,S){let O=b;f(b)&&(O=re(b)),l.push(p+S+"="+encodeURIComponent(O))})}catch(b){throw l.push(p+"type="+encodeURIComponent("_badmap")),b}}function Gr(i){this.l=i.Ub||null,this.j=i.eb||!1}k(Gr,Yt),Gr.prototype.g=function(){return new zr(this.l,this.j)},Gr.prototype.i=function(i){return function(){return i}}({});function zr(i,l){fe.call(this),this.D=i,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(zr,fe),n=zr.prototype,n.open=function(i,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=l,this.readyState=1,qn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(l.body=i),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$n(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,qn(this)),this.g&&(this.readyState=3,qn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;sa(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function sa(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var l=i.value?i.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!i.done}))&&(this.response=this.responseText+=l)}i.done?$n(this):qn(this),this.readyState==3&&sa(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,$n(this))},n.Qa=function(i){this.g&&(this.response=i,$n(this))},n.ga=function(){this.g&&$n(this)};function $n(i){i.readyState=4,i.l=null,i.j=null,i.v=null,qn(i)}n.setRequestHeader=function(i,l){this.u.append(i,l)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,i.push(h[0]+": "+h[1]),h=l.next();return i.join(`\r
`)};function qn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(zr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function ia(i){let l="";return W(i,function(h,p){l+=p,l+=":",l+=h,l+=`\r
`}),l}function Zs(i,l,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=ia(h),typeof i=="string"?h!=null&&encodeURIComponent(String(h)):se(i,l,h))}function ae(i){fe.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(ae,fe);var ph=/^https?$/i,mh=["POST","PUT"];n=ae.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,l,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);l=l?l.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Hs.g(),this.v=this.o?Vo(this.o):Vo(Hs),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(l,String(i),!0),this.B=!1}catch(S){oa(this,S);return}if(i=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var b in p)h.set(b,p[b]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const S of p.keys())h.set(S,p.get(S));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(S=>S.toLowerCase()=="content-type"),b=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(mh,l,void 0))||p||b||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,O]of h)this.g.setRequestHeader(S,O);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{la(this),this.u=!0,this.g.send(i),this.u=!1}catch(S){oa(this,S)}};function oa(i,l){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=l,i.m=5,aa(i),Hr(i)}function aa(i){i.A||(i.A=!0,ve(i,"complete"),ve(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,ve(this,"complete"),ve(this,"abort"),Hr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Hr(this,!0)),ae.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ca(this):this.bb())},n.bb=function(){ca(this)};function ca(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Ze(i)!=4||i.Z()!=2)){if(i.u&&Ze(i)==4)Mr(i.Ea,0,i);else if(ve(i,"readystatechange"),Ze(i)==4){i.h=!1;try{const O=i.Z();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var p;if(p=O===0){var b=String(i.D).match(Yo)[1]||null;!b&&c.self&&c.self.location&&(b=c.self.location.protocol.slice(0,-1)),p=!ph.test(b?b.toLowerCase():"")}h=p}if(h)ve(i,"complete"),ve(i,"success");else{i.m=6;try{var S=2<Ze(i)?i.g.statusText:""}catch{S=""}i.l=S+" ["+i.Z()+"]",aa(i)}}finally{Hr(i)}}}}function Hr(i,l){if(i.g){la(i);const h=i.g,p=i.v[0]?()=>{}:null;i.g=null,i.v=null,l||ve(i,"ready");try{h.onreadystatechange=p}catch{}}}function la(i){i.I&&(c.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Ze(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Ze(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var l=this.g.responseText;return i&&l.indexOf(i)==0&&(l=l.substring(i.length)),Ee(l)}};function ua(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function gh(i){const l={};i=(i.g&&2<=Ze(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<i.length;p++){if(V(i[p]))continue;var h=E(i[p]);const b=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const S=l[b]||[];l[b]=S,S.push(h)}v(l,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Gn(i,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[i]||l}function ha(i){this.Aa=0,this.i=[],this.j=new Ln,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Gn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Gn("baseRetryDelayMs",5e3,i),this.cb=Gn("retryDelaySeedMs",1e4,i),this.Wa=Gn("forwardChannelMaxRetries",2,i),this.wa=Gn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Ho(i&&i.concurrentRequestLimit),this.Da=new dh,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ha.prototype,n.la=8,n.G=1,n.connect=function(i,l,h,p){De(0),this.W=i,this.H=l||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=wa(this,null,this.W),Kr(this)};function ei(i){if(da(i),i.G==3){var l=i.U++,h=Ye(i.I);if(se(h,"SID",i.K),se(h,"RID",l),se(h,"TYPE","terminate"),zn(i,h),l=new dt(i,i.j,l),l.L=2,l.v=qr(Ye(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=l.v,h=!0),h||(l.g=Ea(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Ur(l)}va(i)}function Wr(i){i.g&&(ni(i),i.g.cancel(),i.g=null)}function da(i){Wr(i),i.u&&(c.clearTimeout(i.u),i.u=null),Qr(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function Kr(i){if(!Wo(i.h)&&!i.s){i.s=!0;var l=i.Ga;Qe||Rr(),xt||(Qe(),xt=!0),Kt.add(l,i),i.B=0}}function _h(i,l){return Ko(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=l.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=On(R(i.Ga,i,l),ya(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const b=new dt(this,this.j,i);let S=this.o;if(this.S&&(S?(S=g(S),w(S,this.S)):S=this.S),this.m!==null||this.O||(b.H=S,S=null),this.P)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,4096<l){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=pa(this,b,l),h=Ye(this.I),se(h,"RID",i),se(h,"CVER",22),this.D&&se(h,"X-HTTP-Session-Id",this.D),zn(this,h),S&&(this.O?l="headers="+encodeURIComponent(String(ia(S)))+"&"+l:this.m&&Zs(h,this.m,S)),Ys(this.h,b),this.Ua&&se(h,"TYPE","init"),this.P?(se(h,"$req",l),se(h,"SID","null"),b.T=!0,Ks(b,h,null)):Ks(b,h,l),this.G=2}}else this.G==3&&(i?fa(this,i):this.i.length==0||Wo(this.h)||fa(this))};function fa(i,l){var h;l?h=l.l:h=i.U++;const p=Ye(i.I);se(p,"SID",i.K),se(p,"RID",h),se(p,"AID",i.T),zn(i,p),i.m&&i.o&&Zs(p,i.m,i.o),h=new dt(i,i.j,h,i.B+1),i.m===null&&(h.H=i.o),l&&(i.i=l.D.concat(i.i)),l=pa(i,h,1e3),h.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Ys(i.h,h),Ks(h,p,l)}function zn(i,l){i.H&&W(i.H,function(h,p){se(l,p,h)}),i.l&&Xo({},function(h,p){se(l,p,h)})}function pa(i,l,h){h=Math.min(i.i.length,h);var p=i.l?R(i.l.Na,i.l,i):null;e:{var b=i.i;let S=-1;for(;;){const O=["count="+h];S==-1?0<h?(S=b[0].g,O.push("ofs="+S)):S=0:O.push("ofs="+S);let ne=!0;for(let Ie=0;Ie<h;Ie++){let Y=b[Ie].g;const Se=b[Ie].map;if(Y-=S,0>Y)S=Math.max(0,b[Ie].g-100),ne=!1;else try{fh(Se,O,"req"+Y+"_")}catch{p&&p(Se)}}if(ne){p=O.join("&");break e}}}return i=i.i.splice(0,h),l.D=i,p}function ma(i){if(!i.g&&!i.u){i.Y=1;var l=i.Fa;Qe||Rr(),xt||(Qe(),xt=!0),Kt.add(l,i),i.v=0}}function ti(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=On(R(i.Fa,i),ya(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,ga(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=On(R(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,De(10),Wr(this),ga(this))};function ni(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function ga(i){i.g=new dt(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var l=Ye(i.qa);se(l,"RID","rpc"),se(l,"SID",i.K),se(l,"AID",i.T),se(l,"CI",i.F?"0":"1"),!i.F&&i.ja&&se(l,"TO",i.ja),se(l,"TYPE","xmlhttp"),zn(i,l),i.m&&i.o&&Zs(l,i.m,i.o),i.L&&(i.g.I=i.L);var h=i.g;i=i.ia,h.L=1,h.v=qr(Ye(l)),h.m=null,h.P=!0,qo(h,i)}n.Za=function(){this.C!=null&&(this.C=null,Wr(this),ti(this),De(19))};function Qr(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function _a(i,l){var h=null;if(i.g==l){Qr(i),ni(i),i.g=null;var p=2}else if(Xs(i.h,l))h=l.D,Qo(i.h,l),p=1;else return;if(i.G!=0){if(l.o)if(p==1){h=l.m?l.m.length:0,l=Date.now()-l.F;var b=i.B;p=Lr(),ve(p,new Fo(p,h)),Kr(i)}else ma(i);else if(b=l.s,b==3||b==0&&0<l.X||!(p==1&&_h(i,l)||p==2&&ti(i)))switch(h&&0<h.length&&(l=i.h,l.i=l.i.concat(h)),b){case 1:Vt(i,5);break;case 4:Vt(i,10);break;case 3:Vt(i,6);break;default:Vt(i,2)}}}function ya(i,l){let h=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(h*=2),h*l}function Vt(i,l){if(i.j.info("Error code "+l),l==2){var h=R(i.fb,i),p=i.Xa;const b=!p;p=new Dt(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Br(p,"https"),qr(p),b?uh(p.toString(),h):hh(p.toString(),h)}else De(2);i.G=0,i.l&&i.l.sa(l),va(i),da(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),De(2)):(this.j.info("Failed to ping google.com"),De(1))};function va(i){if(i.G=0,i.ka=[],i.l){const l=Jo(i.h);(l.length!=0||i.i.length!=0)&&(T(i.ka,l),T(i.ka,i.i),i.h.i.length=0,C(i.i),i.i.length=0),i.l.ra()}}function wa(i,l,h){var p=h instanceof Dt?Ye(h):new Dt(h);if(p.g!="")l&&(p.g=l+"."+p.g),$r(p,p.s);else{var b=c.location;p=b.protocol,l=l?l+"."+b.hostname:b.hostname,b=+b.port;var S=new Dt(null);p&&Br(S,p),l&&(S.g=l),b&&$r(S,b),h&&(S.l=h),p=S}return h=i.D,l=i.ya,h&&l&&se(p,h,l),se(p,"VER",i.la),zn(i,p),p}function Ea(i,l,h){if(l&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=i.Ca&&!i.pa?new ae(new Gr({eb:h})):new ae(i.pa),l.Ha(i.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ia(){}n=Ia.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Jr(){}Jr.prototype.g=function(i,l){return new Ve(i,l)};function Ve(i,l){fe.call(this),this.g=new ha(l),this.l=i,this.h=l&&l.messageUrlParams||null,i=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(i?i["X-WebChannel-Content-Type"]=l.messageContentType:i={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(i?i["X-WebChannel-Client-Profile"]=l.va:i={"X-WebChannel-Client-Profile":l.va}),this.g.S=i,(i=l&&l.Sb)&&!V(i)&&(this.g.m=i),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!V(l)&&(this.g.D=l,i=this.h,i!==null&&l in i&&(i=this.h,l in i&&delete i[l])),this.j=new tn(this)}k(Ve,fe),Ve.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ve.prototype.close=function(){ei(this.g)},Ve.prototype.o=function(i){var l=this.g;if(typeof i=="string"){var h={};h.__data__=i,i=h}else this.u&&(h={},h.__data__=re(i),i=h);l.i.push(new eh(l.Ya++,i)),l.G==3&&Kr(l)},Ve.prototype.N=function(){this.g.l=null,delete this.j,ei(this.g),delete this.g,Ve.aa.N.call(this)};function Ta(i){Gs.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var l=i.__sm__;if(l){e:{for(const h in l){i=h;break e}i=void 0}(this.i=i)&&(i=this.i,l=l!==null&&i in l?l[i]:void 0),this.data=l}else this.data=i}k(Ta,Gs);function ba(){zs.call(this),this.status=1}k(ba,zs);function tn(i){this.g=i}k(tn,Ia),tn.prototype.ua=function(){ve(this.g,"a")},tn.prototype.ta=function(i){ve(this.g,new Ta(i))},tn.prototype.sa=function(i){ve(this.g,new ba)},tn.prototype.ra=function(){ve(this.g,"b")},Jr.prototype.createWebChannel=Jr.prototype.g,Ve.prototype.send=Ve.prototype.o,Ve.prototype.open=Ve.prototype.m,Ve.prototype.close=Ve.prototype.close,Ml=function(){return new Jr},Vl=function(){return Lr()},Dl=kt,Ai={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},jr.NO_ERROR=0,jr.TIMEOUT=8,jr.HTTP_ERROR=6,ls=jr,Uo.COMPLETE="complete",Nl=Uo,Mo.EventType=Vn,Vn.OPEN="a",Vn.CLOSE="b",Vn.ERROR="c",Vn.MESSAGE="d",fe.prototype.listen=fe.prototype.K,Kn=Mo,ae.prototype.listenOnce=ae.prototype.L,ae.prototype.getLastError=ae.prototype.Ka,ae.prototype.getLastErrorCode=ae.prototype.Ba,ae.prototype.getStatus=ae.prototype.Z,ae.prototype.getResponseJson=ae.prototype.Oa,ae.prototype.getResponseText=ae.prototype.oa,ae.prototype.send=ae.prototype.ea,ae.prototype.setWithCredentials=ae.prototype.Ha,kl=ae}).apply(typeof ts<"u"?ts:typeof self<"u"?self:typeof window<"u"?window:{});const tc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ce.UNAUTHENTICATED=new Ce(null),Ce.GOOGLE_CREDENTIALS=new Ce("google-credentials-uid"),Ce.FIRST_PARTY=new Ce("first-party-uid"),Ce.MOCK_USER=new Ce("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bn="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt=new Fi("@firebase/firestore");function Wn(){return qt.logLevel}function j(n,...e){if(qt.logLevel<=Q.DEBUG){const t=e.map(Zi);qt.debug(`Firestore (${bn}): ${n}`,...t)}}function ct(n,...e){if(qt.logLevel<=Q.ERROR){const t=e.map(Zi);qt.error(`Firestore (${bn}): ${n}`,...t)}}function mn(n,...e){if(qt.logLevel<=Q.WARN){const t=e.map(Zi);qt.warn(`Firestore (${bn}): ${n}`,...t)}}function Zi(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(n="Unexpected state"){const e=`FIRESTORE (${bn}) INTERNAL ASSERTION FAILED: `+n;throw ct(e),new Error(e)}function te(n,e){n||G()}function H(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends ut{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Um{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ce.UNAUTHENTICATED))}shutdown(){}}class Bm{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class $m{constructor(e){this.t=e,this.currentUser=Ce.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){te(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let o=new Tt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Tt,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=o;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},c=u=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Tt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(te(typeof r.accessToken=="string"),new Ol(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return te(e===null||typeof e=="string"),new Ce(e)}}class qm{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Ce.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Gm{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new qm(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ce.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Hm{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){te(this.o===void 0);const r=o=>{o.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,j("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const s=o=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(te(typeof t.token=="string"),this.R=t.token,new zm(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Wm(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<t&&(r+=e.charAt(s[o]%e.length))}return r}}function Z(n,e){return n<e?-1:n>e?1:0}function gn(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new B(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new B(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new B(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return _e.fromMillis(Date.now())}static fromDate(e){return _e.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new _e(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new z(e)}static min(){return new z(new _e(0,0))}static max(){return new z(new _e(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,t,r){t===void 0?t=0:t>e.length&&G(),r===void 0?r=e.length-t:r>e.length-t&&G(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return ir.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ir?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const o=e.get(s),a=t.get(s);if(o<a)return-1;if(o>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class le extends ir{construct(e,t,r){return new le(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new le(t)}static emptyPath(){return new le([])}}const Km=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class be extends ir{construct(e,t,r){return new be(e,t,r)}static isValidIdentifier(e){return Km.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),be.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new be(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const o=()=>{if(r.length===0)throw new B(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new B(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new B(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(o(),s++)}if(o(),a)throw new B(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new be(t)}static emptyPath(){return new be([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(le.fromString(e))}static fromName(e){return new $(le.fromString(e).popFirst(5))}static empty(){return new $(le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return le.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new le(e.slice()))}}function Qm(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=z.fromTimestamp(r===1e9?new _e(t+1,0):new _e(t,r));return new At(s,$.empty(),e)}function Jm(n){return new At(n.readTime,n.key,-1)}class At{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new At(z.min(),$.empty(),-1)}static max(){return new At(z.max(),$.empty(),-1)}}function Xm(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=$.comparator(n.documentKey,e.documentKey),t!==0?t:Z(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Zm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vr(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==Ym)throw n;j("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):P.reject(t)}static resolve(e){return new P((t,r)=>{t(e)})}static reject(e){return new P((t,r)=>{r(e)})}static waitFor(e){return new P((t,r)=>{let s=0,o=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++o,a&&o===s&&t()},u=>r(u))}),a=!0,o===s&&t()})}static or(e){let t=P.resolve(!1);for(const r of e)t=t.next(s=>s?P.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,o)=>{r.push(t.call(this,s,o))}),this.waitFor(r)}static mapArray(e,t){return new P((r,s)=>{const o=e.length,a=new Array(o);let c=0;for(let u=0;u<o;u++){const f=u;t(e[f]).next(m=>{a[f]=m,++c,c===o&&r(a)},m=>s(m))}})}static doWhile(e,t){return new P((r,s)=>{const o=()=>{e()===!0?t().next(()=>{o()},s):r()};o()})}}function eg(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function wr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}eo.oe=-1;function Ds(n){return n==null}function Es(n){return n===0&&1/n==-1/0}function tg(n){return typeof n=="number"&&Number.isInteger(n)&&!Es(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function An(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function jl(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e,t){this.comparator=e,this.root=t||Te.EMPTY}insert(e,t){return new ie(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Te.BLACK,null,null))}remove(e){return new ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Te.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ns(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ns(this.root,e,this.comparator,!1)}getReverseIterator(){return new ns(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ns(this.root,e,this.comparator,!0)}}class ns{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&s&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Te{constructor(e,t,r,s,o){this.key=e,this.value=t,this.color=r??Te.RED,this.left=s??Te.EMPTY,this.right=o??Te.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,o){return new Te(e??this.key,t??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const o=r(e,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(e,t,r),null):o===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Te.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Te.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Te.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}Te.EMPTY=null,Te.RED=!0,Te.BLACK=!1;Te.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,t,r,s,o){return this}insert(e,t,r){return new Te(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.comparator=e,this.data=new ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new rc(this.data.getIterator())}getIteratorFrom(e){return new rc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ae)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ae(this.comparator);return t.data=e,t}}class rc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.fields=e,e.sort(be.comparator)}static empty(){return new Ue([])}unionWith(e){let t=new Ae(be.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ue(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return gn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Fl("Invalid base64 string: "+o):o}}(e);return new Re(t)}static fromUint8Array(e){const t=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(e);return new Re(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Re.EMPTY_BYTE_STRING=new Re("");const ng=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rt(n){if(te(!!n),typeof n=="string"){let e=0;const t=ng.exec(n);if(te(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:he(n.seconds),nanos:he(n.nanos)}}function he(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Gt(n){return typeof n=="string"?Re.fromBase64String(n):Re.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function no(n){const e=n.mapValue.fields.__previous_value__;return to(e)?no(e):e}function or(n){const e=Rt(n.mapValue.fields.__local_write_time__.timestampValue);return new _e(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e,t,r,s,o,a,c,u,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=f}}class ar{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ar("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ar&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs={mapValue:{}};function zt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?to(n)?4:ig(n)?9007199254740991:sg(n)?10:11:G()}function We(n,e){if(n===e)return!0;const t=zt(n);if(t!==zt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return or(n).isEqual(or(e));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=Rt(s.timestampValue),c=Rt(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,o){return Gt(s.bytesValue).isEqual(Gt(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,o){return he(s.geoPointValue.latitude)===he(o.geoPointValue.latitude)&&he(s.geoPointValue.longitude)===he(o.geoPointValue.longitude)}(n,e);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return he(s.integerValue)===he(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=he(s.doubleValue),c=he(o.doubleValue);return a===c?Es(a)===Es(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return gn(n.arrayValue.values||[],e.arrayValue.values||[],We);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},c=o.mapValue.fields||{};if(nc(a)!==nc(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!We(a[u],c[u])))return!1;return!0}(n,e);default:return G()}}function cr(n,e){return(n.values||[]).find(t=>We(t,e))!==void 0}function _n(n,e){if(n===e)return 0;const t=zt(n),r=zt(e);if(t!==r)return Z(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Z(n.booleanValue,e.booleanValue);case 2:return function(o,a){const c=he(o.integerValue||o.doubleValue),u=he(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return sc(n.timestampValue,e.timestampValue);case 4:return sc(or(n),or(e));case 5:return Z(n.stringValue,e.stringValue);case 6:return function(o,a){const c=Gt(o),u=Gt(a);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(o,a){const c=o.split("/"),u=a.split("/");for(let f=0;f<c.length&&f<u.length;f++){const m=Z(c[f],u[f]);if(m!==0)return m}return Z(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,a){const c=Z(he(o.latitude),he(a.latitude));return c!==0?c:Z(he(o.longitude),he(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return ic(n.arrayValue,e.arrayValue);case 10:return function(o,a){var c,u,f,m;const I=o.fields||{},R=a.fields||{},x=(c=I.value)===null||c===void 0?void 0:c.arrayValue,k=(u=R.value)===null||u===void 0?void 0:u.arrayValue,C=Z(((f=x==null?void 0:x.values)===null||f===void 0?void 0:f.length)||0,((m=k==null?void 0:k.values)===null||m===void 0?void 0:m.length)||0);return C!==0?C:ic(x,k)}(n.mapValue,e.mapValue);case 11:return function(o,a){if(o===rs.mapValue&&a===rs.mapValue)return 0;if(o===rs.mapValue)return 1;if(a===rs.mapValue)return-1;const c=o.fields||{},u=Object.keys(c),f=a.fields||{},m=Object.keys(f);u.sort(),m.sort();for(let I=0;I<u.length&&I<m.length;++I){const R=Z(u[I],m[I]);if(R!==0)return R;const x=_n(c[u[I]],f[m[I]]);if(x!==0)return x}return Z(u.length,m.length)}(n.mapValue,e.mapValue);default:throw G()}}function sc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Z(n,e);const t=Rt(n),r=Rt(e),s=Z(t.seconds,r.seconds);return s!==0?s:Z(t.nanos,r.nanos)}function ic(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const o=_n(t[s],r[s]);if(o)return o}return Z(t.length,r.length)}function yn(n){return Ri(n)}function Ri(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Rt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Gt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return $.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const o of t.values||[])s?s=!1:r+=",",r+=Ri(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Ri(t.fields[a])}`;return s+"}"}(n.mapValue):G()}function Si(n){return!!n&&"integerValue"in n}function ro(n){return!!n&&"arrayValue"in n}function oc(n){return!!n&&"nullValue"in n}function ac(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function us(n){return!!n&&"mapValue"in n}function sg(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Yn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return An(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Yn(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Yn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function ig(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.value=e}static empty(){return new Me({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!us(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Yn(t)}setAll(e){let t=be.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=Yn(a):s.push(c.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,s)}delete(e){const t=this.field(e.popLast());us(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return We(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];us(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){An(t,(s,o)=>e[s]=o);for(const s of r)delete e[s]}clone(){return new Me(Yn(this.value))}}function Ul(n){const e=[];return An(n.fields,(t,r)=>{const s=new be([t]);if(us(r)){const o=Ul(r.mapValue).fields;if(o.length===0)e.push(s);else for(const a of o)e.push(s.child(a))}else e.push(s)}),new Ue(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,t,r,s,o,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(e){return new ke(e,0,z.min(),z.min(),z.min(),Me.empty(),0)}static newFoundDocument(e,t,r,s){return new ke(e,1,t,z.min(),r,s,0)}static newNoDocument(e,t){return new ke(e,2,t,z.min(),z.min(),Me.empty(),0)}static newUnknownDocument(e,t){return new ke(e,3,t,z.min(),z.min(),Me.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Me.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Me.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ke&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ke(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,t){this.position=e,this.inclusive=t}}function cc(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const o=e[s],a=n.position[s];if(o.field.isKeyField()?r=$.comparator($.fromName(a.referenceValue),t.key):r=_n(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function lc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!We(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,t="asc"){this.field=e,this.dir=t}}function og(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{}class ge extends Bl{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new cg(e,t,r):t==="array-contains"?new hg(e,r):t==="in"?new dg(e,r):t==="not-in"?new fg(e,r):t==="array-contains-any"?new pg(e,r):new ge(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new lg(e,r):new ug(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(_n(t,this.value)):t!==null&&zt(this.value)===zt(t)&&this.matchesComparison(_n(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ke extends Bl{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Ke(e,t)}matches(e){return $l(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function $l(n){return n.op==="and"}function ql(n){return ag(n)&&$l(n)}function ag(n){for(const e of n.filters)if(e instanceof Ke)return!1;return!0}function xi(n){if(n instanceof ge)return n.field.canonicalString()+n.op.toString()+yn(n.value);if(ql(n))return n.filters.map(e=>xi(e)).join(",");{const e=n.filters.map(t=>xi(t)).join(",");return`${n.op}(${e})`}}function Gl(n,e){return n instanceof ge?function(r,s){return s instanceof ge&&r.op===s.op&&r.field.isEqual(s.field)&&We(r.value,s.value)}(n,e):n instanceof Ke?function(r,s){return s instanceof Ke&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,c)=>o&&Gl(a,s.filters[c]),!0):!1}(n,e):void G()}function zl(n){return n instanceof ge?function(t){return`${t.field.canonicalString()} ${t.op} ${yn(t.value)}`}(n):n instanceof Ke?function(t){return t.op.toString()+" {"+t.getFilters().map(zl).join(" ,")+"}"}(n):"Filter"}class cg extends ge{constructor(e,t,r){super(e,t,r),this.key=$.fromName(r.referenceValue)}matches(e){const t=$.comparator(e.key,this.key);return this.matchesComparison(t)}}class lg extends ge{constructor(e,t){super(e,"in",t),this.keys=Hl("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ug extends ge{constructor(e,t){super(e,"not-in",t),this.keys=Hl("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Hl(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>$.fromName(r.referenceValue))}class hg extends ge{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ro(t)&&cr(t.arrayValue,this.value)}}class dg extends ge{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&cr(this.value.arrayValue,t)}}class fg extends ge{constructor(e,t){super(e,"not-in",t)}matches(e){if(cr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!cr(this.value.arrayValue,t)}}class pg extends ge{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ro(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>cr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e,t=null,r=[],s=[],o=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=c,this.ue=null}}function uc(n,e=null,t=[],r=[],s=null,o=null,a=null){return new mg(n,e,t,r,s,o,a)}function so(n){const e=H(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>xi(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Ds(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>yn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>yn(r)).join(",")),e.ue=t}return e.ue}function io(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!og(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Gl(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!lc(n.startAt,e.startAt)&&lc(n.endAt,e.endAt)}function Pi(n){return $.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,t=null,r=[],s=[],o=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function gg(n,e,t,r,s,o,a,c){return new Vs(n,e,t,r,s,o,a,c)}function oo(n){return new Vs(n)}function hc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function _g(n){return n.collectionGroup!==null}function Zn(n){const e=H(n);if(e.ce===null){e.ce=[];const t=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Ae(be.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.ce.push(new Ts(o,r))}),t.has(be.keyField().canonicalString())||e.ce.push(new Ts(be.keyField(),r))}return e.ce}function Ge(n){const e=H(n);return e.le||(e.le=yg(e,Zn(n))),e.le}function yg(n,e){if(n.limitType==="F")return uc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Ts(s.field,o)});const t=n.endAt?new Is(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Is(n.startAt.position,n.startAt.inclusive):null;return uc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ci(n,e,t){return new Vs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ms(n,e){return io(Ge(n),Ge(e))&&n.limitType===e.limitType}function Wl(n){return`${so(Ge(n))}|lt:${n.limitType}`}function rn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>zl(s)).join(", ")}]`),Ds(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>yn(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>yn(s)).join(",")),`Target(${r})`}(Ge(n))}; limitType=${n.limitType})`}function Os(n,e){return e.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):$.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,s){for(const o of Zn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,u){const f=cc(a,c,u);return a.inclusive?f<=0:f<0}(r.startAt,Zn(r),s)||r.endAt&&!function(a,c,u){const f=cc(a,c,u);return a.inclusive?f>=0:f>0}(r.endAt,Zn(r),s))}(n,e)}function vg(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Kl(n){return(e,t)=>{let r=!1;for(const s of Zn(n)){const o=wg(s,e,t);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function wg(n,e,t){const r=n.field.isKeyField()?$.comparator(e.key,t.key):function(o,a,c){const u=a.data.field(o),f=c.data.field(o);return u!==null&&f!==null?_n(u,f):G()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return void(s[o]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){An(this.inner,(t,r)=>{for(const[s,o]of r)e(s,o)})}isEmpty(){return jl(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg=new ie($.comparator);function lt(){return Eg}const Ql=new ie($.comparator);function Qn(...n){let e=Ql;for(const t of n)e=e.insert(t.key,t);return e}function Jl(n){let e=Ql;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function jt(){return er()}function Xl(){return er()}function er(){return new Rn(n=>n.toString(),(n,e)=>n.isEqual(e))}const Ig=new ie($.comparator),Tg=new Ae($.comparator);function K(...n){let e=Tg;for(const t of n)e=e.add(t);return e}const bg=new Ae(Z);function Ag(){return bg}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Es(e)?"-0":e}}function Yl(n){return{integerValue:""+n}}function Rg(n,e){return tg(e)?Yl(e):ao(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(){this._=void 0}}function Sg(n,e,t){return n instanceof lr?function(s,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&to(o)&&(o=no(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(t,e):n instanceof ur?eu(n,e):n instanceof hr?tu(n,e):function(s,o){const a=Zl(s,o),c=dc(a)+dc(s.Pe);return Si(a)&&Si(s.Pe)?Yl(c):ao(s.serializer,c)}(n,e)}function xg(n,e,t){return n instanceof ur?eu(n,e):n instanceof hr?tu(n,e):t}function Zl(n,e){return n instanceof bs?function(r){return Si(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class lr extends Ls{}class ur extends Ls{constructor(e){super(),this.elements=e}}function eu(n,e){const t=nu(e);for(const r of n.elements)t.some(s=>We(s,r))||t.push(r);return{arrayValue:{values:t}}}class hr extends Ls{constructor(e){super(),this.elements=e}}function tu(n,e){let t=nu(e);for(const r of n.elements)t=t.filter(s=>!We(s,r));return{arrayValue:{values:t}}}class bs extends Ls{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function dc(n){return he(n.integerValue||n.doubleValue)}function nu(n){return ro(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e,t){this.field=e,this.transform=t}}function Cg(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof ur&&s instanceof ur||r instanceof hr&&s instanceof hr?gn(r.elements,s.elements,We):r instanceof bs&&s instanceof bs?We(r.Pe,s.Pe):r instanceof lr&&s instanceof lr}(n.transform,e.transform)}class kg{constructor(e,t){this.version=e,this.transformResults=t}}class it{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new it}static exists(e){return new it(void 0,e)}static updateTime(e){return new it(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function hs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class js{}function ru(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new iu(n.key,it.none()):new Er(n.key,n.data,it.none());{const t=n.data,r=Me.empty();let s=new Ae(be.comparator);for(let o of e.fields)if(!s.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new Ht(n.key,r,new Ue(s.toArray()),it.none())}}function Ng(n,e,t){n instanceof Er?function(s,o,a){const c=s.value.clone(),u=pc(s.fieldTransforms,o,a.transformResults);c.setAll(u),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof Ht?function(s,o,a){if(!hs(s.precondition,o))return void o.convertToUnknownDocument(a.version);const c=pc(s.fieldTransforms,o,a.transformResults),u=o.data;u.setAll(su(s)),u.setAll(c),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function tr(n,e,t,r){return n instanceof Er?function(o,a,c,u){if(!hs(o.precondition,a))return c;const f=o.value.clone(),m=mc(o.fieldTransforms,u,a);return f.setAll(m),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,e,t,r):n instanceof Ht?function(o,a,c,u){if(!hs(o.precondition,a))return c;const f=mc(o.fieldTransforms,u,a),m=a.data;return m.setAll(su(o)),m.setAll(f),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(I=>I.field))}(n,e,t,r):function(o,a,c){return hs(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function Dg(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),o=Zl(r.transform,s||null);o!=null&&(t===null&&(t=Me.empty()),t.set(r.field,o))}return t||null}function fc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&gn(r,s,(o,a)=>Cg(o,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Er extends js{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ht extends js{constructor(e,t,r,s,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function su(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function pc(n,e,t){const r=new Map;te(n.length===t.length);for(let s=0;s<t.length;s++){const o=n[s],a=o.transform,c=e.data.field(o.field);r.set(o.field,xg(a,c,t[s]))}return r}function mc(n,e,t){const r=new Map;for(const s of n){const o=s.transform,a=t.data.field(s.field);r.set(s.field,Sg(o,a,e))}return r}class iu extends js{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Vg extends js{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(e.key)&&Ng(o,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=tr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=tr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Xl();return this.mutations.forEach(s=>{const o=e.get(s.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=t.has(s.key)?null:c;const u=ru(a,c);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(z.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),K())}isEqual(e){return this.batchId===e.batchId&&gn(this.mutations,e.mutations,(t,r)=>fc(t,r))&&gn(this.baseMutations,e.baseMutations,(t,r)=>fc(t,r))}}class co{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){te(e.mutations.length===r.length);let s=function(){return Ig}();const o=e.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new co(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de,X;function jg(n){switch(n){default:return G();case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0}}function ou(n){if(n===void 0)return ct("GRPC error has no .code"),N.UNKNOWN;switch(n){case de.OK:return N.OK;case de.CANCELLED:return N.CANCELLED;case de.UNKNOWN:return N.UNKNOWN;case de.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case de.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case de.INTERNAL:return N.INTERNAL;case de.UNAVAILABLE:return N.UNAVAILABLE;case de.UNAUTHENTICATED:return N.UNAUTHENTICATED;case de.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case de.NOT_FOUND:return N.NOT_FOUND;case de.ALREADY_EXISTS:return N.ALREADY_EXISTS;case de.PERMISSION_DENIED:return N.PERMISSION_DENIED;case de.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case de.ABORTED:return N.ABORTED;case de.OUT_OF_RANGE:return N.OUT_OF_RANGE;case de.UNIMPLEMENTED:return N.UNIMPLEMENTED;case de.DATA_LOSS:return N.DATA_LOSS;default:return G()}}(X=de||(de={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug=new Ut([4294967295,4294967295],0);function gc(n){const e=Fg().encode(n),t=new Cl;return t.update(e),new Uint8Array(t.digest())}function _c(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new Ut([t,r],0),new Ut([s,o],0)]}class lo{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Jn(`Invalid padding: ${t}`);if(r<0)throw new Jn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Jn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Jn(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Ut.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(Ut.fromNumber(r)));return s.compare(Ug)===1&&(s=new Ut([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=gc(e),[r,s]=_c(t);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);if(!this.de(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new lo(o,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Ie===0)return;const t=gc(e),[r,s]=_c(t);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Jn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,t,r,s,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Ir.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Fs(z.min(),s,new ie(Z),lt(),K())}}class Ir{constructor(e,t,r,s,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ir(r,t,K(),K(),K())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class au{constructor(e,t){this.targetId=e,this.me=t}}class cu{constructor(e,t,r=Re.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class yc{constructor(){this.fe=0,this.ge=wc(),this.pe=Re.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=K(),t=K(),r=K();return this.ge.forEach((s,o)=>{switch(o){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:G()}}),new Ir(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=wc()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,te(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Bg{constructor(e){this.Le=e,this.Be=new Map,this.ke=lt(),this.qe=vc(),this.Qe=new ie(Z)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:G()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const o=s.target;if(Pi(o))if(r===0){const a=new $(o.path);this.Ue(t,a,ke.newNoDocument(a,z.min()))}else te(r===1);else{const a=this.Ye(t);if(a!==r){const c=this.Ze(e),u=c?this.Xe(c,e,a):1;if(u!==0){this.je(t);const f=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,f)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=t;let a,c;try{a=Gt(r).toUint8Array()}catch(u){if(u instanceof Fl)return mn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new lo(a,s,o)}catch(u){return mn(u instanceof Jn?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.Ie===0?null:c}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(o=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,o,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((o,a)=>{const c=this.Je(a);if(c){if(o.current&&Pi(c.target)){const u=new $(c.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,ke.newNoDocument(u,e))}o.be&&(t.set(a,o.ve()),o.Ce())}});let r=K();this.qe.forEach((o,a)=>{let c=!0;a.forEachWhile(u=>{const f=this.Je(u);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(e));const s=new Fs(e,t,this.Qe,this.ke,r);return this.ke=lt(),this.qe=vc(),this.Qe=new ie(Z),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new yc,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Ae(Z),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||j("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new yc),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function vc(){return new ie($.comparator)}function wc(){return new ie($.comparator)}const $g={asc:"ASCENDING",desc:"DESCENDING"},qg={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Gg={and:"AND",or:"OR"};class zg{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ki(n,e){return n.useProto3Json||Ds(e)?e:{value:e}}function As(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function lu(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Hg(n,e){return As(n,e.toTimestamp())}function ze(n){return te(!!n),z.fromTimestamp(function(t){const r=Rt(t);return new _e(r.seconds,r.nanos)}(n))}function uo(n,e){return Ni(n,e).canonicalString()}function Ni(n,e){const t=function(s){return new le(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function uu(n){const e=le.fromString(n);return te(mu(e)),e}function Di(n,e){return uo(n.databaseId,e.path)}function di(n,e){const t=uu(e);if(t.get(1)!==n.databaseId.projectId)throw new B(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new B(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new $(du(t))}function hu(n,e){return uo(n.databaseId,e)}function Wg(n){const e=uu(n);return e.length===4?le.emptyPath():du(e)}function Vi(n){return new le(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function du(n){return te(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Ec(n,e,t){return{name:Di(n,e),fields:t.value.mapValue.fields}}function Kg(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],o=function(f,m){return f.useProto3Json?(te(m===void 0||typeof m=="string"),Re.fromBase64String(m||"")):(te(m===void 0||m instanceof Buffer||m instanceof Uint8Array),Re.fromUint8Array(m||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(f){const m=f.code===void 0?N.UNKNOWN:ou(f.code);return new B(m,f.message||"")}(a);t=new cu(r,s,o,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=di(n,r.document.name),o=ze(r.document.updateTime),a=r.document.createTime?ze(r.document.createTime):z.min(),c=new Me({mapValue:{fields:r.document.fields}}),u=ke.newFoundDocument(s,o,a,c),f=r.targetIds||[],m=r.removedTargetIds||[];t=new ds(f,m,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=di(n,r.document),o=r.readTime?ze(r.readTime):z.min(),a=ke.newNoDocument(s,o),c=r.removedTargetIds||[];t=new ds([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=di(n,r.document),o=r.removedTargetIds||[];t=new ds([],o,s,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new Lg(s,o),c=r.targetId;t=new au(c,a)}}return t}function Qg(n,e){let t;if(e instanceof Er)t={update:Ec(n,e.key,e.value)};else if(e instanceof iu)t={delete:Di(n,e.key)};else if(e instanceof Ht)t={update:Ec(n,e.key,e.data),updateMask:s_(e.fieldMask)};else{if(!(e instanceof Vg))return G();t={verify:Di(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,a){const c=a.transform;if(c instanceof lr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ur)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof hr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof bs)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw G()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:Hg(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:G()}(n,e.precondition)),t}function Jg(n,e){return n&&n.length>0?(te(e!==void 0),n.map(t=>function(s,o){let a=s.updateTime?ze(s.updateTime):ze(o);return a.isEqual(z.min())&&(a=ze(o)),new kg(a,s.transformResults||[])}(t,e))):[]}function Xg(n,e){return{documents:[hu(n,e.path)]}}function Yg(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=hu(n,s);const o=function(f){if(f.length!==0)return pu(Ke.create(f,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const a=function(f){if(f.length!==0)return f.map(m=>function(R){return{field:sn(R.field),direction:t_(R.dir)}}(m))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=ki(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(e.endAt)),{_t:t,parent:s}}function Zg(n){let e=Wg(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){te(r===1);const m=t.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let o=[];t.where&&(o=function(I){const R=fu(I);return R instanceof Ke&&ql(R)?R.getFilters():[R]}(t.where));let a=[];t.orderBy&&(a=function(I){return I.map(R=>function(k){return new Ts(on(k.field),function(T){switch(T){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(R))}(t.orderBy));let c=null;t.limit&&(c=function(I){let R;return R=typeof I=="object"?I.value:I,Ds(R)?null:R}(t.limit));let u=null;t.startAt&&(u=function(I){const R=!!I.before,x=I.values||[];return new Is(x,R)}(t.startAt));let f=null;return t.endAt&&(f=function(I){const R=!I.before,x=I.values||[];return new Is(x,R)}(t.endAt)),gg(e,s,a,o,c,"F",u,f)}function e_(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function fu(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=on(t.unaryFilter.field);return ge.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=on(t.unaryFilter.field);return ge.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=on(t.unaryFilter.field);return ge.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=on(t.unaryFilter.field);return ge.create(a,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(n):n.fieldFilter!==void 0?function(t){return ge.create(on(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ke.create(t.compositeFilter.filters.map(r=>fu(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return G()}}(t.compositeFilter.op))}(n):G()}function t_(n){return $g[n]}function n_(n){return qg[n]}function r_(n){return Gg[n]}function sn(n){return{fieldPath:n.canonicalString()}}function on(n){return be.fromServerFormat(n.fieldPath)}function pu(n){return n instanceof ge?function(t){if(t.op==="=="){if(ac(t.value))return{unaryFilter:{field:sn(t.field),op:"IS_NAN"}};if(oc(t.value))return{unaryFilter:{field:sn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ac(t.value))return{unaryFilter:{field:sn(t.field),op:"IS_NOT_NAN"}};if(oc(t.value))return{unaryFilter:{field:sn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:sn(t.field),op:n_(t.op),value:t.value}}}(n):n instanceof Ke?function(t){const r=t.getFilters().map(s=>pu(s));return r.length===1?r[0]:{compositeFilter:{op:r_(t.op),filters:r}}}(n):G()}function s_(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function mu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,t,r,s,o=z.min(),a=z.min(),c=Re.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new vt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new vt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new vt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new vt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e){this.ct=e}}function o_(n){const e=Zg({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ci(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(){this.un=new c_}addToCollectionParentIndex(e,t){return this.un.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(At.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(At.min())}updateCollectionGroup(e,t,r){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class c_{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Ae(le.comparator),o=!s.has(r);return this.index[t]=s.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ae(le.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new vn(0)}static kn(){return new vn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(){this.changes=new Rn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ke.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?P.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&tr(r.mutation,s,Ue.empty(),_e.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,K()).next(()=>r))}getLocalViewOfDocuments(e,t,r=K()){const s=jt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(o=>{let a=Qn();return o.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=jt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,K()))}populateOverlays(e,t,r){const s=[];return r.forEach(o=>{t.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(e,s).next(o=>{o.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let o=lt();const a=er(),c=function(){return er()}();return t.forEach((u,f)=>{const m=r.get(f.key);s.has(f.key)&&(m===void 0||m.mutation instanceof Ht)?o=o.insert(f.key,f):m!==void 0?(a.set(f.key,m.mutation.getFieldMask()),tr(m.mutation,f,m.mutation.getFieldMask(),_e.now())):a.set(f.key,Ue.empty())}),this.recalculateAndSaveOverlays(e,o).next(u=>(u.forEach((f,m)=>a.set(f,m)),t.forEach((f,m)=>{var I;return c.set(f,new u_(m,(I=a.get(f))!==null&&I!==void 0?I:null))}),c))}recalculateAndSaveOverlays(e,t){const r=er();let s=new ie((a,c)=>a-c),o=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(u=>{const f=t.get(u);if(f===null)return;let m=r.get(u)||Ue.empty();m=c.applyToLocalView(f,m),r.set(u,m);const I=(s.get(c.batchId)||K()).add(u);s=s.insert(c.batchId,I)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),f=u.key,m=u.value,I=Xl();m.forEach(R=>{if(!o.has(R)){const x=ru(t.get(R),r.get(R));x!==null&&I.set(R,x),o=o.add(R)}}),a.push(this.documentOverlayCache.saveOverlays(e,f,I))}return P.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return $.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):_g(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-o.size):P.resolve(jt());let c=-1,u=o;return a.next(f=>P.forEach(f,(m,I)=>(c<I.largestBatchId&&(c=I.largestBatchId),o.get(m)?P.resolve():this.remoteDocumentCache.getEntry(e,m).next(R=>{u=u.insert(m,R)}))).next(()=>this.populateOverlays(e,f,o)).next(()=>this.computeViews(e,u,f,K())).next(m=>({batchId:c,changes:Jl(m)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new $(t)).next(r=>{let s=Qn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const o=t.collectionGroup;let a=Qn();return this.indexManager.getCollectionParents(e,o).next(c=>P.forEach(c,u=>{const f=function(I,R){return new Vs(R,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)}(t,u.child(o));return this.getDocumentsMatchingCollectionQuery(e,f,r,s).next(m=>{m.forEach((I,R)=>{a=a.insert(I,R)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,s))).next(a=>{o.forEach((u,f)=>{const m=f.getKey();a.get(m)===null&&(a=a.insert(m,ke.newInvalidDocument(m)))});let c=Qn();return a.forEach((u,f)=>{const m=o.get(u);m!==void 0&&tr(m.mutation,f,Ue.empty(),_e.now()),Os(t,f)&&(c=c.insert(u,f))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return P.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:ze(s.createTime)}}(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:o_(s.bundledQuery),readTime:ze(s.readTime)}}(t)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(){this.overlays=new ie($.comparator),this.Ir=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const r=jt();return P.forEach(t,s=>this.getOverlay(e,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,o)=>{this.ht(e,t,o)}),P.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),P.resolve()}getOverlaysForCollection(e,t,r){const s=jt(),o=t.length+1,a=new $(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,f=u.getKey();if(!t.isPrefixOf(f.path))break;f.path.length===o&&u.largestBatchId>r&&s.set(u.getKey(),u)}return P.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let o=new ie((f,m)=>f-m);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===t&&f.largestBatchId>r){let m=o.get(f.largestBatchId);m===null&&(m=jt(),o=o.insert(f.largestBatchId,m)),m.set(f.getKey(),f)}}const c=jt(),u=o.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((f,m)=>c.set(f,m)),!(c.size()>=s)););return P.resolve(c)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Og(t,r));let o=this.Ir.get(t);o===void 0&&(o=K(),this.Ir.set(t,o)),this.Ir.set(t,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(){this.sessionToken=Re.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(){this.Tr=new Ae(we.Er),this.dr=new Ae(we.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new we(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new we(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new $(new le([])),r=new we(t,e),s=new we(t,e+1),o=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new $(new le([])),r=new we(t,e),s=new we(t,e+1);let o=K();return this.dr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(e){const t=new we(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class we{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return $.comparator(e.key,t.key)||Z(e.wr,t.wr)}static Ar(e,t){return Z(e.wr,t.wr)||$.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Ae(we.Er)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Mg(o,t,r,s);this.mutationQueue.push(a);for(const c of s)this.br=this.br.add(new we(c.key,o)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return P.resolve(a)}lookupMutationBatch(e,t){return P.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),o=s<0?0:s;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new we(t,0),s=new we(t,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,s],a=>{const c=this.Dr(a.wr);o.push(c)}),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ae(Z);return t.forEach(s=>{const o=new we(s,0),a=new we(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],c=>{r=r.add(c.wr)})}),P.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let o=r;$.isDocumentKey(o)||(o=o.child(""));const a=new we(new $(o),0);let c=new Ae(Z);return this.br.forEachWhile(u=>{const f=u.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(c=c.add(u.wr)),!0)},a),P.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){te(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return P.forEach(t.mutations,s=>{const o=new we(s.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new we(t,0),s=this.br.firstAfterOrEqual(r);return P.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e){this.Mr=e,this.docs=function(){return new ie($.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),o=s?s.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return P.resolve(r?r.document.mutableCopy():ke.newInvalidDocument(t))}getEntries(e,t){let r=lt();return t.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():ke.newInvalidDocument(s))}),P.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let o=lt();const a=t.path,c=new $(a.child("")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:f,value:{document:m}}=u.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||Xm(Jm(m),r)<=0||(s.has(m.key)||Os(t,m))&&(o=o.insert(m.key,m.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(e,t,r,s){G()}Or(e,t){return P.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new __(this)}getSize(e){return P.resolve(this.size)}}class __ extends l_{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),P.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e){this.persistence=e,this.Nr=new Rn(t=>so(t),io),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ho,this.targetCount=0,this.kr=vn.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),P.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new vn(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.Kn(t),P.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,r){let s=0;const o=[];return this.Nr.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),P.waitFor(o).next(()=>s)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return P.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),P.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,o=[];return s&&t.forEach(a=>{o.push(s.markPotentiallyOrphaned(e,a))}),P.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return P.resolve(r)}containsKey(e,t){return P.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e,t){this.qr={},this.overlays={},this.Qr=new eo(0),this.Kr=!1,this.Kr=!0,this.$r=new p_,this.referenceDelegate=e(this),this.Ur=new y_(this),this.indexManager=new a_,this.remoteDocumentCache=function(s){return new g_(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new i_(t),this.Gr=new d_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new f_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new m_(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){j("MemoryPersistence","Starting transaction:",e);const s=new w_(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(o=>this.referenceDelegate.jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Hr(e,t){return P.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class w_ extends Zm{constructor(e){super(),this.currentSequenceNumber=e}}class fo{constructor(e){this.persistence=e,this.Jr=new ho,this.Yr=null}static Zr(e){return new fo(e)}get Xr(){if(this.Yr)return this.Yr;throw G()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),P.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),P.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Xr,r=>{const s=$.fromPath(r);return this.ei(e,s).next(o=>{o||t.removeEntry(s,z.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return P.or([()=>P.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=K(),s=K();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new po(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return wd()?8:eg(Ne())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const o={result:null};return this.Yi(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(e,t,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new E_;return this.Xi(e,t,a).next(c=>{if(o.result=c,this.zi)return this.es(e,t,a,c.size)})}).next(()=>o.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(Wn()<=Q.DEBUG&&j("QueryEngine","SDK will not create cache indexes for query:",rn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),P.resolve()):(Wn()<=Q.DEBUG&&j("QueryEngine","Query:",rn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Wn()<=Q.DEBUG&&j("QueryEngine","The SDK decides to create cache indexes for query:",rn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ge(t))):P.resolve())}Yi(e,t){if(hc(t))return P.resolve(null);let r=Ge(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Ci(t,null,"F"),r=Ge(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const a=K(...o);return this.Ji.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const f=this.ts(t,c);return this.ns(t,f,a,u.readTime)?this.Yi(e,Ci(t,null,"F")):this.rs(e,f,t,u)}))})))}Zi(e,t,r,s){return hc(t)||s.isEqual(z.min())?P.resolve(null):this.Ji.getDocuments(e,r).next(o=>{const a=this.ts(t,o);return this.ns(t,a,r,s)?P.resolve(null):(Wn()<=Q.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),rn(t)),this.rs(e,a,t,Qm(s,-1)).next(c=>c))})}ts(e,t){let r=new Ae(Kl(e));return t.forEach((s,o)=>{Os(e,o)&&(r=r.add(o))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Xi(e,t,r){return Wn()<=Q.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",rn(t)),this.Ji.getDocumentsMatchingQuery(e,t,At.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new ie(Z),this._s=new Rn(o=>so(o),io),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new h_(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function b_(n,e,t,r){return new T_(n,e,t,r)}async function gu(n,e){const t=H(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],c=[];let u=K();for(const f of s){a.push(f.batchId);for(const m of f.mutations)u=u.add(m.key)}for(const f of o){c.push(f.batchId);for(const m of f.mutations)u=u.add(m.key)}return t.localDocuments.getDocuments(r,u).next(f=>({hs:f,removedBatchIds:a,addedBatchIds:c}))})})}function A_(n,e){const t=H(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),o=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,u,f,m){const I=f.batch,R=I.keys();let x=P.resolve();return R.forEach(k=>{x=x.next(()=>m.getEntry(u,k)).next(C=>{const T=f.docVersions.get(k);te(T!==null),C.version.compareTo(T)<0&&(I.applyToRemoteDocument(C,f),C.isValidDocument()&&(C.setReadTime(f.commitVersion),m.addEntry(C)))})}),x.next(()=>c.mutationQueue.removeMutationBatch(u,I))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=K();for(let f=0;f<c.mutationResults.length;++f)c.mutationResults[f].transformResults.length>0&&(u=u.add(c.batch.mutations[f].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function _u(n){const e=H(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function R_(n,e){const t=H(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const c=[];e.targetChanges.forEach((m,I)=>{const R=s.get(I);if(!R)return;c.push(t.Ur.removeMatchingKeys(o,m.removedDocuments,I).next(()=>t.Ur.addMatchingKeys(o,m.addedDocuments,I)));let x=R.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(I)!==null?x=x.withResumeToken(Re.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):m.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(m.resumeToken,r)),s=s.insert(I,x),function(C,T,D){return C.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(R,x,m)&&c.push(t.Ur.updateTargetData(o,x))});let u=lt(),f=K();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(o,m))}),c.push(S_(o,a,e.documentUpdates).next(m=>{u=m.Ps,f=m.Is})),!r.isEqual(z.min())){const m=t.Ur.getLastRemoteSnapshotVersion(o).next(I=>t.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));c.push(m)}return P.waitFor(c).next(()=>a.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,u,f)).next(()=>u)}).then(o=>(t.os=s,o))}function S_(n,e,t){let r=K(),s=K();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let a=lt();return t.forEach((c,u)=>{const f=o.get(c);u.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(z.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!f.isValidDocument()||u.version.compareTo(f.version)>0||u.version.compareTo(f.version)===0&&f.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):j("LocalStore","Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",u.version)}),{Ps:a,Is:s}})}function x_(n,e){const t=H(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function P_(n,e){const t=H(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(o=>o?(s=o,P.resolve(s)):t.Ur.allocateTargetId(r).next(a=>(s=new vt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function Mi(n,e,t){const r=H(n),s=r.os.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!wr(a))throw a;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Ic(n,e,t){const r=H(n);let s=z.min(),o=K();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,f,m){const I=H(u),R=I._s.get(m);return R!==void 0?P.resolve(I.os.get(R)):I.Ur.getTargetData(f,m)}(r,a,Ge(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,c.targetId).next(u=>{o=u})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?s:z.min(),t?o:K())).next(c=>(C_(r,vg(e),c),{documents:c,Ts:o})))}function C_(n,e,t){let r=n.us.get(e)||z.min();t.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.us.set(e,r)}class Tc{constructor(){this.activeTargetIds=Ag()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class k_{constructor(){this.so=new Tc,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Tc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ss=null;function fi(){return ss===null?ss=function(){return 268435456+Math.round(2147483648*Math.random())}():ss++,"0x"+ss.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe="WebChannelConnection";class M_ extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Fo(){return!1}Mo(t,r,s,o,a){const c=fi(),u=this.xo(t,r.toUriEncodedString());j("RestConnection",`Sending RPC '${t}' ${c}:`,u,s);const f={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(f,o,a),this.No(t,u,f,s).then(m=>(j("RestConnection",`Received RPC '${t}' ${c}: `,m),m),m=>{throw mn("RestConnection",`RPC '${t}' ${c} failed with error: `,m,"url: ",u,"request:",s),m})}Lo(t,r,s,o,a,c){return this.Mo(t,r,s,o,a)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+bn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>t[a]=o),s&&s.headers.forEach((o,a)=>t[a]=o)}xo(t,r){const s=D_[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const o=fi();return new Promise((a,c)=>{const u=new kl;u.setWithCredentials(!0),u.listenOnce(Nl.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ls.NO_ERROR:const m=u.getResponseJson();j(Pe,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),a(m);break;case ls.TIMEOUT:j(Pe,`RPC '${e}' ${o} timed out`),c(new B(N.DEADLINE_EXCEEDED,"Request time out"));break;case ls.HTTP_ERROR:const I=u.getStatus();if(j(Pe,`RPC '${e}' ${o} failed with status:`,I,"response text:",u.getResponseText()),I>0){let R=u.getResponseJson();Array.isArray(R)&&(R=R[0]);const x=R==null?void 0:R.error;if(x&&x.status&&x.message){const k=function(T){const D=T.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(D)>=0?D:N.UNKNOWN}(x.status);c(new B(k,x.message))}else c(new B(N.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new B(N.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{j(Pe,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);j(Pe,`RPC '${e}' ${o} sending request:`,s),u.send(t,"POST",f,r,15)})}Bo(e,t,r){const s=fi(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Ml(),c=Vl(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(u.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const m=o.join("");j(Pe,`Creating RPC '${e}' stream ${s}: ${m}`,u);const I=a.createWebChannel(m,u);let R=!1,x=!1;const k=new V_({Io:T=>{x?j(Pe,`Not sending because RPC '${e}' stream ${s} is closed:`,T):(R||(j(Pe,`Opening RPC '${e}' stream ${s} transport.`),I.open(),R=!0),j(Pe,`RPC '${e}' stream ${s} sending:`,T),I.send(T))},To:()=>I.close()}),C=(T,D,V)=>{T.listen(D,F=>{try{V(F)}catch(U){setTimeout(()=>{throw U},0)}})};return C(I,Kn.EventType.OPEN,()=>{x||(j(Pe,`RPC '${e}' stream ${s} transport opened.`),k.yo())}),C(I,Kn.EventType.CLOSE,()=>{x||(x=!0,j(Pe,`RPC '${e}' stream ${s} transport closed`),k.So())}),C(I,Kn.EventType.ERROR,T=>{x||(x=!0,mn(Pe,`RPC '${e}' stream ${s} transport errored:`,T),k.So(new B(N.UNAVAILABLE,"The operation could not be completed")))}),C(I,Kn.EventType.MESSAGE,T=>{var D;if(!x){const V=T.data[0];te(!!V);const F=V,U=F.error||((D=F[0])===null||D===void 0?void 0:D.error);if(U){j(Pe,`RPC '${e}' stream ${s} received error:`,U);const J=U.status;let W=function(_){const w=de[_];if(w!==void 0)return ou(w)}(J),v=U.message;W===void 0&&(W=N.INTERNAL,v="Unknown error status: "+J+" with message "+U.message),x=!0,k.So(new B(W,v)),I.close()}else j(Pe,`RPC '${e}' stream ${s} received:`,V),k.bo(V)}}),C(c,Dl.STAT_EVENT,T=>{T.stat===Ai.PROXY?j(Pe,`RPC '${e}' stream ${s} detected buffering proxy`):T.stat===Ai.NOPROXY&&j(Pe,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.wo()},0),k}}function pi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(n){return new zg(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e,t,r=1e3,s=1.5,o=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&j("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e,t,r,s,o,a,c,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new yu(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(ct(t.toString()),ct("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new B(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class O_ extends vu{constructor(e,t,r,s,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=o}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=Kg(this.serializer,e),r=function(o){if(!("targetChange"in o))return z.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?z.min():a.readTime?ze(a.readTime):z.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=Vi(this.serializer),t.addTarget=function(o,a){let c;const u=a.target;if(c=Pi(u)?{documents:Xg(o,u)}:{query:Yg(o,u)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=lu(o,a.resumeToken);const f=ki(o,a.expectedCount);f!==null&&(c.expectedCount=f)}else if(a.snapshotVersion.compareTo(z.min())>0){c.readTime=As(o,a.snapshotVersion.toTimestamp());const f=ki(o,a.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,e);const r=e_(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=Vi(this.serializer),t.removeTarget=e,this.a_(t)}}class L_ extends vu{constructor(e,t,r,s,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return te(!!e.streamToken),this.lastStreamToken=e.streamToken,te(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=Jg(e.writeResults,e.commitTime),r=ze(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=Vi(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Qg(this.serializer,r))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_ extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new B(N.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(e,Ni(t,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(N.UNKNOWN,o.toString())})}Lo(e,t,r,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Lo(e,Ni(t,r),s,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new B(N.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class F_{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(ct(t),this.D_=!1):j("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e,t,r,s,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{r.enqueueAndForget(async()=>{Wt(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(u){const f=H(u);f.L_.add(4),await Tr(f),f.q_.set("Unknown"),f.L_.delete(4),await Bs(f)}(this))})}),this.q_=new F_(r,s)}}async function Bs(n){if(Wt(n))for(const e of n.B_)await e(!0)}async function Tr(n){for(const e of n.B_)await e(!1)}function wu(n,e){const t=H(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),yo(t)?_o(t):Sn(t).r_()&&go(t,e))}function mo(n,e){const t=H(n),r=Sn(t);t.N_.delete(e),r.r_()&&Eu(t,e),t.N_.size===0&&(r.r_()?r.o_():Wt(t)&&t.q_.set("Unknown"))}function go(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(z.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Sn(n).A_(e)}function Eu(n,e){n.Q_.xe(e),Sn(n).R_(e)}function _o(n){n.Q_=new Bg({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Sn(n).start(),n.q_.v_()}function yo(n){return Wt(n)&&!Sn(n).n_()&&n.N_.size>0}function Wt(n){return H(n).L_.size===0}function Iu(n){n.Q_=void 0}async function B_(n){n.q_.set("Online")}async function $_(n){n.N_.forEach((e,t)=>{go(n,e)})}async function q_(n,e){Iu(n),yo(n)?(n.q_.M_(e),_o(n)):n.q_.set("Unknown")}async function G_(n,e,t){if(n.q_.set("Online"),e instanceof cu&&e.state===2&&e.cause)try{await async function(s,o){const a=o.cause;for(const c of o.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.N_.delete(c),s.Q_.removeTarget(c))}(n,e)}catch(r){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Rs(n,r)}else if(e instanceof ds?n.Q_.Ke(e):e instanceof au?n.Q_.He(e):n.Q_.We(e),!t.isEqual(z.min()))try{const r=await _u(n.localStore);t.compareTo(r)>=0&&await function(o,a){const c=o.Q_.rt(a);return c.targetChanges.forEach((u,f)=>{if(u.resumeToken.approximateByteSize()>0){const m=o.N_.get(f);m&&o.N_.set(f,m.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,f)=>{const m=o.N_.get(u);if(!m)return;o.N_.set(u,m.withResumeToken(Re.EMPTY_BYTE_STRING,m.snapshotVersion)),Eu(o,u);const I=new vt(m.target,u,f,m.sequenceNumber);go(o,I)}),o.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){j("RemoteStore","Failed to raise snapshot:",r),await Rs(n,r)}}async function Rs(n,e,t){if(!wr(e))throw e;n.L_.add(1),await Tr(n),n.q_.set("Offline"),t||(t=()=>_u(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Bs(n)})}function Tu(n,e){return e().catch(t=>Rs(n,t,e))}async function $s(n){const e=H(n),t=St(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;z_(e);)try{const s=await x_(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,H_(e,s)}catch(s){await Rs(e,s)}bu(e)&&Au(e)}function z_(n){return Wt(n)&&n.O_.length<10}function H_(n,e){n.O_.push(e);const t=St(n);t.r_()&&t.V_&&t.m_(e.mutations)}function bu(n){return Wt(n)&&!St(n).n_()&&n.O_.length>0}function Au(n){St(n).start()}async function W_(n){St(n).p_()}async function K_(n){const e=St(n);for(const t of n.O_)e.m_(t.mutations)}async function Q_(n,e,t){const r=n.O_.shift(),s=co.from(r,e,t);await Tu(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await $s(n)}async function J_(n,e){e&&St(n).V_&&await async function(r,s){if(function(a){return jg(a)&&a!==N.ABORTED}(s.code)){const o=r.O_.shift();St(r).s_(),await Tu(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await $s(r)}}(n,e),bu(n)&&Au(n)}async function Ac(n,e){const t=H(n);t.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const r=Wt(t);t.L_.add(3),await Tr(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Bs(t)}async function X_(n,e){const t=H(n);e?(t.L_.delete(2),await Bs(t)):e||(t.L_.add(2),await Tr(t),t.q_.set("Unknown"))}function Sn(n){return n.K_||(n.K_=function(t,r,s){const o=H(t);return o.w_(),new O_(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:B_.bind(null,n),Ro:$_.bind(null,n),mo:q_.bind(null,n),d_:G_.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),yo(n)?_o(n):n.q_.set("Unknown")):(await n.K_.stop(),Iu(n))})),n.K_}function St(n){return n.U_||(n.U_=function(t,r,s){const o=H(t);return o.w_(),new L_(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:W_.bind(null,n),mo:J_.bind(null,n),f_:K_.bind(null,n),g_:Q_.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await $s(n)):(await n.U_.stop(),n.O_.length>0&&(j("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,t,r,s,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Tt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,o){const a=Date.now()+r,c=new vo(e,t,a,s,o);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wo(n,e){if(ct("AsyncQueue",`${e}: ${n}`),wr(n))return new B(N.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this.comparator=e?(t,r)=>e(t,r)||$.comparator(t.key,r.key):(t,r)=>$.comparator(t.key,r.key),this.keyedMap=Qn(),this.sortedSet=new ie(this.comparator)}static emptySet(e){return new hn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof hn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new hn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(){this.W_=new ie($.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):G():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class wn{constructor(e,t,r,s,o,a,c,u,f){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=f}static fromInitialDocuments(e,t,r,s,o){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new wn(e,t,hn.emptySet(t),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ms(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Z_{constructor(){this.queries=Sc(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=H(t),o=s.queries;s.queries=Sc(),o.forEach((a,c)=>{for(const u of c.j_)u.onError(r)})})(this,new B(N.ABORTED,"Firestore shutting down"))}}function Sc(){return new Rn(n=>Wl(n),Ms)}async function ey(n,e){const t=H(n);let r=3;const s=e.query;let o=t.queries.get(s);o?!o.H_()&&e.J_()&&(r=2):(o=new Y_,r=e.J_()?0:1);try{switch(r){case 0:o.z_=await t.onListen(s,!0);break;case 1:o.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=wo(a,`Initialization of query '${rn(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,o),o.j_.push(e),e.Z_(t.onlineState),o.z_&&e.X_(o.z_)&&Eo(t)}async function ty(n,e){const t=H(n),r=e.query;let s=3;const o=t.queries.get(r);if(o){const a=o.j_.indexOf(e);a>=0&&(o.j_.splice(a,1),o.j_.length===0?s=e.J_()?0:1:!o.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function ny(n,e){const t=H(n);let r=!1;for(const s of e){const o=s.query,a=t.queries.get(o);if(a){for(const c of a.j_)c.X_(s)&&(r=!0);a.z_=s}}r&&Eo(t)}function ry(n,e,t){const r=H(n),s=r.queries.get(e);if(s)for(const o of s.j_)o.onError(t);r.queries.delete(e)}function Eo(n){n.Y_.forEach(e=>{e.next()})}var Oi,xc;(xc=Oi||(Oi={})).ea="default",xc.Cache="cache";class sy{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new wn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=wn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Oi.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e){this.key=e}}class Su{constructor(e){this.key=e}}class iy{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=K(),this.mutatedKeys=K(),this.Aa=Kl(e),this.Ra=new hn(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new Rc,s=t?t.Ra:this.Ra;let o=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((m,I)=>{const R=s.get(m),x=Os(this.query,I)?I:null,k=!!R&&this.mutatedKeys.has(R.key),C=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let T=!1;R&&x?R.data.isEqual(x.data)?k!==C&&(r.track({type:3,doc:x}),T=!0):this.ga(R,x)||(r.track({type:2,doc:x}),T=!0,(u&&this.Aa(x,u)>0||f&&this.Aa(x,f)<0)&&(c=!0)):!R&&x?(r.track({type:0,doc:x}),T=!0):R&&!x&&(r.track({type:1,doc:R}),T=!0,(u||f)&&(c=!0)),T&&(x?(a=a.add(x),o=C?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{Ra:a,fa:r,ns:c,mutatedKeys:o}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const o=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((m,I)=>function(x,k){const C=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return C(x)-C(k)}(m.type,I.type)||this.Aa(m.doc,I.doc)),this.pa(r),s=s!=null&&s;const c=t&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,f=u!==this.Ea;return this.Ea=u,a.length!==0||f?{snapshot:new wn(this.query,e.Ra,o,a,e.mutatedKeys,u===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Rc,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=K(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new Su(r))}),this.da.forEach(r=>{e.has(r)||t.push(new Ru(r))}),t}ba(e){this.Ta=e.Ts,this.da=K();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return wn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class oy{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class ay{constructor(e){this.key=e,this.va=!1}}class cy{constructor(e,t,r,s,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Rn(c=>Wl(c),Ms),this.Ma=new Map,this.xa=new Set,this.Oa=new ie($.comparator),this.Na=new Map,this.La=new ho,this.Ba={},this.ka=new Map,this.qa=vn.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function ly(n,e,t=!0){const r=Du(n);let s;const o=r.Fa.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Da()):s=await xu(r,e,t,!0),s}async function uy(n,e){const t=Du(n);await xu(t,e,!0,!1)}async function xu(n,e,t,r){const s=await P_(n.localStore,Ge(e)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,t);let c;return r&&(c=await hy(n,e,o,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&wu(n.remoteStore,s),c}async function hy(n,e,t,r,s){n.Ka=(I,R,x)=>async function(C,T,D,V){let F=T.view.ma(D);F.ns&&(F=await Ic(C.localStore,T.query,!1).then(({documents:v})=>T.view.ma(v,F)));const U=V&&V.targetChanges.get(T.targetId),J=V&&V.targetMismatches.get(T.targetId)!=null,W=T.view.applyChanges(F,C.isPrimaryClient,U,J);return Cc(C,T.targetId,W.wa),W.snapshot}(n,I,R,x);const o=await Ic(n.localStore,e,!0),a=new iy(e,o.Ts),c=a.ma(o.documents),u=Ir.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),f=a.applyChanges(c,n.isPrimaryClient,u);Cc(n,t,f.wa);const m=new oy(e,t,a);return n.Fa.set(e,m),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),f.snapshot}async function dy(n,e,t){const r=H(n),s=r.Fa.get(e),o=r.Ma.get(s.targetId);if(o.length>1)return r.Ma.set(s.targetId,o.filter(a=>!Ms(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Mi(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&mo(r.remoteStore,s.targetId),Li(r,s.targetId)}).catch(vr)):(Li(r,s.targetId),await Mi(r.localStore,s.targetId,!0))}async function fy(n,e){const t=H(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),mo(t.remoteStore,r.targetId))}async function py(n,e,t){const r=Ey(n);try{const s=await function(a,c){const u=H(a),f=_e.now(),m=c.reduce((x,k)=>x.add(k.key),K());let I,R;return u.persistence.runTransaction("Locally write mutations","readwrite",x=>{let k=lt(),C=K();return u.cs.getEntries(x,m).next(T=>{k=T,k.forEach((D,V)=>{V.isValidDocument()||(C=C.add(D))})}).next(()=>u.localDocuments.getOverlayedDocuments(x,k)).next(T=>{I=T;const D=[];for(const V of c){const F=Dg(V,I.get(V.key).overlayedDocument);F!=null&&D.push(new Ht(V.key,F,Ul(F.value.mapValue),it.exists(!0)))}return u.mutationQueue.addMutationBatch(x,f,D,c)}).next(T=>{R=T;const D=T.applyToLocalDocumentSet(I,C);return u.documentOverlayCache.saveOverlays(x,T.batchId,D)})}).then(()=>({batchId:R.batchId,changes:Jl(I)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,u){let f=a.Ba[a.currentUser.toKey()];f||(f=new ie(Z)),f=f.insert(c,u),a.Ba[a.currentUser.toKey()]=f}(r,s.batchId,t),await br(r,s.changes),await $s(r.remoteStore)}catch(s){const o=wo(s,"Failed to persist write");t.reject(o)}}async function Pu(n,e){const t=H(n);try{const r=await R_(t.localStore,e);e.targetChanges.forEach((s,o)=>{const a=t.Na.get(o);a&&(te(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?te(a.va):s.removedDocuments.size>0&&(te(a.va),a.va=!1))}),await br(t,r,e)}catch(r){await vr(r)}}function Pc(n,e,t){const r=H(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((o,a)=>{const c=a.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const u=H(a);u.onlineState=c;let f=!1;u.queries.forEach((m,I)=>{for(const R of I.j_)R.Z_(c)&&(f=!0)}),f&&Eo(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function my(n,e,t){const r=H(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),o=s&&s.key;if(o){let a=new ie($.comparator);a=a.insert(o,ke.newNoDocument(o,z.min()));const c=K().add(o),u=new Fs(z.min(),new Map,new ie(Z),a,c);await Pu(r,u),r.Oa=r.Oa.remove(o),r.Na.delete(e),Io(r)}else await Mi(r.localStore,e,!1).then(()=>Li(r,e,t)).catch(vr)}async function gy(n,e){const t=H(n),r=e.batch.batchId;try{const s=await A_(t.localStore,e);ku(t,r,null),Cu(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await br(t,s)}catch(s){await vr(s)}}async function _y(n,e,t){const r=H(n);try{const s=await function(a,c){const u=H(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let m;return u.mutationQueue.lookupMutationBatch(f,c).next(I=>(te(I!==null),m=I.keys(),u.mutationQueue.removeMutationBatch(f,I))).next(()=>u.mutationQueue.performConsistencyCheck(f)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(f,m,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,m)).next(()=>u.localDocuments.getDocuments(f,m))})}(r.localStore,e);ku(r,e,t),Cu(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await br(r,s)}catch(s){await vr(s)}}function Cu(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function ku(n,e,t){const r=H(n);let s=r.Ba[r.currentUser.toKey()];if(s){const o=s.get(e);o&&(t?o.reject(t):o.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Li(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||Nu(n,r)})}function Nu(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(mo(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Io(n))}function Cc(n,e,t){for(const r of t)r instanceof Ru?(n.La.addReference(r.key,e),yy(n,r)):r instanceof Su?(j("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||Nu(n,r.key)):G()}function yy(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(j("SyncEngine","New document in limbo: "+t),n.xa.add(r),Io(n))}function Io(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new $(le.fromString(e)),r=n.qa.next();n.Na.set(r,new ay(t)),n.Oa=n.Oa.insert(t,r),wu(n.remoteStore,new vt(Ge(oo(t.path)),r,"TargetPurposeLimboResolution",eo.oe))}}async function br(n,e,t){const r=H(n),s=[],o=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((c,u)=>{a.push(r.Ka(u,e,t).then(f=>{var m;if((f||t)&&r.isPrimaryClient){const I=f?!f.fromCache:(m=t==null?void 0:t.targetChanges.get(u.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(u.targetId,I?"current":"not-current")}if(f){s.push(f);const I=po.Wi(u.targetId,f);o.push(I)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(u,f){const m=H(u);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",I=>P.forEach(f,R=>P.forEach(R.$i,x=>m.persistence.referenceDelegate.addReference(I,R.targetId,x)).next(()=>P.forEach(R.Ui,x=>m.persistence.referenceDelegate.removeReference(I,R.targetId,x)))))}catch(I){if(!wr(I))throw I;j("LocalStore","Failed to update sequence numbers: "+I)}for(const I of f){const R=I.targetId;if(!I.fromCache){const x=m.os.get(R),k=x.snapshotVersion,C=x.withLastLimboFreeSnapshotVersion(k);m.os=m.os.insert(R,C)}}}(r.localStore,o))}async function vy(n,e){const t=H(n);if(!t.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const r=await gu(t.localStore,e);t.currentUser=e,function(o,a){o.ka.forEach(c=>{c.forEach(u=>{u.reject(new B(N.CANCELLED,a))})}),o.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await br(t,r.hs)}}function wy(n,e){const t=H(n),r=t.Na.get(e);if(r&&r.va)return K().add(r.key);{let s=K();const o=t.Ma.get(e);if(!o)return s;for(const a of o){const c=t.Fa.get(a);s=s.unionWith(c.view.Va)}return s}}function Du(n){const e=H(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Pu.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=wy.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=my.bind(null,e),e.Ca.d_=ny.bind(null,e.eventManager),e.Ca.$a=ry.bind(null,e.eventManager),e}function Ey(n){const e=H(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=gy.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_y.bind(null,e),e}class Ss{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Us(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return b_(this.persistence,new I_,e.initialUser,this.serializer)}Ga(e){return new v_(fo.Zr,this.serializer)}Wa(e){return new k_}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ss.provider={build:()=>new Ss};class ji{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Pc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=vy.bind(null,this.syncEngine),await X_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Z_}()}createDatastore(e){const t=Us(e.databaseInfo.databaseId),r=function(o){return new M_(o)}(e.databaseInfo);return function(o,a,c,u){return new j_(o,a,c,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,o,a,c){return new U_(r,s,o,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Pc(this.syncEngine,t,0),function(){return bc.D()?new bc:new N_}())}createSyncEngine(e,t){return function(s,o,a,c,u,f,m){const I=new cy(s,o,a,c,u,f);return m&&(I.Qa=!0),I}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const o=H(s);j("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await Tr(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}ji.provider={build:()=>new ji};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):ct("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e,t,r,s,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Ce.UNAUTHENTICATED,this.clientId=Ll.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{j("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(j("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Tt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=wo(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function mi(n,e){n.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await gu(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function kc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await by(n);j("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Ac(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Ac(e.remoteStore,s)),n._onlineComponents=e}async function by(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){j("FirestoreClient","Using user provided OfflineComponentProvider");try{await mi(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===N.FAILED_PRECONDITION||s.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;mn("Error using user provided cache. Falling back to memory cache: "+t),await mi(n,new Ss)}}else j("FirestoreClient","Using default OfflineComponentProvider"),await mi(n,new Ss);return n._offlineComponents}async function Vu(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(j("FirestoreClient","Using user provided OnlineComponentProvider"),await kc(n,n._uninitializedComponentsProvider._online)):(j("FirestoreClient","Using default OnlineComponentProvider"),await kc(n,new ji))),n._onlineComponents}function Ay(n){return Vu(n).then(e=>e.syncEngine)}async function Ry(n){const e=await Vu(n),t=e.eventManager;return t.onListen=ly.bind(null,e.syncEngine),t.onUnlisten=dy.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=uy.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=fy.bind(null,e.syncEngine),t}function Sy(n,e,t={}){const r=new Tt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,c,u,f){const m=new Iy({next:R=>{m.Za(),a.enqueueAndForget(()=>ty(o,I));const x=R.docs.has(c);!x&&R.fromCache?f.reject(new B(N.UNAVAILABLE,"Failed to get document because the client is offline.")):x&&R.fromCache&&u&&u.source==="server"?f.reject(new B(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(R)},error:R=>f.reject(R)}),I=new sy(oo(c.path),m,{includeMetadataChanges:!0,_a:!0});return ey(o,I)}(await Ry(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(n,e,t){if(!t)throw new B(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Py(n,e,t,r){if(e===!0&&r===!0)throw new B(N.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Dc(n){if(!$.isDocumentKey(n))throw new B(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function To(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":G()}function dr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new B(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=To(n);throw new B(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new B(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Py("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Mu((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new B(N.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new B(N.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new B(N.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class bo{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Vc({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Vc(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Um;switch(r.type){case"firstParty":return new Gm(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Nc.get(t);r&&(j("ComponentProvider","Removing Datastore"),Nc.delete(t),r.terminate())}(this),Promise.resolve()}}function Cy(n,e,t,r={}){var s;const o=(n=dr(n,bo))._getSettings(),a=`${e}:${t}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&mn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let c,u;if(typeof r.mockUserToken=="string")c=r.mockUserToken,u=Ce.MOCK_USER;else{c=fd(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new B(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ce(f)}n._authCredentials=new Bm(new Ol(c,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ao(this.firestore,e,this._query)}}class Oe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Oe(this.firestore,e,this._key)}}class fr extends Ao{constructor(e,t,r){super(e,t,oo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Oe(this.firestore,null,new $(e))}withConverter(e){return new fr(this.firestore,e,this._path)}}function Ou(n,e,...t){if(n=Le(n),arguments.length===1&&(e=Ll.newId()),xy("doc","path",e),n instanceof bo){const r=le.fromString(e,...t);return Dc(r),new Oe(n,null,new $(r))}{if(!(n instanceof Oe||n instanceof fr))throw new B(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(le.fromString(e,...t));return Dc(r),new Oe(n.firestore,n instanceof fr?n.converter:null,new $(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new yu(this,"async_queue_retry"),this.Vu=()=>{const r=pi();r&&j("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=pi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=pi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new Tt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!wr(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw ct("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=vo.createAndSchedule(this,e,t,r,o=>this.yu(o));return this.Tu.push(s),s}fu(){this.Eu&&G()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class Ro extends bo{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Mc,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Mc(e),this._firestoreClient=void 0,await e}}}function ky(n,e){const t=typeof n=="object"?n:Jc(),r=typeof n=="string"?n:"(default)",s=Bi(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=hd("firestore");o&&Cy(s,...o)}return s}function Lu(n){if(n._terminated)throw new B(N.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Ny(n),n._firestoreClient}function Ny(n){var e,t,r;const s=n._freezeSettings(),o=function(c,u,f,m){return new rg(c,u,f,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Mu(m.experimentalLongPollingOptions),m.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Ty(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this._byteString=e}static fromBase64String(e){try{return new En(Re.fromBase64String(e))}catch(t){throw new B(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new En(Re.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new B(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new B(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new B(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy=/^__.*__$/;class Vy{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Ht(e,this.data,this.fieldMask,t,this.fieldTransforms):new Er(e,this.data,t,this.fieldTransforms)}}function ju(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class ko{constructor(e,t,r,s,o,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new ko(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return xs(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(ju(this.Cu)&&Dy.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class My{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Us(e)}Qu(e,t,r,s=!1){return new ko({Cu:e,methodName:t,qu:r,path:be.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Oy(n){const e=n._freezeSettings(),t=Us(n._databaseId);return new My(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Ly(n,e,t,r,s,o={}){const a=n.Qu(o.merge||o.mergeFields?2:0,e,t,s);$u("Data must be an object, but it was:",a,r);const c=Uu(r,a);let u,f;if(o.merge)u=new Ue(a.fieldMask),f=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const I of o.mergeFields){const R=jy(e,I,t);if(!a.contains(R))throw new B(N.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);Uy(m,R)||m.push(R)}u=new Ue(m),f=a.fieldTransforms.filter(I=>u.covers(I.field))}else u=null,f=a.fieldTransforms;return new Vy(new Me(c),u,f)}class No extends xo{_toFieldTransform(e){return new Pg(e.path,new lr)}isEqual(e){return e instanceof No}}function Fu(n,e){if(Bu(n=Le(n)))return $u("Unsupported field value:",e,n),Uu(n,e);if(n instanceof xo)return function(r,s){if(!ju(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const c of r){let u=Fu(c,s.Lu(a));u==null&&(u={nullValue:"NULL_VALUE"}),o.push(u),a++}return{arrayValue:{values:o}}}(n,e)}return function(r,s){if((r=Le(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Rg(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=_e.fromDate(r);return{timestampValue:As(s.serializer,o)}}if(r instanceof _e){const o=new _e(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:As(s.serializer,o)}}if(r instanceof Po)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof En)return{bytesValue:lu(s.serializer,r._byteString)};if(r instanceof Oe){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:uo(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Co)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw c.Bu("VectorValues must only contain numeric values.");return ao(c.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${To(r)}`)}(n,e)}function Uu(n,e){const t={};return jl(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):An(n,(r,s)=>{const o=Fu(s,e.Mu(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function Bu(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof _e||n instanceof Po||n instanceof En||n instanceof Oe||n instanceof xo||n instanceof Co)}function $u(n,e,t){if(!Bu(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=To(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function jy(n,e,t){if((e=Le(e))instanceof So)return e._internalPath;if(typeof e=="string")return qu(n,e);throw xs("Field path arguments must be of type string or ",n,!1,void 0,t)}const Fy=new RegExp("[~\\*/\\[\\]]");function qu(n,e,t){if(e.search(Fy)>=0)throw xs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new So(...e.split("."))._internalPath}catch{throw xs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function xs(n,e,t,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(o||a)&&(u+=" (found",o&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new B(N.INVALID_ARGUMENT,c+n+u)}function Uy(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,t,r,s,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Oe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new By(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(zu("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class By extends Gu{data(){return super.data()}}function zu(n,e){return typeof e=="string"?qu(n,e):e instanceof So?e._internalPath:e._delegate._internalPath}class $y{convertValue(e,t="none"){switch(zt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return he(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Gt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw G()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return An(e,(s,o)=>{r[s]=this.convertValue(o,t)}),r}convertVectorValue(e){var t,r,s;const o=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>he(a.doubleValue));return new Co(o)}convertGeoPoint(e){return new Po(he(e.latitude),he(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=no(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(or(e));default:return null}}convertTimestamp(e){const t=Rt(e);return new _e(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=le.fromString(e);te(mu(r));const s=new ar(r.get(1),r.get(3)),o=new $(r.popFirst(5));return s.isEqual(t)||ct(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Hu extends Gu{constructor(e,t,r,s,o,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new zy(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(zu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class zy extends Hu{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy(n){n=dr(n,Oe);const e=dr(n.firestore,Ro);return Sy(Lu(e),n._key).then(t=>Jy(e,n,t))}class Wy extends $y{constructor(e){super(),this.firestore=e}convertBytes(e){return new En(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Oe(this.firestore,null,t)}}function Ky(n,e,t){n=dr(n,Oe);const r=dr(n.firestore,Ro),s=qy(n.converter,e);return Qy(r,[Ly(Oy(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,it.none())])}function Qy(n,e){return function(r,s){const o=new Tt;return r.asyncQueue.enqueueAndForget(async()=>py(await Ay(r),s,o)),o.promise}(Lu(n),e)}function Jy(n,e,t){const r=t.docs.get(e._key),s=new Wy(n);return new Hu(n,s,e._key,r,new Gy(t.hasPendingWrites,t.fromCache),e.converter)}function Xy(){return new No("serverTimestamp")}(function(e,t=!0){(function(s){bn=s})(In),fn(new Bt("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),c=new Ro(new $m(r.getProvider("auth-internal")),new Hm(r.getProvider("app-check-internal")),function(f,m){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new B(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ar(f.options.projectId,m)}(a,s),a);return o=Object.assign({useFetchStreams:t},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),It(tc,"4.7.3",e),It(tc,"4.7.3","esm2017")})();const Yy={apiKey:"AIzaSyDDjfbJ4uO_xrI6aqOtcuq5RRBjmhwf1h8",authDomain:"homesteading-haven.firebaseapp.com",projectId:"homesteading-haven",storageBucket:"homesteading-haven.firebasestorage.app",messagingSenderId:"702634367242",appId:"1:702634367242:web:2b70a2b308ccf3686802f3",measurementId:"G-BBLXXNW0Y8"},Wu=Qc(Yy),Do=jm(Wu),Ku=ky(Wu),Oc=new et,Zy=async()=>(Oc.setCustomParameters({prompt:"select_account"}),Wp(Do,Oc)),e0=async()=>{await Sp(Do)},t0=async(n,e)=>{await Ky(Ou(Ku,"saves",n),{...e,updatedAt:Xy()})},n0=async n=>{const e=await Hy(Ou(Ku,"saves",n));if(!e.exists())return null;const t=e.data(),{updatedAt:r,...s}=t;return s},r0=({type:n})=>{switch(n){case"wood":return d.jsx(zh,{className:"w-4 h-4 text-amber-700"});case"food":return d.jsx(Gh,{className:"w-4 h-4 text-yellow-600"});case"stone":return d.jsx(Fc,{className:"w-4 h-4 text-stone-500"});case"iron":return d.jsx(qh,{className:"w-4 h-4 text-slate-400"})}},s0=()=>{const{resources:n,settlers:e,happiness:t,weather:r,isBuilding:s,selectedBuilding:o,setSelectedBuilding:a,day:c,reset:u,season:f,buildings:m,selectedBuildingId:I,selectBuildingId:R,upgradeBuilding:x,demolishBuilding:k,logs:C,nature:T,tickRate:D,setTickRate:V,objectives:F,claimObjective:U,celebrateFestival:J,sendExpedition:W,assignWorker:v,unassignWorker:g,loadSaveData:_,unlockedResearch:w,currentResearch:E,researchProgress:A,startResearch:y,cancelResearch:je}=bt(),[ht,Ar]=ce.useState(!1),[Qe,xt]=ce.useState(!1),[Kt,Rr]=ce.useState(!1),[Sr,$e]=ce.useState(!1),[ue,xr]=ce.useState(null),[Je,Pr]=ce.useState(!1),[Pt,Cr]=ce.useState(!1),qs=M=>{a(o===M&&s?null:M)},Qt=()=>{confirm("Are you sure you want to reset your progress? This cannot be undone.")&&(u(),Ar(!1))},oe=I?m.find(M=>M.id===I):null,Xe=oe?an[oe.type]:null,Ct=oe?oe.level+1:1,ye=oe?Ot[oe.type]:null,xn=oe?e.filter(M=>M.job===oe.id).length:0,Jt=m.find(M=>M.type==="barn"),kr=Xe&&Object.keys(Xe).every(M=>{const L=M;return n[L]>=(Xe[L]||0)*Ct}),Nr=n.wood>=30&&n.food>=40,Pn=n.food>=25&&n.wood>=15,Cn=e.length?Math.round(e.reduce((M,L)=>M+L.hunger,0)/e.length):100,Dr=e.length?Math.round(e.reduce((M,L)=>M+L.energy,0)/e.length):100,Vr=e.filter(M=>M.hunger<30||M.energy<30).length,kn=M=>{const{goal:L}=M;if(L.type==="resource"&&L.key){const ee=n[L.key];return Math.min(ee/L.amount,1)}if(L.type==="building"&&L.key){const ee=m.filter(pe=>pe.type===L.key).length;return Math.min(ee/L.amount,1)}return L.type==="population"?Math.min(e.length/L.amount,1):L.type==="happiness"?Math.min(t/L.amount,1):0},Nn=M=>{const{goal:L}=M;return L.type==="resource"&&L.key?`${Math.floor(n[L.key])}/${L.amount}`:L.type==="building"&&L.key?`${m.filter(pe=>pe.type===L.key).length}/${L.amount}`:L.type==="population"?`${e.length}/${L.amount}`:L.type==="happiness"?`${Math.floor(t)}% / ${L.amount}%`:""},Dn=(ye==null?void 0:ye.workers)||0,fe=Dn?`${xn}/${Dn} workers`:"No workers needed";ce.useEffect(()=>{const M=Rp(Do,async L=>{if(xr(L),L){Cr(!0);const ee=await n0(L.uid);ee&&_(ee),Cr(!1)}});return()=>M()},[_]);const ve=async()=>{await Zy()},Xt=async()=>{await e0(),xr(null)},Mr=async()=>{if(!ue){await ve();return}Pr(!0),await t0(ue.uid,{resources:n,settlers:e,happiness:t,buildings:m,nature:T,logs:C,weather:r,season:f,day:c,objectives:F,unlockedResearch:w,currentResearch:E,researchProgress:A}),Pr(!1)},Or=ce.useMemo(()=>{const M={};return Object.keys(an).forEach(L=>{const ee=Ot[L],pe=Uc[L],re=[];ee.housing&&re.push(`Housing +${ee.housing}`),ee.storage&&re.push(`Storage +${ee.storage} per level`),ee.workers&&re.push(`Needs ${ee.workers} worker${ee.workers>1?"s":""}`),ee.happiness&&re.push(`Happiness +${ee.happiness} per level`),pe&&Object.entries(pe).forEach(([Ee,me])=>{me&&me>0&&re.push(`Produces ${me}/tick ${Ee}`)}),L==="campfire"&&re.push("Cozy spot that boosts happiness and eases bad weather."),L==="watchtower"&&re.push("Mitigates storms, improves expeditions."),L==="fishery"&&re.push("Food income even through winter."),L==="well"&&re.push("Reduces rain/snow mood penalty."),L==="bakery"&&re.push("Extra food and morale."),L==="warehouse"&&re.push("Major storage expansion."),M[L]=re}),M},[]);return d.jsxs("div",{className:"absolute inset-0 pointer-events-none px-3 sm:px-4 py-3 flex flex-col gap-4",children:[d.jsxs("div",{className:"pointer-events-auto flex flex-col gap-3",children:[d.jsxs("div",{className:"flex flex-wrap gap-2 sm:items-center sm:justify-between",children:[d.jsxs("div",{className:"flex flex-wrap gap-2",children:[d.jsx("div",{className:"bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 text-white shadow-xl min-w-[110px]",children:d.jsxs("div",{className:"text-sm font-bold",children:["Day ",c.toFixed(1)]})}),d.jsxs("div",{className:"bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 text-white shadow-xl min-w-[110px]",children:[d.jsx("div",{className:"text-sm font-bold capitalize",children:f}),d.jsxs("div",{className:"text-xs text-gray-300 flex items-center gap-1",children:[r==="rain"&&d.jsx(Sh,{className:"w-4 h-4 text-blue-300"}),r==="snow"&&d.jsx(xh,{className:"w-4 h-4 text-cyan-100"}),r==="sunny"&&d.jsx(Ph,{className:"w-4 h-4 text-amber-300"}),r]})]}),d.jsxs("div",{className:"bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 text-white shadow-xl min-w-[140px]",children:[d.jsxs("div",{className:"text-sm font-bold flex items-center gap-2",children:[d.jsx(Ch,{className:"w-4 h-4 text-green-300"})," Happiness"]}),d.jsxs("div",{className:"text-sm",children:[Math.floor(t),"%"]}),d.jsx("div",{className:"w-full h-2 bg-white/10 rounded-full mt-1 overflow-hidden",children:d.jsx("div",{className:"h-full bg-green-400",style:{width:`${t}%`}})})]})]}),d.jsx("div",{className:"flex flex-wrap gap-2",children:["wood","food","stone","iron"].map(M=>d.jsxs("div",{className:"bg-black/60 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 text-white shadow-xl flex items-center gap-2 min-w-[84px] justify-between",children:[d.jsx(r0,{type:M}),d.jsx("div",{className:"text-sm font-bold",children:n[M]})]},M))})]}),d.jsxs("div",{className:"flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between",children:[d.jsx("div",{className:"flex gap-2",children:d.jsxs("div",{className:"bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 text-white shadow-xl min-w-[140px]",children:[d.jsx("div",{className:"text-sm font-bold",children:"Population"}),d.jsxs("div",{className:"text-sm",children:[e.length," settlers"]}),d.jsxs("div",{className:"text-xs text-gray-300",children:[m.length," buildings"]})]})}),d.jsxs("div",{className:"flex flex-wrap gap-2 justify-end",children:[d.jsxs("div",{className:"bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 text-white shadow-xl min-w-[140px]",children:[d.jsx("div",{className:"text-xs uppercase opacity-70 font-bold tracking-wider",children:"Needs"}),d.jsxs("div",{className:"text-sm",children:["Hunger ",Cn,"% · Energy ",Dr,"%"]}),Vr>0&&d.jsxs("div",{className:"text-xs text-yellow-200 mt-1",children:[Vr," settlers need care"]})]}),d.jsxs("button",{onClick:J,disabled:!Nr,className:`flex items-center gap-2 px-3 py-2 rounded-xl border text-xs sm:text-sm font-semibold transition-colors ${Nr?"bg-pink-600/30 border-pink-400 text-pink-100 hover:bg-pink-600/50":"bg-white/5 border-white/10 text-gray-400 cursor-not-allowed"}`,children:[d.jsx(kh,{className:"w-4 h-4"}),"Festival"]}),d.jsxs("button",{onClick:W,disabled:!Pn,className:`flex items-center gap-2 px-3 py-2 rounded-xl border text-xs sm:text-sm font-semibold transition-colors ${Pn?"bg-indigo-600/30 border-indigo-400 text-indigo-100 hover:bg-indigo-600/50":"bg-white/5 border-white/10 text-gray-400 cursor-not-allowed"}`,children:[d.jsx(Nh,{className:"w-4 h-4"}),"Expedition"]}),d.jsx("button",{onClick:()=>Rr(M=>!M),className:`px-3 py-2 rounded-xl border text-xs sm:text-sm font-semibold transition-colors ${Kt?"bg-emerald-600/30 border-emerald-400 text-emerald-100":"bg-white/5 border-white/10 text-white hover:bg-white/10"}`,children:"Objectives"}),d.jsxs("button",{onClick:()=>$e(M=>!M),className:`px-3 py-2 rounded-xl border text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 ${Sr?"bg-cyan-600/30 border-cyan-400 text-cyan-100":"bg-white/5 border-white/10 text-white hover:bg-white/10"}`,children:[d.jsx(Aa,{className:"w-4 h-4"}),"Research"]}),d.jsxs("button",{onClick:Mr,disabled:Je||Pt,className:`px-3 py-2 rounded-xl border text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 ${Je?"bg-yellow-600/30 border-yellow-400 text-yellow-100":"bg-white/5 border-white/10 text-white hover:bg-white/10"}`,children:[d.jsx(Dh,{className:"w-4 h-4"}),Je?"Saving...":"Save"]}),ue?d.jsxs("button",{onClick:Xt,className:"px-3 py-2 rounded-xl border border-white/10 text-xs sm:text-sm font-semibold flex items-center gap-2 bg-white/10 hover:bg-white/20",children:[d.jsx(Vh,{className:"w-4 h-4"}),ue.displayName||"Logout"]}):d.jsxs("button",{onClick:ve,className:"px-3 py-2 rounded-xl border border-white/10 text-xs sm:text-sm font-semibold flex items-center gap-2 bg-white/5 hover:bg-white/10",children:[d.jsx(Mh,{className:"w-4 h-4"}),"Sign in"]}),d.jsx("button",{onClick:()=>Ar(!ht),className:"bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 text-white shadow-xl hover:bg-white/10 transition-colors",children:d.jsx(Oh,{className:"w-5 h-5"})})]})]})]}),ht&&d.jsxs("div",{className:"absolute top-20 right-3 sm:right-4 bg-black/80 backdrop-blur-md p-4 rounded-xl border border-white/10 text-white shadow-xl pointer-events-auto z-50 flex flex-col gap-2 min-w-[200px]",children:[d.jsx("h3",{className:"font-bold text-lg mb-2",children:"Settings"}),d.jsxs("div",{className:"flex flex-col gap-2",children:[d.jsx("span",{className:"text-xs uppercase opacity-60 font-bold tracking-wider",children:"Game Speed"}),d.jsx("div",{className:"grid grid-cols-3 gap-2",children:[1200,800,500].map(M=>d.jsxs("button",{onClick:()=>V(M),className:`px-3 py-2 rounded-lg text-sm font-semibold border transition-colors ${D===M?"bg-green-600/30 border-green-400 text-green-100":"bg-white/5 border-white/10 hover:bg-white/10"}`,children:[Math.round(1e3/M),"x"]},M))}),d.jsx("div",{className:"text-[11px] text-gray-400",children:"Higher speeds update the world more frequently."})]}),d.jsxs("button",{onClick:Qt,className:"flex items-center gap-2 bg-red-500/20 hover:bg-red-500/40 text-red-200 px-4 py-2 rounded-lg transition-colors w-full text-left",children:[d.jsx(Lh,{className:"w-4 h-4"}),"Reset Progress"]}),d.jsx("div",{className:"text-xs text-gray-400 mt-2",children:"v0.2.0 Beta"})]}),Sr&&d.jsxs("div",{className:"pointer-events-auto w-full max-w-4xl bg-black/85 backdrop-blur-md p-4 rounded-2xl border border-cyan-400/30 text-white shadow-2xl mx-auto mt-2 sm:mt-4",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(Aa,{className:"w-5 h-5 text-cyan-300"}),d.jsx("h3",{className:"text-lg font-bold",children:"Research"}),E&&d.jsx("span",{className:"text-xs text-cyan-200",children:"In progress…"})]}),d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 mt-3",children:gi.map(M=>{const L=w.includes(M.id),ee=E===M.id,pe=((Jt==null?void 0:Jt.level)||0)>=M.barnLevelReq,re=Object.keys(M.cost).every(me=>n[me]>=(M.cost[me]||0)),Ee=L||ee||!pe||!re;return d.jsxs("div",{className:`p-3 rounded-xl border ${L?"border-green-400/40 bg-green-900/10":"border-white/10 bg-white/5"} flex flex-col gap-2`,children:[d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("div",{children:[d.jsx("div",{className:"font-bold",children:M.name}),d.jsx("div",{className:"text-xs text-gray-300",children:M.description})]}),L&&d.jsx(Ra,{className:"w-5 h-5 text-green-300"})]}),d.jsxs("div",{className:"text-xs text-gray-200 flex flex-wrap gap-2",children:[d.jsxs("span",{className:"px-2 py-1 rounded-full bg-white/10 border border-white/10",children:["Barn lvl ",M.barnLevelReq]}),Object.entries(M.cost).map(([me,Yt])=>d.jsxs("span",{className:`px-2 py-1 rounded-full border ${n[me]<Yt?"border-red-400/60 text-red-200":"border-white/20 text-white"}`,children:[Yt," ",me]},me))]}),ee&&d.jsx("div",{className:"w-full h-2 bg-white/10 rounded-full overflow-hidden",children:d.jsx("div",{className:"h-full bg-cyan-400",style:{width:`${Math.min(100,A*100)}%`}})}),d.jsxs("div",{className:"flex justify-between items-center",children:[d.jsx("span",{className:"text-xs text-gray-300",children:L?"Unlocked":ee?"Researching…":pe?re?"Ready to research":"Need resources":"Barn level too low"}),ee?d.jsx("button",{onClick:je,className:"text-xs px-3 py-1 rounded-lg border border-cyan-400 text-cyan-100 hover:bg-cyan-500/20",children:"Cancel"}):d.jsx("button",{onClick:()=>y(M.id),disabled:Ee,className:`text-xs px-3 py-1 rounded-lg border ${Ee?"border-white/10 text-gray-400 opacity-60 cursor-not-allowed":"border-cyan-400 text-cyan-100 hover:bg-cyan-500/20"}`,children:L?"Done":"Research"})]})]},M.id)})})]}),d.jsx("div",{className:"absolute bottom-32 left-3 sm:left-4 flex flex-col gap-2 w-[300px] pointer-events-none opacity-80",children:C.slice(0,5).map(M=>d.jsx("div",{className:`
                    p-2 rounded-lg text-sm font-medium backdrop-blur-md shadow-lg border border-white/5 animate-in slide-in-from-left-4 fade-in duration-300
                    ${M.type==="success"?"bg-green-900/60 text-green-100":M.type==="warning"?"bg-yellow-900/60 text-yellow-100":M.type==="danger"?"bg-red-900/60 text-red-100":"bg-gray-900/60 text-gray-100"}
                `,children:M.message},M.id))}),oe&&d.jsxs("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-white shadow-2xl pointer-events-auto z-40 min-w-[300px] max-w-[90vw]",children:[d.jsxs("div",{className:"flex justify-between items-start mb-4",children:[d.jsxs("div",{children:[d.jsx("h3",{className:"font-bold text-xl capitalize",children:oe.type}),d.jsxs("p",{className:"text-gray-400 text-sm",children:["Level ",oe.level]})]}),d.jsx("button",{onClick:()=>R(null),className:"text-gray-400 hover:text-white",children:d.jsx(jh,{className:"w-5 h-5"})})]}),d.jsxs("div",{className:"flex flex-col gap-3",children:[ye&&d.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs bg-white/5 border border-white/10 rounded-xl p-3",children:[ye.housing&&d.jsxs("div",{className:"text-gray-200",children:["Housing: +",ye.housing]}),ye.storage&&d.jsxs("div",{className:"text-gray-200",children:["Storage: +",ye.storage*oe.level]}),ye.happiness&&d.jsxs("div",{className:"text-gray-200",children:["Happiness: +",(ye.happiness*oe.level).toFixed(1)]}),ye.workers!==void 0&&d.jsx("div",{className:"text-gray-200",children:fe})]}),(ye==null?void 0:ye.workers)&&d.jsxs("div",{className:"flex items-center justify-between bg-white/5 border border-white/10 rounded-xl p-3 text-sm",children:[d.jsxs("div",{children:[d.jsx("div",{className:"font-semibold",children:"Workers"}),d.jsx("div",{className:"text-gray-300",children:fe})]}),d.jsxs("div",{className:"flex gap-2",children:[d.jsx("button",{onClick:()=>v(oe.id),className:"px-3 py-2 rounded-lg bg-green-600/30 hover:bg-green-600/50 border border-green-400 text-green-50 text-xs",children:"+ Assign"}),d.jsx("button",{onClick:()=>g(oe.id),className:"px-3 py-2 rounded-lg bg-yellow-600/30 hover:bg-yellow-600/50 border border-yellow-400 text-yellow-50 text-xs",children:"- Unassign"})]})]}),d.jsxs("button",{onClick:()=>x(oe.id),disabled:!kr,className:`
                flex items-center justify-between p-3 rounded-xl border border-white/10 transition-all
                ${kr?"bg-green-600/20 hover:bg-green-600/40 border-green-500/50":"bg-gray-800/50 opacity-50 cursor-not-allowed"}
              `,children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(Fh,{className:"w-5 h-5 text-green-400"}),d.jsxs("div",{className:"text-left",children:[d.jsx("div",{className:"font-bold",children:"Upgrade"}),d.jsx("div",{className:"text-xs text-gray-300",children:"Increases efficiency"})]})]}),d.jsx("div",{className:"flex flex-col items-end text-xs",children:Xe&&Object.entries(Xe).map(([M,L])=>d.jsxs("div",{className:n[M]<L*Ct?"text-red-400":"text-gray-300",children:[L*Ct," ",M.charAt(0).toUpperCase()]},M))})]}),d.jsxs("button",{onClick:()=>k(oe.id),className:"flex items-center gap-2 p-3 rounded-xl bg-red-500/10 hover:bg-red-500/30 border border-red-500/30 text-red-200 transition-colors",children:[d.jsx(Uh,{className:"w-5 h-5"}),"Demolish Building"]})]})]}),Kt&&d.jsxs("div",{className:"pointer-events-auto w-full max-w-4xl bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-white shadow-2xl mx-auto mt-2 sm:mt-4",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(Bh,{className:"w-5 h-5 text-amber-300"}),d.jsx("h3",{className:"text-lg font-bold",children:"Objectives"}),Pt&&d.jsx("span",{className:"text-xs text-gray-300",children:"Loading save..."})]}),d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 mt-2",children:F.map(M=>{const L=kn(M),ee=Nn(M),pe=M.complete,re=M.claimed;return d.jsxs("div",{className:`p-3 rounded-xl border ${pe?"border-green-400/40 bg-green-900/20":"border-white/10 bg-white/5"} shadow-inner`,children:[d.jsxs("div",{className:"flex justify-between items-start",children:[d.jsxs("div",{children:[d.jsx("div",{className:"font-bold",children:M.title}),d.jsx("div",{className:"text-xs text-gray-300",children:M.description})]}),pe?d.jsx(Ra,{className:"w-5 h-5 text-green-300"}):null]}),d.jsx("div",{className:"mt-2 h-2 bg-white/10 rounded-full overflow-hidden",children:d.jsx("div",{className:`h-full ${pe?"bg-green-400":"bg-blue-400"}`,style:{width:`${L*100}%`}})}),d.jsxs("div",{className:"text-[11px] text-gray-300 mt-1",children:["Progress: ",ee]}),d.jsxs("div",{className:"flex items-center justify-between mt-2",children:[d.jsxs("div",{className:"flex items-center gap-1 text-xs text-amber-200",children:[d.jsx($h,{className:"w-3 h-3"}),Object.entries(M.reward).map(([Ee,me])=>`${me} ${Ee[0].toUpperCase()}`).join(", ")]}),pe&&!re&&d.jsx("button",{onClick:()=>U(M.id),className:"px-3 py-1 rounded-lg bg-green-600/60 hover:bg-green-600 text-sm font-semibold",children:"Claim"}),re&&d.jsx("span",{className:"text-green-300 text-xs",children:"Claimed"})]})]},M.id)})})]}),d.jsxs("div",{className:"pointer-events-none w-full pb-4 flex flex-col gap-3",children:[d.jsx("div",{className:"pointer-events-auto fixed bottom-4 left-0 right-0 flex justify-center z-40 px-3 sm:px-0",children:d.jsxs("button",{onClick:()=>xt(M=>!M),className:`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold shadow-lg transition-colors w-full max-w-xs ${Qe?"bg-yellow-500/20 border-yellow-300 text-yellow-100":"bg-black/70 border-white/10 text-white hover:bg-white/10"}`,children:[d.jsx(Fc,{className:"w-4 h-4"}),Qe?"Close Build":"Build"]})}),Qe&&d.jsxs("div",{className:"pointer-events-auto mx-auto w-full max-w-5xl bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-2xl mt-12",children:[s&&o&&d.jsxs("div",{className:"mb-3 bg-yellow-500/15 border border-yellow-400/40 text-yellow-100 px-4 py-2 rounded-lg text-sm font-semibold",children:["Placing ",o,"... tap ground to confirm."]}),d.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[320px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-white/20",children:Object.keys(an).map(M=>{const L=an[M],ee=Or[M]||[],pe=o===M,re=Object.keys(L).every(Ee=>n[Ee]>=(L[Ee]||0));return d.jsxs("button",{onClick:()=>qs(M),disabled:!re,className:`
                      text-left flex flex-col gap-2 p-3 rounded-xl transition-all duration-200 border
                      ${pe?"bg-yellow-600/20 border-yellow-400/60 ring-2 ring-yellow-400/70 text-white":"bg-white/5 border-white/10 hover:bg-white/10 text-gray-200"}
                      ${re?"active:scale-95":"opacity-50 cursor-not-allowed grayscale"}
                    `,children:[d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsx("span",{className:"capitalize font-bold text-base",children:M.replace(/([A-Z])/g," $1").trim()}),d.jsx("span",{className:"text-[11px] px-2 py-1 rounded-full bg-white/10 border border-white/10",children:re?"Build":"Need resources"})]}),d.jsx("div",{className:"flex flex-wrap gap-2 text-xs text-gray-200",children:Object.entries(L).map(([Ee,me])=>d.jsxs("span",{className:`px-2 py-1 rounded-full border ${n[Ee]<me?"border-red-400/60 text-red-200":"border-white/20 text-white"}`,children:[me," ",Ee]},Ee))}),d.jsx("div",{className:"flex flex-col gap-1 text-xs text-gray-300",children:ee.length?ee.map((Ee,me)=>d.jsxs("div",{className:"flex items-start gap-2",children:[d.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-white/40 mt-1"}),d.jsx("span",{children:Ee})]},me)):d.jsx("span",{className:"text-gray-400",children:"No special benefits."})})]},M)})})]})]})]})},Lc=({type:n,level:e=1,selected:t,ghost:r,isValid:s=!0,onClick:o})=>{const a=ce.useMemo(()=>{if(r&&!s)return"#ff0000";switch(n){case"cabin":return"#8B4513";case"farm":return"#DAA520";case"lumberMill":return"#556B2F";case"mine":return"#696969";case"warehouse":return"#A0522D";case"bakery":return"#d97706";case"well":return"#3b82f6";case"campfire":return"#f97316";case"watchtower":return"#9ca3af";case"fishery":return"#0ea5e9";default:return"#ffffff"}},[n,r,s]),c=r?.5:1,u=r;return d.jsxs("group",{onClick:o,children:[n==="barn"&&d.jsxs(d.Fragment,{children:[d.jsxs("mesh",{position:[0,1.5,0],castShadow:!0,receiveShadow:!0,children:[d.jsx("boxGeometry",{args:[3,3,2.5]}),d.jsx("meshStandardMaterial",{color:"#b45309",roughness:.7,transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[0,1.6,1.3],castShadow:!0,children:[d.jsx("boxGeometry",{args:[2.8,.2,.2]}),d.jsx("meshStandardMaterial",{color:"#fbbf24",emissive:"#f59e0b",emissiveIntensity:r?0:.2,transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[0,3,0],rotation:[0,0,Math.PI/10],castShadow:!0,children:[d.jsx("boxGeometry",{args:[3.4,.25,3]}),d.jsx("meshStandardMaterial",{color:"#78350f",roughness:.5,transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[0,3.2,0],rotation:[0,Math.PI,-Math.PI/10],castShadow:!0,children:[d.jsx("boxGeometry",{args:[3.4,.25,3]}),d.jsx("meshStandardMaterial",{color:"#652b0b",roughness:.5,transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[0,.8,1.31],castShadow:!0,children:[d.jsx("boxGeometry",{args:[1.2,1.6,.1]}),d.jsx("meshStandardMaterial",{color:"#f8fafc",transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[0,1.6,1.32],castShadow:!0,children:[d.jsx("boxGeometry",{args:[.6,.4,.1]}),d.jsx("meshStandardMaterial",{color:"#e2e8f0",transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[0,2.4,1.26],castShadow:!0,children:[d.jsx("boxGeometry",{args:[.7,.5,.1]}),d.jsx("meshStandardMaterial",{color:"#bfdbfe",emissive:"#60a5fa",emissiveIntensity:r?0:.5,transparent:u,opacity:c})]}),e>=2&&d.jsxs("mesh",{position:[2,1.5,-1],castShadow:!0,children:[d.jsx("cylinderGeometry",{args:[.5,.6,3,12]}),d.jsx("meshStandardMaterial",{color:"#d4d4d8",transparent:u,opacity:c})]}),e>=3&&d.jsxs("mesh",{position:[-2,1.7,1],castShadow:!0,children:[d.jsx("cylinderGeometry",{args:[.6,.7,3.4,12]}),d.jsx("meshStandardMaterial",{color:"#c084fc",emissive:"#a855f7",emissiveIntensity:r?0:.6,transparent:u,opacity:c})]})]}),n!=="farm"&&d.jsxs("mesh",{position:[0,1,0],castShadow:!0,receiveShadow:!0,children:[d.jsx("boxGeometry",{args:[2,2,2]}),d.jsx("meshStandardMaterial",{color:a,transparent:u,opacity:c})]}),n==="cabin"&&d.jsxs(d.Fragment,{children:[d.jsxs("mesh",{position:[0,1.2,0],castShadow:!0,receiveShadow:!0,children:[d.jsx("boxGeometry",{args:[2.2,1.6,2.2]}),d.jsx("meshStandardMaterial",{color:"#8b5a2b",roughness:.8,transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[0,.6,1.11],castShadow:!0,children:[d.jsx("boxGeometry",{args:[.6,1,.1]}),d.jsx("meshStandardMaterial",{color:"#5b3314",transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[-.9,1.1,0],castShadow:!0,children:[d.jsx("boxGeometry",{args:[.1,.6,.6]}),d.jsx("meshStandardMaterial",{color:"#93c5fd",emissive:"#60a5fa",emissiveIntensity:r?0:.4,transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[.9,1.1,0],castShadow:!0,children:[d.jsx("boxGeometry",{args:[.1,.6,.6]}),d.jsx("meshStandardMaterial",{color:"#93c5fd",emissive:"#60a5fa",emissiveIntensity:r?0:.4,transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[0,2.4,0],rotation:[0,0,Math.PI/9],castShadow:!0,children:[d.jsx("boxGeometry",{args:[2.4,.2,2.6]}),d.jsx("meshStandardMaterial",{color:"#4a3424",roughness:.6,transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[0,2.6,0],rotation:[0,Math.PI,-Math.PI/9],castShadow:!0,children:[d.jsx("boxGeometry",{args:[2.4,.2,2.6]}),d.jsx("meshStandardMaterial",{color:"#3b2a1c",roughness:.6,transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[.7,2.8,.7],castShadow:!0,children:[d.jsx("boxGeometry",{args:[.4,.8,.4]}),d.jsx("meshStandardMaterial",{color:"#9ca3af",roughness:.4,transparent:u,opacity:c})]})]}),n==="farm"&&d.jsxs(d.Fragment,{children:[d.jsxs("mesh",{position:[0,.1,0],rotation:[-Math.PI/2,0,0],receiveShadow:!0,children:[d.jsx("planeGeometry",{args:[3,3]}),d.jsx("meshStandardMaterial",{color:"#8b5a2b",transparent:u,opacity:c})]}),[-1,-.3,.4,1.1].map((f,m)=>d.jsxs("mesh",{position:[f,.25,0],receiveShadow:!0,castShadow:!0,children:[d.jsx("boxGeometry",{args:[.4,.2,2.6]}),d.jsx("meshStandardMaterial",{color:"#a16207",roughness:.9,transparent:u,opacity:c})]},m)),Array.from({length:8}).map((f,m)=>{const I=-1.2+m%4*.8,R=-1+Math.floor(m/4)*1.2;return d.jsxs("mesh",{position:[I,.65,R],castShadow:!0,children:[d.jsx("coneGeometry",{args:[.18,.7,6]}),d.jsx("meshStandardMaterial",{color:"#22c55e",emissive:"#16a34a",emissiveIntensity:r?0:.3,transparent:u,opacity:c})]},`crop-${m}`)}),d.jsxs("mesh",{position:[0,1,1.4],castShadow:!0,children:[d.jsx("boxGeometry",{args:[1.4,1.2,.8]}),d.jsx("meshStandardMaterial",{color:"#b45309",roughness:.8,transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[0,1.8,1.4],castShadow:!0,children:[d.jsx("boxGeometry",{args:[1.6,.3,1]}),d.jsx("meshStandardMaterial",{color:"#92400e",roughness:.7,transparent:u,opacity:c})]}),[[-1.6,-1.6],[1.6,-1.6],[-1.6,1.6],[1.6,1.6]].map(([f,m],I)=>d.jsxs("mesh",{position:[f,.6,m],castShadow:!0,children:[d.jsx("boxGeometry",{args:[.15,1.2,.15]}),d.jsx("meshStandardMaterial",{color:"#d97706",transparent:u,opacity:c})]},`fence-${I}`))]}),n==="mine"&&d.jsxs("mesh",{position:[.8,.5,.8],castShadow:!0,children:[d.jsx("boxGeometry",{args:[1,1,1]}),d.jsx("meshStandardMaterial",{color:"#2F2F2F",transparent:u,opacity:c})]}),n==="lumberMill"&&d.jsxs("mesh",{position:[0,2.2,0],rotation:[0,0,Math.PI/2],castShadow:!0,children:[d.jsx("cylinderGeometry",{args:[.8,.8,2.2,8]}),d.jsx("meshStandardMaterial",{color:"#DEB887",transparent:u,opacity:c})]}),n==="bakery"&&d.jsxs(d.Fragment,{children:[d.jsxs("mesh",{position:[0,2.3,0],castShadow:!0,children:[d.jsx("cylinderGeometry",{args:[.9,.9,1.2,12]}),d.jsx("meshStandardMaterial",{color:"#fbbf24",transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[.6,2.9,0],castShadow:!0,children:[d.jsx("coneGeometry",{args:[.4,.6,6]}),d.jsx("meshStandardMaterial",{color:"#7c2d12",transparent:u,opacity:c})]})]}),n==="well"&&d.jsxs(d.Fragment,{children:[d.jsxs("mesh",{position:[0,1.1,0],castShadow:!0,children:[d.jsx("cylinderGeometry",{args:[.9,.9,1.2,16]}),d.jsx("meshStandardMaterial",{color:"#60a5fa",transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[0,1.7,0],castShadow:!0,children:[d.jsx("torusGeometry",{args:[.8,.12,8,24]}),d.jsx("meshStandardMaterial",{color:"#1d4ed8",transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[0,2.3,0],castShadow:!0,children:[d.jsx("cylinderGeometry",{args:[.12,.12,.8,8]}),d.jsx("meshStandardMaterial",{color:"#9ca3af",transparent:u,opacity:c})]})]}),n==="campfire"&&d.jsxs(d.Fragment,{children:[d.jsxs("mesh",{position:[0,.8,0],castShadow:!0,children:[d.jsx("cylinderGeometry",{args:[.6,.7,.4,10]}),d.jsx("meshStandardMaterial",{color:"#92400e",transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[0,1.1,0],children:[d.jsx("coneGeometry",{args:[.5,.6,10]}),d.jsx("meshStandardMaterial",{color:"#f97316",emissive:"#fb923c",emissiveIntensity:r?0:1.2,transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[0,.5,0],rotation:[Math.PI/2,0,0],children:[d.jsx("torusGeometry",{args:[1,.1,8,24]}),d.jsx("meshStandardMaterial",{color:"#57534e",transparent:u,opacity:c})]})]}),n==="watchtower"&&d.jsxs(d.Fragment,{children:[d.jsxs("mesh",{position:[0,2,0],castShadow:!0,children:[d.jsx("cylinderGeometry",{args:[.7,.7,4,8]}),d.jsx("meshStandardMaterial",{color:"#9ca3af",transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[0,4.2,0],castShadow:!0,children:[d.jsx("boxGeometry",{args:[2.2,.4,2.2]}),d.jsx("meshStandardMaterial",{color:"#4b5563",transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[0,4.8,0],castShadow:!0,children:[d.jsx("coneGeometry",{args:[1.6,1,6]}),d.jsx("meshStandardMaterial",{color:"#1f2937",transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[1,1.2,1],rotation:[0,0,Math.PI/2],children:[d.jsx("boxGeometry",{args:[.2,2,.5]}),d.jsx("meshStandardMaterial",{color:"#d1d5db",transparent:u,opacity:c})]})]}),n==="fishery"&&d.jsxs("group",{children:[d.jsxs("mesh",{position:[0,1,0],castShadow:!0,children:[d.jsx("boxGeometry",{args:[2.5,1.6,2]}),d.jsx("meshStandardMaterial",{color:"#0ea5e9",transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[0,2.3,0],castShadow:!0,children:[d.jsx("boxGeometry",{args:[2.7,.4,2.2]}),d.jsx("meshStandardMaterial",{color:"#075985",transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[1.6,.5,0],castShadow:!0,children:[d.jsx("boxGeometry",{args:[1.5,.3,1]}),d.jsx("meshStandardMaterial",{color:"#7c3aed",transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[0,.2,0],rotation:[-Math.PI/2,0,0],children:[d.jsx("planeGeometry",{args:[3,3]}),d.jsx("meshStandardMaterial",{color:"#38bdf8",transparent:!0,opacity:.3})]})]}),t&&!r&&d.jsxs("mesh",{position:[0,.1,0],rotation:[-Math.PI/2,0,0],children:[d.jsx("ringGeometry",{args:[1.5,1.7,32]}),d.jsx("meshBasicMaterial",{color:"#00ff00"})]}),!r&&d.jsx(dn,{position:[0,3,0],center:!0,distanceFactor:15,children:d.jsxs("div",{className:"bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm whitespace-nowrap",children:["Lvl ",e]})})]})},i0=({id:n,position:e,scale:t=1})=>{const{addResource:r,removeNature:s,isBuilding:o,season:a}=bt(),[c,u]=ce.useState(!1),[f,m]=ce.useState(0),[I,R]=ce.useState(0),x=()=>{switch(a){case"spring":return c?"#2e8b2e":"#228B22";case"summer":return c?"#008000":"#006400";case"autumn":return c?"#CD853F":"#D2691E";case"winter":return c?"#F0FFFF":"#E0FFFF";default:return c?"#2e8b2e":"#228B22"}},k=C=>{C.stopPropagation(),r("wood",10),m(Date.now());const T=I+1;R(T),T>=5&&s(n)};return d.jsxs("group",{position:e,scale:[t*(c?1.1:1),t*(c?1.1:1),t*(c?1.1:1)],onPointerOver:()=>u(!0),onPointerOut:()=>u(!1),onClick:k,children:[d.jsxs("mesh",{position:[0,.75,0],castShadow:!0,children:[d.jsx("cylinderGeometry",{args:[.2,.3,1.5,6]}),d.jsx("meshStandardMaterial",{color:c?"#6d4c3d":"#5C4033"})]}),d.jsxs("mesh",{position:[0,2,0],castShadow:!0,children:[d.jsx("coneGeometry",{args:[1,2,8]}),d.jsx("meshStandardMaterial",{color:x()})]}),d.jsxs("mesh",{position:[0,3,0],castShadow:!0,children:[d.jsx("coneGeometry",{args:[.8,1.5,8]}),d.jsx("meshStandardMaterial",{color:x()})]}),c&&!o&&d.jsx(dn,{position:[0,4,0],center:!0,distanceFactor:10,children:d.jsxs("div",{className:"bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm whitespace-nowrap pointer-events-none flex flex-col items-center",children:[d.jsx("span",{children:"Gather Wood (+10)"}),d.jsxs("span",{className:"text-[10px] text-gray-300",children:["(",5-I," more to clear)"]})]})}),Date.now()-f<1e3&&d.jsx(dn,{position:[0,2,0],center:!0,distanceFactor:10,zIndexRange:[100,0],children:d.jsx("div",{className:"text-green-400 font-bold text-sm animate-bounce pointer-events-none",children:"+10 Wood"})})]})},o0=({id:n,position:e,scale:t=1})=>{const{addResource:r,removeNature:s,isBuilding:o,season:a}=bt(),[c,u]=ce.useState(!1),[f,m]=ce.useState(0),[I,R]=ce.useState(0),x=()=>a==="winter"?c?"#cbd5e1":"#e2e8f0":a==="autumn"?c?"#b0a18f":"#8b7c6a":c?"#9ca3af":"#6b7280",k=C=>{C.stopPropagation(),r("stone",5),Math.random()>.7&&r("iron",2),m(Date.now());const T=I+1;R(T),T>=5&&s(n)};return d.jsxs("group",{position:e,scale:[t*(c?1.1:1),t*(c?1.1:1),t*(c?1.1:1)],rotation:[0,Math.random()*Math.PI,0],onPointerOver:()=>u(!0),onPointerOut:()=>u(!1),onClick:k,children:[d.jsxs("mesh",{castShadow:!0,receiveShadow:!0,children:[d.jsx("dodecahedronGeometry",{args:[.8,0]}),d.jsx("meshStandardMaterial",{color:x(),flatShading:!0})]}),c&&!o&&d.jsx(dn,{position:[0,1.5,0],center:!0,distanceFactor:10,children:d.jsxs("div",{className:"bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm whitespace-nowrap pointer-events-none flex flex-col items-center",children:[d.jsx("span",{children:"Gather Stone (+5)"}),d.jsxs("span",{className:"text-[10px] text-gray-300",children:["(",5-I," more to clear)"]})]})}),Date.now()-f<1e3&&d.jsx(dn,{position:[0,1,0],center:!0,distanceFactor:10,zIndexRange:[100,0],children:d.jsx("div",{className:"text-gray-300 font-bold text-sm animate-bounce pointer-events-none",children:"+5 Stone"})})]})},a0=()=>{const n=bt(e=>e.nature);return d.jsx("group",{children:n.map(e=>e.type==="tree"?d.jsx(i0,{id:e.id,position:e.position,scale:e.scale},e.id):d.jsx(o0,{id:e.id,position:e.position,scale:e.scale},e.id))})},c0=({settler:n})=>{const e=ce.useRef(null);return yh(t=>{e.current&&(e.current.position.y=Math.sin(t.clock.elapsedTime*5)*.1,n.state==="walking"&&n.targetPosition&&e.current.lookAt(n.targetPosition[0],0,n.targetPosition[2]))}),d.jsxs("group",{position:n.position,ref:e,children:[d.jsxs("mesh",{position:[0,.5,0],castShadow:!0,children:[d.jsx("capsuleGeometry",{args:[.2,.6,4,8]}),d.jsx("meshStandardMaterial",{color:"#3b82f6"})]}),d.jsxs("mesh",{position:[0,.9,0],castShadow:!0,children:[d.jsx("sphereGeometry",{args:[.2,16,16]}),d.jsx("meshStandardMaterial",{color:"#ffdbac"})]}),d.jsx(dn,{position:[0,1.4,0],center:!0,distanceFactor:10,children:d.jsx("div",{className:"bg-black/50 text-white text-[10px] px-1 rounded backdrop-blur-sm whitespace-nowrap pointer-events-none",children:n.name})}),d.jsxs("mesh",{position:[0,.01,0],rotation:[-Math.PI/2,0,0],children:[d.jsx("circleGeometry",{args:[.25,16]}),d.jsx("meshBasicMaterial",{color:"black",opacity:.3,transparent:!0})]})]})},l0=()=>{const{buildings:n,nature:e,selectedBuilding:t,selectedBuildingId:r,isBuilding:s,addBuilding:o,selectBuildingId:a,setSelectedBuilding:c,season:u,settlers:f}=bt(),[m,I]=ce.useState(null),[R,x]=ce.useState(!0),k=2,C=()=>{switch(u){case"spring":return"#5C8C46";case"summer":return"#4A7036";case"autumn":return"#8B7355";case"winter":return"#F0F8FF";default:return"#5C8C46"}},T=U=>{if(n.some(E=>E.position[0]===U[0]&&E.position[2]===U[2]))return!0;const W=U[0]-.8,v=U[0]+.8,g=U[2]-.8,_=U[2]+.8;return e.some(E=>E.position[0]>W&&E.position[0]<v&&E.position[2]>g&&E.position[2]<_)},D=U=>{if(!s||!t){m&&I(null);return}const J=Math.round(U.point.x/k)*k,W=Math.round(U.point.z/k)*k,v=[J,0,W];(!m||m[0]!==J||m[2]!==W)&&(I(v),x(!T(v)))},V=U=>{s&&t&&m?(U.stopPropagation(),R&&o(t,m)):(a(null),c(null))},F=(U,J)=>{s||(U.stopPropagation(),a(J))};return d.jsxs("group",{children:[d.jsx(a0,{}),d.jsxs("mesh",{rotation:[-Math.PI/2,0,0],position:[0,-.1,0],receiveShadow:!0,onPointerMove:D,onClick:V,children:[d.jsx("planeGeometry",{args:[100,100]}),d.jsx("meshStandardMaterial",{color:C()})]}),d.jsx("gridHelper",{args:[100,50,16777215,16777215],position:[0,.01,0],"material-opacity":.2,"material-transparent":!0}),n.map(U=>d.jsx("group",{position:U.position,children:d.jsx(Lc,{type:U.type,level:U.level,selected:r===U.id,onClick:J=>F(J,U.id)})},U.id)),f.map(U=>d.jsx(c0,{settler:U},U.id)),s&&t&&m&&d.jsx("group",{position:m,children:d.jsx(Lc,{type:t,ghost:!0,isValid:R})})]})},u0=()=>{const n=bt(t=>t.tick),e=bt(t=>t.tickRate);return ce.useEffect(()=>{const t=setInterval(()=>{n()},e);return()=>clearInterval(t)},[n,e]),null},h0=()=>{const{day:n,weather:e}=bt(),t=ce.useRef(null),r=n%1,s=[Math.sin(r*Math.PI*2)*100,Math.cos(r*Math.PI*2+Math.PI)*100,20],o=s[1]/100;let a=Math.max(0,o);e!=="sunny"&&(a*=.5);const c=Math.max(.1,a*.5);let u=a>.2?"#87CEEB":"#050510";return e==="rain"&&(u="#708090"),e==="snow"&&(u="#E0FFFF"),e!=="sunny"&&a<.2&&(u="#050510"),d.jsxs(d.Fragment,{children:[d.jsx(vh,{sunPosition:s,turbidity:e!=="sunny"?10:.5,rayleigh:e!=="sunny"?.1:.5+(1-a)*.5,mieCoefficient:.005,mieDirectionalG:.7}),a<.2&&e==="sunny"&&d.jsx(wh,{radius:100,depth:50,count:5e3,factor:4,saturation:0,fade:!0,speed:1}),a<.3&&e==="sunny"&&d.jsx(si,{count:100,scale:50,size:4,speed:.4,opacity:.7,color:"#ffff00",position:[0,5,0]}),e==="rain"&&d.jsxs(d.Fragment,{children:[d.jsx(si,{count:2e3,scale:[50,20,50],size:2,speed:2,opacity:.6,color:"#aaaaaa",position:[0,10,0]}),d.jsx(Yr,{position:[-10,15,-10],opacity:.5,speed:.2}),d.jsx(Yr,{position:[10,15,10],opacity:.5,speed:.2})]}),e==="snow"&&d.jsxs(d.Fragment,{children:[d.jsx(si,{count:2e3,scale:[50,20,50],size:4,speed:.5,opacity:.8,color:"#ffffff",position:[0,10,0]}),d.jsx(Yr,{position:[-10,15,-10],opacity:.3,speed:.1,color:"#ffffff"}),d.jsx(Yr,{position:[10,15,10],opacity:.3,speed:.1,color:"#ffffff"})]}),d.jsx(Eh,{preset:e==="sunny"?"forest":"city",background:!1}),d.jsx("ambientLight",{intensity:c,color:e==="snow"?"#E0FFFF":a<.2?"#1a1a2e":"#ffffff"}),d.jsx("directionalLight",{ref:t,position:s,intensity:a*2,castShadow:!0,"shadow-mapSize":[2048,2048],"shadow-bias":-1e-4,children:d.jsx("orthographicCamera",{attach:"shadow-camera",args:[-50,50,50,-50]})}),d.jsx("fog",{attach:"fog",args:[u,10,80]})]})};function d0(){return d.jsxs("div",{className:"relative w-full h-full bg-slate-900 touch-none",children:[d.jsx(u0,{}),d.jsx(Ih,{shadows:!0,camera:{position:[20,20,20],fov:50},dpr:[1,2],gl:{antialias:!1},children:d.jsxs(ce.Suspense,{fallback:d.jsxs("mesh",{position:[0,0,0],children:[d.jsx("boxGeometry",{args:[1,1,1]}),d.jsx("meshStandardMaterial",{color:"orange",wireframe:!0})]}),children:[d.jsx(h0,{}),d.jsx(l0,{}),d.jsx(Th,{makeDefault:!0,maxPolarAngle:Math.PI/2.2,minDistance:10,maxDistance:80,enableDamping:!0,dampingFactor:.05}),d.jsxs(Hh,{children:[d.jsx(Wh,{luminanceThreshold:1,mipmapBlur:!0,intensity:.5}),d.jsx(Kh,{}),d.jsx(Qh,{eskil:!1,offset:.1,darkness:.5})]})]})}),d.jsx(s0,{})]})}console.log("Homestead Survival: Initializing...");console.log("Three.js Revision:",bh);class f0 extends jc.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){console.error("Uncaught error:",e,t)}render(){var e;return this.state.hasError?d.jsxs("div",{className:"flex flex-col items-center justify-center h-screen bg-slate-900 text-white p-4",children:[d.jsx("h1",{className:"text-2xl font-bold text-red-500 mb-4",children:"Something went wrong"}),d.jsx("pre",{className:"bg-black/50 p-4 rounded text-sm overflow-auto max-w-full",children:(e=this.state.error)==null?void 0:e.toString()}),d.jsx("button",{onClick:()=>window.location.reload(),className:"mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700",children:"Reload Game"})]}):this.props.children}}Ah.createRoot(document.getElementById("root")).render(d.jsx(jc.StrictMode,{children:d.jsx(f0,{children:d.jsx(d0,{})})}));
