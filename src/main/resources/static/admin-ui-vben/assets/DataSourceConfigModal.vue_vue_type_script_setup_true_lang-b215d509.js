import{d as h,c as I,r as _,k as e,o as b,j as x,w as C,n as M,af as S,y as R}from"./index-2b36f9e3.js";import"./index-238a0b12.js";import"./BasicForm.vue_vue_type_style_index_0_lang-da06c4a7.js";import{a as v,B as y}from"./index-ab29420a.js";import"./sortable.esm-f208c0d8.js";import{u as B}from"./useRender-e7048bde.js";import{u as D,_ as k}from"./useForm-2cb760a4.js";import{a as q,u as F,c as L}from"./index-1c10723d.js";const N=[{title:"主键编号",dataIndex:"id",width:100},{title:"数据源名称",dataIndex:"name",width:180},{title:"数据源连接",dataIndex:"url",width:100},{title:"用户名",dataIndex:"username",width:120},{title:"创建时间",dataIndex:"createTime",width:180,customRender:({text:n})=>B.renderDate(n)}],P=[{label:"编号",field:"id",show:!1,component:"Input"},{label:"数据源名称",field:"name",required:!0,component:"Input"},{label:"数据源连接",field:"url",required:!0,component:"Input"},{label:"用户名",field:"username",required:!0,component:"Input"},{label:"密码",field:"password",required:!0,component:"Input"}],W=h({__name:"DataSourceConfigModal",emits:["success","register"],setup(n,{emit:i}){const c=i,{t:s}=I(),{createMessage:l}=R(),a=_(!0),[d,{setFieldsValue:u,resetFields:m,validate:p}]=D({labelWidth:120,baseColProps:{span:24},schemas:P,showActionButtonGroup:!1,actionColOptions:{span:23}}),[f,{setModalProps:o,closeModal:g}]=v(async t=>{if(m(),o({confirmLoading:!1}),a.value=!!t?.isUpdate,e(a)){const r=await q(t.record.id);u({...r})}});async function w(){try{const t=await p();o({confirmLoading:!0}),e(a)?await F(t):await L(t),g(),c("success"),l.success(s("common.saveSuccessText"))}finally{o({confirmLoading:!1})}}return(t,r)=>(b(),x(e(y),S(t.$attrs,{title:a.value?e(s)("action.edit"):e(s)("action.create"),onRegister:e(f),onOk:w}),{default:C(()=>[M(e(k),{onRegister:e(d)},null,8,["onRegister"])]),_:1},16,["title","onRegister"]))}});export{W as _,N as c};
