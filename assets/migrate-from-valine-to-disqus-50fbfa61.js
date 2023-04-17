import{_ as d}from"./ValaxyMain.vue_vue_type_style_index_0_lang-a2062fb2.js";import{_ as c,c as p,w as s,o as h,a as e,b as t,d as n,f as m,r as i,e as _,p as f}from"./app-85f8ae31.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-7d383f51.js";import"./YunCard.vue_vue_type_style_index_0_lang-b90e638b.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-9ca27c39.js";const ne=JSON.parse('{"title":"如何从 Valine 迁移至 Disqus","description":"","frontmatter":{"title":"如何从 Valine 迁移至 Disqus","date":"2020-10-03T15:09:13.000Z","updated":"2020-10-06T15:09:13.000Z","tags":["Disqus","Valine"],"categories":["云游的小笔记"]},"headers":[{"level":2,"title":"开整","slug":"开整","link":"#开整","children":[{"level":3,"title":"导出 Valine 数据","slug":"导出-valine-数据","link":"#导出-valine-数据","children":[]},{"level":3,"title":"转换为 Disqus 的数据格式","slug":"转换为-disqus-的数据格式","link":"#转换为-disqus-的数据格式","children":[]},{"level":3,"title":"导入 Disqus","slug":"导入-disqus","link":"#导入-disqus","children":[]}]}],"relativePath":"pages/posts/migrate-from-valine-to-disqus.md","path":"D:\\\\Learning\\\\myblog\\\\valaxy-blog\\\\imLKlauS.github.io-valaxy\\\\pages\\\\posts\\\\migrate-from-valine-to-disqus.md","lastUpdated":null}'),o=JSON.parse('{"title":"如何从 Valine 迁移至 Disqus","description":"","frontmatter":{"title":"如何从 Valine 迁移至 Disqus","date":"2020-10-03T15:09:13.000Z","updated":"2020-10-06T15:09:13.000Z","tags":["Disqus","Valine"],"categories":["云游的小笔记"]},"headers":[{"level":2,"title":"开整","slug":"开整","link":"#开整","children":[{"level":3,"title":"导出 Valine 数据","slug":"导出-valine-数据","link":"#导出-valine-数据","children":[]},{"level":3,"title":"转换为 Disqus 的数据格式","slug":"转换为-disqus-的数据格式","link":"#转换为-disqus-的数据格式","children":[]},{"level":3,"title":"导入 Disqus","slug":"导入-disqus","link":"#导入-disqus","children":[]}]}],"relativePath":"pages/posts/migrate-from-valine-to-disqus.md","path":"D:\\\\Learning\\\\myblog\\\\valaxy-blog\\\\imLKlauS.github.io-valaxy\\\\pages\\\\posts\\\\migrate-from-valine-to-disqus.md","lastUpdated":null}'),g={name:"pages/posts/migrate-from-valine-to-disqus.md",data(){return{data:o,frontmatter:o.frontmatter}},setup(){f("pageData",o)}},q=e("p",null,"但是 Valine 本身加载速度确实很快，用着也挺好，且文章的访问量统计也依赖于此。又实在没有办法下定决心切换至 Disqus。",-1),v=e("blockquote",null,[e("p",null,[t("「任何可以用 JavaScript 编写的应用程序最终都将用 JavaScript 编写。」"),e("br"),t(" In 2007, Jeff Atwood made the quote that was popularly referred to as Atwood's Law: “Any application that can be written in JavaScript, will eventually be written in JavaScript.”")])],-1),b=e("p",null,"看到许多小伙伴们最终都选择了 Disqus。",-1),k=e("blockquote",null,[e("p",null,"任何带有评论系统的独立博客最终都将使用 Disqus 评论。 ——我瞎说的")],-1),D=e("p",null,"也许终有一天，我确实会彻底从 Valine 切换至 Disqus，那么过去大家留下的评论便就此抛弃吗？又着实有些不忍心。",-1),V=e("p",null,"若能将 Valine 中的评论导出并很方便地将其导入 Disqus，那么在决定切换至 Disqus 之前，我都可以放心地使用 Valine。",-1),y=e("p",null,[e("img",{src:"https://r2.yunyoujun.cn/images/make-one-for-me-too.jpg",alt:"给我也整一个！"})],-1),S={id:"开整",tabindex:"-1"},$={id:"导出-valine-数据",tabindex:"-1"},w=e("p",null,[e("img",{src:"https://i.loli.net/2020/10/03/Ac4nzjQbWJCTek5.jpg",alt:"其他猫能做得到吗？"})],-1),J=e("p",null,[t("选择 App，"),e("code",null,"yunyoujun.cn"),t("。")],-1),j=e("p",null,[t("因为我的评论总额目前是四百多条，选择 "),e("code",null,"GET /classes/{class}"),t("，简单配置下 "),e("code",null,"class"),t(" 名称，并放宽 "),e("code",null,"limit"),t("。")],-1),L=e("ul",null,[e("li",null,[t("class: "),e("code",null,"Comment")]),e("li",null,"limit: 500")],-1),N=e("p",null,[t("点击发送请求，获取相应的 JSON。（类似再导出一下 "),e("code",null,"Counter"),t("，因为 url 对应的标题信息存在了这里面。也可以不导出，标题就默认用链接。）")],-1),A=e("p",null,[t("还挺长，便顺带提一个大家可能已经知道也可能像过去的我一样还不知道的小技巧。（在要复制的内容开始点击一下，按住 "),e("kbd",null,"Shift"),t("，拖动滚动条到内容结尾，再在末尾点击，选中完成！）")],-1),T=e("p",null,[t("复制粘贴，存储为 JSON 文件（比如 "),e("code",null,"valine-comment.json"),t("），一气呵成。")],-1),C=e("blockquote",null,[e("p",null,"等等，你问我为什么不直接再写个脚本爬数据？……因为手动操作并不麻烦，脚本还要处理登录状态信息什么的，写这个有点得不偿失了。后面转换的部分倒是写了脚本。")],-1),O={id:"转换为-disqus-的数据格式",tabindex:"-1"},x=e("p",null,"源数据拿到了，Disqus 这样的大厂商必然是支持导入评论的，那么我们再想办法将其转化为 Disqus 可导入的格式。",-1),E=e("p",null,"Disqus 的格式本质是一个 XML 文件，我们只要将原先的 JSON 数据按照规定的格式通过脚本写成 XML 文件就可以了。",-1),R=e("p",null,"好的，禅师，我悟了。那么脚本哪里找呢？",-1),I=e("p",null,[e("img",{src:"https://i.loli.net/2020/10/03/IiOc7BsHzCULVNR.jpg",alt:"我自己去整一个吧！"})],-1),M=e("p",null,[t("……当然是自己动手，丰衣足食。 当然秉持开源理念，我自然会将我写好的脚本放出来，大家就不用重复劳作了。 "),e("s",null,"如果有帮到你，就不要脸地求个 Star 吧！")],-1),Y=e("p",null,"使用方法就请直接看 README 吧。（记得改一下站点 URL，默认是我的……）",-1),B={id:"导入-disqus",tabindex:"-1"},G=e("blockquote",null,[e("p",null,"对了，Disqus 官方提示最长可能需要 24 h 才能完成。（我也不知道为什么要这么久，目前还挺快的……）")],-1),U=e("p",null,[e("img",{src:"https://i.loli.net/2020/10/03/p8QgJs4TtEhOzX3.jpg",alt:"让我先整整你"})],-1),X=e("p",null,[e("img",{src:"https://i.loli.net/2020/10/06/14Ih5AyknRNxajl.png",alt:"2000 YEARS LATER"})],-1),Z=e("hr",null,null,-1),z=e("p",null,"整完了！（切换下面的评论系统看看效果吧）",-1);function P(a,F,H,K,r,Q){const l=_,u=d;return h(),p(u,{frontmatter:r.frontmatter,data:r.data},{"main-content-md":s(()=>[e("p",null,[t("此前我在 "),n(l,{href:"https://www.yunyoujun.cn/posts/third-party-comment-system/",target:"_blank",rel:"noreferrer"},{default:s(()=>[t("第三方评论系统之我见")]),_:1}),t(" 中简要对比了使用过的一些评论系统，但仍旧没有得出一个尽善尽美的方案。")]),e("p",null,[t("我很长一段时间评论系统都是使用的 Valine，但因为后来博客第一次收到了一些"),n(l,{href:"https://twitter.com/YunYouJun/status/1310547458997415936",target:"_blank",rel:"noreferrer"},{default:s(()=>[t("不友好的评论")]),_:1}),t("，以至于我有一瞬间地冲动想要从 Valine 彻底迁移到 Disqus。")]),q,v,b,k,D,V,y,m(" more "),e("h2",S,[t("开整 "),n(l,{class:"header-anchor",href:"#开整","aria-hidden":"true"},{default:s(()=>[t("#")]),_:1})]),e("h3",$,[t("导出 Valine 数据 "),n(l,{class:"header-anchor",href:"#导出-valine-数据","aria-hidden":"true"},{default:s(()=>[t("#")]),_:1})]),e("p",null,[t("进入 "),n(l,{href:"https://leancloud.cn/dashboard/apionline/index.html",target:"_blank",rel:"noreferrer"},{default:s(()=>[t("LeanCloud API 在线测试工具")]),_:1}),t("（为什么选择这个？因为丫后台导出竟然是限制为每天中午 12 点前才可以导出。）")]),w,J,j,L,N,A,T,C,e("h3",O,[t("转换为 Disqus 的数据格式 "),n(l,{class:"header-anchor",href:"#转换为-disqus-的数据格式","aria-hidden":"true"},{default:s(()=>[t("#")]),_:1})]),x,e("blockquote",null,[e("p",null,[n(l,{href:"https://help.disqus.com/en/articles/1717222-custom-xml-import-format",target:"_blank",rel:"noreferrer"},{default:s(()=>[t("Custom XML Import Format | Disqus")]),_:1})])]),E,R,I,M,e("blockquote",null,[e("p",null,[t("GitHub: "),n(l,{href:"https://github.com/YunYouJun/valine-to-disqus",target:"_blank",rel:"noreferrer"},{default:s(()=>[t("valine-to-disqus")]),_:1})])]),Y,e("blockquote",null,[e("p",null,[t("用 "),n(l,{href:"https://nodejs.org/",target:"_blank",rel:"noreferrer"},{default:s(()=>[t("Node.js")]),_:1}),t(" 写的，有用 Valine 的人，应该基本都有 Node.js 环境吧！")])]),e("p",null,[t("不过头像只有你配置过 "),n(l,{href:"https://help.disqus.com/en/articles/1717160-integrating-single-sign-on",target:"_blank",rel:"noreferrer"},{default:s(()=>[t("SSO")]),_:1}),t(" 才能使用，Disqus 格式中也没有其他包括头像的字段。所以 Valine 本来根据邮箱调用的 Gravatar 头像会丢失。 暂时没有想到什么好的解决办法。（不过可以去 Admin -> Setting -> General 处设置一下默认头像，换成其他好看点的。）")]),e("h3",B,[t("导入 Disqus "),n(l,{class:"header-anchor",href:"#导入-disqus","aria-hidden":"true"},{default:s(()=>[t("#")]),_:1})]),e("p",null,[t("前往 "),n(l,{href:"https://xn--6qqv7i7thbp4a.disqus.com/admin/discussions/import/platform/wordpress/",target:"_blank",rel:"noreferrer"},{default:s(()=>[t("https://你的名字.disqus.com/admin/discussions/import/platform/wordpress/")]),_:1}),t(" 或 "),n(l,{href:"https://import.disqus.com/",target:"_blank",rel:"noreferrer"},{default:s(()=>[t("https://import.disqus.com/")]),_:1}),t("（这个可以看到导入的进度和状况） 进行导入。")]),G,U,X,Z,z]),"main-header":s(()=>[i(a.$slots,"main-header")]),"main-header-after":s(()=>[i(a.$slots,"main-header-after")]),"main-nav":s(()=>[i(a.$slots,"main-nav")]),"main-content":s(()=>[i(a.$slots,"main-content")]),"main-content-after":s(()=>[i(a.$slots,"main-content-after")]),"main-nav-before":s(()=>[i(a.$slots,"main-nav-before")]),"main-nav-after":s(()=>[i(a.$slots,"main-nav-after")]),comment:s(()=>[i(a.$slots,"comment")]),footer:s(()=>[i(a.$slots,"footer")]),aside:s(()=>[i(a.$slots,"aside")]),"aside-custom":s(()=>[i(a.$slots,"aside-custom")]),default:s(()=>[i(a.$slots,"default")]),_:3},8,["frontmatter","data"])}const ae=c(g,[["render",P]]);export{ne as __pageData,ae as default};
