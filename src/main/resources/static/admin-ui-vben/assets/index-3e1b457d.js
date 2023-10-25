import{r as d,b8 as _,k as c,d as v,f as m,ar as C,o as g,j as w,w as f,af as y,R as h,c as x,ao as z,x as B,t as A,B as F,cg as $,bZ as k,at as N,X as T,aw as R,b as j,v as D,a$ as O,s as P,au as E,aH as V,aI as q,n as H,bs as S}from"./index-84bac5b8.js";function L(t){const e=d(t),a=d(!1);let s;function r(){s&&window.clearInterval(s)}function l(){a.value=!1,r(),s=null}function o(){c(a)||s||(a.value=!0,s=setInterval(()=>{c(e)===1?(l(),e.value=t):e.value-=1},1e3))}function n(){e.value=t,l()}function i(){n(),o()}return _(()=>{n()}),{start:o,reset:n,restart:i,clear:r,stop:l,currentCount:e,isStart:a}}const b=v({name:"CountButton",__name:"CountButton",props:{value:{type:[Object,Number,String,Array]},count:{type:Number,default:60},beforeStartFunc:{type:Function,default:null}},setup(t){const e=t,a=d(!1),{currentCount:s,isStart:r,start:l,reset:o}=L(e.count),{t:n}=x(),i=m(()=>c(r)?n("component.countdown.sendText",[c(s)]):n("component.countdown.normalText"));C(()=>{e.value===void 0&&o()});async function p(){const{beforeStartFunc:u}=e;if(u&&z(u)){a.value=!0;try{await u()&&l()}finally{a.value=!1}}else l()}return(u,I)=>(g(),w(c(h),y(u.$attrs,{disabled:c(r),loading:a.value,onClick:p}),{default:f(()=>[B(A(i.value),1)]),_:1},16,["disabled","loading"]))}});function U(t,e="value",a="change",s){const l=R()?.emit,o=F({value:t[e]}),n=$(o),i=u=>{o.value=u};return C(()=>{o.value=t[e]}),[m({get(){return o.value},set(u){k(u,n.value)||(o.value=u,N(()=>{l?.(a,u,...T(c(s))||[])}))}}),i,n]}const X=v({name:"CountDownInput",inheritAttrs:!1,__name:"CountdownInput",props:{value:{type:String},size:{type:String,validator:t=>["default","large","small"].includes(t)},count:{type:Number,default:60},sendCodeApi:{type:Function,default:null}},setup(t){const e=t,{prefixCls:a}=j("countdown-input"),[s]=U(e);return(r,l)=>{const o=D("a-input");return g(),w(o,y(r.$attrs,{class:c(a),size:t.size,value:c(s)}),O({addonAfter:f(()=>[H(b,{size:t.size,count:t.count,value:c(s),"before-start-func":t.sendCodeApi},null,8,["size","count","value","before-start-func"])]),_:2},[P(Object.keys(r.$slots).filter(n=>n!=="addonAfter"),n=>({name:n,fn:f(i=>[E(r.$slots,n,V(q(i||{})))])}))]),1040,["class","size","value"])}}});const G=S(X);S(b);export{G as C,U as u};
