import{_ as d}from"./ValaxyMain.vue_vue_type_style_index_0_lang-0fba385b.js";import{_ as p,c as u,w as s,o as h,a as e,d as n,b as l,f as _,r as o,e as f,p as y}from"./app-e529c65b.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-29f566da.js";import"./YunCard.vue_vue_type_style_index_0_lang-3313f385.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-030afe06.js";const le=JSON.parse('{"title":"Deepin 使用笔记","description":"","frontmatter":{"title":"Deepin 使用笔记","date":"2019-04-29T18:23:47.000Z","updated":"2019-04-29T18:23:47.000Z","tags":["学习","笔记","Linux"],"categories":["云游的小笔记"]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"Install","slug":"install","link":"#install","children":[{"level":3,"title":"System","slug":"system","link":"#system","children":[]}]},{"level":2,"title":"后话","slug":"后话","link":"#后话","children":[]}],"relativePath":"pages/posts/deepin-use-note.md","path":"D:\\\\Learning\\\\myblog\\\\valaxy-blog\\\\Yuumi0221.github.io-main\\\\pages\\\\posts\\\\deepin-use-note.md","lastUpdated":null}'),r=JSON.parse('{"title":"Deepin 使用笔记","description":"","frontmatter":{"title":"Deepin 使用笔记","date":"2019-04-29T18:23:47.000Z","updated":"2019-04-29T18:23:47.000Z","tags":["学习","笔记","Linux"],"categories":["云游的小笔记"]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"Install","slug":"install","link":"#install","children":[{"level":3,"title":"System","slug":"system","link":"#system","children":[]}]},{"level":2,"title":"后话","slug":"后话","link":"#后话","children":[]}],"relativePath":"pages/posts/deepin-use-note.md","path":"D:\\\\Learning\\\\myblog\\\\valaxy-blog\\\\Yuumi0221.github.io-main\\\\pages\\\\posts\\\\deepin-use-note.md","lastUpdated":null}'),m={name:"pages/posts/deepin-use-note.md",data(){return{data:r,frontmatter:r.frontmatter}},setup(){y("pageData",r)}},C=e("p",null,"深度操作系统 - Linux 发行版",-1),D={id:"前言",tabindex:"-1"},b=e("p",null,"因为最近电脑中了恶意软件的圈套，清除又恨麻烦。 想到兴许还有几月便可以换上新装备，而现今又没有对电脑的稳定需求，便索性安装成 Linux 尝尝鲜。 早便听得 Deepin 的本土化和常用软件兼容性做得很好，便以其为主，记录一下还原当初 Windows 工作环境的过程。",-1),g={id:"install",tabindex:"-1"},A=e("p",null,"安装过程很简单，下载镜像，刻入 U 盘。",-1),E=e("p",null,"U 盘启动器制作工具：",-1),k={id:"system",tabindex:"-1"},B=e("p",null,"安装好后最好切换为阿里云的 CDN ，比官方的速度还要快些。",-1),v=e("blockquote",null,[e("p",null,[l("不需要 "),e("code",null,"vim /etc/apt/sources.list"),l(" 修改")])],-1),x=e("p",null,[e("code",null,"系统设置菜单 > 更新 > 更新设置 > 切换镜像源"),l(" 即可，若为显示 "),e("code",null,"切换镜像源"),l("，需要先关闭 "),e("code",null,"智能镜像源"),l("。")],-1),w={id:"蓝牙键盘",tabindex:"-1"},F=e("p",null,"我的蓝牙键盘罗技 Keyboard K480，连接时还需要输入配对码，所以不能简单通过系统自带蓝牙连接上。",-1),$={id:"bluetoothctl",tabindex:"-1"},L=e("div",{class:"language-bash"},[e("span",{class:"copy"}),e("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"sudo"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"service"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"bluetooth"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"start"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#676E95","font-style":"italic"}},"# 打开系统蓝牙")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"bluetoothctl"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#676E95","font-style":"italic"}},"# 进入bluetoothctl")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"power"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"on")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"agent"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"on")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"default-agent")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"scan"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"on"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#676E95","font-style":"italic"}},"# 扫描其它蓝牙设备")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"pair"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"YourDeviceMacAddress"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#676E95","font-style":"italic"}},"# 与设备配对（请把 YourDeviceMacAddress 换成你蓝牙键盘的 MAC 地址）")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#676E95","font-style":"italic"}},"# 这时终端应该会显示如下类似信息")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#676E95","font-style":"italic"}},"# [agent] Passkey: 123456")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#676E95","font-style":"italic"}},"# 在键盘上输入配对码后回车")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"trust"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"YourDeviceMacAddress"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#676E95","font-style":"italic"}},"# 信任该设备")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"connect"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"YourDeviceMacAddress"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#676E95","font-style":"italic"}},"# 连接该设备")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#676E95","font-style":"italic"}},"# 这时候键盘上的指示灯不再闪烁，则键盘已成功连接")]),l(`
`),e("span",{class:"line"})])])],-1),N=e("p",null,"or",-1),M={id:"blueman",tabindex:"-1"},S=e("p",null,"一款功能强大的蓝牙管理器",-1),U=e("div",{class:"language-bash"},[e("span",{class:"copy"}),e("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"sudo"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"apt"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"install"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"blueman")]),l(`
`),e("span",{class:"line"})])])],-1),Y={id:"打印机",tabindex:"-1"},P=e("p",null,"首先按照官方教程，安装好相关厂商打印机的驱动。",-1),T={id:"无线打印机",tabindex:"-1"},V=e("p",null,[l("Linux 下似乎识别不了 "),e("code",null,"169.254.x.x"),l(" 网段，所以如果在此段的打印机需要先将无线打印机地址设置为 "),e("code",null,"DHCP"),l("。 （我是先用家里另外一台 Windows 系统电脑，进入 "),e("code",null,"169.254.x.x"),l(" 设置的。）")],-1),Z=e("p",null,[l("设置为 "),e("code",null,"DHCP"),l("后，会自动切换到 "),e("code",null,"192.168.x.x"),l("。 此时再输入 "),e("code",null,"hp-setup"),l(" 设置无线打印机，最后 "),e("code",null,"ho-setup 192.168.x.x"),l(" 添加无线打印机。")],-1),q={id:"后话",tabindex:"-1"},I=e("p",null,"再之后的我便已经换上了 macOS，类 Unix 系统的开发环境对于开发者来说很是友好。当然这也是我更换装备的根本原因。",-1),K=e("hr",null,null,-1),O=e("p",null,"Q.E.D.",-1);function W(a,H,J,Q,i,j){const t=f,c=d;return h(),u(c,{frontmatter:i.frontmatter,data:i.data},{"main-content-md":s(()=>[e("p",null,[n(t,{href:"https://www.deepin.org/",target:"_blank",rel:"noreferrer"},{default:s(()=>[l("Deepin")]),_:1})]),C,_(" more "),e("h2",D,[l("前言 "),n(t,{class:"header-anchor",href:"#前言","aria-hidden":"true"},{default:s(()=>[l("#")]),_:1})]),b,e("p",null,[l("More info: "),n(t,{href:"https://www.yuque.com/docs/share/8c86b831-a531-46dc-bb34-cde87f20fb45",target:"_blank",rel:"noreferrer"},{default:s(()=>[l("Linux 使用笔记")]),_:1})]),e("h2",g,[l("Install "),n(t,{class:"header-anchor",href:"#install","aria-hidden":"true"},{default:s(()=>[l("#")]),_:1})]),e("p",null,[n(t,{href:"https://wiki.deepin.org/",target:"_blank",rel:"noreferrer"},{default:s(()=>[l("Wiki")]),_:1})]),A,E,e("ul",null,[e("li",null,[n(t,{href:"https://etcher.io/",target:"_blank",rel:"noreferrer"},{default:s(()=>[l("etcher")]),_:1})]),e("li",null,[n(t,{href:"https://rufus.ie/",target:"_blank",rel:"noreferrer"},{default:s(()=>[l("rufus")]),_:1})])]),e("h3",k,[l("System "),n(t,{class:"header-anchor",href:"#system","aria-hidden":"true"},{default:s(()=>[l("#")]),_:1})]),B,v,x,e("h4",w,[l("蓝牙键盘 "),n(t,{class:"header-anchor",href:"#蓝牙键盘","aria-hidden":"true"},{default:s(()=>[l("#")]),_:1})]),F,e("h5",$,[l("bluetoothctl "),n(t,{class:"header-anchor",href:"#bluetoothctl","aria-hidden":"true"},{default:s(()=>[l("#")]),_:1})]),L,N,e("h5",M,[l("blueman "),n(t,{class:"header-anchor",href:"#blueman","aria-hidden":"true"},{default:s(()=>[l("#")]),_:1})]),S,U,e("blockquote",null,[e("p",null,[n(t,{href:"https://www.lolimay.cn/2018/11/07/deepin-keyboard-k380/",target:"_blank",rel:"noreferrer"},{default:s(()=>[l("deepin 连接罗技蓝牙键盘 K380")]),_:1})])]),e("h4",Y,[l("打印机 "),n(t,{class:"header-anchor",href:"#打印机","aria-hidden":"true"},{default:s(()=>[l("#")]),_:1})]),e("p",null,[n(t,{href:"https://wiki.deepin.org/wiki/%E6%89%93%E5%8D%B0%E6%9C%BA",target:"_blank",rel:"noreferrer"},{default:s(()=>[l("打印机 - deepin wiki")]),_:1})]),e("p",null,[n(t,{href:"https://wiki.deepin.org/wiki/Deepin%E4%B8%8A%E4%BD%BF%E7%94%A8%E6%83%A0%E6%99%AE%E6%89%93%E5%8D%B0%E6%9C%BA",target:"_blank",rel:"noreferrer"},{default:s(()=>[l("Deepin 上使用惠普打印机 - deepin wiki")]),_:1})]),P,e("h5",T,[l("无线打印机 "),n(t,{class:"header-anchor",href:"#无线打印机","aria-hidden":"true"},{default:s(()=>[l("#")]),_:1})]),V,Z,e("h2",q,[l("后话 "),n(t,{class:"header-anchor",href:"#后话","aria-hidden":"true"},{default:s(()=>[l("#")]),_:1})]),I,K,O]),"main-header":s(()=>[o(a.$slots,"main-header")]),"main-header-after":s(()=>[o(a.$slots,"main-header-after")]),"main-nav":s(()=>[o(a.$slots,"main-nav")]),"main-content":s(()=>[o(a.$slots,"main-content")]),"main-content-after":s(()=>[o(a.$slots,"main-content-after")]),"main-nav-before":s(()=>[o(a.$slots,"main-nav-before")]),"main-nav-after":s(()=>[o(a.$slots,"main-nav-after")]),comment:s(()=>[o(a.$slots,"comment")]),footer:s(()=>[o(a.$slots,"footer")]),aside:s(()=>[o(a.$slots,"aside")]),"aside-custom":s(()=>[o(a.$slots,"aside-custom")]),default:s(()=>[o(a.$slots,"default")]),_:3},8,["frontmatter","data"])}const se=p(m,[["render",W]]);export{le as __pageData,se as default};
