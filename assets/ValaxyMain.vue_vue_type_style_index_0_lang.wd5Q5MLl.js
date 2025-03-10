import{l as e,u as t,G as o,g as n,H as a,I as r,J as i,K as l,p as s,a as c,k as d,L as m}from"./app.COLY0ofa.js";import{_ as u}from"./YunComment.vue_vue_type_style_index_0_lang.Ct5wO8-8.js";import{d as f}from"./chunks/dayjs.luRsnflP.js";import{a as p,u as v}from"./chunks/vue-router.FRuIlhSQ.js";import{d as g,c as h,f as b,P as y,R as _,N as E,V as z,u as w,M as x,$ as k,S as L,O as C,r as A,k as I,X as H,Q as O,n as T,B as S,Z as N}from"./framework.CXYGarVr.js";import{i as $}from"./chunks/nprogress.D_IOsJtP.js";import{u as M}from"./chunks/vue-i18n.BG5xGR4q.js";import{_ as j}from"./YunPageHeader.vue_vue_type_script_setup_true_lang.REEBqsfl.js";import{u as R}from"./post.Cu_cLBvg.js";function q(e){const t=e.cloneNode(!0);t.style.cssText="\n      position: absolute;\n      visibility: hidden;\n      display: block;\n      left: -9999px;\n  ",document.body.appendChild(t);const o=t.scrollHeight;return document.body.removeChild(t),o}function P(){if($){const e=new WeakMap;window.addEventListener("click",(t=>{var o;const n=t.target;if(n.matches('div[class*="language-"] > button.copy')){const t=n.parentElement,a=null==(o=n.nextElementSibling)?void 0:o.nextElementSibling;if(!t||!a)return;const r=/language-(shellscript|shell|bash|sh|zsh)/.test(t.className);let i="";a.querySelectorAll("span.line:not(.diff.remove)").forEach((e=>i+=`${e.textContent||""}\n`)),i=i.slice(0,-1),r&&(i=i.replace(/^ *(\$|>) /gm,"").trim()),async function(e){try{return navigator.clipboard.writeText(e)}catch{const t=document.createElement("textarea"),o=document.activeElement;t.value=e,t.setAttribute("readonly",""),t.style.contain="strict",t.style.position="absolute",t.style.left="-9999px",t.style.fontSize="12pt";const n=document.getSelection(),a=n?n.rangeCount>0&&n.getRangeAt(0):null;document.body.appendChild(t),t.select(),t.selectionStart=0,t.selectionEnd=e.length,document.execCommand("copy"),document.body.removeChild(t),a&&(n.removeAllRanges(),n.addRange(a)),o&&o.focus()}}
/*! medium-zoom 1.1.0 | MIT License | https://github.com/francoischalifour/medium-zoom */(i).then((()=>{n.classList.add("copied"),clearTimeout(e.get(n));const t=setTimeout((()=>{n.classList.remove("copied"),n.blur(),e.delete(n)}),2e3);e.set(n,t)}))}}))}}var B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},V=function(e){return"IMG"===e.tagName},Y=function(e){return e&&1===e.nodeType},G=function(e){return".svg"===(e.currentSrc||e.src).substr(-4).toLowerCase()},D=function(e){try{return Array.isArray(e)?e.filter(V):function(e){return NodeList.prototype.isPrototypeOf(e)}(e)?[].slice.call(e).filter(V):Y(e)?[e].filter(V):"string"==typeof e?[].slice.call(document.querySelectorAll(e)).filter(V):[]}catch(t){throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom")}},U=function(e,t){var o=B({bubbles:!1,cancelable:!1,detail:void 0},t);if("function"==typeof window.CustomEvent)return new CustomEvent(e,o);var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,o.bubbles,o.cancelable,o.detail),n},F=function e(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=window.Promise||function(e){function t(){}e(t,t)},a=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];var n=t.reduce((function(e,t){return[].concat(e,D(t))}),[]);return n.filter((function(e){return-1===s.indexOf(e)})).forEach((function(e){s.push(e),e.classList.add("medium-zoom-image")})),c.forEach((function(e){var t=e.type,o=e.listener,a=e.options;n.forEach((function(e){e.addEventListener(t,o,a)}))})),v},r=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).target,t=function(){var e={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},t=void 0,o=void 0;if(u.container)if(u.container instanceof Object)t=(e=B({},e,u.container)).width-e.left-e.right-2*u.margin,o=e.height-e.top-e.bottom-2*u.margin;else{var n=(Y(u.container)?u.container:document.querySelector(u.container)).getBoundingClientRect(),a=n.width,r=n.height,i=n.left,l=n.top;e=B({},e,{width:a,height:r,left:i,top:l})}t=t||e.width-2*u.margin,o=o||e.height-2*u.margin;var s=f.zoomedHd||f.original,c=G(s)?t:s.naturalWidth||t,d=G(s)?o:s.naturalHeight||o,m=s.getBoundingClientRect(),p=m.top,v=m.left,g=m.width,h=m.height,b=Math.min(Math.max(g,c),t)/g,y=Math.min(Math.max(h,d),o)/h,_=Math.min(b,y),E="scale("+_+") translate3d("+((t-g)/2-v+u.margin+e.left)/_+"px, "+((o-h)/2-p+u.margin+e.top)/_+"px, 0)";f.zoomed.style.transform=E,f.zoomedHd&&(f.zoomedHd.style.transform=E)};return new n((function(o){if(e&&-1===s.indexOf(e))o(v);else{if(f.zoomed)o(v);else{if(e)f.original=e;else{if(!(s.length>0))return void o(v);var n=s;f.original=n[0]}if(f.original.dispatchEvent(U("medium-zoom:open",{detail:{zoom:v}})),m=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,d=!0,f.zoomed=function(e){var t=e.getBoundingClientRect(),o=t.top,n=t.left,a=t.width,r=t.height,i=e.cloneNode(),l=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,s=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return i.removeAttribute("id"),i.style.position="absolute",i.style.top=o+l+"px",i.style.left=n+s+"px",i.style.width=a+"px",i.style.height=r+"px",i.style.transform="",i}(f.original),document.body.appendChild(p),u.template){var a=Y(u.template)?u.template:document.querySelector(u.template);f.template=document.createElement("div"),f.template.appendChild(a.content.cloneNode(!0)),document.body.appendChild(f.template)}if(f.original.parentElement&&"PICTURE"===f.original.parentElement.tagName&&f.original.currentSrc&&(f.zoomed.src=f.original.currentSrc),document.body.appendChild(f.zoomed),window.requestAnimationFrame((function(){document.body.classList.add("medium-zoom--opened")})),f.original.classList.add("medium-zoom-image--hidden"),f.zoomed.classList.add("medium-zoom-image--opened"),f.zoomed.addEventListener("click",i),f.zoomed.addEventListener("transitionend",(function e(){d=!1,f.zoomed.removeEventListener("transitionend",e),f.original.dispatchEvent(U("medium-zoom:opened",{detail:{zoom:v}})),o(v)})),f.original.getAttribute("data-zoom-src")){f.zoomedHd=f.zoomed.cloneNode(),f.zoomedHd.removeAttribute("srcset"),f.zoomedHd.removeAttribute("sizes"),f.zoomedHd.removeAttribute("loading"),f.zoomedHd.src=f.zoomed.getAttribute("data-zoom-src"),f.zoomedHd.onerror=function(){clearInterval(r),f.zoomedHd=null,t()};var r=setInterval((function(){f.zoomedHd.complete&&(clearInterval(r),f.zoomedHd.classList.add("medium-zoom-image--opened"),f.zoomedHd.addEventListener("click",i),document.body.appendChild(f.zoomedHd),t())}),10)}else if(f.original.hasAttribute("srcset")){f.zoomedHd=f.zoomed.cloneNode(),f.zoomedHd.removeAttribute("sizes"),f.zoomedHd.removeAttribute("loading");var l=f.zoomedHd.addEventListener("load",(function(){f.zoomedHd.removeEventListener("load",l),f.zoomedHd.classList.add("medium-zoom-image--opened"),f.zoomedHd.addEventListener("click",i),document.body.appendChild(f.zoomedHd),t()}))}else t()}}}))},i=function(){return new n((function(e){if(!d&&f.original){d=!0,document.body.classList.remove("medium-zoom--opened"),f.zoomed.style.transform="",f.zoomedHd&&(f.zoomedHd.style.transform=""),f.template&&(f.template.style.transition="opacity 150ms",f.template.style.opacity=0),f.original.dispatchEvent(U("medium-zoom:close",{detail:{zoom:v}})),f.zoomed.addEventListener("transitionend",(function t(){f.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(f.zoomed),f.zoomedHd&&document.body.removeChild(f.zoomedHd),document.body.removeChild(p),f.zoomed.classList.remove("medium-zoom-image--opened"),f.template&&document.body.removeChild(f.template),d=!1,f.zoomed.removeEventListener("transitionend",t),f.original.dispatchEvent(U("medium-zoom:closed",{detail:{zoom:v}})),f.original=null,f.zoomed=null,f.zoomedHd=null,f.template=null,e(v)}))}else e(v)}))},l=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).target;return f.original?i():r({target:e})},s=[],c=[],d=!1,m=0,u=o,f={original:null,zoomed:null,zoomedHd:null,template:null};"[object Object]"===Object.prototype.toString.call(t)?u=t:(t||"string"==typeof t)&&a(t);var p=function(e){var t=document.createElement("div");return t.classList.add("medium-zoom-overlay"),t.style.background=e,t}((u=B({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},u)).background);document.addEventListener("click",(function(e){var t=e.target;t!==p?-1!==s.indexOf(t)&&l({target:t}):i()})),document.addEventListener("keyup",(function(e){var t=e.key||e.keyCode;"Escape"!==t&&"Esc"!==t&&27!==t||i()})),document.addEventListener("scroll",(function(){if(!d&&f.original){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(m-e)>u.scrollOffset&&setTimeout(i,150)}})),window.addEventListener("resize",i);var v={open:r,close:i,toggle:l,update:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e;if(e.background&&(p.style.background=e.background),e.container&&e.container instanceof Object&&(t.container=B({},u.container,e.container)),e.template){var o=Y(e.template)?e.template:document.querySelector(e.template);t.template=o}return u=B({},u,t),s.forEach((function(e){e.dispatchEvent(U("medium-zoom:update",{detail:{zoom:v}}))})),v},clone:function(){return e(B({},u,arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}))},attach:a,detach:function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];f.zoomed&&i();var n=t.length>0?t.reduce((function(e,t){return[].concat(e,D(t))}),[]):s;return n.forEach((function(e){e.classList.remove("medium-zoom-image"),e.dispatchEvent(U("medium-zoom:detach",{detail:{zoom:v}}))})),s=s.filter((function(e){return-1===n.indexOf(e)})),v},on:function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return s.forEach((function(n){n.addEventListener("medium-zoom:"+e,t,o)})),c.push({type:"medium-zoom:"+e,listener:t,options:o}),v},off:function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return s.forEach((function(n){n.removeEventListener("medium-zoom:"+e,t,o)})),c=c.filter((function(o){return!(o.type==="medium-zoom:"+e&&o.listener.toString()===t.toString())})),v},getOptions:function(){return u},getImages:function(){return s},getZoomedImage:function(){return f.original}};return v};function K(e,t,o={smooth:!0,targetPadding:-64}){let n=null;try{n=e.classList.contains("header-anchor")?e:decodeURIComponent(t)&&document.querySelector(decodeURIComponent(t))||null}catch(a){}if(n){const e=(null==o?void 0:o.targetPadding)||-64,t=window.scrollY+n.getBoundingClientRect().top+e;!o.smooth||Math.abs(t-window.scrollY)>window.innerHeight?window.scrollTo(0,t):window.scrollTo({top:t,behavior:"smooth"})}}function J(e=document){e.querySelectorAll("table").forEach((e=>{var t;if(null==(t=e.parentElement)?void 0:t.classList.contains("table-container"))return;document.createElement("div").className="table-container",function(e,t){const o=document.createElement("div");o.className=t,e.parentNode.insertBefore(o,e),e.parentNode.removeChild(e),o.appendChild(e)}(e,"table-container")}))}!function(e,t){void 0===t&&(t={});var o=t.insertAt;if("undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===o&&n.firstChild?n.insertBefore(a,n.firstChild):n.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}(".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}");const W={class:"post-nav"},Z={class:"post-nav-item"},Q={class:"title truncate",text:"sm"},X={class:"post-nav-item"},ee={class:"title truncate",text:"sm"},te=b({__name:"YunPostNav",setup(e){const[t,o]=function(){const e=p(),t=h((()=>e.path)),o=n(),a=h((()=>{let e=-1;return o.postList.find(((o,n)=>o.path===t.value&&(e=n,!0))),e}));return[h((()=>a.value-1>=0?o.postList[a.value-1]:null)),h((()=>a.value+1<o.postList.length?o.postList[a.value+1]:null))]}();return(e,n)=>{const a=x("RouterLink");return C(),y("div",W,[_("div",Z,[w(t)?(C(),E(a,{key:0,class:"post-nav-prev",to:w(t).path||"",title:w(t).title},{default:k((()=>[n[0]||(n[0]=_("div",{class:"icon","i-ri-arrow-left-s-line":""},null,-1)),_("span",Q,L(w(t).title),1)])),_:1},8,["to","title"])):z("v-if",!0)]),_("div",X,[w(o)?(C(),E(a,{key:0,to:w(o).path||"",title:w(o).title,class:"post-nav-next"},{default:k((()=>[_("span",ee,L(w(o).title),1),n[1]||(n[1]=_("div",{class:"icon","i-ri-arrow-right-s-line":""},null,-1))])),_:1},8,["to","title"])):z("v-if",!0)])])}}});const oe="undefined"!=typeof window,ne=oe&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),ae=oe&&window.devicePixelRatio>1,re={elements_selector:".lazy",container:ne||oe?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_bg_set:"bg-set",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1,restore_on_error:!1},ie=e=>Object.assign({},re,e),le=function(e,t){let o;const n="LazyLoad::Initialized",a=new e(t);try{o=new CustomEvent(n,{detail:{instance:a}})}catch(r){o=document.createEvent("CustomEvent"),o.initCustomEvent(n,!1,!1,{instance:a})}window.dispatchEvent(o)},se="src",ce="srcset",de="sizes",me="poster",ue="llOriginalAttrs",fe="data",pe="loading",ve="loaded",ge="applied",he="error",be="native",ye="data-",_e="ll-status",Ee=(e,t)=>e.getAttribute(ye+t),ze=e=>Ee(e,_e),we=(e,t)=>((e,t,o)=>{const n=ye+t;null!==o?e.setAttribute(n,o):e.removeAttribute(n)})(e,_e,t),xe=e=>we(e,null),ke=e=>null===ze(e),Le=e=>ze(e)===be,Ce=[pe,ve,ge,he],Ae=(e,t,o,n)=>{e&&"function"==typeof e&&(void 0===n?void 0===o?e(t):e(t,o):e(t,o,n))},Ie=(e,t)=>{oe&&""!==t&&e.classList.add(t)},He=(e,t)=>{oe&&""!==t&&e.classList.remove(t)},Oe=e=>e.llTempImage,Te=(e,t)=>{if(!t)return;const o=t._observer;o&&o.unobserve(e)},Se=(e,t)=>{e&&(e.loadingCount+=t)},Ne=(e,t)=>{e&&(e.toLoadCount=t)},$e=e=>{let t=[];for(let o,n=0;o=e.children[n];n+=1)"SOURCE"===o.tagName&&t.push(o);return t},Me=(e,t)=>{const o=e.parentNode;o&&"PICTURE"===o.tagName&&$e(o).forEach(t)},je=(e,t)=>{$e(e).forEach(t)},Re=[se],qe=[se,me],Pe=[se,ce,de],Be=[fe],Ve=e=>!!e[ue],Ye=e=>e[ue],Ge=e=>delete e[ue],De=(e,t)=>{if(Ve(e))return;const o={};t.forEach((t=>{o[t]=e.getAttribute(t)})),e[ue]=o},Ue=(e,t)=>{if(!Ve(e))return;const o=Ye(e);t.forEach((t=>{var n,a,r;n=e,a=t,(r=o[t])?n.setAttribute(a,r):n.removeAttribute(a)}))},Fe=(e,t,o)=>{Ie(e,t.class_applied),we(e,ge),o&&(t.unobserve_completed&&Te(e,t),Ae(t.callback_applied,e,o))},Ke=(e,t,o)=>{Ie(e,t.class_loading),we(e,pe),o&&(Se(o,1),Ae(t.callback_loading,e,o))},Je=(e,t,o)=>{o&&e.setAttribute(t,o)},We=(e,t)=>{Je(e,de,Ee(e,t.data_sizes)),Je(e,ce,Ee(e,t.data_srcset)),Je(e,se,Ee(e,t.data_src))},Ze={IMG:(e,t)=>{Me(e,(e=>{De(e,Pe),We(e,t)})),De(e,Pe),We(e,t)},IFRAME:(e,t)=>{De(e,Re),Je(e,se,Ee(e,t.data_src))},VIDEO:(e,t)=>{je(e,(e=>{De(e,Re),Je(e,se,Ee(e,t.data_src))})),De(e,qe),Je(e,me,Ee(e,t.data_poster)),Je(e,se,Ee(e,t.data_src)),e.load()},OBJECT:(e,t)=>{De(e,Be),Je(e,fe,Ee(e,t.data_src))}},Qe=["IMG","IFRAME","VIDEO","OBJECT"],Xe=(e,t)=>{!t||(e=>e.loadingCount>0)(t)||(e=>e.toLoadCount>0)(t)||Ae(e.callback_finish,t)},et=(e,t,o)=>{e.addEventListener(t,o),e.llEvLisnrs[t]=o},tt=(e,t,o)=>{e.removeEventListener(t,o)},ot=e=>!!e.llEvLisnrs,nt=e=>{if(!ot(e))return;const t=e.llEvLisnrs;for(let o in t){const n=t[o];tt(e,o,n)}delete e.llEvLisnrs},at=(e,t,o)=>{var n;(e=>{delete e.llTempImage})(e),Se(o,-1),(n=o)&&(n.toLoadCount-=1),He(e,t.class_loading),t.unobserve_completed&&Te(e,o)},rt=(e,t,o)=>{const n=Oe(e)||e;ot(n)||((e,t,o)=>{ot(e)||(e.llEvLisnrs={});const n="VIDEO"===e.tagName?"loadeddata":"load";et(e,n,t),et(e,"error",o)})(n,(a=>{((e,t,o,n)=>{const a=Le(t);at(t,o,n),Ie(t,o.class_loaded),we(t,ve),Ae(o.callback_loaded,t,n),a||Xe(o,n)})(0,e,t,o),nt(n)}),(a=>{((e,t,o,n)=>{const a=Le(t);at(t,o,n),Ie(t,o.class_error),we(t,he),Ae(o.callback_error,t,n),o.restore_on_error&&Ue(t,Pe),a||Xe(o,n)})(0,e,t,o),nt(n)}))},it=(e,t,o)=>{var n,a,r,i;i=e,Qe.indexOf(i.tagName)>-1?((e,t,o)=>{rt(e,t,o),((e,t,o)=>{const n=Ze[e.tagName];n&&(n(e,t),Ke(e,t,o))})(e,t,o)})(e,t,o):(a=t,r=o,(e=>{e.llTempImage=document.createElement("IMG")})(n=e),rt(n,a,r),(e=>{Ve(e)||(e[ue]={backgroundImage:e.style.backgroundImage})})(n),((e,t,o)=>{const n=Ee(e,t.data_bg),a=Ee(e,t.data_bg_hidpi),r=ae&&a?a:n;r&&(e.style.backgroundImage=`url("${r}")`,Oe(e).setAttribute(se,r),Ke(e,t,o))})(n,a,r),((e,t,o)=>{const n=Ee(e,t.data_bg_multi),a=Ee(e,t.data_bg_multi_hidpi),r=ae&&a?a:n;r&&(e.style.backgroundImage=r,Fe(e,t,o))})(n,a,r),((e,t,o)=>{const n=Ee(e,t.data_bg_set);if(!n)return;let a=n.split("|").map((e=>`image-set(${e})`));e.style.backgroundImage=a.join(),Fe(e,t,o)})(n,a,r))},lt=(e,t,o)=>{e.setAttribute("loading","lazy"),rt(e,t,o),((e,t)=>{const o=Ze[e.tagName];o&&o(e,t)})(e,t),we(e,be)},st=e=>{e.removeAttribute(se),e.removeAttribute(ce),e.removeAttribute(de)},ct=e=>{Me(e,(e=>{Ue(e,Pe)})),Ue(e,Pe)},dt={IMG:ct,IFRAME:e=>{Ue(e,Re)},VIDEO:e=>{je(e,(e=>{Ue(e,Re)})),Ue(e,qe),e.load()},OBJECT:e=>{Ue(e,Be)}},mt=(e,t)=>{var o,n;(e=>{const t=dt[e.tagName];t?t(e):(e=>{if(!Ve(e))return;const t=Ye(e);e.style.backgroundImage=t.backgroundImage})(e)})(e),n=t,ke(o=e)||Le(o)||(He(o,n.class_entered),He(o,n.class_exited),He(o,n.class_applied),He(o,n.class_loading),He(o,n.class_loaded),He(o,n.class_error)),xe(e),Ge(e)},ut=(e,t,o,n)=>{o.cancel_on_exit&&ze(e)===pe&&"IMG"===e.tagName&&(nt(e),(e=>{Me(e,(e=>{st(e)})),st(e)})(e),ct(e),He(e,o.class_loading),Se(n,-1),xe(e),Ae(o.callback_cancel,e,t,n))},ft=(e,t,o,n)=>{const a=(r=e,Ce.indexOf(ze(r))>=0);var r;we(e,"entered"),Ie(e,o.class_entered),He(e,o.class_exited),((e,t,o)=>{t.unobserve_entered&&Te(e,o)})(e,o,n),Ae(o.callback_enter,e,t,n),a||it(e,o,n)},pt=["IMG","IFRAME","VIDEO"],vt=e=>e.use_native&&"loading"in HTMLImageElement.prototype,gt=(e,t)=>{var o;vt(e)||(t._observer=new IntersectionObserver((o=>{var n,a;n=e,a=t,o.forEach((e=>{return(t=e).isIntersecting||t.intersectionRatio>0?ft(e.target,e,n,a):((e,t,o,n)=>{ke(e)||(Ie(e,o.class_exited),ut(e,t,o,n),Ae(o.callback_exit,e,t,n))})(e.target,e,n,a);var t}))}),{root:(o=e).container===document?null:o.container,rootMargin:o.thresholds||o.threshold+"px"}))},ht=e=>Array.prototype.slice.call(e),bt=e=>e.container.querySelectorAll(e.elements_selector),yt=e=>ze(e)===he,_t=(e,t)=>(e=>ht(e).filter(ke))(e||bt(t)),Et=(e,t)=>{var o;(o=bt(e),ht(o).filter(yt)).forEach((t=>{He(t,e.class_error),xe(t)})),t.update()},zt=function(e,t){const o=ie(e);this._settings=o,this.loadingCount=0,gt(o,this),((e,t)=>{oe&&(t._onlineHandler=()=>{Et(e,t)},window.addEventListener("online",t._onlineHandler))})(o,this),this.update(t)};function wt(){const t=e();t.value.vanillaLazyload.enable&&g((()=>{!function(e={}){document.querySelectorAll(".lazy").forEach((e=>{const t=e.getAttribute("src");e.removeAttribute("src"),e.setAttribute("data-src",t??"")})),new zt({elements_selector:".lazy",...e})}(t.value.vanillaLazyload)}))}zt.prototype={update:function(e){const t=this._settings,o=_t(e,t);var n,a;Ne(this,o.length),ne?this.loadAll(o):vt(t)?(n=t,a=this,o.forEach((e=>{-1!==pt.indexOf(e.tagName)&&lt(e,n,a)})),Ne(a,0)):((e,t)=>{(e=>{e.disconnect()})(e),((e,t)=>{t.forEach((t=>{e.observe(t)}))})(e,t)})(this._observer,o)},destroy:function(){var e;this._observer&&this._observer.disconnect(),e=this,oe&&window.removeEventListener("online",e._onlineHandler),bt(this._settings).forEach((e=>{Ge(e)})),delete this._observer,delete this._settings,delete this._onlineHandler,delete this.loadingCount,delete this.toLoadCount},loadAll:function(e){const t=this._settings;_t(e,t).forEach((e=>{Te(e,this),it(e,t,this)}))},restoreAll:function(){const e=this._settings;bt(e).forEach((t=>{mt(t,e)}))}},zt.load=(e,t)=>{const o=ie(t);it(e,o)},zt.resetStatus=e=>{xe(e)},oe&&((e,t)=>{if(t)if(t.length)for(let o,n=0;o=t[n];n+=1)le(e,o);else le(e,t)})(zt,window.lazyLoadOptions);const xt={key:0,text:"center"},kt=["href"],Lt={m:"y-4",class:"end flex justify-center items-center"},Ct={p:"x-4",font:"bold",class:"whitespace-nowrap"},At=b({__name:"ValaxyMd",props:{frontmatter:{},excerpt:{}},setup(n){const s=n,{t:c}=M(),d=A();return i((()=>{J(d.value)})),g((()=>{l()})),I((()=>{l()})),s.frontmatter.aplayer&&function(){const t=e(),o=h((()=>t.value.cdn.prefix));a({link:[{rel:"stylesheet",href:`${o.value}aplayer/dist/APlayer.min.css`}]}),r(`${o.value}aplayer/dist/APlayer.min.js`,(()=>{r(`${o.value}meting@2/dist/Meting.min.js`)}))}(),s.frontmatter.codepen&&a({script:[{src:"https://static.codepen.io/assets/embed/ei.js",async:!0}]}),P(),o("click",(e=>{var t;const o=e.target;if(o.matches(".vp-code-group input")){const e=null==(t=o.parentElement)?void 0:t.parentElement;if(!e)return;const n=Array.from(e.querySelectorAll("input")).indexOf(o);if(n<0)return;const a=e.querySelector(".blocks");if(!a)return;const r=Array.from(a.children).find((e=>e.classList.contains("active")));if(!r)return;const i=a.children[n];if(!i||r===i)return;r.classList.remove("active"),i.classList.add("active");const l=null==e?void 0:e.querySelector(`label[for="${o.id}"]`);null==l||l.scrollIntoView({block:"nearest"})}})),function(){const n=e(),a=t().value.codeHeightLimit||n.value.codeHeightLimit;"number"!=typeof a||a<=0||(o("click",(e=>{const t=e.target;if(t.matches('[class*="language-"] > button.collapse')){const e=t.parentElement;null==e||e.removeAttribute("style"),null==e||e.classList.remove("folded")}})),g((()=>{const e=document.querySelectorAll('div[class*="language-"]');for(const t of Array.from(e))q(t)>a&&t.classList.add("folded")})))}(),(void 0===s.frontmatter.medium_zoom||s.frontmatter.medium_zoom)&&function(){const t=e().value.mediumZoom;t.enable&&g((()=>{F(t.selector||".markdown-body img",{background:"var(--medium-zoom-c-bg, rgba(0, 0, 0, 0.8))",...t.options})}))}(),wt(),(e,t)=>e.$slots.default?(C(),y("article",{key:0,class:H(e.frontmatter.markdownClass||"markdown-body")},[O(e.$slots,"default",{ref_key:"contentRef",ref:d,onVnodeUpdated:t[0]||(t[0]=(...e)=>w(l)&&w(l)(...e))}),e.frontmatter.url?(C(),y("div",xt,[_("a",{href:e.frontmatter.url,class:"post-link-btn shadow hover:shadow-md",rounded:"",target:"_blank",m:"b-4"},L(w(c)("post.view_link")),9,kt)])):z("v-if",!0),void 0!==e.frontmatter.end?O(e.$slots,"end",{key:1},(()=>[_("div",Lt,[t[1]||(t[1]=_("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1)),_("span",Ct,L(e.frontmatter.end?"Q.E.D.":"To Be Continued."),1),t[2]||(t[2]=_("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1))])])):z("v-if",!0)],2)):z("v-if",!0)}}),It={key:0,class:"yun-time-warning",op:"80"},Ht=b({__name:"YunMdTimeWarning",setup(e){const o=t(),{t:n,locale:a}=M(),r=h((()=>f(o.value.updated||o.value.date).locale(a.value))),i=h((()=>r.value.fromNow())),l=h((()=>{const e=f().valueOf()-r.value.valueOf();return"number"==typeof o.value.time_warning?e>o.value.time_warning:o.value.time_warning}));return(e,t)=>l.value?(C(),y("blockquote",It,L(w(n)("post.time_warning",{ago:i.value})),1)):z("v-if",!0)}}),Ot={class:"ai-generated-excerpt rounded-lg bg-$va-c-bg-alt p-4"},Tt={font:"black",flex:"","items-center":""},St={op:"90","mt-1":""},Nt=b({__name:"YunAiExcerpt",setup(e){const o=t(),{t:n}=M();return(e,t)=>(C(),y("div",Ot,[_("div",Tt,[t[0]||(t[0]=_("div",{"mr-1":"","i-ri-robot-2-line":""},null,-1)),_("div",null,L(w(n)("excerpt.ai")),1)]),_("div",St,L(w(o).excerpt),1)]))}}),$t={class:"yun-main lt-md:w-full",flex:"~ center"},Mt={class:"mt-8 mb-4"},jt={p:"x-4 b-8",class:"sm:px-6 lg:px-12 xl:px-16",w:"full"},Rt=b({__name:"ValaxyMain",props:{frontmatter:{},data:{}},setup(t){const o=t,n=s(),a=e(),{styles:r,icon:l,color:f}=R(o.frontmatter.type),g=c(h((()=>o.frontmatter))),b=h((()=>!1!==o.frontmatter.aside)),x=p(),L=v();return T((()=>{x.hash&&setTimeout((()=>{K(document.body,x.hash,{smooth:!0})}),0)})),i((()=>{!function(e){window.addEventListener("click",(async t=>{const o=t.target.closest("a");if(o){const{protocol:n,hostname:a,pathname:r,hash:i,target:l}=o,s=window.location,c=r.match(/\.\w+$/);t.ctrlKey||t.shiftKey||t.altKey||t.metaKey||"_blank"===l||n!==s.protocol||a!==s.hostname||c&&".html"!==c[0]||r===s.pathname&&(t.preventDefault(),i&&i!==s.hash&&(await e.push({hash:decodeURIComponent(i)}),K(o,i,{smooth:o.classList.contains("header-anchor")})))}}),{capture:!0})}(L)})),(e,t)=>{const o=j,i=Nt,s=Ht,c=At,p=d,v=te,h=u,x=m;return C(),y("main",$t,[O(e.$slots,"main",{},(()=>[_("div",{class:H(["content w-full md:w-3xl lg:w-2xl xl:w-2xl 2xl:w-4xl",{"no-aside":!b.value}]),flex:"~ col grow",p:"lt-md:0"},[S(p,{cover:e.frontmatter.cover,m:"0",class:"relative",style:N(w(r))},{default:k((()=>[_("div",Mt,[O(e.$slots,"main-header",{},(()=>[S(o,{title:w(g),icon:e.frontmatter.icon||w(l),color:e.frontmatter.color||w(f),cover:e.frontmatter.cover,"page-title-class":e.frontmatter.pageTitleClass},null,8,["title","icon","color","cover","page-title-class"])]))]),O(e.$slots,"main-header-after"),_("div",jt,[O(e.$slots,"main-content-before"),O(e.$slots,"main-content",{},(()=>[z(" <Transition appear> "),S(c,{frontmatter:e.frontmatter},{default:k((()=>["ai"===e.frontmatter.excerpt_type&&e.frontmatter.excerpt?(C(),E(i,{key:0})):z("v-if",!0),S(s),O(e.$slots,"default"),O(e.$slots,"main-content-md")])),_:3},8,["frontmatter"]),z(" </Transition> ")])),O(e.$slots,"main-content-after")])])),_:3},8,["cover","style"]),O(e.$slots,"main-nav-before"),O(e.$slots,"main-nav",{},(()=>[!1!==e.frontmatter.nav?(C(),E(v,{key:0})):z("v-if",!0)])),O(e.$slots,"main-nav-after"),w(a).comment.enable&&!1!==e.frontmatter.comment?O(e.$slots,"comment",{key:0},(()=>[S(h,{class:H(!1===e.frontmatter.nav?"mt-4":0)},null,8,["class"])])):z("v-if",!0),w(n).size.isLg?z("v-if",!0):(C(),E(x,{key:1,class:"mt-4"})),O(e.$slots,"main-footer-before"),O(e.$slots,"main-footer-after")],2)]))])}}});export{Rt as _};
