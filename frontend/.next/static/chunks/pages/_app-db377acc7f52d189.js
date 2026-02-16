(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{9711:function(e,t,r){"use strict";r.d(t,{BH:function(){return w},LL:function(){return D},ZR:function(){return L},tV:function(){return h},L:function(){return u},ne:function(){return V},vZ:function(){return function e(t,r){if(t===r)return!0;let n=Object.keys(t),i=Object.keys(r);for(let s of n){if(!i.includes(s))return!1;let n=t[s],o=r[s];if(x(n)&&x(o)){if(!e(n,o))return!1}else if(n!==o)return!1}for(let e of i)if(!n.includes(e))return!1;return!0}},pd:function(){return j},aH:function(){return y},q4:function(){return g},Pz:function(){return v},m9:function(){return $},z$:function(){return S},ru:function(){return C},Xx:function(){return b},L_:function(){return A},xb:function(){return M},w1:function(){return P},hl:function(){return k},uI:function(){return R},b$:function(){return O},Uo:function(){return _},xO:function(){return B},zd:function(){return F},dp:function(){return T},eu:function(){return N}});let n=()=>void 0;var i=r(7061);/**
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
 */let s=function(e){let t=[],r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t[r++]=i:(i<2048?t[r++]=i>>6|192:((64512&i)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128):t[r++]=i>>12|224,t[r++]=i>>6&63|128),t[r++]=63&i|128)}return t},o=function(e){let t=[],r=0,n=0;for(;r<e.length;){let i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){let s=((7&i)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(s>>10)),t[n++]=String.fromCharCode(56320+(1023&s))}else{let s=e[r++],o=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},a={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){let i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=i>>2,u=(3&i)<<4|o>>4,h=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(h=64)),n.push(r[c],r[u],r[h],r[d])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(s(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):o(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){let i=r[e.charAt(t++)],s=t<e.length?r[e.charAt(t)]:0,o=++t<e.length?r[e.charAt(t)]:64,a=++t<e.length?r[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw new l;let c=i<<2|s>>4;if(n.push(c),64!==o){let e=s<<4&240|o>>2;if(n.push(e),64!==a){let e=o<<6&192|a;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class l extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let c=function(e){let t=s(e);return a.encodeByteArray(t,!0)},u=function(e){return c(e).replace(/\./g,"")},h=function(e){try{return a.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},d=()=>/**
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
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==r.g)return r.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,f=()=>{if(void 0===i||void 0===i.env)return;let e=i.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},p=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&h(e[1]);return t&&JSON.parse(t)},m=()=>{try{return n()||d()||f()||p()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},g=e=>m()?.emulatorHosts?.[e],y=()=>m()?.config,v=e=>m()?.[`_${e}`];/**
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
 */class w{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function _(e){return(await fetch(e,{credentials:"include"})).ok}let E={},I=!1;function T(e,t){if("undefined"==typeof window||"undefined"==typeof document||!b(window.location.host)||E[e]===t||E[e]||I)return;function r(e){return`__firebase__banner__${e}`}E[e]=t;let n="__firebase__banner",i=function(){let e={prod:[],emulator:[]};for(let t of Object.keys(E))E[t]?e.emulator.push(t):e.prod.push(t);return e}().prod.length>0;function s(){let e,t;let s=(e=document.getElementById(n),t=!1,e||((e=document.createElement("div")).setAttribute("id",n),t=!0),{created:t,element:e}),o=r("text"),a=document.getElementById(o)||document.createElement("span"),l=r("learnmore"),c=document.getElementById(l)||document.createElement("a"),u=r("preprendIcon"),h=document.getElementById(u)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(s.created){let e=s.element;e.style.display="flex",e.style.background="#7faaf0",e.style.position="fixed",e.style.bottom="5px",e.style.left="5px",e.style.padding=".5em",e.style.borderRadius="5px",e.style.alignItems="center",c.setAttribute("id",l),c.innerText="Learn more",c.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",c.setAttribute("target","__blank"),c.style.paddingLeft="5px",c.style.textDecoration="underline";let t=function(){let e=document.createElement("span");return e.style.cursor="pointer",e.style.marginLeft="16px",e.style.fontSize="24px",e.innerHTML=" &times;",e.onclick=()=>{I=!0,function(){let e=document.getElementById(n);e&&e.remove()}()},e}();h.setAttribute("width","24"),h.setAttribute("id",u),h.setAttribute("height","24"),h.setAttribute("viewBox","0 0 24 24"),h.setAttribute("fill","none"),h.style.marginLeft="-6px",e.append(h,a,c,t),document.body.appendChild(e)}i?(a.innerText="Preview backend disconnected.",h.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(h.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,a.innerText="Preview backend running in this workspace."),a.setAttribute("id",o)}"loading"===document.readyState?window.addEventListener("DOMContentLoaded",s):s()}/**
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
 */function S(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function R(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(S())}function A(){return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent}function C(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function O(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function P(){let e=S();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function k(){try{return"object"==typeof indexedDB}catch(e){return!1}}function N(){return new Promise((e,t)=>{try{let r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{t(i.error?.message||"")}}catch(e){t(e)}})}class L extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,L.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,D.prototype.create)}}class D{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},n=`${this.service}/${e}`,i=this.errors[e],s=i?i.replace(U,(e,t)=>{let n=r[t];return null!=n?String(n):`<${t}?>`}):"Error",o=`${this.serviceName}: ${s} (${n}).`;return new L(n,o,r)}}let U=/\{\$([^}]+)}/g;function M(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function x(e){return null!==e&&"object"==typeof e}/**
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
 */function B(e){let t=[];for(let[r,n]of Object.entries(e))Array.isArray(n)?n.forEach(e=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function F(e){let t={};return e.replace(/^\?/,"").split("&").forEach(e=>{if(e){let[r,n]=e.split("=");t[decodeURIComponent(r)]=decodeURIComponent(n)}}),t}function j(e){let t=e.indexOf("?");if(!t)return"";let r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}function V(e,t){let r=new H(e,t);return r.subscribe.bind(r)}class H{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let n;if(void 0===e&&void 0===t&&void 0===r)throw Error("Missing Observer.");void 0===(n=!function(e,t){if("object"!=typeof e||null===e)return!1;for(let r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:r}:e).next&&(n.next=z),void 0===n.error&&(n.error=z),void 0===n.complete&&(n.complete=z);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}}),this.observers.push(n),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function z(){}/**
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
 */function $(e){return e&&e._delegate?e._delegate:e}},1118:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(3414)}])},4623:function(e,t,r){"use strict";r.d(t,{H:function(){return c},a:function(){return u}});var n=r(5893),i=r(7294),s=r(2753),o=r(1643),a=r(8797);let l=(0,i.createContext)(null),c=e=>{let{children:t}=e,[r,c]=(0,i.useState)(null),[u,h]=(0,i.useState)(null),[d,f]=(0,i.useState)(!0),[p,m]=(0,i.useState)(""),g=async()=>{var e;let t=await a.Z.post("/auth/bootstrap");h((null==t?void 0:null===(e=t.data)||void 0===e?void 0:e.data)||null)};(0,i.useEffect)(()=>{if(!o.I)return f(!1),m("Firebase Auth is not configured. Add NEXT_PUBLIC_FIREBASE_* values."),()=>{};let e=(0,s.Aj)(o.I,async e=>{if(c(e),m(""),e)try{await g()}catch(e){var t,r,n;m((null==e?void 0:null===(n=e.response)||void 0===n?void 0:null===(r=n.data)||void 0===r?void 0:null===(t=r.error)||void 0===t?void 0:t.message)||e.message||"Bootstrap failed"),h(null)}else h(null);f(!1)});return()=>e()},[]);let y=async(e,t)=>{if(!o.I)throw Error("Firebase Auth is not configured");m(""),await (0,s.e5)(o.I,e,t)},v=async()=>{o.I&&(m(""),await (0,s.w7)(o.I))},w=(0,i.useMemo)(()=>({user:r,profile:u,loading:d,error:p,login:y,logout:v,refreshProfile:g}),[r,u,d,p]);return(0,n.jsx)(l.Provider,{value:w,children:t})},u=()=>{let e=(0,i.useContext)(l);if(!e)throw Error("useAuth must be used inside AuthProvider");return e}},8797:function(e,t,r){"use strict";let n,i,s,o;r.d(t,{Z:function(){return tm}});var a,l,c,u,h={};function d(e,t){return function(){return e.apply(t,arguments)}}r.r(h),r.d(h,{hasBrowserEnv:function(){return eg},hasStandardBrowserEnv:function(){return ev},hasStandardBrowserWebWorkerEnv:function(){return ew},navigator:function(){return ey},origin:function(){return eb}});var f=r(7061);let{toString:p}=Object.prototype,{getPrototypeOf:m}=Object,{iterator:g,toStringTag:y}=Symbol,v=(n=Object.create(null),e=>{let t=p.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())}),w=e=>(e=e.toLowerCase(),t=>v(t)===e),b=e=>t=>typeof t===e,{isArray:_}=Array,E=b("undefined");function I(e){return null!==e&&!E(e)&&null!==e.constructor&&!E(e.constructor)&&R(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}let T=w("ArrayBuffer"),S=b("string"),R=b("function"),A=b("number"),C=e=>null!==e&&"object"==typeof e,O=e=>{if("object"!==v(e))return!1;let t=m(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(y in e)&&!(g in e)},P=w("Date"),k=w("File"),N=w("Blob"),L=w("FileList"),D=w("URLSearchParams"),[U,M,x,B]=["ReadableStream","Request","Response","Headers"].map(w);function F(e,t,{allOwnKeys:r=!1}={}){let n,i;if(null!=e){if("object"!=typeof e&&(e=[e]),_(e))for(n=0,i=e.length;n<i;n++)t.call(null,e[n],n,e);else{let i;if(I(e))return;let s=r?Object.getOwnPropertyNames(e):Object.keys(e),o=s.length;for(n=0;n<o;n++)i=s[n],t.call(null,e[i],i,e)}}}function j(e,t){let r;if(I(e))return null;t=t.toLowerCase();let n=Object.keys(e),i=n.length;for(;i-- >0;)if(t===(r=n[i]).toLowerCase())return r;return null}let V="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,H=e=>!E(e)&&e!==V,z=(i="undefined"!=typeof Uint8Array&&m(Uint8Array),e=>i&&e instanceof i),$=w("HTMLFormElement"),W=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),q=w("RegExp"),K=(e,t)=>{let r=Object.getOwnPropertyDescriptors(e),n={};F(r,(r,i)=>{let s;!1!==(s=t(r,i,e))&&(n[i]=s||r)}),Object.defineProperties(e,n)},J=w("AsyncFunction"),G=(a="function"==typeof setImmediate,l=R(V.postMessage),a?setImmediate:l?(c=`axios@${Math.random()}`,u=[],V.addEventListener("message",({source:e,data:t})=>{e===V&&t===c&&u.length&&u.shift()()},!1),e=>{u.push(e),V.postMessage(c,"*")}):e=>setTimeout(e)),X="undefined"!=typeof queueMicrotask?queueMicrotask.bind(V):void 0!==f&&f.nextTick||G;var Y={isArray:_,isArrayBuffer:T,isBuffer:I,isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||R(e.append)&&("formdata"===(t=v(e))||"object"===t&&R(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&T(e.buffer)},isString:S,isNumber:A,isBoolean:e=>!0===e||!1===e,isObject:C,isPlainObject:O,isEmptyObject:e=>{if(!C(e)||I(e))return!1;try{return 0===Object.keys(e).length&&Object.getPrototypeOf(e)===Object.prototype}catch(e){return!1}},isReadableStream:U,isRequest:M,isResponse:x,isHeaders:B,isUndefined:E,isDate:P,isFile:k,isBlob:N,isRegExp:q,isFunction:R,isStream:e=>C(e)&&R(e.pipe),isURLSearchParams:D,isTypedArray:z,isFileList:L,forEach:F,merge:function e(){let{caseless:t,skipUndefined:r}=H(this)&&this||{},n={},i=(i,s)=>{if("__proto__"===s||"constructor"===s||"prototype"===s)return;let o=t&&j(n,s)||s;O(n[o])&&O(i)?n[o]=e(n[o],i):O(i)?n[o]=e({},i):_(i)?n[o]=i.slice():r&&E(i)||(n[o]=i)};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&F(arguments[e],i);return n},extend:(e,t,r,{allOwnKeys:n}={})=>(F(t,(t,n)=>{r&&R(t)?Object.defineProperty(e,n,{value:d(t,r),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,n,{value:t,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:n}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),Object.defineProperty(e.prototype,"constructor",{value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},toFlatObject:(e,t,r,n)=>{let i,s,o;let a={};if(t=t||{},null==e)return t;do{for(s=(i=Object.getOwnPropertyNames(e)).length;s-- >0;)o=i[s],(!n||n(o,e,t))&&!a[o]&&(t[o]=e[o],a[o]=!0);e=!1!==r&&m(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},kindOf:v,kindOfTest:w,endsWith:(e,t,r)=>{e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;let n=e.indexOf(t,r);return -1!==n&&n===r},toArray:e=>{if(!e)return null;if(_(e))return e;let t=e.length;if(!A(t))return null;let r=Array(t);for(;t-- >0;)r[t]=e[t];return r},forEachEntry:(e,t)=>{let r;let n=(e&&e[g]).call(e);for(;(r=n.next())&&!r.done;){let n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let r;let n=[];for(;null!==(r=e.exec(t));)n.push(r);return n},isHTMLForm:$,hasOwnProperty:W,hasOwnProp:W,reduceDescriptors:K,freezeMethods:e=>{K(e,(t,r)=>{if(R(e)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;if(R(e[r])){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},toObjectSet:(e,t)=>{let r={};return(e=>{e.forEach(e=>{r[e]=!0})})(_(e)?e:String(e).split(t)),r},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,r){return t.toUpperCase()+r}),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:j,global:V,isContextDefined:H,isSpecCompliantForm:function(e){return!!(e&&R(e.append)&&"FormData"===e[y]&&e[g])},toJSONObject:e=>{let t=Array(10),r=(e,n)=>{if(C(e)){if(t.indexOf(e)>=0)return;if(I(e))return e;if(!("toJSON"in e)){t[n]=e;let i=_(e)?[]:{};return F(e,(e,t)=>{let s=r(e,n+1);E(s)||(i[t]=s)}),t[n]=void 0,i}}return e};return r(e,0)},isAsyncFn:J,isThenable:e=>e&&(C(e)||R(e))&&R(e.then)&&R(e.catch),setImmediate:G,asap:X,isIterable:e=>null!=e&&R(e[g])};class Z extends Error{static from(e,t,r,n,i,s){let o=new Z(e.message,t||e.code,r,n,i);return o.cause=e,o.name=e.name,s&&Object.assign(o,s),o}constructor(e,t,r,n,i){super(e),this.name="AxiosError",this.isAxiosError=!0,t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),i&&(this.response=i,this.status=i.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Y.toJSONObject(this.config),code:this.code,status:this.status}}}Z.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE",Z.ERR_BAD_OPTION="ERR_BAD_OPTION",Z.ECONNABORTED="ECONNABORTED",Z.ETIMEDOUT="ETIMEDOUT",Z.ERR_NETWORK="ERR_NETWORK",Z.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS",Z.ERR_DEPRECATED="ERR_DEPRECATED",Z.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE",Z.ERR_BAD_REQUEST="ERR_BAD_REQUEST",Z.ERR_CANCELED="ERR_CANCELED",Z.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT",Z.ERR_INVALID_URL="ERR_INVALID_URL";var Q=Z,ee=r(816).lW;function et(e){return Y.isPlainObject(e)||Y.isArray(e)}function er(e){return Y.endsWith(e,"[]")?e.slice(0,-2):e}function en(e,t,r){return e?e.concat(t).map(function(e,t){return e=er(e),!r&&t?"["+e+"]":e}).join(r?".":""):t}let ei=Y.toFlatObject(Y,{},null,function(e){return/^is[A-Z]/.test(e)});var es=function(e,t,r){if(!Y.isObject(e))throw TypeError("target must be an object");t=t||new FormData;let n=(r=Y.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){return!Y.isUndefined(t[e])})).metaTokens,i=r.visitor||c,s=r.dots,o=r.indexes,a=(r.Blob||"undefined"!=typeof Blob&&Blob)&&Y.isSpecCompliantForm(t);if(!Y.isFunction(i))throw TypeError("visitor must be a function");function l(e){if(null===e)return"";if(Y.isDate(e))return e.toISOString();if(Y.isBoolean(e))return e.toString();if(!a&&Y.isBlob(e))throw new Q("Blob is not supported. Use a Buffer instead.");return Y.isArrayBuffer(e)||Y.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):ee.from(e):e}function c(e,r,i){let a=e;if(e&&!i&&"object"==typeof e){if(Y.endsWith(r,"{}"))r=n?r:r.slice(0,-2),e=JSON.stringify(e);else{var c;if(Y.isArray(e)&&(c=e,Y.isArray(c)&&!c.some(et))||(Y.isFileList(e)||Y.endsWith(r,"[]"))&&(a=Y.toArray(e)))return r=er(r),a.forEach(function(e,n){Y.isUndefined(e)||null===e||t.append(!0===o?en([r],n,s):null===o?r:r+"[]",l(e))}),!1}}return!!et(e)||(t.append(en(i,r,s),l(e)),!1)}let u=[],h=Object.assign(ei,{defaultVisitor:c,convertValue:l,isVisitable:et});if(!Y.isObject(e))throw TypeError("data must be an object");return!function e(r,n){if(!Y.isUndefined(r)){if(-1!==u.indexOf(r))throw Error("Circular reference detected in "+n.join("."));u.push(r),Y.forEach(r,function(r,s){!0===(!(Y.isUndefined(r)||null===r)&&i.call(t,r,Y.isString(s)?s.trim():s,n,h))&&e(r,n?n.concat(s):[s])}),u.pop()}}(e),t};function eo(e){let t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(e){return t[e]})}function ea(e,t){this._pairs=[],e&&es(e,this,t)}let el=ea.prototype;function ec(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function eu(e,t,r){let n;if(!t)return e;let i=r&&r.encode||ec,s=Y.isFunction(r)?{serialize:r}:r,o=s&&s.serialize;if(n=o?o(t,s):Y.isURLSearchParams(t)?t.toString():new ea(t,s).toString(i)){let t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e}el.append=function(e,t){this._pairs.push([e,t])},el.toString=function(e){let t=e?function(t){return e.call(this,t,eo)}:eo;return this._pairs.map(function(e){return t(e[0])+"="+t(e[1])},"").join("&")};class eh{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){Y.forEach(this.handlers,function(t){null!==t&&e(t)})}}var ed={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},ef="undefined"!=typeof URLSearchParams?URLSearchParams:ea,ep="undefined"!=typeof FormData?FormData:null,em="undefined"!=typeof Blob?Blob:null;let eg="undefined"!=typeof window&&"undefined"!=typeof document,ey="object"==typeof navigator&&navigator||void 0,ev=eg&&(!ey||0>["ReactNative","NativeScript","NS"].indexOf(ey.product)),ew="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,eb=eg&&window.location.href||"http://localhost";var e_={...h,isBrowser:!0,classes:{URLSearchParams:ef,FormData:ep,Blob:em},protocols:["http","https","file","blob","url","data"]},eE=function(e){if(Y.isFormData(e)&&Y.isFunction(e.entries)){let t={};return Y.forEachEntry(e,(e,r)=>{!function e(t,r,n,i){let s=t[i++];if("__proto__"===s)return!0;let o=Number.isFinite(+s),a=i>=t.length;return(s=!s&&Y.isArray(n)?n.length:s,a)?Y.hasOwnProp(n,s)?n[s]=[n[s],r]:n[s]=r:(n[s]&&Y.isObject(n[s])||(n[s]=[]),e(t,r,n[s],i)&&Y.isArray(n[s])&&(n[s]=function(e){let t,r;let n={},i=Object.keys(e),s=i.length;for(t=0;t<s;t++)n[r=i[t]]=e[r];return n}(n[s]))),!o}(Y.matchAll(/\w+|\[(\w*)]/g,e).map(e=>"[]"===e[0]?"":e[1]||e[0]),r,t,0)}),t}return null};let eI={transitional:ed,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){let r;let n=t.getContentType()||"",i=n.indexOf("application/json")>-1,s=Y.isObject(e);if(s&&Y.isHTMLForm(e)&&(e=new FormData(e)),Y.isFormData(e))return i?JSON.stringify(eE(e)):e;if(Y.isArrayBuffer(e)||Y.isBuffer(e)||Y.isStream(e)||Y.isFile(e)||Y.isBlob(e)||Y.isReadableStream(e))return e;if(Y.isArrayBufferView(e))return e.buffer;if(Y.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();if(s){if(n.indexOf("application/x-www-form-urlencoded")>-1){var o,a;return(o=e,a=this.formSerializer,es(o,new e_.classes.URLSearchParams,{visitor:function(e,t,r,n){return e_.isNode&&Y.isBuffer(e)?(this.append(t,e.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)},...a})).toString()}if((r=Y.isFileList(e))||n.indexOf("multipart/form-data")>-1){let t=this.env&&this.env.FormData;return es(r?{"files[]":e}:e,t&&new t,this.formSerializer)}}return s||i?(t.setContentType("application/json",!1),function(e,t,r){if(Y.isString(e))try{return(0,JSON.parse)(e),Y.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){let t=this.transitional||eI.transitional,r=t&&t.forcedJSONParsing,n="json"===this.responseType;if(Y.isResponse(e)||Y.isReadableStream(e))return e;if(e&&Y.isString(e)&&(r&&!this.responseType||n)){let r=t&&t.silentJSONParsing;try{return JSON.parse(e,this.parseReviver)}catch(e){if(!r&&n){if("SyntaxError"===e.name)throw Q.from(e,Q.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:e_.classes.FormData,Blob:e_.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Y.forEach(["delete","get","head","post","put","patch"],e=>{eI.headers[e]={}});let eT=Y.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var eS=e=>{let t,r,n;let i={};return e&&e.split("\n").forEach(function(e){n=e.indexOf(":"),t=e.substring(0,n).trim().toLowerCase(),r=e.substring(n+1).trim(),!t||i[t]&&eT[t]||("set-cookie"===t?i[t]?i[t].push(r):i[t]=[r]:i[t]=i[t]?i[t]+", "+r:r)}),i};let eR=Symbol("internals");function eA(e){return e&&String(e).trim().toLowerCase()}function eC(e){return!1===e||null==e?e:Y.isArray(e)?e.map(eC):String(e)}let eO=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function eP(e,t,r,n,i){if(Y.isFunction(n))return n.call(this,t,r);if(i&&(t=r),Y.isString(t)){if(Y.isString(n))return -1!==t.indexOf(n);if(Y.isRegExp(n))return n.test(t)}}class ek{constructor(e){e&&this.set(e)}set(e,t,r){let n=this;function i(e,t,r){let i=eA(t);if(!i)throw Error("header name must be a non-empty string");let s=Y.findKey(n,i);s&&void 0!==n[s]&&!0!==r&&(void 0!==r||!1===n[s])||(n[s||t]=eC(e))}let s=(e,t)=>Y.forEach(e,(e,r)=>i(e,r,t));if(Y.isPlainObject(e)||e instanceof this.constructor)s(e,t);else if(Y.isString(e)&&(e=e.trim())&&!eO(e))s(eS(e),t);else if(Y.isObject(e)&&Y.isIterable(e)){let r={},n,i;for(let t of e){if(!Y.isArray(t))throw TypeError("Object iterator must return a key-value pair");r[i=t[0]]=(n=r[i])?Y.isArray(n)?[...n,t[1]]:[n,t[1]]:t[1]}s(r,t)}else null!=e&&i(t,e,r);return this}get(e,t){if(e=eA(e)){let r=Y.findKey(this,e);if(r){let e=this[r];if(!t)return e;if(!0===t)return function(e){let t;let r=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;for(;t=n.exec(e);)r[t[1]]=t[2];return r}(e);if(Y.isFunction(t))return t.call(this,e,r);if(Y.isRegExp(t))return t.exec(e);throw TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=eA(e)){let r=Y.findKey(this,e);return!!(r&&void 0!==this[r]&&(!t||eP(this,this[r],r,t)))}return!1}delete(e,t){let r=this,n=!1;function i(e){if(e=eA(e)){let i=Y.findKey(r,e);i&&(!t||eP(r,r[i],i,t))&&(delete r[i],n=!0)}}return Y.isArray(e)?e.forEach(i):i(e),n}clear(e){let t=Object.keys(this),r=t.length,n=!1;for(;r--;){let i=t[r];(!e||eP(this,this[i],i,e,!0))&&(delete this[i],n=!0)}return n}normalize(e){let t=this,r={};return Y.forEach(this,(n,i)=>{let s=Y.findKey(r,i);if(s){t[s]=eC(n),delete t[i];return}let o=e?i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,r)=>t.toUpperCase()+r):String(i).trim();o!==i&&delete t[i],t[o]=eC(n),r[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){let t=Object.create(null);return Y.forEach(this,(r,n)=>{null!=r&&!1!==r&&(t[n]=e&&Y.isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join("\n")}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){let r=new this(e);return t.forEach(e=>r.set(e)),r}static accessor(e){let t=(this[eR]=this[eR]={accessors:{}}).accessors,r=this.prototype;function n(e){let n=eA(e);t[n]||(!function(e,t){let r=Y.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(e,r,i){return this[n].call(this,t,e,r,i)},configurable:!0})})}(r,e),t[n]=!0)}return Y.isArray(e)?e.forEach(n):n(e),this}}function eN(e,t){let r=this||eI,n=t||r,i=ek.from(n.headers),s=n.data;return Y.forEach(e,function(e){s=e.call(r,s,i.normalize(),t?t.status:void 0)}),i.normalize(),s}function eL(e){return!!(e&&e.__CANCEL__)}ek.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),Y.reduceDescriptors(ek.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[r]=e}}}),Y.freezeMethods(ek);class eD extends Q{constructor(e,t,r){super(null==e?"canceled":e,Q.ERR_CANCELED,t,r),this.name="CanceledError",this.__CANCEL__=!0}}function eU(e,t,r){let n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new Q("Request failed with status code "+r.status,[Q.ERR_BAD_REQUEST,Q.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}var eM=function(e,t){let r;let n=Array(e=e||10),i=Array(e),s=0,o=0;return t=void 0!==t?t:1e3,function(a){let l=Date.now(),c=i[o];r||(r=l),n[s]=a,i[s]=l;let u=o,h=0;for(;u!==s;)h+=n[u++],u%=e;if((s=(s+1)%e)===o&&(o=(o+1)%e),l-r<t)return;let d=c&&l-c;return d?Math.round(1e3*h/d):void 0}},ex=function(e,t){let r,n,i=0,s=1e3/t,o=(t,s=Date.now())=>{i=s,r=null,n&&(clearTimeout(n),n=null),e(...t)};return[(...e)=>{let t=Date.now(),a=t-i;a>=s?o(e,t):(r=e,n||(n=setTimeout(()=>{n=null,o(r)},s-a)))},()=>r&&o(r)]};let eB=(e,t,r=3)=>{let n=0,i=eM(50,250);return ex(r=>{let s=r.loaded,o=r.lengthComputable?r.total:void 0,a=s-n,l=i(a);n=s,e({loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&s<=o?(o-s)/l:void 0,event:r,lengthComputable:null!=o,[t?"download":"upload"]:!0})},r)},eF=(e,t)=>{let r=null!=e;return[n=>t[0]({lengthComputable:r,total:e,loaded:n}),t[1]]},ej=e=>(...t)=>Y.asap(()=>e(...t));var eV=e_.hasStandardBrowserEnv?(s=new URL(e_.origin),o=e_.navigator&&/(msie|trident)/i.test(e_.navigator.userAgent),e=>(e=new URL(e,e_.origin),s.protocol===e.protocol&&s.host===e.host&&(o||s.port===e.port))):()=>!0,eH=e_.hasStandardBrowserEnv?{write(e,t,r,n,i,s,o){if("undefined"==typeof document)return;let a=[`${e}=${encodeURIComponent(t)}`];Y.isNumber(r)&&a.push(`expires=${new Date(r).toUTCString()}`),Y.isString(n)&&a.push(`path=${n}`),Y.isString(i)&&a.push(`domain=${i}`),!0===s&&a.push("secure"),Y.isString(o)&&a.push(`SameSite=${o}`),document.cookie=a.join("; ")},read(e){if("undefined"==typeof document)return null;let t=document.cookie.match(RegExp("(?:^|; )"+e+"=([^;]*)"));return t?decodeURIComponent(t[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read:()=>null,remove(){}};function ez(e,t,r){let n=!("string"==typeof t&&/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t));return e&&(n||!1==r)?t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e:t}let e$=e=>e instanceof ek?{...e}:e;function eW(e,t){t=t||{};let r={};function n(e,t,r,n){return Y.isPlainObject(e)&&Y.isPlainObject(t)?Y.merge.call({caseless:n},e,t):Y.isPlainObject(t)?Y.merge({},t):Y.isArray(t)?t.slice():t}function i(e,t,r,i){return Y.isUndefined(t)?Y.isUndefined(e)?void 0:n(void 0,e,r,i):n(e,t,r,i)}function s(e,t){if(!Y.isUndefined(t))return n(void 0,t)}function o(e,t){return Y.isUndefined(t)?Y.isUndefined(e)?void 0:n(void 0,e):n(void 0,t)}function a(r,i,s){return s in t?n(r,i):s in e?n(void 0,r):void 0}let l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(e,t,r)=>i(e$(e),e$(t),r,!0)};return Y.forEach(Object.keys({...e,...t}),function(n){if("__proto__"===n||"constructor"===n||"prototype"===n)return;let s=Y.hasOwnProp(l,n)?l[n]:i,o=s(e[n],t[n],n);Y.isUndefined(o)&&s!==a||(r[n]=o)}),r}var eq=e=>{let t=eW({},e),{data:r,withXSRFToken:n,xsrfHeaderName:i,xsrfCookieName:s,headers:o,auth:a}=t;if(t.headers=o=ek.from(o),t.url=eu(ez(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):""))),Y.isFormData(r)){if(e_.hasStandardBrowserEnv||e_.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(Y.isFunction(r.getHeaders)){let e=r.getHeaders(),t=["content-type","content-length"];Object.entries(e).forEach(([e,r])=>{t.includes(e.toLowerCase())&&o.set(e,r)})}}if(e_.hasStandardBrowserEnv&&(n&&Y.isFunction(n)&&(n=n(t)),n||!1!==n&&eV(t.url))){let e=i&&s&&eH.read(s);e&&o.set(i,e)}return t},eK="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise(function(t,r){let n,i,s,o,a;let l=eq(e),c=l.data,u=ek.from(l.headers).normalize(),{responseType:h,onUploadProgress:d,onDownloadProgress:f}=l;function p(){o&&o(),a&&a(),l.cancelToken&&l.cancelToken.unsubscribe(n),l.signal&&l.signal.removeEventListener("abort",n)}let m=new XMLHttpRequest;function g(){if(!m)return;let n=ek.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders());eU(function(e){t(e),p()},function(e){r(e),p()},{data:h&&"text"!==h&&"json"!==h?m.response:m.responseText,status:m.status,statusText:m.statusText,headers:n,config:e,request:m}),m=null}m.open(l.method.toUpperCase(),l.url,!0),m.timeout=l.timeout,"onloadend"in m?m.onloadend=g:m.onreadystatechange=function(){m&&4===m.readyState&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))&&setTimeout(g)},m.onabort=function(){m&&(r(new Q("Request aborted",Q.ECONNABORTED,e,m)),m=null)},m.onerror=function(t){let n=new Q(t&&t.message?t.message:"Network Error",Q.ERR_NETWORK,e,m);n.event=t||null,r(n),m=null},m.ontimeout=function(){let t=l.timeout?"timeout of "+l.timeout+"ms exceeded":"timeout exceeded",n=l.transitional||ed;l.timeoutErrorMessage&&(t=l.timeoutErrorMessage),r(new Q(t,n.clarifyTimeoutError?Q.ETIMEDOUT:Q.ECONNABORTED,e,m)),m=null},void 0===c&&u.setContentType(null),"setRequestHeader"in m&&Y.forEach(u.toJSON(),function(e,t){m.setRequestHeader(t,e)}),Y.isUndefined(l.withCredentials)||(m.withCredentials=!!l.withCredentials),h&&"json"!==h&&(m.responseType=l.responseType),f&&([s,a]=eB(f,!0),m.addEventListener("progress",s)),d&&m.upload&&([i,o]=eB(d),m.upload.addEventListener("progress",i),m.upload.addEventListener("loadend",o)),(l.cancelToken||l.signal)&&(n=t=>{m&&(r(!t||t.type?new eD(null,e,m):t),m.abort(),m=null)},l.cancelToken&&l.cancelToken.subscribe(n),l.signal&&(l.signal.aborted?n():l.signal.addEventListener("abort",n)));let y=function(e){let t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(l.url);if(y&&-1===e_.protocols.indexOf(y)){r(new Q("Unsupported protocol "+y+":",Q.ERR_BAD_REQUEST,e));return}m.send(c||null)})},eJ=(e,t)=>{let{length:r}=e=e?e.filter(Boolean):[];if(t||r){let r,n=new AbortController,i=function(e){if(!r){r=!0,o();let t=e instanceof Error?e:this.reason;n.abort(t instanceof Q?t:new eD(t instanceof Error?t.message:t))}},s=t&&setTimeout(()=>{s=null,i(new Q(`timeout of ${t}ms exceeded`,Q.ETIMEDOUT))},t),o=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(e=>{e.unsubscribe?e.unsubscribe(i):e.removeEventListener("abort",i)}),e=null)};e.forEach(e=>e.addEventListener("abort",i));let{signal:a}=n;return a.unsubscribe=()=>Y.asap(o),a}};let eG=function*(e,t){let r,n=e.byteLength;if(!t||n<t){yield e;return}let i=0;for(;i<n;)r=i+t,yield e.slice(i,r),i=r},eX=async function*(e,t){for await(let r of eY(e))yield*eG(r,t)},eY=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}let t=e.getReader();try{for(;;){let{done:e,value:r}=await t.read();if(e)break;yield r}}finally{await t.cancel()}},eZ=(e,t,r,n)=>{let i;let s=eX(e,t),o=0,a=e=>{!i&&(i=!0,n&&n(e))};return new ReadableStream({async pull(e){try{let{done:t,value:n}=await s.next();if(t){a(),e.close();return}let i=n.byteLength;if(r){let e=o+=i;r(e)}e.enqueue(new Uint8Array(n))}catch(e){throw a(e),e}},cancel:e=>(a(e),s.return())},{highWaterMark:2})},{isFunction:eQ}=Y,e0=(({Request:e,Response:t})=>({Request:e,Response:t}))(Y.global),{ReadableStream:e1,TextEncoder:e2}=Y.global,e6=(e,...t)=>{try{return!!e(...t)}catch(e){return!1}},e3=e=>{let t;let{fetch:r,Request:n,Response:i}=e=Y.merge.call({skipUndefined:!0},e0,e),s=r?eQ(r):"function"==typeof fetch,o=eQ(n),a=eQ(i);if(!s)return!1;let l=s&&eQ(e1),c=s&&("function"==typeof e2?(t=new e2,e=>t.encode(e)):async e=>new Uint8Array(await new n(e).arrayBuffer())),u=o&&l&&e6(()=>{let e=!1,t=new n(e_.origin,{body:new e1,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),h=a&&l&&e6(()=>Y.isReadableStream(new i("").body)),d={stream:h&&(e=>e.body)};s&&["text","arrayBuffer","blob","formData","stream"].forEach(e=>{d[e]||(d[e]=(t,r)=>{let n=t&&t[e];if(n)return n.call(t);throw new Q(`Response type '${e}' is not supported`,Q.ERR_NOT_SUPPORT,r)})});let f=async e=>{if(null==e)return 0;if(Y.isBlob(e))return e.size;if(Y.isSpecCompliantForm(e)){let t=new n(e_.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return Y.isArrayBufferView(e)||Y.isArrayBuffer(e)?e.byteLength:(Y.isURLSearchParams(e)&&(e+=""),Y.isString(e))?(await c(e)).byteLength:void 0},p=async(e,t)=>{let r=Y.toFiniteNumber(e.getContentLength());return null==r?f(t):r};return async e=>{let t,{url:s,method:a,data:l,signal:c,cancelToken:f,timeout:m,onDownloadProgress:g,onUploadProgress:y,responseType:v,headers:w,withCredentials:b="same-origin",fetchOptions:_}=eq(e),E=r||fetch;v=v?(v+"").toLowerCase():"text";let I=eJ([c,f&&f.toAbortSignal()],m),T=null,S=I&&I.unsubscribe&&(()=>{I.unsubscribe()});try{if(y&&u&&"get"!==a&&"head"!==a&&0!==(t=await p(w,l))){let e,r=new n(s,{method:"POST",body:l,duplex:"half"});if(Y.isFormData(l)&&(e=r.headers.get("content-type"))&&w.setContentType(e),r.body){let[e,n]=eF(t,eB(ej(y)));l=eZ(r.body,65536,e,n)}}Y.isString(b)||(b=b?"include":"omit");let r=o&&"credentials"in n.prototype,c={..._,signal:I,method:a.toUpperCase(),headers:w.normalize().toJSON(),body:l,duplex:"half",credentials:r?b:void 0};T=o&&new n(s,c);let f=await (o?E(T,_):E(s,c)),m=h&&("stream"===v||"response"===v);if(h&&(g||m&&S)){let e={};["status","statusText","headers"].forEach(t=>{e[t]=f[t]});let t=Y.toFiniteNumber(f.headers.get("content-length")),[r,n]=g&&eF(t,eB(ej(g),!0))||[];f=new i(eZ(f.body,65536,r,()=>{n&&n(),S&&S()}),e)}v=v||"text";let R=await d[Y.findKey(d,v)||"text"](f,e);return!m&&S&&S(),await new Promise((t,r)=>{eU(t,r,{data:R,headers:ek.from(f.headers),status:f.status,statusText:f.statusText,config:e,request:T})})}catch(t){if(S&&S(),t&&"TypeError"===t.name&&/Load failed|fetch/i.test(t.message))throw Object.assign(new Q("Network Error",Q.ERR_NETWORK,e,T,t&&t.response),{cause:t.cause||t});throw Q.from(t,t&&t.code,e,T,t&&t.response)}}},e4=new Map,e5=e=>{let t=e&&e.env||{},{fetch:r,Request:n,Response:i}=t,s=[n,i,r],o=s.length,a,l,c=e4;for(;o--;)a=s[o],void 0===(l=c.get(a))&&c.set(a,l=o?new Map:e3(t)),c=l;return l};e5();let e8={http:null,xhr:eK,fetch:{get:e5}};Y.forEach(e8,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}});let e7=e=>`- ${e}`,e9=e=>Y.isFunction(e)||null===e||!1===e;var te=function(e,t){let r,n;let{length:i}=e=Y.isArray(e)?e:[e],s={};for(let o=0;o<i;o++){let i;if(n=r=e[o],!e9(r)&&void 0===(n=e8[(i=String(r)).toLowerCase()]))throw new Q(`Unknown adapter '${i}'`);if(n&&(Y.isFunction(n)||(n=n.get(t))))break;s[i||"#"+o]=n}if(!n){let e=Object.entries(s).map(([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build"));throw new Q("There is no suitable adapter to dispatch the request "+(i?e.length>1?"since :\n"+e.map(e7).join("\n"):" "+e7(e[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return n};function tt(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new eD(null,e)}function tr(e){return tt(e),e.headers=ek.from(e.headers),e.data=eN.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),te(e.adapter||eI.adapter,e)(e).then(function(t){return tt(e),t.data=eN.call(e,e.transformResponse,t),t.headers=ek.from(t.headers),t},function(t){return!eL(t)&&(tt(e),t&&t.response&&(t.response.data=eN.call(e,e.transformResponse,t.response),t.response.headers=ek.from(t.response.headers))),Promise.reject(t)})}let tn="1.13.5",ti={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ti[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});let ts={};ti.transitional=function(e,t,r){function n(e,t){return"[Axios v"+tn+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return(r,i,s)=>{if(!1===e)throw new Q(n(i," has been removed"+(t?" in "+t:"")),Q.ERR_DEPRECATED);return t&&!ts[i]&&(ts[i]=!0,console.warn(n(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,i,s)}},ti.spelling=function(e){return(t,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};var to={assertOptions:function(e,t,r){if("object"!=typeof e)throw new Q("options must be an object",Q.ERR_BAD_OPTION_VALUE);let n=Object.keys(e),i=n.length;for(;i-- >0;){let s=n[i],o=t[s];if(o){let t=e[s],r=void 0===t||o(t,s,e);if(!0!==r)throw new Q("option "+s+" must be "+r,Q.ERR_BAD_OPTION_VALUE);continue}if(!0!==r)throw new Q("Unknown option "+s,Q.ERR_BAD_OPTION)}},validators:ti};let ta=to.validators;class tl{constructor(e){this.defaults=e||{},this.interceptors={request:new eh,response:new eh}}async request(e,t){try{return await this._request(e,t)}catch(e){if(e instanceof Error){let t={};Error.captureStackTrace?Error.captureStackTrace(t):t=Error();let r=t.stack?t.stack.replace(/^.+\n/,""):"";try{e.stack?r&&!String(e.stack).endsWith(r.replace(/^.+\n.+\n/,""))&&(e.stack+="\n"+r):e.stack=r}catch(e){}}throw e}}_request(e,t){let r,n;"string"==typeof e?(t=t||{}).url=e:t=e||{};let{transitional:i,paramsSerializer:s,headers:o}=t=eW(this.defaults,t);void 0!==i&&to.assertOptions(i,{silentJSONParsing:ta.transitional(ta.boolean),forcedJSONParsing:ta.transitional(ta.boolean),clarifyTimeoutError:ta.transitional(ta.boolean),legacyInterceptorReqResOrdering:ta.transitional(ta.boolean)},!1),null!=s&&(Y.isFunction(s)?t.paramsSerializer={serialize:s}:to.assertOptions(s,{encode:ta.function,serialize:ta.function},!0)),void 0!==t.allowAbsoluteUrls||(void 0!==this.defaults.allowAbsoluteUrls?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),to.assertOptions(t,{baseUrl:ta.spelling("baseURL"),withXsrfToken:ta.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let a=o&&Y.merge(o.common,o[t.method]);o&&Y.forEach(["delete","get","head","post","put","patch","common"],e=>{delete o[e]}),t.headers=ek.concat(a,o);let l=[],c=!0;this.interceptors.request.forEach(function(e){if("function"==typeof e.runWhen&&!1===e.runWhen(t))return;c=c&&e.synchronous;let r=t.transitional||ed;r&&r.legacyInterceptorReqResOrdering?l.unshift(e.fulfilled,e.rejected):l.push(e.fulfilled,e.rejected)});let u=[];this.interceptors.response.forEach(function(e){u.push(e.fulfilled,e.rejected)});let h=0;if(!c){let e=[tr.bind(this),void 0];for(e.unshift(...l),e.push(...u),n=e.length,r=Promise.resolve(t);h<n;)r=r.then(e[h++],e[h++]);return r}n=l.length;let d=t;for(;h<n;){let e=l[h++],t=l[h++];try{d=e(d)}catch(e){t.call(this,e);break}}try{r=tr.call(this,d)}catch(e){return Promise.reject(e)}for(h=0,n=u.length;h<n;)r=r.then(u[h++],u[h++]);return r}getUri(e){return eu(ez((e=eW(this.defaults,e)).baseURL,e.url,e.allowAbsoluteUrls),e.params,e.paramsSerializer)}}Y.forEach(["delete","get","head","options"],function(e){tl.prototype[e]=function(t,r){return this.request(eW(r||{},{method:e,url:t,data:(r||{}).data}))}}),Y.forEach(["post","put","patch"],function(e){function t(t){return function(r,n,i){return this.request(eW(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}tl.prototype[e]=t(),tl.prototype[e+"Form"]=t(!0)});class tc{constructor(e){let t;if("function"!=typeof e)throw TypeError("executor must be a function.");this.promise=new Promise(function(e){t=e});let r=this;this.promise.then(e=>{if(!r._listeners)return;let t=r._listeners.length;for(;t-- >0;)r._listeners[t](e);r._listeners=null}),this.promise.then=e=>{let t;let n=new Promise(e=>{r.subscribe(e),t=e}).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e(function(e,n,i){r.reason||(r.reason=new eD(e,n,i),t(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;let t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){let e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new tc(function(t){e=t}),cancel:e}}}let tu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(tu).forEach(([e,t])=>{tu[t]=e});let th=function e(t){let r=new tl(t),n=d(tl.prototype.request,r);return Y.extend(n,tl.prototype,r,{allOwnKeys:!0}),Y.extend(n,r,null,{allOwnKeys:!0}),n.create=function(r){return e(eW(t,r))},n}(eI);th.Axios=tl,th.CanceledError=eD,th.CancelToken=tc,th.isCancel=eL,th.VERSION=tn,th.toFormData=es,th.AxiosError=Q,th.Cancel=th.CanceledError,th.all=function(e){return Promise.all(e)},th.spread=function(e){return function(t){return e.apply(null,t)}},th.isAxiosError=function(e){return Y.isObject(e)&&!0===e.isAxiosError},th.mergeConfig=eW,th.AxiosHeaders=ek,th.formToJSON=e=>eE(Y.isHTMLForm(e)?new FormData(e):e),th.getAdapter=te,th.HttpStatusCode=tu,th.default=th;var td=r(1643),tf=r(7061);let tp=th.create({baseURL:tf.env.NEXT_PUBLIC_API_BASE_URL||"http://localhost:4000/api/v1",timeout:15e3});tp.interceptors.request.use(async e=>{let t=td.I.currentUser;if(t){let r=await t.getIdToken();e.headers.Authorization="Bearer ".concat(r)}return e});var tm=tp},1643:function(e,t,r){"use strict";r.d(t,{I:function(){return l}});var n=r(6771);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(0,n.KN)("firebase","12.9.0","app");var i=r(2753),s=r(7061);let o={apiKey:s.env.NEXT_PUBLIC_FIREBASE_API_KEY,authDomain:s.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,projectId:s.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,storageBucket:s.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,messagingSenderId:s.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,appId:s.env.NEXT_PUBLIC_FIREBASE_APP_ID,measurementId:s.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID},a=o.apiKey&&o.projectId?(0,n.C6)().length?(0,n.Mq)():(0,n.ZF)(o):null,l=a?(0,i.v0)(a):null},3414:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=r(5893),i=r(4623);function s(e){let{Component:t,pageProps:r}=e;return(0,n.jsx)(i.H,{children:(0,n.jsx)(t,{...r})})}},4782:function(e,t){"use strict";t.byteLength=function(e){var t=l(e),r=t[0],n=t[1];return(r+n)*3/4-n},t.toByteArray=function(e){var t,r,s=l(e),o=s[0],a=s[1],c=new i((o+a)*3/4-a),u=0,h=a>0?o-4:o;for(r=0;r<h;r+=4)t=n[e.charCodeAt(r)]<<18|n[e.charCodeAt(r+1)]<<12|n[e.charCodeAt(r+2)]<<6|n[e.charCodeAt(r+3)],c[u++]=t>>16&255,c[u++]=t>>8&255,c[u++]=255&t;return 2===a&&(t=n[e.charCodeAt(r)]<<2|n[e.charCodeAt(r+1)]>>4,c[u++]=255&t),1===a&&(t=n[e.charCodeAt(r)]<<10|n[e.charCodeAt(r+1)]<<4|n[e.charCodeAt(r+2)]>>2,c[u++]=t>>8&255,c[u++]=255&t),c},t.fromByteArray=function(e){for(var t,n=e.length,i=n%3,s=[],o=0,a=n-i;o<a;o+=16383)s.push(function(e,t,n){for(var i,s=[],o=t;o<n;o+=3)s.push(r[(i=(e[o]<<16&16711680)+(e[o+1]<<8&65280)+(255&e[o+2]))>>18&63]+r[i>>12&63]+r[i>>6&63]+r[63&i]);return s.join("")}(e,o,o+16383>a?a:o+16383));return 1===i?s.push(r[(t=e[n-1])>>2]+r[t<<4&63]+"=="):2===i&&s.push(r[(t=(e[n-2]<<8)+e[n-1])>>10]+r[t>>4&63]+r[t<<2&63]+"="),s.join("")};for(var r=[],n=[],i="undefined"!=typeof Uint8Array?Uint8Array:Array,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o=0,a=s.length;o<a;++o)r[o]=s[o],n[s.charCodeAt(o)]=o;function l(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");-1===r&&(r=t);var n=r===t?0:4-r%4;return[r,n]}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},816:function(e,t,r){"use strict";/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var n=r(4782),i=r(8898),s="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function o(e){if(e>2147483647)throw RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,a.prototype),t}function a(e,t,r){if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return u(e)}return l(e,t,r)}function l(e,t,r){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!a.isEncoding(t))throw TypeError("Unknown encoding: "+t);var r=0|p(e,t),n=o(r),i=n.write(e,t);return i!==r&&(n=n.slice(0,i)),n}(e,t);if(ArrayBuffer.isView(e))return function(e){if(O(e,Uint8Array)){var t=new Uint8Array(e);return d(t.buffer,t.byteOffset,t.byteLength)}return h(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(O(e,ArrayBuffer)||e&&O(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(O(e,SharedArrayBuffer)||e&&O(e.buffer,SharedArrayBuffer)))return d(e,t,r);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');var n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return a.from(n,t,r);var i=function(e){if(a.isBuffer(e)){var t,r=0|f(e.length),n=o(r);return 0===n.length||e.copy(n,0,0,r),n}return void 0!==e.length?"number"!=typeof e.length||(t=e.length)!=t?o(0):h(e):"Buffer"===e.type&&Array.isArray(e.data)?h(e.data):void 0}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return a.from(e[Symbol.toPrimitive]("string"),t,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function c(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function u(e){return c(e),o(e<0?0:0|f(e))}function h(e){for(var t=e.length<0?0:0|f(e.length),r=o(t),n=0;n<t;n+=1)r[n]=255&e[n];return r}function d(e,t,r){var n;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),a.prototype),n}function f(e){if(e>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function p(e,t){if(a.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||O(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;for(var i=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return R(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return A(e).length;default:if(i)return n?-1:R(e).length;t=(""+t).toLowerCase(),i=!0}}function m(e,t,r){var i,s,o=!1;if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||(r>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);for(var i="",s=t;s<r;++s)i+=P[e[s]];return i}(this,t,r);case"utf8":case"utf-8":return w(this,t,r);case"ascii":return function(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(127&e[i]);return n}(this,t,r);case"latin1":case"binary":return function(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}(this,t,r);case"base64":return i=t,s=r,0===i&&s===this.length?n.fromByteArray(this):n.fromByteArray(this.slice(i,s));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,r){for(var n=e.slice(t,r),i="",s=0;s<n.length-1;s+=2)i+=String.fromCharCode(n[s]+256*n[s+1]);return i}(this,t,r);default:if(o)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),o=!0}}function g(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function y(e,t,r,n,i){var s;if(0===e.length)return -1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(s=r=+r)!=s&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return -1;r=e.length-1}else if(r<0){if(!i)return -1;r=0}if("string"==typeof t&&(t=a.from(t,n)),a.isBuffer(t))return 0===t.length?-1:v(e,t,r,n,i);if("number"==typeof t)return(t&=255,"function"==typeof Uint8Array.prototype.indexOf)?i?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):v(e,[t],r,n,i);throw TypeError("val must be string, number or Buffer")}function v(e,t,r,n,i){var s,o=1,a=e.length,l=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return -1;o=2,a/=2,l/=2,r/=2}function c(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(i){var u=-1;for(s=r;s<a;s++)if(c(e,s)===c(t,-1===u?0:s-u)){if(-1===u&&(u=s),s-u+1===l)return u*o}else -1!==u&&(s-=s-u),u=-1}else for(r+l>a&&(r=a-l),s=r;s>=0;s--){for(var h=!0,d=0;d<l;d++)if(c(e,s+d)!==c(t,d)){h=!1;break}if(h)return s}return -1}function w(e,t,r){r=Math.min(e.length,r);for(var n=[],i=t;i<r;){var s,o,a,l,c=e[i],u=null,h=c>239?4:c>223?3:c>191?2:1;if(i+h<=r)switch(h){case 1:c<128&&(u=c);break;case 2:(192&(s=e[i+1]))==128&&(l=(31&c)<<6|63&s)>127&&(u=l);break;case 3:s=e[i+1],o=e[i+2],(192&s)==128&&(192&o)==128&&(l=(15&c)<<12|(63&s)<<6|63&o)>2047&&(l<55296||l>57343)&&(u=l);break;case 4:s=e[i+1],o=e[i+2],a=e[i+3],(192&s)==128&&(192&o)==128&&(192&a)==128&&(l=(15&c)<<18|(63&s)<<12|(63&o)<<6|63&a)>65535&&l<1114112&&(u=l)}null===u?(u=65533,h=1):u>65535&&(u-=65536,n.push(u>>>10&1023|55296),u=56320|1023&u),n.push(u),i+=h}return function(e){var t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);for(var r="",n=0;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=4096));return r}(n)}function b(e,t,r){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>r)throw RangeError("Trying to access beyond buffer length")}function _(e,t,r,n,i,s){if(!a.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<s)throw RangeError('"value" argument is out of bounds');if(r+n>e.length)throw RangeError("Index out of range")}function E(e,t,r,n,i,s){if(r+n>e.length||r<0)throw RangeError("Index out of range")}function I(e,t,r,n,s){return t=+t,r>>>=0,s||E(e,t,r,4,34028234663852886e22,-34028234663852886e22),i.write(e,t,r,n,23,4),r+4}function T(e,t,r,n,s){return t=+t,r>>>=0,s||E(e,t,r,8,17976931348623157e292,-17976931348623157e292),i.write(e,t,r,n,52,8),r+8}t.lW=a,t.h2=50,a.TYPED_ARRAY_SUPPORT=function(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),a.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}}),a.poolSize=8192,a.from=function(e,t,r){return l(e,t,r)},Object.setPrototypeOf(a.prototype,Uint8Array.prototype),Object.setPrototypeOf(a,Uint8Array),a.alloc=function(e,t,r){return(c(e),e<=0)?o(e):void 0!==t?"string"==typeof r?o(e).fill(t,r):o(e).fill(t):o(e)},a.allocUnsafe=function(e){return u(e)},a.allocUnsafeSlow=function(e){return u(e)},a.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==a.prototype},a.compare=function(e,t){if(O(e,Uint8Array)&&(e=a.from(e,e.offset,e.byteLength)),O(t,Uint8Array)&&(t=a.from(t,t.offset,t.byteLength)),!a.isBuffer(e)||!a.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var r=e.length,n=t.length,i=0,s=Math.min(r,n);i<s;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:n<r?1:0},a.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(e,t){if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return a.alloc(0);if(void 0===t)for(r=0,t=0;r<e.length;++r)t+=e[r].length;var r,n=a.allocUnsafe(t),i=0;for(r=0;r<e.length;++r){var s=e[r];if(O(s,Uint8Array))i+s.length>n.length?a.from(s).copy(n,i):Uint8Array.prototype.set.call(n,s,i);else if(a.isBuffer(s))s.copy(n,i);else throw TypeError('"list" argument must be an Array of Buffers');i+=s.length}return n},a.byteLength=p,a.prototype._isBuffer=!0,a.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)g(this,t,t+1);return this},a.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)g(this,t,t+3),g(this,t+1,t+2);return this},a.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)g(this,t,t+7),g(this,t+1,t+6),g(this,t+2,t+5),g(this,t+3,t+4);return this},a.prototype.toString=function(){var e=this.length;return 0===e?"":0==arguments.length?w(this,0,e):m.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(e){if(!a.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===a.compare(this,e)},a.prototype.inspect=function(){var e="",r=t.h2;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},s&&(a.prototype[s]=a.prototype.inspect),a.prototype.compare=function(e,t,r,n,i){if(O(e,Uint8Array)&&(e=a.from(e,e.offset,e.byteLength)),!a.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),t<0||r>e.length||n<0||i>this.length)throw RangeError("out of range index");if(n>=i&&t>=r)return 0;if(n>=i)return -1;if(t>=r)return 1;if(t>>>=0,r>>>=0,n>>>=0,i>>>=0,this===e)return 0;for(var s=i-n,o=r-t,l=Math.min(s,o),c=this.slice(n,i),u=e.slice(t,r),h=0;h<l;++h)if(c[h]!==u[h]){s=c[h],o=u[h];break}return s<o?-1:o<s?1:0},a.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},a.prototype.indexOf=function(e,t,r){return y(this,e,t,r,!0)},a.prototype.lastIndexOf=function(e,t,r){return y(this,e,t,r,!1)},a.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var i,s,o,a,l,c,u,h,d=this.length-t;if((void 0===r||r>d)&&(r=d),e.length>0&&(r<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var f=!1;;)switch(n){case"hex":return function(e,t,r,n){r=Number(r)||0;var i=e.length-r;n?(n=Number(n))>i&&(n=i):n=i;var s=t.length;n>s/2&&(n=s/2);for(var o=0;o<n;++o){var a=parseInt(t.substr(2*o,2),16);if(a!=a)break;e[r+o]=a}return o}(this,e,t,r);case"utf8":case"utf-8":return i=t,s=r,C(R(e,this.length-i),this,i,s);case"ascii":case"latin1":case"binary":return o=t,a=r,C(function(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(e),this,o,a);case"base64":return l=t,c=r,C(A(e),this,l,c);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return u=t,h=r,C(function(e,t){for(var r,n,i=[],s=0;s<e.length&&!((t-=2)<0);++s)n=(r=e.charCodeAt(s))>>8,i.push(r%256),i.push(n);return i}(e,this.length-u),this,u,h);default:if(f)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),f=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},a.prototype.slice=function(e,t){var r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,a.prototype),n},a.prototype.readUintLE=a.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||b(e,t,this.length);for(var n=this[e],i=1,s=0;++s<t&&(i*=256);)n+=this[e+s]*i;return n},a.prototype.readUintBE=a.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||b(e,t,this.length);for(var n=this[e+--t],i=1;t>0&&(i*=256);)n+=this[e+--t]*i;return n},a.prototype.readUint8=a.prototype.readUInt8=function(e,t){return e>>>=0,t||b(e,1,this.length),this[e]},a.prototype.readUint16LE=a.prototype.readUInt16LE=function(e,t){return e>>>=0,t||b(e,2,this.length),this[e]|this[e+1]<<8},a.prototype.readUint16BE=a.prototype.readUInt16BE=function(e,t){return e>>>=0,t||b(e,2,this.length),this[e]<<8|this[e+1]},a.prototype.readUint32LE=a.prototype.readUInt32LE=function(e,t){return e>>>=0,t||b(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},a.prototype.readUint32BE=a.prototype.readUInt32BE=function(e,t){return e>>>=0,t||b(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},a.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||b(e,t,this.length);for(var n=this[e],i=1,s=0;++s<t&&(i*=256);)n+=this[e+s]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*t)),n},a.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||b(e,t,this.length);for(var n=t,i=1,s=this[e+--n];n>0&&(i*=256);)s+=this[e+--n]*i;return s>=(i*=128)&&(s-=Math.pow(2,8*t)),s},a.prototype.readInt8=function(e,t){return(e>>>=0,t||b(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},a.prototype.readInt16LE=function(e,t){e>>>=0,t||b(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},a.prototype.readInt16BE=function(e,t){e>>>=0,t||b(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},a.prototype.readInt32LE=function(e,t){return e>>>=0,t||b(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},a.prototype.readInt32BE=function(e,t){return e>>>=0,t||b(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},a.prototype.readFloatLE=function(e,t){return e>>>=0,t||b(e,4,this.length),i.read(this,e,!0,23,4)},a.prototype.readFloatBE=function(e,t){return e>>>=0,t||b(e,4,this.length),i.read(this,e,!1,23,4)},a.prototype.readDoubleLE=function(e,t){return e>>>=0,t||b(e,8,this.length),i.read(this,e,!0,52,8)},a.prototype.readDoubleBE=function(e,t){return e>>>=0,t||b(e,8,this.length),i.read(this,e,!1,52,8)},a.prototype.writeUintLE=a.prototype.writeUIntLE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){var i=Math.pow(2,8*r)-1;_(this,e,t,r,i,0)}var s=1,o=0;for(this[t]=255&e;++o<r&&(s*=256);)this[t+o]=e/s&255;return t+r},a.prototype.writeUintBE=a.prototype.writeUIntBE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){var i=Math.pow(2,8*r)-1;_(this,e,t,r,i,0)}var s=r-1,o=1;for(this[t+s]=255&e;--s>=0&&(o*=256);)this[t+s]=e/o&255;return t+r},a.prototype.writeUint8=a.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||_(this,e,t,1,255,0),this[t]=255&e,t+1},a.prototype.writeUint16LE=a.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||_(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},a.prototype.writeUint16BE=a.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||_(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},a.prototype.writeUint32LE=a.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||_(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},a.prototype.writeUint32BE=a.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||_(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},a.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var i=Math.pow(2,8*r-1);_(this,e,t,r,i-1,-i)}var s=0,o=1,a=0;for(this[t]=255&e;++s<r&&(o*=256);)e<0&&0===a&&0!==this[t+s-1]&&(a=1),this[t+s]=(e/o>>0)-a&255;return t+r},a.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var i=Math.pow(2,8*r-1);_(this,e,t,r,i-1,-i)}var s=r-1,o=1,a=0;for(this[t+s]=255&e;--s>=0&&(o*=256);)e<0&&0===a&&0!==this[t+s+1]&&(a=1),this[t+s]=(e/o>>0)-a&255;return t+r},a.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||_(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},a.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||_(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},a.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||_(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},a.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||_(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},a.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||_(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},a.prototype.writeFloatLE=function(e,t,r){return I(this,e,t,!0,r)},a.prototype.writeFloatBE=function(e,t,r){return I(this,e,t,!1,r)},a.prototype.writeDoubleLE=function(e,t,r){return T(this,e,t,!0,r)},a.prototype.writeDoubleBE=function(e,t,r){return T(this,e,t,!1,r)},a.prototype.copy=function(e,t,r,n){if(!a.isBuffer(e))throw TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r||0===e.length||0===this.length)return 0;if(t<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);var i=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),i},a.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!a.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===e.length){var i,s=e.charCodeAt(0);("utf8"===n&&s<128||"latin1"===n)&&(e=s)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw RangeError("Out of range index");if(r<=t)return this;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(i=t;i<r;++i)this[i]=e;else{var o=a.isBuffer(e)?e:a.from(e,n),l=o.length;if(0===l)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<r-t;++i)this[i+t]=o[i%l]}return this};var S=/[^+/0-9A-Za-z-_]/g;function R(e,t){t=t||1/0;for(var r,n=e.length,i=null,s=[],o=0;o<n;++o){if((r=e.charCodeAt(o))>55295&&r<57344){if(!i){if(r>56319||o+1===n){(t-=3)>-1&&s.push(239,191,189);continue}i=r;continue}if(r<56320){(t-=3)>-1&&s.push(239,191,189),i=r;continue}r=(i-55296<<10|r-56320)+65536}else i&&(t-=3)>-1&&s.push(239,191,189);if(i=null,r<128){if((t-=1)<0)break;s.push(r)}else if(r<2048){if((t-=2)<0)break;s.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;s.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((t-=4)<0)break;s.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return s}function A(e){return n.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(S,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function C(e,t,r,n){for(var i=0;i<n&&!(i+r>=t.length)&&!(i>=e.length);++i)t[i+r]=e[i];return i}function O(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}var P=function(){for(var e="0123456789abcdef",t=Array(256),r=0;r<16;++r)for(var n=16*r,i=0;i<16;++i)t[n+i]=e[r]+e[i];return t}()},8898:function(e,t){/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */t.read=function(e,t,r,n,i){var s,o,a=8*i-n-1,l=(1<<a)-1,c=l>>1,u=-7,h=r?i-1:0,d=r?-1:1,f=e[t+h];for(h+=d,s=f&(1<<-u)-1,f>>=-u,u+=a;u>0;s=256*s+e[t+h],h+=d,u-=8);for(o=s&(1<<-u)-1,s>>=-u,u+=n;u>0;o=256*o+e[t+h],h+=d,u-=8);if(0===s)s=1-c;else{if(s===l)return o?NaN:1/0*(f?-1:1);o+=Math.pow(2,n),s-=c}return(f?-1:1)*o*Math.pow(2,s-n)},t.write=function(e,t,r,n,i,s){var o,a,l,c=8*s-i-1,u=(1<<c)-1,h=u>>1,d=23===i?5960464477539062e-23:0,f=n?0:s-1,p=n?1:-1,m=t<0||0===t&&1/t<0?1:0;for(isNaN(t=Math.abs(t))||t===1/0?(a=isNaN(t)?1:0,o=u):(o=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-o))<1&&(o--,l*=2),o+h>=1?t+=d/l:t+=d*Math.pow(2,1-h),t*l>=2&&(o++,l/=2),o+h>=u?(a=0,o=u):o+h>=1?(a=(t*l-1)*Math.pow(2,i),o+=h):(a=t*Math.pow(2,h-1)*Math.pow(2,i),o=0));i>=8;e[r+f]=255&a,f+=p,a/=256,i-=8);for(o=o<<i|a,c+=i;c>0;e[r+f]=255&o,f+=p,o/=256,c-=8);e[r+f-p]|=128*m}},7061:function(e){var t,r,n,i=e.exports={};function s(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var l=[],c=!1,u=-1;function h(){c&&n&&(c=!1,n.length?l=n.concat(l):u=-1,l.length&&d())}function d(){if(!c){var e=a(h);c=!0;for(var t=l.length;t;){for(n=l,l=[];++u<t;)n&&n[u].run();u=-1,t=l.length}n=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new f(e,t)),1!==l.length||c||a(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}},6771:function(e,t,r){"use strict";let n,i,s;r.d(t,{Jn:function(){return x},qX:function(){return L},rh:function(){return D},Xd:function(){return N},Mq:function(){return F},C6:function(){return j},ZF:function(){return B},KN:function(){return V}});var o=r(75),a=r(4645),l=r(9711);let c=(e,t)=>t.some(t=>e instanceof t),u=new WeakMap,h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return h.get(e);if("objectStoreNames"===t)return e.objectStoreNames||d.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return g(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function g(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(g(e.result)),n()},s=()=>{r(e.error),n()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&u.set(t,e)}).catch(()=>{}),p.set(t,e),t}(e);if(f.has(e))return f.get(e);let r="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(y(this),e),g(u.get(this))}:function(...e){return g(t.apply(y(this),e))}:function(e,...r){let n=t.call(y(this),e,...r);return d.set(n,e.sort?e.sort():[e]),g(n)}:(t instanceof IDBTransaction&&function(e){if(h.has(e))return;let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),n()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});h.set(e,t)}(t),c(t,n||(n=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,m):t;return r!==e&&(f.set(e,r),p.set(r,e)),r}let y=e=>p.get(e),v=["get","getKey","getAll","getAllKeys","count"],w=["put","add","delete","clear"],b=new Map;function _(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(b.get(t))return b.get(t);let r=t.replace(/FromIndex$/,""),n=t!==r,i=w.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||v.includes(r)))return;let s=async function(e,...t){let s=this.transaction(e,i?"readwrite":"readonly"),o=s.store;return n&&(o=o.index(t.shift())),(await Promise.all([o[r](...t),i&&s.done]))[0]};return b.set(t,s),s}m={...s=m,get:(e,t,r)=>_(e,t)||s.get(e,t,r),has:(e,t)=>!!_(e,t)||s.has(e,t)};/**
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
 */class E{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(!function(e){let t=e.getComponent();return t?.type==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let I="@firebase/app",T="0.14.8",S=new a.Yd("@firebase/app"),R="[DEFAULT]",A={[I]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/data-connect":"fire-data-connect","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/ai":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},C=new Map,O=new Map,P=new Map;function k(e,t){try{e.container.addComponent(t)}catch(r){S.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function N(e){let t=e.name;if(P.has(t))return S.debug(`There were multiple attempts to register component ${t}.`),!1;for(let r of(P.set(t,e),C.values()))k(r,e);for(let t of O.values())k(t,e);return!0}function L(e,t){let r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}function D(e){return null!=e&&void 0!==e.settings}let U=new l.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});/**
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
 */class M{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new o.wA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw U.create("app-deleted",{appName:this._name})}}/**
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
 */let x="12.9.0";function B(e,t={}){let r=e;"object"!=typeof t&&(t={name:t});let n={name:R,automaticDataCollectionEnabled:!0,...t},i=n.name;if("string"!=typeof i||!i)throw U.create("bad-app-name",{appName:String(i)});if(r||(r=(0,l.aH)()),!r)throw U.create("no-options");let s=C.get(i);if(s){if((0,l.vZ)(r,s.options)&&(0,l.vZ)(n,s.config))return s;throw U.create("duplicate-app",{appName:i})}let a=new o.H0(i);for(let e of P.values())a.addComponent(e);let c=new M(r,n,a);return C.set(i,c),c}function F(e=R){let t=C.get(e);if(!t&&e===R&&(0,l.aH)())return B();if(!t)throw U.create("no-app",{appName:e});return t}function j(){return Array.from(C.values())}function V(e,t,r){let n=A[e]??e;r&&(n+=`-${r}`);let i=n.match(/\s|\//),s=t.match(/\s|\//);if(i||s){let e=[`Unable to register library "${n}" with version "${t}":`];i&&e.push(`library name "${n}" contains illegal characters (whitespace or "/")`),i&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),S.warn(e.join(" "));return}N(new o.wA(`${n}-version`,()=>({library:n,version:t}),"VERSION"))}let H="firebase-heartbeat-store",z=null;function $(){return z||(z=(function(e,t,{blocked:r,upgrade:n,blocking:i,terminated:s}={}){let o=indexedDB.open(e,1),a=g(o);return n&&o.addEventListener("upgradeneeded",e=>{n(g(o.result),e.oldVersion,e.newVersion,g(o.transaction),e)}),r&&o.addEventListener("blocked",e=>r(e.oldVersion,e.newVersion,e)),a.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(H)}catch(e){console.warn(e)}}}).catch(e=>{throw U.create("idb-open",{originalErrorMessage:e.message})})),z}async function W(e){try{let t=(await $()).transaction(H),r=await t.objectStore(H).get(K(e));return await t.done,r}catch(e){if(e instanceof l.ZR)S.warn(e.message);else{let t=U.create("idb-get",{originalErrorMessage:e?.message});S.warn(t.message)}}}async function q(e,t){try{let r=(await $()).transaction(H,"readwrite"),n=r.objectStore(H);await n.put(t,K(e)),await r.done}catch(e){if(e instanceof l.ZR)S.warn(e.message);else{let t=U.create("idb-set",{originalErrorMessage:e?.message});S.warn(t.message)}}}function K(e){return`${e.name}!${e.options.appId}`}class J{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new X(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){try{let e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=G();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===t||this._heartbeatsCache.heartbeats.some(e=>e.date===t))return;if(this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats.length>30){let e=function(e){if(0===e.length)return -1;let t=0,r=e[0].date;for(let n=1;n<e.length;n++)e[n].date<r&&(r=e[n].date,t=n);return t}(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){S.warn(e)}}async getHeartbeatsHeader(){try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||0===this._heartbeatsCache.heartbeats.length)return"";let e=G(),{heartbeatsToSend:t,unsentEntries:r}=function(e,t=1024){let r=[],n=e.slice();for(let i of e){let e=r.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),Y(r)>t){e.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),Y(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),n=(0,l.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}catch(e){return S.warn(e),""}}}function G(){return new Date().toISOString().substring(0,10)}class X{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,l.hl)()&&(0,l.eu)().then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let e=await W(this.app);return e?.heartbeats?e:{heartbeats:[]}}}async overwrite(e){if(await this._canUseIndexedDBPromise){let t=await this.read();return q(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){if(await this._canUseIndexedDBPromise){let t=await this.read();return q(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}}}function Y(e){return(0,l.L)(JSON.stringify({version:2,heartbeats:e})).length}N(new o.wA("platform-logger",e=>new E(e),"PRIVATE")),N(new o.wA("heartbeat",e=>new J(e),"PRIVATE")),V(I,T,""),V(I,T,"esm2020"),V("fire-js","")},75:function(e,t,r){"use strict";r.d(t,{H0:function(){return a},wA:function(){return i}});var n=r(9711);class i{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */let s="[DEFAULT]";/**
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
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new n.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){let t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(e){if(r)return null;throw e}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(e){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[e,t]of this.instancesDeferred.entries())r===this.normalizeInstanceIdentifier(e)&&t.resolve(n);return n}onInit(e,t){let r=this.normalizeInstanceIdentifier(t),n=this.onInitCallbacks.get(r)??new Set;n.add(e),this.onInitCallbacks.set(r,n);let i=this.instances.get(r);return i&&e(i,r),()=>{n.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let n of r)try{n(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:e===s?void 0:e,options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
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
 */class a{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},4645:function(e,t,r){"use strict";var n,i;r.d(t,{Yd:function(){return u},in:function(){return n}});/**
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
 */let s=[];(i=n||(n={}))[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT";let o={debug:n.DEBUG,verbose:n.VERBOSE,info:n.INFO,warn:n.WARN,error:n.ERROR,silent:n.SILENT},a=n.INFO,l={[n.DEBUG]:"log",[n.VERBOSE]:"log",[n.INFO]:"info",[n.WARN]:"warn",[n.ERROR]:"error"},c=(e,t,...r)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),i=l[t];if(i)console[i](`[${n}]  ${e.name}:`,...r);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class u{constructor(e){this.name=e,this._logLevel=a,this._logHandler=c,this._userLogHandler=null,s.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in n))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,n.DEBUG,...e),this._logHandler(this,n.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,n.VERBOSE,...e),this._logHandler(this,n.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,n.INFO,...e),this._logHandler(this,n.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,n.WARN,...e),this._logHandler(this,n.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,n.ERROR,...e),this._logHandler(this,n.ERROR,...e)}}},2753:function(e,t,r){"use strict";r.d(t,{v0:function(){return rp},Aj:function(){return tr},e5:function(){return tt},w7:function(){return tn}});var n,i=r(6771),s=r(9711),o=r(4645),a=r(75);function l(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}let c=new s.LL("auth","Firebase",l()),u=new o.Yd("@firebase/auth");function h(e,...t){u.logLevel<=o.in.ERROR&&u.error(`Auth (${i.Jn}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(e,...t){throw g(e,...t)}function f(e,...t){return g(e,...t)}function p(e,t,r){let n={...l(),[t]:r};return new s.LL("auth","Firebase",n).create(t,{appName:e.name})}function m(e){return p(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function g(e,...t){if("string"!=typeof e){let r=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(r,...n)}return c.create(e,...t)}function y(e,t,...r){if(!e)throw g(t,...r)}function v(e){let t="INTERNAL ASSERTION FAILED: "+e;throw h(t),Error(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(){return"undefined"!=typeof self&&self.location?.href||""}function b(){return"undefined"!=typeof self&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(e,t){var r;this.shortDelay=e,this.longDelay=t,r="Short delay should be less than long delay!",t>e||v(r),this.isMobile=(0,s.uI)()||(0,s.b$)()}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&("http:"===b()||"https:"===b()||(0,s.ru)()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e,t){var r,n;r=e.emulator,n="Emulator should always be set here",r||v(n);let{url:i}=e.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void v("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void v("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void v("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let T={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},S=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],R=new _(3e4,6e4);function A(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function C(e,t,r,n,i={}){return O(e,i,async()=>{let i={},o={};n&&("GET"===t?o=n:i={body:JSON.stringify(n)});let a=(0,s.xO)({key:e.config.apiKey,...o}).slice(1),l=await e._getAdditionalHeaders();l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode);let c={method:t,headers:l,...i};return(0,s.L_)()||(c.referrerPolicy="no-referrer"),e.emulatorConfig&&(0,s.Xx)(e.emulatorConfig.host)&&(c.credentials="include"),I.fetch()(await k(e,e.config.apiHost,r,a),c)})}async function O(e,t,r){e._canInitEmulator=!1;let n={...T,...t};try{let t=new N(e),i=await Promise.race([r(),t.promise]);t.clearNetworkTimeout();let s=await i.json();if("needConfirmation"in s)throw L(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{let[t,r]=(i.ok?s.errorMessage:s.error.message).split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===t)throw L(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===t)throw L(e,"email-already-in-use",s);if("USER_DISABLED"===t)throw L(e,"user-disabled",s);let o=n[t]||t.toLowerCase().replace(/[_\s]+/g,"-");if(r)throw p(e,o,r);d(e,o)}}catch(t){if(t instanceof s.ZR)throw t;d(e,"network-request-failed",{message:String(t)})}}async function P(e,t,r,n,i={}){let s=await C(e,t,r,n,i);return"mfaPendingCredential"in s&&d(e,"multi-factor-auth-required",{_serverResponse:s}),s}async function k(e,t,r,n){let i=`${t}${r}?${n}`,s=e.config.emulator?E(e.config,i):`${e.config.apiScheme}://${i}`;return S.includes(r)&&(await e._persistenceManagerAvailable,"COOKIE"===e._getPersistenceType())?e._getPersistence()._getFinalTarget(s).toString():s}class N{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(f(this.auth,"network-request-failed")),R.get())})}}function L(e,t,r){let n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);let i=f(e,t,n);return i.customData._tokenResponse=r,i}function D(e){return void 0!==e&&void 0!==e.enterprise}class U{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return function(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function M(e,t){return C(e,"GET","/v2/recaptchaConfig",A(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x(e,t){return C(e,"POST","/v1/accounts:delete",t)}async function B(e,t){return C(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e){if(e)try{let t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}async function j(e,t=!1){let r=(0,s.m9)(e),n=await r.getIdToken(t),i=H(n);y(i&&i.exp&&i.auth_time&&i.iat,r.auth,"internal-error");let o="object"==typeof i.firebase?i.firebase:void 0,a=o?.sign_in_provider;return{claims:i,token:n,authTime:F(V(i.auth_time)),issuedAtTime:F(V(i.iat)),expirationTime:F(V(i.exp)),signInProvider:a||null,signInSecondFactor:o?.sign_in_second_factor||null}}function V(e){return 1e3*Number(e)}function H(e){let[t,r,n]=e.split(".");if(void 0===t||void 0===r||void 0===n)return h("JWT malformed, contained fewer than 3 sections"),null;try{let e=(0,s.tV)(r);if(!e)return h("Failed to decode base64 JWT payload"),null;return JSON.parse(e)}catch(e){return h("Caught error parsing JWT payload as JSON",e?.toString()),null}}function z(e){let t=H(e);return y(t,"internal-error"),y(void 0!==t.exp,"internal-error"),y(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $(e,t,r=!1){if(r)return t;try{return await t}catch(t){throw t instanceof s.ZR&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){if(!e)return this.errorBackoff=3e4,Math.max(0,(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5);{let e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=F(this.lastLoginAt),this.creationTime=F(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function K(e){let t=e.auth,r=await e.getIdToken(),n=await $(e,B(t,{idToken:r}));y(n?.users.length,t,"internal-error");let i=n.users[0];e._notifyReloadListener(i);let s=i.providerUserInfo?.length?G(i.providerUserInfo):[],o=[...e.providerData.filter(e=>!s.some(t=>t.providerId===e.providerId)),...s],a=e.isAnonymous,l=!(e.email&&i.passwordHash)&&!o?.length;Object.assign(e,{uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new q(i.createdAt,i.lastLoginAt),isAnonymous:!!a&&l})}async function J(e){let t=(0,s.m9)(e);await K(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function G(e){return e.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X(e,t){let r=await O(e,{},async()=>{let r=(0,s.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:n,apiKey:i}=e.config,o=await k(e,n,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";let l={method:"POST",headers:a,body:r};return e.emulatorConfig&&(0,s.Xx)(e.emulatorConfig.host)&&(l.credentials="include"),I.fetch()(o,l)});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function Y(e,t){return C(e,"POST","/v2/accounts:revokeToken",A(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y(void 0!==e.idToken,"internal-error"),y(void 0!==e.refreshToken,"internal-error");let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):z(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){y(0!==e.length,"internal-error");let t=z(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(y(this.refreshToken,e,"user-token-expired"),this.refreshToken)?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:r,refreshToken:n,expiresIn:i}=await X(e,t);this.updateTokensAndExpiration(r,n,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}static fromJSON(e,t){let{refreshToken:r,accessToken:n,expirationTime:i}=t,s=new Z;return r&&(y("string"==typeof r,"internal-error",{appName:e}),s.refreshToken=r),n&&(y("string"==typeof n,"internal-error",{appName:e}),s.accessToken=n),i&&(y("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Z,this.toJSON())}_performRefresh(){return v("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(e,t){y("string"==typeof e||void 0===e,"internal-error",{appName:t})}class ee{constructor({uid:e,auth:t,stsTokenManager:r,...n}){this.providerId="firebase",this.proactiveRefresh=new W(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=n.displayName||null,this.email=n.email||null,this.emailVerified=n.emailVerified||!1,this.phoneNumber=n.phoneNumber||null,this.photoURL=n.photoURL||null,this.isAnonymous=n.isAnonymous||!1,this.tenantId=n.tenantId||null,this.providerData=n.providerData?[...n.providerData]:[],this.metadata=new q(n.createdAt||void 0,n.lastLoginAt||void 0)}async getIdToken(e){let t=await $(this,this.stsTokenManager.getToken(this.auth,e));return y(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return j(this,e)}reload(){return J(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>({...e})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new ee({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await K(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if((0,i.rh)(this.auth.app))return Promise.reject(m(this.auth));let e=await this.getIdToken();return await $(this,x(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){let r=t.displayName??void 0,n=t.email??void 0,i=t.phoneNumber??void 0,s=t.photoURL??void 0,o=t.tenantId??void 0,a=t._redirectEventId??void 0,l=t.createdAt??void 0,c=t.lastLoginAt??void 0,{uid:u,emailVerified:h,isAnonymous:d,providerData:f,stsTokenManager:p}=t;y(u&&p,e,"internal-error");let m=Z.fromJSON(this.name,p);y("string"==typeof u,e,"internal-error"),Q(r,e.name),Q(n,e.name),y("boolean"==typeof h,e,"internal-error"),y("boolean"==typeof d,e,"internal-error"),Q(i,e.name),Q(s,e.name),Q(o,e.name),Q(a,e.name),Q(l,e.name),Q(c,e.name);let g=new ee({uid:u,auth:e,email:n,emailVerified:h,displayName:r,isAnonymous:d,photoURL:s,phoneNumber:i,tenantId:o,stsTokenManager:m,createdAt:l,lastLoginAt:c});return f&&Array.isArray(f)&&(g.providerData=f.map(e=>({...e}))),a&&(g._redirectEventId=a),g}static async _fromIdTokenResponse(e,t,r=!1){let n=new Z;n.updateFromServerResponse(t);let i=new ee({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:r});return await K(i),i}static async _fromGetAccountInfoResponse(e,t,r){let n=t.users[0];y(void 0!==n.localId,"internal-error");let i=void 0!==n.providerUserInfo?G(n.providerUserInfo):[],s=!(n.email&&n.passwordHash)&&!i?.length,o=new Z;o.updateFromIdToken(r);let a=new ee({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:s});return Object.assign(a,{uid:n.localId,displayName:n.displayName||null,photoURL:n.photoUrl||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,tenantId:n.tenantId||null,providerData:i,metadata:new q(n.createdAt,n.lastLoginAt),isAnonymous:!(n.email&&n.passwordHash)&&!i?.length}),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let et=new Map;function er(e){var t,r;t="Expected a class definition",e instanceof Function||v(t);let n=et.get(e);return n?(r="Instance stored in cache mismatched with class",n instanceof e||v(r)):(n=new e,et.set(e,n)),n}/**
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
 */class en{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}/**
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
 */function ei(e,t,r){return`firebase:${e}:${t}:${r}`}en.type="NONE";class es{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;let{config:n,name:i}=this.auth;this.fullUserKey=ei(this.userKey,n.apiKey,i),this.fullPersistenceKey=ei("persistence",n.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);if(!e)return null;if("string"==typeof e){let t=await B(this.auth,{idToken:e}).catch(()=>void 0);return t?ee._fromGetAccountInfoResponse(this.auth,t,e):null}return ee._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new es(er(en),e,r);let n=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),i=n[0]||er(en),s=ei(r,e.config.apiKey,e.name),o=null;for(let r of t)try{let t=await r._get(s);if(t){let n;if("string"==typeof t){let r=await B(e,{idToken:t}).catch(()=>void 0);if(!r)break;n=await ee._fromGetAccountInfoResponse(e,r,t)}else n=ee._fromJSON(e,t);r!==i&&(o=n),i=r;break}}catch{}let a=n.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length&&(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch{}}))),new es(i,e,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(eu(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";{if(t.includes("edge/"))return"Edge";if(ea(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ed(t))return"Blackberry";if(ef(t))return"Webos";if(el(t))return"Safari";if((t.includes("chrome/")||ec(t))&&!t.includes("edge/"))return"Chrome";if(eh(t))return"Android";let r=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if(r?.length===2)return r[1]}return"Other"}function ea(e=(0,s.z$)()){return/firefox\//i.test(e)}function el(e=(0,s.z$)()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ec(e=(0,s.z$)()){return/crios\//i.test(e)}function eu(e=(0,s.z$)()){return/iemobile/i.test(e)}function eh(e=(0,s.z$)()){return/android/i.test(e)}function ed(e=(0,s.z$)()){return/blackberry/i.test(e)}function ef(e=(0,s.z$)()){return/webos/i.test(e)}function ep(e=(0,s.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function em(e=(0,s.z$)()){return ep(e)||eh(e)||ef(e)||ed(e)||/windows phone/i.test(e)||eu(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(e,t=[]){let r;switch(e){case"Browser":r=eo((0,s.z$)());break;case"Worker":r=`${eo((0,s.z$)())}-${e}`;break;default:r=e}let n=t.length?t.join(","):"FirebaseCore-web";return`${r}/JsCore/${i.Jn}/${n}`}/**
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
 */class ey{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let r=t=>new Promise((r,n)=>{try{let n=e(t);r(n)}catch(e){n(e)}});r.onAbort=t,this.queue.push(r);let n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(e){for(let e of(t.reverse(),t))try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:e?.message})}}}/**
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
 */async function ev(e,t={}){return C(e,"GET","/v2/passwordPolicy",A(e,t))}class ew{constructor(e){let t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??6,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),void 0!==t.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),void 0!==t.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),void 0!==t.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),void 0!==t.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){let t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){let r=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),n&&(t.meetsMaxPasswordLength=e.length<=n)}validatePasswordCharacterOptions(e,t){let r;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let n=0;n<e.length;n++)r=e.charAt(n),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,n,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e,t,r,n){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new eE(this),this.idTokenSubscription=new eE(this),this.beforeStateQueue=new ey(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=c,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion,this._persistenceManagerAvailable=new Promise(e=>this._resolvePersistenceManagerAvailable=e)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=er(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await es.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let t=await B(this,{idToken:e}),r=await ee._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if((0,i.rh)(this.app)){let e=this.app.settings.authIdToken;return e?new Promise(t=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t,t))}):this.directlySetCurrentUser(null)}let t=await this.assertedPersistence.getCurrentUser(),r=t,n=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let t=this.redirectUser?._redirectEventId,i=r?._redirectEventId,s=await this.tryRedirectSignIn(e);(!t||t===i)&&s?.user&&(r=s.user,n=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(n)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return(y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId)?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await K(e)}catch(e){if(e?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if((0,i.rh)(this.app))return Promise.reject(m(this));let t=e?(0,s.m9)(e):null;return t&&y(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(0,i.rh)(this.app)?Promise.reject(m(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return(0,i.rh)(this.app)?Promise.reject(m(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(er(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=new ew(await ev(this));null===this.tenantId?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new s.LL("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await Y(this,t)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){let r=await this.getOrInitRedirectPersistenceManager(t);return null===e?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&er(e)||this._popupRedirectResolver;y(t,this,"argument-error"),this.redirectPersistenceManager=await es.create(this,[er(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return(this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e)?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,n){if(this._deleted)return()=>{};let i="function"==typeof t?t:t.next.bind(t),s=!1,o=this._isInitialized?Promise.resolve():this._initializationPromise;if(y(o,this,"internal-error"),o.then(()=>{s||i(this.currentUser)}),"function"==typeof t){let i=e.addObserver(t,r,n);return()=>{s=!0,i()}}{let r=e.addObserver(t);return()=>{s=!0,r()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=eg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){let e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);let t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);let r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if((0,i.rh)(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;let e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&function(e,...t){u.logLevel<=o.in.WARN&&u.warn(`Auth (${i.Jn}): ${e}`,...t)}(`Error while retrieving App Check token: ${e.error}`),e?.token}}function e_(e){return(0,s.m9)(e)}class eE{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,s.ne)(e=>this.observer=e)}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eI={async loadJS(){throw Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function eT(e){return`__${e}${Math.floor(1e6*Math.random())}`}class eS{constructor(){this.enterprise=new eR}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class eR{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}let eA="NO_RECAPTCHA";class eC{constructor(e){this.type="recaptcha-enterprise",this.auth=e_(e)}async verify(e="verify",t=!1){async function r(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,r)=>{M(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(n=>{if(void 0===n.recaptchaKey)r(Error("recaptcha Enterprise site key undefined"));else{let r=new U(n);return null==e.tenantId?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,t(r.siteKey)}}).catch(e=>{r(e)})})}function n(t,r,n){let i=window.grecaptcha;D(i)?i.enterprise.ready(()=>{i.enterprise.execute(t,{action:e}).then(e=>{r(e)}).catch(()=>{r(eA)})}):n(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new eS().execute("siteKey",{action:"verify"}):new Promise((e,i)=>{r(this.auth).then(r=>{if(!t&&D(window.grecaptcha))n(r,e,i);else{var s;if("undefined"==typeof window){i(Error("RecaptchaVerifier is only supported in browser"));return}let t=eI.recaptchaEnterpriseScript;0!==t.length&&(t+=r),(s=t,eI.loadJS(s)).then(()=>{n(r,e,i)}).catch(e=>{i(e)})}}).catch(e=>{i(e)})})}}async function eO(e,t,r,n=!1,i=!1){let s;let o=new eC(e);if(i)s=eA;else try{s=await o.verify(r)}catch(e){s=await o.verify(r,!0)}let a={...t};if("mfaSmsEnrollment"===r||"mfaSmsSignIn"===r){if("phoneEnrollmentInfo"in a){let e=a.phoneEnrollmentInfo.phoneNumber,t=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:t,captchaResponse:s,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){let e=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:e,captchaResponse:s,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return n?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function eP(e,t,r,n,i){if("EMAIL_PASSWORD_PROVIDER"===i){if(!e._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER"))return n(e,t).catch(async i=>{if("auth/missing-recaptcha-token"!==i.code)return Promise.reject(i);{console.log(`${r} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let i=await eO(e,t,r,"getOobCode"===r);return n(e,i)}});{let i=await eO(e,t,r,"getOobCode"===r);return n(e,i)}}if("PHONE_PROVIDER"!==i)return Promise.reject(i+" provider is not supported.");if(e._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER")){let i=await eO(e,t,r);return n(e,i).catch(async i=>{if(e._getRecaptchaConfig()?.getProviderEnforcementState("PHONE_PROVIDER")==="AUDIT"&&("auth/missing-recaptcha-token"===i.code||"auth/invalid-app-credential"===i.code)){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${r} flow.`);let i=await eO(e,t,r,!1,!0);return n(e,i)}return Promise.reject(i)})}{let i=await eO(e,t,r,!1,!0);return n(e,i)}}async function ek(e){let t=e_(e),r=new U(await M(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}));null==t.tenantId?t._agentRecaptchaConfig=r:t._tenantRecaptchaConfigs[t.tenantId]=r,r.isAnyProviderEnabled()&&new eC(t).verify()}function eN(e){let t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function eL(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return v("not implemented")}_getIdTokenResponse(e){return v("not implemented")}_linkToIdToken(e,t){return v("not implemented")}_getReauthenticationResolver(e){return v("not implemented")}}async function eU(e,t){return C(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eM(e,t){return P(e,"POST","/v1/accounts:signInWithPassword",A(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ex(e,t){return P(e,"POST","/v1/accounts:signInWithEmailLink",A(e,t))}async function eB(e,t){return P(e,"POST","/v1/accounts:signInWithEmailLink",A(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eF extends eD{constructor(e,t,r,n=null){super("password",r),this._email=e,this._password=t,this._tenantId=n}static _fromEmailAndPassword(e,t){return new eF(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new eF(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if(t?.email&&t?.password){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return eP(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",eM,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return ex(e,{email:this._email,oobCode:this._password});default:d(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return eP(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",eU,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return eB(e,{idToken:t,email:this._email,oobCode:this._password});default:d(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ej(e,t){return P(e,"POST","/v1/accounts:signInWithIdp",A(e,t))}class eV extends eD{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new eV(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):d("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let{providerId:t,signInMethod:r,...n}="string"==typeof e?JSON.parse(e):e;if(!t||!r)return null;let i=new eV(t,r);return i.idToken=n.idToken||void 0,i.accessToken=n.accessToken||void 0,i.secret=n.secret,i.nonce=n.nonce,i.pendingToken=n.pendingToken||null,i}_getIdTokenResponse(e){return ej(e,this.buildRequest())}_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,ej(e,r)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,ej(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,s.xO)(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eH(e,t){return C(e,"POST","/v1/accounts:sendVerificationCode",A(e,t))}async function ez(e,t){return P(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,t))}async function e$(e,t){let r=await P(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,t));if(r.temporaryProof)throw L(e,"account-exists-with-different-credential",r);return r}let eW={USER_NOT_FOUND:"user-not-found"};async function eq(e,t){return P(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,{...t,operation:"REAUTH"}),eW)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eK extends eD{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new eK({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new eK({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return ez(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return e$(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return eq(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:n}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:n}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:i}=e;return r||t||n||i?new eK({verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:i}):null}}class eJ{constructor(e){let t=(0,s.zd)((0,s.pd)(e)),r=t.apiKey??null,n=t.oobCode??null,i=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(t.mode??null);y(r&&n&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=n,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){let t=function(e){let t=(0,s.zd)((0,s.pd)(e)).link,r=t?(0,s.zd)((0,s.pd)(t)).deep_link_id:null,n=(0,s.zd)((0,s.pd)(e)).deep_link_id;return(n?(0,s.zd)((0,s.pd)(n)).link:null)||n||r||t||e}(e);try{return new eJ(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eG{constructor(){this.providerId=eG.PROVIDER_ID}static credential(e,t){return eF._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let r=eJ.parseLink(t);return y(r,"argument-error"),eF._fromEmailAndCode(e,r.code,r.tenantId)}}eG.PROVIDER_ID="password",eG.EMAIL_PASSWORD_SIGN_IN_METHOD="password",eG.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eX{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class eY extends eX{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eZ extends eY{constructor(){super("facebook.com")}static credential(e){return eV._fromParams({providerId:eZ.PROVIDER_ID,signInMethod:eZ.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return eZ.credentialFromTaggedObject(e)}static credentialFromError(e){return eZ.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return eZ.credential(e.oauthAccessToken)}catch{return null}}}eZ.FACEBOOK_SIGN_IN_METHOD="facebook.com",eZ.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eQ extends eY{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return eV._fromParams({providerId:eQ.PROVIDER_ID,signInMethod:eQ.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return eQ.credentialFromTaggedObject(e)}static credentialFromError(e){return eQ.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return eQ.credential(t,r)}catch{return null}}}eQ.GOOGLE_SIGN_IN_METHOD="google.com",eQ.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0 extends eY{constructor(){super("github.com")}static credential(e){return eV._fromParams({providerId:e0.PROVIDER_ID,signInMethod:e0.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return e0.credentialFromTaggedObject(e)}static credentialFromError(e){return e0.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return e0.credential(e.oauthAccessToken)}catch{return null}}}e0.GITHUB_SIGN_IN_METHOD="github.com",e0.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1 extends eY{constructor(){super("twitter.com")}static credential(e,t){return eV._fromParams({providerId:e1.PROVIDER_ID,signInMethod:e1.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return e1.credentialFromTaggedObject(e)}static credentialFromError(e){return e1.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return e1.credential(t,r)}catch{return null}}}e1.TWITTER_SIGN_IN_METHOD="twitter.com",e1.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,n=!1){return new e2({user:await ee._fromIdTokenResponse(e,r,n),providerId:e6(r),_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){return await e._updateTokensIfNecessary(r,!0),new e2({user:e,providerId:e6(r),_tokenResponse:r,operationType:t})}}function e6(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e3 extends s.ZR{constructor(e,t,r,n){super(t.code,t.message),this.operationType=r,this.user=n,Object.setPrototypeOf(this,e3.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,n){return new e3(e,t,r,n)}}function e4(e,t,r,n){return("reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch(r=>{if("auth/multi-factor-auth-required"===r.code)throw e3._fromErrorAndOperation(e,r,t,n);throw r})}async function e5(e,t,r=!1){let n=await $(e,t._linkToIdToken(e.auth,await e.getIdToken()),r);return e2._forOperation(e,"link",n)}/**
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
 */async function e8(e,t,r=!1){let{auth:n}=e;if((0,i.rh)(n.app))return Promise.reject(m(n));let s="reauthenticate";try{let i=await $(e,e4(n,s,t,e),r);y(i.idToken,n,"internal-error");let o=H(i.idToken);y(o,n,"internal-error");let{sub:a}=o;return y(e.uid===a,n,"user-mismatch"),e2._forOperation(e,s,i)}catch(e){throw e?.code==="auth/user-not-found"&&d(n,"user-mismatch"),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e7(e,t,r=!1){if((0,i.rh)(e.app))return Promise.reject(m(e));let n="signIn",s=await e4(e,n,t),o=await e2._fromIdTokenResponse(e,n,s);return r||await e._updateCurrentUser(o.user),o}async function e9(e,t){return e7(e_(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function te(e){let t=e_(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}function tt(e,t,r){return(0,i.rh)(e.app)?Promise.reject(m(e)):e9((0,s.m9)(e),eG.credential(t,r)).catch(async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&te(e),t})}function tr(e,t,r,n){return(0,s.m9)(e).onAuthStateChanged(t,r,n)}function tn(e){return(0,s.m9)(e).signOut()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(e,t){return C(e,"POST","/v2/accounts/mfaEnrollment:start",A(e,t))}new WeakMap;let ts="__sak";/**
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
 */class to{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(ts,"1"),this.storage.removeItem(ts),Promise.resolve(!0)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class ta extends to{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=em(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let r=this.storage.getItem(t),n=this.localCache[t];r!==n&&e(t,n,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((e,t,r)=>{this.notifyListeners(e,r)});return}let r=e.key;t?this.detachListener():this.stopPolling();let n=()=>{let e=this.storage.getItem(r);(t||this.localCache[r]!==e)&&this.notifyListeners(r,e)},i=this.storage.getItem(r);(0,s.w1)()&&10===document.documentMode&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,10):n()}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let e of Array.from(r))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}function tl(e){let t=e.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),r=RegExp(`${t}=([^;]+)`);return document.cookie.match(r)?.[1]??null}function tc(e){let t="http:"===window.location.protocol;return`${t?"__dev_":"__HOST-"}FIREBASE_${e.split(":")[3]}`}ta.type="LOCAL";class tu{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){let t=new URL(`${window.location.origin}/__cookies__`);return t.searchParams.set("finalTarget",e),t}async _isAvailable(){return!!("boolean"!=typeof isSecureContext||isSecureContext)&&"undefined"!=typeof navigator&&"undefined"!=typeof document&&(navigator.cookieEnabled??!0)}async _set(e,t){}async _get(e){if(!this._isAvailable())return null;let t=tc(e);if(window.cookieStore){let e=await window.cookieStore.get(t);return e?.value}return tl(t)}async _remove(e){if(!this._isAvailable()||!await this._get(e))return;let t=tc(e);document.cookie=`${t}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch(()=>void 0)}_addListener(e,t){if(!this._isAvailable())return;let r=tc(e);if(window.cookieStore){let e=e=>{let n=e.changed.find(e=>e.name===r);n&&t(n.value),e.deleted.find(e=>e.name===r)&&t(null)};return this.listenerUnsubscribes.set(t,()=>window.cookieStore.removeEventListener("change",e)),window.cookieStore.addEventListener("change",e)}let n=tl(r),i=setInterval(()=>{let e=tl(r);e!==n&&(t(e),n=e)},1e3);this.listenerUnsubscribes.set(t,()=>clearInterval(i))}_removeListener(e,t){let r=this.listenerUnsubscribes.get(t);r&&(r(),this.listenerUnsubscribes.delete(t))}}tu.type="COOKIE";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th extends to{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}th.type="SESSION";/**
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
 */class td{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;let r=new td(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let{eventId:t,eventType:r,data:n}=e.data,i=this.handlersMap[r];if(!i?.size)return;e.ports[0].postMessage({status:"ack",eventId:t,eventType:r});let s=Array.from(i).map(async t=>t(e.origin,n)),o=await Promise.all(s.map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(e){return{fulfilled:!1,reason:e}}}));e.ports[0].postMessage({status:"done",eventId:t,eventType:r,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(e="",t=10){let r="";for(let e=0;e<t;e++)r+=Math.floor(10*Math.random());return e+r}td.receivers=[];/**
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
 */class tp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){let n,i;let s="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!s)throw Error("connection_unavailable");return new Promise((o,a)=>{let l=tf("",20);s.port1.start();let c=setTimeout(()=>{a(Error("unsupported_event"))},r);i={messageChannel:s,onMessage(e){if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(c),n=setTimeout(()=>{a(Error("timeout"))},3e3);break;case"done":clearTimeout(n),o(e.data.response);break;default:clearTimeout(c),clearTimeout(n),a(Error("invalid_response"))}}},this.handlers.add(i),s.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tm(){return window}/**
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
 */function tg(){return void 0!==tm().WorkerGlobalScope&&"function"==typeof tm().importScripts}async function ty(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}/**
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
 */let tv="firebaseLocalStorageDb",tw="firebaseLocalStorage",tb="fbase_key";class t_{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function tE(e,t){return e.transaction([tw],t?"readwrite":"readonly").objectStore(tw)}function tI(){let e=indexedDB.open(tv,1);return new Promise((t,r)=>{e.addEventListener("error",()=>{r(e.error)}),e.addEventListener("upgradeneeded",()=>{let t=e.result;try{t.createObjectStore(tw,{keyPath:tb})}catch(e){r(e)}}),e.addEventListener("success",async()=>{let r=e.result;r.objectStoreNames.contains(tw)?t(r):(r.close(),await new t_(indexedDB.deleteDatabase(tv)).toPromise(),t(await tI()))})})}async function tT(e,t,r){return new t_(tE(e,!0).put({[tb]:t,value:r})).toPromise()}async function tS(e,t){let r=tE(e,!1).get(t),n=await new t_(r).toPromise();return void 0===n?null:n.value}function tR(e,t){return new t_(tE(e,!0).delete(t)).toPromise()}class tA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await tI()),this.db}async _withRetries(e){let t=0;for(;;)try{let t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=td._getInstance(tg()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await ty(),!this.activeServiceWorker)return;this.sender=new tp(this.activeServiceWorker);let e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&(navigator?.serviceWorker?.controller||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await tI();return await tT(e,ts,"1"),await tR(e,ts),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>tT(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>tS(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>tR(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(e=>new t_(tE(e,!1).getAll()).toPromise());if(!e||0!==this.pendingWrites)return[];let t=[],r=new Set;if(0!==e.length)for(let{fbase_key:n,value:i}of e)r.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(i)&&(this.notifyListeners(n,i),t.push(n));for(let e of Object.keys(this.localCache))this.localCache[e]&&!r.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let e of Array.from(r))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC(e,t){return C(e,"POST","/v2/accounts/mfaSignIn:start",A(e,t))}tA.type="LOCAL",eT("rcb"),new _(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tO="recaptcha";async function tP(e,t,r){if(!e._getRecaptchaConfig())try{await ek(e)}catch(e){console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let n;if(n="string"==typeof t?{phoneNumber:t}:t,"session"in n){let t=n.session;if("phoneNumber"in n){y("enroll"===t.type,e,"internal-error");let i={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:n.phoneNumber,clientType:"CLIENT_TYPE_WEB"}},s=async(e,t)=>{if(t.phoneEnrollmentInfo.captchaResponse===eA){y(r?.type===tO,e,"argument-error");let n=await tk(e,t,r);return ti(e,n)}return ti(e,t)},o=eP(e,i,"mfaSmsEnrollment",s,"PHONE_PROVIDER");return(await o.catch(e=>Promise.reject(e))).phoneSessionInfo.sessionInfo}{y("signin"===t.type,e,"internal-error");let i=n.multiFactorHint?.uid||n.multiFactorUid;y(i,e,"missing-multi-factor-info");let s={mfaPendingCredential:t.credential,mfaEnrollmentId:i,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}},o=async(e,t)=>{if(t.phoneSignInInfo.captchaResponse===eA){y(r?.type===tO,e,"argument-error");let n=await tk(e,t,r);return tC(e,n)}return tC(e,t)},a=eP(e,s,"mfaSmsSignIn",o,"PHONE_PROVIDER");return(await a.catch(e=>Promise.reject(e))).phoneResponseInfo.sessionInfo}}{let t={phoneNumber:n.phoneNumber,clientType:"CLIENT_TYPE_WEB"},i=async(e,t)=>{if(t.captchaResponse===eA){y(r?.type===tO,e,"argument-error");let n=await tk(e,t,r);return eH(e,n)}return eH(e,t)},s=eP(e,t,"sendVerificationCode",i,"PHONE_PROVIDER");return(await s.catch(e=>Promise.reject(e))).sessionInfo}}finally{r?._reset()}}async function tk(e,t,r){y(r.type===tO,e,"argument-error");let n=await r.verify();y("string"==typeof n,e,"argument-error");let i={...t};if("phoneEnrollmentInfo"in i){let e=i.phoneEnrollmentInfo.phoneNumber,t=i.phoneEnrollmentInfo.captchaResponse,r=i.phoneEnrollmentInfo.clientType,s=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:n,captchaResponse:t,clientType:r,recaptchaVersion:s}}),i}if(!("phoneSignInInfo"in i))return Object.assign(i,{recaptchaToken:n}),i;{let e=i.phoneSignInInfo.captchaResponse,t=i.phoneSignInInfo.clientType,r=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:n,captchaResponse:e,clientType:t,recaptchaVersion:r}}),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(e){this.providerId=tN.PROVIDER_ID,this.auth=e_(e)}verifyPhoneNumber(e,t){return tP(this.auth,e,(0,s.m9)(t))}static credential(e,t){return eK._fromVerification(e,t)}static credentialFromResult(e){return tN.credentialFromTaggedObject(e)}static credentialFromError(e){return tN.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:r}=e;return t&&r?eK._fromTokenResponse(t,r):null}}tN.PROVIDER_ID="phone",tN.PHONE_SIGN_IN_METHOD="phone";/**
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
 */class tL extends eD{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ej(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ej(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ej(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function tD(e){return e7(e.auth,new tL(e),e.bypassAuthState)}function tU(e){let{auth:t,user:r}=e;return y(r,t,"internal-error"),e8(r,new tL(e),e.bypassAuthState)}async function tM(e){let{auth:t,user:r}=e;return y(r,t,"internal-error"),e5(r,new tL(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(e,t,r,n,i=!1){this.auth=e,this.resolver=r,this.user=n,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:r,postBody:n,tenantId:i,error:s,type:o}=e;if(s){this.reject(s);return}let a={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tD;case"linkViaPopup":case"linkViaRedirect":return tM;case"reauthViaPopup":case"reauthViaRedirect":return tU;default:d(this.auth,"internal-error")}}resolve(e){var t,r;t=this.pendingPromise,r="Pending promise was never set",t||v(r),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){var t,r;t=this.pendingPromise,r="Pending promise was never set",t||v(r),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tB=new _(2e3,1e4);class tF extends tx{constructor(e,t,r,n,i){super(e,t,n,i),this.provider=r,this.authWindow=null,this.pollId=null,tF.currentPopupAction&&tF.currentPopupAction.cancel(),tF.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return y(e,this.auth,"internal-error"),e}async onExecution(){var e,t;e=1===this.filter.length,t="Popup operations only handle one event",e||v(t);let r=tf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],r),this.authWindow.associatedEvent=r,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(f(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(f(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,tF.currentPopupAction=null}pollUserCancellation(){let e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(f(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tB.get())};e()}}tF.currentPopupAction=null;let tj=new Map;class tV extends tx{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=tj.get(this.auth._key());if(!e){try{let t=await tH(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}tj.set(this.auth._key(),e)}return this.bypassAuthState||tj.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"===e.type){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tH(e,t){let r=ei("pendingRedirect",t.config.apiKey,t.name),n=er(e._redirectPersistence);if(!await n._isAvailable())return!1;let i=await n._get(r)==="true";return await n._remove(r),i}function tz(e,t){tj.set(e._key(),t)}async function t$(e,t,r=!1){if((0,i.rh)(e.app))return Promise.reject(m(e));let n=e_(e),s=t?er(t):(y(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver),o=new tV(n,s,r),a=await o.execute();return a&&!r&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,t)),a}class tW{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tK(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!tK(e)){let r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(f(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(tq(e))}saveEventToCache(e){this.cachedEventUids.add(tq(e)),this.lastProcessedEventTime=Date.now()}}function tq(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function tK({type:e,error:t}){return"unknown"===e&&t?.code==="auth/no-auth-event"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tJ(e,t={}){return C(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tG=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tX=/^https?/;async function tY(e){if(e.config.emulator)return;let{authorizedDomains:t}=await tJ(e);for(let e of t)try{if(function(e){let t=w(),{protocol:r,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){let i=new URL(e);return""===i.hostname&&""===n?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&i.hostname===n}if(!tX.test(r))return!1;if(tG.test(e))return n===e;let i=e.replace(/\./g,"\\.");return RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}(e))return}catch{}d(e,"unauthorized-domain")}/**
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
 */let tZ=new _(3e4,6e4);function tQ(){let e=tm().___jsl;if(e?.H){for(let t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}}let t0=null,t1=new _(5e3,15e3),t2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},t6=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function t3(e){let t=await (t0=t0||new Promise((t,r)=>{function n(){tQ(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{tQ(),r(f(e,"network-request-failed"))},timeout:tZ.get()})}if(tm().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(tm().gapi?.load)n();else{var i;let t=eT("iframefcb");return tm()[t]=()=>{gapi.load?n():r(f(e,"network-request-failed"))},(i=`${eI.gapiScript}?onload=${t}`,eI.loadJS(i)).catch(e=>r(e))}}).catch(e=>{throw t0=null,e})),r=tm().gapi;return y(r,e,"internal-error"),t.open({where:document.body,url:function(e){let t=e.config;y(t.authDomain,e,"auth-domain-config-required");let r=t.emulator?E(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,n={apiKey:t.apiKey,appName:e.name,v:i.Jn},o=t6.get(e.config.apiHost);o&&(n.eid=o);let a=e._getFrameworks();return a.length&&(n.fw=a.join(",")),`${r}?${(0,s.xO)(n).slice(1)}`}(e),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:t2,dontclear:!0},t=>new Promise(async(r,n)=>{await t.restyle({setHideOnLeave:!1});let i=f(e,"network-request-failed"),s=tm().setTimeout(()=>{n(i)},t1.get());function o(){tm().clearTimeout(s),r(t)}t.ping(o).then(o,()=>{n(i)})}))}/**
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
 */let t4={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class t5{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}let t8=encodeURIComponent("fac");async function t7(e,t,r,n,o,a){y(e.config.authDomain,e,"auth-domain-config-required"),y(e.config.apiKey,e,"invalid-api-key");let l={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:n,v:i.Jn,eventId:o};if(t instanceof eX)for(let[r,n]of(t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",(0,s.xb)(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters())),Object.entries(a||{})))l[r]=n;if(t instanceof eY){let e=t.getScopes().filter(e=>""!==e);e.length>0&&(l.scopes=e.join(","))}for(let t of(e.tenantId&&(l.tid=e.tenantId),Object.keys(l)))void 0===l[t]&&delete l[t];let c=await e._getAppCheckToken(),u=c?`#${t8}=${encodeURIComponent(c)}`:"";return`${function({config:e}){return e.emulator?E(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${(0,s.xO)(l).slice(1)}${u}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let t9="webStorageSupport";class re{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=th,this._completeRedirectFn=t$,this._overrideRedirectResult=tz}async _openPopup(e,t,r,n){var i,o;i=this.eventManagers[e._key()]?.manager,o="_initialize() not called before _openPopup()",i||v(o);let a=await t7(e,t,r,w(),n);return function(e,t,r,n=500,i=600){let o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString(),l="",c={...t4,width:n.toString(),height:i.toString(),top:o,left:a},u=(0,s.z$)().toLowerCase();r&&(l=ec(u)?"_blank":r),ea(u)&&(t=t||"http://localhost",c.scrollbars="yes");let h=Object.entries(c).reduce((e,[t,r])=>`${e}${t}=${r},`,"");if(function(e=(0,s.z$)()){return ep(e)&&!!window.navigator?.standalone}(u)&&"_self"!==l)return function(e,t){let r=document.createElement("a");r.href=e,r.target=t;let n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}(t||"",l),new t5(null);let d=window.open(t||"",l,h);y(d,e,"popup-blocked");try{d.focus()}catch(e){}return new t5(d)}(e,a,tf())}async _openRedirect(e,t,r,n){var i;return await this._originValidation(e),i=await t7(e,t,r,w(),n),tm().location.href=i,new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){var r;let{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(r="If manager is not set, promise should be",n||v(r),n)}let n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){let t=await t3(e),r=new tW(e);return t.register("authEvent",t=>(y(t?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(t.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(t9,{type:t9},r=>{let n=r?.[0]?.[t9];void 0!==n&&t(!!n),d(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=tY(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return em()||el()||ep()}}class rt{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return v("unexpected MultiFactorSessionType")}}}class rr extends rt{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new rr(e)}_finalizeEnroll(e,t,r){return C(e,"POST","/v2/accounts/mfaEnrollment:finalize",A(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}_finalizeSignIn(e,t){return C(e,"POST","/v2/accounts/mfaSignIn:finalize",A(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}class rn{constructor(){}static assertion(e){return rr._fromCredential(e)}}rn.FACTOR_ID="phone";class ri{static assertionForEnrollment(e,t){return rs._fromSecret(e,t)}static assertionForSignIn(e,t){return rs._fromEnrollmentId(e,t)}static async generateSecret(e){var t;y(void 0!==e.user?.auth,"internal-error");let r=await C(t=e.user.auth,"POST","/v2/accounts/mfaEnrollment:start",A(t,{idToken:e.credential,totpEnrollmentInfo:{}}));return ro._fromStartTotpMfaEnrollmentResponse(r,e.user.auth)}}ri.FACTOR_ID="totp";class rs extends rt{constructor(e,t,r){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=r}static _fromSecret(e,t){return new rs(t,void 0,e)}static _fromEnrollmentId(e,t){return new rs(t,e)}async _finalizeEnroll(e,t,r){return y(void 0!==this.secret,e,"argument-error"),C(e,"POST","/v2/accounts/mfaEnrollment:finalize",A(e,{idToken:t,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)}))}async _finalizeSignIn(e,t){y(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");let r={verificationCode:this.otp};return C(e,"POST","/v2/accounts/mfaSignIn:finalize",A(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r}))}}class ro{constructor(e,t,r,n,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=r,this.codeIntervalSeconds=n,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new ro(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){let r=!1;return(ra(e)||ra(t))&&(r=!0),r&&(ra(e)&&(e=this.auth.currentUser?.email||"unknownuser"),ra(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function ra(e){return void 0===e||e?.length===0}var rl="@firebase/auth",rc="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return(this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser)?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e(t?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}let rh=(0,s.Pz)("authIdTokenMaxAge")||300,rd=null,rf=e=>async t=>{let r=t&&await t.getIdTokenResult(),n=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(n&&n>rh)return;let i=r?.token;rd!==i&&(rd=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function rp(e=(0,i.Mq)()){let t=(0,i.qX)(e,"auth");if(t.isInitialized())return t.getImmediate();let r=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){let r=(0,i.qX)(e,"auth");if(r.isInitialized()){let e=r.getImmediate(),n=r.getOptions();if((0,s.vZ)(n,t??{}))return e;d(e,"already-initialized")}return r.initialize({options:t})}(e,{popupRedirectResolver:re,persistence:[tA,ta,th]}),n=(0,s.Pz)("authTokenSyncURL");if(n&&"boolean"==typeof isSecureContext&&isSecureContext){let e=new URL(n,location.origin);if(location.origin===e.origin){var o,a;let t=rf(e.toString());o=()=>t(r.currentUser),(0,s.m9)(r).beforeAuthStateChanged(t,o),a=e=>t(e),(0,s.m9)(r).onIdTokenChanged(a,void 0,void 0)}}let l=(0,s.q4)("auth");return l&&function(e,t,r){let n=e_(e);y(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");let i=eN(t),{host:o,port:a}=function(e){let t=eN(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!r)return{host:"",port:null};let n=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){let e=i[1];return{host:e,port:eL(n.substr(e.length+1))}}{let[e,t]=n.split(":");return{host:e,port:eL(t)}}}(t),l=null===a?"":`:${a}`,c={url:`${i}//${o}${l}/`},u=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:!1})});if(!n._canInitEmulator){y(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),y((0,s.vZ)(c,n.config.emulator)&&(0,s.vZ)(u,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=c,n.emulatorConfig=u,n.settings.appVerificationDisabledForTesting=!0,(0,s.Xx)(o)?((0,s.Uo)(`${i}//${o}${l}`),(0,s.dp)("Auth",!0)):function(){function e(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}(r,`http://${l}`),r}eI={loadJS:e=>new Promise((t,r)=>{let n=document.createElement("script");n.setAttribute("src",e),n.onload=t,n.onerror=e=>{let t=f("internal-error");t.customData=e,r(t)},n.type="text/javascript",n.charset="UTF-8",(document.getElementsByTagName("head")?.[0]??document).appendChild(n)}),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="},n="Browser",(0,i.Xd)(new a.wA("auth",(e,{options:t})=>{let r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});let l=new eb(r,i,s,{apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:eg(n)});return function(e,t){let r=t?.persistence||[],n=(Array.isArray(r)?r:[r]).map(er);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,t?.popupRedirectResolver)}(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),(0,i.Xd)(new a.wA("auth-internal",e=>new ru(e_(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KN)(rl,rc,/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(n)),(0,i.KN)(rl,rc,"esm2020")}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(9090)}),_N_E=e.O()}]);