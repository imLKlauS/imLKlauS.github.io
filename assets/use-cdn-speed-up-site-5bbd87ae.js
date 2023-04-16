import{_ as c}from"./ValaxyMain.vue_vue_type_style_index_0_lang-5598e939.js";import{_ as d,c as h,w as t,o as p,f as _,a as e,b as l,d as s,r as o,e as f,p as g}from"./app-0c331e71.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-e0f4903f.js";import"./YunCard.vue_vue_type_style_index_0_lang-3447adc8.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-4bf7ae69.js";const Oe=JSON.parse('{"title":"使用 CDN 加速你的 GitHub Pages 网站","description":"","frontmatter":{"title":"使用 CDN 加速你的 GitHub Pages 网站","date":"2020-02-05T20:28:57.000Z","updated":"2020-02-16T20:28:57.000Z","tags":["CDN","笔记","GitHub Pages"],"categories":["云游的小笔记"]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"步骤","slug":"步骤","link":"#步骤","children":[{"level":3,"title":"添加自己的域名","slug":"添加自己的域名","link":"#添加自己的域名","children":[]},{"level":3,"title":"设置源站","slug":"设置源站","link":"#设置源站","children":[]},{"level":3,"title":"回源协议","slug":"回源协议","link":"#回源协议","children":[]},{"level":3,"title":"设置 CNAME","slug":"设置-cname","link":"#设置-cname","children":[]},{"level":3,"title":"配置缓存","slug":"配置缓存","link":"#配置缓存","children":[]}]},{"level":2,"title":"后话","slug":"后话","link":"#后话","children":[]},{"level":2,"title":"FAQ","slug":"faq","link":"#faq","children":[{"level":3,"title":"CNAME 与 MX 记录冲突导致邮件丢失","slug":"cname-与-mx-记录冲突导致邮件丢失","link":"#cname-与-mx-记录冲突导致邮件丢失","children":[]},{"level":3,"title":"CDN 刷新","slug":"cdn-刷新","link":"#cdn-刷新","children":[]}]},{"level":2,"title":"后后话","slug":"后后话","link":"#后后话","children":[{"level":3,"title":"2020-03-26","slug":"_2020-03-26","link":"#_2020-03-26","children":[]},{"level":3,"title":"2020-04-17","slug":"_2020-04-17","link":"#_2020-04-17","children":[]},{"level":3,"title":"2020-05-24","slug":"_2020-05-24","link":"#_2020-05-24","children":[]},{"level":3,"title":"2021-05-27","slug":"_2021-05-27","link":"#_2021-05-27","children":[]}]}],"relativePath":"pages/posts/use-cdn-speed-up-site.md","path":"D:\\\\Learning\\\\myblog\\\\valaxy-blog\\\\imLKlauS.github.io-valaxy\\\\pages\\\\posts\\\\use-cdn-speed-up-site.md","lastUpdated":null}'),r=JSON.parse('{"title":"使用 CDN 加速你的 GitHub Pages 网站","description":"","frontmatter":{"title":"使用 CDN 加速你的 GitHub Pages 网站","date":"2020-02-05T20:28:57.000Z","updated":"2020-02-16T20:28:57.000Z","tags":["CDN","笔记","GitHub Pages"],"categories":["云游的小笔记"]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"步骤","slug":"步骤","link":"#步骤","children":[{"level":3,"title":"添加自己的域名","slug":"添加自己的域名","link":"#添加自己的域名","children":[]},{"level":3,"title":"设置源站","slug":"设置源站","link":"#设置源站","children":[]},{"level":3,"title":"回源协议","slug":"回源协议","link":"#回源协议","children":[]},{"level":3,"title":"设置 CNAME","slug":"设置-cname","link":"#设置-cname","children":[]},{"level":3,"title":"配置缓存","slug":"配置缓存","link":"#配置缓存","children":[]}]},{"level":2,"title":"后话","slug":"后话","link":"#后话","children":[]},{"level":2,"title":"FAQ","slug":"faq","link":"#faq","children":[{"level":3,"title":"CNAME 与 MX 记录冲突导致邮件丢失","slug":"cname-与-mx-记录冲突导致邮件丢失","link":"#cname-与-mx-记录冲突导致邮件丢失","children":[]},{"level":3,"title":"CDN 刷新","slug":"cdn-刷新","link":"#cdn-刷新","children":[]}]},{"level":2,"title":"后后话","slug":"后后话","link":"#后后话","children":[{"level":3,"title":"2020-03-26","slug":"_2020-03-26","link":"#_2020-03-26","children":[]},{"level":3,"title":"2020-04-17","slug":"_2020-04-17","link":"#_2020-04-17","children":[]},{"level":3,"title":"2020-05-24","slug":"_2020-05-24","link":"#_2020-05-24","children":[]},{"level":3,"title":"2021-05-27","slug":"_2021-05-27","link":"#_2021-05-27","children":[]}]}],"relativePath":"pages/posts/use-cdn-speed-up-site.md","path":"D:\\\\Learning\\\\myblog\\\\valaxy-blog\\\\imLKlauS.github.io-valaxy\\\\pages\\\\posts\\\\use-cdn-speed-up-site.md","lastUpdated":null}'),C={name:"pages/posts/use-cdn-speed-up-site.md",data(){return{data:r,frontmatter:r.frontmatter}},setup(){g("pageData",r)}},m=e("p",null,"内容分发网络 Content Delivery Network",-1),b={id:"前言",tabindex:"-1"},y=e("p",null,"除去 WordPress, 许多博客网站是托管于 GitHub Pages 上的，但其在国内的速度实在是难以称道。 所以使用国内服务商的 CDN 对其进行加速不失为一个好办法。",-1),k=e("blockquote",null,[e("p",null,"内容分发网络（Content Delivery Network，CDN）通过将站点内容发布至遍布全国的海量加速节点，使其用户可就近获取所需内容，避免网络拥堵、地域、运营商等因素带来的访问延迟问题，有效提升下载速度、降低响应时间，提供流畅的用户体验。")],-1),A=e("p",null,"但是 Coding 的服务并不稳定，且经常变动一些策略。 现在更是下线整合到静态部署中，且似乎因为 API 的问题实名认证总是不能通过，暂时都无法使用。",-1),w=e("p",null,"所以便干脆使用 CDN 来进行加速。并且也可以轻松被百度抓取了。",-1),D=e("p",null,"因为我域名购置于腾讯云，且腾讯云 CDN 每月赠送免费 10G 流量。 所以我直接采用腾讯云的 CDN 来实现。",-1),N=e("blockquote",null,[e("p",null,"注意：域名需要备案（按需签发 SSL 证书）")],-1),E={id:"步骤",tabindex:"-1"},v={id:"添加自己的域名",tabindex:"-1"},P=e("p",null,[e("img",{src:"https://r2.yunyoujun.cn/images/tencent-cloud-add-domain-for-cdn.jpg",alt:"添加自己的域名"})],-1),M={id:"设置源站",tabindex:"-1"},x=e("p",null,"管理 > 基本配置",-1),H=e("p",null,[e("img",{src:"https://r2.yunyoujun.cn/images/tencent-cloud-config-source-site.jpg",alt:"设置源站"})],-1),F=e("p",null,"这里是 GitHub Pages 提供的 IP 地址，可以添加多行。",-1),T=e("hr",null,null,-1),j=e("blockquote",null,[e("p",null,[l("可选：建议前往 "),e("code",null,"高级配置"),l(" 开启 HTTPS 配置")])],-1),G={id:"回源协议",tabindex:"-1"},L=e("p",null,"证书管理 > 编辑 > 协议跟随 (如果没开启 HTTPS，默认的 HTTP 也可以。)",-1),q=e("p",null,[e("img",{src:"https://r2.yunyoujun.cn/images/tencent-cloud-set-back-source-protocol.jpg",alt:"回源协议"})],-1),I={id:"设置-cname",tabindex:"-1"},$=e("p",null,[l("根据需要将 CDN 提供的 CNAME 线路类型设置为 "),e("code",null,"境内"),l("。 "),e("code",null,"境外"),l(" 则仍默认解析回 GitHub Pages。")],-1),S=e("p",null,[e("img",{src:"https://r2.yunyoujun.cn/images/tencent-cloud-set-different-cname-for-domain.jpg",alt:"设置 CNAME"})],-1),U={id:"配置缓存",tabindex:"-1"},B=e("p",null,"默认的缓存时间非常长，不配置的话就会导致 CDN 的文件长时间没有更新。",-1),X={id:"后话",tabindex:"-1"},R=e("p",null,"测试发现首页基本可以秒开，速度确实不错。 至于流量万一不够用怎么办，emm，大概等这里真有这么大访问量的时候，就不至于还要在这样各处薅羊毛了吧。",-1),V={id:"faq",tabindex:"-1"},Z={id:"cname-与-mx-记录冲突导致邮件丢失",tabindex:"-1"},J=e("p",null,"如果你的运营商没有这么提示你，那也最好不要这么做，因为这会导致域名邮箱发生邮件丢失。",-1),Q=e("p",null,"在过去解析尚未规范时，部分运营商是允许同时在裸域名上设置 CNAME 和 MX 记录的。 但如今按照 RFC 标准协议，CNAME 优先级最高，所以在解析请求过程中，会优先返回 CNAME 解析记录结果。 这样设置的结果就是导致无法解析到用户设置的 MX 记录（设置权重也没有用），影响邮箱的正常收发。",-1),K=e("p",null,"现在，大部分运营商会提示 CNAME 与 MX 记录发生冲突，来避免这种情况。",-1),O=e("p",null,"我此前之所以使用 GitHub Pages 托管，却仍然能够使用域名邮箱，是因为我使用了 GitHub 提供的 A 记录解析。",-1),z=e("div",{class:"language-txt"},[e("span",{class:"copy"}),e("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"185.199.108.153")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"185.199.109.153")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"185.199.110.153")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"185.199.111.153")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}})])])])],-1),W=e("p",null,"而如今加了 CDN 又回到了这一两难的局面。",-1),Y=e("p",null,[l("最后想着长痛不如短痛，下定决定将博客主域名更换为 "),e("code",null,"www.yunyoujun.cn"),l("。")],-1),ee=e("p",null,[l("裸域名仍旧使用 A 记录和 MX 记录。 设置 A 记录的作用是用户访问 "),e("code",null,"yunyoujun.cn"),l(" 时（GitHub Pages 的 CNAME 文件提前设置为 "),e("code",null,"www.yunyoujun.cn"),l("），那么 GitHub Pages 会自动从 "),e("code",null,"yunyoujun.cn"),l(" 跳转为 "),e("code",null,"www.yunyoujun.cn"),l("。")],-1),le=e("p",null,"此外，谷歌浏览器会自动隐藏 www 域名前缀，所以一定程度上减少观感的影响。",-1),te=e("p",null,"以及我发现一些企业的网站都采取的裸域名跳转 www 域名的方式。",-1),ne=e("p",null,"譬如：",-1),se=e("p",null,"当然如果你对域名邮箱没有需求，且域名非常短又很酷，使用裸域名也并非不可。",-1),ae=e("hr",null,null,-1),oe=e("p",null,"以往腾讯云允许 CNAME 与 MX 并存，再然后提示冲突不允许，到了现在又可以同时设置了。但最好是一次性可以解析到 A 记录的 CNAME。",-1),re=e("p",null,[l("我尝试在 www 域名上加了 CNAME 开启了 CDN，裸域名 CNAME 到 www，就会影响邮箱。 这时的路径就相当于："),e("code",null,"@ -> www(CNAME) -> cdn(CNAME) -> A"),l("。可能无法使用 CNAME Flattening 。")],-1),ie=e("p",null,[l("而直接 CNAME 到 GitHub Pages 时，邮箱网址都可以正常工作。"),e("code",null,"@ -> GitHub Pages(CNAME) -> A")],-1),ue=e("blockquote",null,[e("p",null,"PS. 怎么感觉自己最近说话都有点翻译腔了。")],-1),ce={id:"cdn-刷新",tabindex:"-1"},de=e("p",null,"有了 CDN，这也意味着你的页面可能会因此延迟更新（对于用户来说）。",-1),he=e("p",null,"因此，CDN 往往提供了刷新预热功能。譬如指定 URL 或者目录进行更新。",-1),pe=e("p",null,"其实延迟的一会儿也不算是什么事，遇到着急的链接手动去控制台刷新即可。 但说实话，每次登陆到网站上操作着实有些浪费时间。 那么不如考虑一下命令行工具。",-1),_e=e("blockquote",null,[e("p",null,"需要 Python & pip")],-1),fe=e("p",null,"Example:",-1),ge=e("div",{class:"language-bash"},[e("span",{class:"copy"}),e("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#676E95","font-style":"italic"}},"# 注意这里的参数是 Array")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#676E95","font-style":"italic"}},"# 刷新目录")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"tccli"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"cdn"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"PurgePathCache"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"--Paths"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#C3E88D"}},'["https://www.yunyoujun.cn/links/"]'),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"--FlushType"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"flush")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#676E95","font-style":"italic"}},"# 刷新链接")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"tccli"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"cdn"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"PurgeUrlsCache"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"--Urls"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#C3E88D"}},'["https://www.yunyoujun.cn/links/index.html"]'),e("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),e("span",{class:"line"})])])],-1),Ce={id:"purgepathcache",tabindex:"-1"},me=e("p",null,"PurgePathCache 用于批量提交目录刷新，根据域名的加速区域进行对应区域的刷新。 默认情况下境内、境外加速区域每日目录刷新额度为各 100 条，每次最多可提交 20 条。",-1),be=e("p",null,[e("strong",null,"--Paths"),l(" 目录列表，需要包含协议头部 "),e("code",null,"http://"),l(" 或 "),e("code",null,"https://")],-1),ye=e("p",null,[e("strong",null,"--FlushType"),l(" 刷新类型")],-1),ke=e("ul",null,[e("li",null,"flush：刷新产生更新的资源"),e("li",null,"delete：刷新全部资源")],-1),Ae={id:"purgeurlscache",tabindex:"-1"},we=e("p",null,"PurgeUrlsCache 用于批量提交 URL 进行刷新，根据 URL 中域名的当前加速区域进行对应区域的刷新。 默认情况下境内、境外加速区域每日 URL 刷新额度各为 10000 条，每次最多可提交 1000 条。",-1),De=e("p",null,[e("strong",null,"--Urls"),l(" URL 列表，需要包含协议头部 "),e("code",null,"http://"),l(" 或 "),e("code",null,"https://")],-1),Ne={id:"后后话",tabindex:"-1"},Ee={id:"_2020-03-26",tabindex:"-1"},ve=e("p",null,[l("既然已经更改为 "),e("code",null,"www"),l(" 主域名，也还是继续使用裸域名跳转 "),e("code",null,"www"),l(" 的策略吧。")],-1),Pe={id:"_2020-04-17",tabindex:"-1"},Me=e("p",null,"后来到了五月，发现百度索引竟然所剩无几。原本还以为国内 CDN （此前的腾讯云确实可以）会被收录的。",-1),xe=e("code",null,"拒绝访问",-1),He=e("p",null,"难不成时又拍云的一些 CDN 点也禁止百度抓取了？",-1),Fe=e("p",null,"我不断对抓取的 IP 进行报错，百度抓取诊断就会换一个 IP 抓，于是乎排除掉一些拒绝访问的 IP，有些 IP 倒是可以抓取成功了。",-1),Te={id:"_2020-05-24",tabindex:"-1"},je=e("p",null,"但却并非如此，索引量仍旧在下降，我提交了又拍云工单，客服反馈是回源访问时源站本身便是 403 拒绝访问。（但我正常访问均正常。）",-1),Ge=e("p",null,"所以我猜想的是又拍云部分 CDN IP 有缓存时，所以回抓取成功，而其他 IP 无缓存时，则会回源，回源的过程中没有过滤百度爬虫的 User Agent，所以回源 GitHub Pages 仍旧会被拒绝。",-1),Le=e("p",null,"此后我开启了又拍云的源站资源迁移，即可将源站静态资源无缝迁移到又拍云存储，当客户端下次访问相同的资源时，无需回用户自主源。",-1),qe=e("p",null,"随后过了几天，索引量果然回升了……",-1),Ie={id:"_2021-05-27",tabindex:"-1"},$e=e("p",null,"后续得到了又拍云的赞助，写了一篇又拍云的软文？，不过我之前也确实一直在用又拍云，并列举了优劣，也算是真心实意地推荐。",-1);function Se(a,Ue,Be,Xe,i,Re){const n=f,u=c;return p(),h(u,{frontmatter:i.frontmatter,data:i.data},{"main-content-md":t(()=>[m,_(" more "),e("h2",b,[l("前言 "),s(n,{class:"header-anchor",href:"#前言","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),y,k,e("p",null,[l("曾经我使用的策略是在国内托管 "),s(n,{href:"https://coding.net/",target:"_blank",rel:"noreferrer"},{default:t(()=>[l("Coding Pages")]),_:1}),l("，以及为了让百度能抓取到博客内容，还做了一番配置。")]),e("blockquote",null,[e("p",null,[s(n,{href:"https://yunyoujun.cn/posts/baidu-seo-about-github-pages/",target:"_blank",rel:"noreferrer"},{default:t(()=>[l("让百度收录你的 GitHub Pages 博客")]),_:1})])]),A,w,D,N,e("h2",E,[l("步骤 "),s(n,{class:"header-anchor",href:"#步骤","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),e("p",null,[l("首先开通"),s(n,{href:"https://cloud.tencent.com/product/cdn",target:"_blank",rel:"noreferrer"},{default:t(()=>[l("腾讯云 - 内容分发网络")]),_:1}),l("。")]),e("h3",v,[l("添加自己的域名 "),s(n,{class:"header-anchor",href:"#添加自己的域名","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),P,e("h3",M,[l("设置源站 "),s(n,{class:"header-anchor",href:"#设置源站","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),x,H,F,e("blockquote",null,[e("p",null,[s(n,{href:"https://help.github.com/en/github/working-with-github-pages/about-custom-domains-and-github-pages",target:"_blank",rel:"noreferrer"},{default:t(()=>[l("About custom domains and GitHub Pages")]),_:1})])]),T,j,e("h3",G,[l("回源协议 "),s(n,{class:"header-anchor",href:"#回源协议","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),L,q,e("h3",I,[l("设置 CNAME "),s(n,{class:"header-anchor",href:"#设置-cname","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),e("p",null,[l("前往 "),s(n,{href:"https://console.cloud.tencent.com/cns",target:"_blank",rel:"noreferrer"},{default:t(()=>[l("域名解析")]),_:1})]),$,S,e("h3",U,[l("配置缓存 "),s(n,{class:"header-anchor",href:"#配置缓存","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),B,e("p",null,[l("可以参见腾讯云文档 "),s(n,{href:"https://cloud.tencent.com/document/product/228/2968#.E7.BC.93.E5.AD.98.E9.85.8D.E7.BD.AE.E9.97.AE.E9.A2.98",target:"_blank",rel:"noreferrer"},{default:t(()=>[l("缓存配置问题")]),_:1})]),e("p",null,[l("也可以在 "),s(n,{href:"https://console.cloud.tencent.com/cdn/refresh",target:"_blank",rel:"noreferrer"},{default:t(()=>[l("刷新预热")]),_:1}),l(" 处手动刷新。")]),e("h2",X,[l("后话 "),s(n,{class:"header-anchor",href:"#后话","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),R,e("h2",V,[l("FAQ "),s(n,{class:"header-anchor",href:"#faq","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),e("h3",Z,[l("CNAME 与 MX 记录冲突导致邮件丢失 "),s(n,{class:"header-anchor",href:"#cname-与-mx-记录冲突导致邮件丢失","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),e("p",null,[l("值得注意的是，设置 CDN 的方式是使用 CNAME 重定向到 CDN 域名。 如果你同时将裸域名（"),s(n,{href:"http://yunyoujun.cn",target:"_blank",rel:"noreferrer"},{default:t(()=>[l("yunyoujun.cn")]),_:1}),l("）作为博客域名和域名邮箱（比如我的邮箱：me@yunyoujun.cn），那么你可能会遇到 CNAME 与 MX 记录冲突问题。")]),J,Q,K,e("blockquote",null,[e("p",null,[l("更多信息请参阅 "),s(n,{href:"https://www.rfc-editor.org/rfc/rfc1034.txt?spm=a2c4g.11186623.2.13.59ef4054LkHX23&file=rfc1034.txt",target:"_blank",rel:"noreferrer"},{default:t(()=>[l("RFC1034")]),_:1}),l(" 和 "),s(n,{href:"https://www.rfc-editor.org/rfc/rfc2181.txt?spm=a2c4g.11186623.2.14.59ef4054LkHX23&file=rfc2181.txt",target:"_blank",rel:"noreferrer"},{default:t(()=>[l("RFC2181")]),_:1}),l("。 "),s(n,{href:"https://help.aliyun.com/knowledge_detail/39787.html#h2-u8BB0u5F55u51B2u7A81u7684u89C4u52193",target:"_blank",rel:"noreferrer"},{default:t(()=>[l("记录冲突的规则")]),_:1})])]),O,z,e("blockquote",null,[e("p",null,[s(n,{href:"https://help.github.com/en/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site",target:"_blank",rel:"noreferrer"},{default:t(()=>[l("Managing a custom domain for your GitHub Pages site")]),_:1})])]),W,Y,ee,le,te,ne,e("ul",null,[e("li",null,[l("语雀："),s(n,{href:"https://yuque.com",target:"_blank",rel:"noreferrer"},{default:t(()=>[l("https://yuque.com")]),_:1}),l(",")]),e("li",null,[l("JetBrains（著名的 IDE 软件开发商）："),s(n,{href:"https://jetbrains.com",target:"_blank",rel:"noreferrer"},{default:t(()=>[l("https://jetbrains.com")]),_:1}),l("（我在几年前的视频里发现他们留的还是裸域名的网址，而现在则是跳转 www 链接。）")])]),se,ae,e("p",null,[l("此外还有一种解决方案就是 "),s(n,{href:"https://support.cloudflare.com/hc/en-us/articles/200169056-CNAME-Flattening-RFC-compliant-support-for-CNAME-at-the-root",target:"_blank",rel:"noreferrer"},{default:t(()=>[l("CNAME Flattening")]),_:1}),l("。")]),e("p",null,[l("有些服务商（如 "),s(n,{href:"https://www.cloudflare.com/",target:"_blank",rel:"noreferrer"},{default:t(()=>[l("Cloudflare")]),_:1}),l("、"),s(n,{href:"https://www.cloudxns.net/",target:"_blank",rel:"noreferrer"},{default:t(()=>[l("CloudXNS")]),_:1}),l("）可以直接将 CNAME 解析为对应的 A 记录（IP 地址），这时在裸域名上设置 CNAME 就相当于设置 A 记录。")]),oe,re,ie,ue,e("h3",ce,[l("CDN 刷新 "),s(n,{class:"header-anchor",href:"#cdn-刷新","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),de,he,pe,_e,e("ul",null,[e("li",null,[s(n,{href:"https://cloud.tencent.com/document/product/440/39027",target:"_blank",rel:"noreferrer"},{default:t(()=>[l("腾讯云命令行工具 TCCLI")]),_:1})]),e("li",null,[s(n,{href:"https://cloud.tencent.com/document/product/440/34011",target:"_blank",rel:"noreferrer"},{default:t(()=>[l("安装 TCCLI")]),_:1}),l("：介绍如何安装 TCCLI。")]),e("li",null,[s(n,{href:"https://cloud.tencent.com/document/product/440/34012",target:"_blank",rel:"noreferrer"},{default:t(()=>[l("配置 TCCLI")]),_:1}),l("：介绍在开始使用 TCCLI 之前，需要完成 TCCLI 的初始化配置。")]),e("li",null,[s(n,{href:"https://cloud.tencent.com/document/product/440/34013",target:"_blank",rel:"noreferrer"},{default:t(()=>[l("使用 TCCLI")]),_:1}),l("：介绍如何使用 TCCLI 创建云服务器及相关使用说明。")]),e("li",null,[s(n,{href:"https://cloud.tencent.com/document/product/440/34015",target:"_blank",rel:"noreferrer"},{default:t(()=>[l("使用高级功能")]),_:1}),l("：介绍 TCCLI 的高级功能，例如多版本接口访问、返回结果过滤等。")])]),fe,ge,e("h4",Ce,[l("PurgePathCache "),s(n,{class:"header-anchor",href:"#purgepathcache","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),me,be,ye,ke,e("h4",Ae,[l("PurgeUrlsCache "),s(n,{class:"header-anchor",href:"#purgeurlscache","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),we,De,e("h2",Ne,[l("后后话 "),s(n,{class:"header-anchor",href:"#后后话","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),e("h3",Ee,[l("2020-03-26 "),s(n,{class:"header-anchor",href:"#_2020-03-26","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),e("p",null,[l("因为不知腾讯云 CDN 为何挂了，转为使用 "),s(n,{href:"https://www.cloudflare.com/",target:"_blank",rel:"noreferrer"},{default:t(()=>[l("Cloudflare")]),_:1}),l(" 了，自动 Flattening。")]),e("blockquote",null,[e("p",null,[l("后发现不是腾讯云的问题，是 GitHub Pages 的 HTTPS 证书被劫持了。"),s(n,{href:"https://www.v2ex.com/t/656367",target:"_blank",rel:"noreferrer"},{default:t(()=>[l("Github pages 的 HTTPS 是不是出问题了？")]),_:1})])]),ve,e("h3",Pe,[l("2020-04-17 "),s(n,{class:"header-anchor",href:"#_2020-04-17","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),e("p",null,[l("开始使用又拍云 CDN，申请了 "),s(n,{href:"https://www.upyun.com/league",target:"_blank",rel:"noreferrer"},{default:t(()=>[l("又拍云联盟")]),_:1}),l("，拿到了代金券。")]),Me,e("p",null,[l("测试发现百度 "),s(n,{href:"https://ziyuan.baidu.com/crawltools/index?site=https://www.yunyoujun.cn/",target:"_blank",rel:"noreferrer"},{default:t(()=>[l("抓取诊断")]),_:1}),l(" 抓取失败时错误信息为 "),xe,l("。")]),He,Fe,e("h3",Te,[l("2020-05-24 "),s(n,{class:"header-anchor",href:"#_2020-05-24","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),je,Ge,Le,qe,e("h3",Ie,[l("2021-05-27 "),s(n,{class:"header-anchor",href:"#_2021-05-27","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),$e,e("blockquote",null,[e("p",null,[s(n,{href:"https://www.yunyoujun.cn/posts/why-i-use-upyun-cdn/",target:"_blank",rel:"noreferrer"},{default:t(()=>[l("又拍云—年轻人的第一个 CDN | 云游君的小站")]),_:1})])])]),"main-header":t(()=>[o(a.$slots,"main-header")]),"main-header-after":t(()=>[o(a.$slots,"main-header-after")]),"main-nav":t(()=>[o(a.$slots,"main-nav")]),"main-content":t(()=>[o(a.$slots,"main-content")]),"main-content-after":t(()=>[o(a.$slots,"main-content-after")]),"main-nav-before":t(()=>[o(a.$slots,"main-nav-before")]),"main-nav-after":t(()=>[o(a.$slots,"main-nav-after")]),comment:t(()=>[o(a.$slots,"comment")]),footer:t(()=>[o(a.$slots,"footer")]),aside:t(()=>[o(a.$slots,"aside")]),"aside-custom":t(()=>[o(a.$slots,"aside-custom")]),default:t(()=>[o(a.$slots,"default")]),_:3},8,["frontmatter","data"])}const ze=d(C,[["render",Se]]);export{Oe as __pageData,ze as default};
