import{g as L,a7 as N,a8 as V,a3 as Y,a2 as j,l as q,u as E,A as I,al as R,Q as d,a0 as W,m as z,ab as D,U as H,c as h,w as n,a6 as O,o,d as a,k as e,a as r,t as u,i as y,j as Q,W as U,F as G,f as J,h as K}from"./app-ec5dd970.js";import{_ as M}from"./YunCard.vue_vue_type_style_index_0_lang-e1acdf90.js";import{_ as X}from"./YunPostCollapse.vue_vue_type_style_index_0_lang-2092213f.js";import{_ as Z}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-ea230aa9.js";const ee={class:"yun-text-light",text:"center",p:"2"},te={class:"justify-center items-end",flex:"~ wrap",gap:"1"},se=["onClick"],ne={"inline-flex":""},oe={"inline-flex":"",text:"xs"},me=L({__name:"tags",setup(ae){N([V({"@type":"CollectionPage"})]);const x=Y(),v=j(),C=q(),{t:m}=E(),i=I(),{tags:_,getTagStyle:w}=R({primary:C.value.colors.primary}),s=d(()=>x.query.tag||""),S=W(),b=d(()=>S.postList.filter(t=>t.tags?typeof t.tags=="string"?t.tags===s.value:t.tags.includes(s.value):!1)),p=z(),{show:k}=D(p),T=l=>{v.push({query:{tag:l}}),k()},P=H(i);return(l,t)=>{const f=Z,B=K("router-view"),$=X,A=M,F=O;return o(),h(F,null,{"main-header":n(()=>[a(f,{title:e(P)||e(m)("menu.tags"),icon:e(i).icon||"i-ri-tag-line",color:e(i).color},null,8,["title","icon","color"])]),"main-content":n(()=>[r("div",ee,u(e(m)("counter.tags",Array.from(e(_)).length)),1),r("div",te,[(o(!0),y(G,null,Q(Array.from(e(_)).sort(),([c,g])=>(o(),y("span",{key:c,"inline-flex":"",my:"2",class:"post-tag cursor-pointer items-baseline leading-4",style:U(e(w)(g.count)),p:"1",onClick:re=>T(c.toString())},[r("span",ne,"#"+u(c),1),r("span",oe,"["+u(g.count)+"]",1)],12,se))),128))]),a(B)]),"main-nav-before":n(()=>[e(s)?(o(),h(A,{key:0,ref_key:"collapse",ref:p,m:"t-4",w:"full"},{default:n(()=>[a(f,{title:e(s),icon:"i-ri-hashtag"},null,8,["title"]),a($,{w:"full",m:"b-4",p:"x-20 lt-sm:x-5",posts:e(b)},null,8,["posts"])]),_:1},512)):J("v-if",!0)]),_:1})}}});export{me as default};
