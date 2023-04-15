import{_ as u}from"./ValaxyMain.vue_vue_type_style_index_0_lang-598c4c24.js";import{_ as h,c,w as n,o as p,f as m,a as t,b as e,d as o,r as l,e as f,p as g}from"./app-3de664ca.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-c79ef449.js";import"./YunCard.vue_vue_type_style_index_0_lang-937cbb65.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-8d2d8232.js";const H=JSON.parse('{"title":"CSS 陷阱","description":"","frontmatter":{"title":"CSS 陷阱","date":"2019-06-27T18:32:55.000Z","updated":"2020-02-03T18:32:55.000Z","tags":["学习","笔记","CSS"],"categories":["云游的小笔记"],"codepen":true},"headers":[{"level":2,"title":"FAQ","slug":"faq","link":"#faq","children":[{"level":3,"title":"Margin 塌陷","slug":"margin-塌陷","link":"#margin-塌陷","children":[]},{"level":3,"title":"transform 后 z-index 属性失效","slug":"transform-后-z-index-属性失效","link":"#transform-后-z-index-属性失效","children":[]},{"level":3,"title":"img 与父级元素下边框存在空隙","slug":"img-与父级元素下边框存在空隙","link":"#img-与父级元素下边框存在空隙","children":[]}]}],"relativePath":"pages/posts/css-trap-note.md","path":"D:\\\\Learning\\\\myblog\\\\valaxy-blog\\\\imLKlauS.github.io-valaxy\\\\pages\\\\posts\\\\css-trap-note.md","lastUpdated":null}'),r=JSON.parse('{"title":"CSS 陷阱","description":"","frontmatter":{"title":"CSS 陷阱","date":"2019-06-27T18:32:55.000Z","updated":"2020-02-03T18:32:55.000Z","tags":["学习","笔记","CSS"],"categories":["云游的小笔记"],"codepen":true},"headers":[{"level":2,"title":"FAQ","slug":"faq","link":"#faq","children":[{"level":3,"title":"Margin 塌陷","slug":"margin-塌陷","link":"#margin-塌陷","children":[]},{"level":3,"title":"transform 后 z-index 属性失效","slug":"transform-后-z-index-属性失效","link":"#transform-后-z-index-属性失效","children":[]},{"level":3,"title":"img 与父级元素下边框存在空隙","slug":"img-与父级元素下边框存在空隙","link":"#img-与父级元素下边框存在空隙","children":[]}]}],"relativePath":"pages/posts/css-trap-note.md","path":"D:\\\\Learning\\\\myblog\\\\valaxy-blog\\\\imLKlauS.github.io-valaxy\\\\pages\\\\posts\\\\css-trap-note.md","lastUpdated":null}'),_={name:"pages/posts/css-trap-note.md",data(){return{data:r,frontmatter:r.frontmatter}},setup(){g("pageData",r)}},b=t("p",null,"CSS 的奇妙 Bug",-1),x={id:"faq",tabindex:"-1"},Y={id:"margin-塌陷",tabindex:"-1"},v={class:"codepen","data-height":"304","data-theme-id":"0","data-default-tab":"css,result","data-user":"YunYouJun","data-slug-hash":"WqXGpo",style:{height:"304px","box-sizing":"border-box",display:"flex","align-items":"center","justify-content":"center",border:"2px solid",margin:"1em 0",padding:"1em"},"data-pen-title":"Margin Collapse"},S=t("a",{href:"https://codepen.io/YunYouJun/pen/WqXGpo/"}," Margin Collapse",-1),y={id:"父子间",tabindex:"-1"},k=t("p",null,[e("添加 "),t("code",null,"overflow: hidden;")],-1),z={id:"兄弟间",tabindex:"-1"},J=t("p",null,[e("添加 "),t("code",null,"float:left;")],-1),C={id:"transform-后-z-index-属性失效",tabindex:"-1"},$=t("p",null,"Demo:",-1),w={class:"codepen","data-height":"265","data-theme-id":"default","data-default-tab":"css,result","data-user":"YunYouJun","data-slug-hash":"PowMQjP",style:{height:"265px","box-sizing":"border-box",display:"flex","align-items":"center","justify-content":"center",border:"2px solid",margin:"1em 0",padding:"1em"},"data-pen-title":"transform vs z-index"},P=t("a",{href:"https://codepen.io/YunYouJun/pen/PowMQjP"}," transform vs z-index",-1),q=t("p",null,[e("原因主要是 "),t("code",null,"transform"),e(" 新创建了层叠上下文，影响了正常的 "),t("code",null,"z-index"),e("。")],-1),M=t("p",null,[t("strong",null,"解决方案"),e("：添加 "),t("code",null,"transform-style: preserve-3d;"),e("，使之变成 3d 显示方式。再通过 "),t("code",null,"transform: translateZ(-1px);"),e(" 来控制层级顺序。")],-1),T={id:"img-与父级元素下边框存在空隙",tabindex:"-1"},j=t("p",null,"Demo:",-1),D={class:"codepen","data-height":"265","data-theme-id":"default","data-default-tab":"html,result","data-user":"YunYouJun","data-slug-hash":"dyPxmGY",style:{height:"265px","box-sizing":"border-box",display:"flex","align-items":"center","justify-content":"center",border:"2px solid",margin:"1em 0",padding:"1em"},"data-pen-title":"img space with father"},N=t("a",{href:"https://codepen.io/YunYouJun/pen/dyPxmGY"}," img space with father",-1),B=t("p",null,"可以看到在底部，背景的红色透了出来。 其主要原因是文字默认的行高所产生的问题。（参见 demo）",-1),G=t("p",null,[t("strong",null,"解决方案"),e("：默认的 "),t("code",null,"vertical-align"),e(" 属性为 "),t("code",null,"baseline"),e("，我们只需要为 "),t("code",null,"img"),e(" 添加 "),t("code",null,"vertical-align: bottom"),e(" （"),t("code",null,"middle | top | bottom"),e(" 都可以）。")],-1),L=t("hr",null,null,-1),Q=t("p",null,"To Be Continued.",-1);function V(s,Z,A,F,i,O){const a=f,d=u;return p(),c(d,{frontmatter:i.frontmatter,data:i.data},{"main-content-md":n(()=>[b,m(" more "),t("h2",x,[e("FAQ "),o(a,{class:"header-anchor",href:"#faq","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),t("h3",Y,[e("Margin 塌陷 "),o(a,{class:"header-anchor",href:"#margin-塌陷","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),t("p",null,[e("DEMO: "),o(a,{href:"https://codepen.io/YunYouJun/pen/WqXGpo",target:"_blank",rel:"noreferrer"},{default:n(()=>[e("Margin Collapse")]),_:1})]),t("p",v,[t("span",null,[e("See the Pen "),S,e(" by YunYouJun ("),o(a,{href:"https://codepen.io/YunYouJun"},{default:n(()=>[e("@YunYouJun")]),_:1}),e(") on "),o(a,{href:"https://codepen.io"},{default:n(()=>[e("CodePen")]),_:1}),e(".")])]),t("h4",y,[e("父子间 "),o(a,{class:"header-anchor",href:"#父子间","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),k,t("h4",z,[e("兄弟间 "),o(a,{class:"header-anchor",href:"#兄弟间","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),J,t("h3",C,[e("transform 后 z-index 属性失效 "),o(a,{class:"header-anchor",href:"#transform-后-z-index-属性失效","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),$,t("p",w,[t("span",null,[e("See the Pen "),P,e(" by YunYouJun ("),o(a,{href:"https://codepen.io/YunYouJun"},{default:n(()=>[e("@YunYouJun")]),_:1}),e(") on "),o(a,{href:"https://codepen.io"},{default:n(()=>[e("CodePen")]),_:1}),e(".")])]),q,M,t("ul",null,[t("li",null,[o(a,{href:"https://link.jianshu.com/?t=http://www.zhangxinxu.com/wordpress/2016/01/understand-css-stacking-context-order-z-index/",target:"_blank",rel:"noreferrer"},{default:n(()=>[e("张鑫旭博文：深入理解 css 中的层叠上下文和层叠顺序")]),_:1})]),t("li",null,[o(a,{href:"https://link.jianshu.com/?t=https://segmentfault.com/q/1010000002480824",target:"_blank",rel:"noreferrer"},{default:n(()=>[e('Segmentfault 回答：Transform 引起的 z-index "失效"')]),_:1})])]),t("h3",T,[e("img 与父级元素下边框存在空隙 "),o(a,{class:"header-anchor",href:"#img-与父级元素下边框存在空隙","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),j,t("p",D,[t("span",null,[e("See the Pen "),N,e(" by YunYouJun ("),o(a,{href:"https://codepen.io/YunYouJun"},{default:n(()=>[e("@YunYouJun")]),_:1}),e(") on "),o(a,{href:"https://codepen.io"},{default:n(()=>[e("CodePen")]),_:1}),e(".")])]),B,G,t("blockquote",null,[t("p",null,[o(a,{href:"https://www.zhangxinxu.com/wordpress/2015/08/css-deep-understand-vertical-align-and-line-height/",target:"_blank",rel:"noreferrer"},{default:n(()=>[e("CSS 深入理解 vertical-align 和 line-height 的基友关系")]),_:1})])]),L,Q]),"main-header":n(()=>[l(s.$slots,"main-header")]),"main-header-after":n(()=>[l(s.$slots,"main-header-after")]),"main-nav":n(()=>[l(s.$slots,"main-nav")]),"main-content":n(()=>[l(s.$slots,"main-content")]),"main-content-after":n(()=>[l(s.$slots,"main-content-after")]),"main-nav-before":n(()=>[l(s.$slots,"main-nav-before")]),"main-nav-after":n(()=>[l(s.$slots,"main-nav-after")]),comment:n(()=>[l(s.$slots,"comment")]),footer:n(()=>[l(s.$slots,"footer")]),aside:n(()=>[l(s.$slots,"aside")]),"aside-custom":n(()=>[l(s.$slots,"aside-custom")]),default:n(()=>[l(s.$slots,"default")]),_:3},8,["frontmatter","data"])}const I=h(_,[["render",V]]);export{H as __pageData,I as default};
