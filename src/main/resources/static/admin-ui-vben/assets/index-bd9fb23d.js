import{I as s}from"./index-135a0732.js";import{b as c}from"./index-269e0d6f.js";import{d as l,r as o,C as i,o as t,h as m,j as u,k as f,l as p}from"./index-84bac5b8.js";const k=l({name:"InfraAdminServer",__name:"index",setup(d){const a=o("http://localhost:48080/admin/applications"),n=o(!0);async function r(){const e=await c("url.spring-boot-admin");e&&e.length!==0&&(a.value=e),n.value=!1}return i(()=>{r()}),(e,_)=>(t(),m("div",null,[n.value?p("",!0):(t(),u(f(s),{key:0,src:a.value},null,8,["src"]))]))}});export{k as default};