import{a as c,b as l,o,h as n,F as u,r as d,q as m,k as t,aD as _,n as k,dx as f}from"./index-8b526734.js";import{b as C}from"./index-799c620b.js";import"./index-679cbab9.js";import"./createAsyncComponent-934690aa.js";import"./FullscreenOutlined-8b988545.js";import"./index-0864e607.js";import"./useWindowSizeFn-38cd0f6d.js";import"./useContentViewHeight-0508c576.js";import"./uniqBy-f83999c6.js";import"./_baseIteratee-625e56a9.js";import"./get-11175361.js";/* empty css              */import"./RedoOutlined-fa24e892.js";import"./index-e8507731.js";import"./useRefs-872c0ad6.js";import"./lock-53a0bead.js";import"./ArrowLeftOutlined-83b12cfe.js";import"./index-c8168e27.js";const h=["onClick"],V=c({name:"ThemeColorPicker",__name:"ThemeColorPicker",props:{colorList:{type:Array,default:()=>[]},event:{type:Number},def:{type:String}},setup(r){const s=r,{prefixCls:i}=l("setting-theme-picker");function p(a){s.event&&C(s.event,a)}return(a,y)=>(o(),n("div",{class:m(t(i))},[(o(!0),n(u,null,d(r.colorList||[],e=>(o(),n("span",{key:e,onClick:v=>p(e),class:m([`${t(i)}__item`,{[`${t(i)}__item--active`]:r.def===e}]),style:_({background:e})},[k(t(f))],14,h))),128))],2))}});export{V as default};
