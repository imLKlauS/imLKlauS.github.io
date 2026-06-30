import{a as C,o as b}from"./chunks/vue-i18n.B2mNggf5.js";import{n as S}from"./mermaid-parser.core.-lY63V1O.js";import{n as k}from"./chunk-Y2CYZVJY.CrVYBJys.js";import{m as w}from"./src.CyrYbFsP.js";import{H as T,K as D,U as P,a as z,b as E,c as F,f as A,v as W,w as _,y as N}from"./chunk-WYO6CB5R.KweugrbK.js";import{i as x}from"./chunk-ICXQ74PX.GBoRKcEb.js";import{t as L}from"./chunk-VAUOI2AC.Bqpeknd4.js";import{t as M}from"./chunk-JWPE2WC7.y5piD74M.js";var v,Y=A.packet,y=(v=class{constructor(){this.packet=[],this.setAccTitle=P,this.getAccTitle=N,this.setDiagramTitle=D,this.getDiagramTitle=_,this.getAccDescription=W,this.setAccDescription=T}getConfig(){const t=x(b(b({},Y),E().packet));return t.showBits&&(t.paddingY+=10),t}getPacket(){return this.packet}pushWord(t){t.length>0&&this.packet.push(t)}clear(){z(),this.packet=[]}},k(v,"PacketDB"),v),j=1e4,G=k((t,e)=>{M(t,e);let i=-1,o=[],s=1;const{bitsPerRow:c}=e.getConfig();for(let{start:a,end:r,bits:n,label:l}of t.blocks){var g,u,h,f;if(a!==void 0&&r!==void 0&&r<a)throw new Error(`Packet block ${a} - ${r} is invalid. End must be greater than start.`);if((g=a)!==null&&g!==void 0||(a=i+1),a!==i+1){var d;throw new Error(`Packet block ${a} - ${(d=r)!==null&&d!==void 0?d:a} is not contiguous. It should start from ${i+1}.`)}if(n===0)throw new Error(`Packet block ${a} is invalid. Cannot have a zero bit field.`);for((u=r)!==null&&u!==void 0||(r=a+((h=n)!==null&&h!==void 0?h:1)-1),(f=n)!==null&&f!==void 0||(n=r-a+1),i=r,w.debug(`Packet block ${a} - ${i} with label ${l}`);o.length<=c+1&&e.getPacket().length<j;){const[p,m]=H({start:a,end:r,bits:n,label:l},s,c);if(o.push(p),p.end+1===s*c&&(e.pushWord(o),o=[],s++),!m)break;({start:a,end:r,bits:n,label:l}=m)}}e.pushWord(o)},"populate"),H=k((t,e,i)=>{if(t.start===void 0)throw new Error("start should have been set during first phase");if(t.end===void 0)throw new Error("end should have been set during first phase");if(t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);if(t.end+1<=e*i)return[t,void 0];const o=e*i-1,s=e*i;return[{start:t.start,end:o,label:t.label,bits:o-t.start},{start:s,end:t.end,label:t.label,bits:t.end-s}]},"getNextFittingBlock"),$={parser:{yy:void 0},parse:k((function(){var t=C(function*(e){var i;const o=yield S("packet",e),s=(i=$.parser)===null||i===void 0?void 0:i.yy;if(!(s instanceof y))throw new Error("parser.parser?.yy was not a PacketDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");w.debug(o),G(o,s)});return function(e){return t.apply(this,arguments)}})(),"parse")},I=k((t,e,i,o)=>{const s=o.db,c=s.getConfig(),{rowHeight:g,paddingY:u,bitWidth:h,bitsPerRow:f}=c,d=s.getPacket(),a=s.getDiagramTitle(),r=g+u,n=r*(d.length+1)-(a?0:g),l=h*f+2,p=L(e);p.attr("viewBox",`0 0 ${l} ${n}`),F(p,n,l,c.useMaxWidth);for(const[m,B]of d.entries())K(p,B,m,c);p.append("text").text(a).attr("x",l/2).attr("y",n-r/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),K=k((t,e,i,{rowHeight:o,paddingX:s,paddingY:c,bitWidth:g,bitsPerRow:u,showBits:h})=>{const f=t.append("g"),d=i*(o+c)+c;for(const a of e){const r=a.start%u*g+1,n=(a.end-a.start+1)*g-s;if(f.append("rect").attr("x",r).attr("y",d).attr("width",n).attr("height",o).attr("class","packetBlock"),f.append("text").attr("x",r+n/2).attr("y",d+o/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(a.label),!h)continue;const l=a.end===a.start,p=d-2;f.append("text").attr("x",r+(l?n/2:0)).attr("y",p).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",l?"middle":"start").text(a.start),l||f.append("text").attr("x",r+n).attr("y",p).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(a.end)}},"drawWord"),O={draw:I},U={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},et={parser:$,get db(){return new y},renderer:O,styles:k(({packet:t}={})=>{const e=x(U,t);return`
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`},"styles")};export{et as diagram};
