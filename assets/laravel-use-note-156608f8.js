import{_ as d}from"./ValaxyMain.vue_vue_type_style_index_0_lang-598c4c24.js";import{_ as p,c as h,w as a,o as u,f as m,a as e,b as l,d as t,r as o,e as f,p as y}from"./app-3de664ca.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-c79ef449.js";import"./YunCard.vue_vue_type_style_index_0_lang-937cbb65.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-8d2d8232.js";const I=JSON.parse('{"title":"Laravel 使用笔记","description":"","frontmatter":{"title":"Laravel 使用笔记","tags":["PHP","学习","Laravel"],"categories":["云游的小笔记"],"date":"2017-08-21T16:26:58.000Z","updated":"2017-08-21T16:26:58.000Z"},"headers":[{"level":2,"title":"线上部署","slug":"线上部署","link":"#线上部署","children":[{"level":3,"title":"相关过程","slug":"相关过程","link":"#相关过程","children":[]},{"level":3,"title":"关键步骤","slug":"关键步骤","link":"#关键步骤","children":[]}]},{"level":2,"title":"FAQ","slug":"faq","link":"#faq","children":[{"level":3,"title":"数据库字符长度过长","slug":"数据库字符长度过长","link":"#数据库字符长度过长","children":[]},{"level":3,"title":"停止维护时间戳","slug":"停止维护时间戳","link":"#停止维护时间戳","children":[]}]},{"level":2,"title":"模版插件","slug":"模版插件","link":"#模版插件","children":[{"level":3,"title":"Laravel-admin","slug":"laravel-admin","link":"#laravel-admin","children":[]}]}],"relativePath":"pages/posts/laravel-use-note.md","path":"D:\\\\Learning\\\\myblog\\\\valaxy-blog\\\\imLKlauS.github.io-valaxy\\\\pages\\\\posts\\\\laravel-use-note.md","lastUpdated":null}'),r=JSON.parse('{"title":"Laravel 使用笔记","description":"","frontmatter":{"title":"Laravel 使用笔记","tags":["PHP","学习","Laravel"],"categories":["云游的小笔记"],"date":"2017-08-21T16:26:58.000Z","updated":"2017-08-21T16:26:58.000Z"},"headers":[{"level":2,"title":"线上部署","slug":"线上部署","link":"#线上部署","children":[{"level":3,"title":"相关过程","slug":"相关过程","link":"#相关过程","children":[]},{"level":3,"title":"关键步骤","slug":"关键步骤","link":"#关键步骤","children":[]}]},{"level":2,"title":"FAQ","slug":"faq","link":"#faq","children":[{"level":3,"title":"数据库字符长度过长","slug":"数据库字符长度过长","link":"#数据库字符长度过长","children":[]},{"level":3,"title":"停止维护时间戳","slug":"停止维护时间戳","link":"#停止维护时间戳","children":[]}]},{"level":2,"title":"模版插件","slug":"模版插件","link":"#模版插件","children":[{"level":3,"title":"Laravel-admin","slug":"laravel-admin","link":"#laravel-admin","children":[]}]}],"relativePath":"pages/posts/laravel-use-note.md","path":"D:\\\\Learning\\\\myblog\\\\valaxy-blog\\\\imLKlauS.github.io-valaxy\\\\pages\\\\posts\\\\laravel-use-note.md","lastUpdated":null}'),g={name:"pages/posts/laravel-use-note.md",data(){return{data:r,frontmatter:r.frontmatter}},setup(){y("pageData",r)}},_=e("p",null,"Laravel 框架使用过程中的一些笔记。",-1),C={id:"线上部署",tabindex:"-1"},v={id:"相关过程",tabindex:"-1"},D=e("hr",null,null,-1),A={id:"关键步骤",tabindex:"-1"},F={id:"安装-composer",tabindex:"-1"},b={id:"git-部署",tabindex:"-1"},k=e("ul",null,[e("li",null,[l("安装 git，"),e("code",null,"$ sudo apt install git"),l("。")]),e("li",null,[l("创建 ssh-key，"),e("code",null,'$ ssh-keygen -t rsa -C "邮箱"'),l(",一路回车。")]),e("li",null,[e("code",null,"$ cat ~/.ssh/id_rsa.pub"),l(" 复制公钥到 github 上。添加 ssh key。")]),e("li",null,[e("code",null,"$ cd /home/wwwroot"),l(" 到放置项目代码的文件夹")]),e("li",null,[e("code",null,"$ git clone git@github.com:用户名/项目名.git"),l("，从 github 获取线上代码。")]),e("li",null,[e("code",null,"$ cp .env.example .env"),l(" 对.env 文件并进行配置。（app_key,database,mail 等）")]),e("li",null,[e("code",null,"$ composer install"),l(" 安装相关包")]),e("li",null,[e("code",null,"$ php artisan migrate"),l(" 安装数据库迁移")])],-1),$={id:"faq",tabindex:"-1"},L={id:"数据库字符长度过长",tabindex:"-1"},S=e("div",{class:"language-bash"},[e("span",{class:"copy"}),e("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F78C6C"}},"1071"),e("span",{style:{color:"#A6ACCD"}}," Specified key was too long"),e("span",{style:{color:"#89DDFF"}},";"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#FFCB6B"}},"max"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"key"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"length"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"is"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#F78C6C"}},"767"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"bytes")]),l(`
`),e("span",{class:"line"})])])],-1),x=e("p",null,"MySql 支持的 utf8 编码最大字符长度为 3 字节，如果遇到 4 字节的宽字符就会出现插入异常。三个字节 UTF-8 最大能编码的 Unicode 字符是 0xffff ，即 Unicode 中的基本多文种平面（BMP）。因而包括 Emoji 表情（Emoji 是一种特殊的 Unicode 编码）在内的非基本多文种平面的 Unicode 字符都无法使用 MySql 的 utf8 字符集存储。",-1),E=e("p",null,"这也应该就是 Laravel 5.4 改用 4 字节长度的 utf8mb4 字符编码的原因之一。不过要注意的是，只有 MySql 5.5.3 版本以后才开始支持 utf8mb4 字符编码（查看版本：selection version();）。如果 MySql 版本过低，需要进行版本更新。",-1),B={id:"解决方案（二选一）",tabindex:"-1"},q=e("ol",null,[e("li",null,"升级 MySql 版本到 5.5.3 以上。"),e("li",null,[l("手动配置迁移命令 migrate 生成的默认字符串长度，在 "),e("code",null,"app\\Providers\\AppServiceProders"),l(" 中调用 "),e("code",null,"Schema::defaultStringLength"),l(" 方法来实现配置：")])],-1),w=e("div",{class:"language-php"},[e("span",{class:"copy"}),e("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F78C6C"}},"use"),e("span",{style:{color:"#FFCB6B"}}," "),e("span",{style:{color:"#A6ACCD"}},"Illuminate"),e("span",{style:{color:"#89DDFF"}},"\\"),e("span",{style:{color:"#A6ACCD"}},"Support"),e("span",{style:{color:"#89DDFF"}},"\\"),e("span",{style:{color:"#A6ACCD"}},"Facades"),e("span",{style:{color:"#89DDFF"}},"\\"),e("span",{style:{color:"#A6ACCD"}},"Schema"),e("span",{style:{color:"#89DDFF"}},";")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#676E95","font-style":"italic"}},"/**")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#676E95","font-style":"italic"}},"* Bootstrap any application services.")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#676E95","font-style":"italic"}},"*")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#676E95","font-style":"italic"}},"* "),e("span",{style:{color:"#F78C6C","font-style":"italic"}},"@return"),e("span",{style:{color:"#676E95","font-style":"italic"}}," "),e("span",{style:{color:"#F78C6C","font-style":"italic"}},"void")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#676E95","font-style":"italic"}},"*/")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C792EA"}},"public"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C792EA"}},"function"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#82AAFF"}},"boot"),e("span",{style:{color:"#89DDFF"}},"()")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"   "),e("span",{style:{color:"#FFCB6B"}},"Schema"),e("span",{style:{color:"#89DDFF"}},"::"),e("span",{style:{color:"#82AAFF"}},"defaultStringLength"),e("span",{style:{color:"#89DDFF"}},"("),e("span",{style:{color:"#F78C6C"}},"191"),e("span",{style:{color:"#89DDFF"}},");")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),e("span",{class:"line"})])])],-1),P={id:"停止维护时间戳",tabindex:"-1"},M=e("div",{class:"language-php"},[e("span",{class:"copy"}),e("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#C792EA"}},"class"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#FFCB6B"}},"Xxx"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C792EA"}},"extends"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#FFCB6B"}},"Model"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#C792EA"}},"public"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"$"),e("span",{style:{color:"#A6ACCD"}},"timestamps"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"false;")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),e("span",{class:"line"})])])],-1),N={id:"模版插件",tabindex:"-1"},U={id:"laravel-admin",tabindex:"-1"},T=e("p",null,"To Be Continued.",-1);function V(n,z,Z,H,i,Q){const s=f,c=d;return u(),h(c,{frontmatter:i.frontmatter,data:i.data},{"main-content-md":a(()=>[_,m(" more "),e("h2",C,[l("线上部署 "),t(s,{class:"header-anchor",href:"#线上部署","aria-hidden":"true"},{default:a(()=>[l("#")]),_:1})]),e("h3",v,[l("相关过程 "),t(s,{class:"header-anchor",href:"#相关过程","aria-hidden":"true"},{default:a(()=>[l("#")]),_:1})]),e("ol",null,[e("li",null,[t(s,{href:"https://www.yuque.com/docs/share/806b4c35-788a-4537-87d7-27c6e5b408d9",target:"_blank",rel:"noreferrer"},{default:a(()=>[l("LNMP 一键安装包")]),_:1})]),e("li",null,[t(s,{href:"https://www.yuque.com/docs/share/60072885-d8d1-4ec4-9553-ad8e37c5d866",target:"_blank",rel:"noreferrer"},{default:a(()=>[l("记 LNMP 一键安装后 Laravel 线上部署的坑")]),_:1})])]),D,e("h3",A,[l("关键步骤 "),t(s,{class:"header-anchor",href:"#关键步骤","aria-hidden":"true"},{default:a(()=>[l("#")]),_:1})]),e("h4",F,[l("安装 composer "),t(s,{class:"header-anchor",href:"#安装-composer","aria-hidden":"true"},{default:a(()=>[l("#")]),_:1})]),e("ul",null,[e("li",null,[t(s,{href:"https://getcomposer.org/",target:"_blank",rel:"noreferrer"},{default:a(()=>[l("Composer 官网")]),_:1})]),e("li",null,[t(s,{href:"https://developer.aliyun.com/composer",target:"_blank",rel:"noreferrer"},{default:a(()=>[l("阿里云 Composer 全量镜像")]),_:1})])]),e("h4",b,[l("git 部署 "),t(s,{class:"header-anchor",href:"#git-部署","aria-hidden":"true"},{default:a(()=>[l("#")]),_:1})]),k,e("h2",$,[l("FAQ "),t(s,{class:"header-anchor",href:"#faq","aria-hidden":"true"},{default:a(()=>[l("#")]),_:1})]),e("h3",L,[l("数据库字符长度过长 "),t(s,{class:"header-anchor",href:"#数据库字符长度过长","aria-hidden":"true"},{default:a(()=>[l("#")]),_:1})]),e("p",null,[l("参见 "),t(s,{href:"https://segmentfault.com/a/1190000008416200",target:"_blank",rel:"noreferrer"},{default:a(()=>[l("Laravel 5.4 migrate 时报错: Specified key was too long error")]),_:1})]),S,x,E,e("h4",B,[l("解决方案（二选一） "),t(s,{class:"header-anchor",href:"#解决方案（二选一）","aria-hidden":"true"},{default:a(()=>[l("#")]),_:1})]),q,w,e("h3",P,[l("停止维护时间戳 "),t(s,{class:"header-anchor",href:"#停止维护时间戳","aria-hidden":"true"},{default:a(()=>[l("#")]),_:1})]),M,e("h2",N,[l("模版插件 "),t(s,{class:"header-anchor",href:"#模版插件","aria-hidden":"true"},{default:a(()=>[l("#")]),_:1})]),e("h3",U,[l("Laravel-admin "),t(s,{class:"header-anchor",href:"#laravel-admin","aria-hidden":"true"},{default:a(()=>[l("#")]),_:1})]),e("ul",null,[e("li",null,[l("GitHub: "),t(s,{href:"https://github.com/z-song/laravel-admin",target:"_blank",rel:"noreferrer"},{default:a(()=>[l("https://github.com/z-song/laravel-admin")]),_:1})]),e("li",null,[l("中文文档： "),t(s,{href:"http://laravel-admin.org/docs/#/zh/",target:"_blank",rel:"noreferrer"},{default:a(()=>[l("http://laravel-admin.org/docs/#/zh/")]),_:1})]),e("li",null,[l("官网："),t(s,{href:"http://laravel-admin.org",target:"_blank",rel:"noreferrer"},{default:a(()=>[l("http://laravel-admin.org")]),_:1})]),e("li",null,[l("Demo: "),t(s,{href:"http://laravel-admin.org/demo/auth/login",target:"_blank",rel:"noreferrer"},{default:a(()=>[l("http://laravel-admin.org/demo/auth/login")]),_:1})])]),T]),"main-header":a(()=>[o(n.$slots,"main-header")]),"main-header-after":a(()=>[o(n.$slots,"main-header-after")]),"main-nav":a(()=>[o(n.$slots,"main-nav")]),"main-content":a(()=>[o(n.$slots,"main-content")]),"main-content-after":a(()=>[o(n.$slots,"main-content-after")]),"main-nav-before":a(()=>[o(n.$slots,"main-nav-before")]),"main-nav-after":a(()=>[o(n.$slots,"main-nav-after")]),comment:a(()=>[o(n.$slots,"comment")]),footer:a(()=>[o(n.$slots,"footer")]),aside:a(()=>[o(n.$slots,"aside")]),"aside-custom":a(()=>[o(n.$slots,"aside-custom")]),default:a(()=>[o(n.$slots,"default")]),_:3},8,["frontmatter","data"])}const X=p(g,[["render",V]]);export{I as __pageData,X as default};
