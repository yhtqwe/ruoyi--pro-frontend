import{d as Y,bN as J,n as r,bX as E,aB as ve,r as G,cf as le,cH as $e,bA as B,bz as oe,eo as fe,ep as pe,bB as he,bC as Se,_ as M,bF as ye,b$ as xe,as as be,aO as te,f as I,a6 as Ce,b6 as Ie,c4 as ie,cd as _e,eq as W,c3 as ne,c6 as q,c8 as Le}from"./index-2b36f9e3.js";import{P as ze}from"./index-824a8a54.js";import{C as Me,R as Pe}from"./Col-e08843cf.js";import{u as Te}from"./useBreakpoint-99376be7.js";import{r as ae}from"./responsiveObserve-8393ce72.js";import{e as Be}from"./eagerComputed-3545aecd.js";const we=()=>({avatar:E.any,description:E.any,prefixCls:String,title:E.any}),Ee=Y({compatConfig:{MODE:3},name:"AListItemMeta",props:we(),displayName:"AListItemMeta",__ANT_LIST_ITEM_META:!0,slots:Object,setup(e,t){let{slots:i}=t;const{prefixCls:l}=J("list",e);return()=>{var o,c,v,a,S,d;const m=`${l.value}-item-meta`,u=(o=e.title)!==null&&o!==void 0?o:(c=i.title)===null||c===void 0?void 0:c.call(i),s=(v=e.description)!==null&&v!==void 0?v:(a=i.description)===null||a===void 0?void 0:a.call(i),p=(S=e.avatar)!==null&&S!==void 0?S:(d=i.avatar)===null||d===void 0?void 0:d.call(i),$=r("div",{class:`${l.value}-item-meta-content`},[u&&r("h4",{class:`${l.value}-item-meta-title`},[u]),s&&r("div",{class:`${l.value}-item-meta-description`},[s])]);return r("div",{class:m},[p&&r("div",{class:`${l.value}-item-meta-avatar`},[p]),(u||s)&&$])}}}),re=Symbol("ListContextKey");var Oe=globalThis&&globalThis.__rest||function(e,t){var i={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(i[l]=e[l]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,l=Object.getOwnPropertySymbols(e);o<l.length;o++)t.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(e,l[o])&&(i[l[o]]=e[l[o]]);return i};const Ae=()=>({prefixCls:String,extra:E.any,actions:E.array,grid:Object,colStyle:{type:Object,default:void 0}}),He=Y({compatConfig:{MODE:3},name:"AListItem",inheritAttrs:!1,Meta:Ee,props:Ae(),slots:Object,setup(e,t){let{slots:i,attrs:l}=t;const{itemLayout:o,grid:c}=ve(re,{grid:G(),itemLayout:G()}),{prefixCls:v}=J("list",e),a=()=>{var d;const m=((d=i.default)===null||d===void 0?void 0:d.call(i))||[];let u;return m.forEach(s=>{fe(s)&&!pe(s)&&(u=!0)}),u&&m.length>1},S=()=>{var d,m;const u=(d=e.extra)!==null&&d!==void 0?d:(m=i.extra)===null||m===void 0?void 0:m.call(i);return o.value==="vertical"?!!u:!a()};return()=>{var d,m,u,s,p;const{class:$}=l,b=Oe(l,["class"]),h=v.value,L=(d=e.extra)!==null&&d!==void 0?d:(m=i.extra)===null||m===void 0?void 0:m.call(i),O=(u=i.default)===null||u===void 0?void 0:u.call(i);let f=(s=e.actions)!==null&&s!==void 0?s:le((p=i.actions)===null||p===void 0?void 0:p.call(i));f=f&&!Array.isArray(f)?[f]:f;const P=f&&f.length>0&&r("ul",{class:`${h}-item-action`,key:"actions"},[f.map((C,w)=>r("li",{key:`${h}-item-action-${w}`},[C,w!==f.length-1&&r("em",{class:`${h}-item-action-split`},null)]))]),A=c.value?"div":"li",H=r(A,B(B({},b),{},{class:oe(`${h}-item`,{[`${h}-item-no-flex`]:!S()},$)}),{default:()=>[o.value==="vertical"&&L?[r("div",{class:`${h}-item-main`,key:"content"},[O,P]),r("div",{class:`${h}-item-extra`,key:"extra"},[L])]:[O,P,$e(L,{key:"extra"})]]});return c.value?r(Me,{flex:1,style:e.colStyle},{default:()=>[H]}):H}}}),je=e=>{const{listBorderedCls:t,componentCls:i,paddingLG:l,margin:o,padding:c,listItemPaddingSM:v,marginLG:a,borderRadiusLG:S}=e;return{[`${t}`]:{border:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,borderRadius:S,[`${i}-header,${i}-footer,${i}-item`]:{paddingInline:l},[`${i}-pagination`]:{margin:`${o}px ${a}px`}},[`${t}${i}-sm`]:{[`${i}-item,${i}-header,${i}-footer`]:{padding:v}},[`${t}${i}-lg`]:{[`${i}-item,${i}-header,${i}-footer`]:{padding:`${c}px ${l}px`}}}},We=e=>{const{componentCls:t,screenSM:i,screenMD:l,marginLG:o,marginSM:c,margin:v}=e;return{[`@media screen and (max-width:${l})`]:{[`${t}`]:{[`${t}-item`]:{[`${t}-item-action`]:{marginInlineStart:o}}},[`${t}-vertical`]:{[`${t}-item`]:{[`${t}-item-extra`]:{marginInlineStart:o}}}},[`@media screen and (max-width: ${i})`]:{[`${t}`]:{[`${t}-item`]:{flexWrap:"wrap",[`${t}-action`]:{marginInlineStart:c}}},[`${t}-vertical`]:{[`${t}-item`]:{flexWrap:"wrap-reverse",[`${t}-item-main`]:{minWidth:e.contentWidth},[`${t}-item-extra`]:{margin:`auto auto ${v}px`}}}}}},Ge=e=>{const{componentCls:t,antCls:i,controlHeight:l,minHeight:o,paddingSM:c,marginLG:v,padding:a,listItemPadding:S,colorPrimary:d,listItemPaddingSM:m,listItemPaddingLG:u,paddingXS:s,margin:p,colorText:$,colorTextDescription:b,motionDurationSlow:h,lineWidth:L}=e;return{[`${t}`]:M(M({},ye(e)),{position:"relative","*":{outline:"none"},[`${t}-header, ${t}-footer`]:{background:"transparent",paddingBlock:c},[`${t}-pagination`]:{marginBlockStart:v,textAlign:"end",[`${i}-pagination-options`]:{textAlign:"start"}},[`${t}-spin`]:{minHeight:o,textAlign:"center"},[`${t}-items`]:{margin:0,padding:0,listStyle:"none"},[`${t}-item`]:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:S,color:$,[`${t}-item-meta`]:{display:"flex",flex:1,alignItems:"flex-start",maxWidth:"100%",[`${t}-item-meta-avatar`]:{marginInlineEnd:a},[`${t}-item-meta-content`]:{flex:"1 0",width:0,color:$},[`${t}-item-meta-title`]:{marginBottom:e.marginXXS,color:$,fontSize:e.fontSize,lineHeight:e.lineHeight,"> a":{color:$,transition:`all ${h}`,"&:hover":{color:d}}},[`${t}-item-meta-description`]:{color:b,fontSize:e.fontSize,lineHeight:e.lineHeight}},[`${t}-item-action`]:{flex:"0 0 auto",marginInlineStart:e.marginXXL,padding:0,fontSize:0,listStyle:"none","& > li":{position:"relative",display:"inline-block",padding:`0 ${s}px`,color:b,fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"center","&:first-child":{paddingInlineStart:0}},[`${t}-item-action-split`]:{position:"absolute",insetBlockStart:"50%",insetInlineEnd:0,width:L,height:Math.ceil(e.fontSize*e.lineHeight)-e.marginXXS*2,transform:"translateY(-50%)",backgroundColor:e.colorSplit}}},[`${t}-empty`]:{padding:`${a}px 0`,color:b,fontSize:e.fontSizeSM,textAlign:"center"},[`${t}-empty-text`]:{padding:a,color:e.colorTextDisabled,fontSize:e.fontSize,textAlign:"center"},[`${t}-item-no-flex`]:{display:"block"}}),[`${t}-grid ${i}-col > ${t}-item`]:{display:"block",maxWidth:"100%",marginBlockEnd:p,paddingBlock:0,borderBlockEnd:"none"},[`${t}-vertical ${t}-item`]:{alignItems:"initial",[`${t}-item-main`]:{display:"block",flex:1},[`${t}-item-extra`]:{marginInlineStart:v},[`${t}-item-meta`]:{marginBlockEnd:a,[`${t}-item-meta-title`]:{marginBlockEnd:c,color:$,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG}},[`${t}-item-action`]:{marginBlockStart:a,marginInlineStart:"auto","> li":{padding:`0 ${a}px`,"&:first-child":{paddingInlineStart:0}}}},[`${t}-split ${t}-item`]:{borderBlockEnd:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderBlockEnd:"none"}},[`${t}-split ${t}-header`]:{borderBlockEnd:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`},[`${t}-split${t}-empty ${t}-footer`]:{borderTop:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`},[`${t}-loading ${t}-spin-nested-loading`]:{minHeight:l},[`${t}-split${t}-something-after-last-item ${i}-spin-container > ${t}-items > ${t}-item:last-child`]:{borderBlockEnd:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`},[`${t}-lg ${t}-item`]:{padding:u},[`${t}-sm ${t}-item`]:{padding:m},[`${t}:not(${t}-vertical)`]:{[`${t}-item-no-flex`]:{[`${t}-item-action`]:{float:"right"}}}}},De=he("List",e=>{const t=Se(e,{listBorderedCls:`${e.componentCls}-bordered`,minHeight:e.controlHeightLG,listItemPadding:`${e.paddingContentVertical}px ${e.paddingContentHorizontalLG}px`,listItemPaddingSM:`${e.paddingContentVerticalSM}px ${e.paddingContentHorizontal}px`,listItemPaddingLG:`${e.paddingContentVerticalLG}px ${e.paddingContentHorizontalLG}px`});return[Ge(t),je(t),We(t)]},{contentWidth:220}),Ne=()=>({bordered:ie(),dataSource:_e(),extra:W(),grid:ne(),itemLayout:String,loading:q([Boolean,Object]),loadMore:W(),pagination:q([Boolean,Object]),prefixCls:String,rowKey:q([String,Number,Function]),renderItem:Le(),size:String,split:ie(),header:W(),footer:W(),locale:ne()}),_=Y({compatConfig:{MODE:3},name:"AList",inheritAttrs:!1,Item:He,props:xe(Ne(),{dataSource:[],bordered:!1,split:!0,loading:!1,pagination:!1}),slots:Object,setup(e,t){let{slots:i,attrs:l}=t;var o,c;be(re,{grid:te(e,"grid"),itemLayout:te(e,"itemLayout")});const v={current:1,total:0},{prefixCls:a,direction:S,renderEmpty:d}=J("list",e),[m,u]=De(a),s=I(()=>e.pagination&&typeof e.pagination=="object"?e.pagination:{}),p=G((o=s.value.defaultCurrent)!==null&&o!==void 0?o:1),$=G((c=s.value.defaultPageSize)!==null&&c!==void 0?c:10);Ce(s,()=>{"current"in s.value&&(p.value=s.value.current),"pageSize"in s.value&&($.value=s.value.pageSize)});const b=[],h=n=>(g,y)=>{p.value=g,$.value=y,s.value[n]&&s.value[n](g,y)},L=h("onChange"),O=h("onShowSizeChange"),f=I(()=>typeof e.loading=="boolean"?{spinning:e.loading}:e.loading),P=I(()=>f.value&&f.value.spinning),A=I(()=>{let n="";switch(e.size){case"large":n="lg";break;case"small":n="sm";break}return n}),H=I(()=>({[`${a.value}`]:!0,[`${a.value}-vertical`]:e.itemLayout==="vertical",[`${a.value}-${A.value}`]:A.value,[`${a.value}-split`]:e.split,[`${a.value}-bordered`]:e.bordered,[`${a.value}-loading`]:P.value,[`${a.value}-grid`]:!!e.grid,[`${a.value}-rtl`]:S.value==="rtl"})),C=I(()=>{const n=M(M(M({},v),{total:e.dataSource.length,current:p.value,pageSize:$.value}),e.pagination||{}),g=Math.ceil(n.total/n.pageSize);return n.current>g&&(n.current=g),n}),w=I(()=>{let n=[...e.dataSource];return e.pagination&&e.dataSource.length>(C.value.current-1)*C.value.pageSize&&(n=[...e.dataSource].splice((C.value.current-1)*C.value.pageSize,C.value.pageSize)),n}),se=Te(),D=Be(()=>{for(let n=0;n<ae.length;n+=1){const g=ae[n];if(se.value[g])return g}}),de=I(()=>{if(!e.grid)return;const n=D.value&&e.grid[D.value]?e.grid[D.value]:e.grid.column;if(n)return{width:`${100/n}%`,maxWidth:`${100/n}%`}}),ce=(n,g)=>{var y;const T=(y=e.renderItem)!==null&&y!==void 0?y:i.renderItem;if(!T)return null;let x;const z=typeof e.rowKey;return z==="function"?x=e.rowKey(n):z==="string"||z==="number"?x=n[e.rowKey]:x=n.key,x||(x=`list-item-${g}`),b[g]=x,T({item:n,index:g})};return()=>{var n,g,y,T,x,z,N,K;const Q=(n=e.loadMore)!==null&&n!==void 0?n:(g=i.loadMore)===null||g===void 0?void 0:g.call(i),X=(y=e.footer)!==null&&y!==void 0?y:(T=i.footer)===null||T===void 0?void 0:T.call(i),U=(x=e.header)!==null&&x!==void 0?x:(z=i.header)===null||z===void 0?void 0:z.call(i),Z=le((N=i.default)===null||N===void 0?void 0:N.call(i)),me=!!(Q||e.pagination||X),ue=oe(M(M({},H.value),{[`${a.value}-something-after-last-item`]:me}),l.class,u.value),k=e.pagination?r("div",{class:`${a.value}-pagination`},[r(ze,B(B({},C.value),{},{onChange:L,onShowSizeChange:O}),null)]):null;let R=P.value&&r("div",{style:{minHeight:"53px"}},null);if(w.value.length>0){b.length=0;const ee=w.value.map((V,F)=>ce(V,F)),ge=ee.map((V,F)=>r("div",{key:b[F],style:de.value},[V]));R=e.grid?r(Pe,{gutter:e.grid.gutter},{default:()=>[ge]}):r("ul",{class:`${a.value}-items`},[ee])}else!Z.length&&!P.value&&(R=r("div",{class:`${a.value}-empty-text`},[((K=e.locale)===null||K===void 0?void 0:K.emptyText)||d("List")]));const j=C.value.position||"bottom";return m(r("div",B(B({},l),{},{class:ue}),[(j==="top"||j==="both")&&k,U&&r("div",{class:`${a.value}-header`},[U]),r(Ie,f.value,{default:()=>[R,Z]}),X&&r("div",{class:`${a.value}-footer`},[X]),Q||(j==="bottom"||j==="both")&&k]))}}});_.install=function(e){return e.component(_.name,_),e.component(_.Item.name,_.Item),e.component(_.Item.Meta.name,_.Item.Meta),e};const Ye=_;export{Ye as L};
