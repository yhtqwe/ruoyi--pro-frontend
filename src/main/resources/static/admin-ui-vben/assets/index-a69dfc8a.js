import{n as s,aB as k,r as z,F as ee,dP as te,fe as ne,ff as le,_ as m,bB as oe,bC as se,cJ as ie,bF as re,bX as R,d as F,bN as ae,aC as ce,bQ as de,as as pe,aO as V,f as L,bA as J,cf as ue,cH as fe,c9 as me,b as be,e4 as ge,k as b,af as ye,cV as Se,cx as $e,cU as ve,ao as W,al as xe,bs as he}from"./index-2b36f9e3.js";import{u as Ce,r as Q}from"./responsiveObserve-8393ce72.js";import{g as we}from"./get-8e17be71.js";function E(e){return e!=null}const Ie=e=>{const{itemPrefixCls:t,component:n,span:l,labelStyle:o,contentStyle:i,bordered:c,label:r,content:a,colon:g}=e,u=n;return c?s(u,{class:[{[`${t}-item-label`]:E(r),[`${t}-item-content`]:E(a)}],colSpan:l},{default:()=>[E(r)&&s("span",{style:o},[r]),E(a)&&s("span",{style:i},[a])]}):s(u,{class:[`${t}-item`],colSpan:l},{default:()=>[s("div",{class:`${t}-item-container`},[(r||r===0)&&s("span",{class:[`${t}-item-label`,{[`${t}-item-no-colon`]:!g}],style:o},[r]),(a||a===0)&&s("span",{class:`${t}-item-content`,style:i},[a])])]})},H=Ie,Pe=e=>{const t=(g,u,D)=>{let{colon:$,prefixCls:I,bordered:S}=u,{component:C,type:_,showLabel:d,showContent:v,labelStyle:p,contentStyle:f}=D;return g.map((y,P)=>{var x,w;const B=y.props||{},{prefixCls:j=I,span:h=1,labelStyle:O=B["label-style"],contentStyle:X=B["content-style"],label:G=(w=(x=y.children)===null||x===void 0?void 0:x.label)===null||w===void 0?void 0:w.call(x)}=B,U=te(y),A=ne(y),T=le(y),{key:N}=y;return typeof C=="string"?s(H,{key:`${_}-${String(N)||P}`,class:A,style:T,labelStyle:m(m({},p),O),contentStyle:m(m({},f),X),span:h,colon:$,component:C,itemPrefixCls:j,bordered:S,label:d?G:null,content:v?U:null},null):[s(H,{key:`label-${String(N)||P}`,class:A,style:m(m(m({},p),T),O),span:1,colon:$,component:C[0],itemPrefixCls:j,bordered:S,label:G},null),s(H,{key:`content-${String(N)||P}`,class:A,style:m(m(m({},f),T),X),span:h*2-1,component:C[1],itemPrefixCls:j,bordered:S,content:U},null)]})},{prefixCls:n,vertical:l,row:o,index:i,bordered:c}=e,{labelStyle:r,contentStyle:a}=k(Z,{labelStyle:z({}),contentStyle:z({})});return l?s(ee,null,[s("tr",{key:`label-${i}`,class:`${n}-row`},[t(o,e,{component:"th",type:"label",showLabel:!0,labelStyle:r.value,contentStyle:a.value})]),s("tr",{key:`content-${i}`,class:`${n}-row`},[t(o,e,{component:"td",type:"content",showContent:!0,labelStyle:r.value,contentStyle:a.value})])]):s("tr",{key:i,class:`${n}-row`},[t(o,e,{component:c?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0,labelStyle:r.value,contentStyle:a.value})])},Be=Pe,Oe=e=>{const{componentCls:t,descriptionsSmallPadding:n,descriptionsDefaultPadding:l,descriptionsMiddlePadding:o,descriptionsBg:i}=e;return{[`&${t}-bordered`]:{[`${t}-view`]:{border:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,"> table":{tableLayout:"auto",borderCollapse:"collapse"}},[`${t}-item-label, ${t}-item-content`]:{padding:l,borderInlineEnd:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderInlineEnd:"none"}},[`${t}-item-label`]:{backgroundColor:i,"&::after":{display:"none"}},[`${t}-row`]:{borderBottom:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderBottom:"none"}},[`&${t}-middle`]:{[`${t}-item-label, ${t}-item-content`]:{padding:o}},[`&${t}-small`]:{[`${t}-item-label, ${t}-item-content`]:{padding:n}}}}},Le=e=>{const{componentCls:t,descriptionsExtraColor:n,descriptionItemPaddingBottom:l,descriptionsItemLabelColonMarginRight:o,descriptionsItemLabelColonMarginLeft:i,descriptionsTitleMarginBottom:c}=e;return{[t]:m(m(m({},re(e)),Oe(e)),{"&-rtl":{direction:"rtl"},[`${t}-header`]:{display:"flex",alignItems:"center",marginBottom:c},[`${t}-title`]:m(m({},ie),{flex:"auto",color:e.colorText,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG}),[`${t}-extra`]:{marginInlineStart:"auto",color:n,fontSize:e.fontSize},[`${t}-view`]:{width:"100%",borderRadius:e.borderRadiusLG,table:{width:"100%",tableLayout:"fixed"}},[`${t}-row`]:{"> th, > td":{paddingBottom:l},"&:last-child":{borderBottom:"none"}},[`${t}-item-label`]:{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:`${i}px ${o}px`},[`&${t}-item-no-colon::after`]:{content:'""'}},[`${t}-item-no-label`]:{"&::after":{margin:0,content:'""'}},[`${t}-item-content`]:{display:"table-cell",flex:1,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"},[`${t}-item`]:{paddingBottom:0,verticalAlign:"top","&-container":{display:"flex",[`${t}-item-label`]:{display:"inline-flex",alignItems:"baseline"},[`${t}-item-content`]:{display:"inline-flex",alignItems:"baseline"}}},"&-middle":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingSM}}},"&-small":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingXS}}}})}},Me=oe("Descriptions",e=>{const t=e.colorFillAlter,n=e.fontSizeSM*e.lineHeightSM,l=e.colorText,o=`${e.paddingXS}px ${e.padding}px`,i=`${e.padding}px ${e.paddingLG}px`,c=`${e.paddingSM}px ${e.paddingLG}px`,r=e.padding,a=e.marginXS,g=e.marginXXS/2,u=se(e,{descriptionsBg:t,descriptionsTitleMarginBottom:n,descriptionsExtraColor:l,descriptionItemPaddingBottom:r,descriptionsSmallPadding:o,descriptionsDefaultPadding:i,descriptionsMiddlePadding:c,descriptionsItemLabelColonMarginRight:a,descriptionsItemLabelColonMarginLeft:g});return[Le(u)]});R.any;const De=()=>({prefixCls:String,label:R.any,labelStyle:{type:Object,default:void 0},contentStyle:{type:Object,default:void 0},span:{type:Number,default:1}}),_e=F({compatConfig:{MODE:3},name:"ADescriptionsItem",props:De(),setup(e,t){let{slots:n}=t;return()=>{var l;return(l=n.default)===null||l===void 0?void 0:l.call(n)}}}),Y={xxxl:3,xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function je(e,t){if(typeof e=="number")return e;if(typeof e=="object")for(let n=0;n<Q.length;n++){const l=Q[n];if(t[l]&&e[l]!==void 0)return e[l]||Y[l]}return 3}function q(e,t,n){let l=e;return(n===void 0||n>t)&&(l=fe(e,{span:t}),me()),l}function Ee(e,t){const n=ue(e),l=[];let o=[],i=t;return n.forEach((c,r)=>{var a;const g=(a=c.props)===null||a===void 0?void 0:a.span,u=g||1;if(r===n.length-1){o.push(q(c,i,g)),l.push(o);return}u<i?(i-=u,o.push(c)):(o.push(q(c,i,u)),l.push(o),i=t,o=[])}),l}const ze=()=>({prefixCls:String,bordered:{type:Boolean,default:void 0},size:{type:String,default:"default"},title:R.any,extra:R.any,column:{type:[Number,Object],default:()=>Y},layout:String,colon:{type:Boolean,default:void 0},labelStyle:{type:Object,default:void 0},contentStyle:{type:Object,default:void 0}}),Z=Symbol("descriptionsContext"),M=F({compatConfig:{MODE:3},name:"ADescriptions",inheritAttrs:!1,props:ze(),slots:Object,Item:_e,setup(e,t){let{slots:n,attrs:l}=t;const{prefixCls:o,direction:i}=ae("descriptions",e);let c;const r=z({}),[a,g]=Me(o),u=Ce();ce(()=>{c=u.value.subscribe($=>{typeof e.column=="object"&&(r.value=$)})}),de(()=>{u.value.unsubscribe(c)}),pe(Z,{labelStyle:V(e,"labelStyle"),contentStyle:V(e,"contentStyle")});const D=L(()=>je(e.column,r.value));return()=>{var $,I,S;const{size:C,bordered:_=!1,layout:d="horizontal",colon:v=!0,title:p=($=n.title)===null||$===void 0?void 0:$.call(n),extra:f=(I=n.extra)===null||I===void 0?void 0:I.call(n)}=e,y=(S=n.default)===null||S===void 0?void 0:S.call(n),P=Ee(y,D.value);return a(s("div",J(J({},l),{},{class:[o.value,{[`${o.value}-${C}`]:C!=="default",[`${o.value}-bordered`]:!!_,[`${o.value}-rtl`]:i.value==="rtl"},l.class,g.value]}),[(p||f)&&s("div",{class:`${o.value}-header`},[p&&s("div",{class:`${o.value}-title`},[p]),f&&s("div",{class:`${o.value}-extra`},[f])]),s("div",{class:`${o.value}-view`},[s("table",null,[s("tbody",null,[P.map((x,w)=>s(Be,{key:w,index:w,colon:v,prefixCls:o.value,vertical:d==="vertical",bordered:_,row:x},null))])])])]))}}});M.install=function(e){return e.component(M.name,M),e.component(M.Item.name,M.Item),e};const K=M;function Re(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!ve(e)}const Ae={useCollapse:{type:Boolean,default:!0},title:{type:String,default:""},size:{type:String,validator:e=>["small","default","middle",void 0].includes(e),default:"small"},bordered:{type:Boolean,default:!0},column:{type:[Number,Object],default:()=>({xxl:4,xl:3,lg:3,md:3,sm:2,xs:1})},collapseOptions:{type:Object,default:null},schema:{type:Array,default:()=>[]},data:{type:Object}},Te=F({name:"Description",props:Ae,emits:["register"],setup(e,{slots:t,emit:n}){const l=z(null),{prefixCls:o}=be("description"),i=ge(),c=L(()=>({...e,...b(l)})),r=L(()=>({...b(c),title:void 0})),a=L(()=>!!b(c).title),g=L(()=>({canExpand:!1,...b(r).collapseOptions})),u=L(()=>({...b(i),...b(r)}));function D(d){l.value={...b(l),...d}}function $({label:d,labelMinWidth:v,labelStyle:p}){if(!p&&!v)return d;const f={...p,minWidth:`${v}px `};return s("div",{style:f},[d])}function I(){const{schema:d,data:v}=b(r);return b(d).map(p=>{const{render:f,field:y,span:P,show:x,contentMinWidth:w}=p;if(x&&W(x)&&!x(v))return null;const B=()=>{const h=b(r)?.data;if(!h)return null;const O=we(h,y);return O&&!xe(h).hasOwnProperty(y)?W(f)?f("",h):"":W(f)?f(O,h):O??""},j=w;return s(K.Item,{label:$(p),key:y,span:P},{default:()=>{if(!w)return B();const h={minWidth:`${j}px`};return s("div",{style:h},[B()])}})}).filter(p=>!!p)}const S=()=>{let d;return s(K,ye({class:`${o}`},b(u)),Re(d=I())?d:{default:()=>[d]})},C=()=>{const d=e.useCollapse?S():s("div",null,[S()]);if(!e.useCollapse)return d;const{canExpand:v,helpMessage:p}=b(g),{title:f}=b(c);return s($e,{title:f,canExpan:v,helpMessage:p},{default:()=>d,action:()=>Se(t,"action")})};return n("register",{setDescProps:D}),()=>b(a)?C():S()}}),Fe=he(Te);export{Fe as D};
