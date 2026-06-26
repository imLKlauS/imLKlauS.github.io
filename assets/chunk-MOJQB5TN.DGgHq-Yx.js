import{o as f}from"./chunks/vue-i18n.DzxELtIk.js";import{i as X}from"./chunks/@vueuse/motion.DPedvDqI.js";import{n as u}from"./chunk-Y2CYZVJY.CrVYBJys.js";import{m as v}from"./src.CyrYbFsP.js";import{D as H,a as q,b as Y,c as U,x as j,z as G}from"./chunk-WYO6CB5R.BRipa2wo.js";import{t as K}from"./chunk-VAUOI2AC.C39bfvqn.js";var J=["railroad","svgId","theme","look"],b,z,O="",_="",N="",A=[],R=new Map,k=u(e=>G(e,j()),"sanitizeText"),F=u(e=>{switch(e.type){case"terminal":return f(f({},e),{},{value:k(e.value)});case"nonterminal":return f(f({},e),{},{name:k(e.name)});case"sequence":return f(f({},e),{},{elements:e.elements.map(F)});case"choice":return f(f({},e),{},{alternatives:e.alternatives.map(F)});case"optional":return f(f({},e),{},{element:F(e.element)});case"repetition":return f(f({},e),{},{element:F(e.element),separator:e.separator?F(e.separator):void 0});case"special":return f(f({},e),{},{text:k(e.text)})}},"sanitizeAstNode"),Q=u(()=>{O="",_="",N="",A.length=0,R.clear(),q(),v.debug("[Railroad] Database cleared")},"clear"),E=u(e=>{O=k(e),v.debug("[Railroad] Title set:",e)},"setTitle"),W=u(()=>O,"getTitle"),Z={clear:Q,setTitle:E,getTitle:W,addRule:u(e=>{const r=f(f({},e),{},{name:k(e.name),definition:F(e.definition),comment:e.comment?k(e.comment):void 0});v.debug("[Railroad] Adding rule:",r.name),R.has(r.name)&&v.warn(`[Railroad] Rule '${r.name}' is already defined. Overwriting.`),A.push(r),R.set(r.name,r)},"addRule"),getRules:u(()=>A,"getRules"),getRule:u(e=>R.get(e),"getRule"),setAccTitle:u(e=>{_=k(e).replace(/^\s+/g,""),v.debug("[Railroad] Accessibility title set:",e)},"setAccTitle"),getAccTitle:u(()=>_,"getAccTitle"),setAccDescription:u(e=>{N=k(e).replace(/\n\s+/g,`
`),v.debug("[Railroad] Accessibility description set:",e)},"setAccDescription"),getAccDescription:u(()=>N,"getAccDescription"),setDiagramTitle:E,getDiagramTitle:W},T={compactMode:!1,padding:10,verticalSeparation:8,horizontalSeparation:10,arcRadius:10,fontSize:14,fontFamily:"monospace",terminalFill:"#FFFFC0",terminalStroke:"#000000",terminalTextColor:"#000000",nonTerminalFill:"#FFFFFF",nonTerminalStroke:"#000000",nonTerminalTextColor:"#000000",lineColor:"#000000",strokeWidth:2,markerFill:"#000000",commentFill:"#E8E8E8",commentStroke:"#888888",commentTextColor:"#666666",specialFill:"#F0E0FF",specialStroke:"#8800CC",ruleNameColor:"#000066",showMarkers:!0,markerRadius:5},V=/^#(?:[\da-f]{3,4}|[\da-f]{6}|[\da-f]{8})$|^(?:rgb|rgba|hsl|hsla|hwb|lab|lch|oklab|oklch)\([\d\s%+,./-]+\)$|^[a-z]+$/i,ee=/^[\w "',.-]+$/,te=new Set(["compactMode","padding","verticalSeparation","horizontalSeparation","arcRadius","fontSize","fontFamily","terminalFill","terminalStroke","terminalTextColor","nonTerminalFill","nonTerminalStroke","nonTerminalTextColor","lineColor","strokeWidth","markerFill","commentFill","commentStroke","commentTextColor","specialFill","specialStroke","ruleNameColor","showMarkers","markerRadius"]),P=u(e=>e?Object.keys(e).every(r=>r==="railroad"||te.has(r)):!1,"isRailroadStyleOptions"),re=u(e=>e?"railroad"in e&&e.railroad?e.railroad:P(e)?e:{}:{},"extractRailroadOverrides"),ie=u(e=>{if(!e||P(e))return{};const{railroad:r,svgId:n,theme:i,look:t}=e;return X(e,J)},"extractThemeOverrides"),c=u((e,r)=>{if(typeof e!="string")return r;const n=e.trim();return V.test(n)?n:r},"sanitizeColorValue"),L=u((e,r)=>{if(typeof e!="string")return r;const n=e.trim();return ee.test(n)?n:r},"sanitizeFontFamilyValue"),$=u((e,r)=>{const n=typeof e=="number"?e:typeof e=="string"?Number.parseFloat(e):NaN;return Number.isFinite(n)&&n>=0?n:r},"sanitizeNumberValue"),ae=u(e=>{const r=typeof e=="number"?e:typeof e=="string"?Number.parseFloat(e):NaN;return Number.isFinite(r)&&r>0?r:void 0},"parseThemeFontSize"),ne=u(e=>{var r,n,i,t,a,l,o,d,p,s,g,m,h;const w=L(e.fontFamily,T.fontFamily),S=(r=ae(e.fontSize))!==null&&r!==void 0?r:T.fontSize;return f(f({},T),{},{fontFamily:w,fontSize:S,terminalFill:c((n=e.secondBkg)!==null&&n!==void 0?n:e.secondaryColor,T.terminalFill),terminalStroke:c((i=e.secondaryBorderColor)!==null&&i!==void 0?i:e.lineColor,T.terminalStroke),terminalTextColor:c((t=e.secondaryTextColor)!==null&&t!==void 0?t:e.textColor,T.terminalTextColor),nonTerminalFill:c((a=e.mainBkg)!==null&&a!==void 0?a:e.background,T.nonTerminalFill),nonTerminalStroke:c((l=e.primaryBorderColor)!==null&&l!==void 0?l:e.lineColor,T.nonTerminalStroke),nonTerminalTextColor:c((o=e.primaryTextColor)!==null&&o!==void 0?o:e.textColor,T.nonTerminalTextColor),lineColor:c(e.lineColor,T.lineColor),markerFill:c(e.lineColor,T.markerFill),commentFill:c((d=e.labelBackground)!==null&&d!==void 0?d:e.tertiaryColor,T.commentFill),commentStroke:c((p=e.tertiaryBorderColor)!==null&&p!==void 0?p:e.lineColor,T.commentStroke),commentTextColor:c((s=e.tertiaryTextColor)!==null&&s!==void 0?s:e.textColor,T.commentTextColor),specialFill:c((g=e.tertiaryColor)!==null&&g!==void 0?g:e.secondaryColor,T.specialFill),specialStroke:c((m=e.tertiaryBorderColor)!==null&&m!==void 0?m:e.secondaryBorderColor,T.specialStroke),ruleNameColor:c((h=e.titleColor)!==null&&h!==void 0?h:e.textColor,T.ruleNameColor)})},"buildThemeDefaults"),D=u(e=>{var r,n,i,t;const a=Y(),l=ne(f(f(f({},H()),(r=a.themeVariables)!==null&&r!==void 0?r:{}),ie(e))),o=f(f({},(n=a.railroad)!==null&&n!==void 0?n:{}),re(e));return{compactMode:(i=o.compactMode)!==null&&i!==void 0?i:l.compactMode,padding:$(o.padding,l.padding),verticalSeparation:$(o.verticalSeparation,l.verticalSeparation),horizontalSeparation:$(o.horizontalSeparation,l.horizontalSeparation),arcRadius:$(o.arcRadius,l.arcRadius),fontSize:$(o.fontSize,l.fontSize),fontFamily:L(o.fontFamily,l.fontFamily),terminalFill:c(o.terminalFill,l.terminalFill),terminalStroke:c(o.terminalStroke,l.terminalStroke),terminalTextColor:c(o.terminalTextColor,l.terminalTextColor),nonTerminalFill:c(o.nonTerminalFill,l.nonTerminalFill),nonTerminalStroke:c(o.nonTerminalStroke,l.nonTerminalStroke),nonTerminalTextColor:c(o.nonTerminalTextColor,l.nonTerminalTextColor),lineColor:c(o.lineColor,l.lineColor),strokeWidth:$(o.strokeWidth,l.strokeWidth),markerFill:c(o.markerFill,l.markerFill),commentFill:c(o.commentFill,l.commentFill),commentStroke:c(o.commentStroke,l.commentStroke),commentTextColor:c(o.commentTextColor,l.commentTextColor),specialFill:c(o.specialFill,l.specialFill),specialStroke:c(o.specialStroke,l.specialStroke),ruleNameColor:c(o.ruleNameColor,l.ruleNameColor),showMarkers:(t=o.showMarkers)!==null&&t!==void 0?t:l.showMarkers,markerRadius:$(o.markerRadius,l.markerRadius)}},"buildRailroadStyleOptions"),pe=u(e=>{const{fontFamily:r,fontSize:n,terminalFill:i,terminalStroke:t,terminalTextColor:a,nonTerminalFill:l,nonTerminalStroke:o,nonTerminalTextColor:d,lineColor:p,strokeWidth:s,markerFill:g,commentFill:m,commentStroke:h,commentTextColor:w,specialFill:S,specialStroke:C,ruleNameColor:y}=D(e);return`
  .railroad-diagram {
    font-family: ${r};
    font-size: ${n}px;
  }

  .railroad-terminal rect {
    fill: ${i};
    stroke: ${t};
    stroke-width: ${s}px;
  }

  .railroad-terminal text {
    fill: ${a};
    font-family: ${r};
    font-size: ${n}px;
    text-anchor: middle;
    dominant-baseline: middle;
  }

  .railroad-nonterminal rect {
    fill: ${l};
    stroke: ${o};
    stroke-width: ${s}px;
  }

  .railroad-nonterminal text {
    fill: ${d};
    font-family: ${r};
    font-size: ${n}px;
    text-anchor: middle;
    dominant-baseline: middle;
  }

  .railroad-line {
    stroke: ${p};
    stroke-width: ${s}px;
    fill: none;
  }

  .railroad-start circle,
  .railroad-end circle {
    fill: ${g};
  }

  .railroad-comment ellipse {
    fill: ${m};
    stroke: ${h};
    stroke-width: ${s}px;
  }

  .railroad-comment text {
    fill: ${w};
    font-style: italic;
    font-family: ${r};
    font-size: ${n}px;
    text-anchor: middle;
    dominant-baseline: middle;
  }

  .railroad-special rect {
    fill: ${S};
    stroke: ${C};
    stroke-width: ${s}px;
    stroke-dasharray: 5,3;
  }

  .railroad-special text {
    fill: ${d};
    font-family: ${r};
    font-size: ${n}px;
    text-anchor: middle;
    dominant-baseline: middle;
  }

  .railroad-rule-name {
    font-weight: bold;
    fill: ${y};
    font-family: ${r};
    font-size: ${n}px;
  }

  .railroad-group {
    /* Grouping container, no specific styles */
  }
