import{aB as _,f as m,as as T,bB as E,bC as D,_ as g,d as k,bN as B,r as M,C as V,bQ as X,bz as F,n as L,bA as C,c6 as I}from"./index-2b36f9e3.js";import{u as H,r as j}from"./responsiveObserve-8393ce72.js";import{u as K}from"./useFlexGapSupport-de861fb2.js";const W=Symbol("rowContextKey"),P=e=>{T(W,e)},J=()=>_(W,{gutter:m(()=>{}),wrap:m(()=>{}),supportFlexGap:m(()=>{})}),Q=e=>{const{componentCls:t}=e;return{[t]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around ":{justifyContent:"space-around"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}},U=e=>{const{componentCls:t}=e;return{[t]:{position:"relative",maxWidth:"100%",minHeight:1}}},q=(e,t)=>{const{componentCls:a,gridColumns:u}=e,o={};for(let s=u;s>=0;s--)s===0?(o[`${a}${t}-${s}`]={display:"none"},o[`${a}-push-${s}`]={insetInlineStart:"auto"},o[`${a}-pull-${s}`]={insetInlineEnd:"auto"},o[`${a}${t}-push-${s}`]={insetInlineStart:"auto"},o[`${a}${t}-pull-${s}`]={insetInlineEnd:"auto"},o[`${a}${t}-offset-${s}`]={marginInlineEnd:0},o[`${a}${t}-order-${s}`]={order:0}):(o[`${a}${t}-${s}`]={display:"block",flex:`0 0 ${s/u*100}%`,maxWidth:`${s/u*100}%`},o[`${a}${t}-push-${s}`]={insetInlineStart:`${s/u*100}%`},o[`${a}${t}-pull-${s}`]={insetInlineEnd:`${s/u*100}%`},o[`${a}${t}-offset-${s}`]={marginInlineStart:`${s/u*100}%`},o[`${a}${t}-order-${s}`]={order:s});return o},O=(e,t)=>q(e,t),Y=(e,t,a)=>({[`@media (min-width: ${t}px)`]:g({},O(e,a))}),Z=E("Grid",e=>[Q(e)]),z=E("Grid",e=>{const t=D(e,{gridColumns:24}),a={"-sm":t.screenSMMin,"-md":t.screenMDMin,"-lg":t.screenLGMin,"-xl":t.screenXLMin,"-xxl":t.screenXXLMin};return[U(t),O(t,""),O(t,"-xs"),Object.keys(a).map(u=>Y(t,a[u],u)).reduce((u,o)=>g(g({},u),o),{})]}),ee=()=>({align:I([String,Object]),justify:I([String,Object]),prefixCls:String,gutter:I([Number,Array,Object],0),wrap:{type:Boolean,default:void 0}}),te=k({compatConfig:{MODE:3},name:"ARow",inheritAttrs:!1,props:ee(),setup(e,t){let{slots:a,attrs:u}=t;const{prefixCls:o,direction:s}=B("row",e),[G,y]=Z(o);let b;const x=H(),v=M({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),S=M({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),h=n=>m(()=>{if(typeof e[n]=="string")return e[n];if(typeof e[n]!="object")return"";for(let r=0;r<j.length;r++){const l=j[r];if(!S.value[l])continue;const i=e[n][l];if(i!==void 0)return i}return""}),f=h("align"),p=h("justify"),d=K();V(()=>{b=x.value.subscribe(n=>{S.value=n;const r=e.gutter||0;(!Array.isArray(r)&&typeof r=="object"||Array.isArray(r)&&(typeof r[0]=="object"||typeof r[1]=="object"))&&(v.value=n)})}),X(()=>{x.value.unsubscribe(b)});const $=m(()=>{const n=[void 0,void 0],{gutter:r=0}=e;return(Array.isArray(r)?r:[r,void 0]).forEach((i,R)=>{if(typeof i=="object")for(let N=0;N<j.length;N++){const A=j[N];if(v.value[A]&&i[A]!==void 0){n[R]=i[A];break}}else n[R]=i}),n});P({gutter:$,supportFlexGap:d,wrap:m(()=>e.wrap)});const w=m(()=>F(o.value,{[`${o.value}-no-wrap`]:e.wrap===!1,[`${o.value}-${p.value}`]:p.value,[`${o.value}-${f.value}`]:f.value,[`${o.value}-rtl`]:s.value==="rtl"},u.class,y.value)),c=m(()=>{const n=$.value,r={},l=n[0]!=null&&n[0]>0?`${n[0]/-2}px`:void 0,i=n[1]!=null&&n[1]>0?`${n[1]/-2}px`:void 0;return l&&(r.marginLeft=l,r.marginRight=l),d.value?r.rowGap=`${n[1]}px`:i&&(r.marginTop=i,r.marginBottom=i),r});return()=>{var n;return G(L("div",C(C({},u),{},{class:w.value,style:g(g({},c.value),u.style)}),[(n=a.default)===null||n===void 0?void 0:n.call(a)]))}}}),ue=te;function ne(e){return typeof e=="number"?`${e} ${e} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?`0 0 ${e}`:e}const re=()=>({span:[String,Number],order:[String,Number],offset:[String,Number],push:[String,Number],pull:[String,Number],xs:{type:[String,Number,Object],default:void 0},sm:{type:[String,Number,Object],default:void 0},md:{type:[String,Number,Object],default:void 0},lg:{type:[String,Number,Object],default:void 0},xl:{type:[String,Number,Object],default:void 0},xxl:{type:[String,Number,Object],default:void 0},prefixCls:String,flex:[String,Number]}),se=["xs","sm","md","lg","xl","xxl"],ie=k({compatConfig:{MODE:3},name:"ACol",inheritAttrs:!1,props:re(),setup(e,t){let{slots:a,attrs:u}=t;const{gutter:o,supportFlexGap:s,wrap:G}=J(),{prefixCls:y,direction:b}=B("col",e),[x,v]=z(y),S=m(()=>{const{span:f,order:p,offset:d,push:$,pull:w}=e,c=y.value;let n={};return se.forEach(r=>{let l={};const i=e[r];typeof i=="number"?l.span=i:typeof i=="object"&&(l=i||{}),n=g(g({},n),{[`${c}-${r}-${l.span}`]:l.span!==void 0,[`${c}-${r}-order-${l.order}`]:l.order||l.order===0,[`${c}-${r}-offset-${l.offset}`]:l.offset||l.offset===0,[`${c}-${r}-push-${l.push}`]:l.push||l.push===0,[`${c}-${r}-pull-${l.pull}`]:l.pull||l.pull===0,[`${c}-rtl`]:b.value==="rtl"})}),F(c,{[`${c}-${f}`]:f!==void 0,[`${c}-order-${p}`]:p,[`${c}-offset-${d}`]:d,[`${c}-push-${$}`]:$,[`${c}-pull-${w}`]:w},n,u.class,v.value)}),h=m(()=>{const{flex:f}=e,p=o.value,d={};if(p&&p[0]>0){const $=`${p[0]/2}px`;d.paddingLeft=$,d.paddingRight=$}if(p&&p[1]>0&&!s.value){const $=`${p[1]/2}px`;d.paddingTop=$,d.paddingBottom=$}return f&&(d.flex=ne(f),G.value===!1&&!d.minWidth&&(d.minWidth=0)),d});return()=>{var f;return x(L("div",C(C({},u),{},{class:S.value,style:[h.value,u.style]}),[(f=a.default)===null||f===void 0?void 0:f.call(a)]))}}});export{ie as C,ue as R};