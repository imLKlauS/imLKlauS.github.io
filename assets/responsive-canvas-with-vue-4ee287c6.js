import{_ as F}from"./ValaxyMain.vue_vue_type_style_index_0_lang-0fba385b.js";import{_ as y,c as D,w as o,o as i,a as s,b as l,d as t,f as d,r as a,e as m,p as C}from"./app-e529c65b.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-29f566da.js";import"./YunCard.vue_vue_type_style_index_0_lang-3313f385.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-030afe06.js";const W=JSON.parse('{"title":"Vue 中 canvas 的自适应","description":"","frontmatter":{"title":"Vue 中 canvas 的自适应","tags":["Canvas","Web","Vue","笔记","学习"],"categories":["云游的小笔记"],"date":"2018-03-27T11:44:33.000Z","updated":"2018-03-27T11:44:33.000Z"},"headers":[],"relativePath":"pages/posts/responsive-canvas-with-vue.md","path":"D:\\\\Learning\\\\myblog\\\\valaxy-blog\\\\Yuumi0221.github.io-main\\\\pages\\\\posts\\\\responsive-canvas-with-vue.md","lastUpdated":null}'),r=JSON.parse('{"title":"Vue 中 canvas 的自适应","description":"","frontmatter":{"title":"Vue 中 canvas 的自适应","tags":["Canvas","Web","Vue","笔记","学习"],"categories":["云游的小笔记"],"date":"2018-03-27T11:44:33.000Z","updated":"2018-03-27T11:44:33.000Z"},"headers":[],"relativePath":"pages/posts/responsive-canvas-with-vue.md","path":"D:\\\\Learning\\\\myblog\\\\valaxy-blog\\\\Yuumi0221.github.io-main\\\\pages\\\\posts\\\\responsive-canvas-with-vue.md","lastUpdated":null}'),u={name:"pages/posts/responsive-canvas-with-vue.md",data(){return{data:r,frontmatter:r.frontmatter}},setup(){C("pageData",r)}},A=s("p",null,[l("在过程中尝试使用 Vue 来实现 Html5 中 "),s("code",null,"Canvas"),l(" 标签的自适应。")],-1),h=s("div",{class:"language-html"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"canvas"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"id"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"star-map"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"ref"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"starMap"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    Sorry, your browser doesn't support the &lt;canvas&gt; element.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"canvas"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),v=s("code",null,"window.onresize",-1),f=s("code",null,"mounted",-1),g=s("div",{class:"language-vue"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"export"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"default"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#F07178"}},"name"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"StarMap"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#F07178"}},"mounted"),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#89DDFF"}},"this."),s("span",{style:{color:"#82AAFF"}},"resizeCanvas"),s("span",{style:{color:"#F07178"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#89DDFF"}},"this."),s("span",{style:{color:"#82AAFF"}},"drawStarMap"),s("span",{style:{color:"#F07178"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#A6ACCD"}},"window"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"addEventListener"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"resize"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#89DDFF"}},"this."),s("span",{style:{color:"#82AAFF"}},"resizeCanvas"),s("span",{style:{color:"#F07178"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"      "),s("span",{style:{color:"#676E95","font-style":"italic"}},"// 等待 canvas 变换好，再延时绘制，不然可能会没有内容")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#82AAFF"}},"setTimeout"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#C792EA"}},"function"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        "),s("span",{style:{color:"#89DDFF"}},"this."),s("span",{style:{color:"#82AAFF"}},"drawStarMap"),s("span",{style:{color:"#F07178"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#89DDFF"}},"},"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#F78C6C"}},"100"),s("span",{style:{color:"#F07178"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#F07178"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#89DDFF"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#F07178"}},"methods"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#F07178"}},"resizeCanvas"),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#89DDFF"}},"this."),s("span",{style:{color:"#A6ACCD"}},"canvas"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"document"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"getElementById"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"star-map"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#F07178"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"parentStyle"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"window"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"getComputedStyle"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"this."),s("span",{style:{color:"#A6ACCD"}},"canvas"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"parentNode"),s("span",{style:{color:"#F07178"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#89DDFF"}},"this."),s("span",{style:{color:"#A6ACCD"}},"canvas"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"width"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#82AAFF"}},"parseInt"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#A6ACCD"}},"parentStyle"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"width"),s("span",{style:{color:"#F07178"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#89DDFF"}},"this."),s("span",{style:{color:"#A6ACCD"}},"canvas"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"height"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"document"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"body"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"clientHeight"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"-"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#F78C6C"}},"400")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#89DDFF"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),b=s("p",null,[l("根据不同需求也可以使用 "),s("code",null,"document.body.clientHeight"),l(" 之类的。")],-1);function _(e,w,S,$,p,V){const n=m,c=F;return i(),D(c,{frontmatter:p.frontmatter,data:p.data},{"main-content-md":o(()=>[s("blockquote",null,[s("p",null,[l("最近又在写一些没什么用的小玩意儿。 ref: "),t(n,{href:"https://github.com/YunYouJun/star-timer/blob/master/docs/.vuepress/components/StarMap.vue",target:"_blank",rel:"noreferrer"},{default:o(()=>[l("https://github.com/YunYouJun/star-timer/blob/master/docs/.vuepress/components/StarMap.vue")]),_:1})])]),A,d(" more "),h,s("p",null,[v,l(" 方法挂载在 "),f,l(" 方法上。（mounted 可参见 Vue "),t(n,{href:"https://cn.vuejs.org/v2/api/#mounted",target:"_blank",rel:"noreferrer"},{default:o(()=>[l("生命周期钩子")]),_:1}),l("）")]),g,s("blockquote",null,[s("p",null,[t(n,{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/getComputedStyle",target:"_blank",rel:"noreferrer"},{default:o(()=>[l("Window.getComputedStyle() | MDN")]),_:1}),l(" Window.getComputedStyle()方法返回一个对象，该对象在应用活动样式表并解析这些值可能包含的任何基本计算后报告元素的所有 CSS 属性的值。")])]),s("p",null,[l("这里使用 getComputedStyle 来获取父节点的样式，它会展现所有呈现出来的 CSS 属性的值。而 "),t(n,{href:"http://element.style.xxx",target:"_blank",rel:"noreferrer"},{default:o(()=>[l("element.style.xxx")]),_:1}),l(" 只能获取被设置过的数值。")]),b]),"main-header":o(()=>[a(e.$slots,"main-header")]),"main-header-after":o(()=>[a(e.$slots,"main-header-after")]),"main-nav":o(()=>[a(e.$slots,"main-nav")]),"main-content":o(()=>[a(e.$slots,"main-content")]),"main-content-after":o(()=>[a(e.$slots,"main-content-after")]),"main-nav-before":o(()=>[a(e.$slots,"main-nav-before")]),"main-nav-after":o(()=>[a(e.$slots,"main-nav-after")]),comment:o(()=>[a(e.$slots,"comment")]),footer:o(()=>[a(e.$slots,"footer")]),aside:o(()=>[a(e.$slots,"aside")]),"aside-custom":o(()=>[a(e.$slots,"aside-custom")]),default:o(()=>[a(e.$slots,"default")]),_:3},8,["frontmatter","data"])}const T=y(u,[["render",_]]);export{W as __pageData,T as default};
