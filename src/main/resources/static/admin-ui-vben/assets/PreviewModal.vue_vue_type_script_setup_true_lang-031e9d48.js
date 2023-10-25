import{d as B,r as m,v as I,o as h,j as w,w as d,i as T,n as u,k as n,h as j,s as F,x as K,F as S,af as V,fi as E,y as N}from"./index-2b36f9e3.js";import{_ as L}from"./index-d91ebdc0.js";import{a as O,B as R}from"./index-ab29420a.js";import{M as q,C as A}from"./index-23d73b40.js";import{p as D}from"./index-91404596.js";import{f as J}from"./tree-08cb0ff7.js";import{C as y}from"./index-58c879c6.js";import{a as b}from"./index-e012061a.js";const U={class:"flex"},ae=B({name:"InfraPreviewModal",__name:"PreviewModal",setup(z){const{createMessage:v}=N(),_=m([]),p=m(""),x=m(q.JS),g=m(),[P,{setModalProps:C}]=O(async l=>{C({confirmLoading:!1});const t=await D(l.record.id),r=M(t);g.value=t,p.value=t[0].filePath,_.value=J(r,"id","parentId","children","/")});function k(l){p.value=l[0]}function M(l){const t={},r=[];for(const o of l){let a=o.filePath.split("/"),c="";if(a[a.length-1].includes(".java")){const s=[];for(let i=0;i<a.length;i++){let e=a[i];if(e!=="java"){s.push(e);continue}s.push(e);let f="";for(;i<a.length&&(e=a[i+1],!(e==="controller"||e==="convert"||e==="dal"||e==="enums"||e==="service"||e==="vo"||e==="mysql"||e==="dataobject"));)f=f?`${f}.${e}`:e,i++;f&&s.push(f)}a=s}for(let s=0;s<a.length;s++){const i=c;c=c.length===0?a[s]:`${c.replaceAll(".","/")}/${a[s]}`,!t[c]&&(t[c]=!0,r.push({id:c,label:a[s],parentId:i||"/"}))}}return r}async function $(l){const{copy:t,copied:r,isSupported:o}=E({source:l});o?(await t(),n(r)&&v.success("复制成功")):v.error("复制失败")}return(l,t)=>{const r=I("a-button");return h(),w(n(R),V(l.$attrs,{"default-fullscreen":!0,title:"预览代码",onRegister:n(P)}),{default:d(()=>[T("div",U,[u(n(y),{class:"min-w-130 w-1/4"},{default:d(()=>[u(n(L),{title:"文件夹列表",toolbar:"","default-expand-all":!0,"tree-wrapper-class-name":"h-[800px] overflow-auto","click-row-to-expand":!1,"tree-data":_.value,"field-names":{key:"id",title:"label"},onSelect:k},null,8,["tree-data"])]),_:1}),u(n(y),{class:"w-3/4"},{default:d(()=>[u(n(b),{activeKey:p.value,"onUpdate:activeKey":t[0]||(t[0]=o=>p.value=o)},{default:d(()=>[(h(!0),j(S,null,F(g.value,o=>(h(),w(n(b).TabPane,{key:o.filePath,tab:o.filePath.substring(o.filePath.lastIndexOf("/")+1)},{default:d(()=>[u(r,{type:"link",style:{float:"right",padding:"4px 60px"},onClick:a=>$(o.code)},{default:d(()=>[K(" 复制 ")]),_:2},1032,["onClick"]),u(n(A),{class:"max-h-200",value:o.code,mode:x.value,readonly:!0},null,8,["value","mode"])]),_:2},1032,["tab"]))),128))]),_:1},8,["activeKey"])]),_:1})])]),_:1},16,["onRegister"])}}});export{ae as _};
