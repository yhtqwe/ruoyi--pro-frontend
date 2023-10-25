import{L as o}from"./index-2b36f9e3.js";import"./index-238a0b12.js";import"./BasicForm.vue_vue_type_style_index_0_lang-da06c4a7.js";import"./index-ab29420a.js";import"./sortable.esm-f208c0d8.js";import{u as t}from"./useRender-e7048bde.js";import{g as n,D as r}from"./dict-d92cc9bc.js";const p=[{title:"申请编号",dataIndex:"id",width:100},{title:"状态",dataIndex:"result",width:180,customRender:({text:e})=>t.renderDict(e,r.BPM_PROCESS_INSTANCE_RESULT)},{title:"开始时间",dataIndex:"startTime",width:180,customRender:({text:e})=>t.renderDate(e)},{title:"结束时间",dataIndex:"endTime",width:180,customRender:({text:e})=>t.renderDate(e)},{title:"请假类型",dataIndex:"type",width:180,customRender:({text:e})=>t.renderDict(e,r.BPM_OA_LEAVE_TYPE)},{title:"原因",dataIndex:"reason",width:180},{title:"申请时间",dataIndex:"createTime",width:180,customRender:({text:e})=>t.renderDate(e)}],u=[{label:"请假类型",field:"type",component:"Select",componentProps:{options:n(r.BPM_OA_LEAVE_TYPE)},colProps:{span:8}},{label:"申请时间",field:"createTime",component:"RangePicker",colProps:{span:8}},{label:"结果",field:"result",component:"Select",componentProps:{options:n(r.BPM_PROCESS_INSTANCE_RESULT)},colProps:{span:8}},{label:"原因",field:"reason",component:"Input",colProps:{span:8}}],P=[{label:"请假类型",field:"type",required:!0,component:"Select",componentProps:{options:n(r.BPM_OA_LEAVE_TYPE)}},{label:"开始时间",field:"startTime",required:!0,component:"DatePicker",componentProps:{showTime:!0,format:"YYYY-MM-DD HH:mm:ss",valueFormat:"x"}},{label:"结束时间",field:"endTime",required:!0,component:"DatePicker",componentProps:{showTime:!0,format:"YYYY-MM-DD HH:mm:ss",valueFormat:"x"}},{label:"原因",field:"reason",required:!0,component:"Input"}],f=[{label:"请假类型",field:"merchantOrderId",render:e=>t.renderTag(e)},{label:"开始时间",field:"startTime",render:e=>t.renderDate(e,"YYYY-MM-DD")},{label:"结束时间",field:"endTime",render:e=>t.renderDate(e,"YYYY-MM-DD")},{label:"原因",field:"reason"}];function D(e){return o.post({url:"/bpm/oa/leave/create",data:e})}function T(e){return o.get({url:`/bpm/oa/leave/get?id=${e}`})}function Y(e){return o.get({url:"/bpm/oa/leave/page",params:e})}export{Y as a,p as b,D as c,f as d,P as f,T as g,u as s};
