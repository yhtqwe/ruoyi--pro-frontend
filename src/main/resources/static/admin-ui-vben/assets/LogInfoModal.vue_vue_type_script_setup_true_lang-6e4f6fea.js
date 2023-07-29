import{a as u,B as p}from"./index-40f1f97e.js";import{D as m}from"./index-0f4dcf74.js";import{bb as i,a as f,z as g,o as h,j as b,w as T,n as I,k as l,ag as P}from"./index-8b526734.js";import"./index-ec19b8e7.js";import"./BasicForm.vue_vue_type_style_index_0_lang-42e5fba8.js";import"./index-d2d20fb4.js";import"./tree-e6981725.js";import"./index-03ea37ad.js";import"./index-3e87b811.js";import"./index-c8168e27.js";import"./sortable.esm-f208c0d8.js";import{u as r}from"./useRender-f65ba3eb.js";import{D as c,g as M}from"./dict-5cefafd8.js";import{u as _}from"./useDescription-c4a08efa.js";const B=[{title:"日志编号",dataIndex:"id",width:100},{title:"操作模块",dataIndex:"module",width:200},{title:"操作名",dataIndex:"name",width:180},{title:"操作类型",dataIndex:"type",width:120,customRender:({text:e})=>r.renderDict(e,c.SYSTEM_OPERATE_TYPE)},{title:"操作人",dataIndex:"userNickname",width:120},{title:"请求路径",dataIndex:"requestUrl"},{title:"操作结果",dataIndex:"resultCode",width:180,customRender:({text:e})=>r.renderTag(e===0?"成功":"失败",e===0?"#87d068":"#f50")},{title:"执行时长",dataIndex:"duration",width:180,customRender:({text:e})=>r.renderText(e,"ms")},{title:"操作日期",dataIndex:"startTime",width:180,customRender:({text:e})=>r.renderDate(e)}],j=[{label:"系统模块",field:"title",component:"Input",colProps:{span:8}},{label:"操作人员",field:"operName",component:"Input",colProps:{span:8}},{label:"类型",field:"type",component:"Select",componentProps:{options:M(c.SYSTEM_OPERATE_TYPE)},colProps:{span:8}},{label:"状态",field:"success",component:"Select",componentProps:{options:[{value:!0,key:!0,label:"成功"},{value:!1,key:!1,label:"失败"}]},colProps:{span:8}},{label:"操作时间",field:"startTime",component:"RangePicker",colProps:{span:8}}],w=[{value:"GET",color:"#108ee9"},{value:"POST",color:"#2db7f5"},{value:"PUT",color:"warning"},{value:"DELETE",color:"#f50"}],x=[{field:"module",label:"操作模块"},{field:"name",label:"操作名"},{field:"userNickname",label:"操作人",render(e,t){const{userNickname:o,userId:n}=t;return r.renderTags([o,"uid: "+n])}},{field:"resultCode",label:"请求结果",render(e){return r.renderTag(e===0?"成功":"失败",e===0?"#87d068":"#f50")}},{field:"resultMsg",label:"响应信息",show(e){return e&&e.resultMsg&&e.resultMsg!==""},render(e){return i("span",{style:{color:"red",fontWeight:"bold"}},e)}},{field:"userIp",label:"请求ip"},{field:"startTime",label:"请求时间",render(e){return r.renderDate(e)}},{field:"requestUrl",label:"请求路径",render(e,t){if(!t)return"";const{requestMethod:o,requestUrl:n}=t,s=w.find(d=>d.value===o.toUpperCase()),a=s?r.renderTag(o,s.color):o;return i("span",{},[a,n])}},{field:"javaMethod",label:"操作方法",labelMinWidth:80},{field:"javaMethodArgs",label:"请求参数",render(e){return r.renderJsonPreview(e)}},{field:"userAgent",label:"userAgent"},{field:"duration",label:"请求耗时",render(e){return r.renderText(e,"ms")}}],L=f({name:"OperLogInfoModal",__name:"LogInfoModal",setup(e){const t=g(),[o,{closeModal:n}]=u(a=>{t.value=a}),[s]=_({column:1,schema:x,data:t});return(a,d)=>(h(),b(l(p),P(a.$attrs,{title:"操作日志详情",onRegister:l(o),onOk:l(n),width:"800px"}),{default:T(()=>[I(l(m),{onRegister:l(s)},null,8,["onRegister"])]),_:1},16,["onRegister","onOk"]))}});export{L as _,B as c,j as s};
