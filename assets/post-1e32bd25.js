import{g,u as x,S as $,I as h,o as a,i as r,a as o,t as d,k as e,f as u,m as Y,F as z,j as P,W as V,n as k,c as f,a3 as B,D as L,A as T,aj as j,a7 as M,ak as A,w as y,a6 as F,d as v,r as N}from"./app-8b122b6b.js";import{a as U,b as W,_ as H}from"./YunPostMeta.vue_vue_type_style_index_0_lang-ddb6bd70.js";const R={class:"post-copyright"},q={class:"post-copyright-author"},D={key:0,class:"post-copyright-link"},I=["href"],E={class:"post-copyright-license"},O=["innerHTML"],Q=g({__name:"ValaxyCopyright",props:{url:{default:""}},setup(i){const{t:n,locale:s}=x(),t=$(),l=t.value.license.type==="zero"?"1.0":"4.0",_=t.value.license.type==="zero"?"publicdomain":"licenses",p=h(()=>{const m=t.value.license.language?t.value.license.language:s.value==="zh-CN"?"zh":"en";return`https://creativecommons.org/${_}/${t.value.license.type}/${l}/deed.${m}`}),c=h(()=>n("post.copyright.license_content",[`<a href="${p.value}" target="_blank" rel="noopener" title="CC ${`${t.value.license.type.toUpperCase()} ${l}`} ">CC ${t.value.license.type.toUpperCase()}</a>`]));return(m,C)=>(a(),r("ul",R,[o("li",q,[o("strong",null,d(e(n)("post.copyright.author")+e(n)("symbol.colon")),1),o("span",null,d(e(t).author.name),1)]),i.url?(a(),r("li",D,[o("strong",null,d(e(n)("post.copyright.link")+e(n)("symbol.colon")),1),o("a",{href:i.url},d(i.url),9,I)])):u("v-if",!0),o("li",E,[o("strong",null,d(e(n)("post.copyright.license_title")+e(n)("symbol.colon")),1),o("span",{innerHTML:e(c)},null,8,O)])]))}});const G={class:"yun-sponsor-container flex-center flex-col"},J=["title"],K=o("div",{"i-ri-heart-line":""},null,-1),X=[K],Z={key:0,class:"sponsor-description",mb:"4",text:"sm"},ee={class:"flex justify-around"},te=["href"],ne=["src","title"],oe=g({__name:"YunSponsor",setup(i){const{t:n}=x(),s=$(),t=Y(!1),l=h(()=>{var _;return((_=s.value.sponsor)==null?void 0:_.title)??n("reward.donate")});return(_,p)=>(a(),r("div",G,[o("button",{class:"sponsor-button yun-icon-btn shadow hover:shadow-md",title:e(l),text:"red-400",onClick:p[0]||(p[0]=c=>t.value=!t.value)},X,8,J),o("div",{class:k(["qrcode-container qrcode flex-center flex-col",t.value&&"show"]),m:"y-4"},[e(s).sponsor.description?(a(),r("div",Z,d(e(s).sponsor.description),1)):u("v-if",!0),o("div",ee,[(a(!0),r(z,null,P(e(s).sponsor.methods,(c,m)=>(a(),r("a",{key:m,class:"flex-center flex-col animate-iteration-1 animate-fade-in",href:c.url,target:"_blank",style:V(`color:${c.color}`)},[o("img",{class:"sponsor-method-img",border:"~ rounded",p:"1",loading:"lazy",src:c.url,title:c.name},null,8,ne),o("div",{text:"xl",m:"2",class:k(c.icon)},null,2)],12,te))),128))])],2)]))}});const se={class:"inline-flex",text:"sm",py:"1"},ae={key:1,mx:"2"},ie=g({__name:"YunPostCategoriesAndTags",props:{frontmatter:null},setup(i){return(n,s)=>{const t=U,l=W;return a(),r("div",se,[i.frontmatter.categories?(a(),f(t,{key:0,categories:i.frontmatter.categories},null,8,["categories"])):u("v-if",!0),i.frontmatter.categories&&i.frontmatter.tags?(a(),r("span",ae,"-")):u("v-if",!0),i.frontmatter.tags?(a(),f(l,{key:2,tags:i.frontmatter.tags},null,8,["tags"])):u("v-if",!0)])}}}),le={key:0,flex:"~",text:"sm",py:"1"},re=["title"],ce=o("div",{"inline-flex":"","i-ri-eye-line":""},null,-1),ue=["data-path"],_e=["title"],pe=o("div",{"inline-flex":"","i-ri-chat-4-line":""},null,-1),me=["data-path"],de=g({__name:"YunWalineMeta",setup(i){const n=B(),s=L(),t=h(()=>s.value.addons["valaxy-addon-waline"]),{t:l}=x();return(_,p)=>e(t)&&e(t).options?(a(),r("div",le,[e(t).options.pageview?(a(),r("div",{key:0,"inline-flex":"",justify:"center",items:"center",mx:"2",title:e(l)("post.pageview_count")},[ce,o("span",{"ml-1":"","inline-flex":"",class:"waline-pageview-count","data-path":e(n).path},null,8,ue)],8,re)):u("v-if",!0),e(t).options.comment?(a(),r("div",{key:1,"inline-flex":"",justify:"center",items:"center",mx:"2",title:e(l)("post.comment_count")},[pe,o("span",{"ml-1":"","inline-flex":"",class:"waline-comment-count","data-path":e(n).path},null,8,me)],8,_e)):u("v-if",!0)])):u("v-if",!0)}}),ge=g({__name:"post",setup(i){const n=$(),s=T(),t=j(),l=h(()=>typeof s.value.sponsor=="boolean"?s.value.sponsor:n.value.sponsor.enable);return M(A({"@type":"BlogPosting",headline:s.value.title,description:s.value.description,author:[{name:n.value.author.name,url:n.value.author.link}]})),(_,p)=>{const c=H,m=de,C=ie,b=oe,w=Q,S=F;return a(),f(S,null,{"main-header-after":y(()=>[v(c,{frontmatter:e(s)},null,8,["frontmatter"]),v(m),v(C,{frontmatter:e(s)},null,8,["frontmatter"])]),"main-content-after":y(()=>[e(l)?(a(),f(b,{key:0,m:"t-6"})):u("v-if",!0),e(s).copyright||e(n).license.enabled?(a(),f(w,{key:1,url:e(t),m:"y-4"},null,8,["url"])):u("v-if",!0)]),"aside-custom":y(()=>[N(_.$slots,"aside-custom")]),_:3})}}});export{ge as default};
