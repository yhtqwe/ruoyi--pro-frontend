import{f as _}from"./index-aab9a46b.js";import{d as I,c as M,r as b,k as e,o as x,j as T,w as v,n as P,af as R,y as S}from"./index-84bac5b8.js";import"./index-1beb4355.js";import"./BasicForm.vue_vue_type_style_index_0_lang-f40c69bb.js";import{a as y,B}from"./index-173d5d49.js";import"./sortable.esm-f208c0d8.js";import{u as F}from"./useRender-70a86cea.js";import{u as k,_ as C}from"./useForm-9e126d4c.js";import{g as A,u as L,c as O}from"./index-3e37ab29.js";const E=[{title:"编号",dataIndex:"id",width:100},{title:"标签名称",dataIndex:"name",width:180},{title:"粉丝数",dataIndex:"count",width:100},{title:"创建时间",dataIndex:"createTime",width:180,customRender:({text:n})=>F.renderDate(n)}],r=await _(),H=[{label:"公众号",field:"accountId",component:"Select",required:!0,defaultValue:r[0].id,componentProps:{options:r,fieldNames:{label:"name",value:"id"}},colProps:{span:8}},{label:"标签名称",field:"name",component:"Input",colProps:{span:8}}],V=[{label:"编号",field:"id",show:!1,component:"Input"},{label:"标签名称",field:"name",required:!0,component:"Input"}],J=I({name:"MpTagModal",__name:"TagModal",emits:["success","register"],setup(n,{emit:c}){const l=c,{t:s}=M(),{createMessage:d}=S(),a=b(!0),[m,{setFieldsValue:u,resetFields:p,validate:f}]=k({labelWidth:120,baseColProps:{span:24},schemas:V,showActionButtonGroup:!1,actionColOptions:{span:23}}),[g,{setModalProps:o,closeModal:h}]=y(async t=>{if(p(),o({confirmLoading:!1}),a.value=!!t?.isUpdate,e(a)){const i=await A(t.record.id);u({...i})}});async function w(){try{const t=await f();o({confirmLoading:!0}),e(a)?await L(t):await O(t),h(),l("success"),d.success(s("common.saveSuccessText"))}finally{o({confirmLoading:!1})}}return(t,i)=>(x(),T(e(B),R(t.$attrs,{title:a.value?e(s)("action.edit"):e(s)("action.create"),onRegister:e(g),onOk:w}),{default:v(()=>[P(e(C),{onRegister:e(m)},null,8,["onRegister"])]),_:1},16,["title","onRegister"]))}});export{J as _,E as c,H as s};
