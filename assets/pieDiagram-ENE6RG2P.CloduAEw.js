import{a as ot}from"./chunks/vue-i18n.B2mNggf5.js";import{n as lt}from"./mermaid-parser.core.-lY63V1O.js";import{n as f}from"./chunk-Y2CYZVJY.CrVYBJys.js";import{m as U}from"./src.CyrYbFsP.js";import{H as st,K as ct,U as ut,a as dt,c as ft,f as gt,v as pt,w as ht,x as mt,y as vt}from"./chunk-WYO6CB5R.KweugrbK.js";import{t as xt}from"./ordinal.DeFzhqYh.js";import{n as C}from"./path.ZXy317L-.js";import{m as B}from"./dist.V197dny9.js";import{t as q}from"./arc.DHeRyPco.js";import{t as yt}from"./array.DbBWA3E_.js";import{i as St,p as wt}from"./chunk-ICXQ74PX.GBoRKcEb.js";import{t as At}from"./chunk-VAUOI2AC.Bqpeknd4.js";import{t as $t}from"./chunk-JWPE2WC7.y5piD74M.js";function Ct(t,r){return r<t?-1:r>t?1:r>=t?0:NaN}function Dt(t){return t}function Tt(){var t=Dt,r=Ct,u=null,c=C(0),g=C(B),A=C(0);function i(e){var l,s=(e=yt(e)).length,D,$,T=0,x=new Array(s),p=new Array(s),y=+c.apply(this,arguments),S=Math.min(B,Math.max(-B,g.apply(this,arguments)-y)),o,_=Math.min(Math.abs(S)/s,A.apply(this,arguments)),W=_*(S<0?-1:1),m;for(l=0;l<s;++l)(m=p[x[l]=l]=+t(e[l],l,e))>0&&(T+=m);for(r!=null?x.sort(function(k,h){return r(p[k],p[h])}):u!=null&&x.sort(function(k,h){return u(e[k],e[h])}),l=0,$=T?(S-s*W)/T:0;l<s;++l,y=o)D=x[l],m=p[D],o=y+(m>0?m*$:0)+W,p[D]={data:e[D],index:l,value:m,startAngle:y,endAngle:o,padAngle:_};return p}return i.value=function(e){return arguments.length?(t=typeof e=="function"?e:C(+e),i):t},i.sortValues=function(e){return arguments.length?(r=e,u=null,i):r},i.sort=function(e){return arguments.length?(u=e,r=null,i):u},i.startAngle=function(e){return arguments.length?(c=typeof e=="function"?e:C(+e),i):c},i.endAngle=function(e){return arguments.length?(g=typeof e=="function"?e:C(+e),i):g},i.padAngle=function(e){return arguments.length?(A=typeof e=="function"?e:C(+e),i):A},i}var J=gt.pie,V={sections:new Map,showData:!1,config:J},L=V.sections,I=V.showData,_t=structuredClone(J),Q={getConfig:f(()=>structuredClone(_t),"getConfig"),clear:f(()=>{L=new Map,I=V.showData,dt()},"clear"),setDiagramTitle:ct,getDiagramTitle:ht,setAccTitle:ut,getAccTitle:vt,setAccDescription:st,getAccDescription:pt,addSection:f(({label:t,value:r})=>{if(r<0)throw new Error(`"${t}" has invalid value: ${r}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);L.has(t)||(L.set(t,r),U.debug(`added new section: ${t}, with value: ${r}`))},"addSection"),getSections:f(()=>L,"getSections"),setShowData:f(t=>{I=t},"setShowData"),getShowData:f(()=>I,"getShowData")},bt=f((t,r)=>{$t(t,r),r.setShowData(t.showData),t.sections.map(r.addSection)},"populateDb"),kt={parse:f((function(){var t=ot(function*(r){const u=yield lt("pie",r);U.debug(u),bt(u,Q)});return function(r){return t.apply(this,arguments)}})(),"parse")},Et=f(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieCircle.highlighted{
    scale: 1.05;
    opacity: 1;
  }
  .pieCircle.highlightedOnHover:hover{
    transition-duration: 250ms;
    scale: 1.05;
    opacity: 1;
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),Mt=f(t=>{const r=[...t.values()].reduce((c,g)=>c+g,0),u=[...t.entries()].map(([c,g])=>({label:c,value:g})).filter(c=>c.value/r*100>=1);return Tt().value(c=>c.value).sort(null)(u)},"createPieArcs"),Vt={parser:kt,db:Q,renderer:{draw:f((t,r,u,c)=>{var g,A,i;U.debug(`rendering pie chart
`+t);const e=c.db,l=mt(),s=St(e.getConfig(),l.pie),D=40,$=18,T=4,x=450,p=x,y=At(r),S=y.append("g");S.attr("transform","translate(225,225)");const{themeVariables:o}=l;let[_]=wt(o.pieOuterStrokeWidth);(g=_)!==null&&g!==void 0||(_=2);const W=s.legendPosition,m=s.textPosition,k=s.donutHole>0&&s.donutHole<=.9?s.donutHole:0,h=Math.min(p,x)/2-D,Y=q().innerRadius(k*h).outerRadius(h),tt=q().innerRadius(h*m).outerRadius(h*m),E=S.append("g");E.append("circle").attr("cx",0).attr("cy",0).attr("r",h+_/2).attr("class","pieOuterCircle");const z=e.getSections(),et=Mt(z),at=[o.pie1,o.pie2,o.pie3,o.pie4,o.pie5,o.pie6,o.pie7,o.pie8,o.pie9,o.pie10,o.pie11,o.pie12];let F=0;z.forEach(a=>{F+=a});const j=et.filter(a=>(a.data.value/F*100).toFixed(0)!=="0"),G=xt(at).domain([...z.keys()]);E.selectAll("mySlices").data(j).enter().append("path").attr("d",Y).attr("fill",a=>G(a.data.label)).attr("class",a=>{let n="pieCircle";return s.highlightSlice==="hover"?n+=" highlightedOnHover":s.highlightSlice===a.data.label&&(n+=" highlighted"),n}),E.selectAll("mySlices").data(j).enter().append("text").text(a=>(a.data.value/F*100).toFixed(0)+"%").attr("transform",a=>"translate("+tt.centroid(a)+")").style("text-anchor","middle").attr("class","slice");const rt=S.append("text").text(e.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText"),M=[...z.entries()].map(([a,n])=>({label:a,value:n})),w=S.selectAll(".legend").data(M).enter().append("g").attr("class","legend");w.append("rect").attr("width",$).attr("height",$).style("fill",a=>G(a.label)).style("stroke",a=>G(a.label)),w.append("text").attr("x",22).attr("y",$-T).text(a=>e.getShowData()?`${a.label} [${a.value}]`:a.label);const b=Math.max(...w.selectAll("text").nodes().map(a=>{var n;return(n=a==null?void 0:a.getBoundingClientRect().width)!==null&&n!==void 0?n:0}));let H=x,N=490;const d=22,O=M.length*d;switch(W){case"center":w.attr("transform",(a,n)=>{const v=d*M.length/2,P=-b/2-22,R=n*d-v;return"translate("+P+","+R+")"});break;case"top":H+=O,w.attr("transform",(a,n)=>{const v=h;return`translate(${-b/2-22}, ${n*d-v})`}),E.attr("transform",()=>`translate(0, ${O+d})`);break;case"bottom":H+=O,w.attr("transform",(a,n)=>{const v=-185-d,P=-b/2-22,R=n*d-v;return"translate("+P+","+R+")"});break;case"left":N+=22+b,w.attr("transform",(a,n)=>{const v=d*M.length/2;return"translate(-207,"+(n*d-v)+")"}),E.attr("transform",()=>`translate(${b+$+T}, 0)`);break;default:N+=22+b,w.attr("transform",(a,n)=>{const v=d*M.length/2;return"translate(216,"+(n*d-v)+")"});break}const K=(A=(i=rt.node())===null||i===void 0?void 0:i.getBoundingClientRect().width)!==null&&A!==void 0?A:0,nt=p/2-K/2,it=p/2+K/2,X=Math.min(0,nt),Z=Math.max(N,it)-X;y.attr("viewBox",`${X} 0 ${Z} ${H}`),ft(y,H,Z,s.useMaxWidth)},"draw")},styles:Et};export{Vt as diagram};
