import{_ as d}from"./ValaxyMain.vue_vue_type_style_index_0_lang-e606a42d.js";import{_ as u,c as h,w as r,o as f,e as p,a as t,b as e,d as l,r as s,f as m,p as _}from"./app-d3752e03.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-df408c57.js";import"./YunCard.vue_vue_type_style_index_0_lang-2ce7e4b2.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-814c5299.js";const O=JSON.parse('{"title":"使用 CCDIK 或 FABRIK 实现逆向动力学","description":"","frontmatter":{"title":"使用 CCDIK 或 FABRIK 实现逆向动力学","date":"2020-01-14T22:16:27.000Z","updated":"2020-01-14T22:16:27.000Z","tags":["学习","笔记","计算机图形学"],"categories":["云游的小笔记"]},"headers":[{"level":2,"title":"CCDIK","slug":"ccdik","link":"#ccdik","children":[{"level":3,"title":"CCD - p5.js","slug":"ccd-p5-js","link":"#ccd-p5-js","children":[]}]},{"level":2,"title":"FABRIK","slug":"fabrik","link":"#fabrik","children":[{"level":3,"title":"FABRIK - p5.js","slug":"fabrik-p5-js","link":"#fabrik-p5-js","children":[]},{"level":3,"title":"Cocos Creator","slug":"cocos-creator","link":"#cocos-creator","children":[]}]},{"level":2,"title":"两者对比","slug":"两者对比","link":"#两者对比","children":[]},{"level":2,"title":"其他参考链接","slug":"其他参考链接","link":"#其他参考链接","children":[]}],"relativePath":"pages/posts/methods-for-inverse-kinematics.md","path":"D:\\\\Learning\\\\myblog\\\\valaxy-blog\\\\imLKlauS.github.io-valaxy\\\\pages\\\\posts\\\\methods-for-inverse-kinematics.md","lastUpdated":null}'),i=JSON.parse('{"title":"使用 CCDIK 或 FABRIK 实现逆向动力学","description":"","frontmatter":{"title":"使用 CCDIK 或 FABRIK 实现逆向动力学","date":"2020-01-14T22:16:27.000Z","updated":"2020-01-14T22:16:27.000Z","tags":["学习","笔记","计算机图形学"],"categories":["云游的小笔记"]},"headers":[{"level":2,"title":"CCDIK","slug":"ccdik","link":"#ccdik","children":[{"level":3,"title":"CCD - p5.js","slug":"ccd-p5-js","link":"#ccd-p5-js","children":[]}]},{"level":2,"title":"FABRIK","slug":"fabrik","link":"#fabrik","children":[{"level":3,"title":"FABRIK - p5.js","slug":"fabrik-p5-js","link":"#fabrik-p5-js","children":[]},{"level":3,"title":"Cocos Creator","slug":"cocos-creator","link":"#cocos-creator","children":[]}]},{"level":2,"title":"两者对比","slug":"两者对比","link":"#两者对比","children":[]},{"level":2,"title":"其他参考链接","slug":"其他参考链接","link":"#其他参考链接","children":[]}],"relativePath":"pages/posts/methods-for-inverse-kinematics.md","path":"D:\\\\Learning\\\\myblog\\\\valaxy-blog\\\\imLKlauS.github.io-valaxy\\\\pages\\\\posts\\\\methods-for-inverse-kinematics.md","lastUpdated":null}'),g={name:"pages/posts/methods-for-inverse-kinematics.md",data(){return{data:i,frontmatter:i.frontmatter}},setup(){_("pageData",i)}},k=t("p",null,"动力学主要分为正向动力学（FK）和反向动力学（IK）。 正向动力学实现起来十分简单，了解点基本原理，或者网上一搜，都能写出来。",-1),b=t("p",null,"反向动力学中比较流行的方法则是：",-1),C=t("li",null,"CCDIK: 循环坐标下降逆向动力学（Cyclic Coordinate Descent IK）",-1),v=t("p",null,"还有几何分析与雅可比矩阵的方法，计算起来比较复杂，用的不是太多。",-1),K=t("p",null,[e("维基百科和一些论文、博客也讲得很清楚了。 "),t("s",null,"（摔，那你水这篇文章干什么？）"),e(" 为了大家更方便地从代码层级来理解，这篇文章最主要的作用大概就是提供 Demo 了。")],-1),I=t("p",null,"下面主要分为 CCDIK 和 FABRIK 两种方法来说。",-1),j={id:"ccdik",tabindex:"-1"},A={id:"ccd-p5-js",tabindex:"-1"},B={id:"fabrik",tabindex:"-1"},F={id:"fabrik-p5-js",tabindex:"-1"},D={id:"cocos-creator",tabindex:"-1"},w=t("p",null,"新年 🧨 版（小 bug 之后修）",-1),J=t("p",null,[t("img",{src:"https://r2.yunyoujun.cn/images/cocos-creator-ik.jpg",alt:"cocos-creator-ik"})],-1),R={id:"两者对比",tabindex:"-1"},Y=t("p",null,"CCDIK 实现较为简单，FABRIK 则相比 CCDIK 效率更高，但与 FABRIK 不同，CCDIK 提供了定义角约束的功能，需要在解算中限制任意骨骼的旋转时较为实用。",-1),$={id:"其他参考链接",tabindex:"-1"},S=t("hr",null,null,-1),E=t("p",null,"To Be Continued.",-1);function y(a,T,N,x,o,P){const n=m,c=d;return f(),h(c,{frontmatter:o.frontmatter,data:o.data},{"main-content-md":r(()=>[p(" more "),k,b,t("ul",null,[C,t("li",null,[e("FABRIK: 前后延伸逆向动力学（"),l(n,{href:"https://www.sciencedirect.com/science/article/pii/S1524070311000178",target:"_blank",rel:"noreferrer"},{default:r(()=>[e("Forward And Backward Reaching Inverse Kinematics")]),_:1}),e("）")])]),v,t("ul",null,[t("li",null,[l(n,{href:"https://en.wikipedia.org/wiki/Inverse_kinematics",target:"_blank",rel:"noreferrer"},{default:r(()=>[e("Inverse kinematics")]),_:1})]),t("li",null,[l(n,{href:"http://www.cs.cmu.edu/~15464-s13/lectures/lecture6/jlander_gamedev_nov98.pdf",target:"_blank",rel:"noreferrer"},{default:r(()=>[e("Making Kine More Flexible")]),_:1})]),t("li",null,[l(n,{href:"https://blog.csdn.net/noahzuo/article/details/53908141",target:"_blank",rel:"noreferrer"},{default:r(()=>[e("角色动画研究 —— IK 的三种结算方法")]),_:1})])]),K,I,t("h2",j,[e("CCDIK "),l(n,{class:"header-anchor",href:"#ccdik","aria-hidden":"true"},{default:r(()=>[e("#")]),_:1})]),t("ul",null,[t("li",null,[l(n,{href:"https://blog.csdn.net/noahzuo/article/details/53908141",target:"_blank",rel:"noreferrer"},{default:r(()=>[e("角色动画研究 —— IK 的三种结算方法")]),_:1})]),t("li",null,[l(n,{href:"http://www.ryanjuckett.com/programming/cyclic-coordinate-descent-in-2d/",target:"_blank",rel:"noreferrer"},{default:r(()=>[e("Cyclic Coordinate Descent in 2D")]),_:1})])]),t("h3",A,[e("CCD - "),l(n,{href:"https://p5js.org/zh-Hans/",target:"_blank",rel:"noreferrer"},{default:r(()=>[e("p5.js")]),_:1}),e(),l(n,{class:"header-anchor",href:"#ccd-p5-js","aria-hidden":"true"},{default:r(()=>[e("#")]),_:1})]),t("p",null,[e("Fullscreen: "),l(n,{href:"https://editor.p5js.org/YunYouJun/full/kJJqXPATQ",target:"_blank",rel:"noreferrer"},{default:r(()=>[e("https://editor.p5js.org/YunYouJun/full/kJJqXPATQ")]),_:1}),e(" Editor: "),l(n,{href:"https://editor.p5js.org/YunYouJun/sketches/kJJqXPATQ",target:"_blank",rel:"noreferrer"},{default:r(()=>[e("https://editor.p5js.org/YunYouJun/sketches/kJJqXPATQ")]),_:1})]),t("blockquote",null,[t("p",null,[e("代码参考自："),l(n,{href:"https://www.davepagurek.com/blog/inverse-kinematics/",target:"_blank",rel:"noreferrer"},{default:r(()=>[e("Simple Inverse Kinematics - Dave Pagurek")]),_:1})])]),t("h2",B,[e("FABRIK "),l(n,{class:"header-anchor",href:"#fabrik","aria-hidden":"true"},{default:r(()=>[e("#")]),_:1})]),t("p",null,[e("FABRIK 是一种"),l(n,{href:"https://baike.baidu.com/item/%E5%90%AF%E5%8F%91%E5%BC%8F%E7%AE%97%E6%B3%95/938987",target:"_blank",rel:"noreferrer"},{default:r(()=>[e("启发式算法")]),_:1}),e("。实现起来较为简单，计算又少又快。")]),t("p",null,[e("原文的算法出自这篇论文 "),l(n,{href:"https://www.sciencedirect.com/science/article/pii/S1524070311000178",target:"_blank",rel:"noreferrer"},{default:r(()=>[e("FABRIK: A fast, iterative solver for the Inverse Kinematics problem")]),_:1})]),t("p",null,[e("算法的大致描述看"),l(n,{href:"https://blog.csdn.net/noahzuo/article/details/80188366",target:"_blank",rel:"noreferrer"},{default:r(()=>[e("这里")]),_:1}),e("也可以理解，就不再多述。")]),t("h3",F,[e("FABRIK - "),l(n,{href:"https://p5js.org/zh-Hans/",target:"_blank",rel:"noreferrer"},{default:r(()=>[e("p5.js")]),_:1}),e(),l(n,{class:"header-anchor",href:"#fabrik-p5-js","aria-hidden":"true"},{default:r(()=>[e("#")]),_:1})]),t("p",null,[e("Fullscreen: "),l(n,{href:"https://editor.p5js.org/YunYouJun/embed/bS8jB3EsC",target:"_blank",rel:"noreferrer"},{default:r(()=>[e("https://editor.p5js.org/YunYouJun/embed/bS8jB3EsC")]),_:1}),e(" Editor: "),l(n,{href:"https://editor.p5js.org/YunYouJun/sketches/bS8jB3EsC",target:"_blank",rel:"noreferrer"},{default:r(()=>[e("https://editor.p5js.org/YunYouJun/sketches/bS8jB3EsC")]),_:1})]),t("blockquote",null,[t("p",null,[e("代码参考自："),l(n,{href:"https://thecodingtrain.com/CodingChallenges/064.3-inverse-kinematics-fixed-point",target:"_blank",rel:"noreferrer"},{default:r(()=>[e("Inverse Kinematics - Fixed Point - Coding Challenge #64.3 · The Coding Train")]),_:1})])]),t("h3",D,[e("Cocos Creator "),l(n,{class:"header-anchor",href:"#cocos-creator","aria-hidden":"true"},{default:r(()=>[e("#")]),_:1})]),w,J,t("p",null,[e("GitHub: "),l(n,{href:"https://github.com/YunYouJun/cocos-creator-ik/",target:"_blank",rel:"noreferrer"},{default:r(()=>[e("https://github.com/YunYouJun/cocos-creator-ik/")]),_:1})]),t("h2",R,[e("两者对比 "),l(n,{class:"header-anchor",href:"#两者对比","aria-hidden":"true"},{default:r(()=>[e("#")]),_:1})]),Y,t("h2",$,[e("其他参考链接 "),l(n,{class:"header-anchor",href:"#其他参考链接","aria-hidden":"true"},{default:r(()=>[e("#")]),_:1})]),t("ul",null,[t("li",null,[l(n,{href:"https://docs.unrealengine.com/4.27/zh-CN/AnimatingObjects/SkeletalMeshAnimation/NodeReference/SkeletalControls/CCDIK/",target:"_blank",rel:"noreferrer"},{default:r(()=>[e("CCDIK | Unreal Engine")]),_:1})]),t("li",null,[l(n,{href:"https://docs.unrealengine.com/4.27/zh-CN/AnimatingObjects/SkeletalMeshAnimation/NodeReference/Fabrik",target:"_blank",rel:"noreferrer"},{default:r(()=>[e("FABRIK | Unreal Engine")]),_:1})])]),S,E]),"main-header":r(()=>[s(a.$slots,"main-header")]),"main-header-after":r(()=>[s(a.$slots,"main-header-after")]),"main-nav":r(()=>[s(a.$slots,"main-nav")]),"main-content":r(()=>[s(a.$slots,"main-content")]),"main-content-after":r(()=>[s(a.$slots,"main-content-after")]),"main-nav-before":r(()=>[s(a.$slots,"main-nav-before")]),"main-nav-after":r(()=>[s(a.$slots,"main-nav-after")]),comment:r(()=>[s(a.$slots,"comment")]),footer:r(()=>[s(a.$slots,"footer")]),aside:r(()=>[s(a.$slots,"aside")]),"aside-custom":r(()=>[s(a.$slots,"aside-custom")]),default:r(()=>[s(a.$slots,"default")]),_:3},8,["frontmatter","data"])}const Q=u(g,[["render",y]]);export{O as __pageData,Q as default};
