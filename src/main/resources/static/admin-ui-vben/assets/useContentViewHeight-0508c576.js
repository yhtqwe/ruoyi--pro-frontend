import{au as c,z as i,f as g,k as o}from"./index-8b526734.js";import{u as h}from"./useWindowSizeFn-38cd0f6d.js";const H=Symbol();function f(e){return c(e,H,{native:!0})}const a=i(0),r=i(0);function m(){function e(t){a.value=t}function n(t){r.value=t}return{headerHeightRef:a,footerHeightRef:r,setHeaderHeight:e,setFooterHeight:n}}function l(){const e=i(window.innerHeight),n=i(window.innerHeight),t=g(()=>o(e)-o(a)-o(r)||0);h(()=>{e.value=window.innerHeight},100,{immediate:!0});async function u(s){n.value=s}f({contentHeight:t,setPageHeight:u,pageHeight:n})}export{m as a,l as u};