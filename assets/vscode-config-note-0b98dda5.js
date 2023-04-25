import{_ as d}from"./ValaxyMain.vue_vue_type_style_index_0_lang-0fba385b.js";import{_ as p,c as h,w as s,o as u,a as l,b as e,d as n,f as D,r as o,e as y,p as m}from"./app-e529c65b.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-29f566da.js";import"./YunCard.vue_vue_type_style_index_0_lang-3313f385.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-030afe06.js";const sl=JSON.parse('{"title":"VS Code 配置笔记","description":"","frontmatter":{"title":"VS Code 配置笔记","date":"2018-01-29T15:39:20.000Z","updated":"2018-01-29T15:39:20.000Z","tags":["VS Code","笔记"],"categories":["云游的小笔记"]},"headers":[{"level":2,"title":"Intro","slug":"intro","link":"#intro","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[{"level":3,"title":"搜索排除","slug":"搜索排除","link":"#搜索排除","children":[]},{"level":3,"title":"自动换行","slug":"自动换行","link":"#自动换行","children":[]},{"level":3,"title":"TAB 转空格","slug":"tab-转空格","link":"#tab-转空格","children":[]},{"level":3,"title":"终端改为 Git Bash","slug":"终端改为-git-bash","link":"#终端改为-git-bash","children":[]}]},{"level":2,"title":"常用快捷键","slug":"常用快捷键","link":"#常用快捷键","children":[{"level":3,"title":"命令行打开","slug":"命令行打开","link":"#命令行打开","children":[]}]},{"level":2,"title":"常用插件及推荐","slug":"常用插件及推荐","link":"#常用插件及推荐","children":[{"level":3,"title":"Code Time","slug":"code-time","link":"#code-time","children":[]},{"level":3,"title":"Theme","slug":"theme","link":"#theme","children":[]}]},{"level":2,"title":"相关","slug":"相关","link":"#相关","children":[]}],"relativePath":"pages/posts/vscode-config-note.md","path":"D:\\\\Learning\\\\myblog\\\\valaxy-blog\\\\Yuumi0221.github.io-main\\\\pages\\\\posts\\\\vscode-config-note.md","lastUpdated":null}'),i=JSON.parse('{"title":"VS Code 配置笔记","description":"","frontmatter":{"title":"VS Code 配置笔记","date":"2018-01-29T15:39:20.000Z","updated":"2018-01-29T15:39:20.000Z","tags":["VS Code","笔记"],"categories":["云游的小笔记"]},"headers":[{"level":2,"title":"Intro","slug":"intro","link":"#intro","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[{"level":3,"title":"搜索排除","slug":"搜索排除","link":"#搜索排除","children":[]},{"level":3,"title":"自动换行","slug":"自动换行","link":"#自动换行","children":[]},{"level":3,"title":"TAB 转空格","slug":"tab-转空格","link":"#tab-转空格","children":[]},{"level":3,"title":"终端改为 Git Bash","slug":"终端改为-git-bash","link":"#终端改为-git-bash","children":[]}]},{"level":2,"title":"常用快捷键","slug":"常用快捷键","link":"#常用快捷键","children":[{"level":3,"title":"命令行打开","slug":"命令行打开","link":"#命令行打开","children":[]}]},{"level":2,"title":"常用插件及推荐","slug":"常用插件及推荐","link":"#常用插件及推荐","children":[{"level":3,"title":"Code Time","slug":"code-time","link":"#code-time","children":[]},{"level":3,"title":"Theme","slug":"theme","link":"#theme","children":[]}]},{"level":2,"title":"相关","slug":"相关","link":"#相关","children":[]}],"relativePath":"pages/posts/vscode-config-note.md","path":"D:\\\\Learning\\\\myblog\\\\valaxy-blog\\\\Yuumi0221.github.io-main\\\\pages\\\\posts\\\\vscode-config-note.md","lastUpdated":null}'),C={name:"pages/posts/vscode-config-note.md",data(){return{data:i,frontmatter:i.frontmatter}},setup(){m("pageData",i)}},F={id:"intro",tabindex:"-1"},f=l("p",null,[e("记录一些 "),l("code",null,"VS Code"),e(" 的一些常用配置。")],-1),_={id:"配置",tabindex:"-1"},g=l("p",null,"文件 -> 首选项 -> 设置",-1),A=l("ul",null,[l("li",null,[l("p",null,[e("输入到右侧 "),l("code",null,"用户设置"),e(" 里覆盖默认设置即可")])]),l("li",null,[l("p",null,[e("工作区独立配置 "),l("code",null,"setting.json")])])],-1),b=l("p",null,[l("code",null,"Ctrl+Shift+P"),e(" 输入 "),l("code",null,"workspace setting"),e(", 回车进入。 若此前不存在，则会在当前工作区的文件夹下自动建立 "),l("code",null,".vscode/setting.json"),e(",可对工作区进行独立配置。")],-1),v=l("div",{class:"language-json"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"{}")]),e(`
`),l("span",{class:"line"})])])],-1),k={id:"搜索排除",tabindex:"-1"},x=l("p",null,"全局搜索时，不去搜索某些文件夹。",-1),E=l("div",{class:"language-json"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"{")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#676E95","font-style":"italic"}},"// ...")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C792EA"}},"search.exclude"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#FFCB6B"}},"**/node_modules"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"true,")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#FFCB6B"}},"**/bower_components"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"true,")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#FFCB6B"}},"**/dist"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"true,")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#FFCB6B"}},"**/.cache"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"true")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"}")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#676E95","font-style":"italic"}},"// ...")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"}")]),e(`
`),l("span",{class:"line"})])])],-1),B={id:"自动换行",tabindex:"-1"},S=l("div",{class:"language-json"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"{")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#676E95","font-style":"italic"}},"// ...")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C792EA"}},"editor.wordWrap"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"on"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#676E95","font-style":"italic"}},"// 超出显示范围，自动换行（只是显示效果上，并没有真正换行）")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#676E95","font-style":"italic"}},"// ...")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"}")]),e(`
`),l("span",{class:"line"})])])],-1),T={id:"tab-转空格",tabindex:"-1"},w=l("div",{class:"language-json"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"{")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#676E95","font-style":"italic"}},"// ...")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C792EA"}},"editor.tabSize"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#F78C6C"}},"2"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#676E95","font-style":"italic"}},"// tab 键替换为 2 空格")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#676E95","font-style":"italic"}},"// ...")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"}")]),e(`
`),l("span",{class:"line"})])])],-1),$={id:"终端改为-git-bash",tabindex:"-1"},V=l("div",{class:"language-json"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"{")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#676E95","font-style":"italic"}},"// ...")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C792EA"}},"terminal.integrated.shell.windows"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"C:"),l("span",{style:{color:"#A6ACCD"}},"\\\\"),l("span",{style:{color:"#C3E88D"}},"Program Files"),l("span",{style:{color:"#A6ACCD"}},"\\\\"),l("span",{style:{color:"#C3E88D"}},"Git"),l("span",{style:{color:"#A6ACCD"}},"\\\\"),l("span",{style:{color:"#C3E88D"}},"bin"),l("span",{style:{color:"#A6ACCD"}},"\\\\"),l("span",{style:{color:"#C3E88D"}},"bash.exe"),l("span",{style:{color:"#89DDFF"}},'"')]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"}")]),e(`
`),l("span",{class:"line"})])])],-1),N={id:"常用快捷键",tabindex:"-1"},j=l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"快捷键"),l("th",null,"命令"),l("th",null,"位置")])]),l("tbody",null,[l("tr",null,[l("td",null,[l("code",null,"Ctrl+Shift+N")]),l("td",null,"新建窗口"),l("td",null,"文件 -> 新建窗口")]),l("tr",null,[l("td",null,[l("code",null,"Ctrl+K Ctrl+S")]),l("td",null,"键盘快捷方式"),l("td",null,"文件 -> 首选项 -> 键盘快捷方式")]),l("tr",null,[l("td",null,[l("code",null,"Ctrl+Shift+P")]),l("td",null,"显示所有命令"),l("td")]),l("tr",null,[l("td",null,[l("code",null,"Ctrl"),e(" + "),l("code",null,"`")]),l("td",null,"切换集成终端"),l("td")]),l("tr",null,[l("td",null,[l("code",null,"Shift"),e("+"),l("code",null,"Cmd"),e("+"),l("code",null,"E")]),l("td",null,"激活资源管理器窗口（定位到文件所在位置）"),l("td")])])],-1),P={id:"命令行打开",tabindex:"-1"},G=l("div",{class:"language-bash"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"code"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"xxx.xxx")]),e(`
`),l("span",{class:"line"})])])],-1),I={id:"常用插件及推荐",tabindex:"-1"},Z={id:"code-time",tabindex:"-1"},L=l("p",null,"统计你的编码时间",-1),M={id:"theme",tabindex:"-1"},q=l("p",null,"图标和配色很漂亮",-1),J={id:"相关",tabindex:"-1"},K=l("hr",null,null,-1),O=l("p",null,"To Be Continued.",-1);function U(a,Y,z,W,r,H){const t=y,c=d;return u(),h(c,{frontmatter:r.frontmatter,data:r.data},{"main-content-md":s(()=>[l("h2",F,[e("Intro "),n(t,{class:"header-anchor",href:"#intro","aria-hidden":"true"},{default:s(()=>[e("#")]),_:1})]),f,D(" more "),l("h2",_,[e("配置 "),n(t,{class:"header-anchor",href:"#配置","aria-hidden":"true"},{default:s(()=>[e("#")]),_:1})]),g,A,b,v,l("h3",k,[e("搜索排除 "),n(t,{class:"header-anchor",href:"#搜索排除","aria-hidden":"true"},{default:s(()=>[e("#")]),_:1})]),x,E,l("h3",B,[e("自动换行 "),n(t,{class:"header-anchor",href:"#自动换行","aria-hidden":"true"},{default:s(()=>[e("#")]),_:1})]),S,l("h3",T,[e("TAB 转空格 "),n(t,{class:"header-anchor",href:"#tab-转空格","aria-hidden":"true"},{default:s(()=>[e("#")]),_:1})]),w,l("h3",$,[e("终端改为 Git Bash "),n(t,{class:"header-anchor",href:"#终端改为-git-bash","aria-hidden":"true"},{default:s(()=>[e("#")]),_:1})]),V,l("h2",N,[e("常用快捷键 "),n(t,{class:"header-anchor",href:"#常用快捷键","aria-hidden":"true"},{default:s(()=>[e("#")]),_:1})]),j,l("h3",P,[e("命令行打开 "),n(t,{class:"header-anchor",href:"#命令行打开","aria-hidden":"true"},{default:s(()=>[e("#")]),_:1})]),G,l("h2",I,[e("常用插件及推荐 "),n(t,{class:"header-anchor",href:"#常用插件及推荐","aria-hidden":"true"},{default:s(()=>[e("#")]),_:1})]),l("h3",Z,[n(t,{href:"https://marketplace.visualstudio.com/items?itemName=softwaredotcom.swdc-vscode",target:"_blank",rel:"noreferrer"},{default:s(()=>[e("Code Time")]),_:1}),e(),n(t,{class:"header-anchor",href:"#code-time","aria-hidden":"true"},{default:s(()=>[e("#")]),_:1})]),L,l("p",null,[e("在线查看："),n(t,{href:"https://app.software.com/",target:"_blank",rel:"noreferrer"},{default:s(()=>[e("https://app.software.com/")]),_:1})]),l("h3",M,[e("Theme "),n(t,{class:"header-anchor",href:"#theme","aria-hidden":"true"},{default:s(()=>[e("#")]),_:1})]),l("ul",null,[l("li",null,[n(t,{href:"https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme",target:"_blank",rel:"noreferrer"},{default:s(()=>[e("Material Theme")]),_:1})]),l("li",null,[n(t,{href:"https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme",target:"_blank",rel:"noreferrer"},{default:s(()=>[e("Material Icon Theme")]),_:1})])]),q,l("h2",J,[e("相关 "),n(t,{class:"header-anchor",href:"#相关","aria-hidden":"true"},{default:s(()=>[e("#")]),_:1})]),l("ul",null,[l("li",null,[n(t,{href:"https://devblogs.microsoft.com/cppblog/building-your-c-application-with-visual-studio-code/",target:"_blank",rel:"noreferrer"},{default:s(()=>[e("Building your C++ application with Visual Studio Code")]),_:1})]),l("li",null,[n(t,{href:"https://www.yuque.com/docs/share/6c77dec1-bd23-4a7b-a220-b598d9fe84f0",target:"_blank",rel:"noreferrer"},{default:s(()=>[e("Python 配置")]),_:1})])]),K,O]),"main-header":s(()=>[o(a.$slots,"main-header")]),"main-header-after":s(()=>[o(a.$slots,"main-header-after")]),"main-nav":s(()=>[o(a.$slots,"main-nav")]),"main-content":s(()=>[o(a.$slots,"main-content")]),"main-content-after":s(()=>[o(a.$slots,"main-content-after")]),"main-nav-before":s(()=>[o(a.$slots,"main-nav-before")]),"main-nav-after":s(()=>[o(a.$slots,"main-nav-after")]),comment:s(()=>[o(a.$slots,"comment")]),footer:s(()=>[o(a.$slots,"footer")]),aside:s(()=>[o(a.$slots,"aside")]),"aside-custom":s(()=>[o(a.$slots,"aside-custom")]),default:s(()=>[o(a.$slots,"default")]),_:3},8,["frontmatter","data"])}const tl=p(C,[["render",U]]);export{sl as __pageData,tl as default};
