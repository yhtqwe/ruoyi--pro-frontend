import{u as _,g as M,a as v}from"./index-0076101a.js";import{d as h,c as L,r as w,k as s,o as U,j as y,w as B,n as F,af as b,y as k}from"./index-2b36f9e3.js";import{u as C,_ as R}from"./useForm-2cb760a4.js";import"./BasicForm.vue_vue_type_style_index_0_lang-da06c4a7.js";import{a as x,B as P}from"./index-ab29420a.js";const A=h({name:"MemberUpdateLevelModal",__name:"UpdateLevelModal",emits:["success","register"],setup(S,{emit:r}){const n=r,{t:i}=L(),{createMessage:c}=k(),a=w(!0),[l,{setFieldsValue:m,resetFields:u,validate:d}]=C({labelWidth:120,baseColProps:{span:24},schemas:_,showActionButtonGroup:!1,actionColOptions:{span:23}}),[p,{setModalProps:t,closeModal:f}]=x(async e=>{if(u(),t({confirmLoading:!1}),a.value=!!e?.isUpdate,s(a)){const o=await M(e.record.id);m({...o})}});async function g(){try{const e=await d();t({confirmLoading:!0}),s(a)&&await v(e),f(),n("success"),c.success(i("common.saveSuccessText"))}finally{t({confirmLoading:!1})}}return(e,o)=>(U(),y(s(P),b(e.$attrs,{title:"修改用户等级",onRegister:s(p),onOk:g}),{default:B(()=>[F(s(R),{onRegister:s(l)},null,8,["onRegister"])]),_:1},16,["onRegister"]))}});export{A as _};
