import{r as m,g as j,R as x}from"./vendor-BqKG48Gq.js";const R={},k=e=>{let t;const a=new Set,o=(s,d)=>{const c=typeof s=="function"?s(t):s;if(!Object.is(c,t)){const u=t;t=d??(typeof c!="object"||c===null)?c:Object.assign({},t,c),a.forEach(f=>f(t,u))}},r=()=>t,l={setState:o,getState:r,getInitialState:()=>h,subscribe:s=>(a.add(s),()=>a.delete(s)),destroy:()=>{(R?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),a.clear()}},h=t=e(o,r,l);return l},C=e=>e?k(e):k;var w={exports:{}},M={},L={exports:{}},_={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p=m;function D(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var V=typeof Object.is=="function"?Object.is:D,I=p.useState,z=p.useEffect,A=p.useLayoutEffect,W=p.useDebugValue;function Z(e,t){var a=t(),o=I({inst:{value:a,getSnapshot:t}}),r=o[0].inst,n=o[1];return A(function(){r.value=a,r.getSnapshot=t,S(r)&&n({inst:r})},[e,a,t]),z(function(){return S(r)&&n({inst:r}),e(function(){S(r)&&n({inst:r})})},[e]),W(a),a}function S(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!V(e,a)}catch{return!0}}function T(e,t){return t()}var H=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?T:Z;_.useSyncExternalStore=p.useSyncExternalStore!==void 0?p.useSyncExternalStore:H;L.exports=_;var O=L.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b=m,P=O;function F(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var N=typeof Object.is=="function"?Object.is:F,B=P.useSyncExternalStore,G=b.useRef,U=b.useEffect,K=b.useMemo,q=b.useDebugValue;M.useSyncExternalStoreWithSelector=function(e,t,a,o,r){var n=G(null);if(n.current===null){var i={hasValue:!1,value:null};n.current=i}else i=n.current;n=K(function(){function l(u){if(!h){if(h=!0,s=u,u=o(u),r!==void 0&&i.hasValue){var f=i.value;if(r(f,u))return d=f}return d=u}if(f=d,N(s,u))return f;var E=o(u);return r!==void 0&&r(f,E)?(s=u,f):(s=u,d=E)}var h=!1,s,d,c=a===void 0?null:a;return[function(){return l(t())},c===null?void 0:function(){return l(c())}]},[t,a,o,r]);var v=B(e,n[0],n[1]);return U(function(){i.hasValue=!0,i.value=v},[v]),q(v),v};w.exports=M;var J=w.exports;const Q=j(J),$={},{useDebugValue:X}=x,{useSyncExternalStoreWithSelector:Y}=Q;let g=!1;const ee=e=>e;function te(e,t=ee,a){($?"production":void 0)!=="production"&&a&&!g&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),g=!0);const o=Y(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,a);return X(o),o}const ae=e=>{($?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?C(e):e,a=(o,r)=>te(t,o,r);return Object.assign(a,t),a},se=e=>ae;/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var re={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),y=(e,t)=>{const a=m.forwardRef(({color:o="currentColor",size:r=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:v="",children:l,...h},s)=>m.createElement("svg",{ref:s,...re,width:r,height:r,stroke:o,strokeWidth:i?Number(n)*24/Number(r):n,className:["lucide",`lucide-${oe(e)}`,v].join(" "),...h},[...t.map(([d,c])=>m.createElement(d,c)),...Array.isArray(l)?l:[l]]));return a.displayName=`${e}`,a};/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=y("Hammer",[["path",{d:"m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9",key:"1afvon"}],["path",{d:"M17.64 15 22 10.64",key:"zsji6s"}],["path",{d:"m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91",key:"lehyy1"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=y("Mountain",[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=y("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=y("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=y("Trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"yh07w9"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=y("Wheat",[["path",{d:"M2 22 16 8",key:"60hf96"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1rdhi6"}],["path",{d:"M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1sdzmb"}],["path",{d:"M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"eoatbi"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z",key:"19rau1"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"tc8ph9"}],["path",{d:"M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"2m8kc5"}],["path",{d:"M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"vex3ng"}]]);export{ue as H,ce as M,ie as R,le as S,de as T,fe as W,se as c};
