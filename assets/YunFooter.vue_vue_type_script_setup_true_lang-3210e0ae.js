import{g as d,o as a,i,a as n,u as w,X as $,S as C,l as N,I as f,Y as c,k as e,t as s,f as _,b as r,F as V,n as k,Z as F,r as L,c as T,w as Y,d as B}from"./app-26096a7f.js";const S={class:"flex-center"},D=n("span",{"mr-1":""},"由",-1),H=["href","title"],I=["src"],z=n("span",null,"提供 CDN 支持",-1),M=d({__name:"NetdunLogo",setup(m){const o={name:"网盾星球",url:"https://www.netdun.net",logo:"https://data-static.netdun.net/netdun/0136.png"};return(u,l)=>(a(),i("div",S,[D,n("a",{"inline-flex":"",href:o.url,target:"_blank",title:o.name},[n("img",{class:"netdun-logo",w:"25",src:o.logo},null,8,I)],8,H),z]))}});const j={class:"va-footer p-4 text-$va-c-text-light",text:"center sm"},E={key:0,class:"beian",m:"y-2"},X={href:"https://beian.miit.gov.cn/",target:"_blank",rel:"noopener"},Z={class:"copyright flex justify-center items-center gap-2",p:"1"},q=["href","title"],A={key:1,class:"powered",m:"2"},G=["innerHTML"],J=["href","title"],K=d({__name:"YunFooter",setup(m){const{t:o}=w(),u=$(),l=C(),t=N(),h=new Date().getFullYear(),y=f(()=>h===t.value.footer.since),x=f(()=>o("footer.powered",[`<a href="${c.repository}" target="_blank" rel="noopener">Valaxy</a> v${c.version}`])),p=f(()=>t.value.footer.icon||{url:c.repository,name:"i-ri-cloud-line",title:c.name});return(b,O)=>{var g,v;return a(),i("footer",j,[(g=e(t).footer.beian)!=null&&g.enable&&e(t).footer.beian.icp?(a(),i("div",E,[n("a",X,s(e(t).footer.beian.icp),1)])):_("v-if",!0),n("div",Z,[n("span",null,[r(" © "),e(y)?_("v-if",!0):(a(),i(V,{key:0},[r(s(e(t).footer.since)+" - ",1)],64)),r(" "+s(e(h)),1)]),(v=e(t).footer.icon)!=null&&v.enable?(a(),i("a",{key:0,class:k(["inline-flex",e(t).footer.icon.animated?"animate-pulse":""]),href:e(p).url,target:"_blank",title:e(p).title},[n("div",{class:k(e(p).name)},null,2)],10,q)):_("v-if",!0),n("span",null,s(e(l).author.name),1)]),e(t).footer.powered?(a(),i("div",A,[n("span",{innerHTML:e(x)},null,8,G),r(" | "),n("span",null,[r(s(e(o)("footer.theme"))+" - ",1),n("a",{href:e(t).pkg.repository.url,title:e(t).pkg.name,target:"_blank"},s(F(e(u).theme)),9,J),r(" v"+s(e(t).pkg.version),1)])])):_("v-if",!0),L(b.$slots,"default")])}}}),Q=d({__name:"YunFooter",setup(m){return(o,u)=>{const l=M;return a(),T(K,null,{default:Y(()=>[B(l)]),_:1})}}});export{Q as _};
