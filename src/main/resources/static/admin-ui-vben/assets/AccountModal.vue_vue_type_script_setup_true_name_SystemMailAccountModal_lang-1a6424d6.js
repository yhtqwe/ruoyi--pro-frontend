import{u as w,B as _}from"./index-b9c40b5d.js";import{u as g,a as S}from"./useForm-8fd7b992.js";import"./index-c3c80eae.js";import{u as r}from"./useRender-7b752cf7.js";import{D as i,a as b}from"./dict-411628cd.js";import{g as M,u as P,c as R}from"./account-c14cdd1f.js";import{a as l,H as x,u as t,o as A,c as T,w as B,e as F,ag as L}from"./index-185fe65d.js";const G=[{title:"编号",dataIndex:"id",width:100},{title:"邮箱",dataIndex:"mail",width:180},{title:"用户名",dataIndex:"username",width:100},{title:"SMTP 服务器域名",dataIndex:"host",width:120},{title:"SMTP 服务器端口",dataIndex:"port",width:120},{title:"是否开启 SSL",dataIndex:"sslEnable",width:180,customRender:({text:a})=>r.renderDict(a,i.INFRA_BOOLEAN_STRING)},{title:"创建时间",dataIndex:"createTime",width:180,customRender:({text:a})=>r.renderDate(a)}],U=[{label:"邮箱",field:"mail",component:"Input",colProps:{span:8}},{label:"用户名",field:"username",component:"Input",colProps:{span:8}}],N=[{label:"编号",field:"id",show:!1,component:"Input"},{label:"邮箱",field:"mail",required:!0,component:"Input"},{label:"用户名",field:"username",required:!0,component:"Input"},{label:"密码",field:"password",required:!0,component:"InputPassword"},{label:"SMTP 服务器域名",field:"host",required:!0,component:"Input"},{label:"SMTP 服务器端口",field:"port",required:!0,component:"Input"},{label:"是否开启 SSL",field:"sslEnable",component:"Switch",componentProps:{options:b(i.INFRA_BOOLEAN_STRING)}}],O=l({name:"SystemMailAccountModal"}),V=l({...O,emits:["success","register"],setup(a,{emit:c}){const o=x(!0),[d,{setFieldsValue:u,resetFields:m,validate:p}]=g({labelWidth:120,baseColProps:{span:24},schemas:N,showActionButtonGroup:!1,actionColOptions:{span:23}}),[f,{setModalProps:s,closeModal:I}]=w(async e=>{if(m(),s({confirmLoading:!1}),o.value=!!e?.isUpdate,t(o)){const n=await M(e.record.id);u({...n})}});async function h(){try{const e=await p();s({confirmLoading:!0}),t(o)?await P(e):await R(e),I(),c("success")}finally{s({confirmLoading:!1})}}return(e,n)=>(A(),T(t(_),L(e.$attrs,{onRegister:t(f),title:o.value?"编辑":"新增",onOk:h}),{default:B(()=>[F(t(S),{onRegister:t(d)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}});export{V as _,G as c,U as s};