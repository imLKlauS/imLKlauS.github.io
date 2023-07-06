import{_ as h}from"./ValaxyMain.vue_vue_type_style_index_0_lang-98a653d4.js";import{_ as u,c as _,w as l,o as p,a as t,b as e,d as r,f as c,r as o,e as f,p as g}from"./app-4d84bb2b.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-4fd9c433.js";import"./YunCard.vue_vue_type_style_index_0_lang-23c437b5.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-babf2fe2.js";const Ee=JSON.parse('{"title":"ADV 游戏引擎计划","description":"","frontmatter":{"title":"ADV 游戏引擎计划","date":"2020-09-28T19:33:17.000Z","updated":"2020-09-28T19:33:17.000Z","tags":["前端","Vue","ADV","AVG"],"categories":["云游的小项目"]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[{"level":3,"title":"ADV 是个啥？","slug":"adv-是个啥？","link":"#adv-是个啥？","children":[]},{"level":3,"title":"为啥要做 ADV 游戏引擎？","slug":"为啥要做-adv-游戏引擎？","link":"#为啥要做-adv-游戏引擎？","children":[]},{"level":3,"title":"怎么做？","slug":"怎么做？","link":"#怎么做？","children":[]}]}],"relativePath":"pages/posts/make-an-avg-engine.md","path":"D:\\\\Learning\\\\myblog\\\\valaxy-blog\\\\imklaus.github.io-main\\\\pages\\\\posts\\\\make-an-avg-engine.md","lastUpdated":null}'),s=JSON.parse('{"title":"ADV 游戏引擎计划","description":"","frontmatter":{"title":"ADV 游戏引擎计划","date":"2020-09-28T19:33:17.000Z","updated":"2020-09-28T19:33:17.000Z","tags":["前端","Vue","ADV","AVG"],"categories":["云游的小项目"]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[{"level":3,"title":"ADV 是个啥？","slug":"adv-是个啥？","link":"#adv-是个啥？","children":[]},{"level":3,"title":"为啥要做 ADV 游戏引擎？","slug":"为啥要做-adv-游戏引擎？","link":"#为啥要做-adv-游戏引擎？","children":[]},{"level":3,"title":"怎么做？","slug":"怎么做？","link":"#怎么做？","children":[]}]}],"relativePath":"pages/posts/make-an-avg-engine.md","path":"D:\\\\Learning\\\\myblog\\\\valaxy-blog\\\\imklaus.github.io-main\\\\pages\\\\posts\\\\make-an-avg-engine.md","lastUpdated":null}'),m={name:"pages/posts/make-an-avg-engine.md",data(){return{data:s,frontmatter:s.frontmatter}},setup(){g("pageData",s)}},b=t("p",null,"ADV.JS 又一个遥遥无期的大坑。",-1),k={id:"前言",tabindex:"-1"},A=t("p",null,"按照惯例，开坑前先来三问。是什么？为什么？怎么做？",-1),V={id:"adv-是个啥？",tabindex:"-1"},v=t("p",null,"一般情况下，Galgame ∈ ADV = AVG。",-1),D={id:"为啥要做-adv-游戏引擎？",tabindex:"-1"},w={id:"调研",tabindex:"-1"},G=t("p",null,"ADV/AVG 的游戏引擎已经有很多，但都各有千秋。",-1),E=t("p",null,[t("strong",null,"以下是个人的调研（搜索）简要评估，仅为个人观点，欢迎指正。")],-1),C=t("p",null,"以上便是我目前大致了解到的 ADV/AVG 相关的游戏引擎。",-1),j=t("p",null,"那么已经有这么多的引擎，为什么还要执意造轮子呢？",-1),y=t("p",null,[e("因为自己日常开发使用 Mac，所以必须得支持跨平台，基本可以排除掉大半，去掉过于古老的，去掉客户端开发的，再排除掉鸽子和变态（"),t("s",null,"开玩笑，当然这个不是主要原因，难道是次要的？？？"),e("）。")],-1),N=t("p",null,"我想要制作一个更偏向于前端、轻量可扩展的 AVG 游戏引擎（框架？），尽可能使用 HTML/CSS 本身属性效果替代 Canvas 绘制。（当然，后续 Canvas 可以用于一些复杂的 3D 场景、模型之类的展示。）",-1),B=t("p",null,"目前尚未发现同类型项目，其次，即便功能相似，对于不同语言的偏好者或不同的应用场景也有其存在的意义，就不算重复造轮子，有了 Spring Boot，同样也有 Express/Koa/Nest.js、Laravel、Django 的诞生。",-1),S=t("p",null,[e("（"),t("s",null,"至于跑在浏览器，又有什么比得过 JavaScript 的天然优势呢？"),e("）")],-1),L=t("blockquote",null,[t("p",null,"近年来，也有云游戏的概念诞生，但此多基于视频流。对于 AVG/ADV 类型游戏来说，显然是不划算的，我们完全可以将压力不大的运算放到用户浏览器，将需要额外加载的图片/音频等资源放至云端的 CDN，只预加载临近的资源。既降低了带宽压力也不用担心操作的延迟。")],-1),$={id:"技术之外的原因",tabindex:"-1"},T=t("p",null,"高中时，朋友向我推荐了「Fate/stay night」，并借我 U 盘拷贝。但家里的古董电脑不知为何总是安装失败，好不容易解决了玩了没多久便报了各种兼容错误。所以至今我也未曾进一步了解 Fate 系列的作品。",-1),q=t("p",null,"第一次看完「CLANNAD」的时候，我在宿舍感动地泪流满面，以至于怅然若失。便想要找来游戏以备日后重温，游戏大小 2/3G，加之宿舍带宽才 2M（是的，你没看错，是个位数！很老的线路，后来才有新的线路铺来），再者电脑系统那时都已经 Win8 及以上了。",-1),z=t("p",null,"而 CLANNAD 的平台则分别是 Windows 98/Me/2000/XP(初回限定版/通常版)，Windows 2000/XP/Vista/7(完全语音版/全年龄对象版)。期间自又有一番曲折。",-1),M=t("p",null,"过了感伤的时段，也很难再在宿舍中静下心来回顾，到了排队等各类需要消磨时间的情况时，又会想着要是能在手机上游玩就好了。（看官您可能要说了，装虚拟机啊等等的方式应有尽有。但因为贫穷，手机容量本就捉襟见肘，套壳的各类体验也未必佳。）所以除此之外，从根本上有一种更为便捷的方式该有多好。",-1),R=t("p",null,"我始终觉得 AVG/ADV 一类对性能不敏感（但占用空间较大、CG/语音动辄数 G）的文字冒险游戏，将其放在云端是最好的选择。用户随时随地可以跨平台游玩，而无需过高性能的机器、充足的本地空间。而已有的此类型游戏的大部分演出效果，在浏览器端也基本可以实现。（当然，这也可能与近年来前端技术大爆炸有关。）",-1),J=t("p",null,"但我一直很奇怪为何很少此类型游戏的诞生。即便有，也是少数兴趣之作的 Demo。",-1),P=t("p",null,[e("当然，我能想到的有旧时代浏览器性能特性不足、服务器成本高、网速慢、游戏资源无法加密等。不过放到现今，却可排除大半，Chrome 无须多言，游戏的静态资源无需频繁更改，商业级别的话 CDN 平均下来相对游戏售价来说成本并不高，"),t("s",null,"5G 时代"),e("网速还行，游戏资源本就有各类技巧提取，此外对于正版验证，反而线上账户更有利。")],-1),F=t("s",null,"的变态",-1),Y=t("p",null,"除此之外，我也未能在开源社区，找到类似定位与功能的 AVG/ADV 引擎。",-1),x=t("p",null,"回顾起来，自己写过不少玩具项目，也干过不少活，提过些无关紧要的 PR，混了些 Star。 但就像东一榔头，西一棒槌，没有一个持之以恒的施力点。",-1),I=t("p",null,"真让我拿出一个自鸣得意、有完善生态体系的大项目，我反倒无言以对。",-1),W=t("p",null,"社区中见到的大牛们也多是专注围绕一个点，展开自己的工作，并持之以恒。譬如 尤雨溪与 Vue.js、Mike Bostock 与 D3.js、mrdoob 与 Three.js……（你问我为啥提这三个？因为感觉好像刚好可以用到。）",-1),U=t("p",null,[e("而写 AVG/ADV 引擎的上限可以很高，可以研究的内容也很多。"),t("s",null,"我也有将自己无人问津的小说游戏化的打算。")],-1),K=t("p",null,"至此，我决定从零开始，遵循本心，面向未来，开始这一项目。",-1),O={id:"怎么做？",tabindex:"-1"},Z=t("p",null,"且慢，万事开头难，起名最优先。",-1),H=t("p",null,"为了凸显大气，并避免与 AVG.js 重名，我决定将其命名为 ADV.js。（不过似乎少了很多个性化的感觉，所以还不确定是否是最终的名字。有啥好的建议欢迎提出！）",-1),Q=t("blockquote",null,[t("p",null,"其次是因为「命运石之门」等一系列 5pb 作品，官方将之称为科学 ADV 系列，索性便也取此 ADV 之名。")],-1),X=t("p",null,"目前预定的技术栈是 TypeScript + Vue3。",-1),ee=t("p",null,[e("规范开发，上 TypeScript 已经无须异议。（虽然还是会有很多 "),t("code",null,"any"),e(" 的样子。）")],-1),te=t("p",null,[e("而 Vue3 正式版总算姗姗来迟，且本身便使用了 TypeScript 重写，对 TS 的支持也有了提升。（次要原因则是练习一下 Vue3 啦。"),t("s",null,"👴 学不动了"),e("）")],-1),le=t("blockquote",null,[t("p",null,"为什么不用 React？AVG.js 便是基于 React，翻新这件事应该原 🐦 本人来做，而我用 React 重写类似功能一来未必胜过原作，二来也未必有必要，三则设计理念与最终目的也不尽相同。此外个人 Vue 相比 React 要熟悉一些。并打算更面向未来。")],-1),ae=t("p",null,"本身想要在浏览器端实现各种效果，必然要使用许多新特性。（Chrome 天下第一，兼容 IE 是不可能的，这辈子不可能的。）",-1),re=t("p",null,"游戏内容无需也不应该考虑 SEO，本身内容演出也全部通过直接请求文本并实时解析。（面向未来，axios 都没有安装，直接用了 fetch，_(:з」∠)_ 虽然可能后续还是会用到）",-1),ne=t("p",null,"这样对于编剧来说，只要简单的更改文本，而无需重新构建。",-1),oe={id:"词法解析",tabindex:"-1"},se=t("p",null,"但是在此之前，我们应当有一个剧本文本解析器，用于解析按照一定格式编写的剧本。",-1),ie=t("p",null,"目前打算兼容 Markdown 语法，并采用 TS 编写，ES6 打包成 Browser/Node.js 库，可在浏览器端调用并展示实时解析的效果。",-1),de=t("p",null,"至于剩下的……，等我先写完当前的再说吧！",-1),he=t("p",null,"...",-1),ue={id:"人物立绘",tabindex:"-1"},_e=t("p",null,"...",-1),pe=t("p",null,"后续可能有（🐦）的其他内容，自定义配置文件（支持 JSON/YML ?）、多设备适配、支线选项控制、音乐系统（BGM 与配音）、摄像机系统（镜头）、立绘与 Live2D、front-matter 与更多兼容 Markdown 的剧本语法及自定义脚本、进度存储读取槽（本地 localStorage/ 网络 MongoDB）、场景路由、背景管理（融合 3D）、人物小传/关系、UI 主题、资源一键 CDN/预加载……",-1),ce=t("hr",null,null,-1),fe=t("p",null,"To Be Continued.",-1);function ge(n,me,be,ke,i,Ae){const a=f,d=h;return p(),_(d,{frontmatter:i.frontmatter,data:i.data},{"main-content-md":l(()=>[b,t("blockquote",null,[t("p",null,[e("GitHub: "),r(a,{href:"https://github.com/YunYouJun/advjs",target:"_blank",rel:"noreferrer"},{default:l(()=>[e("https://github.com/YunYouJun/advjs")]),_:1}),e(" Demo: "),r(a,{href:"https://advjs.elpsy.cn",target:"_blank",rel:"noreferrer"},{default:l(()=>[e("https://advjs.elpsy.cn")]),_:1})])]),t("h2",k,[e("前言 "),r(a,{class:"header-anchor",href:"#前言","aria-hidden":"true"},{default:l(()=>[e("#")]),_:1})]),A,c(" more "),t("h3",V,[e("ADV 是个啥？ "),r(a,{class:"header-anchor",href:"#adv-是个啥？","aria-hidden":"true"},{default:l(()=>[e("#")]),_:1})]),t("blockquote",null,[t("p",null,[e("冒险游戏（Adventure Game，缩写为 AVG 或 ADV）是电子游戏中的最早的类型之一。此类型游戏采取玩家输入或选择指令以改变行动的形式。强调故事线索的发掘及故事剧情，主要考验玩家的观察力和分析能力。该类游戏有时候很像角色扮演游戏，但不同的是，冒险游戏中玩家操控的游戏主角本身的等级、属性能力一般是固定不变并且不会影响游戏的进程。 通常 galgame 类型为 ADV 形式的，不是纯剧情+CG+选项的，而带一些其他方式操作，比如游戏里有卡牌对战或者战斗场面（例：恋姬无双）。 —— 摘自"),r(a,{href:"https://baike.baidu.com/item/ADV/5109709",target:"_blank",rel:"noreferrer"},{default:l(()=>[e("「百度百科 - ADV」")]),_:1})])]),t("p",null,[e("简而言之，平时我们常见的 "),r(a,{href:"https://baike.baidu.com/item/Galgame",target:"_blank",rel:"noreferrer"},{default:l(()=>[e("Galgame")]),_:1}),e(" / 视觉小说便是 ADV/AVG 的一种。")]),t("blockquote",null,[t("p",null,[e("Galgame（日文假名：ギャルゲーム，平文式罗马字：Gyaru Gēmu，又称美少女游戏）是一种玩家可以与动画美少女进行互动的电子游戏，其受众主体曾经是日本男性，但现在的全年龄 GalGame 剧情面向受众已经不分男女。Galgame 的游戏类型大多数是 VNG（视觉小说）但是也有交互式的 Galgame。 —— 摘自"),r(a,{href:"https://baike.baidu.com/item/Galgame",target:"_blank",rel:"noreferrer"},{default:l(()=>[e("「百度百科 - Galgame」")]),_:1})])]),v,t("blockquote",null,[t("p",null,[r(a,{href:"https://www.zhihu.com/question/65520382",target:"_blank",rel:"noreferrer"},{default:l(()=>[e("ADV、AVG 和 Galgame 有什么区别？")]),_:1})])]),t("h3",D,[e("为啥要做 ADV 游戏引擎？ "),r(a,{class:"header-anchor",href:"#为啥要做-adv-游戏引擎？","aria-hidden":"true"},{default:l(()=>[e("#")]),_:1})]),t("h4",w,[e("调研 "),r(a,{class:"header-anchor",href:"#调研","aria-hidden":"true"},{default:l(()=>[e("#")]),_:1})]),G,t("blockquote",null,[t("p",null,[r(a,{href:"https://zh.wikipedia.org/wiki/%E8%A7%86%E8%A7%89%E5%B0%8F%E8%AF%B4%E5%BC%95%E6%93%8E%E5%88%97%E8%A1%A8",target:"_blank",rel:"noreferrer"},{default:l(()=>[e("视觉小说引擎列表 - 维基百科")]),_:1})])]),E,t("ul",null,[t("li",null,[r(a,{href:"https://zh.wikipedia.org/wiki/%E5%90%89%E9%87%8C%E5%90%89%E9%87%8C",target:"_blank",rel:"noreferrer"},{default:l(()=>[e("吉里吉里")]),_:1}),e(": C++，老牌 AVG 游戏引擎，著名的 "),r(a,{href:"https://zh.wikipedia.org/zh/Fate/stay_night",target:"_blank",rel:"noreferrer"},{default:l(()=>[e("Fate/stay night")]),_:1}),e(" 便是用其制作。但是上一个稳定版本已经是十年前，很久没有更新了。")]),t("li",null,[r(a,{href:"http://www.renpy.org/",target:"_blank",rel:"noreferrer"},{default:l(()=>[e("Ren'Py")]),_:1}),e(": Python，代表作「"),r(a,{href:"https://zh.wikipedia.org/zh-hans/%E5%BF%83%E8%B7%B3%E6%96%87%E5%AD%B8%E9%83%A8%EF%BC%81",target:"_blank",rel:"noreferrer"},{default:l(()=>[e("心跳文学部")]),_:1}),e("」("),t("s",null,[e("我老婆的 "),r(a,{href:"https://twitter.com/lilmonix3",target:"_blank",rel:"noreferrer"},{default:l(()=>[e("Twitter")]),_:1})]),e(")，开源万岁，并且直到现在更新也很活跃，如果喜欢 Python，是个不错的选择。不过需要预编译，剧本与程序未分离。（定位于浏览器端的话，JS 更有优势。）")]),t("li",null,[r(a,{href:"http://www.nscripter.com/",target:"_blank",rel:"noreferrer"},{default:l(()=>[e("NScripter")]),_:1}),e(": C++，非商业免费，Windows 平台，代表作「"),r(a,{href:"https://zh.wikipedia.org/wiki/%E6%9A%AE%E8%9F%AC%E6%82%B2%E9%B3%B4%E6%99%82",target:"_blank",rel:"noreferrer"},{default:l(()=>[e("寒蝉鸣泣之时")]),_:1}),e("」，上一个稳定版本发布于 2015 年。")]),t("li",null,[r(a,{href:"https://zh.wikipedia.org/wiki/Visual_Art%27s",target:"_blank",rel:"noreferrer"},{default:l(()=>[e("AVG32、RealLive、SiglusEngine")]),_:1}),e("："),r(a,{href:"http://visual-arts.jp/",target:"_blank",rel:"noreferrer"},{default:l(()=>[e("Visual Art's")]),_:1}),e(" 公司开发，Key 社游戏「"),r(a,{href:"https://zh.wikipedia.org/zh/CLANNAD",target:"_blank",rel:"noreferrer"},{default:l(()=>[e("CLANNAD")]),_:1}),e("」等均用此开发，但很明显这种商业级咱接触不到。")]),t("li",null,[r(a,{href:"https://bke.bakery.moe/",target:"_blank",rel:"noreferrer"},{default:l(()=>[e("BKEngine")]),_:1}),e(": C++，面包工坊，非商业免费、跨平台，但是制作工具不跨平台（只有 Windows）。")]),t("li",null,[r(a,{href:"https://avgjs.org/",target:"_blank",rel:"noreferrer"},{default:l(()=>[e("AVG.js")]),_:1}),e("：JavaScript，开源，基于 Pixi.js 与 React，Web 端运行。但是作者 "),r(a,{href:"https://github.com/Icemic",target:"_blank",rel:"noreferrer"},{default:l(()=>[e("Icemic")]),_:1}),e(" 是个大 🐦，所以已经几年没有更新了。（不过作者也在 BKEngine 的面包工坊。）")]),t("li",null,[r(a,{href:"https://github.com/RimoChan/Librian",target:"_blank",rel:"noreferrer"},{default:l(()=>[e("Librian")]),_:1}),e(": Python，开源，跨平台，Galgame | Visual Novel 引擎，"),r(a,{href:"https://github.com/RimoChan",target:"_blank",rel:"noreferrer"},{default:l(()=>[e("作者")]),_:1}),e(" 还有在做 "),r(a,{href:"https://space.bilibili.com/546884063/",target:"_blank",rel:"noreferrer"},{default:l(()=>[e("Vtuber")]),_:1}),e("，可惜是个变态。")]),t("li",null,[r(a,{href:"https://www.66rpg.com/redirect/doDownload",target:"_blank",rel:"noreferrer"},{default:l(()=>[e("橙光制作工具")]),_:1}),e("：免费易操作，只有 Windows 平台，但是因为 "),r(a,{href:"https://www.zhihu.com/question/50741861",target:"_blank",rel:"noreferrer"},{default:l(()=>[e("如何看待橙光游戏签约合同中版权永久属于橙光，而作者仅保留署名权？")]),_:1}),e("，好感直线下降。")])]),C,j,y,N,B,S,L,t("p",null,[e("浏览器自带的控制台、可选中的元素、可扩展的前端 UI 与背靠 Node.js npm 庞大生态的程序也很适合做 "),r(a,{href:"https://en.wikipedia.org/wiki/Metagaming",target:"_blank",rel:"noreferrer"},{default:l(()=>[e("Meta Game - 元游戏")]),_:1}),e("。")]),t("blockquote",null,[t("p",null,[r(a,{href:"https://www.zhihu.com/question/23820876",target:"_blank",rel:"noreferrer"},{default:l(()=>[e("metagame 是什么？ - 知乎")]),_:1})])]),t("h4",$,[e("技术之外的原因 "),r(a,{class:"header-anchor",href:"#技术之外的原因","aria-hidden":"true"},{default:l(()=>[e("#")]),_:1})]),T,q,z,M,R,J,P,t("p",null,[e("我很早前便有此想法，几年前发现了 "),r(a,{href:"https://avgjs.org/",target:"_blank",rel:"noreferrer"},{default:l(()=>[e("AVG.js")]),_:1}),e(" ，认识了 "),r(a,{href:"https://github.com/Icemic",target:"_blank",rel:"noreferrer"},{default:l(()=>[e("Icemic")]),_:1}),e("，但没想他一鸽便鸽至如今。后来又发现了 "),r(a,{href:"https://github.com/RimoChan/Librian",target:"_blank",rel:"noreferrer"},{default:l(()=>[e("Librian")]),_:1}),e("，认识了到了 "),r(a,{href:"https://github.com/RimoChan",target:"_blank",rel:"noreferrer"},{default:l(()=>[e("RimoChan")]),_:1}),e(),F,e("，但终究与我期望的想法与设计偏好有所冲突。")]),Y,x,t("blockquote",null,[t("p",null,[e("虽然此前还整过个"),r(a,{href:"https://github.com/YunYouJun/el-bot",target:"_blank",rel:"noreferrer"},{default:l(()=>[e("机器人项目")]),_:1}),e("，但因为依附 QQ 与腾讯的垄断策略而行走在灰色边缘，也亲眼见证了晨风作者被抓、酷 Q 关闭等风声鹤唳。我仍旧会坚持维护（毕竟自己有在用），但也很难再投入过多精力于其上。")])]),I,W,U,K,t("h3",O,[e("怎么做？ "),r(a,{class:"header-anchor",href:"#怎么做？","aria-hidden":"true"},{default:l(()=>[e("#")]),_:1})]),Z,H,Q,X,ee,te,le,ae,t("p",null,[e("为了面向未来，也顺带直接上 "),r(a,{href:"https://github.com/vitejs/vite",target:"_blank",rel:"noreferrer"},{default:l(()=>[e("vite")]),_:1}),e("。踩了不少坑（等咱这基本完善了，它也差不多稳定了吧），但一个字，快！")]),re,ne,t("h4",oe,[e("词法解析 "),r(a,{class:"header-anchor",href:"#词法解析","aria-hidden":"true"},{default:l(()=>[e("#")]),_:1})]),se,ie,de,t("ul",null,[t("li",null,[e("GitHub: "),r(a,{href:"https://github.com/yunyoujun/advjs/blob/main/packages/parser/",target:"_blank",rel:"noreferrer"},{default:l(()=>[e("@advjs/parser")]),_:1})]),t("li",null,[e("Demo: "),r(a,{href:"https://advjs.elpsy.cn/parser/",target:"_blank",rel:"noreferrer"},{default:l(()=>[e("Demo for @advjs/parser")]),_:1})])]),he,t("h4",ue,[e("人物立绘 "),r(a,{class:"header-anchor",href:"#人物立绘","aria-hidden":"true"},{default:l(()=>[e("#")]),_:1})]),_e,pe,t("p",null,[e("其他 "),r(a,{href:"https://github.com/YunYouJun/advjs/projects/1",target:"_blank",rel:"noreferrer"},{default:l(()=>[e("Todo")]),_:1}),e("。")]),ce,fe]),"main-header":l(()=>[o(n.$slots,"main-header")]),"main-header-after":l(()=>[o(n.$slots,"main-header-after")]),"main-nav":l(()=>[o(n.$slots,"main-nav")]),"main-content":l(()=>[o(n.$slots,"main-content")]),"main-content-after":l(()=>[o(n.$slots,"main-content-after")]),"main-nav-before":l(()=>[o(n.$slots,"main-nav-before")]),"main-nav-after":l(()=>[o(n.$slots,"main-nav-after")]),comment:l(()=>[o(n.$slots,"comment")]),footer:l(()=>[o(n.$slots,"footer")]),aside:l(()=>[o(n.$slots,"aside")]),"aside-custom":l(()=>[o(n.$slots,"aside-custom")]),default:l(()=>[o(n.$slots,"default")]),_:3},8,["frontmatter","data"])}const Ce=u(m,[["render",ge]]);export{Ee as __pageData,Ce as default};
