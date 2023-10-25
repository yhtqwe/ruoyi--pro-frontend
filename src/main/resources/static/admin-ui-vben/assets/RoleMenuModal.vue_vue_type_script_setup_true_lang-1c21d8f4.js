import{m as F}from"./role.data-c9b6882b.js";import{d as L,c as A,r as a,k as s,o as f,j as p,w as h,n as P,l as V,af as $,y as N}from"./index-2b36f9e3.js";import{u as O,_ as T}from"./useForm-2cb760a4.js";import"./BasicForm.vue_vue_type_style_index_0_lang-da06c4a7.js";import{a as U,B as j}from"./index-ab29420a.js";import{g as D}from"./index-0fd87b7f.js";import{_ as E}from"./index-d91ebdc0.js";import{l as G}from"./index-d8fd8baf.js";import{h as H}from"./tree-08cb0ff7.js";import{l as W,a as q}from"./index-45693e67.js";import{w as z}from"./without-9c0f4416.js";const le=L({name:"SystemRoleMenuModal",__name:"RoleMenuModal",emits:["success","register"],setup(J,{emit:y}){const g=y,{t:v}=A(),{createMessage:_}=N(),n=a([]),r=a([]),c=a([]),w=a(1),d=a(new Set),m=a(),[k,{setFieldsValue:M,resetFields:R,validate:I}]=O({labelWidth:120,baseColProps:{span:24},schemas:F,showActionButtonGroup:!1,actionColOptions:{span:23}}),[S,{setModalProps:u,closeModal:C}]=U(async e=>{if(await R(),B(),u({confirmLoading:!1}),s(n).length===0){const i=await G();n.value=H(i,"id"),d.value=new Set(i.map(x=>x.parentId))}const t=await D(e.record.id),o=await W(e.record.id),l=z(o,...Array.from(d.value));r.value=o,t.menuIds=l,await M({...t}),s(m)&&s(m).filterByLevel(w.value)});async function b(){try{const e=await I();u({confirmLoading:!0}),await q({roleId:e.id,menuIds:[...r.value,...c.value]}),C(),g("success"),_.success(v("common.saveSuccessText"))}finally{u({confirmLoading:!1})}}function B(){r.value=[],c.value=[]}function K(e,t){Array.isArray(e)&&(r.value=e,c.value=t.halfCheckedKeys||[])}return(e,t)=>(f(),p(s(j),$(e.$attrs,{title:"修改角色菜单权限",onRegister:s(S),onOk:b}),{default:h(()=>[P(s(T),{onRegister:s(k)},{menuIds:h(({model:o,field:l})=>[n.value.length?(f(),p(s(E),{key:0,ref_key:"treeRef",ref:m,checkedKeys:o[l],"onUpdate:checkedKeys":i=>o[l]=i,"tree-data":n.value,"field-names":{title:"name",key:"id"},toolbar:"",checkable:"",search:"","show-strictly-button":!1,selectable:!1,title:"菜单分配",onCheck:K},null,8,["checkedKeys","onUpdate:checkedKeys","tree-data"])):V("",!0)]),_:1},8,["onRegister"])]),_:1},16,["onRegister"]))}});export{le as _};