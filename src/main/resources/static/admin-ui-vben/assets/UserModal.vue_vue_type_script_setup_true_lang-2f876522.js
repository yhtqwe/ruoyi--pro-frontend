import{f as _}from"./user.data-a162cdb5.js";import{d as M,c as h,r as w,k as e,o as U,j as y,w as v,n as B,af as b,y as k}from"./index-2b36f9e3.js";import{u as C,_ as F}from"./useForm-2cb760a4.js";import"./BasicForm.vue_vue_type_style_index_0_lang-da06c4a7.js";import{a as R,B as S}from"./index-ab29420a.js";import{a as x,b as L,c as P}from"./index-0efdcaab.js";const N=M({name:"SystemUserModal",__name:"UserModal",emits:["success","register"],setup(I,{emit:i}){const n=i,{t}=h(),{createMessage:c}=k(),a=w(!0),[l,{setFieldsValue:m,resetFields:u,validate:d}]=C({labelWidth:120,baseColProps:{span:24},schemas:_,showActionButtonGroup:!1,actionColOptions:{span:23}}),[f,{setModalProps:o,closeModal:p}]=R(async s=>{if(u(),o({confirmLoading:!1}),a.value=!!s?.isUpdate,e(a)){const r=await x(s.record.id);m({...r})}});async function g(){try{const s=await d();o({confirmLoading:!0}),e(a)?await L(s):await P(s),p(),n("success"),c.success(t("common.saveSuccessText"))}finally{o({confirmLoading:!1})}}return(s,r)=>(U(),y(e(S),b(s.$attrs,{title:a.value?e(t)("action.edit"):e(t)("action.create"),onRegister:e(f),onOk:g}),{default:v(()=>[B(e(F),{onRegister:e(l)},null,8,["onRegister"])]),_:1},16,["title","onRegister"]))}});export{N as _};