import{_ as i}from"./ValaxyMain.vue_vue_type_style_index_0_lang-73463893.js";import{_ as u,c as m,w as e,o as h,a as l,b as s,d as t,f as d,r as o,e as y,p as g}from"./app-ec5dd970.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-823b3677.js";import"./YunCard.vue_vue_type_style_index_0_lang-e1acdf90.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-ea230aa9.js";const jl=JSON.parse('{"title":"char-dust 一个图片转字符画的 npm 包与示例站点","description":"","frontmatter":{"title":"char-dust 一个图片转字符画的 npm 包与示例站点","date":"2021-03-13T01:08:46.000Z","updated":"2021-03-14T02:51:46.000Z","tags":["npm","ascii"],"categories":["云游的小项目"],"katex":true},"headers":[{"level":2,"title":"Why char-dust?","slug":"why-char-dust","link":"#why-char-dust","children":[{"level":3,"title":"Features","slug":"features","link":"#features","children":[]}]},{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":2,"title":"实现","slug":"实现","link":"#实现","children":[]},{"level":2,"title":"后话","slug":"后话","link":"#后话","children":[]}],"relativePath":"pages/posts/why-make-char-dust.md","path":"D:\\\\Learning\\\\myblog\\\\valaxy-blog\\\\imklaus-blog-valaxy\\\\pages\\\\posts\\\\why-make-char-dust.md","lastUpdated":null}'),r=JSON.parse('{"title":"char-dust 一个图片转字符画的 npm 包与示例站点","description":"","frontmatter":{"title":"char-dust 一个图片转字符画的 npm 包与示例站点","date":"2021-03-13T01:08:46.000Z","updated":"2021-03-14T02:51:46.000Z","tags":["npm","ascii"],"categories":["云游的小项目"],"katex":true},"headers":[{"level":2,"title":"Why char-dust?","slug":"why-char-dust","link":"#why-char-dust","children":[{"level":3,"title":"Features","slug":"features","link":"#features","children":[]}]},{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":2,"title":"实现","slug":"实现","link":"#实现","children":[]},{"level":2,"title":"后话","slug":"后话","link":"#后话","children":[]}],"relativePath":"pages/posts/why-make-char-dust.md","path":"D:\\\\Learning\\\\myblog\\\\valaxy-blog\\\\imklaus-blog-valaxy\\\\pages\\\\posts\\\\why-make-char-dust.md","lastUpdated":null}'),D={name:"pages/posts/why-make-char-dust.md",data(){return{data:r,frontmatter:r.frontmatter}},setup(){g("pageData",r)}},_=l("p",null,[l("img",{src:"https://r2.yunyoujun.cn/images/char-dust-jashin.jpg",alt:"夹心酱"})],-1),F=l("p",null,"似乎有些老生常谈，那么为什么会有它的诞生呢？",-1),f={id:"why-char-dust",tabindex:"-1"},C=l("img",{src:"https://img.shields.io/npm/v/char-dust",alt:"npm"},null,-1),A=l("ul",null,[l("li",null,[l("s",null,"星尘龙（游戏王） Stardust Dragon")]),l("li",null,[l("s",null,"星尘斗士（JOJO） Stardust Crusaders")]),l("li",null,[l("s",null,"「与星尘握手」 命运石之门")])],-1),b=l("p",null,"字符（char）+ 尘埃（dust）= 字尘（char-dust）",-1),k=l("blockquote",null,[l("p",null,"「星尘」是恒星死亡时在太空中形成微小颗粒般的固体物质，它们飘散在宇宙中，继续碰撞、凝结，甚至会因此诞生出新的恒星。")],-1),v=l("p",null,"是死亡，也是新生。既渺小，又伟大。",-1),w=l("p",null,[s("我相当喜欢这个名字，也因此将其命名为 "),l("code",null,"char-dust"),s("。")],-1),j=l("p",null,"那么乍看似乎已经有些被玩烂的东西，为啥又要重复造轮子呢？（当然其实最重要的原因在后话里。）",-1),x={id:"features",tabindex:"-1"},E=l("ul",null,[l("li",null,"可自定义的图片大小"),l("li",null,"可自定义的字符串"),l("li",null,[s("线上方便快捷 "),l("ul",null,[l("li",null,"可自定义缩放 textarea"),l("li",null,"方便全选复制")])]),l("li",null,"兼容 node 与 browser 的 npm 包"),l("li",null,"TypeScript 类型")],-1),S=l("div",{class:"language-bash"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"npm"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"install"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"char-dust")]),s(`
`),l("span",{class:"line"})])])],-1),I=l("p",null,"首先，虽然各类语言都能实现类似的效果，但是想要拿到前端展示，那么必须得用万能的 JavaScript，其次想要使其变成方便使用且带声明的包，就得用无敌的 TypeScript。",-1),$={id:"思路",tabindex:"-1"},B=l("p",null,"虽然有把过程步骤详细介绍讲解的想法，但苦于杂务繁多，不妨鸽到日后再说（没错，我就是懒）。",-1),T=l("p",null,[l("span",{class:"katex-display"},[l("span",{class:"katex"},[l("span",{class:"katex-mathml"},[l("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[l("semantics",null,[l("mrow",null,[l("mi",null,"R"),l("mo",null,"⋅"),l("mn",null,"0.299"),l("mo",null,"+"),l("mi",null,"G"),l("mo",null,"⋅"),l("mn",null,"0.587"),l("mo",null,"+"),l("mi",null,"B"),l("mo",null,"⋅"),l("mn",null,"0.114"),l("mo",null,"="),l("mi",null,"B"),l("mi",null,"r"),l("mi",null,"i"),l("mi",null,"g"),l("mi",null,"h"),l("mi",null,"t"),l("mi",null,"n"),l("mi",null,"e"),l("mi",null,"s"),l("mi",null,"s")]),l("annotation",{encoding:"application/x-tex"},"R \\cdot 0.299 + G \\cdot 0.587 + B \\cdot 0.114 = Brightness ")])])]),l("span",{class:"katex-html","aria-hidden":"true"},[l("span",{class:"base"},[l("span",{class:"strut",style:{height:"0.6833em"}}),l("span",{class:"mord mathnormal",style:{"margin-right":"0.00773em"}},"R"),l("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),l("span",{class:"mbin"},"⋅"),l("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),l("span",{class:"base"},[l("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),l("span",{class:"mord"},"0.299"),l("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),l("span",{class:"mbin"},"+"),l("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),l("span",{class:"base"},[l("span",{class:"strut",style:{height:"0.6833em"}}),l("span",{class:"mord mathnormal"},"G"),l("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),l("span",{class:"mbin"},"⋅"),l("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),l("span",{class:"base"},[l("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),l("span",{class:"mord"},"0.587"),l("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),l("span",{class:"mbin"},"+"),l("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),l("span",{class:"base"},[l("span",{class:"strut",style:{height:"0.6833em"}}),l("span",{class:"mord mathnormal",style:{"margin-right":"0.05017em"}},"B"),l("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),l("span",{class:"mbin"},"⋅"),l("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),l("span",{class:"base"},[l("span",{class:"strut",style:{height:"0.6444em"}}),l("span",{class:"mord"},"0.114"),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),l("span",{class:"mrel"},"="),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),l("span",{class:"base"},[l("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),l("span",{class:"mord mathnormal",style:{"margin-right":"0.05017em"}},"B"),l("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),l("span",{class:"mord mathnormal"},"i"),l("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),l("span",{class:"mord mathnormal"},"h"),l("span",{class:"mord mathnormal"},"t"),l("span",{class:"mord mathnormal"},"n"),l("span",{class:"mord mathnormal"},"ess")])])])])],-1),V=l("p",null,[s("拿到亮度后，我们再定义一串字符串来分配给不同的亮度。譬如从暗到亮分别为 "),l("code",null,"@#&$%863!i1uazvno~;*^+-. "),s("。（当然其他也完全可以）")],-1),J=l("p",null,"均分亮度，得到不同等级，根据每个像素分配对于亮度级别的字符即可。",-1),G=l("p",null,"此外，图片很大的时候，对每个像素处理无疑是很慢的，我们可以设置一个字符宽度来跳着处理，间隔的像素则可以忽略，毕竟已经转成字符了，精度早就下降没了。（高度同理）",-1),N=l("p",null,"但我的目的并不是仅仅放到前端展示，我希望它在 node 端也能即时地读取图片并转换。",-1),q=l("code",null,"document",-1),R=l("code",null,"canvas",-1),W=l("code",null,"ImageData",-1),Y=l("code",null,"C++",-1),Z=l("p",null,"面向用户的产物，不能期望每个人都能成功安装使用它，所以我们应该寻求其他更方便可靠的方式。",-1),M=l("p",null,[l("code",null,"jimp"),s(" 是纯粹使用 JavaScript 编写的图片处理库，与原生性能的差距也完全可以容忍。")],-1),O=l("p",null,[s("当我们想要在 Node 端运行时，只需要再安装 "),l("code",null,"jimp"),s(" 与 "),l("code",null,"@canvas/image-data"),s(" 便可。 在国内镜像的加持下，也无需担心。")],-1),z=l("p",null,[l("code",null,"jimp"),s(" 读取图像数据，"),l("code",null,"@canvas/image-data"),s(" 负责将其转化为标准的 "),l("code",null,"ImageData"),s("，再交给 "),l("code",null,"char-dust"),s("。")],-1),L=l("div",{class:"language-bash"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"yarn"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"add"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"jimp"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"@canvas/image-data")]),s(`
`),l("span",{class:"line"})])])],-1),U=l("div",{class:"language-typescript"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),l("span",{style:{color:"#A6ACCD"}}," jimp "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"jimp"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),l("span",{style:{color:"#A6ACCD"}}," ImageData "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"@canvas/image-data"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"imageToText"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"}"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"char-dust"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"resolve"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"}"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"path"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"jimp"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#82AAFF"}},"read"),l("span",{style:{color:"#A6ACCD"}},"("),l("span",{style:{color:"#82AAFF"}},"resolve"),l("span",{style:{color:"#A6ACCD"}},"(__dirname"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"./cat-of-the-rebellion.jpg"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#A6ACCD"}},"))"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#82AAFF"}},"then"),l("span",{style:{color:"#A6ACCD"}},"("),l("span",{style:{color:"#89DDFF"}},"("),l("span",{style:{color:"#A6ACCD","font-style":"italic"}},"image"),l("span",{style:{color:"#89DDFF"}},")"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"=>"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"  "),l("span",{style:{color:"#A6ACCD"}},"image"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#82AAFF"}},"scale"),l("span",{style:{color:"#F07178"}},"("),l("span",{style:{color:"#F78C6C"}},"5"),l("span",{style:{color:"#F07178"}},")"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"  "),l("span",{style:{color:"#C792EA"}},"const"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"imageData"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"new"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#82AAFF"}},"ImageData"),l("span",{style:{color:"#F07178"}},"(")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#A6ACCD"}},"Uint8ClampedArray"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#82AAFF"}},"from"),l("span",{style:{color:"#F07178"}},"("),l("span",{style:{color:"#A6ACCD"}},"image"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#A6ACCD"}},"bitmap"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#A6ACCD"}},"data"),l("span",{style:{color:"#F07178"}},")"),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#A6ACCD"}},"image"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#A6ACCD"}},"bitmap"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#A6ACCD"}},"width"),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#A6ACCD"}},"image"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#A6ACCD"}},"bitmap"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#A6ACCD"}},"height")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"  )"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"  "),l("span",{style:{color:"#C792EA"}},"const"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"text"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#82AAFF"}},"imageToText"),l("span",{style:{color:"#F07178"}},"("),l("span",{style:{color:"#A6ACCD"}},"imageData"),l("span",{style:{color:"#F07178"}},")"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"  "),l("span",{style:{color:"#A6ACCD"}},"console"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#82AAFF"}},"log"),l("span",{style:{color:"#F07178"}},"("),l("span",{style:{color:"#A6ACCD"}},"text"),l("span",{style:{color:"#F07178"}},")"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"}"),l("span",{style:{color:"#A6ACCD"}},")"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"})])])],-1),H=l("p",null,"万事大吉。",-1),P=l("p",null,"其他则是细节的处理，效率优化，UI 样式，图片缩放，打包，node 端的兼容之类的。",-1),Q={id:"实现",tabindex:"-1"},K=l("p",null,[l("img",{src:"https://cdn.yunyoujun.cn/img/meme/five-year.gif",alt:"five-year"})],-1),X=l("p",null,"这其实是我三年前开的坑，🐦，咕咕咕，没错我就是鸽子，但我还是好好地填上了。",-1),ll=l("p",null,[l("img",{src:"https://r2.yunyoujun.cn/images/ready-for-compliments.jpg",alt:"准备迎接夸奖"})],-1),sl=l("p",null,[s("所以重构的时候，直接将原先的 "),l("code",null,"vue2"),s(" + "),l("code",null,"@vue/cli"),s(" + "),l("code",null,"webpack"),s(" + "),l("code",null,"element-ui(2)"),s(" 换成了 "),l("code",null,"vue3"),s(" + "),l("code",null,"vite"),s(" + "),l("code",null,"element-plus(3)"),s("。")],-1),el=l("p",null,"看起来好像和 element 还有点不一样？",-1),al=l("blockquote",null,[l("p",null,"也是三年前开的坑，没想到换成 Vue3 + Element3 也还能用，最近用 Vuepress 重写了遍文档，以前的网站还是用 Webpack 搭的。那时 Vuepress 还没诞生，现在却连 Vuepress 都要用 TypeScript 重构了，有种物是人非的感觉。")],-1),tl={id:"后话",tabindex:"-1"},nl=l("p",null,"在动工前，我也检索了是否已有满足上述需求的类似产物存在，但很遗憾我并没有发现。",-1),ol=l("p",null,"作者则告诉我这是他六年前写的项目，那时候 npm 还不算个东西。（我的蹩脚翻译）不过他答应说会在关闭 Issue 前 publish 一个包。（但是直到三年后的今天，它还是 Open 的。）",-1),rl=l("p",null,[l("img",{src:"https://i.loli.net/2021/03/13/aqnJHGFcERipIWs.jpg",alt:"three-years-ago.jpg"})],-1),cl=l("p",null,"三年前的某一天我也曾决定自己尝试实现一下这样的程序，只是最后也和 JSCII 作者一样因鸽子的天性而就此遗忘了。",-1),pl=l("p",null,"而直到前几日，我才终于再次将其捡起，并下定决心完成它。",-1),il=l("p",null,"那么这个原因到底是什么呢？大致可以类比于雄性织巢鸟需要建造精美的巢穴用以吸引异性。",-1),ul=l("p",null,"所以三年后的我终于完成了它，因为「这是计划的一部分」。",-1),ml=l("hr",null,null,-1),hl=l("p",null,"让人不禁潸然泪下。",-1),dl=l("p",null,[l("img",{src:"https://r2.yunyoujun.cn/images/dont-scold-me.jpg",alt:"别骂了别骂了再骂人要傻了"})],-1),yl=l("hr",null,null,-1),gl=l("p",null,"Q.E.D.",-1);function Dl(n,_l,Fl,fl,c,Cl){const a=y,p=i;return h(),m(p,{frontmatter:c.frontmatter,data:c.data},{"main-content-md":e(()=>[_,l("p",null,[s("如题，它的全部作用就是将图片变成字符画（又称 "),t(a,{href:"https://zh.wikipedia.org/wiki/ASCII%E8%89%BA%E6%9C%AF",target:"_blank",rel:"noreferrer"},{default:e(()=>[s("ASCII 艺术")]),_:1}),s("）。")]),l("ul",null,[l("li",null,[s("GitHub: "),t(a,{href:"https://github.com/YunYouJun/char-dust/",target:"_blank",rel:"noreferrer"},{default:e(()=>[s("https://github.com/YunYouJun/char-dust/")]),_:1})]),l("li",null,[s("示例站点: "),t(a,{href:"https://yunyoujun.github.io/char-dust/",target:"_blank",rel:"noreferrer"},{default:e(()=>[s("https://yunyoujun.github.io/char-dust/")]),_:1})])]),F,d(" more "),l("h2",f,[s("Why char-dust? "),t(a,{class:"header-anchor",href:"#why-char-dust","aria-hidden":"true"},{default:e(()=>[s("#")]),_:1})]),l("p",null,[t(a,{href:"http://npmjs.com/package/char-dust",target:"_blank",rel:"noreferrer"},{default:e(()=>[C]),_:1})]),l("p",null,[s("有一部电影叫做"),t(a,{href:"https://movie.douban.com/subject/1867335/",target:"_blank",rel:"noreferrer"},{default:e(()=>[s("「星尘 Stardust」")]),_:1}),s("，名字挺酷。")]),A,b,k,v,w,j,l("h3",x,[s("Features "),t(a,{class:"header-anchor",href:"#features","aria-hidden":"true"},{default:e(()=>[s("#")]),_:1})]),E,S,I,l("blockquote",null,[l("p",null,[s("Google 甚至还有一个专门的 repo "),t(a,{href:"https://github.com/google/gif-for-cli",target:"_blank",rel:"noreferrer"},{default:e(()=>[s("gif-for-cli")]),_:1}),s("。")])]),l("h2",$,[s("思路 "),t(a,{class:"header-anchor",href:"#思路","aria-hidden":"true"},{default:e(()=>[s("#")]),_:1})]),B,l("p",null,[s("思路其实很简单，将图片读到 canvas 上，获取 "),t(a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/ImageData",target:"_blank",rel:"noreferrer"},{default:e(()=>[s("ImageData")]),_:1}),s("，读取像素，通过 RGB 计算出灰度（亮度）。")]),l("blockquote",null,[l("p",null,[s("RGB 转灰度有一个专门的心理学公式（至于为什么就只能请您移步 "),t(a,{href:"https://en.wikipedia.org/wiki/Grayscale",target:"_blank",rel:"noreferrer"},{default:e(()=>[s("Grayscale")]),_:1}),s(" 了）")])]),T,l("p",null,[s("代码写久了，会有一种想要将各功能都抽象的强迫症。专门处理色彩的类库也必然是有的，于是我改为使用 "),t(a,{href:"https://github.com/scttcper/tinycolor",target:"_blank",rel:"noreferrer"},{default:e(()=>[s("tinycolor")]),_:1}),s(" 获取亮度。")]),V,J,G,N,l("blockquote",null,[l("p",null,[s("为什么呢，因为我最近打算整一个终端的文字冒险游戏，可能会成为 "),t(a,{href:"https://www.yunyoujun.cn/posts/make-an-avg-engine/",target:"_blank",rel:"noreferrer"},{default:e(()=>[s("ADV 游戏引擎计划")]),_:1}),s(" 的一些试水，而在终端回车显示对话，选项，偶尔用字符串来展示图片应该也会是比较酷的事情，当然这就是他话了。")])]),l("p",null,[s("对于 Node 来说，并没有 "),q,s(" 的存在，当然也就没有 "),R,s(" 的 "),W,s("，但是我们可以通过 "),t(a,{href:"https://github.com/Automattic/node-canvas",target:"_blank",rel:"noreferrer"},{default:e(()=>[s("node-canvas")]),_:1}),s(" 来实现。")]),l("p",null,[s("node-canvas 是使用 "),Y,s(" 原生编写，再打包交由 Node 调用，因此需要安装 "),t(a,{href:"https://www.npmjs.com/package/node-pre-gyp",target:"_blank",rel:"noreferrer"},{default:e(()=>[s("node-pre-gyp")]),_:1}),s("，而这家伙可以说是「臭名昭著」了，国内的安装速度极为缓慢，还未必成功。")]),Z,l("p",null,[s("我最后找到的方案则是 "),t(a,{href:"https://github.com/oliver-moran/jimp",target:"_blank",rel:"noreferrer"},{default:e(()=>[s("jimp")]),_:1}),s(" + "),t(a,{href:"https://github.com/node-gfx/image-data",target:"_blank",rel:"noreferrer"},{default:e(()=>[s("@canvas/image-data")]),_:1}),s("。")]),M,O,l("blockquote",null,[l("p",null,[s("既然说到这了，就顺带再打个 nnrm 的广告。"),t(a,{href:"https://www.yunyoujun.cn/posts/nnrm-new-nrm/",target:"_blank",rel:"noreferrer"},{default:e(()=>[s("nnrm - 一个极简的 npm/yarn registry 切换管理器")]),_:1})])]),z,L,U,H,P,l("h2",Q,[s("实现 "),t(a,{class:"header-anchor",href:"#实现","aria-hidden":"true"},{default:e(()=>[s("#")]),_:1})]),K,X,ll,sl,el,l("p",null,[s("那是因为我用了独家的极简主题 "),t(a,{href:"https://github.com/YunYouJun/element-theme-ink",target:"_blank",rel:"noreferrer"},{default:e(()=>[s("element-theme-ink")]),_:1}),s("。")]),al,l("h2",tl,[s("后话 "),t(a,{class:"header-anchor",href:"#后话","aria-hidden":"true"},{default:e(()=>[s("#")]),_:1})]),nl,l("p",null,[s("相关性最大且 Star 最多的一个项目是 "),t(a,{href:"https://github.com/EnotionZ/jscii/issues/9",target:"_blank",rel:"noreferrer"},{default:e(()=>[s("jscii")]),_:1}),s("。")]),l("blockquote",null,[l("p",null,[s("早在三年前我提了一个 Issue: "),t(a,{href:"https://github.com/EnotionZ/jscii/issues/9",target:"_blank",rel:"noreferrer"},{default:e(()=>[s("Suggestion: How about packaging it into a library？")]),_:1})])]),ol,rl,cl,pl,il,ul,ml,l("p",null,[s("只是当我在 VSCode 里勤勤恳恳时，几小时前我尝试安装的 "),t(a,{href:"https://github.com/SaekiRaku/vscode-rainbow-fart",target:"_blank",rel:"noreferrer"},{default:e(()=>[s("VSCode 彩虹屁插件")]),_:1}),s(" 突然蹦出了一句话，「你这么喜欢写代码，一定没有女朋友吧」。")]),hl,dl,yl,gl]),"main-header":e(()=>[o(n.$slots,"main-header")]),"main-header-after":e(()=>[o(n.$slots,"main-header-after")]),"main-nav":e(()=>[o(n.$slots,"main-nav")]),"main-content":e(()=>[o(n.$slots,"main-content")]),"main-content-after":e(()=>[o(n.$slots,"main-content-after")]),"main-nav-before":e(()=>[o(n.$slots,"main-nav-before")]),"main-nav-after":e(()=>[o(n.$slots,"main-nav-after")]),comment:e(()=>[o(n.$slots,"comment")]),footer:e(()=>[o(n.$slots,"footer")]),aside:e(()=>[o(n.$slots,"aside")]),"aside-custom":e(()=>[o(n.$slots,"aside-custom")]),default:e(()=>[o(n.$slots,"default")]),_:3},8,["frontmatter","data"])}const xl=u(D,[["render",Dl]]);export{jl as __pageData,xl as default};
