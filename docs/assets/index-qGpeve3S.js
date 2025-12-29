import{r as ce,z as d,I as un,w as ph,J as mh,K as gh,Q as Xs,X as qr,Y as _h,Z as yh,_ as vh,p as wh,R as kl,$ as Eh}from"./vendor-CvYXfu-e.js";import{c as Ih,P as Th,U as bh,S as Ah,a as Sh,C as Rh,b as xh,d as Ph,e as Ch,f as kh,L as Nh,g as Dh,h as Vh,R as Mh,X as Oh,A as Lh,T as jh,i as Fh,j as Uh,G as Bh,H as Nl,M as $h,W as qh,k as Gh,E as zh,B as Hh,l as Wh,V as Kh}from"./game-BYg1X12H.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const Qh={};function Jh(n,e){let t;try{t=n()}catch{return}return{getItem:s=>{var o;const a=u=>u===null?null:JSON.parse(u,void 0),l=(o=t.getItem(s))!=null?o:null;return l instanceof Promise?l.then(a):a(l)},setItem:(s,o)=>t.setItem(s,JSON.stringify(o,void 0)),removeItem:s=>t.removeItem(s)}}const Zn=n=>e=>{try{const t=n(e);return t instanceof Promise?t:{then(r){return Zn(r)(t)},catch(r){return this}}}catch(t){return{then(r){return this},catch(r){return Zn(r)(t)}}}},Xh=(n,e)=>(t,r,s)=>{let o={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:x=>x,version:0,merge:(x,F)=>({...F,...x}),...e},a=!1;const l=new Set,u=new Set;let f;try{f=o.getStorage()}catch{}if(!f)return n((...x)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),t(...x)},r,s);const m=Zn(o.serialize),I=()=>{const x=o.partialize({...r()});let F;const V=m({state:x,version:o.version}).then(q=>f.setItem(o.name,q)).catch(q=>{F=q});if(F)throw F;return V},A=s.setState;s.setState=(x,F)=>{A(x,F),I()};const R=n((...x)=>{t(...x),I()},r,s);let P;const N=()=>{var x;if(!f)return;a=!1,l.forEach(V=>V(r()));const F=((x=o.onRehydrateStorage)==null?void 0:x.call(o,r()))||void 0;return Zn(f.getItem.bind(f))(o.name).then(V=>{if(V)return o.deserialize(V)}).then(V=>{if(V)if(typeof V.version=="number"&&V.version!==o.version){if(o.migrate)return o.migrate(V.state,V.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return V.state}).then(V=>{var q;return P=o.merge(V,(q=r())!=null?q:R),t(P,!0),I()}).then(()=>{F==null||F(P,void 0),a=!0,u.forEach(V=>V(P))}).catch(V=>{F==null||F(void 0,V)})};return s.persist={setOptions:x=>{o={...o,...x},x.getStorage&&(f=x.getStorage())},clearStorage:()=>{f==null||f.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>N(),hasHydrated:()=>a,onHydrate:x=>(l.add(x),()=>{l.delete(x)}),onFinishHydration:x=>(u.add(x),()=>{u.delete(x)})},N(),P||R},Yh=(n,e)=>(t,r,s)=>{let o={storage:Jh(()=>localStorage),partialize:N=>N,version:0,merge:(N,x)=>({...x,...N}),...e},a=!1;const l=new Set,u=new Set;let f=o.storage;if(!f)return n((...N)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),t(...N)},r,s);const m=()=>{const N=o.partialize({...r()});return f.setItem(o.name,{state:N,version:o.version})},I=s.setState;s.setState=(N,x)=>{I(N,x),m()};const A=n((...N)=>{t(...N),m()},r,s);s.getInitialState=()=>A;let R;const P=()=>{var N,x;if(!f)return;a=!1,l.forEach(V=>{var q;return V((q=r())!=null?q:A)});const F=((x=o.onRehydrateStorage)==null?void 0:x.call(o,(N=r())!=null?N:A))||void 0;return Zn(f.getItem.bind(f))(o.name).then(V=>{if(V)if(typeof V.version=="number"&&V.version!==o.version){if(o.migrate)return[!0,o.migrate(V.state,V.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,V.state];return[!1,void 0]}).then(V=>{var q;const[U,re]=V;if(R=o.merge(re,(q=r())!=null?q:A),t(R,!0),U)return m()}).then(()=>{F==null||F(R,void 0),R=r(),a=!0,u.forEach(V=>V(R))}).catch(V=>{F==null||F(void 0,V)})};return s.persist={setOptions:N=>{o={...o,...N},N.storage&&(f=N.storage)},clearStorage:()=>{f==null||f.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>P(),hasHydrated:()=>a,onHydrate:N=>(l.add(N),()=>{l.delete(N)}),onFinishHydration:N=>(u.add(N),()=>{u.delete(N)})},o.skipHydration||P(),R||A},Zh=(n,e)=>"getStorage"in e||"serialize"in e||"deserialize"in e?((Qh?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),Xh(n,e)):Yh(n,e),ed=Zh,sn={barn:{wood:120,stone:60},cabin:{wood:10},farm:{wood:20,stone:5},lumberMill:{wood:50,stone:10},mine:{wood:100,stone:50},warehouse:{wood:100,stone:20},bakery:{wood:60,stone:20},well:{wood:30,stone:40},campfire:{wood:30,stone:5},watchtower:{wood:80,stone:30},fishery:{wood:40,stone:10}},Ve={barn:{housing:2,storage:100,happiness:.5},cabin:{housing:4},farm:{workers:1},lumberMill:{workers:2},mine:{workers:3},warehouse:{storage:200},bakery:{workers:2,happiness:.4},well:{happiness:.6},campfire:{housing:1,happiness:1.2},watchtower:{workers:1,happiness:.2},fishery:{workers:1}},Dl={barn:{},cabin:{},farm:{food:5},lumberMill:{wood:5},mine:{stone:2,iron:1},warehouse:{},bakery:{food:8},well:{},campfire:{},watchtower:{},fishery:{food:6}},Ue=()=>Math.random().toString(36).substr(2,9),Tt=Ih()(ed((n,e)=>({resources:{wood:100,food:50,stone:0,iron:0},settlers:[{id:"settler-1",name:"John",position:[0,0,0],targetPosition:null,state:"idle",actionTimer:0},{id:"settler-2",name:"Jane",position:[2,0,2],targetPosition:null,state:"idle",actionTimer:0}],happiness:100,buildings:[{id:"barn-main",type:"barn",position:[0,0,0],level:1,lastCollected:Date.now()}],nature:(()=>{const t=[];for(let r=0;r<40;r++){const s=Math.random()*Math.PI*2,o=15+Math.random()*30,a=Math.cos(s)*o,l=Math.sin(s)*o,u=Math.random()>.3?"tree":"rock",f=.8+Math.random()*.5;t.push({id:`nature-${r}`,position:[a,0,l],type:u,scale:f})}return t})(),logs:[],weather:"sunny",season:"spring",selectedBuilding:null,selectedBuildingId:null,isBuilding:!1,tickRate:1e3,day:1,objectives:[{id:"obj-wood",title:"Gatherer",description:"Stockpile 150 wood to prove the village can build.",goal:{type:"resource",key:"wood",amount:150},reward:{food:40},complete:!1,claimed:!1},{id:"obj-farm",title:"First Harvest",description:"Build a farm to secure food.",goal:{type:"building",key:"farm",amount:1},reward:{wood:60,food:30},complete:!1,claimed:!1},{id:"obj-pop",title:"New Neighbors",description:"Reach 6 settlers in your homestead.",goal:{type:"population",amount:6},reward:{stone:50,food:50},complete:!1,claimed:!1},{id:"obj-happy",title:"Joyous Village",description:"Raise happiness to 85% or higher.",goal:{type:"happiness",amount:85},reward:{wood:80,iron:20},complete:!1,claimed:!1}],addLog:(t,r="info")=>{n(s=>({logs:[{id:Ue(),message:t,timestamp:Date.now(),type:r},...s.logs].slice(0,20)}))},addResource:(t,r)=>n(s=>{const l=100+s.buildings.reduce((m,I)=>m+(Ve[I.type].storage||0)*I.level,0),u=s.resources[t],f=Math.min(u+r,l);return{resources:{...s.resources,[t]:f}}}),removeResource:(t,r)=>e().resources[t]>=r?(n(o=>({resources:{...o.resources,[t]:o.resources[t]-r}})),!0):!1,removeNature:t=>{const r=e(),s=r.nature.find(o=>o.id===t);s&&(r.addLog(`Cleared ${s.type}`,"info"),n(o=>({nature:o.nature.filter(a=>a.id!==t)})))},addBuilding:(t,r)=>{const s=e();if(t==="barn"){s.addLog("The Barn already anchors your homestead and cannot be placed again.","warning");return}const o=s.buildings.some(P=>P.position[0]===r[0]&&P.position[2]===r[2]),a=r[0]-.8,l=r[0]+.8,u=r[2]-.8,f=r[2]+.8,m=s.nature.some(P=>P.position[0]>a&&P.position[0]<l&&P.position[2]>u&&P.position[2]<f);if(o||m){s.addLog("Cannot build here!","warning");return}const I=sn[t],A=Ve[t];let R=!0;if(Object.keys(I).forEach(P=>{(s.resources[P]||0)<(I[P]||0)&&(R=!1)}),!R){s.addLog("Not enough resources!","warning");return}if(A.workers){const P=s.buildings.reduce((N,x)=>N+(Ve[x.type].workers||0),0);if(s.settlers.length-P<A.workers){R=!1,s.addLog("Not enough workers!","warning");return}}R&&(Object.keys(I).forEach(P=>{s.removeResource(P,I[P]||0)}),n(P=>({buildings:[...P.buildings,{id:Ue(),type:t,position:r,level:1,lastCollected:Date.now()}],isBuilding:!1,selectedBuilding:null})),s.addLog(`Built ${t}!`,"success"))},upgradeBuilding:t=>{const r=e(),s=r.buildings.find(u=>u.id===t);if(!s)return;const o=sn[s.type],a=s.level+1;let l=!0;Object.keys(o).forEach(u=>{const f=(o[u]||0)*a;(r.resources[u]||0)<f&&(l=!1)}),l?(Object.keys(o).forEach(u=>{const f=(o[u]||0)*a;r.removeResource(u,f)}),n(u=>({buildings:u.buildings.map(f=>f.id===t?{...f,level:f.level+1}:f)})),r.addLog(`Upgraded ${s.type} to level ${s.level+1}`,"success")):r.addLog("Not enough resources to upgrade!","warning")},demolishBuilding:t=>{const r=e(),s=r.buildings.find(o=>o.id===t);if((s==null?void 0:s.type)==="barn"){r.addLog("The Barn is the heart of the homestead and cannot be demolished.","warning");return}if(s){r.addLog(`Demolished ${s.type}`,"danger");const o=r.settlers.map(a=>a.job===t?{...a,job:void 0,state:"idle"}:a.home===t?{...a,home:void 0}:a);n(a=>({buildings:a.buildings.filter(l=>l.id!==t),settlers:o,selectedBuildingId:null}))}},assignWorker:t=>{const r=e(),s=r.buildings.find(u=>u.id===t);if(!s)return;const o=Ve[s.type];if(!o.workers){r.addLog(`${s.type} does not require workers.`,"warning");return}if(r.settlers.filter(u=>u.job===t).length>=(o.workers||0)){r.addLog(`${s.type} is fully staffed.`,"warning");return}const l=r.settlers.find(u=>!u.job);l?(n(u=>({settlers:u.settlers.map(f=>f.id===l.id?{...f,job:t,state:"walking",targetPosition:s.position}:f)})),r.addLog(`${l.name} assigned to ${s.type}.`,"success")):r.addLog("No unemployed settlers available.","warning")},unassignWorker:t=>{const r=e(),s=r.settlers.find(o=>o.job===t);s&&(n(o=>({settlers:o.settlers.map(a=>a.id===s.id?{...a,job:void 0,state:"idle"}:a)})),r.addLog(`${s.name} unassigned from job.`,"info"))},setSelectedBuilding:t=>n({selectedBuilding:t,isBuilding:!!t,selectedBuildingId:null}),selectBuildingId:t=>n({selectedBuildingId:t,selectedBuilding:null,isBuilding:!1}),setTickRate:t=>{const r=Math.min(2e3,Math.max(300,t));n({tickRate:r})},celebrateFestival:()=>{const t=e(),r=30,s=40;if(t.resources.wood<r||t.resources.food<s){t.addLog("Not enough supplies for a festival!","warning");return}n(o=>({resources:{...o.resources,wood:o.resources.wood-r,food:o.resources.food-s},happiness:Math.min(100,o.happiness+15)})),t.addLog("You held a lively festival! Happiness soared.","success")},sendExpedition:()=>{const t=e(),r=25,s=15;if(t.resources.food<r||t.resources.wood<s){t.addLog("Not enough supplies to send an expedition.","warning");return}n(l=>({resources:{...l.resources,food:l.resources.food-r,wood:l.resources.wood-s}}));const o=t.buildings.filter(l=>l.type==="watchtower").length,a=Math.random()+o*.05;if(a>.65){const l=40+Math.round(Math.random()*40),u=30+Math.round(Math.random()*30),f=Math.round(Math.random()*30);n(m=>({resources:{...m.resources,wood:m.resources.wood+l,food:m.resources.food+u,stone:m.resources.stone+f},settlers:Math.random()>.6?[...m.settlers,{id:Ue(),name:`Scout ${m.settlers.length+1}`,position:[0,0,0],targetPosition:null,state:"idle",actionTimer:0}]:m.settlers})),t.addLog(`Expedition returned with riches! +${l} wood, +${u} food${f?`, +${f} stone`:""}`,"success")}else if(a>.35){const l=5+Math.round(Math.random()*10);n(u=>({resources:{...u.resources,iron:u.resources.iron+l}})),t.addLog(`Expedition found rare iron veins! +${l} iron`,"info")}else{const l=Math.max(5,Math.round(t.resources.wood*.05));n(u=>({resources:{...u.resources,wood:Math.max(0,u.resources.wood-l)},happiness:Math.max(0,u.happiness-5)})),t.addLog("Expedition ran into trouble and limped home. Lost some supplies.","danger")}},claimObjective:t=>{const r=e(),s=r.objectives.find(o=>o.id===t);!s||!s.complete||s.claimed||(n(o=>({resources:{...o.resources,wood:o.resources.wood+(s.reward.wood||0),food:o.resources.food+(s.reward.food||0),stone:o.resources.stone+(s.reward.stone||0),iron:o.resources.iron+(s.reward.iron||0)},objectives:o.objectives.map(a=>a.id===t?{...a,claimed:!0}:a)})),r.addLog(`Claimed reward: ${s.title}`,"success"))},loadSaveData:t=>{const r=e();n({resources:t.resources||r.resources,settlers:t.settlers||r.settlers,happiness:t.happiness??r.happiness,buildings:t.buildings||r.buildings,nature:t.nature||r.nature,logs:t.logs||r.logs,weather:t.weather||r.weather,season:t.season||r.season,day:t.day??r.day,objectives:t.objectives||r.objectives,selectedBuilding:null,selectedBuildingId:null,isBuilding:!1}),r.addLog("Loaded save data.","info")},tick:()=>{n(t=>{const r={...t.resources};let s=[...t.settlers],o=t.weather,a=t.season,l=[...t.logs];const u=t.buildings.filter(C=>C.type==="well").length,f=t.buildings.filter(C=>C.type==="bakery").length,m=t.buildings.filter(C=>C.type==="campfire").length,I=t.buildings.filter(C=>C.type==="watchtower").length,R=Math.floor(t.day/10)%4,P=["spring","summer","autumn","winter"];if(P[R]!==t.season&&(a=P[R],l=[{id:Ue(),message:`Season changed to ${a}!`,timestamp:Date.now(),type:"info"},...l].slice(0,20)),Math.random()<.01){const C=Math.random();C<.6?o="sunny":C<.85?o="rain":o="snow",o!==t.weather&&(l=[{id:Ue(),message:`Weather changed to ${o}!`,timestamp:Date.now(),type:"info"},...l].slice(0,20))}const N=100,x=t.buildings.reduce((C,v)=>C+(Ve[v.type].storage||0)*v.level,0),F=N+x;let V=t.happiness;const q=t.buildings.reduce((C,v)=>C+(Ve[v.type].happiness||0)*v.level,0);V=Math.min(100,V+q+m*.4);const U=.5+s.length*.5;if(r.food>=U){if(r.food-=U,V<100&&(V+=.5),r.food>U*2&&V>80&&s.length<t.buildings.reduce((v,g)=>v+(Ve[g.type].housing||0),2)&&Math.random()<.05){const v=["James","Mary","Robert","Patricia","John","Jennifer","Michael","Linda","David","Elizabeth"],g=v[Math.floor(Math.random()*v.length)];s.push({id:Ue(),name:g,position:[0,0,0],targetPosition:null,state:"idle",actionTimer:0}),l=[{id:Ue(),message:`${g} arrived!`,timestamp:Date.now(),type:"success"},...l].slice(0,20)}const C=V/100;t.buildings.forEach(v=>{const g=Ve[v.type];let y=1;g.workers&&(y=s.filter(_=>_.job===v.id).length/g.workers);const w=y*C,E=Dl[v.type];E&&w>0&&Object.keys(E).forEach(T=>{let _=(E[T]||0)*w*v.level;a==="winter"&&(T==="food"&&(_*=.2),v.type==="fishery"&&(_*=.8)),a==="autumn"&&T==="food"&&(_*=1.5),r[T]=Math.min(r[T]+_,F)})}),f>0&&(V=Math.min(100,V+.4*f))}else if(r.food=0,V=Math.max(0,V-10),Math.random()<.1&&s.length>1){const C=Math.floor(Math.random()*s.length),v=s[C];s.splice(C,1),l=[{id:Ue(),message:`${v.name} died from starvation!`,timestamp:Date.now(),type:"danger"},...l].slice(0,20)}const re=2+t.buildings.reduce((C,v)=>C+(Ve[v.type].housing||0),0);if(s.length>re&&(V=Math.max(0,V-2)),o==="rain"||o==="snow"){const C=Math.max(0,.1-u*.05-m*.03);V=Math.max(0,V-C)}if(V=Math.min(100,Math.max(0,V)),Math.random()<.008){const C=Math.random();if(C<.33){const v=20+Math.round(Math.random()*20),g=10+Math.round(Math.random()*15);r.wood=Math.min(F,r.wood+v),r.food=Math.min(F,r.food+g),l=[{id:Ue(),message:`A wandering trader gifted ${v} wood and ${g} food!`,timestamp:Date.now(),type:"success"},...l].slice(0,20)}else if(C<.66){const v=Math.max(5,Math.round(r.wood*.1)),g=Math.max(0,v-u*3-I*5);r.wood=Math.max(0,r.wood-g),V=Math.max(0,V-2),l=[{id:Ue(),message:`A storm felled trees. Lost ${g} wood, but wells reduced the damage.`,timestamp:Date.now(),type:"warning"},...l].slice(0,20)}else V=Math.min(100,V+5+u),l=[{id:Ue(),message:"A village festival lifted everyone's spirits! (+Happiness)",timestamp:Date.now(),type:"success"},...l].slice(0,20)}return s=s.map(C=>{const v=t.day%1,g=v>.75||v<.2,y=v>.25&&v<.7;if(C.job&&y){const w=t.buildings.find(E=>E.id===C.job);if(w)return Math.sqrt(Math.pow(C.position[0]-w.position[0],2)+Math.pow(C.position[2]-w.position[2],2))>2?{...C,state:"walking",targetPosition:w.position}:{...C,state:"working",targetPosition:null}}if(g){const w=[0,0,0];return Math.sqrt(Math.pow(C.position[0]-w[0],2)+Math.pow(C.position[2]-w[2],2))>2?{...C,state:"walking",targetPosition:w}:{...C,state:"resting",targetPosition:null}}if(C.state==="idle"||C.state==="working"&&!y||C.state==="resting"&&!g){if(Math.random()<.02){const w=Math.random()*Math.PI*2,E=3+Math.random()*8,T=Math.cos(w)*E,_=Math.sin(w)*E;return{...C,state:"walking",targetPosition:[T,0,_]}}return{...C,state:"idle"}}if(C.state==="walking"&&C.targetPosition){const w=C.targetPosition[0]-C.position[0],E=C.targetPosition[2]-C.position[2],T=Math.sqrt(w*w+E*E),_=.08;return T<_?{...C,position:C.targetPosition,targetPosition:null,state:"idle"}:{...C,position:[C.position[0]+w/T*_,0,C.position[2]+E/T*_]}}return C}),{resources:r,settlers:s,happiness:V,weather:o,season:a,day:t.day+.005,logs:l,tickRate:t.tickRate,objectives:t.objectives.map(C=>{if(C.complete)return C;let v=!1;return C.goal.type==="resource"&&C.goal.key&&C.goal.key in r?v=r[C.goal.key]>=C.goal.amount:C.goal.type==="building"&&C.goal.key?v=t.buildings.filter(g=>g.type===C.goal.key).length>=C.goal.amount:C.goal.type==="population"?v=s.length>=C.goal.amount:C.goal.type==="happiness"&&(v=V>=C.goal.amount),v?{...C,complete:!0}:C})}})},reset:()=>{const t=[];for(let r=0;r<40;r++){const s=Math.random()*Math.PI*2,o=15+Math.random()*30,a=Math.cos(s)*o,l=Math.sin(s)*o,u=Math.random()>.3?"tree":"rock",f=.8+Math.random()*.5;t.push({id:`nature-${r}`,position:[a,0,l],type:u,scale:f})}n({resources:{wood:100,food:50,stone:0,iron:0},settlers:[{id:"settler-1",name:"John",position:[0,0,0],targetPosition:null,state:"idle",actionTimer:0},{id:"settler-2",name:"Jane",position:[2,0,2],targetPosition:null,state:"idle",actionTimer:0}],happiness:100,buildings:[{id:"barn-main",type:"barn",position:[0,0,0],level:1,lastCollected:Date.now()}],nature:t,logs:[],weather:"sunny",season:"spring",selectedBuilding:null,selectedBuildingId:null,isBuilding:!1,day:1,tickRate:1e3,objectives:e().objectives.map(r=>({...r,complete:!1,claimed:!1}))})}}),{name:"homestead-storage",partialize:n=>({resources:n.resources,settlers:n.settlers,happiness:n.happiness,buildings:n.buildings,nature:n.nature,logs:n.logs,weather:n.weather,season:n.season,day:n.day,tickRate:n.tickRate,objectives:n.objectives})}));var wa={};/**
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
 */const Vl=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},td=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[t++];e[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[t++],a=n[t++],l=n[t++],u=((s&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const o=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Ml={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,l=a?n[s+1]:0,u=s+2<n.length,f=u?n[s+2]:0,m=o>>2,I=(o&3)<<4|l>>4;let A=(l&15)<<2|f>>6,R=f&63;u||(R=64,a||(A=64)),r.push(t[m],t[I],t[A],t[R])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Vl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):td(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const f=s<n.length?t[n.charAt(s)]:64;++s;const I=s<n.length?t[n.charAt(s)]:64;if(++s,o==null||l==null||f==null||I==null)throw new nd;const A=o<<2|l>>4;if(r.push(A),f!==64){const R=l<<4&240|f>>2;if(r.push(R),I!==64){const P=f<<6&192|I;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class nd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rd=function(n){const e=Vl(n);return Ml.encodeByteArray(e,!0)},rs=function(n){return rd(n).replace(/\./g,"")},Ol=function(n){try{return Ml.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function sd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const id=()=>sd().__FIREBASE_DEFAULTS__,od=()=>{if(typeof process>"u"||typeof wa>"u")return;const n=wa.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ad=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ol(n[1]);return e&&JSON.parse(e)},vs=()=>{try{return id()||od()||ad()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ll=n=>{var e,t;return(t=(e=vs())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},ld=n=>{const e=Ll(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},jl=()=>{var n;return(n=vs())===null||n===void 0?void 0:n.config},Fl=n=>{var e;return(e=vs())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class cd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function ud(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[rs(JSON.stringify(t)),rs(JSON.stringify(a)),""].join(".")}/**
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
 */function Pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function dd(){var n;const e=(n=vs())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function pd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function md(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gd(){const n=Pe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function _d(){return!dd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function yd(){try{return typeof indexedDB=="object"}catch{return!1}}function vd(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var o;e(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
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
 */const wd="FirebaseError";class ct extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=wd,Object.setPrototypeOf(this,ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hr.prototype.create)}}class hr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?Ed(o,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new ct(s,l,r)}}function Ed(n,e){return n.replace(Id,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Id=/\{\$([^}]+)}/g;function Td(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ss(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const o=n[s],a=e[s];if(Ea(o)&&Ea(a)){if(!ss(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Ea(n){return n!==null&&typeof n=="object"}/**
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
 */function dr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function bd(n,e){const t=new Ad(n,e);return t.subscribe.bind(t)}class Ad{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Sd(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Ys),s.error===void 0&&(s.error=Ys),s.complete===void 0&&(s.complete=Ys);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Sd(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ys(){}/**
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
 */function Le(n){return n&&n._delegate?n._delegate:n}class Lt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Nt="[DEFAULT]";/**
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
 */class Rd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new cd;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Pd(e))try{this.getOrInitializeService({instanceIdentifier:Nt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(e=Nt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Nt){return this.instances.has(e)}getOptions(e=Nt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&e(a,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xd(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Nt){return this.component?this.component.multipleInstances?e:Nt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xd(n){return n===Nt?void 0:n}function Pd(n){return n.instantiationMode==="EAGER"}/**
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
 */class Cd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Rd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var J;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(J||(J={}));const kd={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},Nd=J.INFO,Dd={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},Vd=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Dd[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ki{constructor(e){this.name=e,this._logLevel=Nd,this._logHandler=Vd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const Md=(n,e)=>e.some(t=>n instanceof t);let Ia,Ta;function Od(){return Ia||(Ia=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ld(){return Ta||(Ta=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ul=new WeakMap,ci=new WeakMap,Bl=new WeakMap,Zs=new WeakMap,Ni=new WeakMap;function jd(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(vt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Ul.set(t,n)}).catch(()=>{}),Ni.set(e,n),e}function Fd(n){if(ci.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});ci.set(n,e)}let ui={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ci.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Bl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return vt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ud(n){ui=n(ui)}function Bd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(ei(this),e,...t);return Bl.set(r,e.sort?e.sort():[e]),vt(r)}:Ld().includes(n)?function(...e){return n.apply(ei(this),e),vt(Ul.get(this))}:function(...e){return vt(n.apply(ei(this),e))}}function $d(n){return typeof n=="function"?Bd(n):(n instanceof IDBTransaction&&Fd(n),Md(n,Od())?new Proxy(n,ui):n)}function vt(n){if(n instanceof IDBRequest)return jd(n);if(Zs.has(n))return Zs.get(n);const e=$d(n);return e!==n&&(Zs.set(n,e),Ni.set(e,n)),e}const ei=n=>Ni.get(n);function qd(n,e,{blocked:t,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,e),l=vt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(vt(a.result),u.oldVersion,u.newVersion,vt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{o&&u.addEventListener("close",()=>o()),s&&u.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const Gd=["get","getKey","getAll","getAllKeys","count"],zd=["put","add","delete","clear"],ti=new Map;function ba(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ti.get(e))return ti.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=zd.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Gd.includes(t)))return;const o=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let f=u.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[t](...l),s&&u.done]))[0]};return ti.set(e,o),o}Ud(n=>({...n,get:(e,t,r)=>ba(e,t)||n.get(e,t,r),has:(e,t)=>!!ba(e,t)||n.has(e,t)}));/**
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
 */class Hd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Wd(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Wd(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hi="@firebase/app",Aa="0.10.13";/**
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
 */const it=new ki("@firebase/app"),Kd="@firebase/app-compat",Qd="@firebase/analytics-compat",Jd="@firebase/analytics",Xd="@firebase/app-check-compat",Yd="@firebase/app-check",Zd="@firebase/auth",ef="@firebase/auth-compat",tf="@firebase/database",nf="@firebase/data-connect",rf="@firebase/database-compat",sf="@firebase/functions",of="@firebase/functions-compat",af="@firebase/installations",lf="@firebase/installations-compat",cf="@firebase/messaging",uf="@firebase/messaging-compat",hf="@firebase/performance",df="@firebase/performance-compat",ff="@firebase/remote-config",pf="@firebase/remote-config-compat",mf="@firebase/storage",gf="@firebase/storage-compat",_f="@firebase/firestore",yf="@firebase/vertexai-preview",vf="@firebase/firestore-compat",wf="firebase",Ef="10.14.1";/**
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
 */const di="[DEFAULT]",If={[hi]:"fire-core",[Kd]:"fire-core-compat",[Jd]:"fire-analytics",[Qd]:"fire-analytics-compat",[Yd]:"fire-app-check",[Xd]:"fire-app-check-compat",[Zd]:"fire-auth",[ef]:"fire-auth-compat",[tf]:"fire-rtdb",[nf]:"fire-data-connect",[rf]:"fire-rtdb-compat",[sf]:"fire-fn",[of]:"fire-fn-compat",[af]:"fire-iid",[lf]:"fire-iid-compat",[cf]:"fire-fcm",[uf]:"fire-fcm-compat",[hf]:"fire-perf",[df]:"fire-perf-compat",[ff]:"fire-rc",[pf]:"fire-rc-compat",[mf]:"fire-gcs",[gf]:"fire-gcs-compat",[_f]:"fire-fst",[vf]:"fire-fst-compat",[yf]:"fire-vertex","fire-js":"fire-js",[wf]:"fire-js-all"};/**
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
 */const is=new Map,Tf=new Map,fi=new Map;function Sa(n,e){try{n.container.addComponent(e)}catch(t){it.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function hn(n){const e=n.name;if(fi.has(e))return it.debug(`There were multiple attempts to register component ${e}.`),!1;fi.set(e,n);for(const t of is.values())Sa(t,n);for(const t of Tf.values())Sa(t,n);return!0}function Di(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function et(n){return n.settings!==void 0}/**
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
 */const bf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wt=new hr("app","Firebase",bf);/**
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
 */class Af{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Lt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wt.create("app-deleted",{appName:this._name})}}/**
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
 */const wn=Ef;function $l(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:di,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw wt.create("bad-app-name",{appName:String(s)});if(t||(t=jl()),!t)throw wt.create("no-options");const o=is.get(s);if(o){if(ss(t,o.options)&&ss(r,o.config))return o;throw wt.create("duplicate-app",{appName:s})}const a=new Cd(s);for(const u of fi.values())a.addComponent(u);const l=new Af(t,r,a);return is.set(s,l),l}function ql(n=di){const e=is.get(n);if(!e&&n===di&&jl())return $l();if(!e)throw wt.create("no-app",{appName:n});return e}function Et(n,e,t){var r;let s=(r=If[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const l=[`Unable to register library "${s}" with version "${e}":`];o&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),it.warn(l.join(" "));return}hn(new Lt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Sf="firebase-heartbeat-database",Rf=1,er="firebase-heartbeat-store";let ni=null;function Gl(){return ni||(ni=qd(Sf,Rf,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(er)}catch(t){console.warn(t)}}}}).catch(n=>{throw wt.create("idb-open",{originalErrorMessage:n.message})})),ni}async function xf(n){try{const t=(await Gl()).transaction(er),r=await t.objectStore(er).get(zl(n));return await t.done,r}catch(e){if(e instanceof ct)it.warn(e.message);else{const t=wt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});it.warn(t.message)}}}async function Ra(n,e){try{const r=(await Gl()).transaction(er,"readwrite");await r.objectStore(er).put(e,zl(n)),await r.done}catch(t){if(t instanceof ct)it.warn(t.message);else{const r=wt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});it.warn(r.message)}}}function zl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Pf=1024,Cf=30*24*60*60*1e3;class kf{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Df(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=xa();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=Cf}),this._storage.overwrite(this._heartbeatsCache))}catch(r){it.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=xa(),{heartbeatsToSend:r,unsentEntries:s}=Nf(this._heartbeatsCache.heartbeats),o=rs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return it.warn(t),""}}}function xa(){return new Date().toISOString().substring(0,10)}function Nf(n,e=Pf){const t=[];let r=n.slice();for(const s of n){const o=t.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Pa(t)>e){o.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Pa(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Df{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yd()?vd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await xf(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ra(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ra(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Pa(n){return rs(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Vf(n){hn(new Lt("platform-logger",e=>new Hd(e),"PRIVATE")),hn(new Lt("heartbeat",e=>new kf(e),"PRIVATE")),Et(hi,Aa,n),Et(hi,Aa,"esm2017"),Et("fire-js","")}Vf("");var Mf="firebase",Of="10.14.1";/**
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
 */Et(Mf,Of,"app");function Vi(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Hl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Lf=Hl,Wl=new hr("auth","Firebase",Hl());/**
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
 */const os=new ki("@firebase/auth");function jf(n,...e){os.logLevel<=J.WARN&&os.warn(`Auth (${wn}): ${n}`,...e)}function Qr(n,...e){os.logLevel<=J.ERROR&&os.error(`Auth (${wn}): ${n}`,...e)}/**
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
 */function We(n,...e){throw Oi(n,...e)}function $e(n,...e){return Oi(n,...e)}function Mi(n,e,t){const r=Object.assign(Object.assign({},Lf()),{[e]:t});return new hr("auth","Firebase",r).create(e,{appName:n.name})}function Mt(n){return Mi(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ff(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&We(n,"argument-error"),Mi(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Oi(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Wl.create(n,...e)}function G(n,e,...t){if(!n)throw Oi(e,...t)}function tt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Qr(e),new Error(e)}function ot(n,e){n||tt(e)}/**
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
 */function pi(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Uf(){return Ca()==="http:"||Ca()==="https:"}function Ca(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Bf(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Uf()||pd()||"connection"in navigator)?navigator.onLine:!0}function $f(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class fr{constructor(e,t){this.shortDelay=e,this.longDelay=t,ot(t>e,"Short delay should be less than long delay!"),this.isMobile=hd()||md()}get(){return Bf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Li(n,e){ot(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Kl{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;tt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;tt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;tt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const qf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Gf=new fr(3e4,6e4);function ji(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function En(n,e,t,r,s={}){return Ql(n,s,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const l=dr(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const f=Object.assign({method:e,headers:u},o);return fd()||(f.referrerPolicy="no-referrer"),Kl.fetch()(Jl(n,n.config.apiHost,t,l),f)})}async function Ql(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},qf),e);try{const s=new Hf(n),o=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Gr(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const l=o.ok?a.errorMessage:a.error.message,[u,f]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gr(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Gr(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Gr(n,"user-disabled",a);const m=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Mi(n,m,f);We(n,m)}}catch(s){if(s instanceof ct)throw s;We(n,"network-request-failed",{message:String(s)})}}async function zf(n,e,t,r,s={}){const o=await En(n,e,t,r,s);return"mfaPendingCredential"in o&&We(n,"multi-factor-auth-required",{_serverResponse:o}),o}function Jl(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?Li(n.config,s):`${n.config.apiScheme}://${s}`}class Hf{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r($e(this.auth,"network-request-failed")),Gf.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Gr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=$e(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */async function Wf(n,e){return En(n,"POST","/v1/accounts:delete",e)}async function Xl(n,e){return En(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Kn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Kf(n,e=!1){const t=Le(n),r=await t.getIdToken(e),s=Fi(r);G(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:s,token:r,authTime:Kn(ri(s.auth_time)),issuedAtTime:Kn(ri(s.iat)),expirationTime:Kn(ri(s.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function ri(n){return Number(n)*1e3}function Fi(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Qr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ol(t);return s?JSON.parse(s):(Qr("Failed to decode base64 JWT payload"),null)}catch(s){return Qr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ka(n){const e=Fi(n);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function tr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ct&&Qf(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Qf({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Jf{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class mi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Kn(this.lastLoginAt),this.creationTime=Kn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function as(n){var e;const t=n.auth,r=await n.getIdToken(),s=await tr(n,Xl(t,{idToken:r}));G(s==null?void 0:s.users.length,t,"internal-error");const o=s.users[0];n._notifyReloadListener(o);const a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Yl(o.providerUserInfo):[],l=Yf(n.providerData,a),u=n.isAnonymous,f=!(n.email&&o.passwordHash)&&!(l!=null&&l.length),m=u?f:!1,I={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new mi(o.createdAt,o.lastLoginAt),isAnonymous:m};Object.assign(n,I)}async function Xf(n){const e=Le(n);await as(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Yf(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Yl(n){return n.map(e=>{var{providerId:t}=e,r=Vi(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Zf(n,e){const t=await Ql(n,{},async()=>{const r=dr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:o}=n.config,a=Jl(n,s,"/v1/token",`key=${o}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Kl.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ep(n,e){return En(n,"POST","/v2/accounts:revokeToken",ji(n,e))}/**
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
 */class on{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ka(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){G(e.length!==0,"internal-error");const t=ka(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:o}=await Zf(e,t);this.updateTokensAndExpiration(r,s,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:o}=t,a=new on;return r&&(G(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(G(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),o&&(G(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new on,this.toJSON())}_performRefresh(){return tt("not implemented")}}/**
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
 */function pt(n,e){G(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class nt{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,o=Vi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Jf(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new mi(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await tr(this,this.stsTokenManager.getToken(this.auth,e));return G(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Kf(this,e)}reload(){return Xf(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new nt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await as(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(et(this.auth.app))return Promise.reject(Mt(this.auth));const e=await this.getIdToken();return await tr(this,Wf(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,o,a,l,u,f,m;const I=(r=t.displayName)!==null&&r!==void 0?r:void 0,A=(s=t.email)!==null&&s!==void 0?s:void 0,R=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,P=(a=t.photoURL)!==null&&a!==void 0?a:void 0,N=(l=t.tenantId)!==null&&l!==void 0?l:void 0,x=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,F=(f=t.createdAt)!==null&&f!==void 0?f:void 0,V=(m=t.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:q,emailVerified:U,isAnonymous:re,providerData:C,stsTokenManager:v}=t;G(q&&v,e,"internal-error");const g=on.fromJSON(this.name,v);G(typeof q=="string",e,"internal-error"),pt(I,e.name),pt(A,e.name),G(typeof U=="boolean",e,"internal-error"),G(typeof re=="boolean",e,"internal-error"),pt(R,e.name),pt(P,e.name),pt(N,e.name),pt(x,e.name),pt(F,e.name),pt(V,e.name);const y=new nt({uid:q,auth:e,email:A,emailVerified:U,displayName:I,isAnonymous:re,photoURL:P,phoneNumber:R,tenantId:N,stsTokenManager:g,createdAt:F,lastLoginAt:V});return C&&Array.isArray(C)&&(y.providerData=C.map(w=>Object.assign({},w))),x&&(y._redirectEventId=x),y}static async _fromIdTokenResponse(e,t,r=!1){const s=new on;s.updateFromServerResponse(t);const o=new nt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await as(o),o}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];G(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?Yl(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(o!=null&&o.length),l=new on;l.updateFromIdToken(r);const u=new nt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new mi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(o!=null&&o.length)};return Object.assign(u,f),u}}/**
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
 */const Na=new Map;function rt(n){ot(n instanceof Function,"Expected a class definition");let e=Na.get(n);return e?(ot(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Na.set(n,e),e)}/**
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
 */class Zl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Zl.type="NONE";const Da=Zl;/**
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
 */function Jr(n,e,t){return`firebase:${n}:${e}:${t}`}class an{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:o}=this.auth;this.fullUserKey=Jr(this.userKey,s.apiKey,o),this.fullPersistenceKey=Jr("persistence",s.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?nt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new an(rt(Da),e,r);const s=(await Promise.all(t.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let o=s[0]||rt(Da);const a=Jr(r,e.config.apiKey,e.name);let l=null;for(const f of t)try{const m=await f._get(a);if(m){const I=nt._fromJSON(e,m);f!==o&&(l=I),o=f;break}}catch{}const u=s.filter(f=>f._shouldAllowMigration);return!o._shouldAllowMigration||!u.length?new an(o,e,r):(o=u[0],l&&await o._set(a,l.toJSON()),await Promise.all(t.map(async f=>{if(f!==o)try{await f._remove(a)}catch{}})),new an(o,e,r))}}/**
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
 */function Va(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(rc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ec(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ic(e))return"Blackberry";if(oc(e))return"Webos";if(tc(e))return"Safari";if((e.includes("chrome/")||nc(e))&&!e.includes("edge/"))return"Chrome";if(sc(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ec(n=Pe()){return/firefox\//i.test(n)}function tc(n=Pe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function nc(n=Pe()){return/crios\//i.test(n)}function rc(n=Pe()){return/iemobile/i.test(n)}function sc(n=Pe()){return/android/i.test(n)}function ic(n=Pe()){return/blackberry/i.test(n)}function oc(n=Pe()){return/webos/i.test(n)}function Ui(n=Pe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function tp(n=Pe()){var e;return Ui(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function np(){return gd()&&document.documentMode===10}function ac(n=Pe()){return Ui(n)||sc(n)||oc(n)||ic(n)||/windows phone/i.test(n)||rc(n)}/**
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
 */function lc(n,e=[]){let t;switch(n){case"Browser":t=Va(Pe());break;case"Worker":t=`${Va(Pe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${wn}/${r}`}/**
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
 */class rp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((a,l)=>{try{const u=e(o);a(u)}catch(u){l(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function sp(n,e={}){return En(n,"GET","/v2/passwordPolicy",ji(n,e))}/**
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
 */const ip=6;class op{constructor(e){var t,r,s,o;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:ip,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,o,a,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsUppercaseLetter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class ap{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ma(this),this.idTokenSubscription=new Ma(this),this.beforeStateQueue=new rp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=rt(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await an.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Xl(this,{idToken:e}),r=await nt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(et(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&(u!=null&&u.user)&&(s=u.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await as(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$f()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(et(this.app))return Promise.reject(Mt(this));const t=e?Le(e):null;return t&&G(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return et(this.app)?Promise.reject(Mt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return et(this.app)?Promise.reject(Mt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(rt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await sp(this),t=new op(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new hr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await ep(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&rt(e)||this._popupRedirectResolver;G(t,this,"argument-error"),this.redirectPersistenceManager=await an.create(this,[rt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(l,this,"internal-error"),l.then(()=>{a||o(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=lc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&jf(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ws(n){return Le(n)}class Ma{constructor(e){this.auth=e,this.observer=null,this.addObserver=bd(t=>this.observer=t)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Bi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function lp(n){Bi=n}function cp(n){return Bi.loadJS(n)}function up(){return Bi.gapiScript}function hp(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function dp(n,e){const t=Di(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),o=t.getOptions();if(ss(o,e??{}))return s;We(s,"already-initialized")}return t.initialize({options:e})}function fp(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(rt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function pp(n,e,t){const r=ws(n);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,o=cc(e),{host:a,port:l}=mp(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${o}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})}),gp()}function cc(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function mp(n){const e=cc(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const o=s[1];return{host:o,port:Oa(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:Oa(a)}}}function Oa(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function gp(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class uc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return tt("not implemented")}_getIdTokenResponse(e){return tt("not implemented")}_linkToIdToken(e,t){return tt("not implemented")}_getReauthenticationResolver(e){return tt("not implemented")}}/**
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
 */async function ln(n,e){return zf(n,"POST","/v1/accounts:signInWithIdp",ji(n,e))}/**
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
 */const _p="http://localhost";class jt extends uc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new jt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):We("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,o=Vi(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new jt(r,s);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return ln(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,ln(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ln(e,t)}buildRequest(){const e={requestUri:_p,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=dr(t)}return e}}/**
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
 */class $i{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class pr extends $i{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class mt extends pr{constructor(){super("facebook.com")}static credential(e){return jt._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch{return null}}}mt.FACEBOOK_SIGN_IN_METHOD="facebook.com";mt.PROVIDER_ID="facebook.com";/**
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
 */class Ze extends pr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return jt._fromParams({providerId:Ze.PROVIDER_ID,signInMethod:Ze.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ze.credentialFromTaggedObject(e)}static credentialFromError(e){return Ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Ze.credential(t,r)}catch{return null}}}Ze.GOOGLE_SIGN_IN_METHOD="google.com";Ze.PROVIDER_ID="google.com";/**
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
 */class gt extends pr{constructor(){super("github.com")}static credential(e){return jt._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gt.credential(e.oauthAccessToken)}catch{return null}}}gt.GITHUB_SIGN_IN_METHOD="github.com";gt.PROVIDER_ID="github.com";/**
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
 */class _t extends pr{constructor(){super("twitter.com")}static credential(e,t){return jt._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return _t.credential(t,r)}catch{return null}}}_t.TWITTER_SIGN_IN_METHOD="twitter.com";_t.PROVIDER_ID="twitter.com";/**
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
 */class dn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const o=await nt._fromIdTokenResponse(e,r,s),a=La(r);return new dn({user:o,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=La(r);return new dn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function La(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class ls extends ct{constructor(e,t,r,s){var o;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ls.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new ls(e,t,r,s)}}function hc(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ls._fromErrorAndOperation(n,o,e,r):o})}async function yp(n,e,t=!1){const r=await tr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return dn._forOperation(n,"link",r)}/**
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
 */async function vp(n,e,t=!1){const{auth:r}=n;if(et(r.app))return Promise.reject(Mt(r));const s="reauthenticate";try{const o=await tr(n,hc(r,s,e,n),t);G(o.idToken,r,"internal-error");const a=Fi(o.idToken);G(a,r,"internal-error");const{sub:l}=a;return G(n.uid===l,r,"user-mismatch"),dn._forOperation(n,s,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&We(r,"user-mismatch"),o}}/**
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
 */async function wp(n,e,t=!1){if(et(n.app))return Promise.reject(Mt(n));const r="signIn",s=await hc(n,r,e),o=await dn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(o.user),o}function Ep(n,e,t,r){return Le(n).onIdTokenChanged(e,t,r)}function Ip(n,e,t){return Le(n).beforeAuthStateChanged(e,t)}function Tp(n,e,t,r){return Le(n).onAuthStateChanged(e,t,r)}function bp(n){return Le(n).signOut()}const cs="__sak";/**
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
 */class dc{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(cs,"1"),this.storage.removeItem(cs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Ap=1e3,Sp=10;class fc extends dc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ac(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);np()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Sp):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Ap)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}fc.type="LOCAL";const Rp=fc;/**
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
 */class pc extends dc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}pc.type="SESSION";const mc=pc;/**
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
 */function xp(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Es{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Es(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:o}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async f=>f(t.origin,o)),u=await xp(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Es.receivers=[];/**
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
 */function qi(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Pp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,a;return new Promise((l,u)=>{const f=qi("",20);s.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(I){const A=I;if(A.data.eventId===f)switch(A.data.status){case"ack":clearTimeout(m),o=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(A.data.response);break;default:clearTimeout(m),clearTimeout(o),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Ge(){return window}function Cp(n){Ge().location.href=n}/**
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
 */function gc(){return typeof Ge().WorkerGlobalScope<"u"&&typeof Ge().importScripts=="function"}async function kp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Np(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Dp(){return gc()?self:null}/**
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
 */const _c="firebaseLocalStorageDb",Vp=1,us="firebaseLocalStorage",yc="fbase_key";class mr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Is(n,e){return n.transaction([us],e?"readwrite":"readonly").objectStore(us)}function Mp(){const n=indexedDB.deleteDatabase(_c);return new mr(n).toPromise()}function gi(){const n=indexedDB.open(_c,Vp);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(us,{keyPath:yc})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(us)?e(r):(r.close(),await Mp(),e(await gi()))})})}async function ja(n,e,t){const r=Is(n,!0).put({[yc]:e,value:t});return new mr(r).toPromise()}async function Op(n,e){const t=Is(n,!1).get(e),r=await new mr(t).toPromise();return r===void 0?null:r.value}function Fa(n,e){const t=Is(n,!0).delete(e);return new mr(t).toPromise()}const Lp=800,jp=3;class vc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gi(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>jp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Es._getInstance(Dp()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await kp(),!this.activeServiceWorker)return;this.sender=new Pp(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Np()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gi();return await ja(e,cs,"1"),await Fa(e,cs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>ja(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Op(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Fa(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const o=Is(s,!1).getAll();return new mr(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:o}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Lp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vc.type="LOCAL";const Fp=vc;new fr(3e4,6e4);/**
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
 */function wc(n,e){return e?rt(e):(G(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Gi extends uc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ln(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ln(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ln(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Up(n){return wp(n.auth,new Gi(n),n.bypassAuthState)}function Bp(n){const{auth:e,user:t}=n;return G(t,e,"internal-error"),vp(t,new Gi(n),n.bypassAuthState)}async function $p(n){const{auth:e,user:t}=n;return G(t,e,"internal-error"),yp(t,new Gi(n),n.bypassAuthState)}/**
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
 */class Ec{constructor(e,t,r,s,o=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:o,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Up;case"linkViaPopup":case"linkViaRedirect":return $p;case"reauthViaPopup":case"reauthViaRedirect":return Bp;default:We(this.auth,"internal-error")}}resolve(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const qp=new fr(2e3,1e4);async function Gp(n,e,t){if(et(n.app))return Promise.reject($e(n,"operation-not-supported-in-this-environment"));const r=ws(n);Ff(n,e,$i);const s=wc(r,t);return new Dt(r,"signInViaPopup",e,s).executeNotNull()}class Dt extends Ec{constructor(e,t,r,s,o){super(e,t,s,o),this.provider=r,this.authWindow=null,this.pollId=null,Dt.currentPopupAction&&Dt.currentPopupAction.cancel(),Dt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){ot(this.filter.length===1,"Popup operations only handle one event");const e=qi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject($e(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject($e(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Dt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($e(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qp.get())};e()}}Dt.currentPopupAction=null;/**
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
 */const zp="pendingRedirect",Xr=new Map;class Hp extends Ec{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Xr.get(this.auth._key());if(!e){try{const r=await Wp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Xr.set(this.auth._key(),e)}return this.bypassAuthState||Xr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Wp(n,e){const t=Jp(e),r=Qp(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Kp(n,e){Xr.set(n._key(),e)}function Qp(n){return rt(n._redirectPersistence)}function Jp(n){return Jr(zp,n.config.apiKey,n.name)}async function Xp(n,e,t=!1){if(et(n.app))return Promise.reject(Mt(n));const r=ws(n),s=wc(r,e),a=await new Hp(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const Yp=10*60*1e3;class Zp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!em(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Ic(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError($e(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Yp&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ua(e))}saveEventToCache(e){this.cachedEventUids.add(Ua(e)),this.lastProcessedEventTime=Date.now()}}function Ua(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ic({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function em(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ic(n);default:return!1}}/**
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
 */async function tm(n,e={}){return En(n,"GET","/v1/projects",e)}/**
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
 */const nm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rm=/^https?/;async function sm(n){if(n.config.emulator)return;const{authorizedDomains:e}=await tm(n);for(const t of e)try{if(im(t))return}catch{}We(n,"unauthorized-domain")}function im(n){const e=pi(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!rm.test(t))return!1;if(nm.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const om=new fr(3e4,6e4);function Ba(){const n=Ge().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function am(n){return new Promise((e,t)=>{var r,s,o;function a(){Ba(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ba(),t($e(n,"network-request-failed"))},timeout:om.get()})}if(!((s=(r=Ge().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((o=Ge().gapi)===null||o===void 0)&&o.load)a();else{const l=hp("iframefcb");return Ge()[l]=()=>{gapi.load?a():t($e(n,"network-request-failed"))},cp(`${up()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw Yr=null,e})}let Yr=null;function lm(n){return Yr=Yr||am(n),Yr}/**
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
 */const cm=new fr(5e3,15e3),um="__/auth/iframe",hm="emulator/auth/iframe",dm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pm(n){const e=n.config;G(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Li(e,hm):`https://${n.config.authDomain}/${um}`,r={apiKey:e.apiKey,appName:n.name,v:wn},s=fm.get(n.config.apiHost);s&&(r.eid=s);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${dr(r).slice(1)}`}async function mm(n){const e=await lm(n),t=Ge().gapi;return G(t,n,"internal-error"),e.open({where:document.body,url:pm(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dm,dontclear:!0},r=>new Promise(async(s,o)=>{await r.restyle({setHideOnLeave:!1});const a=$e(n,"network-request-failed"),l=Ge().setTimeout(()=>{o(a)},cm.get());function u(){Ge().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{o(a)})}))}/**
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
 */const gm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_m=500,ym=600,vm="_blank",wm="http://localhost";class $a{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Em(n,e,t,r=_m,s=ym){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},gm),{width:r.toString(),height:s.toString(),top:o,left:a}),f=Pe().toLowerCase();t&&(l=nc(f)?vm:t),ec(f)&&(e=e||wm,u.scrollbars="yes");const m=Object.entries(u).reduce((A,[R,P])=>`${A}${R}=${P},`,"");if(tp(f)&&l!=="_self")return Im(e||"",l),new $a(null);const I=window.open(e||"",l,m);G(I,n,"popup-blocked");try{I.focus()}catch{}return new $a(I)}function Im(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Tm="__/auth/handler",bm="emulator/auth/handler",Am=encodeURIComponent("fac");async function qa(n,e,t,r,s,o){G(n.config.authDomain,n,"auth-domain-config-required"),G(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:wn,eventId:s};if(e instanceof $i){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Td(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,I]of Object.entries({}))a[m]=I}if(e instanceof pr){const m=e.getScopes().filter(I=>I!=="");m.length>0&&(a.scopes=m.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const m of Object.keys(l))l[m]===void 0&&delete l[m];const u=await n._getAppCheckToken(),f=u?`#${Am}=${encodeURIComponent(u)}`:"";return`${Sm(n)}?${dr(l).slice(1)}${f}`}function Sm({config:n}){return n.emulator?Li(n,bm):`https://${n.authDomain}/${Tm}`}/**
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
 */const si="webStorageSupport";class Rm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mc,this._completeRedirectFn=Xp,this._overrideRedirectResult=Kp}async _openPopup(e,t,r,s){var o;ot((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await qa(e,t,r,pi(),s);return Em(e,a,qi())}async _openRedirect(e,t,r,s){await this._originValidation(e);const o=await qa(e,t,r,pi(),s);return Cp(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:o}=this.eventManagers[t];return s?Promise.resolve(s):(ot(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await mm(e),r=new Zp(e);return t.register("authEvent",s=>(G(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(si,{type:si},s=>{var o;const a=(o=s==null?void 0:s[0])===null||o===void 0?void 0:o[si];a!==void 0&&t(!!a),We(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=sm(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ac()||tc()||Ui()}}const xm=Rm;var Ga="@firebase/auth",za="1.7.9";/**
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
 */class Pm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Cm(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function km(n){hn(new Lt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;G(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:lc(n)},f=new ap(r,s,o,u);return fp(f,t),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),hn(new Lt("auth-internal",e=>{const t=ws(e.getProvider("auth").getImmediate());return(r=>new Pm(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Et(Ga,za,Cm(n)),Et(Ga,za,"esm2017")}/**
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
 */const Nm=5*60,Dm=Fl("authIdTokenMaxAge")||Nm;let Ha=null;const Vm=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Dm)return;const s=t==null?void 0:t.token;Ha!==s&&(Ha=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Mm(n=ql()){const e=Di(n,"auth");if(e.isInitialized())return e.getImmediate();const t=dp(n,{popupRedirectResolver:xm,persistence:[Fp,Rp,mc]}),r=Fl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=Vm(o.toString());Ip(t,a,()=>a(t.currentUser)),Ep(t,l=>a(l))}}const s=Ll("auth");return s&&pp(t,`http://${s}`),t}function Om(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}lp({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const o=$e("internal-error");o.customData=s,t(o)},r.type="text/javascript",r.charset="UTF-8",Om().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});km("Browser");var Wa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ot,Tc;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,g){function y(){}y.prototype=g.prototype,v.D=g.prototype,v.prototype=new y,v.prototype.constructor=v,v.C=function(w,E,T){for(var _=Array(arguments.length-2),De=2;De<arguments.length;De++)_[De-2]=arguments[De];return g.prototype[E].apply(w,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,g,y){y||(y=0);var w=Array(16);if(typeof g=="string")for(var E=0;16>E;++E)w[E]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(E=0;16>E;++E)w[E]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=v.g[0],y=v.g[1],E=v.g[2];var T=v.g[3],_=g+(T^y&(E^T))+w[0]+3614090360&4294967295;g=y+(_<<7&4294967295|_>>>25),_=T+(E^g&(y^E))+w[1]+3905402710&4294967295,T=g+(_<<12&4294967295|_>>>20),_=E+(y^T&(g^y))+w[2]+606105819&4294967295,E=T+(_<<17&4294967295|_>>>15),_=y+(g^E&(T^g))+w[3]+3250441966&4294967295,y=E+(_<<22&4294967295|_>>>10),_=g+(T^y&(E^T))+w[4]+4118548399&4294967295,g=y+(_<<7&4294967295|_>>>25),_=T+(E^g&(y^E))+w[5]+1200080426&4294967295,T=g+(_<<12&4294967295|_>>>20),_=E+(y^T&(g^y))+w[6]+2821735955&4294967295,E=T+(_<<17&4294967295|_>>>15),_=y+(g^E&(T^g))+w[7]+4249261313&4294967295,y=E+(_<<22&4294967295|_>>>10),_=g+(T^y&(E^T))+w[8]+1770035416&4294967295,g=y+(_<<7&4294967295|_>>>25),_=T+(E^g&(y^E))+w[9]+2336552879&4294967295,T=g+(_<<12&4294967295|_>>>20),_=E+(y^T&(g^y))+w[10]+4294925233&4294967295,E=T+(_<<17&4294967295|_>>>15),_=y+(g^E&(T^g))+w[11]+2304563134&4294967295,y=E+(_<<22&4294967295|_>>>10),_=g+(T^y&(E^T))+w[12]+1804603682&4294967295,g=y+(_<<7&4294967295|_>>>25),_=T+(E^g&(y^E))+w[13]+4254626195&4294967295,T=g+(_<<12&4294967295|_>>>20),_=E+(y^T&(g^y))+w[14]+2792965006&4294967295,E=T+(_<<17&4294967295|_>>>15),_=y+(g^E&(T^g))+w[15]+1236535329&4294967295,y=E+(_<<22&4294967295|_>>>10),_=g+(E^T&(y^E))+w[1]+4129170786&4294967295,g=y+(_<<5&4294967295|_>>>27),_=T+(y^E&(g^y))+w[6]+3225465664&4294967295,T=g+(_<<9&4294967295|_>>>23),_=E+(g^y&(T^g))+w[11]+643717713&4294967295,E=T+(_<<14&4294967295|_>>>18),_=y+(T^g&(E^T))+w[0]+3921069994&4294967295,y=E+(_<<20&4294967295|_>>>12),_=g+(E^T&(y^E))+w[5]+3593408605&4294967295,g=y+(_<<5&4294967295|_>>>27),_=T+(y^E&(g^y))+w[10]+38016083&4294967295,T=g+(_<<9&4294967295|_>>>23),_=E+(g^y&(T^g))+w[15]+3634488961&4294967295,E=T+(_<<14&4294967295|_>>>18),_=y+(T^g&(E^T))+w[4]+3889429448&4294967295,y=E+(_<<20&4294967295|_>>>12),_=g+(E^T&(y^E))+w[9]+568446438&4294967295,g=y+(_<<5&4294967295|_>>>27),_=T+(y^E&(g^y))+w[14]+3275163606&4294967295,T=g+(_<<9&4294967295|_>>>23),_=E+(g^y&(T^g))+w[3]+4107603335&4294967295,E=T+(_<<14&4294967295|_>>>18),_=y+(T^g&(E^T))+w[8]+1163531501&4294967295,y=E+(_<<20&4294967295|_>>>12),_=g+(E^T&(y^E))+w[13]+2850285829&4294967295,g=y+(_<<5&4294967295|_>>>27),_=T+(y^E&(g^y))+w[2]+4243563512&4294967295,T=g+(_<<9&4294967295|_>>>23),_=E+(g^y&(T^g))+w[7]+1735328473&4294967295,E=T+(_<<14&4294967295|_>>>18),_=y+(T^g&(E^T))+w[12]+2368359562&4294967295,y=E+(_<<20&4294967295|_>>>12),_=g+(y^E^T)+w[5]+4294588738&4294967295,g=y+(_<<4&4294967295|_>>>28),_=T+(g^y^E)+w[8]+2272392833&4294967295,T=g+(_<<11&4294967295|_>>>21),_=E+(T^g^y)+w[11]+1839030562&4294967295,E=T+(_<<16&4294967295|_>>>16),_=y+(E^T^g)+w[14]+4259657740&4294967295,y=E+(_<<23&4294967295|_>>>9),_=g+(y^E^T)+w[1]+2763975236&4294967295,g=y+(_<<4&4294967295|_>>>28),_=T+(g^y^E)+w[4]+1272893353&4294967295,T=g+(_<<11&4294967295|_>>>21),_=E+(T^g^y)+w[7]+4139469664&4294967295,E=T+(_<<16&4294967295|_>>>16),_=y+(E^T^g)+w[10]+3200236656&4294967295,y=E+(_<<23&4294967295|_>>>9),_=g+(y^E^T)+w[13]+681279174&4294967295,g=y+(_<<4&4294967295|_>>>28),_=T+(g^y^E)+w[0]+3936430074&4294967295,T=g+(_<<11&4294967295|_>>>21),_=E+(T^g^y)+w[3]+3572445317&4294967295,E=T+(_<<16&4294967295|_>>>16),_=y+(E^T^g)+w[6]+76029189&4294967295,y=E+(_<<23&4294967295|_>>>9),_=g+(y^E^T)+w[9]+3654602809&4294967295,g=y+(_<<4&4294967295|_>>>28),_=T+(g^y^E)+w[12]+3873151461&4294967295,T=g+(_<<11&4294967295|_>>>21),_=E+(T^g^y)+w[15]+530742520&4294967295,E=T+(_<<16&4294967295|_>>>16),_=y+(E^T^g)+w[2]+3299628645&4294967295,y=E+(_<<23&4294967295|_>>>9),_=g+(E^(y|~T))+w[0]+4096336452&4294967295,g=y+(_<<6&4294967295|_>>>26),_=T+(y^(g|~E))+w[7]+1126891415&4294967295,T=g+(_<<10&4294967295|_>>>22),_=E+(g^(T|~y))+w[14]+2878612391&4294967295,E=T+(_<<15&4294967295|_>>>17),_=y+(T^(E|~g))+w[5]+4237533241&4294967295,y=E+(_<<21&4294967295|_>>>11),_=g+(E^(y|~T))+w[12]+1700485571&4294967295,g=y+(_<<6&4294967295|_>>>26),_=T+(y^(g|~E))+w[3]+2399980690&4294967295,T=g+(_<<10&4294967295|_>>>22),_=E+(g^(T|~y))+w[10]+4293915773&4294967295,E=T+(_<<15&4294967295|_>>>17),_=y+(T^(E|~g))+w[1]+2240044497&4294967295,y=E+(_<<21&4294967295|_>>>11),_=g+(E^(y|~T))+w[8]+1873313359&4294967295,g=y+(_<<6&4294967295|_>>>26),_=T+(y^(g|~E))+w[15]+4264355552&4294967295,T=g+(_<<10&4294967295|_>>>22),_=E+(g^(T|~y))+w[6]+2734768916&4294967295,E=T+(_<<15&4294967295|_>>>17),_=y+(T^(E|~g))+w[13]+1309151649&4294967295,y=E+(_<<21&4294967295|_>>>11),_=g+(E^(y|~T))+w[4]+4149444226&4294967295,g=y+(_<<6&4294967295|_>>>26),_=T+(y^(g|~E))+w[11]+3174756917&4294967295,T=g+(_<<10&4294967295|_>>>22),_=E+(g^(T|~y))+w[2]+718787259&4294967295,E=T+(_<<15&4294967295|_>>>17),_=y+(T^(E|~g))+w[9]+3951481745&4294967295,v.g[0]=v.g[0]+g&4294967295,v.g[1]=v.g[1]+(E+(_<<21&4294967295|_>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+T&4294967295}r.prototype.u=function(v,g){g===void 0&&(g=v.length);for(var y=g-this.blockSize,w=this.B,E=this.h,T=0;T<g;){if(E==0)for(;T<=y;)s(this,v,T),T+=this.blockSize;if(typeof v=="string"){for(;T<g;)if(w[E++]=v.charCodeAt(T++),E==this.blockSize){s(this,w),E=0;break}}else for(;T<g;)if(w[E++]=v[T++],E==this.blockSize){s(this,w),E=0;break}}this.h=E,this.o+=g},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var g=1;g<v.length-8;++g)v[g]=0;var y=8*this.o;for(g=v.length-8;g<v.length;++g)v[g]=y&255,y/=256;for(this.u(v),v=Array(16),g=y=0;4>g;++g)for(var w=0;32>w;w+=8)v[y++]=this.g[g]>>>w&255;return v};function o(v,g){var y=l;return Object.prototype.hasOwnProperty.call(y,v)?y[v]:y[v]=g(v)}function a(v,g){this.h=g;for(var y=[],w=!0,E=v.length-1;0<=E;E--){var T=v[E]|0;w&&T==g||(y[E]=T,w=!1)}this.g=y}var l={};function u(v){return-128<=v&&128>v?o(v,function(g){return new a([g|0],0>g?-1:0)}):new a([v|0],0>v?-1:0)}function f(v){if(isNaN(v)||!isFinite(v))return I;if(0>v)return x(f(-v));for(var g=[],y=1,w=0;v>=y;w++)g[w]=v/y|0,y*=4294967296;return new a(g,0)}function m(v,g){if(v.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(v.charAt(0)=="-")return x(m(v.substring(1),g));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=f(Math.pow(g,8)),w=I,E=0;E<v.length;E+=8){var T=Math.min(8,v.length-E),_=parseInt(v.substring(E,E+T),g);8>T?(T=f(Math.pow(g,T)),w=w.j(T).add(f(_))):(w=w.j(y),w=w.add(f(_)))}return w}var I=u(0),A=u(1),R=u(16777216);n=a.prototype,n.m=function(){if(N(this))return-x(this).m();for(var v=0,g=1,y=0;y<this.g.length;y++){var w=this.i(y);v+=(0<=w?w:4294967296+w)*g,g*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(P(this))return"0";if(N(this))return"-"+x(this).toString(v);for(var g=f(Math.pow(v,6)),y=this,w="";;){var E=U(y,g).g;y=F(y,E.j(g));var T=((0<y.g.length?y.g[0]:y.h)>>>0).toString(v);if(y=E,P(y))return T+w;for(;6>T.length;)T="0"+T;w=T+w}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function P(v){if(v.h!=0)return!1;for(var g=0;g<v.g.length;g++)if(v.g[g]!=0)return!1;return!0}function N(v){return v.h==-1}n.l=function(v){return v=F(this,v),N(v)?-1:P(v)?0:1};function x(v){for(var g=v.g.length,y=[],w=0;w<g;w++)y[w]=~v.g[w];return new a(y,~v.h).add(A)}n.abs=function(){return N(this)?x(this):this},n.add=function(v){for(var g=Math.max(this.g.length,v.g.length),y=[],w=0,E=0;E<=g;E++){var T=w+(this.i(E)&65535)+(v.i(E)&65535),_=(T>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);w=_>>>16,T&=65535,_&=65535,y[E]=_<<16|T}return new a(y,y[y.length-1]&-2147483648?-1:0)};function F(v,g){return v.add(x(g))}n.j=function(v){if(P(this)||P(v))return I;if(N(this))return N(v)?x(this).j(x(v)):x(x(this).j(v));if(N(v))return x(this.j(x(v)));if(0>this.l(R)&&0>v.l(R))return f(this.m()*v.m());for(var g=this.g.length+v.g.length,y=[],w=0;w<2*g;w++)y[w]=0;for(w=0;w<this.g.length;w++)for(var E=0;E<v.g.length;E++){var T=this.i(w)>>>16,_=this.i(w)&65535,De=v.i(E)>>>16,Rt=v.i(E)&65535;y[2*w+2*E]+=_*Rt,V(y,2*w+2*E),y[2*w+2*E+1]+=T*Rt,V(y,2*w+2*E+1),y[2*w+2*E+1]+=_*De,V(y,2*w+2*E+1),y[2*w+2*E+2]+=T*De,V(y,2*w+2*E+2)}for(w=0;w<g;w++)y[w]=y[2*w+1]<<16|y[2*w];for(w=g;w<2*g;w++)y[w]=0;return new a(y,0)};function V(v,g){for(;(v[g]&65535)!=v[g];)v[g+1]+=v[g]>>>16,v[g]&=65535,g++}function q(v,g){this.g=v,this.h=g}function U(v,g){if(P(g))throw Error("division by zero");if(P(v))return new q(I,I);if(N(v))return g=U(x(v),g),new q(x(g.g),x(g.h));if(N(g))return g=U(v,x(g)),new q(x(g.g),g.h);if(30<v.g.length){if(N(v)||N(g))throw Error("slowDivide_ only works with positive integers.");for(var y=A,w=g;0>=w.l(v);)y=re(y),w=re(w);var E=C(y,1),T=C(w,1);for(w=C(w,2),y=C(y,2);!P(w);){var _=T.add(w);0>=_.l(v)&&(E=E.add(y),T=_),w=C(w,1),y=C(y,1)}return g=F(v,E.j(g)),new q(E,g)}for(E=I;0<=v.l(g);){for(y=Math.max(1,Math.floor(v.m()/g.m())),w=Math.ceil(Math.log(y)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),T=f(y),_=T.j(g);N(_)||0<_.l(v);)y-=w,T=f(y),_=T.j(g);P(T)&&(T=A),E=E.add(T),v=F(v,_)}return new q(E,v)}n.A=function(v){return U(this,v).h},n.and=function(v){for(var g=Math.max(this.g.length,v.g.length),y=[],w=0;w<g;w++)y[w]=this.i(w)&v.i(w);return new a(y,this.h&v.h)},n.or=function(v){for(var g=Math.max(this.g.length,v.g.length),y=[],w=0;w<g;w++)y[w]=this.i(w)|v.i(w);return new a(y,this.h|v.h)},n.xor=function(v){for(var g=Math.max(this.g.length,v.g.length),y=[],w=0;w<g;w++)y[w]=this.i(w)^v.i(w);return new a(y,this.h^v.h)};function re(v){for(var g=v.g.length+1,y=[],w=0;w<g;w++)y[w]=v.i(w)<<1|v.i(w-1)>>>31;return new a(y,v.h)}function C(v,g){var y=g>>5;g%=32;for(var w=v.g.length-y,E=[],T=0;T<w;T++)E[T]=0<g?v.i(T+y)>>>g|v.i(T+y+1)<<32-g:v.i(T+y);return new a(E,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Tc=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=m,Ot=a}).apply(typeof Wa<"u"?Wa:typeof self<"u"?self:typeof window<"u"?window:{});var zr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bc,zn,Ac,Zr,_i,Sc,Rc,xc;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,c,h){return i==Array.prototype||i==Object.prototype||(i[c]=h.value),i};function t(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof zr=="object"&&zr];for(var c=0;c<i.length;++c){var h=i[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(i,c){if(c)e:{var h=r;i=i.split(".");for(var p=0;p<i.length-1;p++){var b=i[p];if(!(b in h))break e;h=h[b]}i=i[i.length-1],p=h[i],c=c(p),c!=p&&c!=null&&e(h,i,{configurable:!0,writable:!0,value:c})}}function o(i,c){i instanceof String&&(i+="");var h=0,p=!1,b={next:function(){if(!p&&h<i.length){var S=h++;return{value:c(S,i[S]),done:!1}}return p=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}s("Array.prototype.values",function(i){return i||function(){return o(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(i){var c=typeof i;return c=c!="object"?c:i?Array.isArray(i)?"array":c:"null",c=="array"||c=="object"&&typeof i.length=="number"}function f(i){var c=typeof i;return c=="object"&&i!=null||c=="function"}function m(i,c,h){return i.call.apply(i.bind,arguments)}function I(i,c,h){if(!i)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,p),i.apply(c,b)}}return function(){return i.apply(c,arguments)}}function A(i,c,h){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:I,A.apply(null,arguments)}function R(i,c){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),i.apply(this,p)}}function P(i,c){function h(){}h.prototype=c.prototype,i.aa=c.prototype,i.prototype=new h,i.prototype.constructor=i,i.Qb=function(p,b,S){for(var M=Array(arguments.length-2),ne=2;ne<arguments.length;ne++)M[ne-2]=arguments[ne];return c.prototype[b].apply(p,M)}}function N(i){const c=i.length;if(0<c){const h=Array(c);for(let p=0;p<c;p++)h[p]=i[p];return h}return[]}function x(i,c){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(u(p)){const b=i.length||0,S=p.length||0;i.length=b+S;for(let M=0;M<S;M++)i[b+M]=p[M]}else i.push(p)}}class F{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function V(i){return/^[\s\xa0]*$/.test(i)}function q(){var i=l.navigator;return i&&(i=i.userAgent)?i:""}function U(i){return U[" "](i),i}U[" "]=function(){};var re=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function C(i,c,h){for(const p in i)c.call(h,i[p],p,i)}function v(i,c){for(const h in i)c.call(void 0,i[h],h,i)}function g(i){const c={};for(const h in i)c[h]=i[h];return c}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(i,c){let h,p;for(let b=1;b<arguments.length;b++){p=arguments[b];for(h in p)i[h]=p[h];for(let S=0;S<y.length;S++)h=y[S],Object.prototype.hasOwnProperty.call(p,h)&&(i[h]=p[h])}}function E(i){var c=1;i=i.split(":");const h=[];for(;0<c&&i.length;)h.push(i.shift()),c--;return i.length&&h.push(i.join(":")),h}function T(i){l.setTimeout(()=>{throw i},0)}function _(){var i=zt;let c=null;return i.g&&(c=i.g,i.g=i.g.next,i.g||(i.h=null),c.next=null),c}class De{constructor(){this.h=this.g=null}add(c,h){const p=Rt.get();p.set(c,h),this.h?this.h.next=p:this.g=p,this.h=p}}var Rt=new F(()=>new Gt,i=>i.reset());class Gt{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let ut,Je=!1,zt=new De,Sn=()=>{const i=l.Promise.resolve(void 0);ut=()=>{i.then(Ir)}};var Ir=()=>{for(var i;i=_();){try{i.h.call(i.g)}catch(h){T(h)}var c=Rt;c.j(i),100>c.h&&(c.h++,i.next=c.g,c.g=i)}Je=!1};function qe(){this.s=this.s,this.C=this.C}qe.prototype.s=!1,qe.prototype.ma=function(){this.s||(this.s=!0,this.N())},qe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ge(i,c){this.type=i,this.g=this.target=c,this.defaultPrevented=!1}ge.prototype.h=function(){this.defaultPrevented=!0};var de=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var i=!1,c=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return i}();function je(i,c){if(ge.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var h=this.type=i.type,p=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=c,c=i.relatedTarget){if(re){e:{try{U(c.nodeName);var b=!0;break e}catch{}b=!1}b||(c=null)}}else h=="mouseover"?c=i.fromElement:h=="mouseout"&&(c=i.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Rn[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&je.aa.h.call(this)}}P(je,ge);var Rn={2:"touch",3:"pen",4:"mouse"};je.prototype.h=function(){je.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var fe="closure_listenable_"+(1e6*Math.random()|0),Ds=0;function Tr(i,c,h,p,b){this.listener=i,this.proxy=null,this.src=c,this.type=h,this.capture=!!p,this.ha=b,this.key=++Ds,this.da=this.fa=!1}function Ht(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Wt(i){this.src=i,this.g={},this.h=0}Wt.prototype.add=function(i,c,h,p,b){var S=i.toString();i=this.g[S],i||(i=this.g[S]=[],this.h++);var M=Qt(i,c,p,b);return-1<M?(c=i[M],h||(c.fa=!1)):(c=new Tr(c,this.src,S,!!p,b),c.fa=h,i.push(c)),c};function Kt(i,c){var h=c.type;if(h in i.g){var p=i.g[h],b=Array.prototype.indexOf.call(p,c,void 0),S;(S=0<=b)&&Array.prototype.splice.call(p,b,1),S&&(Ht(c),i.g[h].length==0&&(delete i.g[h],i.h--))}}function Qt(i,c,h,p){for(var b=0;b<i.length;++b){var S=i[b];if(!S.da&&S.listener==c&&S.capture==!!h&&S.ha==p)return b}return-1}var Jt="closure_lm_"+(1e6*Math.random()|0),xn={};function br(i,c,h,p,b){if(Array.isArray(c)){for(var S=0;S<c.length;S++)br(i,c[S],h,p,b);return null}return h=se(h),i&&i[fe]?i.K(c,h,f(p)?!!p.capture:!1,b):Ar(i,c,h,!1,p,b)}function Ar(i,c,h,p,b,S){if(!c)throw Error("Invalid event type");var M=f(b)?!!b.capture:!!b,ne=O(i);if(ne||(i[Jt]=ne=new Wt(i)),h=ne.add(c,h,p,M,S),h.proxy)return h;if(p=Sr(),h.proxy=p,p.src=i,p.listener=h,i.addEventListener)de||(b=M),b===void 0&&(b=!1),i.addEventListener(c.toString(),p,b);else if(i.attachEvent)i.attachEvent(Rr(c.toString()),p);else if(i.addListener&&i.removeListener)i.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Sr(){function i(h){return c.call(i.src,i.listener,h)}const c=Vs;return i}function Pn(i,c,h,p,b){if(Array.isArray(c))for(var S=0;S<c.length;S++)Pn(i,c[S],h,p,b);else p=f(p)?!!p.capture:!!p,h=se(h),i&&i[fe]?(i=i.i,c=String(c).toString(),c in i.g&&(S=i.g[c],h=Qt(S,h,p,b),-1<h&&(Ht(S[h]),Array.prototype.splice.call(S,h,1),S.length==0&&(delete i.g[c],i.h--)))):i&&(i=O(i))&&(c=i.g[c.toString()],i=-1,c&&(i=Qt(c,h,p,b)),(h=-1<i?c[i]:null)&&Cn(h))}function Cn(i){if(typeof i!="number"&&i&&!i.da){var c=i.src;if(c&&c[fe])Kt(c.i,i);else{var h=i.type,p=i.proxy;c.removeEventListener?c.removeEventListener(h,p,i.capture):c.detachEvent?c.detachEvent(Rr(h),p):c.addListener&&c.removeListener&&c.removeListener(p),(h=O(c))?(Kt(h,i),h.h==0&&(h.src=null,c[Jt]=null)):Ht(i)}}}function Rr(i){return i in xn?xn[i]:xn[i]="on"+i}function Vs(i,c){if(i.da)i=!0;else{c=new je(c,this);var h=i.listener,p=i.ha||i.src;i.fa&&Cn(i),i=h.call(p,c)}return i}function O(i){return i=i[Jt],i instanceof Wt?i:null}var j="__closure_events_fn_"+(1e9*Math.random()>>>0);function se(i){return typeof i=="function"?i:(i[j]||(i[j]=function(c){return i.handleEvent(c)}),i[j])}function ee(){qe.call(this),this.i=new Wt(this),this.M=this,this.F=null}P(ee,qe),ee.prototype[fe]=!0,ee.prototype.removeEventListener=function(i,c,h,p){Pn(this,i,c,h,p)};function Q(i,c){var h,p=i.F;if(p)for(h=[];p;p=p.F)h.push(p);if(i=i.M,p=c.type||c,typeof c=="string")c=new ge(c,i);else if(c instanceof ge)c.target=c.target||i;else{var b=c;c=new ge(p,i),w(c,b)}if(b=!0,h)for(var S=h.length-1;0<=S;S--){var M=c.g=h[S];b=ye(M,p,!0,c)&&b}if(M=c.g=i,b=ye(M,p,!0,c)&&b,b=ye(M,p,!1,c)&&b,h)for(S=0;S<h.length;S++)M=c.g=h[S],b=ye(M,p,!1,c)&&b}ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var i=this.i,c;for(c in i.g){for(var h=i.g[c],p=0;p<h.length;p++)Ht(h[p]);delete i.g[c],i.h--}}this.F=null},ee.prototype.K=function(i,c,h,p){return this.i.add(String(i),c,!1,h,p)},ee.prototype.L=function(i,c,h,p){return this.i.add(String(i),c,!0,h,p)};function ye(i,c,h,p){if(c=i.i.g[String(c)],!c)return!0;c=c.concat();for(var b=!0,S=0;S<c.length;++S){var M=c[S];if(M&&!M.da&&M.capture==h){var ne=M.listener,ve=M.ha||M.src;M.fa&&Kt(i.i,M),b=ne.call(ve,p)!==!1&&b}}return b&&!p.defaultPrevented}function ke(i,c,h){if(typeof i=="function")h&&(i=A(i,h));else if(i&&typeof i.handleEvent=="function")i=A(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(i,c||0)}function So(i){i.g=ke(()=>{i.g=null,i.i&&(i.i=!1,So(i))},i.l);const c=i.h;i.h=null,i.m.apply(null,c)}class $u extends qe{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:So(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function kn(i){qe.call(this),this.h=i,this.g={}}P(kn,qe);var Ro=[];function xo(i){C(i.g,function(c,h){this.g.hasOwnProperty(h)&&Cn(c)},i),i.g={}}kn.prototype.N=function(){kn.aa.N.call(this),xo(this)},kn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ms=l.JSON.stringify,qu=l.JSON.parse,Gu=class{stringify(i){return l.JSON.stringify(i,void 0)}parse(i){return l.JSON.parse(i,void 0)}};function Os(){}Os.prototype.h=null;function Po(i){return i.h||(i.h=i.i())}function Co(){}var Nn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ls(){ge.call(this,"d")}P(Ls,ge);function js(){ge.call(this,"c")}P(js,ge);var xt={},ko=null;function xr(){return ko=ko||new ee}xt.La="serverreachability";function No(i){ge.call(this,xt.La,i)}P(No,ge);function Dn(i){const c=xr();Q(c,new No(c))}xt.STAT_EVENT="statevent";function Do(i,c){ge.call(this,xt.STAT_EVENT,i),this.stat=c}P(Do,ge);function Ce(i){const c=xr();Q(c,new Do(c,i))}xt.Ma="timingevent";function Vo(i,c){ge.call(this,xt.Ma,i),this.size=c}P(Vo,ge);function Vn(i,c){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){i()},c)}function Mn(){this.g=!0}Mn.prototype.xa=function(){this.g=!1};function zu(i,c,h,p,b,S){i.info(function(){if(i.g)if(S)for(var M="",ne=S.split("&"),ve=0;ve<ne.length;ve++){var Y=ne[ve].split("=");if(1<Y.length){var be=Y[0];Y=Y[1];var Ae=be.split("_");M=2<=Ae.length&&Ae[1]=="type"?M+(be+"="+Y+"&"):M+(be+"=redacted&")}}else M=null;else M=S;return"XMLHTTP REQ ("+p+") [attempt "+b+"]: "+c+`
`+h+`
`+M})}function Hu(i,c,h,p,b,S,M){i.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+b+"]: "+c+`
`+h+`
`+S+" "+M})}function Xt(i,c,h,p){i.info(function(){return"XMLHTTP TEXT ("+c+"): "+Ku(i,h)+(p?" "+p:"")})}function Wu(i,c){i.info(function(){return"TIMEOUT: "+c})}Mn.prototype.info=function(){};function Ku(i,c){if(!i.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(i=0;i<h.length;i++)if(Array.isArray(h[i])){var p=h[i];if(!(2>p.length)){var b=p[1];if(Array.isArray(b)&&!(1>b.length)){var S=b[0];if(S!="noop"&&S!="stop"&&S!="close")for(var M=1;M<b.length;M++)b[M]=""}}}}return Ms(h)}catch{return c}}var Pr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Mo={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Fs;function Cr(){}P(Cr,Os),Cr.prototype.g=function(){return new XMLHttpRequest},Cr.prototype.i=function(){return{}},Fs=new Cr;function ht(i,c,h,p){this.j=i,this.i=c,this.l=h,this.R=p||1,this.U=new kn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Oo}function Oo(){this.i=null,this.g="",this.h=!1}var Lo={},Us={};function Bs(i,c,h){i.L=1,i.v=Vr(Xe(c)),i.m=h,i.P=!0,jo(i,null)}function jo(i,c){i.F=Date.now(),kr(i),i.A=Xe(i.v);var h=i.A,p=i.R;Array.isArray(p)||(p=[String(p)]),Yo(h.i,"t",p),i.C=0,h=i.j.J,i.h=new Oo,i.g=ga(i.j,h?c:null,!i.m),0<i.O&&(i.M=new $u(A(i.Y,i,i.g),i.O)),c=i.U,h=i.g,p=i.ca;var b="readystatechange";Array.isArray(b)||(b&&(Ro[0]=b.toString()),b=Ro);for(var S=0;S<b.length;S++){var M=br(h,b[S],p||c.handleEvent,!1,c.h||c);if(!M)break;c.g[M.key]=M}c=i.H?g(i.H):{},i.m?(i.u||(i.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,c)):(i.u="GET",i.g.ea(i.A,i.u,null,c)),Dn(),zu(i.i,i.u,i.A,i.l,i.R,i.m)}ht.prototype.ca=function(i){i=i.target;const c=this.M;c&&Ye(i)==3?c.j():this.Y(i)},ht.prototype.Y=function(i){try{if(i==this.g)e:{const Ae=Ye(this.g);var c=this.g.Ba();const en=this.g.Z();if(!(3>Ae)&&(Ae!=3||this.g&&(this.h.h||this.g.oa()||ia(this.g)))){this.J||Ae!=4||c==7||(c==8||0>=en?Dn(3):Dn(2)),$s(this);var h=this.g.Z();this.X=h;t:if(Fo(this)){var p=ia(this.g);i="";var b=p.length,S=Ye(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Pt(this),On(this);var M="";break t}this.h.i=new l.TextDecoder}for(c=0;c<b;c++)this.h.h=!0,i+=this.h.i.decode(p[c],{stream:!(S&&c==b-1)});p.length=0,this.h.g+=i,this.C=0,M=this.h.g}else M=this.g.oa();if(this.o=h==200,Hu(this.i,this.u,this.A,this.l,this.R,Ae,h),this.o){if(this.T&&!this.K){t:{if(this.g){var ne,ve=this.g;if((ne=ve.g?ve.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!V(ne)){var Y=ne;break t}}Y=null}if(h=Y)Xt(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qs(this,h);else{this.o=!1,this.s=3,Ce(12),Pt(this),On(this);break e}}if(this.P){h=!0;let Fe;for(;!this.J&&this.C<M.length;)if(Fe=Qu(this,M),Fe==Us){Ae==4&&(this.s=4,Ce(14),h=!1),Xt(this.i,this.l,null,"[Incomplete Response]");break}else if(Fe==Lo){this.s=4,Ce(15),Xt(this.i,this.l,M,"[Invalid Chunk]"),h=!1;break}else Xt(this.i,this.l,Fe,null),qs(this,Fe);if(Fo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ae!=4||M.length!=0||this.h.h||(this.s=1,Ce(16),h=!1),this.o=this.o&&h,!h)Xt(this.i,this.l,M,"[Invalid Chunked Response]"),Pt(this),On(this);else if(0<M.length&&!this.W){this.W=!0;var be=this.j;be.g==this&&be.ba&&!be.M&&(be.j.info("Great, no buffering proxy detected. Bytes received: "+M.length),Qs(be),be.M=!0,Ce(11))}}else Xt(this.i,this.l,M,null),qs(this,M);Ae==4&&Pt(this),this.o&&!this.J&&(Ae==4?da(this.j,this):(this.o=!1,kr(this)))}else dh(this.g),h==400&&0<M.indexOf("Unknown SID")?(this.s=3,Ce(12)):(this.s=0,Ce(13)),Pt(this),On(this)}}}catch{}finally{}};function Fo(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Qu(i,c){var h=i.C,p=c.indexOf(`
`,h);return p==-1?Us:(h=Number(c.substring(h,p)),isNaN(h)?Lo:(p+=1,p+h>c.length?Us:(c=c.slice(p,p+h),i.C=p+h,c)))}ht.prototype.cancel=function(){this.J=!0,Pt(this)};function kr(i){i.S=Date.now()+i.I,Uo(i,i.I)}function Uo(i,c){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Vn(A(i.ba,i),c)}function $s(i){i.B&&(l.clearTimeout(i.B),i.B=null)}ht.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(Wu(this.i,this.A),this.L!=2&&(Dn(),Ce(17)),Pt(this),this.s=2,On(this)):Uo(this,this.S-i)};function On(i){i.j.G==0||i.J||da(i.j,i)}function Pt(i){$s(i);var c=i.M;c&&typeof c.ma=="function"&&c.ma(),i.M=null,xo(i.U),i.g&&(c=i.g,i.g=null,c.abort(),c.ma())}function qs(i,c){try{var h=i.j;if(h.G!=0&&(h.g==i||Gs(h.h,i))){if(!i.K&&Gs(h.h,i)&&h.G==3){try{var p=h.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var b=p;if(b[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<i.F)Ur(h),jr(h);else break e;Ks(h),Ce(18)}}else h.za=b[1],0<h.za-h.T&&37500>b[2]&&h.F&&h.v==0&&!h.C&&(h.C=Vn(A(h.Za,h),6e3));if(1>=qo(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else kt(h,11)}else if((i.K||h.g==i)&&Ur(h),!V(c))for(b=h.Da.g.parse(c),c=0;c<b.length;c++){let Y=b[c];if(h.T=Y[0],Y=Y[1],h.G==2)if(Y[0]=="c"){h.K=Y[1],h.ia=Y[2];const be=Y[3];be!=null&&(h.la=be,h.j.info("VER="+h.la));const Ae=Y[4];Ae!=null&&(h.Aa=Ae,h.j.info("SVER="+h.Aa));const en=Y[5];en!=null&&typeof en=="number"&&0<en&&(p=1.5*en,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const Fe=i.g;if(Fe){const $r=Fe.g?Fe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($r){var S=p.h;S.g||$r.indexOf("spdy")==-1&&$r.indexOf("quic")==-1&&$r.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(zs(S,S.h),S.h=null))}if(p.D){const Js=Fe.g?Fe.g.getResponseHeader("X-HTTP-Session-Id"):null;Js&&(p.ya=Js,ie(p.I,p.D,Js))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-i.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var M=i;if(p.qa=ma(p,p.J?p.ia:null,p.W),M.K){Go(p.h,M);var ne=M,ve=p.L;ve&&(ne.I=ve),ne.B&&($s(ne),kr(ne)),p.g=M}else ua(p);0<h.i.length&&Fr(h)}else Y[0]!="stop"&&Y[0]!="close"||kt(h,7);else h.G==3&&(Y[0]=="stop"||Y[0]=="close"?Y[0]=="stop"?kt(h,7):Ws(h):Y[0]!="noop"&&h.l&&h.l.ta(Y),h.v=0)}}Dn(4)}catch{}}var Ju=class{constructor(i,c){this.g=i,this.map=c}};function Bo(i){this.l=i||10,l.PerformanceNavigationTiming?(i=l.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function $o(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function qo(i){return i.h?1:i.g?i.g.size:0}function Gs(i,c){return i.h?i.h==c:i.g?i.g.has(c):!1}function zs(i,c){i.g?i.g.add(c):i.h=c}function Go(i,c){i.h&&i.h==c?i.h=null:i.g&&i.g.has(c)&&i.g.delete(c)}Bo.prototype.cancel=function(){if(this.i=zo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function zo(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let c=i.i;for(const h of i.g.values())c=c.concat(h.D);return c}return N(i.i)}function Xu(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(u(i)){for(var c=[],h=i.length,p=0;p<h;p++)c.push(i[p]);return c}c=[],h=0;for(p in i)c[h++]=i[p];return c}function Yu(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(u(i)||typeof i=="string"){var c=[];i=i.length;for(var h=0;h<i;h++)c.push(h);return c}c=[],h=0;for(const p in i)c[h++]=p;return c}}}function Ho(i,c){if(i.forEach&&typeof i.forEach=="function")i.forEach(c,void 0);else if(u(i)||typeof i=="string")Array.prototype.forEach.call(i,c,void 0);else for(var h=Yu(i),p=Xu(i),b=p.length,S=0;S<b;S++)c.call(void 0,p[S],h&&h[S],i)}var Wo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Zu(i,c){if(i){i=i.split("&");for(var h=0;h<i.length;h++){var p=i[h].indexOf("="),b=null;if(0<=p){var S=i[h].substring(0,p);b=i[h].substring(p+1)}else S=i[h];c(S,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Ct(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof Ct){this.h=i.h,Nr(this,i.j),this.o=i.o,this.g=i.g,Dr(this,i.s),this.l=i.l;var c=i.i,h=new Fn;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),Ko(this,h),this.m=i.m}else i&&(c=String(i).match(Wo))?(this.h=!1,Nr(this,c[1]||"",!0),this.o=Ln(c[2]||""),this.g=Ln(c[3]||"",!0),Dr(this,c[4]),this.l=Ln(c[5]||"",!0),Ko(this,c[6]||"",!0),this.m=Ln(c[7]||"")):(this.h=!1,this.i=new Fn(null,this.h))}Ct.prototype.toString=function(){var i=[],c=this.j;c&&i.push(jn(c,Qo,!0),":");var h=this.g;return(h||c=="file")&&(i.push("//"),(c=this.o)&&i.push(jn(c,Qo,!0),"@"),i.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&i.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&i.push("/"),i.push(jn(h,h.charAt(0)=="/"?nh:th,!0))),(h=this.i.toString())&&i.push("?",h),(h=this.m)&&i.push("#",jn(h,sh)),i.join("")};function Xe(i){return new Ct(i)}function Nr(i,c,h){i.j=h?Ln(c,!0):c,i.j&&(i.j=i.j.replace(/:$/,""))}function Dr(i,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);i.s=c}else i.s=null}function Ko(i,c,h){c instanceof Fn?(i.i=c,ih(i.i,i.h)):(h||(c=jn(c,rh)),i.i=new Fn(c,i.h))}function ie(i,c,h){i.i.set(c,h)}function Vr(i){return ie(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Ln(i,c){return i?c?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function jn(i,c,h){return typeof i=="string"?(i=encodeURI(i).replace(c,eh),h&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function eh(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Qo=/[#\/\?@]/g,th=/[#\?:]/g,nh=/[#\?]/g,rh=/[#\?@]/g,sh=/#/g;function Fn(i,c){this.h=this.g=null,this.i=i||null,this.j=!!c}function dt(i){i.g||(i.g=new Map,i.h=0,i.i&&Zu(i.i,function(c,h){i.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=Fn.prototype,n.add=function(i,c){dt(this),this.i=null,i=Yt(this,i);var h=this.g.get(i);return h||this.g.set(i,h=[]),h.push(c),this.h+=1,this};function Jo(i,c){dt(i),c=Yt(i,c),i.g.has(c)&&(i.i=null,i.h-=i.g.get(c).length,i.g.delete(c))}function Xo(i,c){return dt(i),c=Yt(i,c),i.g.has(c)}n.forEach=function(i,c){dt(this),this.g.forEach(function(h,p){h.forEach(function(b){i.call(c,b,p,this)},this)},this)},n.na=function(){dt(this);const i=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let p=0;p<c.length;p++){const b=i[p];for(let S=0;S<b.length;S++)h.push(c[p])}return h},n.V=function(i){dt(this);let c=[];if(typeof i=="string")Xo(this,i)&&(c=c.concat(this.g.get(Yt(this,i))));else{i=Array.from(this.g.values());for(let h=0;h<i.length;h++)c=c.concat(i[h])}return c},n.set=function(i,c){return dt(this),this.i=null,i=Yt(this,i),Xo(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[c]),this.h+=1,this},n.get=function(i,c){return i?(i=this.V(i),0<i.length?String(i[0]):c):c};function Yo(i,c,h){Jo(i,c),0<h.length&&(i.i=null,i.g.set(Yt(i,c),N(h)),i.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var p=c[h];const S=encodeURIComponent(String(p)),M=this.V(p);for(p=0;p<M.length;p++){var b=S;M[p]!==""&&(b+="="+encodeURIComponent(String(M[p]))),i.push(b)}}return this.i=i.join("&")};function Yt(i,c){return c=String(c),i.j&&(c=c.toLowerCase()),c}function ih(i,c){c&&!i.j&&(dt(i),i.i=null,i.g.forEach(function(h,p){var b=p.toLowerCase();p!=b&&(Jo(this,p),Yo(this,b,h))},i)),i.j=c}function oh(i,c){const h=new Mn;if(l.Image){const p=new Image;p.onload=R(ft,h,"TestLoadImage: loaded",!0,c,p),p.onerror=R(ft,h,"TestLoadImage: error",!1,c,p),p.onabort=R(ft,h,"TestLoadImage: abort",!1,c,p),p.ontimeout=R(ft,h,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=i}else c(!1)}function ah(i,c){const h=new Mn,p=new AbortController,b=setTimeout(()=>{p.abort(),ft(h,"TestPingServer: timeout",!1,c)},1e4);fetch(i,{signal:p.signal}).then(S=>{clearTimeout(b),S.ok?ft(h,"TestPingServer: ok",!0,c):ft(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(b),ft(h,"TestPingServer: error",!1,c)})}function ft(i,c,h,p,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),p(h)}catch{}}function lh(){this.g=new Gu}function ch(i,c,h){const p=h||"";try{Ho(i,function(b,S){let M=b;f(b)&&(M=Ms(b)),c.push(p+S+"="+encodeURIComponent(M))})}catch(b){throw c.push(p+"type="+encodeURIComponent("_badmap")),b}}function Mr(i){this.l=i.Ub||null,this.j=i.eb||!1}P(Mr,Os),Mr.prototype.g=function(){return new Or(this.l,this.j)},Mr.prototype.i=function(i){return function(){return i}}({});function Or(i,c){ee.call(this),this.D=i,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Or,ee),n=Or.prototype,n.open=function(i,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=c,this.readyState=1,Bn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(c.body=i),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Un(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Bn(this)),this.g&&(this.readyState=3,Bn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Zo(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Zo(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var c=i.value?i.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!i.done}))&&(this.response=this.responseText+=c)}i.done?Un(this):Bn(this),this.readyState==3&&Zo(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,Un(this))},n.Qa=function(i){this.g&&(this.response=i,Un(this))},n.ga=function(){this.g&&Un(this)};function Un(i){i.readyState=4,i.l=null,i.j=null,i.v=null,Bn(i)}n.setRequestHeader=function(i,c){this.u.append(i,c)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,i.push(h[0]+": "+h[1]),h=c.next();return i.join(`\r
`)};function Bn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Or.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function ea(i){let c="";return C(i,function(h,p){c+=p,c+=":",c+=h,c+=`\r
`}),c}function Hs(i,c,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=ea(h),typeof i=="string"?h!=null&&encodeURIComponent(String(h)):ie(i,c,h))}function ae(i){ee.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(ae,ee);var uh=/^https?$/i,hh=["POST","PUT"];n=ae.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,c,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);c=c?c.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Fs.g(),this.v=this.o?Po(this.o):Po(Fs),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(c,String(i),!0),this.B=!1}catch(S){ta(this,S);return}if(i=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var b in p)h.set(b,p[b]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const S of p.keys())h.set(S,p.get(S));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(S=>S.toLowerCase()=="content-type"),b=l.FormData&&i instanceof l.FormData,!(0<=Array.prototype.indexOf.call(hh,c,void 0))||p||b||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,M]of h)this.g.setRequestHeader(S,M);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{sa(this),this.u=!0,this.g.send(i),this.u=!1}catch(S){ta(this,S)}};function ta(i,c){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=c,i.m=5,na(i),Lr(i)}function na(i){i.A||(i.A=!0,Q(i,"complete"),Q(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,Q(this,"complete"),Q(this,"abort"),Lr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Lr(this,!0)),ae.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ra(this):this.bb())},n.bb=function(){ra(this)};function ra(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Ye(i)!=4||i.Z()!=2)){if(i.u&&Ye(i)==4)ke(i.Ea,0,i);else if(Q(i,"readystatechange"),Ye(i)==4){i.h=!1;try{const M=i.Z();e:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var p;if(p=M===0){var b=String(i.D).match(Wo)[1]||null;!b&&l.self&&l.self.location&&(b=l.self.location.protocol.slice(0,-1)),p=!uh.test(b?b.toLowerCase():"")}h=p}if(h)Q(i,"complete"),Q(i,"success");else{i.m=6;try{var S=2<Ye(i)?i.g.statusText:""}catch{S=""}i.l=S+" ["+i.Z()+"]",na(i)}}finally{Lr(i)}}}}function Lr(i,c){if(i.g){sa(i);const h=i.g,p=i.v[0]?()=>{}:null;i.g=null,i.v=null,c||Q(i,"ready");try{h.onreadystatechange=p}catch{}}}function sa(i){i.I&&(l.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Ye(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Ye(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var c=this.g.responseText;return i&&c.indexOf(i)==0&&(c=c.substring(i.length)),qu(c)}};function ia(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function dh(i){const c={};i=(i.g&&2<=Ye(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<i.length;p++){if(V(i[p]))continue;var h=E(i[p]);const b=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const S=c[b]||[];c[b]=S,S.push(h)}v(c,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function $n(i,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[i]||c}function oa(i){this.Aa=0,this.i=[],this.j=new Mn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=$n("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=$n("baseRetryDelayMs",5e3,i),this.cb=$n("retryDelaySeedMs",1e4,i),this.Wa=$n("forwardChannelMaxRetries",2,i),this.wa=$n("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Bo(i&&i.concurrentRequestLimit),this.Da=new lh,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=oa.prototype,n.la=8,n.G=1,n.connect=function(i,c,h,p){Ce(0),this.W=i,this.H=c||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=ma(this,null,this.W),Fr(this)};function Ws(i){if(aa(i),i.G==3){var c=i.U++,h=Xe(i.I);if(ie(h,"SID",i.K),ie(h,"RID",c),ie(h,"TYPE","terminate"),qn(i,h),c=new ht(i,i.j,c),c.L=2,c.v=Vr(Xe(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=ga(c.j,null),c.g.ea(c.v)),c.F=Date.now(),kr(c)}pa(i)}function jr(i){i.g&&(Qs(i),i.g.cancel(),i.g=null)}function aa(i){jr(i),i.u&&(l.clearTimeout(i.u),i.u=null),Ur(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&l.clearTimeout(i.s),i.s=null)}function Fr(i){if(!$o(i.h)&&!i.s){i.s=!0;var c=i.Ga;ut||Sn(),Je||(ut(),Je=!0),zt.add(c,i),i.B=0}}function fh(i,c){return qo(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=c.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Vn(A(i.Ga,i,c),fa(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const b=new ht(this,this.j,i);let S=this.o;if(this.S&&(S?(S=g(S),w(S,this.S)):S=this.S),this.m!==null||this.O||(b.H=S,S=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=ca(this,b,c),h=Xe(this.I),ie(h,"RID",i),ie(h,"CVER",22),this.D&&ie(h,"X-HTTP-Session-Id",this.D),qn(this,h),S&&(this.O?c="headers="+encodeURIComponent(String(ea(S)))+"&"+c:this.m&&Hs(h,this.m,S)),zs(this.h,b),this.Ua&&ie(h,"TYPE","init"),this.P?(ie(h,"$req",c),ie(h,"SID","null"),b.T=!0,Bs(b,h,null)):Bs(b,h,c),this.G=2}}else this.G==3&&(i?la(this,i):this.i.length==0||$o(this.h)||la(this))};function la(i,c){var h;c?h=c.l:h=i.U++;const p=Xe(i.I);ie(p,"SID",i.K),ie(p,"RID",h),ie(p,"AID",i.T),qn(i,p),i.m&&i.o&&Hs(p,i.m,i.o),h=new ht(i,i.j,h,i.B+1),i.m===null&&(h.H=i.o),c&&(i.i=c.D.concat(i.i)),c=ca(i,h,1e3),h.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),zs(i.h,h),Bs(h,p,c)}function qn(i,c){i.H&&C(i.H,function(h,p){ie(c,p,h)}),i.l&&Ho({},function(h,p){ie(c,p,h)})}function ca(i,c,h){h=Math.min(i.i.length,h);var p=i.l?A(i.l.Na,i.l,i):null;e:{var b=i.i;let S=-1;for(;;){const M=["count="+h];S==-1?0<h?(S=b[0].g,M.push("ofs="+S)):S=0:M.push("ofs="+S);let ne=!0;for(let ve=0;ve<h;ve++){let Y=b[ve].g;const be=b[ve].map;if(Y-=S,0>Y)S=Math.max(0,b[ve].g-100),ne=!1;else try{ch(be,M,"req"+Y+"_")}catch{p&&p(be)}}if(ne){p=M.join("&");break e}}}return i=i.i.splice(0,h),c.D=i,p}function ua(i){if(!i.g&&!i.u){i.Y=1;var c=i.Fa;ut||Sn(),Je||(ut(),Je=!0),zt.add(c,i),i.v=0}}function Ks(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Vn(A(i.Fa,i),fa(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,ha(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Vn(A(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ce(10),jr(this),ha(this))};function Qs(i){i.A!=null&&(l.clearTimeout(i.A),i.A=null)}function ha(i){i.g=new ht(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var c=Xe(i.qa);ie(c,"RID","rpc"),ie(c,"SID",i.K),ie(c,"AID",i.T),ie(c,"CI",i.F?"0":"1"),!i.F&&i.ja&&ie(c,"TO",i.ja),ie(c,"TYPE","xmlhttp"),qn(i,c),i.m&&i.o&&Hs(c,i.m,i.o),i.L&&(i.g.I=i.L);var h=i.g;i=i.ia,h.L=1,h.v=Vr(Xe(c)),h.m=null,h.P=!0,jo(h,i)}n.Za=function(){this.C!=null&&(this.C=null,jr(this),Ks(this),Ce(19))};function Ur(i){i.C!=null&&(l.clearTimeout(i.C),i.C=null)}function da(i,c){var h=null;if(i.g==c){Ur(i),Qs(i),i.g=null;var p=2}else if(Gs(i.h,c))h=c.D,Go(i.h,c),p=1;else return;if(i.G!=0){if(c.o)if(p==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var b=i.B;p=xr(),Q(p,new Vo(p,h)),Fr(i)}else ua(i);else if(b=c.s,b==3||b==0&&0<c.X||!(p==1&&fh(i,c)||p==2&&Ks(i)))switch(h&&0<h.length&&(c=i.h,c.i=c.i.concat(h)),b){case 1:kt(i,5);break;case 4:kt(i,10);break;case 3:kt(i,6);break;default:kt(i,2)}}}function fa(i,c){let h=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(h*=2),h*c}function kt(i,c){if(i.j.info("Error code "+c),c==2){var h=A(i.fb,i),p=i.Xa;const b=!p;p=new Ct(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Nr(p,"https"),Vr(p),b?oh(p.toString(),h):ah(p.toString(),h)}else Ce(2);i.G=0,i.l&&i.l.sa(c),pa(i),aa(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),Ce(2)):(this.j.info("Failed to ping google.com"),Ce(1))};function pa(i){if(i.G=0,i.ka=[],i.l){const c=zo(i.h);(c.length!=0||i.i.length!=0)&&(x(i.ka,c),x(i.ka,i.i),i.h.i.length=0,N(i.i),i.i.length=0),i.l.ra()}}function ma(i,c,h){var p=h instanceof Ct?Xe(h):new Ct(h);if(p.g!="")c&&(p.g=c+"."+p.g),Dr(p,p.s);else{var b=l.location;p=b.protocol,c=c?c+"."+b.hostname:b.hostname,b=+b.port;var S=new Ct(null);p&&Nr(S,p),c&&(S.g=c),b&&Dr(S,b),h&&(S.l=h),p=S}return h=i.D,c=i.ya,h&&c&&ie(p,h,c),ie(p,"VER",i.la),qn(i,p),p}function ga(i,c,h){if(c&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=i.Ca&&!i.pa?new ae(new Mr({eb:h})):new ae(i.pa),c.Ha(i.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function _a(){}n=_a.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Br(){}Br.prototype.g=function(i,c){return new Ne(i,c)};function Ne(i,c){ee.call(this),this.g=new oa(c),this.l=i,this.h=c&&c.messageUrlParams||null,i=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(i?i["X-WebChannel-Content-Type"]=c.messageContentType:i={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(i?i["X-WebChannel-Client-Profile"]=c.va:i={"X-WebChannel-Client-Profile":c.va}),this.g.S=i,(i=c&&c.Sb)&&!V(i)&&(this.g.m=i),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!V(c)&&(this.g.D=c,i=this.h,i!==null&&c in i&&(i=this.h,c in i&&delete i[c])),this.j=new Zt(this)}P(Ne,ee),Ne.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ne.prototype.close=function(){Ws(this.g)},Ne.prototype.o=function(i){var c=this.g;if(typeof i=="string"){var h={};h.__data__=i,i=h}else this.u&&(h={},h.__data__=Ms(i),i=h);c.i.push(new Ju(c.Ya++,i)),c.G==3&&Fr(c)},Ne.prototype.N=function(){this.g.l=null,delete this.j,Ws(this.g),delete this.g,Ne.aa.N.call(this)};function ya(i){Ls.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var c=i.__sm__;if(c){e:{for(const h in c){i=h;break e}i=void 0}(this.i=i)&&(i=this.i,c=c!==null&&i in c?c[i]:void 0),this.data=c}else this.data=i}P(ya,Ls);function va(){js.call(this),this.status=1}P(va,js);function Zt(i){this.g=i}P(Zt,_a),Zt.prototype.ua=function(){Q(this.g,"a")},Zt.prototype.ta=function(i){Q(this.g,new ya(i))},Zt.prototype.sa=function(i){Q(this.g,new va)},Zt.prototype.ra=function(){Q(this.g,"b")},Br.prototype.createWebChannel=Br.prototype.g,Ne.prototype.send=Ne.prototype.o,Ne.prototype.open=Ne.prototype.m,Ne.prototype.close=Ne.prototype.close,xc=function(){return new Br},Rc=function(){return xr()},Sc=xt,_i={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Pr.NO_ERROR=0,Pr.TIMEOUT=8,Pr.HTTP_ERROR=6,Zr=Pr,Mo.COMPLETE="complete",Ac=Mo,Co.EventType=Nn,Nn.OPEN="a",Nn.CLOSE="b",Nn.ERROR="c",Nn.MESSAGE="d",ee.prototype.listen=ee.prototype.K,zn=Co,ae.prototype.listenOnce=ae.prototype.L,ae.prototype.getLastError=ae.prototype.Ka,ae.prototype.getLastErrorCode=ae.prototype.Ba,ae.prototype.getStatus=ae.prototype.Z,ae.prototype.getResponseJson=ae.prototype.Oa,ae.prototype.getResponseText=ae.prototype.oa,ae.prototype.send=ae.prototype.ea,ae.prototype.setWithCredentials=ae.prototype.Ha,bc=ae}).apply(typeof zr<"u"?zr:typeof self<"u"?self:typeof window<"u"?window:{});const Ka="@firebase/firestore";/**
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
 */class Re{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Re.UNAUTHENTICATED=new Re(null),Re.GOOGLE_CREDENTIALS=new Re("google-credentials-uid"),Re.FIRST_PARTY=new Re("first-party-uid"),Re.MOCK_USER=new Re("mock-user");/**
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
 */let In="10.14.0";/**
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
 */const Ft=new ki("@firebase/firestore");function Gn(){return Ft.logLevel}function L(n,...e){if(Ft.logLevel<=J.DEBUG){const t=e.map(zi);Ft.debug(`Firestore (${In}): ${n}`,...t)}}function at(n,...e){if(Ft.logLevel<=J.ERROR){const t=e.map(zi);Ft.error(`Firestore (${In}): ${n}`,...t)}}function fn(n,...e){if(Ft.logLevel<=J.WARN){const t=e.map(zi);Ft.warn(`Firestore (${In}): ${n}`,...t)}}function zi(n){if(typeof n=="string")return n;try{/**
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
 */function z(n="Unexpected state"){const e=`FIRESTORE (${In}) INTERNAL ASSERTION FAILED: `+n;throw at(e),new Error(e)}function te(n,e){n||z()}function W(n,e){return n}/**
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
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends ct{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class It{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Pc{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Lm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Re.UNAUTHENTICATED))}shutdown(){}}class jm{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Fm{constructor(e){this.t=e,this.currentUser=Re.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){te(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let o=new It;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new It,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=o;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new It)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(te(typeof r.accessToken=="string"),new Pc(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return te(e===null||typeof e=="string"),new Re(e)}}class Um{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Re.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Bm{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new Um(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Re.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $m{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qm{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){te(this.o===void 0);const r=o=>{o.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,L("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const s=o=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(te(typeof t.token=="string"),this.R=t.token,new $m(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Gm(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Cc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Gm(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<t&&(r+=e.charAt(s[o]%e.length))}return r}}function Z(n,e){return n<e?-1:n>e?1:0}function pn(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */class me{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new B(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new B(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new B(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return me.fromMillis(Date.now())}static fromDate(e){return me.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new me(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class H{constructor(e){this.timestamp=e}static fromTimestamp(e){return new H(e)}static min(){return new H(new me(0,0))}static max(){return new H(new me(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class nr{constructor(e,t,r){t===void 0?t=0:t>e.length&&z(),r===void 0?r=e.length-t:r>e.length-t&&z(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return nr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof nr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const o=e.get(s),a=t.get(s);if(o<a)return-1;if(o>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class le extends nr{construct(e,t,r){return new le(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new le(t)}static emptyPath(){return new le([])}}const zm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ee extends nr{construct(e,t,r){return new Ee(e,t,r)}static isValidIdentifier(e){return zm.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ee.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ee(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const o=()=>{if(r.length===0)throw new B(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new B(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new B(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(o(),s++)}if(o(),a)throw new B(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ee(t)}static emptyPath(){return new Ee([])}}/**
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
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(le.fromString(e))}static fromName(e){return new $(le.fromString(e).popFirst(5))}static empty(){return new $(le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return le.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new le(e.slice()))}}function Hm(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=H.fromTimestamp(r===1e9?new me(t+1,0):new me(t,r));return new bt(s,$.empty(),e)}function Wm(n){return new bt(n.readTime,n.key,-1)}class bt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new bt(H.min(),$.empty(),-1)}static max(){return new bt(H.max(),$.empty(),-1)}}function Km(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=$.comparator(n.documentKey,e.documentKey),t!==0?t:Z(n.largestBatchId,e.largestBatchId))}/**
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
 */const Qm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Jm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function gr(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==Qm)throw n;L("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new k((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof k?t:k.resolve(t)}catch(t){return k.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):k.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):k.reject(t)}static resolve(e){return new k((t,r)=>{t(e)})}static reject(e){return new k((t,r)=>{r(e)})}static waitFor(e){return new k((t,r)=>{let s=0,o=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++o,a&&o===s&&t()},u=>r(u))}),a=!0,o===s&&t()})}static or(e){let t=k.resolve(!1);for(const r of e)t=t.next(s=>s?k.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,o)=>{r.push(t.call(this,s,o))}),this.waitFor(r)}static mapArray(e,t){return new k((r,s)=>{const o=e.length,a=new Array(o);let l=0;for(let u=0;u<o;u++){const f=u;t(e[f]).next(m=>{a[f]=m,++l,l===o&&r(a)},m=>s(m))}})}static doWhile(e,t){return new k((r,s)=>{const o=()=>{e()===!0?t().next(()=>{o()},s):r()};o()})}}function Xm(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function _r(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Hi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Hi.oe=-1;function Ts(n){return n==null}function hs(n){return n===0&&1/n==-1/0}function Ym(n){return typeof n=="number"&&Number.isInteger(n)&&!hs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Qa(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Tn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function kc(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class oe{constructor(e,t){this.comparator=e,this.root=t||we.EMPTY}insert(e,t){return new oe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,we.BLACK,null,null))}remove(e){return new oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,we.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Hr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Hr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Hr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Hr(this.root,e,this.comparator,!0)}}class Hr{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&s&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class we{constructor(e,t,r,s,o){this.key=e,this.value=t,this.color=r??we.RED,this.left=s??we.EMPTY,this.right=o??we.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,o){return new we(e??this.key,t??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const o=r(e,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(e,t,r),null):o===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return we.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return we.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,we.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,we.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const e=this.left.check();if(e!==this.right.check())throw z();return e+(this.isRed()?0:1)}}we.EMPTY=null,we.RED=!0,we.BLACK=!1;we.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(e,t,r,s,o){return this}insert(e,t,r){return new we(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ie{constructor(e){this.comparator=e,this.data=new oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ja(this.data.getIterator())}getIteratorFrom(e){return new Ja(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ie)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ie(this.comparator);return t.data=e,t}}class Ja{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Be{constructor(e){this.fields=e,e.sort(Ee.comparator)}static empty(){return new Be([])}unionWith(e){let t=new Ie(Ee.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Be(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return pn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Nc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Te{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Nc("Invalid base64 string: "+o):o}}(e);return new Te(t)}static fromUint8Array(e){const t=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(e);return new Te(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Te.EMPTY_BYTE_STRING=new Te("");const Zm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function At(n){if(te(!!n),typeof n=="string"){let e=0;const t=Zm.exec(n);if(te(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ue(n.seconds),nanos:ue(n.nanos)}}function ue(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ut(n){return typeof n=="string"?Te.fromBase64String(n):Te.fromUint8Array(n)}/**
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
 */function Wi(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Ki(n){const e=n.mapValue.fields.__previous_value__;return Wi(e)?Ki(e):e}function rr(n){const e=At(n.mapValue.fields.__local_write_time__.timestampValue);return new me(e.seconds,e.nanos)}/**
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
 */class eg{constructor(e,t,r,s,o,a,l,u,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=f}}class sr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new sr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof sr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Wr={mapValue:{}};function Bt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Wi(n)?4:ng(n)?9007199254740991:tg(n)?10:11:z()}function Ke(n,e){if(n===e)return!0;const t=Bt(n);if(t!==Bt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return rr(n).isEqual(rr(e));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=At(s.timestampValue),l=At(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,o){return Ut(s.bytesValue).isEqual(Ut(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,o){return ue(s.geoPointValue.latitude)===ue(o.geoPointValue.latitude)&&ue(s.geoPointValue.longitude)===ue(o.geoPointValue.longitude)}(n,e);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return ue(s.integerValue)===ue(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=ue(s.doubleValue),l=ue(o.doubleValue);return a===l?hs(a)===hs(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return pn(n.arrayValue.values||[],e.arrayValue.values||[],Ke);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},l=o.mapValue.fields||{};if(Qa(a)!==Qa(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!Ke(a[u],l[u])))return!1;return!0}(n,e);default:return z()}}function ir(n,e){return(n.values||[]).find(t=>Ke(t,e))!==void 0}function mn(n,e){if(n===e)return 0;const t=Bt(n),r=Bt(e);if(t!==r)return Z(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Z(n.booleanValue,e.booleanValue);case 2:return function(o,a){const l=ue(o.integerValue||o.doubleValue),u=ue(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,e);case 3:return Xa(n.timestampValue,e.timestampValue);case 4:return Xa(rr(n),rr(e));case 5:return Z(n.stringValue,e.stringValue);case 6:return function(o,a){const l=Ut(o),u=Ut(a);return l.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(o,a){const l=o.split("/"),u=a.split("/");for(let f=0;f<l.length&&f<u.length;f++){const m=Z(l[f],u[f]);if(m!==0)return m}return Z(l.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,a){const l=Z(ue(o.latitude),ue(a.latitude));return l!==0?l:Z(ue(o.longitude),ue(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Ya(n.arrayValue,e.arrayValue);case 10:return function(o,a){var l,u,f,m;const I=o.fields||{},A=a.fields||{},R=(l=I.value)===null||l===void 0?void 0:l.arrayValue,P=(u=A.value)===null||u===void 0?void 0:u.arrayValue,N=Z(((f=R==null?void 0:R.values)===null||f===void 0?void 0:f.length)||0,((m=P==null?void 0:P.values)===null||m===void 0?void 0:m.length)||0);return N!==0?N:Ya(R,P)}(n.mapValue,e.mapValue);case 11:return function(o,a){if(o===Wr.mapValue&&a===Wr.mapValue)return 0;if(o===Wr.mapValue)return 1;if(a===Wr.mapValue)return-1;const l=o.fields||{},u=Object.keys(l),f=a.fields||{},m=Object.keys(f);u.sort(),m.sort();for(let I=0;I<u.length&&I<m.length;++I){const A=Z(u[I],m[I]);if(A!==0)return A;const R=mn(l[u[I]],f[m[I]]);if(R!==0)return R}return Z(u.length,m.length)}(n.mapValue,e.mapValue);default:throw z()}}function Xa(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Z(n,e);const t=At(n),r=At(e),s=Z(t.seconds,r.seconds);return s!==0?s:Z(t.nanos,r.nanos)}function Ya(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const o=mn(t[s],r[s]);if(o)return o}return Z(t.length,r.length)}function gn(n){return yi(n)}function yi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=At(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Ut(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return $.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const o of t.values||[])s?s=!1:r+=",",r+=yi(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${yi(t.fields[a])}`;return s+"}"}(n.mapValue):z()}function vi(n){return!!n&&"integerValue"in n}function Qi(n){return!!n&&"arrayValue"in n}function Za(n){return!!n&&"nullValue"in n}function el(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function es(n){return!!n&&"mapValue"in n}function tg(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Qn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Tn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Qn(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Qn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function ng(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Me{constructor(e){this.value=e}static empty(){return new Me({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!es(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qn(t)}setAll(e){let t=Ee.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=Qn(a):s.push(l.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,s)}delete(e){const t=this.field(e.popLast());es(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ke(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];es(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Tn(t,(s,o)=>e[s]=o);for(const s of r)delete e[s]}clone(){return new Me(Qn(this.value))}}function Dc(n){const e=[];return Tn(n.fields,(t,r)=>{const s=new Ee([t]);if(es(r)){const o=Dc(r.mapValue).fields;if(o.length===0)e.push(s);else for(const a of o)e.push(s.child(a))}else e.push(s)}),new Be(e)}/**
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
 */class xe{constructor(e,t,r,s,o,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(e){return new xe(e,0,H.min(),H.min(),H.min(),Me.empty(),0)}static newFoundDocument(e,t,r,s){return new xe(e,1,t,H.min(),r,s,0)}static newNoDocument(e,t){return new xe(e,2,t,H.min(),H.min(),Me.empty(),0)}static newUnknownDocument(e,t){return new xe(e,3,t,H.min(),H.min(),Me.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Me.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Me.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof xe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new xe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ds{constructor(e,t){this.position=e,this.inclusive=t}}function tl(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const o=e[s],a=n.position[s];if(o.field.isKeyField()?r=$.comparator($.fromName(a.referenceValue),t.key):r=mn(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function nl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ke(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class fs{constructor(e,t="asc"){this.field=e,this.dir=t}}function rg(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Vc{}class pe extends Vc{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new ig(e,t,r):t==="array-contains"?new lg(e,r):t==="in"?new cg(e,r):t==="not-in"?new ug(e,r):t==="array-contains-any"?new hg(e,r):new pe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new og(e,r):new ag(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(mn(t,this.value)):t!==null&&Bt(this.value)===Bt(t)&&this.matchesComparison(mn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Qe extends Vc{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Qe(e,t)}matches(e){return Mc(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Mc(n){return n.op==="and"}function Oc(n){return sg(n)&&Mc(n)}function sg(n){for(const e of n.filters)if(e instanceof Qe)return!1;return!0}function wi(n){if(n instanceof pe)return n.field.canonicalString()+n.op.toString()+gn(n.value);if(Oc(n))return n.filters.map(e=>wi(e)).join(",");{const e=n.filters.map(t=>wi(t)).join(",");return`${n.op}(${e})`}}function Lc(n,e){return n instanceof pe?function(r,s){return s instanceof pe&&r.op===s.op&&r.field.isEqual(s.field)&&Ke(r.value,s.value)}(n,e):n instanceof Qe?function(r,s){return s instanceof Qe&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,l)=>o&&Lc(a,s.filters[l]),!0):!1}(n,e):void z()}function jc(n){return n instanceof pe?function(t){return`${t.field.canonicalString()} ${t.op} ${gn(t.value)}`}(n):n instanceof Qe?function(t){return t.op.toString()+" {"+t.getFilters().map(jc).join(" ,")+"}"}(n):"Filter"}class ig extends pe{constructor(e,t,r){super(e,t,r),this.key=$.fromName(r.referenceValue)}matches(e){const t=$.comparator(e.key,this.key);return this.matchesComparison(t)}}class og extends pe{constructor(e,t){super(e,"in",t),this.keys=Fc("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ag extends pe{constructor(e,t){super(e,"not-in",t),this.keys=Fc("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Fc(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>$.fromName(r.referenceValue))}class lg extends pe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Qi(t)&&ir(t.arrayValue,this.value)}}class cg extends pe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ir(this.value.arrayValue,t)}}class ug extends pe{constructor(e,t){super(e,"not-in",t)}matches(e){if(ir(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ir(this.value.arrayValue,t)}}class hg extends pe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Qi(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>ir(this.value.arrayValue,r))}}/**
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
 */class dg{constructor(e,t=null,r=[],s=[],o=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=l,this.ue=null}}function rl(n,e=null,t=[],r=[],s=null,o=null,a=null){return new dg(n,e,t,r,s,o,a)}function Ji(n){const e=W(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>wi(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Ts(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>gn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>gn(r)).join(",")),e.ue=t}return e.ue}function Xi(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!rg(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Lc(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!nl(n.startAt,e.startAt)&&nl(n.endAt,e.endAt)}function Ei(n){return $.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class bs{constructor(e,t=null,r=[],s=[],o=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function fg(n,e,t,r,s,o,a,l){return new bs(n,e,t,r,s,o,a,l)}function Yi(n){return new bs(n)}function sl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function pg(n){return n.collectionGroup!==null}function Jn(n){const e=W(n);if(e.ce===null){e.ce=[];const t=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Ie(Ee.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(f=>{f.isInequality()&&(l=l.add(f.field))})}),l})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.ce.push(new fs(o,r))}),t.has(Ee.keyField().canonicalString())||e.ce.push(new fs(Ee.keyField(),r))}return e.ce}function ze(n){const e=W(n);return e.le||(e.le=mg(e,Jn(n))),e.le}function mg(n,e){if(n.limitType==="F")return rl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new fs(s.field,o)});const t=n.endAt?new ds(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ds(n.startAt.position,n.startAt.inclusive):null;return rl(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ii(n,e,t){return new bs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function As(n,e){return Xi(ze(n),ze(e))&&n.limitType===e.limitType}function Uc(n){return`${Ji(ze(n))}|lt:${n.limitType}`}function tn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>jc(s)).join(", ")}]`),Ts(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>gn(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>gn(s)).join(",")),`Target(${r})`}(ze(n))}; limitType=${n.limitType})`}function Ss(n,e){return e.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):$.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,s){for(const o of Jn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,l,u){const f=tl(a,l,u);return a.inclusive?f<=0:f<0}(r.startAt,Jn(r),s)||r.endAt&&!function(a,l,u){const f=tl(a,l,u);return a.inclusive?f>=0:f>0}(r.endAt,Jn(r),s))}(n,e)}function gg(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Bc(n){return(e,t)=>{let r=!1;for(const s of Jn(n)){const o=_g(s,e,t);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function _g(n,e,t){const r=n.field.isKeyField()?$.comparator(e.key,t.key):function(o,a,l){const u=a.data.field(o),f=l.data.field(o);return u!==null&&f!==null?mn(u,f):z()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return z()}}/**
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
 */class bn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return void(s[o]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Tn(this.inner,(t,r)=>{for(const[s,o]of r)e(s,o)})}isEmpty(){return kc(this.inner)}size(){return this.innerSize}}/**
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
 */const yg=new oe($.comparator);function lt(){return yg}const $c=new oe($.comparator);function Hn(...n){let e=$c;for(const t of n)e=e.insert(t.key,t);return e}function qc(n){let e=$c;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Vt(){return Xn()}function Gc(){return Xn()}function Xn(){return new bn(n=>n.toString(),(n,e)=>n.isEqual(e))}const vg=new oe($.comparator),wg=new Ie($.comparator);function K(...n){let e=wg;for(const t of n)e=e.add(t);return e}const Eg=new Ie(Z);function Ig(){return Eg}/**
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
 */function Zi(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:hs(e)?"-0":e}}function zc(n){return{integerValue:""+n}}function Tg(n,e){return Ym(e)?zc(e):Zi(n,e)}/**
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
 */class Rs{constructor(){this._=void 0}}function bg(n,e,t){return n instanceof or?function(s,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Wi(o)&&(o=Ki(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(t,e):n instanceof ar?Wc(n,e):n instanceof lr?Kc(n,e):function(s,o){const a=Hc(s,o),l=il(a)+il(s.Pe);return vi(a)&&vi(s.Pe)?zc(l):Zi(s.serializer,l)}(n,e)}function Ag(n,e,t){return n instanceof ar?Wc(n,e):n instanceof lr?Kc(n,e):t}function Hc(n,e){return n instanceof ps?function(r){return vi(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class or extends Rs{}class ar extends Rs{constructor(e){super(),this.elements=e}}function Wc(n,e){const t=Qc(e);for(const r of n.elements)t.some(s=>Ke(s,r))||t.push(r);return{arrayValue:{values:t}}}class lr extends Rs{constructor(e){super(),this.elements=e}}function Kc(n,e){let t=Qc(e);for(const r of n.elements)t=t.filter(s=>!Ke(s,r));return{arrayValue:{values:t}}}class ps extends Rs{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function il(n){return ue(n.integerValue||n.doubleValue)}function Qc(n){return Qi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Sg{constructor(e,t){this.field=e,this.transform=t}}function Rg(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof ar&&s instanceof ar||r instanceof lr&&s instanceof lr?pn(r.elements,s.elements,Ke):r instanceof ps&&s instanceof ps?Ke(r.Pe,s.Pe):r instanceof or&&s instanceof or}(n.transform,e.transform)}class xg{constructor(e,t){this.version=e,this.transformResults=t}}class st{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new st}static exists(e){return new st(void 0,e)}static updateTime(e){return new st(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ts(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class xs{}function Jc(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Yc(n.key,st.none()):new yr(n.key,n.data,st.none());{const t=n.data,r=Me.empty();let s=new Ie(Ee.comparator);for(let o of e.fields)if(!s.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new $t(n.key,r,new Be(s.toArray()),st.none())}}function Pg(n,e,t){n instanceof yr?function(s,o,a){const l=s.value.clone(),u=al(s.fieldTransforms,o,a.transformResults);l.setAll(u),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof $t?function(s,o,a){if(!ts(s.precondition,o))return void o.convertToUnknownDocument(a.version);const l=al(s.fieldTransforms,o,a.transformResults),u=o.data;u.setAll(Xc(s)),u.setAll(l),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Yn(n,e,t,r){return n instanceof yr?function(o,a,l,u){if(!ts(o.precondition,a))return l;const f=o.value.clone(),m=ll(o.fieldTransforms,u,a);return f.setAll(m),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,e,t,r):n instanceof $t?function(o,a,l,u){if(!ts(o.precondition,a))return l;const f=ll(o.fieldTransforms,u,a),m=a.data;return m.setAll(Xc(o)),m.setAll(f),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(I=>I.field))}(n,e,t,r):function(o,a,l){return ts(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function Cg(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),o=Hc(r.transform,s||null);o!=null&&(t===null&&(t=Me.empty()),t.set(r.field,o))}return t||null}function ol(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&pn(r,s,(o,a)=>Rg(o,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class yr extends xs{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class $t extends xs{constructor(e,t,r,s,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Xc(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function al(n,e,t){const r=new Map;te(n.length===t.length);for(let s=0;s<t.length;s++){const o=n[s],a=o.transform,l=e.data.field(o.field);r.set(o.field,Ag(a,l,t[s]))}return r}function ll(n,e,t){const r=new Map;for(const s of n){const o=s.transform,a=t.data.field(s.field);r.set(s.field,bg(o,a,e))}return r}class Yc extends xs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kg extends xs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Ng{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(e.key)&&Pg(o,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Yn(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Yn(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Gc();return this.mutations.forEach(s=>{const o=e.get(s.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=t.has(s.key)?null:l;const u=Jc(a,l);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(H.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),K())}isEqual(e){return this.batchId===e.batchId&&pn(this.mutations,e.mutations,(t,r)=>ol(t,r))&&pn(this.baseMutations,e.baseMutations,(t,r)=>ol(t,r))}}class eo{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){te(e.mutations.length===r.length);let s=function(){return vg}();const o=e.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new eo(e,t,r,s)}}/**
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
 */class Dg{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Vg{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var he,X;function Mg(n){switch(n){default:return z();case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0}}function Zc(n){if(n===void 0)return at("GRPC error has no .code"),D.UNKNOWN;switch(n){case he.OK:return D.OK;case he.CANCELLED:return D.CANCELLED;case he.UNKNOWN:return D.UNKNOWN;case he.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case he.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case he.INTERNAL:return D.INTERNAL;case he.UNAVAILABLE:return D.UNAVAILABLE;case he.UNAUTHENTICATED:return D.UNAUTHENTICATED;case he.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case he.NOT_FOUND:return D.NOT_FOUND;case he.ALREADY_EXISTS:return D.ALREADY_EXISTS;case he.PERMISSION_DENIED:return D.PERMISSION_DENIED;case he.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case he.ABORTED:return D.ABORTED;case he.OUT_OF_RANGE:return D.OUT_OF_RANGE;case he.UNIMPLEMENTED:return D.UNIMPLEMENTED;case he.DATA_LOSS:return D.DATA_LOSS;default:return z()}}(X=he||(he={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Og(){return new TextEncoder}/**
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
 */const Lg=new Ot([4294967295,4294967295],0);function cl(n){const e=Og().encode(n),t=new Tc;return t.update(e),new Uint8Array(t.digest())}function ul(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new Ot([t,r],0),new Ot([s,o],0)]}class to{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Wn(`Invalid padding: ${t}`);if(r<0)throw new Wn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Wn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Wn(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Ot.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(Ot.fromNumber(r)));return s.compare(Lg)===1&&(s=new Ot([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=cl(e),[r,s]=ul(t);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);if(!this.de(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new to(o,s,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const t=cl(e),[r,s]=ul(t);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Wn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ps{constructor(e,t,r,s,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,vr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ps(H.min(),s,new oe(Z),lt(),K())}}class vr{constructor(e,t,r,s,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new vr(r,t,K(),K(),K())}}/**
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
 */class ns{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class eu{constructor(e,t){this.targetId=e,this.me=t}}class tu{constructor(e,t,r=Te.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class hl{constructor(){this.fe=0,this.ge=fl(),this.pe=Te.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=K(),t=K(),r=K();return this.ge.forEach((s,o)=>{switch(o){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:z()}}),new vr(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=fl()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,te(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class jg{constructor(e){this.Le=e,this.Be=new Map,this.ke=lt(),this.qe=dl(),this.Qe=new oe(Z)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:z()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const o=s.target;if(Ei(o))if(r===0){const a=new $(o.path);this.Ue(t,a,xe.newNoDocument(a,H.min()))}else te(r===1);else{const a=this.Ye(t);if(a!==r){const l=this.Ze(e),u=l?this.Xe(l,e,a):1;if(u!==0){this.je(t);const f=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,f)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=t;let a,l;try{a=Ut(r).toUint8Array()}catch(u){if(u instanceof Nc)return fn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new to(a,s,o)}catch(u){return fn(u instanceof Wn?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(o=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,o,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((o,a)=>{const l=this.Je(a);if(l){if(o.current&&Ei(l.target)){const u=new $(l.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,xe.newNoDocument(u,e))}o.be&&(t.set(a,o.ve()),o.Ce())}});let r=K();this.qe.forEach((o,a)=>{let l=!0;a.forEachWhile(u=>{const f=this.Je(u);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(e));const s=new Ps(e,t,this.Qe,this.ke,r);return this.ke=lt(),this.qe=dl(),this.Qe=new oe(Z),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new hl,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Ie(Z),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||L("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new hl),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function dl(){return new oe($.comparator)}function fl(){return new oe($.comparator)}const Fg={asc:"ASCENDING",desc:"DESCENDING"},Ug={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Bg={and:"AND",or:"OR"};class $g{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ti(n,e){return n.useProto3Json||Ts(e)?e:{value:e}}function ms(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function nu(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function qg(n,e){return ms(n,e.toTimestamp())}function He(n){return te(!!n),H.fromTimestamp(function(t){const r=At(t);return new me(r.seconds,r.nanos)}(n))}function no(n,e){return bi(n,e).canonicalString()}function bi(n,e){const t=function(s){return new le(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function ru(n){const e=le.fromString(n);return te(lu(e)),e}function Ai(n,e){return no(n.databaseId,e.path)}function ii(n,e){const t=ru(e);if(t.get(1)!==n.databaseId.projectId)throw new B(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new B(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new $(iu(t))}function su(n,e){return no(n.databaseId,e)}function Gg(n){const e=ru(n);return e.length===4?le.emptyPath():iu(e)}function Si(n){return new le(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function iu(n){return te(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function pl(n,e,t){return{name:Ai(n,e),fields:t.value.mapValue.fields}}function zg(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:z()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],o=function(f,m){return f.useProto3Json?(te(m===void 0||typeof m=="string"),Te.fromBase64String(m||"")):(te(m===void 0||m instanceof Buffer||m instanceof Uint8Array),Te.fromUint8Array(m||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(f){const m=f.code===void 0?D.UNKNOWN:Zc(f.code);return new B(m,f.message||"")}(a);t=new tu(r,s,o,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ii(n,r.document.name),o=He(r.document.updateTime),a=r.document.createTime?He(r.document.createTime):H.min(),l=new Me({mapValue:{fields:r.document.fields}}),u=xe.newFoundDocument(s,o,a,l),f=r.targetIds||[],m=r.removedTargetIds||[];t=new ns(f,m,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ii(n,r.document),o=r.readTime?He(r.readTime):H.min(),a=xe.newNoDocument(s,o),l=r.removedTargetIds||[];t=new ns([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ii(n,r.document),o=r.removedTargetIds||[];t=new ns([],o,s,null)}else{if(!("filter"in e))return z();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new Vg(s,o),l=r.targetId;t=new eu(l,a)}}return t}function Hg(n,e){let t;if(e instanceof yr)t={update:pl(n,e.key,e.value)};else if(e instanceof Yc)t={delete:Ai(n,e.key)};else if(e instanceof $t)t={update:pl(n,e.key,e.data),updateMask:t_(e.fieldMask)};else{if(!(e instanceof kg))return z();t={verify:Ai(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,a){const l=a.transform;if(l instanceof or)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ar)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof lr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ps)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw z()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:qg(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:z()}(n,e.precondition)),t}function Wg(n,e){return n&&n.length>0?(te(e!==void 0),n.map(t=>function(s,o){let a=s.updateTime?He(s.updateTime):He(o);return a.isEqual(H.min())&&(a=He(o)),new xg(a,s.transformResults||[])}(t,e))):[]}function Kg(n,e){return{documents:[su(n,e.path)]}}function Qg(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=su(n,s);const o=function(f){if(f.length!==0)return au(Qe.create(f,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const a=function(f){if(f.length!==0)return f.map(m=>function(A){return{field:nn(A.field),direction:Yg(A.dir)}}(m))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Ti(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(e.endAt)),{_t:t,parent:s}}function Jg(n){let e=Gg(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){te(r===1);const m=t.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let o=[];t.where&&(o=function(I){const A=ou(I);return A instanceof Qe&&Oc(A)?A.getFilters():[A]}(t.where));let a=[];t.orderBy&&(a=function(I){return I.map(A=>function(P){return new fs(rn(P.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(A))}(t.orderBy));let l=null;t.limit&&(l=function(I){let A;return A=typeof I=="object"?I.value:I,Ts(A)?null:A}(t.limit));let u=null;t.startAt&&(u=function(I){const A=!!I.before,R=I.values||[];return new ds(R,A)}(t.startAt));let f=null;return t.endAt&&(f=function(I){const A=!I.before,R=I.values||[];return new ds(R,A)}(t.endAt)),fg(e,s,a,o,l,"F",u,f)}function Xg(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function ou(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=rn(t.unaryFilter.field);return pe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=rn(t.unaryFilter.field);return pe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=rn(t.unaryFilter.field);return pe.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=rn(t.unaryFilter.field);return pe.create(a,"!=",{nullValue:"NULL_VALUE"});default:return z()}}(n):n.fieldFilter!==void 0?function(t){return pe.create(rn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Qe.create(t.compositeFilter.filters.map(r=>ou(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return z()}}(t.compositeFilter.op))}(n):z()}function Yg(n){return Fg[n]}function Zg(n){return Ug[n]}function e_(n){return Bg[n]}function nn(n){return{fieldPath:n.canonicalString()}}function rn(n){return Ee.fromServerFormat(n.fieldPath)}function au(n){return n instanceof pe?function(t){if(t.op==="=="){if(el(t.value))return{unaryFilter:{field:nn(t.field),op:"IS_NAN"}};if(Za(t.value))return{unaryFilter:{field:nn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(el(t.value))return{unaryFilter:{field:nn(t.field),op:"IS_NOT_NAN"}};if(Za(t.value))return{unaryFilter:{field:nn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:nn(t.field),op:Zg(t.op),value:t.value}}}(n):n instanceof Qe?function(t){const r=t.getFilters().map(s=>au(s));return r.length===1?r[0]:{compositeFilter:{op:e_(t.op),filters:r}}}(n):z()}function t_(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function lu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class yt{constructor(e,t,r,s,o=H.min(),a=H.min(),l=Te.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new yt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new yt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new yt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new yt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class n_{constructor(e){this.ct=e}}function r_(n){const e=Jg({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ii(e,e.limit,"L"):e}/**
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
 */class s_{constructor(){this.un=new i_}addToCollectionParentIndex(e,t){return this.un.add(t),k.resolve()}getCollectionParents(e,t){return k.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return k.resolve()}deleteFieldIndex(e,t){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,t){return k.resolve()}getDocumentsMatchingTarget(e,t){return k.resolve(null)}getIndexType(e,t){return k.resolve(0)}getFieldIndexes(e,t){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,t){return k.resolve(bt.min())}getMinOffsetFromCollectionGroup(e,t){return k.resolve(bt.min())}updateCollectionGroup(e,t,r){return k.resolve()}updateIndexEntries(e,t){return k.resolve()}}class i_{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Ie(le.comparator),o=!s.has(r);return this.index[t]=s.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ie(le.comparator)).toArray()}}/**
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
 */class _n{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new _n(0)}static kn(){return new _n(-1)}}/**
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
 */class o_{constructor(){this.changes=new bn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,xe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?k.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class a_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class l_{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Yn(r.mutation,s,Be.empty(),me.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,K()).next(()=>r))}getLocalViewOfDocuments(e,t,r=K()){const s=Vt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(o=>{let a=Hn();return o.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Vt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,K()))}populateOverlays(e,t,r){const s=[];return r.forEach(o=>{t.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(e,s).next(o=>{o.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,s){let o=lt();const a=Xn(),l=function(){return Xn()}();return t.forEach((u,f)=>{const m=r.get(f.key);s.has(f.key)&&(m===void 0||m.mutation instanceof $t)?o=o.insert(f.key,f):m!==void 0?(a.set(f.key,m.mutation.getFieldMask()),Yn(m.mutation,f,m.mutation.getFieldMask(),me.now())):a.set(f.key,Be.empty())}),this.recalculateAndSaveOverlays(e,o).next(u=>(u.forEach((f,m)=>a.set(f,m)),t.forEach((f,m)=>{var I;return l.set(f,new a_(m,(I=a.get(f))!==null&&I!==void 0?I:null))}),l))}recalculateAndSaveOverlays(e,t){const r=Xn();let s=new oe((a,l)=>a-l),o=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(u=>{const f=t.get(u);if(f===null)return;let m=r.get(u)||Be.empty();m=l.applyToLocalView(f,m),r.set(u,m);const I=(s.get(l.batchId)||K()).add(u);s=s.insert(l.batchId,I)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),f=u.key,m=u.value,I=Gc();m.forEach(A=>{if(!o.has(A)){const R=Jc(t.get(A),r.get(A));R!==null&&I.set(A,R),o=o.add(A)}}),a.push(this.documentOverlayCache.saveOverlays(e,f,I))}return k.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return $.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):pg(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-o.size):k.resolve(Vt());let l=-1,u=o;return a.next(f=>k.forEach(f,(m,I)=>(l<I.largestBatchId&&(l=I.largestBatchId),o.get(m)?k.resolve():this.remoteDocumentCache.getEntry(e,m).next(A=>{u=u.insert(m,A)}))).next(()=>this.populateOverlays(e,f,o)).next(()=>this.computeViews(e,u,f,K())).next(m=>({batchId:l,changes:qc(m)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new $(t)).next(r=>{let s=Hn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const o=t.collectionGroup;let a=Hn();return this.indexManager.getCollectionParents(e,o).next(l=>k.forEach(l,u=>{const f=function(I,A){return new bs(A,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)}(t,u.child(o));return this.getDocumentsMatchingCollectionQuery(e,f,r,s).next(m=>{m.forEach((I,A)=>{a=a.insert(I,A)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,s))).next(a=>{o.forEach((u,f)=>{const m=f.getKey();a.get(m)===null&&(a=a.insert(m,xe.newInvalidDocument(m)))});let l=Hn();return a.forEach((u,f)=>{const m=o.get(u);m!==void 0&&Yn(m.mutation,f,Be.empty(),me.now()),Ss(t,f)&&(l=l.insert(u,f))}),l})}}/**
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
 */class c_{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return k.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:He(s.createTime)}}(t)),k.resolve()}getNamedQuery(e,t){return k.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:r_(s.bundledQuery),readTime:He(s.readTime)}}(t)),k.resolve()}}/**
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
 */class u_{constructor(){this.overlays=new oe($.comparator),this.Ir=new Map}getOverlay(e,t){return k.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Vt();return k.forEach(t,s=>this.getOverlay(e,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,o)=>{this.ht(e,t,o)}),k.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),k.resolve()}getOverlaysForCollection(e,t,r){const s=Vt(),o=t.length+1,a=new $(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,f=u.getKey();if(!t.isPrefixOf(f.path))break;f.path.length===o&&u.largestBatchId>r&&s.set(u.getKey(),u)}return k.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let o=new oe((f,m)=>f-m);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===t&&f.largestBatchId>r){let m=o.get(f.largestBatchId);m===null&&(m=Vt(),o=o.insert(f.largestBatchId,m)),m.set(f.getKey(),f)}}const l=Vt(),u=o.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((f,m)=>l.set(f,m)),!(l.size()>=s)););return k.resolve(l)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Dg(t,r));let o=this.Ir.get(t);o===void 0&&(o=K(),this.Ir.set(t,o)),this.Ir.set(t,o.add(r.key))}}/**
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
 */class h_{constructor(){this.sessionToken=Te.EMPTY_BYTE_STRING}getSessionToken(e){return k.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,k.resolve()}}/**
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
 */class ro{constructor(){this.Tr=new Ie(_e.Er),this.dr=new Ie(_e.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new _e(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new _e(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new $(new le([])),r=new _e(t,e),s=new _e(t,e+1),o=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new $(new le([])),r=new _e(t,e),s=new _e(t,e+1);let o=K();return this.dr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(e){const t=new _e(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class _e{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return $.comparator(e.key,t.key)||Z(e.wr,t.wr)}static Ar(e,t){return Z(e.wr,t.wr)||$.comparator(e.key,t.key)}}/**
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
 */class d_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Ie(_e.Er)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Ng(o,t,r,s);this.mutationQueue.push(a);for(const l of s)this.br=this.br.add(new _e(l.key,o)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return k.resolve(a)}lookupMutationBatch(e,t){return k.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),o=s<0?0:s;return k.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new _e(t,0),s=new _e(t,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,s],a=>{const l=this.Dr(a.wr);o.push(l)}),k.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ie(Z);return t.forEach(s=>{const o=new _e(s,0),a=new _e(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],l=>{r=r.add(l.wr)})}),k.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let o=r;$.isDocumentKey(o)||(o=o.child(""));const a=new _e(new $(o),0);let l=new Ie(Z);return this.br.forEachWhile(u=>{const f=u.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(l=l.add(u.wr)),!0)},a),k.resolve(this.Cr(l))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){te(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return k.forEach(t.mutations,s=>{const o=new _e(s.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new _e(t,0),s=this.br.firstAfterOrEqual(r);return k.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class f_{constructor(e){this.Mr=e,this.docs=function(){return new oe($.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),o=s?s.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return k.resolve(r?r.document.mutableCopy():xe.newInvalidDocument(t))}getEntries(e,t){let r=lt();return t.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():xe.newInvalidDocument(s))}),k.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let o=lt();const a=t.path,l=new $(a.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:f,value:{document:m}}=u.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||Km(Wm(m),r)<=0||(s.has(m.key)||Ss(t,m))&&(o=o.insert(m.key,m.mutableCopy()))}return k.resolve(o)}getAllFromCollectionGroup(e,t,r,s){z()}Or(e,t){return k.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new p_(this)}getSize(e){return k.resolve(this.size)}}class p_ extends o_{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),k.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class m_{constructor(e){this.persistence=e,this.Nr=new bn(t=>Ji(t),Xi),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ro,this.targetCount=0,this.kr=_n.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),k.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new _n(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,k.resolve()}updateTargetData(e,t){return this.Kn(t),k.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,t,r){let s=0;const o=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),k.waitFor(o).next(()=>s)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return k.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),k.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,o=[];return s&&t.forEach(a=>{o.push(s.markPotentiallyOrphaned(e,a))}),k.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),k.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return k.resolve(r)}containsKey(e,t){return k.resolve(this.Br.containsKey(t))}}/**
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
 */class g_{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Hi(0),this.Kr=!1,this.Kr=!0,this.$r=new h_,this.referenceDelegate=e(this),this.Ur=new m_(this),this.indexManager=new s_,this.remoteDocumentCache=function(s){return new f_(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new n_(t),this.Gr=new c_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new u_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new d_(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){L("MemoryPersistence","Starting transaction:",e);const s=new __(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(o=>this.referenceDelegate.jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Hr(e,t){return k.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class __ extends Jm{constructor(e){super(),this.currentSequenceNumber=e}}class so{constructor(e){this.persistence=e,this.Jr=new ro,this.Yr=null}static Zr(e){return new so(e)}get Xr(){if(this.Yr)return this.Yr;throw z()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),k.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),k.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Xr,r=>{const s=$.fromPath(r);return this.ei(e,s).next(o=>{o||t.removeEntry(s,H.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return k.or([()=>k.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class io{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=K(),s=K();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new io(e,t.fromCache,r,s)}}/**
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
 */class y_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class v_{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return _d()?8:Xm(Pe())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const o={result:null};return this.Yi(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(e,t,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new y_;return this.Xi(e,t,a).next(l=>{if(o.result=l,this.zi)return this.es(e,t,a,l.size)})}).next(()=>o.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(Gn()<=J.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",tn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),k.resolve()):(Gn()<=J.DEBUG&&L("QueryEngine","Query:",tn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Gn()<=J.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",tn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ze(t))):k.resolve())}Yi(e,t){if(sl(t))return k.resolve(null);let r=ze(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Ii(t,null,"F"),r=ze(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const a=K(...o);return this.Ji.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const f=this.ts(t,l);return this.ns(t,f,a,u.readTime)?this.Yi(e,Ii(t,null,"F")):this.rs(e,f,t,u)}))})))}Zi(e,t,r,s){return sl(t)||s.isEqual(H.min())?k.resolve(null):this.Ji.getDocuments(e,r).next(o=>{const a=this.ts(t,o);return this.ns(t,a,r,s)?k.resolve(null):(Gn()<=J.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),tn(t)),this.rs(e,a,t,Hm(s,-1)).next(l=>l))})}ts(e,t){let r=new Ie(Bc(e));return t.forEach((s,o)=>{Ss(e,o)&&(r=r.add(o))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Xi(e,t,r){return Gn()<=J.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",tn(t)),this.Ji.getDocumentsMatchingQuery(e,t,bt.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */class w_{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new oe(Z),this._s=new bn(o=>Ji(o),Xi),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new l_(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function E_(n,e,t,r){return new w_(n,e,t,r)}async function cu(n,e){const t=W(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],l=[];let u=K();for(const f of s){a.push(f.batchId);for(const m of f.mutations)u=u.add(m.key)}for(const f of o){l.push(f.batchId);for(const m of f.mutations)u=u.add(m.key)}return t.localDocuments.getDocuments(r,u).next(f=>({hs:f,removedBatchIds:a,addedBatchIds:l}))})})}function I_(n,e){const t=W(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),o=t.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,f,m){const I=f.batch,A=I.keys();let R=k.resolve();return A.forEach(P=>{R=R.next(()=>m.getEntry(u,P)).next(N=>{const x=f.docVersions.get(P);te(x!==null),N.version.compareTo(x)<0&&(I.applyToRemoteDocument(N,f),N.isValidDocument()&&(N.setReadTime(f.commitVersion),m.addEntry(N)))})}),R.next(()=>l.mutationQueue.removeMutationBatch(u,I))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=K();for(let f=0;f<l.mutationResults.length;++f)l.mutationResults[f].transformResults.length>0&&(u=u.add(l.batch.mutations[f].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function uu(n){const e=W(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function T_(n,e){const t=W(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const l=[];e.targetChanges.forEach((m,I)=>{const A=s.get(I);if(!A)return;l.push(t.Ur.removeMatchingKeys(o,m.removedDocuments,I).next(()=>t.Ur.addMatchingKeys(o,m.addedDocuments,I)));let R=A.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(I)!==null?R=R.withResumeToken(Te.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):m.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(m.resumeToken,r)),s=s.insert(I,R),function(N,x,F){return N.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(A,R,m)&&l.push(t.Ur.updateTargetData(o,R))});let u=lt(),f=K();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(o,m))}),l.push(b_(o,a,e.documentUpdates).next(m=>{u=m.Ps,f=m.Is})),!r.isEqual(H.min())){const m=t.Ur.getLastRemoteSnapshotVersion(o).next(I=>t.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));l.push(m)}return k.waitFor(l).next(()=>a.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,u,f)).next(()=>u)}).then(o=>(t.os=s,o))}function b_(n,e,t){let r=K(),s=K();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let a=lt();return t.forEach((l,u)=>{const f=o.get(l);u.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(H.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!f.isValidDocument()||u.version.compareTo(f.version)>0||u.version.compareTo(f.version)===0&&f.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):L("LocalStore","Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",u.version)}),{Ps:a,Is:s}})}function A_(n,e){const t=W(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function S_(n,e){const t=W(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(o=>o?(s=o,k.resolve(s)):t.Ur.allocateTargetId(r).next(a=>(s=new yt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function Ri(n,e,t){const r=W(n),s=r.os.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!_r(a))throw a;L("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function ml(n,e,t){const r=W(n);let s=H.min(),o=K();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,f,m){const I=W(u),A=I._s.get(m);return A!==void 0?k.resolve(I.os.get(A)):I.Ur.getTargetData(f,m)}(r,a,ze(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,l.targetId).next(u=>{o=u})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?s:H.min(),t?o:K())).next(l=>(R_(r,gg(e),l),{documents:l,Ts:o})))}function R_(n,e,t){let r=n.us.get(e)||H.min();t.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.us.set(e,r)}class gl{constructor(){this.activeTargetIds=Ig()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class x_{constructor(){this.so=new gl,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new gl,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class P_{_o(e){}shutdown(){}}/**
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
 */class _l{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){L("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){L("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Kr=null;function oi(){return Kr===null?Kr=function(){return 268435456+Math.round(2147483648*Math.random())}():Kr++,"0x"+Kr.toString(16)}/**
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
 */const C_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class k_{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Se="WebChannelConnection";class N_ extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Fo(){return!1}Mo(t,r,s,o,a){const l=oi(),u=this.xo(t,r.toUriEncodedString());L("RestConnection",`Sending RPC '${t}' ${l}:`,u,s);const f={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(f,o,a),this.No(t,u,f,s).then(m=>(L("RestConnection",`Received RPC '${t}' ${l}: `,m),m),m=>{throw fn("RestConnection",`RPC '${t}' ${l} failed with error: `,m,"url: ",u,"request:",s),m})}Lo(t,r,s,o,a,l){return this.Mo(t,r,s,o,a)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+In}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>t[a]=o),s&&s.headers.forEach((o,a)=>t[a]=o)}xo(t,r){const s=C_[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const o=oi();return new Promise((a,l)=>{const u=new bc;u.setWithCredentials(!0),u.listenOnce(Ac.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Zr.NO_ERROR:const m=u.getResponseJson();L(Se,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),a(m);break;case Zr.TIMEOUT:L(Se,`RPC '${e}' ${o} timed out`),l(new B(D.DEADLINE_EXCEEDED,"Request time out"));break;case Zr.HTTP_ERROR:const I=u.getStatus();if(L(Se,`RPC '${e}' ${o} failed with status:`,I,"response text:",u.getResponseText()),I>0){let A=u.getResponseJson();Array.isArray(A)&&(A=A[0]);const R=A==null?void 0:A.error;if(R&&R.status&&R.message){const P=function(x){const F=x.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(F)>=0?F:D.UNKNOWN}(R.status);l(new B(P,R.message))}else l(new B(D.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new B(D.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{L(Se,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);L(Se,`RPC '${e}' ${o} sending request:`,s),u.send(t,"POST",f,r,15)})}Bo(e,t,r){const s=oi(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=xc(),l=Rc(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(u.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const m=o.join("");L(Se,`Creating RPC '${e}' stream ${s}: ${m}`,u);const I=a.createWebChannel(m,u);let A=!1,R=!1;const P=new k_({Io:x=>{R?L(Se,`Not sending because RPC '${e}' stream ${s} is closed:`,x):(A||(L(Se,`Opening RPC '${e}' stream ${s} transport.`),I.open(),A=!0),L(Se,`RPC '${e}' stream ${s} sending:`,x),I.send(x))},To:()=>I.close()}),N=(x,F,V)=>{x.listen(F,q=>{try{V(q)}catch(U){setTimeout(()=>{throw U},0)}})};return N(I,zn.EventType.OPEN,()=>{R||(L(Se,`RPC '${e}' stream ${s} transport opened.`),P.yo())}),N(I,zn.EventType.CLOSE,()=>{R||(R=!0,L(Se,`RPC '${e}' stream ${s} transport closed`),P.So())}),N(I,zn.EventType.ERROR,x=>{R||(R=!0,fn(Se,`RPC '${e}' stream ${s} transport errored:`,x),P.So(new B(D.UNAVAILABLE,"The operation could not be completed")))}),N(I,zn.EventType.MESSAGE,x=>{var F;if(!R){const V=x.data[0];te(!!V);const q=V,U=q.error||((F=q[0])===null||F===void 0?void 0:F.error);if(U){L(Se,`RPC '${e}' stream ${s} received error:`,U);const re=U.status;let C=function(y){const w=he[y];if(w!==void 0)return Zc(w)}(re),v=U.message;C===void 0&&(C=D.INTERNAL,v="Unknown error status: "+re+" with message "+U.message),R=!0,P.So(new B(C,v)),I.close()}else L(Se,`RPC '${e}' stream ${s} received:`,V),P.bo(V)}}),N(l,Sc.STAT_EVENT,x=>{x.stat===_i.PROXY?L(Se,`RPC '${e}' stream ${s} detected buffering proxy`):x.stat===_i.NOPROXY&&L(Se,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function ai(){return typeof document<"u"?document:null}/**
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
 */function Cs(n){return new $g(n,!0)}/**
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
 */class hu{constructor(e,t,r=1e3,s=1.5,o=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&L("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class du{constructor(e,t,r,s,o,a,l,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new hu(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===D.RESOURCE_EXHAUSTED?(at(t.toString()),at("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new B(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return L("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class D_ extends du{constructor(e,t,r,s,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=o}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=zg(this.serializer,e),r=function(o){if(!("targetChange"in o))return H.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?H.min():a.readTime?He(a.readTime):H.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=Si(this.serializer),t.addTarget=function(o,a){let l;const u=a.target;if(l=Ei(u)?{documents:Kg(o,u)}:{query:Qg(o,u)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=nu(o,a.resumeToken);const f=Ti(o,a.expectedCount);f!==null&&(l.expectedCount=f)}else if(a.snapshotVersion.compareTo(H.min())>0){l.readTime=ms(o,a.snapshotVersion.toTimestamp());const f=Ti(o,a.expectedCount);f!==null&&(l.expectedCount=f)}return l}(this.serializer,e);const r=Xg(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=Si(this.serializer),t.removeTarget=e,this.a_(t)}}class V_ extends du{constructor(e,t,r,s,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return te(!!e.streamToken),this.lastStreamToken=e.streamToken,te(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=Wg(e.writeResults,e.commitTime),r=He(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=Si(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Hg(this.serializer,r))};this.a_(t)}}/**
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
 */class M_ extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new B(D.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(e,bi(t,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(D.UNKNOWN,o.toString())})}Lo(e,t,r,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(e,bi(t,r),s,a,l,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new B(D.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class O_{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(at(t),this.D_=!1):L("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class L_{constructor(e,t,r,s,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{r.enqueueAndForget(async()=>{qt(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(u){const f=W(u);f.L_.add(4),await wr(f),f.q_.set("Unknown"),f.L_.delete(4),await ks(f)}(this))})}),this.q_=new O_(r,s)}}async function ks(n){if(qt(n))for(const e of n.B_)await e(!0)}async function wr(n){for(const e of n.B_)await e(!1)}function fu(n,e){const t=W(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),co(t)?lo(t):An(t).r_()&&ao(t,e))}function oo(n,e){const t=W(n),r=An(t);t.N_.delete(e),r.r_()&&pu(t,e),t.N_.size===0&&(r.r_()?r.o_():qt(t)&&t.q_.set("Unknown"))}function ao(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(H.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}An(n).A_(e)}function pu(n,e){n.Q_.xe(e),An(n).R_(e)}function lo(n){n.Q_=new jg({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),An(n).start(),n.q_.v_()}function co(n){return qt(n)&&!An(n).n_()&&n.N_.size>0}function qt(n){return W(n).L_.size===0}function mu(n){n.Q_=void 0}async function j_(n){n.q_.set("Online")}async function F_(n){n.N_.forEach((e,t)=>{ao(n,e)})}async function U_(n,e){mu(n),co(n)?(n.q_.M_(e),lo(n)):n.q_.set("Unknown")}async function B_(n,e,t){if(n.q_.set("Online"),e instanceof tu&&e.state===2&&e.cause)try{await async function(s,o){const a=o.cause;for(const l of o.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.N_.delete(l),s.Q_.removeTarget(l))}(n,e)}catch(r){L("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await gs(n,r)}else if(e instanceof ns?n.Q_.Ke(e):e instanceof eu?n.Q_.He(e):n.Q_.We(e),!t.isEqual(H.min()))try{const r=await uu(n.localStore);t.compareTo(r)>=0&&await function(o,a){const l=o.Q_.rt(a);return l.targetChanges.forEach((u,f)=>{if(u.resumeToken.approximateByteSize()>0){const m=o.N_.get(f);m&&o.N_.set(f,m.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,f)=>{const m=o.N_.get(u);if(!m)return;o.N_.set(u,m.withResumeToken(Te.EMPTY_BYTE_STRING,m.snapshotVersion)),pu(o,u);const I=new yt(m.target,u,f,m.sequenceNumber);ao(o,I)}),o.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){L("RemoteStore","Failed to raise snapshot:",r),await gs(n,r)}}async function gs(n,e,t){if(!_r(e))throw e;n.L_.add(1),await wr(n),n.q_.set("Offline"),t||(t=()=>uu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await ks(n)})}function gu(n,e){return e().catch(t=>gs(n,t,e))}async function Ns(n){const e=W(n),t=St(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;$_(e);)try{const s=await A_(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,q_(e,s)}catch(s){await gs(e,s)}_u(e)&&yu(e)}function $_(n){return qt(n)&&n.O_.length<10}function q_(n,e){n.O_.push(e);const t=St(n);t.r_()&&t.V_&&t.m_(e.mutations)}function _u(n){return qt(n)&&!St(n).n_()&&n.O_.length>0}function yu(n){St(n).start()}async function G_(n){St(n).p_()}async function z_(n){const e=St(n);for(const t of n.O_)e.m_(t.mutations)}async function H_(n,e,t){const r=n.O_.shift(),s=eo.from(r,e,t);await gu(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Ns(n)}async function W_(n,e){e&&St(n).V_&&await async function(r,s){if(function(a){return Mg(a)&&a!==D.ABORTED}(s.code)){const o=r.O_.shift();St(r).s_(),await gu(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Ns(r)}}(n,e),_u(n)&&yu(n)}async function yl(n,e){const t=W(n);t.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const r=qt(t);t.L_.add(3),await wr(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await ks(t)}async function K_(n,e){const t=W(n);e?(t.L_.delete(2),await ks(t)):e||(t.L_.add(2),await wr(t),t.q_.set("Unknown"))}function An(n){return n.K_||(n.K_=function(t,r,s){const o=W(t);return o.w_(),new D_(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:j_.bind(null,n),Ro:F_.bind(null,n),mo:U_.bind(null,n),d_:B_.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),co(n)?lo(n):n.q_.set("Unknown")):(await n.K_.stop(),mu(n))})),n.K_}function St(n){return n.U_||(n.U_=function(t,r,s){const o=W(t);return o.w_(),new V_(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:G_.bind(null,n),mo:W_.bind(null,n),f_:z_.bind(null,n),g_:H_.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Ns(n)):(await n.U_.stop(),n.O_.length>0&&(L("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class uo{constructor(e,t,r,s,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new It,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,o){const a=Date.now()+r,l=new uo(e,t,a,s,o);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ho(n,e){if(at("AsyncQueue",`${e}: ${n}`),_r(n))return new B(D.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class cn{constructor(e){this.comparator=e?(t,r)=>e(t,r)||$.comparator(t.key,r.key):(t,r)=>$.comparator(t.key,r.key),this.keyedMap=Hn(),this.sortedSet=new oe(this.comparator)}static emptySet(e){return new cn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof cn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new cn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class vl{constructor(){this.W_=new oe($.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):z():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class yn{constructor(e,t,r,s,o,a,l,u,f){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=f}static fromInitialDocuments(e,t,r,s,o){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new yn(e,t,cn.emptySet(t),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&As(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Q_{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class J_{constructor(){this.queries=wl(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=W(t),o=s.queries;s.queries=wl(),o.forEach((a,l)=>{for(const u of l.j_)u.onError(r)})})(this,new B(D.ABORTED,"Firestore shutting down"))}}function wl(){return new bn(n=>Uc(n),As)}async function X_(n,e){const t=W(n);let r=3;const s=e.query;let o=t.queries.get(s);o?!o.H_()&&e.J_()&&(r=2):(o=new Q_,r=e.J_()?0:1);try{switch(r){case 0:o.z_=await t.onListen(s,!0);break;case 1:o.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=ho(a,`Initialization of query '${tn(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,o),o.j_.push(e),e.Z_(t.onlineState),o.z_&&e.X_(o.z_)&&fo(t)}async function Y_(n,e){const t=W(n),r=e.query;let s=3;const o=t.queries.get(r);if(o){const a=o.j_.indexOf(e);a>=0&&(o.j_.splice(a,1),o.j_.length===0?s=e.J_()?0:1:!o.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Z_(n,e){const t=W(n);let r=!1;for(const s of e){const o=s.query,a=t.queries.get(o);if(a){for(const l of a.j_)l.X_(s)&&(r=!0);a.z_=s}}r&&fo(t)}function ey(n,e,t){const r=W(n),s=r.queries.get(e);if(s)for(const o of s.j_)o.onError(t);r.queries.delete(e)}function fo(n){n.Y_.forEach(e=>{e.next()})}var xi,El;(El=xi||(xi={})).ea="default",El.Cache="cache";class ty{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new yn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=yn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==xi.Cache}}/**
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
 */class vu{constructor(e){this.key=e}}class wu{constructor(e){this.key=e}}class ny{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=K(),this.mutatedKeys=K(),this.Aa=Bc(e),this.Ra=new cn(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new vl,s=t?t.Ra:this.Ra;let o=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((m,I)=>{const A=s.get(m),R=Ss(this.query,I)?I:null,P=!!A&&this.mutatedKeys.has(A.key),N=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let x=!1;A&&R?A.data.isEqual(R.data)?P!==N&&(r.track({type:3,doc:R}),x=!0):this.ga(A,R)||(r.track({type:2,doc:R}),x=!0,(u&&this.Aa(R,u)>0||f&&this.Aa(R,f)<0)&&(l=!0)):!A&&R?(r.track({type:0,doc:R}),x=!0):A&&!R&&(r.track({type:1,doc:A}),x=!0,(u||f)&&(l=!0)),x&&(R?(a=a.add(R),o=N?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{Ra:a,fa:r,ns:l,mutatedKeys:o}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const o=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((m,I)=>function(R,P){const N=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return N(R)-N(P)}(m.type,I.type)||this.Aa(m.doc,I.doc)),this.pa(r),s=s!=null&&s;const l=t&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,f=u!==this.Ea;return this.Ea=u,a.length!==0||f?{snapshot:new yn(this.query,e.Ra,o,a,e.mutatedKeys,u===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new vl,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=K(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new wu(r))}),this.da.forEach(r=>{e.has(r)||t.push(new vu(r))}),t}ba(e){this.Ta=e.Ts,this.da=K();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return yn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class ry{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class sy{constructor(e){this.key=e,this.va=!1}}class iy{constructor(e,t,r,s,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new bn(l=>Uc(l),As),this.Ma=new Map,this.xa=new Set,this.Oa=new oe($.comparator),this.Na=new Map,this.La=new ro,this.Ba={},this.ka=new Map,this.qa=_n.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function oy(n,e,t=!0){const r=Su(n);let s;const o=r.Fa.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Da()):s=await Eu(r,e,t,!0),s}async function ay(n,e){const t=Su(n);await Eu(t,e,!0,!1)}async function Eu(n,e,t,r){const s=await S_(n.localStore,ze(e)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,t);let l;return r&&(l=await ly(n,e,o,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&fu(n.remoteStore,s),l}async function ly(n,e,t,r,s){n.Ka=(I,A,R)=>async function(N,x,F,V){let q=x.view.ma(F);q.ns&&(q=await ml(N.localStore,x.query,!1).then(({documents:v})=>x.view.ma(v,q)));const U=V&&V.targetChanges.get(x.targetId),re=V&&V.targetMismatches.get(x.targetId)!=null,C=x.view.applyChanges(q,N.isPrimaryClient,U,re);return Tl(N,x.targetId,C.wa),C.snapshot}(n,I,A,R);const o=await ml(n.localStore,e,!0),a=new ny(e,o.Ts),l=a.ma(o.documents),u=vr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),f=a.applyChanges(l,n.isPrimaryClient,u);Tl(n,t,f.wa);const m=new ry(e,t,a);return n.Fa.set(e,m),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),f.snapshot}async function cy(n,e,t){const r=W(n),s=r.Fa.get(e),o=r.Ma.get(s.targetId);if(o.length>1)return r.Ma.set(s.targetId,o.filter(a=>!As(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ri(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&oo(r.remoteStore,s.targetId),Pi(r,s.targetId)}).catch(gr)):(Pi(r,s.targetId),await Ri(r.localStore,s.targetId,!0))}async function uy(n,e){const t=W(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),oo(t.remoteStore,r.targetId))}async function hy(n,e,t){const r=yy(n);try{const s=await function(a,l){const u=W(a),f=me.now(),m=l.reduce((R,P)=>R.add(P.key),K());let I,A;return u.persistence.runTransaction("Locally write mutations","readwrite",R=>{let P=lt(),N=K();return u.cs.getEntries(R,m).next(x=>{P=x,P.forEach((F,V)=>{V.isValidDocument()||(N=N.add(F))})}).next(()=>u.localDocuments.getOverlayedDocuments(R,P)).next(x=>{I=x;const F=[];for(const V of l){const q=Cg(V,I.get(V.key).overlayedDocument);q!=null&&F.push(new $t(V.key,q,Dc(q.value.mapValue),st.exists(!0)))}return u.mutationQueue.addMutationBatch(R,f,F,l)}).next(x=>{A=x;const F=x.applyToLocalDocumentSet(I,N);return u.documentOverlayCache.saveOverlays(R,x.batchId,F)})}).then(()=>({batchId:A.batchId,changes:qc(I)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,u){let f=a.Ba[a.currentUser.toKey()];f||(f=new oe(Z)),f=f.insert(l,u),a.Ba[a.currentUser.toKey()]=f}(r,s.batchId,t),await Er(r,s.changes),await Ns(r.remoteStore)}catch(s){const o=ho(s,"Failed to persist write");t.reject(o)}}async function Iu(n,e){const t=W(n);try{const r=await T_(t.localStore,e);e.targetChanges.forEach((s,o)=>{const a=t.Na.get(o);a&&(te(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?te(a.va):s.removedDocuments.size>0&&(te(a.va),a.va=!1))}),await Er(t,r,e)}catch(r){await gr(r)}}function Il(n,e,t){const r=W(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((o,a)=>{const l=a.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const u=W(a);u.onlineState=l;let f=!1;u.queries.forEach((m,I)=>{for(const A of I.j_)A.Z_(l)&&(f=!0)}),f&&fo(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function dy(n,e,t){const r=W(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),o=s&&s.key;if(o){let a=new oe($.comparator);a=a.insert(o,xe.newNoDocument(o,H.min()));const l=K().add(o),u=new Ps(H.min(),new Map,new oe(Z),a,l);await Iu(r,u),r.Oa=r.Oa.remove(o),r.Na.delete(e),po(r)}else await Ri(r.localStore,e,!1).then(()=>Pi(r,e,t)).catch(gr)}async function fy(n,e){const t=W(n),r=e.batch.batchId;try{const s=await I_(t.localStore,e);bu(t,r,null),Tu(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Er(t,s)}catch(s){await gr(s)}}async function py(n,e,t){const r=W(n);try{const s=await function(a,l){const u=W(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let m;return u.mutationQueue.lookupMutationBatch(f,l).next(I=>(te(I!==null),m=I.keys(),u.mutationQueue.removeMutationBatch(f,I))).next(()=>u.mutationQueue.performConsistencyCheck(f)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(f,m,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,m)).next(()=>u.localDocuments.getDocuments(f,m))})}(r.localStore,e);bu(r,e,t),Tu(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Er(r,s)}catch(s){await gr(s)}}function Tu(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function bu(n,e,t){const r=W(n);let s=r.Ba[r.currentUser.toKey()];if(s){const o=s.get(e);o&&(t?o.reject(t):o.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Pi(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||Au(n,r)})}function Au(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(oo(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),po(n))}function Tl(n,e,t){for(const r of t)r instanceof vu?(n.La.addReference(r.key,e),my(n,r)):r instanceof wu?(L("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||Au(n,r.key)):z()}function my(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(L("SyncEngine","New document in limbo: "+t),n.xa.add(r),po(n))}function po(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new $(le.fromString(e)),r=n.qa.next();n.Na.set(r,new sy(t)),n.Oa=n.Oa.insert(t,r),fu(n.remoteStore,new yt(ze(Yi(t.path)),r,"TargetPurposeLimboResolution",Hi.oe))}}async function Er(n,e,t){const r=W(n),s=[],o=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{a.push(r.Ka(u,e,t).then(f=>{var m;if((f||t)&&r.isPrimaryClient){const I=f?!f.fromCache:(m=t==null?void 0:t.targetChanges.get(u.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(u.targetId,I?"current":"not-current")}if(f){s.push(f);const I=io.Wi(u.targetId,f);o.push(I)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(u,f){const m=W(u);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",I=>k.forEach(f,A=>k.forEach(A.$i,R=>m.persistence.referenceDelegate.addReference(I,A.targetId,R)).next(()=>k.forEach(A.Ui,R=>m.persistence.referenceDelegate.removeReference(I,A.targetId,R)))))}catch(I){if(!_r(I))throw I;L("LocalStore","Failed to update sequence numbers: "+I)}for(const I of f){const A=I.targetId;if(!I.fromCache){const R=m.os.get(A),P=R.snapshotVersion,N=R.withLastLimboFreeSnapshotVersion(P);m.os=m.os.insert(A,N)}}}(r.localStore,o))}async function gy(n,e){const t=W(n);if(!t.currentUser.isEqual(e)){L("SyncEngine","User change. New user:",e.toKey());const r=await cu(t.localStore,e);t.currentUser=e,function(o,a){o.ka.forEach(l=>{l.forEach(u=>{u.reject(new B(D.CANCELLED,a))})}),o.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Er(t,r.hs)}}function _y(n,e){const t=W(n),r=t.Na.get(e);if(r&&r.va)return K().add(r.key);{let s=K();const o=t.Ma.get(e);if(!o)return s;for(const a of o){const l=t.Fa.get(a);s=s.unionWith(l.view.Va)}return s}}function Su(n){const e=W(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Iu.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_y.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=dy.bind(null,e),e.Ca.d_=Z_.bind(null,e.eventManager),e.Ca.$a=ey.bind(null,e.eventManager),e}function yy(n){const e=W(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=fy.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=py.bind(null,e),e}class _s{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Cs(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return E_(this.persistence,new v_,e.initialUser,this.serializer)}Ga(e){return new g_(so.Zr,this.serializer)}Wa(e){return new x_}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}_s.provider={build:()=>new _s};class Ci{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Il(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=gy.bind(null,this.syncEngine),await K_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new J_}()}createDatastore(e){const t=Cs(e.databaseInfo.databaseId),r=function(o){return new N_(o)}(e.databaseInfo);return function(o,a,l,u){return new M_(o,a,l,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,o,a,l){return new L_(r,s,o,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Il(this.syncEngine,t,0),function(){return _l.D()?new _l:new P_}())}createSyncEngine(e,t){return function(s,o,a,l,u,f,m){const I=new iy(s,o,a,l,u,f);return m&&(I.Qa=!0),I}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const o=W(s);L("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await wr(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Ci.provider={build:()=>new Ci};/**
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
 */class vy{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):at("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class wy{constructor(e,t,r,s,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Re.UNAUTHENTICATED,this.clientId=Cc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{L("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(L("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new It;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ho(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function li(n,e){n.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await cu(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function bl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Ey(n);L("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>yl(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>yl(e.remoteStore,s)),n._onlineComponents=e}async function Ey(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){L("FirestoreClient","Using user provided OfflineComponentProvider");try{await li(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;fn("Error using user provided cache. Falling back to memory cache: "+t),await li(n,new _s)}}else L("FirestoreClient","Using default OfflineComponentProvider"),await li(n,new _s);return n._offlineComponents}async function Ru(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(L("FirestoreClient","Using user provided OnlineComponentProvider"),await bl(n,n._uninitializedComponentsProvider._online)):(L("FirestoreClient","Using default OnlineComponentProvider"),await bl(n,new Ci))),n._onlineComponents}function Iy(n){return Ru(n).then(e=>e.syncEngine)}async function Ty(n){const e=await Ru(n),t=e.eventManager;return t.onListen=oy.bind(null,e.syncEngine),t.onUnlisten=cy.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=ay.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=uy.bind(null,e.syncEngine),t}function by(n,e,t={}){const r=new It;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,l,u,f){const m=new vy({next:A=>{m.Za(),a.enqueueAndForget(()=>Y_(o,I));const R=A.docs.has(l);!R&&A.fromCache?f.reject(new B(D.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&A.fromCache&&u&&u.source==="server"?f.reject(new B(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(A)},error:A=>f.reject(A)}),I=new ty(Yi(l.path),m,{includeMetadataChanges:!0,_a:!0});return X_(o,I)}(await Ty(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function xu(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Al=new Map;/**
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
 */function Ay(n,e,t){if(!t)throw new B(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Sy(n,e,t,r){if(e===!0&&r===!0)throw new B(D.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Sl(n){if(!$.isDocumentKey(n))throw new B(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function mo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":z()}function cr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new B(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=mo(n);throw new B(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class Rl{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new B(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Sy("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xu((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new B(D.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new B(D.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new B(D.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class go{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Rl({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Rl(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Lm;switch(r.type){case"firstParty":return new Bm(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Al.get(t);r&&(L("ComponentProvider","Removing Datastore"),Al.delete(t),r.terminate())}(this),Promise.resolve()}}function Ry(n,e,t,r={}){var s;const o=(n=cr(n,go))._getSettings(),a=`${e}:${t}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&fn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Re.MOCK_USER;else{l=ud(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new B(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Re(f)}n._authCredentials=new jm(new Pc(l,u))}}/**
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
 */class _o{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new _o(this.firestore,e,this._query)}}class Oe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ur(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Oe(this.firestore,e,this._key)}}class ur extends _o{constructor(e,t,r){super(e,t,Yi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Oe(this.firestore,null,new $(e))}withConverter(e){return new ur(this.firestore,e,this._path)}}function Pu(n,e,...t){if(n=Le(n),arguments.length===1&&(e=Cc.newId()),Ay("doc","path",e),n instanceof go){const r=le.fromString(e,...t);return Sl(r),new Oe(n,null,new $(r))}{if(!(n instanceof Oe||n instanceof ur))throw new B(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(le.fromString(e,...t));return Sl(r),new Oe(n.firestore,n instanceof ur?n.converter:null,new $(r))}}/**
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
 */class xl{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new hu(this,"async_queue_retry"),this.Vu=()=>{const r=ai();r&&L("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=ai();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=ai();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new It;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!_r(e))throw e;L("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw at("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=uo.createAndSchedule(this,e,t,r,o=>this.yu(o));return this.Tu.push(s),s}fu(){this.Eu&&z()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class yo extends go{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new xl,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new xl(e),this._firestoreClient=void 0,await e}}}function xy(n,e){const t=typeof n=="object"?n:ql(),r=typeof n=="string"?n:"(default)",s=Di(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=ld("firestore");o&&Ry(s,...o)}return s}function Cu(n){if(n._terminated)throw new B(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Py(n),n._firestoreClient}function Py(n){var e,t,r;const s=n._freezeSettings(),o=function(l,u,f,m){return new eg(l,u,f,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,xu(m.experimentalLongPollingOptions),m.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new wy(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(n._componentsProvider))}/**
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
 */class vn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vn(Te.fromBase64String(e))}catch(t){throw new B(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new vn(Te.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class vo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new B(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ee(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class wo{constructor(e){this._methodName=e}}/**
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
 */class Eo{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new B(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new B(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}}/**
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
 */class Io{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,e._values)}}/**
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
 */const Cy=/^__.*__$/;class ky{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new $t(e,this.data,this.fieldMask,t,this.fieldTransforms):new yr(e,this.data,t,this.fieldTransforms)}}function ku(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class To{constructor(e,t,r,s,o,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new To(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return ys(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(ku(this.Cu)&&Cy.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Ny{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Cs(e)}Qu(e,t,r,s=!1){return new To({Cu:e,methodName:t,qu:r,path:Ee.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Dy(n){const e=n._freezeSettings(),t=Cs(n._databaseId);return new Ny(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Vy(n,e,t,r,s,o={}){const a=n.Qu(o.merge||o.mergeFields?2:0,e,t,s);Mu("Data must be an object, but it was:",a,r);const l=Du(r,a);let u,f;if(o.merge)u=new Be(a.fieldMask),f=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const I of o.mergeFields){const A=My(e,I,t);if(!a.contains(A))throw new B(D.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);Ly(m,A)||m.push(A)}u=new Be(m),f=a.fieldTransforms.filter(I=>u.covers(I.field))}else u=null,f=a.fieldTransforms;return new ky(new Me(l),u,f)}class bo extends wo{_toFieldTransform(e){return new Sg(e.path,new or)}isEqual(e){return e instanceof bo}}function Nu(n,e){if(Vu(n=Le(n)))return Mu("Unsupported field value:",e,n),Du(n,e);if(n instanceof wo)return function(r,s){if(!ku(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const l of r){let u=Nu(l,s.Lu(a));u==null&&(u={nullValue:"NULL_VALUE"}),o.push(u),a++}return{arrayValue:{values:o}}}(n,e)}return function(r,s){if((r=Le(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Tg(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=me.fromDate(r);return{timestampValue:ms(s.serializer,o)}}if(r instanceof me){const o=new me(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ms(s.serializer,o)}}if(r instanceof Eo)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof vn)return{bytesValue:nu(s.serializer,r._byteString)};if(r instanceof Oe){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:no(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Io)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Zi(l.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${mo(r)}`)}(n,e)}function Du(n,e){const t={};return kc(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Tn(n,(r,s)=>{const o=Nu(s,e.Mu(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function Vu(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof me||n instanceof Eo||n instanceof vn||n instanceof Oe||n instanceof wo||n instanceof Io)}function Mu(n,e,t){if(!Vu(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=mo(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function My(n,e,t){if((e=Le(e))instanceof vo)return e._internalPath;if(typeof e=="string")return Ou(n,e);throw ys("Field path arguments must be of type string or ",n,!1,void 0,t)}const Oy=new RegExp("[~\\*/\\[\\]]");function Ou(n,e,t){if(e.search(Oy)>=0)throw ys(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new vo(...e.split("."))._internalPath}catch{throw ys(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ys(n,e,t,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(o||a)&&(u+=" (found",o&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new B(D.INVALID_ARGUMENT,l+n+u)}function Ly(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Lu{constructor(e,t,r,s,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Oe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new jy(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ju("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class jy extends Lu{data(){return super.data()}}function ju(n,e){return typeof e=="string"?Ou(n,e):e instanceof vo?e._internalPath:e._delegate._internalPath}class Fy{convertValue(e,t="none"){switch(Bt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ut(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw z()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Tn(e,(s,o)=>{r[s]=this.convertValue(o,t)}),r}convertVectorValue(e){var t,r,s;const o=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>ue(a.doubleValue));return new Io(o)}convertGeoPoint(e){return new Eo(ue(e.latitude),ue(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ki(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(rr(e));default:return null}}convertTimestamp(e){const t=At(e);return new me(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=le.fromString(e);te(lu(r));const s=new sr(r.get(1),r.get(3)),o=new $(r.popFirst(5));return s.isEqual(t)||at(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
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
 */function Uy(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
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
 */class By{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Fu extends Lu{constructor(e,t,r,s,o,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new $y(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(ju("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class $y extends Fu{data(e={}){return super.data(e)}}/**
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
 */function qy(n){n=cr(n,Oe);const e=cr(n.firestore,yo);return by(Cu(e),n._key).then(t=>Wy(e,n,t))}class Gy extends Fy{constructor(e){super(),this.firestore=e}convertBytes(e){return new vn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Oe(this.firestore,null,t)}}function zy(n,e,t){n=cr(n,Oe);const r=cr(n.firestore,yo),s=Uy(n.converter,e);return Hy(r,[Vy(Dy(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,st.none())])}function Hy(n,e){return function(r,s){const o=new It;return r.asyncQueue.enqueueAndForget(async()=>hy(await Iy(r),s,o)),o.promise}(Cu(n),e)}function Wy(n,e,t){const r=t.docs.get(e._key),s=new Gy(n);return new Fu(n,s,e._key,r,new By(t.hasPendingWrites,t.fromCache),e.converter)}function Ky(){return new bo("serverTimestamp")}(function(e,t=!0){(function(s){In=s})(wn),hn(new Lt("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new yo(new Fm(r.getProvider("auth-internal")),new qm(r.getProvider("app-check-internal")),function(f,m){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new B(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sr(f.options.projectId,m)}(a,s),a);return o=Object.assign({useFetchStreams:t},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),Et(Ka,"4.7.3",e),Et(Ka,"4.7.3","esm2017")})();const Qy={apiKey:"AIzaSyDDjfbJ4uO_xrI6aqOtcuq5RRBjmhwf1h8",authDomain:"homesteading-haven.firebaseapp.com",projectId:"homesteading-haven",storageBucket:"homesteading-haven.firebasestorage.app",messagingSenderId:"702634367242",appId:"1:702634367242:web:2b70a2b308ccf3686802f3",measurementId:"G-BBLXXNW0Y8"},Uu=$l(Qy),Ao=Mm(Uu),Bu=xy(Uu),Pl=new Ze,Jy=async()=>(Pl.setCustomParameters({prompt:"select_account"}),Gp(Ao,Pl)),Xy=async()=>{await bp(Ao)},Yy=async(n,e)=>{await zy(Pu(Bu,"saves",n),{...e,updatedAt:Ky()})},Zy=async n=>{const e=await qy(Pu(Bu,"saves",n));if(!e.exists())return null;const t=e.data(),{updatedAt:r,...s}=t;return s},ev=({type:n})=>{switch(n){case"wood":return d.jsx(Gh,{className:"w-4 h-4 text-amber-700"});case"food":return d.jsx(qh,{className:"w-4 h-4 text-yellow-600"});case"stone":return d.jsx(Nl,{className:"w-4 h-4 text-stone-500"});case"iron":return d.jsx($h,{className:"w-4 h-4 text-slate-400"})}},tv=()=>{const{resources:n,settlers:e,happiness:t,weather:r,isBuilding:s,selectedBuilding:o,setSelectedBuilding:a,day:l,reset:u,season:f,buildings:m,selectedBuildingId:I,selectBuildingId:A,upgradeBuilding:R,demolishBuilding:P,logs:N,nature:x,tickRate:F,setTickRate:V,objectives:q,claimObjective:U,celebrateFestival:re,sendExpedition:C,assignWorker:v,unassignWorker:g,loadSaveData:y}=Tt(),[w,E]=ce.useState(!1),[T,_]=ce.useState(!1),[De,Rt]=ce.useState(!1),[Gt,ut]=ce.useState(null),[Je,zt]=ce.useState(!1),[Sn,Ir]=ce.useState(!1),qe=O=>{a(o===O&&s?null:O)},ge=()=>{confirm("Are you sure you want to reset your progress? This cannot be undone.")&&(u(),E(!1))},de=I?m.find(O=>O.id===I):null,je=de?sn[de.type]:null,Rn=de?de.level+1:1,fe=de?Ve[de.type]:null,Ds=de?e.filter(O=>O.job===de.id).length:0,Tr=je&&Object.keys(je).every(O=>{const j=O;return n[j]>=(je[j]||0)*Rn}),Ht=100,Wt=m.reduce((O,j)=>O+(Ve[j.type].storage||0)*j.level,0),Kt=Ht+Wt,Qt=n.wood>=30&&n.food>=40,Jt=n.food>=25&&n.wood>=15,xn=O=>{const{goal:j}=O;if(j.type==="resource"&&j.key){const se=n[j.key];return Math.min(se/j.amount,1)}if(j.type==="building"&&j.key){const se=m.filter(ee=>ee.type===j.key).length;return Math.min(se/j.amount,1)}return j.type==="population"?Math.min(e.length/j.amount,1):j.type==="happiness"?Math.min(t/j.amount,1):0},br=O=>{const{goal:j}=O;return j.type==="resource"&&j.key?`${Math.floor(n[j.key])}/${j.amount}`:j.type==="building"&&j.key?`${m.filter(ee=>ee.type===j.key).length}/${j.amount}`:j.type==="population"?`${e.length}/${j.amount}`:j.type==="happiness"?`${Math.floor(t)}% / ${j.amount}%`:""},Ar=(fe==null?void 0:fe.workers)||0,Sr=Ar?`${Ds}/${Ar} workers`:"No workers needed";ce.useEffect(()=>{const O=Tp(Ao,async j=>{if(ut(j),j){Ir(!0);const se=await Zy(j.uid);se&&y(se),Ir(!1)}});return()=>O()},[y]);const Pn=async()=>{await Jy()},Cn=async()=>{await Xy(),ut(null)},Rr=async()=>{if(!Gt){await Pn();return}zt(!0),await Yy(Gt.uid,{resources:n,settlers:e,happiness:t,buildings:m,nature:x,logs:N,weather:r,season:f,day:l,objectives:q}),zt(!1)},Vs=ce.useMemo(()=>{const O={};return Object.keys(sn).forEach(j=>{const se=Ve[j],ee=Dl[j],Q=[];se.housing&&Q.push(`Housing +${se.housing}`),se.storage&&Q.push(`Storage +${se.storage} per level`),se.workers&&Q.push(`Needs ${se.workers} worker${se.workers>1?"s":""}`),se.happiness&&Q.push(`Happiness +${se.happiness} per level`),ee&&Object.entries(ee).forEach(([ye,ke])=>{ke&&ke>0&&Q.push(`Produces ${ke}/tick ${ye}`)}),j==="campfire"&&Q.push("Cozy spot that boosts happiness and eases bad weather."),j==="watchtower"&&Q.push("Mitigates storms, improves expeditions."),j==="fishery"&&Q.push("Food income even through winter."),j==="well"&&Q.push("Reduces rain/snow mood penalty."),j==="bakery"&&Q.push("Extra food and morale."),j==="warehouse"&&Q.push("Major storage expansion."),O[j]=Q}),O},[]);return d.jsxs("div",{className:"absolute inset-0 pointer-events-none flex flex-col justify-between p-4",children:[d.jsxs("div",{className:"flex justify-between items-start pointer-events-auto",children:[d.jsxs("div",{className:"flex gap-4",children:[d.jsxs("div",{className:"flex gap-4 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 text-white shadow-xl",children:[Object.entries(n).map(([O,j])=>d.jsxs("div",{className:"flex items-center gap-2 min-w-[80px]",children:[d.jsx(ev,{type:O}),d.jsxs("div",{className:"flex flex-col",children:[d.jsx("span",{className:"text-xs uppercase opacity-60 font-bold tracking-wider",children:O}),d.jsx("span",{className:`font-mono font-bold ${j>=Kt?"text-red-400":""}`,children:Math.floor(j)})]})]},O)),d.jsxs("div",{className:"border-l border-white/10 pl-4 flex items-center gap-2",children:[d.jsx(Th,{className:"w-4 h-4 text-gray-400"}),d.jsxs("div",{className:"flex flex-col",children:[d.jsx("span",{className:"text-xs uppercase opacity-60 font-bold tracking-wider",children:"Cap"}),d.jsx("span",{className:"font-mono font-bold text-gray-300",children:Kt})]})]})]}),d.jsxs("div",{className:"flex items-center gap-2 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 text-white shadow-xl min-w-[80px]",children:[d.jsx(bh,{className:"w-4 h-4 text-blue-400"}),d.jsxs("div",{className:"flex flex-col",children:[d.jsx("span",{className:"text-xs uppercase opacity-60 font-bold tracking-wider",children:"Pop"}),d.jsx("span",{className:"font-mono font-bold",children:e.length})]})]}),d.jsxs("div",{className:"flex items-center gap-2 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 text-white shadow-xl min-w-[80px]",children:[d.jsx(Ah,{className:`w-4 h-4 ${t>80?"text-green-400":t>40?"text-yellow-400":"text-red-400"}`}),d.jsxs("div",{className:"flex flex-col",children:[d.jsx("span",{className:"text-xs uppercase opacity-60 font-bold tracking-wider",children:"Happy"}),d.jsxs("span",{className:"font-mono font-bold",children:[Math.floor(t),"%"]})]})]})]}),d.jsxs("div",{className:"flex gap-2 items-stretch",children:[d.jsxs("div",{className:"flex gap-2",children:[d.jsx("div",{className:"bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 text-white shadow-xl",children:d.jsxs("div",{className:"text-sm font-bold",children:["Day ",l.toFixed(1)]})}),d.jsxs("div",{className:"bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 text-white shadow-xl flex items-center gap-2",children:[r==="sunny"&&d.jsx(Sh,{className:"w-4 h-4 text-yellow-300"}),r==="rain"&&d.jsx(Rh,{className:"w-4 h-4 text-blue-300"}),r==="snow"&&d.jsx(xh,{className:"w-4 h-4 text-cyan-200"}),d.jsxs("div",{className:"flex flex-col leading-tight",children:[d.jsx("span",{className:"text-xs uppercase opacity-60 font-bold tracking-wider",children:"Weather"}),d.jsx("span",{className:"font-mono font-bold capitalize",children:r})]})]}),d.jsxs("div",{className:"bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 text-white shadow-xl flex flex-col leading-tight",children:[d.jsx("span",{className:"text-xs uppercase opacity-60 font-bold tracking-wider",children:"Season"}),d.jsx("span",{className:"font-mono font-bold capitalize",children:f})]})]}),d.jsxs("div",{className:"flex gap-2",children:[d.jsxs("button",{onClick:re,disabled:!Qt,className:`flex items-center gap-2 px-3 py-2 rounded-xl border text-sm font-semibold transition-colors ${Qt?"bg-pink-600/30 border-pink-400 text-pink-100 hover:bg-pink-600/50":"bg-white/5 border-white/10 text-gray-400 cursor-not-allowed"}`,children:[d.jsx(Ph,{className:"w-4 h-4"}),"Festival"]}),d.jsxs("button",{onClick:C,disabled:!Jt,className:`flex items-center gap-2 px-3 py-2 rounded-xl border text-sm font-semibold transition-colors ${Jt?"bg-indigo-600/30 border-indigo-400 text-indigo-100 hover:bg-indigo-600/50":"bg-white/5 border-white/10 text-gray-400 cursor-not-allowed"}`,children:[d.jsx(Ch,{className:"w-4 h-4"}),"Expedition"]})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("button",{onClick:()=>Rt(O=>!O),className:`px-3 py-2 rounded-xl border text-sm font-semibold transition-colors ${De?"bg-emerald-600/30 border-emerald-400 text-emerald-100":"bg-white/5 border-white/10 text-white hover:bg-white/10"}`,children:"Objectives"}),d.jsxs("button",{onClick:Rr,disabled:Je||Sn,className:`px-3 py-2 rounded-xl border text-sm font-semibold transition-colors flex items-center gap-2 ${Je?"bg-yellow-600/30 border-yellow-400 text-yellow-100":"bg-white/5 border-white/10 text-white hover:bg-white/10"}`,children:[d.jsx(kh,{className:"w-4 h-4"}),Je?"Saving...":"Save"]}),Gt?d.jsxs("button",{onClick:Cn,className:"px-3 py-2 rounded-xl border border-white/10 text-sm font-semibold flex items-center gap-2 bg-white/10 hover:bg-white/20",children:[d.jsx(Nh,{className:"w-4 h-4"}),Gt.displayName||"Logout"]}):d.jsxs("button",{onClick:Pn,className:"px-3 py-2 rounded-xl border border-white/10 text-sm font-semibold flex items-center gap-2 bg-white/5 hover:bg-white/10",children:[d.jsx(Dh,{className:"w-4 h-4"}),"Sign in"]})]}),d.jsx("button",{onClick:()=>E(!w),className:"bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 text-white shadow-xl hover:bg-white/10 transition-colors",children:d.jsx(Vh,{className:"w-5 h-5"})})]})]}),w&&d.jsxs("div",{className:"absolute top-20 right-4 bg-black/80 backdrop-blur-md p-4 rounded-xl border border-white/10 text-white shadow-xl pointer-events-auto z-50 flex flex-col gap-2 min-w-[200px]",children:[d.jsx("h3",{className:"font-bold text-lg mb-2",children:"Settings"}),d.jsxs("div",{className:"flex flex-col gap-2",children:[d.jsx("span",{className:"text-xs uppercase opacity-60 font-bold tracking-wider",children:"Game Speed"}),d.jsx("div",{className:"grid grid-cols-3 gap-2",children:[1200,800,500].map(O=>d.jsxs("button",{onClick:()=>V(O),className:`px-3 py-2 rounded-lg text-sm font-semibold border transition-colors ${F===O?"bg-green-600/30 border-green-400 text-green-100":"bg-white/5 border-white/10 hover:bg-white/10"}`,children:[Math.round(1e3/O),"x"]},O))}),d.jsx("div",{className:"text-[11px] text-gray-400",children:"Higher speeds update the world more frequently."})]}),d.jsxs("button",{onClick:ge,className:"flex items-center gap-2 bg-red-500/20 hover:bg-red-500/40 text-red-200 px-4 py-2 rounded-lg transition-colors w-full text-left",children:[d.jsx(Mh,{className:"w-4 h-4"}),"Reset Progress"]}),d.jsx("div",{className:"text-xs text-gray-400 mt-2",children:"v0.2.0 Beta"})]}),d.jsx("div",{className:"absolute bottom-32 left-4 flex flex-col gap-2 w-[300px] pointer-events-none opacity-80",children:N.slice(0,5).map(O=>d.jsx("div",{className:`
                    p-2 rounded-lg text-sm font-medium backdrop-blur-md shadow-lg border border-white/5 animate-in slide-in-from-left-4 fade-in duration-300
                    ${O.type==="success"?"bg-green-900/60 text-green-100":O.type==="warning"?"bg-yellow-900/60 text-yellow-100":O.type==="danger"?"bg-red-900/60 text-red-100":"bg-gray-900/60 text-gray-100"}
                `,children:O.message},O.id))}),de&&d.jsxs("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-white shadow-2xl pointer-events-auto z-40 min-w-[300px]",children:[d.jsxs("div",{className:"flex justify-between items-start mb-4",children:[d.jsxs("div",{children:[d.jsx("h3",{className:"font-bold text-xl capitalize",children:de.type}),d.jsxs("p",{className:"text-gray-400 text-sm",children:["Level ",de.level]})]}),d.jsx("button",{onClick:()=>A(null),className:"text-gray-400 hover:text-white",children:d.jsx(Oh,{className:"w-5 h-5"})})]}),d.jsxs("div",{className:"flex flex-col gap-3",children:[fe&&d.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs bg-white/5 border border-white/10 rounded-xl p-3",children:[fe.housing&&d.jsxs("div",{className:"text-gray-200",children:["Housing: +",fe.housing]}),fe.storage&&d.jsxs("div",{className:"text-gray-200",children:["Storage: +",fe.storage*de.level]}),fe.happiness&&d.jsxs("div",{className:"text-gray-200",children:["Happiness: +",(fe.happiness*de.level).toFixed(1)]}),fe.workers!==void 0&&d.jsx("div",{className:"text-gray-200",children:Sr})]}),(fe==null?void 0:fe.workers)&&d.jsxs("div",{className:"flex items-center justify-between bg-white/5 border border-white/10 rounded-xl p-3 text-sm",children:[d.jsxs("div",{children:[d.jsx("div",{className:"font-semibold",children:"Workers"}),d.jsx("div",{className:"text-gray-300",children:Sr})]}),d.jsxs("div",{className:"flex gap-2",children:[d.jsx("button",{onClick:()=>v(de.id),className:"px-3 py-2 rounded-lg bg-green-600/30 hover:bg-green-600/50 border border-green-400 text-green-50 text-xs",children:"+ Assign"}),d.jsx("button",{onClick:()=>g(de.id),className:"px-3 py-2 rounded-lg bg-yellow-600/30 hover:bg-yellow-600/50 border border-yellow-400 text-yellow-50 text-xs",children:"- Unassign"})]})]}),d.jsxs("button",{onClick:()=>R(de.id),disabled:!Tr,className:`
                flex items-center justify-between p-3 rounded-xl border border-white/10 transition-all
                ${Tr?"bg-green-600/20 hover:bg-green-600/40 border-green-500/50":"bg-gray-800/50 opacity-50 cursor-not-allowed"}
              `,children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(Lh,{className:"w-5 h-5 text-green-400"}),d.jsxs("div",{className:"text-left",children:[d.jsx("div",{className:"font-bold",children:"Upgrade"}),d.jsx("div",{className:"text-xs text-gray-300",children:"Increases efficiency"})]})]}),d.jsx("div",{className:"flex flex-col items-end text-xs",children:je&&Object.entries(je).map(([O,j])=>d.jsxs("div",{className:n[O]<j*Rn?"text-red-400":"text-gray-300",children:[j*Rn," ",O.charAt(0).toUpperCase()]},O))})]}),d.jsxs("button",{onClick:()=>P(de.id),className:"flex items-center gap-2 p-3 rounded-xl bg-red-500/10 hover:bg-red-500/30 border border-red-500/30 text-red-200 transition-colors",children:[d.jsx(jh,{className:"w-5 h-5"}),"Demolish Building"]})]})]}),De&&d.jsxs("div",{className:"pointer-events-auto w-full max-w-4xl bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-white shadow-2xl mx-auto mt-4",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(Fh,{className:"w-5 h-5 text-amber-300"}),d.jsx("h3",{className:"text-lg font-bold",children:"Objectives"}),Sn&&d.jsx("span",{className:"text-xs text-gray-300",children:"Loading save..."})]}),d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 mt-2",children:q.map(O=>{const j=xn(O),se=br(O),ee=O.complete,Q=O.claimed;return d.jsxs("div",{className:`p-3 rounded-xl border ${ee?"border-green-400/40 bg-green-900/20":"border-white/10 bg-white/5"} shadow-inner`,children:[d.jsxs("div",{className:"flex justify-between items-start",children:[d.jsxs("div",{children:[d.jsx("div",{className:"font-bold",children:O.title}),d.jsx("div",{className:"text-xs text-gray-300",children:O.description})]}),ee?d.jsx(Uh,{className:"w-5 h-5 text-green-300"}):null]}),d.jsx("div",{className:"mt-2 h-2 bg-white/10 rounded-full overflow-hidden",children:d.jsx("div",{className:`h-full ${ee?"bg-green-400":"bg-blue-400"}`,style:{width:`${j*100}%`}})}),d.jsxs("div",{className:"text-[11px] text-gray-300 mt-1",children:["Progress: ",se]}),d.jsxs("div",{className:"flex items-center justify-between mt-2",children:[d.jsxs("div",{className:"flex items-center gap-1 text-xs text-amber-200",children:[d.jsx(Bh,{className:"w-3 h-3"}),Object.entries(O.reward).map(([ye,ke])=>`${ke} ${ye[0].toUpperCase()}`).join(", ")]}),ee&&!Q&&d.jsx("button",{onClick:()=>U(O.id),className:"px-3 py-1 rounded-lg bg-green-600/60 hover:bg-green-600 text-sm font-semibold",children:"Claim"}),Q&&d.jsx("span",{className:"text-green-300 text-xs",children:"Claimed"})]})]},O.id)})})]}),d.jsxs("div",{className:"pointer-events-none w-full px-4 pb-4 flex flex-col gap-3",children:[d.jsx("div",{className:"flex justify-end pointer-events-auto",children:d.jsxs("button",{onClick:()=>_(O=>!O),className:`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold shadow-lg transition-colors ${T?"bg-yellow-500/20 border-yellow-300 text-yellow-100":"bg-black/60 border-white/10 text-white hover:bg-white/10"}`,children:[d.jsx(Nl,{className:"w-4 h-4"}),T?"Close Build":"Build"]})}),T&&d.jsxs("div",{className:"pointer-events-auto mx-auto w-full max-w-5xl bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-2xl",children:[s&&o&&d.jsxs("div",{className:"mb-3 bg-yellow-500/15 border border-yellow-400/40 text-yellow-100 px-4 py-2 rounded-lg text-sm font-semibold",children:["Placing ",o,"... tap ground to confirm."]}),d.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[320px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-white/20",children:Object.keys(sn).map(O=>{const j=sn[O],se=Vs[O]||[],ee=o===O,Q=Object.keys(j).every(ye=>n[ye]>=(j[ye]||0));return d.jsxs("button",{onClick:()=>qe(O),disabled:!Q,className:`
                      text-left flex flex-col gap-2 p-3 rounded-xl transition-all duration-200 border
                      ${ee?"bg-yellow-600/20 border-yellow-400/60 ring-2 ring-yellow-400/70 text-white":"bg-white/5 border-white/10 hover:bg-white/10 text-gray-200"}
                      ${Q?"active:scale-95":"opacity-50 cursor-not-allowed grayscale"}
                    `,children:[d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsx("span",{className:"capitalize font-bold text-base",children:O.replace(/([A-Z])/g," $1").trim()}),d.jsx("span",{className:"text-[11px] px-2 py-1 rounded-full bg-white/10 border border-white/10",children:Q?"Build":"Need resources"})]}),d.jsx("div",{className:"flex flex-wrap gap-2 text-xs text-gray-200",children:Object.entries(j).map(([ye,ke])=>d.jsxs("span",{className:`px-2 py-1 rounded-full border ${n[ye]<ke?"border-red-400/60 text-red-200":"border-white/20 text-white"}`,children:[ke," ",ye]},ye))}),d.jsx("div",{className:"flex flex-col gap-1 text-xs text-gray-300",children:se.length?se.map((ye,ke)=>d.jsxs("div",{className:"flex items-start gap-2",children:[d.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-white/40 mt-1"}),d.jsx("span",{children:ye})]},ke)):d.jsx("span",{className:"text-gray-400",children:"No special benefits."})})]},O)})})]})]})]})},Cl=({type:n,level:e=1,selected:t,ghost:r,isValid:s=!0,onClick:o})=>{const a=ce.useMemo(()=>{if(r&&!s)return"#ff0000";switch(n){case"cabin":return"#8B4513";case"farm":return"#DAA520";case"lumberMill":return"#556B2F";case"mine":return"#696969";case"warehouse":return"#A0522D";case"bakery":return"#d97706";case"well":return"#3b82f6";case"campfire":return"#f97316";case"watchtower":return"#9ca3af";case"fishery":return"#0ea5e9";default:return"#ffffff"}},[n,r,s]),l=r?.5:1,u=r;return d.jsxs("group",{onClick:o,children:[n==="barn"&&d.jsxs(d.Fragment,{children:[d.jsxs("mesh",{position:[0,1.5,0],castShadow:!0,receiveShadow:!0,children:[d.jsx("boxGeometry",{args:[3,3,2.5]}),d.jsx("meshStandardMaterial",{color:"#b45309",roughness:.7,transparent:u,opacity:l})]}),d.jsxs("mesh",{position:[0,1.6,1.3],castShadow:!0,children:[d.jsx("boxGeometry",{args:[2.8,.2,.2]}),d.jsx("meshStandardMaterial",{color:"#fbbf24",emissive:"#f59e0b",emissiveIntensity:r?0:.2,transparent:u,opacity:l})]}),d.jsxs("mesh",{position:[0,3,0],rotation:[0,0,Math.PI/10],castShadow:!0,children:[d.jsx("boxGeometry",{args:[3.4,.25,3]}),d.jsx("meshStandardMaterial",{color:"#78350f",roughness:.5,transparent:u,opacity:l})]}),d.jsxs("mesh",{position:[0,3.2,0],rotation:[0,Math.PI,-Math.PI/10],castShadow:!0,children:[d.jsx("boxGeometry",{args:[3.4,.25,3]}),d.jsx("meshStandardMaterial",{color:"#652b0b",roughness:.5,transparent:u,opacity:l})]}),d.jsxs("mesh",{position:[0,.8,1.31],castShadow:!0,children:[d.jsx("boxGeometry",{args:[1.2,1.6,.1]}),d.jsx("meshStandardMaterial",{color:"#f8fafc",transparent:u,opacity:l})]}),d.jsxs("mesh",{position:[0,1.6,1.32],castShadow:!0,children:[d.jsx("boxGeometry",{args:[.6,.4,.1]}),d.jsx("meshStandardMaterial",{color:"#e2e8f0",transparent:u,opacity:l})]}),d.jsxs("mesh",{position:[0,2.4,1.26],castShadow:!0,children:[d.jsx("boxGeometry",{args:[.7,.5,.1]}),d.jsx("meshStandardMaterial",{color:"#bfdbfe",emissive:"#60a5fa",emissiveIntensity:r?0:.5,transparent:u,opacity:l})]}),e>=2&&d.jsxs("mesh",{position:[2,1.5,-1],castShadow:!0,children:[d.jsx("cylinderGeometry",{args:[.5,.6,3,12]}),d.jsx("meshStandardMaterial",{color:"#d4d4d8",transparent:u,opacity:l})]}),e>=3&&d.jsxs("mesh",{position:[-2,1.7,1],castShadow:!0,children:[d.jsx("cylinderGeometry",{args:[.6,.7,3.4,12]}),d.jsx("meshStandardMaterial",{color:"#c084fc",emissive:"#a855f7",emissiveIntensity:r?0:.6,transparent:u,opacity:l})]})]}),n!=="farm"&&d.jsxs("mesh",{position:[0,1,0],castShadow:!0,receiveShadow:!0,children:[d.jsx("boxGeometry",{args:[2,2,2]}),d.jsx("meshStandardMaterial",{color:a,transparent:u,opacity:l})]}),n==="cabin"&&d.jsxs(d.Fragment,{children:[d.jsxs("mesh",{position:[0,1.2,0],castShadow:!0,receiveShadow:!0,children:[d.jsx("boxGeometry",{args:[2.2,1.6,2.2]}),d.jsx("meshStandardMaterial",{color:"#8b5a2b",roughness:.8,transparent:u,opacity:l})]}),d.jsxs("mesh",{position:[0,.6,1.11],castShadow:!0,children:[d.jsx("boxGeometry",{args:[.6,1,.1]}),d.jsx("meshStandardMaterial",{color:"#5b3314",transparent:u,opacity:l})]}),d.jsxs("mesh",{position:[-.9,1.1,0],castShadow:!0,children:[d.jsx("boxGeometry",{args:[.1,.6,.6]}),d.jsx("meshStandardMaterial",{color:"#93c5fd",emissive:"#60a5fa",emissiveIntensity:r?0:.4,transparent:u,opacity:l})]}),d.jsxs("mesh",{position:[.9,1.1,0],castShadow:!0,children:[d.jsx("boxGeometry",{args:[.1,.6,.6]}),d.jsx("meshStandardMaterial",{color:"#93c5fd",emissive:"#60a5fa",emissiveIntensity:r?0:.4,transparent:u,opacity:l})]}),d.jsxs("mesh",{position:[0,2.4,0],rotation:[0,0,Math.PI/9],castShadow:!0,children:[d.jsx("boxGeometry",{args:[2.4,.2,2.6]}),d.jsx("meshStandardMaterial",{color:"#4a3424",roughness:.6,transparent:u,opacity:l})]}),d.jsxs("mesh",{position:[0,2.6,0],rotation:[0,Math.PI,-Math.PI/9],castShadow:!0,children:[d.jsx("boxGeometry",{args:[2.4,.2,2.6]}),d.jsx("meshStandardMaterial",{color:"#3b2a1c",roughness:.6,transparent:u,opacity:l})]}),d.jsxs("mesh",{position:[.7,2.8,.7],castShadow:!0,children:[d.jsx("boxGeometry",{args:[.4,.8,.4]}),d.jsx("meshStandardMaterial",{color:"#9ca3af",roughness:.4,transparent:u,opacity:l})]})]}),n==="farm"&&d.jsxs(d.Fragment,{children:[d.jsxs("mesh",{position:[0,.1,0],rotation:[-Math.PI/2,0,0],receiveShadow:!0,children:[d.jsx("planeGeometry",{args:[3,3]}),d.jsx("meshStandardMaterial",{color:"#8b5a2b",transparent:u,opacity:l})]}),[-1,-.3,.4,1.1].map((f,m)=>d.jsxs("mesh",{position:[f,.25,0],receiveShadow:!0,castShadow:!0,children:[d.jsx("boxGeometry",{args:[.4,.2,2.6]}),d.jsx("meshStandardMaterial",{color:"#a16207",roughness:.9,transparent:u,opacity:l})]},m)),Array.from({length:8}).map((f,m)=>{const I=-1.2+m%4*.8,A=-1+Math.floor(m/4)*1.2;return d.jsxs("mesh",{position:[I,.65,A],castShadow:!0,children:[d.jsx("coneGeometry",{args:[.18,.7,6]}),d.jsx("meshStandardMaterial",{color:"#22c55e",emissive:"#16a34a",emissiveIntensity:r?0:.3,transparent:u,opacity:l})]},`crop-${m}`)}),d.jsxs("mesh",{position:[0,1,1.4],castShadow:!0,children:[d.jsx("boxGeometry",{args:[1.4,1.2,.8]}),d.jsx("meshStandardMaterial",{color:"#b45309",roughness:.8,transparent:u,opacity:l})]}),d.jsxs("mesh",{position:[0,1.8,1.4],castShadow:!0,children:[d.jsx("boxGeometry",{args:[1.6,.3,1]}),d.jsx("meshStandardMaterial",{color:"#92400e",roughness:.7,transparent:u,opacity:l})]}),[[-1.6,-1.6],[1.6,-1.6],[-1.6,1.6],[1.6,1.6]].map(([f,m],I)=>d.jsxs("mesh",{position:[f,.6,m],castShadow:!0,children:[d.jsx("boxGeometry",{args:[.15,1.2,.15]}),d.jsx("meshStandardMaterial",{color:"#d97706",transparent:u,opacity:l})]},`fence-${I}`))]}),n==="mine"&&d.jsxs("mesh",{position:[.8,.5,.8],castShadow:!0,children:[d.jsx("boxGeometry",{args:[1,1,1]}),d.jsx("meshStandardMaterial",{color:"#2F2F2F",transparent:u,opacity:l})]}),n==="lumberMill"&&d.jsxs("mesh",{position:[0,2.2,0],rotation:[0,0,Math.PI/2],castShadow:!0,children:[d.jsx("cylinderGeometry",{args:[.8,.8,2.2,8]}),d.jsx("meshStandardMaterial",{color:"#DEB887",transparent:u,opacity:l})]}),n==="bakery"&&d.jsxs(d.Fragment,{children:[d.jsxs("mesh",{position:[0,2.3,0],castShadow:!0,children:[d.jsx("cylinderGeometry",{args:[.9,.9,1.2,12]}),d.jsx("meshStandardMaterial",{color:"#fbbf24",transparent:u,opacity:l})]}),d.jsxs("mesh",{position:[.6,2.9,0],castShadow:!0,children:[d.jsx("coneGeometry",{args:[.4,.6,6]}),d.jsx("meshStandardMaterial",{color:"#7c2d12",transparent:u,opacity:l})]})]}),n==="well"&&d.jsxs(d.Fragment,{children:[d.jsxs("mesh",{position:[0,1.1,0],castShadow:!0,children:[d.jsx("cylinderGeometry",{args:[.9,.9,1.2,16]}),d.jsx("meshStandardMaterial",{color:"#60a5fa",transparent:u,opacity:l})]}),d.jsxs("mesh",{position:[0,1.7,0],castShadow:!0,children:[d.jsx("torusGeometry",{args:[.8,.12,8,24]}),d.jsx("meshStandardMaterial",{color:"#1d4ed8",transparent:u,opacity:l})]}),d.jsxs("mesh",{position:[0,2.3,0],castShadow:!0,children:[d.jsx("cylinderGeometry",{args:[.12,.12,.8,8]}),d.jsx("meshStandardMaterial",{color:"#9ca3af",transparent:u,opacity:l})]})]}),n==="campfire"&&d.jsxs(d.Fragment,{children:[d.jsxs("mesh",{position:[0,.8,0],castShadow:!0,children:[d.jsx("cylinderGeometry",{args:[.6,.7,.4,10]}),d.jsx("meshStandardMaterial",{color:"#92400e",transparent:u,opacity:l})]}),d.jsxs("mesh",{position:[0,1.1,0],children:[d.jsx("coneGeometry",{args:[.5,.6,10]}),d.jsx("meshStandardMaterial",{color:"#f97316",emissive:"#fb923c",emissiveIntensity:r?0:1.2,transparent:u,opacity:l})]}),d.jsxs("mesh",{position:[0,.5,0],rotation:[Math.PI/2,0,0],children:[d.jsx("torusGeometry",{args:[1,.1,8,24]}),d.jsx("meshStandardMaterial",{color:"#57534e",transparent:u,opacity:l})]})]}),n==="watchtower"&&d.jsxs(d.Fragment,{children:[d.jsxs("mesh",{position:[0,2,0],castShadow:!0,children:[d.jsx("cylinderGeometry",{args:[.7,.7,4,8]}),d.jsx("meshStandardMaterial",{color:"#9ca3af",transparent:u,opacity:l})]}),d.jsxs("mesh",{position:[0,4.2,0],castShadow:!0,children:[d.jsx("boxGeometry",{args:[2.2,.4,2.2]}),d.jsx("meshStandardMaterial",{color:"#4b5563",transparent:u,opacity:l})]}),d.jsxs("mesh",{position:[0,4.8,0],castShadow:!0,children:[d.jsx("coneGeometry",{args:[1.6,1,6]}),d.jsx("meshStandardMaterial",{color:"#1f2937",transparent:u,opacity:l})]}),d.jsxs("mesh",{position:[1,1.2,1],rotation:[0,0,Math.PI/2],children:[d.jsx("boxGeometry",{args:[.2,2,.5]}),d.jsx("meshStandardMaterial",{color:"#d1d5db",transparent:u,opacity:l})]})]}),n==="fishery"&&d.jsxs("group",{children:[d.jsxs("mesh",{position:[0,1,0],castShadow:!0,children:[d.jsx("boxGeometry",{args:[2.5,1.6,2]}),d.jsx("meshStandardMaterial",{color:"#0ea5e9",transparent:u,opacity:l})]}),d.jsxs("mesh",{position:[0,2.3,0],castShadow:!0,children:[d.jsx("boxGeometry",{args:[2.7,.4,2.2]}),d.jsx("meshStandardMaterial",{color:"#075985",transparent:u,opacity:l})]}),d.jsxs("mesh",{position:[1.6,.5,0],castShadow:!0,children:[d.jsx("boxGeometry",{args:[1.5,.3,1]}),d.jsx("meshStandardMaterial",{color:"#7c3aed",transparent:u,opacity:l})]}),d.jsxs("mesh",{position:[0,.2,0],rotation:[-Math.PI/2,0,0],children:[d.jsx("planeGeometry",{args:[3,3]}),d.jsx("meshStandardMaterial",{color:"#38bdf8",transparent:!0,opacity:.3})]})]}),t&&!r&&d.jsxs("mesh",{position:[0,.1,0],rotation:[-Math.PI/2,0,0],children:[d.jsx("ringGeometry",{args:[1.5,1.7,32]}),d.jsx("meshBasicMaterial",{color:"#00ff00"})]}),!r&&d.jsx(un,{position:[0,3,0],center:!0,distanceFactor:15,children:d.jsxs("div",{className:"bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm whitespace-nowrap",children:["Lvl ",e]})})]})},nv=({id:n,position:e,scale:t=1})=>{const{addResource:r,removeNature:s,isBuilding:o,season:a}=Tt(),[l,u]=ce.useState(!1),[f,m]=ce.useState(0),[I,A]=ce.useState(0),R=()=>{switch(a){case"spring":return l?"#2e8b2e":"#228B22";case"summer":return l?"#008000":"#006400";case"autumn":return l?"#CD853F":"#D2691E";case"winter":return l?"#F0FFFF":"#E0FFFF";default:return l?"#2e8b2e":"#228B22"}},P=N=>{N.stopPropagation(),r("wood",10),m(Date.now());const x=I+1;A(x),x>=5&&s(n)};return d.jsxs("group",{position:e,scale:[t*(l?1.1:1),t*(l?1.1:1),t*(l?1.1:1)],onPointerOver:()=>u(!0),onPointerOut:()=>u(!1),onClick:P,children:[d.jsxs("mesh",{position:[0,.75,0],castShadow:!0,children:[d.jsx("cylinderGeometry",{args:[.2,.3,1.5,6]}),d.jsx("meshStandardMaterial",{color:l?"#6d4c3d":"#5C4033"})]}),d.jsxs("mesh",{position:[0,2,0],castShadow:!0,children:[d.jsx("coneGeometry",{args:[1,2,8]}),d.jsx("meshStandardMaterial",{color:R()})]}),d.jsxs("mesh",{position:[0,3,0],castShadow:!0,children:[d.jsx("coneGeometry",{args:[.8,1.5,8]}),d.jsx("meshStandardMaterial",{color:R()})]}),l&&!o&&d.jsx(un,{position:[0,4,0],center:!0,distanceFactor:10,children:d.jsxs("div",{className:"bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm whitespace-nowrap pointer-events-none flex flex-col items-center",children:[d.jsx("span",{children:"Gather Wood (+10)"}),d.jsxs("span",{className:"text-[10px] text-gray-300",children:["(",5-I," more to clear)"]})]})}),Date.now()-f<1e3&&d.jsx(un,{position:[0,2,0],center:!0,distanceFactor:10,zIndexRange:[100,0],children:d.jsx("div",{className:"text-green-400 font-bold text-sm animate-bounce pointer-events-none",children:"+10 Wood"})})]})},rv=({id:n,position:e,scale:t=1})=>{const{addResource:r,removeNature:s,isBuilding:o,season:a}=Tt(),[l,u]=ce.useState(!1),[f,m]=ce.useState(0),[I,A]=ce.useState(0),R=()=>a==="winter"?l?"#cbd5e1":"#e2e8f0":a==="autumn"?l?"#b0a18f":"#8b7c6a":l?"#9ca3af":"#6b7280",P=N=>{N.stopPropagation(),r("stone",5),Math.random()>.7&&r("iron",2),m(Date.now());const x=I+1;A(x),x>=5&&s(n)};return d.jsxs("group",{position:e,scale:[t*(l?1.1:1),t*(l?1.1:1),t*(l?1.1:1)],rotation:[0,Math.random()*Math.PI,0],onPointerOver:()=>u(!0),onPointerOut:()=>u(!1),onClick:P,children:[d.jsxs("mesh",{castShadow:!0,receiveShadow:!0,children:[d.jsx("dodecahedronGeometry",{args:[.8,0]}),d.jsx("meshStandardMaterial",{color:R(),flatShading:!0})]}),l&&!o&&d.jsx(un,{position:[0,1.5,0],center:!0,distanceFactor:10,children:d.jsxs("div",{className:"bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm whitespace-nowrap pointer-events-none flex flex-col items-center",children:[d.jsx("span",{children:"Gather Stone (+5)"}),d.jsxs("span",{className:"text-[10px] text-gray-300",children:["(",5-I," more to clear)"]})]})}),Date.now()-f<1e3&&d.jsx(un,{position:[0,1,0],center:!0,distanceFactor:10,zIndexRange:[100,0],children:d.jsx("div",{className:"text-gray-300 font-bold text-sm animate-bounce pointer-events-none",children:"+5 Stone"})})]})},sv=()=>{const n=Tt(e=>e.nature);return d.jsx("group",{children:n.map(e=>e.type==="tree"?d.jsx(nv,{id:e.id,position:e.position,scale:e.scale},e.id):d.jsx(rv,{id:e.id,position:e.position,scale:e.scale},e.id))})},iv=({settler:n})=>{const e=ce.useRef(null);return ph(t=>{e.current&&(e.current.position.y=Math.sin(t.clock.elapsedTime*5)*.1,n.state==="walking"&&n.targetPosition&&e.current.lookAt(n.targetPosition[0],0,n.targetPosition[2]))}),d.jsxs("group",{position:n.position,ref:e,children:[d.jsxs("mesh",{position:[0,.5,0],castShadow:!0,children:[d.jsx("capsuleGeometry",{args:[.2,.6,4,8]}),d.jsx("meshStandardMaterial",{color:"#3b82f6"})]}),d.jsxs("mesh",{position:[0,.9,0],castShadow:!0,children:[d.jsx("sphereGeometry",{args:[.2,16,16]}),d.jsx("meshStandardMaterial",{color:"#ffdbac"})]}),d.jsx(un,{position:[0,1.4,0],center:!0,distanceFactor:10,children:d.jsx("div",{className:"bg-black/50 text-white text-[10px] px-1 rounded backdrop-blur-sm whitespace-nowrap pointer-events-none",children:n.name})}),d.jsxs("mesh",{position:[0,.01,0],rotation:[-Math.PI/2,0,0],children:[d.jsx("circleGeometry",{args:[.25,16]}),d.jsx("meshBasicMaterial",{color:"black",opacity:.3,transparent:!0})]})]})},ov=()=>{const{buildings:n,nature:e,selectedBuilding:t,selectedBuildingId:r,isBuilding:s,addBuilding:o,selectBuildingId:a,setSelectedBuilding:l,season:u,settlers:f}=Tt(),[m,I]=ce.useState(null),[A,R]=ce.useState(!0),P=2,N=()=>{switch(u){case"spring":return"#5C8C46";case"summer":return"#4A7036";case"autumn":return"#8B7355";case"winter":return"#F0F8FF";default:return"#5C8C46"}},x=U=>{if(n.some(E=>E.position[0]===U[0]&&E.position[2]===U[2]))return!0;const C=U[0]-.8,v=U[0]+.8,g=U[2]-.8,y=U[2]+.8;return e.some(E=>E.position[0]>C&&E.position[0]<v&&E.position[2]>g&&E.position[2]<y)},F=U=>{if(!s||!t){m&&I(null);return}const re=Math.round(U.point.x/P)*P,C=Math.round(U.point.z/P)*P,v=[re,0,C];(!m||m[0]!==re||m[2]!==C)&&(I(v),R(!x(v)))},V=U=>{s&&t&&m?(U.stopPropagation(),A&&o(t,m)):(a(null),l(null))},q=(U,re)=>{s||(U.stopPropagation(),a(re))};return d.jsxs("group",{children:[d.jsx(sv,{}),d.jsxs("mesh",{rotation:[-Math.PI/2,0,0],position:[0,-.1,0],receiveShadow:!0,onPointerMove:F,onClick:V,children:[d.jsx("planeGeometry",{args:[100,100]}),d.jsx("meshStandardMaterial",{color:N()})]}),d.jsx("gridHelper",{args:[100,50,16777215,16777215],position:[0,.01,0],"material-opacity":.2,"material-transparent":!0}),n.map(U=>d.jsx("group",{position:U.position,children:d.jsx(Cl,{type:U.type,level:U.level,selected:r===U.id,onClick:re=>q(re,U.id)})},U.id)),f.map(U=>d.jsx(iv,{settler:U},U.id)),s&&t&&m&&d.jsx("group",{position:m,children:d.jsx(Cl,{type:t,ghost:!0,isValid:A})})]})},av=()=>{const n=Tt(t=>t.tick),e=Tt(t=>t.tickRate);return ce.useEffect(()=>{const t=setInterval(()=>{n()},e);return()=>clearInterval(t)},[n,e]),null},lv=()=>{const{day:n,weather:e}=Tt(),t=ce.useRef(null),r=n%1,s=[Math.sin(r*Math.PI*2)*100,Math.cos(r*Math.PI*2+Math.PI)*100,20],o=s[1]/100;let a=Math.max(0,o);e!=="sunny"&&(a*=.5);const l=Math.max(.1,a*.5);let u=a>.2?"#87CEEB":"#050510";return e==="rain"&&(u="#708090"),e==="snow"&&(u="#E0FFFF"),e!=="sunny"&&a<.2&&(u="#050510"),d.jsxs(d.Fragment,{children:[d.jsx(mh,{sunPosition:s,turbidity:e!=="sunny"?10:.5,rayleigh:e!=="sunny"?.1:.5+(1-a)*.5,mieCoefficient:.005,mieDirectionalG:.7}),a<.2&&e==="sunny"&&d.jsx(gh,{radius:100,depth:50,count:5e3,factor:4,saturation:0,fade:!0,speed:1}),a<.3&&e==="sunny"&&d.jsx(Xs,{count:100,scale:50,size:4,speed:.4,opacity:.7,color:"#ffff00",position:[0,5,0]}),e==="rain"&&d.jsxs(d.Fragment,{children:[d.jsx(Xs,{count:2e3,scale:[50,20,50],size:2,speed:2,opacity:.6,color:"#aaaaaa",position:[0,10,0]}),d.jsx(qr,{position:[-10,15,-10],opacity:.5,speed:.2}),d.jsx(qr,{position:[10,15,10],opacity:.5,speed:.2})]}),e==="snow"&&d.jsxs(d.Fragment,{children:[d.jsx(Xs,{count:2e3,scale:[50,20,50],size:4,speed:.5,opacity:.8,color:"#ffffff",position:[0,10,0]}),d.jsx(qr,{position:[-10,15,-10],opacity:.3,speed:.1,color:"#ffffff"}),d.jsx(qr,{position:[10,15,10],opacity:.3,speed:.1,color:"#ffffff"})]}),d.jsx(_h,{preset:e==="sunny"?"forest":"city",background:!1}),d.jsx("ambientLight",{intensity:l,color:e==="snow"?"#E0FFFF":a<.2?"#1a1a2e":"#ffffff"}),d.jsx("directionalLight",{ref:t,position:s,intensity:a*2,castShadow:!0,"shadow-mapSize":[2048,2048],"shadow-bias":-1e-4,children:d.jsx("orthographicCamera",{attach:"shadow-camera",args:[-50,50,50,-50]})}),d.jsx("fog",{attach:"fog",args:[u,10,80]})]})};function cv(){return d.jsxs("div",{className:"relative w-full h-full bg-slate-900 touch-none",children:[d.jsx(av,{}),d.jsx(yh,{shadows:!0,camera:{position:[20,20,20],fov:50},dpr:[1,2],gl:{antialias:!1},children:d.jsxs(ce.Suspense,{fallback:d.jsxs("mesh",{position:[0,0,0],children:[d.jsx("boxGeometry",{args:[1,1,1]}),d.jsx("meshStandardMaterial",{color:"orange",wireframe:!0})]}),children:[d.jsx(lv,{}),d.jsx(ov,{}),d.jsx(vh,{makeDefault:!0,maxPolarAngle:Math.PI/2.2,minDistance:10,maxDistance:80,enableDamping:!0,dampingFactor:.05}),d.jsxs(zh,{children:[d.jsx(Hh,{luminanceThreshold:1,mipmapBlur:!0,intensity:.5}),d.jsx(Wh,{}),d.jsx(Kh,{eskil:!1,offset:.1,darkness:.5})]})]})}),d.jsx(tv,{})]})}console.log("Homestead Survival: Initializing...");console.log("Three.js Revision:",wh);class uv extends kl.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){console.error("Uncaught error:",e,t)}render(){var e;return this.state.hasError?d.jsxs("div",{className:"flex flex-col items-center justify-center h-screen bg-slate-900 text-white p-4",children:[d.jsx("h1",{className:"text-2xl font-bold text-red-500 mb-4",children:"Something went wrong"}),d.jsx("pre",{className:"bg-black/50 p-4 rounded text-sm overflow-auto max-w-full",children:(e=this.state.error)==null?void 0:e.toString()}),d.jsx("button",{onClick:()=>window.location.reload(),className:"mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700",children:"Reload Game"})]}):this.props.children}}Eh.createRoot(document.getElementById("root")).render(d.jsx(kl.StrictMode,{children:d.jsx(uv,{children:d.jsx(cv,{})})}));
