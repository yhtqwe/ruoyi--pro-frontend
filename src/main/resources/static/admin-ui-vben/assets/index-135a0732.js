import{d as c,N as l,r as e,C as m,G as u,D as d,o as f,h,i as p,az as _,bs as g}from"./index-84bac5b8.js";const v=["src"],y=c({__name:"IFrame",props:{src:l.string.def("")},setup(o){const a=o,t=e(!0),s=e(""),n=e(null);function r(){s.value=`${document.documentElement.clientHeight-94.5}px`,t.value=!1}return m(()=>{setTimeout(()=>{r()},300)}),(I,k)=>{const i=u("loading");return d((f(),h("div",{style:_(`height:${s.value}`)},[p("iframe",{ref_key:"frameRef",ref:n,src:a.src,style:{width:"100%",height:"100%"},frameborder:"no",scrolling:"auto"},null,8,v)],4)),[[i,t.value]])}}}),x=g(y);export{x as I};
