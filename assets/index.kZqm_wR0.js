import{_ as s}from"./ValaxyMain.vue_vue_type_style_index_0_lang.BdMWguOC.js";import{u as i}from"./chunks/@vueuse/motion.DjOBw7pe.js";import{o as a}from"./index.D_SLED1L.js";import{f as n,r as t,P as e,O as l,Z as r,R as o,S as k,F as h,a0 as m,N as p,u as d,D as u,$ as c,Q as g,B as y,W as E}from"./framework.CXYGarVr.js";import{E as f}from"./app.DODrJpjC.js";import"./chunks/dayjs.luRsnflP.js";import{f as v,a as F}from"./chunks/vue-router.B11rsU2u.js";import"./YunComment.vue_vue_type_style_index_0_lang.cwil_uYI.js";import"./index.TQnGKZgq.js";import"./chunks/vue-i18n.BG5xGR4q.js";import"./chunks/nprogress.D_IOsJtP.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.REEBqsfl.js";import"./post.BNCHVXF4.js";import"./animation.Dk5apPTb.js";import"./chunks/pinia.Dy_Ta77g.js";const _=["href","title"],j={class:"yun-link-left"},b={class:"yun-link-avatar size-16 overflow-hidden flex-center"},C=["src","alt"],x={class:"yun-link-info",m:"l-2"},B={class:"yun-link-blog",font:"serif black"},$={class:"yun-link-desc"},w=n({__name:"YunLinkItem",props:{i:{},errorImg:{},link:{}},setup(s){const n=s;function h(s){a(s,n.errorImg)}const m=t();return i(m,{initial:{opacity:0,translateY:40},enter:{opacity:1,translateY:0,transition:{type:"spring",duration:400,damping:8,delay:50*n.i}}}),(s,i)=>(l(),e("li",{ref_key:"itemRef",ref:m,class:"yun-link-item inline-flex",style:r({"--primary-color":s.link.color})},[o("a",{class:"yun-link-url",p:"x-4 y-2",href:s.link.url,title:s.link.name,alt:"portrait",rel:"friend",target:"_blank"},[o("div",j,[o("div",b,[o("img",{class:"size-full object-center object-cover m-0! max-w-unset!",loading:"lazy",src:s.link.avatar,alt:s.link.name,onError:h},null,40,C)])]),o("div",x,[o("div",B,k(s.link.blog),1),o("div",$,k(s.link.desc),1)])],8,_)],4))}}),I={class:"yun-links"},Y={class:"yun-link-items",flex:"center wrap"},z=n({__name:"YunLinks",props:{links:{},random:{type:Boolean},errorImg:{}},setup(s){const i=s,{data:a}=f(i.links,i.random);return(s,i)=>{const n=w;return l(),e("div",I,[o("ul",Y,[(l(!0),e(h,null,m(d(a),((i,a)=>(l(),p(n,{key:a,i:a,link:i,"error-img":s.errorImg},null,8,["i","link","error-img"])))),128))])])}}}),P=v("/links",(async s=>JSON.parse('{"title":"学习、参考与借鉴","description":"imklaus的学习拓展","frontmatter":{"title":"学习、参考与借鉴","keywords":"链接","icon":"i-ri-book-shelf-line","description":"imklaus的学习拓展","random":true,"nav":false,"toc":false,"aside":false,"links":"/links.json"},"headers":[],"relativePath":"pages/links/index.md","lastUpdated":null}')),{lazy:(s,i)=>s.name===i.name}),O={__name:"index",setup(i,{expose:a}){var n;const{data:t}=P(),e=F(),r=Object.assign(e.meta.frontmatter||{},(null==(n=t.value)?void 0:n.frontmatter)||{});e.meta.frontmatter=r,u("pageData",t.value),u("valaxy:frontmatter",r),globalThis.$frontmatter=r;const k={title:"学习、参考与借鉴",keywords:"链接",icon:"i-ri-book-shelf-line",description:"imklaus的学习拓展",random:!0,nav:!1,toc:!1,aside:!1,links:"/links.json"};return a({frontmatter:k}),(i,a)=>{const n=z,t=s;return l(),p(t,{frontmatter:d(r)},{"main-content-md":c((()=>[y(n,{links:k.links,random:k.random},null,8,["links","random"]),a[0]||(a[0]=o("hr",null,null,-1)),a[1]||(a[1]=o("h1",{id:"友链申请格式",tabindex:"-1"},[E("友链申请格式 "),o("a",{class:"header-anchor",href:"#友链申请格式","aria-label":'Permalink to "友链申请格式"'},"​")],-1)),a[2]||(a[2]=o("p",null,"友链为随机顺序展示，希望交换友链的话可以按此格式在评论区留下信息：",-1)),a[3]||(a[3]=o("div",{style:{"max-height":"300px"},class:"language-json vp-adaptive-theme"},[o("button",{title:"Copy Code",class:"copy"}),o("span",{class:"lang"},"json"),o("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[o("code",{"v-pre":""},[o("span",{class:"line"},[o("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"{")]),E("\n"),o("span",{class:"line"},[o("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'    "url"'),o("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),o("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"https://imlklaus.github.io"'),o("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),E("\n"),o("span",{class:"line"},[o("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'    "avatar"'),o("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),o("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"https://imlklaus.github.io/images/tiamat2.jpg"'),o("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),E("\n"),o("span",{class:"line"},[o("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'    "name"'),o("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),o("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"imklaus"'),o("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),E("\n"),o("span",{class:"line"},[o("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'    "blog"'),o("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),o("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"-imklaus\'s Blog-"'),o("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),E("\n"),o("span",{class:"line"},[o("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'    "desc"'),o("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),o("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"The Winner Takes It All."'),o("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),E("\n"),o("span",{class:"line"},[o("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'    "color"'),o("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),o("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"#102434"')]),E("\n"),o("span",{class:"line"},[o("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])]),o("button",{class:"collapse"})],-1)),a[4]||(a[4]=o("hr",null,null,-1))])),"main-header":c((()=>[g(i.$slots,"main-header")])),"main-header-after":c((()=>[g(i.$slots,"main-header-after")])),"main-nav":c((()=>[g(i.$slots,"main-nav")])),"main-content-before":c((()=>[g(i.$slots,"main-content-before")])),"main-content":c((()=>[g(i.$slots,"main-content")])),"main-content-after":c((()=>[g(i.$slots,"main-content-after")])),"main-nav-before":c((()=>[g(i.$slots,"main-nav-before")])),"main-nav-after":c((()=>[g(i.$slots,"main-nav-after")])),comment:c((()=>[g(i.$slots,"comment")])),footer:c((()=>[g(i.$slots,"footer")])),aside:c((()=>[g(i.$slots,"aside")])),"aside-custom":c((()=>[g(i.$slots,"aside-custom")])),default:c((()=>[g(i.$slots,"default")])),_:3},8,["frontmatter"])}}};export{O as default,P as usePageData};
