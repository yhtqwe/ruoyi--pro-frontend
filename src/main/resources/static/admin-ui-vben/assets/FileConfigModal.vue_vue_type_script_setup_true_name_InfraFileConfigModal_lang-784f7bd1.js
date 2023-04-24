import{u as w,B as S}from"./index-b9c40b5d.js";import{u as _,a as F}from"./useForm-8fd7b992.js";import"./index-c3c80eae.js";import{u as s}from"./useRender-7b752cf7.js";import{D as r,g as c}from"./dict-411628cd.js";import{bD as o,a as f,H as R,u as n,o as P,c as C,w as A,e as q,ag as k}from"./index-185fe65d.js";const G=[{title:"编号",dataIndex:"id",width:100},{title:"配置名",dataIndex:"name",width:180},{title:"存储器",dataIndex:"storage",width:100,customRender:({text:e})=>s.renderDict(e,r.INFRA_FILE_STORAGE)},{title:"主配置",dataIndex:"master",width:180,customRender:({text:e})=>s.renderDict(e,r.INFRA_BOOLEAN_STRING)},{title:"备注",dataIndex:"remark",width:180},{title:"创建时间",dataIndex:"createTime",width:180,customRender:({text:e})=>s.renderDate(e)}],H=[{label:"配置名",field:"name",component:"Input",colProps:{span:8}},{label:"存储器",field:"storage",component:"Select",componentProps:{options:c(r.INFRA_FILE_STORAGE)},colProps:{span:8}},{label:"创建时间",field:"createTime",component:"RangePicker",colProps:{span:8}}],x=[{label:"编号",field:"id",show:!1,component:"Input"},{label:"配置名",field:"name",required:!0,component:"Input"},{label:"存储器",field:"storage",component:"Select",required:!0,dynamicDisabled:({values:e})=>!!e.id,componentProps:{options:c(r.INFRA_FILE_STORAGE)}},{label:"基础路径",field:"config.basePath",required:!0,ifShow:({values:e})=>e.storage>=10&&e.storage<=12,component:"Input"},{label:"主机地址",field:"config.host",required:!0,ifShow:({values:e})=>e.storage>=11&&e.storage<=12,component:"Input"},{label:"主机端口",field:"config.port",required:!0,ifShow:({values:e})=>e.storage>=11&&e.storage<=12,component:"Input"},{label:"用户名",field:"config.username",required:!0,ifShow:({values:e})=>e.storage>=11&&e.storage<=12,component:"Input"},{label:"密码",field:"config.password",required:!0,ifShow:({values:e})=>e.storage>=11&&e.storage<=12,component:"Input"},{label:"连接模式",field:"config.basePath",required:!0,ifShow:({values:e})=>e.storage===11,component:"Select",componentProps:{options:[{lable:"主动模式",key:"Active",value:"Active"},{lable:"被动模式",key:"Passive",value:"Passive"}]}},{label:"节点地址",field:"config.endpoint",required:!0,ifShow:({values:e})=>e.storage===20,component:"Input"},{label:"存储 bucket",field:"config.bucket",required:!0,ifShow:({values:e})=>e.storage===20,component:"Input"},{label:"accessKey",field:"config.accessKey",ifShow:({values:e})=>e.storage===20,component:"Input"},{label:"accessSecret",field:"config.accessSecret",ifShow:({values:e})=>e.storage===20,component:"Input"},{label:"自定义域名",field:"config.domain",required:!0,component:"Input"},{label:"备注",field:"remark",component:"InputTextArea"}];function K(e){return o.get({url:"/infra/file-config/page",params:e})}function y(e){return o.get({url:"/infra/file-config/get?id="+e})}function U(e){return o.put({url:"/infra/file-config/update-master?id="+e})}function T(e){return o.post({url:"/infra/file-config/create",data:e})}function D(e){return o.put({url:"/infra/file-config/update",data:e})}function V(e){return o.delete({url:"/infra/file-config/delete?id="+e})}function $(e){return o.get({url:"/infra/file-config/test?id="+e})}const E=f({name:"InfraFileConfigModal"}),W=f({...E,emits:["success","register"],setup(e,{emit:u}){const i=R(!0),[d,{setFieldsValue:p,resetFields:g,validate:m}]=_({labelWidth:120,baseColProps:{span:24},schemas:x,showActionButtonGroup:!1,actionColOptions:{span:23}}),[I,{setModalProps:a,closeModal:b}]=w(async t=>{if(g(),a({confirmLoading:!1}),i.value=!!t?.isUpdate,n(i)){const l=await y(t.record.id);p({...l})}});async function h(){try{const t=await m();a({confirmLoading:!0}),n(i)?await D(t):await T(t),b(),u("success")}finally{a({confirmLoading:!1})}}return(t,l)=>(P(),C(n(S),k(t.$attrs,{onRegister:n(I),title:i.value?"编辑":"新增",onOk:h}),{default:A(()=>[q(n(F),{onRegister:n(d)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}});export{W as _,G as c,V as d,K as g,H as s,$ as t,U as u};