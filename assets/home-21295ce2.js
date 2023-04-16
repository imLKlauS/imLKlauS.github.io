import{_ as T}from"./YunFooter.vue_vue_type_script_setup_true_lang-3210e0ae.js";import{g as $,i as s,a as h,r as m,o as e,l as k,m as y,M as V,t as g,f as d,_ as S,ae as j,I as x,a4 as z,F as C,j as A,n as B,W as Y,k as i,c as b,d as f,af as F,B as L,ag as D,a3 as E,w as G,ah as P,ai as R,h as W}from"./app-26096a7f.js";const I={class:"yun-notice"},O=["innerHTML"],q=$({__name:"YunNotice",props:{content:null},setup(v){return(n,o)=>(e(),s("div",I,[h("span",{innerHTML:v.content},null,8,O),m(n.$slots,"default")]))}});const J={class:"say"},K={key:0,class:"say-content animate-fade-in animate-iteration-1"},Q={key:1,class:"say-author"},U={key:2,class:"say-from"},X=$({__name:"YunSay",setup(v){const n=k(),o=y(""),a=y(""),l=y("");function _(){const t=n.value.say.hitokoto.enable?n.value.say.hitokoto.api:n.value.say.api;t&&fetch(t).then(c=>{if(c.ok)c.json().then(u=>{if(n.value.say.hitokoto.enable)o.value=u.hitokoto,a.value=u.from_who,l.value=u.from;else{const r=u[Math.floor(Math.random()*u.length)];r.content?(o.value=r.content,a.value=r.author,l.value=r.from):o.value=r}});else throw new Error(`${n.value.say.api}, HTTP error, status = ${c.status}`)}).catch(c=>{console.error(c.message)})}return V(()=>{_()}),(t,c)=>(e(),s("div",J,[o.value?(e(),s("span",K,g(o.value),1)):d("v-if",!0),a.value?(e(),s("span",Q,g(a.value),1)):d("v-if",!0),l.value?(e(),s("span",U,g(l.value),1)):d("v-if",!0)]))}});const Z={},ee={class:"go-down","aria-label":"go-down",href:"javascript:window.scrollTo(0, window.banner.clientHeight);"},ne=h("div",{"i-ri-arrow-down-s-line":"","inline-flex":""},null,-1),te=[ne];function se(v,n){return e(),s("a",ee,te)}const oe=S(Z,[["render",se]]);const ae={},ce={class:"yun-cloud"},re=j('<svg class="waves" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto"><defs><path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" fill="var(--yun-c-cloud)"></path></defs><g class="parallax"><use xlink:href="#gentle-wave" x="48" y="0"></use><use xlink:href="#gentle-wave" x="48" y="3"></use><use xlink:href="#gentle-wave" x="48" y="5"></use><use xlink:href="#gentle-wave" x="48" y="7"></use></g></svg>',1),ie=[re];function le(v,n){return e(),s("div",ce,ie)}const _e=S(ae,[["render",le]]),ue=h("div",{class:"banner-line-container"},[h("div",{class:"banner-line vertical-line-top"})],-1),he={class:"banner-char-container"},de={class:"char"},ve=h("div",{class:"banner-line-container bottom"},[h("div",{class:"banner-line vertical-line-bottom"})],-1),pe=$({__name:"YunBanner",setup(v){const n=k(),o=x(()=>{const _=[];for(let t=0;t<n.value.banner.title.length;t++){const c=F(1.5,3.5);_.push(c)}return _}),a=x(()=>o.value.reduce((_,t)=>_+t,0)/2),l=y();return z(()=>{l.value={"--banner-height":`${window.innerHeight}px`,"--banner-line-height":`calc(var(--banner-height, 100vh) / 2 - ${a.value}rem)`}}),(_,t)=>{var r;const c=_e,u=oe;return e(),s("div",{id:"banner",style:Y(l.value)},[ue,h("div",he,[(e(!0),s(C,null,A(i(n).banner.title,(w,p)=>(e(),s("div",{key:p,class:"char-box"},[h("span",{class:B([p%2!==0?"char-right":"char-left"]),style:Y({"--banner-char-size":`${i(o)[p]}rem`})},[h("span",de,g(w),1)],6)]))),128))]),ve,(r=i(n).banner.cloud)!=null&&r.enable?(e(),b(c,{key:0})):d("v-if",!0),f(u)],4)}}});const ye=$({__name:"home",setup(v){const n=L(),o=D("home"),a=k(),l=E(),_=x(()=>l.path.startsWith("/page"));return(t,c)=>{const u=R,r=P,w=pe,p=X,M=q,H=W("router-view"),N=T;return e(),s("main",{class:B(["yun-main justify-center items-center",i(o)&&!i(n).isSidebarOpen&&"pl-0"]),flex:"~ col",w:"full"},[f(r,null,{default:G(()=>[m(t.$slots,"sidebar",{},()=>[f(u)])]),_:3}),i(_)?d("v-if",!0):(e(),s(C,{key:0},[i(a).banner.enable?(e(),b(w,{key:0})):d("v-if",!0),i(a).say.enable?(e(),b(p,{key:1,w:"full"})):d("v-if",!0)],64)),i(a).notice.enable?(e(),b(M,{key:1,content:i(a).notice.content,mt:"4"},null,8,["content"])):d("v-if",!0),m(t.$slots,"board"),m(t.$slots,"default",{},()=>[f(H)]),f(N)],2)}}});export{ye as default};