`},"getStyles"),x=(b=class{constructor(){this.d=""}moveTo(e,r){return this.d+=`M ${e} ${r} `,this}lineTo(e,r){return this.d+=`L ${e} ${r} `,this}horizontalTo(e){return this.d+=`H ${e} `,this}verticalTo(e){return this.d+=`V ${e} `,this}arcTo(e,r,n,i,t,a,l){return this.d+=`A ${e} ${r} ${n} ${i?1:0} ${t?1:0} ${a} ${l} `,this}build(){return this.d.trim()}},u(b,"PathBuilder"),b),oe=(z=class{constructor(e,r=D()){this.textCache=new Map,this.svg=e,this.config=r}measureText(e){if(this.textCache.has(e))return this.textCache.get(e);const r=this.svg.append("text").attr("font-family",this.config.fontFamily).attr("font-size",this.config.fontSize).text(e),n=r.node().getBBox(),i={width:n.width,height:n.height};return r.remove(),this.textCache.set(e,i),i}renderTerminal(e,r){const n=this.measureText(r),i=n.width+this.config.padding*2,t=n.height+this.config.padding*2,a=e.append("g").attr("class","railroad-terminal");return a.append("rect").attr("x",0).attr("y",0).attr("width",i).attr("height",t).attr("rx",10).attr("ry",10),a.append("text").attr("x",i/2).attr("y",t/2).text(r),{element:a.node(),dimensions:{width:i,height:t,up:t/2,down:t/2}}}renderNonTerminal(e,r){const n=this.measureText(r),i=n.width+this.config.padding*2,t=n.height+this.config.padding*2,a=e.append("g").attr("class","railroad-nonterminal");return a.append("rect").attr("x",0).attr("y",0).attr("width",i).attr("height",t),a.append("text").attr("x",i/2).attr("y",t/2).text(r),{element:a.node(),dimensions:{width:i,height:t,up:t/2,down:t/2}}}renderSequence(e,r){const n=r.map(d=>this.renderExpression(e,d));let i=0,t=0,a=0;for(const d of n)i+=d.dimensions.width,t=Math.max(t,d.dimensions.up),a=Math.max(a,d.dimensions.down);i+=(n.length-1)*this.config.horizontalSeparation;const l=e.append("g").attr("class","railroad-sequence");let o=0;for(let d=0;d<n.length;d++){const p=n[d],s=t-p.dimensions.up;if(l.node().appendChild(p.element).setAttribute("transform",`translate(${o}, ${s})`),d<n.length-1){const g=o+p.dimensions.width,m=g+this.config.horizontalSeparation,h=t;l.append("path").attr("class","railroad-line").attr("d",new x().moveTo(g,h).lineTo(m,h).build())}o+=p.dimensions.width+this.config.horizontalSeparation}return{element:l.node(),dimensions:{width:i,height:t+a,up:t,down:a}}}renderChoice(e,r){const n=r.map(g=>this.renderExpression(e,g));let i=0,t=0;for(const g of n)i=Math.max(i,g.dimensions.width),t+=g.dimensions.height;t+=(n.length-1)*this.config.verticalSeparation;const a=this.config.arcRadius,l=a*4,o=i+l,d=e.append("g").attr("class","railroad-choice");let p=0;const s=t/2;for(const g of n){const m=p,h=m+g.dimensions.up,w=a*2+(i-g.dimensions.width)/2;d.node().appendChild(g.element).setAttribute("transform",`translate(${w}, ${m})`);const S=new x,C=h>s;h===s?S.moveTo(0,s).lineTo(w,h):S.moveTo(0,s).arcTo(a,a,0,!1,C,a,s+(C?a:-a)).lineTo(a,h-(C?a:-a)).arcTo(a,a,0,!1,!C,a*2,h).lineTo(w,h),d.append("path").attr("class","railroad-line").attr("d",S.build());const y=new x,M=w+g.dimensions.width,I=o-a*2;h===s?y.moveTo(M,h).lineTo(o,s):y.moveTo(M,h).lineTo(I,h).arcTo(a,a,0,!1,!C,o-a,h+(C?-a:a)).lineTo(o-a,s+(C?a:-a)).arcTo(a,a,0,!1,C,o,s),d.append("path").attr("class","railroad-line").attr("d",y.build()),p+=g.dimensions.height+this.config.verticalSeparation}return{element:d.node(),dimensions:{width:o,height:t,up:s,down:t-s}}}renderOptional(e,r){const n=this.renderExpression(e,r),i=this.config.arcRadius,t=i*2,a=n.dimensions.width+i*4,l=n.dimensions.height+t,o=e.append("g").attr("class","railroad-optional"),d=i*2,p=t;o.node().appendChild(n.element).setAttribute("transform",`translate(${d}, ${p})`);const s=p+n.dimensions.up,g=new x().moveTo(0,s).lineTo(i*2,s);o.append("path").attr("class","railroad-line").attr("d",g.build());const m=new x().moveTo(d+n.dimensions.width,s).lineTo(a,s);o.append("path").attr("class","railroad-line").attr("d",m.build());const h=new x().moveTo(0,s).arcTo(i,i,0,!1,!1,i,s-i).lineTo(i,i).arcTo(i,i,0,!1,!0,i*2,0).lineTo(a-i*2,0).arcTo(i,i,0,!1,!0,a-i,i).lineTo(a-i,s-i).arcTo(i,i,0,!1,!1,a,s);return o.append("path").attr("class","railroad-line").attr("d",h.build()),{element:o.node(),dimensions:{width:a,height:l,up:s,down:l-s}}}renderRepetition(e,r,n){const i=this.renderExpression(e,r),t=this.config.arcRadius,a=t*2,l=i.dimensions.width+t*4,o=n===0,d=i.dimensions.height+a+(o?a:0),p=e.append("g").attr("class","railroad-repetition"),s=t*2,g=o?a:0;p.node().appendChild(i.element).setAttribute("transform",`translate(${s}, ${g})`);const m=g+i.dimensions.up;p.append("path").attr("class","railroad-line").attr("d",new x().moveTo(0,m).lineTo(t*2,m).build()),p.append("path").attr("class","railroad-line").attr("d",new x().moveTo(s+i.dimensions.width,m).lineTo(l,m).build());const h=g+i.dimensions.height+t,w=new x().moveTo(s+i.dimensions.width,m).arcTo(t,t,0,!1,!0,s+i.dimensions.width+t,m+t).lineTo(s+i.dimensions.width+t,h).arcTo(t,t,0,!1,!0,s+i.dimensions.width,h+t).lineTo(t*2,h+t).arcTo(t,t,0,!1,!0,t,h).lineTo(t,m+t).arcTo(t,t,0,!1,!0,t*2,m);if(p.append("path").attr("class","railroad-line").attr("d",w.build()),o){const S=new x().moveTo(0,m).arcTo(t,t,0,!1,!1,t,m-t).lineTo(t,t).arcTo(t,t,0,!1,!0,t*2,0).lineTo(l-t*2,0).arcTo(t,t,0,!1,!0,l-t,t).lineTo(l-t,m-t).arcTo(t,t,0,!1,!1,l,m);p.append("path").attr("class","railroad-line").attr("d",S.build())}return{element:p.node(),dimensions:{width:l,height:d,up:m,down:d-m}}}renderSpecial(e,r){const n=this.measureText("? "+r+" ?"),i=n.width+this.config.padding*2,t=n.height+this.config.padding*2,a=e.append("g").attr("class","railroad-special");return a.append("rect").attr("x",0).attr("y",0).attr("width",i).attr("height",t),a.append("text").attr("x",i/2).attr("y",t/2).text("? "+r+" ?"),{element:a.node(),dimensions:{width:i,height:t,up:t/2,down:t/2}}}renderExpression(e,r){switch(r.type){case"terminal":return this.renderTerminal(e,r.value);case"nonterminal":return this.renderNonTerminal(e,r.name);case"sequence":return this.renderSequence(e,r.elements);case"choice":return this.renderChoice(e,r.alternatives);case"optional":return this.renderOptional(e,r.element);case"repetition":return this.renderRepetition(e,r.element,r.min);case"special":return this.renderSpecial(e,r.text);default:throw new Error(`Unknown node type: ${r.type}`)}}renderRule(e,r){const n=this.svg.append("g").attr("class","railroad-rule").attr("transform",`translate(0, ${r})`),i=e.name+" =",t=this.measureText(i).width+20,a=t+20,l=n.append("g"),o=this.renderExpression(l,e.definition),d=Math.max(20,o.dimensions.up),p=d-o.dimensions.up;return l.attr("transform",`translate(${a}, ${p})`),n.append("g").attr("class","railroad-rule-name-group").append("text").attr("class","railroad-rule-name").attr("x",0).attr("y",d).text(i),n.append("g").attr("class","railroad-start").append("circle").attr("cx",t).attr("cy",d).attr("r",this.config.markerRadius),n.append("g").attr("class","railroad-end").append("circle").attr("cx",a+o.dimensions.width+10).attr("cy",d).attr("r",this.config.markerRadius),n.append("path").attr("class","railroad-line").attr("d",new x().moveTo(t+this.config.markerRadius,d).lineTo(a,d).build()),n.append("path").attr("class","railroad-line").attr("d",new x().moveTo(a+o.dimensions.width,d).lineTo(a+o.dimensions.width+10-this.config.markerRadius,d).build()),{height:Math.max(40,p+o.dimensions.height+this.config.padding*2),width:a+o.dimensions.width+10+this.config.markerRadius}}renderDiagram(e){let r=this.config.padding,n=0;for(const i of e){const t=this.renderRule(i,r);r+=t.height+this.config.verticalSeparation,n=Math.max(n,t.width)}return{width:n+this.config.padding*2,height:r+this.config.padding}}},u(z,"RailroadRenderer"),z),B=u((e,r,n)=>{U(e,r.height,r.width,n),e.attr("viewBox",`0 0 ${r.width} ${r.height}`)},"configureRailroadSvgSize"),ue={draw:u((e,r,n)=>{v.debug(`[Railroad] Rendering diagram
`+e);try{var i;const t=K(r);t.attr("class","railroad-diagram");const a=Y().railroad,l=(i=a==null?void 0:a.useMaxWidth)!==null&&i!==void 0?i:!0,o=Z.getRules();if(v.debug(`[Railroad] Rendering ${o.length} rules`),o.length===0){v.warn("[Railroad] No rules to render"),B(t,{height:100,width:200},l);return}B(t,new oe(t,D()).renderDiagram(o),l),v.debug("[Railroad] Render complete")}catch(t){throw v.error("[Railroad] Render error:",t),t}},"draw")};export{pe as n,ue as r,Z as t};
