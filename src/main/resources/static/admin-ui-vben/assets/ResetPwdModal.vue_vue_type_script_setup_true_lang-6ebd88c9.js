import{u as p}from"./user.data-a162cdb5.js";import{d as g,c as _,r as w,o as M,j as P,w as h,n as R,k as e,af as v,y}from"./index-2b36f9e3.js";import{u as B,_ as k}from"./useForm-2cb760a4.js";import"./BasicForm.vue_vue_type_style_index_0_lang-da06c4a7.js";import{a as C,B as F}from"./index-ab29420a.js";import{r as S}from"./index-0efdcaab.js";const G=g({name:"SystemResetPwdModal",__name:"ResetPwdModal",emits:["success","register"],setup(b,{emit:t}){const r=t,{t:n}=_(),{createMessage:i}=y(),o=w(0),[c,{resetFields:m,validate:l}]=B({labelWidth:120,baseColProps:{span:24},schemas:p,showActionButtonGroup:!1,actionColOptions:{span:23}}),[d,{setModalProps:a,closeModal:u}]=C(s=>{m(),o.value=s.record.id,a({confirmLoading:!1})});async function f(){try{const s=await l();await S(o.value,s.newPassword),a({confirmLoading:!0}),u(),r("success"),i.success(n("common.saveSuccessText"))}finally{a({confirmLoading:!1})}}return(s,x)=>(M(),P(e(F),v(s.$attrs,{title:"重置密码",onRegister:e(d),onOk:f}),{default:h(()=>[R(e(k),{onRegister:e(c)},null,8,["onRegister"])]),_:1},16,["onRegister"]))}});export{G as _};
