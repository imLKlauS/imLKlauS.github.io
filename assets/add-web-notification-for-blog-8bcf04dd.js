import{_ as h}from"./ValaxyMain.vue_vue_type_style_index_0_lang-6a062f38.js";import{_ as f,c as u,w as t,o as c,f as p,a,b as e,d as l,r as n,e as b,p as _}from"./app-e5719a6f.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-e0f1ff80.js";import"./YunCard.vue_vue_type_style_index_0_lang-5601e03d.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-7110b128.js";const O=JSON.parse('{"title":"Web Notification 为博客推送通知（咕了）","description":"","frontmatter":{"title":"Web Notification 为博客推送通知（咕了）","date":"2020-05-30T03:02:13.000Z","updated":"2020-05-30T03:02:13.000Z","tags":null,"categories":null},"headers":[{"level":2,"title":"Web Notification","slug":"web-notification","link":"#web-notification","children":[]},{"level":2,"title":"其他","slug":"其他","link":"#其他","children":[{"level":3,"title":"PushBots","slug":"pushbots","link":"#pushbots","children":[]}]},{"level":2,"title":"后话","slug":"后话","link":"#后话","children":[]}],"relativePath":"pages/_drafts/abandon/add-web-notification-for-blog.md","path":"D:\\\\Learning\\\\myblog\\\\valaxy-blog\\\\imLKlauS.github.io-valaxy\\\\pages\\\\_drafts\\\\abandon\\\\add-web-notification-for-blog.md","lastUpdated":null}'),s=JSON.parse('{"title":"Web Notification 为博客推送通知（咕了）","description":"","frontmatter":{"title":"Web Notification 为博客推送通知（咕了）","date":"2020-05-30T03:02:13.000Z","updated":"2020-05-30T03:02:13.000Z","tags":null,"categories":null},"headers":[{"level":2,"title":"Web Notification","slug":"web-notification","link":"#web-notification","children":[]},{"level":2,"title":"其他","slug":"其他","link":"#其他","children":[{"level":3,"title":"PushBots","slug":"pushbots","link":"#pushbots","children":[]}]},{"level":2,"title":"后话","slug":"后话","link":"#后话","children":[]}],"relativePath":"pages/_drafts/abandon/add-web-notification-for-blog.md","path":"D:\\\\Learning\\\\myblog\\\\valaxy-blog\\\\imLKlauS.github.io-valaxy\\\\pages\\\\_drafts\\\\abandon\\\\add-web-notification-for-blog.md","lastUpdated":null}'),m={name:"pages/_drafts/abandon/add-web-notification-for-blog.md",data(){return{data:s,frontmatter:s.frontmatter}},setup(){_("pageData",s)}},g={id:"web-notification",tabindex:"-1"},w=a("p",null,"什么是 Web Notification？",-1),v=a("p",null,"它可以通过浏览器给你推送消息通知。",-1),N={id:"其他",tabindex:"-1"},k=a("p",null,[a("img",{src:"https://r2.yunyoujun.cn/images/webpushr-404.jpg",alt:"webpushr-404"})],-1),$={id:"pushbots",tabindex:"-1"},y=a("p",null,"为博客添加该功能的方式非常简单。你直接按照 PushBots 给的引导方式来安装它即可。",-1),P={id:"后话",tabindex:"-1"},W=a("p",null,"PushBots 也慢慢积累了有一千七百多用户，也早已超过 PushBots 免费推送的用户额度。",-1),B=a("p",null,"以及我真的需要通知吗？",-1),S=a("p",null,"为每位用户添加推送真的是有必要的吗？",-1),x=a("p",null,"而我自添加该功能以来，使用过的次数也屈指可数。何必留着影响体验和速度。",-1),z=a("p",null,"最终我决定去除了它。",-1),D=a("hr",null,null,-1),L=a("p",null,"Q.E.D.",-1);function T(o,V,A,C,r,Z){const i=b,d=h;return c(),u(d,{frontmatter:r.frontmatter,data:r.data},{"main-content-md":t(()=>[p(" more "),a("h2",g,[e("Web Notification "),l(i,{class:"header-anchor",href:"#web-notification","aria-hidden":"true"},{default:t(()=>[e("#")]),_:1})]),w,v,a("ul",null,[a("li",null,[l(i,{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Push_API",target:"_blank",rel:"noreferrer"},{default:t(()=>[e("开放式平台")]),_:1})]),a("li",null,[l(i,{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/notification/Using_Web_Notifications",target:"_blank",rel:"noreferrer"},{default:t(()=>[e("使用 Web Notifications")]),_:1})])]),a("h2",N,[e("其他 "),l(i,{class:"header-anchor",href:"#其他","aria-hidden":"true"},{default:t(()=>[e("#")]),_:1})]),a("p",null,[e("我一开始是想使用 "),l(i,{href:"https://www.webpushr.com/",target:"_blank",rel:"noreferrer"},{default:t(()=>[e("webpushr")]),_:1}),e("，但是建立好 Site 后不知为何总是显示 404。")]),k,a("p",null,[e("于是转为使用了 "),l(i,{href:"https://app.pushbots.com/",target:"_blank",rel:"noreferrer"},{default:t(()=>[e("PushBots")]),_:1}),e("。（而 GitHub 学生账号会送 6 个月的高级会员。）")]),a("p",null,[e("所以并没有使用 "),l(i,{href:"https://github.com/glazec/hexo-web-push-notification",target:"_blank",rel:"noreferrer"},{default:t(()=>[e("hexo-web-push-notification")]),_:1}),e(" 这个插件。")]),a("h3",$,[e("PushBots "),l(i,{class:"header-anchor",href:"#pushbots","aria-hidden":"true"},{default:t(()=>[e("#")]),_:1})]),y,a("h2",P,[e("后话 "),l(i,{class:"header-anchor",href:"#后话","aria-hidden":"true"},{default:t(()=>[e("#")]),_:1})]),W,B,S,a("p",null,[e("网页应当是自由的，而真正对博客有兴趣的人，大可通过 "),l(i,{href:"https://www.yunyoujun.cn/atom.xml",target:"_blank",rel:"noreferrer"},{default:t(()=>[e("RSS")]),_:1}),e(" 或是 "),l(i,{href:"https://feedly.com/",target:"_blank",rel:"noreferrer"},{default:t(()=>[e("feedly")]),_:1}),e(" 等平台进行订阅。")]),x,z,D,L]),"main-header":t(()=>[n(o.$slots,"main-header")]),"main-header-after":t(()=>[n(o.$slots,"main-header-after")]),"main-nav":t(()=>[n(o.$slots,"main-nav")]),"main-content":t(()=>[n(o.$slots,"main-content")]),"main-content-after":t(()=>[n(o.$slots,"main-content-after")]),"main-nav-before":t(()=>[n(o.$slots,"main-nav-before")]),"main-nav-after":t(()=>[n(o.$slots,"main-nav-after")]),comment:t(()=>[n(o.$slots,"comment")]),footer:t(()=>[n(o.$slots,"footer")]),aside:t(()=>[n(o.$slots,"aside")]),"aside-custom":t(()=>[n(o.$slots,"aside-custom")]),default:t(()=>[n(o.$slots,"default")]),_:3},8,["frontmatter","data"])}const E=f(m,[["render",T]]);export{O as __pageData,E as default};
