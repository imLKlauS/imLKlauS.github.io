import{g as B,a4 as j,m as b,u as Y,ad as E,L as K,h as z,o as n,i,a as p,t as y,k as t,F as v,j as P,ae as N,c as C,w as d,f as w,d as m,a1 as q,A as F,a5 as R,Q as L,af as T,U as V,a9 as D,aa as W,a8 as A}from"./app-93795bde.js";import{_ as H}from"./YunCard.vue_vue_type_style_index_0_lang-1aa0abf4.js";import{_ as M}from"./YunPostCollapse.vue_vue_type_style_index_0_lang-61731898.js";import{_ as O}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-3b0be3f5.js";const Q={class:"category-list-item inline-flex items-center cursor-pointer"},G={key:0,"i-ri-folder-add-line":""},J={key:1,style:{color:"var(--va-c-primary)"},"i-ri-folder-reduce-line":""},X={key:0},Z=p("div",{"i-ri-file-text-line":""},null,-1),I={m:"l-1",font:"serif black"},ee=B({__name:"YunCategory",props:{parentKey:null,category:null,level:null,collapsable:{type:Boolean,default:!0}},setup(o){const u=j(),c=b(!0),{t:_}=Y(),{locale:g}=Y();function a(l){const e=g.value==="zh-CN"?"zh":g.value;return l[`title_${e}`]?l[`title_${e}`]:l.title}const r=b(),{show:k}=E(r);function h(l){u.push({query:{category:l}}),k()}return K(()=>{const l=document.querySelector(".post-collapse-container");l&&(r.value=l)}),(l,e)=>{const f=z("YunCategory",!0),x=z("router-link");return n(),i(v,null,[p("li",Q,[p("span",{class:"folder-action inline-flex",onClick:e[0]||(e[0]=s=>c.value=!c.value)},[c.value?(n(),i("div",G)):(n(),i("div",J))]),p("span",{class:"category-name",m:"l-1",onClick:e[1]||(e[1]=s=>h(o.parentKey))},y(o.category.name==="Uncategorized"?t(_)("category.uncategorized"):o.category.name)+" ["+y(o.category.total)+"] ",1)]),c.value?w("v-if",!0):(n(),i("ul",X,[(n(!0),i(v,null,P(o.category.children,(s,$)=>(n(),i("li",{key:$,class:"post-list-item",m:"l-4"},[t(N)(s)?(n(),C(f,{key:0,"parent-key":o.parentKey?`${o.parentKey}/${s.name}`:s.name,category:s},null,8,["parent-key","category"])):(n(),i(v,{key:1},[s.title?(n(),C(x,{key:0,to:s.path||"",class:"inline-flex items-center"},{default:d(()=>[Z,p("span",I,y(a(s)),1)]),_:2},1032,["to"])):w("v-if",!0)],64))]))),128))]))],64)}}}),te=B({__name:"YunCategories",props:{categories:null,level:{default:0},collapsable:{type:Boolean,default:!0}},setup(o){const c=b(o.collapsable);return(_,g)=>{const a=ee;return n(!0),i(v,null,P(o.categories,r=>(n(),i("ul",{key:r.name,class:"category-list",m:"l-4"},[m(a,{"parent-key":r.name,category:r,level:o.level+1,collapsable:c.value},null,8,["parent-key","category","level","collapsable"])]))),128)}}});const ne={text:"center",class:"yun-text-light",p:"2"},re=B({__name:"categories",setup(o){const{t:u}=Y(),c=q(),_=F(),g=R(),a=L(()=>g.query.category||""),r=T(),k=L(()=>c.postList.filter(e=>e.categories&&a.value!=="Uncategorized"?typeof e.categories=="string"?e.categories===a.value:e.categories.join("/").startsWith(a.value)&&e.categories[0]===a.value.split("/")[0]:!e.categories&&a.value==="Uncategorized"?e.categories===void 0:!1)),h=V(_);return D([W({"@type":"CollectionPage"})]),(l,e)=>{const f=O,x=te,s=z("router-view"),$=M,S=H,U=A;return n(),C(U,null,{"main-header":d(()=>[m(f,{title:t(h)||t(u)("menu.categories"),icon:t(_).icon||"i-ri-folder-2-line",color:t(_).color},null,8,["title","icon","color"])]),"main-content":d(()=>[p("div",ne,y(t(u)("counter.categories",t(r).children.length)),1),m(x,{categories:t(r).children},null,8,["categories"]),m(s)]),"main-nav-before":d(()=>[t(a)?(n(),C(S,{key:0,class:"post-collapse-container",m:"t-4",w:"full"},{default:d(()=>[m(f,{title:t(a)==="Uncategorized"?t(u)("category.uncategorized"):t(a).split("/").join(" / "),icon:"i-ri-folder-open-line"},null,8,["title"]),m($,{w:"full",m:"b-4",p:"x-20 lt-sm:x-5",posts:t(k)},null,8,["posts"])]),_:1})):w("v-if",!0)]),_:1})}}});export{re as default};
