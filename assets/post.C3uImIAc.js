import{l as e,u as t,x as a,b as s,y as o,c as n,h as l,e as r,f as i}from"./app.BHTvhCs8.js";import{f as u,c as p,P as c,O as m,R as g,V as f,S as v,u as y,N as h,M as d,B as _,$ as k,a7 as b,Q as j,F as C}from"./framework.CXYGarVr.js";import{u as $}from"./chunks/vue-i18n.DE4Bnvxi.js";import{_ as x}from"./YunSponsor.vue_vue_type_style_index_0_lang.Cw3cbzXE.js";import{_ as M,a as P,b as z}from"./YunPostMeta.vue_vue_type_style_index_0_lang.1mdJS-0v.js";import{d as R}from"./chunks/dayjs.luRsnflP.js";import"./chunks/vue-router.2jJX8cgW.js";import"./chunks/nprogress.Bci-yEh4.js";import"./chunks/pinia.D4p-MF8b.js";import"./chunks/@vueuse/motion.DjOBw7pe.js";import"./index.BoOkNg8c.js";import"./animation.Dk5apPTb.js";const T={class:"post-copyright"},U={class:"post-copyright-author"},V={key:0,class:"post-copyright-link"},Y=["href","title"],w={class:"post-copyright-license"},B=["innerHTML"],D=u({__name:"ValaxyCopyright",props:{url:{default:""}},setup(t){const{t:a,locale:s}=$(),o=e(),n="zero"===o.value.license.type?"1.0":"4.0",l="zero"===o.value.license.type?"publicdomain":"licenses",r=p((()=>{const e=o.value.license.language?o.value.license.language:"zh-CN"===s.value?"zh":"en";return`https://creativecommons.org/${l}/${o.value.license.type}/${n}/deed.${e}`})),i=p((()=>a("post.copyright.license_content",[`<a href="${r.value}" target="_blank" rel="noopener" title="CC ${o.value.license.type.toUpperCase()} ${n} ">CC ${o.value.license.type.toUpperCase()}</a>`])));return(e,t)=>(m(),c("ul",T,[g("li",U,[g("strong",null,v(y(a)("post.copyright.author")+y(a)("symbol.colon")),1),g("span",null,v(y(o).author.name),1)]),e.url?(m(),c("li",V,[g("strong",null,v(y(a)("post.copyright.link")+y(a)("symbol.colon")),1),g("a",{href:e.url,target:"_blank",title:y(a)("post.copyright.link")},v(decodeURI(e.url)),9,Y)])):f("v-if",!0),g("li",w,[g("strong",null,v(y(a)("post.copyright.license_title")+y(a)("symbol.colon")),1),g("span",{innerHTML:i.value},null,8,B)])]))}}),H={class:"inline-flex",text:"sm",py:"1"},L={key:1,mx:"2"},N=u({__name:"YunPostCategoriesAndTags",props:{frontmatter:{}},setup:e=>(e,t)=>{const a=M,s=P;return m(),c("div",H,[e.frontmatter.categories?(m(),h(a,{key:0,categories:e.frontmatter.categories},null,8,["categories"])):f("v-if",!0),e.frontmatter.categories&&e.frontmatter.tags?(m(),c("span",L)):f("v-if",!0),e.frontmatter.tags?(m(),h(s,{key:2,tags:e.frontmatter.tags},null,8,["tags"])):f("v-if",!0)])}}),S=u({__name:"post",setup(u){const g=e(),v=t(),$=a(),M=p((()=>"boolean"==typeof v.value.sponsor?v.value.sponsor:g.value.sponsor.enable)),P={"@type":"BlogPosting",headline:v.value.title,description:v.value.description,author:[{name:g.value.author.name,url:g.value.author.link}],datePublished:R(v.value.date||"").toDate(),dateModified:R(v.value.updated||"").toDate()},T=v.value.image||v.value.cover;return T&&(P.image=T),s(o(P)),(e,t)=>{const a=n,s=z,o=N,u=x,p=D,P=d("RouterView"),R=l,T=r,U=i;return m(),c(C,null,[_(T,null,{default:k((()=>[_(a),_(P,null,{default:k((({Component:t})=>[(m(),h(b(t),null,{"main-header-after":k((()=>[_(s,{frontmatter:y(v)},null,8,["frontmatter"]),_(o,{class:"mt-2",frontmatter:y(v)},null,8,["frontmatter"])])),"main-content-after":k((()=>[M.value?(m(),h(u,{key:0,m:"t-6"})):f("v-if",!0),y(v).copyright||!1!==y(v).copyright&&y(g).license.enabled?(m(),h(p,{key:1,url:y($),m:"y-4"},null,8,["url"])):f("v-if",!0)])),"aside-custom":k((()=>[j(e.$slots,"aside-custom")])),_:2},1024))])),_:3}),_(R)])),_:3}),_(U)],64)}}});export{S as default};
