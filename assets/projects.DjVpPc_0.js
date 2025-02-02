import{T as e,u as t,l as o,e as l,f as r}from"./app.BUTTmAES.js";import{_ as s}from"./YunComment.vue_vue_type_style_index_0_lang.DspZIfin.js";import{_ as n}from"./YunSponsor.vue_vue_type_style_index_0_lang.DZlv86ja.js";import{f as a,P as c,O as i,Z as u,R as p,X as m,r as j,c as f,V as v,S as d,F as g,a0 as b,N as y,Q as h,e as k,u as x,B as _,$ as w,W as Y}from"./framework.CXYGarVr.js";import{u as C}from"./chunks/@vueuse/motion.DjOBw7pe.js";import{c as $}from"./index.BRXJGymZ.js";import"./chunks/dayjs.luRsnflP.js";import{u as L}from"./chunks/vue-i18n.DE4Bnvxi.js";import"./chunks/vue-router.sw2CrBy-.js";import"./chunks/nprogress.Bci-yEh4.js";import"./chunks/pinia.D4p-MF8b.js";import"./index.TQnGKZgq.js";const P=["href"],R=a({__name:"YunProjectLinkItem",props:{item:{}},setup:e=>(e,t)=>(i(),c("a",{class:"yun-project-link-item inline-flex items-center justify-center flex-1 p-2 h-full text-white",href:e.item.url,target:"_blank",style:u({"--c-brand":e.item.color})},[p("div",{class:m(e.item.icon)},null,2)],12,P))}),T={key:0,class:"mt-4"},B=["href"],H={text:"lg",font:"bold",m:"2"},S=["innerHTML"],I={flex:"~ center",class:"absolute left-0 right-0 bottom-0 h-10"},M=a({__name:"YunProjectCard",props:{i:{},project:{}},setup(t){const o=t,l=j();C(l,{initial:{opacity:0,y:50},enter:{opacity:1,y:0,transition:{delay:50*o.i,type:"spring",ease:$.easeIn,damping:8,duration:400}}});const r=f((()=>{const t={color:o.project.textColor};if(o.project.color&&(void 0===o.project.gradient||o.project.gradient)){const l=new e(o.project.color);t["--un-gradient-stops"]=`${l.spin(55).toHexString()}, ${o.project.color}`,t.color||(t.color=l.isDark()?"white":"black")}else t.backgroundColor=o.project.color||"rgba(255,255,255,0.9)",t.color||(t.color="black");return t})),s=f((()=>o.project.github?`https://github.com/${o.project.github}`:`https://github.com/YunYouJun/${o.project.name}`)),n=f((()=>o.project.npm?`https://www.npmjs.com/package/${o.project.npm}`:"")),a=f((()=>o.project.url||s.value)),m=f((()=>[{url:a.value,icon:"i-ri-global-line",color:"#6eb7f9"},{url:o.project.docs,icon:"i-ri-book-line",color:"#443ed1"},{url:s.value,icon:"i-ri-github-line",color:"black"},{url:n.value,icon:"i-ri-npmjs-line",color:"red"}]));return(e,t)=>{const o=R;return i(),c("div",{ref_key:"cardRef",ref:l,flex:"~ col center",class:"m-2 w-90 transform rounded shadow-md grayscale-30",bg:"opacity-80 gradient-to-br",p:"x-2 b-12",hover:"shadow-lg grayscale-0",style:u(r.value)},[e.project.emoji?(i(),c("div",T,d(e.project.emoji),1)):v("v-if",!0),p("a",{href:a.value,target:"_blank",class:"text-unset"},[p("h2",H,d(e.project.name||"忘记叫啥了"),1)],8,B),p("small",{class:"block",p:"2",text:"center",innerHTML:e.project.desc||"说点什么好呢"},null,8,S),p("div",I,[(i(!0),c(g,null,b(m.value,(e=>(i(),c(g,{key:e.icon},[e.url?(i(),y(o,{key:0,item:e},null,8,["item"])):v("v-if",!0)],64)))),128))])],4)}}}),V={class:"w-full flex justify-center",text:"xl",font:"black",m:"b-2 t-4"},D=a({__name:"YunProjectCollection",props:{title:{},projects:{}},setup:e=>(e,t)=>{const o=M;return i(),c(g,null,[p("div",V,d(e.title),1),(i(!0),c(g,null,b(e.projects,((e,t)=>(i(),y(o,{key:t,project:e,i:t},null,8,["project","i"])))),128))],64)}}),F=a({__name:"YunProjectToggleButton",props:{active:{type:Boolean}},setup:e=>(e,t)=>(i(),c("button",{class:m(["bg-white-90 m-2 inline-flex items-center justify-center rounded px-2 gap-2 h-8",{"bg-blue-500 text-white":e.active,"hover:bg-$va-c-bg-soft":!e.active}])},[h(e.$slots,"default")],2))}),J={flex:"~ col center"},N={class:"mb-3 text-2xl"},O={flex:"~ wrap",justify:"center"},Q={class:"inline-flex"},W={class:"inline-flex"},X={flex:"~ wrap",justify:"center"},Z=a({__name:"YunProjects",setup(e){const o=t(),{t:l}=L(),r=k(o.value.projects),s=j("all");return(e,t)=>{const n=F,a=D;return i(),c("div",J,[p("h2",N,d(x(o).title||x(l)("title.projects")),1),p("div",O,[_(n,{active:"all"===s.value,onClick:t[0]||(t[0]=e=>s.value="all")},{default:w((()=>t[1]||(t[1]=[Y(" 全部 ")]))),_:1},8,["active"]),(i(!0),c(g,null,b(r,((e,t)=>(i(),y(n,{key:t,active:t===s.value,onClick:e=>s.value=t},{default:w((()=>[p("span",Q,d(e.emoji),1),p("span",W,d(e.title),1)])),_:2},1032,["active","onClick"])))),128))]),p("div",X,[(i(!0),c(g,null,b(r,((e,t)=>(i(),c(g,{key:t},["all"===s.value||s.value===t?(i(),y(a,{key:0,title:e.title,projects:r[t].collection},null,8,["title","projects"])):v("v-if",!0)],64)))),128))])])}}}),q={flex:"~ col"},z=a({__name:"projects",setup(e){const a=o(),u=t();return(e,t)=>{const o=Z,m=n,j=s,f=l,d=r;return i(),c(g,null,[_(f,null,{default:w((()=>[p("div",q,[_(o),v(" <YunLayoutLeft /> "),v(" <RouterView /> "),v(" <YunLayoutRight /> "),_(m,{class:"mt-4"}),x(a).comment.enable&&!1!==x(u).comment?(i(),y(j,{key:0,class:"max-w-4xl m-auto"})):v("v-if",!0)])])),_:1}),_(d)],64)}}});export{z as default};
