import{_ as p}from"./ValaxyMain.vue_vue_type_style_index_0_lang-d5af8148.js";import{_ as d,c as u,w as n,o as h,a as l,b as e,d as o,e as D,r as s,f as m,p as y}from"./app-42d5a9db.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-34c43401.js";import"./YunCard.vue_vue_type_style_index_0_lang-f6f2e4e1.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-935d25d1.js";const z=JSON.parse('{"title":"Coding WebIDE 云端开发实验室","description":"","frontmatter":{"title":"Coding WebIDE 云端开发实验室","tags":["Web","分享","学习"],"categories":["云游的小安利"],"date":"2017-10-11T16:21:12.000Z","updated":"2017-10-11T16:21:12.000Z"},"headers":[{"level":2,"title":"Intro","slug":"intro","link":"#intro","children":[]},{"level":2,"title":"环境参数","slug":"环境参数","link":"#环境参数","children":[]},{"level":2,"title":"优点","slug":"优点","link":"#优点","children":[]},{"level":2,"title":"配置过程与问题","slug":"配置过程与问题","link":"#配置过程与问题","children":[{"level":3,"title":"Java","slug":"java","link":"#java","children":[]}]},{"level":2,"title":"后记","slug":"后记","link":"#后记","children":[]}],"relativePath":"pages/posts/coding-webide-dev-env.md","path":"D:\\\\Learning\\\\myblog\\\\valaxy-blog\\\\imLKlauS.github.io-valaxy\\\\pages\\\\posts\\\\coding-webide-dev-env.md","lastUpdated":null}'),i=JSON.parse('{"title":"Coding WebIDE 云端开发实验室","description":"","frontmatter":{"title":"Coding WebIDE 云端开发实验室","tags":["Web","分享","学习"],"categories":["云游的小安利"],"date":"2017-10-11T16:21:12.000Z","updated":"2017-10-11T16:21:12.000Z"},"headers":[{"level":2,"title":"Intro","slug":"intro","link":"#intro","children":[]},{"level":2,"title":"环境参数","slug":"环境参数","link":"#环境参数","children":[]},{"level":2,"title":"优点","slug":"优点","link":"#优点","children":[]},{"level":2,"title":"配置过程与问题","slug":"配置过程与问题","link":"#配置过程与问题","children":[{"level":3,"title":"Java","slug":"java","link":"#java","children":[]}]},{"level":2,"title":"后记","slug":"后记","link":"#后记","children":[]}],"relativePath":"pages/posts/coding-webide-dev-env.md","path":"D:\\\\Learning\\\\myblog\\\\valaxy-blog\\\\imLKlauS.github.io-valaxy\\\\pages\\\\posts\\\\coding-webide-dev-env.md","lastUpdated":null}'),g={name:"pages/posts/coding-webide-dev-env.md",data(){return{data:i,frontmatter:i.frontmatter}},setup(){y("pageData",i)}},v={id:"intro",tabindex:"-1"},F=l("p",null,"之前就有听说过 WebIDE , 不过一直没有去用。毕竟本地的开发也有许多便利，平时写写前端、php 之类的环境也挺方便配置，空间也不大。",-1),_=l("p",null,[e("接下来就要说到，某个恰巧差了 0.5 学分的人的选课问题了。冲着名字选了 "),l("code",null,"Web开发技术"),e(" 后，发现老师讲的是 JavaEE，而且书本上的知识十分老旧。 = =，实验的内容也是意外的简陋。总之，自己不是很感兴趣吧。")],-1),f=l("p",null,[e("至于实验室的机器环境更是落后，老版的 "),l("code",null,"MyEclipse"),e(" 加上 "),l("code",null,"Windows XP"),e(" 系统，让人更是提不起兴 ♂ 趣。自己也懒得在自己空间有限的机子上装 JavaEE 的环境和开发工具了。")],-1),b=l("blockquote",null,[l("p",null,"以上都是废话")],-1),C=l("hr",null,null,-1),A=l("blockquote",null,[l("p",null,"以下数据目前截至 2017.10.11")],-1),k={id:"环境参数",tabindex:"-1"},E=l("p",null,"(个人免费版)",-1),w=l("ul",null,[l("li",null,"多种环境可选"),l("li",null,[e("官方提供的 Java 基础环境是 "),l("code",null,"Java & Maven environment"),e(" 。")]),l("li",null,'JDK : java version "1.8.0_111"'),l("li",null,[e("命令行类似 "),l("code",null,"Git Bash"),e(" 风格, 提供 git 环境")]),l("li",null,"系统 : Linux Ubuntu 16.04.1 LTS"),l("li",null,"CPU : 1 内核"),l("li",null,"内存 : 128 M"),l("li",null,"磁盘 : 1 GB")],-1),I={id:"优点",tabindex:"-1"},$=l("ul",null,[l("li",null,[e("目前而且以后估计也会是 "),l("strong",null,"免费"),e(" 的，不过一个人只能建一个空间。（当然也有一些付费服务啦")]),l("li",null,[e("可以与 "),l("code",null,"GitHub"),e(" 项目关联")]),l("li",null,"提供在线链接预览")],-1),W=l("hr",null,null,-1),x={id:"配置过程与问题",tabindex:"-1"},J=l("p",null,"先创建属于自己的空间。",-1),j={id:"java",tabindex:"-1"},B=l("p",null,[e("因为课上实验用的是 "),l("code",null,"JavaEE"),e(" ，所以想的就是配置个在线写 "),l("code",null,"jsp"),e(" 之类的环境，而且还能在线预览测试。")],-1),N=l("p",null,"预置 Maven 环境，所以使用 Maven 创建 Web 应用程序项目。",-1),L=l("ol",null,[l("li",null,[l("p",null,"在终端输入以下命令，并确定项目名称，创建 Web 项目。"),l("div",{class:"language-bash"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"mvn"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"archetype:generate"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-DgroupId=com.yiibai"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-DartifactId=项目名称"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-DarchetypeArtifactId=maven-archetype-webapp"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-DinteractiveMode=false")]),e(`
`),l("span",{class:"line"})])])])]),l("li",null,[l("p",null,[e("此时项目文件夹下会生成 "),l("code",null,"pom.xml"),e(" 文件，打开，并找到如下 "),l("code",null,"<build>"),e(" 标签。")]),l("div",{class:"language-xml"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"build"),l("span",{style:{color:"#89DDFF"}},">")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"finalName"),l("span",{style:{color:"#89DDFF"}},">"),l("span",{style:{color:"#A6ACCD"}},"你的项目名称"),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"finalName"),l("span",{style:{color:"#89DDFF"}},">")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"build"),l("span",{style:{color:"#89DDFF"}},">")]),e(`
`),l("span",{class:"line"})])])])]),l("li",null,[l("p",null,[e("在 "),l("code",null,"<build>"),e(" 中增加如下的 "),l("code",null,"<plugins>"),e(" 标签。(此处作用是添加 "),l("code",null,"maven tomcat7"),e(" 插件，默认配置的是 "),l("code",null,"tomcat6"),e(" 插件，不支持 "),l("code",null,"jdk1.8"),e(")")]),l("div",{class:"language-xml"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"plugins"),l("span",{style:{color:"#89DDFF"}},">")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"plugin"),l("span",{style:{color:"#89DDFF"}},">")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"groupId"),l("span",{style:{color:"#89DDFF"}},">"),l("span",{style:{color:"#A6ACCD"}},"org.apache.tomcat.maven"),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"groupId"),l("span",{style:{color:"#89DDFF"}},">")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"artifactId"),l("span",{style:{color:"#89DDFF"}},">"),l("span",{style:{color:"#A6ACCD"}},"tomcat7-maven-plugin"),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"artifactId"),l("span",{style:{color:"#89DDFF"}},">")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"version"),l("span",{style:{color:"#89DDFF"}},">"),l("span",{style:{color:"#A6ACCD"}},"2.1"),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"version"),l("span",{style:{color:"#89DDFF"}},">")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"plugin"),l("span",{style:{color:"#89DDFF"}},">")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"plugins"),l("span",{style:{color:"#89DDFF"}},">")]),e(`
`),l("span",{class:"line"})])])])]),l("li",null,[l("p",null,[e("进入项目文件夹，运行如下命令，开启 "),l("code",null,"tomcat7"),e(" 服务器。（注意要加 7 ）")]),l("div",{class:"language-bash"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#82AAFF"}},"cd"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"你的项目文件夹")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"mvn"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"tomcat7:run")]),e(`
`),l("span",{class:"line"})])])])]),l("li",null,[l("p",null,"点击 Coding WebIDE 界面右边界处的生成链接(默认是 8080 端口)，访问生成的链接即可看到 JavaWeb 的页面了。")])],-1),M=l("hr",null,null,-1),S={id:"后记",tabindex:"-1"},T=l("p",null,"做实验省得配置一堆环境，又可以随时备份代码，更换机器。感觉真的很方便，而且实验内容需求往往也不会触及到免费性能的瓶颈。",-1);function V(a,q,P,U,r,Z){const t=m,c=p;return h(),u(c,{frontmatter:r.frontmatter,data:r.data},{"main-content-md":n(()=>[l("h2",v,[e("Intro "),o(t,{class:"header-anchor",href:"#intro","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),F,D(" more "),l("blockquote",null,[l("p",null,[e("啊，现在好像被腾讯收购了的样子，改名叫腾讯开发者平台了，域名也变了。"),o(t,{href:"https://dev.tencent.com/",target:"_blank",rel:"noreferrer"},{default:n(()=>[e("https://dev.tencent.com/")]),_:1})])]),_,f,l("p",null,[e("这时就想到了 "),o(t,{href:"http://coding.net",target:"_blank",rel:"noreferrer"},{default:n(()=>[e("Coding.net")]),_:1}),e(" , 大概因为是国产，比其他同类型 WebIDE 网站要快很多！而且是中文界面嘛~")]),b,C,l("p",null,[e("进入正式试用。"),o(t,{href:"https://ide.coding.net",target:"_blank",rel:"noreferrer"},{default:n(()=>[e("https://ide.coding.net")]),_:1})]),l("p",null,[e("网站也提供了 "),o(t,{href:"https://ide.coding.net",target:"_blank",rel:"noreferrer"},{default:n(()=>[e("快速体验~")]),_:1})]),A,l("h2",k,[e("环境参数 "),o(t,{class:"header-anchor",href:"#环境参数","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),E,w,l("h2",I,[e("优点 "),o(t,{class:"header-anchor",href:"#优点","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),$,W,l("h2",x,[e("配置过程与问题 "),o(t,{class:"header-anchor",href:"#配置过程与问题","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),J,l("h3",j,[e("Java "),o(t,{class:"header-anchor",href:"#java","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),B,N,L,l("blockquote",null,[l("p",null,[e("参考教程： "),o(t,{href:"http://www.yiibai.com/maven/create-a-web-application-project-with-maven.html",target:"_blank",rel:"noreferrer"},{default:n(()=>[e("http://www.yiibai.com/maven/create-a-web-application-project-with-maven.html")]),_:1})])]),M,l("h2",S,[e("后记 "),o(t,{class:"header-anchor",href:"#后记","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),T]),"main-header":n(()=>[s(a.$slots,"main-header")]),"main-header-after":n(()=>[s(a.$slots,"main-header-after")]),"main-nav":n(()=>[s(a.$slots,"main-nav")]),"main-content":n(()=>[s(a.$slots,"main-content")]),"main-content-after":n(()=>[s(a.$slots,"main-content-after")]),"main-nav-before":n(()=>[s(a.$slots,"main-nav-before")]),"main-nav-after":n(()=>[s(a.$slots,"main-nav-after")]),comment:n(()=>[s(a.$slots,"comment")]),footer:n(()=>[s(a.$slots,"footer")]),aside:n(()=>[s(a.$slots,"aside")]),"aside-custom":n(()=>[s(a.$slots,"aside-custom")]),default:n(()=>[s(a.$slots,"default")]),_:3},8,["frontmatter","data"])}const Q=d(g,[["render",V]]);export{z as __pageData,Q as default};
