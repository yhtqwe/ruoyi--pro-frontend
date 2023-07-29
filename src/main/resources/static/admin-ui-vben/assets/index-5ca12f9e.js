import{cC as D,bF as j,n as v,aa as R,a2 as H,a as L,a5 as $,z,B as N,R as M,Q as w,C as U,dF as X,dY as q,bC as W,_ as h,X as A,d4 as Q,D as Y,E as G,b7 as J,dz as Z,aL as k,aX as K,fB as tt,b as et,f as x,k as c,b2 as V,o as S,h as rt,j as E,l as P,q as nt,F as ot}from"./index-8b526734.js";import{u as at}from"./index-679cbab9.js";import{c as F}from"./createAsyncComponent-934690aa.js";import it from"./SessionTimeoutLogin-b6755c5f.js";import{s as lt,g as st}from"./scrollTo-67205127.js";import"./FullscreenOutlined-8b988545.js";import"./index-0864e607.js";import"./useWindowSizeFn-38cd0f6d.js";import"./useContentViewHeight-0508c576.js";import"./uniqBy-f83999c6.js";import"./_baseIteratee-625e56a9.js";import"./get-11175361.js";/* empty css              */import"./RedoOutlined-fa24e892.js";import"./index-e8507731.js";import"./useRefs-872c0ad6.js";import"./lock-53a0bead.js";import"./Login.vue_vue_type_style_index_0_lang-e86b1b11.js";import"./login-box-bg-5a4c2bcf.js";import"./LoginForm.vue_vue_type_script_setup_true_lang-76b34745.js";import"./index-d2d20fb4.js";import"./index-03ea37ad.js";import"./index-3e87b811.js";import"./useSize-5af631ed.js";import"./index-c8168e27.js";import"./LoginFormTitle.vue_vue_type_script_setup_true_lang-671f13b1.js";import"./useLogin-ae32d63a.js";import"./index-9bbd8b07.js";import"./login-80d7827e.js";import"./index-9e517d44.js";import"./index-42686290.js";import"./GithubFilled-4468bf92.js";import"./ForgetPasswordForm.vue_vue_type_script_setup_true_lang-761d20e6.js";import"./index-47ca6c32.js";import"./RegisterForm.vue_vue_type_script_setup_true_lang-6b94e2c7.js";import"./index-c8286d7f.js";import"./MobileForm.vue_vue_type_script_setup_true_lang-69401f70.js";import"./QrCodeForm.vue_vue_type_script_setup_true_lang-04174fa0.js";function ct(r){var t,e=function(u){return function(){t=null,r.apply(void 0,j(u))}},n=function(){if(t==null){for(var u=arguments.length,m=new Array(u),a=0;a<u;a++)m[a]=arguments[a];t=D(e(m))}};return n.cancel=function(){return D.cancel(t)},n}var ut={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"}}]},name:"vertical-align-top",theme:"outlined"};const pt=ut;function I(r){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?Object(arguments[t]):{},n=Object.keys(e);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(e).filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.forEach(function(o){mt(r,o,e[o])})}return r}function mt(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}var B=function(t,e){var n=I({},t,e.attrs);return v(R,I({},n,{icon:pt}),null)};B.displayName="VerticalAlignTopOutlined";B.inheritAttrs=!1;const ft=B;var vt=function(){return{visibilityHeight:{type:Number,default:400},duration:{type:Number,default:450},target:Function,prefixCls:String,onClick:Function}},dt=L({compatConfig:{MODE:3},name:"ABackTop",inheritAttrs:!1,props:vt(),setup:function(t,e){var n=e.slots,o=e.attrs,u=e.emit,m=$("back-top",t),a=m.prefixCls,y=m.direction,d=z(),f=N({visible:!1,scrollEvent:null}),_=function(){return d.value&&d.value.ownerDocument?d.value.ownerDocument:window},O=function(s){var p=t.target,g=p===void 0?_:p,b=t.duration;lt(0,{getContainer:g,duration:b}),u("click",s)},l=ct(function(i){var s=t.visibilityHeight,p=st(i.target,!0);f.visible=p>s}),T=function(){var s=t.target,p=s||_,g=p();f.scrollEvent=Z(g,"scroll",function(b){l(b)}),l({target:g})},C=function(){f.scrollEvent&&f.scrollEvent.remove(),l.cancel()};return M(function(){return t.target},function(){C(),w(function(){T()})}),U(function(){w(function(){T()})}),X(function(){w(function(){T()})}),q(function(){C()}),W(function(){C()}),function(){var i,s,p=v("div",{class:"".concat(a.value,"-content")},[v("div",{class:"".concat(a.value,"-icon")},[v(ft,null,null)])]),g=h(h({},o),{},{onClick:O,class:(i={},A(i,"".concat(a.value),!0),A(i,"".concat(o.class),o.class),A(i,"".concat(a.value,"-rtl"),y.value==="rtl"),i)}),b=Q("fade");return v(J,b,{default:function(){return[Y(v("div",h(h({},g),{},{ref:d}),[((s=n.default)===null||s===void 0?void 0:s.call(n))||p]),[[G,f.visible]])]}})}}});const gt=H(dt);const re=L({name:"LayoutFeatures",__name:"index",setup(r){const t=F(()=>k(()=>import("./index-f1f83ff5.js"),["assets/index-f1f83ff5.js","assets/index-8b526734.js","assets/index-9904832d.css","assets/LockPage-837c8c17.js","assets/lock-53a0bead.js","assets/header-b0e9d88a.js","assets/LockPage-fc535730.css"])),e=F(()=>k(()=>import("./index-799c620b.js").then(l=>l.i),["assets/index-799c620b.js","assets/index-8b526734.js","assets/index-9904832d.css","assets/index-679cbab9.js","assets/createAsyncComponent-934690aa.js","assets/FullscreenOutlined-8b988545.js","assets/index-0864e607.js","assets/useWindowSizeFn-38cd0f6d.js","assets/useContentViewHeight-0508c576.js","assets/index-29b689e6.css","assets/uniqBy-f83999c6.js","assets/_baseIteratee-625e56a9.js","assets/get-11175361.js","assets/RedoOutlined-fa24e892.js","assets/index-e8507731.js","assets/useRefs-872c0ad6.js","assets/lock-53a0bead.js","assets/index-1a9fd949.css","assets/index-74306b25.css","assets/ArrowLeftOutlined-83b12cfe.js","assets/index-c8168e27.js","assets/index-1853a539.css","assets/index-a83d819c.css"])),{getUseOpenBackTop:n,getShowSettingButton:o,getSettingButtonPosition:u,getFullContent:m}=K(),a=tt(),{prefixCls:y}=et("setting-drawer-feature"),{getShowHeader:d}=at(),f=()=>document.body,_=x(()=>a.getSessionTimeout),O=x(()=>{if(!c(o))return!1;const l=c(u);return l===V.AUTO?!c(d)||c(m):l===V.FIXED});return(l,T)=>(S(),rt(ot,null,[v(c(t)),c(n)?(S(),E(c(gt),{key:0,target:f})):P("",!0),O.value?(S(),E(c(e),{key:1,class:nt(c(y))},null,8,["class"])):P("",!0),_.value?(S(),E(it,{key:2})):P("",!0)],64))}});export{re as default};
