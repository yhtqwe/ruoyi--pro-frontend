import{cm as d,a as I,c as K,z as f,k as n,o as M,j as w,w as b,n as A,ag as F,x as L}from"./index-8b526734.js";import{u as S,_ as V}from"./useForm-f7dccb87.js";import"./BasicForm.vue_vue_type_style_index_0_lang-42e5fba8.js";import{a as B,B as k}from"./index-40f1f97e.js";import{a as x,w as O}from"./app.data-c93b5012.js";import{b as m}from"./systemEnum-4af82c45.js";function R(o,c,s){const p={merchantId:o,appId:c,code:s};return d.get({url:"/pay/channel/get-channel",params:p})}function T(o){return d.post({url:"/pay/channel/create",data:o})}function U(o){return d.put({url:"/pay/channel/update",data:o})}const G=I({name:"ChannelModal",__name:"ChannelModal",emits:["success","register"],setup(o,{emit:c}){const{t:s}=K(),{createMessage:p}=L(),i=f(!0),l=f(m.ALIPAY),[y,{setFieldsValue:C,resetFields:g,validate:h}]=S({labelWidth:120,baseColProps:{span:24},schemas:l.value===m.ALIPAY?x:O,showActionButtonGroup:!1,actionColOptions:{span:23}}),[v,{setModalProps:u,closeModal:P}]=B(async t=>{if(g(),u({confirmLoading:!1}),i.value=!!t?.isUpdate,l.value=t.type,n(i)){let r=await R(t.record.payMerchant.id,t.record.id,t.payCode);const a=JSON.parse(r.config),e={};l.value===m.ALIPAY?(e.appId=a.appId,e.serverUrl=a.serverUrl,e.signType=a.signType,e.mode=a.mode,e.privateKey=a.privateKey,e.alipayPublicKey=a.alipayPublicKey,e.appCertContent=a.appCertContent,e.alipayPublicCertContent=a.alipayPublicCertContent,e.rootCertContent=a.rootCertContent):(e.appId=a.appId,e.apiVersion=a.apiVersion,e.mchId=a.mchId,e.mchKey=a.mchKey,e.privateKeyContent=a.privateKeyContent,e.privateCertContent=a.privateCertContent,e.apiV3Key=a.apiV3Key),r.payConfig=e,delete r.config,C({...r})}});async function _(){try{const t=await h();u({confirmLoading:!0}),t.config=JSON.stringify(t.payConfig),n(i)?await U(t):await T(t),P(),c("success"),p.success(s("common.saveSuccessText"))}finally{u({confirmLoading:!1})}}return(t,r)=>(M(),w(n(k),F(t.$attrs,{onRegister:n(v),title:i.value?n(s)("action.edit"):n(s)("action.create"),onOk:_}),{default:b(()=>[A(n(V),{onRegister:n(y)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}});export{G as _};
