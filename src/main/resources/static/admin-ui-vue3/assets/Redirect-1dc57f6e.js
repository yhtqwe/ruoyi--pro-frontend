import{u as e}from"./vue-router-0864a153.js";import{d as r,f as t,o as a,i as s}from"./runtime-core.esm-bundler-ccc21fcd.js";const o=r({name:"Redirect"}),p=r({...o,setup(r){const{currentRoute:o,replace:p}=e(),{params:u,query:n}=t(o),{path:c,_redirect_type:i="path"}=u;Reflect.deleteProperty(u,"_redirect_type"),Reflect.deleteProperty(u,"path");const m=Array.isArray(c)?c.join("/"):c;return p("name"===i?{name:m,query:n,params:u}:{path:m.startsWith("/")?m:"/"+m,query:n}),(e,r)=>(a(),s("div"))}});export{p as default};