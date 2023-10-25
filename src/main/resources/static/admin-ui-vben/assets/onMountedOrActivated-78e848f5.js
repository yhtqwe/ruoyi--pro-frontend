import{d as I,bL as V,C as G,_ as d,n as g,bA as b,cz as K,bN as H,eO as U,f as y,r as R,a6 as W,bz as X,bK as q,F as J,eP as k,bX as D,bS as F,c4 as Q,at as Y,dT as Z}from"./index-84bac5b8.js";import{u as ee}from"./useFlexGapSupport-7bccf8d7.js";var te=globalThis&&globalThis.__rest||function(e,i){var l={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(l[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)i.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(l[t[n]]=e[t[n]]);return l};const ne={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},ae=I({compatConfig:{MODE:3},name:"TransButton",inheritAttrs:!1,props:{noStyle:{type:Boolean,default:void 0},onClick:Function,disabled:{type:Boolean,default:void 0},autofocus:{type:Boolean,default:void 0}},setup(e,i){let{slots:l,emit:t,attrs:n,expose:f}=i;const s=V(),O=a=>{const{keyCode:c}=a;c===K.ENTER&&a.preventDefault()},z=a=>{const{keyCode:c}=a;c===K.ENTER&&t("click",a)},h=a=>{t("click",a)},r=()=>{s.value&&s.value.focus()},p=()=>{s.value&&s.value.blur()};return G(()=>{e.autofocus&&r()}),f({focus:r,blur:p}),()=>{var a;const{noStyle:c,disabled:$}=e,w=te(e,["noStyle","disabled"]);let v={};return c||(v=d({},ne)),$&&(v.pointerEvents="none"),g("div",b(b(b({role:"button",tabindex:0,ref:s},w),n),{},{onClick:h,onKeydown:O,onKeyup:z,style:d(d({},v),n.style||{})}),[(a=l.default)===null||a===void 0?void 0:a.call(l)])}}}),ce=ae,oe={small:8,middle:16,large:24},le=()=>({prefixCls:String,size:{type:[String,Number,Array]},direction:D.oneOf(F("horizontal","vertical")).def("horizontal"),align:D.oneOf(F("start","end","center","baseline")),wrap:Q()});function ie(e){return typeof e=="string"?oe[e]:e||0}const S=I({compatConfig:{MODE:3},name:"ASpace",inheritAttrs:!1,props:le(),slots:Object,setup(e,i){let{slots:l,attrs:t}=i;const{prefixCls:n,space:f,direction:s}=H("space",e),[O,z]=U(n),h=ee(),r=y(()=>{var o,u,m;return(m=(o=e.size)!==null&&o!==void 0?o:(u=f?.value)===null||u===void 0?void 0:u.size)!==null&&m!==void 0?m:"small"}),p=R(),a=R();W(r,()=>{[p.value,a.value]=(Array.isArray(r.value)?r.value:[r.value,r.value]).map(o=>ie(o))},{immediate:!0});const c=y(()=>e.align===void 0&&e.direction==="horizontal"?"center":e.align),$=y(()=>X(n.value,z.value,`${n.value}-${e.direction}`,{[`${n.value}-rtl`]:s.value==="rtl",[`${n.value}-align-${c.value}`]:c.value})),w=y(()=>s.value==="rtl"?"marginLeft":"marginRight"),v=y(()=>{const o={};return h.value&&(o.columnGap=`${p.value}px`,o.rowGap=`${a.value}px`),d(d({},o),e.wrap&&{flexWrap:"wrap",marginBottom:`${-a.value}px`})});return()=>{var o,u;const{wrap:m,direction:M="horizontal"}=e,A=(o=l.default)===null||o===void 0?void 0:o.call(l),B=q(A),E=B.length;if(E===0)return null;const x=(u=l.split)===null||u===void 0?void 0:u.call(l),N=`${n.value}-item`,j=p.value,_=E-1;return g("div",b(b({},t),{},{class:[$.value,t.class],style:[v.value,t.style]}),[B.map((P,T)=>{const L=A.indexOf(P);let C={};return h.value||(M==="vertical"?T<_&&(C={marginBottom:`${j/(x?2:1)}px`}):C=d(d({},T<_&&{[w.value]:`${j/(x?2:1)}px`}),m&&{paddingBottom:`${a.value}px`})),O(g(J,{key:L},[g("div",{class:N,style:C},[P]),T<_&&x&&g("span",{class:`${N}-split`,style:C},[x])]))})])}}});S.Compact=k;S.install=function(e){return e.component(S.name,S),e.component(k.name,k),e};const ue=S;function de(e){let i;G(()=>{e(),Y(()=>{i=!0})}),Z(()=>{i&&e()})}export{ue as S,ce as T,de as o};