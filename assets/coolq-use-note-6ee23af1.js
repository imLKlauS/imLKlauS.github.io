import{_ as i}from"./ValaxyMain.vue_vue_type_style_index_0_lang-2b2b6dc8.js";import{_ as C,c as y,w as o,o as d,a as l,b as s,d as t,f as h,r as n,e as D,p as A}from"./app-d1170590.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-cdfe87ad.js";import"./YunCard.vue_vue_type_style_index_0_lang-84f0760a.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-d72df8d2.js";const gl=JSON.parse('{"title":"酷 Q 使用笔记","description":"","frontmatter":{"title":"酷 Q 使用笔记","date":"2019-05-15T19:45:31.000Z","updated":"2019-05-15T19:45:31.000Z","tags":["学习","笔记","CoolQ"],"categories":["云游的小笔记"]},"headers":[{"level":2,"title":"Intro","slug":"intro","link":"#intro","children":[]},{"level":2,"title":"Progress","slug":"progress","link":"#progress","children":[{"level":3,"title":"Install Docker","slug":"install-docker","link":"#install-docker","children":[]},{"level":3,"title":"安装 酷 Q","slug":"安装-酷-q","link":"#安装-酷-q","children":[]},{"level":3,"title":"安装 CoolQ HTTP API 插件","slug":"安装-coolq-http-api-插件","link":"#安装-coolq-http-api-插件","children":[]},{"level":3,"title":"安装 NoneBot","slug":"安装-nonebot","link":"#安装-nonebot","children":[]},{"level":3,"title":"GitHub Webhook","slug":"github-webhook","link":"#github-webhook","children":[]}]},{"level":2,"title":"FAQ","slug":"faq","link":"#faq","children":[{"level":3,"title":"端口号未开启","slug":"端口号未开启","link":"#端口号未开启","children":[]}]},{"level":2,"title":"Example","slug":"example","link":"#example","children":[]}],"relativePath":"pages/posts/coolq-use-note.md","path":"D:\\\\Learning\\\\myblog\\\\valaxy-blog\\\\imklaus.github.io-main\\\\pages\\\\posts\\\\coolq-use-note.md","lastUpdated":null}'),r=JSON.parse('{"title":"酷 Q 使用笔记","description":"","frontmatter":{"title":"酷 Q 使用笔记","date":"2019-05-15T19:45:31.000Z","updated":"2019-05-15T19:45:31.000Z","tags":["学习","笔记","CoolQ"],"categories":["云游的小笔记"]},"headers":[{"level":2,"title":"Intro","slug":"intro","link":"#intro","children":[]},{"level":2,"title":"Progress","slug":"progress","link":"#progress","children":[{"level":3,"title":"Install Docker","slug":"install-docker","link":"#install-docker","children":[]},{"level":3,"title":"安装 酷 Q","slug":"安装-酷-q","link":"#安装-酷-q","children":[]},{"level":3,"title":"安装 CoolQ HTTP API 插件","slug":"安装-coolq-http-api-插件","link":"#安装-coolq-http-api-插件","children":[]},{"level":3,"title":"安装 NoneBot","slug":"安装-nonebot","link":"#安装-nonebot","children":[]},{"level":3,"title":"GitHub Webhook","slug":"github-webhook","link":"#github-webhook","children":[]}]},{"level":2,"title":"FAQ","slug":"faq","link":"#faq","children":[{"level":3,"title":"端口号未开启","slug":"端口号未开启","link":"#端口号未开启","children":[]}]},{"level":2,"title":"Example","slug":"example","link":"#example","children":[]}],"relativePath":"pages/posts/coolq-use-note.md","path":"D:\\\\Learning\\\\myblog\\\\valaxy-blog\\\\imklaus.github.io-main\\\\pages\\\\posts\\\\coolq-use-note.md","lastUpdated":null}'),u={name:"pages/posts/coolq-use-note.md",data(){return{data:r,frontmatter:r.frontmatter}},setup(){A("pageData",r)}},_={id:"intro",tabindex:"-1"},E=l("p",null,"那么以此为基础的 qq 机器人便全部失效。以前折腾的也已作废。",-1),m=l("p",null,"本文便用于记录配置过程中的坑。",-1),b={id:"progress",tabindex:"-1"},f=l("p",null,"想要长久在线，自然是要挂在服务器上的。 那么 Linux 便是跨不过去的坎。",-1),g=l("blockquote",null,[l("p",null,"当前版本为 3.1")],-1),k={id:"install-docker",tabindex:"-1"},F=l("p",null,"Linux 不同主流发行版本在官方文档中都有详细的安装过程。",-1),q=l("p",null,"CentOS:",-1),B=l("div",{class:"language-bash"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"yum"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"install"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"docker")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#676E95","font-style":"italic"}},"# 启动 Docker")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"systemctl"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"start"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"docker")]),s(`
`),l("span",{class:"line"})])])],-1),v=l("p",null,"但 Deepin (即深度) 基于 Debian 进行了定制，本以为按照 Debian 进行安装就可以，但没能成功。 无法找到 Deepin 的安装版本。",-1),x=l("p",null,[s("尝试了文中的做法也没有成功。 问题出在 "),l("code",null,"sudo add-apt-repository"),s(" 。")],-1),T=l("p",null,[s("尝试修改了 "),l("code",null,"/etc/lsb-release"),s("，竟然成功了。")],-1),Q=l("div",{class:"language-ini"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#676E95","font-style":"italic"}},"; DISTRIB_ID=Deepin")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"DISTRIB_ID"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#A6ACCD"}},"Debian")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"DISTRIB_RELEASE"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"15.10"),l("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"DISTRIB_DESCRIPTION"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"Deepin 15.10"),l("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#676E95","font-style":"italic"}},"; DISTRIB_CODENAME=stable")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"DISTRIB_CODENAME"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#A6ACCD"}},"wheezy")]),s(`
`),l("span",{class:"line"})])])],-1),I=l("p",null,[s("等安装好后，为防止以后系统更新等 Bug，又改回了 "),l("code",null,"Deepin/stable"),s("。")],-1),N={id:"安装-酷-q",tabindex:"-1"},P={id:"下载-酷-q-docker-镜像",tabindex:"-1"},S=l("div",{class:"language-bash"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"docker"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"pull"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"coolq/wine-coolq")]),s(`
`),l("span",{class:"line"})])])],-1),w=l("p",null,"在任意目录创建一个空文件夹，用于持久化存放 酷 Q 数据：",-1),O=l("div",{class:"language-bash"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"mkdir"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"/root/coolq-data"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#676E95","font-style":"italic"}},"# 任意路径均可")]),s(`
`),l("span",{class:"line"})])])],-1),$=l("p",null,"运行 酷 Q 镜像",-1),L=l("div",{class:"language-bash"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"docker"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"run"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"--name=coolq"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"--rm"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-p"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#F78C6C"}},"8080"),l("span",{style:{color:"#C3E88D"}},":"),l("span",{style:{color:"#F78C6C"}},"9000"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-v"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"/root/coolq-data:/home/user/coolq"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-e"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"VNC_PASSWD="),l("span",{style:{color:"#F78C6C"}},"12345678"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-e"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"COOLQ_ACCOUNT="),l("span",{style:{color:"#F78C6C"}},"123456"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"coolq/wine-coolq")]),s(`
`),l("span",{class:"line"})])])],-1),H=l("p",null,"Example:",-1),R=l("div",{class:"language-bash"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"docker"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"run"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"--name=coolq"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"--rm"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-p"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#F78C6C"}},"8080"),l("span",{style:{color:"#C3E88D"}},":"),l("span",{style:{color:"#F78C6C"}},"9000"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-v"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"/root/coolq-data:/home/yunyou/coolq"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-e"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"VNC_PASSWD=yunyou"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-e"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"COOLQ_ACCOUNT=xiaoai"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"coolq/wine-coolq")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"docker"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"run"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"--name=coolq"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-d"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-p"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#F78C6C"}},"8080"),l("span",{style:{color:"#C3E88D"}},":"),l("span",{style:{color:"#F78C6C"}},"9000"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-v"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"/root/coolq-data:/home/yunyou/coolq"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-e"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"VNC_PASSWD=yunyou"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-e"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"COOLQ_ACCOUNT=xiaoai"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"coolq/wine-coolq")]),s(`
`),l("span",{class:"line"})])])],-1),V={id:"后台服务",tabindex:"-1"},W=l("p",null,"启动容器",-1),U=l("p",null,[l("code",null,"--rm"),s(" 替换为 "),l("code",null,"-d")],-1),j=l("div",{class:"language-bash"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"docker"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"run"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"--name=coolq"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-d"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-p"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#F78C6C"}},"8080"),l("span",{style:{color:"#C3E88D"}},":"),l("span",{style:{color:"#F78C6C"}},"9000"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-v"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"/root/coolq-data:/home/user/coolq"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-e"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"VNC_PASSWD="),l("span",{style:{color:"#F78C6C"}},"12345678"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-e"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"COOLQ_ACCOUNT="),l("span",{style:{color:"#F78C6C"}},"123456"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"coolq/wine-coolq")]),s(`
`),l("span",{class:"line"})])])],-1),G=l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"Argument"),l("th",null,"Example")])]),l("tbody",null,[l("tr",null,[l("td",null,"远程监听端口"),l("td",null,"8080")]),l("tr",null,[l("td",null,"数据存放位置"),l("td",null,"/root/coolq-data")]),l("tr",null,[l("td",null,"远程访问密码"),l("td",null,"12345678")]),l("tr",null,[l("td",null,"机器人帐号"),l("td",null,"123456")])])],-1),M=l("p",null,"查看日志",-1),J=l("div",{class:"language-bash"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"docker"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"logs"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"coolq")]),s(`
`),l("span",{class:"line"})])])],-1),Z=l("p",null,"启动/停止服务",-1),Y=l("div",{class:"language-bash"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"docker"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"start"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"coolq")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"docker"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"stop"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"coolq")]),s(`
`),l("span",{class:"line"})])])],-1),z={id:"安装-coolq-http-api-插件",tabindex:"-1"},K=l("div",{class:"language-bash"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"docker"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"pull"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"richardchien/cqhttp:latest")]),s(`
`),l("span",{class:"line"})])])],-1),X={id:"run-coolq",tabindex:"-1"},ll=l("div",{class:"language-bash"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"docker"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"run"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-ti"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"--rm"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"--name"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"cqhttp-test"),l("span",{style:{color:"#A6ACCD"}}," \\")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"            "),l("span",{style:{color:"#C3E88D"}},"-v"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"$("),l("span",{style:{color:"#82AAFF"}},"pwd"),l("span",{style:{color:"#89DDFF"}},")"),l("span",{style:{color:"#C3E88D"}},"/coolq:/home/user/coolq"),l("span",{style:{color:"#A6ACCD"}}," \\  "),l("span",{style:{color:"#676E95","font-style":"italic"}},"# 将宿主目录挂载到容器内用于持久化 酷Q 的程序文件")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"            "),l("span",{style:{color:"#FFCB6B"}},"-p"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#F78C6C"}},"9000"),l("span",{style:{color:"#C3E88D"}},":"),l("span",{style:{color:"#F78C6C"}},"9000"),l("span",{style:{color:"#A6ACCD"}}," \\  "),l("span",{style:{color:"#676E95","font-style":"italic"}},"# noVNC 端口，用于从浏览器控制 酷Q")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"            "),l("span",{style:{color:"#FFCB6B"}},"-p"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#F78C6C"}},"5700"),l("span",{style:{color:"#C3E88D"}},":"),l("span",{style:{color:"#F78C6C"}},"5700"),l("span",{style:{color:"#A6ACCD"}}," \\  "),l("span",{style:{color:"#676E95","font-style":"italic"}},"# HTTP API 插件开放的端口")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"            "),l("span",{style:{color:"#FFCB6B"}},"-e"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"COOLQ_ACCOUNT="),l("span",{style:{color:"#F78C6C"}},"123456"),l("span",{style:{color:"#A6ACCD"}}," \\ "),l("span",{style:{color:"#C3E88D"}},"#"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"要登录的"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"QQ"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"账号，可选但建议填")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"            "),l("span",{style:{color:"#FFCB6B"}},"-e"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"CQHTTP_POST_URL=http://example.com:"),l("span",{style:{color:"#F78C6C"}},"8080"),l("span",{style:{color:"#A6ACCD"}}," \\  "),l("span",{style:{color:"#676E95","font-style":"italic"}},"# 事件上报地址")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"            "),l("span",{style:{color:"#FFCB6B"}},"-e"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"CQHTTP_SERVE_DATA_FILES=yes"),l("span",{style:{color:"#A6ACCD"}}," \\  "),l("span",{style:{color:"#676E95","font-style":"italic"}},"# 允许通过 HTTP 接口访问 酷Q 数据文件")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"            "),l("span",{style:{color:"#FFCB6B"}},"richardchien/cqhttp:latest")]),s(`
`),l("span",{class:"line"})])])],-1),sl=l("p",null,"进入容器内部，添加需改环境变量",-1),ol=l("div",{class:"language-bash"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"docker"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"exec"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-ti"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"容器ID/容器名"),l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#C3E88D"}},"/bin/bash")]),s(`
`),l("span",{class:"line"})])])],-1),el={id:"安装-nonebot",tabindex:"-1"},tl=l("p",null,"因为自己 C++ 并不怎么熟悉，所以打算使用 api 插件，来使用 Node.js/Python 来开发。",-1),al=l("p",null,"参见文档进行安装。",-1),nl=l("div",{class:"language-bash"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#676E95","font-style":"italic"}},"# pip 为 python 的包管理工具，请提前安装好 Python , pip 。")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#676E95","font-style":"italic"}},"# More Info: https://yunyoujun.cn/posts/linux-learn-note/")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"pip"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"install"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"nonebot")]),s(`
`),l("span",{class:"line"})])])],-1),rl={id:"github-webhook",tabindex:"-1"},cl={id:"faq",tabindex:"-1"},pl={id:"端口号未开启",tabindex:"-1"},il=l("p",null,"T^T 这个问题找了我好久",-1),Cl=l("div",{class:"language-bash"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"iptables"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-I"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"INPUT"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#F78C6C"}},"4"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-p"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"tcp"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-m"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"state"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"--state"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"NEW"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-m"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"tcp"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"--dport"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#F78C6C"}},"8080"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-j"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"ACCEPT")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"service"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"iptables"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"save"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#676E95","font-style":"italic"}},"#保存iptables规则")]),s(`
`),l("span",{class:"line"})])])],-1),yl={id:"example",tabindex:"-1"};function dl(a,hl,Dl,Al,c,ul){const e=D,p=i;return d(),y(p,{frontmatter:c.frontmatter,data:c.data},{"main-content-md":o(()=>[l("blockquote",null,[l("p",null,[s("2020-07-19 因为 CoolQ 的繁琐和诸多限制，我已经弃用。所以该篇文章内容不会再更新。 如果你有兴趣，可以尝试使用 "),t(e,{href:"https://github.com/mamoe/mirai",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("mirai")]),_:1}),s(" (一个跨平台且轻量的 QQ 机器人库)。 此外，我使用 JS/TS 编写了一个基于 mirai 的机器人框架 "),t(e,{href:"https://github.com/ElpsyCN/el-bot",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("el-bot")]),_:1}),s("，使其更易于使用与扩展，正处于持续开发维护中。 More Info: "),t(e,{href:"https://www.yunyoujun.cn/posts/make-el-bot/",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("el-bot & mirai-ts 制作笔记")]),_:1})])]),l("h2",_,[s("Intro "),t(e,{class:"header-anchor",href:"#intro","aria-hidden":"true"},{default:o(()=>[s("#")]),_:1})]),l("p",null,[t(e,{href:"https://web2.qq.com/",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("Webqq")]),_:1}),s(" 早已于 2019-01-01 起正式停止服务。")]),E,l("ul",null,[l("li",null,[t(e,{href:"https://github.com/pandolia/qqbot",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("qqbot")]),_:1})])]),l("p",null,[s("因此，所剩的尚跨可靠的选择似乎只有 "),t(e,{href:"https://cqp.cc/",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("酷 Q")]),_:1}),s(" 还说得过去。")]),m,h(" more "),l("h2",b,[s("Progress "),t(e,{class:"header-anchor",href:"#progress","aria-hidden":"true"},{default:o(()=>[s("#")]),_:1})]),f,l("p",null,[s("想让 酷 Q 在 Linux 上运行则推荐使用 "),t(e,{href:"https://www.docker.com/",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("docker")]),_:1}),s(" 。")]),l("p",null,[t(e,{href:"https://cqp.cc/t/34558",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("[发布]酷 Q on Docker")]),_:1})]),g,l("h3",k,[s("Install Docker "),t(e,{class:"header-anchor",href:"#install-docker","aria-hidden":"true"},{default:o(()=>[s("#")]),_:1})]),F,l("blockquote",null,[l("p",null,[t(e,{href:"https://docs.docker.com/install/linux/docker-ce/debian/",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("Get Docker CE")]),_:1})])]),q,B,v,l("p",null,[t(e,{href:"https://bbs.deepin.org/forum.php?mod=viewthread&tid=139514&page=1&authorid=76809",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("深度系统如何安装 docker？")]),_:1})]),x,T,Q,I,l("h3",N,[s("安装 酷 Q "),t(e,{class:"header-anchor",href:"#安装-酷-q","aria-hidden":"true"},{default:o(()=>[s("#")]),_:1})]),l("h4",P,[s("下载 酷 Q Docker 镜像 "),t(e,{class:"header-anchor",href:"#下载-酷-q-docker-镜像","aria-hidden":"true"},{default:o(()=>[s("#")]),_:1})]),S,w,O,$,L,H,R,l("h4",V,[s("后台服务 "),t(e,{class:"header-anchor",href:"#后台服务","aria-hidden":"true"},{default:o(()=>[s("#")]),_:1})]),W,U,j,G,M,J,Z,Y,l("h3",z,[s("安装 "),t(e,{href:"https://cqhttp.cc/",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("CoolQ HTTP API 插件")]),_:1}),s(),t(e,{class:"header-anchor",href:"#安装-coolq-http-api-插件","aria-hidden":"true"},{default:o(()=>[s("#")]),_:1})]),K,l("p",null,[s("或者 "),t(e,{href:"https://cqhttp.cc/docs/4.10/#/?id=%E6%89%8B%E5%8A%A8%E5%AE%89%E8%A3%85",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("手动安装")]),_:1})]),l("h4",X,[s("Run Coolq "),t(e,{class:"header-anchor",href:"#run-coolq","aria-hidden":"true"},{default:o(()=>[s("#")]),_:1})]),ll,sl,ol,l("h3",el,[s("安装 NoneBot "),t(e,{class:"header-anchor",href:"#安装-nonebot","aria-hidden":"true"},{default:o(()=>[s("#")]),_:1})]),tl,l("p",null,[s("随后发现了 "),t(e,{href:"https://github.com/richardchien/nonebot",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("NoneBot")]),_:1}),s(" 这样封装好的框架，使用 Python 。")]),al,nl,l("p",null,[s("使用参见 "),t(e,{href:"https://nonebot.cqp.moe/",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("NoneBot 文档")]),_:1})]),l("h3",rl,[s("GitHub Webhook "),t(e,{class:"header-anchor",href:"#github-webhook","aria-hidden":"true"},{default:o(()=>[s("#")]),_:1})]),l("p",null,[t(e,{href:"https://yunyoujun.cn/posts/qq-xiao-ai/#WebHooks-%E8%87%AA%E5%8A%A8%E9%83%A8%E7%BD%B2",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("WebHooks-自动部署")]),_:1})]),l("h2",cl,[s("FAQ "),t(e,{class:"header-anchor",href:"#faq","aria-hidden":"true"},{default:o(()=>[s("#")]),_:1})]),l("h3",pl,[s("端口号未开启 "),t(e,{class:"header-anchor",href:"#端口号未开启","aria-hidden":"true"},{default:o(()=>[s("#")]),_:1})]),il,Cl,l("h2",yl,[s("Example "),t(e,{class:"header-anchor",href:"#example","aria-hidden":"true"},{default:o(()=>[s("#")]),_:1})]),l("p",null,[s("GitHub: "),t(e,{href:"https://github.com/YunYouJun/xiao-ai",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("xiao-ai")]),_:1})])]),"main-header":o(()=>[n(a.$slots,"main-header")]),"main-header-after":o(()=>[n(a.$slots,"main-header-after")]),"main-nav":o(()=>[n(a.$slots,"main-nav")]),"main-content":o(()=>[n(a.$slots,"main-content")]),"main-content-after":o(()=>[n(a.$slots,"main-content-after")]),"main-nav-before":o(()=>[n(a.$slots,"main-nav-before")]),"main-nav-after":o(()=>[n(a.$slots,"main-nav-after")]),comment:o(()=>[n(a.$slots,"comment")]),footer:o(()=>[n(a.$slots,"footer")]),aside:o(()=>[n(a.$slots,"aside")]),"aside-custom":o(()=>[n(a.$slots,"aside-custom")]),default:o(()=>[n(a.$slots,"default")]),_:3},8,["frontmatter","data"])}const kl=C(u,[["render",dl]]);export{gl as __pageData,kl as default};
