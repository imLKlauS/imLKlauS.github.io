import{f as t,M as e,P as i,O as a,F as n,a0 as s,N as r,$ as l,R as o,S as p,c as d,V as c,u as f,X as u,B as m}from"./framework.CXYGarVr.js";import{m as v,C as g,F as x,l as y}from"./app.BHTvhCs8.js";import{a as h}from"./chunks/vue-router.2jJX8cgW.js";import"./chunks/dayjs.luRsnflP.js";import{u as k}from"./chunks/vue-i18n.DE4Bnvxi.js";import{f as w}from"./index.BoOkNg8c.js";const _={class:"post-tags inline-flex",items:"center",gap:"1",flex:"wrap 1",justify:"end"},b=t({__name:"YunPostTags",props:{tags:{}},setup:t=>(t,d)=>{const c=e("RouterLink");return a(),i("div",_,[(a(!0),i(n,null,s(t.tags,((t,e)=>(a(),r(c,{key:e,to:{path:"/tags/",query:{tag:t}},class:"transition post-tag inline-flex-center text-xs border-$va-c-divider","px-2":"",h:"7","rounded-full":"",border:"",hover:"bg-blue-500 text-white"},{default:l((()=>[o("span",null,p(t),1)])),_:2},1032,["to"])))),128))])}}),j=t({__name:"YunPostCategories",props:{categories:{}},setup:t=>(t,i)=>{const n=e("RouterLink");return a(),r(n,{to:{path:"/categories",query:{category:Array.isArray(t.categories)?t.categories.join("/"):t.categories}},class:"transition post-category inline-flex-center text-xs border-$va-c-divider","px-2":"",h:"7",border:"","rounded-full":"",hover:"bg-blue-500 text-white"},{default:l((()=>[i[0]||(i[0]=o("div",{m:"x-1","inline-flex":"","i-ri-folder-2-line":""},null,-1)),o("span",null,p(Array.isArray(t.categories)?t.categories.join(" / "):t.categories),1)])),_:1},8,["to"])}}),$={key:0,class:"inline-flex gap-4",text:"sm",h:"5"},M=["title"],P=["data-path"],Y=["title"],A=["data-path"],C=t({__name:"YunWalineMeta",setup(t){const e=h(),n=v(),s=d((()=>n.value.addons["valaxy-addon-waline"])),{t:r}=k();return(t,n)=>s.value&&s.value.options?(a(),i("div",$,[s.value.options.pageview?(a(),i("div",{key:0,"inline-flex":"",justify:"center",items:"center",title:f(r)("post.pageview_count")},[n[0]||(n[0]=o("div",{"inline-flex":"","i-ri-eye-line":""},null,-1)),o("span",{"ml-1":"","inline-flex":"",class:"waline-pageview-count op-80","data-path":f(e).path},null,8,P)],8,M)):c("v-if",!0),s.value.options.comment?(a(),i("div",{key:1,"inline-flex":"",justify:"center",items:"center",title:f(r)("post.comment_count")},[n[1]||(n[1]=o("div",{"inline-flex":"","i-ri-chat-4-line":""},null,-1)),o("span",{"ml-1":"","inline-flex":"",class:"waline-comment-count op-80","data-path":f(e).path},null,8,A)],8,Y)):c("v-if",!0)])):c("v-if",!0)}}),R={key:0,class:"post-time flex items-center gap-4"},T=["title"],q={class:"op-80"},F=["title"],L={class:"op-80"},B=t({__name:"YunPostDateMeta",props:{frontmatter:{}},setup(t){const{t:e}=k();return(t,n)=>t.frontmatter.date?(a(),i("div",R,[o("span",{class:"posted-time inline-flex-center gap-1",title:f(e)("post.posted")+f(w)(t.frontmatter.date)},[n[0]||(n[0]=o("div",{class:"inline-block","i-ri-calendar-line":""},null,-1)),o("time",q,p(f(g)(t.frontmatter.date)),1)],8,T),t.frontmatter.updated&&t.frontmatter.updated!==t.frontmatter.date?(a(),i("span",{key:0,class:"edited-time inline-flex-center gap-1",title:f(e)("post.edited")+f(w)(t.frontmatter.updated)},[n[1]||(n[1]=o("div",{"i-ri-calendar-2-line":""},null,-1)),o("time",L,p(f(g)(t.frontmatter.updated)),1)],8,F)):c("v-if",!0)])):c("v-if",!0)}}),D={key:0,class:"post-draft-icon",title:"draft"},N=["title"],O={key:0,"i-ri-eye-close-line":""},S={key:1,"i-ri-eye-off-line":""},V={key:2,class:"post-top-icon",color:"$va-c-warning"},W={class:"inline-flex-center gap-4"},X={key:0,class:"inline-flex-center post-counter gap-4"},z=["title"],E={class:"op-80"},G=["title"],H={class:"op-80"},I=t({__name:"YunPostMeta",props:{frontmatter:{}},setup(t){const e=x(),{t:s}=k(),r=y();return(t,l)=>{const d=B,v=C;return a(),i(n,null,[t.frontmatter.draft?(a(),i("div",D,l[0]||(l[0]=[o("div",{"i-ri-draft-line":""},null,-1)]))):c("v-if",!0),t.frontmatter.hide?(a(),i("div",{key:1,class:"post-top-icon",color:"$va-c-danger",title:`hide:${t.frontmatter.hide}`},["index"===t.frontmatter.hide?(a(),i("div",O)):(a(),i("div",S))],8,N)):c("v-if",!0),t.frontmatter.top?(a(),i("div",V,l[1]||(l[1]=[o("div",{"i-ri-pushpin-line":""},null,-1)]))):c("v-if",!0),t.frontmatter?(a(),i("div",{key:3,class:u(["post-meta gap-4",{"flex-col gap-2!":f(e).isMobile||t.frontmatter.updated}]),flex:"~ center",text:"sm"},[m(d,{frontmatter:t.frontmatter},null,8,["frontmatter"]),o("div",W,[f(r).statistics.enable?(a(),i("div",X,[t.frontmatter.wordCount?(a(),i("span",{key:0,class:"word-count inline-flex-center gap-1",title:f(s)("statistics.word")},[l[2]||(l[2]=o("div",{class:"inline-block","i-ri-file-word-line":""},null,-1)),o("span",E,p(t.frontmatter.wordCount),1)],8,z)):c("v-if",!0),t.frontmatter.readingTime?(a(),i("span",{key:1,class:"reading-time inline-flex-center gap-1",title:f(s)("statistics.time")},[l[3]||(l[3]=o("div",{"i-ri-timer-line":""},null,-1)),o("time",H,p(t.frontmatter.readingTime)+"m",1)],8,G)):c("v-if",!0)])):c("v-if",!0),m(v)])],2)):c("v-if",!0)],64)}}});export{j as _,b as a,I as b};
