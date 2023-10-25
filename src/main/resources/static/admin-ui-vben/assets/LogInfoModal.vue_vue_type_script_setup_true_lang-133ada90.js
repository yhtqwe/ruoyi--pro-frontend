import{b1 as i,d as u,r as p,o as m,j as f,w as g,n as h,k as l,af as b}from"./index-2b36f9e3.js";import"./index-238a0b12.js";import"./BasicForm.vue_vue_type_style_index_0_lang-da06c4a7.js";import{a as T,B as I}from"./index-ab29420a.js";import"./sortable.esm-f208c0d8.js";import{u as r}from"./useRender-e7048bde.js";import{D as c,g as P}from"./dict-d92cc9bc.js";import{D as M}from"./index-a69dfc8a.js";import{u as _}from"./useDescription-296e4c96.js";const A=[{title:"日志编号",dataIndex:"id",width:100},{title:"操作模块",dataIndex:"module",width:200},{title:"操作名",dataIndex:"name",width:180},{title:"操作类型",dataIndex:"type",width:120,customRender:({text:e})=>r.renderDict(e,c.SYSTEM_OPERATE_TYPE)},{title:"操作人",dataIndex:"userNickname",width:120},{title:"请求路径",dataIndex:"requestUrl"},{title:"操作结果",dataIndex:"resultCode",width:180,customRender:({text:e})=>r.renderTag(e===0?"成功":"失败",e===0?"#87d068":"#f50")},{title:"执行时长",dataIndex:"duration",width:180,customRender:({text:e})=>r.renderText(e,"ms")},{title:"操作日期",dataIndex:"startTime",width:180,customRender:({text:e})=>r.renderDate(e)}],N=[{label:"系统模块",field:"title",component:"Input",colProps:{span:8}},{label:"操作人员",field:"operName",component:"Input",colProps:{span:8}},{label:"类型",field:"type",component:"Select",componentProps:{options:P(c.SYSTEM_OPERATE_TYPE)},colProps:{span:8}},{label:"状态",field:"success",component:"Select",componentProps:{options:[{value:!0,key:!0,label:"成功"},{value:!1,key:!1,label:"失败"}]},colProps:{span:8}},{label:"操作时间",field:"startTime",component:"RangePicker",colProps:{span:8}}],w=[{value:"GET",color:"#108ee9"},{value:"POST",color:"#2db7f5"},{value:"PUT",color:"warning"},{value:"DELETE",color:"#f50"}],x=[{field:"module",label:"操作模块"},{field:"name",label:"操作名"},{field:"userNickname",label:"操作人",render(e,t){const{userNickname:n,userId:o}=t;return r.renderTags([n,`uid: ${o}`])}},{field:"resultCode",label:"请求结果",render(e){return r.renderTag(e===0?"成功":"失败",e===0?"#87d068":"#f50")}},{field:"resultMsg",label:"响应信息",show(e){return e&&e.resultMsg&&e.resultMsg!==""},render(e){return i("span",{style:{color:"red",fontWeight:"bold"}},e)}},{field:"userIp",label:"请求ip"},{field:"startTime",label:"请求时间",render(e){return r.renderDate(e)}},{field:"requestUrl",label:"请求路径",render(e,t){if(!t)return"";const{requestMethod:n,requestUrl:o}=t,s=w.find(d=>d.value===n.toUpperCase()),a=s?r.renderTag(n,s.color):n;return i("span",{},[a,o])}},{field:"javaMethod",label:"操作方法",labelMinWidth:80},{field:"javaMethodArgs",label:"请求参数",render(e){return r.renderJsonPreview(e)}},{field:"userAgent",label:"userAgent"},{field:"duration",label:"请求耗时",render(e){return r.renderText(e,"ms")}}],U=u({name:"OperLogInfoModal",__name:"LogInfoModal",setup(e){const t=p(),[n,{closeModal:o}]=T(a=>{t.value=a}),[s]=_({column:1,schema:x,data:t});return(a,d)=>(m(),f(l(I),b(a.$attrs,{title:"操作日志详情",width:"800px",onRegister:l(n),onOk:l(o)}),{default:g(()=>[h(l(M),{onRegister:l(s)},null,8,["onRegister"])]),_:1},16,["onRegister","onOk"]))}});export{U as _,A as c,N as s};