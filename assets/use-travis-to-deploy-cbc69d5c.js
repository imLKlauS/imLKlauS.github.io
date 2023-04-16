import{_ as i}from"./ValaxyMain.vue_vue_type_style_index_0_lang-5598e939.js";import{_ as C,c as y,w as e,o as d,a as s,d as t,b as l,f as D,r as a,e as h,p as u}from"./app-0c331e71.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-e0f4903f.js";import"./YunCard.vue_vue_type_style_index_0_lang-3447adc8.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-4bf7ae69.js";const L=JSON.parse('{"title":"Travis-CI 持续集成部署","description":"","frontmatter":{"title":"Travis-CI 持续集成部署","date":"2018-05-24T15:04:42.000Z","updated":"2018-06-10T15:04:42.000Z","tags":["笔记"],"categories":["云游的小笔记"]},"headers":[{"level":2,"title":"Intro","slug":"intro","link":"#intro","children":[]},{"level":2,"title":"加密 Token","slug":"加密-token","link":"#加密-token","children":[]},{"level":2,"title":"Token","slug":"token","link":"#token","children":[{"level":3,"title":"GitHub Pages","slug":"github-pages","link":"#github-pages","children":[]},{"level":3,"title":"Coding Pages","slug":"coding-pages","link":"#coding-pages","children":[]}]}],"relativePath":"pages/posts/use-travis-to-deploy.md","path":"D:\\\\Learning\\\\myblog\\\\valaxy-blog\\\\imLKlauS.github.io-valaxy\\\\pages\\\\posts\\\\use-travis-to-deploy.md","lastUpdated":null}'),r=JSON.parse('{"title":"Travis-CI 持续集成部署","description":"","frontmatter":{"title":"Travis-CI 持续集成部署","date":"2018-05-24T15:04:42.000Z","updated":"2018-06-10T15:04:42.000Z","tags":["笔记"],"categories":["云游的小笔记"]},"headers":[{"level":2,"title":"Intro","slug":"intro","link":"#intro","children":[]},{"level":2,"title":"加密 Token","slug":"加密-token","link":"#加密-token","children":[]},{"level":2,"title":"Token","slug":"token","link":"#token","children":[{"level":3,"title":"GitHub Pages","slug":"github-pages","link":"#github-pages","children":[]},{"level":3,"title":"Coding Pages","slug":"coding-pages","link":"#coding-pages","children":[]}]}],"relativePath":"pages/posts/use-travis-to-deploy.md","path":"D:\\\\Learning\\\\myblog\\\\valaxy-blog\\\\imLKlauS.github.io-valaxy\\\\pages\\\\posts\\\\use-travis-to-deploy.md","lastUpdated":null}'),A={name:"pages/posts/use-travis-to-deploy.md",data(){return{data:r,frontmatter:r.frontmatter}},setup(){u("pageData",r)}},g=s("blockquote",null,[s("p",null,"Travis CI - Test and Deploy Your Code with Confidence")],-1),F={id:"intro",tabindex:"-1"},m=s("p",null,"正如字面上的意思，Travis 可以用来测试和帮助自己部署网站。",-1),_=s("hr",null,null,-1),f=s("div",{class:"language-bash"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"language:"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"node_js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"node_js:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#FFCB6B"}},"-"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"lts/"),s("span",{style:{color:"#A6ACCD"}},"*")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"cache:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#FFCB6B"}},"directories:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#FFCB6B"}},"-"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"node_modules"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"branches:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#FFCB6B"}},"only:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#FFCB6B"}},"-"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"master")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"addons:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#FFCB6B"}},"apt:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#FFCB6B"}},"packages:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#FFCB6B"}},"-"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"sshpass")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"install:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#FFCB6B"}},"-"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"yarn"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"install")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"script:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#FFCB6B"}},"-"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"npm"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"run"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"build")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"after_success:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#FFCB6B"}},"-"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"export"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"SSHPASS="),s("span",{style:{color:"#A6ACCD"}},"$VPS_PWD")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#FFCB6B"}},"-"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"sshpass"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"-e"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"ssh"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"-o"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"stricthostkeychecking=no"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"root@139.199.22.90"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"sh /data/wwwroot/coc.yunyoujun.cn/deploy-ci.sh "),s("span",{style:{color:"#A6ACCD"}},"$TOKEN"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"})])])],-1),B={id:"加密-token",tabindex:"-1"},E=s("div",{class:"language-bash"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"travis"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"encrypt"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"-r"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"YunYouJun/repo"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"GH_TOKEN=XXX")]),l(`
`),s("span",{class:"line"})])])],-1),b={id:"token",tabindex:"-1"},k={id:"github-pages",tabindex:"-1"},v=s("div",{class:"language-bash"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"git"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"push"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"--force"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"https://"),s("span",{style:{color:"#89DDFF"}},"${"),s("span",{style:{color:"#C3E88D"}},"GH_TOKEN"),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#C3E88D"}},"@"),s("span",{style:{color:"#89DDFF"}},"${"),s("span",{style:{color:"#C3E88D"}},"GH_REF"),s("span",{style:{color:"#89DDFF"}},'}"'),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"master:master")]),l(`
`),s("span",{class:"line"})])])],-1),T={id:"coding-pages",tabindex:"-1"},$=s("p",null,[l("Coding 还需要加 用户名 前缀 "),s("code",null,"https://xxx:${CODING_TOKEN}@${CD_REF}")],-1),w=s("div",{class:"language-bash"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"git"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"push"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"--force"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"https://yunyoujun:"),s("span",{style:{color:"#89DDFF"}},"${"),s("span",{style:{color:"#C3E88D"}},"CODING_TOKEN"),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#C3E88D"}},"@"),s("span",{style:{color:"#89DDFF"}},"${"),s("span",{style:{color:"#C3E88D"}},"CD_REF"),s("span",{style:{color:"#89DDFF"}},'}"'),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"master:master")]),l(`
`),s("span",{class:"line"})])])],-1),N=s("div",{class:"language-yaml"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"env"),s("span",{style:{color:"#89DDFF"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#F07178"}},"global"),s("span",{style:{color:"#89DDFF"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"-"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F07178"}},"GH_REF"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"github.com/YunYouJun/yunyoujun.github.io.git")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"-"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F07178"}},"CD_REF"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"git.dev.tencent.com/YunYouJun/yunyoujun.coding.me.git")]),l(`
`),s("span",{class:"line"})])])],-1),P=s("hr",null,null,-1),x=s("p",null,"To Be Continued.",-1);function G(o,I,H,S,c,O){const n=h,p=i;return d(),y(p,{frontmatter:c.frontmatter,data:c.data},{"main-content-md":e(()=>[g,s("p",null,[t(n,{href:"https://www.travis-ci.org/",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("travis-ci.org")]),_:1})]),D(" more "),s("h2",F,[l("Intro "),t(n,{class:"header-anchor",href:"#intro","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),m,s("p",null,[l("一般自己闲来会写些并无卵用的小玩意儿，纯静态的页面话，便会部署在 "),t(n,{href:"https://pages.github.com/",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("GitHub Pages")]),_:1}),l(" 上。 而动态网站则部署在自己的服务器上，又或是如下有一些可以部署测试的动态服务。（当然那样的话，自定义域名之类的服务就要收费了。）")]),s("ul",null,[s("li",null,[t(n,{href:"https://www.heroku.com/",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("heroku")]),_:1})]),s("li",null,[t(n,{href:"https://zeit.co/now",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("now.sh")]),_:1})])]),_,f,s("h2",B,[l("加密 Token "),t(n,{class:"header-anchor",href:"#加密-token","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),s("p",null,[l("使用 "),t(n,{href:"https://github.com/travis-ci/travis.rb#readme",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("Travis CI")]),_:1}),l(" 的命令行工具加密 GitHub 的 Personal Access Token。")]),E,s("h2",b,[l("Token "),t(n,{class:"header-anchor",href:"#token","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),s("h3",k,[l("GitHub Pages "),t(n,{class:"header-anchor",href:"#github-pages","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),v,s("h3",T,[l("Coding Pages "),t(n,{class:"header-anchor",href:"#coding-pages","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),$,w,N,P,x]),"main-header":e(()=>[a(o.$slots,"main-header")]),"main-header-after":e(()=>[a(o.$slots,"main-header-after")]),"main-nav":e(()=>[a(o.$slots,"main-nav")]),"main-content":e(()=>[a(o.$slots,"main-content")]),"main-content-after":e(()=>[a(o.$slots,"main-content-after")]),"main-nav-before":e(()=>[a(o.$slots,"main-nav-before")]),"main-nav-after":e(()=>[a(o.$slots,"main-nav-after")]),comment:e(()=>[a(o.$slots,"comment")]),footer:e(()=>[a(o.$slots,"footer")]),aside:e(()=>[a(o.$slots,"aside")]),"aside-custom":e(()=>[a(o.$slots,"aside-custom")]),default:e(()=>[a(o.$slots,"default")]),_:3},8,["frontmatter","data"])}const R=C(A,[["render",G]]);export{L as __pageData,R as default};
