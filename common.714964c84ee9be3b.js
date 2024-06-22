"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2076],{2469:(y,f,i)=>{i.d(f,{c:()=>r});var u=i(3649),d=i(1086),a=i(8607);const r=(n,o)=>{let t,e;const g=(c,p,w)=>{if(typeof document>"u")return;const M=document.elementFromPoint(c,p);M&&o(M)&&!M.disabled?M!==t&&(s(),l(M,w)):s()},l=(c,p)=>{t=c,e||(e=t);const w=t;(0,u.w)(()=>w.classList.add("ion-activated")),p()},s=(c=!1)=>{if(!t)return;const p=t;(0,u.w)(()=>p.classList.remove("ion-activated")),c&&e!==t&&t.click(),t=void 0};return(0,a.createGesture)({el:n,gestureName:"buttonActiveDrag",threshold:0,onStart:c=>g(c.currentX,c.currentY,d.a),onMove:c=>g(c.currentX,c.currentY,d.b),onEnd:()=>{s(!0),(0,d.h)(),e=void 0}})}},8438:(y,f,i)=>{i.d(f,{g:()=>d});var u=i(8476);const d=()=>{if(void 0!==u.w)return u.w.Capacitor}},5572:(y,f,i)=>{i.d(f,{c:()=>u,i:()=>d});const u=(a,r,n)=>"function"==typeof n?n(a,r):"string"==typeof n?a[n]===r[n]:Array.isArray(r)?r.includes(a):a===r,d=(a,r,n)=>void 0!==a&&(Array.isArray(a)?a.some(o=>u(o,r,n)):u(a,r,n))},3351:(y,f,i)=>{i.d(f,{g:()=>u});const u=(o,t,e,g,l)=>a(o[1],t[1],e[1],g[1],l).map(s=>d(o[0],t[0],e[0],g[0],s)),d=(o,t,e,g,l)=>l*(3*t*Math.pow(l-1,2)+l*(-3*e*l+3*e+g*l))-o*Math.pow(l-1,3),a=(o,t,e,g,l)=>n((g-=l)-3*(e-=l)+3*(t-=l)-(o-=l),3*e-6*t+3*o,3*t-3*o,o).filter(c=>c>=0&&c<=1),n=(o,t,e,g)=>{if(0===o)return((o,t,e)=>{const g=t*t-4*o*e;return g<0?[]:[(-t+Math.sqrt(g))/(2*o),(-t-Math.sqrt(g))/(2*o)]})(t,e,g);const l=(3*(e/=o)-(t/=o)*t)/3,s=(2*t*t*t-9*t*e+27*(g/=o))/27;if(0===l)return[Math.pow(-s,1/3)];if(0===s)return[Math.sqrt(-l),-Math.sqrt(-l)];const c=Math.pow(s/2,2)+Math.pow(l/3,3);if(0===c)return[Math.pow(s/2,.5)-t/3];if(c>0)return[Math.pow(-s/2+Math.sqrt(c),1/3)-Math.pow(s/2+Math.sqrt(c),1/3)-t/3];const p=Math.sqrt(Math.pow(-l/3,3)),w=Math.acos(-s/(2*Math.sqrt(Math.pow(-l/3,3)))),M=2*Math.pow(p,1/3);return[M*Math.cos(w/3)-t/3,M*Math.cos((w+2*Math.PI)/3)-t/3,M*Math.cos((w+4*Math.PI)/3)-t/3]}},5083:(y,f,i)=>{i.d(f,{i:()=>u});const u=d=>d&&""!==d.dir?"rtl"===d.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},3126:(y,f,i)=>{i.r(f),i.d(f,{startFocusVisible:()=>r});const u="ion-focused",a=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=n=>{let o=[],t=!0;const e=n?n.shadowRoot:document,g=n||document.body,l=E=>{o.forEach(_=>_.classList.remove(u)),E.forEach(_=>_.classList.add(u)),o=E},s=()=>{t=!1,l([])},c=E=>{t=a.includes(E.key),t||l([])},p=E=>{if(t&&void 0!==E.composedPath){const _=E.composedPath().filter(h=>!!h.classList&&h.classList.contains("ion-focusable"));l(_)}},w=()=>{e.activeElement===g&&l([])};return e.addEventListener("keydown",c),e.addEventListener("focusin",p),e.addEventListener("focusout",w),e.addEventListener("touchstart",s,{passive:!0}),e.addEventListener("mousedown",s),{destroy:()=>{e.removeEventListener("keydown",c),e.removeEventListener("focusin",p),e.removeEventListener("focusout",w),e.removeEventListener("touchstart",s),e.removeEventListener("mousedown",s)},setFocus:l}}},1086:(y,f,i)=>{i.d(f,{I:()=>d,a:()=>t,b:()=>e,c:()=>o,d:()=>l,h:()=>g});var u=i(8438),d=function(s){return s.Heavy="HEAVY",s.Medium="MEDIUM",s.Light="LIGHT",s}(d||{});const r={getEngine(){const s=(0,u.g)();if(null!=s&&s.isPluginAvailable("Haptics"))return s.Plugins.Haptics},available(){if(!this.getEngine())return!1;const c=(0,u.g)();return"web"!==(null==c?void 0:c.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},impact(s){const c=this.getEngine();c&&c.impact({style:s.style})},notification(s){const c=this.getEngine();c&&c.notification({type:s.type})},selection(){this.impact({style:d.Light})},selectionStart(){const s=this.getEngine();s&&s.selectionStart()},selectionChanged(){const s=this.getEngine();s&&s.selectionChanged()},selectionEnd(){const s=this.getEngine();s&&s.selectionEnd()}},n=()=>r.available(),o=()=>{n()&&r.selection()},t=()=>{n()&&r.selectionStart()},e=()=>{n()&&r.selectionChanged()},g=()=>{n()&&r.selectionEnd()},l=s=>{n()&&r.impact(s)}},909:(y,f,i)=>{i.d(f,{I:()=>o,a:()=>l,b:()=>n,c:()=>p,d:()=>M,f:()=>s,g:()=>g,i:()=>e,p:()=>w,r:()=>E,s:()=>c});var u=i(467),d=i(4920),a=i(4929);const n="ion-content",o=".ion-content-scroll-host",t=`${n}, ${o}`,e=_=>"ION-CONTENT"===_.tagName,g=function(){var _=(0,u.A)(function*(h){return e(h)?(yield new Promise(m=>(0,d.c)(h,m)),h.getScrollElement()):h});return function(m){return _.apply(this,arguments)}}(),l=_=>_.querySelector(o)||_.querySelector(t),s=_=>_.closest(t),c=(_,h)=>e(_)?_.scrollToTop(h):Promise.resolve(_.scrollTo({top:0,left:0,behavior:h>0?"smooth":"auto"})),p=(_,h,m,O)=>e(_)?_.scrollByPoint(h,m,O):Promise.resolve(_.scrollBy({top:m,left:h,behavior:O>0?"smooth":"auto"})),w=_=>(0,a.b)(_,n),M=_=>{if(e(_)){const m=_.scrollY;return _.scrollY=!1,m}return _.style.setProperty("overflow","hidden"),!0},E=(_,h)=>{e(_)?_.scrollY=h:_.style.removeProperty("overflow")}},3992:(y,f,i)=>{i.d(f,{a:()=>u,b:()=>p,c:()=>t,d:()=>w,e:()=>D,f:()=>o,g:()=>M,h:()=>a,i:()=>d,j:()=>v,k:()=>P,l:()=>e,m:()=>s,n:()=>E,o:()=>l,p:()=>n,q:()=>r,r:()=>C,s:()=>x,t:()=>c,u:()=>m,v:()=>O,w:()=>g,x:()=>_,y:()=>h});const u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='64'/><path d='M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM248 315.85l-51.79-51.79a2 2 0 00-3.39 1.69 64.11 64.11 0 0053.49 53.49 2 2 0 001.69-3.39zM264 196.15L315.87 248a2 2 0 003.4-1.69 64.13 64.13 0 00-53.55-53.55 2 2 0 00-1.72 3.39z'/><path d='M491 273.36a32.2 32.2 0 00-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 00-71.82 11.79 4 4 0 00-1.56 6.63l47.24 47.24a4 4 0 003.82 1.05 96 96 0 01116 116 4 4 0 001.05 3.81l67.95 68a4 4 0 005.4.24 343.81 343.81 0 0067.24-77.4zM256 352a96 96 0 01-93.3-118.63 4 4 0 00-1.05-3.81l-66.84-66.87a4 4 0 00-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0072.64-11.55 4 4 0 001.61-6.64l-47.47-47.46a4 4 0 00-3.81-1.05A96 96 0 01256 352z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",P="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",x="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},243:(y,f,i)=>{i.d(f,{c:()=>r,g:()=>n});var u=i(8476),d=i(4920),a=i(4929);const r=(t,e,g)=>{let l,s;if(void 0!==u.w&&"MutationObserver"in u.w){const M=Array.isArray(e)?e:[e];l=new MutationObserver(E=>{for(const _ of E)for(const h of _.addedNodes)if(h.nodeType===Node.ELEMENT_NODE&&M.includes(h.slot))return g(),void(0,d.r)(()=>c(h))}),l.observe(t,{childList:!0,subtree:!0})}const c=M=>{var E;s&&(s.disconnect(),s=void 0),s=new MutationObserver(_=>{g();for(const h of _)for(const m of h.removedNodes)m.nodeType===Node.ELEMENT_NODE&&m.slot===e&&w()}),s.observe(null!==(E=M.parentElement)&&void 0!==E?E:M,{subtree:!0,childList:!0})},w=()=>{s&&(s.disconnect(),s=void 0)};return{destroy:()=>{l&&(l.disconnect(),l=void 0),w()}}},n=(t,e,g)=>{const l=null==t?0:t.toString().length,s=o(l,e);if(void 0===g)return s;try{return g(l,e)}catch(c){return(0,a.a)("Exception in provided `counterFormatter`.",c),s}},o=(t,e)=>`${t} / ${e}`},1622:(y,f,i)=>{i.r(f),i.d(f,{KEYBOARD_DID_CLOSE:()=>n,KEYBOARD_DID_OPEN:()=>r,copyVisualViewport:()=>C,keyboardDidClose:()=>_,keyboardDidOpen:()=>M,keyboardDidResize:()=>E,resetKeyboardAssist:()=>l,setKeyboardClose:()=>w,setKeyboardOpen:()=>p,startKeyboardAssist:()=>s,trackViewportChanges:()=>O});var u=i(4379);i(8438),i(8476);const r="ionKeyboardDidShow",n="ionKeyboardDidHide";let t={},e={},g=!1;const l=()=>{t={},e={},g=!1},s=v=>{if(u.K.getEngine())c(v);else{if(!v.visualViewport)return;e=C(v.visualViewport),v.visualViewport.onresize=()=>{O(v),M()||E(v)?p(v):_(v)&&w(v)}}},c=v=>{v.addEventListener("keyboardDidShow",P=>p(v,P)),v.addEventListener("keyboardDidHide",()=>w(v))},p=(v,P)=>{h(v,P),g=!0},w=v=>{m(v),g=!1},M=()=>!g&&t.width===e.width&&(t.height-e.height)*e.scale>150,E=v=>g&&!_(v),_=v=>g&&e.height===v.innerHeight,h=(v,P)=>{const D=new CustomEvent(r,{detail:{keyboardHeight:P?P.keyboardHeight:v.innerHeight-e.height}});v.dispatchEvent(D)},m=v=>{const P=new CustomEvent(n);v.dispatchEvent(P)},O=v=>{t=Object.assign({},e),e=C(v.visualViewport)},C=v=>({width:Math.round(v.width),height:Math.round(v.height),offsetTop:v.offsetTop,offsetLeft:v.offsetLeft,pageTop:v.pageTop,pageLeft:v.pageLeft,scale:v.scale})},4379:(y,f,i)=>{i.d(f,{K:()=>r,a:()=>a});var u=i(8438),d=function(n){return n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE",n}(d||{}),a=function(n){return n.Body="body",n.Ionic="ionic",n.Native="native",n.None="none",n}(a||{});const r={getEngine(){const n=(0,u.g)();if(null!=n&&n.isPluginAvailable("Keyboard"))return n.Plugins.Keyboard},getResizeMode(){const n=this.getEngine();return null!=n&&n.getResizeMode?n.getResizeMode().catch(o=>{if(o.code!==d.Unimplemented)throw o}):Promise.resolve(void 0)}}},4731:(y,f,i)=>{i.d(f,{c:()=>o});var u=i(467),d=i(8476),a=i(4379);const r=t=>{if(void 0===d.d||t===a.a.None||void 0===t)return null;const e=d.d.querySelector("ion-app");return null!=e?e:d.d.body},n=t=>{const e=r(t);return null===e?0:e.clientHeight},o=function(){var t=(0,u.A)(function*(e){let g,l,s,c;const p=function(){var h=(0,u.A)(function*(){const m=yield a.K.getResizeMode(),O=void 0===m?void 0:m.mode;g=()=>{void 0===c&&(c=n(O)),s=!0,w(s,O)},l=()=>{s=!1,w(s,O)},null==d.w||d.w.addEventListener("keyboardWillShow",g),null==d.w||d.w.addEventListener("keyboardWillHide",l)});return function(){return h.apply(this,arguments)}}(),w=(h,m)=>{e&&e(h,M(m))},M=h=>{if(0===c||c===n(h))return;const m=r(h);return null!==m?new Promise(O=>{const v=new ResizeObserver(()=>{m.clientHeight===c&&(v.disconnect(),O())});v.observe(m)}):void 0};return yield p(),{init:p,destroy:()=>{null==d.w||d.w.removeEventListener("keyboardWillShow",g),null==d.w||d.w.removeEventListener("keyboardWillHide",l),g=l=void 0},isKeyboardVisible:()=>s}});return function(g){return t.apply(this,arguments)}}()},7838:(y,f,i)=>{i.d(f,{c:()=>d});var u=i(467);const d=()=>{let a;return{lock:function(){var n=(0,u.A)(function*(){const o=a;let t;return a=new Promise(e=>t=e),void 0!==o&&(yield o),t});return function(){return n.apply(this,arguments)}}()}}},9001:(y,f,i)=>{i.d(f,{c:()=>a});var u=i(8476),d=i(4920);const a=(r,n,o)=>{let t;const e=()=>!(void 0===n()||void 0!==r.label||null===o()),l=()=>{const c=n();if(void 0===c)return;if(!e())return void c.style.removeProperty("width");const p=o().scrollWidth;if(0===p&&null===c.offsetParent&&void 0!==u.w&&"IntersectionObserver"in u.w){if(void 0!==t)return;const w=t=new IntersectionObserver(M=>{1===M[0].intersectionRatio&&(l(),w.disconnect(),t=void 0)},{threshold:.01,root:r});w.observe(c)}else c.style.setProperty("width",.75*p+"px")};return{calculateNotchWidth:()=>{e()&&(0,d.r)(()=>{l()})},destroy:()=>{t&&(t.disconnect(),t=void 0)}}}},7895:(y,f,i)=>{i.d(f,{S:()=>d});const d={bubbles:{dur:1e3,circles:9,fn:(a,r,n)=>{const o=a*r/n-a+"ms",t=2*Math.PI*r/n;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":o}}}},circles:{dur:1e3,circles:8,fn:(a,r,n)=>{const o=r/n,t=a*o-a+"ms",e=2*Math.PI*o;return{r:5,style:{top:32*Math.sin(e)+"%",left:32*Math.cos(e)+"%","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(a,r)=>({r:6,style:{left:32-32*r+"%","animation-delay":-110*r+"ms"}})},lines:{dur:1e3,lines:8,fn:(a,r,n)=>({y1:14,y2:26,style:{transform:`rotate(${360/n*r+(r<n/2?180:-180)}deg)`,"animation-delay":a*r/n-a+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(a,r,n)=>({y1:12,y2:20,style:{transform:`rotate(${360/n*r+(r<n/2?180:-180)}deg)`,"animation-delay":a*r/n-a+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(a,r,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":a*r/n-a+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(a,r,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":a*r/n-a+"ms"}})}}},7166:(y,f,i)=>{i.r(f),i.d(f,{createSwipeBackGesture:()=>n});var u=i(4920),d=i(5083),a=i(8607);i(1970);const n=(o,t,e,g,l)=>{const s=o.ownerDocument.defaultView;let c=(0,d.i)(o);const w=m=>c?-m.deltaX:m.deltaX;return(0,a.createGesture)({el:o,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:m=>(c=(0,d.i)(o),(m=>{const{startX:C}=m;return c?C>=s.innerWidth-50:C<=50})(m)&&t()),onStart:e,onMove:m=>{const C=w(m)/s.innerWidth;g(C)},onEnd:m=>{const O=w(m),C=s.innerWidth,v=O/C,P=(m=>c?-m.velocityX:m.velocityX)(m),D=P>=0&&(P>.2||O>C/2),L=(D?1-v:v)*C;let b=0;if(L>5){const A=L/Math.abs(P);b=Math.min(A,540)}l(D,v<=0?.01:(0,u.j)(0,v,.9999),b)}})}},2935:(y,f,i)=>{i.d(f,{w:()=>u});const u=(r,n,o)=>{if(typeof MutationObserver>"u")return;const t=new MutationObserver(e=>{o(d(e,n))});return t.observe(r,{childList:!0,subtree:!0}),t},d=(r,n)=>{let o;return r.forEach(t=>{for(let e=0;e<t.addedNodes.length;e++)o=a(t.addedNodes[e],n)||o}),o},a=(r,n)=>{if(1!==r.nodeType)return;const o=r;return(o.tagName===n.toUpperCase()?[o]:Array.from(o.querySelectorAll(n))).find(e=>e.value===o.value)}},4890:(y,f,i)=>{i.d(f,{o:()=>d});var u=i(3953);let d=(()=>{var a;class r{constructor(){}ngOnInit(){}}return(a=r).\u0275fac=function(o){return new(o||a)},a.\u0275cmp=u.VBU({type:a,selectors:[["app-components"]],decls:14,vars:0,consts:[[1,"content"],[1,"loader"]],template:function(o,t){1&o&&(u.j41(0,"div",0)(1,"div",1),u.nrm(2,"div")(3,"div")(4,"div")(5,"div")(6,"div")(7,"div")(8,"div")(9,"div")(10,"div")(11,"div")(12,"div")(13,"div"),u.k0s()())},styles:['.content[_ngcontent-%COMP%]{--height: 100%;--margin: 0;--display: flex;--align-items: center;--justify-content: center;--background: #f3f3f3}.loader[_ngcontent-%COMP%]{display:inline-block;width:24px;height:24px;position:relative}.loader[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{transform-origin:12px 12px;animation:_ngcontent-%COMP%_loader 1.2s linear infinite}.loader[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after{content:" ";display:block;position:absolute;top:0;left:11px;width:2px;height:6px;border-radius:20%;background:#636767}.loader[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1){transform:rotate(0);animation-delay:-1.1s}.loader[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){transform:rotate(30deg);animation-delay:-1s}.loader[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3){transform:rotate(60deg);animation-delay:-.9s}.loader[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4){transform:rotate(90deg);animation-delay:-.8s}.loader[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5){transform:rotate(120deg);animation-delay:-.7s}.loader[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6){transform:rotate(150deg);animation-delay:-.6s}.loader[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7){transform:rotate(180deg);animation-delay:-.5s}.loader[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8){transform:rotate(210deg);animation-delay:-.4s}.loader[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(9){transform:rotate(240deg);animation-delay:-.3s}.loader[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(10){transform:rotate(270deg);animation-delay:-.2s}.loader[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(11){transform:rotate(300deg);animation-delay:-.1s}.loader[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(12){transform:rotate(330deg);animation-delay:0s}@keyframes _ngcontent-%COMP%_loader{0%{opacity:1}to{opacity:0}}']}),r})()},5241:(y,f,i)=>{i.d(f,{V:()=>r});var u=i(177),d=i(5150),a=i(3953);let r=(()=>{var n;class o{}return(n=o).\u0275fac=function(e){return new(e||n)},n.\u0275mod=a.$C({type:n}),n.\u0275inj=a.G2t({imports:[u.MD,d.bv]}),o})()},7669:(y,f,i)=>{i.d(f,{c:()=>u});const u={production:!0,register:"https://polizaregistroqr.onrender.com",login:"https://polizaquiqr.onrender.com",qrGnerator:"https://polizaqrgenerator.onrender.com",forgot:"https://polizaforgotqr.onrender.com"}}}]);