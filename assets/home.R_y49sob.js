import{o as e,p as t,_ as a,l as s,s as n,q as l,r,t as o,v as i,w as c,e as u,f as v}from"./app.BHTvhCs8.js";import{f as p,P as d,O as m,R as f,Q as h,L as b,V as y,r as g,d as k,S as x,N as _,$ as w,X as $,Z as j,u as Y,F as S,a0 as z,B as A,a3 as C,c as L,M}from"./framework.CXYGarVr.js";import"./chunks/dayjs.luRsnflP.js";import{g as q}from"./animation.Dk5apPTb.js";import{a as B}from"./chunks/vue-router.2jJX8cgW.js";import"./chunks/vue-i18n.DE4Bnvxi.js";import"./chunks/nprogress.Bci-yEh4.js";import"./chunks/pinia.D4p-MF8b.js";import"./chunks/@vueuse/motion.DjOBw7pe.js";const H={class:"w-full px-4 flex-center"},I={class:"yun-notice w-full"},N=["innerHTML"],E=p({__name:"YunNotice",props:{content:{}},setup:e=>(e,t)=>(m(),d("div",H,[f("div",I,[f("span",{innerHTML:e.content},null,8,N),h(e.$slots,"default")])]))}),P={class:"grid-bg"};const T=b({},[["render",function(e,t){return m(),d("div",P,[y(" <YunAEFrame /> "),y(" <YunAERect /> ")])}]]),D={class:"say"},R={key:0,class:"say-content animate-fade-in animate-iteration-1"},F={key:1,class:"say-author"},O={key:2,class:"say-from"},V=p({__name:"YunSay",setup(t){const a=e(),s=g(""),n=g(""),l=g("");return k((()=>{!function(){const e=a.value.say.hitokoto.enable?a.value.say.hitokoto.api:a.value.say.api;e&&fetch(e).then((e=>{if(!e.ok)throw new Error(`${a.value.say.api}, HTTP error, status = ${e.status}`);e.json().then((e=>{if(a.value.say.hitokoto.enable)s.value=e.hitokoto,n.value=e.from_who,l.value=e.from;else{const t=e[Math.floor(Math.random()*e.length)];t.content?(s.value=t.content,n.value=t.author,l.value=t.from):s.value=t}}))})).catch((e=>{}))}()})),(e,t)=>(m(),d("div",D,[s.value?(m(),d("span",R,x(s.value),1)):y("v-if",!0),n.value?(m(),d("span",F,x(n.value),1)):y("v-if",!0),l.value?(m(),d("span",O,x(l.value),1)):y("v-if",!0)]))}}),G=p({__name:"YunSiteLinkItem",props:{page:{}},setup(e){const s=t();return(e,t)=>{const n=a;return m(),_(n,{class:"link-item inline-flex-center gap-2 transition rounded-lg text-xl p-2 md:text-lg md:p-2 lg:text-xl lg:p-3 text-$va-c-text",bg:"white/5 dark:black/5","inline-flex":"",to:e.page.url,title:e.page.name,style:j(`color:${e.page.color}`),hover:"bg-white/80 dark:bg-black/80",onClick:t[0]||(t[0]=e=>Y(s).fullscreenMenu.isOpen=!1)},{default:w((()=>[f("div",{class:$([e.page.icon,"icon"])},null,2),f("span",null,x(e.page.name),1)])),_:1},8,["to","title","style"])}}}),Q={key:0,class:"site-description text-$va-c-text text-sm"},W=p({__name:"YunSiteDescription",setup(e){const t=s();return(e,a)=>Y(t).description?(m(),d("div",Q,x(Y(t).description),1)):y("v-if",!0)}}),X={key:0,class:"site-subtitle block text-$va-c-text op-80 font-medium",text:"sm"},Z=p({__name:"YunSiteSubtitle",setup(e){const t=s();return(e,a)=>Y(t).subtitle?(m(),d("h4",X,x(Y(t).subtitle),1)):y("v-if",!0)}}),J=b(p({__name:"YunAnimLineDraw",setup(e){const t=g(!1);return k((()=>{t.value=!0})),(e,a)=>(m(),d("div",{class:$(["line",{enter:t.value}])},null,2))}}),[["__scopeId","data-v-b437692f"]]),K={key:0,class:"site-author-intro",m:"t-0 b-4"},U=p({__name:"YunAuthorIntro",setup(e){const t=s();return(e,a)=>Y(t).author.intro?(m(),d("div",K,x(Y(t).author.intro),1)):y("v-if",!0)}}),ee={key:0,class:"line-burst-effects absolute"},te=p({__name:"LineBurstEffects",props:{delay:{},duration:{}},setup(e){const t=e,a=g(!0);return k((async()=>{await n(t.delay),a.value=!1,await n(t.duration),a.value=!0})),(e,t)=>a.value?y("v-if",!0):(m(),d("div",ee,[(m(),d(S,null,z(8,(e=>f("div",{key:e,class:"line"},t[0]||(t[0]=[f("div",null,[f("span")],-1)])))),64))]))}}),ae={flex:"~ col",class:"yun-square-container items-center justify-center text-center max-w-2xl"},se={flex:"~ col",class:"yun-square square-rotate z-1 bg-white/80"},ne={class:"py-4 md:py-5 lg:pt-6"},le={flex:"~ col",class:"gap-2 items-center justify-center"},re={class:"scale-x--100 py-4 md:py-5 lg:pb-6"},oe={class:"mt-4 flex-center w-72 md:w-150 m-auto gap-2",flex:"~ wrap"},ie=b(p({__name:"YunPrologueSquare",setup(t){const a=e(),s=g(!1);return(e,t)=>{const n=te,c=l,u=r,v=U,p=J,b=o,y=Z,g=W,k=i,x=G;return m(),d("div",ae,[h(e.$slots,"default",{},void 0,!0),f("div",{flex:"~ col center",class:$(["info-with-avatar relative duration-800 transition-cubic-bezier-ease-in",{show:s.value}])},[A(C,{"enter-from-class":"enter-from","enter-to-class":"enter-to",appear:"",onAfterAppear:t[0]||(t[0]=e=>s.value=!0)},{default:w((()=>[f("div",se,[A(n,{class:"absolute top-0 left-0 right-0 bottom-0 size-full scale-200",delay:200,duration:400}),A(C,{"enter-from-class":"op-0","enter-to-class":"op-100","enter-active-class":"transition-400 delay-400",appear:""},{default:w((()=>[A(c)])),_:1})])])),_:1}),f("div",{class:$(["info",{show:s.value}])},[A(u,{class:"mt-3"}),A(v),f("div",ne,[A(p)]),f("div",le,[A(b),A(y),A(g)]),f("div",re,[A(p)]),A(k),f("div",oe,[A(x,{page:{name:"博客文章",icon:"i-ri-article-line",url:"/posts/"}}),h(e.$slots,"default",{},void 0,!0),(m(!0),d(S,null,z(Y(a).pages,((e,t)=>(m(),_(x,{key:t,page:e},null,8,["page"])))),128))])],2)],2)])}}}),[["__scopeId","data-v-9ed23ec5"]]),ce=p({__name:"YunGoDown",setup:e=>(e,t)=>(m(),d("button",{class:"go-down w-20 bottom-0 text-sm md:bottom-2 md:text-40px","aria-label":"go-down",onClick:t[0]||(t[0]=(...e)=>Y(q)&&Y(q)(...e))},t[1]||(t[1]=[f("div",{"i-ri-arrow-down-s-fill":"","inline-flex":""},null,-1)])))}),ue={class:"banner-char-container"},ve={class:"char"},pe=p({__name:"YunBannerCharContainer",props:{title:{},chars:{}},setup:e=>(e,t)=>(m(),d("div",ue,[(m(!0),d(S,null,z(e.title,((t,a)=>(m(),d("div",{key:a,class:"char-box"},[f("span",{class:$([a%2!=0?"char-right":"char-left"]),style:j({"--banner-char-size":`${e.chars[a]}rem`})},[f("span",ve,x(t),1)],6)])))),128))]))});const de={class:"banner-line-container"},me={class:"banner-line-container bottom"},fe=p({__name:"YunBanner",setup(a){const s=t(),l=e(),{totalCharHeight:r,chars:o}=function(e){const t=L((()=>{const t=[];for(let a=0;a<e.title.length;a++){const e=c(1.5,3.5);t.push(e)}return t})),a=L((()=>t.value.reduce(((e,t)=>e+t),0)));return{chars:t,totalCharHeight:a}}(l.value.banner),i=L((()=>{const e={"--total-char-height":`${r.value}rem`,"--banner-line-height":`calc(var(--banner-height, 100 * var(--vh)) / 2 - ${r.value/2}rem)`,"justify-content":"space-between"};return s.isStrato&&(e.borderBottom="1px solid var(--banner-line-color)"),e})),u=g("enter"),v=L((()=>u.value)),p=g("banner");return k((async()=>{await n(500),u.value="active",s.isNimbo&&(await n(500),u.value="exit",p.value="prologue")})),(e,t)=>{const a=pe,n=ce;return m(),d("div",{id:"yun-banner",border:"b-1px b-solid b-$banner-line-color",style:j(i.value)},[f("div",de,[f("div",{class:$(["banner-line vertical-line-top",v.value])},null,2)]),Y(s).isNimbo?(m(),d(S,{key:0},["banner"===p.value?(m(),_(a,{key:0,title:Y(l).banner.title,chars:Y(o)},null,8,["title","chars"])):y("v-if",!0)],64)):y("v-if",!0),Y(s).isStrato?(m(),_(a,{key:1,title:Y(l).banner.title,chars:Y(o)},null,8,["title","chars"])):y("v-if",!0),f("div",me,[f("div",{class:$(["banner-line vertical-line-bottom",v.value])},null,2)]),A(n)],4)}}}),he={class:"absolute top-0 left-5 right-5 bottom-0 flex-center"},be=p({__name:"home",setup(a){const s=t(),n=B(),l=e(),r=L((()=>n.path.startsWith("/page"))),o=L((()=>{const e=l.value.notice;return e.enable&&(!r.value||!e.hideInPages)}));return(e,t)=>{const a=fe,n=ie,i=V,c=T,p=E,b=M("RouterView"),g=u,k=v;return m(),d(S,null,[A(g,{class:$(["items-center flex-col",{"mt-0!":!r.value}])},{default:w((()=>[r.value?y("v-if",!0):(m(),d(S,{key:0},[A(a),A(C,{"enter-from-class":"scale-60","enter-to-class":"scale-100","enter-active-class":"transition-300 transition-cubic-bezier-ease-in-out delay-1000",appear:""},{default:w((()=>[f("div",he,[A(C,{"enter-from-class":"op-0","enter-to-class":"op-100","enter-active-class":"transition-800 delay-1000",appear:""},{default:w((()=>[A(n,{class:"z-1"})])),_:1})])])),_:1}),Y(l).say.enable?(m(),_(i,{key:0,w:"full"})):y("v-if",!0),Y(s).isNimbo?(m(),_(c,{key:1,class:"absolute left-0 top-0 right-0 bottom-0"})):y("v-if",!0)],64)),o.value?(m(),_(p,{key:1,class:$(["mb-2 md:mb-6",{"mt-4":!r.value}]),content:Y(l).notice.content},null,8,["class","content"])):y("v-if",!0),h(e.$slots,"board"),h(e.$slots,"default",{},(()=>[A(b)]))])),_:3},8,["class"]),A(k)],64)}}});export{be as default};
