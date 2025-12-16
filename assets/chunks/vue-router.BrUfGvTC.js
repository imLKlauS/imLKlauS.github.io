var kt=Object.defineProperty,At=Object.defineProperties;var Pt=Object.getOwnPropertyDescriptors;var Je=Object.getOwnPropertySymbols;var It=Object.prototype.hasOwnProperty,Dt=Object.prototype.propertyIsEnumerable;var je=(e,t,n)=>t in e?kt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,we=(e,t)=>{for(var n in t||(t={}))It.call(t,n)&&je(e,n,t[n]);if(Je)for(var n of Je(t))Dt.call(t,n)&&je(e,n,t[n]);return e},We=(e,t)=>At(e,Pt(t));import{O as H,I as ct,G as Nt,A as j,K as ut,C as le,F as se,Y as Ot,Z as Te,H as Vt,y as qt,S as Mt,P as Bt,_ as f}from"../framework.CyQERZzy.js";import"./@vueuse/motion.C0680yyY.js";const ke=(e,t,n)=>typeof e=="function"?e(t,n):e,Q=Symbol("loaders"),$=Symbol("loaderEntries"),pt=Symbol(),K=Symbol(),z=Symbol(),he=Symbol(),oe=Symbol(),me=Symbol(),dt=Symbol();function Ge(e){return e&&e[pt]}let mt;function Ke(){return mt||[]}function X(e){mt=e&&e.length?e:null}const Qt=Object.assign;const Y=typeof document!="undefined";function ht(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Jt(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&ht(e.default)}const C=Object.assign;function xe(e,t){const n={};for(const a in t){const r=t[a];n[a]=B(r)?r.map(e):e(r)}return n}const ce=()=>{},B=Array.isArray;function Ze(e,t){const n={};for(const a in e)n[a]=a in t?t[a]:e[a];return n}const gt=/#/g,jt=/&/g,Wt=/\//g,Gt=/=/g,Kt=/\?/g,ft=/\+/g,Zt=/%5B/g,zt=/%5D/g,_t=/%5E/g,Ut=/%60/g,bt=/%7B/g,Ht=/%7C/g,vt=/%7D/g,Ft=/%20/g;function Ne(e){return e==null?"":encodeURI(""+e).replace(Ht,"|").replace(Zt,"[").replace(zt,"]")}function Yt(e){return Ne(e).replace(bt,"{").replace(vt,"}").replace(_t,"^")}function Ae(e){return Ne(e).replace(ft,"%2B").replace(Ft,"+").replace(gt,"%23").replace(jt,"%26").replace(Ut,"`").replace(bt,"{").replace(vt,"}").replace(_t,"^")}function Xt(e){return Ae(e).replace(Gt,"%3D")}function $t(e){return Ne(e).replace(gt,"%23").replace(Kt,"%3F")}function en(e){return $t(e).replace(Wt,"%2F")}function ue(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch(t){}return""+e}const tn=/\/$/,nn=e=>e.replace(tn,"");function Le(e,t,n="/"){let a,r={},p="",d="";const _=t.indexOf("#");let o=t.indexOf("?");return o=_>=0&&o>_?-1:o,o>=0&&(a=t.slice(0,o),p=t.slice(o,_>0?_:t.length),r=e(p.slice(1))),_>=0&&(a=a||t.slice(0,_),d=t.slice(_,t.length)),a=ln(a!=null?a:t,n),{fullPath:a+p+d,path:a,query:r,hash:ue(d)}}function an(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ze(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function rn(e,t,n){const a=t.matched.length-1,r=n.matched.length-1;return a>-1&&a===r&&ee(t.matched[a],n.matched[r])&&yt(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function ee(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function yt(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!on(e[n],t[n]))return!1;return!0}function on(e,t){return B(e)?Ue(e,t):B(t)?Ue(t,e):e===t}function Ue(e,t){return B(t)?e.length===t.length&&e.every((n,a)=>n===t[a]):e.length===1&&e[0]===t}function ln(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),a=e.split("/"),r=a[a.length-1];(r===".."||r===".")&&a.push("");let p=n.length-1,d,_;for(d=0;d<a.length;d++)if(_=a[d],_!==".")if(_==="..")p>1&&p--;else break;return n.slice(0,p).join("/")+"/"+a.slice(d).join("/")}const G={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Pe=(function(e){return e.pop="pop",e.push="push",e})({}),Re=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function sn(e){if(!e)if(Y){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),nn(e)}const cn=/^[^#]+#/;function un(e,t){return e.replace(cn,"#")+t}function pn(e,t){const n=document.documentElement.getBoundingClientRect(),a=e.getBoundingClientRect();return{behavior:t.behavior,left:a.left-n.left-(t.left||0),top:a.top-n.top-(t.top||0)}}const ge=()=>({left:window.scrollX,top:window.scrollY});function dn(e){let t;if("el"in e){const n=e.el,a=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?a?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=pn(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function He(e,t){return(history.state?history.state.position-t:-1)+e}const Ie=new Map;function mn(e,t){Ie.set(e,t)}function hn(e){const t=Ie.get(e);return Ie.delete(e),t}function gn(e){return typeof e=="string"||e&&typeof e=="object"}function St(e){return typeof e=="string"||typeof e=="symbol"}let A=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const Et=Symbol("");A.MATCHER_NOT_FOUND+"",A.NAVIGATION_GUARD_REDIRECT+"",A.NAVIGATION_ABORTED+"",A.NAVIGATION_CANCELLED+"",A.NAVIGATION_DUPLICATED+"";function te(e,t){return C(new Error,{type:e,[Et]:!0},t)}function J(e,t){return e instanceof Error&&Et in e&&(t==null||!!(e.type&t))}const fn=["params","query","hash"];function _n(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of fn)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function bn(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<n.length;++a){const r=n[a].replace(ft," "),p=r.indexOf("="),d=ue(p<0?r:r.slice(0,p)),_=p<0?null:ue(r.slice(p+1));if(d in t){let o=t[d];B(o)||(o=t[d]=[o]),o.push(_)}else t[d]=_}return t}function Fe(e){let t="";for(let n in e){const a=e[n];if(n=Xt(n),a==null){a!==void 0&&(t+=(t.length?"&":"")+n);continue}(B(a)?a.map(r=>r&&Ae(r)):[a&&Ae(a)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function vn(e){const t={};for(const n in e){const a=e[n];a!==void 0&&(t[n]=B(a)?a.map(r=>r==null?null:""+r):a==null?a:""+a)}return t}const yn=Symbol(""),Ye=Symbol(""),fe=Symbol(""),Oe=Symbol(""),De=Symbol("");function ie(){let e=[];function t(a){return e.push(a),()=>{const r=e.indexOf(a);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Z(e,t,n,a,r,p=d=>d()){const d=a&&(a.enterCallbacks[r]=a.enterCallbacks[r]||[]);return()=>new Promise((_,o)=>{const u=s=>{s===!1?o(te(A.NAVIGATION_ABORTED,{from:n,to:t})):s instanceof Error?o(s):gn(s)?o(te(A.NAVIGATION_GUARD_REDIRECT,{from:t,to:s})):(d&&a.enterCallbacks[r]===d&&typeof s=="function"&&d.push(s),_())},m=p(()=>e.call(a&&a.instances[r],t,n,u));let i=Promise.resolve(m);e.length<3&&(i=i.then(u)),i.catch(s=>o(s))})}function Ce(e,t,n,a,r=p=>p()){const p=[];for(const d of e)for(const _ in d.components){let o=d.components[_];if(!(t!=="beforeRouteEnter"&&!d.instances[_]))if(ht(o)){const u=(o.__vccOpts||o)[t];u&&p.push(Z(u,n,a,d,_,r))}else{let u=o();p.push(()=>u.then(m=>{if(!m)throw new Error(`Couldn't resolve component "${_}" at "${d.path}"`);const i=Jt(m)?m.default:m;d.mods[_]=m,d.components[_]=i;const s=(i.__vccOpts||i)[t];return s&&Z(s,n,a,d,_,r)()}))}}return p}function Sn(e,t){const n=[],a=[],r=[],p=Math.max(t.matched.length,e.matched.length);for(let d=0;d<p;d++){const _=t.matched[d];_&&(e.matched.find(u=>ee(u,_))?a.push(_):n.push(_));const o=e.matched[d];o&&(t.matched.find(u=>ee(u,o))||r.push(o))}return[n,a,r]}let En=()=>location.protocol+"//"+location.host;function wt(e,t){const{pathname:n,search:a,hash:r}=t,p=e.indexOf("#");if(p>-1){let d=r.includes(e.slice(p))?e.slice(p).length:1,_=r.slice(d);return _[0]!=="/"&&(_="/"+_),ze(_,"")}return ze(n,e)+a+r}function wn(e,t,n,a){let r=[],p=[],d=null;const _=({state:s})=>{const c=wt(e,location),h=n.value,v=t.value;let T=0;if(s){if(n.value=c,t.value=s,d&&d===h){d=null;return}T=v?s.position-v.position:0}else a(c);r.forEach(x=>{x(n.value,h,{delta:T,type:Pe.pop,direction:T?T>0?Re.forward:Re.back:Re.unknown})})};function o(){d=n.value}function u(s){r.push(s);const c=()=>{const h=r.indexOf(s);h>-1&&r.splice(h,1)};return p.push(c),c}function m(){if(document.visibilityState==="hidden"){const{history:s}=window;if(!s.state)return;s.replaceState(C({},s.state,{scroll:ge()}),"")}}function i(){for(const s of p)s();p=[],window.removeEventListener("popstate",_),window.removeEventListener("pagehide",m),document.removeEventListener("visibilitychange",m)}return window.addEventListener("popstate",_),window.addEventListener("pagehide",m),document.addEventListener("visibilitychange",m),{pauseListeners:o,listen:u,destroy:i}}function Xe(e,t,n,a=!1,r=!1){return{back:e,current:t,forward:n,replaced:a,position:window.history.length,scroll:r?ge():null}}function Tn(e){const{history:t,location:n}=window,a={value:wt(e,n)},r={value:t.state};r.value||p(a.value,{back:null,current:a.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function p(o,u,m){const i=e.indexOf("#"),s=i>-1?(n.host&&document.querySelector("base")?e:e.slice(i))+o:En()+e+o;try{t[m?"replaceState":"pushState"](u,"",s),r.value=u}catch(c){console.error(c),n[m?"replace":"assign"](s)}}function d(o,u){p(o,C({},t.state,Xe(r.value.back,o,r.value.forward,!0),u,{position:r.value.position}),!0),a.value=o}function _(o,u){const m=C({},r.value,t.state,{forward:o,scroll:ge()});p(m.current,m,!0),p(o,C({},Xe(a.value,o,null),{position:m.position+1},u),!1),a.value=o}return{location:a,state:r,push:_,replace:d}}function ta(e){e=sn(e);const t=Tn(e),n=wn(e,t.state,t.location,t.replace);function a(p,d=!0){d||n.pauseListeners(),history.go(p)}const r=C({location:"",base:e,go:a,createHref:un.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}let U=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var D=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(D||{});const xn={type:U.Static,value:""},Ln=/[a-zA-Z0-9_]/;function Rn(e){if(!e)return[[]];if(e==="/")return[[xn]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(c){throw new Error(`ERR (${n})/"${u}": ${c}`)}let n=D.Static,a=n;const r=[];let p;function d(){p&&r.push(p),p=[]}let _=0,o,u="",m="";function i(){u&&(n===D.Static?p.push({type:U.Static,value:u}):n===D.Param||n===D.ParamRegExp||n===D.ParamRegExpEnd?(p.length>1&&(o==="*"||o==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),p.push({type:U.Param,value:u,regexp:m,repeatable:o==="*"||o==="+",optional:o==="*"||o==="?"})):t("Invalid state to consume buffer"),u="")}function s(){u+=o}for(;_<e.length;){if(o=e[_++],o==="\\"&&n!==D.ParamRegExp){a=n,n=D.EscapeNext;continue}switch(n){case D.Static:o==="/"?(u&&i(),d()):o===":"?(i(),n=D.Param):s();break;case D.EscapeNext:s(),n=a;break;case D.Param:o==="("?n=D.ParamRegExp:Ln.test(o)?s():(i(),n=D.Static,o!=="*"&&o!=="?"&&o!=="+"&&_--);break;case D.ParamRegExp:o===")"?m[m.length-1]=="\\"?m=m.slice(0,-1)+o:n=D.ParamRegExpEnd:m+=o;break;case D.ParamRegExpEnd:i(),n=D.Static,o!=="*"&&o!=="?"&&o!=="+"&&_--,m="";break;default:t("Unknown state");break}}return n===D.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),i(),d(),r}const $e="[^/]+?",Cn={sensitive:!1,strict:!1,start:!0,end:!0};var V=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(V||{});const kn=/[.+*?^${}()[\]/\\]/g;function An(e,t){const n=C({},Cn,t),a=[];let r=n.start?"^":"";const p=[];for(const u of e){const m=u.length?[]:[V.Root];n.strict&&!u.length&&(r+="/");for(let i=0;i<u.length;i++){const s=u[i];let c=V.Segment+(n.sensitive?V.BonusCaseSensitive:0);if(s.type===U.Static)i||(r+="/"),r+=s.value.replace(kn,"\\$&"),c+=V.Static;else if(s.type===U.Param){const{value:h,repeatable:v,optional:T,regexp:x}=s;p.push({name:h,repeatable:v,optional:T});const y=x||$e;if(y!==$e){c+=V.BonusCustomRegExp;try{`${y}`}catch(k){throw new Error(`Invalid custom RegExp for param "${h}" (${y}): `+k.message)}}let E=v?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;i||(E=T&&u.length<2?`(?:/${E})`:"/"+E),T&&(E+="?"),r+=E,c+=V.Dynamic,T&&(c+=V.BonusOptional),v&&(c+=V.BonusRepeatable),y===".*"&&(c+=V.BonusWildcard)}m.push(c)}a.push(m)}if(n.strict&&n.end){const u=a.length-1;a[u][a[u].length-1]+=V.BonusStrict}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const d=new RegExp(r,n.sensitive?"":"i");function _(u){const m=u.match(d),i={};if(!m)return null;for(let s=1;s<m.length;s++){const c=m[s]||"",h=p[s-1];i[h.name]=c&&h.repeatable?c.split("/"):c}return i}function o(u){let m="",i=!1;for(const s of e){(!i||!m.endsWith("/"))&&(m+="/"),i=!1;for(const c of s)if(c.type===U.Static)m+=c.value;else if(c.type===U.Param){const{value:h,repeatable:v,optional:T}=c,x=h in u?u[h]:"";if(B(x)&&!v)throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);const y=B(x)?x.join("/"):x;if(!y)if(T)s.length<2&&(m.endsWith("/")?m=m.slice(0,-1):i=!0);else throw new Error(`Missing required param "${h}"`);m+=y}}return m||"/"}return{re:d,score:a,keys:p,parse:_,stringify:o}}function Pn(e,t){let n=0;for(;n<e.length&&n<t.length;){const a=t[n]-e[n];if(a)return a;n++}return e.length<t.length?e.length===1&&e[0]===V.Static+V.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===V.Static+V.Segment?1:-1:0}function Tt(e,t){let n=0;const a=e.score,r=t.score;for(;n<a.length&&n<r.length;){const p=Pn(a[n],r[n]);if(p)return p;n++}if(Math.abs(r.length-a.length)===1){if(et(a))return 1;if(et(r))return-1}return r.length-a.length}function et(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const In={strict:!1,end:!0,sensitive:!1};function Dn(e,t,n){const a=An(Rn(e.path),n),r=C(a,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Nn(e,t){const n=[],a=new Map;t=Ze(In,t);function r(i){return a.get(i)}function p(i,s,c){const h=!c,v=nt(i);v.aliasOf=c&&c.record;const T=Ze(t,i),x=[v];if("alias"in i){const k=typeof i.alias=="string"?[i.alias]:i.alias;for(const N of k)x.push(nt(C({},v,{components:c?c.record.components:v.components,path:N,aliasOf:c?c.record:v})))}let y,E;for(const k of x){const{path:N}=k;if(s&&N[0]!=="/"){const q=s.record.path,O=q[q.length-1]==="/"?"":"/";k.path=s.record.path+(N&&O+N)}if(y=Dn(k,s,T),c?c.alias.push(y):(E=E||y,E!==y&&E.alias.push(y),h&&i.name&&!at(y)&&d(i.name)),xt(y)&&o(y),v.children){const q=v.children;for(let O=0;O<q.length;O++)p(q[O],y,c&&c.children[O])}c=c||y}return E?()=>{d(E)}:ce}function d(i){if(St(i)){const s=a.get(i);s&&(a.delete(i),n.splice(n.indexOf(s),1),s.children.forEach(d),s.alias.forEach(d))}else{const s=n.indexOf(i);s>-1&&(n.splice(s,1),i.record.name&&a.delete(i.record.name),i.children.forEach(d),i.alias.forEach(d))}}function _(){return n}function o(i){const s=qn(i,n);n.splice(s,0,i),i.record.name&&!at(i)&&a.set(i.record.name,i)}function u(i,s){let c,h={},v,T;if("name"in i&&i.name){if(c=a.get(i.name),!c)throw te(A.MATCHER_NOT_FOUND,{location:i});T=c.record.name,h=C(tt(s.params,c.keys.filter(E=>!E.optional).concat(c.parent?c.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),i.params&&tt(i.params,c.keys.map(E=>E.name))),v=c.stringify(h)}else if(i.path!=null)v=i.path,c=n.find(E=>E.re.test(v)),c&&(h=c.parse(v),T=c.record.name);else{if(c=s.name?a.get(s.name):n.find(E=>E.re.test(s.path)),!c)throw te(A.MATCHER_NOT_FOUND,{location:i,currentLocation:s});T=c.record.name,h=C({},s.params,i.params),v=c.stringify(h)}const x=[];let y=c;for(;y;)x.unshift(y.record),y=y.parent;return{name:T,path:v,params:h,matched:x,meta:Vn(x)}}e.forEach(i=>p(i));function m(){n.length=0,a.clear()}return{addRoute:p,resolve:u,removeRoute:d,clearRoutes:m,getRoutes:_,getRecordMatcher:r}}function tt(e,t){const n={};for(const a of t)a in e&&(n[a]=e[a]);return n}function nt(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:On(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function On(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const a in e.components)t[a]=typeof n=="object"?n[a]:n;return t}function at(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Vn(e){return e.reduce((t,n)=>C(t,n.meta),{})}function qn(e,t){let n=0,a=t.length;for(;n!==a;){const p=n+a>>1;Tt(e,t[p])<0?a=p:n=p+1}const r=Mn(e);return r&&(a=t.lastIndexOf(r,a-1)),a}function Mn(e){let t=e;for(;t=t.parent;)if(xt(t)&&Tt(e,t)===0)return t}function xt({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function rt(e){const t=H(fe),n=H(Oe),a=j(()=>{const o=se(e.to);return t.resolve(o)}),r=j(()=>{const{matched:o}=a.value,{length:u}=o,m=o[u-1],i=n.matched;if(!m||!i.length)return-1;const s=i.findIndex(ee.bind(null,m));if(s>-1)return s;const c=it(o[u-2]);return u>1&&it(m)===c&&i[i.length-1].path!==c?i.findIndex(ee.bind(null,o[u-2])):s}),p=j(()=>r.value>-1&&Wn(n.params,a.value.params)),d=j(()=>r.value>-1&&r.value===n.matched.length-1&&yt(n.params,a.value.params));function _(o={}){if(jn(o)){const u=t[se(e.replace)?"replace":"push"](se(e.to)).catch(ce);return e.viewTransition&&typeof document!="undefined"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:a,href:j(()=>a.value.href),isActive:p,isExactActive:d,navigate:_}}function Bn(e){return e.length===1?e[0]:e}const Qn=ct({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:rt,setup(e,{slots:t}){const n=Nt(rt(e)),{options:a}=H(fe),r=j(()=>({[ot(e.activeClass,a.linkActiveClass,"router-link-active")]:n.isActive,[ot(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const p=t.default&&Bn(t.default(n));return e.custom?p:ut("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},p)}}}),Jn=Qn;function jn(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Wn(e,t){for(const n in t){const a=t[n],r=e[n];if(typeof a=="string"){if(a!==r)return!1}else if(!B(r)||r.length!==a.length||a.some((p,d)=>p!==r[d]))return!1}return!0}function it(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ot=(e,t,n)=>e!=null?e:t!=null?t:n,Gn=ct({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const a=H(De),r=j(()=>e.route||a.value),p=H(Ye,0),d=j(()=>{let u=se(p);const{matched:m}=r.value;let i;for(;(i=m[u])&&!i.components;)u++;return u}),_=j(()=>r.value.matched[d.value]);Te(Ye,j(()=>d.value+1)),Te(yn,_),Te(De,r);const o=Vt();return qt(()=>[o.value,_.value,e.name],([u,m,i],[s,c,h])=>{m&&(m.instances[i]=u,c&&c!==m&&u&&u===s&&(m.leaveGuards.size||(m.leaveGuards=c.leaveGuards),m.updateGuards.size||(m.updateGuards=c.updateGuards))),u&&m&&(!c||!ee(m,c)||!s)&&(m.enterCallbacks[i]||[]).forEach(v=>v(u))},{flush:"post"}),()=>{const u=r.value,m=e.name,i=_.value,s=i&&i.components[m];if(!s)return lt(n.default,{Component:s,route:u});const c=i.props[m],h=c?c===!0?u.params:typeof c=="function"?c(u):c:null,T=ut(s,C({},h,t,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(i.instances[m]=null)},ref:o}));return lt(n.default,{Component:T,route:u})||T}}});function lt(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Kn=Gn;function na(e){const t=Nn(e.routes,e),n=e.parseQuery||bn,a=e.stringifyQuery||Fe,r=e.history,p=ie(),d=ie(),_=ie(),o=le(G);let u=G;Y&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const m=xe.bind(null,l=>""+l),i=xe.bind(null,en),s=xe.bind(null,ue);function c(l,b){let g,S;return St(l)?(g=t.getRecordMatcher(l),S=b):S=l,t.addRoute(S,g)}function h(l){const b=t.getRecordMatcher(l);b&&t.removeRoute(b)}function v(){return t.getRoutes().map(l=>l.record)}function T(l){return!!t.getRecordMatcher(l)}function x(l,b){if(b=C({},b||o.value),typeof l=="string"){const w=Le(n,l,b.path),I=t.resolve({path:w.path},b),re=r.createHref(w.fullPath);return C(w,I,{params:s(I.params),hash:ue(w.hash),redirectedFrom:void 0,href:re})}let g;if(l.path!=null)g=C({},l,{path:Le(n,l.path,b.path).path});else{const w=C({},l.params);for(const I in w)w[I]==null&&delete w[I];g=C({},l,{params:i(w)}),b.params=i(b.params)}const S=t.resolve(g,b),R=l.hash||"";S.params=m(s(S.params));const P=an(a,C({},l,{hash:Yt(R),path:S.path})),L=r.createHref(P);return C({fullPath:P,hash:R,query:a===Fe?vn(l.query):l.query||{}},S,{redirectedFrom:void 0,href:L})}function y(l){return typeof l=="string"?Le(n,l,o.value.path):C({},l)}function E(l,b){if(u!==l)return te(A.NAVIGATION_CANCELLED,{from:b,to:l})}function k(l){return O(l)}function N(l){return k(C(y(l),{replace:!0}))}function q(l,b){const g=l.matched[l.matched.length-1];if(g&&g.redirect){const{redirect:S}=g;let R=typeof S=="function"?S(l,b):S;return typeof R=="string"&&(R=R.includes("?")||R.includes("#")?R=y(R):{path:R},R.params={}),C({query:l.query,hash:l.hash,params:R.path!=null?{}:l.params},R)}}function O(l,b){const g=u=x(l),S=o.value,R=l.state,P=l.force,L=l.replace===!0,w=q(g,S);if(w)return O(C(y(w),{state:typeof w=="object"?C({},R,w.state):R,force:P,replace:L}),b||g);const I=g;I.redirectedFrom=b;let re;return!P&&rn(a,S,g)&&(re=te(A.NAVIGATION_DUPLICATED,{to:I,from:S}),Qe(S,S,!0,!1)),(re?Promise.resolve(re):Ve(I,S)).catch(M=>J(M)?J(M,A.NAVIGATION_GUARD_REDIRECT)?M:ye(M):ve(M,I,S)).then(M=>{if(M){if(J(M,A.NAVIGATION_GUARD_REDIRECT))return O(C({replace:L},y(M.to),{state:typeof M.to=="object"?C({},R,M.to.state):R,force:P}),b||I)}else M=Me(I,S,!0,L,R);return qe(I,S,M),M})}function W(l,b){const g=E(l,b);return g?Promise.reject(g):Promise.resolve()}function _e(l){const b=de.values().next().value;return b&&typeof b.runWithContext=="function"?b.runWithContext(l):l()}function Ve(l,b){let g;const[S,R,P]=Sn(l,b);g=Ce(S.reverse(),"beforeRouteLeave",l,b);for(const w of S)w.leaveGuards.forEach(I=>{g.push(Z(I,l,b))});const L=W.bind(null,l,b);return g.push(L),F(g).then(()=>{g=[];for(const w of p.list())g.push(Z(w,l,b));return g.push(L),F(g)}).then(()=>{g=Ce(R,"beforeRouteUpdate",l,b);for(const w of R)w.updateGuards.forEach(I=>{g.push(Z(I,l,b))});return g.push(L),F(g)}).then(()=>{g=[];for(const w of P)if(w.beforeEnter)if(B(w.beforeEnter))for(const I of w.beforeEnter)g.push(Z(I,l,b));else g.push(Z(w.beforeEnter,l,b));return g.push(L),F(g)}).then(()=>(l.matched.forEach(w=>w.enterCallbacks={}),g=Ce(P,"beforeRouteEnter",l,b,_e),g.push(L),F(g))).then(()=>{g=[];for(const w of d.list())g.push(Z(w,l,b));return g.push(L),F(g)}).catch(w=>J(w,A.NAVIGATION_CANCELLED)?w:Promise.reject(w))}function qe(l,b,g){_.list().forEach(S=>_e(()=>S(l,b,g)))}function Me(l,b,g,S,R){const P=E(l,b);if(P)return P;const L=b===G,w=Y?history.state:{};g&&(S||L?r.replace(l.fullPath,C({scroll:L&&w&&w.scroll},R)):r.push(l.fullPath,R)),o.value=l,Qe(l,b,g,L),ye()}let ne;function Rt(){ne||(ne=r.listen((l,b,g)=>{if(!ae.listening)return;const S=x(l),R=q(S,ae.currentRoute.value);if(R){O(C(R,{replace:!0,force:!0}),S).catch(ce);return}u=S;const P=o.value;Y&&mn(He(P.fullPath,g.delta),ge()),Ve(S,P).catch(L=>J(L,A.NAVIGATION_ABORTED|A.NAVIGATION_CANCELLED)?L:J(L,A.NAVIGATION_GUARD_REDIRECT)?(O(C(y(L.to),{force:!0}),S).then(w=>{J(w,A.NAVIGATION_ABORTED|A.NAVIGATION_DUPLICATED)&&!g.delta&&g.type===Pe.pop&&r.go(-1,!1)}).catch(ce),Promise.reject()):(g.delta&&r.go(-g.delta,!1),ve(L,S,P))).then(L=>{L=L||Me(S,P,!1),L&&(g.delta&&!J(L,A.NAVIGATION_CANCELLED)?r.go(-g.delta,!1):g.type===Pe.pop&&J(L,A.NAVIGATION_ABORTED|A.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),qe(S,P,L)}).catch(ce)}))}let be=ie(),Be=ie(),pe;function ve(l,b,g){ye(l);const S=Be.list();return S.length?S.forEach(R=>R(l,b,g)):console.error(l),Promise.reject(l)}function Ct(){return pe&&o.value!==G?Promise.resolve():new Promise((l,b)=>{be.add([l,b])})}function ye(l){return pe||(pe=!l,Rt(),be.list().forEach(([b,g])=>l?g(l):b()),be.reset()),l}function Qe(l,b,g,S){const{scrollBehavior:R}=e;if(!Y||!R)return Promise.resolve();const P=!g&&hn(He(l.fullPath,0))||(S||!g)&&history.state&&history.state.scroll||null;return Mt().then(()=>R(l,b,P)).then(L=>L&&dn(L)).catch(L=>ve(L,l,b))}const Se=l=>r.go(l);let Ee;const de=new Set,ae={currentRoute:o,listening:!0,addRoute:c,removeRoute:h,clearRoutes:t.clearRoutes,hasRoute:T,getRoutes:v,resolve:x,options:e,push:k,replace:N,go:Se,back:()=>Se(-1),forward:()=>Se(1),beforeEach:p.add,beforeResolve:d.add,afterEach:_.add,onError:Be.add,isReady:Ct,install(l){l.component("RouterLink",Jn),l.component("RouterView",Kn),l.config.globalProperties.$router=ae,Object.defineProperty(l.config.globalProperties,"$route",{enumerable:!0,get:()=>se(o)}),Y&&!Ee&&o.value===G&&(Ee=!0,k(r.location).catch(S=>{}));const b={};for(const S in G)Object.defineProperty(b,S,{get:()=>o.value[S],enumerable:!0});l.provide(fe,ae),l.provide(Oe,Ot(b)),l.provide(De,o);const g=l.unmount;de.add(l),l.unmount=function(){de.delete(l),de.size<1&&(u=G,ne&&ne(),ne=null,o.value=G,Ee=!1,pe=!1),g()}}};function F(l){return l.reduce((b,g)=>b.then(()=>_e(g)),Promise.resolve())}return ae}function Zn(){return H(fe)}function zn(e){return H(Oe)}const Un=Symbol();function Hn({router:e,app:t,effect:n,isSSR:a,errors:r=[],selectNavigationResult:p=d=>d[0].value}){if(e[$]!=null)return()=>{};e[$]=new WeakMap,e[he]=t,e[dt]=!!a;const d=n.run(()=>le(!1));t.provide(Un,d);const _=e.beforeEach(i=>{var c;e[K]&&((c=e[K].meta[oe])==null||c.abort()),e[K]=i,i.meta[Q]=new Set,i.meta[oe]=new AbortController,i.meta[me]=[];const s=[];for(const h of i.matched)if(!h.meta[Q]){h.meta[Q]=new Set(h.meta.loaders||[]);for(const v in h.components){const T=h.components[v],x=(Fn(T)?T():Promise.resolve(T)).then(y=>{if(typeof y!="function"){for(const E in y){const k=y[E];Ge(k)&&h.meta[Q].add(k)}if(Array.isArray(y.__loaders))for(const E of y.__loaders)Ge(E)&&h.meta[Q].add(E)}});s.push(x)}}return Promise.all(s).then(()=>{for(const h of i.matched)for(const v of h.meta[Q])i.meta[Q].add(v)})}),o=e.beforeResolve((i,s)=>{const c=Array.from(i.meta[Q]);return X([]),d.value=!0,Promise.all(c.map(h=>{const{server:v,lazy:T,errors:x}=h._.options;if(!v&&a)return;const y=n.run(()=>t.runWithContext(()=>h._.load(i,e,s)));return!a&&ke(T,i,s)?void 0:y.catch(E=>{if(!x)throw E;if(x===!0){if(Array.isArray(r)?r.some(k=>E instanceof k):r(E))return}else if(Array.isArray(x)?x.some(k=>E instanceof k):x(E))return;throw E})})).then(()=>{if(i.meta[me].length)return p(i.meta[me])}).catch(h=>h instanceof Lt?h.value:Promise.reject(h)).finally(()=>{X([]),d.value=!1})}),u=e.afterEach((i,s,c)=>{var h;if(c){if((h=i.meta[oe])==null||h.abort(c),J(c,16))for(const v of i.meta[Q])v._.getEntry(e).resetPending()}else for(const v of i.meta[Q]){const{commit:T,lazy:x}=v._.options;if(T==="after-load"){const y=v._.getEntry(e);y&&(!ke(x,i,s)||!y.isLoading.value)&&y.commit(i)}}e[K]===i&&(e[K]=null)}),m=e.onError((i,s)=>{var c;(c=s.meta[oe])==null||c.abort(i),e[K]===s&&(e[K]=null)});return()=>{delete e[$],delete e[he],_(),o(),u(),m()}}function Fn(e){return typeof e=="function"&&!("displayName"in e)&&!("props"in e)&&!("emits"in e)&&!("__vccOpts"in e)}var Lt=class{constructor(e){this.value=e}};function aa(e,t){const n=Bt(!0),a=Hn(Qt({app:e,effect:n},t)),{unmount:r}=e;e.unmount=()=>{n.stop(),a(),r.call(e)}}const ra=[{path:"/",name:"/",component:()=>f(()=>import("../index.CVUTxstp.js"),[]),meta:{layout:"home",frontmatter:{time_warning:!1}}},{path:"/:path(.*)",name:"/[...path]",component:()=>f(()=>import("../_...path_.DmUvsRG8.js"),[]),meta:{layout:404,frontmatter:{time_warning:!1}}},{path:"/404",name:"/404",component:()=>f(()=>import("../404.BxpbbdIX.js"),[]),meta:{frontmatter:{time_warning:!1,layout:404,toc:!1,comment:!1,nav:!1,sidebar:!1,date:"2023-04-07T11:36:55.000Z",updated:"2023-04-07T11:36:55.000Z",wordCount:"20",readingTime:1},excerpt:"",layout:404}},{path:"/about",children:[{path:"",name:"/about/",component:()=>f(()=>import("../index.DHlkMyqs.js"),[]),meta:{frontmatter:{time_warning:!1,title:"关于我",icon:"i-ri-heart-line",date:"2021-09-26 00:59:47",cover:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/fsn_rider.png",toc:!1,aside:!1,updated:"2021-09-26 00:59:47",wordCount:"174",readingTime:2},excerpt:""}},{path:"site",name:"/about/site",component:()=>f(()=>import("../site.DPOvCteX.js"),[]),meta:{frontmatter:{time_warning:!1,title:"关于此站",icon:"i-ri-information-line",date:"2021-09-26 01:02:47",cover:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/fgo_agravain_artoria_pendragon_(all).png",toc:!1,aside:!1,updated:"2021-09-26 01:02:47",wordCount:"67",readingTime:1},excerpt:""}}],meta:{frontmatter:{time_warning:!1}}},{path:"/archives",children:[{path:"",name:"/archives/",component:()=>f(()=>import("../index.i4H8uE7u.js"),[]),meta:{frontmatter:{time_warning:!1,layout:"archives",nav:!1,comment:!1,toc:!1,aside:!1,date:"2023-04-07T11:36:55.000Z",updated:"2023-04-07T11:36:55.000Z",wordCount:"10",readingTime:1},excerpt:"",layout:"archives"}}],meta:{frontmatter:{time_warning:!1}}},{path:"/categories",children:[{path:"",name:"/categories/",component:()=>f(()=>import("../index.Dccqx_-N.js"),[]),meta:{frontmatter:{time_warning:!1,layout:"categories",nav:!1,toc:!1,icon:"i-ri-folder-2-line",comment:!1,aside:!1,date:"2023-04-07T11:36:55.000Z",updated:"2023-04-07T11:36:55.000Z",wordCount:"27",readingTime:1},excerpt:"",layout:"categories"}}],meta:{frontmatter:{time_warning:!1}}},{path:"/comment",children:[{path:"",name:"/comment/",component:()=>f(()=>import("../index.C78CCtny.js"),[]),meta:{frontmatter:{time_warning:!1,title:"留言板",icon:"i-ri-clipboard-line",nav:!1,toc:!1,aside:!1,date:"2025-12-05T18:21:59.678Z",updated:"2025-12-05T18:21:59.678Z",wordCount:"147",readingTime:1},excerpt:""}}],meta:{frontmatter:{time_warning:!1}}},{path:"/links",children:[{path:"",name:"/links/",component:()=>f(()=>import("../index.Bac-L8cN.js"),[]),meta:{frontmatter:{time_warning:!1,title:"学习、参考与借鉴",keywords:"链接",icon:"i-ri-book-shelf-line",description:"imklaus的学习拓展",random:!0,nav:!1,toc:!1,aside:!1,date:"2025-03-09T14:09:10.747Z",updated:"2025-03-09T14:09:10.747Z",wordCount:"107",readingTime:1},excerpt:""}}],meta:{frontmatter:{time_warning:!1}}},{path:"/music",children:[{path:"",name:"/music/",component:()=>f(()=>import("../index.DCHyjAf3.js"),[]),meta:{frontmatter:{time_warning:!1,title:"Listen to music",icon:"i-ri-album-line",date:"2023-4-16 11:44:51",aplayer:!0,end:!1,updated:"2023-4-16 11:44:51",wordCount:"134",readingTime:2},excerpt:""}}],meta:{frontmatter:{time_warning:!1}}},{path:"/page",children:[{path:":page",name:"/page/[page]",component:()=>f(()=>import("../_page_.B4oqm8z4.js"),[]),meta:{frontmatter:{time_warning:!1}}}],meta:{frontmatter:{time_warning:!1},layout:"home"}},{path:"/posts",children:[{path:"",name:"/posts/",component:()=>f(()=>import("../index.BRFwRxTi.js"),[]),meta:{frontmatter:{time_warning:!1},layout:"posts"}},{path:"Cache_Project",name:"/posts/Cache_Project",component:()=>f(()=>import("../Cache_Project.C9hSgJzV.js"),[]),meta:{frontmatter:{time_warning:!1,cover:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/freecompress-Snipaste_2025-03-10_23-57-15.png",title:"缓存+分布式锁在 Java 项目中的应用",date:"2023-4-24 19:32:34",categories:["Java","微系统与第三方框架"],tags:["Redis","Spring Cache","Spring Session","Redisson"],outline:"deep",excerpt_type:"html",end:!1,updated:"2023-4-24 19:32:34",wordCount:"18.2k",readingTime:93},layout:"post",excerpt:`<p>参考视频：<a href="https://www.bilibili.com/video/BV1np4y1C7Yf/" target="_blank" rel="noreferrer">雷神谷粒商城项目</a></p>
`}},{path:"Concurrent_Programming-Basic+Synchronous",name:"/posts/Concurrent_Programming-Basic+Synchronous",component:()=>f(()=>import("../Concurrent_Programming-Basic_Synchronous.BscqCNJl.js"),[]),meta:{frontmatter:{time_warning:!1,cover:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/Round_Knight.png",title:"并发编程整理版 - 基础/同步",top:299,author:"imklaus",tags:["Thread","ReentrantLock","Synchronized"],categories:["Java","并发编程"],date:"2023-8-24 18:49:36",outline:"deep",postTitleClass:"text-#566390",excerpt_type:"html",end:!1,updated:"2023-8-24 18:49:36",wordCount:"17.8k",readingTime:90},layout:"post",excerpt:`<p>参考视频：<a href="https://www.bilibili.com/video/BV16J411h7Rd" target="_blank" rel="noreferrer">满神JUC并发编程全套教程</a></p>
<p>笔记的整体结构依据视频编写，并随着学习的深入补充了很多知识</p>
`}},{path:"Concurrent_Programming-JUC",name:"/posts/Concurrent_Programming-JUC",component:()=>f(()=>import("../Concurrent_Programming-JUC.ecikqN_5.js"),[]),meta:{frontmatter:{time_warning:!1,cover:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/freecompress-Sakura.png",title:"并发编程整理版 - JUC",top:304,author:"imklaus",tags:["ConcurrentHashMap","CopyOnWriteArrayList","SkipListMap","ConcurrentLinkedQueue"],categories:["Java","并发编程"],date:"2023-8-24 19:13:57",outline:"deep",postTitleClass:"text-#90496e",excerpt_type:"html",end:!1,updated:"2023-8-24 19:13:57",wordCount:"16k",readingTime:90},layout:"post",excerpt:`<p>参考视频：<a href="https://www.bilibili.com/video/BV16J411h7Rd" target="_blank" rel="noreferrer">满神JUC并发编程全套教程</a></p>
<p>笔记的整体结构依据视频编写，并随着学习的深入补充了很多知识</p>
`}},{path:"Concurrent_Programming-Lock_Free",name:"/posts/Concurrent_Programming-Lock_Free",component:()=>f(()=>import("../Concurrent_Programming-Lock_Free.BzWSNvKs.js"),[]),meta:{frontmatter:{time_warning:!1,cover:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/Saber_Alter.png",title:"并发编程整理版 - 无锁",top:301,author:"imklaus",tags:["CAS","Atomic","volatile","LongAdder","Unsafe","final","ThreadLocal"],categories:["Java","并发编程"],date:"2023-8-24 18:49:36",outline:"deep",postTitleClass:"text-#3a2a51",excerpt_type:"html",end:!1,updated:"2023-8-24 18:49:36",wordCount:"14.1k",readingTime:73},layout:"post",excerpt:`<p>参考视频：<a href="https://www.bilibili.com/video/BV16J411h7Rd" target="_blank" rel="noreferrer">满神JUC并发编程全套教程</a></p>
<p>笔记的整体结构依据视频编写，并随着学习的深入补充了很多知识</p>
`}},{path:"Concurrent_Programming-Memory",name:"/posts/Concurrent_Programming-Memory",component:()=>f(()=>import("../Concurrent_Programming-Memory.Dk47S_dR.js"),[]),meta:{frontmatter:{time_warning:!1,cover:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/wallhaven-49j8xn_1920x1080.png",title:"并发编程整理版 - 内存",top:300,author:"imklaus",tags:["Synchronized","JMM","volatile","终止模式","Balking"],categories:["Java","并发编程"],date:"2023-11-22 23:57:58",outline:"deep",postTitleClass:"text-#b8935f",excerpt_type:"html",end:!1,updated:"2023-11-22 23:57:58",wordCount:"7.3k",readingTime:32},layout:"post",excerpt:`<p>参考视频：<a href="https://www.bilibili.com/video/BV16J411h7Rd" target="_blank" rel="noreferrer">满神JUC并发编程全套教程</a></p>
<p>笔记的整体结构依据视频编写，并随着学习的深入补充了很多知识</p>
`}},{path:"Concurrent_Programming-Synchronizer",name:"/posts/Concurrent_Programming-Synchronizer",component:()=>f(()=>import("../Concurrent_Programming-Synchronizer.CzJmsplb.js"),[]),meta:{frontmatter:{time_warning:!1,cover:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/77989621_p0_master1200.jpg",title:"并发编程整理版 - 同步器",top:303,author:"imklaus",tags:["AQS","ReentrantLock","ReentrantReadWriteLock","CountDownLatch","CyclicBarrier","Semaphore","Exchanger"],categories:["Java","并发编程"],date:"2023-8-24 19:11:16",outline:"deep",postTitleClass:"text-#e77a67",excerpt_type:"html",end:!1,updated:"2023-8-24 19:11:16",wordCount:"17.8k",readingTime:96},layout:"post",excerpt:`<p>参考视频：<a href="https://www.bilibili.com/video/BV16J411h7Rd" target="_blank" rel="noreferrer">满神JUC并发编程全套教程</a></p>
<p>笔记的整体结构依据视频编写，并随着学习的深入补充了很多知识</p>
`}},{path:"Concurrent_Programming-threadPool",name:"/posts/Concurrent_Programming-threadPool",component:()=>f(()=>import("../Concurrent_Programming-threadPool.D1LuRMfJ.js"),[]),meta:{frontmatter:{time_warning:!1,cover:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/Hassan_King.png",title:"并发编程整理版 - 线程池",top:302,author:"imklaus",tags:["线程池","BlockingQueue","ThreadPoolExecutor","Executors","ScheduledThreadPoolExecutor","ForkJoin","享元模式"],categories:["Java","并发编程"],date:"2023-8-24 19:03:22",outline:"deep",postTitleClass:"text-#588ad3",excerpt_type:"html",end:!1,updated:"2023-8-24 19:03:22",wordCount:"22.9k",readingTime:117},layout:"post",excerpt:`<p>参考视频：<a href="https://www.bilibili.com/video/BV16J411h7Rd" target="_blank" rel="noreferrer">满神JUC并发编程全套教程</a></p>
<p>笔记的整体结构依据视频编写，并随着学习的深入补充了很多知识</p>
`}},{path:"Design_Patterns-Chain",name:"/posts/Design_Patterns-Chain",component:()=>f(()=>import("../Design_Patterns-Chain.4FHB4Ze7.js"),[]),meta:{frontmatter:{time_warning:!1,title:"设计模式之抽象责任链模式 - Chain",author:"imklaus",tags:["Spring Boot","策略模式"],categories:["Java","设计模式"],date:"2023-9-2 00:46:45",outline:"deep",excerpt_type:"html",end:!1,updated:"2023-9-2 00:46:45",wordCount:"3.6k",readingTime:17},layout:"post",excerpt:`<h2 id="责任链模式" tabindex="-1">责任链模式 <a class="header-anchor" href="#责任链模式" aria-label="Permalink to &quot;责任链模式&quot;">&ZeroWidthSpace;</a></h2>
<h3 id="_1-什么是责任链" tabindex="-1">1. 什么是责任链 <a class="header-anchor" href="#_1-什么是责任链" aria-label="Permalink to &quot;1. 什么是责任链&quot;">&ZeroWidthSpace;</a></h3>
<p>责任链设计模式是一种行为型设计模式，其主要目的是解耦请求发送者和请求接收者，让多个对象都有机会处理请求，从而避免请求发送者和接收者之间的紧耦合。</p>
`}},{path:"Design_Patterns-Strategy",name:"/posts/Design_Patterns-Strategy",component:()=>f(()=>import("../Design_Patterns-Strategy.dHLyj2FJ.js"),[]),meta:{frontmatter:{time_warning:!1,title:"设计模式之抽象策略模式 - Strategy",author:"imklaus",tags:["Spring Boot","策略模式"],categories:["Java","设计模式"],date:"2023-9-1 19:57:12",outline:"deep",excerpt_type:"html",end:!1,updated:"2023-9-1 19:57:12",wordCount:"5.1k",readingTime:26},layout:"post",excerpt:`<h2 id="策略模式是什么" tabindex="-1">策略模式是什么 <a class="header-anchor" href="#策略模式是什么" aria-label="Permalink to &quot;策略模式是什么&quot;">&ZeroWidthSpace;</a></h2>
<p>策略模式在 GoF 的《设计模式》一书中，是这样定义的：</p>
<blockquote>
<p>Define a family of algorithms, encapsulate each one, and make them interchangeable. Strategy lets the algorithm vary independently from clients that use it.</p>
</blockquote>
<p>策略设计模式（Strategy Pattern）是一种面向对象设计模式，它定义了一系列算法，并将每个算法封装起来，使它们可以相互替换。这种模式使得算法可以独立于使用它们的客户端而变化。</p>
`}},{path:"Docker",name:"/posts/Docker",component:()=>f(()=>import("../Docker.BoVpbAgt.js"),[]),meta:{frontmatter:{time_warning:!1,title:"Docker 从入门到实战",author:"imklaus",top:98,tags:["Docker"],categories:["部署"],date:"2025/12/7 17:34:00",outline:"deep",postTitleClass:"text-#62afe9",excerpt_type:"html",end:!1,updated:"2025/12/7 17:34:00",wordCount:"8.4k",readingTime:43},layout:"post",excerpt:`<figure><img src="https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/self-hosting-overpass-api-us-only-on-docker-a-journey-with-bumps.png" alt="" loading="lazy" decoding="async" class="lazy"></figure>
<p>参考视频：<a href="https://www.bilibili.com/video/BV1LQ4y127n4" target="_blank" rel="noreferrer">黑马SpringCloud微服务技术栈Docker篇</a></p>
<p>笔记的整体结构依据视频编写，并随着学习的深入补充了很多知识</p>
<p><strong>目录指引</strong>：</p>
<nav class="table-of-contents"><ul><li><a href="#_1-初识docker">1. 初识Docker</a><ul><li><a href="#_1-1-什么是docker">1.1 什么是Docker</a><ul><li><a href="#_1-1-1-应用部署的环境问题">1.1.1 应用部署的环境问题</a></li></ul></li></ul></li></ul></nav>
<h2 id="_1-初识docker" tabindex="-1">1. 初识Docker <a class="header-anchor" href="#_1-初识docker" aria-label="Permalink to &quot;1. 初识Docker&quot;">&ZeroWidthSpace;</a></h2>
<hr>
<h3 id="_1-1-什么是docker" tabindex="-1">1.1 什么是Docker <a class="header-anchor" href="#_1-1-什么是docker" aria-label="Permalink to &quot;1.1 什么是Docker&quot;">&ZeroWidthSpace;</a></h3>
<p>微服务虽然具备各种各样的优势，但服务的拆分通用给部署带来了很大的麻烦。</p>
<ul>
<li>分布式系统中，依赖的组件非常多，不同组件之间部署时往往会产生一些冲突。</li>
<li>在数百上千台服务中重复部署，环境不一定一致，会遇到各种问题</li>
</ul>
<h4 id="_1-1-1-应用部署的环境问题" tabindex="-1">1.1.1 应用部署的环境问题 <a class="header-anchor" href="#_1-1-1-应用部署的环境问题" aria-label="Permalink to &quot;1.1.1 应用部署的环境问题&quot;">&ZeroWidthSpace;</a></h4>
<p>大型项目组件较多，运行环境也较为复杂，部署时会碰到一些问题：</p>
<ul>
<li>
<p>依赖关系复杂，容易出现兼容性问题</p>
</li>
<li>
<p>开发、测试、生产环境有差异</p>
</li>
</ul>
`}},{path:"DynamicThreadPool",name:"/posts/DynamicThreadPool",component:()=>f(()=>import("../DynamicThreadPool.kQ2CIF2V.js"),[]),meta:{frontmatter:{time_warning:!1,title:"如何使用线程池不容易出故障",author:"imklaus",tags:["线程池","BlockingQueue","ThreadPoolExecutor"],categories:["Java","微系统与第三方框架"],date:"2024-03-19 19:03:22",outline:"deep",postTitleClass:"text-#FF8EB3",excerpt_type:"html",end:!1,updated:"2024-03-19 19:03:22",wordCount:"2.3k",readingTime:10},layout:"post",excerpt:`<p>你是否在项目中使用线程池遇到过以下问题？</p>
<ul>
<li>创建线程池核心参数不好评估，随着业务流量的波动，极有可能出现生产故障。</li>
<li>不支持优雅关闭，当项目关闭时，大量正在运行的线程池任务被丢弃。</li>
<li>不支持运行时监控，使用过程中业务无响应，不知道是不是线程池引起。</li>
<li>三方框架 RocketMQ、Dubbo 等线程池无法动态修改参数，修改后只能重启应用。</li>
</ul>
`}},{path:"Elasticsearch",name:"/posts/Elasticsearch",component:()=>f(()=>import("../Elasticsearch.67vYl5wN.js"),[]),meta:{frontmatter:{time_warning:!1,title:"Elasticsearch 从入门到实战",author:"imklaus",tags:["Elasticsearch"],categories:["中间件"],date:"2025/12/7 22:51:00",outline:"deep",postTitleClass:"text-#fcd522",excerpt_type:"html",end:!1,updated:"2025/12/7 22:51:00",wordCount:"26.2k",readingTime:144},layout:"post",excerpt:`<figure><img src="https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/v2-37905c52c75915f998824731a75e8d38_720w.jpg" alt="" loading="lazy" decoding="async" class="lazy"></figure>
<p>参考视频：<a href="https://www.bilibili.com/video/BV1LQ4y127n4" target="_blank" rel="noreferrer">黑马SpringCloud微服务技术栈Elasticsearch篇</a></p>
<p>笔记的整体结构依据视频编写，并随着学习的深入补充了很多知识</p>
<p><strong>目录指引</strong>：</p>
<nav class="table-of-contents"><ul><li><a href="#_1-初识elasticsearch">1. 初识elasticsearch</a><ul><li><a href="#_1-1-了解es">1.1 了解ES</a><ul><li><a href="#_1-1-1-elasticsearch的作用">1.1.1 elasticsearch的作用</a></li></ul></li></ul></li></ul></nav>
<h2 id="_1-初识elasticsearch" tabindex="-1">1. 初识elasticsearch <a class="header-anchor" href="#_1-初识elasticsearch" aria-label="Permalink to &quot;1. 初识elasticsearch&quot;">&ZeroWidthSpace;</a></h2>
<h3 id="_1-1-了解es" tabindex="-1">1.1 了解ES <a class="header-anchor" href="#_1-1-了解es" aria-label="Permalink to &quot;1.1 了解ES&quot;">&ZeroWidthSpace;</a></h3>
<h4 id="_1-1-1-elasticsearch的作用" tabindex="-1">1.1.1 elasticsearch的作用 <a class="header-anchor" href="#_1-1-1-elasticsearch的作用" aria-label="Permalink to &quot;1.1.1 elasticsearch的作用&quot;">&ZeroWidthSpace;</a></h4>
<p>elasticsearch是一款非常强大的开源搜索引擎，具备非常多强大功能，可以帮助我们从海量数据中快速找到需要的内容</p>
<p>例如：</p>
<ul>
<li>
<p>在GitHub搜索代码</p>
<figure><img src="https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20210720193623245.png" alt="image-20210720193623245" loading="lazy" decoding="async" class="lazy"></figure>
</li>
</ul>
`}},{path:"EMQ",name:"/posts/EMQ",component:()=>f(()=>import("../EMQ.BDF3oFdd.js"),[]),meta:{frontmatter:{time_warning:!1,title:"物联网亿万级通信一站式解决方案EMQ",author:"imklaus",tags:["EMQ"],categories:["物联网","中间件"],date:"2025/12/13 21:01:00",outline:"deep",postTitleClass:"text-#02b579",excerpt_type:"html",end:!1,updated:"2025/12/13 21:01:00",wordCount:"14.8k",readingTime:80},layout:"post",excerpt:`<figure><img src="https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/2f85f4ebf7f70733a6110af3551300b1.png" alt="" loading="lazy" decoding="async" class="lazy"></figure>
<p><strong>目录指引</strong>：</p>
<nav class="table-of-contents"><ul><li><a href="#_1-mqtt">1. MQTT</a><ul><li><a href="#_1-1-mqtt简介">1.1 MQTT简介</a><ul><li><a href="#_1-1-1-什么是mqtt">1.1.1 什么是MQTT</a></li></ul></li></ul></li></ul></nav>
<h2 id="_1-mqtt" tabindex="-1">1. MQTT <a class="header-anchor" href="#_1-mqtt" aria-label="Permalink to &quot;1. MQTT&quot;">&ZeroWidthSpace;</a></h2>
<h3 id="_1-1-mqtt简介" tabindex="-1">1.1 MQTT简介 <a class="header-anchor" href="#_1-1-mqtt简介" aria-label="Permalink to &quot;1.1 MQTT简介&quot;">&ZeroWidthSpace;</a></h3>
<h4 id="_1-1-1-什么是mqtt" tabindex="-1">1.1.1 什么是MQTT <a class="header-anchor" href="#_1-1-1-什么是mqtt" aria-label="Permalink to &quot;1.1.1 什么是MQTT&quot;">&ZeroWidthSpace;</a></h4>
<p>​	MQTT（Message Queuing Telemetry  Transport，消息队列遥测传输协议），是一种基于发布/订阅（publish/subscribe）模式的&quot;轻量级&quot;通讯协议，该协议构建于TCP/IP协议上，由IBM在1999年发布。MQTT最大优点在于，可以以极少的代码和有限的带宽，为连接远程设备提供实时可靠的消息服务。作为一种低开销、低带宽占用的即时通讯协议，使其在物联网、小型设备、移动应用等方面有较广泛的应用。</p>
`}},{path:"Flash_killing",name:"/posts/Flash_killing",component:()=>f(()=>import("../Flash_killing.BSl4BbTY.js"),[]),meta:{frontmatter:{time_warning:!1,title:"秒杀",author:"imklaus",tags:["Spring Boot","Spring Cloud","token","Redis","Redisson","Schedule","RabbitMQ"],categories:["Java","微系统与第三方框架"],date:"2023-4-27 13:43:29",outline:"deep",excerpt_type:"html",end:!0,updated:"2023-4-27 13:43:29",wordCount:"14.8k",readingTime:80},layout:"post",excerpt:`<h2 id="如何设计一个秒杀系统" tabindex="-1">如何设计一个秒杀系统？ <a class="header-anchor" href="#如何设计一个秒杀系统" aria-label="Permalink to &quot;如何设计一个秒杀系统？&quot;">&ZeroWidthSpace;</a></h2>
<ul>
<li>
<p>高并发下如何设计秒杀系统？这是一个高频面试题。这个问题看似简单，但是里面的水很深，它考查的是高并发场景下，从前端到后端多方面的知识。</p>
</li>
<li>
<p>秒杀一般出现在商城的促销活动中，指定了一定数量（比如：10个）的商品（比如：手机），以极低的价格（比如：0.1元），让大量用户参与活动，但只有极少数用户能够购买成功。这类活动商家绝大部分是不赚钱的，说白了是找个噱头宣传自己。</p>
</li>
<li>
<p>虽说秒杀只是一个促销活动，但对技术要求不低。下面给大家总结一下设计秒杀系统需要注意的9个细节。</p>
</li>
</ul>
<figure><img src="https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20230429153744600.png" alt="image-20230429153744600" loading="lazy" decoding="async" class="lazy"></figure>
`}},{path:"GitHub_Pages_Problem1",name:"/posts/GitHub_Pages_Problem1",component:()=>f(()=>import("../GitHub_Pages_Problem1.D-JgreM3.js"),[]),meta:{frontmatter:{time_warning:!1,title:"Valaxy+github-pages部署问题",date:"2023-4-16 19:40:50",categories:"Valaxy Notes",tags:["valaxy"],outline:"deep",excerpt_type:"html",end:!0,updated:"2023-4-16 19:40:50",wordCount:"353",readingTime:3},layout:"post",excerpt:`<h2 lang="en" id="using-valaxy-github-to-create-a-personal-blog-showing-404-errors" tabindex="-1">Using Valaxy+github to create a personal blog showing 404 errors <a class="header-anchor" href="#using-valaxy-github-to-create-a-personal-blog-showing-404-errors" aria-label="Permalink to &quot;Using Valaxy+github to create a personal blog showing 404 errors{lang=&quot;en&quot;}&quot;">&ZeroWidthSpace;</a></h2>
<div lang="en">
<p>When setting up a personal blog, because the project name is not case sensitive when creating the repository, then deploy access to 404 as shown in the image below：<img src="https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/20190917114816230.png" alt="1"></p>
</div>
<div lang="en">
<p>But if you set the project name in the repository to your github username +.github+.io, you'll be able to access it immediately It must be your github user name, which should be consistent with the github user name. If you do not want to access the address with the suffix.io, you can purchase a personal domain and deploy it in your github project settings</p>
</div>
<h1 lang="zh-CN" id="利用valaxy-github搭建个人博客显示404错误" tabindex="-1">利用Valaxy+github搭建个人博客显示404错误? <a class="header-anchor" href="#利用valaxy-github搭建个人博客显示404错误" aria-label="Permalink to &quot;利用Valaxy+github搭建个人博客显示404错误? {lang=&quot;zh-CN&quot;}&quot;">&ZeroWidthSpace;</a></h1>
<div lang="zh-CN">
<p>在搭建个人博客的时候，因为创建仓库设置项目名时没注意大小写，然后部署访问一直404。像下图这样：<img src="https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/20190917114816230.png" alt="1"></p>
</div>
<div lang="zh-CN">
<p>后来全部改成小写也没有用，翻盘重新安装也没有用。
但是如果把仓库中设置的项目名设置为：你的github的用户名+.github+.io,马上就可以访问啦。一定要是你github的用户名，要和github的用户名保持一致，如果不想要这种后缀为.io的访问地址，后期可以购买一个个人域名部署上去。在你github项目的settings里面设置一下就好了。</p>
</div>
`}},{path:"GitHub_Pages_Problem2",name:"/posts/GitHub_Pages_Problem2",component:()=>f(()=>import("../GitHub_Pages_Problem2.B4J5azJy.js"),[]),meta:{frontmatter:{time_warning:!1,title:"利用valaxy+github+PicGo搭建github图床问题",date:"2023-4-17 01:10:32",categories:"Valaxy Notes",tags:["valaxy"],outline:"deep",excerpt_type:"html",end:!0,updated:"2023-4-17 01:10:32",wordCount:"1.2k",readingTime:7},layout:"post",excerpt:`<div  class="warning custom-block"><p class="custom-block-title">NEW CDN!!!</p>
<blockquote>
<p><code>https://gcore.jsdelivr.net/gh/ {{owner}}/{{repo}}@{{branch}}/{{path}}</code></p>
</blockquote>
</div>
<details  class="details custom-block"><summary>已失效解决方法</summary>
<ol>
<li>利用valaxy+github搭建个人博客图片不显示?</li>
</ol>
<ul>
<li>使用图床传输图片
<ul>
<li>问题：使用牛七、Gitee图床均有问题</li>
</ul>
</li>
</ul>
<ol start="2">
<li>2023使用picgo + github搭建图床（typora）,解决jsdelivr问题</li>
</ol>
</details>
`}},{path:"hello-valaxy",name:"/posts/hello-valaxy",component:()=>f(()=>import("../hello-valaxy.HmbLjdAK.js"),[]),meta:{frontmatter:{time_warning:!1,title:"Hello, Valaxy!",date:"2023-4-16 14:52:05",categories:"Valaxy Notes",tags:["valaxy"],outline:"deep",excerpt_type:"html",end:!0,updated:"2023-4-16 14:52:05",wordCount:"173",readingTime:2},layout:"post",excerpt:`<h2 lang="en" id="what-is-valaxy" tabindex="-1">What is Valaxy? <a class="header-anchor" href="#what-is-valaxy" aria-label="Permalink to &quot;What is Valaxy? {lang=&quot;en&quot;}&quot;">&ZeroWidthSpace;</a></h2>
<div lang="en">
<p>Valaxy aims to be a next generation of static blogging frameworks/generators.</p>
</div>
<h2 lang="zh-CN" id="什么是-valaxy" tabindex="-1">什么是 Valaxy? <a class="header-anchor" href="#什么是-valaxy" aria-label="Permalink to &quot;什么是 Valaxy? {lang=&quot;zh-CN&quot;}&quot;">&ZeroWidthSpace;</a></h2>
<div lang="zh-CN">
<p>Valaxy 的目标是成为新一代的静态博客框架/生成器。</p>
</div>
<p>More info see <a href="https://valaxy.site" target="_blank" rel="noreferrer">valaxy.site</a>.</p>
<div class="language-ts max-h-300px"><button title="Copy code" class="copy"></button><span class="lang">ts</span><pre><code class="language-ts">/**
 * User Config
 * do not use export const, because c12 will set as child property
 */
export default defineValaxyConfig&lt;ThemeConfig&gt;({
  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '云游君的小站',
    },
  },
})
</code></pre>
<button class="code-block-unfold-btn"></button></div><h2 lang="zh-CN" id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置{lang=&quot;zh-CN&quot;}&quot;">&ZeroWidthSpace;</a></h2>
<div lang="zh-CN">
<p>结合https://valaxy.site/ 与 <a href="https://www.yuumi.link/posts/valaxy" target="_blank" rel="noreferrer">超可爱！使用 Valaxy 搭建自己的博客 - -Yuumi's Blog-</a>来看</p>
</div>
<h2 lang="en" id="config" tabindex="-1">Config <a class="header-anchor" href="#config" aria-label="Permalink to &quot;Config{lang=&quot;en&quot;}&quot;">&ZeroWidthSpace;</a></h2>
<div lang="en">
<p>Combinedhttps://valaxy.site/ with <a href="https://www.yuumi.link/posts/valaxy" target="_blank" rel="noreferrer">Super cute! Build your own Blog with Valaxy -Yuumi's Blog-</a></p>
</div>
`}},{path:"HTML-CSS",name:"/posts/HTML-CSS",component:()=>f(()=>import("../HTML-CSS.DYol0wL1.js"),[]),meta:{frontmatter:{time_warning:!1,title:"第一章. 后端之于前端 - HTML 与 CSS",author:"imklaus",tags:["HTML","CSS"],categories:["前端"],date:"2025/11/14 1:46:00",outline:"deep",postTitleClass:"text-#FF8EB3",excerpt_type:"html",end:!0,updated:"2025/11/14 1:46:00",wordCount:"1.9k",readingTime:11},layout:"post",excerpt:`<p>参考视频：<a href="https://www.bilibili.com/video/BV1Tt4y1772f" target="_blank" rel="noreferrer">Java开发所需的前端技术全教程</a></p>
<p>HTML 是什么：即 HyperText Markup language 超文本标记语言，咱们熟知的网页就是用它编写的，HTML 的作用是定义网页的内容和结构。</p>
<ul>
<li>HyperText 是指用超链接的方式组织网页，把网页联系起来</li>
<li>Markup 是指用 <code>&lt;标签&gt;</code> 的方式赋予内容不同的功能和含义</li>
</ul>
<p>CSS 是什么：即 Cascading  Style  Sheets 级联（层叠）样式表，它描述了网页的表现与展示效果</p>
`}},{path:"Idempotence_of_interfaces",name:"/posts/Idempotence_of_interfaces",component:()=>f(()=>import("../Idempotence_of_interfaces.DllyBusi.js"),[]),meta:{frontmatter:{time_warning:!1,title:"接口幂等性",author:"imklaus",tags:["Spring Boot","token","Redis"],categories:["Java","未分类"],date:"2023-4-27 13:43:29",outline:"deep",excerpt_type:"html",end:!1,updated:"2023-4-27 13:43:29",wordCount:"7.1k",readingTime:29},layout:"post",excerpt:`<h2 id="一、幂等性的意义" tabindex="-1">一、幂等性的意义 <a class="header-anchor" href="#一、幂等性的意义" aria-label="Permalink to &quot;一、幂等性的意义&quot;">&ZeroWidthSpace;</a></h2>
<h3 id="_1、什么是幂等性" tabindex="-1"><strong>1、什么是幂等性</strong> <a class="header-anchor" href="#_1、什么是幂等性" aria-label="Permalink to &quot;**1、什么是幂等性**&quot;">&ZeroWidthSpace;</a></h3>
<ul>
<li>看一下维基百科怎么说的：</li>
</ul>
<figure><img src="https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20230429205227388.png" alt="image-20230429205227388" loading="lazy" decoding="async" class="lazy"></figure>
<ul>
<li><strong>接口幂等性就是用户对于同一操作发起的一次请求或者多次请求的结果是一致的</strong>，不会因为多次点击而产生了副作用；比如说支付场景，用户购买了商品支付扣款成功，但是返回结果的时候网络异常，此时钱已经扣了，用户再次点击按钮，此时会进行第二次扣款，返回结果成功，用户查询余额返发现多扣钱了，流水记录也变成了两条......，这就没有保证接口的幂等性。</li>
</ul>
`}},{path:"interview2025_01",name:"/posts/interview2025_01",component:()=>f(()=>import("../interview2025_01.Dstz_-Is.js"),[]),meta:{frontmatter:{time_warning:!1,title:"面试笔录 - 自我介绍与项目面试技巧",cover:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/wallhaven-3z32j3_1920x1080.png",top:130,author:"imklaus",categories:["Java","面试"],date:"2025/12/16 2:00:00",outline:"deep",postTitleClass:"text-#ffa500",excerpt_type:"html",end:!1,updated:"2025/12/16 2:00:00",wordCount:"45.7k",readingTime:270},layout:"post",excerpt:`<p>Java 后端开发2025年自我介绍与项目面试技巧（DeepSeek总结版）</p>
`}},{path:"interview2025_02",name:"/posts/interview2025_02",component:()=>f(()=>import("../interview2025_02.jGqgx16m.js"),[]),meta:{frontmatter:{time_warning:!1,title:"面试笔录 - 面经与场景题",cover:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/girl_grass_city_213102_1920x1080.jpg",top:129,author:"imklaus",categories:["Java","面试"],date:"2025/12/16 2:04:00",outline:"deep",postTitleClass:"text-#ffa500",excerpt_type:"html",end:!1,updated:"2025/12/16 2:04:00",wordCount:"41.2k",readingTime:162},layout:"post",excerpt:`<p>Java 后端开发2025年面经与场景题（DeepSeek总结版）</p>
`}},{path:"Java_Interview_Topics-Basic",name:"/posts/Java_Interview_Topics-Basic",component:()=>f(()=>import("../Java_Interview_Topics-Basic.m2l0GFt9.js"),[]),meta:{frontmatter:{time_warning:!1,cover:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/four_saber_page02.png",title:"Java面试专题 - 基础篇",date:"2023-4-18 14:52:05",categories:["Java","面试"],tags:["ArrayList","LinkedList","HashMap","Hashtable","Singleton"],outline:"deep",excerpt_type:"html",end:!1,updated:"2023-4-18 14:52:05",wordCount:"7.6k",readingTime:44},layout:"post",excerpt:`<p>参考视频：<a href="https://www.bilibili.com/video/BV15b4y117RJ" target="_blank" rel="noreferrer">满神Java面试专题</a></p>
<p>笔记的整体结构依据视频编写，并随着学习的深入补充了很多知识</p>
`}},{path:"Java_Interview_Topics-Concurrent",name:"/posts/Java_Interview_Topics-Concurrent",component:()=>f(()=>import("../Java_Interview_Topics-Concurrent.BSo4B_YO.js"),[]),meta:{frontmatter:{time_warning:!1,cover:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/four_saber_page01.png",title:"Java面试专题 - 并发篇",date:"2023-4-19 14:52:05",categories:["Java","面试"],tags:["线程池","JUC","Lock","Synchronized","volatile","ConcurrentHashMap","ThreadLocal"],outline:"deep",excerpt_type:"html",end:!1,updated:"2023-4-19 14:52:05",wordCount:"8.9k",readingTime:42},layout:"post",excerpt:`<p>参考视频：<a href="https://www.bilibili.com/video/BV15b4y117RJ" target="_blank" rel="noreferrer">满神Java面试专题</a></p>
<p>笔记的整体结构依据视频编写，并随着学习的深入补充了很多知识</p>
`}},{path:"Java_Interview_Topics-Framework",name:"/posts/Java_Interview_Topics-Framework",component:()=>f(()=>import("../Java_Interview_Topics-Framework.D6BFW6f1.js"),[]),meta:{frontmatter:{time_warning:!1,cover:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/black_saber.png",title:"Java面试专题 - 框架篇",date:"2023-4-21 19:52:05",categories:["Java","面试"],tags:["Spring Refresh","Spring Bean","Spring MVC","Spring Boot"],top:123,outline:"deep",excerpt_type:"html",end:!1,updated:"2023-4-21 19:52:05",wordCount:"25.1k",readingTime:134},layout:"post",excerpt:`<p>参考视频：<a href="https://www.bilibili.com/video/BV15b4y117RJ" target="_blank" rel="noreferrer">满神Java面试专题</a></p>
<p>笔记的整体结构依据视频编写，并随着学习的深入补充了很多知识</p>
`}},{path:"Java_Interview_Topics-JVM",name:"/posts/Java_Interview_Topics-JVM",component:()=>f(()=>import("../Java_Interview_Topics-JVM.BFkkGZrM.js"),[]),meta:{frontmatter:{time_warning:!1,cover:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/Knight.png",title:"Java面试专题 - 虚拟机篇",date:"2023-4-16 14:52:05",categories:["Java","面试"],tags:["JVM"],outline:"deep",excerpt_type:"html",end:!1,updated:"2023-4-16 14:52:05",wordCount:"6.5k",readingTime:31},layout:"post",excerpt:`<p>参考视频：<a href="https://www.bilibili.com/video/BV15b4y117RJ" target="_blank" rel="noreferrer">满神Java面试专题</a></p>
<p>笔记的整体结构依据视频编写，并随着学习的深入补充了很多知识</p>
`}},{path:"Java_Interview_Topics-Microservices+Middleware",name:"/posts/Java_Interview_Topics-Microservices+Middleware",component:()=>f(()=>import("../Java_Interview_Topics-Microservices_Middleware.CSZQfhMG.js"),[]),meta:{frontmatter:{time_warning:!1,title:"Java面试专题 - 微服务与中间件",cover:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/line_glitter_glare_95089_1920x1080.jpg",author:"imklaus",tags:["Redis","RabbitMQ","Spring Cloud"],categories:["Java","面试"],date:"2025-12-5 18:00:10",outline:"deep",excerpt_type:"html",end:!1,updated:"2025-12-5 18:00:10",wordCount:"12.1k",readingTime:48},layout:"post",excerpt:`<p>参考视频：<a href="https://www.bilibili.com/video/BV1LQ4y127n4" target="_blank" rel="noreferrer">黑马SpringCloud微服务技术栈面试篇</a></p>
<p>笔记的整体结构依据视频编写，并随着学习的深入补充了很多知识</p>
`}},{path:"Javascript",name:"/posts/Javascript",component:()=>f(()=>import("../Javascript.05cMp2DS.js"),[]),meta:{frontmatter:{time_warning:!1,title:"第二章. 后端之于前端 - Javascript",cover:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/wallhaven-nkovp6_1920x1080.png",author:"imklaus",tags:["Javascript"],categories:["前端"],date:"2025/11/14 1:51:00",outline:"deep",postTitleClass:"text-#FF8EB3",excerpt_type:"html",end:!0,updated:"2025/11/14 1:51:00",wordCount:"7.7k",readingTime:46},layout:"post",excerpt:`<p>参考视频：<a href="https://www.bilibili.com/video/BV1Tt4y1772f" target="_blank" rel="noreferrer">Java开发所需的前端技术全教程</a></p>
<p>它是一种脚本语言，可以用来更改页面内容，控制多媒体，制作图像、动画等等</p>
`}},{path:"JVM",name:"/posts/JVM",component:()=>f(()=>import("../JVM.B3zpYWye.js"),[]),meta:{frontmatter:{time_warning:!1,title:"Java 虚拟机从入门到精通",cover:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/freecompress-Snipaste_2025-12-04_20-53-39.png",top:316,author:"imklaus",tags:["JVM"],categories:["Java","虚拟机"],date:"2025/11/17 3:18:00",outline:"deep",postTitleClass:"text-#bd9ad2",excerpt_type:"html",end:!1,updated:"2025/11/17 3:18:00",wordCount:"23.4k",readingTime:108},layout:"post",excerpt:`<p>参考视频：<a href="https://www.bilibili.com/video/BV1yE411Z7AP" target="_blank" rel="noreferrer">满神Java虚拟机快速入门</a></p>
<p>笔记的整体结构依据视频编写，并随着学习的深入补充了很多知识</p>
<p><strong>目录指引</strong>：</p>
<nav class="table-of-contents"><ul></ul></nav>
`}},{path:"mall",name:"/posts/mall",component:()=>f(()=>import("../mall.CSrrb4_7.js"),[]),meta:{frontmatter:{time_warning:!1,title:"mall项目总结",description:"基于微服务架构的商品贸易平台",author:"imklaus",tags:["Spring Boot","Spring Cloud","MySQL","MyBatis-Plus","Redis","RabbitMQ","Nginx"],categories:["Java","项目"],date:"2023-04-12 00:45:36",outline:"deep",excerpt_type:"html",end:!0,updated:"2023-04-12 00:45:36",wordCount:"24.1k",readingTime:127},layout:"post",excerpt:`<p>参考视频：<a href="https://www.bilibili.com/video/BV1np4y1C7Yf/" target="_blank" rel="noreferrer">雷神谷粒商城项目</a></p>
<figure><img src="https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20230315150052611.png" alt="mall" loading="lazy" decoding="async" class="lazy"></figure>
<figure><img src="https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20230315145952769.png" alt="mall" loading="lazy" decoding="async" class="lazy"></figure>
<h2 id="项目名称" tabindex="-1">项目名称 <a class="header-anchor" href="#项目名称" aria-label="Permalink to &quot;项目名称&quot;">&ZeroWidthSpace;</a></h2>
<ul>
<li>书阁”图书商城管理系统、微盟电子商城网络交易系统、高校闲置资源交易系统</li>
<li>购物在“e”零售商城平台、惠农通—智慧农资商城 、农产品轻量级微商城系统</li>
<li>精美鞋业贸易系统</li>
</ul>
<h2 id="项目简介" tabindex="-1">项目简介 <a class="header-anchor" href="#项目简介" aria-label="Permalink to &quot;项目简介&quot;">&ZeroWidthSpace;</a></h2>
<ul>
<li>本系统采用微服务架构设计，在分布式环境下利用Spring Cloud框架，通过业务划分，设计独立模块的微服务，拆分为订单服务、购物车服务、支付服务、用户管理服务、商品管理服务、文件上传服务等模块，结合了当前比较流行的互联网电商模式，为消费者提供商品贸易平台。</li>
</ul>
`}},{path:"Microservices_Protection",name:"/posts/Microservices_Protection",component:()=>f(()=>import("../Microservices_Protection.UllWhBpH.js"),[]),meta:{frontmatter:{time_warning:!1,title:"微服务保护",author:"imklaus",tags:["Spring Cloud","Sentinel"],categories:["Java","微服务"],date:"2025/12/8 1:29:00",outline:"deep",postTitleClass:"text-#62afe9",excerpt_type:"html",end:!1,updated:"2025/12/8 1:29:00",wordCount:"11.7k",readingTime:62},layout:"post",excerpt:`<figure><img src="https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20251208014226027.png" alt="image-20251208014226027" loading="lazy" decoding="async" class="lazy"></figure>
<p>参考视频：<a href="https://www.bilibili.com/video/BV1LQ4y127n4" target="_blank" rel="noreferrer">黑马SpringCloud微服务技术栈高级篇</a></p>
<p>笔记的整体结构依据视频编写，并随着学习的深入补充了很多知识</p>
<p><strong>目录指引</strong>：</p>
<nav class="table-of-contents"><ul><li><a href="#_1-初识sentinel">1. 初识Sentinel</a><ul><li><a href="#_1-1-雪崩问题及解决方案">1.1 雪崩问题及解决方案</a><ul><li><a href="#_1-1-1-雪崩问题">1.1.1 雪崩问题</a></li></ul></li></ul></li></ul></nav>
<h2 id="_1-初识sentinel" tabindex="-1">1. 初识Sentinel <a class="header-anchor" href="#_1-初识sentinel" aria-label="Permalink to &quot;1. 初识Sentinel&quot;">&ZeroWidthSpace;</a></h2>
<h3 id="_1-1-雪崩问题及解决方案" tabindex="-1">1.1 雪崩问题及解决方案 <a class="header-anchor" href="#_1-1-雪崩问题及解决方案" aria-label="Permalink to &quot;1.1 雪崩问题及解决方案&quot;">&ZeroWidthSpace;</a></h3>
<h4 id="_1-1-1-雪崩问题" tabindex="-1">1.1.1 雪崩问题 <a class="header-anchor" href="#_1-1-1-雪崩问题" aria-label="Permalink to &quot;1.1.1 雪崩问题&quot;">&ZeroWidthSpace;</a></h4>
<p>微服务中，服务间调用关系错综复杂，一个微服务往往依赖于多个其它微服务。</p>
`}},{path:"minio",name:"/posts/minio",component:()=>f(()=>import("../minio.DF9wrPF1.js"),[]),meta:{frontmatter:{time_warning:!1,cover:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/Saber.(Fate.stay.night).full.3662012.jpg",title:"分布式文件系统 - minio",date:"2023-7-4 21:21:17",author:"imklaus",categories:["Java","微系统与第三方框架"],tags:["Spring Cloud","Spring Boot","minio"],outline:"deep",excerpt_type:"html",end:!0,updated:"2023-7-4 21:21:17",wordCount:"11.4k",readingTime:68},layout:"post",excerpt:`<p>参考视频：<a href="https://www.bilibili.com/video/BV1j8411N7Bm/" target="_blank" rel="noreferrer">黑马学成在线项目</a></p>
`}},{path:"Multi-level_cache",name:"/posts/Multi-level_cache",component:()=>f(()=>import("../Multi-level_cache.BgVbGyAD.js"),[]),meta:{frontmatter:{time_warning:!1,title:"深入理解多级缓存",author:"imklaus",tags:["Redis","Nginx"],categories:["中间件"],date:"2025/12/5 23:01:00",outline:"deep",postTitleClass:"text-#9b3841",excerpt_type:"html",end:!1,updated:"2025/12/5 23:01:00",wordCount:"12.5k",readingTime:73},layout:"post",excerpt:`<p>参考视频：<a href="https://www.bilibili.com/video/BV1LQ4y127n4" target="_blank" rel="noreferrer">黑马SpringCloud微服务技术栈原理篇</a></p>
<p>笔记的整体结构依据视频编写，并随着学习的深入补充了很多知识</p>
<p><strong>目录指引</strong>：</p>
<nav class="table-of-contents"><ul><li><a href="#_1-什么是多级缓存">1. 什么是多级缓存</a></li></ul></nav>
<h2 id="_1-什么是多级缓存" tabindex="-1">1. 什么是多级缓存 <a class="header-anchor" href="#_1-什么是多级缓存" aria-label="Permalink to &quot;1. 什么是多级缓存&quot;">&ZeroWidthSpace;</a></h2>
<p>传统的缓存策略一般是请求到达Tomcat后，先查询Redis，如果未命中则查询数据库，如图：</p>
<figure><img src="https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20210821075259137.png" alt="image-20210821075259137" loading="lazy" decoding="async" class="lazy"></figure>
<p>存在下面的问题：</p>
<ul>
<li>
<p>请求要经过Tomcat处理，Tomcat的性能成为整个系统的瓶颈</p>
</li>
<li>
<p>Redis缓存失效时，会对数据库产生冲击</p>
</li>
</ul>
`}},{path:"MySQL_Basic",name:"/posts/MySQL_Basic",component:()=>f(()=>import("../MySQL_Basic.DzWErVbw.js"),[]),meta:{frontmatter:{time_warning:!1,title:"MySQL - 简介与架构",author:"imklaus",tags:["SQL"],categories:["MySQL","基础篇"],date:"2025-3-19 00:01:20",outline:"deep",excerpt_type:"html",end:!0,updated:"2025-3-19 00:01:20",wordCount:"10.9k",readingTime:51},layout:"post",excerpt:`<h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">&ZeroWidthSpace;</a></h2>
<h3 id="数据库" tabindex="-1">数据库 <a class="header-anchor" href="#数据库" aria-label="Permalink to &quot;数据库&quot;">&ZeroWidthSpace;</a></h3>
<p>数据库：DataBase，简称 DB，存储和管理数据的仓库</p>
<p>数据库的优势：</p>
<ul>
<li>可以持久化存储数据</li>
<li>方便存储和管理数据</li>
<li>使用了统一的方式操作数据库 SQL</li>
</ul>
<p>数据库、数据表、数据的关系介绍：</p>
<ul>
<li>
<p>数据库</p>
<ul>
<li>用于存储和管理数据的仓库</li>
<li>一个库中可以包含多个数据表</li>
</ul>
</li>
<li>
<p>数据表</p>
<ul>
<li>数据库最重要的组成部分之一</li>
<li>由纵向的列和横向的行组成（类似 excel 表格）</li>
<li>可以指定列名、数据类型、约束等</li>
<li>一个表中可以存储多条数据</li>
</ul>
</li>
<li>
<p>数据：想要永久化存储的数据</p>
</li>
</ul>
<p>参考视频：https://www.bilibili.com/video/BV1zJ411M7TB</p>
<p>参考专栏：https://time.geekbang.org/column/intro/139</p>
<p>参考书籍：https://book.douban.com/subject/35231266/</p>
`}},{path:"MySQL_Index",name:"/posts/MySQL_Index",component:()=>f(()=>import("../MySQL_Index.BVYAJfl8.js"),[]),meta:{frontmatter:{time_warning:!1,title:"MySQL - 存储引擎与索引",author:"imklaus",tags:["SQL"],categories:["MySQL","索引篇"],date:"2025-3-19 00:14:40",outline:"deep",excerpt_type:"html",end:!0,updated:"2025-3-19 00:14:40",wordCount:"9.1k",readingTime:38},layout:"post",excerpt:`<h2 id="存储引擎" tabindex="-1">存储引擎 <a class="header-anchor" href="#存储引擎" aria-label="Permalink to &quot;存储引擎&quot;">&ZeroWidthSpace;</a></h2>
<h3 id="基本介绍" tabindex="-1">基本介绍 <a class="header-anchor" href="#基本介绍" aria-label="Permalink to &quot;基本介绍&quot;">&ZeroWidthSpace;</a></h3>
<p>对比其他数据库，MySQL 的架构可以在不同场景应用并发挥良好作用，主要体现在存储引擎，插件式的存储引擎架构将查询处理和其他的系统任务以及数据的存储提取分离，可以针对不同的存储需求可以选择最优的存储引擎</p>
<p>存储引擎的介绍：</p>
<ul>
<li>MySQL 数据库使用不同的机制存取表文件 , 机制的差别在于不同的存储方式、索引技巧、锁定水平等不同的功能和能力，在 MySQL 中，将这些不同的技术及配套的功能称为存储引擎</li>
<li>Oracle、SqlServer 等数据库只有一种存储引擎，MySQL <strong>提供了插件式的存储引擎架构</strong>，所以 MySQL 存在多种存储引擎 , 就会让数据库采取了不同的处理数据的方式和扩展功能</li>
<li>在关系型数据库中数据的存储是以表的形式存进行，所以存储引擎也称为表类型（存储和操作此表的类型）</li>
<li>通过选择不同的引擎，能够获取最佳的方案,  也能够获得额外的速度或者功能，提高程序的整体效果。</li>
</ul>
<p>MySQL 支持的存储引擎：</p>
<ul>
<li>MySQL 支持的引擎包括：InnoDB、MyISAM、MEMORY、Archive、Federate、CSV、BLACKHOLE 等</li>
<li>MySQL5.5 之前的默认存储引擎是 MyISAM，5.5 之后就改为了 InnoDB</li>
</ul>
`}},{path:"MySQL_Lock",name:"/posts/MySQL_Lock",component:()=>f(()=>import("../MySQL_Lock.B34pIdRX.js"),[]),meta:{frontmatter:{time_warning:!1,title:"MySQL - 锁",author:"imklaus",tags:["SQL"],categories:["MySQL","锁篇"],date:"2025-3-19 00:54:45",outline:"deep",excerpt_type:"html",end:!0,updated:"2025-3-19 00:54:45",wordCount:"6.5k",readingTime:29},layout:"post",excerpt:`<h3 id="基本介绍" tabindex="-1">基本介绍 <a class="header-anchor" href="#基本介绍" aria-label="Permalink to &quot;基本介绍&quot;">&ZeroWidthSpace;</a></h3>
<p>锁机制：数据库为了保证数据的一致性，在共享的资源被并发访问时变得安全有序所设计的一种规则</p>
<p>利用 MVCC 性质进行读取的操作叫<strong>一致性读</strong>，读取数据前加锁的操作叫<strong>锁定读</strong></p>
<p>锁的分类：</p>
<ul>
<li>按操作分类：
<ul>
<li>共享锁：也叫读锁。对同一份数据，多个事务读操作可以同时加锁而不互相影响 ，但不能修改数据</li>
<li>排他锁：也叫写锁。当前的操作没有完成前，会阻断其他操作的读取和写入</li>
</ul>
</li>
<li>按粒度分类：
<ul>
<li>表级锁：会锁定整个表，开销小，加锁快；不会出现死锁；锁定力度大，发生锁冲突概率高，并发度最低，偏向 MyISAM</li>
<li>行级锁：会锁定当前操作行，开销大，加锁慢；会出现死锁；锁定力度小，发生锁冲突概率低，并发度高，偏向 InnoDB</li>
<li>页级锁：锁的力度、发生冲突的概率和加锁开销介于表锁和行锁之间，会出现死锁，并发性能一般</li>
</ul>
</li>
<li>按使用方式分类：
<ul>
<li>悲观锁：每次查询数据时都认为别人会修改，很悲观，所以查询时加锁</li>
<li>乐观锁：每次查询数据时都认为别人不会修改，很乐观，但是更新时会判断一下在此期间别人有没有去更新这个数据</li>
</ul>
</li>
</ul>
<ul>
<li>
<p>不同存储引擎支持的锁</p>
<table>
<thead>
<tr>
<th>存储引擎</th>
<th>表级锁</th>
<th>行级锁</th>
<th>页级锁</th>
</tr>
</thead>
<tbody>
<tr>
<td>MyISAM</td>
<td>支持</td>
<td>不支持</td>
<td>不支持</td>
</tr>
<tr>
<td>InnoDB</td>
<td><strong>支持</strong></td>
<td><strong>支持</strong></td>
<td>不支持</td>
</tr>
<tr>
<td>MEMORY</td>
<td>支持</td>
<td>不支持</td>
<td>不支持</td>
</tr>
<tr>
<td>BDB</td>
<td>支持</td>
<td>不支持</td>
<td>支持</td>
</tr>
</tbody>
</table>
</li>
</ul>
<p>从锁的角度来说：表级锁更适合于以查询为主，只有少量按索引条件更新数据的应用，如 Web 应用；而行级锁则更适合于有大量按索引条件并发更新少量不同数据，同时又有并查询的应用，如一些在线事务处理系统</p>
`}},{path:"MySQL_Log",name:"/posts/MySQL_Log",component:()=>f(()=>import("../MySQL_Log.D6OgzXRm.js"),[]),meta:{frontmatter:{time_warning:!1,title:"MySQL - 日志",author:"imklaus",tags:["SQL"],categories:["MySQL","日志篇"],date:"2025-3-19 01:00:07",outline:"deep",excerpt_type:"html",end:!0,updated:"2025-3-19 01:00:07",wordCount:"2.2k",readingTime:11},layout:"post",excerpt:`<h3 id="日志分类" tabindex="-1">日志分类 <a class="header-anchor" href="#日志分类" aria-label="Permalink to &quot;日志分类&quot;">&ZeroWidthSpace;</a></h3>
<p>在任何一种数据库中，都会有各种各样的日志，记录着数据库工作的过程，可以帮助数据库管理员追踪数据库曾经发生过的各种事件</p>
<p>MySQL日志主要包括六种：</p>
<ol>
<li>重做日志（redo log）</li>
<li>回滚日志（undo log）</li>
<li>归档日志（binlog）（二进制日志）</li>
<li>错误日志（errorlog）</li>
<li>慢查询日志（slow query log）</li>
<li>一般查询日志（general log）</li>
<li>中继日志（relay log）</li>
</ol>
`}},{path:"MySQL_Master_Slave",name:"/posts/MySQL_Master_Slave",component:()=>f(()=>import("../MySQL_Master_Slave.B9Xnn1j5.js"),[]),meta:{frontmatter:{time_warning:!1,title:"MySQL - 主从",author:"imklaus",tags:["SQL"],categories:["MySQL","主从篇"],date:"2025-3-19 00:58:52",outline:"deep",excerpt_type:"html",end:!0,updated:"2025-3-19 00:58:52",wordCount:"6.5k",readingTime:27},layout:"post",excerpt:`<h3 id="基本介绍" tabindex="-1">基本介绍 <a class="header-anchor" href="#基本介绍" aria-label="Permalink to &quot;基本介绍&quot;">&ZeroWidthSpace;</a></h3>
<p>主从复制是指将主数据库的 DDL 和 DML 操作通过二进制日志传到从库服务器中，然后在从库上对这些日志重新执行（也叫重做），从而使得从库和主库的数据保持同步</p>
<p>MySQL 支持一台主库同时向多台从库进行复制，从库同时也可以作为其他从服务器的主库，实现链状复制</p>
<p>MySQL 复制的优点主要包含以下三个方面：</p>
<ul>
<li>
<p>主库出现问题，可以快速切换到从库提供服务</p>
</li>
<li>
<p>可以在从库上执行查询操作，从主库中更新，实现读写分离</p>
</li>
<li>
<p>可以在从库中执行备份，以避免备份期间影响主库的服务（备份时会加全局读锁）</p>
</li>
</ul>
`}},{path:"MySQL_Optimization",name:"/posts/MySQL_Optimization",component:()=>f(()=>import("../MySQL_Optimization.BhdZjzsM.js"),[]),meta:{frontmatter:{time_warning:!1,title:"MySQL - 优化",author:"imklaus",tags:["SQL"],categories:["MySQL","优化篇"],date:"2025-3-19 00:38:32",outline:"deep",excerpt_type:"html",end:!0,updated:"2025-3-19 00:38:32",wordCount:"17.8k",readingTime:82},layout:"post",excerpt:`<p>目录指引：</p>
<nav class="table-of-contents"><ul><li><a href="#表优化">表优化</a><ul><li><a href="#分区表">分区表</a><ul><li><a href="#基本介绍">基本介绍</a></li><li><a href="#分区策略">分区策略</a></li></ul></li></ul></li></ul></nav>
<h2 id="表优化" tabindex="-1">表优化 <a class="header-anchor" href="#表优化" aria-label="Permalink to &quot;表优化&quot;">&ZeroWidthSpace;</a></h2>
<h3 id="分区表" tabindex="-1">分区表 <a class="header-anchor" href="#分区表" aria-label="Permalink to &quot;分区表&quot;">&ZeroWidthSpace;</a></h3>
<h4 id="基本介绍" tabindex="-1">基本介绍 <a class="header-anchor" href="#基本介绍" aria-label="Permalink to &quot;基本介绍&quot;">&ZeroWidthSpace;</a></h4>
<p>分区表是将大表的数据按分区字段分成许多小的子集，建立一个以 ftime 年份为分区的表：</p>
<div class="language-sql max-h-300px"><button title="Copy code" class="copy"></button><span class="lang">sql</span><pre><code class="language-sql">CREATE TABLE \`t\` (
    \`ftime\` datetime NOT NULL,
    \`c\` int(11) DEFAULT NULL,
    KEY (\`ftime\`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1
PARTITION BY RANGE (YEAR(ftime))
(PARTITION p_2017 VALUES LESS THAN (2017) ENGINE = InnoDB,
 PARTITION p_2018 VALUES LESS THAN (2018) ENGINE = InnoDB,
 PARTITION p_2019 VALUES LESS THAN (2019) ENGINE = InnoDB,
 PARTITION p_others VALUES LESS THAN MAXVALUE ENGINE = InnoDB);
INSERT INTO t VALUES('2017-4-1',1),('2018-4-1',1);-- 这两行记录分别落在 p_2018 和 p_2019 这两个分区上
</code></pre>
<button class="code-block-unfold-btn"></button></div><p>这个表包含了一个.frm 文件和 4 个.ibd 文件，每个分区对应一个.ibd 文件</p>
<ul>
<li>对于引擎层来说，这是 4 个表，针对每个分区表的操作不会相互影响</li>
<li>对于 Server 层来说，这是 1 个表</li>
</ul>
<hr>
<h4 id="分区策略" tabindex="-1">分区策略 <a class="header-anchor" href="#分区策略" aria-label="Permalink to &quot;分区策略&quot;">&ZeroWidthSpace;</a></h4>
<p>打开表行为：第一次访问一个分区表时，MySQL 需要<strong>把所有的分区都访问一遍</strong>，如果分区表的数量很多，超过了 open_files_limit 参数（默认值 1024），那么就会在访问这个表时打开所有的文件，导致打开表文件的个数超过了上限而报错</p>
<p>通用分区策略：MyISAM 分区表使用的分区策略，每次访问分区都由 Server 层控制，在文件管理、表管理的实现上很粗糙，因此有比较严重的性能问题</p>
<p>本地分区策略：从 MySQL 5.7.9 开始，InnoDB 引擎内部自己管理打开分区的行为，InnoDB 引擎打开文件超过 innodb_open_files 时就会<strong>关掉一些之前打开的文件</strong>，所以即使分区个数大于 open_files_limit，也不会报错</p>
<p>从 MySQL 8.0 版本开始，就不允许创建 MyISAM 分区表，只允许创建已经实现了本地分区策略的引擎，目前只有 InnoDB 和 NDB 这两个引擎支持了本地分区策略</p>
`}},{path:"MySQL_Table",name:"/posts/MySQL_Table",component:()=>f(()=>import("../MySQL_Table.BE7J4ks9.js"),[]),meta:{frontmatter:{time_warning:!1,title:"MySQL - 表",author:"imklaus",tags:["SQL"],categories:["MySQL","基础篇"],date:"2025-3-19 01:55:11",outline:"deep",excerpt_type:"html",end:!0,updated:"2025-3-19 01:55:11",wordCount:"9.7k",readingTime:48},layout:"post",excerpt:`<h2 id="单表操作" tabindex="-1">单表操作 <a class="header-anchor" href="#单表操作" aria-label="Permalink to &quot;单表操作&quot;">&ZeroWidthSpace;</a></h2>
<h3 id="sql" tabindex="-1">SQL <a class="header-anchor" href="#sql" aria-label="Permalink to &quot;SQL&quot;">&ZeroWidthSpace;</a></h3>
<ul>
<li>
<p>SQL</p>
<ul>
<li>Structured Query Language：结构化查询语言</li>
<li>定义了操作所有关系型数据库的规则，每种数据库操作的方式可能会存在不一样的地方，称为“方言”</li>
</ul>
</li>
<li>
<p>SQL 通用语法</p>
<ul>
<li>SQL 语句可以单行或多行书写，以<strong>分号结尾</strong>。</li>
<li>可使用空格和缩进来增强语句的可读性。</li>
<li>MySQL 数据库的 SQL 语句不区分大小写，<strong>关键字建议使用大写</strong>。</li>
<li>数据库的注释：
<ul>
<li>单行注释：-- 注释内容       #注释内容（MySQL 特有）</li>
<li>多行注释：/* 注释内容 */</li>
</ul>
</li>
</ul>
</li>
<li>
<p>SQL 分类</p>
<ul>
<li>
<p>DDL（Data Definition Language）数据定义语言</p>
<ul>
<li>用来定义数据库对象：数据库，表，列等。关键字：create、drop,、alter 等</li>
</ul>
</li>
<li>
<p>DML（Data Manipulation Language）数据操作语言</p>
<ul>
<li>用来对数据库中表的数据进行增删改。关键字：insert、delete、update 等</li>
</ul>
</li>
<li>
<p>DQL（Data Query Language）数据查询语言</p>
<ul>
<li>用来查询数据库中表的记录(数据)。关键字：select、where 等</li>
</ul>
</li>
<li>
<p>DCL（Data Control Language）数据控制语言</p>
<ul>
<li>用来定义数据库的访问权限和安全级别，及创建用户。关键字：grant， revoke等</li>
</ul>
<figure><img src="https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20250320013733663.png" alt="image-20250320013733663" loading="lazy" decoding="async" class="lazy"></figure>
</li>
</ul>
</li>
</ul>
`}},{path:"MySQL_Transaction",name:"/posts/MySQL_Transaction",component:()=>f(()=>import("../MySQL_Transaction.DqsmvLAc.js"),[]),meta:{frontmatter:{time_warning:!1,title:"MySQL - 事务",author:"imklaus",tags:["SQL"],categories:["MySQL","事务篇"],date:"2025-3-19 00:49:55",outline:"deep",excerpt_type:"html",end:!0,updated:"2025-3-19 00:49:55",wordCount:"11.4k",readingTime:47},layout:"post",excerpt:`<h3 id="基本介绍" tabindex="-1">基本介绍 <a class="header-anchor" href="#基本介绍" aria-label="Permalink to &quot;基本介绍&quot;">&ZeroWidthSpace;</a></h3>
<p>事务（Transaction）是访问和更新数据库的程序执行单元；事务中可能包含一个或多个 SQL 语句，这些语句要么都执行，要么都不执行，作为一个关系型数据库，MySQL 支持事务。</p>
<p>单元中的每条 SQL 语句都相互依赖，形成一个整体</p>
<ul>
<li>
<p>如果某条 SQL 语句执行失败或者出现错误，那么整个单元就会回滚，撤回到事务最初的状态</p>
</li>
<li>
<p>如果单元中所有的 SQL 语句都执行成功，则事务就顺利执行</p>
</li>
</ul>
<p>事务的四大特征：ACID</p>
<ul>
<li>原子性 (atomicity)</li>
<li>一致性 (consistency)</li>
<li>隔离性 (isolaction)</li>
<li>持久性 (durability)</li>
</ul>
<p>事务的几种状态：</p>
<ul>
<li>活动的（active）：事务对应的数据库操作正在执行中</li>
<li>部分提交的（partially committed）：事务的最后一个操作执行完，但是内存还没刷新至磁盘</li>
<li>失败的（failed）：当事务处于活动状态或部分提交状态时，如果数据库遇到了错误或刷脏失败，或者用户主动停止当前的事务</li>
<li>中止的（aborted）：失败状态的事务回滚完成后的状态</li>
<li>提交的（committed）：当处于部分提交状态的事务刷脏成功，就处于提交状态</li>
</ul>
`}},{path:"Nacos-Source_Code_Analysis",name:"/posts/Nacos-Source_Code_Analysis",component:()=>f(()=>import("../Nacos-Source_Code_Analysis.Ds6wD3LC.js"),[]),meta:{frontmatter:{time_warning:!1,title:"Nacos源码分析",author:"imklaus",tags:["Nacos"],categories:["Java","微服务"],date:"2025/12/8 3:44:00",outline:"deep",postTitleClass:"text-#62afe9",excerpt_type:"html",end:!1,updated:"2025/12/8 3:44:00",wordCount:"21.2k",readingTime:113},layout:"post",excerpt:`<figure><img src="https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20251214040428114.png" alt="image-20251214040428114" loading="lazy" decoding="async" class="lazy"></figure>
<p>参考视频：<a href="https://www.bilibili.com/video/BV1LQ4y127n4" target="_blank" rel="noreferrer">黑马SpringCloud微服务技术栈原理篇</a></p>
<p>笔记的整体结构依据视频编写，并随着学习的深入补充了很多知识</p>
<p><strong>目录指引</strong>：</p>
<nav class="table-of-contents"><ul><li><a href="#_1-下载nacos源码并运行">1. 下载Nacos源码并运行</a><ul><li><a href="#_1-1-下载nacos源码">1.1 下载Nacos源码</a></li></ul></li></ul></nav>
<h2 id="_1-下载nacos源码并运行" tabindex="-1">1. 下载Nacos源码并运行 <a class="header-anchor" href="#_1-下载nacos源码并运行" aria-label="Permalink to &quot;1. 下载Nacos源码并运行&quot;">&ZeroWidthSpace;</a></h2>
<p>要研究Nacos源码自然不能用打包好的Nacos服务端jar包来运行，需要下载源码自己编译来运行。</p>
<h3 id="_1-1-下载nacos源码" tabindex="-1">1.1 下载Nacos源码 <a class="header-anchor" href="#_1-1-下载nacos源码" aria-label="Permalink to &quot;1.1 下载Nacos源码&quot;">&ZeroWidthSpace;</a></h3>
<p>Nacos的GitHub地址：https://github.com/alibaba/nacos</p>
`}},{path:"Netty",name:"/posts/Netty",component:()=>f(()=>import("../Netty.nLvEJ6JN.js"),[]),meta:{frontmatter:{time_warning:!1,title:"Netty",cover:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/tiamat_p1.png",author:"imklaus",tags:["Netty"],categories:["Java","未分类"],date:"2024-10-6 22:58:47",outline:"deep",postTitleClass:"text-#FF8EB3",excerpt_type:"html",end:!1,updated:"2024-10-6 22:58:47",wordCount:"12.1k",readingTime:69},layout:"post",excerpt:`<p>参考视频：<a href="https://www.bilibili.com/video/BV1py4y1E7oA" target="_blank" rel="noreferrer">满神Netty深入浅出Java网络编程教程</a></p>
<p>笔记的整体结构依据视频编写，并随着学习的深入补充了很多知识</p>
`}},{path:"RabbitMQ",name:"/posts/RabbitMQ",component:()=>f(()=>import("../RabbitMQ.Ddu2YW0Z.js"),[]),meta:{frontmatter:{time_warning:!1,title:"RabbitMQ 从入门到实战",top:99,author:"imklaus",tags:["RabbitMQ"],categories:["中间件"],date:"2025-12-5 15:00:10",outline:"deep",excerpt_type:"html",postTitleClass:"text-#f49a31",end:!1,updated:"2025-12-5 15:00:10",wordCount:"15.2k",readingTime:80},layout:"post",excerpt:`<figure><img src="https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/rabbitmq-beginners-updated.png" alt="" loading="lazy" decoding="async" class="lazy"></figure>
<p>参考视频：<a href="https://www.bilibili.com/video/BV1mN4y1Z7t9" target="_blank" rel="noreferrer">黑马RabbitMQ深入学习</a></p>
<p>笔记的整体结构依据视频编写，并随着学习的深入补充了很多知识</p>
<p><strong>目录指引</strong>：</p>
<nav class="table-of-contents"><ul><li><a href="#服务异步通信-实用篇">服务异步通信-实用篇</a><ul><li><a href="#_1-初识mq">1. 初识MQ</a><ul><li><a href="#_1-1-同步和异步通讯">1.1 同步和异步通讯</a></li></ul></li></ul></li></ul></nav>
<h2 id="服务异步通信-实用篇" tabindex="-1">服务异步通信-实用篇 <a class="header-anchor" href="#服务异步通信-实用篇" aria-label="Permalink to &quot;服务异步通信-实用篇&quot;">&ZeroWidthSpace;</a></h2>
<hr>
<h3 id="_1-初识mq" tabindex="-1">1. 初识MQ <a class="header-anchor" href="#_1-初识mq" aria-label="Permalink to &quot;1. 初识MQ&quot;">&ZeroWidthSpace;</a></h3>
<h4 id="_1-1-同步和异步通讯" tabindex="-1">1.1 同步和异步通讯 <a class="header-anchor" href="#_1-1-同步和异步通讯" aria-label="Permalink to &quot;1.1 同步和异步通讯&quot;">&ZeroWidthSpace;</a></h4>
<p>微服务间通讯有同步和异步两种方式：</p>
<p>同步通讯：就像打电话，需要实时响应。</p>
<p>异步通讯：就像发邮件，不需要马上回复。</p>
`}},{path:"React",name:"/posts/React",component:()=>f(()=>import("../React.YQTqbf3S.js"),[]),meta:{frontmatter:{time_warning:!1,title:"第五章. 后端之于前端 - React",cover:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/wallhaven-v9x6gm_1920x1080.png",author:"imklaus",tags:["React"],categories:["前端"],date:"2025/11/14 2:02:00",outline:"deep",postTitleClass:"text-#FF8EB3",excerpt_type:"html",end:!0,updated:"2025/11/14 2:02:00",wordCount:"9.4k",readingTime:69},layout:"post",excerpt:`<p>参考视频：<a href="https://www.bilibili.com/video/BV1Tt4y1772f" target="_blank" rel="noreferrer">Java开发所需的前端技术全教程</a></p>
`}},{path:"Redis",name:"/posts/Redis",component:()=>f(()=>import("../Redis.DqoT6ifF.js"),[]),meta:{frontmatter:{time_warning:!1,title:"Redis 从入门到实战",top:100,author:"imklaus",tags:["Redis"],categories:["中间件"],date:"2025-12-4 20:00:10",outline:"deep",excerpt_type:"html",postTitleClass:"text-#9b3841",end:!0,updated:"2025-12-4 20:00:10",wordCount:"69.6k",readingTime:345},layout:"post",excerpt:`<figure><img src="https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20251207203742532.png" alt="image-20251207203742532" loading="lazy" decoding="async" class="lazy"></figure>
<p>参考视频：<a href="https://www.bilibili.com/video/BV1cr4y1671t" target="_blank" rel="noreferrer">黑马 Redis 快速入门</a></p>
<p>笔记的整体结构依据视频编写，并随着学习的深入补充了很多知识</p>
<p><strong>目录指引</strong>：</p>
<nav class="table-of-contents"><ul><li><a href="#redis-快速入门">Redis 快速入门</a><ul><li><a href="#_1-初识-redis">1. 初识 Redis</a></li></ul></li></ul></nav>
<h2 id="redis-快速入门" tabindex="-1">Redis 快速入门 <a class="header-anchor" href="#redis-快速入门" aria-label="Permalink to &quot;Redis 快速入门&quot;">&ZeroWidthSpace;</a></h2>
<p>Redis的常见命令和客户端使用</p>
<hr>
<h3 id="_1-初识-redis" tabindex="-1">1. 初识 Redis <a class="header-anchor" href="#_1-初识-redis" aria-label="Permalink to &quot;1. 初识 Redis&quot;">&ZeroWidthSpace;</a></h3>
<p>Redis是一种键值型的NoSql数据库，这里有两个关键字：</p>
<ul>
<li>
<p>键值型</p>
</li>
<li>
<p>NoSql</p>
</li>
</ul>
`}},{path:"Sentinel-Source_Code_Analysis",name:"/posts/Sentinel-Source_Code_Analysis",component:()=>f(()=>import("../Sentinel-Source_Code_Analysis.I9Mx5yyJ.js"),[]),meta:{frontmatter:{time_warning:!1,title:"Sentinel源码分析",author:"imklaus",tags:["Sentinel"],categories:["Java","微服务"],date:"2025-12-8 3:27:10",outline:"deep",excerpt_type:"html",end:!0,updated:"2025-12-8 3:27:10",wordCount:"8.8k",readingTime:52},layout:"post",excerpt:`<figure><img src="https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/image-20251208033330494.png" alt="image-20251208033330494" loading="lazy" decoding="async" class="lazy"></figure>
<p>参考视频：<a href="https://www.bilibili.com/video/BV1LQ4y127n4" target="_blank" rel="noreferrer">黑马SpringCloud微服务技术栈原理篇</a></p>
<p>笔记的整体结构依据视频编写，并随着学习的深入补充了很多知识</p>
<p><strong>目录指引</strong>：</p>
<nav class="table-of-contents"><ul><li><a href="#_1-sentinel的基本概念">1. Sentinel的基本概念</a></li></ul></nav>
<h2 id="_1-sentinel的基本概念" tabindex="-1">1. Sentinel的基本概念 <a class="header-anchor" href="#_1-sentinel的基本概念" aria-label="Permalink to &quot;1. Sentinel的基本概念&quot;">&ZeroWidthSpace;</a></h2>
<p>Sentinel实现限流、隔离、降级、熔断等功能，本质要做的就是两件事情：</p>
<ul>
<li>统计数据：统计某个资源的访问数据（QPS、RT等信息）</li>
<li>规则判断：判断限流规则、隔离规则、降级规则、熔断规则是否满足</li>
</ul>
<p>这里的<strong>资源</strong>就是希望被Sentinel保护的业务，例如项目中定义的controller方法就是默认被Sentinel保护的资源。</p>
`}},{path:"Spring-Security",name:"/posts/Spring-Security",component:()=>f(()=>import("../Spring-Security.DaPKfjiK.js"),[]),meta:{frontmatter:{time_warning:!1,cover:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/freecompress-Snipaste_2025-03-10_23-51-57.png",title:"认证授权 - Spring Security",author:"imklaus",tags:["Spring Cloud","Spring Boot","Spring Security","JWT","OAuth2","Redis"],categories:["Java","微系统与第三方框架"],date:"2023-7-5 21:50:51",outline:"deep",excerpt_type:"html",end:!1,updated:"2023-7-5 21:50:51",wordCount:"22.2k",readingTime:114},layout:"post",excerpt:`<p>参考视频：<a href="https://www.bilibili.com/video/BV1j8411N7Bm/" target="_blank" rel="noreferrer">黑马学成在线项目</a></p>
`}},{path:"SpringCloud-Component",name:"/posts/SpringCloud-Component",component:()=>f(()=>import("../SpringCloud-Component.B7SbBZhe.js"),[]),meta:{frontmatter:{time_warning:!1,title:"Spring Cloud组件",author:"imklaus",tags:["Spring Cloud","Nacos","Sentinel","Seata"],categories:["Java","微服务"],date:"2023-4-26 15:50:12",outline:"deep",excerpt_type:"html",end:!0,updated:"2023-4-26 15:50:12",wordCount:"13.9k",readingTime:75},layout:"post",excerpt:`<h2 id="一、springcloud-alibaba" tabindex="-1">一、SpringCloud Alibaba <a class="header-anchor" href="#一、springcloud-alibaba" aria-label="Permalink to &quot;一、SpringCloud Alibaba&quot;">&ZeroWidthSpace;</a></h2>
<h3 id="_1-springcloud-alibaba-简介" tabindex="-1">1. SpringCloud Alibaba 简介 <a class="header-anchor" href="#_1-springcloud-alibaba-简介" aria-label="Permalink to &quot;1. SpringCloud Alibaba 简介&quot;">&ZeroWidthSpace;</a></h3>
<h4 id="_1-简介" tabindex="-1">1）简介 <a class="header-anchor" href="#_1-简介" aria-label="Permalink to &quot;1）简介&quot;">&ZeroWidthSpace;</a></h4>
<ul>
<li>
<p>Spring Cloud Alibaba 致力于提供微服务开发的一站式解决方案。此项目包含开发分布式应用微服务的必需组件，方便开发者通过 Spring Cloud 编程模型轻松使用这些组件来开发分布式应用服务。</p>
</li>
<li>
<p>依托 Spring Cloud Alibaba，您只需要添加一些注解和少量配置，就可以将 Spring Cloud 应用接入阿里微服务解决方案，通过阿里中间件来迅速搭建分布式应用系统。</p>
</li>
<li>
<p>https://github.com/alibaba/spring-cloud-alibaba</p>
</li>
</ul>
`}},{path:"System_interface",name:"/posts/System_interface",component:()=>f(()=>import("../System_interface.MNkJZpRS.js"),[]),meta:{frontmatter:{time_warning:!1,title:"系统接口",author:"imklaus",tags:["Spring Boot","Spring Cloud","gateway","Swagger2","Knife4j"],categories:["Java","未分类"],date:"2023-4-26 15:50:12",outline:"deep",excerpt_type:"html",end:!0,updated:"2023-4-26 15:50:12",wordCount:"3.8k",readingTime:26},layout:"post",excerpt:`<h2 id="基本介绍" tabindex="-1">基本介绍 <a class="header-anchor" href="#基本介绍" aria-label="Permalink to &quot;基本介绍&quot;">&ZeroWidthSpace;</a></h2>
<p><a href="https://doc.ruoyi.vip/ruoyi/document/htsc.html#%E7%B3%BB%E7%BB%9F%E6%8E%A5%E5%8F%A3" target="_blank" rel="noreferrer">参考系统接口实现</a></p>
<p>在现在的开发过程中还有很大一部分公司都是以口口相传的方式来进行前后端的联调，而接口文档很大一部分都只停留在了说说而已的地步，或者写了代码再写文档。 还有一点就是文档的修改，定义好的接口并不是一成不变的，可能在开发过程中文档修改不止一次的变化，这个时候就会很难受了。 只要不是强制性要求，没人会愿意写这东西，而且在写的过程中，一个字母的错误就会导致联调时候的很大麻烦，但是通过<code>Swagger</code>，我们可以省略了这一步，而且文档出错率近乎于零， 只要你在写代码的时候，稍加几个注解，文档自动生成。</p>
`}},{path:"Vue",name:"/posts/Vue",component:()=>f(()=>import("../Vue.ZVENhi65.js"),[]),meta:{frontmatter:{time_warning:!1,title:"第三章. 后端之于前端 - Vue",cover:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/wallhaven-72jql3_1920x1080.png",author:"imklaus",tags:["Vue"],categories:["前端"],date:"2025/11/14 1:57:00",outline:"deep",postTitleClass:"text-#FF8EB3",excerpt_type:"html",end:!0,updated:"2025/11/14 1:57:00",wordCount:"9k",readingTime:63},layout:"post",excerpt:`<p>参考视频：<a href="https://www.bilibili.com/video/BV1Tt4y1772f" target="_blank" rel="noreferrer">Java开发所需的前端技术全教程</a></p>
`}},{path:"Vue3",name:"/posts/Vue3",component:()=>f(()=>import("../Vue3.CvHaLeH-.js"),[]),meta:{frontmatter:{time_warning:!1,title:"第四章. 后端之于前端 - Vue3",cover:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/wallhaven-2emoyy_1920x1080.png",author:"imklaus",tags:["Vue3"],categories:["前端"],date:"2025/11/14 2:00:00",outline:"deep",postTitleClass:"text-#FF8EB3",excerpt_type:"html",end:!0,updated:"2025/11/14 2:00:00",wordCount:"12.1k",readingTime:86},layout:"post",excerpt:`<p>参考视频：<a href="https://www.bilibili.com/video/BV1Tt4y1772f" target="_blank" rel="noreferrer">Java开发所需的前端技术全教程</a></p>
`}},{path:"xxlJob",name:"/posts/xxlJob",component:()=>f(()=>import("../xxlJob.BtV9_iKn.js"),[]),meta:{frontmatter:{time_warning:!1,cover:"https://gcore.jsdelivr.net/gh/imLKlauS/blog-picture@main/blogs/freecompress-Snipaste_2025-03-10_23-54-51.png",title:"分布式任务调度 - xxlJob",author:"imklaus",tags:["Spring Cloud","Spring Boot","minio","xxlJob","freemarker","elasticsearch"],categories:["Java","微系统与第三方框架"],date:"2023-7-5 18:00:06",outline:"deep",excerpt_type:"html",end:!0,updated:"2023-7-5 18:00:06",wordCount:"23.2k",readingTime:118},layout:"post",excerpt:`<p>参考视频：<a href="https://www.bilibili.com/video/BV1j8411N7Bm/" target="_blank" rel="noreferrer">黑马学成在线项目</a></p>
`}}],meta:{frontmatter:{time_warning:!1},layout:"posts"}},{path:"/tags",children:[{path:"",name:"/tags/",component:()=>f(()=>import("../index.DBuOgfcU.js"),[]),meta:{frontmatter:{time_warning:!1,layout:"tags",icon:"i-ri-price-tag-3-line",nav:!1,comment:!1,toc:!1,aside:!1,date:"2023-04-07T11:36:55.000Z",updated:"2023-04-07T11:36:55.000Z",wordCount:"24",readingTime:1},excerpt:"",layout:"tags"}}],meta:{frontmatter:{time_warning:!1}}}],ia={};function oa(e,t,n){const a=typeof e=="function"?e:t;n=typeof t=="object"?t:n;const r=We(we(we({},st),n),{commit:(n==null?void 0:n.commit)||st.commit});function p(o,u,m,i){var O;const s=u[$],c=u[dt];s.has(a)||s.set(a,{data:le(),isLoading:le(!1),error:le(),to:o,options:r,children:new Set,resetPending(){this.pendingLoad=null,this.pendingTo=null},pendingLoad:null,pendingTo:null,staged:z,stagedError:null,commit:d});const h=s.get(a);if(h.pendingTo===o&&h.pendingLoad)return h.pendingLoad;const{error:v,isLoading:T,data:x}=h,y=u[Yn],E=r.key||"";let k=z;if(y&&E in y&&(k=y[E],delete y[E]),k!==z)return x.value=k,h.pendingLoad=Promise.resolve();h.pendingTo=o,T.value=!0;const N=Ke();X([h,u,o]),h.staged=z,h.stagedError=v.value;const q=Promise.resolve(a(o,{signal:(O=o.meta[oe])==null?void 0:O.signal})).then(W=>{h.pendingLoad===q&&(W instanceof Lt?o.meta[me].push(W):(h.staged=W,h.stagedError=null))}).catch(W=>{if(h.pendingLoad===q&&(h.stagedError=W,!ke(r.lazy,o,m)||c))throw W}).finally(()=>{X(N),h.pendingLoad===q&&(T.value=!1,(r.commit==="immediate"||!u[K])&&h.commit(o))});return X(N),h.pendingLoad=q,q}function d(o){if(this.pendingTo===o){this.staged!==z&&(this.data.value=this.staged),this.error.value=this.stagedError,this.staged=z,this.stagedError=this.error.value,this.pendingTo=null,this.to=o;for(const u of this.children)u.commit(o)}}const _=()=>{const o=Ke(),[u,m,i]=o,s=m||Zn(),c=i||zn(),h=s[$];let v=h.get(a);(!v||u&&v.pendingTo!==c||!v.pendingLoad)&&s[he].runWithContext(()=>p(c,s,void 0)),v=h.get(a),u&&(u===v&&console.warn(`👶❌ "${r.key}" has itself as parent. This shouldn't be happening. Please report a bug with a reproduction to https://github.com/posva/unplugin-vue-router/`),u.children.add(v));const{data:T,error:x,isLoading:y}=v,E={data:T,error:x,isLoading:y,reload:(N=s.currentRoute.value)=>s[he].runWithContext(()=>p(N,s)).then(()=>v.commit(N))},k=v.pendingLoad.then(()=>v.staged===z?T.value:v.staged).catch(N=>u?Promise.reject(N):null);return X(o),Object.assign(k,E)};return _[pt]=!0,_._={load:p,options:r,getEntry(o){return o[$].get(a)}},_}const st={lazy:!1,server:!0,commit:"after-load"},Yn=Symbol();export{aa as D,Jn as R,zn as a,ia as b,na as c,oa as d,ta as e,ra as r,Zn as u};
