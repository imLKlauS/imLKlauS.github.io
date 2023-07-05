import{_ as i}from"./ValaxyMain.vue_vue_type_style_index_0_lang-1ca00d4c.js";import{_ as D,c as d,w as l,o as u,a as e,b as s,d as a,f as y,r as t,e as F,p as h}from"./app-153f3e80.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-68ddcc0a.js";import"./YunCard.vue_vue_type_style_index_0_lang-c5d7c298.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-4103d543.js";const J=JSON.parse('{"title":"Vue 学习笔记","description":"","frontmatter":{"title":"Vue 学习笔记","date":"2018-02-20T21:00:24.000Z","updated":"2019-01-28T17:58:24.000Z","tags":["Vue","笔记","学习"],"categories":["云游的小笔记"]},"headers":[{"level":2,"title":"FAQ","slug":"faq","link":"#faq","children":[{"level":3,"title":"Parcel.js + Vue","slug":"parcel-js-vue","link":"#parcel-js-vue","children":[]},{"level":3,"title":"非父子组件的通信","slug":"非父子组件的通信","link":"#非父子组件的通信","children":[]},{"level":3,"title":"Build Lib Without Dependencies","slug":"build-lib-without-dependencies","link":"#build-lib-without-dependencies","children":[]},{"level":3,"title":"SPA 预渲染","slug":"spa-预渲染","link":"#spa-预渲染","children":[]}]}],"relativePath":"pages/posts/vue-learn-note.md","path":"D:\\\\Learning\\\\myblog\\\\valaxy-blog\\\\imklaus.github.io-main\\\\pages\\\\posts\\\\vue-learn-note.md","lastUpdated":null}'),r=JSON.parse('{"title":"Vue 学习笔记","description":"","frontmatter":{"title":"Vue 学习笔记","date":"2018-02-20T21:00:24.000Z","updated":"2019-01-28T17:58:24.000Z","tags":["Vue","笔记","学习"],"categories":["云游的小笔记"]},"headers":[{"level":2,"title":"FAQ","slug":"faq","link":"#faq","children":[{"level":3,"title":"Parcel.js + Vue","slug":"parcel-js-vue","link":"#parcel-js-vue","children":[]},{"level":3,"title":"非父子组件的通信","slug":"非父子组件的通信","link":"#非父子组件的通信","children":[]},{"level":3,"title":"Build Lib Without Dependencies","slug":"build-lib-without-dependencies","link":"#build-lib-without-dependencies","children":[]},{"level":3,"title":"SPA 预渲染","slug":"spa-预渲染","link":"#spa-预渲染","children":[]}]}],"relativePath":"pages/posts/vue-learn-note.md","path":"D:\\\\Learning\\\\myblog\\\\valaxy-blog\\\\imklaus.github.io-main\\\\pages\\\\posts\\\\vue-learn-note.md","lastUpdated":null}'),A={name:"pages/posts/vue-learn-note.md",data(){return{data:r,frontmatter:r.frontmatter}},setup(){h("pageData",r)}},C={id:"faq",tabindex:"-1"},f=e("p",null,"记录一些细节问题以及不易搜索到的解决方法。",-1),g={id:"parcel-js-vue",tabindex:"-1"},m={id:"非父子组件的通信",tabindex:"-1"},_={id:"build-lib-without-dependencies",tabindex:"-1"},b=e("p",null,[s("使用 "),e("code",null,"vue-cli@3.x"),s(" 构建自己的库时，因为又引入了第三方组件，打包后将代码合在了一起显得很大。 所以应当只打包自己的组件，而不打包内部引入组件的代码。（依赖自然会安装）")],-1),v=e("code",null,"externals",-1),k=e("code",null,"vue.config.js",-1),E=e("div",{class:"language-js"},[e("span",{class:"copy"}),e("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"module.exports"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#F07178"}},"configureWebpack"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"    "),e("span",{style:{color:"#676E95","font-style":"italic"}},"// externals: ['v-tooltip']")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"    "),e("span",{style:{color:"#676E95","font-style":"italic"}},"// 但是连字符可能识别有问题, 不能这么写")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"    "),e("span",{style:{color:"#F07178"}},"externas"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"      "),e("span",{style:{color:"#F07178"}},"VTooltip"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#C3E88D"}},"v-tooltip"),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#89DDFF"}},",")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"    "),e("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),e("span",{class:"line"})])])],-1),j={id:"spa-预渲染",tabindex:"-1"},B=e("p",null,"也就是进行预渲染。",-1),V=e("p",null,"可用的插件：",-1),$=e("p",null,"Install",-1),P=e("div",{class:"language-bash"},[e("span",{class:"copy"}),e("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"yarn"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"add"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"-D"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"prerender-spa-plugin")]),s(`
`),e("span",{class:"line"})])])],-1),w=e("p",null,"Config",-1),x=e("div",{class:"language-js"},[e("span",{class:"copy"}),e("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#676E95","font-style":"italic"}},"// vue.config.js")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C792EA"}},"const"),e("span",{style:{color:"#A6ACCD"}}," path "),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#82AAFF"}},"require"),e("span",{style:{color:"#A6ACCD"}},"("),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#C3E88D"}},"path"),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#A6ACCD"}},")")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C792EA"}},"const"),e("span",{style:{color:"#A6ACCD"}}," PrerenderSPAPlugin "),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#82AAFF"}},"require"),e("span",{style:{color:"#A6ACCD"}},"("),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#C3E88D"}},"prerender-spa-plugin"),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#A6ACCD"}},")")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"module.exports"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#F07178"}},"configureWebpack"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"    "),e("span",{style:{color:"#F07178"}},"plugins"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," [")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"      "),e("span",{style:{color:"#89DDFF"}},"new"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#82AAFF"}},"PrerenderSPAPlugin"),e("span",{style:{color:"#A6ACCD"}},"("),e("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"        "),e("span",{style:{color:"#676E95","font-style":"italic"}},"// Required - The path to the webpack-outputted app to prerender.")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"        "),e("span",{style:{color:"#F07178"}},"staticDir"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," path"),e("span",{style:{color:"#89DDFF"}},"."),e("span",{style:{color:"#82AAFF"}},"join"),e("span",{style:{color:"#A6ACCD"}},"(__dirname"),e("span",{style:{color:"#89DDFF"}},","),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#C3E88D"}},"dist"),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#A6ACCD"}},")"),e("span",{style:{color:"#89DDFF"}},",")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"        "),e("span",{style:{color:"#676E95","font-style":"italic"}},"// Required - Routes to render.")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"        "),e("span",{style:{color:"#F07178"}},"routes"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," ["),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#C3E88D"}},"/"),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#89DDFF"}},","),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#C3E88D"}},"/go"),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#89DDFF"}},","),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#C3E88D"}},"/unit"),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#A6ACCD"}},"]"),e("span",{style:{color:"#89DDFF"}},",")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"      "),e("span",{style:{color:"#89DDFF"}},"}"),e("span",{style:{color:"#A6ACCD"}},")"),e("span",{style:{color:"#89DDFF"}},",")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"    ]"),e("span",{style:{color:"#89DDFF"}},",")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),e("span",{class:"line"})])])],-1),q=e("hr",null,null,-1),L=e("p",null,"To Be Continued.",-1);function S(o,T,W,N,c,R){const n=F,p=i;return u(),d(p,{frontmatter:c.frontmatter,data:c.data},{"main-content-md":l(()=>[e("p",null,[s("使用 "),a(n,{href:"https://cn.vuejs.org",target:"_blank",rel:"noreferrer"},{default:l(()=>[s("Vue.js")]),_:1}),s(" 过程中的一些笔记。")]),y(" more "),e("h2",C,[s("FAQ "),a(n,{class:"header-anchor",href:"#faq","aria-hidden":"true"},{default:l(()=>[s("#")]),_:1})]),f,e("h3",g,[a(n,{href:"https://yunyoujun.cn/posts/vue-parcel-demo/",target:"_blank",rel:"noreferrer"},{default:l(()=>[s("Parcel.js + Vue")]),_:1}),s(),a(n,{class:"header-anchor",href:"#parcel-js-vue","aria-hidden":"true"},{default:l(()=>[s("#")]),_:1})]),e("h3",m,[a(n,{href:"https://cn.vuejs.org/v2/guide/components.html#%E9%9D%9E%E7%88%B6%E5%AD%90%E7%BB%84%E4%BB%B6%E7%9A%84%E9%80%9A%E4%BF%A1",target:"_blank",rel:"noreferrer"},{default:l(()=>[s("非父子组件的通信")]),_:1}),s(),a(n,{class:"header-anchor",href:"#非父子组件的通信","aria-hidden":"true"},{default:l(()=>[s("#")]),_:1})]),e("ul",null,[e("li",null,[a(n,{href:"http://blog.csdn.net/sinat_17775997/article/details/59025563",target:"_blank",rel:"noreferrer"},{default:l(()=>[s("Vue2.0 组件之间通信 - CSDN")]),_:1})])]),e("h3",_,[s("Build Lib Without Dependencies "),a(n,{class:"header-anchor",href:"#build-lib-without-dependencies","aria-hidden":"true"},{default:l(()=>[s("#")]),_:1})]),b,e("p",null,[s("Webpack 文档中存在这样的选项，也就是注明 "),v,s("。 "),a(n,{href:"https://webpack.docschina.org/configuration/externals/#externals",target:"_blank",rel:"noreferrer"},{default:l(()=>[s("外部扩展 - Webpack")]),_:1})]),e("p",null,[s("可以在 "),k,s(" 中定义 Webpack 配置。 "),a(n,{href:"https://cli.vuejs.org/zh/config/#configurewebpack",target:"_blank",rel:"noreferrer"},{default:l(()=>[s("configureWebpack")]),_:1})]),E,e("h3",j,[s("SPA 预渲染 "),a(n,{class:"header-anchor",href:"#spa-预渲染","aria-hidden":"true"},{default:l(()=>[s("#")]),_:1})]),e("p",null,[s("使用"),a(n,{href:"https://router.vuejs.org/zh/guide/essentials/history-mode.html#html5-history-%E6%A8%A1%E5%BC%8F",target:"_blank",rel:"noreferrer"},{default:l(()=>[s("HTML5 History 模式")]),_:1}),s("可以使 URL 显得更美观。 但与此同时，由于是单页应用，没有后台配置支持的话，直接访问相关路由或刷新时会导致页面访问 404。 这时，又不想配置后台，又不想放弃 History 模式，则还有另外一条出路。")]),B,V,e("ul",null,[e("li",null,[a(n,{href:"https://github.com/chrisvfritz/prerender-spa-plugin",target:"_blank",rel:"noreferrer"},{default:l(()=>[s("prerender-spa-plugin")]),_:1})])]),$,P,w,x,q,L]),"main-header":l(()=>[t(o.$slots,"main-header")]),"main-header-after":l(()=>[t(o.$slots,"main-header-after")]),"main-nav":l(()=>[t(o.$slots,"main-nav")]),"main-content":l(()=>[t(o.$slots,"main-content")]),"main-content-after":l(()=>[t(o.$slots,"main-content-after")]),"main-nav-before":l(()=>[t(o.$slots,"main-nav-before")]),"main-nav-after":l(()=>[t(o.$slots,"main-nav-after")]),comment:l(()=>[t(o.$slots,"comment")]),footer:l(()=>[t(o.$slots,"footer")]),aside:l(()=>[t(o.$slots,"aside")]),"aside-custom":l(()=>[t(o.$slots,"aside-custom")]),default:l(()=>[t(o.$slots,"default")]),_:3},8,["frontmatter","data"])}const M=D(A,[["render",S]]);export{J as __pageData,M as default};
