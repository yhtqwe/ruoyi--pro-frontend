import{P as w}from"./index-f93c02cf.js";import{L as c,d as x,c as y,r as k,C as _,v,o as C,j as M,w as n,i as T,n as a,x as p,t as l,k as e,fS as m}from"./index-2b36f9e3.js";import{I as $}from"./index-221fd4a7.js";import"./onMountedOrActivated-957e2f10.js";import"./useFlexGapSupport-de861fb2.js";import"./useWindowSizeFn-99db3b88.js";import"./useContentViewHeight-919c9809.js";import"./ArrowLeftOutlined-99ce5bb5.js";import"./index-2f252cfc.js";import"./DownOutlined-be102a13.js";import"./index-c74a997a.js";import"./useBreakpoint-99376be7.js";import"./responsiveObserve-8393ce72.js";import"./eagerComputed-3545aecd.js";import"./operationUnit-d5166b83.js";function f(){return c.get({url:"/infra/db-doc/export-html",responseType:"blob"})}function g(){return c.get({url:"/infra/db-doc/export-word",responseType:"blob"})}function B(){return c.get({url:"/infra/db-doc/export-markdown",responseType:"blob"})}const H={class:"mb-3"},q=x({__name:"index",setup(L){const{t:s}=y(),d=k("");async function b(){const o=await f(),t=new Blob([o],{type:"text/html"}),r=window.URL.createObjectURL(t);d.value=r}async function i(o){if(o==="HTML"){const t=await f();m(t,"数据库文档.html")}if(o==="Word"){const t=await g();m(t,"数据库文档.doc")}if(o==="Markdown"){const t=await B();m(t,"数据库文档.md")}}return _(async()=>{await b()}),(o,t)=>{const r=v("a-button");return C(),M(e(w),null,{default:n(()=>[T("div",H,[a(r,{type:"primary",size:"small",class:"mr-1",onClick:t[0]||(t[0]=u=>i("HTML"))},{default:n(()=>[p(l(`${e(s)("action.export")}Html`),1)]),_:1}),a(r,{type:"primary",size:"small",class:"mr-1",onClick:t[1]||(t[1]=u=>i("Word"))},{default:n(()=>[p(l(`${e(s)("action.export")}Word`),1)]),_:1}),a(r,{type:"primary",size:"small",onClick:t[2]||(t[2]=u=>i("Markdown"))},{default:n(()=>[p(l(`${e(s)("action.export")}Markdown`),1)]),_:1})]),a(e($),{src:d.value},null,8,["src"])]),_:1})}}});export{q as default};