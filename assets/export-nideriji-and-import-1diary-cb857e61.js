import{_ as D}from"./ValaxyMain.vue_vue_type_style_index_0_lang-d4bd986d.js";import{_ as y,c as i,w as o,o as F,a as s,b as l,d as n,f as C,r as t,e as d,p as A}from"./app-e0b3e942.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-4e4e1e77.js";import"./YunCard.vue_vue_type_style_index_0_lang-e021946e.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-1ec5f4ba.js";const Ns=JSON.parse('{"title":"导出「你的日记」与导入「一本日记」","description":"","frontmatter":{"title":"导出「你的日记」与导入「一本日记」","date":"2019-01-31T16:38:03.000Z","updated":"2020-08-05T16:38:03.000Z","tags":["笔记"],"categories":["云游的小笔记"]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"正文","slug":"正文","link":"#正文","children":[{"level":3,"title":"Fiddle 配置","slug":"fiddle-配置","link":"#fiddle-配置","children":[]},{"level":3,"title":"PC 配置","slug":"pc-配置","link":"#pc-配置","children":[]},{"level":3,"title":"手机配置","slug":"手机配置","link":"#手机配置","children":[]},{"level":3,"title":"Operation","slug":"operation","link":"#operation","children":[]},{"level":3,"title":"《你的日记》 API 整理","slug":"《你的日记》-api-整理","link":"#《你的日记》-api-整理","children":[]}]}],"relativePath":"pages/posts/export-nideriji-and-import-1diary.md","path":"D:\\\\Learning\\\\myblog\\\\valaxy-blog\\\\imklaus.github.io-main\\\\pages\\\\posts\\\\export-nideriji-and-import-1diary.md","lastUpdated":null}'),r=JSON.parse('{"title":"导出「你的日记」与导入「一本日记」","description":"","frontmatter":{"title":"导出「你的日记」与导入「一本日记」","date":"2019-01-31T16:38:03.000Z","updated":"2020-08-05T16:38:03.000Z","tags":["笔记"],"categories":["云游的小笔记"]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"正文","slug":"正文","link":"#正文","children":[{"level":3,"title":"Fiddle 配置","slug":"fiddle-配置","link":"#fiddle-配置","children":[]},{"level":3,"title":"PC 配置","slug":"pc-配置","link":"#pc-配置","children":[]},{"level":3,"title":"手机配置","slug":"手机配置","link":"#手机配置","children":[]},{"level":3,"title":"Operation","slug":"operation","link":"#operation","children":[]},{"level":3,"title":"《你的日记》 API 整理","slug":"《你的日记》-api-整理","link":"#《你的日记》-api-整理","children":[]}]}],"relativePath":"pages/posts/export-nideriji-and-import-1diary.md","path":"D:\\\\Learning\\\\myblog\\\\valaxy-blog\\\\imklaus.github.io-main\\\\pages\\\\posts\\\\export-nideriji-and-import-1diary.md","lastUpdated":null}'),h={name:"pages/posts/export-nideriji-and-import-1diary.md",data(){return{data:r,frontmatter:r.frontmatter}},setup(){A("pageData",r)}},u={id:"前言",tabindex:"-1"},_=s("br",null,null,-1),m=s("br",null,null,-1),E=s("p",null,"具体使用方法见项目地址 README。",-1),f=s("p",null,"原本我是想记录下整个导出思路的具体过程，然后跑去写脚本，打算写好再把文章补完，自己用完就咕咕咕了。",-1),g=s("p",null,"所以这里大概只是一半的内容，阁下需要的话直接使用即可，文章应该也就此不会再更新了，",-1),b=s("p",null,"差不多 2019 年 2 月便干了这事，今天终于决定彻底卸载。",-1),k={id:"正文",tabindex:"-1"},B={id:"fiddle-配置",tabindex:"-1"},v=s("p",null,[s("code",null,"Tools > Options...")],-1),x=s("p",null,"跳出弹框",-1),w=s("p",null,[s("code",null,"HTTPS"),l(" 面板")],-1),P=s("p",null,[l("可见默认端口为 "),s("code",null,"8888"),l(" (可自定义)")],-1),j=s("ul",{class:"contains-task-list"},[s("li",{class:"task-list-item"},[s("input",{class:"task-list-item-checkbox",checked:"",disabled:"",type:"checkbox"}),l(" Decrypt HTTPS trafic")])],-1),I=s("p",null,"一路同意，出现新选项",-1),$=s("ul",{class:"contains-task-list"},[s("li",{class:"task-list-item"},[s("input",{class:"task-list-item-checkbox",checked:"",disabled:"",type:"checkbox"}),l(" Ignore server certificate errors (unsafe)")])],-1),T=s("p",null,"点击 OK, 重启。",-1),N={id:"pc-配置",tabindex:"-1"},O=s("p",null,[l("进入 "),s("code",null,"Windows"),l(" 命令行， 输入命令，查看本机 IP 地址 (IPv4 地址)")],-1),J=s("div",{class:"language-bash"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"ipconfig")]),l(`
`),s("span",{class:"line"})])])],-1),S=s("div",{class:"language-bash"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"无线局域网适配器"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"WLAN:")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"   "),s("span",{style:{color:"#FFCB6B"}},"连接特定的"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"DNS"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"后缀"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"   "),s("span",{style:{color:"#FFCB6B"}},"本地链接"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"IPv6"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"地址."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"fe80::9cb2:89dc:46d1:52c7%"),s("span",{style:{color:"#F78C6C"}},"19")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"   "),s("span",{style:{color:"#FFCB6B"}},"IPv4"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"地址"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"192.168.31.87")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"   "),s("span",{style:{color:"#FFCB6B"}},"子网掩码"),s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"255.255.255.0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"   "),s("span",{style:{color:"#FFCB6B"}},"默认网关."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"192.168.31.1")]),l(`
`),s("span",{class:"line"})])])],-1),G={id:"手机配置",tabindex:"-1"},M=s("p",null,[l("进入已连接的局域网 "),s("code",null,"WIFI"),l(" 设置手动代理")],-1),Y=s("p",null,[l("主机名为方才查看到的 "),s("code",null,"IPv4"),l(" 地址 "),s("code",null,"192.168.31.87"),l(" (因人而异) ，端口为方才默认的 "),s("code",null,"8888")],-1),z=s("p",null,[s("img",{src:"https://cos.yunyoujun.cn/blog/posts/use-fiddle-export-your-diary-1.png",alt:"config-phone"})],-1),K=s("p",null,[l("可手机直接访问 IPv4:端口号(例如："),s("code",null,"192.168.31.87:8888"),l(") ，如有返回页面则说明设置成功。")],-1),R={id:"operation",tabindex:"-1"},V=s("p",null,"打开应用，操作刷新。",-1),Z=s("p",null,"观察排除点一些系统的请求，fiddle 界面中含有一条这样的链接。",-1),L=s("div",{class:"language-bash"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"CONNECT"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"http://ohshenghuo.com:"),s("span",{style:{color:"#F78C6C"}},"443")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F78C6C"}},"200"),s("span",{style:{color:"#A6ACCD"}}," Connection "),s("span",{style:{color:"#82AAFF"}},"Established"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"()")]),l(`
`),s("span",{class:"line"})])])],-1),U=s("p",null,[l("访问地址后，我发现使用 "),s("code",null,"你的日记"),l(" 的账号密码便可直接登录。")],-1),W=s("p",null,[l("注销回到登录界面，"),s("code",null,"F12"),l(" 进入谷歌浏览器控制面板进行调试。")],-1),H=s("p",null,[s("code",null,"Sources"),l(" 面板中有网站的静态资源，其中 js 可以直接看出使用了 JQuery ，没有进行混淆压缩，可以直接分析代码。")],-1),q=s("p",null,"其中与登录表单相关的部分代码",-1),Q=s("div",{class:"language-js"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"post"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"/api/login/"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," form"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"serialize"),s("span",{style:{color:"#A6ACCD"}},"()"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD","font-style":"italic"}},"e"),s("span",{style:{color:"#89DDFF"}},")"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"if"),s("span",{style:{color:"#F07178"}}," ("),s("span",{style:{color:"#A6ACCD"}},"e"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"&&"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"e"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"token"),s("span",{style:{color:"#F07178"}},") "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#A6ACCD"}},"OhUtil"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"login"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#A6ACCD"}},"e"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"token"),s("span",{style:{color:"#F07178"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"else"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#82AAFF"}},"$"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"#login-form .msg_error"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"text"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"邮箱或密码输入错误"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"show"),s("span",{style:{color:"#F07178"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#82AAFF"}},"$"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"#login-form .submit"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"removeClass"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"inactive"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"attr"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"value"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"登录"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#F07178"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}},")")]),l(`
`),s("span",{class:"line"})])])],-1),X=s("p",null,[l("由此可见登录 api 为 "),s("code",null,"api/login")],-1),ss=s("code",null,"serialize",-1),ls=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"KEY"),s("th",null,"VALUE")])]),s("tbody",null,[s("tr",null,[s("td",null,"csrfmiddlewaretoken"),s("td",null,"-")]),s("tr",null,[s("td",null,"email"),s("td",null,"-")]),s("tr",null,[s("td",null,"password"),s("td",null,"-")])])],-1),os=s("div",{class:"language-txt"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"csrfmiddlewaretoken=ZcJkWtMdfyjBNKxp3ms0i8REkTJcSKw4&email=xxx&password=xxx")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),es=s("p",null,"表单还含有 csrfmiddlewaretoken （可以在 html 页面中的登录表单看到,如下），用来防止跨站请求伪造。（也就是防止我们使用 Postman，但是我们可以手动加入表单）",-1),ns=s("div",{class:"language-html"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"input")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  "),s("span",{style:{color:"#C792EA"}},"type"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"hidden"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  "),s("span",{style:{color:"#C792EA"}},"name"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"csrfmiddlewaretoken"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  "),s("span",{style:{color:"#C792EA"}},"value"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"ZcJkWtMdfyjBNKxp3ms0i8REkTJcSKw4"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"/>")]),l(`
`),s("span",{class:"line"})])])],-1),as=s("p",null,[s("code",null,"Network"),l(" 面板可查看到请求头内容和表单数据等。（csrfmiddlewaretoken 也可在此处的 Form data 中看到）")],-1),ts=s("p",null,"便可成功获取到 token 等相关信息。",-1),rs=s("p",null,"可继续尝试使用拉取日记等信息，不再赘述。",-1),cs={id:"《你的日记》-api-整理",tabindex:"-1"},ps=s("div",{class:"language-bash"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"GET")]),l(`
`),s("span",{class:"line"})])])],-1),Ds={id:"get-diary",tabindex:"-1"},ys={id:"get-diary-by-id",tabindex:"-1"},is=s("div",{class:"language-bash"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"GET"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"diary/:diaryId")]),l(`
`),s("span",{class:"line"})])])],-1),Fs=s("p",null,"Example",-1),Cs=s("div",{class:"language-bash"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"diary/8808906/")]),l(`
`),s("span",{class:"line"})])])],-1),ds=s("p",null,"Response",-1),As=s("div",{class:"language-json"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C792EA"}},"version"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"3bf998217a5b712eb4d5e3f7a9baf87f"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C792EA"}},"diary"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#FFCB6B"}},"deleteddate"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"None"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#FFCB6B"}},"status"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"0"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#FFCB6B"}},"mood"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'""'),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#FFCB6B"}},"title"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}}," 少女生活小百科"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#FFCB6B"}},"space"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"boy"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#FFCB6B"}},"ts"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"2018-12-22 10:14:52+00:00"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#FFCB6B"}},"content"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"xxx"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#FFCB6B"}},"date_word"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"40天前"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#FFCB6B"}},"weather"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'""'),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#FFCB6B"}},"user"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"177636"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#FFCB6B"}},"createddate"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"2018-12-22"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#FFCB6B"}},"createdtime"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"2018-12-22 10:14:52+00:00"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#FFCB6B"}},"id"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"8808906"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#FFCB6B"}},"weekday"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"星期六"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C792EA"}},"error"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"})])])],-1),hs={id:"get-diary-by-month",tabindex:"-1"},us=s("div",{class:"language-bash"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"GET"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"diary/simple_by_month/:year/:month/")]),l(`
`),s("span",{class:"line"})])])],-1),_s=s("p",null,"Example",-1),ms=s("div",{class:"language-bash"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"diary/simple_by_month/2019/1/")]),l(`
`),s("span",{class:"line"})])])],-1),Es=s("p",null,"Response",-1),fs=s("div",{class:"language-json"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C792EA"}},"version"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"845d9a3c64d93623e05e2ab7735c2804"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C792EA"}},"diaries"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#FFCB6B"}},"2019-01-29"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"9329359"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#FFCB6B"}},"2019-01-02"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"8974069"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#FFCB6B"}},"2019-01-01"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"8966164")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C792EA"}},"error"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"})])])],-1),gs=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"Attribute"),s("th",null,"Description"),s("th",null,"Type"),s("th",null,"Default")])]),s("tbody",null,[s("tr",null,[s("td",null,"diaries"),s("td",null,"包含当月各天日记的 ID"),s("td",null,"Object"),s("td",null,"-")]),s("tr",null,[s("td",null,"yyyy-MM-dd"),s("td",null,"当月日记 ID"),s("td",null,"Number"),s("td",null,"-")])])],-1),bs=s("p",null,"...",-1);function ks(a,Bs,vs,xs,c,ws){const e=d,p=D;return F(),i(p,{frontmatter:c.frontmatter,data:c.data},{"main-content-md":o(()=>[s("h2",u,[l("前言 "),n(e,{class:"header-anchor",href:"#前言","aria-hidden":"true"},{default:o(()=>[l("#")]),_:1})]),s("blockquote",null,[s("p",null,[l("因为「你的日记」开发不是很活跃，且经常出现无法连接等 BUG，而本身也未提供导出功能，所以我写了该"),n(e,{href:"https://github.com/YunYouJun/export-nideriji/archive/master.zip",target:"_blank",rel:"noreferrer"},{default:o(()=>[l("工具")]),_:1}),l("用于迁移至其他日记软件。"),_,l(" 此外因为我之后选择的是「一本日记」，所以也可以转换为「一本日记」的数据格式用于导入。"),m,l(" 我自己也已经成功迁移，所以该项目不会再维护，但如果你也有此需要，希望能对你有所帮助。")])]),s("p",null,[l("GitHub: "),n(e,{href:"https://github.com/YunYouJun/export-nideriji",target:"_blank",rel:"noreferrer"},{default:o(()=>[l("export-nideriji")]),_:1})]),E,f,g,b,C(" more "),s("h2",k,[l("正文 "),n(e,{class:"header-anchor",href:"#正文","aria-hidden":"true"},{default:o(()=>[l("#")]),_:1})]),s("p",null,[l("首先，下载免费的抓包工具 "),n(e,{href:"https://www.telerik.com/fiddler",target:"_blank",rel:"noreferrer"},{default:o(()=>[l("fiddler")]),_:1}),l(" 与请求调试工具 "),n(e,{href:"https://www.getpostman.com/",target:"_blank",rel:"noreferrer"},{default:o(()=>[l("Postman")]),_:1}),l("。")]),s("h3",B,[l("Fiddle 配置 "),n(e,{class:"header-anchor",href:"#fiddle-配置","aria-hidden":"true"},{default:o(()=>[l("#")]),_:1})]),v,x,w,P,j,I,$,T,s("h3",N,[l("PC 配置 "),n(e,{class:"header-anchor",href:"#pc-配置","aria-hidden":"true"},{default:o(()=>[l("#")]),_:1})]),O,J,S,s("h3",G,[l("手机配置 "),n(e,{class:"header-anchor",href:"#手机配置","aria-hidden":"true"},{default:o(()=>[l("#")]),_:1})]),M,Y,z,K,s("h3",R,[l("Operation "),n(e,{class:"header-anchor",href:"#operation","aria-hidden":"true"},{default:o(()=>[l("#")]),_:1})]),V,Z,L,U,W,H,q,Q,X,s("p",null,[l("表单内容进行 "),n(e,{href:"https://api.jquery.com/serialize/#serialize",target:"_blank",rel:"noreferrer"},{default:o(()=>[ss]),_:1}),l(" (jQuery 方法，序列化)")]),ls,os,es,ns,as,s("p",null,[l("接下来使用 "),n(e,{href:"https://www.getpostman.com/",target:"_blank",rel:"noreferrer"},{default:o(()=>[l("Postman")]),_:1}),l(" 进行 API 调试。")]),ts,rs,s("h3",cs,[l("《你的日记》 API 整理 "),n(e,{class:"header-anchor",href:"#《你的日记》-api-整理","aria-hidden":"true"},{default:o(()=>[l("#")]),_:1})]),s("p",null,[l("API Address: "),n(e,{href:"https://ohshenghuo.com/api/",target:"_blank",rel:"noreferrer"},{default:o(()=>[l("https://ohshenghuo.com/api/")]),_:1})]),s("p",null,[n(e,{href:"https://documenter.getpostman.com/view/3326320/Rztmr8pE",target:"_blank",rel:"noreferrer"},{default:o(()=>[l("你的日记 API DOC - Postman")]),_:1})]),ps,s("h4",Ds,[l("Get Diary "),n(e,{class:"header-anchor",href:"#get-diary","aria-hidden":"true"},{default:o(()=>[l("#")]),_:1})]),s("h5",ys,[l("Get Diary By Id "),n(e,{class:"header-anchor",href:"#get-diary-by-id","aria-hidden":"true"},{default:o(()=>[l("#")]),_:1})]),is,Fs,Cs,ds,As,s("h5",hs,[l("Get Diary By Month "),n(e,{class:"header-anchor",href:"#get-diary-by-month","aria-hidden":"true"},{default:o(()=>[l("#")]),_:1})]),us,_s,ms,Es,fs,gs,bs,s("p",null,[l("过程咕咕咕了，你可以直接用我写好的脚本工具 "),n(e,{href:"https://github.com/YunYouJun/export-nideriji",target:"_blank",rel:"noreferrer"},{default:o(()=>[l("export-nideriji")]),_:1}),l("。")])]),"main-header":o(()=>[t(a.$slots,"main-header")]),"main-header-after":o(()=>[t(a.$slots,"main-header-after")]),"main-nav":o(()=>[t(a.$slots,"main-nav")]),"main-content":o(()=>[t(a.$slots,"main-content")]),"main-content-after":o(()=>[t(a.$slots,"main-content-after")]),"main-nav-before":o(()=>[t(a.$slots,"main-nav-before")]),"main-nav-after":o(()=>[t(a.$slots,"main-nav-after")]),comment:o(()=>[t(a.$slots,"comment")]),footer:o(()=>[t(a.$slots,"footer")]),aside:o(()=>[t(a.$slots,"aside")]),"aside-custom":o(()=>[t(a.$slots,"aside-custom")]),default:o(()=>[t(a.$slots,"default")]),_:3},8,["frontmatter","data"])}const Os=y(h,[["render",ks]]);export{Ns as __pageData,Os as default};
