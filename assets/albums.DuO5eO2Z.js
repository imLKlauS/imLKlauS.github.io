import{_ as a,u as s,a as l,b as t,d as e,c as u,e as n,f as o}from"./app.BHTvhCs8.js";import{o as r}from"./index.BoOkNg8c.js";import{f as i,N as m,O as c,$ as p,R as b,u as f,S as _,P as g,F as d,a0 as v,c as j,M as y,B as h,a7 as k}from"./framework.CXYGarVr.js";import{_ as x}from"./YunPageHeader.vue_vue_type_script_setup_true_lang.REEBqsfl.js";import"./chunks/dayjs.luRsnflP.js";import{u as C}from"./chunks/vue-i18n.DE4Bnvxi.js";import"./chunks/vue-router.2jJX8cgW.js";import"./chunks/nprogress.Bci-yEh4.js";import"./chunks/pinia.D4p-MF8b.js";import"./chunks/@vueuse/motion.DjOBw7pe.js";import"./animation.Dk5apPTb.js";const P=["title"],Y=["src","alt","on-error"],w={class:"yun-album-caption yun-title-effects text-$va-c-text inline-flex-center"},A=i({__name:"YunAlbum",props:{album:{}},setup:s=>(s,l)=>{const t=a;return c(),m(t,{class:"yun-album-list-item",to:s.album.url},{default:p((()=>[b("figure",{class:"m-10",flex:"~ col",title:s.album.desc},[b("img",{loading:"lazy",class:"yun-album-list-cover",src:s.album.cover,alt:s.album.caption,"on-error":f(r)},null,40,Y),b("figcaption",w,_(s.album.caption),1)],8,P)])),_:1},8,["to"])}}),R={class:"yun-album-list mb-4"},$=i({__name:"YunAlbumList",props:{albums:{}},setup:a=>(a,s)=>{const l=A;return c(),g("div",R,[(c(!0),g(d,null,v(a.albums,(a=>(c(),m(l,{key:a.url,album:a},null,8,["album"])))),128))])}}),z={text:"center",class:"yun-text-light",p:"2"},B=i({__name:"albums",setup(a){const{t:r}=C(),i=s(),v=l(i);t([e({"@type":"CollectionPage"})]);const P=j((()=>i.value.albums||[]));return(a,s)=>{const l=u,t=x,e=$,j=y("RouterView"),C=n,Y=o;return c(),g(d,null,[h(C,null,{default:p((()=>[h(l),h(j,null,{default:p((({Component:a})=>[(c(),m(k(a),null,{"main-header":p((()=>[h(t,{title:f(v)||f(r)("title.album"),icon:f(i).icon||"i-ri-gallery-line",color:f(i).color,"page-title-class":f(i).pageTitleClass},null,8,["title","icon","color","page-title-class"])])),"main-content":p((()=>[b("div",z,_(f(r)("counter.albums",P.value.length)),1),h(e,{albums:P.value},null,8,["albums"]),h(j)])),_:2},1024))])),_:1})])),_:1}),h(Y)],64)}}});export{B as default};
