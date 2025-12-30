import{r as te,z as h,I as Tn,w as Kc,J as Ca,K as ss,Q as Ph,X as kh,Y as li,Z as is,_ as Ch,$ as Nh,a0 as Mh,p as Dh,R as Qc,a1 as Vh}from"./vendor-BmBeRRRP.js";import{c as jh,M as Oh,C as Lh,S as Fh,a as Uh,b as Bh,U as Na,H as $h,T as Ma,B as Da,P as Gh,d as qh,e as zh,L as Hh,f as Wh,R as Kh,X as os,g as Va,h as Qh,Z as Jh,A as Xh,i as Yh,G as Zh,j as Jc,k as ed,W as td,l as nd,E as rd,m as sd,n as id,V as od}from"./game-BS6PJgFk.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const ad={};function cd(n,e){let t;try{t=n()}catch{return}return{getItem:s=>{var i;const a=u=>u===null?null:JSON.parse(u,void 0),c=(i=t.getItem(s))!=null?i:null;return c instanceof Promise?c.then(a):a(c)},setItem:(s,i)=>t.setItem(s,JSON.stringify(i,void 0)),removeItem:s=>t.removeItem(s)}}const fr=n=>e=>{try{const t=n(e);return t instanceof Promise?t:{then(r){return fr(r)(t)},catch(r){return this}}}catch(t){return{then(r){return this},catch(r){return fr(r)(t)}}}},ld=(n,e)=>(t,r,s)=>{let i={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:P=>P,version:0,merge:(P,V)=>({...V,...P}),...e},a=!1;const c=new Set,u=new Set;let f;try{f=i.getStorage()}catch{}if(!f)return n((...P)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),t(...P)},r,s);const p=fr(i.serialize),w=()=>{const P=i.partialize({...r()});let V;const O=p({state:P,version:i.version}).then(S=>f.setItem(i.name,S)).catch(S=>{V=S});if(V)throw V;return O},x=s.setState;s.setState=(P,V)=>{x(P,V),w()};const A=n((...P)=>{t(...P),w()},r,s);let k;const C=()=>{var P;if(!f)return;a=!1,c.forEach(O=>O(r()));const V=((P=i.onRehydrateStorage)==null?void 0:P.call(i,r()))||void 0;return fr(f.getItem.bind(f))(i.name).then(O=>{if(O)return i.deserialize(O)}).then(O=>{if(O)if(typeof O.version=="number"&&O.version!==i.version){if(i.migrate)return i.migrate(O.state,O.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return O.state}).then(O=>{var S;return k=i.merge(O,(S=r())!=null?S:A),t(k,!0),w()}).then(()=>{V==null||V(k,void 0),a=!0,u.forEach(O=>O(k))}).catch(O=>{V==null||V(void 0,O)})};return s.persist={setOptions:P=>{i={...i,...P},P.getStorage&&(f=P.getStorage())},clearStorage:()=>{f==null||f.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>C(),hasHydrated:()=>a,onHydrate:P=>(c.add(P),()=>{c.delete(P)}),onFinishHydration:P=>(u.add(P),()=>{u.delete(P)})},C(),k||A},ud=(n,e)=>(t,r,s)=>{let i={storage:cd(()=>localStorage),partialize:C=>C,version:0,merge:(C,P)=>({...P,...C}),...e},a=!1;const c=new Set,u=new Set;let f=i.storage;if(!f)return n((...C)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),t(...C)},r,s);const p=()=>{const C=i.partialize({...r()});return f.setItem(i.name,{state:C,version:i.version})},w=s.setState;s.setState=(C,P)=>{w(C,P),p()};const x=n((...C)=>{t(...C),p()},r,s);s.getInitialState=()=>x;let A;const k=()=>{var C,P;if(!f)return;a=!1,c.forEach(O=>{var S;return O((S=r())!=null?S:x)});const V=((P=i.onRehydrateStorage)==null?void 0:P.call(i,(C=r())!=null?C:x))||void 0;return fr(f.getItem.bind(f))(i.name).then(O=>{if(O)if(typeof O.version=="number"&&O.version!==i.version){if(i.migrate)return[!0,i.migrate(O.state,O.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,O.state];return[!1,void 0]}).then(O=>{var S;const[F,K]=O;if(A=i.merge(K,(S=r())!=null?S:x),t(A,!0),F)return p()}).then(()=>{V==null||V(A,void 0),A=r(),a=!0,u.forEach(O=>O(A))}).catch(O=>{V==null||V(void 0,O)})};return s.persist={setOptions:C=>{i={...i,...C},C.storage&&(f=C.storage)},clearStorage:()=>{f==null||f.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>k(),hasHydrated:()=>a,onHydrate:C=>(c.add(C),()=>{c.delete(C)}),onFinishHydration:C=>(u.add(C),()=>{u.delete(C)})},i.skipHydration||k(),A||x},hd=(n,e)=>"getStorage"in e||"serialize"in e||"deserialize"in e?((ad?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),ld(n,e)):ud(n,e),dd=hd,sr={strong:{type:"strong",name:"Strong",description:"Consumes energy slower while working."},fast:{type:"fast",name:"Fast",description:"Moves significantly faster."},glutton:{type:"glutton",name:"Glutton",description:"Gets hungry faster."},ascetic:{type:"ascetic",name:"Ascetic",description:"Needs less food."},insomniac:{type:"insomniac",name:"Insomniac",description:"Regains energy faster while resting."},workaholic:{type:"workaholic",name:"Workaholic",description:"Loses happiness slower when working."}},yn={barn:{wood:120,stone:60},cabin:{wood:10},farm:{wood:20,stone:5},lumberMill:{wood:50,stone:10},mine:{wood:100,stone:50},warehouse:{wood:100,stone:20},bakery:{wood:60,stone:20},well:{wood:30,stone:40},campfire:{wood:30,stone:5},watchtower:{wood:80,stone:30},fishery:{wood:40,stone:10},workshop:{wood:80,stone:30,iron:10},infirmary:{wood:70,stone:50},tradingPost:{wood:100,stone:20,food:50}},Et={barn:{housing:2,storage:100,happiness:.5},cabin:{housing:4},farm:{workers:1},lumberMill:{workers:2},mine:{workers:3},warehouse:{storage:200},bakery:{workers:2,happiness:.4},well:{happiness:.6},campfire:{housing:1,happiness:1.2},watchtower:{workers:1,happiness:.2},fishery:{workers:1},workshop:{workers:1},infirmary:{workers:1,happiness:.6},tradingPost:{workers:1}},Xc={barn:{},cabin:{},farm:{food:5},lumberMill:{wood:5},mine:{stone:2,iron:1},warehouse:{},bakery:{food:8},well:{},campfire:{},watchtower:{},fishery:{food:6},workshop:{wood:1,stone:1},infirmary:{},tradingPost:{}},bi=[{id:"toolmaking",name:"Toolmaking",description:"Craft tools to boost production and unlock Workshops.",cost:{wood:80,stone:30},barnLevelReq:2},{id:"herbalism",name:"Herbalism",description:"Basic medicine to keep settlers healthier; unlocks Infirmary.",cost:{wood:60,food:40},barnLevelReq:2},{id:"fishing",name:"Fishing Nets",description:"Unlock Fisheries for steady food.",cost:{wood:50,stone:20},barnLevelReq:2},{id:"fortifications",name:"Fortifications",description:"Improve defense; unlock Watchtowers.",cost:{wood:90,stone:70},barnLevelReq:3},{id:"baking",name:"Baking",description:"Unlock Bakeries and better food variety.",cost:{wood:70,stone:30},barnLevelReq:2}],fd={fishery:"fishing",watchtower:"fortifications",bakery:"baking",workshop:"toolmaking",infirmary:"herbalism"},ui={barn:[[0,0,1.2]],cabin:[],farm:[[-1.2,0,-1],[1.2,0,1],[-1.2,0,1],[1.2,0,-1]],lumberMill:[[0,0,1]],mine:[[.8,0,.8]],warehouse:[[0,0,1]],bakery:[[0,0,1]],well:[[0,0,.8]],campfire:[[1.5,0,0],[-1.5,0,0],[0,0,1.5],[0,0,-1.5]],watchtower:[[0,4.2,0]],fishery:[[1.6,0,0]],workshop:[[0,0,1]],infirmary:[[0,0,1]],tradingPost:[[0,0,1]]},mn=()=>Math.random().toString(36).substr(2,9),ja=n=>{const e=[],r=["wood","food","stone","iron"];for(let s=0;s<3;s++){const i=r[Math.floor(Math.random()*r.length)];let a=r[Math.floor(Math.random()*r.length)];for(;a===i;)a=r[Math.floor(Math.random()*r.length)];const c=20+Math.floor(Math.random()*50);e.push({id:mn(),gives:{[i]:c},wants:{[a]:Math.floor(c*(.5+Math.random()))},expiresAt:n+5})}return e},md=()=>{const n=Math.random()>.7?2:1,e=Object.values(sr),t=[];for(let r=0;r<n;r++){const s=e[Math.floor(Math.random()*e.length)];t.find(i=>i.type===s.type)||t.push(s)}return t},nr={id:"barn-main",type:"barn",position:[0,0,0],level:1,lastCollected:Date.now()},pd={mine:2,warehouse:2,bakery:2,watchtower:2,fishery:3},kt=jh()(dd((n,e)=>({resources:{wood:100,food:50,stone:0,iron:0},settlers:[{id:"settler-1",name:"John",position:[0,0,0],targetPosition:null,state:"idle",actionTimer:0,hunger:100,energy:100,traits:[sr.strong]},{id:"settler-2",name:"Jane",position:[2,0,2],targetPosition:null,state:"idle",actionTimer:0,hunger:100,energy:100,traits:[sr.fast]}],happiness:100,buildings:[nr],nature:(()=>{const t=[];for(let r=0;r<40;r++){const s=Math.random()*Math.PI*2,i=15+Math.random()*30,a=Math.cos(s)*i,c=Math.sin(s)*i,u=Math.random()>.3?"tree":"rock",f=.8+Math.random()*.5;t.push({id:`nature-${r}`,position:[a,0,c],type:u,scale:f})}return t})(),logs:[],weather:"sunny",season:"spring",selectedBuilding:null,selectedBuildingId:null,isBuilding:!1,tickRate:1e3,day:1,objectives:[{id:"obj-wood",title:"Gatherer",description:"Stockpile 150 wood to prove the village can build.",goal:{type:"resource",key:"wood",amount:150},reward:{food:40},complete:!1,claimed:!1},{id:"obj-farm",title:"First Harvest",description:"Build a farm to secure food.",goal:{type:"building",key:"farm",amount:1},reward:{wood:60,food:30},complete:!1,claimed:!1},{id:"obj-pop",title:"New Neighbors",description:"Reach 6 settlers in your homestead.",goal:{type:"population",amount:6},reward:{stone:50,food:50},complete:!1,claimed:!1},{id:"obj-happy",title:"Joyous Village",description:"Raise happiness to 85% or higher.",goal:{type:"happiness",amount:85},reward:{wood:80,iron:20},complete:!1,claimed:!1}],unlockedResearch:[],currentResearch:null,researchProgress:0,tradeOffers:[],lastTradeRefresh:0,addLog:(t,r="info")=>{n(s=>({logs:[{id:mn(),message:t,timestamp:Date.now(),type:r},...s.logs||[]].slice(0,20)}))},addResource:(t,r)=>n(s=>{const c=100+(s.buildings||[]).reduce((p,w)=>{var x;return p+(((x=Et[w.type])==null?void 0:x.storage)||0)*w.level},0),u=s.resources[t],f=Math.min(u+r,c);return{resources:{...s.resources,[t]:f}}}),removeResource:(t,r)=>e().resources[t]>=r?(n(i=>({resources:{...i.resources,[t]:i.resources[t]-r}})),!0):!1,removeNature:t=>{const r=e(),s=(r.nature||[]).find(i=>i.id===t);s&&(r.addLog(`Cleared ${s.type}`,"info"),n(i=>({nature:(i.nature||[]).filter(a=>a.id!==t)})))},addBuilding:(t,r)=>{const s=e();if(t==="barn"){s.addLog("The Barn already anchors your homestead and cannot be placed again.","warning");return}const i=(s.buildings||[]).find(V=>V.type==="barn");i||n(V=>({buildings:[nr,...V.buildings||[]]}));const a=pd[t];if(a&&(!i||i.level<a)){s.addLog(`Upgrade the Barn to level ${a} to unlock ${t}.`,"warning");return}const c=fd[t];if(c&&!(s.unlockedResearch||[]).includes(c)){s.addLog(`Research "${c}" to unlock ${t}.`,"warning");return}const u=(s.buildings||[]).some(V=>V.position[0]===r[0]&&V.position[2]===r[2]),f=r[0]-.8,p=r[0]+.8,w=r[2]-.8,x=r[2]+.8,A=(s.nature||[]).some(V=>V.position[0]>f&&V.position[0]<p&&V.position[2]>w&&V.position[2]<x);if(u||A){s.addLog("Cannot build here!","warning");return}const k=yn[t],C=Et[t];let P=!0;if(Object.keys(k).forEach(V=>{(s.resources[V]||0)<(k[V]||0)&&(P=!1)}),!P){s.addLog("Not enough resources!","warning");return}if(C.workers){const V=(s.buildings||[]).reduce((O,S)=>{var F;return O+(((F=Et[S.type])==null?void 0:F.workers)||0)},0);if((s.settlers||[]).length-V<C.workers){P=!1,s.addLog("Not enough workers!","warning");return}}P&&(Object.keys(k).forEach(V=>{s.removeResource(V,k[V]||0)}),n(V=>({buildings:[...V.buildings,{id:mn(),type:t,position:r,level:1,lastCollected:Date.now()}],isBuilding:!1,selectedBuilding:null})),s.addLog(`Built ${t}!`,"success"))},upgradeBuilding:t=>{const r=e(),s=(r.buildings||[]).find(u=>u.id===t);if(!s)return;const i=yn[s.type],a=s.level+1;let c=!0;Object.keys(i).forEach(u=>{const f=(i[u]||0)*a;(r.resources[u]||0)<f&&(c=!1)}),c?(Object.keys(i).forEach(u=>{const f=(i[u]||0)*a;r.removeResource(u,f)}),n(u=>({buildings:(u.buildings||[]).map(f=>f.id===t?{...f,level:f.level+1}:f)})),r.addLog(`Upgraded ${s.type} to level ${s.level+1}`,"success")):r.addLog("Not enough resources to upgrade!","warning")},demolishBuilding:t=>{const r=e(),s=(r.buildings||[]).find(i=>i.id===t);if((s==null?void 0:s.type)==="barn"){r.addLog("The Barn is the heart of the homestead and cannot be demolished.","warning");return}if(s){r.addLog(`Demolished ${s.type}`,"danger");const i=(r.settlers||[]).map(a=>a.job===t?{...a,job:void 0,state:"idle"}:a.home===t?{...a,home:void 0}:a);n(a=>({buildings:(a.buildings||[]).filter(c=>c.id!==t),settlers:i,selectedBuildingId:null}))}},assignWorker:t=>{const r=e(),s=(r.buildings||[]).find(u=>u.id===t);if(!s)return;const i=Et[s.type];if(!i.workers){r.addLog(`${s.type} does not require workers.`,"warning");return}if((r.settlers||[]).filter(u=>u.job===t).length>=(i.workers||0)){r.addLog(`${s.type} is fully staffed.`,"warning");return}const c=(r.settlers||[]).find(u=>!u.job);c?(n(u=>({settlers:(u.settlers||[]).map(f=>f.id===c.id?{...f,job:t,state:"walking",targetPosition:s.position}:f)})),r.addLog(`${c.name} assigned to ${s.type}.`,"success")):r.addLog("No unemployed settlers available.","warning")},unassignWorker:t=>{const r=e(),s=(r.settlers||[]).find(i=>i.job===t);s&&(n(i=>({settlers:(i.settlers||[]).map(a=>a.id===s.id?{...a,job:void 0,state:"idle"}:a)})),r.addLog(`${s.name} unassigned from job.`,"info"))},setSelectedBuilding:t=>n({selectedBuilding:t,isBuilding:!!t,selectedBuildingId:null}),selectBuildingId:t=>n({selectedBuildingId:t,selectedBuilding:null,isBuilding:!1}),setTickRate:t=>{const r=Math.min(2e3,Math.max(300,t));n({tickRate:r})},celebrateFestival:()=>{const t=e(),r=30,s=40;if(t.resources.wood<r||t.resources.food<s){t.addLog("Not enough supplies for a festival!","warning");return}n(i=>({resources:{...i.resources,wood:i.resources.wood-r,food:i.resources.food-s},happiness:Math.min(100,i.happiness+15)})),t.addLog("You held a lively festival! Happiness soared.","success")},sendExpedition:()=>{var c;const t=e(),r=25,s=15;if(t.resources.food<r||t.resources.wood<s){t.addLog("Not enough supplies to send an expedition.","warning");return}n(u=>{var f,p;return{resources:{...u.resources,food:(((f=u.resources)==null?void 0:f.food)||0)-r,wood:(((p=u.resources)==null?void 0:p.wood)||0)-s}}});const i=(t.buildings||[]).filter(u=>u.type==="watchtower").length,a=Math.random()+i*.05;if(a>.65){const u=40+Math.round(Math.random()*40),f=30+Math.round(Math.random()*30),p=Math.round(Math.random()*30);n(w=>{var x,A,k;return{resources:{...w.resources,wood:(((x=w.resources)==null?void 0:x.wood)||0)+u,food:(((A=w.resources)==null?void 0:A.food)||0)+f,stone:(((k=w.resources)==null?void 0:k.stone)||0)+p},settlers:Math.random()>.6?[...w.settlers||[],{id:mn(),name:`Scout ${(w.settlers||[]).length+1}`,position:[0,0,0],targetPosition:null,state:"idle",actionTimer:0,hunger:100,energy:100,traits:md()}]:w.settlers||[]}}),t.addLog(`Expedition returned with riches! +${u} wood, +${f} food${p?`, +${p} stone`:""}`,"success")}else if(a>.35){const u=5+Math.round(Math.random()*10);n(f=>{var p;return{resources:{...f.resources,iron:(((p=f.resources)==null?void 0:p.iron)||0)+u}}}),t.addLog(`Expedition found rare iron veins! +${u} iron`,"info")}else{const u=Math.max(5,Math.round((((c=t.resources)==null?void 0:c.wood)||0)*.05));n(f=>{var p;return{resources:{...f.resources,wood:Math.max(0,(((p=f.resources)==null?void 0:p.wood)||0)-u)},happiness:Math.max(0,(f.happiness||0)-5)}}),t.addLog("Expedition ran into trouble and limped home. Lost some supplies.","danger")}},claimObjective:t=>{const r=e(),s=(r.objectives||[]).find(i=>i.id===t);!s||!s.complete||s.claimed||(n(i=>({resources:{wood:i.resources.wood+(s.reward.wood||0),food:i.resources.food+(s.reward.food||0),stone:i.resources.stone+(s.reward.stone||0),iron:i.resources.iron+(s.reward.iron||0)},objectives:(i.objectives||[]).map(a=>a.id===t?{...a,claimed:!0}:a)})),r.addLog(`Claimed reward: ${s.title}`,"success"))},startResearch:t=>{const r=e();if((r.unlockedResearch||[]).includes(t)){r.addLog("Research already unlocked.","warning");return}if(r.currentResearch===t){r.addLog("Research already in progress.","info");return}const s=bi.find(c=>c.id===t);if(!s)return;const i=(r.buildings||[]).find(c=>c.type==="barn");if(!i||i.level<s.barnLevelReq){r.addLog(`Barn level ${s.barnLevelReq} required.`,"warning");return}if(!Object.keys(s.cost).every(c=>r.resources[c]>=(s.cost[c]||0))){r.addLog("Not enough resources for research.","warning");return}n(c=>({resources:{...c.resources,...Object.keys(s.cost).reduce((u,f)=>(u[f]=c.resources[f]-(s.cost[f]||0),u),{})},currentResearch:t,researchProgress:0})),r.addLog(`Started research: ${s.name}`,"success")},cancelResearch:()=>{const t=e();t.currentResearch&&(n({currentResearch:null,researchProgress:0}),t.addLog("Research cancelled.","info"))},acceptTrade:t=>{const r=e(),s=(r.tradeOffers||[]).find(a=>a.id===t);if(!s)return;if(!Object.keys(s.wants).every(a=>(r.resources[a]||0)>=(s.wants[a]||0))){r.addLog("Not enough resources for this trade.","warning");return}n(a=>({resources:{...a.resources,...Object.keys(s.wants).reduce((c,u)=>(c[u]=a.resources[u]-(s.wants[u]||0),c),{}),...Object.keys(s.gives).reduce((c,u)=>(c[u]=(a.resources[u]||0)+(s.gives[u]||0),c),{})},tradeOffers:(a.tradeOffers||[]).filter(c=>c.id!==t)})),r.addLog("Trade completed!","success")},refreshTrades:()=>{const t=e();n({tradeOffers:ja(t.day),lastTradeRefresh:t.day}),t.addLog("New traders have arrived at the Trading Post.","info")},loadSaveData:t=>{const r=e(),s=t.buildings||r.buildings||[],i=(s||[]).some(c=>c.type==="barn")?s:[nr,...s],a=(t.settlers||r.settlers).map(c=>({...c,traits:c.traits||[]}));n({resources:t.resources||r.resources,settlers:a,happiness:t.happiness??r.happiness,buildings:i,nature:t.nature||r.nature,logs:t.logs||r.logs,weather:t.weather||r.weather,season:t.season||r.season,day:t.day??r.day,objectives:t.objectives||r.objectives,unlockedResearch:t.unlockedResearch||r.unlockedResearch,currentResearch:t.currentResearch??r.currentResearch,researchProgress:t.researchProgress??r.researchProgress,tradeOffers:t.tradeOffers||[],lastTradeRefresh:t.lastTradeRefresh||0,selectedBuilding:null,selectedBuildingId:null,isBuilding:!1}),r.addLog("Loaded save data.","info")},tick:()=>{n(t=>{let r={...t.resources},s=t.happiness,i=t.logs,a=t.weather,c=t.season,u=[...t.settlers];const f=100,p=(t.buildings||[]).reduce((S,F)=>{var K;return S+(((K=Et[F.type])==null?void 0:K.storage)||0)*F.level},0),w=f+p;(t.buildings||[]).forEach(S=>{const F=Xc[S.type];F&&Object.keys(F).forEach(K=>{const J=(F[K]||0)*S.level*.1;r[K]=Math.min(w,r[K]+J)})});const x=(t.settlers||[]).length*.04;if(r.food=Math.max(0,r.food-x),r.food<=.1?s=Math.max(0,s-.5):s=Math.min(100,s+.02),Math.random()<.01){const S=["sunny","rain","snow"];a=S[Math.floor(Math.random()*S.length)]}const A=t.day+.005,k=A%4;c=k<1?"spring":k<2?"summer":k<3?"autumn":"winter";let C=t.tradeOffers||[],P=t.lastTradeRefresh||0;if((t.buildings||[]).some(S=>S.type==="tradingPost")&&A-t.lastTradeRefresh>3&&(C=ja(A),P=A,i=[{id:mn(),message:"Traders have arrived with new offers.",timestamp:Date.now(),type:"info"},...i].slice(0,20)),u=(t.settlers||[]).map(S=>{var I,b,y,Ue,Be,tn;const F=A%1,K=F>.75||F<.2,J=F>.25&&F<.7;let E=S.home;if(!E){const Q=(t.buildings||[]).find(re=>{const ge=Et[re.type];return ge.housing?(t.settlers||[]).filter(xe=>xe.home===re.id).length<ge.housing*re.level:!1});Q&&(E=Q.id)}if(S.job&&J){const Q=(t.buildings||[]).find(re=>re.id===S.job);if(Q){const re=ui[Q.type]||[[0,0,0]],ge=(t.settlers||[]).filter(oe=>oe.job===Q.id).indexOf(S),fe=re[ge%re.length]||[0,0,0],xe=[Q.position[0]+fe[0],Q.position[1]+fe[1],Q.position[2]+fe[2]];return Math.hypot(S.position[0]-xe[0],S.position[2]-xe[2])>.5?{...S,home:E,state:"walking",targetPosition:xe}:{...S,home:E,state:"working",targetPosition:null}}}if(K){const Q=(t.buildings||[]).find(fe=>fe.id===E)||(t.buildings||[]).find(fe=>fe.type==="barn"),re=Q?Q.position:[0,0,0];return Math.hypot(S.position[0]-re[0],S.position[2]-re[2])>.5?{...S,home:E,state:"walking",targetPosition:re}:{...S,home:E,state:"resting",targetPosition:null}}if(S.state==="idle"||S.state==="working"&&!J||S.state==="resting"&&!K){if(Math.random()<.02){const Q=(t.buildings||[]).filter(ue=>ue.type==="campfire"||ue.type==="well");if(Q.length>0&&Math.random()<.5){const ue=Q[Math.floor(Math.random()*Q.length)],oe=ui[ue.type]||[[0,0,0]],Dt=oe[Math.floor(Math.random()*oe.length)]||[0,0,0];return{...S,home:E,state:"walking",targetPosition:[ue.position[0]+Dt[0],0,ue.position[2]+Dt[2]]}}const re=Math.random()*Math.PI*2,ge=3+Math.random()*8,fe=Math.cos(re)*ge,xe=Math.sin(re)*ge;return{...S,home:E,state:"walking",targetPosition:[fe,0,xe]}}return{...S,home:E,state:"idle"}}if(S.state==="walking"&&S.targetPosition){const Q=S.targetPosition[0]-S.position[0],re=S.targetPosition[2]-S.position[2],ge=Math.hypot(Q,re);let fe=.08;if((I=S.traits)!=null&&I.some(xe=>xe.type==="fast")&&(fe*=1.5),ge<fe){let xe="idle";if(J&&S.job){const ue=(t.buildings||[]).find(oe=>oe.id===S.job);ue&&(ui[ue.type]||[[0,0,0]]).some(He=>Math.hypot(S.targetPosition[0]-(ue.position[0]+He[0]),S.targetPosition[2]-(ue.position[2]+He[2]))<.1)&&(xe="working")}else K&&(xe="resting");return{...S,position:S.targetPosition,targetPosition:null,state:xe}}return{...S,position:[S.position[0]+Q/ge*fe,0,S.position[2]+re/ge*fe]}}let g=.1;(b=S.traits)!=null&&b.some(Q=>Q.type==="glutton")&&(g*=1.5),(y=S.traits)!=null&&y.some(Q=>Q.type==="ascetic")&&(g*=.7);let _=Math.max(0,Math.min(100,S.hunger-g)),v=S.energy;if(S.state==="working"||S.state==="walking"){let Q=.2;(Ue=S.traits)!=null&&Ue.some(re=>re.type==="strong")&&(Q*=.6),v=Math.max(0,v-Q)}else if(S.state==="resting"){let Q=.6;(Be=S.traits)!=null&&Be.some(re=>re.type==="insomniac")&&(Q*=1.5),v=Math.min(100,v+Q),_=Math.max(0,_-.05)}else v=Math.min(100,v+.1);return _<20&&(s=Math.max(0,s-.2)),v<20&&(s=Math.max(0,s-.1)),_>70&&v>70&&(s=Math.min(100,s+.05)),S.state==="working"&&((tn=S.traits)!=null&&tn.some(Q=>Q.type==="workaholic"))&&(s=Math.min(100,s+.01)),{...S,hunger:_,energy:v}}),t.currentResearch){const S=bi.find(J=>J.id===t.currentResearch),K=t.researchProgress+.01;return K>=1&&S?(i=[{id:mn(),message:`Research completed: ${S.name}`,timestamp:Date.now(),type:"success"},...i].slice(0,20),{resources:r,settlers:u,happiness:s,weather:a,season:c,day:A,logs:i,tickRate:t.tickRate,buildings:t.buildings,nature:t.nature,selectedBuilding:t.selectedBuilding,selectedBuildingId:t.selectedBuildingId,isBuilding:t.isBuilding,objectives:t.objectives,unlockedResearch:[...new Set([...t.unlockedResearch,t.currentResearch])],currentResearch:null,researchProgress:0,tradeOffers:C,lastTradeRefresh:P}):{resources:r,settlers:u,happiness:s,weather:a,season:c,day:A,logs:i,tickRate:t.tickRate,buildings:t.buildings,nature:t.nature,selectedBuilding:t.selectedBuilding,selectedBuildingId:t.selectedBuildingId,isBuilding:t.isBuilding,objectives:t.objectives,unlockedResearch:t.unlockedResearch,currentResearch:t.currentResearch,researchProgress:K,tradeOffers:C,lastTradeRefresh:P}}const O=(t.objectives||[]).map(S=>{if(S.complete)return S;let F=!1;return S.goal.type==="resource"&&S.goal.key?F=(r[S.goal.key]||0)>=S.goal.amount:S.goal.type==="building"&&S.goal.key?F=(t.buildings||[]).filter(K=>K.type===S.goal.key).length>=S.goal.amount:S.goal.type==="population"?F=(u||[]).length>=S.goal.amount:S.goal.type==="happiness"&&(F=(s||0)>=S.goal.amount),F?{...S,complete:!0}:S});return{resources:r,settlers:u,happiness:s,weather:a,season:c,day:A,logs:i,tickRate:t.tickRate,buildings:t.buildings,nature:t.nature,selectedBuilding:t.selectedBuilding,selectedBuildingId:t.selectedBuildingId,isBuilding:t.isBuilding,objectives:O,unlockedResearch:t.unlockedResearch,currentResearch:t.currentResearch,researchProgress:t.researchProgress,tradeOffers:C,lastTradeRefresh:P}})},reset:()=>{const t=[];for(let r=0;r<40;r++){const s=Math.random()*Math.PI*2,i=15+Math.random()*30,a=Math.cos(s)*i,c=Math.sin(s)*i,u=Math.random()>.3?"tree":"rock",f=.8+Math.random()*.5;t.push({id:`nature-${r}`,position:[a,0,c],type:u,scale:f})}n({resources:{wood:100,food:50,stone:0,iron:0},settlers:[{id:"settler-1",name:"John",position:[0,0,0],targetPosition:null,state:"idle",actionTimer:0,hunger:100,energy:100,traits:[sr.strong]},{id:"settler-2",name:"Jane",position:[2,0,2],targetPosition:null,state:"idle",actionTimer:0,hunger:100,energy:100,traits:[sr.fast]}],happiness:100,buildings:[nr],nature:t,logs:[],weather:"sunny",season:"spring",selectedBuilding:null,selectedBuildingId:null,isBuilding:!1,day:1,tickRate:1e3,objectives:e().objectives.map(r=>({...r,complete:!1,claimed:!1})),unlockedResearch:[],currentResearch:null,researchProgress:0,tradeOffers:[],lastTradeRefresh:0})}}),{name:"homestead-storage",version:2,migrate:(n,e)=>{const t=n;return t.buildings||(t.buildings=[]),(t.buildings||[]).some(r=>r.type==="barn")||(t.buildings=[nr,...t.buildings]),t.settlers&&(t.settlers=t.settlers.map(r=>({...r,traits:r.traits||[]}))),t},partialize:n=>({resources:n.resources,settlers:n.settlers,happiness:n.happiness,buildings:n.buildings,nature:n.nature,logs:n.logs,weather:n.weather,season:n.season,day:n.day,tickRate:n.tickRate,objectives:n.objectives,unlockedResearch:n.unlockedResearch,currentResearch:n.currentResearch,researchProgress:n.researchProgress,tradeOffers:n.tradeOffers,lastTradeRefresh:n.lastTradeRefresh})}));var Oa={};/**
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
 */const Yc=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},gd=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Zc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,u=s+2<n.length,f=u?n[s+2]:0,p=i>>2,w=(i&3)<<4|c>>4;let x=(c&15)<<2|f>>6,A=f&63;u||(A=64,a||(x=64)),r.push(t[p],t[w],t[x],t[A])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Yc(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):gd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const f=s<n.length?t[n.charAt(s)]:64;++s;const w=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||f==null||w==null)throw new _d;const x=i<<2|c>>4;if(r.push(x),f!==64){const A=c<<4&240|f>>2;if(r.push(A),w!==64){const k=f<<6&192|w;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class _d extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yd=function(n){const e=Yc(n);return Zc.encodeByteArray(e,!0)},ws=function(n){return yd(n).replace(/\./g,"")},el=function(n){try{return Zc.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function vd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const wd=()=>vd().__FIREBASE_DEFAULTS__,Ed=()=>{if(typeof process>"u"||typeof Oa>"u")return;const n=Oa.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Id=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&el(n[1]);return e&&JSON.parse(e)},js=()=>{try{return wd()||Ed()||Id()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},tl=n=>{var e,t;return(t=(e=js())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Td=n=>{const e=tl(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},nl=()=>{var n;return(n=js())===null||n===void 0?void 0:n.config},rl=n=>{var e;return(e=js())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class bd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function xd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ws(JSON.stringify(t)),ws(JSON.stringify(a)),""].join(".")}/**
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
 */function Le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ad(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Le())}function Rd(){var n;const e=(n=js())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Sd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Pd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function kd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Cd(){const n=Le();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Nd(){return!Rd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Md(){try{return typeof indexedDB=="object"}catch{return!1}}function Dd(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Vd="FirebaseError";class pt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Vd,Object.setPrototypeOf(this,pt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xr.prototype.create)}}class xr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?jd(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new pt(s,c,r)}}function jd(n,e){return n.replace(Od,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Od=/\{\$([^}]+)}/g;function Ld(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Es(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(La(i)&&La(a)){if(!Es(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function La(n){return n!==null&&typeof n=="object"}/**
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
 */function Ar(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Fd(n,e){const t=new Ud(n,e);return t.subscribe.bind(t)}class Ud{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Bd(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=hi),s.error===void 0&&(s.error=hi),s.complete===void 0&&(s.complete=hi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Bd(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function hi(){}/**
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
 */function ze(n){return n&&n._delegate?n._delegate:n}class Kt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Gt="[DEFAULT]";/**
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
 */class $d{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new bd;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qd(e))try{this.getOrInitializeService({instanceIdentifier:Gt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Gt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gt){return this.instances.has(e)}getOptions(e=Gt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Gd(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Gt){return this.component?this.component.multipleInstances?e:Gt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gd(n){return n===Gt?void 0:n}function qd(n){return n.instantiationMode==="EAGER"}/**
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
 */class zd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new $d(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Y||(Y={}));const Hd={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},Wd=Y.INFO,Kd={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},Qd=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Kd[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wi{constructor(e){this.name=e,this._logLevel=Wd,this._logHandler=Qd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Hd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const Jd=(n,e)=>e.some(t=>n instanceof t);let Fa,Ua;function Xd(){return Fa||(Fa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yd(){return Ua||(Ua=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sl=new WeakMap,xi=new WeakMap,il=new WeakMap,di=new WeakMap,Ki=new WeakMap;function Zd(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(At(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&sl.set(t,n)}).catch(()=>{}),Ki.set(e,n),e}function ef(n){if(xi.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});xi.set(n,e)}let Ai={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return xi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||il.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return At(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function tf(n){Ai=n(Ai)}function nf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(fi(this),e,...t);return il.set(r,e.sort?e.sort():[e]),At(r)}:Yd().includes(n)?function(...e){return n.apply(fi(this),e),At(sl.get(this))}:function(...e){return At(n.apply(fi(this),e))}}function rf(n){return typeof n=="function"?nf(n):(n instanceof IDBTransaction&&ef(n),Jd(n,Xd())?new Proxy(n,Ai):n)}function At(n){if(n instanceof IDBRequest)return Zd(n);if(di.has(n))return di.get(n);const e=rf(n);return e!==n&&(di.set(n,e),Ki.set(e,n)),e}const fi=n=>Ki.get(n);function sf(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=At(a);return r&&a.addEventListener("upgradeneeded",u=>{r(At(a.result),u.oldVersion,u.newVersion,At(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const of=["get","getKey","getAll","getAllKeys","count"],af=["put","add","delete","clear"],mi=new Map;function Ba(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(mi.get(e))return mi.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=af.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||of.includes(t)))return;const i=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let f=u.store;return r&&(f=f.index(c.shift())),(await Promise.all([f[t](...c),s&&u.done]))[0]};return mi.set(e,i),i}tf(n=>({...n,get:(e,t,r)=>Ba(e,t)||n.get(e,t,r),has:(e,t)=>!!Ba(e,t)||n.has(e,t)}));/**
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
 */class cf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(lf(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function lf(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ri="@firebase/app",$a="0.10.13";/**
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
 */const ht=new Wi("@firebase/app"),uf="@firebase/app-compat",hf="@firebase/analytics-compat",df="@firebase/analytics",ff="@firebase/app-check-compat",mf="@firebase/app-check",pf="@firebase/auth",gf="@firebase/auth-compat",_f="@firebase/database",yf="@firebase/data-connect",vf="@firebase/database-compat",wf="@firebase/functions",Ef="@firebase/functions-compat",If="@firebase/installations",Tf="@firebase/installations-compat",bf="@firebase/messaging",xf="@firebase/messaging-compat",Af="@firebase/performance",Rf="@firebase/performance-compat",Sf="@firebase/remote-config",Pf="@firebase/remote-config-compat",kf="@firebase/storage",Cf="@firebase/storage-compat",Nf="@firebase/firestore",Mf="@firebase/vertexai-preview",Df="@firebase/firestore-compat",Vf="firebase",jf="10.14.1";/**
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
 */const Si="[DEFAULT]",Of={[Ri]:"fire-core",[uf]:"fire-core-compat",[df]:"fire-analytics",[hf]:"fire-analytics-compat",[mf]:"fire-app-check",[ff]:"fire-app-check-compat",[pf]:"fire-auth",[gf]:"fire-auth-compat",[_f]:"fire-rtdb",[yf]:"fire-data-connect",[vf]:"fire-rtdb-compat",[wf]:"fire-fn",[Ef]:"fire-fn-compat",[If]:"fire-iid",[Tf]:"fire-iid-compat",[bf]:"fire-fcm",[xf]:"fire-fcm-compat",[Af]:"fire-perf",[Rf]:"fire-perf-compat",[Sf]:"fire-rc",[Pf]:"fire-rc-compat",[kf]:"fire-gcs",[Cf]:"fire-gcs-compat",[Nf]:"fire-fst",[Df]:"fire-fst-compat",[Mf]:"fire-vertex","fire-js":"fire-js",[Vf]:"fire-js-all"};/**
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
 */const Is=new Map,Lf=new Map,Pi=new Map;function Ga(n,e){try{n.container.addComponent(e)}catch(t){ht.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function bn(n){const e=n.name;if(Pi.has(e))return ht.debug(`There were multiple attempts to register component ${e}.`),!1;Pi.set(e,n);for(const t of Is.values())Ga(t,n);for(const t of Lf.values())Ga(t,n);return!0}function Qi(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ot(n){return n.settings!==void 0}/**
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
 */const Ff={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Rt=new xr("app","Firebase",Ff);/**
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
 */class Uf{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Kt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rt.create("app-deleted",{appName:this._name})}}/**
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
 */const Mn=jf;function ol(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Si,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Rt.create("bad-app-name",{appName:String(s)});if(t||(t=nl()),!t)throw Rt.create("no-options");const i=Is.get(s);if(i){if(Es(t,i.options)&&Es(r,i.config))return i;throw Rt.create("duplicate-app",{appName:s})}const a=new zd(s);for(const u of Pi.values())a.addComponent(u);const c=new Uf(t,r,a);return Is.set(s,c),c}function al(n=Si){const e=Is.get(n);if(!e&&n===Si&&nl())return ol();if(!e)throw Rt.create("no-app",{appName:n});return e}function St(n,e,t){var r;let s=(r=Of[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ht.warn(c.join(" "));return}bn(new Kt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Bf="firebase-heartbeat-database",$f=1,mr="firebase-heartbeat-store";let pi=null;function cl(){return pi||(pi=sf(Bf,$f,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(mr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Rt.create("idb-open",{originalErrorMessage:n.message})})),pi}async function Gf(n){try{const t=(await cl()).transaction(mr),r=await t.objectStore(mr).get(ll(n));return await t.done,r}catch(e){if(e instanceof pt)ht.warn(e.message);else{const t=Rt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ht.warn(t.message)}}}async function qa(n,e){try{const r=(await cl()).transaction(mr,"readwrite");await r.objectStore(mr).put(e,ll(n)),await r.done}catch(t){if(t instanceof pt)ht.warn(t.message);else{const r=Rt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ht.warn(r.message)}}}function ll(n){return`${n.name}!${n.options.appId}`}/**
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
 */const qf=1024,zf=30*24*60*60*1e3;class Hf{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Kf(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=za();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=zf}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ht.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=za(),{heartbeatsToSend:r,unsentEntries:s}=Wf(this._heartbeatsCache.heartbeats),i=ws(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return ht.warn(t),""}}}function za(){return new Date().toISOString().substring(0,10)}function Wf(n,e=qf){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Ha(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Ha(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Kf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Md()?Dd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Gf(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return qa(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return qa(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ha(n){return ws(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Qf(n){bn(new Kt("platform-logger",e=>new cf(e),"PRIVATE")),bn(new Kt("heartbeat",e=>new Hf(e),"PRIVATE")),St(Ri,$a,n),St(Ri,$a,"esm2017"),St("fire-js","")}Qf("");var Jf="firebase",Xf="10.14.1";/**
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
 */St(Jf,Xf,"app");function Ji(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function ul(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Yf=ul,hl=new xr("auth","Firebase",ul());/**
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
 */const Ts=new Wi("@firebase/auth");function Zf(n,...e){Ts.logLevel<=Y.WARN&&Ts.warn(`Auth (${Mn}): ${n}`,...e)}function ds(n,...e){Ts.logLevel<=Y.ERROR&&Ts.error(`Auth (${Mn}): ${n}`,...e)}/**
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
 */function Ze(n,...e){throw Yi(n,...e)}function Qe(n,...e){return Yi(n,...e)}function Xi(n,e,t){const r=Object.assign(Object.assign({},Yf()),{[e]:t});return new xr("auth","Firebase",r).create(e,{appName:n.name})}function Ht(n){return Xi(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function em(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ze(n,"argument-error"),Xi(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Yi(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return hl.create(n,...e)}function q(n,e,...t){if(!n)throw Yi(e,...t)}function at(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ds(e),new Error(e)}function dt(n,e){n||at(e)}/**
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
 */function ki(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function tm(){return Wa()==="http:"||Wa()==="https:"}function Wa(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function nm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tm()||Pd()||"connection"in navigator)?navigator.onLine:!0}function rm(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Rr{constructor(e,t){this.shortDelay=e,this.longDelay=t,dt(t>e,"Short delay should be less than long delay!"),this.isMobile=Ad()||kd()}get(){return nm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Zi(n,e){dt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class dl{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;at("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;at("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;at("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const sm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const im=new Rr(3e4,6e4);function eo(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Dn(n,e,t,r,s={}){return fl(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=Ar(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const f=Object.assign({method:e,headers:u},i);return Sd()||(f.referrerPolicy="no-referrer"),dl.fetch()(ml(n,n.config.apiHost,t,c),f)})}async function fl(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},sm),e);try{const s=new am(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw as(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[u,f]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw as(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw as(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw as(n,"user-disabled",a);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Xi(n,p,f);Ze(n,p)}}catch(s){if(s instanceof pt)throw s;Ze(n,"network-request-failed",{message:String(s)})}}async function om(n,e,t,r,s={}){const i=await Dn(n,e,t,r,s);return"mfaPendingCredential"in i&&Ze(n,"multi-factor-auth-required",{_serverResponse:i}),i}function ml(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?Zi(n.config,s):`${n.config.apiScheme}://${s}`}class am{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Qe(this.auth,"network-request-failed")),im.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function as(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Qe(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */async function cm(n,e){return Dn(n,"POST","/v1/accounts:delete",e)}async function pl(n,e){return Dn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function cr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lm(n,e=!1){const t=ze(n),r=await t.getIdToken(e),s=to(r);q(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:cr(gi(s.auth_time)),issuedAtTime:cr(gi(s.iat)),expirationTime:cr(gi(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function gi(n){return Number(n)*1e3}function to(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ds("JWT malformed, contained fewer than 3 sections"),null;try{const s=el(t);return s?JSON.parse(s):(ds("Failed to decode base64 JWT payload"),null)}catch(s){return ds("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ka(n){const e=to(n);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function pr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof pt&&um(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function um({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class hm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ci{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=cr(this.lastLoginAt),this.creationTime=cr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function bs(n){var e;const t=n.auth,r=await n.getIdToken(),s=await pr(n,pl(t,{idToken:r}));q(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?gl(i.providerUserInfo):[],c=fm(n.providerData,a),u=n.isAnonymous,f=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),p=u?f:!1,w={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Ci(i.createdAt,i.lastLoginAt),isAnonymous:p};Object.assign(n,w)}async function dm(n){const e=ze(n);await bs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fm(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function gl(n){return n.map(e=>{var{providerId:t}=e,r=Ji(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function mm(n,e){const t=await fl(n,{},async()=>{const r=Ar({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=ml(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",dl.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function pm(n,e){return Dn(n,"POST","/v2/accounts:revokeToken",eo(n,e))}/**
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
 */class vn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ka(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){q(e.length!==0,"internal-error");const t=Ka(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await mm(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new vn;return r&&(q(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(q(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(q(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vn,this.toJSON())}_performRefresh(){return at("not implemented")}}/**
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
 */function wt(n,e){q(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ct{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Ji(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new hm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ci(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await pr(this,this.stsTokenManager.getToken(this.auth,e));return q(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return lm(this,e)}reload(){return dm(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ct(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await bs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ot(this.auth.app))return Promise.reject(Ht(this.auth));const e=await this.getIdToken();return await pr(this,cm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,c,u,f,p;const w=(r=t.displayName)!==null&&r!==void 0?r:void 0,x=(s=t.email)!==null&&s!==void 0?s:void 0,A=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,k=(a=t.photoURL)!==null&&a!==void 0?a:void 0,C=(c=t.tenantId)!==null&&c!==void 0?c:void 0,P=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,V=(f=t.createdAt)!==null&&f!==void 0?f:void 0,O=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:S,emailVerified:F,isAnonymous:K,providerData:J,stsTokenManager:E}=t;q(S&&E,e,"internal-error");const g=vn.fromJSON(this.name,E);q(typeof S=="string",e,"internal-error"),wt(w,e.name),wt(x,e.name),q(typeof F=="boolean",e,"internal-error"),q(typeof K=="boolean",e,"internal-error"),wt(A,e.name),wt(k,e.name),wt(C,e.name),wt(P,e.name),wt(V,e.name),wt(O,e.name);const _=new ct({uid:S,auth:e,email:x,emailVerified:F,displayName:w,isAnonymous:K,photoURL:k,phoneNumber:A,tenantId:C,stsTokenManager:g,createdAt:V,lastLoginAt:O});return J&&Array.isArray(J)&&(_.providerData=J.map(v=>Object.assign({},v))),P&&(_._redirectEventId=P),_}static async _fromIdTokenResponse(e,t,r=!1){const s=new vn;s.updateFromServerResponse(t);const i=new ct({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await bs(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];q(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?gl(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new vn;c.updateFromIdToken(r);const u=new ct({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ci(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,f),u}}/**
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
 */const Qa=new Map;function lt(n){dt(n instanceof Function,"Expected a class definition");let e=Qa.get(n);return e?(dt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Qa.set(n,e),e)}/**
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
 */class _l{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}_l.type="NONE";const Ja=_l;/**
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
 */function fs(n,e,t){return`firebase:${n}:${e}:${t}`}class wn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=fs(this.userKey,s.apiKey,i),this.fullPersistenceKey=fs("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ct._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new wn(lt(Ja),e,r);const s=(await Promise.all(t.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let i=s[0]||lt(Ja);const a=fs(r,e.config.apiKey,e.name);let c=null;for(const f of t)try{const p=await f._get(a);if(p){const w=ct._fromJSON(e,p);f!==i&&(c=w),i=f;break}}catch{}const u=s.filter(f=>f._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new wn(i,e,r):(i=u[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async f=>{if(f!==i)try{await f._remove(a)}catch{}})),new wn(i,e,r))}}/**
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
 */function Xa(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(El(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Tl(e))return"Blackberry";if(bl(e))return"Webos";if(vl(e))return"Safari";if((e.includes("chrome/")||wl(e))&&!e.includes("edge/"))return"Chrome";if(Il(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function yl(n=Le()){return/firefox\//i.test(n)}function vl(n=Le()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wl(n=Le()){return/crios\//i.test(n)}function El(n=Le()){return/iemobile/i.test(n)}function Il(n=Le()){return/android/i.test(n)}function Tl(n=Le()){return/blackberry/i.test(n)}function bl(n=Le()){return/webos/i.test(n)}function no(n=Le()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function gm(n=Le()){var e;return no(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _m(){return Cd()&&document.documentMode===10}function xl(n=Le()){return no(n)||Il(n)||bl(n)||Tl(n)||/windows phone/i.test(n)||El(n)}/**
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
 */function Al(n,e=[]){let t;switch(n){case"Browser":t=Xa(Le());break;case"Worker":t=`${Xa(Le())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Mn}/${r}`}/**
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
 */class ym{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const u=e(i);a(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function vm(n,e={}){return Dn(n,"GET","/v2/passwordPolicy",eo(n,e))}/**
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
 */const wm=6;class Em{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:wm,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Im{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ya(this),this.idTokenSubscription=new Ya(this),this.beforeStateQueue=new ym(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=lt(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await wn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await pl(this,{idToken:e}),r=await ct._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ot(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await bs(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ot(this.app))return Promise.reject(Ht(this));const t=e?ze(e):null;return t&&q(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ot(this.app)?Promise.reject(Ht(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ot(this.app)?Promise.reject(Ht(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(lt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vm(this),t=new Em(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new xr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await pm(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&lt(e)||this._popupRedirectResolver;q(t,this,"argument-error"),this.redirectPersistenceManager=await wn.create(this,[lt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Al(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Zf(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Os(n){return ze(n)}class Ya{constructor(e){this.auth=e,this.observer=null,this.addObserver=Fd(t=>this.observer=t)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ro={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Tm(n){ro=n}function bm(n){return ro.loadJS(n)}function xm(){return ro.gapiScript}function Am(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Rm(n,e){const t=Qi(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Es(i,e??{}))return s;Ze(s,"already-initialized")}return t.initialize({options:e})}function Sm(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(lt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Pm(n,e,t){const r=Os(n);q(r._canInitEmulator,r,"emulator-config-failed"),q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Rl(e),{host:a,port:c}=km(e),u=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Cm()}function Rl(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function km(n){const e=Rl(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Za(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Za(a)}}}function Za(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Cm(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Sl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return at("not implemented")}_getIdTokenResponse(e){return at("not implemented")}_linkToIdToken(e,t){return at("not implemented")}_getReauthenticationResolver(e){return at("not implemented")}}/**
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
 */async function En(n,e){return om(n,"POST","/v1/accounts:signInWithIdp",eo(n,e))}/**
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
 */const Nm="http://localhost";class Qt extends Sl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Qt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ze("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=Ji(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Qt(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return En(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,En(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,En(e,t)}buildRequest(){const e={requestUri:Nm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ar(t)}return e}}/**
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
 */class so{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Sr extends so{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class It extends Sr{constructor(){super("facebook.com")}static credential(e){return Qt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return It.credential(e.oauthAccessToken)}catch{return null}}}It.FACEBOOK_SIGN_IN_METHOD="facebook.com";It.PROVIDER_ID="facebook.com";/**
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
 */class it extends Sr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Qt._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return it.credential(t,r)}catch{return null}}}it.GOOGLE_SIGN_IN_METHOD="google.com";it.PROVIDER_ID="google.com";/**
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
 */class Tt extends Sr{constructor(){super("github.com")}static credential(e){return Qt._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tt.credential(e.oauthAccessToken)}catch{return null}}}Tt.GITHUB_SIGN_IN_METHOD="github.com";Tt.PROVIDER_ID="github.com";/**
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
 */class bt extends Sr{constructor(){super("twitter.com")}static credential(e,t){return Qt._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return bt.credential(t,r)}catch{return null}}}bt.TWITTER_SIGN_IN_METHOD="twitter.com";bt.PROVIDER_ID="twitter.com";/**
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
 */class xn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await ct._fromIdTokenResponse(e,r,s),a=ec(r);return new xn({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=ec(r);return new xn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function ec(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class xs extends pt{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,xs.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new xs(e,t,r,s)}}function Pl(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?xs._fromErrorAndOperation(n,i,e,r):i})}async function Mm(n,e,t=!1){const r=await pr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return xn._forOperation(n,"link",r)}/**
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
 */async function Dm(n,e,t=!1){const{auth:r}=n;if(ot(r.app))return Promise.reject(Ht(r));const s="reauthenticate";try{const i=await pr(n,Pl(r,s,e,n),t);q(i.idToken,r,"internal-error");const a=to(i.idToken);q(a,r,"internal-error");const{sub:c}=a;return q(n.uid===c,r,"user-mismatch"),xn._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ze(r,"user-mismatch"),i}}/**
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
 */async function Vm(n,e,t=!1){if(ot(n.app))return Promise.reject(Ht(n));const r="signIn",s=await Pl(n,r,e),i=await xn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function jm(n,e,t,r){return ze(n).onIdTokenChanged(e,t,r)}function Om(n,e,t){return ze(n).beforeAuthStateChanged(e,t)}function Lm(n,e,t,r){return ze(n).onAuthStateChanged(e,t,r)}function Fm(n){return ze(n).signOut()}const As="__sak";/**
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
 */class kl{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(As,"1"),this.storage.removeItem(As),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Um=1e3,Bm=10;class Cl extends kl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=xl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);_m()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Bm):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Um)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Cl.type="LOCAL";const $m=Cl;/**
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
 */class Nl extends kl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Nl.type="SESSION";const Ml=Nl;/**
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
 */function Gm(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ls{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Ls(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async f=>f(t.origin,i)),u=await Gm(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ls.receivers=[];/**
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
 */function io(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class qm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,u)=>{const f=io("",20);s.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(w){const x=w;if(x.data.eventId===f)switch(x.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(x.data.response);break;default:clearTimeout(p),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Je(){return window}function zm(n){Je().location.href=n}/**
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
 */function Dl(){return typeof Je().WorkerGlobalScope<"u"&&typeof Je().importScripts=="function"}async function Hm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Wm(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Km(){return Dl()?self:null}/**
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
 */const Vl="firebaseLocalStorageDb",Qm=1,Rs="firebaseLocalStorage",jl="fbase_key";class Pr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Fs(n,e){return n.transaction([Rs],e?"readwrite":"readonly").objectStore(Rs)}function Jm(){const n=indexedDB.deleteDatabase(Vl);return new Pr(n).toPromise()}function Ni(){const n=indexedDB.open(Vl,Qm);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Rs,{keyPath:jl})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Rs)?e(r):(r.close(),await Jm(),e(await Ni()))})})}async function tc(n,e,t){const r=Fs(n,!0).put({[jl]:e,value:t});return new Pr(r).toPromise()}async function Xm(n,e){const t=Fs(n,!1).get(e),r=await new Pr(t).toPromise();return r===void 0?null:r.value}function nc(n,e){const t=Fs(n,!0).delete(e);return new Pr(t).toPromise()}const Ym=800,Zm=3;class Ol{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ni(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Zm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Dl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ls._getInstance(Km()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Hm(),!this.activeServiceWorker)return;this.sender=new qm(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Wm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ni();return await tc(e,As,"1"),await nc(e,As),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>tc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Xm(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>nc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Fs(s,!1).getAll();return new Pr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ym)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ol.type="LOCAL";const ep=Ol;new Rr(3e4,6e4);/**
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
 */function Ll(n,e){return e?lt(e):(q(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class oo extends Sl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return En(e,this._buildIdpRequest())}_linkToIdToken(e,t){return En(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return En(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function tp(n){return Vm(n.auth,new oo(n),n.bypassAuthState)}function np(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),Dm(t,new oo(n),n.bypassAuthState)}async function rp(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),Mm(t,new oo(n),n.bypassAuthState)}/**
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
 */class Fl{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tp;case"linkViaPopup":case"linkViaRedirect":return rp;case"reauthViaPopup":case"reauthViaRedirect":return np;default:Ze(this.auth,"internal-error")}}resolve(e){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const sp=new Rr(2e3,1e4);async function ip(n,e,t){if(ot(n.app))return Promise.reject(Qe(n,"operation-not-supported-in-this-environment"));const r=Os(n);em(n,e,so);const s=Ll(r,t);return new qt(r,"signInViaPopup",e,s).executeNotNull()}class qt extends Fl{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,qt.currentPopupAction&&qt.currentPopupAction.cancel(),qt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){dt(this.filter.length===1,"Popup operations only handle one event");const e=io();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,sp.get())};e()}}qt.currentPopupAction=null;/**
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
 */const op="pendingRedirect",ms=new Map;class ap extends Fl{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=ms.get(this.auth._key());if(!e){try{const r=await cp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ms.set(this.auth._key(),e)}return this.bypassAuthState||ms.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cp(n,e){const t=hp(e),r=up(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function lp(n,e){ms.set(n._key(),e)}function up(n){return lt(n._redirectPersistence)}function hp(n){return fs(op,n.config.apiKey,n.name)}async function dp(n,e,t=!1){if(ot(n.app))return Promise.reject(Ht(n));const r=Os(n),s=Ll(r,e),a=await new ap(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const fp=10*60*1e3;class mp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pp(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Ul(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Qe(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fp&&this.cachedEventUids.clear(),this.cachedEventUids.has(rc(e))}saveEventToCache(e){this.cachedEventUids.add(rc(e)),this.lastProcessedEventTime=Date.now()}}function rc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ul({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function pp(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ul(n);default:return!1}}/**
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
 */async function gp(n,e={}){return Dn(n,"GET","/v1/projects",e)}/**
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
 */const _p=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yp=/^https?/;async function vp(n){if(n.config.emulator)return;const{authorizedDomains:e}=await gp(n);for(const t of e)try{if(wp(t))return}catch{}Ze(n,"unauthorized-domain")}function wp(n){const e=ki(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!yp.test(t))return!1;if(_p.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Ep=new Rr(3e4,6e4);function sc(){const n=Je().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Ip(n){return new Promise((e,t)=>{var r,s,i;function a(){sc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sc(),t(Qe(n,"network-request-failed"))},timeout:Ep.get()})}if(!((s=(r=Je().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Je().gapi)===null||i===void 0)&&i.load)a();else{const c=Am("iframefcb");return Je()[c]=()=>{gapi.load?a():t(Qe(n,"network-request-failed"))},bm(`${xm()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw ps=null,e})}let ps=null;function Tp(n){return ps=ps||Ip(n),ps}/**
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
 */const bp=new Rr(5e3,15e3),xp="__/auth/iframe",Ap="emulator/auth/iframe",Rp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Sp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Pp(n){const e=n.config;q(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Zi(e,Ap):`https://${n.config.authDomain}/${xp}`,r={apiKey:e.apiKey,appName:n.name,v:Mn},s=Sp.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Ar(r).slice(1)}`}async function kp(n){const e=await Tp(n),t=Je().gapi;return q(t,n,"internal-error"),e.open({where:document.body,url:Pp(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Rp,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Qe(n,"network-request-failed"),c=Je().setTimeout(()=>{i(a)},bp.get());function u(){Je().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const Cp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Np=500,Mp=600,Dp="_blank",Vp="http://localhost";class ic{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jp(n,e,t,r=Np,s=Mp){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Cp),{width:r.toString(),height:s.toString(),top:i,left:a}),f=Le().toLowerCase();t&&(c=wl(f)?Dp:t),yl(f)&&(e=e||Vp,u.scrollbars="yes");const p=Object.entries(u).reduce((x,[A,k])=>`${x}${A}=${k},`,"");if(gm(f)&&c!=="_self")return Op(e||"",c),new ic(null);const w=window.open(e||"",c,p);q(w,n,"popup-blocked");try{w.focus()}catch{}return new ic(w)}function Op(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Lp="__/auth/handler",Fp="emulator/auth/handler",Up=encodeURIComponent("fac");async function oc(n,e,t,r,s,i){q(n.config.authDomain,n,"auth-domain-config-required"),q(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Mn,eventId:s};if(e instanceof so){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Ld(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,w]of Object.entries({}))a[p]=w}if(e instanceof Sr){const p=e.getScopes().filter(w=>w!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const p of Object.keys(c))c[p]===void 0&&delete c[p];const u=await n._getAppCheckToken(),f=u?`#${Up}=${encodeURIComponent(u)}`:"";return`${Bp(n)}?${Ar(c).slice(1)}${f}`}function Bp({config:n}){return n.emulator?Zi(n,Fp):`https://${n.authDomain}/${Lp}`}/**
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
 */const _i="webStorageSupport";class $p{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ml,this._completeRedirectFn=dp,this._overrideRedirectResult=lp}async _openPopup(e,t,r,s){var i;dt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await oc(e,t,r,ki(),s);return jp(e,a,io())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await oc(e,t,r,ki(),s);return zm(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(dt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await kp(e),r=new mp(e);return t.register("authEvent",s=>(q(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(_i,{type:_i},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[_i];a!==void 0&&t(!!a),Ze(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=vp(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return xl()||vl()||no()}}const Gp=$p;var ac="@firebase/auth",cc="1.7.9";/**
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
 */class qp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function zp(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Hp(n){bn(new Kt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;q(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Al(n)},f=new Im(r,s,i,u);return Sm(f,t),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),bn(new Kt("auth-internal",e=>{const t=Os(e.getProvider("auth").getImmediate());return(r=>new qp(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),St(ac,cc,zp(n)),St(ac,cc,"esm2017")}/**
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
 */const Wp=5*60,Kp=rl("authIdTokenMaxAge")||Wp;let lc=null;const Qp=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Kp)return;const s=t==null?void 0:t.token;lc!==s&&(lc=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Jp(n=al()){const e=Qi(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Rm(n,{popupRedirectResolver:Gp,persistence:[ep,$m,Ml]}),r=rl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=Qp(i.toString());Om(t,a,()=>a(t.currentUser)),jm(t,c=>a(c))}}const s=tl("auth");return s&&Pm(t,`http://${s}`),t}function Xp(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Tm({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Qe("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",Xp().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Hp("Browser");var uc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wt,Bl;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,g){function _(){}_.prototype=g.prototype,E.D=g.prototype,E.prototype=new _,E.prototype.constructor=E,E.C=function(v,I,b){for(var y=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)y[Ue-2]=arguments[Ue];return g.prototype[I].apply(v,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,g,_){_||(_=0);var v=Array(16);if(typeof g=="string")for(var I=0;16>I;++I)v[I]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(I=0;16>I;++I)v[I]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=E.g[0],_=E.g[1],I=E.g[2];var b=E.g[3],y=g+(b^_&(I^b))+v[0]+3614090360&4294967295;g=_+(y<<7&4294967295|y>>>25),y=b+(I^g&(_^I))+v[1]+3905402710&4294967295,b=g+(y<<12&4294967295|y>>>20),y=I+(_^b&(g^_))+v[2]+606105819&4294967295,I=b+(y<<17&4294967295|y>>>15),y=_+(g^I&(b^g))+v[3]+3250441966&4294967295,_=I+(y<<22&4294967295|y>>>10),y=g+(b^_&(I^b))+v[4]+4118548399&4294967295,g=_+(y<<7&4294967295|y>>>25),y=b+(I^g&(_^I))+v[5]+1200080426&4294967295,b=g+(y<<12&4294967295|y>>>20),y=I+(_^b&(g^_))+v[6]+2821735955&4294967295,I=b+(y<<17&4294967295|y>>>15),y=_+(g^I&(b^g))+v[7]+4249261313&4294967295,_=I+(y<<22&4294967295|y>>>10),y=g+(b^_&(I^b))+v[8]+1770035416&4294967295,g=_+(y<<7&4294967295|y>>>25),y=b+(I^g&(_^I))+v[9]+2336552879&4294967295,b=g+(y<<12&4294967295|y>>>20),y=I+(_^b&(g^_))+v[10]+4294925233&4294967295,I=b+(y<<17&4294967295|y>>>15),y=_+(g^I&(b^g))+v[11]+2304563134&4294967295,_=I+(y<<22&4294967295|y>>>10),y=g+(b^_&(I^b))+v[12]+1804603682&4294967295,g=_+(y<<7&4294967295|y>>>25),y=b+(I^g&(_^I))+v[13]+4254626195&4294967295,b=g+(y<<12&4294967295|y>>>20),y=I+(_^b&(g^_))+v[14]+2792965006&4294967295,I=b+(y<<17&4294967295|y>>>15),y=_+(g^I&(b^g))+v[15]+1236535329&4294967295,_=I+(y<<22&4294967295|y>>>10),y=g+(I^b&(_^I))+v[1]+4129170786&4294967295,g=_+(y<<5&4294967295|y>>>27),y=b+(_^I&(g^_))+v[6]+3225465664&4294967295,b=g+(y<<9&4294967295|y>>>23),y=I+(g^_&(b^g))+v[11]+643717713&4294967295,I=b+(y<<14&4294967295|y>>>18),y=_+(b^g&(I^b))+v[0]+3921069994&4294967295,_=I+(y<<20&4294967295|y>>>12),y=g+(I^b&(_^I))+v[5]+3593408605&4294967295,g=_+(y<<5&4294967295|y>>>27),y=b+(_^I&(g^_))+v[10]+38016083&4294967295,b=g+(y<<9&4294967295|y>>>23),y=I+(g^_&(b^g))+v[15]+3634488961&4294967295,I=b+(y<<14&4294967295|y>>>18),y=_+(b^g&(I^b))+v[4]+3889429448&4294967295,_=I+(y<<20&4294967295|y>>>12),y=g+(I^b&(_^I))+v[9]+568446438&4294967295,g=_+(y<<5&4294967295|y>>>27),y=b+(_^I&(g^_))+v[14]+3275163606&4294967295,b=g+(y<<9&4294967295|y>>>23),y=I+(g^_&(b^g))+v[3]+4107603335&4294967295,I=b+(y<<14&4294967295|y>>>18),y=_+(b^g&(I^b))+v[8]+1163531501&4294967295,_=I+(y<<20&4294967295|y>>>12),y=g+(I^b&(_^I))+v[13]+2850285829&4294967295,g=_+(y<<5&4294967295|y>>>27),y=b+(_^I&(g^_))+v[2]+4243563512&4294967295,b=g+(y<<9&4294967295|y>>>23),y=I+(g^_&(b^g))+v[7]+1735328473&4294967295,I=b+(y<<14&4294967295|y>>>18),y=_+(b^g&(I^b))+v[12]+2368359562&4294967295,_=I+(y<<20&4294967295|y>>>12),y=g+(_^I^b)+v[5]+4294588738&4294967295,g=_+(y<<4&4294967295|y>>>28),y=b+(g^_^I)+v[8]+2272392833&4294967295,b=g+(y<<11&4294967295|y>>>21),y=I+(b^g^_)+v[11]+1839030562&4294967295,I=b+(y<<16&4294967295|y>>>16),y=_+(I^b^g)+v[14]+4259657740&4294967295,_=I+(y<<23&4294967295|y>>>9),y=g+(_^I^b)+v[1]+2763975236&4294967295,g=_+(y<<4&4294967295|y>>>28),y=b+(g^_^I)+v[4]+1272893353&4294967295,b=g+(y<<11&4294967295|y>>>21),y=I+(b^g^_)+v[7]+4139469664&4294967295,I=b+(y<<16&4294967295|y>>>16),y=_+(I^b^g)+v[10]+3200236656&4294967295,_=I+(y<<23&4294967295|y>>>9),y=g+(_^I^b)+v[13]+681279174&4294967295,g=_+(y<<4&4294967295|y>>>28),y=b+(g^_^I)+v[0]+3936430074&4294967295,b=g+(y<<11&4294967295|y>>>21),y=I+(b^g^_)+v[3]+3572445317&4294967295,I=b+(y<<16&4294967295|y>>>16),y=_+(I^b^g)+v[6]+76029189&4294967295,_=I+(y<<23&4294967295|y>>>9),y=g+(_^I^b)+v[9]+3654602809&4294967295,g=_+(y<<4&4294967295|y>>>28),y=b+(g^_^I)+v[12]+3873151461&4294967295,b=g+(y<<11&4294967295|y>>>21),y=I+(b^g^_)+v[15]+530742520&4294967295,I=b+(y<<16&4294967295|y>>>16),y=_+(I^b^g)+v[2]+3299628645&4294967295,_=I+(y<<23&4294967295|y>>>9),y=g+(I^(_|~b))+v[0]+4096336452&4294967295,g=_+(y<<6&4294967295|y>>>26),y=b+(_^(g|~I))+v[7]+1126891415&4294967295,b=g+(y<<10&4294967295|y>>>22),y=I+(g^(b|~_))+v[14]+2878612391&4294967295,I=b+(y<<15&4294967295|y>>>17),y=_+(b^(I|~g))+v[5]+4237533241&4294967295,_=I+(y<<21&4294967295|y>>>11),y=g+(I^(_|~b))+v[12]+1700485571&4294967295,g=_+(y<<6&4294967295|y>>>26),y=b+(_^(g|~I))+v[3]+2399980690&4294967295,b=g+(y<<10&4294967295|y>>>22),y=I+(g^(b|~_))+v[10]+4293915773&4294967295,I=b+(y<<15&4294967295|y>>>17),y=_+(b^(I|~g))+v[1]+2240044497&4294967295,_=I+(y<<21&4294967295|y>>>11),y=g+(I^(_|~b))+v[8]+1873313359&4294967295,g=_+(y<<6&4294967295|y>>>26),y=b+(_^(g|~I))+v[15]+4264355552&4294967295,b=g+(y<<10&4294967295|y>>>22),y=I+(g^(b|~_))+v[6]+2734768916&4294967295,I=b+(y<<15&4294967295|y>>>17),y=_+(b^(I|~g))+v[13]+1309151649&4294967295,_=I+(y<<21&4294967295|y>>>11),y=g+(I^(_|~b))+v[4]+4149444226&4294967295,g=_+(y<<6&4294967295|y>>>26),y=b+(_^(g|~I))+v[11]+3174756917&4294967295,b=g+(y<<10&4294967295|y>>>22),y=I+(g^(b|~_))+v[2]+718787259&4294967295,I=b+(y<<15&4294967295|y>>>17),y=_+(b^(I|~g))+v[9]+3951481745&4294967295,E.g[0]=E.g[0]+g&4294967295,E.g[1]=E.g[1]+(I+(y<<21&4294967295|y>>>11))&4294967295,E.g[2]=E.g[2]+I&4294967295,E.g[3]=E.g[3]+b&4294967295}r.prototype.u=function(E,g){g===void 0&&(g=E.length);for(var _=g-this.blockSize,v=this.B,I=this.h,b=0;b<g;){if(I==0)for(;b<=_;)s(this,E,b),b+=this.blockSize;if(typeof E=="string"){for(;b<g;)if(v[I++]=E.charCodeAt(b++),I==this.blockSize){s(this,v),I=0;break}}else for(;b<g;)if(v[I++]=E[b++],I==this.blockSize){s(this,v),I=0;break}}this.h=I,this.o+=g},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var g=1;g<E.length-8;++g)E[g]=0;var _=8*this.o;for(g=E.length-8;g<E.length;++g)E[g]=_&255,_/=256;for(this.u(E),E=Array(16),g=_=0;4>g;++g)for(var v=0;32>v;v+=8)E[_++]=this.g[g]>>>v&255;return E};function i(E,g){var _=c;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=g(E)}function a(E,g){this.h=g;for(var _=[],v=!0,I=E.length-1;0<=I;I--){var b=E[I]|0;v&&b==g||(_[I]=b,v=!1)}this.g=_}var c={};function u(E){return-128<=E&&128>E?i(E,function(g){return new a([g|0],0>g?-1:0)}):new a([E|0],0>E?-1:0)}function f(E){if(isNaN(E)||!isFinite(E))return w;if(0>E)return P(f(-E));for(var g=[],_=1,v=0;E>=_;v++)g[v]=E/_|0,_*=4294967296;return new a(g,0)}function p(E,g){if(E.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(E.charAt(0)=="-")return P(p(E.substring(1),g));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=f(Math.pow(g,8)),v=w,I=0;I<E.length;I+=8){var b=Math.min(8,E.length-I),y=parseInt(E.substring(I,I+b),g);8>b?(b=f(Math.pow(g,b)),v=v.j(b).add(f(y))):(v=v.j(_),v=v.add(f(y)))}return v}var w=u(0),x=u(1),A=u(16777216);n=a.prototype,n.m=function(){if(C(this))return-P(this).m();for(var E=0,g=1,_=0;_<this.g.length;_++){var v=this.i(_);E+=(0<=v?v:4294967296+v)*g,g*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(k(this))return"0";if(C(this))return"-"+P(this).toString(E);for(var g=f(Math.pow(E,6)),_=this,v="";;){var I=F(_,g).g;_=V(_,I.j(g));var b=((0<_.g.length?_.g[0]:_.h)>>>0).toString(E);if(_=I,k(_))return b+v;for(;6>b.length;)b="0"+b;v=b+v}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function k(E){if(E.h!=0)return!1;for(var g=0;g<E.g.length;g++)if(E.g[g]!=0)return!1;return!0}function C(E){return E.h==-1}n.l=function(E){return E=V(this,E),C(E)?-1:k(E)?0:1};function P(E){for(var g=E.g.length,_=[],v=0;v<g;v++)_[v]=~E.g[v];return new a(_,~E.h).add(x)}n.abs=function(){return C(this)?P(this):this},n.add=function(E){for(var g=Math.max(this.g.length,E.g.length),_=[],v=0,I=0;I<=g;I++){var b=v+(this.i(I)&65535)+(E.i(I)&65535),y=(b>>>16)+(this.i(I)>>>16)+(E.i(I)>>>16);v=y>>>16,b&=65535,y&=65535,_[I]=y<<16|b}return new a(_,_[_.length-1]&-2147483648?-1:0)};function V(E,g){return E.add(P(g))}n.j=function(E){if(k(this)||k(E))return w;if(C(this))return C(E)?P(this).j(P(E)):P(P(this).j(E));if(C(E))return P(this.j(P(E)));if(0>this.l(A)&&0>E.l(A))return f(this.m()*E.m());for(var g=this.g.length+E.g.length,_=[],v=0;v<2*g;v++)_[v]=0;for(v=0;v<this.g.length;v++)for(var I=0;I<E.g.length;I++){var b=this.i(v)>>>16,y=this.i(v)&65535,Ue=E.i(I)>>>16,Be=E.i(I)&65535;_[2*v+2*I]+=y*Be,O(_,2*v+2*I),_[2*v+2*I+1]+=b*Be,O(_,2*v+2*I+1),_[2*v+2*I+1]+=y*Ue,O(_,2*v+2*I+1),_[2*v+2*I+2]+=b*Ue,O(_,2*v+2*I+2)}for(v=0;v<g;v++)_[v]=_[2*v+1]<<16|_[2*v];for(v=g;v<2*g;v++)_[v]=0;return new a(_,0)};function O(E,g){for(;(E[g]&65535)!=E[g];)E[g+1]+=E[g]>>>16,E[g]&=65535,g++}function S(E,g){this.g=E,this.h=g}function F(E,g){if(k(g))throw Error("division by zero");if(k(E))return new S(w,w);if(C(E))return g=F(P(E),g),new S(P(g.g),P(g.h));if(C(g))return g=F(E,P(g)),new S(P(g.g),g.h);if(30<E.g.length){if(C(E)||C(g))throw Error("slowDivide_ only works with positive integers.");for(var _=x,v=g;0>=v.l(E);)_=K(_),v=K(v);var I=J(_,1),b=J(v,1);for(v=J(v,2),_=J(_,2);!k(v);){var y=b.add(v);0>=y.l(E)&&(I=I.add(_),b=y),v=J(v,1),_=J(_,1)}return g=V(E,I.j(g)),new S(I,g)}for(I=w;0<=E.l(g);){for(_=Math.max(1,Math.floor(E.m()/g.m())),v=Math.ceil(Math.log(_)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),b=f(_),y=b.j(g);C(y)||0<y.l(E);)_-=v,b=f(_),y=b.j(g);k(b)&&(b=x),I=I.add(b),E=V(E,y)}return new S(I,E)}n.A=function(E){return F(this,E).h},n.and=function(E){for(var g=Math.max(this.g.length,E.g.length),_=[],v=0;v<g;v++)_[v]=this.i(v)&E.i(v);return new a(_,this.h&E.h)},n.or=function(E){for(var g=Math.max(this.g.length,E.g.length),_=[],v=0;v<g;v++)_[v]=this.i(v)|E.i(v);return new a(_,this.h|E.h)},n.xor=function(E){for(var g=Math.max(this.g.length,E.g.length),_=[],v=0;v<g;v++)_[v]=this.i(v)^E.i(v);return new a(_,this.h^E.h)};function K(E){for(var g=E.g.length+1,_=[],v=0;v<g;v++)_[v]=E.i(v)<<1|E.i(v-1)>>>31;return new a(_,E.h)}function J(E,g){var _=g>>5;g%=32;for(var v=E.g.length-_,I=[],b=0;b<v;b++)I[b]=0<g?E.i(b+_)>>>g|E.i(b+_+1)<<32-g:E.i(b+_);return new a(I,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Bl=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=p,Wt=a}).apply(typeof uc<"u"?uc:typeof self<"u"?self:typeof window<"u"?window:{});var cs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $l,ir,Gl,gs,Mi,ql,zl,Hl;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,d){return o==Array.prototype||o==Object.prototype||(o[l]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof cs=="object"&&cs];for(var l=0;l<o.length;++l){var d=o[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(o,l){if(l)e:{var d=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var T=o[m];if(!(T in d))break e;d=d[T]}o=o[o.length-1],m=d[o],l=l(m),l!=m&&l!=null&&e(d,o,{configurable:!0,writable:!0,value:l})}}function i(o,l){o instanceof String&&(o+="");var d=0,m=!1,T={next:function(){if(!m&&d<o.length){var R=d++;return{value:l(R,o[R]),done:!1}}return m=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}s("Array.prototype.values",function(o){return o||function(){return i(this,function(l,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function f(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function p(o,l,d){return o.call.apply(o.bind,arguments)}function w(o,l,d){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,m),o.apply(l,T)}}return function(){return o.apply(l,arguments)}}function x(o,l,d){return x=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:w,x.apply(null,arguments)}function A(o,l){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function k(o,l){function d(){}d.prototype=l.prototype,o.aa=l.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(m,T,R){for(var j=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)j[ae-2]=arguments[ae];return l.prototype[T].apply(m,j)}}function C(o){const l=o.length;if(0<l){const d=Array(l);for(let m=0;m<l;m++)d[m]=o[m];return d}return[]}function P(o,l){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(u(m)){const T=o.length||0,R=m.length||0;o.length=T+R;for(let j=0;j<R;j++)o[T+j]=m[j]}else o.push(m)}}class V{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function O(o){return/^[\s\xa0]*$/.test(o)}function S(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function F(o){return F[" "](o),o}F[" "]=function(){};var K=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function J(o,l,d){for(const m in o)l.call(d,o[m],m,o)}function E(o,l){for(const d in o)l.call(void 0,o[d],d,o)}function g(o){const l={};for(const d in o)l[d]=o[d];return l}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(o,l){let d,m;for(let T=1;T<arguments.length;T++){m=arguments[T];for(d in m)o[d]=m[d];for(let R=0;R<_.length;R++)d=_[R],Object.prototype.hasOwnProperty.call(m,d)&&(o[d]=m[d])}}function I(o){var l=1;o=o.split(":");const d=[];for(;0<l&&o.length;)d.push(o.shift()),l--;return o.length&&d.push(o.join(":")),d}function b(o){c.setTimeout(()=>{throw o},0)}function y(){var o=ge;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class Ue{constructor(){this.h=this.g=null}add(l,d){const m=Be.get();m.set(l,d),this.h?this.h.next=m:this.g=m,this.h=m}}var Be=new V(()=>new tn,o=>o.reset());class tn{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Q,re=!1,ge=new Ue,fe=()=>{const o=c.Promise.resolve(void 0);Q=()=>{o.then(xe)}};var xe=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(d){b(d)}var l=Be;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}re=!1};function ue(){this.s=this.s,this.C=this.C}ue.prototype.s=!1,ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function oe(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}oe.prototype.h=function(){this.defaultPrevented=!0};var Dt=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};c.addEventListener("test",d,l),c.removeEventListener("test",d,l)}catch{}return o}();function He(o,l){if(oe.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(K){e:{try{F(l.nodeName);var T=!0;break e}catch{}T=!1}T||(l=null)}}else d=="mouseover"?l=o.fromElement:d=="mouseout"&&(l=o.toElement);this.relatedTarget=l,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Js[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&He.aa.h.call(this)}}k(He,oe);var Js={2:"touch",3:"pen",4:"mouse"};He.prototype.h=function(){He.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Vt="closure_listenable_"+(1e6*Math.random()|0),nn=0;function jr(o,l,d,m,T){this.listener=o,this.proxy=null,this.src=l,this.type=d,this.capture=!!m,this.ha=T,this.key=++nn,this.da=this.fa=!1}function jt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Ot(o){this.src=o,this.g={},this.h=0}Ot.prototype.add=function(o,l,d,m,T){var R=o.toString();o=this.g[R],o||(o=this.g[R]=[],this.h++);var j=sn(o,l,m,T);return-1<j?(l=o[j],d||(l.fa=!1)):(l=new jr(l,this.src,R,!!m,T),l.fa=d,o.push(l)),l};function rn(o,l){var d=l.type;if(d in o.g){var m=o.g[d],T=Array.prototype.indexOf.call(m,l,void 0),R;(R=0<=T)&&Array.prototype.splice.call(m,T,1),R&&(jt(l),o.g[d].length==0&&(delete o.g[d],o.h--))}}function sn(o,l,d,m){for(var T=0;T<o.length;++T){var R=o[T];if(!R.da&&R.listener==l&&R.capture==!!d&&R.ha==m)return T}return-1}var Fn="closure_lm_"+(1e6*Math.random()|0),Un={};function he(o,l,d,m,T){if(Array.isArray(l)){for(var R=0;R<l.length;R++)he(o,l[R],d,m,T);return null}return d=Lr(d),o&&o[Vt]?o.K(l,d,f(m)?!!m.capture:!1,T):Lt(o,l,d,!1,m,T)}function Lt(o,l,d,m,T,R){if(!l)throw Error("Invalid event type");var j=f(T)?!!T.capture:!!T,ae=an(o);if(ae||(o[Fn]=ae=new Ot(o)),d=ae.add(l,d,m,j,R),d.proxy)return d;if(m=Bn(),d.proxy=m,m.src=o,m.listener=d,o.addEventListener)Dt||(T=j),T===void 0&&(T=!1),o.addEventListener(l.toString(),m,T);else if(o.attachEvent)o.attachEvent(on(l.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Bn(){function o(d){return l.call(o.src,o.listener,d)}const l=Or;return o}function Ae(o,l,d,m,T){if(Array.isArray(l))for(var R=0;R<l.length;R++)Ae(o,l[R],d,m,T);else m=f(m)?!!m.capture:!!m,d=Lr(d),o&&o[Vt]?(o=o.i,l=String(l).toString(),l in o.g&&(R=o.g[l],d=sn(R,d,m,T),-1<d&&(jt(R[d]),Array.prototype.splice.call(R,d,1),R.length==0&&(delete o.g[l],o.h--)))):o&&(o=an(o))&&(l=o.g[l.toString()],o=-1,l&&(o=sn(l,d,m,T)),(d=-1<o?l[o]:null)&&$n(d))}function $n(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[Vt])rn(l.i,o);else{var d=o.type,m=o.proxy;l.removeEventListener?l.removeEventListener(d,m,o.capture):l.detachEvent?l.detachEvent(on(d),m):l.addListener&&l.removeListener&&l.removeListener(m),(d=an(l))?(rn(d,o),d.h==0&&(d.src=null,l[Fn]=null)):jt(o)}}}function on(o){return o in Un?Un[o]:Un[o]="on"+o}function Or(o,l){if(o.da)o=!0;else{l=new He(l,this);var d=o.listener,m=o.ha||o.src;o.fa&&$n(o),o=d.call(m,l)}return o}function an(o){return o=o[Fn],o instanceof Ot?o:null}var cn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Lr(o){return typeof o=="function"?o:(o[cn]||(o[cn]=function(l){return o.handleEvent(l)}),o[cn])}function Te(){ue.call(this),this.i=new Ot(this),this.M=this,this.F=null}k(Te,ue),Te.prototype[Vt]=!0,Te.prototype.removeEventListener=function(o,l,d,m){Ae(this,o,l,d,m)};function Re(o,l){var d,m=o.F;if(m)for(d=[];m;m=m.F)d.push(m);if(o=o.M,m=l.type||l,typeof l=="string")l=new oe(l,o);else if(l instanceof oe)l.target=l.target||o;else{var T=l;l=new oe(m,o),v(l,T)}if(T=!0,d)for(var R=d.length-1;0<=R;R--){var j=l.g=d[R];T=ln(j,m,!0,l)&&T}if(j=l.g=o,T=ln(j,m,!0,l)&&T,T=ln(j,m,!1,l)&&T,d)for(R=0;R<d.length;R++)j=l.g=d[R],T=ln(j,m,!1,l)&&T}Te.prototype.N=function(){if(Te.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var d=o.g[l],m=0;m<d.length;m++)jt(d[m]);delete o.g[l],o.h--}}this.F=null},Te.prototype.K=function(o,l,d,m){return this.i.add(String(o),l,!1,d,m)},Te.prototype.L=function(o,l,d,m){return this.i.add(String(o),l,!0,d,m)};function ln(o,l,d,m){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var T=!0,R=0;R<l.length;++R){var j=l[R];if(j&&!j.da&&j.capture==d){var ae=j.listener,Se=j.ha||j.src;j.fa&&rn(o.i,j),T=ae.call(Se,m)!==!1&&T}}return T&&!m.defaultPrevented}function Fr(o,l,d){if(typeof o=="function")d&&(o=x(o,d));else if(o&&typeof o.handleEvent=="function")o=x(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(o,l||0)}function Gn(o){o.g=Fr(()=>{o.g=null,o.i&&(o.i=!1,Gn(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class Ur extends ue{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Gn(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gt(o){ue.call(this),this.h=o,this.g={}}k(gt,ue);var Br=[];function $r(o){J(o.g,function(l,d){this.g.hasOwnProperty(d)&&$n(l)},o),o.g={}}gt.prototype.N=function(){gt.aa.N.call(this),$r(this)},gt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qn=c.JSON.stringify,N=c.JSON.parse,L=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function G(){}G.prototype.h=null;function ie(o){return o.h||(o.h=o.i())}function ce(){}var _e={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ye(){oe.call(this,"d")}k(ye,oe);function nt(){oe.call(this,"c")}k(nt,oe);var Ft={},$o=null;function Gr(){return $o=$o||new Te}Ft.La="serverreachability";function Go(o){oe.call(this,Ft.La,o)}k(Go,oe);function zn(o){const l=Gr();Re(l,new Go(l))}Ft.STAT_EVENT="statevent";function qo(o,l){oe.call(this,Ft.STAT_EVENT,o),this.stat=l}k(qo,oe);function Fe(o){const l=Gr();Re(l,new qo(l,o))}Ft.Ma="timingevent";function zo(o,l){oe.call(this,Ft.Ma,o),this.size=l}k(zo,oe);function Hn(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},l)}function Wn(){this.g=!0}Wn.prototype.xa=function(){this.g=!1};function oh(o,l,d,m,T,R){o.info(function(){if(o.g)if(R)for(var j="",ae=R.split("&"),Se=0;Se<ae.length;Se++){var ee=ae[Se].split("=");if(1<ee.length){var Me=ee[0];ee=ee[1];var De=Me.split("_");j=2<=De.length&&De[1]=="type"?j+(Me+"="+ee+"&"):j+(Me+"=redacted&")}}else j=null;else j=R;return"XMLHTTP REQ ("+m+") [attempt "+T+"]: "+l+`
`+d+`
`+j})}function ah(o,l,d,m,T,R,j){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+T+"]: "+l+`
`+d+`
`+R+" "+j})}function un(o,l,d,m){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+lh(o,d)+(m?" "+m:"")})}function ch(o,l){o.info(function(){return"TIMEOUT: "+l})}Wn.prototype.info=function(){};function lh(o,l){if(!o.g)return l;if(!l)return null;try{var d=JSON.parse(l);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var m=d[o];if(!(2>m.length)){var T=m[1];if(Array.isArray(T)&&!(1>T.length)){var R=T[0];if(R!="noop"&&R!="stop"&&R!="close")for(var j=1;j<T.length;j++)T[j]=""}}}}return qn(d)}catch{return l}}var qr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ho={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Xs;function zr(){}k(zr,G),zr.prototype.g=function(){return new XMLHttpRequest},zr.prototype.i=function(){return{}},Xs=new zr;function _t(o,l,d,m){this.j=o,this.i=l,this.l=d,this.R=m||1,this.U=new gt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Wo}function Wo(){this.i=null,this.g="",this.h=!1}var Ko={},Ys={};function Zs(o,l,d){o.L=1,o.v=Qr(rt(l)),o.m=d,o.P=!0,Qo(o,null)}function Qo(o,l){o.F=Date.now(),Hr(o),o.A=rt(o.v);var d=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),la(d.i,"t",m),o.C=0,d=o.j.J,o.h=new Wo,o.g=Ra(o.j,d?l:null,!o.m),0<o.O&&(o.M=new Ur(x(o.Y,o,o.g),o.O)),l=o.U,d=o.g,m=o.ca;var T="readystatechange";Array.isArray(T)||(T&&(Br[0]=T.toString()),T=Br);for(var R=0;R<T.length;R++){var j=he(d,T[R],m||l.handleEvent,!1,l.h||l);if(!j)break;l.g[j.key]=j}l=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),zn(),oh(o.i,o.u,o.A,o.l,o.R,o.m)}_t.prototype.ca=function(o){o=o.target;const l=this.M;l&&st(o)==3?l.j():this.Y(o)},_t.prototype.Y=function(o){try{if(o==this.g)e:{const De=st(this.g);var l=this.g.Ba();const fn=this.g.Z();if(!(3>De)&&(De!=3||this.g&&(this.h.h||this.g.oa()||ga(this.g)))){this.J||De!=4||l==7||(l==8||0>=fn?zn(3):zn(2)),ei(this);var d=this.g.Z();this.X=d;t:if(Jo(this)){var m=ga(this.g);o="";var T=m.length,R=st(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ut(this),Kn(this);var j="";break t}this.h.i=new c.TextDecoder}for(l=0;l<T;l++)this.h.h=!0,o+=this.h.i.decode(m[l],{stream:!(R&&l==T-1)});m.length=0,this.h.g+=o,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=d==200,ah(this.i,this.u,this.A,this.l,this.R,De,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ae,Se=this.g;if((ae=Se.g?Se.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(ae)){var ee=ae;break t}}ee=null}if(d=ee)un(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ti(this,d);else{this.o=!1,this.s=3,Fe(12),Ut(this),Kn(this);break e}}if(this.P){d=!0;let We;for(;!this.J&&this.C<j.length;)if(We=uh(this,j),We==Ys){De==4&&(this.s=4,Fe(14),d=!1),un(this.i,this.l,null,"[Incomplete Response]");break}else if(We==Ko){this.s=4,Fe(15),un(this.i,this.l,j,"[Invalid Chunk]"),d=!1;break}else un(this.i,this.l,We,null),ti(this,We);if(Jo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),De!=4||j.length!=0||this.h.h||(this.s=1,Fe(16),d=!1),this.o=this.o&&d,!d)un(this.i,this.l,j,"[Invalid Chunked Response]"),Ut(this),Kn(this);else if(0<j.length&&!this.W){this.W=!0;var Me=this.j;Me.g==this&&Me.ba&&!Me.M&&(Me.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),ai(Me),Me.M=!0,Fe(11))}}else un(this.i,this.l,j,null),ti(this,j);De==4&&Ut(this),this.o&&!this.J&&(De==4?Ta(this.j,this):(this.o=!1,Hr(this)))}else Rh(this.g),d==400&&0<j.indexOf("Unknown SID")?(this.s=3,Fe(12)):(this.s=0,Fe(13)),Ut(this),Kn(this)}}}catch{}finally{}};function Jo(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function uh(o,l){var d=o.C,m=l.indexOf(`
`,d);return m==-1?Ys:(d=Number(l.substring(d,m)),isNaN(d)?Ko:(m+=1,m+d>l.length?Ys:(l=l.slice(m,m+d),o.C=m+d,l)))}_t.prototype.cancel=function(){this.J=!0,Ut(this)};function Hr(o){o.S=Date.now()+o.I,Xo(o,o.I)}function Xo(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Hn(x(o.ba,o),l)}function ei(o){o.B&&(c.clearTimeout(o.B),o.B=null)}_t.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(ch(this.i,this.A),this.L!=2&&(zn(),Fe(17)),Ut(this),this.s=2,Kn(this)):Xo(this,this.S-o)};function Kn(o){o.j.G==0||o.J||Ta(o.j,o)}function Ut(o){ei(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,$r(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function ti(o,l){try{var d=o.j;if(d.G!=0&&(d.g==o||ni(d.h,o))){if(!o.K&&ni(d.h,o)&&d.G==3){try{var m=d.Da.g.parse(l)}catch{m=null}if(Array.isArray(m)&&m.length==3){var T=m;if(T[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)ts(d),Zr(d);else break e;oi(d),Fe(18)}}else d.za=T[1],0<d.za-d.T&&37500>T[2]&&d.F&&d.v==0&&!d.C&&(d.C=Hn(x(d.Za,d),6e3));if(1>=ea(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else $t(d,11)}else if((o.K||d.g==o)&&ts(d),!O(l))for(T=d.Da.g.parse(l),l=0;l<T.length;l++){let ee=T[l];if(d.T=ee[0],ee=ee[1],d.G==2)if(ee[0]=="c"){d.K=ee[1],d.ia=ee[2];const Me=ee[3];Me!=null&&(d.la=Me,d.j.info("VER="+d.la));const De=ee[4];De!=null&&(d.Aa=De,d.j.info("SVER="+d.Aa));const fn=ee[5];fn!=null&&typeof fn=="number"&&0<fn&&(m=1.5*fn,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const We=o.g;if(We){const rs=We.g?We.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(rs){var R=m.h;R.g||rs.indexOf("spdy")==-1&&rs.indexOf("quic")==-1&&rs.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(ri(R,R.h),R.h=null))}if(m.D){const ci=We.g?We.g.getResponseHeader("X-HTTP-Session-Id"):null;ci&&(m.ya=ci,le(m.I,m.D,ci))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var j=o;if(m.qa=Aa(m,m.J?m.ia:null,m.W),j.K){ta(m.h,j);var ae=j,Se=m.L;Se&&(ae.I=Se),ae.B&&(ei(ae),Hr(ae)),m.g=j}else Ea(m);0<d.i.length&&es(d)}else ee[0]!="stop"&&ee[0]!="close"||$t(d,7);else d.G==3&&(ee[0]=="stop"||ee[0]=="close"?ee[0]=="stop"?$t(d,7):ii(d):ee[0]!="noop"&&d.l&&d.l.ta(ee),d.v=0)}}zn(4)}catch{}}var hh=class{constructor(o,l){this.g=o,this.map=l}};function Yo(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zo(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function ea(o){return o.h?1:o.g?o.g.size:0}function ni(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function ri(o,l){o.g?o.g.add(l):o.h=l}function ta(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}Yo.prototype.cancel=function(){if(this.i=na(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function na(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const d of o.g.values())l=l.concat(d.D);return l}return C(o.i)}function dh(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var l=[],d=o.length,m=0;m<d;m++)l.push(o[m]);return l}l=[],d=0;for(m in o)l[d++]=o[m];return l}function fh(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var l=[];o=o.length;for(var d=0;d<o;d++)l.push(d);return l}l=[],d=0;for(const m in o)l[d++]=m;return l}}}function ra(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var d=fh(o),m=dh(o),T=m.length,R=0;R<T;R++)l.call(void 0,m[R],d&&d[R],o)}var sa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mh(o,l){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var m=o[d].indexOf("="),T=null;if(0<=m){var R=o[d].substring(0,m);T=o[d].substring(m+1)}else R=o[d];l(R,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function Bt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Bt){this.h=o.h,Wr(this,o.j),this.o=o.o,this.g=o.g,Kr(this,o.s),this.l=o.l;var l=o.i,d=new Xn;d.i=l.i,l.g&&(d.g=new Map(l.g),d.h=l.h),ia(this,d),this.m=o.m}else o&&(l=String(o).match(sa))?(this.h=!1,Wr(this,l[1]||"",!0),this.o=Qn(l[2]||""),this.g=Qn(l[3]||"",!0),Kr(this,l[4]),this.l=Qn(l[5]||"",!0),ia(this,l[6]||"",!0),this.m=Qn(l[7]||"")):(this.h=!1,this.i=new Xn(null,this.h))}Bt.prototype.toString=function(){var o=[],l=this.j;l&&o.push(Jn(l,oa,!0),":");var d=this.g;return(d||l=="file")&&(o.push("//"),(l=this.o)&&o.push(Jn(l,oa,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Jn(d,d.charAt(0)=="/"?_h:gh,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Jn(d,vh)),o.join("")};function rt(o){return new Bt(o)}function Wr(o,l,d){o.j=d?Qn(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function Kr(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function ia(o,l,d){l instanceof Xn?(o.i=l,wh(o.i,o.h)):(d||(l=Jn(l,yh)),o.i=new Xn(l,o.h))}function le(o,l,d){o.i.set(l,d)}function Qr(o){return le(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Qn(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Jn(o,l,d){return typeof o=="string"?(o=encodeURI(o).replace(l,ph),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function ph(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var oa=/[#\/\?@]/g,gh=/[#\?:]/g,_h=/[#\?]/g,yh=/[#\?@]/g,vh=/#/g;function Xn(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function yt(o){o.g||(o.g=new Map,o.h=0,o.i&&mh(o.i,function(l,d){o.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}n=Xn.prototype,n.add=function(o,l){yt(this),this.i=null,o=hn(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(l),this.h+=1,this};function aa(o,l){yt(o),l=hn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function ca(o,l){return yt(o),l=hn(o,l),o.g.has(l)}n.forEach=function(o,l){yt(this),this.g.forEach(function(d,m){d.forEach(function(T){o.call(l,T,m,this)},this)},this)},n.na=function(){yt(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),d=[];for(let m=0;m<l.length;m++){const T=o[m];for(let R=0;R<T.length;R++)d.push(l[m])}return d},n.V=function(o){yt(this);let l=[];if(typeof o=="string")ca(this,o)&&(l=l.concat(this.g.get(hn(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)l=l.concat(o[d])}return l},n.set=function(o,l){return yt(this),this.i=null,o=hn(this,o),ca(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function la(o,l,d){aa(o,l),0<d.length&&(o.i=null,o.g.set(hn(o,l),C(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var d=0;d<l.length;d++){var m=l[d];const R=encodeURIComponent(String(m)),j=this.V(m);for(m=0;m<j.length;m++){var T=R;j[m]!==""&&(T+="="+encodeURIComponent(String(j[m]))),o.push(T)}}return this.i=o.join("&")};function hn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function wh(o,l){l&&!o.j&&(yt(o),o.i=null,o.g.forEach(function(d,m){var T=m.toLowerCase();m!=T&&(aa(this,m),la(this,T,d))},o)),o.j=l}function Eh(o,l){const d=new Wn;if(c.Image){const m=new Image;m.onload=A(vt,d,"TestLoadImage: loaded",!0,l,m),m.onerror=A(vt,d,"TestLoadImage: error",!1,l,m),m.onabort=A(vt,d,"TestLoadImage: abort",!1,l,m),m.ontimeout=A(vt,d,"TestLoadImage: timeout",!1,l,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else l(!1)}function Ih(o,l){const d=new Wn,m=new AbortController,T=setTimeout(()=>{m.abort(),vt(d,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:m.signal}).then(R=>{clearTimeout(T),R.ok?vt(d,"TestPingServer: ok",!0,l):vt(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(T),vt(d,"TestPingServer: error",!1,l)})}function vt(o,l,d,m,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),m(d)}catch{}}function Th(){this.g=new L}function bh(o,l,d){const m=d||"";try{ra(o,function(T,R){let j=T;f(T)&&(j=qn(T)),l.push(m+R+"="+encodeURIComponent(j))})}catch(T){throw l.push(m+"type="+encodeURIComponent("_badmap")),T}}function Jr(o){this.l=o.Ub||null,this.j=o.eb||!1}k(Jr,G),Jr.prototype.g=function(){return new Xr(this.l,this.j)},Jr.prototype.i=function(o){return function(){return o}}({});function Xr(o,l){Te.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Xr,Te),n=Xr.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,Zn(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Yn(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Zn(this)),this.g&&(this.readyState=3,Zn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ua(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function ua(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?Yn(this):Zn(this),this.readyState==3&&ua(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Yn(this))},n.Qa=function(o){this.g&&(this.response=o,Yn(this))},n.ga=function(){this.g&&Yn(this)};function Yn(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Zn(o)}n.setRequestHeader=function(o,l){this.u.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=l.next();return o.join(`\r
`)};function Zn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Xr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function ha(o){let l="";return J(o,function(d,m){l+=m,l+=":",l+=d,l+=`\r
`}),l}function si(o,l,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=ha(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):le(o,l,d))}function me(o){Te.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(me,Te);var xh=/^https?$/i,Ah=["POST","PUT"];n=me.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,l,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Xs.g(),this.v=this.o?ie(this.o):ie(Xs),this.g.onreadystatechange=x(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(R){da(this,R);return}if(o=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var T in m)d.set(T,m[T]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const R of m.keys())d.set(R,m.get(R));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(R=>R.toLowerCase()=="content-type"),T=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Ah,l,void 0))||m||T||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,j]of d)this.g.setRequestHeader(R,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{pa(this),this.u=!0,this.g.send(o),this.u=!1}catch(R){da(this,R)}};function da(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,fa(o),Yr(o)}function fa(o){o.A||(o.A=!0,Re(o,"complete"),Re(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Re(this,"complete"),Re(this,"abort"),Yr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Yr(this,!0)),me.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ma(this):this.bb())},n.bb=function(){ma(this)};function ma(o){if(o.h&&typeof a<"u"&&(!o.v[1]||st(o)!=4||o.Z()!=2)){if(o.u&&st(o)==4)Fr(o.Ea,0,o);else if(Re(o,"readystatechange"),st(o)==4){o.h=!1;try{const j=o.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var m;if(m=j===0){var T=String(o.D).match(sa)[1]||null;!T&&c.self&&c.self.location&&(T=c.self.location.protocol.slice(0,-1)),m=!xh.test(T?T.toLowerCase():"")}d=m}if(d)Re(o,"complete"),Re(o,"success");else{o.m=6;try{var R=2<st(o)?o.g.statusText:""}catch{R=""}o.l=R+" ["+o.Z()+"]",fa(o)}}finally{Yr(o)}}}}function Yr(o,l){if(o.g){pa(o);const d=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||Re(o,"ready");try{d.onreadystatechange=m}catch{}}}function pa(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function st(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<st(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),N(l)}};function ga(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Rh(o){const l={};o=(o.g&&2<=st(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(O(o[m]))continue;var d=I(o[m]);const T=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const R=l[T]||[];l[T]=R,R.push(d)}E(l,function(m){return m.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function er(o,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||l}function _a(o){this.Aa=0,this.i=[],this.j=new Wn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=er("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=er("baseRetryDelayMs",5e3,o),this.cb=er("retryDelaySeedMs",1e4,o),this.Wa=er("forwardChannelMaxRetries",2,o),this.wa=er("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Yo(o&&o.concurrentRequestLimit),this.Da=new Th,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=_a.prototype,n.la=8,n.G=1,n.connect=function(o,l,d,m){Fe(0),this.W=o,this.H=l||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=Aa(this,null,this.W),es(this)};function ii(o){if(ya(o),o.G==3){var l=o.U++,d=rt(o.I);if(le(d,"SID",o.K),le(d,"RID",l),le(d,"TYPE","terminate"),tr(o,d),l=new _t(o,o.j,l),l.L=2,l.v=Qr(rt(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=l.v,d=!0),d||(l.g=Ra(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Hr(l)}xa(o)}function Zr(o){o.g&&(ai(o),o.g.cancel(),o.g=null)}function ya(o){Zr(o),o.u&&(c.clearTimeout(o.u),o.u=null),ts(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function es(o){if(!Zo(o.h)&&!o.s){o.s=!0;var l=o.Ga;Q||fe(),re||(Q(),re=!0),ge.add(l,o),o.B=0}}function Sh(o,l){return ea(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Hn(x(o.Ga,o,l),ba(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const T=new _t(this,this.j,o);let R=this.o;if(this.S&&(R?(R=g(R),v(R,this.S)):R=this.S),this.m!==null||this.O||(T.H=R,R=null),this.P)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(l+=m,4096<l){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=wa(this,T,l),d=rt(this.I),le(d,"RID",o),le(d,"CVER",22),this.D&&le(d,"X-HTTP-Session-Id",this.D),tr(this,d),R&&(this.O?l="headers="+encodeURIComponent(String(ha(R)))+"&"+l:this.m&&si(d,this.m,R)),ri(this.h,T),this.Ua&&le(d,"TYPE","init"),this.P?(le(d,"$req",l),le(d,"SID","null"),T.T=!0,Zs(T,d,null)):Zs(T,d,l),this.G=2}}else this.G==3&&(o?va(this,o):this.i.length==0||Zo(this.h)||va(this))};function va(o,l){var d;l?d=l.l:d=o.U++;const m=rt(o.I);le(m,"SID",o.K),le(m,"RID",d),le(m,"AID",o.T),tr(o,m),o.m&&o.o&&si(m,o.m,o.o),d=new _t(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),l&&(o.i=l.D.concat(o.i)),l=wa(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ri(o.h,d),Zs(d,m,l)}function tr(o,l){o.H&&J(o.H,function(d,m){le(l,m,d)}),o.l&&ra({},function(d,m){le(l,m,d)})}function wa(o,l,d){d=Math.min(o.i.length,d);var m=o.l?x(o.l.Na,o.l,o):null;e:{var T=o.i;let R=-1;for(;;){const j=["count="+d];R==-1?0<d?(R=T[0].g,j.push("ofs="+R)):R=0:j.push("ofs="+R);let ae=!0;for(let Se=0;Se<d;Se++){let ee=T[Se].g;const Me=T[Se].map;if(ee-=R,0>ee)R=Math.max(0,T[Se].g-100),ae=!1;else try{bh(Me,j,"req"+ee+"_")}catch{m&&m(Me)}}if(ae){m=j.join("&");break e}}}return o=o.i.splice(0,d),l.D=o,m}function Ea(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;Q||fe(),re||(Q(),re=!0),ge.add(l,o),o.v=0}}function oi(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Hn(x(o.Fa,o),ba(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Ia(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Hn(x(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Fe(10),Zr(this),Ia(this))};function ai(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function Ia(o){o.g=new _t(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=rt(o.qa);le(l,"RID","rpc"),le(l,"SID",o.K),le(l,"AID",o.T),le(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&le(l,"TO",o.ja),le(l,"TYPE","xmlhttp"),tr(o,l),o.m&&o.o&&si(l,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Qr(rt(l)),d.m=null,d.P=!0,Qo(d,o)}n.Za=function(){this.C!=null&&(this.C=null,Zr(this),oi(this),Fe(19))};function ts(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function Ta(o,l){var d=null;if(o.g==l){ts(o),ai(o),o.g=null;var m=2}else if(ni(o.h,l))d=l.D,ta(o.h,l),m=1;else return;if(o.G!=0){if(l.o)if(m==1){d=l.m?l.m.length:0,l=Date.now()-l.F;var T=o.B;m=Gr(),Re(m,new zo(m,d)),es(o)}else Ea(o);else if(T=l.s,T==3||T==0&&0<l.X||!(m==1&&Sh(o,l)||m==2&&oi(o)))switch(d&&0<d.length&&(l=o.h,l.i=l.i.concat(d)),T){case 1:$t(o,5);break;case 4:$t(o,10);break;case 3:$t(o,6);break;default:$t(o,2)}}}function ba(o,l){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*l}function $t(o,l){if(o.j.info("Error code "+l),l==2){var d=x(o.fb,o),m=o.Xa;const T=!m;m=new Bt(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Wr(m,"https"),Qr(m),T?Eh(m.toString(),d):Ih(m.toString(),d)}else Fe(2);o.G=0,o.l&&o.l.sa(l),xa(o),ya(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Fe(2)):(this.j.info("Failed to ping google.com"),Fe(1))};function xa(o){if(o.G=0,o.ka=[],o.l){const l=na(o.h);(l.length!=0||o.i.length!=0)&&(P(o.ka,l),P(o.ka,o.i),o.h.i.length=0,C(o.i),o.i.length=0),o.l.ra()}}function Aa(o,l,d){var m=d instanceof Bt?rt(d):new Bt(d);if(m.g!="")l&&(m.g=l+"."+m.g),Kr(m,m.s);else{var T=c.location;m=T.protocol,l=l?l+"."+T.hostname:T.hostname,T=+T.port;var R=new Bt(null);m&&Wr(R,m),l&&(R.g=l),T&&Kr(R,T),d&&(R.l=d),m=R}return d=o.D,l=o.ya,d&&l&&le(m,d,l),le(m,"VER",o.la),tr(o,m),m}function Ra(o,l,d){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new me(new Jr({eb:d})):new me(o.pa),l.Ha(o.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Sa(){}n=Sa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ns(){}ns.prototype.g=function(o,l){return new $e(o,l)};function $e(o,l){Te.call(this),this.g=new _a(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!O(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!O(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new dn(this)}k($e,Te),$e.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$e.prototype.close=function(){ii(this.g)},$e.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=qn(o),o=d);l.i.push(new hh(l.Ya++,o)),l.G==3&&es(l)},$e.prototype.N=function(){this.g.l=null,delete this.j,ii(this.g),delete this.g,$e.aa.N.call(this)};function Pa(o){ye.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const d in l){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}k(Pa,ye);function ka(){nt.call(this),this.status=1}k(ka,nt);function dn(o){this.g=o}k(dn,Sa),dn.prototype.ua=function(){Re(this.g,"a")},dn.prototype.ta=function(o){Re(this.g,new Pa(o))},dn.prototype.sa=function(o){Re(this.g,new ka)},dn.prototype.ra=function(){Re(this.g,"b")},ns.prototype.createWebChannel=ns.prototype.g,$e.prototype.send=$e.prototype.o,$e.prototype.open=$e.prototype.m,$e.prototype.close=$e.prototype.close,Hl=function(){return new ns},zl=function(){return Gr()},ql=Ft,Mi={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},qr.NO_ERROR=0,qr.TIMEOUT=8,qr.HTTP_ERROR=6,gs=qr,Ho.COMPLETE="complete",Gl=Ho,ce.EventType=_e,_e.OPEN="a",_e.CLOSE="b",_e.ERROR="c",_e.MESSAGE="d",Te.prototype.listen=Te.prototype.K,ir=ce,me.prototype.listenOnce=me.prototype.L,me.prototype.getLastError=me.prototype.Ka,me.prototype.getLastErrorCode=me.prototype.Ba,me.prototype.getStatus=me.prototype.Z,me.prototype.getResponseJson=me.prototype.Oa,me.prototype.getResponseText=me.prototype.oa,me.prototype.send=me.prototype.ea,me.prototype.setWithCredentials=me.prototype.Ha,$l=me}).apply(typeof cs<"u"?cs:typeof self<"u"?self:typeof window<"u"?window:{});const hc="@firebase/firestore";/**
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
 */class je{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}je.UNAUTHENTICATED=new je(null),je.GOOGLE_CREDENTIALS=new je("google-credentials-uid"),je.FIRST_PARTY=new je("first-party-uid"),je.MOCK_USER=new je("mock-user");/**
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
 */let Vn="10.14.0";/**
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
 */const Jt=new Wi("@firebase/firestore");function rr(){return Jt.logLevel}function U(n,...e){if(Jt.logLevel<=Y.DEBUG){const t=e.map(ao);Jt.debug(`Firestore (${Vn}): ${n}`,...t)}}function ft(n,...e){if(Jt.logLevel<=Y.ERROR){const t=e.map(ao);Jt.error(`Firestore (${Vn}): ${n}`,...t)}}function An(n,...e){if(Jt.logLevel<=Y.WARN){const t=e.map(ao);Jt.warn(`Firestore (${Vn}): ${n}`,...t)}}function ao(n){if(typeof n=="string")return n;try{/**
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
 */function z(n="Unexpected state"){const e=`FIRESTORE (${Vn}) INTERNAL ASSERTION FAILED: `+n;throw ft(e),new Error(e)}function se(n,e){n||z()}function W(n,e){return n}/**
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
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends pt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Pt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Wl{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Yp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(je.UNAUTHENTICATED))}shutdown(){}}class Zp{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class eg{constructor(e){this.t=e,this.currentUser=je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){se(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new Pt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Pt,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},c=u=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Pt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(se(typeof r.accessToken=="string"),new Wl(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return se(e===null||typeof e=="string"),new je(e)}}class tg{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=je.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ng{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new tg(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class sg{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){se(this.o===void 0);const r=i=>{i.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,U("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(se(typeof t.token=="string"),this.R=t.token,new rg(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function ig(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Kl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=ig(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function ne(n,e){return n<e?-1:n>e?1:0}function Rn(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */class Ie{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new B(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new B(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new B(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ie.fromMillis(Date.now())}static fromDate(e){return Ie.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Ie(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class H{constructor(e){this.timestamp=e}static fromTimestamp(e){return new H(e)}static min(){return new H(new Ie(0,0))}static max(){return new H(new Ie(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class gr{constructor(e,t,r){t===void 0?t=0:t>e.length&&z(),r===void 0?r=e.length-t:r>e.length-t&&z(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return gr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof gr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),a=t.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class pe extends gr{construct(e,t,r){return new pe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new pe(t)}static emptyPath(){return new pe([])}}const og=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ke extends gr{construct(e,t,r){return new ke(e,t,r)}static isValidIdentifier(e){return og.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ke.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ke(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new B(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new B(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new B(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new B(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ke(t)}static emptyPath(){return new ke([])}}/**
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
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(pe.fromString(e))}static fromName(e){return new $(pe.fromString(e).popFirst(5))}static empty(){return new $(pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return pe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new pe(e.slice()))}}function ag(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=H.fromTimestamp(r===1e9?new Ie(t+1,0):new Ie(t,r));return new Ct(s,$.empty(),e)}function cg(n){return new Ct(n.readTime,n.key,-1)}class Ct{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ct(H.min(),$.empty(),-1)}static max(){return new Ct(H.max(),$.empty(),-1)}}function lg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=$.comparator(n.documentKey,e.documentKey),t!==0?t:ne(n.largestBatchId,e.largestBatchId))}/**
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
 */const ug="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function kr(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==ug)throw n;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof M?t:M.resolve(t)}catch(t){return M.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):M.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):M.reject(t)}static resolve(e){return new M((t,r)=>{t(e)})}static reject(e){return new M((t,r)=>{r(e)})}static waitFor(e){return new M((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},u=>r(u))}),a=!0,i===s&&t()})}static or(e){let t=M.resolve(!1);for(const r of e)t=t.next(s=>s?M.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new M((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const f=u;t(e[f]).next(p=>{a[f]=p,++c,c===i&&r(a)},p=>s(p))}})}static doWhile(e,t){return new M((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function dg(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Cr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class co{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}co.oe=-1;function Us(n){return n==null}function Ss(n){return n===0&&1/n==-1/0}function fg(n){return typeof n=="number"&&Number.isInteger(n)&&!Ss(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function dc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function jn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Ql(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class de{constructor(e,t){this.comparator=e,this.root=t||Pe.EMPTY}insert(e,t){return new de(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Pe.BLACK,null,null))}remove(e){return new de(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ls(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ls(this.root,e,this.comparator,!1)}getReverseIterator(){return new ls(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ls(this.root,e,this.comparator,!0)}}class ls{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pe{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Pe.RED,this.left=s??Pe.EMPTY,this.right=i??Pe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Pe(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Pe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Pe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const e=this.left.check();if(e!==this.right.check())throw z();return e+(this.isRed()?0:1)}}Pe.EMPTY=null,Pe.RED=!0,Pe.BLACK=!1;Pe.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(e,t,r,s,i){return this}insert(e,t,r){return new Pe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ce{constructor(e){this.comparator=e,this.data=new de(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new fc(this.data.getIterator())}getIteratorFrom(e){return new fc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ce)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ce(this.comparator);return t.data=e,t}}class fc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ke{constructor(e){this.fields=e,e.sort(ke.comparator)}static empty(){return new Ke([])}unionWith(e){let t=new Ce(ke.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ke(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Rn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Jl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ne{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Jl("Invalid base64 string: "+i):i}}(e);return new Ne(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Ne(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ne.EMPTY_BYTE_STRING=new Ne("");const mg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Nt(n){if(se(!!n),typeof n=="string"){let e=0;const t=mg.exec(n);if(se(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ve(n.seconds),nanos:ve(n.nanos)}}function ve(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Xt(n){return typeof n=="string"?Ne.fromBase64String(n):Ne.fromUint8Array(n)}/**
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
 */function lo(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function uo(n){const e=n.mapValue.fields.__previous_value__;return lo(e)?uo(e):e}function _r(n){const e=Nt(n.mapValue.fields.__local_write_time__.timestampValue);return new Ie(e.seconds,e.nanos)}/**
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
 */class pg{constructor(e,t,r,s,i,a,c,u,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=f}}class yr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new yr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof yr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const us={mapValue:{}};function Yt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?lo(n)?4:_g(n)?9007199254740991:gg(n)?10:11:z()}function et(n,e){if(n===e)return!0;const t=Yt(n);if(t!==Yt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return _r(n).isEqual(_r(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Nt(s.timestampValue),c=Nt(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Xt(s.bytesValue).isEqual(Xt(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return ve(s.geoPointValue.latitude)===ve(i.geoPointValue.latitude)&&ve(s.geoPointValue.longitude)===ve(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ve(s.integerValue)===ve(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ve(s.doubleValue),c=ve(i.doubleValue);return a===c?Ss(a)===Ss(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return Rn(n.arrayValue.values||[],e.arrayValue.values||[],et);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(dc(a)!==dc(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!et(a[u],c[u])))return!1;return!0}(n,e);default:return z()}}function vr(n,e){return(n.values||[]).find(t=>et(t,e))!==void 0}function Sn(n,e){if(n===e)return 0;const t=Yt(n),r=Yt(e);if(t!==r)return ne(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ne(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=ve(i.integerValue||i.doubleValue),u=ve(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return mc(n.timestampValue,e.timestampValue);case 4:return mc(_r(n),_r(e));case 5:return ne(n.stringValue,e.stringValue);case 6:return function(i,a){const c=Xt(i),u=Xt(a);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),u=a.split("/");for(let f=0;f<c.length&&f<u.length;f++){const p=ne(c[f],u[f]);if(p!==0)return p}return ne(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=ne(ve(i.latitude),ve(a.latitude));return c!==0?c:ne(ve(i.longitude),ve(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return pc(n.arrayValue,e.arrayValue);case 10:return function(i,a){var c,u,f,p;const w=i.fields||{},x=a.fields||{},A=(c=w.value)===null||c===void 0?void 0:c.arrayValue,k=(u=x.value)===null||u===void 0?void 0:u.arrayValue,C=ne(((f=A==null?void 0:A.values)===null||f===void 0?void 0:f.length)||0,((p=k==null?void 0:k.values)===null||p===void 0?void 0:p.length)||0);return C!==0?C:pc(A,k)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===us.mapValue&&a===us.mapValue)return 0;if(i===us.mapValue)return 1;if(a===us.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),f=a.fields||{},p=Object.keys(f);u.sort(),p.sort();for(let w=0;w<u.length&&w<p.length;++w){const x=ne(u[w],p[w]);if(x!==0)return x;const A=Sn(c[u[w]],f[p[w]]);if(A!==0)return A}return ne(u.length,p.length)}(n.mapValue,e.mapValue);default:throw z()}}function mc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ne(n,e);const t=Nt(n),r=Nt(e),s=ne(t.seconds,r.seconds);return s!==0?s:ne(t.nanos,r.nanos)}function pc(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Sn(t[s],r[s]);if(i)return i}return ne(t.length,r.length)}function Pn(n){return Di(n)}function Di(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Nt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Xt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return $.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Di(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Di(t.fields[a])}`;return s+"}"}(n.mapValue):z()}function Vi(n){return!!n&&"integerValue"in n}function ho(n){return!!n&&"arrayValue"in n}function gc(n){return!!n&&"nullValue"in n}function _c(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function _s(n){return!!n&&"mapValue"in n}function gg(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function lr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return jn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=lr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=lr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function _g(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ge{constructor(e){this.value=e}static empty(){return new Ge({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!_s(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=lr(t)}setAll(e){let t=ke.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=lr(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());_s(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return et(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];_s(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){jn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ge(lr(this.value))}}function Xl(n){const e=[];return jn(n.fields,(t,r)=>{const s=new ke([t]);if(_s(r)){const i=Xl(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Ke(e)}/**
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
 */class Oe{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Oe(e,0,H.min(),H.min(),H.min(),Ge.empty(),0)}static newFoundDocument(e,t,r,s){return new Oe(e,1,t,H.min(),r,s,0)}static newNoDocument(e,t){return new Oe(e,2,t,H.min(),H.min(),Ge.empty(),0)}static newUnknownDocument(e,t){return new Oe(e,3,t,H.min(),H.min(),Ge.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ge.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ge.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Oe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Oe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ps{constructor(e,t){this.position=e,this.inclusive=t}}function yc(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=$.comparator($.fromName(a.referenceValue),t.key):r=Sn(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function vc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!et(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ks{constructor(e,t="asc"){this.field=e,this.dir=t}}function yg(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Yl{}class Ee extends Yl{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new wg(e,t,r):t==="array-contains"?new Tg(e,r):t==="in"?new bg(e,r):t==="not-in"?new xg(e,r):t==="array-contains-any"?new Ag(e,r):new Ee(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Eg(e,r):new Ig(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Sn(t,this.value)):t!==null&&Yt(this.value)===Yt(t)&&this.matchesComparison(Sn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tt extends Yl{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new tt(e,t)}matches(e){return Zl(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Zl(n){return n.op==="and"}function eu(n){return vg(n)&&Zl(n)}function vg(n){for(const e of n.filters)if(e instanceof tt)return!1;return!0}function ji(n){if(n instanceof Ee)return n.field.canonicalString()+n.op.toString()+Pn(n.value);if(eu(n))return n.filters.map(e=>ji(e)).join(",");{const e=n.filters.map(t=>ji(t)).join(",");return`${n.op}(${e})`}}function tu(n,e){return n instanceof Ee?function(r,s){return s instanceof Ee&&r.op===s.op&&r.field.isEqual(s.field)&&et(r.value,s.value)}(n,e):n instanceof tt?function(r,s){return s instanceof tt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&tu(a,s.filters[c]),!0):!1}(n,e):void z()}function nu(n){return n instanceof Ee?function(t){return`${t.field.canonicalString()} ${t.op} ${Pn(t.value)}`}(n):n instanceof tt?function(t){return t.op.toString()+" {"+t.getFilters().map(nu).join(" ,")+"}"}(n):"Filter"}class wg extends Ee{constructor(e,t,r){super(e,t,r),this.key=$.fromName(r.referenceValue)}matches(e){const t=$.comparator(e.key,this.key);return this.matchesComparison(t)}}class Eg extends Ee{constructor(e,t){super(e,"in",t),this.keys=ru("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Ig extends Ee{constructor(e,t){super(e,"not-in",t),this.keys=ru("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ru(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>$.fromName(r.referenceValue))}class Tg extends Ee{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ho(t)&&vr(t.arrayValue,this.value)}}class bg extends Ee{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&vr(this.value.arrayValue,t)}}class xg extends Ee{constructor(e,t){super(e,"not-in",t)}matches(e){if(vr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!vr(this.value.arrayValue,t)}}class Ag extends Ee{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ho(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>vr(this.value.arrayValue,r))}}/**
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
 */class Rg{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.ue=null}}function wc(n,e=null,t=[],r=[],s=null,i=null,a=null){return new Rg(n,e,t,r,s,i,a)}function fo(n){const e=W(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>ji(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Us(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Pn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Pn(r)).join(",")),e.ue=t}return e.ue}function mo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!yg(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!tu(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!vc(n.startAt,e.startAt)&&vc(n.endAt,e.endAt)}function Oi(n){return $.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Bs{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Sg(n,e,t,r,s,i,a,c){return new Bs(n,e,t,r,s,i,a,c)}function po(n){return new Bs(n)}function Ec(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Pg(n){return n.collectionGroup!==null}function ur(n){const e=W(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Ce(ke.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new ks(i,r))}),t.has(ke.keyField().canonicalString())||e.ce.push(new ks(ke.keyField(),r))}return e.ce}function Xe(n){const e=W(n);return e.le||(e.le=kg(e,ur(n))),e.le}function kg(n,e){if(n.limitType==="F")return wc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ks(s.field,i)});const t=n.endAt?new Ps(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ps(n.startAt.position,n.startAt.inclusive):null;return wc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Li(n,e,t){return new Bs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function $s(n,e){return mo(Xe(n),Xe(e))&&n.limitType===e.limitType}function su(n){return`${fo(Xe(n))}|lt:${n.limitType}`}function pn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>nu(s)).join(", ")}]`),Us(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Pn(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Pn(s)).join(",")),`Target(${r})`}(Xe(n))}; limitType=${n.limitType})`}function Gs(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):$.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of ur(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,u){const f=yc(a,c,u);return a.inclusive?f<=0:f<0}(r.startAt,ur(r),s)||r.endAt&&!function(a,c,u){const f=yc(a,c,u);return a.inclusive?f>=0:f>0}(r.endAt,ur(r),s))}(n,e)}function Cg(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function iu(n){return(e,t)=>{let r=!1;for(const s of ur(n)){const i=Ng(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Ng(n,e,t){const r=n.field.isKeyField()?$.comparator(e.key,t.key):function(i,a,c){const u=a.data.field(i),f=c.data.field(i);return u!==null&&f!==null?Sn(u,f):z()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return z()}}/**
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
 */class On{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){jn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Ql(this.inner)}size(){return this.innerSize}}/**
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
 */const Mg=new de($.comparator);function mt(){return Mg}const ou=new de($.comparator);function or(...n){let e=ou;for(const t of n)e=e.insert(t.key,t);return e}function au(n){let e=ou;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function zt(){return hr()}function cu(){return hr()}function hr(){return new On(n=>n.toString(),(n,e)=>n.isEqual(e))}const Dg=new de($.comparator),Vg=new Ce($.comparator);function X(...n){let e=Vg;for(const t of n)e=e.add(t);return e}const jg=new Ce(ne);function Og(){return jg}/**
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
 */function go(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ss(e)?"-0":e}}function lu(n){return{integerValue:""+n}}function Lg(n,e){return fg(e)?lu(e):go(n,e)}/**
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
 */class qs{constructor(){this._=void 0}}function Fg(n,e,t){return n instanceof wr?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&lo(i)&&(i=uo(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(t,e):n instanceof Er?hu(n,e):n instanceof Ir?du(n,e):function(s,i){const a=uu(s,i),c=Ic(a)+Ic(s.Pe);return Vi(a)&&Vi(s.Pe)?lu(c):go(s.serializer,c)}(n,e)}function Ug(n,e,t){return n instanceof Er?hu(n,e):n instanceof Ir?du(n,e):t}function uu(n,e){return n instanceof Cs?function(r){return Vi(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class wr extends qs{}class Er extends qs{constructor(e){super(),this.elements=e}}function hu(n,e){const t=fu(e);for(const r of n.elements)t.some(s=>et(s,r))||t.push(r);return{arrayValue:{values:t}}}class Ir extends qs{constructor(e){super(),this.elements=e}}function du(n,e){let t=fu(e);for(const r of n.elements)t=t.filter(s=>!et(s,r));return{arrayValue:{values:t}}}class Cs extends qs{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Ic(n){return ve(n.integerValue||n.doubleValue)}function fu(n){return ho(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Bg{constructor(e,t){this.field=e,this.transform=t}}function $g(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Er&&s instanceof Er||r instanceof Ir&&s instanceof Ir?Rn(r.elements,s.elements,et):r instanceof Cs&&s instanceof Cs?et(r.Pe,s.Pe):r instanceof wr&&s instanceof wr}(n.transform,e.transform)}class Gg{constructor(e,t){this.version=e,this.transformResults=t}}class ut{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ut}static exists(e){return new ut(void 0,e)}static updateTime(e){return new ut(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ys(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class zs{}function mu(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new gu(n.key,ut.none()):new Nr(n.key,n.data,ut.none());{const t=n.data,r=Ge.empty();let s=new Ce(ke.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Zt(n.key,r,new Ke(s.toArray()),ut.none())}}function qg(n,e,t){n instanceof Nr?function(s,i,a){const c=s.value.clone(),u=bc(s.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof Zt?function(s,i,a){if(!ys(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=bc(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(pu(s)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function dr(n,e,t,r){return n instanceof Nr?function(i,a,c,u){if(!ys(i.precondition,a))return c;const f=i.value.clone(),p=xc(i.fieldTransforms,u,a);return f.setAll(p),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,e,t,r):n instanceof Zt?function(i,a,c,u){if(!ys(i.precondition,a))return c;const f=xc(i.fieldTransforms,u,a),p=a.data;return p.setAll(pu(i)),p.setAll(f),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(w=>w.field))}(n,e,t,r):function(i,a,c){return ys(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function zg(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=uu(r.transform,s||null);i!=null&&(t===null&&(t=Ge.empty()),t.set(r.field,i))}return t||null}function Tc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Rn(r,s,(i,a)=>$g(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Nr extends zs{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Zt extends zs{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function pu(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function bc(n,e,t){const r=new Map;se(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,Ug(a,c,t[s]))}return r}function xc(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,Fg(i,a,e))}return r}class gu extends zs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Hg extends zs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Wg{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&qg(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=dr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=dr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=cu();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const u=mu(a,c);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(H.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),X())}isEqual(e){return this.batchId===e.batchId&&Rn(this.mutations,e.mutations,(t,r)=>Tc(t,r))&&Rn(this.baseMutations,e.baseMutations,(t,r)=>Tc(t,r))}}class _o{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){se(e.mutations.length===r.length);let s=function(){return Dg}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new _o(e,t,r,s)}}/**
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
 */class Kg{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Qg{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var we,Z;function Jg(n){switch(n){default:return z();case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0}}function _u(n){if(n===void 0)return ft("GRPC error has no .code"),D.UNKNOWN;switch(n){case we.OK:return D.OK;case we.CANCELLED:return D.CANCELLED;case we.UNKNOWN:return D.UNKNOWN;case we.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case we.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case we.INTERNAL:return D.INTERNAL;case we.UNAVAILABLE:return D.UNAVAILABLE;case we.UNAUTHENTICATED:return D.UNAUTHENTICATED;case we.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case we.NOT_FOUND:return D.NOT_FOUND;case we.ALREADY_EXISTS:return D.ALREADY_EXISTS;case we.PERMISSION_DENIED:return D.PERMISSION_DENIED;case we.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case we.ABORTED:return D.ABORTED;case we.OUT_OF_RANGE:return D.OUT_OF_RANGE;case we.UNIMPLEMENTED:return D.UNIMPLEMENTED;case we.DATA_LOSS:return D.DATA_LOSS;default:return z()}}(Z=we||(we={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Xg(){return new TextEncoder}/**
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
 */const Yg=new Wt([4294967295,4294967295],0);function Ac(n){const e=Xg().encode(n),t=new Bl;return t.update(e),new Uint8Array(t.digest())}function Rc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Wt([t,r],0),new Wt([s,i],0)]}class yo{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ar(`Invalid padding: ${t}`);if(r<0)throw new ar(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ar(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ar(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Wt.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(Wt.fromNumber(r)));return s.compare(Yg)===1&&(s=new Wt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Ac(e),[r,s]=Rc(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new yo(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Ie===0)return;const t=Ac(e),[r,s]=Rc(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ar extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Hs{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Mr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Hs(H.min(),s,new de(ne),mt(),X())}}class Mr{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Mr(r,t,X(),X(),X())}}/**
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
 */class vs{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class yu{constructor(e,t){this.targetId=e,this.me=t}}class vu{constructor(e,t,r=Ne.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Sc{constructor(){this.fe=0,this.ge=kc(),this.pe=Ne.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=X(),t=X(),r=X();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:z()}}),new Mr(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=kc()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,se(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Zg{constructor(e){this.Le=e,this.Be=new Map,this.ke=mt(),this.qe=Pc(),this.Qe=new de(ne)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:z()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(Oi(i))if(r===0){const a=new $(i.path);this.Ue(t,a,Oe.newNoDocument(a,H.min()))}else se(r===1);else{const a=this.Ye(t);if(a!==r){const c=this.Ze(e),u=c?this.Xe(c,e,a):1;if(u!==0){this.je(t);const f=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,f)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=Xt(r).toUint8Array()}catch(u){if(u instanceof Jl)return An("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new yo(a,s,i)}catch(u){return An(u instanceof ar?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.Ie===0?null:c}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,a)=>{const c=this.Je(a);if(c){if(i.current&&Oi(c.target)){const u=new $(c.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,Oe.newNoDocument(u,e))}i.be&&(t.set(a,i.ve()),i.Ce())}});let r=X();this.qe.forEach((i,a)=>{let c=!0;a.forEachWhile(u=>{const f=this.Je(u);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new Hs(e,t,this.Qe,this.ke,r);return this.ke=mt(),this.qe=Pc(),this.Qe=new de(ne),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Sc,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Ce(ne),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||U("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Sc),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Pc(){return new de($.comparator)}function kc(){return new de($.comparator)}const e_={asc:"ASCENDING",desc:"DESCENDING"},t_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},n_={and:"AND",or:"OR"};class r_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Fi(n,e){return n.useProto3Json||Us(e)?e:{value:e}}function Ns(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wu(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function s_(n,e){return Ns(n,e.toTimestamp())}function Ye(n){return se(!!n),H.fromTimestamp(function(t){const r=Nt(t);return new Ie(r.seconds,r.nanos)}(n))}function vo(n,e){return Ui(n,e).canonicalString()}function Ui(n,e){const t=function(s){return new pe(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Eu(n){const e=pe.fromString(n);return se(Au(e)),e}function Bi(n,e){return vo(n.databaseId,e.path)}function yi(n,e){const t=Eu(e);if(t.get(1)!==n.databaseId.projectId)throw new B(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new B(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new $(Tu(t))}function Iu(n,e){return vo(n.databaseId,e)}function i_(n){const e=Eu(n);return e.length===4?pe.emptyPath():Tu(e)}function $i(n){return new pe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Tu(n){return se(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Cc(n,e,t){return{name:Bi(n,e),fields:t.value.mapValue.fields}}function o_(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:z()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(f,p){return f.useProto3Json?(se(p===void 0||typeof p=="string"),Ne.fromBase64String(p||"")):(se(p===void 0||p instanceof Buffer||p instanceof Uint8Array),Ne.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(f){const p=f.code===void 0?D.UNKNOWN:_u(f.code);return new B(p,f.message||"")}(a);t=new vu(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=yi(n,r.document.name),i=Ye(r.document.updateTime),a=r.document.createTime?Ye(r.document.createTime):H.min(),c=new Ge({mapValue:{fields:r.document.fields}}),u=Oe.newFoundDocument(s,i,a,c),f=r.targetIds||[],p=r.removedTargetIds||[];t=new vs(f,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=yi(n,r.document),i=r.readTime?Ye(r.readTime):H.min(),a=Oe.newNoDocument(s,i),c=r.removedTargetIds||[];t=new vs([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=yi(n,r.document),i=r.removedTargetIds||[];t=new vs([],i,s,null)}else{if(!("filter"in e))return z();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new Qg(s,i),c=r.targetId;t=new yu(c,a)}}return t}function a_(n,e){let t;if(e instanceof Nr)t={update:Cc(n,e.key,e.value)};else if(e instanceof gu)t={delete:Bi(n,e.key)};else if(e instanceof Zt)t={update:Cc(n,e.key,e.data),updateMask:g_(e.fieldMask)};else{if(!(e instanceof Hg))return z();t={verify:Bi(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof wr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Er)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Ir)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Cs)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw z()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:s_(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:z()}(n,e.precondition)),t}function c_(n,e){return n&&n.length>0?(se(e!==void 0),n.map(t=>function(s,i){let a=s.updateTime?Ye(s.updateTime):Ye(i);return a.isEqual(H.min())&&(a=Ye(i)),new Gg(a,s.transformResults||[])}(t,e))):[]}function l_(n,e){return{documents:[Iu(n,e.path)]}}function u_(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Iu(n,s);const i=function(f){if(f.length!==0)return xu(tt.create(f,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(f){if(f.length!==0)return f.map(p=>function(x){return{field:gn(x.field),direction:f_(x.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Fi(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(e.endAt)),{_t:t,parent:s}}function h_(n){let e=i_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){se(r===1);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];t.where&&(i=function(w){const x=bu(w);return x instanceof tt&&eu(x)?x.getFilters():[x]}(t.where));let a=[];t.orderBy&&(a=function(w){return w.map(x=>function(k){return new ks(_n(k.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(x))}(t.orderBy));let c=null;t.limit&&(c=function(w){let x;return x=typeof w=="object"?w.value:w,Us(x)?null:x}(t.limit));let u=null;t.startAt&&(u=function(w){const x=!!w.before,A=w.values||[];return new Ps(A,x)}(t.startAt));let f=null;return t.endAt&&(f=function(w){const x=!w.before,A=w.values||[];return new Ps(A,x)}(t.endAt)),Sg(e,s,a,i,c,"F",u,f)}function d_(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function bu(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=_n(t.unaryFilter.field);return Ee.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=_n(t.unaryFilter.field);return Ee.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=_n(t.unaryFilter.field);return Ee.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=_n(t.unaryFilter.field);return Ee.create(a,"!=",{nullValue:"NULL_VALUE"});default:return z()}}(n):n.fieldFilter!==void 0?function(t){return Ee.create(_n(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return tt.create(t.compositeFilter.filters.map(r=>bu(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return z()}}(t.compositeFilter.op))}(n):z()}function f_(n){return e_[n]}function m_(n){return t_[n]}function p_(n){return n_[n]}function gn(n){return{fieldPath:n.canonicalString()}}function _n(n){return ke.fromServerFormat(n.fieldPath)}function xu(n){return n instanceof Ee?function(t){if(t.op==="=="){if(_c(t.value))return{unaryFilter:{field:gn(t.field),op:"IS_NAN"}};if(gc(t.value))return{unaryFilter:{field:gn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(_c(t.value))return{unaryFilter:{field:gn(t.field),op:"IS_NOT_NAN"}};if(gc(t.value))return{unaryFilter:{field:gn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:gn(t.field),op:m_(t.op),value:t.value}}}(n):n instanceof tt?function(t){const r=t.getFilters().map(s=>xu(s));return r.length===1?r[0]:{compositeFilter:{op:p_(t.op),filters:r}}}(n):z()}function g_(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Au(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class xt{constructor(e,t,r,s,i=H.min(),a=H.min(),c=Ne.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new xt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class __{constructor(e){this.ct=e}}function y_(n){const e=h_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Li(e,e.limit,"L"):e}/**
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
 */class v_{constructor(){this.un=new w_}addToCollectionParentIndex(e,t){return this.un.add(t),M.resolve()}getCollectionParents(e,t){return M.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return M.resolve()}deleteFieldIndex(e,t){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,t){return M.resolve()}getDocumentsMatchingTarget(e,t){return M.resolve(null)}getIndexType(e,t){return M.resolve(0)}getFieldIndexes(e,t){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,t){return M.resolve(Ct.min())}getMinOffsetFromCollectionGroup(e,t){return M.resolve(Ct.min())}updateCollectionGroup(e,t,r){return M.resolve()}updateIndexEntries(e,t){return M.resolve()}}class w_{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Ce(pe.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ce(pe.comparator)).toArray()}}/**
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
 */class kn{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new kn(0)}static kn(){return new kn(-1)}}/**
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
 */class E_{constructor(){this.changes=new On(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Oe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?M.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class I_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class T_{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&dr(r.mutation,s,Ke.empty(),Ie.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,X()).next(()=>r))}getLocalViewOfDocuments(e,t,r=X()){const s=zt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=or();return i.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=zt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,X()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=mt();const a=hr(),c=function(){return hr()}();return t.forEach((u,f)=>{const p=r.get(f.key);s.has(f.key)&&(p===void 0||p.mutation instanceof Zt)?i=i.insert(f.key,f):p!==void 0?(a.set(f.key,p.mutation.getFieldMask()),dr(p.mutation,f,p.mutation.getFieldMask(),Ie.now())):a.set(f.key,Ke.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((f,p)=>a.set(f,p)),t.forEach((f,p)=>{var w;return c.set(f,new I_(p,(w=a.get(f))!==null&&w!==void 0?w:null))}),c))}recalculateAndSaveOverlays(e,t){const r=hr();let s=new de((a,c)=>a-c),i=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(u=>{const f=t.get(u);if(f===null)return;let p=r.get(u)||Ke.empty();p=c.applyToLocalView(f,p),r.set(u,p);const w=(s.get(c.batchId)||X()).add(u);s=s.insert(c.batchId,w)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),f=u.key,p=u.value,w=cu();p.forEach(x=>{if(!i.has(x)){const A=mu(t.get(x),r.get(x));A!==null&&w.set(x,A),i=i.add(x)}}),a.push(this.documentOverlayCache.saveOverlays(e,f,w))}return M.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return $.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Pg(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):M.resolve(zt());let c=-1,u=i;return a.next(f=>M.forEach(f,(p,w)=>(c<w.largestBatchId&&(c=w.largestBatchId),i.get(p)?M.resolve():this.remoteDocumentCache.getEntry(e,p).next(x=>{u=u.insert(p,x)}))).next(()=>this.populateOverlays(e,f,i)).next(()=>this.computeViews(e,u,f,X())).next(p=>({batchId:c,changes:au(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new $(t)).next(r=>{let s=or();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=or();return this.indexManager.getCollectionParents(e,i).next(c=>M.forEach(c,u=>{const f=function(w,x){return new Bs(x,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,f,r,s).next(p=>{p.forEach((w,x)=>{a=a.insert(w,x)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((u,f)=>{const p=f.getKey();a.get(p)===null&&(a=a.insert(p,Oe.newInvalidDocument(p)))});let c=or();return a.forEach((u,f)=>{const p=i.get(u);p!==void 0&&dr(p.mutation,f,Ke.empty(),Ie.now()),Gs(t,f)&&(c=c.insert(u,f))}),c})}}/**
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
 */class b_{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return M.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Ye(s.createTime)}}(t)),M.resolve()}getNamedQuery(e,t){return M.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:y_(s.bundledQuery),readTime:Ye(s.readTime)}}(t)),M.resolve()}}/**
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
 */class x_{constructor(){this.overlays=new de($.comparator),this.Ir=new Map}getOverlay(e,t){return M.resolve(this.overlays.get(t))}getOverlays(e,t){const r=zt();return M.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),M.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),M.resolve()}getOverlaysForCollection(e,t,r){const s=zt(),i=t.length+1,a=new $(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,f=u.getKey();if(!t.isPrefixOf(f.path))break;f.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return M.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new de((f,p)=>f-p);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===t&&f.largestBatchId>r){let p=i.get(f.largestBatchId);p===null&&(p=zt(),i=i.insert(f.largestBatchId,p)),p.set(f.getKey(),f)}}const c=zt(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((f,p)=>c.set(f,p)),!(c.size()>=s)););return M.resolve(c)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Kg(t,r));let i=this.Ir.get(t);i===void 0&&(i=X(),this.Ir.set(t,i)),this.Ir.set(t,i.add(r.key))}}/**
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
 */class A_{constructor(){this.sessionToken=Ne.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,M.resolve()}}/**
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
 */class wo{constructor(){this.Tr=new Ce(be.Er),this.dr=new Ce(be.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new be(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new be(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new $(new pe([])),r=new be(t,e),s=new be(t,e+1),i=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),i.push(a.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new $(new pe([])),r=new be(t,e),s=new be(t,e+1);let i=X();return this.dr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new be(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class be{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return $.comparator(e.key,t.key)||ne(e.wr,t.wr)}static Ar(e,t){return ne(e.wr,t.wr)||$.comparator(e.key,t.key)}}/**
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
 */class R_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Ce(be.Er)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Wg(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.br=this.br.add(new be(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return M.resolve(a)}lookupMutationBatch(e,t){return M.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new be(t,0),s=new be(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],a=>{const c=this.Dr(a.wr);i.push(c)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ce(ne);return t.forEach(s=>{const i=new be(s,0),a=new be(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],c=>{r=r.add(c.wr)})}),M.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;$.isDocumentKey(i)||(i=i.child(""));const a=new be(new $(i),0);let c=new Ce(ne);return this.br.forEachWhile(u=>{const f=u.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(c=c.add(u.wr)),!0)},a),M.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){se(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return M.forEach(t.mutations,s=>{const i=new be(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new be(t,0),s=this.br.firstAfterOrEqual(r);return M.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class S_{constructor(e){this.Mr=e,this.docs=function(){return new de($.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return M.resolve(r?r.document.mutableCopy():Oe.newInvalidDocument(t))}getEntries(e,t){let r=mt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Oe.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=mt();const a=t.path,c=new $(a.child("")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:f,value:{document:p}}=u.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||lg(cg(p),r)<=0||(s.has(p.key)||Gs(t,p))&&(i=i.insert(p.key,p.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,t,r,s){z()}Or(e,t){return M.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new P_(this)}getSize(e){return M.resolve(this.size)}}class P_ extends E_{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),M.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class k_{constructor(e){this.persistence=e,this.Nr=new On(t=>fo(t),mo),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.Lr=0,this.Br=new wo,this.targetCount=0,this.kr=kn.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),M.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new kn(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,M.resolve()}updateTargetData(e,t){return this.Kn(t),M.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Nr.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return M.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),M.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),M.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return M.resolve(r)}containsKey(e,t){return M.resolve(this.Br.containsKey(t))}}/**
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
 */class C_{constructor(e,t){this.qr={},this.overlays={},this.Qr=new co(0),this.Kr=!1,this.Kr=!0,this.$r=new A_,this.referenceDelegate=e(this),this.Ur=new k_(this),this.indexManager=new v_,this.remoteDocumentCache=function(s){return new S_(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new __(t),this.Gr=new b_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new x_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new R_(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){U("MemoryPersistence","Starting transaction:",e);const s=new N_(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return M.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class N_ extends hg{constructor(e){super(),this.currentSequenceNumber=e}}class Eo{constructor(e){this.persistence=e,this.Jr=new wo,this.Yr=null}static Zr(e){return new Eo(e)}get Xr(){if(this.Yr)return this.Yr;throw z()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),M.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),M.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Xr,r=>{const s=$.fromPath(r);return this.ei(e,s).next(i=>{i||t.removeEntry(s,H.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return M.or([()=>M.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class Io{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=X(),s=X();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Io(e,t.fromCache,r,s)}}/**
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
 */class M_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class D_{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Nd()?8:dg(Le())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Yi(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Zi(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new M_;return this.Xi(e,t,a).next(c=>{if(i.result=c,this.zi)return this.es(e,t,a,c.size)})}).next(()=>i.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(rr()<=Y.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",pn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),M.resolve()):(rr()<=Y.DEBUG&&U("QueryEngine","Query:",pn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(rr()<=Y.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",pn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xe(t))):M.resolve())}Yi(e,t){if(Ec(t))return M.resolve(null);let r=Xe(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Li(t,null,"F"),r=Xe(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=X(...i);return this.Ji.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const f=this.ts(t,c);return this.ns(t,f,a,u.readTime)?this.Yi(e,Li(t,null,"F")):this.rs(e,f,t,u)}))})))}Zi(e,t,r,s){return Ec(t)||s.isEqual(H.min())?M.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const a=this.ts(t,i);return this.ns(t,a,r,s)?M.resolve(null):(rr()<=Y.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),pn(t)),this.rs(e,a,t,ag(s,-1)).next(c=>c))})}ts(e,t){let r=new Ce(iu(e));return t.forEach((s,i)=>{Gs(e,i)&&(r=r.add(i))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,r){return rr()<=Y.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",pn(t)),this.Ji.getDocumentsMatchingQuery(e,t,Ct.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */class V_{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new de(ne),this._s=new On(i=>fo(i),mo),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new T_(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function j_(n,e,t,r){return new V_(n,e,t,r)}async function Ru(n,e){const t=W(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let u=X();for(const f of s){a.push(f.batchId);for(const p of f.mutations)u=u.add(p.key)}for(const f of i){c.push(f.batchId);for(const p of f.mutations)u=u.add(p.key)}return t.localDocuments.getDocuments(r,u).next(f=>({hs:f,removedBatchIds:a,addedBatchIds:c}))})})}function O_(n,e){const t=W(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,u,f,p){const w=f.batch,x=w.keys();let A=M.resolve();return x.forEach(k=>{A=A.next(()=>p.getEntry(u,k)).next(C=>{const P=f.docVersions.get(k);se(P!==null),C.version.compareTo(P)<0&&(w.applyToRemoteDocument(C,f),C.isValidDocument()&&(C.setReadTime(f.commitVersion),p.addEntry(C)))})}),A.next(()=>c.mutationQueue.removeMutationBatch(u,w))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=X();for(let f=0;f<c.mutationResults.length;++f)c.mutationResults[f].transformResults.length>0&&(u=u.add(c.batch.mutations[f].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Su(n){const e=W(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function L_(n,e){const t=W(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const c=[];e.targetChanges.forEach((p,w)=>{const x=s.get(w);if(!x)return;c.push(t.Ur.removeMatchingKeys(i,p.removedDocuments,w).next(()=>t.Ur.addMatchingKeys(i,p.addedDocuments,w)));let A=x.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(w)!==null?A=A.withResumeToken(Ne.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):p.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(p.resumeToken,r)),s=s.insert(w,A),function(C,P,V){return C.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0}(x,A,p)&&c.push(t.Ur.updateTargetData(i,A))});let u=mt(),f=X();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,p))}),c.push(F_(i,a,e.documentUpdates).next(p=>{u=p.Ps,f=p.Is})),!r.isEqual(H.min())){const p=t.Ur.getLastRemoteSnapshotVersion(i).next(w=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(p)}return M.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,f)).next(()=>u)}).then(i=>(t.os=s,i))}function F_(n,e,t){let r=X(),s=X();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=mt();return t.forEach((c,u)=>{const f=i.get(c);u.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(H.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!f.isValidDocument()||u.version.compareTo(f.version)>0||u.version.compareTo(f.version)===0&&f.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):U("LocalStore","Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",u.version)}),{Ps:a,Is:s}})}function U_(n,e){const t=W(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function B_(n,e){const t=W(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):t.Ur.allocateTargetId(r).next(a=>(s=new xt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function Gi(n,e,t){const r=W(n),s=r.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Cr(a))throw a;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Nc(n,e,t){const r=W(n);let s=H.min(),i=X();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,f,p){const w=W(u),x=w._s.get(p);return x!==void 0?M.resolve(w.os.get(x)):w.Ur.getTargetData(f,p)}(r,a,Xe(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,c.targetId).next(u=>{i=u})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?s:H.min(),t?i:X())).next(c=>($_(r,Cg(e),c),{documents:c,Ts:i})))}function $_(n,e,t){let r=n.us.get(e)||H.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.us.set(e,r)}class Mc{constructor(){this.activeTargetIds=Og()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class G_{constructor(){this.so=new Mc,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Mc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class q_{_o(e){}shutdown(){}}/**
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
 */class Dc{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let hs=null;function vi(){return hs===null?hs=function(){return 268435456+Math.round(2147483648*Math.random())}():hs++,"0x"+hs.toString(16)}/**
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
 */const z_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class H_{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Ve="WebChannelConnection";class W_ extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,r,s,i,a){const c=vi(),u=this.xo(t,r.toUriEncodedString());U("RestConnection",`Sending RPC '${t}' ${c}:`,u,s);const f={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(f,i,a),this.No(t,u,f,s).then(p=>(U("RestConnection",`Received RPC '${t}' ${c}: `,p),p),p=>{throw An("RestConnection",`RPC '${t}' ${c} failed with error: `,p,"url: ",u,"request:",s),p})}Lo(t,r,s,i,a,c){return this.Mo(t,r,s,i,a)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Vn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>t[a]=i),s&&s.headers.forEach((i,a)=>t[a]=i)}xo(t,r){const s=z_[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const i=vi();return new Promise((a,c)=>{const u=new $l;u.setWithCredentials(!0),u.listenOnce(Gl.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case gs.NO_ERROR:const p=u.getResponseJson();U(Ve,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(p)),a(p);break;case gs.TIMEOUT:U(Ve,`RPC '${e}' ${i} timed out`),c(new B(D.DEADLINE_EXCEEDED,"Request time out"));break;case gs.HTTP_ERROR:const w=u.getStatus();if(U(Ve,`RPC '${e}' ${i} failed with status:`,w,"response text:",u.getResponseText()),w>0){let x=u.getResponseJson();Array.isArray(x)&&(x=x[0]);const A=x==null?void 0:x.error;if(A&&A.status&&A.message){const k=function(P){const V=P.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(V)>=0?V:D.UNKNOWN}(A.status);c(new B(k,A.message))}else c(new B(D.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new B(D.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{U(Ve,`RPC '${e}' ${i} completed.`)}});const f=JSON.stringify(s);U(Ve,`RPC '${e}' ${i} sending request:`,s),u.send(t,"POST",f,r,15)})}Bo(e,t,r){const s=vi(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Hl(),c=zl(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(u.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const p=i.join("");U(Ve,`Creating RPC '${e}' stream ${s}: ${p}`,u);const w=a.createWebChannel(p,u);let x=!1,A=!1;const k=new H_({Io:P=>{A?U(Ve,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(x||(U(Ve,`Opening RPC '${e}' stream ${s} transport.`),w.open(),x=!0),U(Ve,`RPC '${e}' stream ${s} sending:`,P),w.send(P))},To:()=>w.close()}),C=(P,V,O)=>{P.listen(V,S=>{try{O(S)}catch(F){setTimeout(()=>{throw F},0)}})};return C(w,ir.EventType.OPEN,()=>{A||(U(Ve,`RPC '${e}' stream ${s} transport opened.`),k.yo())}),C(w,ir.EventType.CLOSE,()=>{A||(A=!0,U(Ve,`RPC '${e}' stream ${s} transport closed`),k.So())}),C(w,ir.EventType.ERROR,P=>{A||(A=!0,An(Ve,`RPC '${e}' stream ${s} transport errored:`,P),k.So(new B(D.UNAVAILABLE,"The operation could not be completed")))}),C(w,ir.EventType.MESSAGE,P=>{var V;if(!A){const O=P.data[0];se(!!O);const S=O,F=S.error||((V=S[0])===null||V===void 0?void 0:V.error);if(F){U(Ve,`RPC '${e}' stream ${s} received error:`,F);const K=F.status;let J=function(_){const v=we[_];if(v!==void 0)return _u(v)}(K),E=F.message;J===void 0&&(J=D.INTERNAL,E="Unknown error status: "+K+" with message "+F.message),A=!0,k.So(new B(J,E)),w.close()}else U(Ve,`RPC '${e}' stream ${s} received:`,O),k.bo(O)}}),C(c,ql.STAT_EVENT,P=>{P.stat===Mi.PROXY?U(Ve,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===Mi.NOPROXY&&U(Ve,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.wo()},0),k}}function wi(){return typeof document<"u"?document:null}/**
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
 */function Ws(n){return new r_(n,!0)}/**
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
 */class Pu{constructor(e,t,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&U("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class ku{constructor(e,t,r,s,i,a,c,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Pu(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===D.RESOURCE_EXHAUSTED?(ft(t.toString()),ft("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new B(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class K_ extends ku{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=o_(this.serializer,e),r=function(i){if(!("targetChange"in i))return H.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?H.min():a.readTime?Ye(a.readTime):H.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=$i(this.serializer),t.addTarget=function(i,a){let c;const u=a.target;if(c=Oi(u)?{documents:l_(i,u)}:{query:u_(i,u)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=wu(i,a.resumeToken);const f=Fi(i,a.expectedCount);f!==null&&(c.expectedCount=f)}else if(a.snapshotVersion.compareTo(H.min())>0){c.readTime=Ns(i,a.snapshotVersion.toTimestamp());const f=Fi(i,a.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,e);const r=d_(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=$i(this.serializer),t.removeTarget=e,this.a_(t)}}class Q_ extends ku{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return se(!!e.streamToken),this.lastStreamToken=e.streamToken,se(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=c_(e.writeResults,e.commitTime),r=Ye(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=$i(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>a_(this.serializer,r))};this.a_(t)}}/**
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
 */class J_ extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new B(D.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Mo(e,Ui(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(D.UNKNOWN,i.toString())})}Lo(e,t,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Lo(e,Ui(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new B(D.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class X_{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(ft(t),this.D_=!1):U("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class Y_{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(a=>{r.enqueueAndForget(async()=>{en(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(u){const f=W(u);f.L_.add(4),await Dr(f),f.q_.set("Unknown"),f.L_.delete(4),await Ks(f)}(this))})}),this.q_=new X_(r,s)}}async function Ks(n){if(en(n))for(const e of n.B_)await e(!0)}async function Dr(n){for(const e of n.B_)await e(!1)}function Cu(n,e){const t=W(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Ao(t)?xo(t):Ln(t).r_()&&bo(t,e))}function To(n,e){const t=W(n),r=Ln(t);t.N_.delete(e),r.r_()&&Nu(t,e),t.N_.size===0&&(r.r_()?r.o_():en(t)&&t.q_.set("Unknown"))}function bo(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(H.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ln(n).A_(e)}function Nu(n,e){n.Q_.xe(e),Ln(n).R_(e)}function xo(n){n.Q_=new Zg({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Ln(n).start(),n.q_.v_()}function Ao(n){return en(n)&&!Ln(n).n_()&&n.N_.size>0}function en(n){return W(n).L_.size===0}function Mu(n){n.Q_=void 0}async function Z_(n){n.q_.set("Online")}async function ey(n){n.N_.forEach((e,t)=>{bo(n,e)})}async function ty(n,e){Mu(n),Ao(n)?(n.q_.M_(e),xo(n)):n.q_.set("Unknown")}async function ny(n,e,t){if(n.q_.set("Online"),e instanceof vu&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.N_.delete(c),s.Q_.removeTarget(c))}(n,e)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ms(n,r)}else if(e instanceof vs?n.Q_.Ke(e):e instanceof yu?n.Q_.He(e):n.Q_.We(e),!t.isEqual(H.min()))try{const r=await Su(n.localStore);t.compareTo(r)>=0&&await function(i,a){const c=i.Q_.rt(a);return c.targetChanges.forEach((u,f)=>{if(u.resumeToken.approximateByteSize()>0){const p=i.N_.get(f);p&&i.N_.set(f,p.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,f)=>{const p=i.N_.get(u);if(!p)return;i.N_.set(u,p.withResumeToken(Ne.EMPTY_BYTE_STRING,p.snapshotVersion)),Nu(i,u);const w=new xt(p.target,u,f,p.sequenceNumber);bo(i,w)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await Ms(n,r)}}async function Ms(n,e,t){if(!Cr(e))throw e;n.L_.add(1),await Dr(n),n.q_.set("Offline"),t||(t=()=>Su(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Ks(n)})}function Du(n,e){return e().catch(t=>Ms(n,t,e))}async function Qs(n){const e=W(n),t=Mt(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;ry(e);)try{const s=await U_(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,sy(e,s)}catch(s){await Ms(e,s)}Vu(e)&&ju(e)}function ry(n){return en(n)&&n.O_.length<10}function sy(n,e){n.O_.push(e);const t=Mt(n);t.r_()&&t.V_&&t.m_(e.mutations)}function Vu(n){return en(n)&&!Mt(n).n_()&&n.O_.length>0}function ju(n){Mt(n).start()}async function iy(n){Mt(n).p_()}async function oy(n){const e=Mt(n);for(const t of n.O_)e.m_(t.mutations)}async function ay(n,e,t){const r=n.O_.shift(),s=_o.from(r,e,t);await Du(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Qs(n)}async function cy(n,e){e&&Mt(n).V_&&await async function(r,s){if(function(a){return Jg(a)&&a!==D.ABORTED}(s.code)){const i=r.O_.shift();Mt(r).s_(),await Du(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Qs(r)}}(n,e),Vu(n)&&ju(n)}async function Vc(n,e){const t=W(n);t.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=en(t);t.L_.add(3),await Dr(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Ks(t)}async function ly(n,e){const t=W(n);e?(t.L_.delete(2),await Ks(t)):e||(t.L_.add(2),await Dr(t),t.q_.set("Unknown"))}function Ln(n){return n.K_||(n.K_=function(t,r,s){const i=W(t);return i.w_(),new K_(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:Z_.bind(null,n),Ro:ey.bind(null,n),mo:ty.bind(null,n),d_:ny.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),Ao(n)?xo(n):n.q_.set("Unknown")):(await n.K_.stop(),Mu(n))})),n.K_}function Mt(n){return n.U_||(n.U_=function(t,r,s){const i=W(t);return i.w_(),new Q_(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:iy.bind(null,n),mo:cy.bind(null,n),f_:oy.bind(null,n),g_:ay.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Qs(n)):(await n.U_.stop(),n.O_.length>0&&(U("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class Ro{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Pt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new Ro(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function So(n,e){if(ft("AsyncQueue",`${e}: ${n}`),Cr(n))return new B(D.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class In{constructor(e){this.comparator=e?(t,r)=>e(t,r)||$.comparator(t.key,r.key):(t,r)=>$.comparator(t.key,r.key),this.keyedMap=or(),this.sortedSet=new de(this.comparator)}static emptySet(e){return new In(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof In)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new In;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class jc{constructor(){this.W_=new de($.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):z():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Cn{constructor(e,t,r,s,i,a,c,u,f){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=f}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new Cn(e,t,In.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$s(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class uy{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class hy{constructor(){this.queries=Oc(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=W(t),i=s.queries;s.queries=Oc(),i.forEach((a,c)=>{for(const u of c.j_)u.onError(r)})})(this,new B(D.ABORTED,"Firestore shutting down"))}}function Oc(){return new On(n=>su(n),$s)}async function dy(n,e){const t=W(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new uy,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=So(a,`Initialization of query '${pn(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&Po(t)}async function fy(n,e){const t=W(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.j_.indexOf(e);a>=0&&(i.j_.splice(a,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function my(n,e){const t=W(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.j_)c.X_(s)&&(r=!0);a.z_=s}}r&&Po(t)}function py(n,e,t){const r=W(n),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(t);r.queries.delete(e)}function Po(n){n.Y_.forEach(e=>{e.next()})}var qi,Lc;(Lc=qi||(qi={})).ea="default",Lc.Cache="cache";class gy{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Cn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Cn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==qi.Cache}}/**
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
 */class Ou{constructor(e){this.key=e}}class Lu{constructor(e){this.key=e}}class _y{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=X(),this.mutatedKeys=X(),this.Aa=iu(e),this.Ra=new In(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new jc,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,w)=>{const x=s.get(p),A=Gs(this.query,w)?w:null,k=!!x&&this.mutatedKeys.has(x.key),C=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let P=!1;x&&A?x.data.isEqual(A.data)?k!==C&&(r.track({type:3,doc:A}),P=!0):this.ga(x,A)||(r.track({type:2,doc:A}),P=!0,(u&&this.Aa(A,u)>0||f&&this.Aa(A,f)<0)&&(c=!0)):!x&&A?(r.track({type:0,doc:A}),P=!0):x&&!A&&(r.track({type:1,doc:x}),P=!0,(u||f)&&(c=!0)),P&&(A?(a=a.add(A),i=C?i.add(p):i.delete(p)):(a=a.delete(p),i=i.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),i=i.delete(p.key),r.track({type:1,doc:p})}return{Ra:a,fa:r,ns:c,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((p,w)=>function(A,k){const C=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return C(A)-C(k)}(p.type,w.type)||this.Aa(p.doc,w.doc)),this.pa(r),s=s!=null&&s;const c=t&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,f=u!==this.Ea;return this.Ea=u,a.length!==0||f?{snapshot:new Cn(this.query,e.Ra,i,a,e.mutatedKeys,u===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new jc,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=X(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new Lu(r))}),this.da.forEach(r=>{e.has(r)||t.push(new Ou(r))}),t}ba(e){this.Ta=e.Ts,this.da=X();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Cn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class yy{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class vy{constructor(e){this.key=e,this.va=!1}}class wy{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new On(c=>su(c),$s),this.Ma=new Map,this.xa=new Set,this.Oa=new de($.comparator),this.Na=new Map,this.La=new wo,this.Ba={},this.ka=new Map,this.qa=kn.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Ey(n,e,t=!0){const r=qu(n);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Fu(r,e,t,!0),s}async function Iy(n,e){const t=qu(n);await Fu(t,e,!0,!1)}async function Fu(n,e,t,r){const s=await B_(n.localStore,Xe(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await Ty(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Cu(n.remoteStore,s),c}async function Ty(n,e,t,r,s){n.Ka=(w,x,A)=>async function(C,P,V,O){let S=P.view.ma(V);S.ns&&(S=await Nc(C.localStore,P.query,!1).then(({documents:E})=>P.view.ma(E,S)));const F=O&&O.targetChanges.get(P.targetId),K=O&&O.targetMismatches.get(P.targetId)!=null,J=P.view.applyChanges(S,C.isPrimaryClient,F,K);return Uc(C,P.targetId,J.wa),J.snapshot}(n,w,x,A);const i=await Nc(n.localStore,e,!0),a=new _y(e,i.Ts),c=a.ma(i.documents),u=Mr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),f=a.applyChanges(c,n.isPrimaryClient,u);Uc(n,t,f.wa);const p=new yy(e,t,a);return n.Fa.set(e,p),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),f.snapshot}async function by(n,e,t){const r=W(n),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(a=>!$s(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Gi(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&To(r.remoteStore,s.targetId),zi(r,s.targetId)}).catch(kr)):(zi(r,s.targetId),await Gi(r.localStore,s.targetId,!0))}async function xy(n,e){const t=W(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),To(t.remoteStore,r.targetId))}async function Ay(n,e,t){const r=My(n);try{const s=await function(a,c){const u=W(a),f=Ie.now(),p=c.reduce((A,k)=>A.add(k.key),X());let w,x;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let k=mt(),C=X();return u.cs.getEntries(A,p).next(P=>{k=P,k.forEach((V,O)=>{O.isValidDocument()||(C=C.add(V))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,k)).next(P=>{w=P;const V=[];for(const O of c){const S=zg(O,w.get(O.key).overlayedDocument);S!=null&&V.push(new Zt(O.key,S,Xl(S.value.mapValue),ut.exists(!0)))}return u.mutationQueue.addMutationBatch(A,f,V,c)}).next(P=>{x=P;const V=P.applyToLocalDocumentSet(w,C);return u.documentOverlayCache.saveOverlays(A,P.batchId,V)})}).then(()=>({batchId:x.batchId,changes:au(w)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,u){let f=a.Ba[a.currentUser.toKey()];f||(f=new de(ne)),f=f.insert(c,u),a.Ba[a.currentUser.toKey()]=f}(r,s.batchId,t),await Vr(r,s.changes),await Qs(r.remoteStore)}catch(s){const i=So(s,"Failed to persist write");t.reject(i)}}async function Uu(n,e){const t=W(n);try{const r=await L_(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Na.get(i);a&&(se(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?se(a.va):s.removedDocuments.size>0&&(se(a.va),a.va=!1))}),await Vr(t,r,e)}catch(r){await kr(r)}}function Fc(n,e,t){const r=W(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((i,a)=>{const c=a.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const u=W(a);u.onlineState=c;let f=!1;u.queries.forEach((p,w)=>{for(const x of w.j_)x.Z_(c)&&(f=!0)}),f&&Po(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Ry(n,e,t){const r=W(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),i=s&&s.key;if(i){let a=new de($.comparator);a=a.insert(i,Oe.newNoDocument(i,H.min()));const c=X().add(i),u=new Hs(H.min(),new Map,new de(ne),a,c);await Uu(r,u),r.Oa=r.Oa.remove(i),r.Na.delete(e),ko(r)}else await Gi(r.localStore,e,!1).then(()=>zi(r,e,t)).catch(kr)}async function Sy(n,e){const t=W(n),r=e.batch.batchId;try{const s=await O_(t.localStore,e);$u(t,r,null),Bu(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Vr(t,s)}catch(s){await kr(s)}}async function Py(n,e,t){const r=W(n);try{const s=await function(a,c){const u=W(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let p;return u.mutationQueue.lookupMutationBatch(f,c).next(w=>(se(w!==null),p=w.keys(),u.mutationQueue.removeMutationBatch(f,w))).next(()=>u.mutationQueue.performConsistencyCheck(f)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(f,p,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,p)).next(()=>u.localDocuments.getDocuments(f,p))})}(r.localStore,e);$u(r,e,t),Bu(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Vr(r,s)}catch(s){await kr(s)}}function Bu(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function $u(n,e,t){const r=W(n);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function zi(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||Gu(n,r)})}function Gu(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(To(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),ko(n))}function Uc(n,e,t){for(const r of t)r instanceof Ou?(n.La.addReference(r.key,e),ky(n,r)):r instanceof Lu?(U("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||Gu(n,r.key)):z()}function ky(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(U("SyncEngine","New document in limbo: "+t),n.xa.add(r),ko(n))}function ko(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new $(pe.fromString(e)),r=n.qa.next();n.Na.set(r,new vy(t)),n.Oa=n.Oa.insert(t,r),Cu(n.remoteStore,new xt(Xe(po(t.path)),r,"TargetPurposeLimboResolution",co.oe))}}async function Vr(n,e,t){const r=W(n),s=[],i=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((c,u)=>{a.push(r.Ka(u,e,t).then(f=>{var p;if((f||t)&&r.isPrimaryClient){const w=f?!f.fromCache:(p=t==null?void 0:t.targetChanges.get(u.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,w?"current":"not-current")}if(f){s.push(f);const w=Io.Wi(u.targetId,f);i.push(w)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(u,f){const p=W(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>M.forEach(f,x=>M.forEach(x.$i,A=>p.persistence.referenceDelegate.addReference(w,x.targetId,A)).next(()=>M.forEach(x.Ui,A=>p.persistence.referenceDelegate.removeReference(w,x.targetId,A)))))}catch(w){if(!Cr(w))throw w;U("LocalStore","Failed to update sequence numbers: "+w)}for(const w of f){const x=w.targetId;if(!w.fromCache){const A=p.os.get(x),k=A.snapshotVersion,C=A.withLastLimboFreeSnapshotVersion(k);p.os=p.os.insert(x,C)}}}(r.localStore,i))}async function Cy(n,e){const t=W(n);if(!t.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const r=await Ru(t.localStore,e);t.currentUser=e,function(i,a){i.ka.forEach(c=>{c.forEach(u=>{u.reject(new B(D.CANCELLED,a))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Vr(t,r.hs)}}function Ny(n,e){const t=W(n),r=t.Na.get(e);if(r&&r.va)return X().add(r.key);{let s=X();const i=t.Ma.get(e);if(!i)return s;for(const a of i){const c=t.Fa.get(a);s=s.unionWith(c.view.Va)}return s}}function qu(n){const e=W(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Uu.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ny.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ry.bind(null,e),e.Ca.d_=my.bind(null,e.eventManager),e.Ca.$a=py.bind(null,e.eventManager),e}function My(n){const e=W(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Sy.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Py.bind(null,e),e}class Ds{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ws(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return j_(this.persistence,new D_,e.initialUser,this.serializer)}Ga(e){return new C_(Eo.Zr,this.serializer)}Wa(e){return new G_}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ds.provider={build:()=>new Ds};class Hi{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Fc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Cy.bind(null,this.syncEngine),await ly(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new hy}()}createDatastore(e){const t=Ws(e.databaseInfo.databaseId),r=function(i){return new W_(i)}(e.databaseInfo);return function(i,a,c,u){return new J_(i,a,c,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new Y_(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Fc(this.syncEngine,t,0),function(){return Dc.D()?new Dc:new q_}())}createSyncEngine(e,t){return function(s,i,a,c,u,f,p){const w=new wy(s,i,a,c,u,f);return p&&(w.Qa=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=W(s);U("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Dr(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Hi.provider={build:()=>new Hi};/**
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
 */class Dy{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):ft("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class Vy{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=je.UNAUTHENTICATED,this.clientId=Kl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{U("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(U("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=So(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ei(n,e){n.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Ru(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Bc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await jy(n);U("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Vc(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Vc(e.remoteStore,s)),n._onlineComponents=e}async function jy(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ei(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;An("Error using user provided cache. Falling back to memory cache: "+t),await Ei(n,new Ds)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await Ei(n,new Ds);return n._offlineComponents}async function zu(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await Bc(n,n._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await Bc(n,new Hi))),n._onlineComponents}function Oy(n){return zu(n).then(e=>e.syncEngine)}async function Ly(n){const e=await zu(n),t=e.eventManager;return t.onListen=Ey.bind(null,e.syncEngine),t.onUnlisten=by.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Iy.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=xy.bind(null,e.syncEngine),t}function Fy(n,e,t={}){const r=new Pt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,u,f){const p=new Dy({next:x=>{p.Za(),a.enqueueAndForget(()=>fy(i,w));const A=x.docs.has(c);!A&&x.fromCache?f.reject(new B(D.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&x.fromCache&&u&&u.source==="server"?f.reject(new B(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(x)},error:x=>f.reject(x)}),w=new gy(po(c.path),p,{includeMetadataChanges:!0,_a:!0});return dy(i,w)}(await Ly(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function Hu(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const $c=new Map;/**
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
 */function Uy(n,e,t){if(!t)throw new B(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function By(n,e,t,r){if(e===!0&&r===!0)throw new B(D.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Gc(n){if(!$.isDocumentKey(n))throw new B(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Co(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":z()}function Tr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new B(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Co(n);throw new B(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class qc{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new B(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}By("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Hu((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new B(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new B(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new B(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class No{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qc({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qc(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Yp;switch(r.type){case"firstParty":return new ng(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=$c.get(t);r&&(U("ComponentProvider","Removing Datastore"),$c.delete(t),r.terminate())}(this),Promise.resolve()}}function $y(n,e,t,r={}){var s;const i=(n=Tr(n,No))._getSettings(),a=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&An("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let c,u;if(typeof r.mockUserToken=="string")c=r.mockUserToken,u=je.MOCK_USER;else{c=xd(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new B(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new je(f)}n._authCredentials=new Zp(new Wl(c,u))}}/**
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
 */class Mo{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Mo(this.firestore,e,this._query)}}class qe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new br(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qe(this.firestore,e,this._key)}}class br extends Mo{constructor(e,t,r){super(e,t,po(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qe(this.firestore,null,new $(e))}withConverter(e){return new br(this.firestore,e,this._path)}}function Wu(n,e,...t){if(n=ze(n),arguments.length===1&&(e=Kl.newId()),Uy("doc","path",e),n instanceof No){const r=pe.fromString(e,...t);return Gc(r),new qe(n,null,new $(r))}{if(!(n instanceof qe||n instanceof br))throw new B(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(pe.fromString(e,...t));return Gc(r),new qe(n.firestore,n instanceof br?n.converter:null,new $(r))}}/**
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
 */class zc{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Pu(this,"async_queue_retry"),this.Vu=()=>{const r=wi();r&&U("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=wi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=wi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new Pt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Cr(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw ft("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=Ro.createAndSchedule(this,e,t,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&z()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class Do extends No{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new zc,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new zc(e),this._firestoreClient=void 0,await e}}}function Gy(n,e){const t=typeof n=="object"?n:al(),r=typeof n=="string"?n:"(default)",s=Qi(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Td("firestore");i&&$y(s,...i)}return s}function Ku(n){if(n._terminated)throw new B(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||qy(n),n._firestoreClient}function qy(n){var e,t,r;const s=n._freezeSettings(),i=function(c,u,f,p){return new pg(c,u,f,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Hu(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Vy(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(n._componentsProvider))}/**
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
 */class Nn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Nn(Ne.fromBase64String(e))}catch(t){throw new B(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Nn(Ne.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Vo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new B(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class jo{constructor(e){this._methodName=e}}/**
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
 */class Oo{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new B(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new B(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}}/**
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
 */class Lo{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const zy=/^__.*__$/;class Hy{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Zt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Nr(e,this.data,t,this.fieldTransforms)}}function Qu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class Fo{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Fo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Vs(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Qu(this.Cu)&&zy.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Wy{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ws(e)}Qu(e,t,r,s=!1){return new Fo({Cu:e,methodName:t,qu:r,path:ke.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ky(n){const e=n._freezeSettings(),t=Ws(n._databaseId);return new Wy(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Qy(n,e,t,r,s,i={}){const a=n.Qu(i.merge||i.mergeFields?2:0,e,t,s);Zu("Data must be an object, but it was:",a,r);const c=Xu(r,a);let u,f;if(i.merge)u=new Ke(a.fieldMask),f=a.fieldTransforms;else if(i.mergeFields){const p=[];for(const w of i.mergeFields){const x=Jy(e,w,t);if(!a.contains(x))throw new B(D.INVALID_ARGUMENT,`Field '${x}' is specified in your field mask but missing from your input data.`);Yy(p,x)||p.push(x)}u=new Ke(p),f=a.fieldTransforms.filter(w=>u.covers(w.field))}else u=null,f=a.fieldTransforms;return new Hy(new Ge(c),u,f)}class Uo extends jo{_toFieldTransform(e){return new Bg(e.path,new wr)}isEqual(e){return e instanceof Uo}}function Ju(n,e){if(Yu(n=ze(n)))return Zu("Unsupported field value:",e,n),Xu(n,e);if(n instanceof jo)return function(r,s){if(!Qu(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let u=Ju(c,s.Lu(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=ze(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Lg(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ie.fromDate(r);return{timestampValue:Ns(s.serializer,i)}}if(r instanceof Ie){const i=new Ie(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ns(s.serializer,i)}}if(r instanceof Oo)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Nn)return{bytesValue:wu(s.serializer,r._byteString)};if(r instanceof qe){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:vo(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Lo)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw c.Bu("VectorValues must only contain numeric values.");return go(c.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Co(r)}`)}(n,e)}function Xu(n,e){const t={};return Ql(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):jn(n,(r,s)=>{const i=Ju(s,e.Mu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Yu(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ie||n instanceof Oo||n instanceof Nn||n instanceof qe||n instanceof jo||n instanceof Lo)}function Zu(n,e,t){if(!Yu(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Co(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function Jy(n,e,t){if((e=ze(e))instanceof Vo)return e._internalPath;if(typeof e=="string")return eh(n,e);throw Vs("Field path arguments must be of type string or ",n,!1,void 0,t)}const Xy=new RegExp("[~\\*/\\[\\]]");function eh(n,e,t){if(e.search(Xy)>=0)throw Vs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Vo(...e.split("."))._internalPath}catch{throw Vs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Vs(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new B(D.INVALID_ARGUMENT,c+n+u)}function Yy(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class th{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new qe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Zy(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(nh("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Zy extends th{data(){return super.data()}}function nh(n,e){return typeof e=="string"?eh(n,e):e instanceof Vo?e._internalPath:e._delegate._internalPath}class e0{convertValue(e,t="none"){switch(Yt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Xt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw z()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return jn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>ve(a.doubleValue));return new Lo(i)}convertGeoPoint(e){return new Oo(ve(e.latitude),ve(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=uo(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(_r(e));default:return null}}convertTimestamp(e){const t=Nt(e);return new Ie(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=pe.fromString(e);se(Au(r));const s=new yr(r.get(1),r.get(3)),i=new $(r.popFirst(5));return s.isEqual(t)||ft(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function t0(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
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
 */class n0{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rh extends th{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new r0(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(nh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class r0 extends rh{data(e={}){return super.data(e)}}/**
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
 */function s0(n){n=Tr(n,qe);const e=Tr(n.firestore,Do);return Fy(Ku(e),n._key).then(t=>c0(e,n,t))}class i0 extends e0{constructor(e){super(),this.firestore=e}convertBytes(e){return new Nn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new qe(this.firestore,null,t)}}function o0(n,e,t){n=Tr(n,qe);const r=Tr(n.firestore,Do),s=t0(n.converter,e);return a0(r,[Qy(Ky(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,ut.none())])}function a0(n,e){return function(r,s){const i=new Pt;return r.asyncQueue.enqueueAndForget(async()=>Ay(await Oy(r),s,i)),i.promise}(Ku(n),e)}function c0(n,e,t){const r=t.docs.get(e._key),s=new i0(n);return new rh(n,s,e._key,r,new n0(t.hasPendingWrites,t.fromCache),e.converter)}function l0(){return new Uo("serverTimestamp")}(function(e,t=!0){(function(s){Vn=s})(Mn),bn(new Kt("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new Do(new eg(r.getProvider("auth-internal")),new sg(r.getProvider("app-check-internal")),function(f,p){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new B(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yr(f.options.projectId,p)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),St(hc,"4.7.3",e),St(hc,"4.7.3","esm2017")})();const u0={apiKey:"AIzaSyDDjfbJ4uO_xrI6aqOtcuq5RRBjmhwf1h8",authDomain:"homesteading-haven.firebaseapp.com",projectId:"homesteading-haven",storageBucket:"homesteading-haven.firebasestorage.app",messagingSenderId:"702634367242",appId:"1:702634367242:web:2b70a2b308ccf3686802f3",measurementId:"G-BBLXXNW0Y8"},sh=ol(u0),Bo=Jp(sh),ih=Gy(sh),Hc=new it,h0=async()=>(Hc.setCustomParameters({prompt:"select_account"}),ip(Bo,Hc)),d0=async()=>{await Fm(Bo)},f0=async(n,e)=>{await o0(Wu(ih,"saves",n),{...e,updatedAt:l0()})},m0=async n=>{const e=await s0(Wu(ih,"saves",n));if(!e.exists())return null;const t=e.data(),{updatedAt:r,...s}=t;return s},Ii=({type:n})=>{switch(n){case"wood":return h.jsx(nd,{className:"w-4 h-4 text-amber-700"});case"food":return h.jsx(td,{className:"w-4 h-4 text-yellow-600"});case"stone":return h.jsx(Jc,{className:"w-4 h-4 text-stone-500"});case"iron":return h.jsx(ed,{className:"w-4 h-4 text-slate-400"})}},p0=()=>{const{resources:n,settlers:e,happiness:t,weather:r,isBuilding:s,selectedBuilding:i,setSelectedBuilding:a,day:c,reset:u,season:f,buildings:p,selectedBuildingId:w,selectBuildingId:x,upgradeBuilding:A,demolishBuilding:k,logs:C,nature:P,tickRate:V,setTickRate:O,objectives:S,claimObjective:F,celebrateFestival:K,sendExpedition:J,assignWorker:E,unassignWorker:g,loadSaveData:_,unlockedResearch:v,currentResearch:I,researchProgress:b,startResearch:y,cancelResearch:Ue,tradeOffers:Be,lastTradeRefresh:tn,acceptTrade:Q}=kt(),[re,ge]=te.useState(!1),[fe,xe]=te.useState(!1),[ue,oe]=te.useState(!1),[Dt,He]=te.useState(!1),[Js,Vt]=te.useState(!1),[nn,jr]=te.useState(null),[jt,Ot]=te.useState(!1),[rn,sn]=te.useState(!1),Fn=N=>{a(i===N&&s?null:N)},Un=()=>{confirm("Are you sure you want to reset your progress? This cannot be undone.")&&(u(),ge(!1))},he=w?(p||[]).find(N=>N.id===w):null,Lt=he?yn[he.type]:null,Bn=he?he.level+1:1,Ae=he?Et[he.type]:null,$n=he?(e||[]).filter(N=>N.job===he.id).length:0,on=(p||[]).find(N=>N.type==="barn"),Or=Lt&&Object.keys(Lt).every(N=>{const L=N;return((n==null?void 0:n[L])||0)>=(Lt[L]||0)*Bn}),an=((n==null?void 0:n.wood)||0)>=30&&((n==null?void 0:n.food)||0)>=40,cn=((n==null?void 0:n.food)||0)>=25&&((n==null?void 0:n.wood)||0)>=15,Lr=(e||[]).length?Math.round(e.reduce((N,L)=>N+(L.hunger||0),0)/e.length):100,Te=(e||[]).length?Math.round(e.reduce((N,L)=>N+(L.energy||0),0)/e.length):100,Re=(e||[]).filter(N=>(N.hunger||0)<30||(N.energy||0)<30).length,ln=N=>{const{goal:L}=N;if(L.type==="resource"&&L.key){const G=(n==null?void 0:n[L.key])||0;return Math.min(G/L.amount,1)}if(L.type==="building"&&L.key){const G=(p||[]).filter(ie=>ie.type===L.key).length;return Math.min(G/L.amount,1)}return L.type==="population"?Math.min((e||[]).length/L.amount,1):L.type==="happiness"?Math.min((t||0)/L.amount,1):0},Fr=N=>{const{goal:L}=N;return L.type==="resource"&&L.key?`${Math.floor((n==null?void 0:n[L.key])||0)}/${L.amount}`:L.type==="building"&&L.key?`${(p||[]).filter(ie=>ie.type===L.key).length}/${L.amount}`:L.type==="population"?`${(e||[]).length}/${L.amount}`:L.type==="happiness"?`${Math.floor(t||0)}% / ${L.amount}%`:""},Gn=(Ae==null?void 0:Ae.workers)||0,Ur=Gn?`${$n}/${Gn} workers`:"No workers needed";te.useEffect(()=>{const N=Lm(Bo,async L=>{if(jr(L),L){sn(!0);const G=await m0(L.uid);G&&_(G),sn(!1)}});return()=>N()},[_]);const gt=async()=>{await h0()},Br=async()=>{await d0(),jr(null)},$r=async()=>{if(!nn){await gt();return}Ot(!0),await f0(nn.uid,{resources:n,settlers:e,happiness:t,buildings:p,nature:P,logs:C,weather:r,season:f,day:c,objectives:S,unlockedResearch:v,currentResearch:I,researchProgress:b,tradeOffers:Be,lastTradeRefresh:tn}),Ot(!1)},qn=te.useMemo(()=>{const N={};return Object.keys(yn).forEach(L=>{const G=Et[L],ie=Xc[L],ce=[];G.housing&&ce.push(`Housing +${G.housing}`),G.storage&&ce.push(`Storage +${G.storage} per level`),G.workers&&ce.push(`Needs ${G.workers} worker${G.workers>1?"s":""}`),G.happiness&&ce.push(`Happiness +${G.happiness} per level`),ie&&Object.entries(ie).forEach(([_e,ye])=>{ye&&ye>0&&ce.push(`Produces ${ye}/tick ${_e}`)}),L==="campfire"&&ce.push("Cozy spot that boosts happiness and eases bad weather."),L==="watchtower"&&ce.push("Mitigates storms, improves expeditions."),L==="fishery"&&ce.push("Food income even through winter."),L==="well"&&ce.push("Reduces rain/snow mood penalty."),L==="bakery"&&ce.push("Extra food and morale."),L==="warehouse"&&ce.push("Major storage expansion."),L==="tradingPost"&&ce.push("Trade resources with traveling merchants."),N[L]=ce}),N},[]);return h.jsxs("div",{className:"absolute inset-0 pointer-events-none flex flex-col justify-between z-30",children:[h.jsxs("div",{className:"pointer-events-auto flex flex-col gap-2 p-3 w-full max-w-full",children:[h.jsxs("div",{className:"flex items-center gap-2 w-full",children:[h.jsx("button",{onClick:()=>ge(!re),className:"bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 text-white shadow-xl hover:bg-white/10 transition-colors shrink-0",children:h.jsx(Oh,{className:"w-5 h-5"})}),h.jsx("div",{className:"flex-1 overflow-x-auto no-scrollbar flex gap-2 mask-linear-fade",children:["wood","food","stone","iron"].map(N=>h.jsxs("div",{className:"bg-black/60 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 text-white shadow-xl flex items-center gap-2 min-w-fit",children:[h.jsx(Ii,{type:N}),h.jsx("div",{className:"text-sm font-bold",children:Math.floor(n[N])})]},N))})]}),h.jsxs("div",{className:"flex flex-wrap gap-2",children:[h.jsxs("div",{className:"bg-black/60 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 text-white shadow-xl flex items-center gap-3 text-xs sm:text-sm",children:[h.jsxs("div",{className:"font-bold",children:["Day ",c.toFixed(0)]}),h.jsx("div",{className:"w-px h-3 bg-white/20"}),h.jsxs("div",{className:"flex items-center gap-1 capitalize",children:[r==="rain"&&h.jsx(Lh,{className:"w-3 h-3 text-blue-300"}),r==="snow"&&h.jsx(Fh,{className:"w-3 h-3 text-cyan-100"}),r==="sunny"&&h.jsx(Uh,{className:"w-3 h-3 text-amber-300"}),h.jsx("span",{className:"hidden sm:inline",children:r})]}),h.jsx("div",{className:"w-px h-3 bg-white/20"}),h.jsxs("div",{className:"flex items-center gap-1",children:[h.jsx(Bh,{className:`w-3 h-3 ${t>70?"text-green-300":"text-yellow-300"}`}),h.jsxs("span",{children:[Math.floor(t),"%"]})]})]}),h.jsxs("button",{onClick:()=>Vt(!0),className:"bg-black/60 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 text-white shadow-xl flex items-center gap-3 text-xs sm:text-sm hover:bg-white/10 transition-colors",children:[h.jsxs("div",{className:"flex items-center gap-1",children:[h.jsx(Na,{className:"w-3 h-3 text-gray-300"}),h.jsx("span",{children:e.length})]}),h.jsx("div",{className:"w-px h-3 bg-white/20"}),h.jsxs("div",{className:`flex items-center gap-1 ${Re>0?"text-yellow-300":"text-gray-300"}`,children:[h.jsx($h,{className:"w-3 h-3"}),h.jsxs("span",{children:[Math.round((Lr+Te)/2),"%"]})]})]})]})]}),re&&h.jsxs("div",{className:"absolute top-16 left-3 w-64 bg-black/90 backdrop-blur-xl p-4 rounded-2xl border border-white/10 text-white shadow-2xl pointer-events-auto z-50 flex flex-col gap-4 animate-in slide-in-from-left-4 fade-in duration-200",children:[h.jsxs("div",{className:"flex flex-col gap-2",children:[h.jsx("div",{className:"text-xs uppercase opacity-60 font-bold tracking-wider mb-1",children:"Actions"}),h.jsxs("button",{onClick:()=>{oe(N=>!N),ge(!1)},className:"flex items-center gap-3 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors",children:[h.jsx(Ma,{className:"w-4 h-4 text-emerald-300"})," Objectives"]}),h.jsxs("button",{onClick:()=>{He(N=>!N),ge(!1)},className:"flex items-center gap-3 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors",children:[h.jsx(Da,{className:"w-4 h-4 text-cyan-300"})," Research"]}),h.jsxs("button",{onClick:K,disabled:!an,className:`flex items-center gap-3 px-3 py-2 rounded-xl border border-white/5 transition-colors ${an?"bg-pink-600/20 hover:bg-pink-600/30 text-pink-100":"bg-white/5 opacity-50 cursor-not-allowed"}`,children:[h.jsx(Gh,{className:"w-4 h-4 text-pink-300"})," Festival"]}),h.jsxs("button",{onClick:J,disabled:!cn,className:`flex items-center gap-3 px-3 py-2 rounded-xl border border-white/5 transition-colors ${cn?"bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-100":"bg-white/5 opacity-50 cursor-not-allowed"}`,children:[h.jsx(qh,{className:"w-4 h-4 text-indigo-300"})," Expedition"]})]}),h.jsx("div",{className:"h-px bg-white/10"}),h.jsxs("div",{className:"flex flex-col gap-2",children:[h.jsx("div",{className:"text-xs uppercase opacity-60 font-bold tracking-wider mb-1",children:"System"}),nn?h.jsxs("div",{className:"flex flex-col gap-2",children:[h.jsxs("div",{className:"px-3 text-xs text-gray-400",children:["Signed in as ",nn.displayName]}),h.jsxs("button",{onClick:$r,disabled:jt||rn,className:"flex items-center gap-3 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors",children:[h.jsx(zh,{className:"w-4 h-4 text-yellow-300"})," ",jt?"Saving...":"Save Game"]}),h.jsxs("button",{onClick:Br,className:"flex items-center gap-3 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors",children:[h.jsx(Hh,{className:"w-4 h-4 text-red-300"})," Logout"]})]}):h.jsxs("button",{onClick:gt,className:"flex items-center gap-3 px-3 py-2 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-blue-100 transition-colors",children:[h.jsx(Wh,{className:"w-4 h-4"})," Sign In with Google"]}),h.jsx("span",{className:"text-xs uppercase opacity-60 font-bold tracking-wider mt-2",children:"Game Speed"}),h.jsx("div",{className:"grid grid-cols-3 gap-2",children:[1200,800,500].map(N=>h.jsxs("button",{onClick:()=>O(N),className:`px-2 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${V===N?"bg-green-600/30 border-green-400 text-green-100":"bg-white/5 border-white/10 hover:bg-white/10"}`,children:[Math.round(1e3/N),"x"]},N))})]}),h.jsxs("button",{onClick:Un,className:"flex items-center gap-3 bg-red-500/20 hover:bg-red-500/30 text-red-200 px-3 py-2 rounded-xl transition-colors w-full text-left border border-red-500/20",children:[h.jsx(Kh,{className:"w-4 h-4 text-red-300"}),"Reset Progress"]}),h.jsx("div",{className:"text-[10px] text-gray-500 text-center",children:"v0.2.0 Beta"})]}),Dt&&h.jsxs("div",{className:"pointer-events-auto w-full max-w-4xl bg-black/85 backdrop-blur-md p-4 rounded-2xl border border-cyan-400/30 text-white shadow-2xl mx-auto mt-20 sm:mt-24 max-h-[70vh] overflow-y-auto",children:[h.jsxs("div",{className:"flex items-center justify-between mb-3",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(Da,{className:"w-5 h-5 text-cyan-300"}),h.jsx("h3",{className:"text-lg font-bold",children:"Research"}),I&&h.jsx("span",{className:"text-xs text-cyan-200",children:"In progress…"})]}),h.jsx("button",{onClick:()=>He(!1),className:"text-gray-400 hover:text-white",children:h.jsx(os,{className:"w-5 h-5"})})]}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:(bi||[]).map(N=>{const L=(v||[]).includes(N.id),G=I===N.id,ie=((on==null?void 0:on.level)||0)>=N.barnLevelReq,ce=Object.keys(N.cost||{}).every(ye=>{var nt;return((n==null?void 0:n[ye])||0)>=(((nt=N.cost)==null?void 0:nt[ye])||0)}),_e=L||G||!ie||!ce;return h.jsxs("div",{className:`p-3 rounded-xl border ${L?"border-green-400/40 bg-green-900/10":"border-white/10 bg-white/5"} flex flex-col gap-2`,children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsxs("div",{children:[h.jsx("div",{className:"font-bold",children:N.name}),h.jsx("div",{className:"text-xs text-gray-300",children:N.description})]}),L&&h.jsx(Va,{className:"w-5 h-5 text-green-300"})]}),h.jsxs("div",{className:"text-xs text-gray-200 flex flex-wrap gap-2",children:[h.jsxs("span",{className:"px-2 py-1 rounded-full bg-white/10 border border-white/10",children:["Barn lvl ",N.barnLevelReq]}),Object.entries(N.cost||{}).map(([ye,nt])=>h.jsxs("span",{className:`px-2 py-1 rounded-full border ${((n==null?void 0:n[ye])||0)<nt?"border-red-400/60 text-red-200":"border-white/20 text-white"}`,children:[nt," ",ye]},ye))]}),G&&h.jsx("div",{className:"w-full h-2 bg-white/10 rounded-full overflow-hidden",children:h.jsx("div",{className:"h-full bg-cyan-400",style:{width:`${Math.min(100,b*100)}%`}})}),h.jsxs("div",{className:"flex justify-between items-center",children:[h.jsx("span",{className:"text-xs text-gray-300",children:L?"Unlocked":G?"Researching…":ie?ce?"Ready to research":"Need resources":"Barn level too low"}),G?h.jsx("button",{onClick:Ue,className:"text-xs px-3 py-1 rounded-lg border border-cyan-400 text-cyan-100 hover:bg-cyan-500/20",children:"Cancel"}):h.jsx("button",{onClick:()=>y(N.id),disabled:_e,className:`text-xs px-3 py-1 rounded-lg border ${_e?"border-white/10 text-gray-400 opacity-60 cursor-not-allowed":"border-cyan-400 text-cyan-100 hover:bg-cyan-500/20"}`,children:L?"Done":"Research"})]})]},N.id)})})]}),Js&&h.jsxs("div",{className:"pointer-events-auto w-full max-w-4xl bg-black/85 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-white shadow-2xl mx-auto mt-20 sm:mt-24 max-h-[70vh] overflow-y-auto",children:[h.jsxs("div",{className:"flex items-center justify-between mb-3",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(Na,{className:"w-5 h-5 text-blue-300"}),h.jsx("h3",{className:"text-lg font-bold",children:"Population"}),h.jsxs("span",{className:"text-xs text-gray-400",children:["(",e.length," Settlers)"]})]}),h.jsx("button",{onClick:()=>Vt(!1),className:"text-gray-400 hover:text-white",children:h.jsx(os,{className:"w-5 h-5"})})]}),h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",children:(e||[]).map(N=>{const L=N.job?(p||[]).find(G=>G.id===N.job):null;return h.jsxs("div",{className:"p-3 rounded-xl border border-white/10 bg-white/5 flex flex-col gap-2",children:[h.jsxs("div",{className:"flex justify-between items-start",children:[h.jsxs("div",{children:[h.jsx("div",{className:"font-bold text-sm",children:N.name}),h.jsx("div",{className:"text-xs text-gray-400 capitalize",children:N.state})]}),L?h.jsx("div",{className:"text-[10px] px-2 py-1 rounded bg-blue-500/20 text-blue-200 border border-blue-500/30 capitalize truncate max-w-[100px]",children:L.type}):h.jsx("div",{className:"text-[10px] px-2 py-1 rounded bg-white/10 text-gray-400 border border-white/10",children:"Unemployed"})]}),h.jsxs("div",{className:"grid grid-cols-2 gap-2 mt-1",children:[h.jsxs("div",{className:"flex flex-col gap-1",children:[h.jsxs("div",{className:"flex items-center gap-1 text-xs text-gray-300",children:[h.jsx(Qh,{className:"w-3 h-3 text-orange-300"}),h.jsxs("span",{children:[Math.floor(N.hunger||0),"%"]})]}),h.jsx("div",{className:"h-1.5 bg-gray-700 rounded-full overflow-hidden",children:h.jsx("div",{className:"h-full bg-orange-400",style:{width:`${N.hunger||0}%`}})})]}),h.jsxs("div",{className:"flex flex-col gap-1",children:[h.jsxs("div",{className:"flex items-center gap-1 text-xs text-gray-300",children:[h.jsx(Jh,{className:"w-3 h-3 text-yellow-300"}),h.jsxs("span",{children:[Math.floor(N.energy||0),"%"]})]}),h.jsx("div",{className:"h-1.5 bg-gray-700 rounded-full overflow-hidden",children:h.jsx("div",{className:"h-full bg-yellow-400",style:{width:`${N.energy||0}%`}})})]})]}),N.traits&&N.traits.length>0&&h.jsxs("div",{className:"mt-2 pt-2 border-t border-white/5",children:[h.jsx("div",{className:"text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-1",children:"Traits"}),h.jsx("div",{className:"flex flex-wrap gap-1",children:(N.traits||[]).map((G,ie)=>h.jsxs("div",{className:"group relative cursor-help",children:[h.jsx("span",{className:"px-1.5 py-0.5 rounded text-[10px] bg-purple-500/20 text-purple-200 border border-purple-500/30",children:G.name}),h.jsx("div",{className:"absolute bottom-full left-0 mb-1 hidden group-hover:block w-32 p-2 bg-black/90 text-xs text-white rounded border border-white/10 z-50",children:G.description})]},ie))})]})]},N.id)})})]}),h.jsx("div",{className:"absolute bottom-32 left-3 sm:left-4 flex flex-col gap-2 w-[300px] pointer-events-none opacity-80",children:(C||[]).slice(0,5).map(N=>h.jsx("div",{className:`
                    p-2 rounded-lg text-sm font-medium backdrop-blur-md shadow-lg border border-white/5 animate-in slide-in-from-left-4 fade-in duration-300
                    ${N.type==="success"?"bg-green-900/60 text-green-100":N.type==="warning"?"bg-yellow-900/60 text-yellow-100":N.type==="danger"?"bg-red-900/60 text-red-100":"bg-gray-900/60 text-gray-100"}
                `,children:N.message},N.id))}),he&&h.jsxs("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-white shadow-2xl pointer-events-auto z-40 min-w-[300px] max-w-[90vw]",children:[h.jsxs("div",{className:"flex justify-between items-start mb-4",children:[h.jsxs("div",{children:[h.jsx("h3",{className:"font-bold text-xl capitalize",children:he.type}),h.jsxs("p",{className:"text-gray-400 text-sm",children:["Level ",he.level]})]}),h.jsx("button",{onClick:()=>x(null),className:"text-gray-400 hover:text-white",children:h.jsx(os,{className:"w-5 h-5"})})]}),h.jsxs("div",{className:"flex flex-col gap-3",children:[Ae&&h.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs bg-white/5 border border-white/10 rounded-xl p-3",children:[Ae.housing&&h.jsxs("div",{className:"text-gray-200",children:["Housing: +",Ae.housing]}),Ae.storage&&h.jsxs("div",{className:"text-gray-200",children:["Storage: +",Ae.storage*he.level]}),Ae.happiness&&h.jsxs("div",{className:"text-gray-200",children:["Happiness: +",(Ae.happiness*he.level).toFixed(1)]}),Ae.workers!==void 0&&h.jsx("div",{className:"text-gray-200",children:Ur})]}),(Ae==null?void 0:Ae.workers)&&h.jsxs("div",{className:"flex items-center justify-between bg-white/5 border border-white/10 rounded-xl p-3 text-sm",children:[h.jsxs("div",{children:[h.jsx("div",{className:"font-semibold",children:"Workers"}),h.jsx("div",{className:"text-gray-300",children:Ur})]}),h.jsxs("div",{className:"flex gap-2",children:[h.jsx("button",{onClick:()=>E(he.id),className:"px-3 py-2 rounded-lg bg-green-600/30 hover:bg-green-600/50 border border-green-400 text-green-50 text-xs",children:"+ Assign"}),h.jsx("button",{onClick:()=>g(he.id),className:"px-3 py-2 rounded-lg bg-yellow-600/30 hover:bg-yellow-600/50 border border-yellow-400 text-yellow-50 text-xs",children:"- Unassign"})]})]}),h.jsxs("button",{onClick:()=>A(he.id),disabled:!Or,className:`
                flex items-center justify-between p-3 rounded-xl border border-white/10 transition-all
                ${Or?"bg-green-600/20 hover:bg-green-600/40 border-green-500/50":"bg-gray-800/50 opacity-50 cursor-not-allowed"}
              `,children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(Xh,{className:"w-5 h-5 text-green-400"}),h.jsxs("div",{className:"text-left",children:[h.jsx("div",{className:"font-bold",children:"Upgrade"}),h.jsx("div",{className:"text-xs text-gray-300",children:"Increases efficiency"})]})]}),h.jsx("div",{className:"flex flex-col items-end text-xs",children:Lt&&Object.entries(Lt).map(([N,L])=>h.jsxs("div",{className:n[N]<L*Bn?"text-red-400":"text-gray-300",children:[L*Bn," ",N.charAt(0).toUpperCase()]},N))})]}),(he==null?void 0:he.type)==="tradingPost"&&h.jsxs("div",{className:"flex flex-col gap-2 bg-white/5 border border-white/10 rounded-xl p-3",children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("h4",{className:"font-bold text-sm text-amber-300",children:"Active Trade Offers"}),h.jsx("span",{className:"text-[10px] text-gray-400",children:"Refreshes every 3 days"})]}),!Be||Be.length===0?h.jsx("div",{className:"text-xs text-gray-400 italic py-2 text-center",children:"No traders currently available."}):h.jsx("div",{className:"flex flex-col gap-2",children:Be.map(N=>{const L=Object.keys(N.wants||{}).every(G=>{var ie;return((n==null?void 0:n[G])||0)>=(((ie=N.wants)==null?void 0:ie[G])||0)});return h.jsxs("div",{className:"bg-black/20 rounded-lg p-2 flex items-center justify-between",children:[h.jsxs("div",{className:"flex flex-col text-xs gap-1",children:[h.jsxs("div",{className:"flex items-center gap-1 text-red-300",children:[h.jsx("span",{className:"font-bold",children:"Give:"}),Object.entries(N.wants||{}).map(([G,ie])=>h.jsxs("span",{className:"flex items-center gap-0.5",children:[ie," ",h.jsx(Ii,{type:G})]},G))]}),h.jsxs("div",{className:"flex items-center gap-1 text-green-300",children:[h.jsx("span",{className:"font-bold",children:"Get:"}),Object.entries(N.gives||{}).map(([G,ie])=>h.jsxs("span",{className:"flex items-center gap-0.5",children:[ie," ",h.jsx(Ii,{type:G})]},G))]})]}),h.jsx("button",{onClick:()=>Q(N.id),disabled:!L,className:`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors ${L?"bg-green-600/30 border-green-500 text-green-100 hover:bg-green-600/50":"bg-gray-700/30 border-gray-600 text-gray-500 cursor-not-allowed"}`,children:"Trade"})]},N.id)})})]}),h.jsxs("button",{onClick:()=>k(he.id),className:"flex items-center gap-2 p-3 rounded-xl bg-red-500/10 hover:bg-red-500/30 border border-red-500/30 text-red-200 transition-colors",children:[h.jsx(Yh,{className:"w-5 h-5"}),"Demolish Building"]})]})]}),ue&&h.jsxs("div",{className:"pointer-events-auto w-full max-w-4xl bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-white shadow-2xl mx-auto mt-20 sm:mt-24 max-h-[70vh] overflow-y-auto",children:[h.jsxs("div",{className:"flex items-center justify-between mb-3",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(Ma,{className:"w-5 h-5 text-amber-300"}),h.jsx("h3",{className:"text-lg font-bold",children:"Objectives"}),rn&&h.jsx("span",{className:"text-xs text-gray-300",children:"Loading save..."})]}),h.jsx("button",{onClick:()=>oe(!1),className:"text-gray-400 hover:text-white",children:h.jsx(os,{className:"w-5 h-5"})})]}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 mt-2",children:(S||[]).map(N=>{const L=ln(N),G=Fr(N),ie=N.complete,ce=N.claimed;return h.jsxs("div",{className:`p-3 rounded-xl border ${ie?"border-green-400/40 bg-green-900/20":"border-white/10 bg-white/5"} shadow-inner`,children:[h.jsxs("div",{className:"flex justify-between items-start",children:[h.jsxs("div",{children:[h.jsx("div",{className:"font-bold",children:N.title}),h.jsx("div",{className:"text-xs text-gray-300",children:N.description})]}),ie?h.jsx(Va,{className:"w-5 h-5 text-green-300"}):null]}),h.jsx("div",{className:"mt-2 h-2 bg-white/10 rounded-full overflow-hidden",children:h.jsx("div",{className:`h-full ${ie?"bg-green-400":"bg-blue-400"}`,style:{width:`${L*100}%`}})}),h.jsxs("div",{className:"text-[11px] text-gray-300 mt-1",children:["Progress: ",G]}),h.jsxs("div",{className:"flex items-center justify-between mt-2",children:[h.jsxs("div",{className:"flex items-center gap-1 text-xs text-amber-200",children:[h.jsx(Zh,{className:"w-3 h-3"}),Object.entries(N.reward||{}).map(([_e,ye])=>`${ye} ${_e[0].toUpperCase()}`).join(", ")]}),ie&&!ce&&h.jsx("button",{onClick:()=>F(N.id),className:"px-3 py-1 rounded-lg bg-green-600/60 hover:bg-green-600 text-sm font-semibold",children:"Claim"}),ce&&h.jsx("span",{className:"text-green-300 text-xs",children:"Claimed"})]})]},N.id)})})]}),h.jsxs("div",{className:"pointer-events-none w-full pb-4 flex flex-col gap-3",children:[h.jsx("div",{className:"pointer-events-auto fixed bottom-4 left-0 right-0 flex justify-center z-40 px-3 sm:px-0",children:h.jsxs("button",{onClick:()=>xe(N=>!N),className:`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold shadow-lg transition-colors w-full max-w-xs ${fe?"bg-yellow-500/20 border-yellow-300 text-yellow-100":"bg-black/70 border-white/10 text-white hover:bg-white/10"}`,children:[h.jsx(Jc,{className:"w-4 h-4"}),fe?"Close Build":"Build"]})}),fe&&h.jsxs("div",{className:"pointer-events-auto mx-auto w-full max-w-5xl bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-2xl mt-12 mb-16",children:[s&&i&&h.jsxs("div",{className:"mb-3 bg-yellow-500/15 border border-yellow-400/40 text-yellow-100 px-4 py-2 rounded-lg text-sm font-semibold",children:["Placing ",i,"... tap ground to confirm."]}),h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[320px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-white/20",children:Object.keys(yn||{}).map(N=>{const L=yn[N],G=qn[N]||[],ie=i===N,ce=Object.keys(L||{}).every(_e=>((n==null?void 0:n[_e])||0)>=((L==null?void 0:L[_e])||0));return h.jsxs("button",{onClick:()=>Fn(N),disabled:!ce,className:`
                      text-left flex flex-col gap-2 p-3 rounded-xl transition-all duration-200 border
                      ${ie?"bg-yellow-600/20 border-yellow-400/60 ring-2 ring-yellow-400/70 text-white":"bg-white/5 border-white/10 hover:bg-white/10 text-gray-200"}
                      ${ce?"active:scale-95":"opacity-50 cursor-not-allowed grayscale"}
                    `,children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{className:"capitalize font-bold text-base",children:N.replace(/([A-Z])/g," $1").trim()}),h.jsx("span",{className:"text-[11px] px-2 py-1 rounded-full bg-white/10 border border-white/10",children:ce?"Build":"Need resources"})]}),h.jsx("div",{className:"flex flex-wrap gap-2 text-xs text-gray-200",children:Object.entries(L||{}).map(([_e,ye])=>h.jsxs("span",{className:`px-2 py-1 rounded-full border ${((n==null?void 0:n[_e])||0)<ye?"border-red-400/60 text-red-200":"border-white/20 text-white"}`,children:[ye," ",_e]},_e))}),h.jsx("div",{className:"flex flex-col gap-1 text-xs text-gray-300",children:G&&G.length?G.map((_e,ye)=>h.jsxs("div",{className:"flex items-start gap-2",children:[h.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-white/40 mt-1"}),h.jsx("span",{children:_e})]},ye)):h.jsx("span",{className:"text-gray-400",children:"No special benefits."})})]},N)})})]})]})]})},Ti=({type:n,position:e,rotation:t=[0,0,0],ghost:r,opacity:s,transparent:i})=>{const a=te.useRef(null),c=te.useRef(null);return Kc(u=>{if(r||!a.current)return;const f=u.clock.elapsedTime;a.current.position.y=e[1]+Math.sin(f*(n==="chicken"?4:1))*.02,n==="chicken"&&c.current&&(c.current.rotation.x=Math.sin(f*8)>.8?.5:0),a.current.rotation.y=t[1]+Math.sin(f*.5)*.1}),n==="cow"?h.jsxs("group",{ref:a,position:e,rotation:t,children:[h.jsxs("mesh",{position:[0,.4,0],castShadow:!0,children:[h.jsx("boxGeometry",{args:[.6,.4,.4]}),h.jsx("meshStandardMaterial",{color:"#ffffff",transparent:i,opacity:s})]}),h.jsxs("mesh",{position:[.1,.4,.21],children:[h.jsx("boxGeometry",{args:[.2,.2,.01]}),h.jsx("meshStandardMaterial",{color:"#000000",transparent:i,opacity:s})]}),h.jsxs("mesh",{position:[-.15,.5,-.21],children:[h.jsx("boxGeometry",{args:[.2,.2,.01]}),h.jsx("meshStandardMaterial",{color:"#000000",transparent:i,opacity:s})]}),h.jsxs("mesh",{position:[.35,.5,0],castShadow:!0,children:[h.jsx("boxGeometry",{args:[.25,.25,.2]}),h.jsx("meshStandardMaterial",{color:"#ffffff",transparent:i,opacity:s})]}),[[-.2,.1,.15],[.2,.1,.15],[-.2,.1,-.15],[.2,.1,-.15]].map((u,f)=>h.jsxs("mesh",{position:u,castShadow:!0,children:[h.jsx("boxGeometry",{args:[.1,.2,.1]}),h.jsx("meshStandardMaterial",{color:"#ffffff",transparent:i,opacity:s})]},f))]}):h.jsxs("group",{ref:a,position:e,rotation:t,children:[h.jsxs("mesh",{position:[0,.15,0],castShadow:!0,children:[h.jsx("boxGeometry",{args:[.2,.2,.15]}),h.jsx("meshStandardMaterial",{color:"#ffffff",transparent:i,opacity:s})]}),h.jsxs("mesh",{ref:c,position:[.1,.25,0],castShadow:!0,children:[h.jsx("boxGeometry",{args:[.1,.1,.08]}),h.jsx("meshStandardMaterial",{color:"#ffffff",transparent:i,opacity:s})]}),h.jsxs("mesh",{position:[.1,.32,0],children:[h.jsx("boxGeometry",{args:[.05,.05,.02]}),h.jsx("meshStandardMaterial",{color:"#ef4444",transparent:i,opacity:s})]}),h.jsxs("mesh",{position:[.16,.24,0],children:[h.jsx("boxGeometry",{args:[.04,.03,.03]}),h.jsx("meshStandardMaterial",{color:"#fbbf24",transparent:i,opacity:s})]})]})},Wc=({type:n,level:e=1,selected:t,ghost:r,isValid:s=!0,onClick:i})=>{const a=te.useMemo(()=>{if(r&&!s)return"#ff0000";switch(n){case"cabin":return"#8B4513";case"farm":return"#DAA520";case"lumberMill":return"#556B2F";case"mine":return"#696969";case"warehouse":return"#A0522D";case"bakery":return"#d97706";case"well":return"#3b82f6";case"campfire":return"#f97316";case"watchtower":return"#9ca3af";case"fishery":return"#0ea5e9";default:return"#ffffff"}},[n,r,s]),c=r?.5:1,u=r;return h.jsxs("group",{onClick:i,children:[n==="barn"&&h.jsxs(h.Fragment,{children:[h.jsxs("mesh",{position:[0,1.5,0],castShadow:!0,receiveShadow:!0,children:[h.jsx("boxGeometry",{args:[3,3,2.5]}),h.jsx("meshStandardMaterial",{color:"#b45309",roughness:.7,transparent:u,opacity:c})]}),h.jsxs("mesh",{position:[0,1.6,1.3],castShadow:!0,children:[h.jsx("boxGeometry",{args:[2.8,.2,.2]}),h.jsx("meshStandardMaterial",{color:"#fbbf24",emissive:"#f59e0b",emissiveIntensity:r?0:.2,transparent:u,opacity:c})]}),h.jsxs("mesh",{position:[0,3,0],rotation:[0,0,Math.PI/10],castShadow:!0,children:[h.jsx("boxGeometry",{args:[3.4,.25,3]}),h.jsx("meshStandardMaterial",{color:"#78350f",roughness:.5,transparent:u,opacity:c})]}),h.jsxs("mesh",{position:[0,3.2,0],rotation:[0,Math.PI,-Math.PI/10],castShadow:!0,children:[h.jsx("boxGeometry",{args:[3.4,.25,3]}),h.jsx("meshStandardMaterial",{color:"#652b0b",roughness:.5,transparent:u,opacity:c})]}),h.jsxs("mesh",{position:[0,.8,1.31],castShadow:!0,children:[h.jsx("boxGeometry",{args:[1.2,1.6,.1]}),h.jsx("meshStandardMaterial",{color:"#f8fafc",transparent:u,opacity:c})]}),h.jsxs("mesh",{position:[0,1.6,1.32],castShadow:!0,children:[h.jsx("boxGeometry",{args:[.6,.4,.1]}),h.jsx("meshStandardMaterial",{color:"#e2e8f0",transparent:u,opacity:c})]}),h.jsxs("mesh",{position:[0,2.4,1.26],castShadow:!0,children:[h.jsx("boxGeometry",{args:[.7,.5,.1]}),h.jsx("meshStandardMaterial",{color:"#bfdbfe",emissive:"#60a5fa",emissiveIntensity:r?0:.5,transparent:u,opacity:c})]}),e>=2&&h.jsxs("mesh",{position:[2,1.5,-1],castShadow:!0,children:[h.jsx("cylinderGeometry",{args:[.5,.6,3,12]}),h.jsx("meshStandardMaterial",{color:"#d4d4d8",transparent:u,opacity:c})]}),e>=3&&h.jsxs("mesh",{position:[-2,1.7,1],castShadow:!0,children:[h.jsx("cylinderGeometry",{args:[.6,.7,3.4,12]}),h.jsx("meshStandardMaterial",{color:"#c084fc",emissive:"#a855f7",emissiveIntensity:r?0:.6,transparent:u,opacity:c})]})]}),n!=="farm"&&h.jsxs("mesh",{position:[0,1,0],castShadow:!0,receiveShadow:!0,children:[h.jsx("boxGeometry",{args:[2,2,2]}),h.jsx("meshStandardMaterial",{color:a,transparent:u,opacity:c})]}),n==="cabin"&&h.jsxs(h.Fragment,{children:[h.jsxs("mesh",{position:[0,1.2,0],castShadow:!0,receiveShadow:!0,children:[h.jsx("boxGeometry",{args:[2.2,1.6,2.2]}),h.jsx("meshStandardMaterial",{color:"#8b5a2b",roughness:.8,transparent:u,opacity:c})]}),h.jsxs("mesh",{position:[0,.6,1.11],castShadow:!0,children:[h.jsx("boxGeometry",{args:[.6,1,.1]}),h.jsx("meshStandardMaterial",{color:"#5b3314",transparent:u,opacity:c})]}),h.jsxs("mesh",{position:[-.9,1.1,0],castShadow:!0,children:[h.jsx("boxGeometry",{args:[.1,.6,.6]}),h.jsx("meshStandardMaterial",{color:"#93c5fd",emissive:"#60a5fa",emissiveIntensity:r?0:.4,transparent:u,opacity:c})]}),h.jsxs("mesh",{position:[.9,1.1,0],castShadow:!0,children:[h.jsx("boxGeometry",{args:[.1,.6,.6]}),h.jsx("meshStandardMaterial",{color:"#93c5fd",emissive:"#60a5fa",emissiveIntensity:r?0:.4,transparent:u,opacity:c})]}),h.jsxs("mesh",{position:[0,2.4,0],rotation:[0,0,Math.PI/9],castShadow:!0,children:[h.jsx("boxGeometry",{args:[2.4,.2,2.6]}),h.jsx("meshStandardMaterial",{color:"#4a3424",roughness:.6,transparent:u,opacity:c})]}),h.jsxs("mesh",{position:[0,2.6,0],rotation:[0,Math.PI,-Math.PI/9],castShadow:!0,children:[h.jsx("boxGeometry",{args:[2.4,.2,2.6]}),h.jsx("meshStandardMaterial",{color:"#3b2a1c",roughness:.6,transparent:u,opacity:c})]}),h.jsxs("mesh",{position:[.7,2.8,.7],castShadow:!0,children:[h.jsx("boxGeometry",{args:[.4,.8,.4]}),h.jsx("meshStandardMaterial",{color:"#9ca3af",roughness:.4,transparent:u,opacity:c})]})]}),n==="farm"&&h.jsxs(h.Fragment,{children:[h.jsxs("mesh",{position:[0,.1,0],rotation:[-Math.PI/2,0,0],receiveShadow:!0,children:[h.jsx("planeGeometry",{args:[3,3]}),h.jsx("meshStandardMaterial",{color:"#8b5a2b",transparent:u,opacity:c})]}),[-1,-.3,.4,1.1].map((f,p)=>h.jsxs("mesh",{position:[f,.25,0],receiveShadow:!0,castShadow:!0,children:[h.jsx("boxGeometry",{args:[.4,.2,2.6]}),h.jsx("meshStandardMaterial",{color:"#a16207",roughness:.9,transparent:u,opacity:c})]},p)),Array.from({length:8}).map((f,p)=>{const w=-1.2+p%4*.8,x=-1+Math.floor(p/4)*1.2;return h.jsxs("mesh",{position:[w,.65,x],castShadow:!0,children:[h.jsx("coneGeometry",{args:[.18,.7,6]}),h.jsx("meshStandardMaterial",{color:"#22c55e",emissive:"#16a34a",emissiveIntensity:r?0:.3,transparent:u,opacity:c})]},`crop-${p}`)}),!r&&h.jsxs(h.Fragment,{children:[h.jsx(Ti,{type:"cow",position:[-1,0,-1],rotation:[0,Math.PI/4,0],opacity:c,transparent:u}),h.jsx(Ti,{type:"chicken",position:[1,0,.5],rotation:[0,-Math.PI/2,0],opacity:c,transparent:u}),h.jsx(Ti,{type:"chicken",position:[.5,0,-.8],rotation:[0,Math.PI/3,0],opacity:c,transparent:u})]}),h.jsxs("mesh",{position:[0,1,1.4],castShadow:!0,children:[h.jsx("boxGeometry",{args:[1.4,1.2,.8]}),h.jsx("meshStandardMaterial",{color:"#b45309",roughness:.8,transparent:u,opacity:c})]}),h.jsxs("mesh",{position:[0,1.8,1.4],castShadow:!0,children:[h.jsx("boxGeometry",{args:[1.6,.3,1]}),h.jsx("meshStandardMaterial",{color:"#92400e",roughness:.7,transparent:u,opacity:c})]}),[[-1.6,-1.6],[1.6,-1.6],[-1.6,1.6],[1.6,1.6]].map(([f,p],w)=>h.jsxs("mesh",{position:[f,.6,p],castShadow:!0,children:[h.jsx("boxGeometry",{args:[.15,1.2,.15]}),h.jsx("meshStandardMaterial",{color:"#d97706",transparent:u,opacity:c})]},`fence-${w}`))]}),n==="mine"&&h.jsxs("mesh",{position:[.8,.5,.8],castShadow:!0,children:[h.jsx("boxGeometry",{args:[1,1,1]}),h.jsx("meshStandardMaterial",{color:"#2F2F2F",transparent:u,opacity:c})]}),n==="lumberMill"&&h.jsxs("mesh",{position:[0,2.2,0],rotation:[0,0,Math.PI/2],castShadow:!0,children:[h.jsx("cylinderGeometry",{args:[.8,.8,2.2,8]}),h.jsx("meshStandardMaterial",{color:"#DEB887",transparent:u,opacity:c})]}),n==="bakery"&&h.jsxs(h.Fragment,{children:[h.jsxs("mesh",{position:[0,2.3,0],castShadow:!0,children:[h.jsx("cylinderGeometry",{args:[.9,.9,1.2,12]}),h.jsx("meshStandardMaterial",{color:"#fbbf24",transparent:u,opacity:c})]}),h.jsxs("mesh",{position:[.6,2.9,0],castShadow:!0,children:[h.jsx("coneGeometry",{args:[.4,.6,6]}),h.jsx("meshStandardMaterial",{color:"#7c2d12",transparent:u,opacity:c})]})]}),n==="well"&&h.jsxs(h.Fragment,{children:[h.jsxs("mesh",{position:[0,1.1,0],castShadow:!0,children:[h.jsx("cylinderGeometry",{args:[.9,.9,1.2,16]}),h.jsx("meshStandardMaterial",{color:"#60a5fa",transparent:u,opacity:c})]}),h.jsxs("mesh",{position:[0,1.7,0],castShadow:!0,children:[h.jsx("torusGeometry",{args:[.8,.12,8,24]}),h.jsx("meshStandardMaterial",{color:"#1d4ed8",transparent:u,opacity:c})]}),h.jsxs("mesh",{position:[0,2.3,0],castShadow:!0,children:[h.jsx("cylinderGeometry",{args:[.12,.12,.8,8]}),h.jsx("meshStandardMaterial",{color:"#9ca3af",transparent:u,opacity:c})]})]}),n==="campfire"&&h.jsxs(h.Fragment,{children:[h.jsxs("mesh",{position:[0,.8,0],castShadow:!0,children:[h.jsx("cylinderGeometry",{args:[.6,.7,.4,10]}),h.jsx("meshStandardMaterial",{color:"#92400e",transparent:u,opacity:c})]}),h.jsxs("mesh",{position:[0,1.1,0],children:[h.jsx("coneGeometry",{args:[.5,.6,10]}),h.jsx("meshStandardMaterial",{color:"#f97316",emissive:"#fb923c",emissiveIntensity:r?0:1.2,transparent:u,opacity:c})]}),h.jsxs("mesh",{position:[0,.5,0],rotation:[Math.PI/2,0,0],children:[h.jsx("torusGeometry",{args:[1,.1,8,24]}),h.jsx("meshStandardMaterial",{color:"#57534e",transparent:u,opacity:c})]})]}),n==="watchtower"&&h.jsxs(h.Fragment,{children:[h.jsxs("mesh",{position:[0,2,0],castShadow:!0,children:[h.jsx("cylinderGeometry",{args:[.7,.7,4,8]}),h.jsx("meshStandardMaterial",{color:"#9ca3af",transparent:u,opacity:c})]}),h.jsxs("mesh",{position:[0,4.2,0],castShadow:!0,children:[h.jsx("boxGeometry",{args:[2.2,.4,2.2]}),h.jsx("meshStandardMaterial",{color:"#4b5563",transparent:u,opacity:c})]}),h.jsxs("mesh",{position:[0,4.8,0],castShadow:!0,children:[h.jsx("coneGeometry",{args:[1.6,1,6]}),h.jsx("meshStandardMaterial",{color:"#1f2937",transparent:u,opacity:c})]}),h.jsxs("mesh",{position:[1,1.2,1],rotation:[0,0,Math.PI/2],children:[h.jsx("boxGeometry",{args:[.2,2,.5]}),h.jsx("meshStandardMaterial",{color:"#d1d5db",transparent:u,opacity:c})]})]}),n==="fishery"&&h.jsxs("group",{children:[h.jsxs("mesh",{position:[0,1,0],castShadow:!0,children:[h.jsx("boxGeometry",{args:[2.5,1.6,2]}),h.jsx("meshStandardMaterial",{color:"#0ea5e9",transparent:u,opacity:c})]}),h.jsxs("mesh",{position:[0,2.3,0],castShadow:!0,children:[h.jsx("boxGeometry",{args:[2.7,.4,2.2]}),h.jsx("meshStandardMaterial",{color:"#075985",transparent:u,opacity:c})]}),h.jsxs("mesh",{position:[1.6,.5,0],castShadow:!0,children:[h.jsx("boxGeometry",{args:[1.5,.3,1]}),h.jsx("meshStandardMaterial",{color:"#7c3aed",transparent:u,opacity:c})]}),h.jsxs("mesh",{position:[0,.2,0],rotation:[-Math.PI/2,0,0],children:[h.jsx("planeGeometry",{args:[3,3]}),h.jsx("meshStandardMaterial",{color:"#38bdf8",transparent:!0,opacity:.3})]})]}),n==="tradingPost"&&h.jsxs("group",{children:[h.jsxs("mesh",{position:[0,1,0],castShadow:!0,children:[h.jsx("boxGeometry",{args:[2.5,1.5,1.5]}),h.jsx("meshStandardMaterial",{color:"#78350f",transparent:u,opacity:c})]}),h.jsxs("mesh",{position:[0,.8,1],castShadow:!0,children:[h.jsx("boxGeometry",{args:[2.5,.8,.5]}),h.jsx("meshStandardMaterial",{color:"#b45309",transparent:u,opacity:c})]}),h.jsxs("mesh",{position:[0,2.2,.5],rotation:[Math.PI/6,0,0],castShadow:!0,children:[h.jsx("boxGeometry",{args:[2.8,.2,2.5]}),h.jsx("meshStandardMaterial",{color:"#ef4444",transparent:u,opacity:c})]}),h.jsxs("mesh",{position:[-.8,.4,1.4],castShadow:!0,children:[h.jsx("boxGeometry",{args:[.5,.5,.5]}),h.jsx("meshStandardMaterial",{color:"#d97706",transparent:u,opacity:c})]}),h.jsxs("mesh",{position:[.8,.4,1.4],castShadow:!0,children:[h.jsx("boxGeometry",{args:[.5,.5,.5]}),h.jsx("meshStandardMaterial",{color:"#fcd34d",transparent:u,opacity:c})]})]}),t&&!r&&h.jsxs("mesh",{position:[0,.1,0],rotation:[-Math.PI/2,0,0],children:[h.jsx("ringGeometry",{args:[1.5,1.7,32]}),h.jsx("meshBasicMaterial",{color:"#00ff00"})]}),!r&&h.jsx(Tn,{position:[0,3,0],center:!0,distanceFactor:15,children:h.jsxs("div",{className:"bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm whitespace-nowrap",children:["Lvl ",e]})})]})},g0=({id:n,position:e,scale:t=1})=>{const{addResource:r,removeNature:s,isBuilding:i,season:a}=kt(),[c,u]=te.useState(!1),[f,p]=te.useState(0),[w,x]=te.useState(0),A=()=>{switch(a){case"spring":return c?"#2e8b2e":"#228B22";case"summer":return c?"#008000":"#006400";case"autumn":return c?"#CD853F":"#D2691E";case"winter":return c?"#F0FFFF":"#E0FFFF";default:return c?"#2e8b2e":"#228B22"}},k=C=>{C.stopPropagation(),r("wood",10),p(Date.now());const P=w+1;x(P),P>=5&&s(n)};return h.jsxs("group",{position:e,scale:[t*(c?1.1:1),t*(c?1.1:1),t*(c?1.1:1)],onPointerOver:()=>u(!0),onPointerOut:()=>u(!1),onClick:k,children:[h.jsxs("mesh",{position:[0,.75,0],castShadow:!0,children:[h.jsx("cylinderGeometry",{args:[.2,.3,1.5,6]}),h.jsx("meshStandardMaterial",{color:c?"#6d4c3d":"#5C4033"})]}),h.jsxs("mesh",{position:[0,2,0],castShadow:!0,children:[h.jsx("coneGeometry",{args:[1,2,8]}),h.jsx("meshStandardMaterial",{color:A()})]}),h.jsxs("mesh",{position:[0,3,0],castShadow:!0,children:[h.jsx("coneGeometry",{args:[.8,1.5,8]}),h.jsx("meshStandardMaterial",{color:A()})]}),c&&!i&&h.jsx(Tn,{position:[0,4,0],center:!0,distanceFactor:10,children:h.jsxs("div",{className:"bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm whitespace-nowrap pointer-events-none flex flex-col items-center",children:[h.jsx("span",{children:"Gather Wood (+10)"}),h.jsxs("span",{className:"text-[10px] text-gray-300",children:["(",5-w," more to clear)"]})]})}),Date.now()-f<1e3&&h.jsx(Tn,{position:[0,2,0],center:!0,distanceFactor:10,zIndexRange:[100,0],children:h.jsx("div",{className:"text-green-400 font-bold text-sm animate-bounce pointer-events-none",children:"+10 Wood"})})]})},_0=({id:n,position:e,scale:t=1})=>{const{addResource:r,removeNature:s,isBuilding:i,season:a}=kt(),[c,u]=te.useState(!1),[f,p]=te.useState(0),[w,x]=te.useState(0),A=()=>a==="winter"?c?"#cbd5e1":"#e2e8f0":a==="autumn"?c?"#b0a18f":"#8b7c6a":c?"#9ca3af":"#6b7280",k=C=>{C.stopPropagation(),r("stone",5),Math.random()>.7&&r("iron",2),p(Date.now());const P=w+1;x(P),P>=5&&s(n)};return h.jsxs("group",{position:e,scale:[t*(c?1.1:1),t*(c?1.1:1),t*(c?1.1:1)],rotation:[0,Math.random()*Math.PI,0],onPointerOver:()=>u(!0),onPointerOut:()=>u(!1),onClick:k,children:[h.jsxs("mesh",{castShadow:!0,receiveShadow:!0,children:[h.jsx("dodecahedronGeometry",{args:[.8,0]}),h.jsx("meshStandardMaterial",{color:A(),flatShading:!0})]}),c&&!i&&h.jsx(Tn,{position:[0,1.5,0],center:!0,distanceFactor:10,children:h.jsxs("div",{className:"bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm whitespace-nowrap pointer-events-none flex flex-col items-center",children:[h.jsx("span",{children:"Gather Stone (+5)"}),h.jsxs("span",{className:"text-[10px] text-gray-300",children:["(",5-w," more to clear)"]})]})}),Date.now()-f<1e3&&h.jsx(Tn,{position:[0,1,0],center:!0,distanceFactor:10,zIndexRange:[100,0],children:h.jsx("div",{className:"text-gray-300 font-bold text-sm animate-bounce pointer-events-none",children:"+5 Stone"})})]})},y0=()=>{const n=kt(e=>e.nature);return h.jsx("group",{children:(n||[]).map(e=>e.type==="tree"?h.jsx(g0,{id:e.id,position:e.position,scale:e.scale},e.id):h.jsx(_0,{id:e.id,position:e.position,scale:e.scale},e.id))})},v0=({settler:n})=>{var w;const e=te.useRef(null),t=te.useRef(null),r=te.useRef(null),s=te.useRef(null),i=te.useRef(null),a=te.useRef(null),c=te.useMemo(()=>{const x=n.id.split("").reduce((P,V)=>P+V.charCodeAt(0),0),A=["#3b82f6","#ef4444","#10b981","#f59e0b","#6366f1","#8b5cf6"],k=["#1e40af","#991b1b","#065f46","#92400e","#3730a3","#5b21b6"],C=["#452721","#241c11","#e6be8a","#6a4e32"];return{shirt:A[x%A.length],pants:k[x%k.length],hair:C[x%C.length],skin:"#ffdbac"}},[n.id]),u=(w=n.traits)!=null&&w.some(x=>x.type==="strong")?1.1:1,f=te.useRef(new Ca(...n.position)),p=new Ca;return Kc(x=>{if(!e.current)return;const A=x.clock.elapsedTime;if(p.set(n.position[0],n.position[1],n.position[2]),f.current.lerp(p,.1),e.current.position.copy(f.current),n.state==="walking"&&n.targetPosition){const k=n.targetPosition[0]-n.position[0],C=n.targetPosition[2]-n.position[2],P=Math.atan2(k,C),V=e.current.rotation.y;let O=P-V;for(;O<-Math.PI;)O+=Math.PI*2;for(;O>Math.PI;)O-=Math.PI*2;e.current.rotation.y=V+O*.1}n.state==="walking"?(i.current&&(i.current.rotation.x=Math.sin(A*10)*.5),a.current&&(a.current.rotation.x=Math.sin(A*10+Math.PI)*.5),r.current&&(r.current.rotation.x=Math.sin(A*10+Math.PI)*.5),s.current&&(s.current.rotation.x=Math.sin(A*10)*.5),t.current&&(t.current.position.y=Math.abs(Math.sin(A*10))*.05)):n.state==="working"?(s.current&&(s.current.rotation.x=-Math.PI/4+Math.sin(A*8)*.5),r.current&&(r.current.rotation.x=-Math.PI/6),t.current&&(t.current.position.y=Math.sin(A*8)*.02)):(i.current&&(i.current.rotation.x=ss.lerp(i.current.rotation.x,0,.1)),a.current&&(a.current.rotation.x=ss.lerp(a.current.rotation.x,0,.1)),r.current&&(r.current.rotation.x=ss.lerp(r.current.rotation.x,0,.1)),s.current&&(s.current.rotation.x=ss.lerp(s.current.rotation.x,0,.1)),t.current&&(t.current.position.y=Math.sin(A*2)*.01))}),h.jsxs("group",{ref:e,scale:[u,u,u],children:[h.jsxs("group",{ref:t,children:[h.jsxs("mesh",{position:[0,.5,0],castShadow:!0,children:[h.jsx("boxGeometry",{args:[.3,.45,.2]}),h.jsx("meshStandardMaterial",{color:c.shirt})]}),h.jsxs("mesh",{position:[0,.85,0],castShadow:!0,children:[h.jsx("boxGeometry",{args:[.25,.25,.25]}),h.jsx("meshStandardMaterial",{color:c.skin})]}),h.jsxs("mesh",{position:[0,.95,0],castShadow:!0,children:[h.jsx("boxGeometry",{args:[.28,.1,.28]}),h.jsx("meshStandardMaterial",{color:c.hair})]}),h.jsxs("mesh",{ref:r,position:[-.2,.6,0],castShadow:!0,children:[h.jsx("boxGeometry",{args:[.1,.35,.1]}),h.jsx("meshStandardMaterial",{color:c.shirt})]}),h.jsxs("mesh",{ref:s,position:[.2,.6,0],castShadow:!0,children:[h.jsx("boxGeometry",{args:[.1,.35,.1]}),h.jsx("meshStandardMaterial",{color:c.shirt})]})]}),h.jsxs("mesh",{ref:i,position:[-.1,.2,0],castShadow:!0,children:[h.jsx("boxGeometry",{args:[.12,.4,.12]}),h.jsx("meshStandardMaterial",{color:c.pants})]}),h.jsxs("mesh",{ref:a,position:[.1,.2,0],castShadow:!0,children:[h.jsx("boxGeometry",{args:[.12,.4,.12]}),h.jsx("meshStandardMaterial",{color:c.pants})]}),h.jsx(Tn,{position:[0,1.3,0],center:!0,distanceFactor:10,children:h.jsx("div",{className:"bg-black/50 text-white text-[10px] px-1 rounded backdrop-blur-sm whitespace-nowrap pointer-events-none select-none",children:n.name})}),h.jsxs("mesh",{position:[0,.01,0],rotation:[-Math.PI/2,0,0],children:[h.jsx("circleGeometry",{args:[.25,16]}),h.jsx("meshBasicMaterial",{color:"black",opacity:.3,transparent:!0})]})]})},w0=()=>{const{buildings:n,nature:e,selectedBuilding:t,selectedBuildingId:r,isBuilding:s,addBuilding:i,selectBuildingId:a,setSelectedBuilding:c,season:u,settlers:f}=kt(),[p,w]=te.useState(null),[x,A]=te.useState(!0),k=2,C=()=>{switch(u){case"spring":return"#5C8C46";case"summer":return"#4A7036";case"autumn":return"#8B7355";case"winter":return"#F0F8FF";default:return"#5C8C46"}},P=F=>{if((n||[]).some(I=>I.position[0]===F[0]&&I.position[2]===F[2]))return!0;const J=F[0]-.8,E=F[0]+.8,g=F[2]-.8,_=F[2]+.8;return(e||[]).some(I=>I.position[0]>J&&I.position[0]<E&&I.position[2]>g&&I.position[2]<_)},V=F=>{if(!s||!t){p&&w(null);return}const K=Math.round(F.point.x/k)*k,J=Math.round(F.point.z/k)*k,E=[K,0,J];(!p||p[0]!==K||p[2]!==J)&&(w(E),A(!P(E)))},O=F=>{s&&t&&p?(F.stopPropagation(),x&&i(t,p)):(a(null),c(null))},S=(F,K)=>{s||(F.stopPropagation(),a(K))};return h.jsxs("group",{children:[h.jsx(y0,{}),h.jsxs("mesh",{rotation:[-Math.PI/2,0,0],position:[0,-.1,0],receiveShadow:!0,onPointerMove:V,onClick:O,children:[h.jsx("planeGeometry",{args:[100,100]}),h.jsx("meshStandardMaterial",{color:C()})]}),h.jsx("gridHelper",{args:[100,50,16777215,16777215],position:[0,.01,0],"material-opacity":.2,"material-transparent":!0}),(n||[]).map(F=>h.jsx("group",{position:F.position,children:h.jsx(Wc,{type:F.type,level:F.level,selected:r===F.id,onClick:K=>S(K,F.id)})},F.id)),(f||[]).map(F=>h.jsx(v0,{settler:F},F.id)),s&&t&&p&&h.jsx("group",{position:p,children:h.jsx(Wc,{type:t,ghost:!0,isValid:x})})]})},E0=()=>{const n=kt(t=>t.tick),e=kt(t=>t.tickRate);return te.useEffect(()=>{const t=setInterval(()=>{n()},e);return()=>clearInterval(t)},[n,e]),null},I0=()=>{const{day:n,weather:e}=kt(),t=te.useRef(null),r=n%1,s=[Math.sin(r*Math.PI*2)*100,Math.cos(r*Math.PI*2+Math.PI)*100,20],i=s[1]/100;let a=Math.max(0,i);e!=="sunny"&&(a*=.5);const c=Math.max(.1,a*.5);let u=a>.2?"#87CEEB":"#050510";return e==="rain"&&(u="#708090"),e==="snow"&&(u="#E0FFFF"),e!=="sunny"&&a<.2&&(u="#050510"),h.jsxs(h.Fragment,{children:[h.jsx(Ph,{sunPosition:s,turbidity:e!=="sunny"?10:.5,rayleigh:e!=="sunny"?.1:.5+(1-a)*.5,mieCoefficient:.005,mieDirectionalG:.7}),a<.2&&e==="sunny"&&h.jsx(kh,{radius:100,depth:50,count:5e3,factor:4,saturation:0,fade:!0,speed:1}),a<.3&&e==="sunny"&&h.jsx(li,{count:100,scale:50,size:4,speed:.4,opacity:.7,color:"#ffff00",position:[0,5,0]}),e==="rain"&&h.jsxs(h.Fragment,{children:[h.jsx(li,{count:2e3,scale:[50,20,50],size:2,speed:2,opacity:.6,color:"#aaaaaa",position:[0,10,0]}),h.jsx(is,{position:[-10,15,-10],opacity:.5,speed:.2}),h.jsx(is,{position:[10,15,10],opacity:.5,speed:.2})]}),e==="snow"&&h.jsxs(h.Fragment,{children:[h.jsx(li,{count:2e3,scale:[50,20,50],size:4,speed:.5,opacity:.8,color:"#ffffff",position:[0,10,0]}),h.jsx(is,{position:[-10,15,-10],opacity:.3,speed:.1,color:"#ffffff"}),h.jsx(is,{position:[10,15,10],opacity:.3,speed:.1,color:"#ffffff"})]}),h.jsx(Ch,{preset:e==="sunny"?"forest":"city",background:!1}),h.jsx("ambientLight",{intensity:c,color:e==="snow"?"#E0FFFF":a<.2?"#1a1a2e":"#ffffff"}),h.jsx("directionalLight",{ref:t,position:s,intensity:a*2,castShadow:!0,"shadow-mapSize":[2048,2048],"shadow-bias":-1e-4,children:h.jsx("orthographicCamera",{attach:"shadow-camera",args:[-50,50,50,-50]})}),h.jsx("fog",{attach:"fog",args:[u,10,80]})]})};function T0(){return h.jsxs("div",{className:"relative w-full h-full bg-slate-900 touch-none",children:[h.jsx(E0,{}),h.jsx(Nh,{shadows:!0,camera:{position:[20,20,20],fov:50},dpr:[1,2],gl:{antialias:!1},children:h.jsxs(te.Suspense,{fallback:h.jsxs("mesh",{position:[0,0,0],children:[h.jsx("boxGeometry",{args:[1,1,1]}),h.jsx("meshStandardMaterial",{color:"orange",wireframe:!0})]}),children:[h.jsx(I0,{}),h.jsx(w0,{}),h.jsx(Mh,{makeDefault:!0,maxPolarAngle:Math.PI/2.2,minDistance:10,maxDistance:80,enableDamping:!0,dampingFactor:.05}),h.jsxs(rd,{children:[h.jsx(sd,{luminanceThreshold:1,mipmapBlur:!0,intensity:.5}),h.jsx(id,{}),h.jsx(od,{eskil:!1,offset:.1,darkness:.5})]})]})}),h.jsx(p0,{})]})}console.log("Homestead Survival: Initializing...");console.log("Three.js Revision:",Dh);class b0 extends Qc.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){console.error("Uncaught error:",e,t)}render(){var e;return this.state.hasError?h.jsxs("div",{className:"flex flex-col items-center justify-center h-screen bg-slate-900 text-white p-4",children:[h.jsx("h1",{className:"text-2xl font-bold text-red-500 mb-4",children:"Something went wrong"}),h.jsx("pre",{className:"bg-black/50 p-4 rounded text-sm overflow-auto max-w-full",children:(e=this.state.error)==null?void 0:e.toString()}),h.jsx("button",{onClick:()=>window.location.reload(),className:"mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700",children:"Reload Game"})]}):this.props.children}}Vh.createRoot(document.getElementById("root")).render(h.jsx(Qc.StrictMode,{children:h.jsx(b0,{children:h.jsx(T0,{})})}));
