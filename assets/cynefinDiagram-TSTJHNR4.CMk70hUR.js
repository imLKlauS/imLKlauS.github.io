import{a as gt,o as at}from"./chunks/vue-i18n.B2mNggf5.js";import{n as $t}from"./mermaid-parser.core.-lY63V1O.js";import{n as s}from"./chunk-Y2CYZVJY.CrVYBJys.js";import{m as U}from"./src.CyrYbFsP.js";import{D as it,H as bt,K as wt,U as Ct,a as Dt,b as K,c as vt,f as At,v as Tt,w as kt,y as Bt}from"./chunk-WYO6CB5R.KweugrbK.js";import{i as Q}from"./chunk-ICXQ74PX.GBoRKcEb.js";import{t as St}from"./chunk-VAUOI2AC.Bqpeknd4.js";import{t as Mt}from"./chunk-JWPE2WC7.y5piD74M.js";var st=s(()=>({domains:new Map,transitions:[]}),"createDefaultData"),H=st(),j={getDomains:s(()=>H.domains,"getDomains"),getTransitions:s(()=>H.transitions,"getTransitions"),setDomains:s(t=>{if(t)for(const n of t){var e;const o=n.domain,d=((e=n.items)!==null&&e!==void 0?e:[]).map(r=>({label:r.label}));H.domains.set(o,{name:o,items:d})}},"setDomains"),setTransitions:s(t=>{t&&(H.transitions=t.filter(e=>e.from===e.to?(U.warn(`Cynefin: self-loop transition on domain "${e.from}" is not meaningful and will be skipped.`),!1):!0).map(e=>({from:e.from,to:e.to,label:e.label||void 0})))},"setTransitions"),getConfig:s(()=>Q(at(at({},At.cynefin),K().cynefin)),"getConfig"),clear:s(()=>{Dt(),H=st()},"clear"),setAccTitle:Ct,getAccTitle:Bt,setDiagramTitle:wt,getDiagramTitle:kt,getAccDescription:Tt,setAccDescription:bt},zt=s(t=>{Mt(t,j),j.setDomains(t.domains),j.setTransitions(t.transitions)},"populate"),Lt={parse:s((function(){var t=gt(function*(e){const n=yield $t("cynefin",e);U.debug(n),zt(n)});return function(e){return t.apply(this,arguments)}})(),"parse")};function E(t){let e=t+1831565813|0;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}s(E,"seededRandom");function ct(t){let e=0;for(let n=0;n<t.length;n++){const o=t.charCodeAt(n);e=(e<<5)-e+o,e|=0}return e}s(ct,"hashString");function lt(t,e){return typeof t=="number"&&Number.isFinite(t)&&t!==0?t:ct(e)}s(lt,"resolveSeed");function dt(t,e,n,o){const d=t/2,r=o!=null?o:t*.015,M=7,W=e/M,f=[];for(let a=0;a<=M;a++){const l=E(n+a*17)*r*2-r;f.push({x:d+l,y:a*W})}let v=`M${f[0].x},${f[0].y}`;for(let a=0;a<f.length-1;a++){const l=f[a],p=f[a+1],m=(l.y+p.y)/2,y=a%2===0?1:-1,h=r*1.5*y*E(n+a*31+7),w=l.x+h,I=m,_=p.x-h;v+=` C${w},${I} ${_},${m} ${p.x},${p.y}`}return v}s(dt,"generateFoldPath");function ft(t,e,n,o){const d=e/2,r=o!=null?o:e*.015,M=7,W=t/M,f=[];for(let a=0;a<=M;a++){const l=E(n+a*23)*r*2-r;f.push({x:a*W,y:d+l})}let v=`M${f[0].x},${f[0].y}`;for(let a=0;a<f.length-1;a++){const l=f[a],p=f[a+1],m=(l.x+p.x)/2,y=a%2===0?1:-1,h=r*1.5*y*E(n+a*37+11),w=m,I=l.y+h,_=m,G=p.y-h;v+=` C${w},${I} ${_},${G} ${p.x},${p.y}`}return v}s(ft,"generateHorizontalBoundary");function mt(t,e){const n=t/2,o=e*.5,d=e,r=t*.03;return[`M${n},${o}`,`C${n+r},${o+(d-o)*.2}`,`${n-r*1.5},${o+(d-o)*.55}`,`${n+r*.5},${o+(d-o)*.75}`,`C${n-r},${o+(d-o)*.85}`,`${n+r*.3},${o+(d-o)*.95}`,`${n},${d}`].join(" ")}s(mt,"generateCliffPath");function pt(t,e,n,o){return[`M${t-n},${e}`,`A${n},${o} 0 1,1 ${t+n},${e}`,`A${n},${o} 0 1,1 ${t-n},${e}`,"Z"].join(" ")}s(pt,"generateConfusionPath");var rt={complex:{model:"Probe → Sense → Respond",practice:"Emergent Practices"},complicated:{model:"Sense → Analyse → Respond",practice:"Good Practices"},clear:{model:"Sense → Categorise → Respond",practice:"Best Practices"},chaotic:{model:"Act → Sense → Respond",practice:"Novel Practices"},confusion:{model:"",practice:"Disorder"}},Nt=s((t,e)=>{const n=t/2,o=e/2;return{complex:{cx:n/2,cy:o/2,x:0,y:0,w:n,h:o},complicated:{cx:n+n/2,cy:o/2,x:n,y:0,w:n,h:o},chaotic:{cx:n/2,cy:o+o/2,x:0,y:o,w:n,h:o},clear:{cx:n+n/2,cy:o+o/2,x:n,y:o,w:n,h:o},confusion:{cx:n,cy:o,x:n*.7,y:o*.7,w:n*.6,h:o*.6}}},"getDomainLayouts"),Pt=s(()=>Q(it(),K().themeVariables).cynefin,"getCynefinDomainColors"),O=3,Wt={draw:s((t,e,n,o)=>{var d;const r=o.db,M=r.getDomains(),W=r.getTransitions(),f=r.getDiagramTitle(),v=r.getAccTitle(),a=r.getAccDescription(),l=r.getConfig(),p=Pt();U.debug("Rendering Cynefin diagram");const m=l.width,y=l.height,h=l.padding,w=l.showDomainDescriptions,I=l.boundaryAmplitude,_=m+h*2,G=y+h*2,Y={complex:p.complexBg,complicated:p.complicatedBg,clear:p.clearBg,chaotic:p.chaoticBg,confusion:p.confusionBg},A=St(e);vt(A,G,_,(d=l.useMaxWidth)!==null&&d!==void 0?d:!0),A.attr("viewBox",`0 0 ${_} ${G}`),v&&A.append("title").text(v),a&&A.append("desc").text(a);const T=A.append("g").attr("transform",`translate(${h}, ${h})`),R=Nt(m,y),Z=lt(l.seed,e),yt=T.append("g").attr("class","cynefin-backgrounds"),V=["complex","complicated","chaotic","clear"];for(const c of V){const i=R[c];yt.append("rect").attr("class","cynefinDomain").attr("x",i.x).attr("y",i.y).attr("width",i.w).attr("height",i.h).attr("fill",Y[c]).attr("fill-opacity",.4).attr("stroke","none")}const q=T.append("g").attr("class","cynefin-boundaries");q.append("path").attr("class","cynefinBoundary").attr("d",dt(m,y,Z,I)).attr("fill","none"),q.append("path").attr("class","cynefinBoundary").attr("d",ft(m,y,Z+100,I)).attr("fill","none"),q.append("path").attr("class","cynefinCliff").attr("d",mt(m,y)).attr("fill","none");const ut=m*.15,xt=y*.15;T.append("path").attr("class","cynefinConfusion").attr("d",pt(m/2,y/2,ut,xt)).attr("fill",Y.confusion).attr("fill-opacity",.5);const J=T.append("g").attr("class","cynefin-labels");for(const c of V){const i=R[c];J.append("text").attr("class","cynefinDomainLabel").attr("x",i.cx).attr("y",w?i.cy-30:i.cy).attr("text-anchor","middle").attr("dominant-baseline","middle").text(c.charAt(0).toUpperCase()+c.slice(1))}if(J.append("text").attr("class","cynefinDomainLabel").attr("x",m/2).attr("y",w?y/2-10:y/2).attr("text-anchor","middle").attr("dominant-baseline","middle").text("Confusion"),w){const c=T.append("g").attr("class","cynefin-subtitles");for(const i of V){const x=R[i],u=rt[i];c.append("text").attr("class","cynefinSubtitle").attr("x",x.cx).attr("y",x.cy-10).attr("text-anchor","middle").attr("dominant-baseline","middle").text(u.model),c.append("text").attr("class","cynefinSubtitle").attr("x",x.cx).attr("y",x.cy+5).attr("text-anchor","middle").attr("dominant-baseline","middle").text(u.practice)}c.append("text").attr("class","cynefinSubtitle").attr("x",m/2).attr("y",y/2+8).attr("text-anchor","middle").attr("dominant-baseline","middle").text(rt.confusion.practice)}const tt=T.append("g").attr("class","cynefin-items"),F=26,et=10;for(const c of["complex","complicated","chaotic","clear","confusion"]){const i=M.get(c);if(!i||i.items.length===0)continue;const x=R[c],u=c==="confusion";let z=i.items,L=0;u&&i.items.length>O&&(L=i.items.length-O,z=i.items.slice(0,O));let k;if(u){const $=w?22:14;k=x.cy+$}else k=x.cy+(w?25:15);if([...z].forEach(($,B)=>{const C=k+B*30,S=tt.append("g"),N=S.append("text").attr("class","cynefinItemText").attr("x",0).attr("y",F/2).attr("text-anchor","middle").attr("dominant-baseline","central").text($.label);let b=$.label.length*7;const g=N.node();if(g&&typeof g.getBBox=="function"){const X=g.getBBox();X.width>0&&(b=X.width)}const D=b+et*2,P=x.cx-D/2;S.attr("transform",`translate(${P}, ${C})`),S.insert("rect","text").attr("class","cynefinItem").attr("x",0).attr("y",0).attr("width",D).attr("height",F).attr("rx",4).attr("ry",4).attr("fill",Y[c]).attr("fill-opacity",.95),N.attr("x",D/2).attr("y",F/2)}),L>0){const $=k+z.length*30,B=`+${L} more`,C=tt.append("g"),S=C.append("text").attr("class","cynefinItemText").attr("x",0).attr("y",F/2).attr("text-anchor","middle").attr("dominant-baseline","central").text(B);let N=B.length*7;const b=S.node();if(b&&typeof b.getBBox=="function"){const P=b.getBBox();P.width>0&&(N=P.width)}const g=N+et*2,D=x.cx-g/2;C.attr("transform",`translate(${D}, ${$})`),C.insert("rect","text").attr("class","cynefinItemOverflow").attr("x",0).attr("y",0).attr("width",g).attr("height",F).attr("rx",4).attr("ry",4).attr("fill",Y[c]).attr("fill-opacity",.6),S.attr("x",g/2).attr("y",F/2)}}if(W.length>0){const c=A.select("defs").empty()?A.append("defs"):A.select("defs"),i=`cynefin-arrow-${e}`;c.append("marker").attr("id",i).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerWidth",6).attr("markerHeight",6).attr("orient","auto-start-reverse").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("class","cynefinArrowHead");const x=T.append("g").attr("class","cynefin-arrows");W.forEach(u=>{const z=R[u.from],L=R[u.to];if(!z||!L)return;if(u.from===u.to){U.warn(`Cynefin renderer: skipping self-loop on domain "${u.from}"`);return}const k=z.cx,$=z.cy,B=L.cx,C=L.cy,S=(k+B)/2,N=($+C)/2,b=B-k,g=C-$,D=Math.sqrt(b*b+g*g),P=D*.15,X=-g/D,ht=b/D,nt=S+X*P,ot=N+ht*P;x.append("path").attr("class","cynefinArrowLine").attr("d",`M${k},${$} Q${nt},${ot} ${B},${C}`).attr("fill","none").attr("marker-end",`url(#${i})`),u.label&&x.append("text").attr("class","cynefinArrowLabel").attr("x",nt).attr("y",ot-6).attr("text-anchor","middle").attr("dominant-baseline","auto").text(u.label)})}f&&T.append("text").attr("class","cynefinTitle").attr("x",m/2).attr("y",-h/2).attr("text-anchor","middle").attr("dominant-baseline","middle").text(f)},"draw")},It=s(()=>Q(it(),K().themeVariables).cynefin,"getCynefinTheme"),jt={parser:Lt,db:j,renderer:Wt,styles:s(()=>{const t=It();return`
	.cynefinDomain {
		stroke: none;
	}
	.cynefinDomainLabel {
		font-size: ${t.domainFontSize}px;
		font-weight: bold;
		fill: ${t.labelColor};
	}
	.cynefinSubtitle {
		font-size: ${t.itemFontSize-1}px;
		fill: ${t.textColor};
		font-style: italic;
	}
	.cynefinItem {
		fill-opacity: 0.95;
		stroke: ${t.boundaryColor};
		stroke-width: 1;
	}
	.cynefinItemText {
		font-size: ${t.itemFontSize}px;
		fill: ${t.textColor};
	}
	.cynefinItemOverflow {
		fill-opacity: 0.6;
		stroke: ${t.boundaryColor};
		stroke-width: 1;
		stroke-dasharray: 3 2;
	}
	.cynefinBoundary {
		stroke: ${t.boundaryColor};
		stroke-width: ${t.boundaryWidth};
		stroke-dasharray: 6 3;
	}
	.cynefinCliff {
		stroke: ${t.cliffColor};
		stroke-width: ${t.cliffWidth};
	}
	.cynefinConfusion {
		stroke: ${t.boundaryColor};
		stroke-width: 1.5;
		stroke-dasharray: 4 2;
	}
	.cynefinArrowLine {
		stroke: ${t.arrowColor};
		stroke-width: ${t.arrowWidth};
		fill: none;
	}
	.cynefinArrowHead {
		fill: ${t.arrowColor};
		stroke: none;
	}
	.cynefinArrowLabel {
		font-size: ${t.itemFontSize-1}px;
		fill: ${t.textColor};
	}
	.cynefinTitle {
		font-size: ${t.domainFontSize+2}px;
		font-weight: bold;
		fill: ${t.labelColor};
	}
	`},"styles")};export{jt as diagram};
