import{_ as i}from"./ValaxyMain.vue_vue_type_style_index_0_lang-d4bd986d.js";import{_ as u,c as m,w as e,o as h,a as s,b as l,d as t,f as d,r as o,e as y,p as g}from"./app-e0b3e942.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-4e4e1e77.js";import"./YunCard.vue_vue_type_style_index_0_lang-e021946e.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-1ec5f4ba.js";const js=JSON.parse('{"title":"char-dust 一个图片转字符画的 npm 包与示例站点","description":"","frontmatter":{"title":"char-dust 一个图片转字符画的 npm 包与示例站点","date":"2021-03-13T01:08:46.000Z","updated":"2021-03-14T02:51:46.000Z","tags":["npm","ascii"],"categories":["云游的小项目"],"katex":true},"headers":[{"level":2,"title":"Why char-dust?","slug":"why-char-dust","link":"#why-char-dust","children":[{"level":3,"title":"Features","slug":"features","link":"#features","children":[]}]},{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":2,"title":"实现","slug":"实现","link":"#实现","children":[]},{"level":2,"title":"后话","slug":"后话","link":"#后话","children":[]}],"relativePath":"pages/posts/why-make-char-dust.md","path":"D:\\\\Learning\\\\myblog\\\\valaxy-blog\\\\imklaus.github.io-main\\\\pages\\\\posts\\\\why-make-char-dust.md","lastUpdated":null}'),r=JSON.parse('{"title":"char-dust 一个图片转字符画的 npm 包与示例站点","description":"","frontmatter":{"title":"char-dust 一个图片转字符画的 npm 包与示例站点","date":"2021-03-13T01:08:46.000Z","updated":"2021-03-14T02:51:46.000Z","tags":["npm","ascii"],"categories":["云游的小项目"],"katex":true},"headers":[{"level":2,"title":"Why char-dust?","slug":"why-char-dust","link":"#why-char-dust","children":[{"level":3,"title":"Features","slug":"features","link":"#features","children":[]}]},{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":2,"title":"实现","slug":"实现","link":"#实现","children":[]},{"level":2,"title":"后话","slug":"后话","link":"#后话","children":[]}],"relativePath":"pages/posts/why-make-char-dust.md","path":"D:\\\\Learning\\\\myblog\\\\valaxy-blog\\\\imklaus.github.io-main\\\\pages\\\\posts\\\\why-make-char-dust.md","lastUpdated":null}'),D={name:"pages/posts/why-make-char-dust.md",data(){return{data:r,frontmatter:r.frontmatter}},setup(){g("pageData",r)}},_=s("p",null,[s("img",{src:"https://r2.yunyoujun.cn/images/char-dust-jashin.jpg",alt:"夹心酱"})],-1),F=s("p",null,"似乎有些老生常谈，那么为什么会有它的诞生呢？",-1),f={id:"why-char-dust",tabindex:"-1"},C=s("img",{src:"https://img.shields.io/npm/v/char-dust",alt:"npm"},null,-1),A=s("ul",null,[s("li",null,[s("s",null,"星尘龙（游戏王） Stardust Dragon")]),s("li",null,[s("s",null,"星尘斗士（JOJO） Stardust Crusaders")]),s("li",null,[s("s",null,"「与星尘握手」 命运石之门")])],-1),b=s("p",null,"字符（char）+ 尘埃（dust）= 字尘（char-dust）",-1),k=s("blockquote",null,[s("p",null,"「星尘」是恒星死亡时在太空中形成微小颗粒般的固体物质，它们飘散在宇宙中，继续碰撞、凝结，甚至会因此诞生出新的恒星。")],-1),v=s("p",null,"是死亡，也是新生。既渺小，又伟大。",-1),w=s("p",null,[l("我相当喜欢这个名字，也因此将其命名为 "),s("code",null,"char-dust"),l("。")],-1),j=s("p",null,"那么乍看似乎已经有些被玩烂的东西，为啥又要重复造轮子呢？（当然其实最重要的原因在后话里。）",-1),E={id:"features",tabindex:"-1"},x=s("ul",null,[s("li",null,"可自定义的图片大小"),s("li",null,"可自定义的字符串"),s("li",null,[l("线上方便快捷 "),s("ul",null,[s("li",null,"可自定义缩放 textarea"),s("li",null,"方便全选复制")])]),s("li",null,"兼容 node 与 browser 的 npm 包"),s("li",null,"TypeScript 类型")],-1),S=s("div",{class:"language-bash"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"npm"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"install"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"char-dust")]),l(`
`),s("span",{class:"line"})])])],-1),I=s("p",null,"首先，虽然各类语言都能实现类似的效果，但是想要拿到前端展示，那么必须得用万能的 JavaScript，其次想要使其变成方便使用且带声明的包，就得用无敌的 TypeScript。",-1),$={id:"思路",tabindex:"-1"},B=s("p",null,"虽然有把过程步骤详细介绍讲解的想法，但苦于杂务繁多，不妨鸽到日后再说（没错，我就是懒）。",-1),T=s("p",null,[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"R"),s("mo",null,"⋅"),s("mn",null,"0.299"),s("mo",null,"+"),s("mi",null,"G"),s("mo",null,"⋅"),s("mn",null,"0.587"),s("mo",null,"+"),s("mi",null,"B"),s("mo",null,"⋅"),s("mn",null,"0.114"),s("mo",null,"="),s("mi",null,"B"),s("mi",null,"r"),s("mi",null,"i"),s("mi",null,"g"),s("mi",null,"h"),s("mi",null,"t"),s("mi",null,"n"),s("mi",null,"e"),s("mi",null,"s"),s("mi",null,"s")]),s("annotation",{encoding:"application/x-tex"},"R \\cdot 0.299 + G \\cdot 0.587 + B \\cdot 0.114 = Brightness ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.00773em"}},"R"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"⋅"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"0.299"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal"},"G"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"⋅"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"0.587"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05017em"}},"B"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"⋅"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"0.114"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05017em"}},"B"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mord mathnormal"},"h"),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mord mathnormal"},"ess")])])])])],-1),V=s("p",null,[l("拿到亮度后，我们再定义一串字符串来分配给不同的亮度。譬如从暗到亮分别为 "),s("code",null,"@#&$%863!i1uazvno~;*^+-. "),l("。（当然其他也完全可以）")],-1),J=s("p",null,"均分亮度，得到不同等级，根据每个像素分配对于亮度级别的字符即可。",-1),G=s("p",null,"此外，图片很大的时候，对每个像素处理无疑是很慢的，我们可以设置一个字符宽度来跳着处理，间隔的像素则可以忽略，毕竟已经转成字符了，精度早就下降没了。（高度同理）",-1),N=s("p",null,"但我的目的并不是仅仅放到前端展示，我希望它在 node 端也能即时地读取图片并转换。",-1),q=s("code",null,"document",-1),R=s("code",null,"canvas",-1),W=s("code",null,"ImageData",-1),Y=s("code",null,"C++",-1),Z=s("p",null,"面向用户的产物，不能期望每个人都能成功安装使用它，所以我们应该寻求其他更方便可靠的方式。",-1),M=s("p",null,[s("code",null,"jimp"),l(" 是纯粹使用 JavaScript 编写的图片处理库，与原生性能的差距也完全可以容忍。")],-1),O=s("p",null,[l("当我们想要在 Node 端运行时，只需要再安装 "),s("code",null,"jimp"),l(" 与 "),s("code",null,"@canvas/image-data"),l(" 便可。 在国内镜像的加持下，也无需担心。")],-1),z=s("p",null,[s("code",null,"jimp"),l(" 读取图像数据，"),s("code",null,"@canvas/image-data"),l(" 负责将其转化为标准的 "),s("code",null,"ImageData"),l("，再交给 "),s("code",null,"char-dust"),l("。")],-1),L=s("div",{class:"language-bash"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"yarn"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"add"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"jimp"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"@canvas/image-data")]),l(`
`),s("span",{class:"line"})])])],-1),U=s("div",{class:"language-typescript"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),s("span",{style:{color:"#A6ACCD"}}," jimp "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"jimp"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),s("span",{style:{color:"#A6ACCD"}}," ImageData "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"@canvas/image-data"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"imageToText"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"char-dust"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"resolve"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"path"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"jimp"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"read"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#82AAFF"}},"resolve"),s("span",{style:{color:"#A6ACCD"}},"(__dirname"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"./cat-of-the-rebellion.jpg"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}},"))"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"then"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD","font-style":"italic"}},"image"),s("span",{style:{color:"#89DDFF"}},")"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#A6ACCD"}},"image"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"scale"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#F78C6C"}},"5"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"imageData"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"new"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#82AAFF"}},"ImageData"),s("span",{style:{color:"#F07178"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#A6ACCD"}},"Uint8ClampedArray"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"from"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#A6ACCD"}},"image"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"bitmap"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"data"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#A6ACCD"}},"image"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"bitmap"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"width"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#A6ACCD"}},"image"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"bitmap"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"height")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  )"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"text"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#82AAFF"}},"imageToText"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#A6ACCD"}},"imageData"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#A6ACCD"}},"console"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"log"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#A6ACCD"}},"text"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"})])])],-1),H=s("p",null,"万事大吉。",-1),P=s("p",null,"其他则是细节的处理，效率优化，UI 样式，图片缩放，打包，node 端的兼容之类的。",-1),Q={id:"实现",tabindex:"-1"},K=s("p",null,[s("img",{src:"https://cdn.yunyoujun.cn/img/meme/five-year.gif",alt:"five-year"})],-1),X=s("p",null,"这其实是我三年前开的坑，🐦，咕咕咕，没错我就是鸽子，但我还是好好地填上了。",-1),ss=s("p",null,[s("img",{src:"https://r2.yunyoujun.cn/images/ready-for-compliments.jpg",alt:"准备迎接夸奖"})],-1),ls=s("p",null,[l("所以重构的时候，直接将原先的 "),s("code",null,"vue2"),l(" + "),s("code",null,"@vue/cli"),l(" + "),s("code",null,"webpack"),l(" + "),s("code",null,"element-ui(2)"),l(" 换成了 "),s("code",null,"vue3"),l(" + "),s("code",null,"vite"),l(" + "),s("code",null,"element-plus(3)"),l("。")],-1),es=s("p",null,"看起来好像和 element 还有点不一样？",-1),as=s("blockquote",null,[s("p",null,"也是三年前开的坑，没想到换成 Vue3 + Element3 也还能用，最近用 Vuepress 重写了遍文档，以前的网站还是用 Webpack 搭的。那时 Vuepress 还没诞生，现在却连 Vuepress 都要用 TypeScript 重构了，有种物是人非的感觉。")],-1),ts={id:"后话",tabindex:"-1"},ns=s("p",null,"在动工前，我也检索了是否已有满足上述需求的类似产物存在，但很遗憾我并没有发现。",-1),os=s("p",null,"作者则告诉我这是他六年前写的项目，那时候 npm 还不算个东西。（我的蹩脚翻译）不过他答应说会在关闭 Issue 前 publish 一个包。（但是直到三年后的今天，它还是 Open 的。）",-1),rs=s("p",null,[s("img",{src:"https://i.loli.net/2021/03/13/aqnJHGFcERipIWs.jpg",alt:"three-years-ago.jpg"})],-1),cs=s("p",null,"三年前的某一天我也曾决定自己尝试实现一下这样的程序，只是最后也和 JSCII 作者一样因鸽子的天性而就此遗忘了。",-1),ps=s("p",null,"而直到前几日，我才终于再次将其捡起，并下定决心完成它。",-1),is=s("p",null,"那么这个原因到底是什么呢？大致可以类比于雄性织巢鸟需要建造精美的巢穴用以吸引异性。",-1),us=s("p",null,"所以三年后的我终于完成了它，因为「这是计划的一部分」。",-1),ms=s("hr",null,null,-1),hs=s("p",null,"让人不禁潸然泪下。",-1),ds=s("p",null,[s("img",{src:"https://r2.yunyoujun.cn/images/dont-scold-me.jpg",alt:"别骂了别骂了再骂人要傻了"})],-1),ys=s("hr",null,null,-1),gs=s("p",null,"Q.E.D.",-1);function Ds(n,_s,Fs,fs,c,Cs){const a=y,p=i;return h(),m(p,{frontmatter:c.frontmatter,data:c.data},{"main-content-md":e(()=>[_,s("p",null,[l("如题，它的全部作用就是将图片变成字符画（又称 "),t(a,{href:"https://zh.wikipedia.org/wiki/ASCII%E8%89%BA%E6%9C%AF",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("ASCII 艺术")]),_:1}),l("）。")]),s("ul",null,[s("li",null,[l("GitHub: "),t(a,{href:"https://github.com/YunYouJun/char-dust/",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("https://github.com/YunYouJun/char-dust/")]),_:1})]),s("li",null,[l("示例站点: "),t(a,{href:"https://yunyoujun.github.io/char-dust/",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("https://yunyoujun.github.io/char-dust/")]),_:1})])]),F,d(" more "),s("h2",f,[l("Why char-dust? "),t(a,{class:"header-anchor",href:"#why-char-dust","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),s("p",null,[t(a,{href:"http://npmjs.com/package/char-dust",target:"_blank",rel:"noreferrer"},{default:e(()=>[C]),_:1})]),s("p",null,[l("有一部电影叫做"),t(a,{href:"https://movie.douban.com/subject/1867335/",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("「星尘 Stardust」")]),_:1}),l("，名字挺酷。")]),A,b,k,v,w,j,s("h3",E,[l("Features "),t(a,{class:"header-anchor",href:"#features","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),x,S,I,s("blockquote",null,[s("p",null,[l("Google 甚至还有一个专门的 repo "),t(a,{href:"https://github.com/google/gif-for-cli",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("gif-for-cli")]),_:1}),l("。")])]),s("h2",$,[l("思路 "),t(a,{class:"header-anchor",href:"#思路","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),B,s("p",null,[l("思路其实很简单，将图片读到 canvas 上，获取 "),t(a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/ImageData",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("ImageData")]),_:1}),l("，读取像素，通过 RGB 计算出灰度（亮度）。")]),s("blockquote",null,[s("p",null,[l("RGB 转灰度有一个专门的心理学公式（至于为什么就只能请您移步 "),t(a,{href:"https://en.wikipedia.org/wiki/Grayscale",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("Grayscale")]),_:1}),l(" 了）")])]),T,s("p",null,[l("代码写久了，会有一种想要将各功能都抽象的强迫症。专门处理色彩的类库也必然是有的，于是我改为使用 "),t(a,{href:"https://github.com/scttcper/tinycolor",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("tinycolor")]),_:1}),l(" 获取亮度。")]),V,J,G,N,s("blockquote",null,[s("p",null,[l("为什么呢，因为我最近打算整一个终端的文字冒险游戏，可能会成为 "),t(a,{href:"https://www.yunyoujun.cn/posts/make-an-avg-engine/",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("ADV 游戏引擎计划")]),_:1}),l(" 的一些试水，而在终端回车显示对话，选项，偶尔用字符串来展示图片应该也会是比较酷的事情，当然这就是他话了。")])]),s("p",null,[l("对于 Node 来说，并没有 "),q,l(" 的存在，当然也就没有 "),R,l(" 的 "),W,l("，但是我们可以通过 "),t(a,{href:"https://github.com/Automattic/node-canvas",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("node-canvas")]),_:1}),l(" 来实现。")]),s("p",null,[l("node-canvas 是使用 "),Y,l(" 原生编写，再打包交由 Node 调用，因此需要安装 "),t(a,{href:"https://www.npmjs.com/package/node-pre-gyp",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("node-pre-gyp")]),_:1}),l("，而这家伙可以说是「臭名昭著」了，国内的安装速度极为缓慢，还未必成功。")]),Z,s("p",null,[l("我最后找到的方案则是 "),t(a,{href:"https://github.com/oliver-moran/jimp",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("jimp")]),_:1}),l(" + "),t(a,{href:"https://github.com/node-gfx/image-data",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("@canvas/image-data")]),_:1}),l("。")]),M,O,s("blockquote",null,[s("p",null,[l("既然说到这了，就顺带再打个 nnrm 的广告。"),t(a,{href:"https://www.yunyoujun.cn/posts/nnrm-new-nrm/",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("nnrm - 一个极简的 npm/yarn registry 切换管理器")]),_:1})])]),z,L,U,H,P,s("h2",Q,[l("实现 "),t(a,{class:"header-anchor",href:"#实现","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),K,X,ss,ls,es,s("p",null,[l("那是因为我用了独家的极简主题 "),t(a,{href:"https://github.com/YunYouJun/element-theme-ink",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("element-theme-ink")]),_:1}),l("。")]),as,s("h2",ts,[l("后话 "),t(a,{class:"header-anchor",href:"#后话","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),ns,s("p",null,[l("相关性最大且 Star 最多的一个项目是 "),t(a,{href:"https://github.com/EnotionZ/jscii/issues/9",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("jscii")]),_:1}),l("。")]),s("blockquote",null,[s("p",null,[l("早在三年前我提了一个 Issue: "),t(a,{href:"https://github.com/EnotionZ/jscii/issues/9",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("Suggestion: How about packaging it into a library？")]),_:1})])]),os,rs,cs,ps,is,us,ms,s("p",null,[l("只是当我在 VSCode 里勤勤恳恳时，几小时前我尝试安装的 "),t(a,{href:"https://github.com/SaekiRaku/vscode-rainbow-fart",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("VSCode 彩虹屁插件")]),_:1}),l(" 突然蹦出了一句话，「你这么喜欢写代码，一定没有女朋友吧」。")]),hs,ds,ys,gs]),"main-header":e(()=>[o(n.$slots,"main-header")]),"main-header-after":e(()=>[o(n.$slots,"main-header-after")]),"main-nav":e(()=>[o(n.$slots,"main-nav")]),"main-content":e(()=>[o(n.$slots,"main-content")]),"main-content-after":e(()=>[o(n.$slots,"main-content-after")]),"main-nav-before":e(()=>[o(n.$slots,"main-nav-before")]),"main-nav-after":e(()=>[o(n.$slots,"main-nav-after")]),comment:e(()=>[o(n.$slots,"comment")]),footer:e(()=>[o(n.$slots,"footer")]),aside:e(()=>[o(n.$slots,"aside")]),"aside-custom":e(()=>[o(n.$slots,"aside-custom")]),default:e(()=>[o(n.$slots,"default")]),_:3},8,["frontmatter","data"])}const Es=u(D,[["render",Ds]]);export{js as __pageData,Es as default};
