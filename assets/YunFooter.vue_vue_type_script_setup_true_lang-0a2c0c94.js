import{g as h,u as D,X as M,S as w,l as T,Q as p,Y as l,o as i,i as r,k as e,a as t,t as o,f as n,b as a,F as $,n as v,Z as C,r as H,$ as P,c as z,w as S}from"./app-93795bde.js";const F={class:"va-footer p-4 text-$va-c-text-light",text:"center sm"},V={key:0,class:"beian",m:"y-2"},Y={href:"https://beian.miit.gov.cn/",target:"_blank",rel:"noopener"},B={class:"copyright flex justify-center items-center gap-2",p:"1"},L=["href","title"],N={key:1,class:"powered",m:"2"},j=["innerHTML"],I=["href","title"],E=h({__name:"YunFooter",setup(g){const{t:c}=D(),m=M(),b=w(),s=T(),f=new Date().getFullYear(),y=p(()=>f===s.value.footer.since),k=p(()=>c("footer.powered",[`<a href="${l.repository}" target="_blank" rel="noopener">Valaxy</a> v${l.version}`])),u=p(()=>s.value.footer.icon||{url:l.repository,name:"i-ri-cloud-line",title:l.name});return(x,X)=>{var _,d;return i(),r("footer",F,[(_=e(s).footer.beian)!=null&&_.enable&&e(s).footer.beian.icp?(i(),r("div",V,[t("a",Y,o(e(s).footer.beian.icp),1)])):n("v-if",!0),t("div",B,[t("span",null,[a(" © "),e(y)?n("v-if",!0):(i(),r($,{key:0},[a(o(e(s).footer.since)+" - ",1)],64)),a(" "+o(e(f)),1)]),(d=e(s).footer.icon)!=null&&d.enable?(i(),r("a",{key:0,class:v(["inline-flex",e(s).footer.icon.animated?"animate-pulse":""]),href:e(u).url,target:"_blank",title:e(u).title},[t("div",{class:v(e(u).name)},null,2)],10,L)):n("v-if",!0),t("span",null,o(e(b).author.name),1)]),e(s).footer.powered?(i(),r("div",N,[t("span",{innerHTML:e(k)},null,8,j),a(" | "),t("span",null,[a(o(e(c)("footer.theme"))+" - ",1),t("a",{href:e(s).pkg.repository.url,title:e(s).pkg.name,target:"_blank"},o(C(e(m).theme)),9,I),a(" v"+o(e(s).pkg.version),1)])])):n("v-if",!0),H(x.$slots,"default")])}}}),Q=t("div",{class:"vc-site-live-time"},[n("["),t("span",null,"本站已勉强运行"),n("]"),t("span",{"mx-1":""},"-1 天"),t("span",{"mx-1":""},"-1 小时"),t("span",{"mx-1":""},"-1 分"),t("span",{"mx-1":""},"-1 秒"),n("["),t("span",null,"∑(っ°Д°;)っ"),n("]")],-1),q=h({__name:"YunFooter",setup(g){return P("//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"),(c,m)=>(i(),z(E,null,{default:S(()=>[n("["),Q,n(` <div class="live-time"><span>本博客已萌萌哒地运行</span><span id="display_live_time"></span><span class="moe-text">(●'◡'●)</span><script>function blog_live_time() {\r
  setTimeout(blog_live_time, 1000);\r
  const start = new Date('2023-04-13T00:00:00');\r
  const now = new Date();\r
  const timeDiff = (now.getTime() - start.getTime());\r
  const msPerMinute = 60 * 1000;\r
  const msPerHour = 60 * msPerMinute;\r
  const msPerDay = 24 * msPerHour;\r
  const passDay = Math.floor(timeDiff / msPerDay);\r
  const passHour = Math.floor((timeDiff % msPerDay) / 60 / 60 / 1000);\r
  const passMinute = Math.floor((timeDiff % msPerHour) / 60 / 1000);\r
  const passSecond = Math.floor((timeDiff % msPerMinute) / 1000);\r
  display_live_time.innerHTML = \` \${passDay} 天 \${passHour} 小时 \${passMinute} 分 \${passSecond} 秒\`;\r
}\r
blog_live_time();\r
<\/script></div> `),n(" 自定义页脚内容 "),n(` <div>本站总访问量 <span id="busuanzi_value_site_pv" /> 次</div>\r
    <div>本站访客数 <span id="busuanzi_value_site_uv" /> 人次</div> `)]),_:1}))}});export{q as _};
