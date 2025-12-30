import{r as oe,z as d,I as wn,w as bh,J as xh,K as Ah,Q as ci,X as ts,Y as Rh,Z as Sh,_ as Ph,p as kh,R as Gc,$ as Ch}from"./vendor-CvYXfu-e.js";import{c as Nh,M as Dh,C as Vh,S as Mh,a as Oh,b as jh,U as Sa,H as Lh,T as Pa,B as ka,P as Fh,d as Uh,e as Bh,L as $h,f as qh,R as Gh,X as ns,g as Ca,h as zh,Z as Hh,A as Wh,i as Kh,G as Qh,j as zc,k as Jh,W as Xh,l as Yh,E as Zh,m as ed,n as td,V as nd}from"./game-DLXYlgih.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const rd={};function sd(n,e){let t;try{t=n()}catch{return}return{getItem:s=>{var i;const a=u=>u===null?null:JSON.parse(u,void 0),c=(i=t.getItem(s))!=null?i:null;return c instanceof Promise?c.then(a):a(c)},setItem:(s,i)=>t.setItem(s,JSON.stringify(i,void 0)),removeItem:s=>t.removeItem(s)}}const ur=n=>e=>{try{const t=n(e);return t instanceof Promise?t:{then(r){return ur(r)(t)},catch(r){return this}}}catch(t){return{then(r){return this},catch(r){return ur(r)(t)}}}},id=(n,e)=>(t,r,s)=>{let i={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:S=>S,version:0,merge:(S,O)=>({...O,...S}),...e},a=!1;const c=new Set,u=new Set;let f;try{f=i.getStorage()}catch{}if(!f)return n((...S)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),t(...S)},r,s);const m=ur(i.serialize),T=()=>{const S=i.partialize({...r()});let O;const j=m({state:S,version:i.version}).then(P=>f.setItem(i.name,P)).catch(P=>{O=P});if(O)throw O;return j},x=s.setState;s.setState=(S,O)=>{x(S,O),T()};const R=n((...S)=>{t(...S),T()},r,s);let D;const C=()=>{var S;if(!f)return;a=!1,c.forEach(j=>j(r()));const O=((S=i.onRehydrateStorage)==null?void 0:S.call(i,r()))||void 0;return ur(f.getItem.bind(f))(i.name).then(j=>{if(j)return i.deserialize(j)}).then(j=>{if(j)if(typeof j.version=="number"&&j.version!==i.version){if(i.migrate)return i.migrate(j.state,j.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return j.state}).then(j=>{var P;return D=i.merge(j,(P=r())!=null?P:R),t(D,!0),T()}).then(()=>{O==null||O(D,void 0),a=!0,u.forEach(j=>j(D))}).catch(j=>{O==null||O(void 0,j)})};return s.persist={setOptions:S=>{i={...i,...S},S.getStorage&&(f=S.getStorage())},clearStorage:()=>{f==null||f.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>C(),hasHydrated:()=>a,onHydrate:S=>(c.add(S),()=>{c.delete(S)}),onFinishHydration:S=>(u.add(S),()=>{u.delete(S)})},C(),D||R},od=(n,e)=>(t,r,s)=>{let i={storage:sd(()=>localStorage),partialize:C=>C,version:0,merge:(C,S)=>({...S,...C}),...e},a=!1;const c=new Set,u=new Set;let f=i.storage;if(!f)return n((...C)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),t(...C)},r,s);const m=()=>{const C=i.partialize({...r()});return f.setItem(i.name,{state:C,version:i.version})},T=s.setState;s.setState=(C,S)=>{T(C,S),m()};const x=n((...C)=>{t(...C),m()},r,s);s.getInitialState=()=>x;let R;const D=()=>{var C,S;if(!f)return;a=!1,c.forEach(j=>{var P;return j((P=r())!=null?P:x)});const O=((S=i.onRehydrateStorage)==null?void 0:S.call(i,(C=r())!=null?C:x))||void 0;return ur(f.getItem.bind(f))(i.name).then(j=>{if(j)if(typeof j.version=="number"&&j.version!==i.version){if(i.migrate)return[!0,i.migrate(j.state,j.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,j.state];return[!1,void 0]}).then(j=>{var P;const[F,K]=j;if(R=i.merge(K,(P=r())!=null?P:x),t(R,!0),F)return m()}).then(()=>{O==null||O(R,void 0),R=r(),a=!0,u.forEach(j=>j(R))}).catch(j=>{O==null||O(void 0,j)})};return s.persist={setOptions:C=>{i={...i,...C},C.storage&&(f=C.storage)},clearStorage:()=>{f==null||f.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>D(),hasHydrated:()=>a,onHydrate:C=>(c.add(C),()=>{c.delete(C)}),onFinishHydration:C=>(u.add(C),()=>{u.delete(C)})},i.skipHydration||D(),R||x},ad=(n,e)=>"getStorage"in e||"serialize"in e||"deserialize"in e?((rd?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),id(n,e)):od(n,e),cd=ad,tr={strong:{type:"strong",name:"Strong",description:"Consumes energy slower while working."},fast:{type:"fast",name:"Fast",description:"Moves significantly faster."},glutton:{type:"glutton",name:"Glutton",description:"Gets hungry faster."},ascetic:{type:"ascetic",name:"Ascetic",description:"Needs less food."},insomniac:{type:"insomniac",name:"Insomniac",description:"Regains energy faster while resting."},workaholic:{type:"workaholic",name:"Workaholic",description:"Loses happiness slower when working."}},mn={barn:{wood:120,stone:60},cabin:{wood:10},farm:{wood:20,stone:5},lumberMill:{wood:50,stone:10},mine:{wood:100,stone:50},warehouse:{wood:100,stone:20},bakery:{wood:60,stone:20},well:{wood:30,stone:40},campfire:{wood:30,stone:5},watchtower:{wood:80,stone:30},fishery:{wood:40,stone:10},workshop:{wood:80,stone:30,iron:10},infirmary:{wood:70,stone:50},tradingPost:{wood:100,stone:20,food:50}},Ft={barn:{housing:2,storage:100,happiness:.5},cabin:{housing:4},farm:{workers:1},lumberMill:{workers:2},mine:{workers:3},warehouse:{storage:200},bakery:{workers:2,happiness:.4},well:{happiness:.6},campfire:{housing:1,happiness:1.2},watchtower:{workers:1,happiness:.2},fishery:{workers:1},workshop:{workers:1},infirmary:{workers:1,happiness:.6},tradingPost:{workers:1}},Hc={barn:{},cabin:{},farm:{food:5},lumberMill:{wood:5},mine:{stone:2,iron:1},warehouse:{},bakery:{food:8},well:{},campfire:{},watchtower:{},fishery:{food:6},workshop:{wood:1,stone:1},infirmary:{},tradingPost:{}},Ei=[{id:"toolmaking",name:"Toolmaking",description:"Craft tools to boost production and unlock Workshops.",cost:{wood:80,stone:30},barnLevelReq:2},{id:"herbalism",name:"Herbalism",description:"Basic medicine to keep settlers healthier; unlocks Infirmary.",cost:{wood:60,food:40},barnLevelReq:2},{id:"fishing",name:"Fishing Nets",description:"Unlock Fisheries for steady food.",cost:{wood:50,stone:20},barnLevelReq:2},{id:"fortifications",name:"Fortifications",description:"Improve defense; unlock Watchtowers.",cost:{wood:90,stone:70},barnLevelReq:3},{id:"baking",name:"Baking",description:"Unlock Bakeries and better food variety.",cost:{wood:70,stone:30},barnLevelReq:2}],ld={fishery:"fishing",watchtower:"fortifications",bakery:"baking",workshop:"toolmaking",infirmary:"herbalism"},hn=()=>Math.random().toString(36).substr(2,9),Na=n=>{const e=[],r=["wood","food","stone","iron"];for(let s=0;s<3;s++){const i=r[Math.floor(Math.random()*r.length)];let a=r[Math.floor(Math.random()*r.length)];for(;a===i;)a=r[Math.floor(Math.random()*r.length)];const c=20+Math.floor(Math.random()*50);e.push({id:hn(),gives:{[i]:c},wants:{[a]:Math.floor(c*(.5+Math.random()))},expiresAt:n+5})}return e},ud=()=>{const n=Math.random()>.7?2:1,e=Object.values(tr),t=[];for(let r=0;r<n;r++){const s=e[Math.floor(Math.random()*e.length)];t.find(i=>i.type===s.type)||t.push(s)}return t},Zn={id:"barn-main",type:"barn",position:[0,0,0],level:1,lastCollected:Date.now()},hd={mine:2,warehouse:2,bakery:2,watchtower:2,fishery:3},xt=Nh()(cd((n,e)=>({resources:{wood:100,food:50,stone:0,iron:0},settlers:[{id:"settler-1",name:"John",position:[0,0,0],targetPosition:null,state:"idle",actionTimer:0,hunger:100,energy:100,traits:[tr.strong]},{id:"settler-2",name:"Jane",position:[2,0,2],targetPosition:null,state:"idle",actionTimer:0,hunger:100,energy:100,traits:[tr.fast]}],happiness:100,buildings:[Zn],nature:(()=>{const t=[];for(let r=0;r<40;r++){const s=Math.random()*Math.PI*2,i=15+Math.random()*30,a=Math.cos(s)*i,c=Math.sin(s)*i,u=Math.random()>.3?"tree":"rock",f=.8+Math.random()*.5;t.push({id:`nature-${r}`,position:[a,0,c],type:u,scale:f})}return t})(),logs:[],weather:"sunny",season:"spring",selectedBuilding:null,selectedBuildingId:null,isBuilding:!1,tickRate:1e3,day:1,objectives:[{id:"obj-wood",title:"Gatherer",description:"Stockpile 150 wood to prove the village can build.",goal:{type:"resource",key:"wood",amount:150},reward:{food:40},complete:!1,claimed:!1},{id:"obj-farm",title:"First Harvest",description:"Build a farm to secure food.",goal:{type:"building",key:"farm",amount:1},reward:{wood:60,food:30},complete:!1,claimed:!1},{id:"obj-pop",title:"New Neighbors",description:"Reach 6 settlers in your homestead.",goal:{type:"population",amount:6},reward:{stone:50,food:50},complete:!1,claimed:!1},{id:"obj-happy",title:"Joyous Village",description:"Raise happiness to 85% or higher.",goal:{type:"happiness",amount:85},reward:{wood:80,iron:20},complete:!1,claimed:!1}],unlockedResearch:[],currentResearch:null,researchProgress:0,tradeOffers:[],lastTradeRefresh:0,addLog:(t,r="info")=>{n(s=>({logs:[{id:hn(),message:t,timestamp:Date.now(),type:r},...s.logs].slice(0,20)}))},addResource:(t,r)=>n(s=>{const c=100+s.buildings.reduce((m,T)=>m+(Ft[T.type].storage||0)*T.level,0),u=s.resources[t],f=Math.min(u+r,c);return{resources:{...s.resources,[t]:f}}}),removeResource:(t,r)=>e().resources[t]>=r?(n(i=>({resources:{...i.resources,[t]:i.resources[t]-r}})),!0):!1,removeNature:t=>{const r=e(),s=r.nature.find(i=>i.id===t);s&&(r.addLog(`Cleared ${s.type}`,"info"),n(i=>({nature:i.nature.filter(a=>a.id!==t)})))},addBuilding:(t,r)=>{const s=e();if(t==="barn"){s.addLog("The Barn already anchors your homestead and cannot be placed again.","warning");return}const i=s.buildings.find(O=>O.type==="barn");if(!i){n(O=>({buildings:[Zn,...O.buildings]}));return}const a=hd[t];if(a&&i.level<a){s.addLog(`Upgrade the Barn to level ${a} to unlock ${t}.`,"warning");return}const c=ld[t];if(c&&!s.unlockedResearch.includes(c)){s.addLog(`Research "${c}" to unlock ${t}.`,"warning");return}const u=s.buildings.some(O=>O.position[0]===r[0]&&O.position[2]===r[2]),f=r[0]-.8,m=r[0]+.8,T=r[2]-.8,x=r[2]+.8,R=s.nature.some(O=>O.position[0]>f&&O.position[0]<m&&O.position[2]>T&&O.position[2]<x);if(u||R){s.addLog("Cannot build here!","warning");return}const D=mn[t],C=Ft[t];let S=!0;if(Object.keys(D).forEach(O=>{(s.resources[O]||0)<(D[O]||0)&&(S=!1)}),!S){s.addLog("Not enough resources!","warning");return}if(C.workers){const O=s.buildings.reduce((j,P)=>j+(Ft[P.type].workers||0),0);if(s.settlers.length-O<C.workers){S=!1,s.addLog("Not enough workers!","warning");return}}S&&(Object.keys(D).forEach(O=>{s.removeResource(O,D[O]||0)}),n(O=>({buildings:[...O.buildings,{id:hn(),type:t,position:r,level:1,lastCollected:Date.now()}],isBuilding:!1,selectedBuilding:null})),s.addLog(`Built ${t}!`,"success"))},upgradeBuilding:t=>{const r=e(),s=r.buildings.find(u=>u.id===t);if(!s)return;const i=mn[s.type],a=s.level+1;let c=!0;Object.keys(i).forEach(u=>{const f=(i[u]||0)*a;(r.resources[u]||0)<f&&(c=!1)}),c?(Object.keys(i).forEach(u=>{const f=(i[u]||0)*a;r.removeResource(u,f)}),n(u=>({buildings:u.buildings.map(f=>f.id===t?{...f,level:f.level+1}:f)})),r.addLog(`Upgraded ${s.type} to level ${s.level+1}`,"success")):r.addLog("Not enough resources to upgrade!","warning")},demolishBuilding:t=>{const r=e(),s=r.buildings.find(i=>i.id===t);if((s==null?void 0:s.type)==="barn"){r.addLog("The Barn is the heart of the homestead and cannot be demolished.","warning");return}if(s){r.addLog(`Demolished ${s.type}`,"danger");const i=r.settlers.map(a=>a.job===t?{...a,job:void 0,state:"idle"}:a.home===t?{...a,home:void 0}:a);n(a=>({buildings:a.buildings.filter(c=>c.id!==t),settlers:i,selectedBuildingId:null}))}},assignWorker:t=>{const r=e(),s=r.buildings.find(u=>u.id===t);if(!s)return;const i=Ft[s.type];if(!i.workers){r.addLog(`${s.type} does not require workers.`,"warning");return}if(r.settlers.filter(u=>u.job===t).length>=(i.workers||0)){r.addLog(`${s.type} is fully staffed.`,"warning");return}const c=r.settlers.find(u=>!u.job);c?(n(u=>({settlers:u.settlers.map(f=>f.id===c.id?{...f,job:t,state:"walking",targetPosition:s.position}:f)})),r.addLog(`${c.name} assigned to ${s.type}.`,"success")):r.addLog("No unemployed settlers available.","warning")},unassignWorker:t=>{const r=e(),s=r.settlers.find(i=>i.job===t);s&&(n(i=>({settlers:i.settlers.map(a=>a.id===s.id?{...a,job:void 0,state:"idle"}:a)})),r.addLog(`${s.name} unassigned from job.`,"info"))},setSelectedBuilding:t=>n({selectedBuilding:t,isBuilding:!!t,selectedBuildingId:null}),selectBuildingId:t=>n({selectedBuildingId:t,selectedBuilding:null,isBuilding:!1}),setTickRate:t=>{const r=Math.min(2e3,Math.max(300,t));n({tickRate:r})},celebrateFestival:()=>{const t=e(),r=30,s=40;if(t.resources.wood<r||t.resources.food<s){t.addLog("Not enough supplies for a festival!","warning");return}n(i=>({resources:{...i.resources,wood:i.resources.wood-r,food:i.resources.food-s},happiness:Math.min(100,i.happiness+15)})),t.addLog("You held a lively festival! Happiness soared.","success")},sendExpedition:()=>{const t=e(),r=25,s=15;if(t.resources.food<r||t.resources.wood<s){t.addLog("Not enough supplies to send an expedition.","warning");return}n(c=>({resources:{...c.resources,food:c.resources.food-r,wood:c.resources.wood-s}}));const i=t.buildings.filter(c=>c.type==="watchtower").length,a=Math.random()+i*.05;if(a>.65){const c=40+Math.round(Math.random()*40),u=30+Math.round(Math.random()*30),f=Math.round(Math.random()*30);n(m=>({resources:{...m.resources,wood:m.resources.wood+c,food:m.resources.food+u,stone:m.resources.stone+f},settlers:Math.random()>.6?[...m.settlers,{id:hn(),name:`Scout ${m.settlers.length+1}`,position:[0,0,0],targetPosition:null,state:"idle",actionTimer:0,hunger:100,energy:100,traits:ud()}]:m.settlers})),t.addLog(`Expedition returned with riches! +${c} wood, +${u} food${f?`, +${f} stone`:""}`,"success")}else if(a>.35){const c=5+Math.round(Math.random()*10);n(u=>({resources:{...u.resources,iron:u.resources.iron+c}})),t.addLog(`Expedition found rare iron veins! +${c} iron`,"info")}else{const c=Math.max(5,Math.round(t.resources.wood*.05));n(u=>({resources:{...u.resources,wood:Math.max(0,u.resources.wood-c)},happiness:Math.max(0,u.happiness-5)})),t.addLog("Expedition ran into trouble and limped home. Lost some supplies.","danger")}},claimObjective:t=>{const r=e(),s=r.objectives.find(i=>i.id===t);!s||!s.complete||s.claimed||(n(i=>({resources:{...i.resources,wood:i.resources.wood+(s.reward.wood||0),food:i.resources.food+(s.reward.food||0),stone:i.resources.stone+(s.reward.stone||0),iron:i.resources.iron+(s.reward.iron||0)},objectives:i.objectives.map(a=>a.id===t?{...a,claimed:!0}:a)})),r.addLog(`Claimed reward: ${s.title}`,"success"))},startResearch:t=>{const r=e();if(r.unlockedResearch.includes(t)){r.addLog("Research already unlocked.","warning");return}if(r.currentResearch===t){r.addLog("Research already in progress.","info");return}const s=Ei.find(c=>c.id===t);if(!s)return;const i=r.buildings.find(c=>c.type==="barn");if(!i||i.level<s.barnLevelReq){r.addLog(`Requires Barn level ${s.barnLevelReq} to research ${s.name}.`,"warning");return}if(!Object.keys(s.cost).every(c=>(r.resources[c]||0)>=(s.cost[c]||0))){r.addLog("Not enough resources for research.","warning");return}n(c=>({resources:{...c.resources,...Object.keys(s.cost).reduce((u,f)=>(u[f]=c.resources[f]-(s.cost[f]||0),u),{})},currentResearch:t,researchProgress:0})),r.addLog(`Started research: ${s.name}`,"success")},cancelResearch:()=>{const t=e();t.currentResearch&&(n({currentResearch:null,researchProgress:0}),t.addLog("Research cancelled.","info"))},acceptTrade:t=>{const r=e(),s=r.tradeOffers.find(a=>a.id===t);if(!s)return;if(!Object.keys(s.wants).every(a=>(r.resources[a]||0)>=(s.wants[a]||0))){r.addLog("Not enough resources for this trade.","warning");return}n(a=>({resources:{...a.resources,...Object.keys(s.wants).reduce((c,u)=>(c[u]=a.resources[u]-(s.wants[u]||0),c),{}),...Object.keys(s.gives).reduce((c,u)=>(c[u]=(a.resources[u]||0)+(s.gives[u]||0),c),{})},tradeOffers:a.tradeOffers.filter(c=>c.id!==t)})),r.addLog("Trade completed!","success")},refreshTrades:()=>{const t=e();n({tradeOffers:Na(t.day),lastTradeRefresh:t.day}),t.addLog("New traders have arrived at the Trading Post.","info")},loadSaveData:t=>{const r=e(),s=t.buildings||r.buildings,i=s.some(a=>a.type==="barn")?s:[Zn,...s];n({resources:t.resources||r.resources,settlers:t.settlers||r.settlers,happiness:t.happiness??r.happiness,buildings:i,nature:t.nature||r.nature,logs:t.logs||r.logs,weather:t.weather||r.weather,season:t.season||r.season,day:t.day??r.day,objectives:t.objectives||r.objectives,unlockedResearch:t.unlockedResearch||r.unlockedResearch,currentResearch:t.currentResearch??r.currentResearch,researchProgress:t.researchProgress??r.researchProgress,tradeOffers:t.tradeOffers||[],lastTradeRefresh:t.lastTradeRefresh||0,selectedBuilding:null,selectedBuildingId:null,isBuilding:!1}),r.addLog("Loaded save data.","info")},tick:()=>{n(t=>{let r={...t.resources},s=t.happiness,i=t.logs,a=t.weather,c=t.season,u=[...t.settlers];const f=100,m=t.buildings.reduce((P,F)=>P+(Ft[F.type].storage||0)*F.level,0),T=f+m;t.buildings.forEach(P=>{const F=Hc[P.type];Object.keys(F).forEach(K=>{const Q=(F[K]||0)*P.level*.1;r[K]=Math.min(T,r[K]+Q)})});const x=t.settlers.length*.04;if(r.food=Math.max(0,r.food-x),r.food<=.1?s=Math.max(0,s-.5):s=Math.min(100,s+.02),Math.random()<.01){const P=["sunny","rain","snow"];a=P[Math.floor(Math.random()*P.length)]}const R=t.day+.005,D=R%4;c=D<1?"spring":D<2?"summer":D<3?"autumn":"winter";let C=t.tradeOffers,S=t.lastTradeRefresh;if(t.buildings.some(P=>P.type==="tradingPost")&&R-t.lastTradeRefresh>3&&(C=Na(R),S=R,i=[{id:hn(),message:"Traders have arrived with new offers.",timestamp:Date.now(),type:"info"},...i].slice(0,20)),u=u.map(P=>{const F=R%1,K=F>.75||F<.2,Q=F>.25&&F<.7;if(P.job&&Q){const v=t.buildings.find(w=>w.id===P.job);if(v)return Math.hypot(P.position[0]-v.position[0],P.position[2]-v.position[2])>2?{...P,state:"walking",targetPosition:v.position}:{...P,state:"working",targetPosition:null}}if(K){const v=[0,0,0];return Math.hypot(P.position[0]-v[0],P.position[2]-v[2])>2?{...P,state:"walking",targetPosition:v}:{...P,state:"resting",targetPosition:null}}if(P.state==="idle"||P.state==="working"&&!Q||P.state==="resting"&&!K){if(Math.random()<.02){const v=Math.random()*Math.PI*2,w=3+Math.random()*8,I=Math.cos(v)*w,y=Math.sin(v)*w;return{...P,state:"walking",targetPosition:[I,0,y]}}return{...P,state:"idle"}}if(P.state==="walking"&&P.targetPosition){const v=P.targetPosition[0]-P.position[0],w=P.targetPosition[2]-P.position[2],I=Math.hypot(v,w);let y=.08;return P.traits.some(Ve=>Ve.type==="fast")&&(y*=1.5),I<y?{...P,position:P.targetPosition,targetPosition:null,state:"idle"}:{...P,position:[P.position[0]+v/I*y,0,P.position[2]+w/I*y]}}let E=.1;P.traits.some(v=>v.type==="glutton")&&(E*=1.5),P.traits.some(v=>v.type==="ascetic")&&(E*=.7);let g=Math.max(0,Math.min(100,P.hunger-E)),_=P.energy;if(P.state==="working"||P.state==="walking"){let v=.2;P.traits.some(w=>w.type==="strong")&&(v*=.6),_=Math.max(0,_-v)}else if(P.state==="resting"){let v=.6;P.traits.some(w=>w.type==="insomniac")&&(v*=1.5),_=Math.min(100,_+v),g=Math.max(0,g-.05)}else _=Math.min(100,_+.1);return g<20&&(s=Math.max(0,s-.2)),_<20&&(s=Math.max(0,s-.1)),g>70&&_>70&&(s=Math.min(100,s+.05)),P.state==="working"&&P.traits.some(v=>v.type==="workaholic")&&(s=Math.min(100,s+.01)),{...P,hunger:g,energy:_}}),t.currentResearch){const P=Ei.find(Q=>Q.id===t.currentResearch),K=t.researchProgress+.01;return K>=1&&P?(i=[{id:hn(),message:`Research completed: ${P.name}`,timestamp:Date.now(),type:"success"},...i].slice(0,20),{resources:r,settlers:u,happiness:s,weather:a,season:c,day:R,logs:i,tickRate:t.tickRate,buildings:t.buildings,nature:t.nature,selectedBuilding:t.selectedBuilding,selectedBuildingId:t.selectedBuildingId,isBuilding:t.isBuilding,objectives:t.objectives,unlockedResearch:[...new Set([...t.unlockedResearch,t.currentResearch])],currentResearch:null,researchProgress:0,tradeOffers:C,lastTradeRefresh:S}):{resources:r,settlers:u,happiness:s,weather:a,season:c,day:R,logs:i,tickRate:t.tickRate,buildings:t.buildings,nature:t.nature,selectedBuilding:t.selectedBuilding,selectedBuildingId:t.selectedBuildingId,isBuilding:t.isBuilding,objectives:t.objectives,unlockedResearch:t.unlockedResearch,currentResearch:t.currentResearch,researchProgress:K,tradeOffers:C,lastTradeRefresh:S}}const j=t.objectives.map(P=>{if(P.complete)return P;let F=!1;return P.goal.type==="resource"&&P.goal.key?F=r[P.goal.key]>=P.goal.amount:P.goal.type==="building"&&P.goal.key?F=t.buildings.filter(K=>K.type===P.goal.key).length>=P.goal.amount:P.goal.type==="population"?F=u.length>=P.goal.amount:P.goal.type==="happiness"&&(F=s>=P.goal.amount),F?{...P,complete:!0}:P});return{resources:r,settlers:u,happiness:s,weather:a,season:c,day:R,logs:i,tickRate:t.tickRate,buildings:t.buildings,nature:t.nature,selectedBuilding:t.selectedBuilding,selectedBuildingId:t.selectedBuildingId,isBuilding:t.isBuilding,objectives:j,unlockedResearch:t.unlockedResearch,currentResearch:t.currentResearch,researchProgress:t.researchProgress,tradeOffers:C,lastTradeRefresh:S}})},reset:()=>{const t=[];for(let r=0;r<40;r++){const s=Math.random()*Math.PI*2,i=15+Math.random()*30,a=Math.cos(s)*i,c=Math.sin(s)*i,u=Math.random()>.3?"tree":"rock",f=.8+Math.random()*.5;t.push({id:`nature-${r}`,position:[a,0,c],type:u,scale:f})}n({resources:{wood:100,food:50,stone:0,iron:0},settlers:[{id:"settler-1",name:"John",position:[0,0,0],targetPosition:null,state:"idle",actionTimer:0,hunger:100,energy:100,traits:[tr.strong]},{id:"settler-2",name:"Jane",position:[2,0,2],targetPosition:null,state:"idle",actionTimer:0,hunger:100,energy:100,traits:[tr.fast]}],happiness:100,buildings:[Zn],nature:t,logs:[],weather:"sunny",season:"spring",selectedBuilding:null,selectedBuildingId:null,isBuilding:!1,day:1,tickRate:1e3,objectives:e().objectives.map(r=>({...r,complete:!1,claimed:!1})),unlockedResearch:[],currentResearch:null,researchProgress:0,tradeOffers:[],lastTradeRefresh:0})}}),{name:"homestead-storage",version:2,migrate:(n,e)=>{const t=n;return t.buildings||(t.buildings=[]),t.buildings.some(r=>r.type==="barn")||(t.buildings=[Zn,...t.buildings]),t},partialize:n=>({resources:n.resources,settlers:n.settlers,happiness:n.happiness,buildings:n.buildings,nature:n.nature,logs:n.logs,weather:n.weather,season:n.season,day:n.day,tickRate:n.tickRate,objectives:n.objectives,unlockedResearch:n.unlockedResearch,currentResearch:n.currentResearch,researchProgress:n.researchProgress,tradeOffers:n.tradeOffers,lastTradeRefresh:n.lastTradeRefresh})}));var Da={};/**
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
 */const Wc=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},dd=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Kc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,u=s+2<n.length,f=u?n[s+2]:0,m=i>>2,T=(i&3)<<4|c>>4;let x=(c&15)<<2|f>>6,R=f&63;u||(R=64,a||(x=64)),r.push(t[m],t[T],t[x],t[R])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Wc(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):dd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const f=s<n.length?t[n.charAt(s)]:64;++s;const T=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||f==null||T==null)throw new fd;const x=i<<2|c>>4;if(r.push(x),f!==64){const R=c<<4&240|f>>2;if(r.push(R),T!==64){const D=f<<6&192|T;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class fd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pd=function(n){const e=Wc(n);return Kc.encodeByteArray(e,!0)},gs=function(n){return pd(n).replace(/\./g,"")},Qc=function(n){try{return Kc.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function md(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const gd=()=>md().__FIREBASE_DEFAULTS__,_d=()=>{if(typeof process>"u"||typeof Da>"u")return;const n=Da.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},yd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Qc(n[1]);return e&&JSON.parse(e)},Ns=()=>{try{return gd()||_d()||yd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Jc=n=>{var e,t;return(t=(e=Ns())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},vd=n=>{const e=Jc(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Xc=()=>{var n;return(n=Ns())===null||n===void 0?void 0:n.config},Yc=n=>{var e;return(e=Ns())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class wd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Ed(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[gs(JSON.stringify(t)),gs(JSON.stringify(a)),""].join(".")}/**
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
 */function Ne(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Td(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ne())}function Id(){var n;const e=(n=Ns())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function bd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function xd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ad(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Rd(){const n=Ne();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Sd(){return!Id()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Pd(){try{return typeof indexedDB=="object"}catch{return!1}}function kd(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Cd="FirebaseError";class ct extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Cd,Object.setPrototypeOf(this,ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Tr.prototype.create)}}class Tr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Nd(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new ct(s,c,r)}}function Nd(n,e){return n.replace(Dd,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Dd=/\{\$([^}]+)}/g;function Vd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function _s(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Va(i)&&Va(a)){if(!_s(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Va(n){return n!==null&&typeof n=="object"}/**
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
 */function Ir(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Md(n,e){const t=new Od(n,e);return t.subscribe.bind(t)}class Od{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");jd(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=li),s.error===void 0&&(s.error=li),s.complete===void 0&&(s.complete=li);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jd(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function li(){}/**
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
 */function Le(n){return n&&n._delegate?n._delegate:n}class Gt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Lt="[DEFAULT]";/**
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
 */class Ld{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new wd;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ud(e))try{this.getOrInitializeService({instanceIdentifier:Lt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Lt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Lt){return this.instances.has(e)}getOptions(e=Lt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Fd(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Lt){return this.component?this.component.multipleInstances?e:Lt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fd(n){return n===Lt?void 0:n}function Ud(n){return n.instantiationMode==="EAGER"}/**
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
 */class Bd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ld(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var X;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(X||(X={}));const $d={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},qd=X.INFO,Gd={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},zd=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Gd[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gi{constructor(e){this.name=e,this._logLevel=qd,this._logHandler=zd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$d[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const Hd=(n,e)=>e.some(t=>n instanceof t);let Ma,Oa;function Wd(){return Ma||(Ma=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Kd(){return Oa||(Oa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zc=new WeakMap,Ti=new WeakMap,el=new WeakMap,ui=new WeakMap,zi=new WeakMap;function Qd(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Et(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Zc.set(t,n)}).catch(()=>{}),zi.set(e,n),e}function Jd(n){if(Ti.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Ti.set(n,e)}let Ii={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ti.get(n);if(e==="objectStoreNames")return n.objectStoreNames||el.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Et(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Xd(n){Ii=n(Ii)}function Yd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(hi(this),e,...t);return el.set(r,e.sort?e.sort():[e]),Et(r)}:Kd().includes(n)?function(...e){return n.apply(hi(this),e),Et(Zc.get(this))}:function(...e){return Et(n.apply(hi(this),e))}}function Zd(n){return typeof n=="function"?Yd(n):(n instanceof IDBTransaction&&Jd(n),Hd(n,Wd())?new Proxy(n,Ii):n)}function Et(n){if(n instanceof IDBRequest)return Qd(n);if(ui.has(n))return ui.get(n);const e=Zd(n);return e!==n&&(ui.set(n,e),zi.set(e,n)),e}const hi=n=>zi.get(n);function ef(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=Et(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Et(a.result),u.oldVersion,u.newVersion,Et(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const tf=["get","getKey","getAll","getAllKeys","count"],nf=["put","add","delete","clear"],di=new Map;function ja(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(di.get(e))return di.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=nf.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||tf.includes(t)))return;const i=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let f=u.store;return r&&(f=f.index(c.shift())),(await Promise.all([f[t](...c),s&&u.done]))[0]};return di.set(e,i),i}Xd(n=>({...n,get:(e,t,r)=>ja(e,t)||n.get(e,t,r),has:(e,t)=>!!ja(e,t)||n.has(e,t)}));/**
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
 */class rf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(sf(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function sf(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bi="@firebase/app",La="0.10.13";/**
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
 */const st=new Gi("@firebase/app"),of="@firebase/app-compat",af="@firebase/analytics-compat",cf="@firebase/analytics",lf="@firebase/app-check-compat",uf="@firebase/app-check",hf="@firebase/auth",df="@firebase/auth-compat",ff="@firebase/database",pf="@firebase/data-connect",mf="@firebase/database-compat",gf="@firebase/functions",_f="@firebase/functions-compat",yf="@firebase/installations",vf="@firebase/installations-compat",wf="@firebase/messaging",Ef="@firebase/messaging-compat",Tf="@firebase/performance",If="@firebase/performance-compat",bf="@firebase/remote-config",xf="@firebase/remote-config-compat",Af="@firebase/storage",Rf="@firebase/storage-compat",Sf="@firebase/firestore",Pf="@firebase/vertexai-preview",kf="@firebase/firestore-compat",Cf="firebase",Nf="10.14.1";/**
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
 */const xi="[DEFAULT]",Df={[bi]:"fire-core",[of]:"fire-core-compat",[cf]:"fire-analytics",[af]:"fire-analytics-compat",[uf]:"fire-app-check",[lf]:"fire-app-check-compat",[hf]:"fire-auth",[df]:"fire-auth-compat",[ff]:"fire-rtdb",[pf]:"fire-data-connect",[mf]:"fire-rtdb-compat",[gf]:"fire-fn",[_f]:"fire-fn-compat",[yf]:"fire-iid",[vf]:"fire-iid-compat",[wf]:"fire-fcm",[Ef]:"fire-fcm-compat",[Tf]:"fire-perf",[If]:"fire-perf-compat",[bf]:"fire-rc",[xf]:"fire-rc-compat",[Af]:"fire-gcs",[Rf]:"fire-gcs-compat",[Sf]:"fire-fst",[kf]:"fire-fst-compat",[Pf]:"fire-vertex","fire-js":"fire-js",[Cf]:"fire-js-all"};/**
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
 */const ys=new Map,Vf=new Map,Ai=new Map;function Fa(n,e){try{n.container.addComponent(e)}catch(t){st.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function En(n){const e=n.name;if(Ai.has(e))return st.debug(`There were multiple attempts to register component ${e}.`),!1;Ai.set(e,n);for(const t of ys.values())Fa(t,n);for(const t of Vf.values())Fa(t,n);return!0}function Hi(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ze(n){return n.settings!==void 0}/**
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
 */const Mf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Tt=new Tr("app","Firebase",Mf);/**
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
 */class Of{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Gt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tt.create("app-deleted",{appName:this._name})}}/**
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
 */const kn=Nf;function tl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:xi,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Tt.create("bad-app-name",{appName:String(s)});if(t||(t=Xc()),!t)throw Tt.create("no-options");const i=ys.get(s);if(i){if(_s(t,i.options)&&_s(r,i.config))return i;throw Tt.create("duplicate-app",{appName:s})}const a=new Bd(s);for(const u of Ai.values())a.addComponent(u);const c=new Of(t,r,a);return ys.set(s,c),c}function nl(n=xi){const e=ys.get(n);if(!e&&n===xi&&Xc())return tl();if(!e)throw Tt.create("no-app",{appName:n});return e}function It(n,e,t){var r;let s=(r=Df[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),st.warn(c.join(" "));return}En(new Gt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const jf="firebase-heartbeat-database",Lf=1,hr="firebase-heartbeat-store";let fi=null;function rl(){return fi||(fi=ef(jf,Lf,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(hr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Tt.create("idb-open",{originalErrorMessage:n.message})})),fi}async function Ff(n){try{const t=(await rl()).transaction(hr),r=await t.objectStore(hr).get(sl(n));return await t.done,r}catch(e){if(e instanceof ct)st.warn(e.message);else{const t=Tt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});st.warn(t.message)}}}async function Ua(n,e){try{const r=(await rl()).transaction(hr,"readwrite");await r.objectStore(hr).put(e,sl(n)),await r.done}catch(t){if(t instanceof ct)st.warn(t.message);else{const r=Tt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});st.warn(r.message)}}}function sl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Uf=1024,Bf=30*24*60*60*1e3;class $f{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Gf(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ba();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=Bf}),this._storage.overwrite(this._heartbeatsCache))}catch(r){st.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ba(),{heartbeatsToSend:r,unsentEntries:s}=qf(this._heartbeatsCache.heartbeats),i=gs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return st.warn(t),""}}}function Ba(){return new Date().toISOString().substring(0,10)}function qf(n,e=Uf){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),$a(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),$a(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Gf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Pd()?kd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Ff(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ua(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ua(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function $a(n){return gs(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function zf(n){En(new Gt("platform-logger",e=>new rf(e),"PRIVATE")),En(new Gt("heartbeat",e=>new $f(e),"PRIVATE")),It(bi,La,n),It(bi,La,"esm2017"),It("fire-js","")}zf("");var Hf="firebase",Wf="10.14.1";/**
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
 */It(Hf,Wf,"app");function Wi(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function il(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Kf=il,ol=new Tr("auth","Firebase",il());/**
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
 */const vs=new Gi("@firebase/auth");function Qf(n,...e){vs.logLevel<=X.WARN&&vs.warn(`Auth (${kn}): ${n}`,...e)}function cs(n,...e){vs.logLevel<=X.ERROR&&vs.error(`Auth (${kn}): ${n}`,...e)}/**
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
 */function He(n,...e){throw Qi(n,...e)}function Be(n,...e){return Qi(n,...e)}function Ki(n,e,t){const r=Object.assign(Object.assign({},Kf()),{[e]:t});return new Tr("auth","Firebase",r).create(e,{appName:n.name})}function $t(n){return Ki(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Jf(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&He(n,"argument-error"),Ki(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Qi(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return ol.create(n,...e)}function G(n,e,...t){if(!n)throw Qi(e,...t)}function et(n){const e="INTERNAL ASSERTION FAILED: "+n;throw cs(e),new Error(e)}function it(n,e){n||et(e)}/**
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
 */function Ri(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Xf(){return qa()==="http:"||qa()==="https:"}function qa(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Yf(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Xf()||xd()||"connection"in navigator)?navigator.onLine:!0}function Zf(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class br{constructor(e,t){this.shortDelay=e,this.longDelay=t,it(t>e,"Short delay should be less than long delay!"),this.isMobile=Td()||Ad()}get(){return Yf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ji(n,e){it(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class al{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ep={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const tp=new br(3e4,6e4);function Xi(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Cn(n,e,t,r,s={}){return cl(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=Ir(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const f=Object.assign({method:e,headers:u},i);return bd()||(f.referrerPolicy="no-referrer"),al.fetch()(ll(n,n.config.apiHost,t,c),f)})}async function cl(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},ep),e);try{const s=new rp(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw rs(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[u,f]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw rs(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw rs(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw rs(n,"user-disabled",a);const m=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Ki(n,m,f);He(n,m)}}catch(s){if(s instanceof ct)throw s;He(n,"network-request-failed",{message:String(s)})}}async function np(n,e,t,r,s={}){const i=await Cn(n,e,t,r,s);return"mfaPendingCredential"in i&&He(n,"multi-factor-auth-required",{_serverResponse:i}),i}function ll(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?Ji(n.config,s):`${n.config.apiScheme}://${s}`}class rp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Be(this.auth,"network-request-failed")),tp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function rs(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Be(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */async function sp(n,e){return Cn(n,"POST","/v1/accounts:delete",e)}async function ul(n,e){return Cn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function ir(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ip(n,e=!1){const t=Le(n),r=await t.getIdToken(e),s=Yi(r);G(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ir(pi(s.auth_time)),issuedAtTime:ir(pi(s.iat)),expirationTime:ir(pi(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function pi(n){return Number(n)*1e3}function Yi(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return cs("JWT malformed, contained fewer than 3 sections"),null;try{const s=Qc(t);return s?JSON.parse(s):(cs("Failed to decode base64 JWT payload"),null)}catch(s){return cs("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ga(n){const e=Yi(n);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function dr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ct&&op(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function op({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class ap{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Si{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ir(this.lastLoginAt),this.creationTime=ir(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ws(n){var e;const t=n.auth,r=await n.getIdToken(),s=await dr(n,ul(t,{idToken:r}));G(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?hl(i.providerUserInfo):[],c=lp(n.providerData,a),u=n.isAnonymous,f=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),m=u?f:!1,T={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Si(i.createdAt,i.lastLoginAt),isAnonymous:m};Object.assign(n,T)}async function cp(n){const e=Le(n);await ws(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lp(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function hl(n){return n.map(e=>{var{providerId:t}=e,r=Wi(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function up(n,e){const t=await cl(n,{},async()=>{const r=Ir({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=ll(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",al.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function hp(n,e){return Cn(n,"POST","/v2/accounts:revokeToken",Xi(n,e))}/**
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
 */class gn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ga(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){G(e.length!==0,"internal-error");const t=Ga(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await up(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new gn;return r&&(G(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(G(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(G(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gn,this.toJSON())}_performRefresh(){return et("not implemented")}}/**
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
 */function gt(n,e){G(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class tt{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Wi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ap(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Si(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await dr(this,this.stsTokenManager.getToken(this.auth,e));return G(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ip(this,e)}reload(){return cp(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new tt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ws(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ze(this.auth.app))return Promise.reject($t(this.auth));const e=await this.getIdToken();return await dr(this,sp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,c,u,f,m;const T=(r=t.displayName)!==null&&r!==void 0?r:void 0,x=(s=t.email)!==null&&s!==void 0?s:void 0,R=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,D=(a=t.photoURL)!==null&&a!==void 0?a:void 0,C=(c=t.tenantId)!==null&&c!==void 0?c:void 0,S=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,O=(f=t.createdAt)!==null&&f!==void 0?f:void 0,j=(m=t.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:P,emailVerified:F,isAnonymous:K,providerData:Q,stsTokenManager:E}=t;G(P&&E,e,"internal-error");const g=gn.fromJSON(this.name,E);G(typeof P=="string",e,"internal-error"),gt(T,e.name),gt(x,e.name),G(typeof F=="boolean",e,"internal-error"),G(typeof K=="boolean",e,"internal-error"),gt(R,e.name),gt(D,e.name),gt(C,e.name),gt(S,e.name),gt(O,e.name),gt(j,e.name);const _=new tt({uid:P,auth:e,email:x,emailVerified:F,displayName:T,isAnonymous:K,photoURL:D,phoneNumber:R,tenantId:C,stsTokenManager:g,createdAt:O,lastLoginAt:j});return Q&&Array.isArray(Q)&&(_.providerData=Q.map(v=>Object.assign({},v))),S&&(_._redirectEventId=S),_}static async _fromIdTokenResponse(e,t,r=!1){const s=new gn;s.updateFromServerResponse(t);const i=new tt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ws(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];G(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?hl(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new gn;c.updateFromIdToken(r);const u=new tt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Si(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,f),u}}/**
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
 */const za=new Map;function nt(n){it(n instanceof Function,"Expected a class definition");let e=za.get(n);return e?(it(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,za.set(n,e),e)}/**
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
 */class dl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}dl.type="NONE";const Ha=dl;/**
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
 */function ls(n,e,t){return`firebase:${n}:${e}:${t}`}class _n{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ls(this.userKey,s.apiKey,i),this.fullPersistenceKey=ls("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?tt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new _n(nt(Ha),e,r);const s=(await Promise.all(t.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let i=s[0]||nt(Ha);const a=ls(r,e.config.apiKey,e.name);let c=null;for(const f of t)try{const m=await f._get(a);if(m){const T=tt._fromJSON(e,m);f!==i&&(c=T),i=f;break}}catch{}const u=s.filter(f=>f._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new _n(i,e,r):(i=u[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async f=>{if(f!==i)try{await f._remove(a)}catch{}})),new _n(i,e,r))}}/**
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
 */function Wa(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(fl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(yl(e))return"Blackberry";if(vl(e))return"Webos";if(pl(e))return"Safari";if((e.includes("chrome/")||ml(e))&&!e.includes("edge/"))return"Chrome";if(_l(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function fl(n=Ne()){return/firefox\//i.test(n)}function pl(n=Ne()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ml(n=Ne()){return/crios\//i.test(n)}function gl(n=Ne()){return/iemobile/i.test(n)}function _l(n=Ne()){return/android/i.test(n)}function yl(n=Ne()){return/blackberry/i.test(n)}function vl(n=Ne()){return/webos/i.test(n)}function Zi(n=Ne()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function dp(n=Ne()){var e;return Zi(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fp(){return Rd()&&document.documentMode===10}function wl(n=Ne()){return Zi(n)||_l(n)||vl(n)||yl(n)||/windows phone/i.test(n)||gl(n)}/**
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
 */function El(n,e=[]){let t;switch(n){case"Browser":t=Wa(Ne());break;case"Worker":t=`${Wa(Ne())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${kn}/${r}`}/**
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
 */class pp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const u=e(i);a(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function mp(n,e={}){return Cn(n,"GET","/v2/passwordPolicy",Xi(n,e))}/**
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
 */const gp=6;class _p{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:gp,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class yp{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ka(this),this.idTokenSubscription=new Ka(this),this.beforeStateQueue=new pp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ol,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=nt(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await _n.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ul(this,{idToken:e}),r=await tt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ze(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ws(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Zf()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ze(this.app))return Promise.reject($t(this));const t=e?Le(e):null;return t&&G(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ze(this.app)?Promise.reject($t(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ze(this.app)?Promise.reject($t(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(nt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await mp(this),t=new _p(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Tr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await hp(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&nt(e)||this._popupRedirectResolver;G(t,this,"argument-error"),this.redirectPersistenceManager=await _n.create(this,[nt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=El(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Qf(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ds(n){return Le(n)}class Ka{constructor(e){this.auth=e,this.observer=null,this.addObserver=Md(t=>this.observer=t)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let eo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function vp(n){eo=n}function wp(n){return eo.loadJS(n)}function Ep(){return eo.gapiScript}function Tp(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Ip(n,e){const t=Hi(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(_s(i,e??{}))return s;He(s,"already-initialized")}return t.initialize({options:e})}function bp(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(nt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function xp(n,e,t){const r=Ds(n);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Tl(e),{host:a,port:c}=Ap(e),u=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Rp()}function Tl(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Ap(n){const e=Tl(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Qa(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Qa(a)}}}function Qa(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Rp(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Il{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return et("not implemented")}_getIdTokenResponse(e){return et("not implemented")}_linkToIdToken(e,t){return et("not implemented")}_getReauthenticationResolver(e){return et("not implemented")}}/**
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
 */async function yn(n,e){return np(n,"POST","/v1/accounts:signInWithIdp",Xi(n,e))}/**
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
 */const Sp="http://localhost";class zt extends Il{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new zt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):He("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=Wi(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new zt(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return yn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,yn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,yn(e,t)}buildRequest(){const e={requestUri:Sp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ir(t)}return e}}/**
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
 */class to{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class xr extends to{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class _t extends xr{constructor(){super("facebook.com")}static credential(e){return zt._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _t.credential(e.oauthAccessToken)}catch{return null}}}_t.FACEBOOK_SIGN_IN_METHOD="facebook.com";_t.PROVIDER_ID="facebook.com";/**
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
 */class Ye extends xr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return zt._fromParams({providerId:Ye.PROVIDER_ID,signInMethod:Ye.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ye.credentialFromTaggedObject(e)}static credentialFromError(e){return Ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Ye.credential(t,r)}catch{return null}}}Ye.GOOGLE_SIGN_IN_METHOD="google.com";Ye.PROVIDER_ID="google.com";/**
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
 */class yt extends xr{constructor(){super("github.com")}static credential(e){return zt._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yt.credential(e.oauthAccessToken)}catch{return null}}}yt.GITHUB_SIGN_IN_METHOD="github.com";yt.PROVIDER_ID="github.com";/**
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
 */class vt extends xr{constructor(){super("twitter.com")}static credential(e,t){return zt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return vt.credential(t,r)}catch{return null}}}vt.TWITTER_SIGN_IN_METHOD="twitter.com";vt.PROVIDER_ID="twitter.com";/**
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
 */class Tn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await tt._fromIdTokenResponse(e,r,s),a=Ja(r);return new Tn({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Ja(r);return new Tn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Ja(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Es extends ct{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Es.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Es(e,t,r,s)}}function bl(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Es._fromErrorAndOperation(n,i,e,r):i})}async function Pp(n,e,t=!1){const r=await dr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Tn._forOperation(n,"link",r)}/**
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
 */async function kp(n,e,t=!1){const{auth:r}=n;if(Ze(r.app))return Promise.reject($t(r));const s="reauthenticate";try{const i=await dr(n,bl(r,s,e,n),t);G(i.idToken,r,"internal-error");const a=Yi(i.idToken);G(a,r,"internal-error");const{sub:c}=a;return G(n.uid===c,r,"user-mismatch"),Tn._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&He(r,"user-mismatch"),i}}/**
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
 */async function Cp(n,e,t=!1){if(Ze(n.app))return Promise.reject($t(n));const r="signIn",s=await bl(n,r,e),i=await Tn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function Np(n,e,t,r){return Le(n).onIdTokenChanged(e,t,r)}function Dp(n,e,t){return Le(n).beforeAuthStateChanged(e,t)}function Vp(n,e,t,r){return Le(n).onAuthStateChanged(e,t,r)}function Mp(n){return Le(n).signOut()}const Ts="__sak";/**
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
 */class xl{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ts,"1"),this.storage.removeItem(Ts),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Op=1e3,jp=10;class Al extends xl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=wl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);fp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,jp):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Op)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Al.type="LOCAL";const Lp=Al;/**
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
 */class Rl extends xl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Rl.type="SESSION";const Sl=Rl;/**
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
 */function Fp(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Vs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Vs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async f=>f(t.origin,i)),u=await Fp(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vs.receivers=[];/**
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
 */function no(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Up{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,u)=>{const f=no("",20);s.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(T){const x=T;if(x.data.eventId===f)switch(x.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(x.data.response);break;default:clearTimeout(m),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function qe(){return window}function Bp(n){qe().location.href=n}/**
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
 */function Pl(){return typeof qe().WorkerGlobalScope<"u"&&typeof qe().importScripts=="function"}async function $p(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qp(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Gp(){return Pl()?self:null}/**
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
 */const kl="firebaseLocalStorageDb",zp=1,Is="firebaseLocalStorage",Cl="fbase_key";class Ar{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ms(n,e){return n.transaction([Is],e?"readwrite":"readonly").objectStore(Is)}function Hp(){const n=indexedDB.deleteDatabase(kl);return new Ar(n).toPromise()}function Pi(){const n=indexedDB.open(kl,zp);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Is,{keyPath:Cl})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Is)?e(r):(r.close(),await Hp(),e(await Pi()))})})}async function Xa(n,e,t){const r=Ms(n,!0).put({[Cl]:e,value:t});return new Ar(r).toPromise()}async function Wp(n,e){const t=Ms(n,!1).get(e),r=await new Ar(t).toPromise();return r===void 0?null:r.value}function Ya(n,e){const t=Ms(n,!0).delete(e);return new Ar(t).toPromise()}const Kp=800,Qp=3;class Nl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Pi(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Qp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vs._getInstance(Gp()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await $p(),!this.activeServiceWorker)return;this.sender=new Up(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Pi();return await Xa(e,Ts,"1"),await Ya(e,Ts),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Xa(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Wp(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ya(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ms(s,!1).getAll();return new Ar(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Kp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Nl.type="LOCAL";const Jp=Nl;new br(3e4,6e4);/**
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
 */function Dl(n,e){return e?nt(e):(G(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class ro extends Il{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return yn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return yn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return yn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Xp(n){return Cp(n.auth,new ro(n),n.bypassAuthState)}function Yp(n){const{auth:e,user:t}=n;return G(t,e,"internal-error"),kp(t,new ro(n),n.bypassAuthState)}async function Zp(n){const{auth:e,user:t}=n;return G(t,e,"internal-error"),Pp(t,new ro(n),n.bypassAuthState)}/**
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
 */class Vl{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Xp;case"linkViaPopup":case"linkViaRedirect":return Zp;case"reauthViaPopup":case"reauthViaRedirect":return Yp;default:He(this.auth,"internal-error")}}resolve(e){it(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){it(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const em=new br(2e3,1e4);async function tm(n,e,t){if(Ze(n.app))return Promise.reject(Be(n,"operation-not-supported-in-this-environment"));const r=Ds(n);Jf(n,e,to);const s=Dl(r,t);return new Ut(r,"signInViaPopup",e,s).executeNotNull()}class Ut extends Vl{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ut.currentPopupAction&&Ut.currentPopupAction.cancel(),Ut.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){it(this.filter.length===1,"Popup operations only handle one event");const e=no();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Be(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Be(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ut.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Be(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,em.get())};e()}}Ut.currentPopupAction=null;/**
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
 */const nm="pendingRedirect",us=new Map;class rm extends Vl{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=us.get(this.auth._key());if(!e){try{const r=await sm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}us.set(this.auth._key(),e)}return this.bypassAuthState||us.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sm(n,e){const t=am(e),r=om(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function im(n,e){us.set(n._key(),e)}function om(n){return nt(n._redirectPersistence)}function am(n){return ls(nm,n.config.apiKey,n.name)}async function cm(n,e,t=!1){if(Ze(n.app))return Promise.reject($t(n));const r=Ds(n),s=Dl(r,e),a=await new rm(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const lm=10*60*1e3;class um{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hm(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Ml(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Be(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lm&&this.cachedEventUids.clear(),this.cachedEventUids.has(Za(e))}saveEventToCache(e){this.cachedEventUids.add(Za(e)),this.lastProcessedEventTime=Date.now()}}function Za(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ml({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hm(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ml(n);default:return!1}}/**
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
 */async function dm(n,e={}){return Cn(n,"GET","/v1/projects",e)}/**
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
 */const fm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pm=/^https?/;async function mm(n){if(n.config.emulator)return;const{authorizedDomains:e}=await dm(n);for(const t of e)try{if(gm(t))return}catch{}He(n,"unauthorized-domain")}function gm(n){const e=Ri(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!pm.test(t))return!1;if(fm.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const _m=new br(3e4,6e4);function ec(){const n=qe().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function ym(n){return new Promise((e,t)=>{var r,s,i;function a(){ec(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ec(),t(Be(n,"network-request-failed"))},timeout:_m.get()})}if(!((s=(r=qe().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=qe().gapi)===null||i===void 0)&&i.load)a();else{const c=Tp("iframefcb");return qe()[c]=()=>{gapi.load?a():t(Be(n,"network-request-failed"))},wp(`${Ep()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw hs=null,e})}let hs=null;function vm(n){return hs=hs||ym(n),hs}/**
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
 */const wm=new br(5e3,15e3),Em="__/auth/iframe",Tm="emulator/auth/iframe",Im={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xm(n){const e=n.config;G(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ji(e,Tm):`https://${n.config.authDomain}/${Em}`,r={apiKey:e.apiKey,appName:n.name,v:kn},s=bm.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Ir(r).slice(1)}`}async function Am(n){const e=await vm(n),t=qe().gapi;return G(t,n,"internal-error"),e.open({where:document.body,url:xm(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Im,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Be(n,"network-request-failed"),c=qe().setTimeout(()=>{i(a)},wm.get());function u(){qe().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const Rm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Sm=500,Pm=600,km="_blank",Cm="http://localhost";class tc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Nm(n,e,t,r=Sm,s=Pm){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Rm),{width:r.toString(),height:s.toString(),top:i,left:a}),f=Ne().toLowerCase();t&&(c=ml(f)?km:t),fl(f)&&(e=e||Cm,u.scrollbars="yes");const m=Object.entries(u).reduce((x,[R,D])=>`${x}${R}=${D},`,"");if(dp(f)&&c!=="_self")return Dm(e||"",c),new tc(null);const T=window.open(e||"",c,m);G(T,n,"popup-blocked");try{T.focus()}catch{}return new tc(T)}function Dm(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Vm="__/auth/handler",Mm="emulator/auth/handler",Om=encodeURIComponent("fac");async function nc(n,e,t,r,s,i){G(n.config.authDomain,n,"auth-domain-config-required"),G(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:kn,eventId:s};if(e instanceof to){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Vd(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,T]of Object.entries({}))a[m]=T}if(e instanceof xr){const m=e.getScopes().filter(T=>T!=="");m.length>0&&(a.scopes=m.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const m of Object.keys(c))c[m]===void 0&&delete c[m];const u=await n._getAppCheckToken(),f=u?`#${Om}=${encodeURIComponent(u)}`:"";return`${jm(n)}?${Ir(c).slice(1)}${f}`}function jm({config:n}){return n.emulator?Ji(n,Mm):`https://${n.authDomain}/${Vm}`}/**
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
 */const mi="webStorageSupport";class Lm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sl,this._completeRedirectFn=cm,this._overrideRedirectResult=im}async _openPopup(e,t,r,s){var i;it((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await nc(e,t,r,Ri(),s);return Nm(e,a,no())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await nc(e,t,r,Ri(),s);return Bp(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(it(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Am(e),r=new um(e);return t.register("authEvent",s=>(G(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(mi,{type:mi},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[mi];a!==void 0&&t(!!a),He(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=mm(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return wl()||pl()||Zi()}}const Fm=Lm;var rc="@firebase/auth",sc="1.7.9";/**
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
 */class Um{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Bm(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $m(n){En(new Gt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;G(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:El(n)},f=new yp(r,s,i,u);return bp(f,t),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),En(new Gt("auth-internal",e=>{const t=Ds(e.getProvider("auth").getImmediate());return(r=>new Um(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),It(rc,sc,Bm(n)),It(rc,sc,"esm2017")}/**
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
 */const qm=5*60,Gm=Yc("authIdTokenMaxAge")||qm;let ic=null;const zm=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Gm)return;const s=t==null?void 0:t.token;ic!==s&&(ic=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Hm(n=nl()){const e=Hi(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Ip(n,{popupRedirectResolver:Fm,persistence:[Jp,Lp,Sl]}),r=Yc("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=zm(i.toString());Dp(t,a,()=>a(t.currentUser)),Np(t,c=>a(c))}}const s=Jc("auth");return s&&xp(t,`http://${s}`),t}function Wm(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}vp({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Be("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",Wm().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$m("Browser");var oc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qt,Ol;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,g){function _(){}_.prototype=g.prototype,E.D=g.prototype,E.prototype=new _,E.prototype.constructor=E,E.C=function(v,w,I){for(var y=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)y[Ve-2]=arguments[Ve];return g.prototype[w].apply(v,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,g,_){_||(_=0);var v=Array(16);if(typeof g=="string")for(var w=0;16>w;++w)v[w]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(w=0;16>w;++w)v[w]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=E.g[0],_=E.g[1],w=E.g[2];var I=E.g[3],y=g+(I^_&(w^I))+v[0]+3614090360&4294967295;g=_+(y<<7&4294967295|y>>>25),y=I+(w^g&(_^w))+v[1]+3905402710&4294967295,I=g+(y<<12&4294967295|y>>>20),y=w+(_^I&(g^_))+v[2]+606105819&4294967295,w=I+(y<<17&4294967295|y>>>15),y=_+(g^w&(I^g))+v[3]+3250441966&4294967295,_=w+(y<<22&4294967295|y>>>10),y=g+(I^_&(w^I))+v[4]+4118548399&4294967295,g=_+(y<<7&4294967295|y>>>25),y=I+(w^g&(_^w))+v[5]+1200080426&4294967295,I=g+(y<<12&4294967295|y>>>20),y=w+(_^I&(g^_))+v[6]+2821735955&4294967295,w=I+(y<<17&4294967295|y>>>15),y=_+(g^w&(I^g))+v[7]+4249261313&4294967295,_=w+(y<<22&4294967295|y>>>10),y=g+(I^_&(w^I))+v[8]+1770035416&4294967295,g=_+(y<<7&4294967295|y>>>25),y=I+(w^g&(_^w))+v[9]+2336552879&4294967295,I=g+(y<<12&4294967295|y>>>20),y=w+(_^I&(g^_))+v[10]+4294925233&4294967295,w=I+(y<<17&4294967295|y>>>15),y=_+(g^w&(I^g))+v[11]+2304563134&4294967295,_=w+(y<<22&4294967295|y>>>10),y=g+(I^_&(w^I))+v[12]+1804603682&4294967295,g=_+(y<<7&4294967295|y>>>25),y=I+(w^g&(_^w))+v[13]+4254626195&4294967295,I=g+(y<<12&4294967295|y>>>20),y=w+(_^I&(g^_))+v[14]+2792965006&4294967295,w=I+(y<<17&4294967295|y>>>15),y=_+(g^w&(I^g))+v[15]+1236535329&4294967295,_=w+(y<<22&4294967295|y>>>10),y=g+(w^I&(_^w))+v[1]+4129170786&4294967295,g=_+(y<<5&4294967295|y>>>27),y=I+(_^w&(g^_))+v[6]+3225465664&4294967295,I=g+(y<<9&4294967295|y>>>23),y=w+(g^_&(I^g))+v[11]+643717713&4294967295,w=I+(y<<14&4294967295|y>>>18),y=_+(I^g&(w^I))+v[0]+3921069994&4294967295,_=w+(y<<20&4294967295|y>>>12),y=g+(w^I&(_^w))+v[5]+3593408605&4294967295,g=_+(y<<5&4294967295|y>>>27),y=I+(_^w&(g^_))+v[10]+38016083&4294967295,I=g+(y<<9&4294967295|y>>>23),y=w+(g^_&(I^g))+v[15]+3634488961&4294967295,w=I+(y<<14&4294967295|y>>>18),y=_+(I^g&(w^I))+v[4]+3889429448&4294967295,_=w+(y<<20&4294967295|y>>>12),y=g+(w^I&(_^w))+v[9]+568446438&4294967295,g=_+(y<<5&4294967295|y>>>27),y=I+(_^w&(g^_))+v[14]+3275163606&4294967295,I=g+(y<<9&4294967295|y>>>23),y=w+(g^_&(I^g))+v[3]+4107603335&4294967295,w=I+(y<<14&4294967295|y>>>18),y=_+(I^g&(w^I))+v[8]+1163531501&4294967295,_=w+(y<<20&4294967295|y>>>12),y=g+(w^I&(_^w))+v[13]+2850285829&4294967295,g=_+(y<<5&4294967295|y>>>27),y=I+(_^w&(g^_))+v[2]+4243563512&4294967295,I=g+(y<<9&4294967295|y>>>23),y=w+(g^_&(I^g))+v[7]+1735328473&4294967295,w=I+(y<<14&4294967295|y>>>18),y=_+(I^g&(w^I))+v[12]+2368359562&4294967295,_=w+(y<<20&4294967295|y>>>12),y=g+(_^w^I)+v[5]+4294588738&4294967295,g=_+(y<<4&4294967295|y>>>28),y=I+(g^_^w)+v[8]+2272392833&4294967295,I=g+(y<<11&4294967295|y>>>21),y=w+(I^g^_)+v[11]+1839030562&4294967295,w=I+(y<<16&4294967295|y>>>16),y=_+(w^I^g)+v[14]+4259657740&4294967295,_=w+(y<<23&4294967295|y>>>9),y=g+(_^w^I)+v[1]+2763975236&4294967295,g=_+(y<<4&4294967295|y>>>28),y=I+(g^_^w)+v[4]+1272893353&4294967295,I=g+(y<<11&4294967295|y>>>21),y=w+(I^g^_)+v[7]+4139469664&4294967295,w=I+(y<<16&4294967295|y>>>16),y=_+(w^I^g)+v[10]+3200236656&4294967295,_=w+(y<<23&4294967295|y>>>9),y=g+(_^w^I)+v[13]+681279174&4294967295,g=_+(y<<4&4294967295|y>>>28),y=I+(g^_^w)+v[0]+3936430074&4294967295,I=g+(y<<11&4294967295|y>>>21),y=w+(I^g^_)+v[3]+3572445317&4294967295,w=I+(y<<16&4294967295|y>>>16),y=_+(w^I^g)+v[6]+76029189&4294967295,_=w+(y<<23&4294967295|y>>>9),y=g+(_^w^I)+v[9]+3654602809&4294967295,g=_+(y<<4&4294967295|y>>>28),y=I+(g^_^w)+v[12]+3873151461&4294967295,I=g+(y<<11&4294967295|y>>>21),y=w+(I^g^_)+v[15]+530742520&4294967295,w=I+(y<<16&4294967295|y>>>16),y=_+(w^I^g)+v[2]+3299628645&4294967295,_=w+(y<<23&4294967295|y>>>9),y=g+(w^(_|~I))+v[0]+4096336452&4294967295,g=_+(y<<6&4294967295|y>>>26),y=I+(_^(g|~w))+v[7]+1126891415&4294967295,I=g+(y<<10&4294967295|y>>>22),y=w+(g^(I|~_))+v[14]+2878612391&4294967295,w=I+(y<<15&4294967295|y>>>17),y=_+(I^(w|~g))+v[5]+4237533241&4294967295,_=w+(y<<21&4294967295|y>>>11),y=g+(w^(_|~I))+v[12]+1700485571&4294967295,g=_+(y<<6&4294967295|y>>>26),y=I+(_^(g|~w))+v[3]+2399980690&4294967295,I=g+(y<<10&4294967295|y>>>22),y=w+(g^(I|~_))+v[10]+4293915773&4294967295,w=I+(y<<15&4294967295|y>>>17),y=_+(I^(w|~g))+v[1]+2240044497&4294967295,_=w+(y<<21&4294967295|y>>>11),y=g+(w^(_|~I))+v[8]+1873313359&4294967295,g=_+(y<<6&4294967295|y>>>26),y=I+(_^(g|~w))+v[15]+4264355552&4294967295,I=g+(y<<10&4294967295|y>>>22),y=w+(g^(I|~_))+v[6]+2734768916&4294967295,w=I+(y<<15&4294967295|y>>>17),y=_+(I^(w|~g))+v[13]+1309151649&4294967295,_=w+(y<<21&4294967295|y>>>11),y=g+(w^(_|~I))+v[4]+4149444226&4294967295,g=_+(y<<6&4294967295|y>>>26),y=I+(_^(g|~w))+v[11]+3174756917&4294967295,I=g+(y<<10&4294967295|y>>>22),y=w+(g^(I|~_))+v[2]+718787259&4294967295,w=I+(y<<15&4294967295|y>>>17),y=_+(I^(w|~g))+v[9]+3951481745&4294967295,E.g[0]=E.g[0]+g&4294967295,E.g[1]=E.g[1]+(w+(y<<21&4294967295|y>>>11))&4294967295,E.g[2]=E.g[2]+w&4294967295,E.g[3]=E.g[3]+I&4294967295}r.prototype.u=function(E,g){g===void 0&&(g=E.length);for(var _=g-this.blockSize,v=this.B,w=this.h,I=0;I<g;){if(w==0)for(;I<=_;)s(this,E,I),I+=this.blockSize;if(typeof E=="string"){for(;I<g;)if(v[w++]=E.charCodeAt(I++),w==this.blockSize){s(this,v),w=0;break}}else for(;I<g;)if(v[w++]=E[I++],w==this.blockSize){s(this,v),w=0;break}}this.h=w,this.o+=g},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var g=1;g<E.length-8;++g)E[g]=0;var _=8*this.o;for(g=E.length-8;g<E.length;++g)E[g]=_&255,_/=256;for(this.u(E),E=Array(16),g=_=0;4>g;++g)for(var v=0;32>v;v+=8)E[_++]=this.g[g]>>>v&255;return E};function i(E,g){var _=c;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=g(E)}function a(E,g){this.h=g;for(var _=[],v=!0,w=E.length-1;0<=w;w--){var I=E[w]|0;v&&I==g||(_[w]=I,v=!1)}this.g=_}var c={};function u(E){return-128<=E&&128>E?i(E,function(g){return new a([g|0],0>g?-1:0)}):new a([E|0],0>E?-1:0)}function f(E){if(isNaN(E)||!isFinite(E))return T;if(0>E)return S(f(-E));for(var g=[],_=1,v=0;E>=_;v++)g[v]=E/_|0,_*=4294967296;return new a(g,0)}function m(E,g){if(E.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(E.charAt(0)=="-")return S(m(E.substring(1),g));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=f(Math.pow(g,8)),v=T,w=0;w<E.length;w+=8){var I=Math.min(8,E.length-w),y=parseInt(E.substring(w,w+I),g);8>I?(I=f(Math.pow(g,I)),v=v.j(I).add(f(y))):(v=v.j(_),v=v.add(f(y)))}return v}var T=u(0),x=u(1),R=u(16777216);n=a.prototype,n.m=function(){if(C(this))return-S(this).m();for(var E=0,g=1,_=0;_<this.g.length;_++){var v=this.i(_);E+=(0<=v?v:4294967296+v)*g,g*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(D(this))return"0";if(C(this))return"-"+S(this).toString(E);for(var g=f(Math.pow(E,6)),_=this,v="";;){var w=F(_,g).g;_=O(_,w.j(g));var I=((0<_.g.length?_.g[0]:_.h)>>>0).toString(E);if(_=w,D(_))return I+v;for(;6>I.length;)I="0"+I;v=I+v}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function D(E){if(E.h!=0)return!1;for(var g=0;g<E.g.length;g++)if(E.g[g]!=0)return!1;return!0}function C(E){return E.h==-1}n.l=function(E){return E=O(this,E),C(E)?-1:D(E)?0:1};function S(E){for(var g=E.g.length,_=[],v=0;v<g;v++)_[v]=~E.g[v];return new a(_,~E.h).add(x)}n.abs=function(){return C(this)?S(this):this},n.add=function(E){for(var g=Math.max(this.g.length,E.g.length),_=[],v=0,w=0;w<=g;w++){var I=v+(this.i(w)&65535)+(E.i(w)&65535),y=(I>>>16)+(this.i(w)>>>16)+(E.i(w)>>>16);v=y>>>16,I&=65535,y&=65535,_[w]=y<<16|I}return new a(_,_[_.length-1]&-2147483648?-1:0)};function O(E,g){return E.add(S(g))}n.j=function(E){if(D(this)||D(E))return T;if(C(this))return C(E)?S(this).j(S(E)):S(S(this).j(E));if(C(E))return S(this.j(S(E)));if(0>this.l(R)&&0>E.l(R))return f(this.m()*E.m());for(var g=this.g.length+E.g.length,_=[],v=0;v<2*g;v++)_[v]=0;for(v=0;v<this.g.length;v++)for(var w=0;w<E.g.length;w++){var I=this.i(v)>>>16,y=this.i(v)&65535,Ve=E.i(w)>>>16,Qe=E.i(w)&65535;_[2*v+2*w]+=y*Qe,j(_,2*v+2*w),_[2*v+2*w+1]+=I*Qe,j(_,2*v+2*w+1),_[2*v+2*w+1]+=y*Ve,j(_,2*v+2*w+1),_[2*v+2*w+2]+=I*Ve,j(_,2*v+2*w+2)}for(v=0;v<g;v++)_[v]=_[2*v+1]<<16|_[2*v];for(v=g;v<2*g;v++)_[v]=0;return new a(_,0)};function j(E,g){for(;(E[g]&65535)!=E[g];)E[g+1]+=E[g]>>>16,E[g]&=65535,g++}function P(E,g){this.g=E,this.h=g}function F(E,g){if(D(g))throw Error("division by zero");if(D(E))return new P(T,T);if(C(E))return g=F(S(E),g),new P(S(g.g),S(g.h));if(C(g))return g=F(E,S(g)),new P(S(g.g),g.h);if(30<E.g.length){if(C(E)||C(g))throw Error("slowDivide_ only works with positive integers.");for(var _=x,v=g;0>=v.l(E);)_=K(_),v=K(v);var w=Q(_,1),I=Q(v,1);for(v=Q(v,2),_=Q(_,2);!D(v);){var y=I.add(v);0>=y.l(E)&&(w=w.add(_),I=y),v=Q(v,1),_=Q(_,1)}return g=O(E,w.j(g)),new P(w,g)}for(w=T;0<=E.l(g);){for(_=Math.max(1,Math.floor(E.m()/g.m())),v=Math.ceil(Math.log(_)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),I=f(_),y=I.j(g);C(y)||0<y.l(E);)_-=v,I=f(_),y=I.j(g);D(I)&&(I=x),w=w.add(I),E=O(E,y)}return new P(w,E)}n.A=function(E){return F(this,E).h},n.and=function(E){for(var g=Math.max(this.g.length,E.g.length),_=[],v=0;v<g;v++)_[v]=this.i(v)&E.i(v);return new a(_,this.h&E.h)},n.or=function(E){for(var g=Math.max(this.g.length,E.g.length),_=[],v=0;v<g;v++)_[v]=this.i(v)|E.i(v);return new a(_,this.h|E.h)},n.xor=function(E){for(var g=Math.max(this.g.length,E.g.length),_=[],v=0;v<g;v++)_[v]=this.i(v)^E.i(v);return new a(_,this.h^E.h)};function K(E){for(var g=E.g.length+1,_=[],v=0;v<g;v++)_[v]=E.i(v)<<1|E.i(v-1)>>>31;return new a(_,E.h)}function Q(E,g){var _=g>>5;g%=32;for(var v=E.g.length-_,w=[],I=0;I<v;I++)w[I]=0<g?E.i(I+_)>>>g|E.i(I+_+1)<<32-g:E.i(I+_);return new a(w,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ol=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=m,qt=a}).apply(typeof oc<"u"?oc:typeof self<"u"?self:typeof window<"u"?window:{});var ss=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jl,nr,Ll,ds,ki,Fl,Ul,Bl;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,h){return o==Array.prototype||o==Object.prototype||(o[l]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ss=="object"&&ss];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(o,l){if(l)e:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var b=o[p];if(!(b in h))break e;h=h[b]}o=o[o.length-1],p=h[o],l=l(p),l!=p&&l!=null&&e(h,o,{configurable:!0,writable:!0,value:l})}}function i(o,l){o instanceof String&&(o+="");var h=0,p=!1,b={next:function(){if(!p&&h<o.length){var A=h++;return{value:l(A,o[A]),done:!1}}return p=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}s("Array.prototype.values",function(o){return o||function(){return i(this,function(l,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function f(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function m(o,l,h){return o.call.apply(o.bind,arguments)}function T(o,l,h){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,p),o.apply(l,b)}}return function(){return o.apply(l,arguments)}}function x(o,l,h){return x=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:T,x.apply(null,arguments)}function R(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function D(o,l){function h(){}h.prototype=l.prototype,o.aa=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(p,b,A){for(var M=Array(arguments.length-2),ne=2;ne<arguments.length;ne++)M[ne-2]=arguments[ne];return l.prototype[b].apply(p,M)}}function C(o){const l=o.length;if(0<l){const h=Array(l);for(let p=0;p<l;p++)h[p]=o[p];return h}return[]}function S(o,l){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(u(p)){const b=o.length||0,A=p.length||0;o.length=b+A;for(let M=0;M<A;M++)o[b+M]=p[M]}else o.push(p)}}class O{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function j(o){return/^[\s\xa0]*$/.test(o)}function P(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function F(o){return F[" "](o),o}F[" "]=function(){};var K=P().indexOf("Gecko")!=-1&&!(P().toLowerCase().indexOf("webkit")!=-1&&P().indexOf("Edge")==-1)&&!(P().indexOf("Trident")!=-1||P().indexOf("MSIE")!=-1)&&P().indexOf("Edge")==-1;function Q(o,l,h){for(const p in o)l.call(h,o[p],p,o)}function E(o,l){for(const h in o)l.call(void 0,o[h],h,o)}function g(o){const l={};for(const h in o)l[h]=o[h];return l}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(o,l){let h,p;for(let b=1;b<arguments.length;b++){p=arguments[b];for(h in p)o[h]=p[h];for(let A=0;A<_.length;A++)h=_[A],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function w(o){var l=1;o=o.split(":");const h=[];for(;0<l&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function I(o){c.setTimeout(()=>{throw o},0)}function y(){var o=ut;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class Ve{constructor(){this.h=this.g=null}add(l,h){const p=Qe.get();p.set(l,h),this.h?this.h.next=p:this.g=p,this.h=p}}var Qe=new O(()=>new Hs,o=>o.reset());class Hs{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Pt,lt=!1,ut=new Ve,Xt=()=>{const o=c.Promise.resolve(void 0);Pt=()=>{o.then(Ws)}};var Ws=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(h){I(h)}var l=Qe;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}lt=!1};function $e(){this.s=this.s,this.C=this.C}$e.prototype.s=!1,$e.prototype.ma=function(){this.s||(this.s=!0,this.N())},$e.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function me(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}me.prototype.h=function(){this.defaultPrevented=!0};var Ks=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};c.addEventListener("test",h,l),c.removeEventListener("test",h,l)}catch{}return o}();function ht(o,l){if(me.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(K){e:{try{F(l.nodeName);var b=!0;break e}catch{}b=!1}b||(l=null)}}else h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement);this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Qs[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&ht.aa.h.call(this)}}D(ht,me);var Qs={2:"touch",3:"pen",4:"mouse"};ht.prototype.h=function(){ht.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var kt="closure_listenable_"+(1e6*Math.random()|0),Yt=0;function Dr(o,l,h,p,b){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!p,this.ha=b,this.key=++Yt,this.da=this.fa=!1}function Ct(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Nt(o){this.src=o,this.g={},this.h=0}Nt.prototype.add=function(o,l,h,p,b){var A=o.toString();o=this.g[A],o||(o=this.g[A]=[],this.h++);var M=en(o,l,p,b);return-1<M?(l=o[M],h||(l.fa=!1)):(l=new Dr(l,this.src,A,!!p,b),l.fa=h,o.push(l)),l};function Zt(o,l){var h=l.type;if(h in o.g){var p=o.g[h],b=Array.prototype.indexOf.call(p,l,void 0),A;(A=0<=b)&&Array.prototype.splice.call(p,b,1),A&&(Ct(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function en(o,l,h,p){for(var b=0;b<o.length;++b){var A=o[b];if(!A.da&&A.listener==l&&A.capture==!!h&&A.ha==p)return b}return-1}var On="closure_lm_"+(1e6*Math.random()|0),jn={};function ue(o,l,h,p,b){if(Array.isArray(l)){for(var A=0;A<l.length;A++)ue(o,l[A],h,p,b);return null}return h=Mr(h),o&&o[kt]?o.K(l,h,f(p)?!!p.capture:!1,b):Dt(o,l,h,!1,p,b)}function Dt(o,l,h,p,b,A){if(!l)throw Error("Invalid event type");var M=f(b)?!!b.capture:!!b,ne=nn(o);if(ne||(o[On]=ne=new Nt(o)),h=ne.add(l,h,p,M,A),h.proxy)return h;if(p=Ln(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)Ks||(b=M),b===void 0&&(b=!1),o.addEventListener(l.toString(),p,b);else if(o.attachEvent)o.attachEvent(tn(l.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Ln(){function o(h){return l.call(o.src,o.listener,h)}const l=Vr;return o}function we(o,l,h,p,b){if(Array.isArray(l))for(var A=0;A<l.length;A++)we(o,l[A],h,p,b);else p=f(p)?!!p.capture:!!p,h=Mr(h),o&&o[kt]?(o=o.i,l=String(l).toString(),l in o.g&&(A=o.g[l],h=en(A,h,p,b),-1<h&&(Ct(A[h]),Array.prototype.splice.call(A,h,1),A.length==0&&(delete o.g[l],o.h--)))):o&&(o=nn(o))&&(l=o.g[l.toString()],o=-1,l&&(o=en(l,h,p,b)),(h=-1<o?l[o]:null)&&Fn(h))}function Fn(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[kt])Zt(l.i,o);else{var h=o.type,p=o.proxy;l.removeEventListener?l.removeEventListener(h,p,o.capture):l.detachEvent?l.detachEvent(tn(h),p):l.addListener&&l.removeListener&&l.removeListener(p),(h=nn(l))?(Zt(h,o),h.h==0&&(h.src=null,l[On]=null)):Ct(o)}}}function tn(o){return o in jn?jn[o]:jn[o]="on"+o}function Vr(o,l){if(o.da)o=!0;else{l=new ht(l,this);var h=o.listener,p=o.ha||o.src;o.fa&&Fn(o),o=h.call(p,l)}return o}function nn(o){return o=o[On],o instanceof Nt?o:null}var rn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Mr(o){return typeof o=="function"?o:(o[rn]||(o[rn]=function(l){return o.handleEvent(l)}),o[rn])}function ye(){$e.call(this),this.i=new Nt(this),this.M=this,this.F=null}D(ye,$e),ye.prototype[kt]=!0,ye.prototype.removeEventListener=function(o,l,h,p){we(this,o,l,h,p)};function Ee(o,l){var h,p=o.F;if(p)for(h=[];p;p=p.F)h.push(p);if(o=o.M,p=l.type||l,typeof l=="string")l=new me(l,o);else if(l instanceof me)l.target=l.target||o;else{var b=l;l=new me(p,o),v(l,b)}if(b=!0,h)for(var A=h.length-1;0<=A;A--){var M=l.g=h[A];b=sn(M,p,!0,l)&&b}if(M=l.g=o,b=sn(M,p,!0,l)&&b,b=sn(M,p,!1,l)&&b,h)for(A=0;A<h.length;A++)M=l.g=h[A],b=sn(M,p,!1,l)&&b}ye.prototype.N=function(){if(ye.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var h=o.g[l],p=0;p<h.length;p++)Ct(h[p]);delete o.g[l],o.h--}}this.F=null},ye.prototype.K=function(o,l,h,p){return this.i.add(String(o),l,!1,h,p)},ye.prototype.L=function(o,l,h,p){return this.i.add(String(o),l,!0,h,p)};function sn(o,l,h,p){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var b=!0,A=0;A<l.length;++A){var M=l[A];if(M&&!M.da&&M.capture==h){var ne=M.listener,Te=M.ha||M.src;M.fa&&Zt(o.i,M),b=ne.call(Te,p)!==!1&&b}}return b&&!p.defaultPrevented}function Or(o,l,h){if(typeof o=="function")h&&(o=x(o,h));else if(o&&typeof o.handleEvent=="function")o=x(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(o,l||0)}function Un(o){o.g=Or(()=>{o.g=null,o.i&&(o.i=!1,Un(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class jr extends $e{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Un(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function dt(o){$e.call(this),this.h=o,this.g={}}D(dt,$e);var Lr=[];function Fr(o){Q(o.g,function(l,h){this.g.hasOwnProperty(h)&&Fn(l)},o),o.g={}}dt.prototype.N=function(){dt.aa.N.call(this),Fr(this)},dt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Bn=c.JSON.stringify,k=c.JSON.parse,L=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function q(){}q.prototype.h=null;function se(o){return o.h||(o.h=o.i())}function re(){}var he={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function de(){me.call(this,"d")}D(de,me);function on(){me.call(this,"c")}D(on,me);var Vt={},Fo=null;function Ur(){return Fo=Fo||new ye}Vt.La="serverreachability";function Uo(o){me.call(this,Vt.La,o)}D(Uo,me);function $n(o){const l=Ur();Ee(l,new Uo(l))}Vt.STAT_EVENT="statevent";function Bo(o,l){me.call(this,Vt.STAT_EVENT,o),this.stat=l}D(Bo,me);function De(o){const l=Ur();Ee(l,new Bo(l,o))}Vt.Ma="timingevent";function $o(o,l){me.call(this,Vt.Ma,o),this.size=l}D($o,me);function qn(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},l)}function Gn(){this.g=!0}Gn.prototype.xa=function(){this.g=!1};function th(o,l,h,p,b,A){o.info(function(){if(o.g)if(A)for(var M="",ne=A.split("&"),Te=0;Te<ne.length;Te++){var Z=ne[Te].split("=");if(1<Z.length){var Re=Z[0];Z=Z[1];var Se=Re.split("_");M=2<=Se.length&&Se[1]=="type"?M+(Re+"="+Z+"&"):M+(Re+"=redacted&")}}else M=null;else M=A;return"XMLHTTP REQ ("+p+") [attempt "+b+"]: "+l+`
`+h+`
`+M})}function nh(o,l,h,p,b,A,M){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+b+"]: "+l+`
`+h+`
`+A+" "+M})}function an(o,l,h,p){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+sh(o,h)+(p?" "+p:"")})}function rh(o,l){o.info(function(){return"TIMEOUT: "+l})}Gn.prototype.info=function(){};function sh(o,l){if(!o.g)return l;if(!l)return null;try{var h=JSON.parse(l);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var p=h[o];if(!(2>p.length)){var b=p[1];if(Array.isArray(b)&&!(1>b.length)){var A=b[0];if(A!="noop"&&A!="stop"&&A!="close")for(var M=1;M<b.length;M++)b[M]=""}}}}return Bn(h)}catch{return l}}var Br={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},qo={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Js;function $r(){}D($r,q),$r.prototype.g=function(){return new XMLHttpRequest},$r.prototype.i=function(){return{}},Js=new $r;function ft(o,l,h,p){this.j=o,this.i=l,this.l=h,this.R=p||1,this.U=new dt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Go}function Go(){this.i=null,this.g="",this.h=!1}var zo={},Xs={};function Ys(o,l,h){o.L=1,o.v=Hr(Je(l)),o.m=h,o.P=!0,Ho(o,null)}function Ho(o,l){o.F=Date.now(),qr(o),o.A=Je(o.v);var h=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),oa(h.i,"t",p),o.C=0,h=o.j.J,o.h=new Go,o.g=ba(o.j,h?l:null,!o.m),0<o.O&&(o.M=new jr(x(o.Y,o,o.g),o.O)),l=o.U,h=o.g,p=o.ca;var b="readystatechange";Array.isArray(b)||(b&&(Lr[0]=b.toString()),b=Lr);for(var A=0;A<b.length;A++){var M=ue(h,b[A],p||l.handleEvent,!1,l.h||l);if(!M)break;l.g[M.key]=M}l=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),$n(),th(o.i,o.u,o.A,o.l,o.R,o.m)}ft.prototype.ca=function(o){o=o.target;const l=this.M;l&&Xe(o)==3?l.j():this.Y(o)},ft.prototype.Y=function(o){try{if(o==this.g)e:{const Se=Xe(this.g);var l=this.g.Ba();const un=this.g.Z();if(!(3>Se)&&(Se!=3||this.g&&(this.h.h||this.g.oa()||fa(this.g)))){this.J||Se!=4||l==7||(l==8||0>=un?$n(3):$n(2)),Zs(this);var h=this.g.Z();this.X=h;t:if(Wo(this)){var p=fa(this.g);o="";var b=p.length,A=Xe(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Mt(this),zn(this);var M="";break t}this.h.i=new c.TextDecoder}for(l=0;l<b;l++)this.h.h=!0,o+=this.h.i.decode(p[l],{stream:!(A&&l==b-1)});p.length=0,this.h.g+=o,this.C=0,M=this.h.g}else M=this.g.oa();if(this.o=h==200,nh(this.i,this.u,this.A,this.l,this.R,Se,h),this.o){if(this.T&&!this.K){t:{if(this.g){var ne,Te=this.g;if((ne=Te.g?Te.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(ne)){var Z=ne;break t}}Z=null}if(h=Z)an(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ei(this,h);else{this.o=!1,this.s=3,De(12),Mt(this),zn(this);break e}}if(this.P){h=!0;let Fe;for(;!this.J&&this.C<M.length;)if(Fe=ih(this,M),Fe==Xs){Se==4&&(this.s=4,De(14),h=!1),an(this.i,this.l,null,"[Incomplete Response]");break}else if(Fe==zo){this.s=4,De(15),an(this.i,this.l,M,"[Invalid Chunk]"),h=!1;break}else an(this.i,this.l,Fe,null),ei(this,Fe);if(Wo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Se!=4||M.length!=0||this.h.h||(this.s=1,De(16),h=!1),this.o=this.o&&h,!h)an(this.i,this.l,M,"[Invalid Chunked Response]"),Mt(this),zn(this);else if(0<M.length&&!this.W){this.W=!0;var Re=this.j;Re.g==this&&Re.ba&&!Re.M&&(Re.j.info("Great, no buffering proxy detected. Bytes received: "+M.length),oi(Re),Re.M=!0,De(11))}}else an(this.i,this.l,M,null),ei(this,M);Se==4&&Mt(this),this.o&&!this.J&&(Se==4?wa(this.j,this):(this.o=!1,qr(this)))}else Th(this.g),h==400&&0<M.indexOf("Unknown SID")?(this.s=3,De(12)):(this.s=0,De(13)),Mt(this),zn(this)}}}catch{}finally{}};function Wo(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function ih(o,l){var h=o.C,p=l.indexOf(`
`,h);return p==-1?Xs:(h=Number(l.substring(h,p)),isNaN(h)?zo:(p+=1,p+h>l.length?Xs:(l=l.slice(p,p+h),o.C=p+h,l)))}ft.prototype.cancel=function(){this.J=!0,Mt(this)};function qr(o){o.S=Date.now()+o.I,Ko(o,o.I)}function Ko(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=qn(x(o.ba,o),l)}function Zs(o){o.B&&(c.clearTimeout(o.B),o.B=null)}ft.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(rh(this.i,this.A),this.L!=2&&($n(),De(17)),Mt(this),this.s=2,zn(this)):Ko(this,this.S-o)};function zn(o){o.j.G==0||o.J||wa(o.j,o)}function Mt(o){Zs(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,Fr(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function ei(o,l){try{var h=o.j;if(h.G!=0&&(h.g==o||ti(h.h,o))){if(!o.K&&ti(h.h,o)&&h.G==3){try{var p=h.Da.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var b=p;if(b[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Yr(h),Jr(h);else break e;ii(h),De(18)}}else h.za=b[1],0<h.za-h.T&&37500>b[2]&&h.F&&h.v==0&&!h.C&&(h.C=qn(x(h.Za,h),6e3));if(1>=Xo(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else jt(h,11)}else if((o.K||h.g==o)&&Yr(h),!j(l))for(b=h.Da.g.parse(l),l=0;l<b.length;l++){let Z=b[l];if(h.T=Z[0],Z=Z[1],h.G==2)if(Z[0]=="c"){h.K=Z[1],h.ia=Z[2];const Re=Z[3];Re!=null&&(h.la=Re,h.j.info("VER="+h.la));const Se=Z[4];Se!=null&&(h.Aa=Se,h.j.info("SVER="+h.Aa));const un=Z[5];un!=null&&typeof un=="number"&&0<un&&(p=1.5*un,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const Fe=o.g;if(Fe){const es=Fe.g?Fe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(es){var A=p.h;A.g||es.indexOf("spdy")==-1&&es.indexOf("quic")==-1&&es.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(ni(A,A.h),A.h=null))}if(p.D){const ai=Fe.g?Fe.g.getResponseHeader("X-HTTP-Session-Id"):null;ai&&(p.ya=ai,ie(p.I,p.D,ai))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var M=o;if(p.qa=Ia(p,p.J?p.ia:null,p.W),M.K){Yo(p.h,M);var ne=M,Te=p.L;Te&&(ne.I=Te),ne.B&&(Zs(ne),qr(ne)),p.g=M}else ya(p);0<h.i.length&&Xr(h)}else Z[0]!="stop"&&Z[0]!="close"||jt(h,7);else h.G==3&&(Z[0]=="stop"||Z[0]=="close"?Z[0]=="stop"?jt(h,7):si(h):Z[0]!="noop"&&h.l&&h.l.ta(Z),h.v=0)}}$n(4)}catch{}}var oh=class{constructor(o,l){this.g=o,this.map=l}};function Qo(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Jo(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Xo(o){return o.h?1:o.g?o.g.size:0}function ti(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function ni(o,l){o.g?o.g.add(l):o.h=l}function Yo(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}Qo.prototype.cancel=function(){if(this.i=Zo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Zo(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const h of o.g.values())l=l.concat(h.D);return l}return C(o.i)}function ah(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var l=[],h=o.length,p=0;p<h;p++)l.push(o[p]);return l}l=[],h=0;for(p in o)l[h++]=o[p];return l}function ch(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var l=[];o=o.length;for(var h=0;h<o;h++)l.push(h);return l}l=[],h=0;for(const p in o)l[h++]=p;return l}}}function ea(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var h=ch(o),p=ah(o),b=p.length,A=0;A<b;A++)l.call(void 0,p[A],h&&h[A],o)}var ta=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lh(o,l){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var p=o[h].indexOf("="),b=null;if(0<=p){var A=o[h].substring(0,p);b=o[h].substring(p+1)}else A=o[h];l(A,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Ot(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Ot){this.h=o.h,Gr(this,o.j),this.o=o.o,this.g=o.g,zr(this,o.s),this.l=o.l;var l=o.i,h=new Kn;h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),na(this,h),this.m=o.m}else o&&(l=String(o).match(ta))?(this.h=!1,Gr(this,l[1]||"",!0),this.o=Hn(l[2]||""),this.g=Hn(l[3]||"",!0),zr(this,l[4]),this.l=Hn(l[5]||"",!0),na(this,l[6]||"",!0),this.m=Hn(l[7]||"")):(this.h=!1,this.i=new Kn(null,this.h))}Ot.prototype.toString=function(){var o=[],l=this.j;l&&o.push(Wn(l,ra,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push(Wn(l,ra,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Wn(h,h.charAt(0)=="/"?dh:hh,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Wn(h,ph)),o.join("")};function Je(o){return new Ot(o)}function Gr(o,l,h){o.j=h?Hn(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function zr(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function na(o,l,h){l instanceof Kn?(o.i=l,mh(o.i,o.h)):(h||(l=Wn(l,fh)),o.i=new Kn(l,o.h))}function ie(o,l,h){o.i.set(l,h)}function Hr(o){return ie(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Hn(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Wn(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,uh),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function uh(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var ra=/[#\/\?@]/g,hh=/[#\?:]/g,dh=/[#\?]/g,fh=/[#\?@]/g,ph=/#/g;function Kn(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function pt(o){o.g||(o.g=new Map,o.h=0,o.i&&lh(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}n=Kn.prototype,n.add=function(o,l){pt(this),this.i=null,o=cn(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function sa(o,l){pt(o),l=cn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function ia(o,l){return pt(o),l=cn(o,l),o.g.has(l)}n.forEach=function(o,l){pt(this),this.g.forEach(function(h,p){h.forEach(function(b){o.call(l,b,p,this)},this)},this)},n.na=function(){pt(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),h=[];for(let p=0;p<l.length;p++){const b=o[p];for(let A=0;A<b.length;A++)h.push(l[p])}return h},n.V=function(o){pt(this);let l=[];if(typeof o=="string")ia(this,o)&&(l=l.concat(this.g.get(cn(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)l=l.concat(o[h])}return l},n.set=function(o,l){return pt(this),this.i=null,o=cn(this,o),ia(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function oa(o,l,h){sa(o,l),0<h.length&&(o.i=null,o.g.set(cn(o,l),C(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var h=0;h<l.length;h++){var p=l[h];const A=encodeURIComponent(String(p)),M=this.V(p);for(p=0;p<M.length;p++){var b=A;M[p]!==""&&(b+="="+encodeURIComponent(String(M[p]))),o.push(b)}}return this.i=o.join("&")};function cn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function mh(o,l){l&&!o.j&&(pt(o),o.i=null,o.g.forEach(function(h,p){var b=p.toLowerCase();p!=b&&(sa(this,p),oa(this,b,h))},o)),o.j=l}function gh(o,l){const h=new Gn;if(c.Image){const p=new Image;p.onload=R(mt,h,"TestLoadImage: loaded",!0,l,p),p.onerror=R(mt,h,"TestLoadImage: error",!1,l,p),p.onabort=R(mt,h,"TestLoadImage: abort",!1,l,p),p.ontimeout=R(mt,h,"TestLoadImage: timeout",!1,l,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else l(!1)}function _h(o,l){const h=new Gn,p=new AbortController,b=setTimeout(()=>{p.abort(),mt(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:p.signal}).then(A=>{clearTimeout(b),A.ok?mt(h,"TestPingServer: ok",!0,l):mt(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(b),mt(h,"TestPingServer: error",!1,l)})}function mt(o,l,h,p,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),p(h)}catch{}}function yh(){this.g=new L}function vh(o,l,h){const p=h||"";try{ea(o,function(b,A){let M=b;f(b)&&(M=Bn(b)),l.push(p+A+"="+encodeURIComponent(M))})}catch(b){throw l.push(p+"type="+encodeURIComponent("_badmap")),b}}function Wr(o){this.l=o.Ub||null,this.j=o.eb||!1}D(Wr,q),Wr.prototype.g=function(){return new Kr(this.l,this.j)},Wr.prototype.i=function(o){return function(){return o}}({});function Kr(o,l){ye.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(Kr,ye),n=Kr.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,Jn(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qn(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Jn(this)),this.g&&(this.readyState=3,Jn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;aa(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function aa(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?Qn(this):Jn(this),this.readyState==3&&aa(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Qn(this))},n.Qa=function(o){this.g&&(this.response=o,Qn(this))},n.ga=function(){this.g&&Qn(this)};function Qn(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Jn(o)}n.setRequestHeader=function(o,l){this.u.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function Jn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Kr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function ca(o){let l="";return Q(o,function(h,p){l+=p,l+=":",l+=h,l+=`\r
`}),l}function ri(o,l,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=ca(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):ie(o,l,h))}function ce(o){ye.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(ce,ye);var wh=/^https?$/i,Eh=["POST","PUT"];n=ce.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,l,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Js.g(),this.v=this.o?se(this.o):se(Js),this.g.onreadystatechange=x(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(A){la(this,A);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var b in p)h.set(b,p[b]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const A of p.keys())h.set(A,p.get(A));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(A=>A.toLowerCase()=="content-type"),b=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Eh,l,void 0))||p||b||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,M]of h)this.g.setRequestHeader(A,M);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{da(this),this.u=!0,this.g.send(o),this.u=!1}catch(A){la(this,A)}};function la(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,ua(o),Qr(o)}function ua(o){o.A||(o.A=!0,Ee(o,"complete"),Ee(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ee(this,"complete"),Ee(this,"abort"),Qr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Qr(this,!0)),ce.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ha(this):this.bb())},n.bb=function(){ha(this)};function ha(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Xe(o)!=4||o.Z()!=2)){if(o.u&&Xe(o)==4)Or(o.Ea,0,o);else if(Ee(o,"readystatechange"),Xe(o)==4){o.h=!1;try{const M=o.Z();e:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var p;if(p=M===0){var b=String(o.D).match(ta)[1]||null;!b&&c.self&&c.self.location&&(b=c.self.location.protocol.slice(0,-1)),p=!wh.test(b?b.toLowerCase():"")}h=p}if(h)Ee(o,"complete"),Ee(o,"success");else{o.m=6;try{var A=2<Xe(o)?o.g.statusText:""}catch{A=""}o.l=A+" ["+o.Z()+"]",ua(o)}}finally{Qr(o)}}}}function Qr(o,l){if(o.g){da(o);const h=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||Ee(o,"ready");try{h.onreadystatechange=p}catch{}}}function da(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Xe(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Xe(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),k(l)}};function fa(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Th(o){const l={};o=(o.g&&2<=Xe(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(j(o[p]))continue;var h=w(o[p]);const b=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const A=l[b]||[];l[b]=A,A.push(h)}E(l,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xn(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function pa(o){this.Aa=0,this.i=[],this.j=new Gn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Xn("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Xn("baseRetryDelayMs",5e3,o),this.cb=Xn("retryDelaySeedMs",1e4,o),this.Wa=Xn("forwardChannelMaxRetries",2,o),this.wa=Xn("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Qo(o&&o.concurrentRequestLimit),this.Da=new yh,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=pa.prototype,n.la=8,n.G=1,n.connect=function(o,l,h,p){De(0),this.W=o,this.H=l||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=Ia(this,null,this.W),Xr(this)};function si(o){if(ma(o),o.G==3){var l=o.U++,h=Je(o.I);if(ie(h,"SID",o.K),ie(h,"RID",l),ie(h,"TYPE","terminate"),Yn(o,h),l=new ft(o,o.j,l),l.L=2,l.v=Hr(Je(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=l.v,h=!0),h||(l.g=ba(l.j,null),l.g.ea(l.v)),l.F=Date.now(),qr(l)}Ta(o)}function Jr(o){o.g&&(oi(o),o.g.cancel(),o.g=null)}function ma(o){Jr(o),o.u&&(c.clearTimeout(o.u),o.u=null),Yr(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Xr(o){if(!Jo(o.h)&&!o.s){o.s=!0;var l=o.Ga;Pt||Xt(),lt||(Pt(),lt=!0),ut.add(l,o),o.B=0}}function Ih(o,l){return Xo(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=qn(x(o.Ga,o,l),Ea(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const b=new ft(this,this.j,o);let A=this.o;if(this.S&&(A?(A=g(A),v(A,this.S)):A=this.S),this.m!==null||this.O||(b.H=A,A=null),this.P)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,4096<l){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=_a(this,b,l),h=Je(this.I),ie(h,"RID",o),ie(h,"CVER",22),this.D&&ie(h,"X-HTTP-Session-Id",this.D),Yn(this,h),A&&(this.O?l="headers="+encodeURIComponent(String(ca(A)))+"&"+l:this.m&&ri(h,this.m,A)),ni(this.h,b),this.Ua&&ie(h,"TYPE","init"),this.P?(ie(h,"$req",l),ie(h,"SID","null"),b.T=!0,Ys(b,h,null)):Ys(b,h,l),this.G=2}}else this.G==3&&(o?ga(this,o):this.i.length==0||Jo(this.h)||ga(this))};function ga(o,l){var h;l?h=l.l:h=o.U++;const p=Je(o.I);ie(p,"SID",o.K),ie(p,"RID",h),ie(p,"AID",o.T),Yn(o,p),o.m&&o.o&&ri(p,o.m,o.o),h=new ft(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),l&&(o.i=l.D.concat(o.i)),l=_a(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ni(o.h,h),Ys(h,p,l)}function Yn(o,l){o.H&&Q(o.H,function(h,p){ie(l,p,h)}),o.l&&ea({},function(h,p){ie(l,p,h)})}function _a(o,l,h){h=Math.min(o.i.length,h);var p=o.l?x(o.l.Na,o.l,o):null;e:{var b=o.i;let A=-1;for(;;){const M=["count="+h];A==-1?0<h?(A=b[0].g,M.push("ofs="+A)):A=0:M.push("ofs="+A);let ne=!0;for(let Te=0;Te<h;Te++){let Z=b[Te].g;const Re=b[Te].map;if(Z-=A,0>Z)A=Math.max(0,b[Te].g-100),ne=!1;else try{vh(Re,M,"req"+Z+"_")}catch{p&&p(Re)}}if(ne){p=M.join("&");break e}}}return o=o.i.splice(0,h),l.D=o,p}function ya(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;Pt||Xt(),lt||(Pt(),lt=!0),ut.add(l,o),o.v=0}}function ii(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=qn(x(o.Fa,o),Ea(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,va(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=qn(x(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,De(10),Jr(this),va(this))};function oi(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function va(o){o.g=new ft(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=Je(o.qa);ie(l,"RID","rpc"),ie(l,"SID",o.K),ie(l,"AID",o.T),ie(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&ie(l,"TO",o.ja),ie(l,"TYPE","xmlhttp"),Yn(o,l),o.m&&o.o&&ri(l,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=Hr(Je(l)),h.m=null,h.P=!0,Ho(h,o)}n.Za=function(){this.C!=null&&(this.C=null,Jr(this),ii(this),De(19))};function Yr(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function wa(o,l){var h=null;if(o.g==l){Yr(o),oi(o),o.g=null;var p=2}else if(ti(o.h,l))h=l.D,Yo(o.h,l),p=1;else return;if(o.G!=0){if(l.o)if(p==1){h=l.m?l.m.length:0,l=Date.now()-l.F;var b=o.B;p=Ur(),Ee(p,new $o(p,h)),Xr(o)}else ya(o);else if(b=l.s,b==3||b==0&&0<l.X||!(p==1&&Ih(o,l)||p==2&&ii(o)))switch(h&&0<h.length&&(l=o.h,l.i=l.i.concat(h)),b){case 1:jt(o,5);break;case 4:jt(o,10);break;case 3:jt(o,6);break;default:jt(o,2)}}}function Ea(o,l){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*l}function jt(o,l){if(o.j.info("Error code "+l),l==2){var h=x(o.fb,o),p=o.Xa;const b=!p;p=new Ot(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Gr(p,"https"),Hr(p),b?gh(p.toString(),h):_h(p.toString(),h)}else De(2);o.G=0,o.l&&o.l.sa(l),Ta(o),ma(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),De(2)):(this.j.info("Failed to ping google.com"),De(1))};function Ta(o){if(o.G=0,o.ka=[],o.l){const l=Zo(o.h);(l.length!=0||o.i.length!=0)&&(S(o.ka,l),S(o.ka,o.i),o.h.i.length=0,C(o.i),o.i.length=0),o.l.ra()}}function Ia(o,l,h){var p=h instanceof Ot?Je(h):new Ot(h);if(p.g!="")l&&(p.g=l+"."+p.g),zr(p,p.s);else{var b=c.location;p=b.protocol,l=l?l+"."+b.hostname:b.hostname,b=+b.port;var A=new Ot(null);p&&Gr(A,p),l&&(A.g=l),b&&zr(A,b),h&&(A.l=h),p=A}return h=o.D,l=o.ya,h&&l&&ie(p,h,l),ie(p,"VER",o.la),Yn(o,p),p}function ba(o,l,h){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new ce(new Wr({eb:h})):new ce(o.pa),l.Ha(o.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function xa(){}n=xa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Zr(){}Zr.prototype.g=function(o,l){return new Me(o,l)};function Me(o,l){ye.call(this),this.g=new pa(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!j(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!j(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new ln(this)}D(Me,ye),Me.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Me.prototype.close=function(){si(this.g)},Me.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Bn(o),o=h);l.i.push(new oh(l.Ya++,o)),l.G==3&&Xr(l)},Me.prototype.N=function(){this.g.l=null,delete this.j,si(this.g),delete this.g,Me.aa.N.call(this)};function Aa(o){de.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const h in l){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}D(Aa,de);function Ra(){on.call(this),this.status=1}D(Ra,on);function ln(o){this.g=o}D(ln,xa),ln.prototype.ua=function(){Ee(this.g,"a")},ln.prototype.ta=function(o){Ee(this.g,new Aa(o))},ln.prototype.sa=function(o){Ee(this.g,new Ra)},ln.prototype.ra=function(){Ee(this.g,"b")},Zr.prototype.createWebChannel=Zr.prototype.g,Me.prototype.send=Me.prototype.o,Me.prototype.open=Me.prototype.m,Me.prototype.close=Me.prototype.close,Bl=function(){return new Zr},Ul=function(){return Ur()},Fl=Vt,ki={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Br.NO_ERROR=0,Br.TIMEOUT=8,Br.HTTP_ERROR=6,ds=Br,qo.COMPLETE="complete",Ll=qo,re.EventType=he,he.OPEN="a",he.CLOSE="b",he.ERROR="c",he.MESSAGE="d",ye.prototype.listen=ye.prototype.K,nr=re,ce.prototype.listenOnce=ce.prototype.L,ce.prototype.getLastError=ce.prototype.Ka,ce.prototype.getLastErrorCode=ce.prototype.Ba,ce.prototype.getStatus=ce.prototype.Z,ce.prototype.getResponseJson=ce.prototype.Oa,ce.prototype.getResponseText=ce.prototype.oa,ce.prototype.send=ce.prototype.ea,ce.prototype.setWithCredentials=ce.prototype.Ha,jl=ce}).apply(typeof ss<"u"?ss:typeof self<"u"?self:typeof window<"u"?window:{});const ac="@firebase/firestore";/**
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
 */class ke{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ke.UNAUTHENTICATED=new ke(null),ke.GOOGLE_CREDENTIALS=new ke("google-credentials-uid"),ke.FIRST_PARTY=new ke("first-party-uid"),ke.MOCK_USER=new ke("mock-user");/**
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
 */let Nn="10.14.0";/**
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
 */const Ht=new Gi("@firebase/firestore");function er(){return Ht.logLevel}function U(n,...e){if(Ht.logLevel<=X.DEBUG){const t=e.map(so);Ht.debug(`Firestore (${Nn}): ${n}`,...t)}}function ot(n,...e){if(Ht.logLevel<=X.ERROR){const t=e.map(so);Ht.error(`Firestore (${Nn}): ${n}`,...t)}}function In(n,...e){if(Ht.logLevel<=X.WARN){const t=e.map(so);Ht.warn(`Firestore (${Nn}): ${n}`,...t)}}function so(n){if(typeof n=="string")return n;try{/**
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
 */function z(n="Unexpected state"){const e=`FIRESTORE (${Nn}) INTERNAL ASSERTION FAILED: `+n;throw ot(e),new Error(e)}function te(n,e){n||z()}function W(n,e){return n}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends ct{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class bt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class $l{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Km{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ke.UNAUTHENTICATED))}shutdown(){}}class Qm{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Jm{constructor(e){this.t=e,this.currentUser=ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){te(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new bt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new bt,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},c=u=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new bt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(te(typeof r.accessToken=="string"),new $l(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return te(e===null||typeof e=="string"),new ke(e)}}class Xm{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=ke.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Ym{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new Xm(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(ke.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Zm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class eg{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){te(this.o===void 0);const r=i=>{i.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,U("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(te(typeof t.token=="string"),this.R=t.token,new Zm(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function tg(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class ql{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=tg(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function ee(n,e){return n<e?-1:n>e?1:0}function bn(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */class _e{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new B(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new B(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new B(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return _e.fromMillis(Date.now())}static fromDate(e){return _e.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new _e(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class H{constructor(e){this.timestamp=e}static fromTimestamp(e){return new H(e)}static min(){return new H(new _e(0,0))}static max(){return new H(new _e(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class fr{constructor(e,t,r){t===void 0?t=0:t>e.length&&z(),r===void 0?r=e.length-t:r>e.length-t&&z(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return fr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof fr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),a=t.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class le extends fr{construct(e,t,r){return new le(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new le(t)}static emptyPath(){return new le([])}}const ng=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class be extends fr{construct(e,t,r){return new be(e,t,r)}static isValidIdentifier(e){return ng.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),be.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new be(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new B(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new B(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new B(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new B(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new be(t)}static emptyPath(){return new be([])}}/**
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
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(le.fromString(e))}static fromName(e){return new $(le.fromString(e).popFirst(5))}static empty(){return new $(le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return le.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new le(e.slice()))}}function rg(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=H.fromTimestamp(r===1e9?new _e(t+1,0):new _e(t,r));return new At(s,$.empty(),e)}function sg(n){return new At(n.readTime,n.key,-1)}class At{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new At(H.min(),$.empty(),-1)}static max(){return new At(H.max(),$.empty(),-1)}}function ig(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=$.comparator(n.documentKey,e.documentKey),t!==0?t:ee(n.largestBatchId,e.largestBatchId))}/**
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
 */const og="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ag{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Rr(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==og)throw n;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new N((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof N?t:N.resolve(t)}catch(t){return N.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):N.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):N.reject(t)}static resolve(e){return new N((t,r)=>{t(e)})}static reject(e){return new N((t,r)=>{r(e)})}static waitFor(e){return new N((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},u=>r(u))}),a=!0,i===s&&t()})}static or(e){let t=N.resolve(!1);for(const r of e)t=t.next(s=>s?N.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new N((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const f=u;t(e[f]).next(m=>{a[f]=m,++c,c===i&&r(a)},m=>s(m))}})}static doWhile(e,t){return new N((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function cg(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Sr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class io{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}io.oe=-1;function Os(n){return n==null}function bs(n){return n===0&&1/n==-1/0}function lg(n){return typeof n=="number"&&Number.isInteger(n)&&!bs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function cc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Dn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Gl(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ae{constructor(e,t){this.comparator=e,this.root=t||Ie.EMPTY}insert(e,t){return new ae(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ie.BLACK,null,null))}remove(e){return new ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ie.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new is(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new is(this.root,e,this.comparator,!1)}getReverseIterator(){return new is(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new is(this.root,e,this.comparator,!0)}}class is{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ie{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Ie.RED,this.left=s??Ie.EMPTY,this.right=i??Ie.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Ie(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ie.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ie.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const e=this.left.check();if(e!==this.right.check())throw z();return e+(this.isRed()?0:1)}}Ie.EMPTY=null,Ie.RED=!0,Ie.BLACK=!1;Ie.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(e,t,r,s,i){return this}insert(e,t,r){return new Ie(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class xe{constructor(e){this.comparator=e,this.data=new ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new lc(this.data.getIterator())}getIteratorFrom(e){return new lc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof xe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new xe(this.comparator);return t.data=e,t}}class lc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ue{constructor(e){this.fields=e,e.sort(be.comparator)}static empty(){return new Ue([])}unionWith(e){let t=new xe(be.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ue(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return bn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class zl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ae{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new zl("Invalid base64 string: "+i):i}}(e);return new Ae(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Ae(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ae.EMPTY_BYTE_STRING=new Ae("");const ug=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rt(n){if(te(!!n),typeof n=="string"){let e=0;const t=ug.exec(n);if(te(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:fe(n.seconds),nanos:fe(n.nanos)}}function fe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Wt(n){return typeof n=="string"?Ae.fromBase64String(n):Ae.fromUint8Array(n)}/**
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
 */function oo(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function ao(n){const e=n.mapValue.fields.__previous_value__;return oo(e)?ao(e):e}function pr(n){const e=Rt(n.mapValue.fields.__local_write_time__.timestampValue);return new _e(e.seconds,e.nanos)}/**
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
 */class hg{constructor(e,t,r,s,i,a,c,u,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=f}}class mr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new mr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof mr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const os={mapValue:{}};function Kt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?oo(n)?4:fg(n)?9007199254740991:dg(n)?10:11:z()}function We(n,e){if(n===e)return!0;const t=Kt(n);if(t!==Kt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return pr(n).isEqual(pr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Rt(s.timestampValue),c=Rt(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Wt(s.bytesValue).isEqual(Wt(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return fe(s.geoPointValue.latitude)===fe(i.geoPointValue.latitude)&&fe(s.geoPointValue.longitude)===fe(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return fe(s.integerValue)===fe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=fe(s.doubleValue),c=fe(i.doubleValue);return a===c?bs(a)===bs(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return bn(n.arrayValue.values||[],e.arrayValue.values||[],We);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(cc(a)!==cc(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!We(a[u],c[u])))return!1;return!0}(n,e);default:return z()}}function gr(n,e){return(n.values||[]).find(t=>We(t,e))!==void 0}function xn(n,e){if(n===e)return 0;const t=Kt(n),r=Kt(e);if(t!==r)return ee(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ee(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=fe(i.integerValue||i.doubleValue),u=fe(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return uc(n.timestampValue,e.timestampValue);case 4:return uc(pr(n),pr(e));case 5:return ee(n.stringValue,e.stringValue);case 6:return function(i,a){const c=Wt(i),u=Wt(a);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),u=a.split("/");for(let f=0;f<c.length&&f<u.length;f++){const m=ee(c[f],u[f]);if(m!==0)return m}return ee(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=ee(fe(i.latitude),fe(a.latitude));return c!==0?c:ee(fe(i.longitude),fe(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return hc(n.arrayValue,e.arrayValue);case 10:return function(i,a){var c,u,f,m;const T=i.fields||{},x=a.fields||{},R=(c=T.value)===null||c===void 0?void 0:c.arrayValue,D=(u=x.value)===null||u===void 0?void 0:u.arrayValue,C=ee(((f=R==null?void 0:R.values)===null||f===void 0?void 0:f.length)||0,((m=D==null?void 0:D.values)===null||m===void 0?void 0:m.length)||0);return C!==0?C:hc(R,D)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===os.mapValue&&a===os.mapValue)return 0;if(i===os.mapValue)return 1;if(a===os.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),f=a.fields||{},m=Object.keys(f);u.sort(),m.sort();for(let T=0;T<u.length&&T<m.length;++T){const x=ee(u[T],m[T]);if(x!==0)return x;const R=xn(c[u[T]],f[m[T]]);if(R!==0)return R}return ee(u.length,m.length)}(n.mapValue,e.mapValue);default:throw z()}}function uc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ee(n,e);const t=Rt(n),r=Rt(e),s=ee(t.seconds,r.seconds);return s!==0?s:ee(t.nanos,r.nanos)}function hc(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=xn(t[s],r[s]);if(i)return i}return ee(t.length,r.length)}function An(n){return Ci(n)}function Ci(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Rt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Wt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return $.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Ci(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Ci(t.fields[a])}`;return s+"}"}(n.mapValue):z()}function Ni(n){return!!n&&"integerValue"in n}function co(n){return!!n&&"arrayValue"in n}function dc(n){return!!n&&"nullValue"in n}function fc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function fs(n){return!!n&&"mapValue"in n}function dg(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function or(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Dn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=or(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=or(n.arrayValue.values[t]);return e}return Object.assign({},n)}function fg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Oe{constructor(e){this.value=e}static empty(){return new Oe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!fs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=or(t)}setAll(e){let t=be.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=or(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());fs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return We(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];fs(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Dn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Oe(or(this.value))}}function Hl(n){const e=[];return Dn(n.fields,(t,r)=>{const s=new be([t]);if(fs(r)){const i=Hl(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Ue(e)}/**
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
 */class Ce{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Ce(e,0,H.min(),H.min(),H.min(),Oe.empty(),0)}static newFoundDocument(e,t,r,s){return new Ce(e,1,t,H.min(),r,s,0)}static newNoDocument(e,t){return new Ce(e,2,t,H.min(),H.min(),Oe.empty(),0)}static newUnknownDocument(e,t){return new Ce(e,3,t,H.min(),H.min(),Oe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Oe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Oe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ce&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ce(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class xs{constructor(e,t){this.position=e,this.inclusive=t}}function pc(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=$.comparator($.fromName(a.referenceValue),t.key):r=xn(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function mc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!We(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class As{constructor(e,t="asc"){this.field=e,this.dir=t}}function pg(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Wl{}class ge extends Wl{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new gg(e,t,r):t==="array-contains"?new vg(e,r):t==="in"?new wg(e,r):t==="not-in"?new Eg(e,r):t==="array-contains-any"?new Tg(e,r):new ge(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new _g(e,r):new yg(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(xn(t,this.value)):t!==null&&Kt(this.value)===Kt(t)&&this.matchesComparison(xn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ke extends Wl{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Ke(e,t)}matches(e){return Kl(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Kl(n){return n.op==="and"}function Ql(n){return mg(n)&&Kl(n)}function mg(n){for(const e of n.filters)if(e instanceof Ke)return!1;return!0}function Di(n){if(n instanceof ge)return n.field.canonicalString()+n.op.toString()+An(n.value);if(Ql(n))return n.filters.map(e=>Di(e)).join(",");{const e=n.filters.map(t=>Di(t)).join(",");return`${n.op}(${e})`}}function Jl(n,e){return n instanceof ge?function(r,s){return s instanceof ge&&r.op===s.op&&r.field.isEqual(s.field)&&We(r.value,s.value)}(n,e):n instanceof Ke?function(r,s){return s instanceof Ke&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&Jl(a,s.filters[c]),!0):!1}(n,e):void z()}function Xl(n){return n instanceof ge?function(t){return`${t.field.canonicalString()} ${t.op} ${An(t.value)}`}(n):n instanceof Ke?function(t){return t.op.toString()+" {"+t.getFilters().map(Xl).join(" ,")+"}"}(n):"Filter"}class gg extends ge{constructor(e,t,r){super(e,t,r),this.key=$.fromName(r.referenceValue)}matches(e){const t=$.comparator(e.key,this.key);return this.matchesComparison(t)}}class _g extends ge{constructor(e,t){super(e,"in",t),this.keys=Yl("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class yg extends ge{constructor(e,t){super(e,"not-in",t),this.keys=Yl("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Yl(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>$.fromName(r.referenceValue))}class vg extends ge{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return co(t)&&gr(t.arrayValue,this.value)}}class wg extends ge{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&gr(this.value.arrayValue,t)}}class Eg extends ge{constructor(e,t){super(e,"not-in",t)}matches(e){if(gr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!gr(this.value.arrayValue,t)}}class Tg extends ge{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!co(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>gr(this.value.arrayValue,r))}}/**
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
 */class Ig{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.ue=null}}function gc(n,e=null,t=[],r=[],s=null,i=null,a=null){return new Ig(n,e,t,r,s,i,a)}function lo(n){const e=W(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Di(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Os(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>An(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>An(r)).join(",")),e.ue=t}return e.ue}function uo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!pg(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Jl(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!mc(n.startAt,e.startAt)&&mc(n.endAt,e.endAt)}function Vi(n){return $.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class js{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function bg(n,e,t,r,s,i,a,c){return new js(n,e,t,r,s,i,a,c)}function ho(n){return new js(n)}function _c(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function xg(n){return n.collectionGroup!==null}function ar(n){const e=W(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new xe(be.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new As(i,r))}),t.has(be.keyField().canonicalString())||e.ce.push(new As(be.keyField(),r))}return e.ce}function Ge(n){const e=W(n);return e.le||(e.le=Ag(e,ar(n))),e.le}function Ag(n,e){if(n.limitType==="F")return gc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new As(s.field,i)});const t=n.endAt?new xs(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new xs(n.startAt.position,n.startAt.inclusive):null;return gc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Mi(n,e,t){return new js(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ls(n,e){return uo(Ge(n),Ge(e))&&n.limitType===e.limitType}function Zl(n){return`${lo(Ge(n))}|lt:${n.limitType}`}function dn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Xl(s)).join(", ")}]`),Os(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>An(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>An(s)).join(",")),`Target(${r})`}(Ge(n))}; limitType=${n.limitType})`}function Fs(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):$.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of ar(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,u){const f=pc(a,c,u);return a.inclusive?f<=0:f<0}(r.startAt,ar(r),s)||r.endAt&&!function(a,c,u){const f=pc(a,c,u);return a.inclusive?f>=0:f>0}(r.endAt,ar(r),s))}(n,e)}function Rg(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function eu(n){return(e,t)=>{let r=!1;for(const s of ar(n)){const i=Sg(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Sg(n,e,t){const r=n.field.isKeyField()?$.comparator(e.key,t.key):function(i,a,c){const u=a.data.field(i),f=c.data.field(i);return u!==null&&f!==null?xn(u,f):z()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return z()}}/**
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
 */class Vn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Dn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Gl(this.inner)}size(){return this.innerSize}}/**
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
 */const Pg=new ae($.comparator);function at(){return Pg}const tu=new ae($.comparator);function rr(...n){let e=tu;for(const t of n)e=e.insert(t.key,t);return e}function nu(n){let e=tu;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Bt(){return cr()}function ru(){return cr()}function cr(){return new Vn(n=>n.toString(),(n,e)=>n.isEqual(e))}const kg=new ae($.comparator),Cg=new xe($.comparator);function J(...n){let e=Cg;for(const t of n)e=e.add(t);return e}const Ng=new xe(ee);function Dg(){return Ng}/**
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
 */function fo(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bs(e)?"-0":e}}function su(n){return{integerValue:""+n}}function Vg(n,e){return lg(e)?su(e):fo(n,e)}/**
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
 */class Us{constructor(){this._=void 0}}function Mg(n,e,t){return n instanceof _r?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&oo(i)&&(i=ao(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(t,e):n instanceof yr?ou(n,e):n instanceof vr?au(n,e):function(s,i){const a=iu(s,i),c=yc(a)+yc(s.Pe);return Ni(a)&&Ni(s.Pe)?su(c):fo(s.serializer,c)}(n,e)}function Og(n,e,t){return n instanceof yr?ou(n,e):n instanceof vr?au(n,e):t}function iu(n,e){return n instanceof Rs?function(r){return Ni(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class _r extends Us{}class yr extends Us{constructor(e){super(),this.elements=e}}function ou(n,e){const t=cu(e);for(const r of n.elements)t.some(s=>We(s,r))||t.push(r);return{arrayValue:{values:t}}}class vr extends Us{constructor(e){super(),this.elements=e}}function au(n,e){let t=cu(e);for(const r of n.elements)t=t.filter(s=>!We(s,r));return{arrayValue:{values:t}}}class Rs extends Us{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function yc(n){return fe(n.integerValue||n.doubleValue)}function cu(n){return co(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class jg{constructor(e,t){this.field=e,this.transform=t}}function Lg(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof yr&&s instanceof yr||r instanceof vr&&s instanceof vr?bn(r.elements,s.elements,We):r instanceof Rs&&s instanceof Rs?We(r.Pe,s.Pe):r instanceof _r&&s instanceof _r}(n.transform,e.transform)}class Fg{constructor(e,t){this.version=e,this.transformResults=t}}class rt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new rt}static exists(e){return new rt(void 0,e)}static updateTime(e){return new rt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ps(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Bs{}function lu(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new hu(n.key,rt.none()):new Pr(n.key,n.data,rt.none());{const t=n.data,r=Oe.empty();let s=new xe(be.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Qt(n.key,r,new Ue(s.toArray()),rt.none())}}function Ug(n,e,t){n instanceof Pr?function(s,i,a){const c=s.value.clone(),u=wc(s.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof Qt?function(s,i,a){if(!ps(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=wc(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(uu(s)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function lr(n,e,t,r){return n instanceof Pr?function(i,a,c,u){if(!ps(i.precondition,a))return c;const f=i.value.clone(),m=Ec(i.fieldTransforms,u,a);return f.setAll(m),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,e,t,r):n instanceof Qt?function(i,a,c,u){if(!ps(i.precondition,a))return c;const f=Ec(i.fieldTransforms,u,a),m=a.data;return m.setAll(uu(i)),m.setAll(f),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(T=>T.field))}(n,e,t,r):function(i,a,c){return ps(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function Bg(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=iu(r.transform,s||null);i!=null&&(t===null&&(t=Oe.empty()),t.set(r.field,i))}return t||null}function vc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&bn(r,s,(i,a)=>Lg(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Pr extends Bs{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Qt extends Bs{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function uu(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function wc(n,e,t){const r=new Map;te(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,Og(a,c,t[s]))}return r}function Ec(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,Mg(i,a,e))}return r}class hu extends Bs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $g extends Bs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class qg{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Ug(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=lr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=lr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=ru();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const u=lu(a,c);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(H.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),J())}isEqual(e){return this.batchId===e.batchId&&bn(this.mutations,e.mutations,(t,r)=>vc(t,r))&&bn(this.baseMutations,e.baseMutations,(t,r)=>vc(t,r))}}class po{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){te(e.mutations.length===r.length);let s=function(){return kg}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new po(e,t,r,s)}}/**
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
 */class Gg{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class zg{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var pe,Y;function Hg(n){switch(n){default:return z();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function du(n){if(n===void 0)return ot("GRPC error has no .code"),V.UNKNOWN;switch(n){case pe.OK:return V.OK;case pe.CANCELLED:return V.CANCELLED;case pe.UNKNOWN:return V.UNKNOWN;case pe.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case pe.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case pe.INTERNAL:return V.INTERNAL;case pe.UNAVAILABLE:return V.UNAVAILABLE;case pe.UNAUTHENTICATED:return V.UNAUTHENTICATED;case pe.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case pe.NOT_FOUND:return V.NOT_FOUND;case pe.ALREADY_EXISTS:return V.ALREADY_EXISTS;case pe.PERMISSION_DENIED:return V.PERMISSION_DENIED;case pe.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case pe.ABORTED:return V.ABORTED;case pe.OUT_OF_RANGE:return V.OUT_OF_RANGE;case pe.UNIMPLEMENTED:return V.UNIMPLEMENTED;case pe.DATA_LOSS:return V.DATA_LOSS;default:return z()}}(Y=pe||(pe={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Wg(){return new TextEncoder}/**
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
 */const Kg=new qt([4294967295,4294967295],0);function Tc(n){const e=Wg().encode(n),t=new Ol;return t.update(e),new Uint8Array(t.digest())}function Ic(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new qt([t,r],0),new qt([s,i],0)]}class mo{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new sr(`Invalid padding: ${t}`);if(r<0)throw new sr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new sr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new sr(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=qt.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(qt.fromNumber(r)));return s.compare(Kg)===1&&(s=new qt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Tc(e),[r,s]=Ic(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new mo(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Ie===0)return;const t=Tc(e),[r,s]=Ic(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class sr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class $s{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,kr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new $s(H.min(),s,new ae(ee),at(),J())}}class kr{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new kr(r,t,J(),J(),J())}}/**
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
 */class ms{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class fu{constructor(e,t){this.targetId=e,this.me=t}}class pu{constructor(e,t,r=Ae.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class bc{constructor(){this.fe=0,this.ge=Ac(),this.pe=Ae.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=J(),t=J(),r=J();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:z()}}),new kr(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Ac()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,te(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Qg{constructor(e){this.Le=e,this.Be=new Map,this.ke=at(),this.qe=xc(),this.Qe=new ae(ee)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:z()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(Vi(i))if(r===0){const a=new $(i.path);this.Ue(t,a,Ce.newNoDocument(a,H.min()))}else te(r===1);else{const a=this.Ye(t);if(a!==r){const c=this.Ze(e),u=c?this.Xe(c,e,a):1;if(u!==0){this.je(t);const f=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,f)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=Wt(r).toUint8Array()}catch(u){if(u instanceof zl)return In("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new mo(a,s,i)}catch(u){return In(u instanceof sr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.Ie===0?null:c}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,a)=>{const c=this.Je(a);if(c){if(i.current&&Vi(c.target)){const u=new $(c.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,Ce.newNoDocument(u,e))}i.be&&(t.set(a,i.ve()),i.Ce())}});let r=J();this.qe.forEach((i,a)=>{let c=!0;a.forEachWhile(u=>{const f=this.Je(u);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new $s(e,t,this.Qe,this.ke,r);return this.ke=at(),this.qe=xc(),this.Qe=new ae(ee),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new bc,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new xe(ee),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||U("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new bc),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function xc(){return new ae($.comparator)}function Ac(){return new ae($.comparator)}const Jg={asc:"ASCENDING",desc:"DESCENDING"},Xg={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Yg={and:"AND",or:"OR"};class Zg{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Oi(n,e){return n.useProto3Json||Os(e)?e:{value:e}}function Ss(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function mu(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function e_(n,e){return Ss(n,e.toTimestamp())}function ze(n){return te(!!n),H.fromTimestamp(function(t){const r=Rt(t);return new _e(r.seconds,r.nanos)}(n))}function go(n,e){return ji(n,e).canonicalString()}function ji(n,e){const t=function(s){return new le(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function gu(n){const e=le.fromString(n);return te(Eu(e)),e}function Li(n,e){return go(n.databaseId,e.path)}function gi(n,e){const t=gu(e);if(t.get(1)!==n.databaseId.projectId)throw new B(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new B(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new $(yu(t))}function _u(n,e){return go(n.databaseId,e)}function t_(n){const e=gu(n);return e.length===4?le.emptyPath():yu(e)}function Fi(n){return new le(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function yu(n){return te(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Rc(n,e,t){return{name:Li(n,e),fields:t.value.mapValue.fields}}function n_(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:z()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(f,m){return f.useProto3Json?(te(m===void 0||typeof m=="string"),Ae.fromBase64String(m||"")):(te(m===void 0||m instanceof Buffer||m instanceof Uint8Array),Ae.fromUint8Array(m||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(f){const m=f.code===void 0?V.UNKNOWN:du(f.code);return new B(m,f.message||"")}(a);t=new pu(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=gi(n,r.document.name),i=ze(r.document.updateTime),a=r.document.createTime?ze(r.document.createTime):H.min(),c=new Oe({mapValue:{fields:r.document.fields}}),u=Ce.newFoundDocument(s,i,a,c),f=r.targetIds||[],m=r.removedTargetIds||[];t=new ms(f,m,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=gi(n,r.document),i=r.readTime?ze(r.readTime):H.min(),a=Ce.newNoDocument(s,i),c=r.removedTargetIds||[];t=new ms([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=gi(n,r.document),i=r.removedTargetIds||[];t=new ms([],i,s,null)}else{if(!("filter"in e))return z();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new zg(s,i),c=r.targetId;t=new fu(c,a)}}return t}function r_(n,e){let t;if(e instanceof Pr)t={update:Rc(n,e.key,e.value)};else if(e instanceof hu)t={delete:Li(n,e.key)};else if(e instanceof Qt)t={update:Rc(n,e.key,e.data),updateMask:d_(e.fieldMask)};else{if(!(e instanceof $g))return z();t={verify:Li(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof _r)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof yr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof vr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Rs)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw z()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:e_(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:z()}(n,e.precondition)),t}function s_(n,e){return n&&n.length>0?(te(e!==void 0),n.map(t=>function(s,i){let a=s.updateTime?ze(s.updateTime):ze(i);return a.isEqual(H.min())&&(a=ze(i)),new Fg(a,s.transformResults||[])}(t,e))):[]}function i_(n,e){return{documents:[_u(n,e.path)]}}function o_(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=_u(n,s);const i=function(f){if(f.length!==0)return wu(Ke.create(f,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(f){if(f.length!==0)return f.map(m=>function(x){return{field:fn(x.field),direction:l_(x.dir)}}(m))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Oi(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(e.endAt)),{_t:t,parent:s}}function a_(n){let e=t_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){te(r===1);const m=t.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let i=[];t.where&&(i=function(T){const x=vu(T);return x instanceof Ke&&Ql(x)?x.getFilters():[x]}(t.where));let a=[];t.orderBy&&(a=function(T){return T.map(x=>function(D){return new As(pn(D.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(x))}(t.orderBy));let c=null;t.limit&&(c=function(T){let x;return x=typeof T=="object"?T.value:T,Os(x)?null:x}(t.limit));let u=null;t.startAt&&(u=function(T){const x=!!T.before,R=T.values||[];return new xs(R,x)}(t.startAt));let f=null;return t.endAt&&(f=function(T){const x=!T.before,R=T.values||[];return new xs(R,x)}(t.endAt)),bg(e,s,a,i,c,"F",u,f)}function c_(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function vu(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=pn(t.unaryFilter.field);return ge.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=pn(t.unaryFilter.field);return ge.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=pn(t.unaryFilter.field);return ge.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=pn(t.unaryFilter.field);return ge.create(a,"!=",{nullValue:"NULL_VALUE"});default:return z()}}(n):n.fieldFilter!==void 0?function(t){return ge.create(pn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ke.create(t.compositeFilter.filters.map(r=>vu(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return z()}}(t.compositeFilter.op))}(n):z()}function l_(n){return Jg[n]}function u_(n){return Xg[n]}function h_(n){return Yg[n]}function fn(n){return{fieldPath:n.canonicalString()}}function pn(n){return be.fromServerFormat(n.fieldPath)}function wu(n){return n instanceof ge?function(t){if(t.op==="=="){if(fc(t.value))return{unaryFilter:{field:fn(t.field),op:"IS_NAN"}};if(dc(t.value))return{unaryFilter:{field:fn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(fc(t.value))return{unaryFilter:{field:fn(t.field),op:"IS_NOT_NAN"}};if(dc(t.value))return{unaryFilter:{field:fn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fn(t.field),op:u_(t.op),value:t.value}}}(n):n instanceof Ke?function(t){const r=t.getFilters().map(s=>wu(s));return r.length===1?r[0]:{compositeFilter:{op:h_(t.op),filters:r}}}(n):z()}function d_(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Eu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class wt{constructor(e,t,r,s,i=H.min(),a=H.min(),c=Ae.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new wt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new wt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class f_{constructor(e){this.ct=e}}function p_(n){const e=a_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Mi(e,e.limit,"L"):e}/**
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
 */class m_{constructor(){this.un=new g_}addToCollectionParentIndex(e,t){return this.un.add(t),N.resolve()}getCollectionParents(e,t){return N.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return N.resolve()}deleteFieldIndex(e,t){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,t){return N.resolve()}getDocumentsMatchingTarget(e,t){return N.resolve(null)}getIndexType(e,t){return N.resolve(0)}getFieldIndexes(e,t){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,t){return N.resolve(At.min())}getMinOffsetFromCollectionGroup(e,t){return N.resolve(At.min())}updateCollectionGroup(e,t,r){return N.resolve()}updateIndexEntries(e,t){return N.resolve()}}class g_{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new xe(le.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new xe(le.comparator)).toArray()}}/**
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
 */class Rn{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Rn(0)}static kn(){return new Rn(-1)}}/**
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
 */class __{constructor(){this.changes=new Vn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ce.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?N.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class y_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class v_{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&lr(r.mutation,s,Ue.empty(),_e.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,J()).next(()=>r))}getLocalViewOfDocuments(e,t,r=J()){const s=Bt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=rr();return i.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Bt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,J()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=at();const a=cr(),c=function(){return cr()}();return t.forEach((u,f)=>{const m=r.get(f.key);s.has(f.key)&&(m===void 0||m.mutation instanceof Qt)?i=i.insert(f.key,f):m!==void 0?(a.set(f.key,m.mutation.getFieldMask()),lr(m.mutation,f,m.mutation.getFieldMask(),_e.now())):a.set(f.key,Ue.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((f,m)=>a.set(f,m)),t.forEach((f,m)=>{var T;return c.set(f,new y_(m,(T=a.get(f))!==null&&T!==void 0?T:null))}),c))}recalculateAndSaveOverlays(e,t){const r=cr();let s=new ae((a,c)=>a-c),i=J();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(u=>{const f=t.get(u);if(f===null)return;let m=r.get(u)||Ue.empty();m=c.applyToLocalView(f,m),r.set(u,m);const T=(s.get(c.batchId)||J()).add(u);s=s.insert(c.batchId,T)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),f=u.key,m=u.value,T=ru();m.forEach(x=>{if(!i.has(x)){const R=lu(t.get(x),r.get(x));R!==null&&T.set(x,R),i=i.add(x)}}),a.push(this.documentOverlayCache.saveOverlays(e,f,T))}return N.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return $.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):xg(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):N.resolve(Bt());let c=-1,u=i;return a.next(f=>N.forEach(f,(m,T)=>(c<T.largestBatchId&&(c=T.largestBatchId),i.get(m)?N.resolve():this.remoteDocumentCache.getEntry(e,m).next(x=>{u=u.insert(m,x)}))).next(()=>this.populateOverlays(e,f,i)).next(()=>this.computeViews(e,u,f,J())).next(m=>({batchId:c,changes:nu(m)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new $(t)).next(r=>{let s=rr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=rr();return this.indexManager.getCollectionParents(e,i).next(c=>N.forEach(c,u=>{const f=function(T,x){return new js(x,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,f,r,s).next(m=>{m.forEach((T,x)=>{a=a.insert(T,x)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((u,f)=>{const m=f.getKey();a.get(m)===null&&(a=a.insert(m,Ce.newInvalidDocument(m)))});let c=rr();return a.forEach((u,f)=>{const m=i.get(u);m!==void 0&&lr(m.mutation,f,Ue.empty(),_e.now()),Fs(t,f)&&(c=c.insert(u,f))}),c})}}/**
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
 */class w_{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return N.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:ze(s.createTime)}}(t)),N.resolve()}getNamedQuery(e,t){return N.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:p_(s.bundledQuery),readTime:ze(s.readTime)}}(t)),N.resolve()}}/**
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
 */class E_{constructor(){this.overlays=new ae($.comparator),this.Ir=new Map}getOverlay(e,t){return N.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Bt();return N.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),N.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),N.resolve()}getOverlaysForCollection(e,t,r){const s=Bt(),i=t.length+1,a=new $(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,f=u.getKey();if(!t.isPrefixOf(f.path))break;f.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return N.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ae((f,m)=>f-m);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===t&&f.largestBatchId>r){let m=i.get(f.largestBatchId);m===null&&(m=Bt(),i=i.insert(f.largestBatchId,m)),m.set(f.getKey(),f)}}const c=Bt(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((f,m)=>c.set(f,m)),!(c.size()>=s)););return N.resolve(c)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Gg(t,r));let i=this.Ir.get(t);i===void 0&&(i=J(),this.Ir.set(t,i)),this.Ir.set(t,i.add(r.key))}}/**
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
 */class T_{constructor(){this.sessionToken=Ae.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,N.resolve()}}/**
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
 */class _o{constructor(){this.Tr=new xe(ve.Er),this.dr=new xe(ve.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new ve(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new ve(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new $(new le([])),r=new ve(t,e),s=new ve(t,e+1),i=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),i.push(a.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new $(new le([])),r=new ve(t,e),s=new ve(t,e+1);let i=J();return this.dr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new ve(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ve{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return $.comparator(e.key,t.key)||ee(e.wr,t.wr)}static Ar(e,t){return ee(e.wr,t.wr)||$.comparator(e.key,t.key)}}/**
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
 */class I_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new xe(ve.Er)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new qg(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.br=this.br.add(new ve(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return N.resolve(a)}lookupMutationBatch(e,t){return N.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),i=s<0?0:s;return N.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ve(t,0),s=new ve(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],a=>{const c=this.Dr(a.wr);i.push(c)}),N.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new xe(ee);return t.forEach(s=>{const i=new ve(s,0),a=new ve(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],c=>{r=r.add(c.wr)})}),N.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;$.isDocumentKey(i)||(i=i.child(""));const a=new ve(new $(i),0);let c=new xe(ee);return this.br.forEachWhile(u=>{const f=u.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(c=c.add(u.wr)),!0)},a),N.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){te(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return N.forEach(t.mutations,s=>{const i=new ve(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new ve(t,0),s=this.br.firstAfterOrEqual(r);return N.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class b_{constructor(e){this.Mr=e,this.docs=function(){return new ae($.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return N.resolve(r?r.document.mutableCopy():Ce.newInvalidDocument(t))}getEntries(e,t){let r=at();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ce.newInvalidDocument(s))}),N.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=at();const a=t.path,c=new $(a.child("")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:f,value:{document:m}}=u.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||ig(sg(m),r)<=0||(s.has(m.key)||Fs(t,m))&&(i=i.insert(m.key,m.mutableCopy()))}return N.resolve(i)}getAllFromCollectionGroup(e,t,r,s){z()}Or(e,t){return N.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new x_(this)}getSize(e){return N.resolve(this.size)}}class x_ extends __{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),N.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class A_{constructor(e){this.persistence=e,this.Nr=new Vn(t=>lo(t),uo),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.Lr=0,this.Br=new _o,this.targetCount=0,this.kr=Rn.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),N.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Rn(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,N.resolve()}updateTargetData(e,t){return this.Kn(t),N.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Nr.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),N.waitFor(i).next(()=>s)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return N.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),N.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),N.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),N.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return N.resolve(r)}containsKey(e,t){return N.resolve(this.Br.containsKey(t))}}/**
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
 */class R_{constructor(e,t){this.qr={},this.overlays={},this.Qr=new io(0),this.Kr=!1,this.Kr=!0,this.$r=new T_,this.referenceDelegate=e(this),this.Ur=new A_(this),this.indexManager=new m_,this.remoteDocumentCache=function(s){return new b_(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new f_(t),this.Gr=new w_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new E_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new I_(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){U("MemoryPersistence","Starting transaction:",e);const s=new S_(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return N.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class S_ extends ag{constructor(e){super(),this.currentSequenceNumber=e}}class yo{constructor(e){this.persistence=e,this.Jr=new _o,this.Yr=null}static Zr(e){return new yo(e)}get Xr(){if(this.Yr)return this.Yr;throw z()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),N.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),N.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Xr,r=>{const s=$.fromPath(r);return this.ei(e,s).next(i=>{i||t.removeEntry(s,H.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return N.or([()=>N.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class vo{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=J(),s=J();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new vo(e,t.fromCache,r,s)}}/**
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
 */class P_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class k_{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Sd()?8:cg(Ne())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Yi(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Zi(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new P_;return this.Xi(e,t,a).next(c=>{if(i.result=c,this.zi)return this.es(e,t,a,c.size)})}).next(()=>i.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(er()<=X.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",dn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),N.resolve()):(er()<=X.DEBUG&&U("QueryEngine","Query:",dn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(er()<=X.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",dn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ge(t))):N.resolve())}Yi(e,t){if(_c(t))return N.resolve(null);let r=Ge(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Mi(t,null,"F"),r=Ge(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=J(...i);return this.Ji.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const f=this.ts(t,c);return this.ns(t,f,a,u.readTime)?this.Yi(e,Mi(t,null,"F")):this.rs(e,f,t,u)}))})))}Zi(e,t,r,s){return _c(t)||s.isEqual(H.min())?N.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const a=this.ts(t,i);return this.ns(t,a,r,s)?N.resolve(null):(er()<=X.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),dn(t)),this.rs(e,a,t,rg(s,-1)).next(c=>c))})}ts(e,t){let r=new xe(eu(e));return t.forEach((s,i)=>{Fs(e,i)&&(r=r.add(i))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,r){return er()<=X.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",dn(t)),this.Ji.getDocumentsMatchingQuery(e,t,At.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */class C_{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new ae(ee),this._s=new Vn(i=>lo(i),uo),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new v_(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function N_(n,e,t,r){return new C_(n,e,t,r)}async function Tu(n,e){const t=W(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let u=J();for(const f of s){a.push(f.batchId);for(const m of f.mutations)u=u.add(m.key)}for(const f of i){c.push(f.batchId);for(const m of f.mutations)u=u.add(m.key)}return t.localDocuments.getDocuments(r,u).next(f=>({hs:f,removedBatchIds:a,addedBatchIds:c}))})})}function D_(n,e){const t=W(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,u,f,m){const T=f.batch,x=T.keys();let R=N.resolve();return x.forEach(D=>{R=R.next(()=>m.getEntry(u,D)).next(C=>{const S=f.docVersions.get(D);te(S!==null),C.version.compareTo(S)<0&&(T.applyToRemoteDocument(C,f),C.isValidDocument()&&(C.setReadTime(f.commitVersion),m.addEntry(C)))})}),R.next(()=>c.mutationQueue.removeMutationBatch(u,T))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=J();for(let f=0;f<c.mutationResults.length;++f)c.mutationResults[f].transformResults.length>0&&(u=u.add(c.batch.mutations[f].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Iu(n){const e=W(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function V_(n,e){const t=W(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const c=[];e.targetChanges.forEach((m,T)=>{const x=s.get(T);if(!x)return;c.push(t.Ur.removeMatchingKeys(i,m.removedDocuments,T).next(()=>t.Ur.addMatchingKeys(i,m.addedDocuments,T)));let R=x.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(T)!==null?R=R.withResumeToken(Ae.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):m.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(m.resumeToken,r)),s=s.insert(T,R),function(C,S,O){return C.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(x,R,m)&&c.push(t.Ur.updateTargetData(i,R))});let u=at(),f=J();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,m))}),c.push(M_(i,a,e.documentUpdates).next(m=>{u=m.Ps,f=m.Is})),!r.isEqual(H.min())){const m=t.Ur.getLastRemoteSnapshotVersion(i).next(T=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(m)}return N.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,f)).next(()=>u)}).then(i=>(t.os=s,i))}function M_(n,e,t){let r=J(),s=J();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=at();return t.forEach((c,u)=>{const f=i.get(c);u.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(H.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!f.isValidDocument()||u.version.compareTo(f.version)>0||u.version.compareTo(f.version)===0&&f.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):U("LocalStore","Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",u.version)}),{Ps:a,Is:s}})}function O_(n,e){const t=W(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function j_(n,e){const t=W(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(i=>i?(s=i,N.resolve(s)):t.Ur.allocateTargetId(r).next(a=>(s=new wt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function Ui(n,e,t){const r=W(n),s=r.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Sr(a))throw a;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Sc(n,e,t){const r=W(n);let s=H.min(),i=J();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,f,m){const T=W(u),x=T._s.get(m);return x!==void 0?N.resolve(T.os.get(x)):T.Ur.getTargetData(f,m)}(r,a,Ge(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,c.targetId).next(u=>{i=u})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?s:H.min(),t?i:J())).next(c=>(L_(r,Rg(e),c),{documents:c,Ts:i})))}function L_(n,e,t){let r=n.us.get(e)||H.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.us.set(e,r)}class Pc{constructor(){this.activeTargetIds=Dg()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class F_{constructor(){this.so=new Pc,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Pc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class U_{_o(e){}shutdown(){}}/**
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
 */class kc{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let as=null;function _i(){return as===null?as=function(){return 268435456+Math.round(2147483648*Math.random())}():as++,"0x"+as.toString(16)}/**
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
 */const B_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class $_{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Pe="WebChannelConnection";class q_ extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,r,s,i,a){const c=_i(),u=this.xo(t,r.toUriEncodedString());U("RestConnection",`Sending RPC '${t}' ${c}:`,u,s);const f={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(f,i,a),this.No(t,u,f,s).then(m=>(U("RestConnection",`Received RPC '${t}' ${c}: `,m),m),m=>{throw In("RestConnection",`RPC '${t}' ${c} failed with error: `,m,"url: ",u,"request:",s),m})}Lo(t,r,s,i,a,c){return this.Mo(t,r,s,i,a)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Nn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>t[a]=i),s&&s.headers.forEach((i,a)=>t[a]=i)}xo(t,r){const s=B_[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const i=_i();return new Promise((a,c)=>{const u=new jl;u.setWithCredentials(!0),u.listenOnce(Ll.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ds.NO_ERROR:const m=u.getResponseJson();U(Pe,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(m)),a(m);break;case ds.TIMEOUT:U(Pe,`RPC '${e}' ${i} timed out`),c(new B(V.DEADLINE_EXCEEDED,"Request time out"));break;case ds.HTTP_ERROR:const T=u.getStatus();if(U(Pe,`RPC '${e}' ${i} failed with status:`,T,"response text:",u.getResponseText()),T>0){let x=u.getResponseJson();Array.isArray(x)&&(x=x[0]);const R=x==null?void 0:x.error;if(R&&R.status&&R.message){const D=function(S){const O=S.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(O)>=0?O:V.UNKNOWN}(R.status);c(new B(D,R.message))}else c(new B(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new B(V.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{U(Pe,`RPC '${e}' ${i} completed.`)}});const f=JSON.stringify(s);U(Pe,`RPC '${e}' ${i} sending request:`,s),u.send(t,"POST",f,r,15)})}Bo(e,t,r){const s=_i(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Bl(),c=Ul(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(u.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const m=i.join("");U(Pe,`Creating RPC '${e}' stream ${s}: ${m}`,u);const T=a.createWebChannel(m,u);let x=!1,R=!1;const D=new $_({Io:S=>{R?U(Pe,`Not sending because RPC '${e}' stream ${s} is closed:`,S):(x||(U(Pe,`Opening RPC '${e}' stream ${s} transport.`),T.open(),x=!0),U(Pe,`RPC '${e}' stream ${s} sending:`,S),T.send(S))},To:()=>T.close()}),C=(S,O,j)=>{S.listen(O,P=>{try{j(P)}catch(F){setTimeout(()=>{throw F},0)}})};return C(T,nr.EventType.OPEN,()=>{R||(U(Pe,`RPC '${e}' stream ${s} transport opened.`),D.yo())}),C(T,nr.EventType.CLOSE,()=>{R||(R=!0,U(Pe,`RPC '${e}' stream ${s} transport closed`),D.So())}),C(T,nr.EventType.ERROR,S=>{R||(R=!0,In(Pe,`RPC '${e}' stream ${s} transport errored:`,S),D.So(new B(V.UNAVAILABLE,"The operation could not be completed")))}),C(T,nr.EventType.MESSAGE,S=>{var O;if(!R){const j=S.data[0];te(!!j);const P=j,F=P.error||((O=P[0])===null||O===void 0?void 0:O.error);if(F){U(Pe,`RPC '${e}' stream ${s} received error:`,F);const K=F.status;let Q=function(_){const v=pe[_];if(v!==void 0)return du(v)}(K),E=F.message;Q===void 0&&(Q=V.INTERNAL,E="Unknown error status: "+K+" with message "+F.message),R=!0,D.So(new B(Q,E)),T.close()}else U(Pe,`RPC '${e}' stream ${s} received:`,j),D.bo(j)}}),C(c,Fl.STAT_EVENT,S=>{S.stat===ki.PROXY?U(Pe,`RPC '${e}' stream ${s} detected buffering proxy`):S.stat===ki.NOPROXY&&U(Pe,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{D.wo()},0),D}}function yi(){return typeof document<"u"?document:null}/**
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
 */function qs(n){return new Zg(n,!0)}/**
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
 */class bu{constructor(e,t,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&U("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class xu{constructor(e,t,r,s,i,a,c,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new bu(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===V.RESOURCE_EXHAUSTED?(ot(t.toString()),ot("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new B(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class G_ extends xu{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=n_(this.serializer,e),r=function(i){if(!("targetChange"in i))return H.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?H.min():a.readTime?ze(a.readTime):H.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=Fi(this.serializer),t.addTarget=function(i,a){let c;const u=a.target;if(c=Vi(u)?{documents:i_(i,u)}:{query:o_(i,u)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=mu(i,a.resumeToken);const f=Oi(i,a.expectedCount);f!==null&&(c.expectedCount=f)}else if(a.snapshotVersion.compareTo(H.min())>0){c.readTime=Ss(i,a.snapshotVersion.toTimestamp());const f=Oi(i,a.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,e);const r=c_(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=Fi(this.serializer),t.removeTarget=e,this.a_(t)}}class z_ extends xu{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return te(!!e.streamToken),this.lastStreamToken=e.streamToken,te(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=s_(e.writeResults,e.commitTime),r=ze(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=Fi(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>r_(this.serializer,r))};this.a_(t)}}/**
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
 */class H_ extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new B(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Mo(e,ji(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(V.UNKNOWN,i.toString())})}Lo(e,t,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Lo(e,ji(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new B(V.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class W_{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(ot(t),this.D_=!1):U("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class K_{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(a=>{r.enqueueAndForget(async()=>{Jt(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(u){const f=W(u);f.L_.add(4),await Cr(f),f.q_.set("Unknown"),f.L_.delete(4),await Gs(f)}(this))})}),this.q_=new W_(r,s)}}async function Gs(n){if(Jt(n))for(const e of n.B_)await e(!0)}async function Cr(n){for(const e of n.B_)await e(!1)}function Au(n,e){const t=W(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Io(t)?To(t):Mn(t).r_()&&Eo(t,e))}function wo(n,e){const t=W(n),r=Mn(t);t.N_.delete(e),r.r_()&&Ru(t,e),t.N_.size===0&&(r.r_()?r.o_():Jt(t)&&t.q_.set("Unknown"))}function Eo(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(H.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Mn(n).A_(e)}function Ru(n,e){n.Q_.xe(e),Mn(n).R_(e)}function To(n){n.Q_=new Qg({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Mn(n).start(),n.q_.v_()}function Io(n){return Jt(n)&&!Mn(n).n_()&&n.N_.size>0}function Jt(n){return W(n).L_.size===0}function Su(n){n.Q_=void 0}async function Q_(n){n.q_.set("Online")}async function J_(n){n.N_.forEach((e,t)=>{Eo(n,e)})}async function X_(n,e){Su(n),Io(n)?(n.q_.M_(e),To(n)):n.q_.set("Unknown")}async function Y_(n,e,t){if(n.q_.set("Online"),e instanceof pu&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.N_.delete(c),s.Q_.removeTarget(c))}(n,e)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ps(n,r)}else if(e instanceof ms?n.Q_.Ke(e):e instanceof fu?n.Q_.He(e):n.Q_.We(e),!t.isEqual(H.min()))try{const r=await Iu(n.localStore);t.compareTo(r)>=0&&await function(i,a){const c=i.Q_.rt(a);return c.targetChanges.forEach((u,f)=>{if(u.resumeToken.approximateByteSize()>0){const m=i.N_.get(f);m&&i.N_.set(f,m.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,f)=>{const m=i.N_.get(u);if(!m)return;i.N_.set(u,m.withResumeToken(Ae.EMPTY_BYTE_STRING,m.snapshotVersion)),Ru(i,u);const T=new wt(m.target,u,f,m.sequenceNumber);Eo(i,T)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await Ps(n,r)}}async function Ps(n,e,t){if(!Sr(e))throw e;n.L_.add(1),await Cr(n),n.q_.set("Offline"),t||(t=()=>Iu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Gs(n)})}function Pu(n,e){return e().catch(t=>Ps(n,t,e))}async function zs(n){const e=W(n),t=St(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Z_(e);)try{const s=await O_(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,ey(e,s)}catch(s){await Ps(e,s)}ku(e)&&Cu(e)}function Z_(n){return Jt(n)&&n.O_.length<10}function ey(n,e){n.O_.push(e);const t=St(n);t.r_()&&t.V_&&t.m_(e.mutations)}function ku(n){return Jt(n)&&!St(n).n_()&&n.O_.length>0}function Cu(n){St(n).start()}async function ty(n){St(n).p_()}async function ny(n){const e=St(n);for(const t of n.O_)e.m_(t.mutations)}async function ry(n,e,t){const r=n.O_.shift(),s=po.from(r,e,t);await Pu(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await zs(n)}async function sy(n,e){e&&St(n).V_&&await async function(r,s){if(function(a){return Hg(a)&&a!==V.ABORTED}(s.code)){const i=r.O_.shift();St(r).s_(),await Pu(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await zs(r)}}(n,e),ku(n)&&Cu(n)}async function Cc(n,e){const t=W(n);t.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=Jt(t);t.L_.add(3),await Cr(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Gs(t)}async function iy(n,e){const t=W(n);e?(t.L_.delete(2),await Gs(t)):e||(t.L_.add(2),await Cr(t),t.q_.set("Unknown"))}function Mn(n){return n.K_||(n.K_=function(t,r,s){const i=W(t);return i.w_(),new G_(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:Q_.bind(null,n),Ro:J_.bind(null,n),mo:X_.bind(null,n),d_:Y_.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),Io(n)?To(n):n.q_.set("Unknown")):(await n.K_.stop(),Su(n))})),n.K_}function St(n){return n.U_||(n.U_=function(t,r,s){const i=W(t);return i.w_(),new z_(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:ty.bind(null,n),mo:sy.bind(null,n),f_:ny.bind(null,n),g_:ry.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await zs(n)):(await n.U_.stop(),n.O_.length>0&&(U("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class bo{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new bt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new bo(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xo(n,e){if(ot("AsyncQueue",`${e}: ${n}`),Sr(n))return new B(V.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class vn{constructor(e){this.comparator=e?(t,r)=>e(t,r)||$.comparator(t.key,r.key):(t,r)=>$.comparator(t.key,r.key),this.keyedMap=rr(),this.sortedSet=new ae(this.comparator)}static emptySet(e){return new vn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof vn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new vn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Nc{constructor(){this.W_=new ae($.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):z():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Sn{constructor(e,t,r,s,i,a,c,u,f){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=f}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new Sn(e,t,vn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ls(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class oy{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class ay{constructor(){this.queries=Dc(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=W(t),i=s.queries;s.queries=Dc(),i.forEach((a,c)=>{for(const u of c.j_)u.onError(r)})})(this,new B(V.ABORTED,"Firestore shutting down"))}}function Dc(){return new Vn(n=>Zl(n),Ls)}async function cy(n,e){const t=W(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new oy,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=xo(a,`Initialization of query '${dn(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&Ao(t)}async function ly(n,e){const t=W(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.j_.indexOf(e);a>=0&&(i.j_.splice(a,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function uy(n,e){const t=W(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.j_)c.X_(s)&&(r=!0);a.z_=s}}r&&Ao(t)}function hy(n,e,t){const r=W(n),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(t);r.queries.delete(e)}function Ao(n){n.Y_.forEach(e=>{e.next()})}var Bi,Vc;(Vc=Bi||(Bi={})).ea="default",Vc.Cache="cache";class dy{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Sn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Sn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Bi.Cache}}/**
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
 */class Nu{constructor(e){this.key=e}}class Du{constructor(e){this.key=e}}class fy{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=J(),this.mutatedKeys=J(),this.Aa=eu(e),this.Ra=new vn(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new Nc,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((m,T)=>{const x=s.get(m),R=Fs(this.query,T)?T:null,D=!!x&&this.mutatedKeys.has(x.key),C=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let S=!1;x&&R?x.data.isEqual(R.data)?D!==C&&(r.track({type:3,doc:R}),S=!0):this.ga(x,R)||(r.track({type:2,doc:R}),S=!0,(u&&this.Aa(R,u)>0||f&&this.Aa(R,f)<0)&&(c=!0)):!x&&R?(r.track({type:0,doc:R}),S=!0):x&&!R&&(r.track({type:1,doc:x}),S=!0,(u||f)&&(c=!0)),S&&(R?(a=a.add(R),i=C?i.add(m):i.delete(m)):(a=a.delete(m),i=i.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),i=i.delete(m.key),r.track({type:1,doc:m})}return{Ra:a,fa:r,ns:c,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((m,T)=>function(R,D){const C=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return C(R)-C(D)}(m.type,T.type)||this.Aa(m.doc,T.doc)),this.pa(r),s=s!=null&&s;const c=t&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,f=u!==this.Ea;return this.Ea=u,a.length!==0||f?{snapshot:new Sn(this.query,e.Ra,i,a,e.mutatedKeys,u===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Nc,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=J(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new Du(r))}),this.da.forEach(r=>{e.has(r)||t.push(new Nu(r))}),t}ba(e){this.Ta=e.Ts,this.da=J();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Sn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class py{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class my{constructor(e){this.key=e,this.va=!1}}class gy{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Vn(c=>Zl(c),Ls),this.Ma=new Map,this.xa=new Set,this.Oa=new ae($.comparator),this.Na=new Map,this.La=new _o,this.Ba={},this.ka=new Map,this.qa=Rn.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function _y(n,e,t=!0){const r=Fu(n);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Vu(r,e,t,!0),s}async function yy(n,e){const t=Fu(n);await Vu(t,e,!0,!1)}async function Vu(n,e,t,r){const s=await j_(n.localStore,Ge(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await vy(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Au(n.remoteStore,s),c}async function vy(n,e,t,r,s){n.Ka=(T,x,R)=>async function(C,S,O,j){let P=S.view.ma(O);P.ns&&(P=await Sc(C.localStore,S.query,!1).then(({documents:E})=>S.view.ma(E,P)));const F=j&&j.targetChanges.get(S.targetId),K=j&&j.targetMismatches.get(S.targetId)!=null,Q=S.view.applyChanges(P,C.isPrimaryClient,F,K);return Oc(C,S.targetId,Q.wa),Q.snapshot}(n,T,x,R);const i=await Sc(n.localStore,e,!0),a=new fy(e,i.Ts),c=a.ma(i.documents),u=kr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),f=a.applyChanges(c,n.isPrimaryClient,u);Oc(n,t,f.wa);const m=new py(e,t,a);return n.Fa.set(e,m),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),f.snapshot}async function wy(n,e,t){const r=W(n),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(a=>!Ls(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ui(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&wo(r.remoteStore,s.targetId),$i(r,s.targetId)}).catch(Rr)):($i(r,s.targetId),await Ui(r.localStore,s.targetId,!0))}async function Ey(n,e){const t=W(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),wo(t.remoteStore,r.targetId))}async function Ty(n,e,t){const r=Py(n);try{const s=await function(a,c){const u=W(a),f=_e.now(),m=c.reduce((R,D)=>R.add(D.key),J());let T,x;return u.persistence.runTransaction("Locally write mutations","readwrite",R=>{let D=at(),C=J();return u.cs.getEntries(R,m).next(S=>{D=S,D.forEach((O,j)=>{j.isValidDocument()||(C=C.add(O))})}).next(()=>u.localDocuments.getOverlayedDocuments(R,D)).next(S=>{T=S;const O=[];for(const j of c){const P=Bg(j,T.get(j.key).overlayedDocument);P!=null&&O.push(new Qt(j.key,P,Hl(P.value.mapValue),rt.exists(!0)))}return u.mutationQueue.addMutationBatch(R,f,O,c)}).next(S=>{x=S;const O=S.applyToLocalDocumentSet(T,C);return u.documentOverlayCache.saveOverlays(R,S.batchId,O)})}).then(()=>({batchId:x.batchId,changes:nu(T)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,u){let f=a.Ba[a.currentUser.toKey()];f||(f=new ae(ee)),f=f.insert(c,u),a.Ba[a.currentUser.toKey()]=f}(r,s.batchId,t),await Nr(r,s.changes),await zs(r.remoteStore)}catch(s){const i=xo(s,"Failed to persist write");t.reject(i)}}async function Mu(n,e){const t=W(n);try{const r=await V_(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Na.get(i);a&&(te(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?te(a.va):s.removedDocuments.size>0&&(te(a.va),a.va=!1))}),await Nr(t,r,e)}catch(r){await Rr(r)}}function Mc(n,e,t){const r=W(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((i,a)=>{const c=a.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const u=W(a);u.onlineState=c;let f=!1;u.queries.forEach((m,T)=>{for(const x of T.j_)x.Z_(c)&&(f=!0)}),f&&Ao(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Iy(n,e,t){const r=W(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),i=s&&s.key;if(i){let a=new ae($.comparator);a=a.insert(i,Ce.newNoDocument(i,H.min()));const c=J().add(i),u=new $s(H.min(),new Map,new ae(ee),a,c);await Mu(r,u),r.Oa=r.Oa.remove(i),r.Na.delete(e),Ro(r)}else await Ui(r.localStore,e,!1).then(()=>$i(r,e,t)).catch(Rr)}async function by(n,e){const t=W(n),r=e.batch.batchId;try{const s=await D_(t.localStore,e);ju(t,r,null),Ou(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Nr(t,s)}catch(s){await Rr(s)}}async function xy(n,e,t){const r=W(n);try{const s=await function(a,c){const u=W(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let m;return u.mutationQueue.lookupMutationBatch(f,c).next(T=>(te(T!==null),m=T.keys(),u.mutationQueue.removeMutationBatch(f,T))).next(()=>u.mutationQueue.performConsistencyCheck(f)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(f,m,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,m)).next(()=>u.localDocuments.getDocuments(f,m))})}(r.localStore,e);ju(r,e,t),Ou(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Nr(r,s)}catch(s){await Rr(s)}}function Ou(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function ju(n,e,t){const r=W(n);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function $i(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||Lu(n,r)})}function Lu(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(wo(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Ro(n))}function Oc(n,e,t){for(const r of t)r instanceof Nu?(n.La.addReference(r.key,e),Ay(n,r)):r instanceof Du?(U("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||Lu(n,r.key)):z()}function Ay(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(U("SyncEngine","New document in limbo: "+t),n.xa.add(r),Ro(n))}function Ro(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new $(le.fromString(e)),r=n.qa.next();n.Na.set(r,new my(t)),n.Oa=n.Oa.insert(t,r),Au(n.remoteStore,new wt(Ge(ho(t.path)),r,"TargetPurposeLimboResolution",io.oe))}}async function Nr(n,e,t){const r=W(n),s=[],i=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((c,u)=>{a.push(r.Ka(u,e,t).then(f=>{var m;if((f||t)&&r.isPrimaryClient){const T=f?!f.fromCache:(m=t==null?void 0:t.targetChanges.get(u.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(u.targetId,T?"current":"not-current")}if(f){s.push(f);const T=vo.Wi(u.targetId,f);i.push(T)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(u,f){const m=W(u);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>N.forEach(f,x=>N.forEach(x.$i,R=>m.persistence.referenceDelegate.addReference(T,x.targetId,R)).next(()=>N.forEach(x.Ui,R=>m.persistence.referenceDelegate.removeReference(T,x.targetId,R)))))}catch(T){if(!Sr(T))throw T;U("LocalStore","Failed to update sequence numbers: "+T)}for(const T of f){const x=T.targetId;if(!T.fromCache){const R=m.os.get(x),D=R.snapshotVersion,C=R.withLastLimboFreeSnapshotVersion(D);m.os=m.os.insert(x,C)}}}(r.localStore,i))}async function Ry(n,e){const t=W(n);if(!t.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const r=await Tu(t.localStore,e);t.currentUser=e,function(i,a){i.ka.forEach(c=>{c.forEach(u=>{u.reject(new B(V.CANCELLED,a))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Nr(t,r.hs)}}function Sy(n,e){const t=W(n),r=t.Na.get(e);if(r&&r.va)return J().add(r.key);{let s=J();const i=t.Ma.get(e);if(!i)return s;for(const a of i){const c=t.Fa.get(a);s=s.unionWith(c.view.Va)}return s}}function Fu(n){const e=W(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Mu.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Sy.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Iy.bind(null,e),e.Ca.d_=uy.bind(null,e.eventManager),e.Ca.$a=hy.bind(null,e.eventManager),e}function Py(n){const e=W(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=by.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=xy.bind(null,e),e}class ks{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=qs(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return N_(this.persistence,new k_,e.initialUser,this.serializer)}Ga(e){return new R_(yo.Zr,this.serializer)}Wa(e){return new F_}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ks.provider={build:()=>new ks};class qi{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Mc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ry.bind(null,this.syncEngine),await iy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new ay}()}createDatastore(e){const t=qs(e.databaseInfo.databaseId),r=function(i){return new q_(i)}(e.databaseInfo);return function(i,a,c,u){return new H_(i,a,c,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new K_(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Mc(this.syncEngine,t,0),function(){return kc.D()?new kc:new U_}())}createSyncEngine(e,t){return function(s,i,a,c,u,f,m){const T=new gy(s,i,a,c,u,f);return m&&(T.Qa=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=W(s);U("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Cr(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}qi.provider={build:()=>new qi};/**
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
 */class ky{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):ot("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class Cy{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=ke.UNAUTHENTICATED,this.clientId=ql.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{U("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(U("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new bt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=xo(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function vi(n,e){n.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Tu(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function jc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Ny(n);U("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Cc(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Cc(e.remoteStore,s)),n._onlineComponents=e}async function Ny(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await vi(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;In("Error using user provided cache. Falling back to memory cache: "+t),await vi(n,new ks)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await vi(n,new ks);return n._offlineComponents}async function Uu(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await jc(n,n._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await jc(n,new qi))),n._onlineComponents}function Dy(n){return Uu(n).then(e=>e.syncEngine)}async function Vy(n){const e=await Uu(n),t=e.eventManager;return t.onListen=_y.bind(null,e.syncEngine),t.onUnlisten=wy.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=yy.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Ey.bind(null,e.syncEngine),t}function My(n,e,t={}){const r=new bt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,u,f){const m=new ky({next:x=>{m.Za(),a.enqueueAndForget(()=>ly(i,T));const R=x.docs.has(c);!R&&x.fromCache?f.reject(new B(V.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&x.fromCache&&u&&u.source==="server"?f.reject(new B(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(x)},error:x=>f.reject(x)}),T=new dy(ho(c.path),m,{includeMetadataChanges:!0,_a:!0});return cy(i,T)}(await Vy(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function Bu(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Lc=new Map;/**
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
 */function Oy(n,e,t){if(!t)throw new B(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function jy(n,e,t,r){if(e===!0&&r===!0)throw new B(V.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Fc(n){if(!$.isDocumentKey(n))throw new B(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function So(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":z()}function wr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new B(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=So(n);throw new B(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class Uc{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new B(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}jy("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Bu((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new B(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new B(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new B(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Po{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Uc({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Uc(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Km;switch(r.type){case"firstParty":return new Ym(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Lc.get(t);r&&(U("ComponentProvider","Removing Datastore"),Lc.delete(t),r.terminate())}(this),Promise.resolve()}}function Ly(n,e,t,r={}){var s;const i=(n=wr(n,Po))._getSettings(),a=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&In("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let c,u;if(typeof r.mockUserToken=="string")c=r.mockUserToken,u=ke.MOCK_USER;else{c=Ed(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new B(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new ke(f)}n._authCredentials=new Qm(new $l(c,u))}}/**
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
 */class ko{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ko(this.firestore,e,this._query)}}class je{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Er(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new je(this.firestore,e,this._key)}}class Er extends ko{constructor(e,t,r){super(e,t,ho(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new je(this.firestore,null,new $(e))}withConverter(e){return new Er(this.firestore,e,this._path)}}function $u(n,e,...t){if(n=Le(n),arguments.length===1&&(e=ql.newId()),Oy("doc","path",e),n instanceof Po){const r=le.fromString(e,...t);return Fc(r),new je(n,null,new $(r))}{if(!(n instanceof je||n instanceof Er))throw new B(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(le.fromString(e,...t));return Fc(r),new je(n.firestore,n instanceof Er?n.converter:null,new $(r))}}/**
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
 */class Bc{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new bu(this,"async_queue_retry"),this.Vu=()=>{const r=yi();r&&U("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=yi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=yi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new bt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Sr(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw ot("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=bo.createAndSchedule(this,e,t,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&z()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class Co extends Po{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Bc,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Bc(e),this._firestoreClient=void 0,await e}}}function Fy(n,e){const t=typeof n=="object"?n:nl(),r=typeof n=="string"?n:"(default)",s=Hi(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=vd("firestore");i&&Ly(s,...i)}return s}function qu(n){if(n._terminated)throw new B(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Uy(n),n._firestoreClient}function Uy(n){var e,t,r;const s=n._freezeSettings(),i=function(c,u,f,m){return new hg(c,u,f,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Bu(m.experimentalLongPollingOptions),m.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Cy(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(n._componentsProvider))}/**
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
 */class Pn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pn(Ae.fromBase64String(e))}catch(t){throw new B(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Pn(Ae.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class No{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new B(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Do{constructor(e){this._methodName=e}}/**
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
 */class Vo{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new B(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new B(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}}/**
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
 */class Mo{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const By=/^__.*__$/;class $y{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Qt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Pr(e,this.data,t,this.fieldTransforms)}}function Gu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class Oo{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Oo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Cs(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Gu(this.Cu)&&By.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class qy{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||qs(e)}Qu(e,t,r,s=!1){return new Oo({Cu:e,methodName:t,qu:r,path:be.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Gy(n){const e=n._freezeSettings(),t=qs(n._databaseId);return new qy(n._databaseId,!!e.ignoreUndefinedProperties,t)}function zy(n,e,t,r,s,i={}){const a=n.Qu(i.merge||i.mergeFields?2:0,e,t,s);Ku("Data must be an object, but it was:",a,r);const c=Hu(r,a);let u,f;if(i.merge)u=new Ue(a.fieldMask),f=a.fieldTransforms;else if(i.mergeFields){const m=[];for(const T of i.mergeFields){const x=Hy(e,T,t);if(!a.contains(x))throw new B(V.INVALID_ARGUMENT,`Field '${x}' is specified in your field mask but missing from your input data.`);Ky(m,x)||m.push(x)}u=new Ue(m),f=a.fieldTransforms.filter(T=>u.covers(T.field))}else u=null,f=a.fieldTransforms;return new $y(new Oe(c),u,f)}class jo extends Do{_toFieldTransform(e){return new jg(e.path,new _r)}isEqual(e){return e instanceof jo}}function zu(n,e){if(Wu(n=Le(n)))return Ku("Unsupported field value:",e,n),Hu(n,e);if(n instanceof Do)return function(r,s){if(!Gu(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let u=zu(c,s.Lu(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Le(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Vg(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=_e.fromDate(r);return{timestampValue:Ss(s.serializer,i)}}if(r instanceof _e){const i=new _e(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ss(s.serializer,i)}}if(r instanceof Vo)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Pn)return{bytesValue:mu(s.serializer,r._byteString)};if(r instanceof je){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:go(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Mo)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw c.Bu("VectorValues must only contain numeric values.");return fo(c.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${So(r)}`)}(n,e)}function Hu(n,e){const t={};return Gl(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Dn(n,(r,s)=>{const i=zu(s,e.Mu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Wu(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof _e||n instanceof Vo||n instanceof Pn||n instanceof je||n instanceof Do||n instanceof Mo)}function Ku(n,e,t){if(!Wu(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=So(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function Hy(n,e,t){if((e=Le(e))instanceof No)return e._internalPath;if(typeof e=="string")return Qu(n,e);throw Cs("Field path arguments must be of type string or ",n,!1,void 0,t)}const Wy=new RegExp("[~\\*/\\[\\]]");function Qu(n,e,t){if(e.search(Wy)>=0)throw Cs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new No(...e.split("."))._internalPath}catch{throw Cs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Cs(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new B(V.INVALID_ARGUMENT,c+n+u)}function Ky(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Ju{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Qy(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Xu("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Qy extends Ju{data(){return super.data()}}function Xu(n,e){return typeof e=="string"?Qu(n,e):e instanceof No?e._internalPath:e._delegate._internalPath}class Jy{convertValue(e,t="none"){switch(Kt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Wt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw z()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Dn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>fe(a.doubleValue));return new Mo(i)}convertGeoPoint(e){return new Vo(fe(e.latitude),fe(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ao(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(pr(e));default:return null}}convertTimestamp(e){const t=Rt(e);return new _e(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=le.fromString(e);te(Eu(r));const s=new mr(r.get(1),r.get(3)),i=new $(r.popFirst(5));return s.isEqual(t)||ot(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function Xy(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
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
 */class Yy{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Yu extends Ju{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Zy(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Xu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Zy extends Yu{data(e={}){return super.data(e)}}/**
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
 */function e0(n){n=wr(n,je);const e=wr(n.firestore,Co);return My(qu(e),n._key).then(t=>s0(e,n,t))}class t0 extends Jy{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new je(this.firestore,null,t)}}function n0(n,e,t){n=wr(n,je);const r=wr(n.firestore,Co),s=Xy(n.converter,e);return r0(r,[zy(Gy(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,rt.none())])}function r0(n,e){return function(r,s){const i=new bt;return r.asyncQueue.enqueueAndForget(async()=>Ty(await Dy(r),s,i)),i.promise}(qu(n),e)}function s0(n,e,t){const r=t.docs.get(e._key),s=new t0(n);return new Yu(n,s,e._key,r,new Yy(t.hasPendingWrites,t.fromCache),e.converter)}function i0(){return new jo("serverTimestamp")}(function(e,t=!0){(function(s){Nn=s})(kn),En(new Gt("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new Co(new Jm(r.getProvider("auth-internal")),new eg(r.getProvider("app-check-internal")),function(f,m){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new B(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new mr(f.options.projectId,m)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),It(ac,"4.7.3",e),It(ac,"4.7.3","esm2017")})();const o0={apiKey:"AIzaSyDDjfbJ4uO_xrI6aqOtcuq5RRBjmhwf1h8",authDomain:"homesteading-haven.firebaseapp.com",projectId:"homesteading-haven",storageBucket:"homesteading-haven.firebasestorage.app",messagingSenderId:"702634367242",appId:"1:702634367242:web:2b70a2b308ccf3686802f3",measurementId:"G-BBLXXNW0Y8"},Zu=tl(o0),Lo=Hm(Zu),eh=Fy(Zu),$c=new Ye,a0=async()=>($c.setCustomParameters({prompt:"select_account"}),tm(Lo,$c)),c0=async()=>{await Mp(Lo)},l0=async(n,e)=>{await n0($u(eh,"saves",n),{...e,updatedAt:i0()})},u0=async n=>{const e=await e0($u(eh,"saves",n));if(!e.exists())return null;const t=e.data(),{updatedAt:r,...s}=t;return s},wi=({type:n})=>{switch(n){case"wood":return d.jsx(Yh,{className:"w-4 h-4 text-amber-700"});case"food":return d.jsx(Xh,{className:"w-4 h-4 text-yellow-600"});case"stone":return d.jsx(zc,{className:"w-4 h-4 text-stone-500"});case"iron":return d.jsx(Jh,{className:"w-4 h-4 text-slate-400"})}},h0=()=>{const{resources:n,settlers:e,happiness:t,weather:r,isBuilding:s,selectedBuilding:i,setSelectedBuilding:a,day:c,reset:u,season:f,buildings:m,selectedBuildingId:T,selectBuildingId:x,upgradeBuilding:R,demolishBuilding:D,logs:C,nature:S,tickRate:O,setTickRate:j,objectives:P,claimObjective:F,celebrateFestival:K,sendExpedition:Q,assignWorker:E,unassignWorker:g,loadSaveData:_,unlockedResearch:v,currentResearch:w,researchProgress:I,startResearch:y,cancelResearch:Ve,tradeOffers:Qe,lastTradeRefresh:Hs,acceptTrade:Pt}=xt(),[lt,ut]=oe.useState(!1),[Xt,Ws]=oe.useState(!1),[$e,me]=oe.useState(!1),[Ks,ht]=oe.useState(!1),[Qs,kt]=oe.useState(!1),[Yt,Dr]=oe.useState(null),[Ct,Nt]=oe.useState(!1),[Zt,en]=oe.useState(!1),On=k=>{a(i===k&&s?null:k)},jn=()=>{confirm("Are you sure you want to reset your progress? This cannot be undone.")&&(u(),ut(!1))},ue=T?m.find(k=>k.id===T):null,Dt=ue?mn[ue.type]:null,Ln=ue?ue.level+1:1,we=ue?Ft[ue.type]:null,Fn=ue?e.filter(k=>k.job===ue.id).length:0,tn=m.find(k=>k.type==="barn"),Vr=Dt&&Object.keys(Dt).every(k=>{const L=k;return n[L]>=(Dt[L]||0)*Ln}),nn=n.wood>=30&&n.food>=40,rn=n.food>=25&&n.wood>=15,Mr=e.length?Math.round(e.reduce((k,L)=>k+L.hunger,0)/e.length):100,ye=e.length?Math.round(e.reduce((k,L)=>k+L.energy,0)/e.length):100,Ee=e.filter(k=>k.hunger<30||k.energy<30).length,sn=k=>{const{goal:L}=k;if(L.type==="resource"&&L.key){const q=n[L.key];return Math.min(q/L.amount,1)}if(L.type==="building"&&L.key){const q=m.filter(se=>se.type===L.key).length;return Math.min(q/L.amount,1)}return L.type==="population"?Math.min(e.length/L.amount,1):L.type==="happiness"?Math.min(t/L.amount,1):0},Or=k=>{const{goal:L}=k;return L.type==="resource"&&L.key?`${Math.floor(n[L.key])}/${L.amount}`:L.type==="building"&&L.key?`${m.filter(se=>se.type===L.key).length}/${L.amount}`:L.type==="population"?`${e.length}/${L.amount}`:L.type==="happiness"?`${Math.floor(t)}% / ${L.amount}%`:""},Un=(we==null?void 0:we.workers)||0,jr=Un?`${Fn}/${Un} workers`:"No workers needed";oe.useEffect(()=>{const k=Vp(Lo,async L=>{if(Dr(L),L){en(!0);const q=await u0(L.uid);q&&_(q),en(!1)}});return()=>k()},[_]);const dt=async()=>{await a0()},Lr=async()=>{await c0(),Dr(null)},Fr=async()=>{if(!Yt){await dt();return}Nt(!0),await l0(Yt.uid,{resources:n,settlers:e,happiness:t,buildings:m,nature:S,logs:C,weather:r,season:f,day:c,objectives:P,unlockedResearch:v,currentResearch:w,researchProgress:I,tradeOffers:Qe,lastTradeRefresh:Hs}),Nt(!1)},Bn=oe.useMemo(()=>{const k={};return Object.keys(mn).forEach(L=>{const q=Ft[L],se=Hc[L],re=[];q.housing&&re.push(`Housing +${q.housing}`),q.storage&&re.push(`Storage +${q.storage} per level`),q.workers&&re.push(`Needs ${q.workers} worker${q.workers>1?"s":""}`),q.happiness&&re.push(`Happiness +${q.happiness} per level`),se&&Object.entries(se).forEach(([he,de])=>{de&&de>0&&re.push(`Produces ${de}/tick ${he}`)}),L==="campfire"&&re.push("Cozy spot that boosts happiness and eases bad weather."),L==="watchtower"&&re.push("Mitigates storms, improves expeditions."),L==="fishery"&&re.push("Food income even through winter."),L==="well"&&re.push("Reduces rain/snow mood penalty."),L==="bakery"&&re.push("Extra food and morale."),L==="warehouse"&&re.push("Major storage expansion."),L==="tradingPost"&&re.push("Trade resources with traveling merchants."),k[L]=re}),k},[]);return d.jsxs("div",{className:"absolute inset-0 pointer-events-none flex flex-col justify-between z-30",children:[d.jsxs("div",{className:"pointer-events-auto flex flex-col gap-2 p-3 w-full max-w-full",children:[d.jsxs("div",{className:"flex items-center gap-2 w-full",children:[d.jsx("button",{onClick:()=>ut(!lt),className:"bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 text-white shadow-xl hover:bg-white/10 transition-colors shrink-0",children:d.jsx(Dh,{className:"w-5 h-5"})}),d.jsx("div",{className:"flex-1 overflow-x-auto no-scrollbar flex gap-2 mask-linear-fade",children:["wood","food","stone","iron"].map(k=>d.jsxs("div",{className:"bg-black/60 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 text-white shadow-xl flex items-center gap-2 min-w-fit",children:[d.jsx(wi,{type:k}),d.jsx("div",{className:"text-sm font-bold",children:Math.floor(n[k])})]},k))})]}),d.jsxs("div",{className:"flex flex-wrap gap-2",children:[d.jsxs("div",{className:"bg-black/60 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 text-white shadow-xl flex items-center gap-3 text-xs sm:text-sm",children:[d.jsxs("div",{className:"font-bold",children:["Day ",c.toFixed(0)]}),d.jsx("div",{className:"w-px h-3 bg-white/20"}),d.jsxs("div",{className:"flex items-center gap-1 capitalize",children:[r==="rain"&&d.jsx(Vh,{className:"w-3 h-3 text-blue-300"}),r==="snow"&&d.jsx(Mh,{className:"w-3 h-3 text-cyan-100"}),r==="sunny"&&d.jsx(Oh,{className:"w-3 h-3 text-amber-300"}),d.jsx("span",{className:"hidden sm:inline",children:r})]}),d.jsx("div",{className:"w-px h-3 bg-white/20"}),d.jsxs("div",{className:"flex items-center gap-1",children:[d.jsx(jh,{className:`w-3 h-3 ${t>70?"text-green-300":"text-yellow-300"}`}),d.jsxs("span",{children:[Math.floor(t),"%"]})]})]}),d.jsxs("button",{onClick:()=>kt(!0),className:"bg-black/60 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 text-white shadow-xl flex items-center gap-3 text-xs sm:text-sm hover:bg-white/10 transition-colors",children:[d.jsxs("div",{className:"flex items-center gap-1",children:[d.jsx(Sa,{className:"w-3 h-3 text-gray-300"}),d.jsx("span",{children:e.length})]}),d.jsx("div",{className:"w-px h-3 bg-white/20"}),d.jsxs("div",{className:`flex items-center gap-1 ${Ee>0?"text-yellow-300":"text-gray-300"}`,children:[d.jsx(Lh,{className:"w-3 h-3"}),d.jsxs("span",{children:[Math.round((Mr+ye)/2),"%"]})]})]})]})]}),lt&&d.jsxs("div",{className:"absolute top-16 left-3 w-64 bg-black/90 backdrop-blur-xl p-4 rounded-2xl border border-white/10 text-white shadow-2xl pointer-events-auto z-50 flex flex-col gap-4 animate-in slide-in-from-left-4 fade-in duration-200",children:[d.jsxs("div",{className:"flex flex-col gap-2",children:[d.jsx("div",{className:"text-xs uppercase opacity-60 font-bold tracking-wider mb-1",children:"Actions"}),d.jsxs("button",{onClick:()=>{me(k=>!k),ut(!1)},className:"flex items-center gap-3 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors",children:[d.jsx(Pa,{className:"w-4 h-4 text-emerald-300"})," Objectives"]}),d.jsxs("button",{onClick:()=>{ht(k=>!k),ut(!1)},className:"flex items-center gap-3 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors",children:[d.jsx(ka,{className:"w-4 h-4 text-cyan-300"})," Research"]}),d.jsxs("button",{onClick:K,disabled:!nn,className:`flex items-center gap-3 px-3 py-2 rounded-xl border border-white/5 transition-colors ${nn?"bg-pink-600/20 hover:bg-pink-600/30 text-pink-100":"bg-white/5 opacity-50 cursor-not-allowed"}`,children:[d.jsx(Fh,{className:"w-4 h-4 text-pink-300"})," Festival"]}),d.jsxs("button",{onClick:Q,disabled:!rn,className:`flex items-center gap-3 px-3 py-2 rounded-xl border border-white/5 transition-colors ${rn?"bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-100":"bg-white/5 opacity-50 cursor-not-allowed"}`,children:[d.jsx(Uh,{className:"w-4 h-4 text-indigo-300"})," Expedition"]})]}),d.jsx("div",{className:"h-px bg-white/10"}),d.jsxs("div",{className:"flex flex-col gap-2",children:[d.jsx("div",{className:"text-xs uppercase opacity-60 font-bold tracking-wider mb-1",children:"System"}),Yt?d.jsxs("div",{className:"flex flex-col gap-2",children:[d.jsxs("div",{className:"px-3 text-xs text-gray-400",children:["Signed in as ",Yt.displayName]}),d.jsxs("button",{onClick:Fr,disabled:Ct||Zt,className:"flex items-center gap-3 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors",children:[d.jsx(Bh,{className:"w-4 h-4 text-yellow-300"})," ",Ct?"Saving...":"Save Game"]}),d.jsxs("button",{onClick:Lr,className:"flex items-center gap-3 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors",children:[d.jsx($h,{className:"w-4 h-4 text-red-300"})," Logout"]})]}):d.jsxs("button",{onClick:dt,className:"flex items-center gap-3 px-3 py-2 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-blue-100 transition-colors",children:[d.jsx(qh,{className:"w-4 h-4"})," Sign In with Google"]}),d.jsx("span",{className:"text-xs uppercase opacity-60 font-bold tracking-wider mt-2",children:"Game Speed"}),d.jsx("div",{className:"grid grid-cols-3 gap-2",children:[1200,800,500].map(k=>d.jsxs("button",{onClick:()=>j(k),className:`px-2 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${O===k?"bg-green-600/30 border-green-400 text-green-100":"bg-white/5 border-white/10 hover:bg-white/10"}`,children:[Math.round(1e3/k),"x"]},k))})]}),d.jsxs("button",{onClick:jn,className:"flex items-center gap-3 bg-red-500/20 hover:bg-red-500/30 text-red-200 px-3 py-2 rounded-xl transition-colors w-full text-left border border-red-500/20",children:[d.jsx(Gh,{className:"w-4 h-4 text-red-300"}),"Reset Progress"]}),d.jsx("div",{className:"text-[10px] text-gray-500 text-center",children:"v0.2.0 Beta"})]}),Ks&&d.jsxs("div",{className:"pointer-events-auto w-full max-w-4xl bg-black/85 backdrop-blur-md p-4 rounded-2xl border border-cyan-400/30 text-white shadow-2xl mx-auto mt-20 sm:mt-24 max-h-[70vh] overflow-y-auto",children:[d.jsxs("div",{className:"flex items-center justify-between mb-3",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(ka,{className:"w-5 h-5 text-cyan-300"}),d.jsx("h3",{className:"text-lg font-bold",children:"Research"}),w&&d.jsx("span",{className:"text-xs text-cyan-200",children:"In progress…"})]}),d.jsx("button",{onClick:()=>ht(!1),className:"text-gray-400 hover:text-white",children:d.jsx(ns,{className:"w-5 h-5"})})]}),d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:Ei.map(k=>{const L=v.includes(k.id),q=w===k.id,se=((tn==null?void 0:tn.level)||0)>=k.barnLevelReq,re=Object.keys(k.cost).every(de=>n[de]>=(k.cost[de]||0)),he=L||q||!se||!re;return d.jsxs("div",{className:`p-3 rounded-xl border ${L?"border-green-400/40 bg-green-900/10":"border-white/10 bg-white/5"} flex flex-col gap-2`,children:[d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("div",{children:[d.jsx("div",{className:"font-bold",children:k.name}),d.jsx("div",{className:"text-xs text-gray-300",children:k.description})]}),L&&d.jsx(Ca,{className:"w-5 h-5 text-green-300"})]}),d.jsxs("div",{className:"text-xs text-gray-200 flex flex-wrap gap-2",children:[d.jsxs("span",{className:"px-2 py-1 rounded-full bg-white/10 border border-white/10",children:["Barn lvl ",k.barnLevelReq]}),Object.entries(k.cost).map(([de,on])=>d.jsxs("span",{className:`px-2 py-1 rounded-full border ${n[de]<on?"border-red-400/60 text-red-200":"border-white/20 text-white"}`,children:[on," ",de]},de))]}),q&&d.jsx("div",{className:"w-full h-2 bg-white/10 rounded-full overflow-hidden",children:d.jsx("div",{className:"h-full bg-cyan-400",style:{width:`${Math.min(100,I*100)}%`}})}),d.jsxs("div",{className:"flex justify-between items-center",children:[d.jsx("span",{className:"text-xs text-gray-300",children:L?"Unlocked":q?"Researching…":se?re?"Ready to research":"Need resources":"Barn level too low"}),q?d.jsx("button",{onClick:Ve,className:"text-xs px-3 py-1 rounded-lg border border-cyan-400 text-cyan-100 hover:bg-cyan-500/20",children:"Cancel"}):d.jsx("button",{onClick:()=>y(k.id),disabled:he,className:`text-xs px-3 py-1 rounded-lg border ${he?"border-white/10 text-gray-400 opacity-60 cursor-not-allowed":"border-cyan-400 text-cyan-100 hover:bg-cyan-500/20"}`,children:L?"Done":"Research"})]})]},k.id)})})]}),Qs&&d.jsxs("div",{className:"pointer-events-auto w-full max-w-4xl bg-black/85 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-white shadow-2xl mx-auto mt-20 sm:mt-24 max-h-[70vh] overflow-y-auto",children:[d.jsxs("div",{className:"flex items-center justify-between mb-3",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(Sa,{className:"w-5 h-5 text-blue-300"}),d.jsx("h3",{className:"text-lg font-bold",children:"Population"}),d.jsxs("span",{className:"text-xs text-gray-400",children:["(",e.length," Settlers)"]})]}),d.jsx("button",{onClick:()=>kt(!1),className:"text-gray-400 hover:text-white",children:d.jsx(ns,{className:"w-5 h-5"})})]}),d.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",children:e.map(k=>{const L=k.job?m.find(q=>q.id===k.job):null;return d.jsxs("div",{className:"p-3 rounded-xl border border-white/10 bg-white/5 flex flex-col gap-2",children:[d.jsxs("div",{className:"flex justify-between items-start",children:[d.jsxs("div",{children:[d.jsx("div",{className:"font-bold text-sm",children:k.name}),d.jsx("div",{className:"text-xs text-gray-400 capitalize",children:k.state})]}),L?d.jsx("div",{className:"text-[10px] px-2 py-1 rounded bg-blue-500/20 text-blue-200 border border-blue-500/30 capitalize truncate max-w-[100px]",children:L.type}):d.jsx("div",{className:"text-[10px] px-2 py-1 rounded bg-white/10 text-gray-400 border border-white/10",children:"Unemployed"})]}),d.jsxs("div",{className:"grid grid-cols-2 gap-2 mt-1",children:[d.jsxs("div",{className:"flex flex-col gap-1",children:[d.jsxs("div",{className:"flex items-center gap-1 text-xs text-gray-300",children:[d.jsx(zh,{className:"w-3 h-3 text-orange-300"}),d.jsxs("span",{children:[Math.floor(k.hunger),"%"]})]}),d.jsx("div",{className:"h-1.5 bg-gray-700 rounded-full overflow-hidden",children:d.jsx("div",{className:"h-full bg-orange-400",style:{width:`${k.hunger}%`}})})]}),d.jsxs("div",{className:"flex flex-col gap-1",children:[d.jsxs("div",{className:"flex items-center gap-1 text-xs text-gray-300",children:[d.jsx(Hh,{className:"w-3 h-3 text-yellow-300"}),d.jsxs("span",{children:[Math.floor(k.energy),"%"]})]}),d.jsx("div",{className:"h-1.5 bg-gray-700 rounded-full overflow-hidden",children:d.jsx("div",{className:"h-full bg-yellow-400",style:{width:`${k.energy}%`}})})]})]}),k.traits&&k.traits.length>0&&d.jsxs("div",{className:"mt-2 pt-2 border-t border-white/5",children:[d.jsx("div",{className:"text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-1",children:"Traits"}),d.jsx("div",{className:"flex flex-wrap gap-1",children:k.traits.map((q,se)=>d.jsxs("div",{className:"group relative cursor-help",children:[d.jsx("span",{className:"px-1.5 py-0.5 rounded text-[10px] bg-purple-500/20 text-purple-200 border border-purple-500/30",children:q.name}),d.jsx("div",{className:"absolute bottom-full left-0 mb-1 hidden group-hover:block w-32 p-2 bg-black/90 text-xs text-white rounded border border-white/10 z-50",children:q.description})]},se))})]})]},k.id)})})]}),d.jsx("div",{className:"absolute bottom-32 left-3 sm:left-4 flex flex-col gap-2 w-[300px] pointer-events-none opacity-80",children:C.slice(0,5).map(k=>d.jsx("div",{className:`
                    p-2 rounded-lg text-sm font-medium backdrop-blur-md shadow-lg border border-white/5 animate-in slide-in-from-left-4 fade-in duration-300
                    ${k.type==="success"?"bg-green-900/60 text-green-100":k.type==="warning"?"bg-yellow-900/60 text-yellow-100":k.type==="danger"?"bg-red-900/60 text-red-100":"bg-gray-900/60 text-gray-100"}
                `,children:k.message},k.id))}),ue&&d.jsxs("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-white shadow-2xl pointer-events-auto z-40 min-w-[300px] max-w-[90vw]",children:[d.jsxs("div",{className:"flex justify-between items-start mb-4",children:[d.jsxs("div",{children:[d.jsx("h3",{className:"font-bold text-xl capitalize",children:ue.type}),d.jsxs("p",{className:"text-gray-400 text-sm",children:["Level ",ue.level]})]}),d.jsx("button",{onClick:()=>x(null),className:"text-gray-400 hover:text-white",children:d.jsx(ns,{className:"w-5 h-5"})})]}),d.jsxs("div",{className:"flex flex-col gap-3",children:[we&&d.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs bg-white/5 border border-white/10 rounded-xl p-3",children:[we.housing&&d.jsxs("div",{className:"text-gray-200",children:["Housing: +",we.housing]}),we.storage&&d.jsxs("div",{className:"text-gray-200",children:["Storage: +",we.storage*ue.level]}),we.happiness&&d.jsxs("div",{className:"text-gray-200",children:["Happiness: +",(we.happiness*ue.level).toFixed(1)]}),we.workers!==void 0&&d.jsx("div",{className:"text-gray-200",children:jr})]}),(we==null?void 0:we.workers)&&d.jsxs("div",{className:"flex items-center justify-between bg-white/5 border border-white/10 rounded-xl p-3 text-sm",children:[d.jsxs("div",{children:[d.jsx("div",{className:"font-semibold",children:"Workers"}),d.jsx("div",{className:"text-gray-300",children:jr})]}),d.jsxs("div",{className:"flex gap-2",children:[d.jsx("button",{onClick:()=>E(ue.id),className:"px-3 py-2 rounded-lg bg-green-600/30 hover:bg-green-600/50 border border-green-400 text-green-50 text-xs",children:"+ Assign"}),d.jsx("button",{onClick:()=>g(ue.id),className:"px-3 py-2 rounded-lg bg-yellow-600/30 hover:bg-yellow-600/50 border border-yellow-400 text-yellow-50 text-xs",children:"- Unassign"})]})]}),d.jsxs("button",{onClick:()=>R(ue.id),disabled:!Vr,className:`
                flex items-center justify-between p-3 rounded-xl border border-white/10 transition-all
                ${Vr?"bg-green-600/20 hover:bg-green-600/40 border-green-500/50":"bg-gray-800/50 opacity-50 cursor-not-allowed"}
              `,children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(Wh,{className:"w-5 h-5 text-green-400"}),d.jsxs("div",{className:"text-left",children:[d.jsx("div",{className:"font-bold",children:"Upgrade"}),d.jsx("div",{className:"text-xs text-gray-300",children:"Increases efficiency"})]})]}),d.jsx("div",{className:"flex flex-col items-end text-xs",children:Dt&&Object.entries(Dt).map(([k,L])=>d.jsxs("div",{className:n[k]<L*Ln?"text-red-400":"text-gray-300",children:[L*Ln," ",k.charAt(0).toUpperCase()]},k))})]}),ue.type==="tradingPost"&&d.jsxs("div",{className:"flex flex-col gap-2 bg-white/5 border border-white/10 rounded-xl p-3",children:[d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsx("h4",{className:"font-bold text-sm text-amber-300",children:"Active Trade Offers"}),d.jsx("span",{className:"text-[10px] text-gray-400",children:"Refreshes every 3 days"})]}),Qe.length===0?d.jsx("div",{className:"text-xs text-gray-400 italic py-2 text-center",children:"No traders currently available."}):d.jsx("div",{className:"flex flex-col gap-2",children:Qe.map(k=>{const L=Object.keys(k.wants).every(q=>n[q]>=(k.wants[q]||0));return d.jsxs("div",{className:"bg-black/20 rounded-lg p-2 flex items-center justify-between",children:[d.jsxs("div",{className:"flex flex-col text-xs gap-1",children:[d.jsxs("div",{className:"flex items-center gap-1 text-red-300",children:[d.jsx("span",{className:"font-bold",children:"Give:"}),Object.entries(k.wants).map(([q,se])=>d.jsxs("span",{className:"flex items-center gap-0.5",children:[se," ",d.jsx(wi,{type:q})]},q))]}),d.jsxs("div",{className:"flex items-center gap-1 text-green-300",children:[d.jsx("span",{className:"font-bold",children:"Get:"}),Object.entries(k.gives).map(([q,se])=>d.jsxs("span",{className:"flex items-center gap-0.5",children:[se," ",d.jsx(wi,{type:q})]},q))]})]}),d.jsx("button",{onClick:()=>Pt(k.id),disabled:!L,className:`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors ${L?"bg-green-600/30 border-green-500 text-green-100 hover:bg-green-600/50":"bg-gray-700/30 border-gray-600 text-gray-500 cursor-not-allowed"}`,children:"Trade"})]},k.id)})})]}),d.jsxs("button",{onClick:()=>D(ue.id),className:"flex items-center gap-2 p-3 rounded-xl bg-red-500/10 hover:bg-red-500/30 border border-red-500/30 text-red-200 transition-colors",children:[d.jsx(Kh,{className:"w-5 h-5"}),"Demolish Building"]})]})]}),$e&&d.jsxs("div",{className:"pointer-events-auto w-full max-w-4xl bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-white shadow-2xl mx-auto mt-20 sm:mt-24 max-h-[70vh] overflow-y-auto",children:[d.jsxs("div",{className:"flex items-center justify-between mb-3",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(Pa,{className:"w-5 h-5 text-amber-300"}),d.jsx("h3",{className:"text-lg font-bold",children:"Objectives"}),Zt&&d.jsx("span",{className:"text-xs text-gray-300",children:"Loading save..."})]}),d.jsx("button",{onClick:()=>me(!1),className:"text-gray-400 hover:text-white",children:d.jsx(ns,{className:"w-5 h-5"})})]}),d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 mt-2",children:P.map(k=>{const L=sn(k),q=Or(k),se=k.complete,re=k.claimed;return d.jsxs("div",{className:`p-3 rounded-xl border ${se?"border-green-400/40 bg-green-900/20":"border-white/10 bg-white/5"} shadow-inner`,children:[d.jsxs("div",{className:"flex justify-between items-start",children:[d.jsxs("div",{children:[d.jsx("div",{className:"font-bold",children:k.title}),d.jsx("div",{className:"text-xs text-gray-300",children:k.description})]}),se?d.jsx(Ca,{className:"w-5 h-5 text-green-300"}):null]}),d.jsx("div",{className:"mt-2 h-2 bg-white/10 rounded-full overflow-hidden",children:d.jsx("div",{className:`h-full ${se?"bg-green-400":"bg-blue-400"}`,style:{width:`${L*100}%`}})}),d.jsxs("div",{className:"text-[11px] text-gray-300 mt-1",children:["Progress: ",q]}),d.jsxs("div",{className:"flex items-center justify-between mt-2",children:[d.jsxs("div",{className:"flex items-center gap-1 text-xs text-amber-200",children:[d.jsx(Qh,{className:"w-3 h-3"}),Object.entries(k.reward).map(([he,de])=>`${de} ${he[0].toUpperCase()}`).join(", ")]}),se&&!re&&d.jsx("button",{onClick:()=>F(k.id),className:"px-3 py-1 rounded-lg bg-green-600/60 hover:bg-green-600 text-sm font-semibold",children:"Claim"}),re&&d.jsx("span",{className:"text-green-300 text-xs",children:"Claimed"})]})]},k.id)})})]}),d.jsxs("div",{className:"pointer-events-none w-full pb-4 flex flex-col gap-3",children:[d.jsx("div",{className:"pointer-events-auto fixed bottom-4 left-0 right-0 flex justify-center z-40 px-3 sm:px-0",children:d.jsxs("button",{onClick:()=>Ws(k=>!k),className:`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold shadow-lg transition-colors w-full max-w-xs ${Xt?"bg-yellow-500/20 border-yellow-300 text-yellow-100":"bg-black/70 border-white/10 text-white hover:bg-white/10"}`,children:[d.jsx(zc,{className:"w-4 h-4"}),Xt?"Close Build":"Build"]})}),Xt&&d.jsxs("div",{className:"pointer-events-auto mx-auto w-full max-w-5xl bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-2xl mt-12 mb-16",children:[s&&i&&d.jsxs("div",{className:"mb-3 bg-yellow-500/15 border border-yellow-400/40 text-yellow-100 px-4 py-2 rounded-lg text-sm font-semibold",children:["Placing ",i,"... tap ground to confirm."]}),d.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[320px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-white/20",children:Object.keys(mn).map(k=>{const L=mn[k],q=Bn[k]||[],se=i===k,re=Object.keys(L).every(he=>n[he]>=(L[he]||0));return d.jsxs("button",{onClick:()=>On(k),disabled:!re,className:`
                      text-left flex flex-col gap-2 p-3 rounded-xl transition-all duration-200 border
                      ${se?"bg-yellow-600/20 border-yellow-400/60 ring-2 ring-yellow-400/70 text-white":"bg-white/5 border-white/10 hover:bg-white/10 text-gray-200"}
                      ${re?"active:scale-95":"opacity-50 cursor-not-allowed grayscale"}
                    `,children:[d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsx("span",{className:"capitalize font-bold text-base",children:k.replace(/([A-Z])/g," $1").trim()}),d.jsx("span",{className:"text-[11px] px-2 py-1 rounded-full bg-white/10 border border-white/10",children:re?"Build":"Need resources"})]}),d.jsx("div",{className:"flex flex-wrap gap-2 text-xs text-gray-200",children:Object.entries(L).map(([he,de])=>d.jsxs("span",{className:`px-2 py-1 rounded-full border ${n[he]<de?"border-red-400/60 text-red-200":"border-white/20 text-white"}`,children:[de," ",he]},he))}),d.jsx("div",{className:"flex flex-col gap-1 text-xs text-gray-300",children:q.length?q.map((he,de)=>d.jsxs("div",{className:"flex items-start gap-2",children:[d.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-white/40 mt-1"}),d.jsx("span",{children:he})]},de)):d.jsx("span",{className:"text-gray-400",children:"No special benefits."})})]},k)})})]})]})]})},qc=({type:n,level:e=1,selected:t,ghost:r,isValid:s=!0,onClick:i})=>{const a=oe.useMemo(()=>{if(r&&!s)return"#ff0000";switch(n){case"cabin":return"#8B4513";case"farm":return"#DAA520";case"lumberMill":return"#556B2F";case"mine":return"#696969";case"warehouse":return"#A0522D";case"bakery":return"#d97706";case"well":return"#3b82f6";case"campfire":return"#f97316";case"watchtower":return"#9ca3af";case"fishery":return"#0ea5e9";default:return"#ffffff"}},[n,r,s]),c=r?.5:1,u=r;return d.jsxs("group",{onClick:i,children:[n==="barn"&&d.jsxs(d.Fragment,{children:[d.jsxs("mesh",{position:[0,1.5,0],castShadow:!0,receiveShadow:!0,children:[d.jsx("boxGeometry",{args:[3,3,2.5]}),d.jsx("meshStandardMaterial",{color:"#b45309",roughness:.7,transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[0,1.6,1.3],castShadow:!0,children:[d.jsx("boxGeometry",{args:[2.8,.2,.2]}),d.jsx("meshStandardMaterial",{color:"#fbbf24",emissive:"#f59e0b",emissiveIntensity:r?0:.2,transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[0,3,0],rotation:[0,0,Math.PI/10],castShadow:!0,children:[d.jsx("boxGeometry",{args:[3.4,.25,3]}),d.jsx("meshStandardMaterial",{color:"#78350f",roughness:.5,transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[0,3.2,0],rotation:[0,Math.PI,-Math.PI/10],castShadow:!0,children:[d.jsx("boxGeometry",{args:[3.4,.25,3]}),d.jsx("meshStandardMaterial",{color:"#652b0b",roughness:.5,transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[0,.8,1.31],castShadow:!0,children:[d.jsx("boxGeometry",{args:[1.2,1.6,.1]}),d.jsx("meshStandardMaterial",{color:"#f8fafc",transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[0,1.6,1.32],castShadow:!0,children:[d.jsx("boxGeometry",{args:[.6,.4,.1]}),d.jsx("meshStandardMaterial",{color:"#e2e8f0",transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[0,2.4,1.26],castShadow:!0,children:[d.jsx("boxGeometry",{args:[.7,.5,.1]}),d.jsx("meshStandardMaterial",{color:"#bfdbfe",emissive:"#60a5fa",emissiveIntensity:r?0:.5,transparent:u,opacity:c})]}),e>=2&&d.jsxs("mesh",{position:[2,1.5,-1],castShadow:!0,children:[d.jsx("cylinderGeometry",{args:[.5,.6,3,12]}),d.jsx("meshStandardMaterial",{color:"#d4d4d8",transparent:u,opacity:c})]}),e>=3&&d.jsxs("mesh",{position:[-2,1.7,1],castShadow:!0,children:[d.jsx("cylinderGeometry",{args:[.6,.7,3.4,12]}),d.jsx("meshStandardMaterial",{color:"#c084fc",emissive:"#a855f7",emissiveIntensity:r?0:.6,transparent:u,opacity:c})]})]}),n!=="farm"&&d.jsxs("mesh",{position:[0,1,0],castShadow:!0,receiveShadow:!0,children:[d.jsx("boxGeometry",{args:[2,2,2]}),d.jsx("meshStandardMaterial",{color:a,transparent:u,opacity:c})]}),n==="cabin"&&d.jsxs(d.Fragment,{children:[d.jsxs("mesh",{position:[0,1.2,0],castShadow:!0,receiveShadow:!0,children:[d.jsx("boxGeometry",{args:[2.2,1.6,2.2]}),d.jsx("meshStandardMaterial",{color:"#8b5a2b",roughness:.8,transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[0,.6,1.11],castShadow:!0,children:[d.jsx("boxGeometry",{args:[.6,1,.1]}),d.jsx("meshStandardMaterial",{color:"#5b3314",transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[-.9,1.1,0],castShadow:!0,children:[d.jsx("boxGeometry",{args:[.1,.6,.6]}),d.jsx("meshStandardMaterial",{color:"#93c5fd",emissive:"#60a5fa",emissiveIntensity:r?0:.4,transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[.9,1.1,0],castShadow:!0,children:[d.jsx("boxGeometry",{args:[.1,.6,.6]}),d.jsx("meshStandardMaterial",{color:"#93c5fd",emissive:"#60a5fa",emissiveIntensity:r?0:.4,transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[0,2.4,0],rotation:[0,0,Math.PI/9],castShadow:!0,children:[d.jsx("boxGeometry",{args:[2.4,.2,2.6]}),d.jsx("meshStandardMaterial",{color:"#4a3424",roughness:.6,transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[0,2.6,0],rotation:[0,Math.PI,-Math.PI/9],castShadow:!0,children:[d.jsx("boxGeometry",{args:[2.4,.2,2.6]}),d.jsx("meshStandardMaterial",{color:"#3b2a1c",roughness:.6,transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[.7,2.8,.7],castShadow:!0,children:[d.jsx("boxGeometry",{args:[.4,.8,.4]}),d.jsx("meshStandardMaterial",{color:"#9ca3af",roughness:.4,transparent:u,opacity:c})]})]}),n==="farm"&&d.jsxs(d.Fragment,{children:[d.jsxs("mesh",{position:[0,.1,0],rotation:[-Math.PI/2,0,0],receiveShadow:!0,children:[d.jsx("planeGeometry",{args:[3,3]}),d.jsx("meshStandardMaterial",{color:"#8b5a2b",transparent:u,opacity:c})]}),[-1,-.3,.4,1.1].map((f,m)=>d.jsxs("mesh",{position:[f,.25,0],receiveShadow:!0,castShadow:!0,children:[d.jsx("boxGeometry",{args:[.4,.2,2.6]}),d.jsx("meshStandardMaterial",{color:"#a16207",roughness:.9,transparent:u,opacity:c})]},m)),Array.from({length:8}).map((f,m)=>{const T=-1.2+m%4*.8,x=-1+Math.floor(m/4)*1.2;return d.jsxs("mesh",{position:[T,.65,x],castShadow:!0,children:[d.jsx("coneGeometry",{args:[.18,.7,6]}),d.jsx("meshStandardMaterial",{color:"#22c55e",emissive:"#16a34a",emissiveIntensity:r?0:.3,transparent:u,opacity:c})]},`crop-${m}`)}),d.jsxs("mesh",{position:[0,1,1.4],castShadow:!0,children:[d.jsx("boxGeometry",{args:[1.4,1.2,.8]}),d.jsx("meshStandardMaterial",{color:"#b45309",roughness:.8,transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[0,1.8,1.4],castShadow:!0,children:[d.jsx("boxGeometry",{args:[1.6,.3,1]}),d.jsx("meshStandardMaterial",{color:"#92400e",roughness:.7,transparent:u,opacity:c})]}),[[-1.6,-1.6],[1.6,-1.6],[-1.6,1.6],[1.6,1.6]].map(([f,m],T)=>d.jsxs("mesh",{position:[f,.6,m],castShadow:!0,children:[d.jsx("boxGeometry",{args:[.15,1.2,.15]}),d.jsx("meshStandardMaterial",{color:"#d97706",transparent:u,opacity:c})]},`fence-${T}`))]}),n==="mine"&&d.jsxs("mesh",{position:[.8,.5,.8],castShadow:!0,children:[d.jsx("boxGeometry",{args:[1,1,1]}),d.jsx("meshStandardMaterial",{color:"#2F2F2F",transparent:u,opacity:c})]}),n==="lumberMill"&&d.jsxs("mesh",{position:[0,2.2,0],rotation:[0,0,Math.PI/2],castShadow:!0,children:[d.jsx("cylinderGeometry",{args:[.8,.8,2.2,8]}),d.jsx("meshStandardMaterial",{color:"#DEB887",transparent:u,opacity:c})]}),n==="bakery"&&d.jsxs(d.Fragment,{children:[d.jsxs("mesh",{position:[0,2.3,0],castShadow:!0,children:[d.jsx("cylinderGeometry",{args:[.9,.9,1.2,12]}),d.jsx("meshStandardMaterial",{color:"#fbbf24",transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[.6,2.9,0],castShadow:!0,children:[d.jsx("coneGeometry",{args:[.4,.6,6]}),d.jsx("meshStandardMaterial",{color:"#7c2d12",transparent:u,opacity:c})]})]}),n==="well"&&d.jsxs(d.Fragment,{children:[d.jsxs("mesh",{position:[0,1.1,0],castShadow:!0,children:[d.jsx("cylinderGeometry",{args:[.9,.9,1.2,16]}),d.jsx("meshStandardMaterial",{color:"#60a5fa",transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[0,1.7,0],castShadow:!0,children:[d.jsx("torusGeometry",{args:[.8,.12,8,24]}),d.jsx("meshStandardMaterial",{color:"#1d4ed8",transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[0,2.3,0],castShadow:!0,children:[d.jsx("cylinderGeometry",{args:[.12,.12,.8,8]}),d.jsx("meshStandardMaterial",{color:"#9ca3af",transparent:u,opacity:c})]})]}),n==="campfire"&&d.jsxs(d.Fragment,{children:[d.jsxs("mesh",{position:[0,.8,0],castShadow:!0,children:[d.jsx("cylinderGeometry",{args:[.6,.7,.4,10]}),d.jsx("meshStandardMaterial",{color:"#92400e",transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[0,1.1,0],children:[d.jsx("coneGeometry",{args:[.5,.6,10]}),d.jsx("meshStandardMaterial",{color:"#f97316",emissive:"#fb923c",emissiveIntensity:r?0:1.2,transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[0,.5,0],rotation:[Math.PI/2,0,0],children:[d.jsx("torusGeometry",{args:[1,.1,8,24]}),d.jsx("meshStandardMaterial",{color:"#57534e",transparent:u,opacity:c})]})]}),n==="watchtower"&&d.jsxs(d.Fragment,{children:[d.jsxs("mesh",{position:[0,2,0],castShadow:!0,children:[d.jsx("cylinderGeometry",{args:[.7,.7,4,8]}),d.jsx("meshStandardMaterial",{color:"#9ca3af",transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[0,4.2,0],castShadow:!0,children:[d.jsx("boxGeometry",{args:[2.2,.4,2.2]}),d.jsx("meshStandardMaterial",{color:"#4b5563",transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[0,4.8,0],castShadow:!0,children:[d.jsx("coneGeometry",{args:[1.6,1,6]}),d.jsx("meshStandardMaterial",{color:"#1f2937",transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[1,1.2,1],rotation:[0,0,Math.PI/2],children:[d.jsx("boxGeometry",{args:[.2,2,.5]}),d.jsx("meshStandardMaterial",{color:"#d1d5db",transparent:u,opacity:c})]})]}),n==="fishery"&&d.jsxs("group",{children:[d.jsxs("mesh",{position:[0,1,0],castShadow:!0,children:[d.jsx("boxGeometry",{args:[2.5,1.6,2]}),d.jsx("meshStandardMaterial",{color:"#0ea5e9",transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[0,2.3,0],castShadow:!0,children:[d.jsx("boxGeometry",{args:[2.7,.4,2.2]}),d.jsx("meshStandardMaterial",{color:"#075985",transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[1.6,.5,0],castShadow:!0,children:[d.jsx("boxGeometry",{args:[1.5,.3,1]}),d.jsx("meshStandardMaterial",{color:"#7c3aed",transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[0,.2,0],rotation:[-Math.PI/2,0,0],children:[d.jsx("planeGeometry",{args:[3,3]}),d.jsx("meshStandardMaterial",{color:"#38bdf8",transparent:!0,opacity:.3})]})]}),n==="tradingPost"&&d.jsxs("group",{children:[d.jsxs("mesh",{position:[0,1,0],castShadow:!0,children:[d.jsx("boxGeometry",{args:[2.5,1.5,1.5]}),d.jsx("meshStandardMaterial",{color:"#78350f",transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[0,.8,1],castShadow:!0,children:[d.jsx("boxGeometry",{args:[2.5,.8,.5]}),d.jsx("meshStandardMaterial",{color:"#b45309",transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[0,2.2,.5],rotation:[Math.PI/6,0,0],castShadow:!0,children:[d.jsx("boxGeometry",{args:[2.8,.2,2.5]}),d.jsx("meshStandardMaterial",{color:"#ef4444",transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[-.8,.4,1.4],castShadow:!0,children:[d.jsx("boxGeometry",{args:[.5,.5,.5]}),d.jsx("meshStandardMaterial",{color:"#d97706",transparent:u,opacity:c})]}),d.jsxs("mesh",{position:[.8,.4,1.4],castShadow:!0,children:[d.jsx("boxGeometry",{args:[.5,.5,.5]}),d.jsx("meshStandardMaterial",{color:"#fcd34d",transparent:u,opacity:c})]})]}),t&&!r&&d.jsxs("mesh",{position:[0,.1,0],rotation:[-Math.PI/2,0,0],children:[d.jsx("ringGeometry",{args:[1.5,1.7,32]}),d.jsx("meshBasicMaterial",{color:"#00ff00"})]}),!r&&d.jsx(wn,{position:[0,3,0],center:!0,distanceFactor:15,children:d.jsxs("div",{className:"bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm whitespace-nowrap",children:["Lvl ",e]})})]})},d0=({id:n,position:e,scale:t=1})=>{const{addResource:r,removeNature:s,isBuilding:i,season:a}=xt(),[c,u]=oe.useState(!1),[f,m]=oe.useState(0),[T,x]=oe.useState(0),R=()=>{switch(a){case"spring":return c?"#2e8b2e":"#228B22";case"summer":return c?"#008000":"#006400";case"autumn":return c?"#CD853F":"#D2691E";case"winter":return c?"#F0FFFF":"#E0FFFF";default:return c?"#2e8b2e":"#228B22"}},D=C=>{C.stopPropagation(),r("wood",10),m(Date.now());const S=T+1;x(S),S>=5&&s(n)};return d.jsxs("group",{position:e,scale:[t*(c?1.1:1),t*(c?1.1:1),t*(c?1.1:1)],onPointerOver:()=>u(!0),onPointerOut:()=>u(!1),onClick:D,children:[d.jsxs("mesh",{position:[0,.75,0],castShadow:!0,children:[d.jsx("cylinderGeometry",{args:[.2,.3,1.5,6]}),d.jsx("meshStandardMaterial",{color:c?"#6d4c3d":"#5C4033"})]}),d.jsxs("mesh",{position:[0,2,0],castShadow:!0,children:[d.jsx("coneGeometry",{args:[1,2,8]}),d.jsx("meshStandardMaterial",{color:R()})]}),d.jsxs("mesh",{position:[0,3,0],castShadow:!0,children:[d.jsx("coneGeometry",{args:[.8,1.5,8]}),d.jsx("meshStandardMaterial",{color:R()})]}),c&&!i&&d.jsx(wn,{position:[0,4,0],center:!0,distanceFactor:10,children:d.jsxs("div",{className:"bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm whitespace-nowrap pointer-events-none flex flex-col items-center",children:[d.jsx("span",{children:"Gather Wood (+10)"}),d.jsxs("span",{className:"text-[10px] text-gray-300",children:["(",5-T," more to clear)"]})]})}),Date.now()-f<1e3&&d.jsx(wn,{position:[0,2,0],center:!0,distanceFactor:10,zIndexRange:[100,0],children:d.jsx("div",{className:"text-green-400 font-bold text-sm animate-bounce pointer-events-none",children:"+10 Wood"})})]})},f0=({id:n,position:e,scale:t=1})=>{const{addResource:r,removeNature:s,isBuilding:i,season:a}=xt(),[c,u]=oe.useState(!1),[f,m]=oe.useState(0),[T,x]=oe.useState(0),R=()=>a==="winter"?c?"#cbd5e1":"#e2e8f0":a==="autumn"?c?"#b0a18f":"#8b7c6a":c?"#9ca3af":"#6b7280",D=C=>{C.stopPropagation(),r("stone",5),Math.random()>.7&&r("iron",2),m(Date.now());const S=T+1;x(S),S>=5&&s(n)};return d.jsxs("group",{position:e,scale:[t*(c?1.1:1),t*(c?1.1:1),t*(c?1.1:1)],rotation:[0,Math.random()*Math.PI,0],onPointerOver:()=>u(!0),onPointerOut:()=>u(!1),onClick:D,children:[d.jsxs("mesh",{castShadow:!0,receiveShadow:!0,children:[d.jsx("dodecahedronGeometry",{args:[.8,0]}),d.jsx("meshStandardMaterial",{color:R(),flatShading:!0})]}),c&&!i&&d.jsx(wn,{position:[0,1.5,0],center:!0,distanceFactor:10,children:d.jsxs("div",{className:"bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm whitespace-nowrap pointer-events-none flex flex-col items-center",children:[d.jsx("span",{children:"Gather Stone (+5)"}),d.jsxs("span",{className:"text-[10px] text-gray-300",children:["(",5-T," more to clear)"]})]})}),Date.now()-f<1e3&&d.jsx(wn,{position:[0,1,0],center:!0,distanceFactor:10,zIndexRange:[100,0],children:d.jsx("div",{className:"text-gray-300 font-bold text-sm animate-bounce pointer-events-none",children:"+5 Stone"})})]})},p0=()=>{const n=xt(e=>e.nature);return d.jsx("group",{children:n.map(e=>e.type==="tree"?d.jsx(d0,{id:e.id,position:e.position,scale:e.scale},e.id):d.jsx(f0,{id:e.id,position:e.position,scale:e.scale},e.id))})},m0=({settler:n})=>{const e=oe.useRef(null);return bh(t=>{e.current&&(e.current.position.y=Math.sin(t.clock.elapsedTime*5)*.1,n.state==="walking"&&n.targetPosition&&e.current.lookAt(n.targetPosition[0],0,n.targetPosition[2]))}),d.jsxs("group",{position:n.position,ref:e,children:[d.jsxs("mesh",{position:[0,.5,0],castShadow:!0,children:[d.jsx("capsuleGeometry",{args:[.2,.6,4,8]}),d.jsx("meshStandardMaterial",{color:"#3b82f6"})]}),d.jsxs("mesh",{position:[0,.9,0],castShadow:!0,children:[d.jsx("sphereGeometry",{args:[.2,16,16]}),d.jsx("meshStandardMaterial",{color:"#ffdbac"})]}),d.jsx(wn,{position:[0,1.4,0],center:!0,distanceFactor:10,children:d.jsx("div",{className:"bg-black/50 text-white text-[10px] px-1 rounded backdrop-blur-sm whitespace-nowrap pointer-events-none",children:n.name})}),d.jsxs("mesh",{position:[0,.01,0],rotation:[-Math.PI/2,0,0],children:[d.jsx("circleGeometry",{args:[.25,16]}),d.jsx("meshBasicMaterial",{color:"black",opacity:.3,transparent:!0})]})]})},g0=()=>{const{buildings:n,nature:e,selectedBuilding:t,selectedBuildingId:r,isBuilding:s,addBuilding:i,selectBuildingId:a,setSelectedBuilding:c,season:u,settlers:f}=xt(),[m,T]=oe.useState(null),[x,R]=oe.useState(!0),D=2,C=()=>{switch(u){case"spring":return"#5C8C46";case"summer":return"#4A7036";case"autumn":return"#8B7355";case"winter":return"#F0F8FF";default:return"#5C8C46"}},S=F=>{if(n.some(w=>w.position[0]===F[0]&&w.position[2]===F[2]))return!0;const Q=F[0]-.8,E=F[0]+.8,g=F[2]-.8,_=F[2]+.8;return e.some(w=>w.position[0]>Q&&w.position[0]<E&&w.position[2]>g&&w.position[2]<_)},O=F=>{if(!s||!t){m&&T(null);return}const K=Math.round(F.point.x/D)*D,Q=Math.round(F.point.z/D)*D,E=[K,0,Q];(!m||m[0]!==K||m[2]!==Q)&&(T(E),R(!S(E)))},j=F=>{s&&t&&m?(F.stopPropagation(),x&&i(t,m)):(a(null),c(null))},P=(F,K)=>{s||(F.stopPropagation(),a(K))};return d.jsxs("group",{children:[d.jsx(p0,{}),d.jsxs("mesh",{rotation:[-Math.PI/2,0,0],position:[0,-.1,0],receiveShadow:!0,onPointerMove:O,onClick:j,children:[d.jsx("planeGeometry",{args:[100,100]}),d.jsx("meshStandardMaterial",{color:C()})]}),d.jsx("gridHelper",{args:[100,50,16777215,16777215],position:[0,.01,0],"material-opacity":.2,"material-transparent":!0}),n.map(F=>d.jsx("group",{position:F.position,children:d.jsx(qc,{type:F.type,level:F.level,selected:r===F.id,onClick:K=>P(K,F.id)})},F.id)),f.map(F=>d.jsx(m0,{settler:F},F.id)),s&&t&&m&&d.jsx("group",{position:m,children:d.jsx(qc,{type:t,ghost:!0,isValid:x})})]})},_0=()=>{const n=xt(t=>t.tick),e=xt(t=>t.tickRate);return oe.useEffect(()=>{const t=setInterval(()=>{n()},e);return()=>clearInterval(t)},[n,e]),null},y0=()=>{const{day:n,weather:e}=xt(),t=oe.useRef(null),r=n%1,s=[Math.sin(r*Math.PI*2)*100,Math.cos(r*Math.PI*2+Math.PI)*100,20],i=s[1]/100;let a=Math.max(0,i);e!=="sunny"&&(a*=.5);const c=Math.max(.1,a*.5);let u=a>.2?"#87CEEB":"#050510";return e==="rain"&&(u="#708090"),e==="snow"&&(u="#E0FFFF"),e!=="sunny"&&a<.2&&(u="#050510"),d.jsxs(d.Fragment,{children:[d.jsx(xh,{sunPosition:s,turbidity:e!=="sunny"?10:.5,rayleigh:e!=="sunny"?.1:.5+(1-a)*.5,mieCoefficient:.005,mieDirectionalG:.7}),a<.2&&e==="sunny"&&d.jsx(Ah,{radius:100,depth:50,count:5e3,factor:4,saturation:0,fade:!0,speed:1}),a<.3&&e==="sunny"&&d.jsx(ci,{count:100,scale:50,size:4,speed:.4,opacity:.7,color:"#ffff00",position:[0,5,0]}),e==="rain"&&d.jsxs(d.Fragment,{children:[d.jsx(ci,{count:2e3,scale:[50,20,50],size:2,speed:2,opacity:.6,color:"#aaaaaa",position:[0,10,0]}),d.jsx(ts,{position:[-10,15,-10],opacity:.5,speed:.2}),d.jsx(ts,{position:[10,15,10],opacity:.5,speed:.2})]}),e==="snow"&&d.jsxs(d.Fragment,{children:[d.jsx(ci,{count:2e3,scale:[50,20,50],size:4,speed:.5,opacity:.8,color:"#ffffff",position:[0,10,0]}),d.jsx(ts,{position:[-10,15,-10],opacity:.3,speed:.1,color:"#ffffff"}),d.jsx(ts,{position:[10,15,10],opacity:.3,speed:.1,color:"#ffffff"})]}),d.jsx(Rh,{preset:e==="sunny"?"forest":"city",background:!1}),d.jsx("ambientLight",{intensity:c,color:e==="snow"?"#E0FFFF":a<.2?"#1a1a2e":"#ffffff"}),d.jsx("directionalLight",{ref:t,position:s,intensity:a*2,castShadow:!0,"shadow-mapSize":[2048,2048],"shadow-bias":-1e-4,children:d.jsx("orthographicCamera",{attach:"shadow-camera",args:[-50,50,50,-50]})}),d.jsx("fog",{attach:"fog",args:[u,10,80]})]})};function v0(){return d.jsxs("div",{className:"relative w-full h-full bg-slate-900 touch-none",children:[d.jsx(_0,{}),d.jsx(Sh,{shadows:!0,camera:{position:[20,20,20],fov:50},dpr:[1,2],gl:{antialias:!1},children:d.jsxs(oe.Suspense,{fallback:d.jsxs("mesh",{position:[0,0,0],children:[d.jsx("boxGeometry",{args:[1,1,1]}),d.jsx("meshStandardMaterial",{color:"orange",wireframe:!0})]}),children:[d.jsx(y0,{}),d.jsx(g0,{}),d.jsx(Ph,{makeDefault:!0,maxPolarAngle:Math.PI/2.2,minDistance:10,maxDistance:80,enableDamping:!0,dampingFactor:.05}),d.jsxs(Zh,{children:[d.jsx(ed,{luminanceThreshold:1,mipmapBlur:!0,intensity:.5}),d.jsx(td,{}),d.jsx(nd,{eskil:!1,offset:.1,darkness:.5})]})]})}),d.jsx(h0,{})]})}console.log("Homestead Survival: Initializing...");console.log("Three.js Revision:",kh);class w0 extends Gc.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){console.error("Uncaught error:",e,t)}render(){var e;return this.state.hasError?d.jsxs("div",{className:"flex flex-col items-center justify-center h-screen bg-slate-900 text-white p-4",children:[d.jsx("h1",{className:"text-2xl font-bold text-red-500 mb-4",children:"Something went wrong"}),d.jsx("pre",{className:"bg-black/50 p-4 rounded text-sm overflow-auto max-w-full",children:(e=this.state.error)==null?void 0:e.toString()}),d.jsx("button",{onClick:()=>window.location.reload(),className:"mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700",children:"Reload Game"})]}):this.props.children}}Ch.createRoot(document.getElementById("root")).render(d.jsx(Gc.StrictMode,{children:d.jsx(w0,{children:d.jsx(v0,{})})}));
