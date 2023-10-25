import{b1 as d,fR as u,d as m,r as f,o as T,j as _,w as I,n as x,k as i,af as b}from"./index-84bac5b8.js";import"./index-1beb4355.js";import"./BasicForm.vue_vue_type_style_index_0_lang-f40c69bb.js";import{a as R,B as g}from"./index-173d5d49.js";import"./sortable.esm-f208c0d8.js";import{u as t}from"./useRender-70a86cea.js";import{D as l,g as c}from"./dict-5c702769.js";import{D as h}from"./index-d97670a9.js";import{u as P}from"./useDescription-e7cd1424.js";const q=[{title:"日志编号",dataIndex:"id",width:100},{title:"用户编号",dataIndex:"userId",width:100},{title:"用户类型",dataIndex:"userType",width:120,customRender:({text:e})=>t.renderDict(e,l.USER_TYPE)},{title:"应用名",dataIndex:"applicationName",width:120},{title:"请求方法名",dataIndex:"requestMethod",width:120},{title:"请求地址",dataIndex:"requestUrl",width:250},{title:"异常发生时间",dataIndex:"exceptionTime",width:180,customRender:({text:e})=>t.renderDate(e)},{title:"异常名",dataIndex:"exceptionName",width:250},{title:"处理状态",dataIndex:"processStatus",width:180,customRender:({text:e})=>t.renderDict(e,l.INFRA_API_ERROR_LOG_PROCESS_STATUS)}],v=[{label:"用户编号",field:"userId",component:"Input",colProps:{span:8}},{label:"用户名称",field:"username",component:"Input",colProps:{span:8}},{label:"用户类型",field:"userType",component:"Select",componentProps:{options:c(l.USER_TYPE)},colProps:{span:8}},{label:"应用名",field:"applicationName",component:"Input",colProps:{span:8}},{label:"请求地址",field:"requestUrl",component:"Input",colProps:{span:8}},{label:"异常时间",field:"exceptionTime",component:"RangePicker",colProps:{span:8}},{label:"处理状态",field:"processStatus",component:"Select",componentProps:{options:c(l.INFRA_API_ERROR_LOG_PROCESS_STATUS)},colProps:{span:8}}];function p(e,r,n=!0){return d("span",{style:{color:r,fontWeight:n?"bold":"normal"}},e)}const S=[{value:"GET",color:"#108ee9"},{value:"POST",color:"#2db7f5"},{value:"PUT",color:"warning"},{value:"DELETE",color:"#f50"}],E=[{field:"id",label:"异常id"},{field:"traceId",label:"链路ID",show(e){return e&&e.traceId&&e.traceId!==""}},{field:"applicationName",label:"应用名称",labelMinWidth:100},{field:"processStatus",label:"处理状态",render(e,r){const{processStatus:n,processUserId:o}=r,a=t.renderDict(n,l.INFRA_API_ERROR_LOG_PROCESS_STATUS);if(!o)return a;const s=t.renderTag(`uid: ${o}`);return d("span",{},[a,s])}},{field:"processTime",label:"处理时间",show(e){return e&&e.processTime&&e.processTime!==""},render(e){return t.renderDate(e)}},{field:"userId",label:"用户id",render(e,r){const n=t.renderDict(r.userType,l.USER_TYPE),o=t.renderTag(`uid: ${e}`);return d("span",{},[n,o])}},{field:"userIp",label:"ip地址"},{field:"requestUrl",label:"请求地址",render(e,r){if(r){const{requestMethod:n}=r,o=S.find(s=>s.value===n),a=o?t.renderTag(n,o.color):n;return d("span",{},[a,r.requestUrl])}}},{field:"requestParams",label:"请求参数",render(e){return t.renderJsonPreview(e)}},{field:"userAgent",label:"userAgent"},{field:"exceptionTime",label:"异常时间",render(e){return t.renderDate(e)}},{field:"exceptionClassName",label:"异常类名/方法",render(e,r){if(r)return p(`${r.exceptionClassName} / ${r.exceptionMethodName}`,"red")}},{field:"exceptionMessage",label:"异常信息",render(e){return p(e,"red")}},{field:"exceptionFileName",label:"异常文件名",render(e,r){if(r)return t.renderText(r.exceptionFileName,`Line: ${r.exceptionLineNumber}`)}},{field:"exceptionName",label:"异常名称"},{field:"exceptionRootCauseMessage",label:"异常信息"},{field:"exceptionStackTrace",label:"异常堆栈",render(e){return d(u,{value:e,readonly:!0,style:{minHeight:"300px"}})}}],y=m({name:"ErrorLogModal",__name:"ErrorLogModal",setup(e){const r=f(),[n,{closeModal:o}]=R(s=>{r.value=s}),[a]=P({column:1,schema:E,data:r});return(s,D)=>(T(),_(i(g),b(s.$attrs,{title:"错误日志详情",width:"800px",onRegister:i(n),onOk:i(o)}),{default:I(()=>[x(i(h),{onRegister:i(a)},null,8,["onRegister"])]),_:1},16,["onRegister","onOk"]))}});export{y as _,q as c,v as s};