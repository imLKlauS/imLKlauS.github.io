import{a as S,o as M}from"./chunks/vue-i18n.DzxELtIk.js";import{n as O}from"./mermaid-parser.core.DSGAPN2O.js";import{n as d}from"./chunk-Y2CYZVJY.CrVYBJys.js";import{m as k}from"./src.CyrYbFsP.js";import{D as R,H as I,K as D,U as E,a as F,b as w,c as G,f as P,v as z,w as W,y as B}from"./chunk-WYO6CB5R.BRipa2wo.js";import{i as y}from"./chunk-ICXQ74PX.DB-1i-wO.js";import{t as H}from"./chunk-VAUOI2AC.C39bfvqn.js";import{t as j}from"./chunk-JWPE2WC7.y5piD74M.js";var x={showLegend:!0,ticks:5,max:null,min:0,graticule:"circle"},b={axes:[],curves:[],options:x},v=structuredClone(b),U=P.radar,V=d(()=>y(M(M({},U),w().radar)),"getConfig"),C=d(()=>v.axes,"getAxes"),K=d(()=>v.curves,"getCurves"),N=d(()=>v.options,"getOptions"),X=d(a=>{v.axes=a.map(t=>{var e;return{name:t.name,label:(e=t.label)!==null&&e!==void 0?e:t.name}})},"setAxes"),Y=d(a=>{v.curves=a.map(t=>{var e;return{name:t.name,label:(e=t.label)!==null&&e!==void 0?e:t.name,entries:Z(t.entries)}})},"setCurves"),Z=d(a=>{if(a[0].axis==null)return a.map(e=>e.value);const t=C();if(t.length===0)throw new Error("Axes must be populated before curves for reference entries");return t.map(e=>{const r=a.find(n=>{var o;return((o=n.axis)===null||o===void 0?void 0:o.$refText)===e.name});if(r===void 0)throw new Error("Missing entry for axis "+e.label);return r.value})},"computeCurveEntries"),$={getAxes:C,getCurves:K,getOptions:N,setAxes:X,setCurves:Y,setOptions:d(a=>{var t,e,r,n,o,i,c,l,s,p;const u=a.reduce((m,g)=>(m[g.name]=g,m),{});v.options={showLegend:(t=(e=u.showLegend)===null||e===void 0?void 0:e.value)!==null&&t!==void 0?t:x.showLegend,ticks:(r=(n=u.ticks)===null||n===void 0?void 0:n.value)!==null&&r!==void 0?r:x.ticks,max:(o=(i=u.max)===null||i===void 0?void 0:i.value)!==null&&o!==void 0?o:x.max,min:(c=(l=u.min)===null||l===void 0?void 0:l.value)!==null&&c!==void 0?c:x.min,graticule:(s=(p=u.graticule)===null||p===void 0?void 0:p.value)!==null&&s!==void 0?s:x.graticule}},"setOptions"),getConfig:V,clear:d(()=>{F(),v=structuredClone(b)},"clear"),setAccTitle:E,getAccTitle:B,setDiagramTitle:D,getDiagramTitle:W,getAccDescription:z,setAccDescription:I},q=d(a=>{j(a,$);const{axes:t,curves:e,options:r}=a;$.setAxes(t),$.setCurves(e),$.setOptions(r)},"populate"),J={parse:d((function(){var a=S(function*(t){const e=yield O("radar",t);k.debug(e),q(e)});return function(t){return a.apply(this,arguments)}})(),"parse")},Q=d((a,t,e,r)=>{var n;const o=r.db,i=o.getAxes(),c=o.getCurves(),l=o.getOptions(),s=o.getConfig(),p=o.getDiagramTitle(),u=tt(H(t),s),m=(n=l.max)!==null&&n!==void 0?n:Math.max(...c.map(f=>Math.max(...f.entries))),g=l.min,h=Math.min(s.width,s.height)/2;et(u,i,h,l.ticks,l.graticule),at(u,i,h,s),_(u,i,c,g,m,l.graticule,s),T(u,c,l.showLegend,s),u.append("text").attr("class","radarTitle").text(p).attr("x",0).attr("y",-s.height/2-s.marginTop)},"draw"),tt=d((a,t)=>{var e;const r=t.width+t.marginLeft+t.marginRight,n=t.height+t.marginTop+t.marginBottom,o={x:t.marginLeft+t.width/2,y:t.marginTop+t.height/2};return G(a,n,r,(e=t.useMaxWidth)!==null&&e!==void 0?e:!0),a.attr("viewBox",`0 0 ${r} ${n}`).attr("overflow","visible"),a.append("g").attr("transform",`translate(${o.x}, ${o.y})`)},"drawFrame"),et=d((a,t,e,r,n)=>{if(n==="circle")for(let o=0;o<r;o++){const i=e*(o+1)/r;a.append("circle").attr("r",i).attr("class","radarGraticule")}else if(n==="polygon"){const o=t.length;for(let i=0;i<r;i++){const c=e*(i+1)/r,l=t.map((s,p)=>{const u=2*p*Math.PI/o-Math.PI/2;return`${c*Math.cos(u)},${c*Math.sin(u)}`}).join(" ");a.append("polygon").attr("points",l).attr("class","radarGraticule")}}},"drawGraticule"),at=d((a,t,e,r)=>{const n=t.length;for(let o=0;o<n;o++){const i=t[o].label,c=2*o*Math.PI/n-Math.PI/2,l=Math.cos(c),s=Math.sin(c);a.append("line").attr("x1",0).attr("y1",0).attr("x2",e*r.axisScaleFactor*l).attr("y2",e*r.axisScaleFactor*s).attr("class","radarAxisLine");const p=l>.01?"start":l<-.01?"end":"middle",u=s>.01?"hanging":s<-.01?"auto":"central",m=4;a.append("text").text(i).attr("x",e*r.axisLabelFactor*l+m*l).attr("y",e*r.axisLabelFactor*s+m*s).attr("text-anchor",p).attr("dominant-baseline",u).attr("class","radarAxisLabel")}},"drawAxes");function _(a,t,e,r,n,o,i){const c=t.length,l=Math.min(i.width,i.height)/2;e.forEach((s,p)=>{if(s.entries.length!==c)return;const u=s.entries.map((m,g)=>{const h=2*Math.PI*g/c-Math.PI/2,f=A(m,r,n,l);return{x:f*Math.cos(h),y:f*Math.sin(h)}});o==="circle"?a.append("path").attr("d",L(u,i.curveTension)).attr("class",`radarCurve-${p}`):o==="polygon"&&a.append("polygon").attr("points",u.map(m=>`${m.x},${m.y}`).join(" ")).attr("class",`radarCurve-${p}`)})}d(_,"drawCurves");function A(a,t,e,r){return r*(Math.min(Math.max(a,t),e)-t)/(e-t)}d(A,"relativeRadius");function L(a,t){const e=a.length;let r=`M${a[0].x},${a[0].y}`;for(let n=0;n<e;n++){const o=a[(n-1+e)%e],i=a[n],c=a[(n+1)%e],l=a[(n+2)%e],s={x:i.x+(c.x-o.x)*t,y:i.y+(c.y-o.y)*t},p={x:c.x-(l.x-i.x)*t,y:c.y-(l.y-i.y)*t};r+=` C${s.x},${s.y} ${p.x},${p.y} ${c.x},${c.y}`}return`${r} Z`}d(L,"closedRoundCurve");function T(a,t,e,r){if(!e)return;const n=(r.width/2+r.marginRight)*3/4,o=-(r.height/2+r.marginTop)*3/4,i=20;t.forEach((c,l)=>{const s=a.append("g").attr("transform",`translate(${n}, ${o+l*i})`);s.append("rect").attr("width",12).attr("height",12).attr("class",`radarLegendBox-${l}`),s.append("text").attr("x",16).attr("y",0).attr("class","radarLegendText").text(c.label)})}d(T,"drawLegend");var rt={draw:Q},nt=d((a,t)=>{let e="";for(let r=0;r<a.THEME_COLOR_LIMIT;r++){const n=a[`cScale${r}`];e+=`
		.radarCurve-${r} {
			color: ${n};
			fill: ${n};
			fill-opacity: ${t.curveOpacity};
			stroke: ${n};
			stroke-width: ${t.curveStrokeWidth};
		}
		.radarLegendBox-${r} {
			fill: ${n};
			fill-opacity: ${t.curveOpacity};
			stroke: ${n};
		}
		`}return e},"genIndexStyles"),ot=d(a=>{const t=y(R(),w().themeVariables);return{themeVariables:t,radarOptions:y(t.radar,a)}},"buildRadarStyleOptions"),vt={parser:J,db:$,renderer:rt,styles:d(({radar:a}={})=>{const{themeVariables:t,radarOptions:e}=ot(a);return`
	.radarTitle {
		font-size: ${t.fontSize};
		color: ${t.titleColor};
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: ${e.axisColor};
		stroke-width: ${e.axisStrokeWidth};
	}
	.radarAxisLabel {
		font-size: ${e.axisLabelFontSize}px;
		color: ${e.axisColor};
	}
	.radarGraticule {
		fill: ${e.graticuleColor};
		fill-opacity: ${e.graticuleOpacity};
		stroke: ${e.graticuleColor};
		stroke-width: ${e.graticuleStrokeWidth};
	}
	.radarLegendText {
		text-anchor: start;
		font-size: ${e.legendFontSize}px;
		dominant-baseline: hanging;
	}
	${nt(t,e)}
	`},"styles")};export{vt as diagram};
