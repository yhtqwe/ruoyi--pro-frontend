import{a as c,B as m}from"./index-40f1f97e.js";import{D as u}from"./index-0f4dcf74.js";import{bb as d,a as f,z as b,o as S,j as I,w as T,n as M,k as n,ag as g}from"./index-8b526734.js";import"./index-ec19b8e7.js";import"./BasicForm.vue_vue_type_style_index_0_lang-42e5fba8.js";import"./index-d2d20fb4.js";import"./tree-e6981725.js";import"./index-03ea37ad.js";import"./index-3e87b811.js";import"./index-c8168e27.js";import"./sortable.esm-f208c0d8.js";import{u as t}from"./useRender-f65ba3eb.js";import{D as a,g as p}from"./dict-5cefafd8.js";import{b as _}from"./account-c60d2e9a.js";import{u as h}from"./useDescription-c4a08efa.js";const O=[{title:"编号",dataIndex:"id",width:100},{title:"接收邮箱",dataIndex:"toMail",width:200},{title:"邮件标题",dataIndex:"templateTitle",width:180},{title:"发送状态",dataIndex:"sendStatus",width:180,customRender:({text:e})=>t.renderDict(e,a.SYSTEM_MAIL_SEND_STATUS)},{title:"邮箱账号",dataIndex:"fromMail",width:180},{title:"模板编号",dataIndex:"templateId",width:100},{title:"发送时间",dataIndex:"sendTime",width:180,customRender:({text:e})=>t.renderDate(e)}],W=[{label:"接收邮箱",field:"toMail",component:"Input",colProps:{span:8}},{label:"邮箱账号",field:"accountId",component:"ApiSelect",componentProps:{api:()=>_(),labelField:"mail",valueField:"id"},colProps:{span:8}},{label:"模板编号",field:"templateId",component:"Input",colProps:{span:8}},{label:"发送状态",field:"sendStatus",component:"Select",componentProps:{options:p(a.SYSTEM_MAIL_SEND_STATUS)},colProps:{span:8}},{label:"用户编号",field:"userId",component:"Input",colProps:{span:8}},{label:"用户类型",field:"userType",component:"Select",componentProps:{options:p(a.USER_TYPE)},colProps:{span:8}},{label:"发送时间",field:"sendTime",component:"RangePicker",colProps:{span:8}}],D=[{field:"sendStatus",label:"发送状态",labelMinWidth:80,render(e){return t.renderDict(e,a.SYSTEM_MAIL_SEND_STATUS)}},{field:"sendException",label:"异常信息",labelMinWidth:80,show:e=>e&&e.sendException&&e.sendException.length>0,render(e){return d("span",{style:{fontWeight:"bold"}},e)}},{field:"sendTime",label:"发送时间",render(e){return t.renderDate(e)}},{field:"userId",label:"用户类型",render(e,o){const{userId:r,userType:i}=o,s=t.renderTag("uid: "+r),l=t.renderDict(i,a.USER_TYPE);return d("span",{},[l,s])}},{field:"fromMail",label:"发件邮箱"},{field:"toMail",label:"收件邮箱"},{field:"templateNickname",label:"发件昵称"},{field:"templateTitle",label:"邮件标题"},{field:"templateContent",label:"邮件内容",render(e){return d("div",{innerHTML:e})}},{field:"templateParams",label:"邮件参数",render(e){return t.renderJsonPreview(e)}},{field:"sendMessageId",label:"返回ID"},{field:"templateCode",label:"模板编码"},{field:"templateId",label:"模板编号"},{field:"createTime",label:"记录时间",render(e){return t.renderDate(e)}}],j=f({name:"MailLogModal",__name:"MailLogModal",setup(e){const o=b(),[r,{closeModal:i}]=c(l=>{o.value=l}),[s]=h({column:1,schema:D,data:o,labelStyle:{width:"100px"}});return(l,P)=>(S(),I(n(m),g(l.$attrs,{title:"发送邮件详情",onRegister:n(r),onOk:n(i),width:"800px"}),{default:T(()=>[M(n(u),{onRegister:n(s)},null,8,["onRegister"])]),_:1},16,["onRegister","onOk"]))}});export{j as _,O as c,W as s};
