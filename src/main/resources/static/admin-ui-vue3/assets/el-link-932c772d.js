import{ag as v,aS as g,d as o,ah as $,b as w,o as l,c as r,q as d,w as E,ay as S,a as t,aT as B,a1 as i,V as c,al as u,aj as j,an as q,__tla as x}from"./index-0f589822.js";let f,C=Promise.all([(()=>{try{return x}catch{}})()]).then(async()=>{const p=v({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},icon:{type:g}}),y={click:n=>n instanceof MouseEvent},m=["href"],k=o({name:"ElLink"});f=q(j(o({...k,props:p,emits:y,setup(n,{emit:b}){const e=n,s=$("link"),h=w(()=>[s.b(),s.m(e.type),s.is("disabled",e.disabled),s.is("underline",e.underline&&!e.disabled)]);function _(a){e.disabled||b("click",a)}return(a,L)=>(l(),r("a",{class:c(t(h)),href:a.disabled||!a.href?void 0:a.href,onClick:_},[a.icon?(l(),d(t(B),{key:0},{default:E(()=>[(l(),d(S(a.icon)))]),_:1})):i("v-if",!0),a.$slots.default?(l(),r("span",{key:1,class:c(t(s).e("inner"))},[u(a.$slots,"default")],2)):i("v-if",!0),a.$slots.icon?u(a.$slots,"icon",{key:2}):i("v-if",!0)],10,m))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/link/src/link.vue"]]))});export{f as E,C as __tla};
