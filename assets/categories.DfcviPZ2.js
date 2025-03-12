import{i as e,g as a,u as t,j as l,a as r,b as s,d as o,c as n,k as i,h as c,e as u,f as p}from"./app.ejIEQxa2.js";import{_ as y}from"./YunPostCollapse.vue_vue_type_style_index_0_lang.BUSrQpIU.js";import{a as g,u as m}from"./chunks/vue-router.BLVKzi_U.js";import"./chunks/dayjs.luRsnflP.js";import{f as v,c as d,M as f,N as k,P as _,u as h,O as x,F as b,V as j,$ as C,R as I,S as $,r as w,d as z,B as K,a3 as q,a0 as A,a7 as Y}from"./framework.CXYGarVr.js";import{u as P}from"./chunks/vue-i18n.BXFR_gsM.js";import{u as R,a as U}from"./animation.DmDc1tV6.js";import{_ as B}from"./YunPageHeader.vue_vue_type_script_setup_true_lang.REEBqsfl.js";import"./chunks/nprogress.D_IOsJtP.js";import"./chunks/pinia.Dy_Ta77g.js";import"./chunks/@vueuse/motion.DjOBw7pe.js";import"./index.BRXJGymZ.js";const L={font:"serif black"},N=v({__name:"YunCategoryChildItem",props:{i:{},categoryItem:{},parentKey:{}},setup(a){const{locale:t}=P();function l(e){const a="zh-CN"===t.value?"zh":t.value;return e[`title_${a}`]?e[`title_${a}`]:e.title}const r=g(),s=d((()=>{const e=r.query.category||"";return Array.isArray(e)?[e]:e.split("/")}));return(a,t)=>{const r=M,o=f("RouterLink");return h(e)(a.categoryItem)?(x(),k(r,{key:0,"parent-key":a.parentKey?`${a.parentKey}/${a.categoryItem.name}`:a.categoryItem.name,category:a.categoryItem,collapsable:!s.value.includes(a.categoryItem.name)},null,8,["parent-key","category","collapsable"])):(x(),_(b,{key:1},[a.categoryItem.title?(x(),k(o,{key:0,to:a.categoryItem.path||"",class:"inline-flex items-center gap-2 px-3 py-2 w-full rounded",hover:"bg-black/5"},{default:C((()=>[t[0]||(t[0]=I("div",{"i-ri-file-text-line":""},null,-1)),I("span",L,$(l(a.categoryItem)),1)])),_:1},8,["to"])):j("v-if",!0)],64))}}}),S={key:0,"i-ri-folder-add-line":""},V={key:1,class:"text-$va-c-primary dark:text-$va-c-primary-lighter","i-ri-folder-reduce-line":""},F={class:"rounded-full px-1.5 bg-black/5 shadow-sm op-60",text:"xs"},H={key:0},M=v({__name:"YunCategory",props:{i:{},parentKey:{},category:{},level:{},collapsable:{type:Boolean,default:!0}},setup(e){const a=e,t=m(),l=w(a.collapsable),{t:r}=P(),s=w(),{show:o}=R(s);z((()=>{const e=document.querySelector(".post-collapse-container");e&&(s.value=e)}));const n=w();return 1===a.level&&U(n,{i:a.i||0,y:20,duration:200}),(e,a)=>{const s=N;return x(),_(b,null,[I("li",{ref_key:"categoryRef",ref:n,class:"category-list-item inline-flex items-center cursor-pointer w-full gap-2 px-3 py-2 rounded",hover:"bg-black/5"},[I("span",{class:"folder-action inline-flex",hover:"text-$va-c-primary-lighter",onClick:a[0]||(a[0]=e=>l.value=!l.value)},[l.value?(x(),_("div",S)):(x(),_("div",V))]),I("span",{class:"category-name inline-flex items-center gap-2 w-full",onClick:a[1]||(a[1]=a=>{return r=e.parentKey,l.value=!1,t.push({query:{category:r}}),void o();var r})},[I("span",null,$("Uncategorized"===e.category.name?h(r)("category.uncategorized"):e.category.name),1),I("span",F,$(e.category.total),1)])],512),K(q,{"enter-active-class":"v-enter-active","enter-from-class":"v-enter-from","leave-active-class":"v-leave-active","leave-to-class":"v-leave-to",duration:{enter:200,leave:0}},{default:C((()=>[l.value?j("v-if",!0):(x(),_("ul",H,[(x(!0),_(b,null,A(e.category.children.values(),((a,t)=>(x(),_("li",{key:t,class:"post-list-item text-$va-c-text",m:"l-4",hover:"text-$va-c-primary-lighter"},[K(s,{i:t,"category-item":a,"parent-key":e.parentKey},null,8,["i","category-item","parent-key"])])))),128))]))])),_:1})],64)}}}),O={flex:"~ col"},T=v({__name:"YunCategories",props:{categories:{},level:{default:0},collapsable:{type:Boolean,default:!0}},setup(e){const a=g(),t=d((()=>{const e=a.query.category||"";return Array.isArray(e)?[e]:e.split("/")}));return(e,a)=>{const l=M;return x(),_("div",O,[(x(!0),_(b,null,A(e.categories.values(),((a,r)=>(x(),_("ul",{key:a.name,class:"category-list"},[K(l,{i:r,"parent-key":a.name,category:a,level:e.level+1,collapsable:!t.value.includes(a.name)},null,8,["i","parent-key","category","level","collapsable"])])))),128))])}}}),W={text:"center",class:"yun-text-light",p:"2"},D=v({__name:"categories",setup(e){const{t:m}=P(),v=a(),w=t(),z=g(),A=d((()=>z.query.category||"")),R=l(),U=d((()=>(w.value.icon||(w.value.icon="i-ri-folder-2-line"),w.value.icon))),L=d((()=>v.postList.filter((e=>e.categories&&"Uncategorized"!==A.value?"string"==typeof e.categories?e.categories===A.value:e.categories.join("/").startsWith(A.value)&&e.categories[0]===A.value.split("/")[0]:!e.categories&&"Uncategorized"===A.value&&void 0===e.categories)))),N=r(w);return s([o({"@type":"CollectionPage"})]),(e,a)=>{const t=n,l=B,r=T,s=f("RouterView"),o=y,g=i,v=c,d=u,z=p;return x(),_(b,null,[K(d,null,{default:C((()=>[K(t),K(s,null,{default:C((({Component:e})=>[(x(),k(Y(e),null,{"main-header":C((()=>[K(l,{title:h(N)||h(m)("menu.categories"),icon:U.value,color:h(w).color,"page-title-class":h(w).pageTitleClass},null,8,["title","icon","color","page-title-class"])])),"main-content":C((()=>[K(q,{"enter-active-class":"animate-fade-in animate-duration-400",appear:""},{default:C((()=>[I("div",W,$(h(m)("counter.categories",Array.from(h(R).children).length)),1)])),_:1}),K(r,{categories:h(R).children},null,8,["categories"]),K(s)])),"main-nav-before":C((()=>[A.value?(x(),k(g,{key:0,class:"post-collapse-container",m:"t-4",w:"full"},{default:C((()=>[K(l,{m:"t-10",title:"Uncategorized"===A.value?h(m)("category.uncategorized"):A.value.split("/").join(" / "),icon:"i-ri-folder-open-line"},null,8,["title"]),K(o,{w:"full",m:"b-4",p:"x-20 lt-sm:x-5",posts:L.value},null,8,["posts"])])),_:1})):j("v-if",!0)])),_:2},1024))])),_:1}),K(v)])),_:1}),K(z)],64)}}});export{D as default};
