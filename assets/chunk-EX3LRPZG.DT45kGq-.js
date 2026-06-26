import{a as se}from"./chunks/vue-i18n.DzxELtIk.js";import{n as f}from"./chunk-Y2CYZVJY.CrVYBJys.js";import{m as E,p as Dt}from"./src.CyrYbFsP.js";import{$ as ie,H as re,K as ae,U as ne,a as oe,s as K,v as le,w as ce,x as B,y as he}from"./chunk-WYO6CB5R.BRipa2wo.js";import{g as ue,s as de}from"./chunk-ICXQ74PX.DB-1i-wO.js";import{t as fe}from"./chunk-32BRIVSS.DfKVgBKS.js";import{t as pe}from"./chunk-XXDRQBXY.wfCN-xGt.js";import{t as Se}from"./chunk-VR4S4FIN.TdZUxdPp.js";import{r as ye}from"./chunk-FWX5IMBZ.CDz1VBX6.js";var pt,xt=(function(){var t=f(function(o,p,c,S){for(c=c||{},S=o.length;S--;c[o[S]]=p);return c},"o"),e=[1,2],i=[1,3],s=[1,4],n=[2,4],h=[1,9],u=[1,11],m=[1,16],a=[1,17],g=[1,18],v=[1,19],C=[1,33],Y=[1,20],L=[1,21],x=[1,22],N=[1,23],A=[1,24],d=[1,26],I=[1,27],b=[1,28],G=[1,29],w=[1,30],F=[1,31],k=[1,32],M=[1,35],X=[1,36],nt=[1,37],ot=[1,38],J=[1,34],y=[1,4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,41,45,48,51,52,53,54,57],lt=[1,4,5,14,15,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,39,40,41,45,48,51,52,53,54,57],It=[4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,41,45,48,51,52,53,54,57],Tt={trace:f(function(){},"trace"),yy:{},symbols_:{error:2,start:3,SPACE:4,NL:5,SD:6,document:7,line:8,statement:9,classDefStatement:10,styleStatement:11,cssClassStatement:12,idStatement:13,DESCR:14,"-->":15,HIDE_EMPTY:16,scale:17,WIDTH:18,COMPOSIT_STATE:19,STRUCT_START:20,STRUCT_STOP:21,STATE_DESCR:22,AS:23,ID:24,FORK:25,JOIN:26,CHOICE:27,CONCURRENT:28,note:29,notePosition:30,NOTE_TEXT:31,direction:32,acc_title:33,acc_title_value:34,acc_descr:35,acc_descr_value:36,acc_descr_multiline_value:37,CLICK:38,STRING:39,HREF:40,classDef:41,CLASSDEF_ID:42,CLASSDEF_STYLEOPTS:43,DEFAULT:44,style:45,STYLE_IDS:46,STYLEDEF_STYLEOPTS:47,class:48,CLASSENTITY_IDS:49,STYLECLASS:50,direction_tb:51,direction_bt:52,direction_rl:53,direction_lr:54,eol:55,";":56,EDGE_STATE:57,STYLE_SEPARATOR:58,left_of:59,right_of:60,$accept:0,$end:1},terminals_:{2:"error",4:"SPACE",5:"NL",6:"SD",14:"DESCR",15:"-->",16:"HIDE_EMPTY",17:"scale",18:"WIDTH",19:"COMPOSIT_STATE",20:"STRUCT_START",21:"STRUCT_STOP",22:"STATE_DESCR",23:"AS",24:"ID",25:"FORK",26:"JOIN",27:"CHOICE",28:"CONCURRENT",29:"note",31:"NOTE_TEXT",33:"acc_title",34:"acc_title_value",35:"acc_descr",36:"acc_descr_value",37:"acc_descr_multiline_value",38:"CLICK",39:"STRING",40:"HREF",41:"classDef",42:"CLASSDEF_ID",43:"CLASSDEF_STYLEOPTS",44:"DEFAULT",45:"style",46:"STYLE_IDS",47:"STYLEDEF_STYLEOPTS",48:"class",49:"CLASSENTITY_IDS",50:"STYLECLASS",51:"direction_tb",52:"direction_bt",53:"direction_rl",54:"direction_lr",56:";",57:"EDGE_STATE",58:"STYLE_SEPARATOR",59:"left_of",60:"right_of"},productions_:[0,[3,2],[3,2],[3,2],[7,0],[7,2],[8,2],[8,1],[8,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,3],[9,4],[9,1],[9,2],[9,1],[9,4],[9,3],[9,6],[9,1],[9,1],[9,1],[9,1],[9,4],[9,4],[9,1],[9,2],[9,2],[9,1],[9,5],[9,5],[10,3],[10,3],[11,3],[12,3],[32,1],[32,1],[32,1],[32,1],[55,1],[55,1],[13,1],[13,1],[13,3],[13,3],[30,1],[30,1]],performAction:f(function(p,c,S,T,_,r,U){var l=r.length-1;switch(_){case 3:return T.setRootDoc(r[l]),r[l];case 4:this.$=[];break;case 5:r[l]!="nl"&&(r[l-1].push(r[l]),this.$=r[l-1]);break;case 6:case 7:this.$=r[l];break;case 8:this.$="nl";break;case 12:this.$=r[l];break;case 13:const ht=r[l-1];ht.description=T.trimColon(r[l]),this.$=ht;break;case 14:this.$={stmt:"relation",state1:r[l-2],state2:r[l]};break;case 15:const ut=T.trimColon(r[l]);this.$={stmt:"relation",state1:r[l-3],state2:r[l-1],description:ut};break;case 19:this.$={stmt:"state",id:r[l-3],type:"default",description:"",doc:r[l-1]};break;case 20:var j=r[l],q=r[l-2].trim();if(r[l].match(":")){var et=r[l].split(":");j=et[0],q=[q,et[1]]}this.$={stmt:"state",id:j,type:"default",description:q};break;case 21:this.$={stmt:"state",id:r[l-3],type:"default",description:r[l-5],doc:r[l-1]};break;case 22:this.$={stmt:"state",id:r[l],type:"fork"};break;case 23:this.$={stmt:"state",id:r[l],type:"join"};break;case 24:this.$={stmt:"state",id:r[l],type:"choice"};break;case 25:this.$={stmt:"state",id:T.getDividerId(),type:"divider"};break;case 26:this.$={stmt:"state",id:r[l-1].trim(),note:{position:r[l-2].trim(),text:r[l].trim()}};break;case 29:this.$=r[l].trim(),T.setAccTitle(this.$);break;case 30:case 31:this.$=r[l].trim(),T.setAccDescription(this.$);break;case 32:this.$={stmt:"click",id:r[l-3],url:r[l-2],tooltip:r[l-1]};break;case 33:this.$={stmt:"click",id:r[l-3],url:r[l-1],tooltip:""};break;case 34:case 35:this.$={stmt:"classDef",id:r[l-1].trim(),classes:r[l].trim()};break;case 36:this.$={stmt:"style",id:r[l-1].trim(),styleClass:r[l].trim()};break;case 37:this.$={stmt:"applyClass",id:r[l-1].trim(),styleClass:r[l].trim()};break;case 38:T.setDirection("TB"),this.$={stmt:"dir",value:"TB"};break;case 39:T.setDirection("BT"),this.$={stmt:"dir",value:"BT"};break;case 40:T.setDirection("RL"),this.$={stmt:"dir",value:"RL"};break;case 41:T.setDirection("LR"),this.$={stmt:"dir",value:"LR"};break;case 44:case 45:this.$={stmt:"state",id:r[l].trim(),type:"default",description:""};break;case 46:this.$={stmt:"state",id:r[l-2].trim(),classes:[r[l].trim()],type:"default",description:""};break;case 47:this.$={stmt:"state",id:r[l-2].trim(),classes:[r[l].trim()],type:"default",description:""};break}},"anonymous"),table:[{3:1,4:e,5:i,6:s},{1:[3]},{3:5,4:e,5:i,6:s},{3:6,4:e,5:i,6:s},t([1,4,5,16,17,19,22,24,25,26,27,28,29,33,35,37,38,41,45,48,51,52,53,54,57],n,{7:7}),{1:[2,1]},{1:[2,2]},{1:[2,3],4:h,5:u,8:8,9:10,10:12,11:13,12:14,13:15,16:m,17:a,19:g,22:v,24:C,25:Y,26:L,27:x,28:N,29:A,32:25,33:d,35:I,37:b,38:G,41:w,45:F,48:k,51:M,52:X,53:nt,54:ot,57:J},t(y,[2,5]),{9:39,10:12,11:13,12:14,13:15,16:m,17:a,19:g,22:v,24:C,25:Y,26:L,27:x,28:N,29:A,32:25,33:d,35:I,37:b,38:G,41:w,45:F,48:k,51:M,52:X,53:nt,54:ot,57:J},t(y,[2,7]),t(y,[2,8]),t(y,[2,9]),t(y,[2,10]),t(y,[2,11]),t(y,[2,12],{14:[1,40],15:[1,41]}),t(y,[2,16]),{18:[1,42]},t(y,[2,18],{20:[1,43]}),{23:[1,44]},t(y,[2,22]),t(y,[2,23]),t(y,[2,24]),t(y,[2,25]),{30:45,31:[1,46],59:[1,47],60:[1,48]},t(y,[2,28]),{34:[1,49]},{36:[1,50]},t(y,[2,31]),{13:51,24:C,57:J},{42:[1,52],44:[1,53]},{46:[1,54]},{49:[1,55]},t(lt,[2,44],{58:[1,56]}),t(lt,[2,45],{58:[1,57]}),t(y,[2,38]),t(y,[2,39]),t(y,[2,40]),t(y,[2,41]),t(y,[2,6]),t(y,[2,13]),{13:58,24:C,57:J},t(y,[2,17]),t(It,n,{7:59}),{24:[1,60]},{24:[1,61]},{23:[1,62]},{24:[2,48]},{24:[2,49]},t(y,[2,29]),t(y,[2,30]),{39:[1,63],40:[1,64]},{43:[1,65]},{43:[1,66]},{47:[1,67]},{50:[1,68]},{24:[1,69]},{24:[1,70]},t(y,[2,14],{14:[1,71]}),{4:h,5:u,8:8,9:10,10:12,11:13,12:14,13:15,16:m,17:a,19:g,21:[1,72],22:v,24:C,25:Y,26:L,27:x,28:N,29:A,32:25,33:d,35:I,37:b,38:G,41:w,45:F,48:k,51:M,52:X,53:nt,54:ot,57:J},t(y,[2,20],{20:[1,73]}),{31:[1,74]},{24:[1,75]},{39:[1,76]},{39:[1,77]},t(y,[2,34]),t(y,[2,35]),t(y,[2,36]),t(y,[2,37]),t(lt,[2,46]),t(lt,[2,47]),t(y,[2,15]),t(y,[2,19]),t(It,n,{7:78}),t(y,[2,26]),t(y,[2,27]),{5:[1,79]},{5:[1,80]},{4:h,5:u,8:8,9:10,10:12,11:13,12:14,13:15,16:m,17:a,19:g,21:[1,81],22:v,24:C,25:Y,26:L,27:x,28:N,29:A,32:25,33:d,35:I,37:b,38:G,41:w,45:F,48:k,51:M,52:X,53:nt,54:ot,57:J},t(y,[2,32]),t(y,[2,33]),t(y,[2,21])],defaultActions:{5:[2,1],6:[2,2],47:[2,48],48:[2,49]},parseError:f(function(p,c){if(c.recoverable)this.trace(p);else{var S=new Error(p);throw S.hash=c,S}},"parseError"),parse:f(function(p){var c=this,S=[0],T=[],_=[null],r=[],U=this.table,l="",j=0,q=0,et=0,ht=2,ut=1,Zt=r.slice.call(arguments,1),D=Object.create(this.lexer),H={yy:{}};for(var _t in this.yy)Object.prototype.hasOwnProperty.call(this.yy,_t)&&(H.yy[_t]=this.yy[_t]);D.setInput(p,H.yy),H.yy.lexer=D,H.yy.parser=this,typeof D.yylloc=="undefined"&&(D.yylloc={});var mt=D.yylloc;r.push(mt);var te=D.options&&D.options.ranges;typeof H.yy.parseError=="function"?this.parseError=H.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function ee(P){S.length=S.length-2*P,_.length=_.length-P,r.length=r.length-P}f(ee,"popStack");function Ot(){var P=T.pop()||D.lex()||ut;return typeof P!="number"&&(P instanceof Array&&(T=P,P=T.pop()),P=c.symbols_[P]||P),P}f(Ot,"lex");for(var O,Et,z,$,vt,Q={},dt,V,Rt,ft;;){if(z=S[S.length-1],this.defaultActions[z]?$=this.defaultActions[z]:((O===null||typeof O=="undefined")&&(O=Ot()),$=U[z]&&U[z][O]),typeof $=="undefined"||!$.length||!$[0]){var bt="";ft=[];for(dt in U[z])this.terminals_[dt]&&dt>ht&&ft.push("'"+this.terminals_[dt]+"'");D.showPosition?bt="Parse error on line "+(j+1)+`:
`+D.showPosition()+`
Expecting `+ft.join(", ")+", got '"+(this.terminals_[O]||O)+"'":bt="Parse error on line "+(j+1)+": Unexpected "+(O==ut?"end of input":"'"+(this.terminals_[O]||O)+"'"),this.parseError(bt,{text:D.match,token:this.terminals_[O]||O,line:D.yylineno,loc:mt,expected:ft})}if($[0]instanceof Array&&$.length>1)throw new Error("Parse Error: multiple actions possible at state: "+z+", token: "+O);switch($[0]){case 1:S.push(O),_.push(D.yytext),r.push(D.yylloc),S.push($[1]),O=null,Et?(O=Et,Et=null):(q=D.yyleng,l=D.yytext,j=D.yylineno,mt=D.yylloc,et>0&&et--);break;case 2:if(V=this.productions_[$[1]][1],Q.$=_[_.length-V],Q._$={first_line:r[r.length-(V||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(V||1)].first_column,last_column:r[r.length-1].last_column},te&&(Q._$.range=[r[r.length-(V||1)].range[0],r[r.length-1].range[1]]),vt=this.performAction.apply(Q,[l,q,j,H.yy,$[1],_,r].concat(Zt)),typeof vt!="undefined")return vt;V&&(S=S.slice(0,-1*V*2),_=_.slice(0,-1*V),r=r.slice(0,-1*V)),S.push(this.productions_[$[1]][0]),_.push(Q.$),r.push(Q._$),Rt=U[S[S.length-2]][S[S.length-1]],S.push(Rt);break;case 3:return!0}}return!0},"parse")};Tt.lexer=(function(){return{EOF:1,parseError:f(function(p,c){if(this.yy.parser)this.yy.parser.parseError(p,c);else throw new Error(p)},"parseError"),setInput:f(function(o,p){return this.yy=p||this.yy||{},this._input=o,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:f(function(){var o=this._input[0];return this.yytext+=o,this.yyleng++,this.offset++,this.match+=o,this.matched+=o,o.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),o},"input"),unput:f(function(o){var p=o.length,c=o.split(/(?:\r\n?|\n)/g);this._input=o+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-p),this.offset-=p;var S=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),c.length-1&&(this.yylineno-=c.length-1);var T=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:c?(c.length===S.length?this.yylloc.first_column:0)+S[S.length-c.length].length-c[0].length:this.yylloc.first_column-p},this.options.ranges&&(this.yylloc.range=[T[0],T[0]+this.yyleng-p]),this.yyleng=this.yytext.length,this},"unput"),more:f(function(){return this._more=!0,this},"more"),reject:f(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:f(function(o){this.unput(this.match.slice(o))},"less"),pastInput:f(function(){var o=this.matched.substr(0,this.matched.length-this.match.length);return(o.length>20?"...":"")+o.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:f(function(){var o=this.match;return o.length<20&&(o+=this._input.substr(0,20-o.length)),(o.substr(0,20)+(o.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:f(function(){var o=this.pastInput(),p=new Array(o.length+1).join("-");return o+this.upcomingInput()+`
`+p+"^"},"showPosition"),test_match:f(function(o,p){var c,S,T;if(this.options.backtrack_lexer&&(T={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(T.yylloc.range=this.yylloc.range.slice(0))),S=o[0].match(/(?:\r\n?|\n).*/g),S&&(this.yylineno+=S.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:S?S[S.length-1].length-S[S.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+o[0].length},this.yytext+=o[0],this.match+=o[0],this.matches=o,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(o[0].length),this.matched+=o[0],c=this.performAction.call(this,this.yy,this,p,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),c)return c;if(this._backtrack){for(var _ in T)this[_]=T[_];return!1}return!1},"test_match"),next:f(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var o,p,c,S;this._more||(this.yytext="",this.match="");for(var T=this._currentRules(),_=0;_<T.length;_++)if(c=this._input.match(this.rules[T[_]]),c&&(!p||c[0].length>p[0].length)){if(p=c,S=_,this.options.backtrack_lexer){if(o=this.test_match(c,T[_]),o!==!1)return o;if(this._backtrack){p=!1;continue}else return!1}else if(!this.options.flex)break}return p?(o=this.test_match(p,T[S]),o!==!1?o:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:f(function(){var p=this.next();return p||this.lex()},"lex"),begin:f(function(p){this.conditionStack.push(p)},"begin"),popState:f(function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:f(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:f(function(p){return p=this.conditionStack.length-1-Math.abs(p||0),p>=0?this.conditionStack[p]:"INITIAL"},"topState"),pushState:f(function(p){this.begin(p)},"pushState"),stateStackSize:f(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:f(function(p,c,S,T){function _(){const r=c.yytext.indexOf("%%");if(r===0)return!1;if(r>0){const U=c.yytext.slice(0,r),l=c.yytext.slice(r);l&&p.lexer.unput(l),c.yytext=U}return!0}switch(f(_,"processId"),S){case 0:return 38;case 1:return 40;case 2:return 39;case 3:return 44;case 4:return 51;case 5:return 52;case 6:return 53;case 7:return 54;case 8:return 5;case 9:break;case 10:break;case 11:break;case 12:break;case 13:return this.pushState("SCALE"),17;case 14:return 18;case 15:this.popState();break;case 16:return this.begin("acc_title"),33;case 17:return this.popState(),"acc_title_value";case 18:return this.begin("acc_descr"),35;case 19:return this.popState(),"acc_descr_value";case 20:this.begin("acc_descr_multiline");break;case 21:this.popState();break;case 22:return"acc_descr_multiline_value";case 23:return this.pushState("CLASSDEF"),41;case 24:return this.popState(),this.pushState("CLASSDEFID"),"DEFAULT_CLASSDEF_ID";case 25:return this.popState(),this.pushState("CLASSDEFID"),42;case 26:return this.popState(),43;case 27:return this.pushState("CLASS"),48;case 28:return this.popState(),this.pushState("CLASS_STYLE"),49;case 29:return this.popState(),50;case 30:return this.pushState("STYLE"),45;case 31:return this.popState(),this.pushState("STYLEDEF_STYLES"),46;case 32:return this.popState(),47;case 33:return this.pushState("SCALE"),17;case 34:return 18;case 35:this.popState();break;case 36:this.pushState("STATE");break;case 37:return this.popState(),c.yytext=c.yytext.slice(0,-8).trim(),25;case 38:return this.popState(),c.yytext=c.yytext.slice(0,-8).trim(),26;case 39:return this.popState(),c.yytext=c.yytext.slice(0,-10).trim(),27;case 40:return this.popState(),c.yytext=c.yytext.slice(0,-8).trim(),25;case 41:return this.popState(),c.yytext=c.yytext.slice(0,-8).trim(),26;case 42:return this.popState(),c.yytext=c.yytext.slice(0,-10).trim(),27;case 43:return 51;case 44:return 52;case 45:return 53;case 46:return 54;case 47:this.pushState("STATE_STRING");break;case 48:return this.pushState("STATE_ID"),"AS";case 49:return _()?(this.popState(),"ID"):void 0;case 50:this.popState();break;case 51:return"STATE_DESCR";case 52:throw new Error('Error: State name must be a single word. Found: "'+c.yytext.trim()+'"');case 53:return 19;case 54:this.popState();break;case 55:return this.popState(),this.pushState("struct"),20;case 56:return this.popState(),21;case 57:break;case 58:return this.begin("NOTE"),29;case 59:return this.popState(),this.pushState("NOTE_ID"),59;case 60:return this.popState(),this.pushState("NOTE_ID"),60;case 61:this.popState(),this.pushState("FLOATING_NOTE");break;case 62:return this.popState(),this.pushState("FLOATING_NOTE_ID"),"AS";case 63:break;case 64:return"NOTE_TEXT";case 65:return _()?(this.popState(),"ID"):void 0;case 66:return _()?(this.popState(),this.pushState("NOTE_TEXT"),24):void 0;case 67:return this.popState(),c.yytext=c.yytext.substr(2).trim(),31;case 68:return this.popState(),c.yytext=c.yytext.slice(0,-8).trim(),31;case 69:return 6;case 70:return 6;case 71:return 16;case 72:return 57;case 73:return _()?24:void 0;case 74:return c.yytext=c.yytext.trim(),14;case 75:return 15;case 76:return 28;case 77:return 58;case 78:return 5;case 79:return"INVALID"}},"anonymous"),rules:[/^(?:click\b)/i,/^(?:href\b)/i,/^(?:"[^"]*")/i,/^(?:default\b)/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:[\n]+)/i,/^(?:[\s]+)/i,/^(?:((?!\n)\s)+)/i,/^(?:#[^\n]*)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:classDef\s+)/i,/^(?:DEFAULT\s+)/i,/^(?:\w+\s+)/i,/^(?:[^\n]*)/i,/^(?:class\s+)/i,/^(?:(\w+)+((,\s*\w+)*))/i,/^(?:[^\n]*)/i,/^(?:style\s+)/i,/^(?:[\w,]+\s+)/i,/^(?:[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:state\s+)/i,/^(?:.*<<fork>>)/i,/^(?:.*<<join>>)/i,/^(?:.*<<choice>>)/i,/^(?:.*\[\[fork\]\])/i,/^(?:.*\[\[join\]\])/i,/^(?:.*\[\[choice\]\])/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:["])/i,/^(?:\s*as\s+)/i,/^(?:[^\n\{]*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:\w+\s+\w+.*?\{)/i,/^(?:[^\n\s\{]+)/i,/^(?:\n)/i,/^(?:\{)/i,/^(?:\})/i,/^(?:[\n])/i,/^(?:note\s+)/i,/^(?:left of\b)/i,/^(?:right of\b)/i,/^(?:")/i,/^(?:\s*as\s*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n]*)/i,/^(?:\s*[^:\n\s\-]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:[\s\S]*?\n\s*end note\b)/i,/^(?:stateDiagram\s+)/i,/^(?:stateDiagram-v2\s+)/i,/^(?:hide empty description\b)/i,/^(?:\[\*\])/i,/^(?:[^:\n\s\-\{]+)/i,/^(?:\s*:(?:[^:\n;]|:[^:\n;])+)/i,/^(?:-->)/i,/^(?:--)/i,/^(?::::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{LINE:{rules:[10,11,12],inclusive:!1},struct:{rules:[10,11,12,23,27,30,36,43,44,45,46,56,57,58,72,73,74,75,76,77],inclusive:!1},FLOATING_NOTE_ID:{rules:[65],inclusive:!1},FLOATING_NOTE:{rules:[62,63,64],inclusive:!1},NOTE_TEXT:{rules:[67,68],inclusive:!1},NOTE_ID:{rules:[66],inclusive:!1},NOTE:{rules:[59,60,61],inclusive:!1},STYLEDEF_STYLEOPTS:{rules:[],inclusive:!1},STYLEDEF_STYLES:{rules:[32],inclusive:!1},STYLE_IDS:{rules:[],inclusive:!1},STYLE:{rules:[31],inclusive:!1},CLASS_STYLE:{rules:[29],inclusive:!1},CLASS:{rules:[28],inclusive:!1},CLASSDEFID:{rules:[26],inclusive:!1},CLASSDEF:{rules:[24,25],inclusive:!1},acc_descr_multiline:{rules:[21,22],inclusive:!1},acc_descr:{rules:[19],inclusive:!1},acc_title:{rules:[17],inclusive:!1},SCALE:{rules:[14,15,34,35],inclusive:!1},ALIAS:{rules:[],inclusive:!1},STATE_ID:{rules:[49],inclusive:!1},STATE_STRING:{rules:[50,51],inclusive:!1},FORK_STATE:{rules:[],inclusive:!1},STATE:{rules:[10,11,12,37,38,39,40,41,42,47,48,52,53,54,55],inclusive:!1},ID:{rules:[10,11,12],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,11,12,13,16,18,20,23,27,30,33,36,55,58,69,70,71,72,73,74,75,77,78,79],inclusive:!0}}}})();function ct(){this.yy={}}return f(ct,"Parser"),ct.prototype=Tt,Tt.Parser=ct,new ct})();xt.parser=xt;var Ue=xt,ge="TB",Ft="TB",wt="dir",tt="state",Z="root",At="relation",Te="classDef",_e="style",me="applyClass",rt="default",Vt="divider",Mt="fill:none",Wt="fill: #333",Ut="c",jt="markdown",Ht="normal",kt="rect",Ct="rectWithTitle",Ee="stateStart",ve="stateEnd",Nt="divider",$t="roundedWithTitle",be="note",De="noteGroup",at="statediagram",ke=`${at}-state`,zt="transition",Ce="note",xe=`${zt} note-edge`,Ae=`${at}-${Ce}`,Le=`${at}-cluster`,Ie=`${at}-cluster-alt`,Kt="parent",Xt="note",Oe="state",Lt="----",Re=`${Lt}${Xt}`,Pt=`${Lt}${Kt}`,Jt=f((t,e=Ft)=>{if(!t.doc)return e;let i=e;for(const s of t.doc)s.stmt==="dir"&&(i=s.value);return i},"getDir"),je={getClasses:f(function(t,e){return e.db.getClasses()},"getClasses"),draw:f((function(){var t=se(function*(e,i,s,n){var h,u;E.info("REF0:"),E.info("Drawing state diagram (v2)",i);const{securityLevel:m,state:a,layout:g}=B();n.db.extract(n.db.getRootDocV2());const v=n.db.getData(),C=pe(i,m);v.type=n.type,v.layoutAlgorithm=g,v.nodeSpacing=(a==null?void 0:a.nodeSpacing)||50,v.rankSpacing=(a==null?void 0:a.rankSpacing)||50,B().look==="neo"?v.markers=["barbNeo"]:v.markers=["barb"],v.diagramId=i,yield ye(v,C);const Y=8;try{(typeof n.db.getLinks=="function"?n.db.getLinks():new Map).forEach((L,x)=>{var N;const A=typeof x=="string"?x:typeof(x==null?void 0:x.id)=="string"?x.id:"",d=v.nodes.find(k=>k.id===A);if(!A){E.warn("⚠️ Invalid or missing stateId from key:",JSON.stringify(x));return}const I=(N=C.node())===null||N===void 0?void 0:N.querySelectorAll("g.node, g.rough-node");let b;if(I==null||I.forEach(k=>{var M;const X=(M=k.textContent)===null||M===void 0?void 0:M.trim();(k.id===(d==null?void 0:d.domId)||X===A)&&(b=k)}),!b){E.warn("⚠️ Could not find node matching text:",A);return}const G=b.parentNode;if(!G){E.warn("⚠️ Node has no parent, cannot wrap:",A);return}const w=document.createElementNS("http://www.w3.org/2000/svg","a"),F=L.url.replace(/^"+|"+$/g,"");if(w.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",F),w.setAttribute("target","_blank"),L.tooltip){const k=L.tooltip.replace(/^"+|"+$/g,"");w.setAttribute("title",k),b.setAttribute("title",k)}G.replaceChild(w,b),w.appendChild(b),E.info("🔗 Wrapped node in <a> tag for:",A,L.url)})}catch(L){E.error("❌ Error injecting clickable links:",L)}ue.insertTitle(C,"statediagramTitleText",(h=a==null?void 0:a.titleTopMargin)!==null&&h!==void 0?h:25,n.db.getDiagramTitle()),Se(C,Y,at,(u=a==null?void 0:a.useMaxWidth)!==null&&u!==void 0?u:!0)});return function(e,i,s,n){return t.apply(this,arguments)}})(),"draw"),getDir:Jt},yt=new Map,W=0;function gt(t="",e=0,i="",s=Lt){return`${Oe}-${t}${i!==null&&i.length>0?`${s}${i}`:""}-${e}`}f(gt,"stateDomId");var we=f((t,e,i,s,n,h,u,m)=>{E.trace("items",e),e.forEach(a=>{switch(a.stmt){case tt:it(t,a,i,s,n,h,u,m);break;case rt:it(t,a,i,s,n,h,u,m);break;case At:{var g;it(t,a.state1,i,s,n,h,u,m),it(t,a.state2,i,s,n,h,u,m);const v=u==="neo",C={id:"edge"+W,start:a.state1.id,end:a.state2.id,arrowhead:"normal",arrowTypeEnd:v?"arrow_barb_neo":"arrow_barb",style:Mt,labelStyle:"",label:K.sanitizeText((g=a.description)!==null&&g!==void 0?g:"",B()),arrowheadStyle:Wt,labelpos:Ut,labelType:jt,thickness:Ht,classes:zt,look:u};n.push(C),W++}break}})},"setupDoc"),Bt=f((t,e=Ft)=>{let i=e;if(t.doc)for(const s of t.doc)s.stmt==="dir"&&(i=s.value);return i},"getDir");function st(t,e,i){if(!e.id||e.id==="</join></fork>"||e.id==="</choice>")return;e.cssClasses&&(Array.isArray(e.cssCompiledStyles)||(e.cssCompiledStyles=[]),e.cssClasses.split(" ").forEach(n=>{const h=i.get(n);if(h){var u;e.cssCompiledStyles=[...(u=e.cssCompiledStyles)!==null&&u!==void 0?u:[],...h.styles]}}));const s=t.find(n=>n.id===e.id);s?Object.assign(s,e):t.push(e)}f(st,"insertOrUpdateNode");function qt(t){var e,i;return(e=t==null||(i=t.classes)===null||i===void 0?void 0:i.join(" "))!==null&&e!==void 0?e:""}f(qt,"getClassesFromDbInfo");function Qt(t){var e;return(e=t==null?void 0:t.styles)!==null&&e!==void 0?e:[]}f(Qt,"getStylesFromDbInfo");var it=f((t,e,i,s,n,h,u,m)=>{const a=e.id,g=i.get(a),v=qt(g),C=Qt(g),Y=B();if(E.info("dataFetcher parsedItem",e,g,C),a!=="root"){var L;let A=kt;e.start===!0?A=Ee:e.start===!1&&(A=ve),e.type!==rt&&(A=e.type),yt.get(a)||yt.set(a,{id:a,shape:A,description:K.sanitizeText(a,Y),cssClasses:`${v} ${ke}`,cssStyles:C});const d=yt.get(a);if(e.description){if(Array.isArray(d.description))d.shape=Ct,d.description.push(e.description);else{var x;!((x=d.description)===null||x===void 0)&&x.length&&d.description.length>0?(d.shape=Ct,d.description===a?d.description=[e.description]:d.description=[d.description,e.description]):(d.shape=kt,d.description=e.description)}d.description=K.sanitizeTextOrArray(d.description,Y)}((L=d.description)===null||L===void 0?void 0:L.length)===1&&d.shape===Ct&&(d.type==="group"?d.shape=$t:d.shape=kt),!d.type&&e.doc&&(E.info("Setting cluster for XCX",a,Bt(e)),d.type="group",d.isGroup=!0,d.dir=Bt(e),d.explicitDir=e.doc.some(b=>b.stmt==="dir"),d.shape=e.type===Vt?Nt:$t,d.cssClasses=`${d.cssClasses} ${Le} ${h?Ie:""}`);const I={labelStyle:"",shape:d.shape,label:d.description,cssClasses:d.cssClasses,cssCompiledStyles:[],cssStyles:d.cssStyles,id:a,dir:d.dir,domId:gt(a,W),type:d.type,isGroup:d.type==="group",padding:8,rx:10,ry:10,look:u,labelType:"markdown"};if(I.shape===Nt&&(I.label=""),t&&t.id!=="root"&&(E.trace("Setting node ",a," to be child of its parent ",t.id),I.parentId=t.id),I.centerLabel=!0,e.note){var N;const b={labelStyle:"",shape:be,label:e.note.text,labelType:"markdown",cssClasses:Ae,cssStyles:[],cssCompiledStyles:[],id:a+Re+"-"+W,domId:gt(a,W,Xt),type:d.type,isGroup:d.type==="group",padding:(N=Y.flowchart)===null||N===void 0?void 0:N.padding,look:u,position:e.note.position},G=a+Pt,w={labelStyle:"",shape:De,label:e.note.text,cssClasses:d.cssClasses,cssStyles:[],id:a+Pt,domId:gt(a,W,Kt),type:"group",isGroup:!0,padding:16,look:u,position:e.note.position};W++,w.id=G,b.parentId=G,st(s,w,m),st(s,b,m),st(s,I,m);let F=a,k=b.id;e.note.position==="left of"&&(F=b.id,k=a),n.push({id:F+"-"+k,start:F,end:k,arrowhead:"none",arrowTypeEnd:"",style:Mt,labelStyle:"",classes:xe,arrowheadStyle:Wt,labelpos:Ut,labelType:jt,thickness:Ht,look:u})}else st(s,I,m)}e.doc&&(E.trace("Adding nodes children "),we(e,e.doc,i,s,n,!h,u,m))},"dataFetcher"),Ne=f(()=>{yt.clear(),W=0},"reset"),R={START_NODE:"[*]",START_TYPE:"start",END_NODE:"[*]",END_TYPE:"end",COLOR_KEYWORD:"color",FILL_KEYWORD:"fill",BG_FILL:"bgFill",STYLECLASS_SEP:","},Yt=f(()=>new Map,"newClassesList"),Gt=f(()=>({relations:[],states:new Map,documents:{}}),"newDoc"),St=f(t=>JSON.parse(JSON.stringify(t)),"clone"),He=(pt=class{constructor(t){this.version=t,this.nodes=[],this.edges=[],this.rootDoc=[],this.classes=Yt(),this.documents={root:Gt()},this.currentDocument=this.documents.root,this.startEndCount=0,this.dividerCnt=0,this.links=new Map,this.funs=[],this.getAccTitle=he,this.setAccTitle=ne,this.getAccDescription=le,this.setAccDescription=re,this.setDiagramTitle=ae,this.getDiagramTitle=ce,this.clear(),this.setRootDoc=this.setRootDoc.bind(this),this.getDividerId=this.getDividerId.bind(this),this.setDirection=this.setDirection.bind(this),this.trimColon=this.trimColon.bind(this),this.bindFunctions=this.bindFunctions.bind(this)}extract(t){this.clear(!0);for(const s of Array.isArray(t)?t:t.doc)switch(s.stmt){case tt:this.addState(s.id.trim(),s.type,s.doc,s.description,s.note);break;case At:this.addRelation(s.state1,s.state2,s.description);break;case Te:this.addStyleClass(s.id.trim(),s.classes);break;case _e:this.handleStyleDef(s);break;case me:this.setCssClass(s.id.trim(),s.styleClass);break;case"click":this.addLink(s.id,s.url,s.tooltip);break}const e=this.getStates(),i=B();Ne(),it(void 0,this.getRootDocV2(),e,this.nodes,this.edges,!0,i.look,this.classes);for(const s of this.nodes)if(Array.isArray(s.label)){if(s.description=s.label.slice(1),s.isGroup&&s.description.length>0)throw new Error(`Group nodes can only have label. Remove the additional description for node [${s.id}]`);s.label=s.label[0]}}handleStyleDef(t){const e=t.id.trim().split(","),i=t.styleClass.split(",");for(const s of e){let n=this.getState(s);if(!n){const h=s.trim();this.addState(h),n=this.getState(h)}n&&(n.styles=i.map(h=>{var u;return(u=h.replace(/;/g,""))===null||u===void 0?void 0:u.trim()}))}}setRootDoc(t){E.info("Setting root doc",t),this.rootDoc=t,this.version===1?this.extract(t):this.extract(this.getRootDocV2())}docTranslator(t,e,i){if(e.stmt===At){this.docTranslator(t,e.state1,!0),this.docTranslator(t,e.state2,!1);return}if(e.stmt===tt&&(e.id===R.START_NODE?(e.id=t.id+(i?"_start":"_end"),e.start=i):e.id=e.id.trim()),e.stmt!==Z&&e.stmt!==tt||!e.doc)return;const s=[];let n=[];for(const h of e.doc)if(h.type===Vt){const u=St(h);u.doc=St(n),s.push(u),n=[]}else n.push(h);if(s.length>0&&n.length>0){const h={stmt:tt,id:de(),type:"divider",doc:St(n)};s.push(St(h)),e.doc=s}e.doc.forEach(h=>this.docTranslator(e,h,!0))}getRootDocV2(){return this.docTranslator({id:Z,stmt:Z},{id:Z,stmt:Z,doc:this.rootDoc},!0),{id:Z,doc:this.rootDoc}}addState(t,e=rt,i=void 0,s=void 0,n=void 0,h=void 0,u=void 0,m=void 0){const a=t==null?void 0:t.trim();if(!this.currentDocument.states.has(a))E.info("Adding state ",a,s),this.currentDocument.states.set(a,{stmt:tt,id:a,descriptions:[],type:e,doc:i,note:n,classes:[],styles:[],textStyles:[]});else{const g=this.currentDocument.states.get(a);if(!g)throw new Error(`State not found: ${a}`);g.doc||(g.doc=i),g.type||(g.type=e)}if(s&&(E.info("Setting state description",a,s),(Array.isArray(s)?s:[s]).forEach(g=>this.addDescription(a,g.trim()))),n){const g=this.currentDocument.states.get(a);if(!g)throw new Error(`State not found: ${a}`);g.note=n,g.note.text=K.sanitizeText(g.note.text,B())}h&&(E.info("Setting state classes",a,h),(Array.isArray(h)?h:[h]).forEach(g=>this.setCssClass(a,g.trim()))),u&&(E.info("Setting state styles",a,u),(Array.isArray(u)?u:[u]).forEach(g=>this.setStyle(a,g.trim()))),m&&(E.info("Setting state styles",a,u),(Array.isArray(m)?m:[m]).forEach(g=>this.setTextStyle(a,g.trim())))}clear(t){this.nodes=[],this.edges=[],this.funs=[this.setupToolTips.bind(this)],this.documents={root:Gt()},this.currentDocument=this.documents.root,this.startEndCount=0,this.classes=Yt(),t||(this.links=new Map,oe())}getState(t){return this.currentDocument.states.get(t)}getStates(){return this.currentDocument.states}logDocuments(){E.info("Documents = ",this.documents)}getRelations(){return this.currentDocument.relations}addLink(t,e,i){this.links.set(t,{url:e,tooltip:i}),E.warn("Adding link",t,e,i)}getLinks(){return this.links}startIdIfNeeded(t=""){return t===R.START_NODE?(this.startEndCount++,`${R.START_TYPE}${this.startEndCount}`):t}startTypeIfNeeded(t="",e=rt){return t===R.START_NODE?R.START_TYPE:e}endIdIfNeeded(t=""){return t===R.END_NODE?(this.startEndCount++,`${R.END_TYPE}${this.startEndCount}`):t}endTypeIfNeeded(t="",e=rt){return t===R.END_NODE?R.END_TYPE:e}addRelationObjs(t,e,i=""){const s=this.startIdIfNeeded(t.id.trim()),n=this.startTypeIfNeeded(t.id.trim(),t.type),h=this.startIdIfNeeded(e.id.trim()),u=this.startTypeIfNeeded(e.id.trim(),e.type);this.addState(s,n,t.doc,t.description,t.note,t.classes,t.styles,t.textStyles),this.addState(h,u,e.doc,e.description,e.note,e.classes,e.styles,e.textStyles),this.currentDocument.relations.push({id1:s,id2:h,relationTitle:K.sanitizeText(i,B())})}addRelation(t,e,i){if(typeof t=="object"&&typeof e=="object")this.addRelationObjs(t,e,i);else if(typeof t=="string"&&typeof e=="string"){const s=this.startIdIfNeeded(t.trim()),n=this.startTypeIfNeeded(t),h=this.endIdIfNeeded(e.trim()),u=this.endTypeIfNeeded(e);this.addState(s,n),this.addState(h,u),this.currentDocument.relations.push({id1:s,id2:h,relationTitle:i?K.sanitizeText(i,B()):void 0})}}addDescription(t,e){var i;const s=this.currentDocument.states.get(t),n=e.startsWith(":")?e.replace(":","").trim():e;s==null||(i=s.descriptions)===null||i===void 0||i.push(K.sanitizeText(n,B()))}cleanupLabel(t){return t.startsWith(":")?t.slice(2).trim():t.trim()}getDividerId(){return this.dividerCnt++,`divider-id-${this.dividerCnt}`}addStyleClass(t,e=""){this.classes.has(t)||this.classes.set(t,{id:t,styles:[],textStyles:[]});const i=this.classes.get(t);e&&i&&e.split(R.STYLECLASS_SEP).forEach(s=>{const n=s.replace(/([^;]*);/,"$1").trim();if(RegExp(R.COLOR_KEYWORD).exec(s)){const h=n.replace(R.FILL_KEYWORD,R.BG_FILL).replace(R.COLOR_KEYWORD,R.FILL_KEYWORD);i.textStyles.push(h)}i.styles.push(n)})}getClasses(){return this.classes}setupToolTips(t){const e=fe();Dt(t).select("svg").selectAll("g.node, g.rough-node").on("mouseover",i=>{var s;const n=Dt(i.currentTarget),h=n.attr("title");if(h===null)return;const u=(s=i.currentTarget)===null||s===void 0?void 0:s.getBoundingClientRect();e.transition().duration(200).style("opacity",".9"),e.style("left",window.scrollX+u.left+(u.right-u.left)/2+"px").style("top",window.scrollY+u.bottom+"px"),e.html(ie.sanitize(h)),n.classed("hover",!0)}).on("mouseout",i=>{e.transition().duration(500).style("opacity",0),Dt(i.currentTarget).classed("hover",!1)})}setCssClass(t,e){t.split(",").forEach(i=>{var s;let n=this.getState(i);if(!n){const h=i.trim();this.addState(h),n=this.getState(h)}n==null||(s=n.classes)===null||s===void 0||s.push(e)})}setStyle(t,e){var i;(i=this.getState(t))===null||i===void 0||(i=i.styles)===null||i===void 0||i.push(e)}setTextStyle(t,e){var i;(i=this.getState(t))===null||i===void 0||(i=i.textStyles)===null||i===void 0||i.push(e)}bindFunctions(t){this.funs.forEach(e=>{e(t)})}getDirectionStatement(){return this.rootDoc.find(t=>t.stmt===wt)}getDirection(){var t,e;return(t=(e=this.getDirectionStatement())===null||e===void 0?void 0:e.value)!==null&&t!==void 0?t:ge}setDirection(t){const e=this.getDirectionStatement();e?e.value=t:this.rootDoc.unshift({stmt:wt,value:t})}trimColon(t){return t.startsWith(":")?t.slice(1).trim():t.trim()}getData(){const t=B();return{nodes:this.nodes,edges:this.edges,other:{},config:t,direction:Jt(this.getRootDocV2())}}getConfig(){return B().state}},f(pt,"StateDB"),pt.relationType={AGGREGATION:0,EXTENSION:1,COMPOSITION:2,DEPENDENCY:3},pt),ze=f(t=>{var e;return`
defs [id$="-barbEnd"] {
    fill: ${t.transitionColor};
    stroke: ${t.transitionColor};
  }
g.stateGroup text {
  fill: ${t.nodeBorder};
  stroke: none;
  font-size: 10px;
}
g.stateGroup text {
  fill: ${t.textColor};
  stroke: none;
  font-size: 10px;

}
g.stateGroup .state-title {
  font-weight: bolder;
  fill: ${t.stateLabelColor};
}

g.stateGroup rect {
  fill: ${t.mainBkg};
  stroke: ${t.nodeBorder};
}

g.stateGroup line {
  stroke: ${t.lineColor};
  stroke-width: ${t.strokeWidth||1};
}

.transition {
  stroke: ${t.transitionColor};
  stroke-width: ${t.strokeWidth||1};
  fill: none;
}

.stateGroup .composit {
  fill: ${t.background};
  border-bottom: 1px
}

.stateGroup .alt-composit {
  fill: #e0e0e0;
  border-bottom: 1px
}

.state-note {
  stroke: ${t.noteBorderColor};
  fill: ${t.noteBkgColor};

  text {
    fill: ${t.noteTextColor};
    stroke: none;
    font-size: 10px;
  }
}

.stateLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${t.mainBkg};
  opacity: 0.5;
}

.edgeLabel .label rect {
  fill: ${t.labelBackgroundColor};
  opacity: 0.5;
}
.edgeLabel {
  background-color: ${t.edgeLabelBackground};
  p {
    background-color: ${t.edgeLabelBackground};
  }
  rect {
    opacity: 0.5;
    background-color: ${t.edgeLabelBackground};
    fill: ${t.edgeLabelBackground};
  }
  text-align: center;
}
.edgeLabel .label text {
  fill: ${t.transitionLabelColor||t.tertiaryTextColor};
}
.label div .edgeLabel {
  color: ${t.transitionLabelColor||t.tertiaryTextColor};
}

.stateLabel text {
  fill: ${t.stateLabelColor};
  font-size: 10px;
  font-weight: bold;
}

.node circle.state-start {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node .fork-join {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node circle.state-end {
  fill: ${t.innerEndBackground};
  stroke: ${t.background};
  stroke-width: 1.5
}
.end-state-inner {
  fill: ${t.compositeBackground||t.background};
  // stroke: ${t.background};
  stroke-width: 1.5
}

.node rect {
  fill: ${t.stateBkg||t.mainBkg};
  stroke: ${t.stateBorder||t.nodeBorder};
  stroke-width: ${t.strokeWidth||1}px;
}
.node polygon {
  fill: ${t.mainBkg};
  stroke: ${t.stateBorder||t.nodeBorder};;
  stroke-width: ${t.strokeWidth||1}px;
}
[id$="-barbEnd"] {
  fill: ${t.lineColor};
}

.statediagram-cluster rect {
  fill: ${t.compositeTitleBackground};
  stroke: ${t.stateBorder||t.nodeBorder};
  stroke-width: ${t.strokeWidth||1}px;
}

.cluster-label, .nodeLabel {
  color: ${t.stateLabelColor};
  // line-height: 1;
}

.statediagram-cluster rect.outer {
  rx: 5px;
  ry: 5px;
}
.statediagram-state .divider {
  stroke: ${t.stateBorder||t.nodeBorder};
}

.statediagram-state .title-state {
  rx: 5px;
  ry: 5px;
}
.statediagram-cluster.statediagram-cluster .inner {
  fill: ${t.compositeBackground||t.background};
}
.statediagram-cluster.statediagram-cluster-alt .inner {
  fill: ${t.altBackground?t.altBackground:"#efefef"};
}

.statediagram-cluster .inner {
  rx:0;
  ry:0;
}

.statediagram-state rect.basic {
  rx: 5px;
  ry: 5px;
}
.statediagram-state rect.divider {
  stroke-dasharray: 10,10;
  fill: ${t.altBackground?t.altBackground:"#efefef"};
}

.note-edge {
  stroke-dasharray: 5;
}

.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}
.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}

.statediagram-note text {
  fill: ${t.noteTextColor};
}

.statediagram-note .nodeLabel {
  color: ${t.noteTextColor};
}
.statediagram .edgeLabel {
  color: red; // ${t.noteTextColor};
}

[id$="-dependencyStart"], [id$="-dependencyEnd"] {
  fill: ${t.lineColor};
  stroke: ${t.lineColor};
  stroke-width: ${t.strokeWidth||1};
}

.statediagramTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${t.textColor};
}

[data-look="neo"].statediagram-cluster rect {
  fill: ${t.mainBkg};
  stroke: ${t.useGradient?"url("+t.svgId+"-gradient)":t.stateBorder||t.nodeBorder};
  stroke-width: ${(e=t.strokeWidth)!==null&&e!==void 0?e:1};
}
[data-look="neo"].statediagram-cluster rect.outer {
  rx: ${t.radius}px;
  ry: ${t.radius}px;
  filter: ${t.dropShadow?t.dropShadow.replace("url(#drop-shadow)",`url(${t.svgId}-drop-shadow)`):"none"}
}
`},"getStyles");export{ze as i,Ue as n,je as r,He as t};
