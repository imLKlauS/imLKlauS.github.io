import{o as nn,u as D,g as rn,a as sn,b as te,c as E,r as j,w as A,d as on,e as st,f as ee,h as ne,i as re,F as an,t as se,j as cn,k as ln,n as un}from"../../framework.BU8aqy2L.js";function lt(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function bt(t,e,n=".",r){if(!lt(e))return bt(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:lt(o)&&lt(s[i])?s[i]=bt(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function fn(t){return(...e)=>e.reduce((n,r)=>bt(n,r,"",t),{})}const oe=fn();function ie(t){return rn()?(sn(t),!0):!1}function wt(t){return typeof t=="function"?t():D(t)}const pn=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const dn=t=>t!=null,mn=Object.prototype.toString,et=t=>mn.call(t)==="[object Object]",J=()=>{};function yn(t){return te()}function bn(t,e){yn()&&nn(t,e)}function L(t){var e;const n=wt(t);return(e=n==null?void 0:n.$el)!=null?e:n}const ae=pn?window:void 0;function w(...t){let e,n,r,s;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,r,s]=t,e=ae):[e,n,r,s]=t,!e)return J;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const i=[],o=()=>{i.forEach(l=>l()),i.length=0},a=(l,f,p,d)=>(l.addEventListener(f,p,d),()=>l.removeEventListener(f,p,d)),c=A(()=>[L(e),wt(s)],([l,f])=>{if(o(),!l)return;const p=et(f)?{...f}:f;i.push(...n.flatMap(d=>r.map(m=>a(l,d,m,p))))},{immediate:!0,flush:"post"}),u=()=>{c(),o()};return ie(u),u}function hn(){const t=j(!1),e=te();return e&&on(()=>{t.value=!0},e),t}function gn(t){const e=hn();return E(()=>(e.value,!!t()))}function vn(t,e,n={}){const{root:r,rootMargin:s="0px",threshold:i=.1,window:o=ae,immediate:a=!0}=n,c=gn(()=>o&&"IntersectionObserver"in o),u=E(()=>{const m=wt(t);return(Array.isArray(m)?m:[m]).map(L).filter(dn)});let l=J;const f=j(a),p=c.value?A(()=>[u.value,L(r),f.value],([m,S])=>{if(l(),!f.value||!m.length)return;const g=new IntersectionObserver(e,{root:L(S),rootMargin:s,threshold:i});m.forEach(v=>v&&g.observe(v)),l=()=>{g.disconnect(),l=J}},{immediate:a,flush:"post"}):J,d=()=>{l(),p(),f.value=!1};return ie(d),{isSupported:c,isActive:f,pause(){l(),f.value=!1},resume(){f.value=!0},stop:d}}const ce=1/60*1e3,On=typeof performance<"u"?()=>performance.now():()=>Date.now(),le=typeof window<"u"?t=>window.requestAnimationFrame(t):t=>setTimeout(()=>t(On()),ce);function xn(t){let e=[],n=[],r=0,s=!1,i=!1;const o=new WeakSet,a={schedule:(c,u=!1,l=!1)=>{const f=l&&s,p=f?e:n;return u&&o.add(c),p.indexOf(c)===-1&&(p.push(c),f&&s&&(r=e.length)),c},cancel:c=>{const u=n.indexOf(c);u!==-1&&n.splice(u,1),o.delete(c)},process:c=>{if(s){i=!0;return}if(s=!0,[e,n]=[n,e],n.length=0,r=e.length,r)for(let u=0;u<r;u++){const l=e[u];l(c),o.has(l)&&(a.schedule(l),t())}s=!1,i&&(i=!1,a.process(c))}};return a}const Sn=40;let ht=!0,z=!1,gt=!1;const k={delta:0,timestamp:0},q=["read","update","preRender","render","postRender"],ot=q.reduce((t,e)=>(t[e]=xn(()=>z=!0),t),{}),vt=q.reduce((t,e)=>{const n=ot[e];return t[e]=(r,s=!1,i=!1)=>(z||An(),n.schedule(r,s,i)),t},{}),Mn=q.reduce((t,e)=>(t[e]=ot[e].cancel,t),{});q.reduce((t,e)=>(t[e]=()=>ot[e].process(k),t),{});const Tn=t=>ot[t].process(k),ue=t=>{z=!1,k.delta=ht?ce:Math.max(Math.min(t-k.timestamp,Sn),1),k.timestamp=t,gt=!0,q.forEach(Tn),gt=!1,z&&(ht=!1,le(ue))},An=()=>{z=!0,ht=!0,gt||le(ue)},fe=()=>k;function pe(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}var Bt=function(){};const Ot=(t,e,n)=>Math.min(Math.max(n,t),e),$t=.001,jn=.01,wn=10,Cn=.05,Vn=1;function Rn({duration:t=800,bounce:e=.25,velocity:n=0,mass:r=1}){let s,i,o=1-e;o=Ot(Cn,Vn,o),t=Ot(jn,wn,t/1e3),o<1?(s=u=>{const l=u*o,f=l*t,p=l-n,d=xt(u,o),m=Math.exp(-f);return $t-p/d*m},i=u=>{const f=u*o*t,p=f*n+n,d=Math.pow(o,2)*Math.pow(u,2)*t,m=Math.exp(-f),S=xt(Math.pow(u,2),o);return(-s(u)+$t>0?-1:1)*((p-d)*m)/S}):(s=u=>{const l=Math.exp(-u*t),f=(u-n)*t+1;return-.001+l*f},i=u=>{const l=Math.exp(-u*t),f=(n-u)*(t*t);return l*f});const a=5/t,c=En(s,i,a);if(t=t*1e3,isNaN(c))return{stiffness:100,damping:10,duration:t};{const u=Math.pow(c,2)*r;return{stiffness:u,damping:o*2*Math.sqrt(r*u),duration:t}}}const _n=12;function En(t,e,n){let r=n;for(let s=1;s<_n;s++)r=r-t(r)/e(r);return r}function xt(t,e){return t*Math.sqrt(1-e*e)}const Nn=["duration","bounce"],Fn=["stiffness","damping","mass"];function Ut(t,e){return e.some(n=>t[n]!==void 0)}function Pn(t){let e=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},t);if(!Ut(t,Fn)&&Ut(t,Nn)){const n=Rn(t);e=Object.assign(Object.assign(Object.assign({},e),n),{velocity:0,mass:1}),e.isResolvedFromDuration=!0}return e}function Ct(t){var{from:e=0,to:n=1,restSpeed:r=2,restDelta:s}=t,i=pe(t,["from","to","restSpeed","restDelta"]);const o={done:!1,value:e};let{stiffness:a,damping:c,mass:u,velocity:l,duration:f,isResolvedFromDuration:p}=Pn(i),d=zt,m=zt;function S(){const g=l?-(l/1e3):0,v=n-e,x=c/(2*Math.sqrt(a*u)),b=Math.sqrt(a/u)/1e3;if(s===void 0&&(s=Math.min(Math.abs(n-e)/100,.4)),x<1){const h=xt(b,x);d=O=>{const M=Math.exp(-x*b*O);return n-M*((g+x*b*v)/h*Math.sin(h*O)+v*Math.cos(h*O))},m=O=>{const M=Math.exp(-x*b*O);return x*b*M*(Math.sin(h*O)*(g+x*b*v)/h+v*Math.cos(h*O))-M*(Math.cos(h*O)*(g+x*b*v)-h*v*Math.sin(h*O))}}else if(x===1)d=h=>n-Math.exp(-b*h)*(v+(g+b*v)*h);else{const h=b*Math.sqrt(x*x-1);d=O=>{const M=Math.exp(-x*b*O),V=Math.min(h*O,300);return n-M*((g+x*b*v)*Math.sinh(V)+h*v*Math.cosh(V))/h}}}return S(),{next:g=>{const v=d(g);if(p)o.done=g>=f;else{const x=m(g)*1e3,b=Math.abs(x)<=r,h=Math.abs(n-v)<=s;o.done=b&&h}return o.value=o.done?n:v,o},flipTarget:()=>{l=-l,[e,n]=[n,e],S()}}}Ct.needsInterpolation=(t,e)=>typeof t=="string"||typeof e=="string";const zt=t=>0,de=(t,e,n)=>{const r=e-t;return r===0?1:(n-t)/r},Vt=(t,e,n)=>-n*t+n*e+t,me=(t,e)=>n=>Math.max(Math.min(n,e),t),B=t=>t%1?Number(t.toFixed(5)):t,H=/(-)?([\d]*\.?[\d])+/g,St=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,In=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function W(t){return typeof t=="string"}const K={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},$=Object.assign(Object.assign({},K),{transform:me(0,1)}),G=Object.assign(Object.assign({},K),{default:1}),Rt=t=>({test:e=>W(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),N=Rt("deg"),U=Rt("%"),y=Rt("px"),Ht=Object.assign(Object.assign({},U),{parse:t=>U.parse(t)/100,transform:t=>U.transform(t*100)}),_t=(t,e)=>n=>!!(W(n)&&In.test(n)&&n.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(n,e)),ye=(t,e,n)=>r=>{if(!W(r))return r;const[s,i,o,a]=r.match(H);return{[t]:parseFloat(s),[e]:parseFloat(i),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},I={test:_t("hsl","hue"),parse:ye("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:r=1})=>"hsla("+Math.round(t)+", "+U.transform(B(e))+", "+U.transform(B(n))+", "+B($.transform(r))+")"},Dn=me(0,255),ut=Object.assign(Object.assign({},K),{transform:t=>Math.round(Dn(t))}),_={test:_t("rgb","red"),parse:ye("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:r=1})=>"rgba("+ut.transform(t)+", "+ut.transform(e)+", "+ut.transform(n)+", "+B($.transform(r))+")"};function kn(t){let e="",n="",r="",s="";return t.length>5?(e=t.substr(1,2),n=t.substr(3,2),r=t.substr(5,2),s=t.substr(7,2)):(e=t.substr(1,1),n=t.substr(2,1),r=t.substr(3,1),s=t.substr(4,1),e+=e,n+=n,r+=r,s+=s),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:s?parseInt(s,16)/255:1}}const Mt={test:_t("#"),parse:kn,transform:_.transform},T={test:t=>_.test(t)||Mt.test(t)||I.test(t),parse:t=>_.test(t)?_.parse(t):I.test(t)?I.parse(t):Mt.parse(t),transform:t=>W(t)?t:t.hasOwnProperty("red")?_.transform(t):I.transform(t)},be="${c}",he="${n}";function Ln(t){var e,n,r,s;return isNaN(t)&&W(t)&&((n=(e=t.match(H))===null||e===void 0?void 0:e.length)!==null&&n!==void 0?n:0)+((s=(r=t.match(St))===null||r===void 0?void 0:r.length)!==null&&s!==void 0?s:0)>0}function ge(t){typeof t=="number"&&(t=`${t}`);const e=[];let n=0;const r=t.match(St);r&&(n=r.length,t=t.replace(St,be),e.push(...r.map(T.parse)));const s=t.match(H);return s&&(t=t.replace(H,he),e.push(...s.map(K.parse))),{values:e,numColors:n,tokenised:t}}function ve(t){return ge(t).values}function Oe(t){const{values:e,numColors:n,tokenised:r}=ge(t),s=e.length;return i=>{let o=r;for(let a=0;a<s;a++)o=o.replace(a<n?be:he,a<n?T.transform(i[a]):B(i[a]));return o}}const Bn=t=>typeof t=="number"?0:t;function $n(t){const e=ve(t);return Oe(t)(e.map(Bn))}const Z={test:Ln,parse:ve,createTransformer:Oe,getAnimatableNone:$n},Un=new Set(["brightness","contrast","saturate","opacity"]);function zn(t){let[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[r]=n.match(H)||[];if(!r)return t;const s=n.replace(r,"");let i=Un.has(e)?1:0;return r!==n&&(i*=100),e+"("+i+s+")"}const Hn=/([a-z-]*)\(.*?\)/g,Tt=Object.assign(Object.assign({},Z),{getAnimatableNone:t=>{const e=t.match(Hn);return e?e.map(zn).join(" "):t}});function ft(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function qt({hue:t,saturation:e,lightness:n,alpha:r}){t/=360,e/=100,n/=100;let s=0,i=0,o=0;if(!e)s=i=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,c=2*n-a;s=ft(c,a,t+1/3),i=ft(c,a,t),o=ft(c,a,t-1/3)}return{red:Math.round(s*255),green:Math.round(i*255),blue:Math.round(o*255),alpha:r}}const qn=(t,e,n)=>{const r=t*t,s=e*e;return Math.sqrt(Math.max(0,n*(s-r)+r))},Wn=[Mt,_,I],Wt=t=>Wn.find(e=>e.test(t)),xe=(t,e)=>{let n=Wt(t),r=Wt(e),s=n.parse(t),i=r.parse(e);n===I&&(s=qt(s),n=_),r===I&&(i=qt(i),r=_);const o=Object.assign({},s);return a=>{for(const c in o)c!=="alpha"&&(o[c]=qn(s[c],i[c],a));return o.alpha=Vt(s.alpha,i.alpha,a),n.transform(o)}},Kn=t=>typeof t=="number",Zn=(t,e)=>n=>e(t(n)),Se=(...t)=>t.reduce(Zn);function Me(t,e){return Kn(t)?n=>Vt(t,e,n):T.test(t)?xe(t,e):Ae(t,e)}const Te=(t,e)=>{const n=[...t],r=n.length,s=t.map((i,o)=>Me(i,e[o]));return i=>{for(let o=0;o<r;o++)n[o]=s[o](i);return n}},Yn=(t,e)=>{const n=Object.assign(Object.assign({},t),e),r={};for(const s in n)t[s]!==void 0&&e[s]!==void 0&&(r[s]=Me(t[s],e[s]));return s=>{for(const i in r)n[i]=r[i](s);return n}};function Kt(t){const e=Z.parse(t),n=e.length;let r=0,s=0,i=0;for(let o=0;o<n;o++)r||typeof e[o]=="number"?r++:e[o].hue!==void 0?i++:s++;return{parsed:e,numNumbers:r,numRGB:s,numHSL:i}}const Ae=(t,e)=>{const n=Z.createTransformer(e),r=Kt(t),s=Kt(e);return r.numHSL===s.numHSL&&r.numRGB===s.numRGB&&r.numNumbers>=s.numNumbers?Se(Te(r.parsed,s.parsed),n):o=>`${o>0?e:t}`},Gn=(t,e)=>n=>Vt(t,e,n);function Xn(t){if(typeof t=="number")return Gn;if(typeof t=="string")return T.test(t)?xe:Ae;if(Array.isArray(t))return Te;if(typeof t=="object")return Yn}function Jn(t,e,n){const r=[],s=n||Xn(t[0]),i=t.length-1;for(let o=0;o<i;o++){let a=s(t[o],t[o+1]);if(e){const c=Array.isArray(e)?e[o]:e;a=Se(c,a)}r.push(a)}return r}function Qn([t,e],[n]){return r=>n(de(t,e,r))}function tr(t,e){const n=t.length,r=n-1;return s=>{let i=0,o=!1;if(s<=t[0]?o=!0:s>=t[r]&&(i=r-1,o=!0),!o){let c=1;for(;c<n&&!(t[c]>s||c===r);c++);i=c-1}const a=de(t[i],t[i+1],s);return e[i](a)}}function je(t,e,{clamp:n=!0,ease:r,mixer:s}={}){const i=t.length;Bt(i===e.length),Bt(!r||!Array.isArray(r)||r.length===i-1),t[0]>t[i-1]&&(t=[].concat(t),e=[].concat(e),t.reverse(),e.reverse());const o=Jn(e,r,s),a=i===2?Qn(t,o):tr(t,o);return n?c=>a(Ot(t[0],t[i-1],c)):a}const it=t=>e=>1-t(1-e),Et=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,er=t=>e=>Math.pow(e,t),we=t=>e=>e*e*((t+1)*e-t),nr=t=>{const e=we(t);return n=>(n*=2)<1?.5*e(n):.5*(2-Math.pow(2,-10*(n-1)))},Ce=1.525,rr=4/11,sr=8/11,or=9/10,Ve=t=>t,Nt=er(2),ir=it(Nt),Re=Et(Nt),_e=t=>1-Math.sin(Math.acos(t)),Ee=it(_e),ar=Et(Ee),Ft=we(Ce),cr=it(Ft),lr=Et(Ft),ur=nr(Ce),fr=4356/361,pr=35442/1805,dr=16061/1805,nt=t=>{if(t===1||t===0)return t;const e=t*t;return t<rr?7.5625*e:t<sr?9.075*e-9.9*t+3.4:t<or?fr*e-pr*t+dr:10.8*t*t-20.52*t+10.72},mr=it(nt),yr=t=>t<.5?.5*(1-nt(1-t*2)):.5*nt(t*2-1)+.5;function br(t,e){return t.map(()=>e||Re).splice(0,t.length-1)}function hr(t){const e=t.length;return t.map((n,r)=>r!==0?r/(e-1):0)}function gr(t,e){return t.map(n=>n*e)}function Q({from:t=0,to:e=1,ease:n,offset:r,duration:s=300}){const i={done:!1,value:t},o=Array.isArray(e)?e:[t,e],a=gr(r&&r.length===o.length?r:hr(o),s);function c(){return je(a,o,{ease:Array.isArray(n)?n:br(o,n)})}let u=c();return{next:l=>(i.value=u(l),i.done=l>=s,i),flipTarget:()=>{o.reverse(),u=c()}}}function vr({velocity:t=0,from:e=0,power:n=.8,timeConstant:r=350,restDelta:s=.5,modifyTarget:i}){const o={done:!1,value:e};let a=n*t;const c=e+a,u=i===void 0?c:i(c);return u!==c&&(a=u-e),{next:l=>{const f=-a*Math.exp(-l/r);return o.done=!(f>s||f<-s),o.value=o.done?u:u+f,o},flipTarget:()=>{}}}const Zt={keyframes:Q,spring:Ct,decay:vr};function Or(t){if(Array.isArray(t.to))return Q;if(Zt[t.type])return Zt[t.type];const e=new Set(Object.keys(t));return e.has("ease")||e.has("duration")&&!e.has("dampingRatio")?Q:e.has("dampingRatio")||e.has("stiffness")||e.has("mass")||e.has("damping")||e.has("restSpeed")||e.has("restDelta")?Ct:Q}function Ne(t,e,n=0){return t-e-n}function xr(t,e,n=0,r=!0){return r?Ne(e+-t,e,n):e-(t-e)+n}function Sr(t,e,n,r){return r?t>=e+n:t<=-n}const Mr=t=>{const e=({delta:n})=>t(n);return{start:()=>vt.update(e,!0),stop:()=>Mn.update(e)}};function Fe(t){var e,n,{from:r,autoplay:s=!0,driver:i=Mr,elapsed:o=0,repeat:a=0,repeatType:c="loop",repeatDelay:u=0,onPlay:l,onStop:f,onComplete:p,onRepeat:d,onUpdate:m}=t,S=pe(t,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:g}=S,v,x=0,b=S.duration,h,O=!1,M=!0,V;const Y=Or(S);!((n=(e=Y).needsInterpolation)===null||n===void 0)&&n.call(e,r,g)&&(V=je([0,100],[r,g],{clamp:!1}),r=0,g=100);const R=Y(Object.assign(Object.assign({},S),{from:r,to:g}));function Je(){x++,c==="reverse"?(M=x%2===0,o=xr(o,b,u,M)):(o=Ne(o,b,u),c==="mirror"&&R.flipTarget()),O=!1,d&&d()}function Qe(){v.stop(),p&&p()}function tn(ct){if(M||(ct=-ct),o+=ct,!O){const Lt=R.next(Math.max(0,o));h=Lt.value,V&&(h=V(h)),O=M?Lt.done:o<=0}m==null||m(h),O&&(x===0&&(b??(b=o)),x<a?Sr(o,b,u,M)&&Je():Qe())}function en(){l==null||l(),v=i(tn),v.start()}return s&&en(),{stop:()=>{f==null||f(),v.stop()}}}function Pe(t,e){return e?t*(1e3/e):0}function Tr({from:t=0,velocity:e=0,min:n,max:r,power:s=.8,timeConstant:i=750,bounceStiffness:o=500,bounceDamping:a=10,restDelta:c=1,modifyTarget:u,driver:l,onUpdate:f,onComplete:p,onStop:d}){let m;function S(b){return n!==void 0&&b<n||r!==void 0&&b>r}function g(b){return n===void 0?r:r===void 0||Math.abs(n-b)<Math.abs(r-b)?n:r}function v(b){m==null||m.stop(),m=Fe(Object.assign(Object.assign({},b),{driver:l,onUpdate:h=>{var O;f==null||f(h),(O=b.onUpdate)===null||O===void 0||O.call(b,h)},onComplete:p,onStop:d}))}function x(b){v(Object.assign({type:"spring",stiffness:o,damping:a,restDelta:c},b))}if(S(t))x({from:t,velocity:e,to:g(t)});else{let b=s*e+t;typeof u<"u"&&(b=u(b));const h=g(b),O=h===n?-1:1;let M,V;const Y=R=>{M=V,V=R,e=Pe(R-M,fe().delta),(O===1&&R>h||O===-1&&R<h)&&x({from:R,to:h,velocity:e})};v({type:"decay",from:t,velocity:e,timeConstant:i,power:s,restDelta:c,modifyTarget:u,onUpdate:S(b)?Y:void 0})}return{stop:()=>m==null?void 0:m.stop()}}const Ie=(t,e)=>1-3*e+3*t,De=(t,e)=>3*e-6*t,ke=t=>3*t,rt=(t,e,n)=>((Ie(e,n)*t+De(e,n))*t+ke(e))*t,Le=(t,e,n)=>3*Ie(e,n)*t*t+2*De(e,n)*t+ke(e),Ar=1e-7,jr=10;function wr(t,e,n,r,s){let i,o,a=0;do o=e+(n-e)/2,i=rt(o,r,s)-t,i>0?n=o:e=o;while(Math.abs(i)>Ar&&++a<jr);return o}const Cr=8,Vr=.001;function Rr(t,e,n,r){for(let s=0;s<Cr;++s){const i=Le(e,n,r);if(i===0)return e;const o=rt(e,n,r)-t;e-=o/i}return e}const tt=11,X=1/(tt-1);function _r(t,e,n,r){if(t===e&&n===r)return Ve;const s=new Float32Array(tt);for(let o=0;o<tt;++o)s[o]=rt(o*X,t,n);function i(o){let a=0,c=1;const u=tt-1;for(;c!==u&&s[c]<=o;++c)a+=X;--c;const l=(o-s[c])/(s[c+1]-s[c]),f=a+l*X,p=Le(f,t,n);return p>=Vr?Rr(o,f,t,n):p===0?f:wr(o,a,a+X,t,n)}return o=>o===0||o===1?o:rt(i(o),e,r)}const pt={};var Er=Object.defineProperty,Nr=(t,e,n)=>e in t?Er(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Fr=(t,e,n)=>(Nr(t,e+"",n),n);class Pr{constructor(){Fr(this,"subscriptions",new Set)}add(e){return this.subscriptions.add(e),()=>this.subscriptions.delete(e)}notify(e,n,r){if(this.subscriptions.size)for(const s of this.subscriptions)s(e,n,r)}clear(){this.subscriptions.clear()}}var Ir=Object.defineProperty,Dr=(t,e,n)=>e in t?Ir(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,C=(t,e,n)=>(Dr(t,typeof e!="symbol"?e+"":e,n),n);function Yt(t){return!Number.isNaN(Number.parseFloat(t))}class kr{constructor(e){C(this,"current"),C(this,"prev"),C(this,"timeDelta",0),C(this,"lastUpdated",0),C(this,"updateSubscribers",new Pr),C(this,"stopAnimation"),C(this,"canTrackVelocity",!1),C(this,"updateAndNotify",n=>{this.prev=this.current,this.current=n;const{delta:r,timestamp:s}=fe();this.lastUpdated!==s&&(this.timeDelta=r,this.lastUpdated=s),vt.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)}),C(this,"scheduleVelocityCheck",()=>vt.postRender(this.velocityCheck)),C(this,"velocityCheck",({timestamp:n})=>{this.canTrackVelocity||(this.canTrackVelocity=Yt(this.current)),n!==this.lastUpdated&&(this.prev=this.current)}),this.prev=this.current=e,this.canTrackVelocity=Yt(this.current)}onChange(e){return this.updateSubscribers.add(e)}clearListeners(){this.updateSubscribers.clear()}set(e){this.updateAndNotify(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Pe(Number.parseFloat(this.current)-Number.parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise(n=>{const{stop:r}=e(n);this.stopAnimation=r}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function Lr(t){return new kr(t)}const{isArray:Br}=Array;function $r(){const t=j({}),e=r=>{const s=i=>{t.value[i]&&(t.value[i].stop(),t.value[i].destroy(),delete t.value[i])};r?Br(r)?r.forEach(s):s(r):Object.keys(t.value).forEach(s)},n=(r,s,i)=>{if(t.value[r])return t.value[r];const o=Lr(s);return o.onChange(a=>i[r]=a),t.value[r]=o,o};return bn(e),{motionValues:t,get:n,stop:e}}function Ur(t){return Array.isArray(t)}function F(){return{type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}}function dt(t){return{type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}}function zr(t){return{type:"spring",stiffness:550,damping:t===0?100:30,restDelta:.01,restSpeed:10}}function mt(){return{type:"keyframes",ease:"linear",duration:300}}function Hr(t){return{type:"keyframes",duration:800,values:t}}const Gt={default:zr,x:F,y:F,z:F,rotate:F,rotateX:F,rotateY:F,rotateZ:F,scaleX:dt,scaleY:dt,scale:dt,backgroundColor:mt,color:mt,opacity:mt};function Be(t,e){let n;return Ur(e)?n=Hr:n=Gt[t]||Gt.default,{to:e,...n(e)}}const Xt={...K,transform:Math.round},$e={color:T,backgroundColor:T,outlineColor:T,fill:T,stroke:T,borderColor:T,borderTopColor:T,borderRightColor:T,borderBottomColor:T,borderLeftColor:T,borderWidth:y,borderTopWidth:y,borderRightWidth:y,borderBottomWidth:y,borderLeftWidth:y,borderRadius:y,radius:y,borderTopLeftRadius:y,borderTopRightRadius:y,borderBottomRightRadius:y,borderBottomLeftRadius:y,width:y,maxWidth:y,height:y,maxHeight:y,size:y,top:y,right:y,bottom:y,left:y,padding:y,paddingTop:y,paddingRight:y,paddingBottom:y,paddingLeft:y,margin:y,marginTop:y,marginRight:y,marginBottom:y,marginLeft:y,rotate:N,rotateX:N,rotateY:N,rotateZ:N,scale:G,scaleX:G,scaleY:G,scaleZ:G,skew:N,skewX:N,skewY:N,distance:y,translateX:y,translateY:y,translateZ:y,x:y,y,z:y,perspective:y,transformPerspective:y,opacity:$,originX:Ht,originY:Ht,originZ:y,zIndex:Xt,filter:Tt,WebkitFilter:Tt,fillOpacity:$,strokeOpacity:$,numOctaves:Xt},Pt=t=>$e[t];function At(t,e){return e&&typeof t=="number"&&e.transform?e.transform(t):t}function qr(t,e){let n=Pt(t);return n!==Tt&&(n=Z),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const Wr={linear:Ve,easeIn:Nt,easeInOut:Re,easeOut:ir,circIn:_e,circInOut:ar,circOut:Ee,backIn:Ft,backInOut:lr,backOut:cr,anticipate:ur,bounceIn:mr,bounceInOut:yr,bounceOut:nt};function Jt(t){if(Array.isArray(t)){const[e,n,r,s]=t;return _r(e,n,r,s)}else if(typeof t=="string")return Wr[t];return t}function Kr(t){return Array.isArray(t)&&typeof t[0]!="number"}function Qt(t,e){return t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&Z.test(e)&&!e.startsWith("url("))}function Zr(t){return Array.isArray(t.to)&&t.to[0]===null&&(t.to=[...t.to],t.to[0]=t.from),t}function Yr({ease:t,times:e,delay:n,...r}){const s={...r};return e&&(s.offset=e),t&&(s.ease=Kr(t)?t.map(Jt):Jt(t)),n&&(s.elapsed=-n),s}function Gr(t,e,n){return Array.isArray(e.to)&&(t.duration||(t.duration=800)),Zr(e),Xr(t)||(t={...t,...Be(n,e.to)}),{...e,...Yr(t)}}function Xr({delay:t,repeat:e,repeatType:n,repeatDelay:r,from:s,...i}){return!!Object.keys(i).length}function Jr(t,e){return t[e]||t.default||t}function Qr(t,e,n,r,s){const i=Jr(r,t);let o=i.from===null||i.from===void 0?e.get():i.from;const a=Qt(t,n);o==="none"&&a&&typeof n=="string"&&(o=qr(t,n));const c=Qt(t,o);function u(f){const p={from:o,to:n,velocity:r.velocity?r.velocity:e.getVelocity(),onUpdate:d=>e.set(d)};return i.type==="inertia"||i.type==="decay"?Tr({...p,...i}):Fe({...Gr(i,p,t),onUpdate:d=>{p.onUpdate(d),i.onUpdate&&i.onUpdate(d)},onComplete:()=>{s&&s(),f&&f()}})}function l(f){return e.set(n),s&&s(),f&&f(),{stop:()=>{}}}return!c||!a||i.type===!1?l:u}function ts(){const{motionValues:t,stop:e,get:n}=$r();return{motionValues:t,stop:e,push:(s,i,o,a={},c)=>{const u=o[s],l=n(s,u,o);if(a&&a.immediate){l.set(i);return}const f=Qr(s,l,i,a,c);l.start(f)}}}function es(t,e={},{motionValues:n,push:r,stop:s}=ts()){const i=D(e),o=j(!1);A(n,f=>{o.value=Object.values(f).filter(p=>p.isAnimating()).length>0},{immediate:!0,deep:!0});const a=f=>{if(!i||!i[f])throw new Error(`The variant ${f} does not exist.`);return i[f]},c=f=>{typeof f=="string"&&(f=a(f));const p=Object.entries(f).map(([m,S])=>{if(m!=="transition")return new Promise(g=>r(m,S,t,f.transition||Be(m,f[m]),g))}).filter(Boolean);async function d(){var m,S;await Promise.all(p),(S=(m=f.transition)==null?void 0:m.onComplete)==null||S.call(m)}return Promise.all([d()])};return{isAnimating:o,apply:c,set:f=>{const p=et(f)?f:a(f);Object.entries(p).forEach(([d,m])=>{d!=="transition"&&r(d,m,t,{immediate:!0})})},leave:async f=>{let p;if(i&&(i.leave&&(p=i.leave),!i.leave&&i.initial&&(p=i.initial)),!p){f();return}await c(p),f()},stop:s}}const It=typeof window<"u",ns=()=>It&&(window.onpointerdown===null||void 0),rs=()=>It&&(window.ontouchstart===null||void 0),ss=()=>It&&(window.onmousedown===null||void 0);function os({target:t,state:e,variants:n,apply:r}){const s=D(n),i=j(!1),o=j(!1),a=j(!1),c=E(()=>{let l=[...Object.keys(e.value||{})];return s&&(s.hovered&&(l=[...l,...Object.keys(s.hovered)]),s.tapped&&(l=[...l,...Object.keys(s.tapped)]),s.focused&&(l=[...l,...Object.keys(s.focused)])),l}),u=E(()=>{const l={};Object.assign(l,e.value),i.value&&s.hovered&&Object.assign(l,s.hovered),o.value&&s.tapped&&Object.assign(l,s.tapped),a.value&&s.focused&&Object.assign(l,s.focused);for(const f in l)c.value.includes(f)||delete l[f];return l});s.hovered&&(w(t,"mouseenter",()=>i.value=!0),w(t,"mouseleave",()=>{i.value=!1,o.value=!1})),s.tapped&&(ss()&&(w(t,"mousedown",()=>o.value=!0),w(t,"mouseup",()=>o.value=!1)),ns()&&(w(t,"pointerdown",()=>o.value=!0),w(t,"pointerup",()=>o.value=!1)),rs()&&(w(t,"touchstart",()=>o.value=!0),w(t,"touchend",()=>o.value=!1))),s.focused&&(w(t,"focus",()=>a.value=!0),w(t,"blur",()=>a.value=!1)),A([i,o,a],()=>{r(u.value)})}function is({set:t,target:e,variants:n,variant:r}){const s=D(n);A(()=>e,()=>{s&&(s.initial&&(t("initial"),r.value="initial"),s.enter&&(r.value="enter"))},{immediate:!0,flush:"pre"})}function as({state:t,apply:e}){A(t,n=>{n&&e(n)},{immediate:!0})}function Ue({target:t,variants:e,variant:n}){const r=D(e);r&&(r.visible||r.visibleOnce)&&vn(t,([{isIntersecting:s}])=>{r.visible?s?n.value="visible":n.value="initial":r.visibleOnce&&(s&&n.value!=="visibleOnce"?n.value="visibleOnce":n.value||(n.value="initial"))})}function cs(t,e={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){e.lifeCycleHooks&&is(t),e.syncVariants&&as(t),e.visibilityHooks&&Ue(t),e.eventListeners&&os(t)}function ze(t={}){const e=st({...t}),n=j({});return A(e,()=>{const r={};for(const[s,i]of Object.entries(e)){const o=Pt(s),a=At(i,o);r[s]=a}n.value=r},{immediate:!0,deep:!0}),{state:e,style:n}}function Dt(t,e){A(()=>L(t),n=>{n&&e(n)},{immediate:!0})}const ls={x:"translateX",y:"translateY",z:"translateZ"};function He(t={},e=!0){const n=st({...t}),r=j("");return A(n,s=>{let i="",o=!1;if(e&&(s.x||s.y||s.z)){const a=[s.x||0,s.y||0,s.z||0].map(c=>At(c,y)).join(",");i+=`translate3d(${a}) `,o=!0}for(const[a,c]of Object.entries(s)){if(e&&(a==="x"||a==="y"||a==="z"))continue;const u=Pt(a),l=At(c,u);i+=`${ls[a]||a}(${l}) `}e&&!o&&(i+="translateZ(0px) "),r.value=i.trim()},{immediate:!0,deep:!0}),{state:n,transform:r}}const us=["","X","Y","Z"],fs=["perspective","translate","scale","rotate","skew"],qe=["transformPerspective","x","y","z"];fs.forEach(t=>{us.forEach(e=>{const n=t+e;qe.push(n)})});const ps=new Set(qe);function kt(t){return ps.has(t)}const ds=new Set(["originX","originY","originZ"]);function We(t){return ds.has(t)}function ms(t){const e={},n={};return Object.entries(t).forEach(([r,s])=>{kt(r)||We(r)?e[r]=s:n[r]=s}),{transform:e,style:n}}function at(t){const{transform:e,style:n}=ms(t),{transform:r}=He(e),{style:s}=ze(n);return r.value&&(s.value.transform=r.value),s.value}function ys(t,e){let n,r;const{state:s,style:i}=ze();return Dt(t,o=>{r=o;for(const a of Object.keys($e))o.style[a]===null||o.style[a]===""||kt(a)||We(a)||(s[a]=o.style[a]);n&&Object.entries(n).forEach(([a,c])=>o.style[a]=c),e&&e(s)}),A(i,o=>{if(!r){n=o;return}for(const a in o)r.style[a]=o[a]},{immediate:!0}),{style:s}}function bs(t){const e=t.trim().split(/\) |\)/);if(e.length===1)return{};const n=r=>r.endsWith("px")||r.endsWith("deg")?Number.parseFloat(r):Number.isNaN(Number(r))?Number(r):r;return e.reduce((r,s)=>{if(!s)return r;const[i,o]=s.split("("),c=o.split(",").map(l=>n(l.endsWith(")")?l.replace(")",""):l.trim())),u=c.length===1?c[0]:c;return{...r,[i]:u}},{})}function hs(t,e){Object.entries(bs(e)).forEach(([n,r])=>{const s=["x","y","z"];if(n==="translate3d"){if(r===0){s.forEach(i=>t[i]=0);return}r.forEach((i,o)=>t[s[o]]=i);return}if(r=Number.parseFloat(`${r}`),n==="translateX"){t.x=r;return}if(n==="translateY"){t.y=r;return}if(n==="translateZ"){t.z=r;return}t[n]=r})}function gs(t,e){let n,r;const{state:s,transform:i}=He();return Dt(t,o=>{r=o,o.style.transform&&hs(s,o.style.transform),n&&(o.style.transform=n),e&&e(s)}),A(i,o=>{if(!r){n=o;return}r.style.transform=o},{immediate:!0}),{transform:s}}function vs(t){return Object.entries(t)}function Os(t,e){const n=st({}),r=o=>Object.entries(o).forEach(([a,c])=>n[a]=c),{style:s}=ys(t,r),{transform:i}=gs(t,r);return A(n,o=>{vs(o).forEach(([a,c])=>{const u=kt(a)?i:s;u[a]&&u[a]===c||(u[a]=c)})},{immediate:!0,deep:!0}),Dt(t,()=>e),{motionProperties:n,style:s,transform:i}}function xs(t={}){const e=D(t),n=j();return{state:E(()=>{if(n.value)return e[n.value]}),variant:n}}function Ke(t,e={},n){const{motionProperties:r}=Os(t),{variant:s,state:i}=xs(e),o=es(r,e),a={target:t,variant:s,variants:e,state:i,motionProperties:r,...o};return cs(a,n),a}const Ze=["delay","duration"],Ss=["initial","enter","leave","visible","visible-once","visibleOnce","hovered","tapped","focused",...Ze];function Ms(t){return Ze.includes(t)}function Ts(t,e){const n=t.props?t.props:t.data&&t.data.attrs?t.data.attrs:{};if(n){n.variants&&et(n.variants)&&(e.value={...e.value,...n.variants});for(let r of Ss)if(!(!n||!n[r])){if(Ms(r)&&typeof n[r]=="number"){for(const s of["enter","visible","visibleOnce"]){const i=e.value[s];i!=null&&(i.transition??(i.transition={}),i.transition[r]=n[r])}continue}if(et(n[r])){const s=n[r];r==="visible-once"&&(r="visibleOnce"),e.value[r]=s}}}}function yt(t,e=!1){return{created:(s,i,o)=>{const a=i.value&&typeof i.value=="string"?i.value:o.key;a&&pt[a]&&pt[a].stop();const c=e?structuredClone(se(t)||{}):t||{},u=j(c);typeof i.value=="object"&&(u.value=i.value),Ts(o,u);const f=Ke(s,u,{eventListeners:!0,lifeCycleHooks:!0,syncVariants:!0,visibilityHooks:!1});s.motionInstance=f,a&&(pt[a]=f)},mounted:(s,i,o)=>{s.motionInstance&&Ue(s.motionInstance)},getSSRProps(s,i){let{initial:o}=s.value||i&&(i==null?void 0:i.props)||{};o=D(o);const a=oe({},(t==null?void 0:t.initial)||{},o||{});return!a||Object.keys(a).length===0?void 0:{style:at(a)}}}}const As={initial:{opacity:0},enter:{opacity:1}},js={initial:{opacity:0},visible:{opacity:1}},ws={initial:{opacity:0},visibleOnce:{opacity:1}},Cs={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},Vs={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},Rs={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},_s={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},Es={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},Ns={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},Fs={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},Ps={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},Is={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},Ds={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},ks={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},Ls={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},Bs={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},$s={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},Us={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},zs={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},Hs={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},qs={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},Ws={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},Ks={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},Zs={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},Ys={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},Gs={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},Xs={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},Js={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},Qs={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},to={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},P={__proto__:null,fade:As,fadeVisible:js,fadeVisibleOnce:ws,pop:Cs,popVisible:Vs,popVisibleOnce:Rs,rollBottom:Bs,rollLeft:_s,rollRight:Fs,rollTop:Ds,rollVisibleBottom:$s,rollVisibleLeft:Es,rollVisibleOnceBottom:Us,rollVisibleOnceLeft:Ns,rollVisibleOnceRight:Is,rollVisibleOnceTop:Ls,rollVisibleRight:Ps,rollVisibleTop:ks,slideBottom:Js,slideLeft:zs,slideRight:Ws,slideTop:Ys,slideVisibleBottom:Qs,slideVisibleLeft:Hs,slideVisibleOnceBottom:to,slideVisibleOnceLeft:qs,slideVisibleOnceRight:Zs,slideVisibleOnceTop:Xs,slideVisibleRight:Ks,slideVisibleTop:Gs};function eo(t){const e="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",n="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",r=new RegExp(e.split("").join("|"),"g");return t.toString().replace(/[A-Z]/g,s=>`-${s}`).toLowerCase().replace(/\s+/g,"-").replace(r,s=>n.charAt(e.indexOf(s))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/-{2,}/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const Ye=Symbol(import.meta.dev?"motionCustomPresets":""),Ge={preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1},duration:{type:[Number,String],required:!1}};function no(t){return Object.prototype.toString.call(t)==="[object Object]"}function jt(t){if(Array.isArray(t))return t.map(jt);if(no(t)){const e={};for(const n in t)e[n]=jt(t[n]);return e}return t}function Xe(t){const e=st({}),n=cn(Ye,{}),r=E(()=>t.preset==null?{}:n!=null&&t.preset in n?structuredClone(se(n)[t.preset]):t.preset in P?structuredClone(P[t.preset]):{}),s=E(()=>({initial:t.initial,enter:t.enter,leave:t.leave,visible:t.visible,visibleOnce:t.visibleOnce,hovered:t.hovered,tapped:t.tapped,focused:t.focused}));function i(c,u){for(const l of["delay","duration"]){if(u[l]==null)continue;const f=Number.parseInt(u[l]);for(const p of["enter","visible","visibleOnce"]){const d=c[p];d!=null&&(d.transition??(d.transition={}),d.transition[l]=f)}}return c}const o=E(()=>{const c=oe({},s.value,r.value,t.variants||{});return i({...c},t)});if(import.meta.dev){t.preset!=null&&(P==null?void 0:P[t.preset])==null&&(n==null?void 0:n[t.preset])==null&&console.warn(`[@vueuse/motion]: Preset \`${t.preset}\` not found.`);const c=u=>{var l;(l=u.variants)!=null&&l.initial&&u.set("initial"),un(()=>{var f,p,d;(f=u.variants)!=null&&f.enter&&u.apply("enter"),(p=u.variants)!=null&&p.visible&&u.apply("visible"),(d=u.variants)!=null&&d.visibleOnce&&u.apply("visibleOnce")})};ln(()=>{for(const u in e)c(e[u])})}function a(c,u,l){var f;c.props??(c.props={}),(f=c.props).style??(f.style={}),c.props.style={...c.props.style,...l};const p=i(jt(o.value),c.props);return c.props.onVnodeMounted=({el:d})=>{e[u]=Ke(d,p)},c.props.onVnodeUpdated=({el:d})=>{const m=at(e[u].state);for(const[S,g]of Object.entries(m))d.style[S]=g},c}return{motionConfig:o,setNodeInstance:a}}const ro=ee({name:"Motion",props:{...Ge,is:{type:[String,Object],default:"div"}},setup(t){const e=ne(),{motionConfig:n,setNodeInstance:r}=Xe(t);return()=>{const s=at(n.value.initial||{}),i=re(t.is,void 0,e);return r(i,0,s),i}}}),so=ee({name:"MotionGroup",props:{...Ge,is:{type:[String,Object],required:!1}},setup(t){const e=ne(),{motionConfig:n,setNodeInstance:r}=Xe(t);return()=>{var o;const s=at(n.value.initial||{}),i=((o=e.default)==null?void 0:o.call(e))||[];for(let a=0;a<i.length;a++){const c=i[a];c.type===an&&Array.isArray(c.children)?c.children.forEach(function u(l,f){if(l!=null){if(Array.isArray(l)){u(l,f);return}typeof l=="object"&&r(l,f,s)}}):r(c,a,s)}return t.is?re(t.is,void 0,i):i}}}),io={install(t,e){if(t.directive("motion",yt()),!e||e&&!e.excludePresets)for(const n in P){const r=P[n];t.directive(`motion-${eo(n)}`,yt(r,!0))}if(e&&e.directives)for(const n in e.directives){const r=e.directives[n];!r.initial&&import.meta.dev&&console.warn(`Your directive v-motion-${n} is missing initial variant!`),t.directive(`motion-${n}`,yt(r,!0))}t.provide(Ye,e==null?void 0:e.directives),t.component("Motion",ro),t.component("MotionGroup",so)}};export{io as M,fn as c,oe as d,Ke as u};
