import{u as e}from"./chunks/@vueuse/motion.DjOBw7pe.js";import{C as t,D as s}from"./app.BHTvhCs8.js";import"./chunks/dayjs.luRsnflP.js";import{f as a,r as o,M as l,P as i,O as r,X as n,R as p,V as u,S as c,u as v,B as m,$ as d,W as h,w as f,c as y,a3 as k,F as x,a0 as w,N as _}from"./framework.CXYGarVr.js";import{u as b}from"./chunks/vue-i18n.DE4Bnvxi.js";const j={class:"post-meta"},Y={key:0,class:"post-time",font:"mono",opacity:"80"},C={class:"post-title w-full","inline-flex":"","items-center":"",font:"serif black"},g=a({__name:"YunPostCollapseItem",props:{i:{},post:{}},setup(s){const a=s,f=o(!1),y=o();return e(y,{initial:{opacity:0,y:20},enter:{opacity:1,y:0,transition:{duration:200,delay:50*a.i,onComplete(){f.value=!0}}}}),(e,s)=>{const a=l("RouterLink");return r(),i("article",{ref_key:"itemRef",ref:y,class:n(["post-item relative",{show:f.value}])},[p("header",{class:n(["post-header cursor-pointer w-full",{show:f.value}]),flex:"~","items-center":"",relative:"",hover:"bg-black/1"},[p("div",j,[e.post.date?(r(),i("time",Y,c(v(t)(e.post.date,{template:"MM-DD"})),1)):u("v-if",!0)]),p("h2",C,[m(a,{to:e.post.path||"",class:"post-title-link"},{default:d((()=>[h(c(e.post.title),1)])),_:1},8,["to"])])],2)],2)}}}),D={class:"post-collapse px-10 lt-sm:px-5 max-w-3xl",relative:""},M={w:"full",text:"center",class:"yun-text-light",p:"2"},P={class:"post-collapse-action",text:"center"},R={key:0,"i-ri-sort-desc":""},I={key:1,"i-ri-sort-asc":""},N={class:"collection-title","m-0":"",relative:""},$=["id"],B=a({__name:"YunPostCollapse",props:{posts:{}},setup(e){const a=e,{t:l}=b(),n=o([]),u=o({});f((()=>a.posts),(()=>{u.value={},n.value=[],a.posts.forEach((e=>{if((!e.hide||"index"===e.hide)&&e.date){const s=Number.parseInt(t(e.date,{template:"YYYY"}));u.value[s]?u.value[s].push(e):(n.value.push(s),u.value[s]=[e])}}))}),{immediate:!0});const h=o(!0),j=y((()=>{const e=n.value.sort(((e,t)=>t-e));return h.value?e:[...e].reverse()}));return(e,t)=>{const a=g;return r(),i("div",D,[m(k,{appear:"","enter-active-class":"animate-fade-in animate-duration-400"},{default:d((()=>[p("div",M,c(v(l)("counter.archives",e.posts.length)),1)])),_:1}),p("div",P,[p("button",{class:"yun-icon-btn shadow hover:shadow-md",onClick:t[0]||(t[0]=e=>h.value=!h.value)},[h.value?(r(),i("div",R)):(r(),i("div",I))])]),(r(!0),i(x,null,w(j.value,(e=>(r(),i("div",{key:e,m:"b-6"},[p("div",N,[p("h2",{id:`#archive-year-${e}`,class:"archive-year",text:"4xl",p:"y-2"},c(e),9,$)]),(r(!0),i(x,null,w(v(s)(u.value[e],h.value),((e,t)=>(r(),_(a,{key:t,post:e,i:t},null,8,["post","i"])))),128))])))),128))])}}});export{B as _};
