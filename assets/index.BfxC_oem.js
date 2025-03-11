import{_ as b}from"./ValaxyMain.vue_vue_type_style_index_0_lang.BNKzD54x.js";import{u as C}from"./chunks/@vueuse/motion.C0KIn7Jt.js";import{o as $}from"./index.D81ScdsH.js";import{f as E,r as B,P as c,O as u,Z as _,R as s,S as f,F as j,a0 as I,N as g,u as y,$ as i,Q as n,B as R,W as r,D as w}from"./framework.BU8aqy2L.js";import{E as L}from"./app.DEY_bS39.js";import"./chunks/dayjs.WH26RRM8.js";import{f as Y,a as z,u as D}from"./chunks/vue-router.DJ-yxXGs.js";import"./YunComment.vue_vue_type_style_index_0_lang.C3lJPeqc.js";import"./index.C5okkQwF.js";import"./chunks/vue-i18n.BwO6G1QQ.js";import"./chunks/nprogress.t5q147rN.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.CPLWUEU4.js";import"./post.BEkP-l1H.js";import"./animation.DymV6dvu.js";import"./chunks/pinia.Dovo_Y_t.js";const N=["href","title"],S={class:"yun-link-left"},P={class:"yun-link-avatar size-16 overflow-hidden flex-center"},T=["src","alt"],V={class:"yun-link-info",m:"l-2"},O={class:"yun-link-blog",font:"serif black"},M={class:"yun-link-desc"},W=E({__name:"YunLinkItem",props:{i:{},errorImg:{},link:{}},setup(o){const l=o;function m(a){$(a,l.errorImg)}const h=B();return C(h,{initial:{opacity:0,translateY:40},enter:{opacity:1,translateY:0,transition:{type:"spring",duration:400,damping:8,delay:l.i*50}}}),(a,k)=>(u(),c("li",{ref_key:"itemRef",ref:h,class:"yun-link-item inline-flex",style:_({"--primary-color":a.link.color})},[s("a",{class:"yun-link-url",p:"x-4 y-2",href:a.link.url,title:a.link.name,alt:"portrait",rel:"friend",target:"_blank"},[s("div",S,[s("div",P,[s("img",{class:"size-full object-center object-cover m-0! max-w-unset!",loading:"lazy",src:a.link.avatar,alt:a.link.name,onError:m},null,40,T)])]),s("div",V,[s("div",O,f(a.link.blog),1),s("div",M,f(a.link.desc),1)])],8,N)],4))}}),A={class:"yun-links"},J={class:"yun-link-items",flex:"center wrap"},Q=E({__name:"YunLinks",props:{links:{},random:{type:Boolean},errorImg:{}},setup(o){const l=o,{data:m}=L(l.links,l.random);return(h,a)=>{const k=W;return u(),c("div",A,[s("ul",J,[(u(!0),c(j,null,I(y(m),(d,p)=>(u(),g(k,{key:p,i:p,link:d,"error-img":h.errorImg},null,8,["i","link","error-img"]))),128))])])}}}),U=Y("/links",async o=>JSON.parse('{"title":"学习、参考与借鉴","description":"imklaus的学习拓展","frontmatter":{"title":"学习、参考与借鉴","keywords":"链接","icon":"i-ri-book-shelf-line","description":"imklaus的学习拓展","random":true,"nav":false,"toc":false,"aside":false,"links":"/links.json"},"headers":[],"relativePath":"pages/links/index.md","lastUpdated":null}'),{lazy:(o,l)=>o.name===l.name}),os={__name:"index",setup(o,{expose:l}){var p;const{data:m}=U(),h=D(),a=z(),k=Object.assign(a.meta.frontmatter||{},((p=m.value)==null?void 0:p.frontmatter)||{});a.meta.frontmatter=k,h.currentRoute.value.data=m.value,w("valaxy:frontmatter",k),globalThis.$frontmatter=k;const d={title:"学习、参考与借鉴",keywords:"链接",icon:"i-ri-book-shelf-line",description:"imklaus的学习拓展",random:!0,nav:!1,toc:!1,aside:!1,links:"/links.json"};return l({frontmatter:d}),(t,e)=>{const F=Q,v=b;return u(),g(v,{frontmatter:y(k)},{"main-content-md":i(()=>[R(F,{links:d.links,random:d.random},null,8,["links","random"]),e[0]||(e[0]=s("hr",null,null,-1)),e[1]||(e[1]=s("h1",{id:"友链申请格式",tabindex:"-1"},[r("友链申请格式 "),s("a",{class:"header-anchor",href:"#友链申请格式","aria-label":'Permalink to "友链申请格式"'},"​")],-1)),e[2]||(e[2]=s("p",null,"友链为随机顺序展示，希望交换友链的话可以按此格式在评论区留下信息：",-1)),e[3]||(e[3]=s("div",{style:{"max-height":"300px"},class:"language-json vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"json"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'    "url"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"https://imlklaus.github.io"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'    "avatar"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"https://imlklaus.github.io/images/tiamat2.jpg"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'    "name"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"imklaus"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'    "blog"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},`"-imklaus's Blog-"`),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'    "desc"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"The Winner Takes It All."'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'    "color"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"#102434"')]),r(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])]),s("button",{class:"collapse"})],-1)),e[4]||(e[4]=s("hr",null,null,-1))]),"main-header":i(()=>[n(t.$slots,"main-header")]),"main-header-after":i(()=>[n(t.$slots,"main-header-after")]),"main-nav":i(()=>[n(t.$slots,"main-nav")]),"main-content-before":i(()=>[n(t.$slots,"main-content-before")]),"main-content":i(()=>[n(t.$slots,"main-content")]),"main-content-after":i(()=>[n(t.$slots,"main-content-after")]),"main-nav-before":i(()=>[n(t.$slots,"main-nav-before")]),"main-nav-after":i(()=>[n(t.$slots,"main-nav-after")]),comment:i(()=>[n(t.$slots,"comment")]),footer:i(()=>[n(t.$slots,"footer")]),aside:i(()=>[n(t.$slots,"aside")]),"aside-custom":i(()=>[n(t.$slots,"aside-custom")]),default:i(()=>[n(t.$slots,"default")]),_:3},8,["frontmatter"])}}};export{os as default,U as usePageData};
