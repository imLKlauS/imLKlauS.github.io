import{g as m,a4 as g,u as h,A as f,U as y,a9 as v,aa as C,Q as k,D as x,E as b,c as P,w as c,a8 as w,o as A,d as s,k as t,a as o,t as B,G as D,h as E}from"./app-93795bde.js";import{_ as R}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-3b0be3f5.js";const V={text:"center",class:"yun-text-light",p:"2"},G={class:"page-action",text:"center"},I=["title"],L=o("div",{"i-ri-arrow-go-back-line":""},null,-1),N=[L],H=m({__name:"gallery",setup(O){const l=g(),{t:n}=h(),e=f(),r=y(e);v([C({"@type":"CollectionPage"})]);const a=k(()=>e.value.photos||[]),_=x().value.addons["valaxy-addon-lightgallery"]?b(()=>D(()=>import("./YunGallery-68e9a0b2.js"),["assets/YunGallery-68e9a0b2.js","assets/app-93795bde.js","assets/index-309053d3.css","assets/YunGallery-ddb0362e.css"])):()=>null;return(T,i)=>{const u=R,p=E("router-view"),d=w;return A(),P(d,null,{"main-header":c(()=>[s(u,{title:t(r)||t(n)("title.gallery"),icon:t(e).icon||"i-ri-gallery-line",color:t(e).color},null,8,["title","icon","color"])]),"main-content":c(()=>[o("div",V,B(t(n)("counter.photos",t(a).length)),1),o("div",G,[o("a",{class:"yun-icon-btn",title:t(n)("accessibility.back"),onClick:i[0]||(i[0]=()=>t(l).back())},N,8,I)]),s(t(_),{photos:t(a)},null,8,["photos"]),s(p)]),_:1})}}});export{H as default};
