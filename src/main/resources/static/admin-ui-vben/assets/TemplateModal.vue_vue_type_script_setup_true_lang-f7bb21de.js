import{a as g,c as M,z as _,k as e,o as h,j as w,w as T,n as v,ag as y,x as B}from"./index-8b526734.js";import{u as k,_ as x}from"./useForm-f7dccb87.js";import"./BasicForm.vue_vue_type_style_index_0_lang-42e5fba8.js";import{a as C,B as F}from"./index-40f1f97e.js";import{f as R,g as S,u as b,c as L}from"./template.data-bc687248.js";const j=g({name:"SystemMailTemplateModal",__name:"TemplateModal",emits:["success","register"],setup(P,{emit:r}){const{t}=M(),{createMessage:n}=B(),s=_(!0),[c,{setFieldsValue:l,resetFields:m,validate:u}]=k({labelWidth:100,baseColProps:{span:24},schemas:R,showActionButtonGroup:!1,actionColOptions:{span:23}}),[p,{setModalProps:o,closeModal:d}]=C(async a=>{if(m(),o({confirmLoading:!1}),s.value=!!a?.isUpdate,e(s)){const i=await S(a.record.id);l({...i})}});async function f(){try{const a=await u();o({confirmLoading:!0}),e(s)?await b(a):await L(a),d(),r("success"),n.success(t("common.saveSuccessText"))}finally{o({confirmLoading:!1})}}return(a,i)=>(h(),w(e(F),y(a.$attrs,{onRegister:e(p),title:s.value?e(t)("action.edit"):e(t)("action.create"),onOk:f}),{default:T(()=>[v(e(x),{onRegister:e(c)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}});export{j as _};
