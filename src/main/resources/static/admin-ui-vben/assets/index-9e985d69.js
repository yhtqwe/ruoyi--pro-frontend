import{I as s}from"./index-221fd4a7.js";import{b as c}from"./index-2ecef014.js";import{d as l,r as t,C as i,o,h as m,j as u,k as f,l as p}from"./index-2b36f9e3.js";const h=l({name:"InfraAdminServer",__name:"index",setup(d){const a=t("http://127.0.0.1:48080/admin/applications"),n=t(!0);async function r(){const e=await c("url.spring-boot-admin");e&&e.length!==0&&(a.value=e),n.value=!1}return i(()=>{r()}),(e,_)=>(o(),m("div",null,[n.value?p("",!0):(o(),u(f(s),{key:0,src:a.value},null,8,["src"]))]))}});export{h as default};