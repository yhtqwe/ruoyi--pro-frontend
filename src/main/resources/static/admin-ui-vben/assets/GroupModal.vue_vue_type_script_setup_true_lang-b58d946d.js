import{d as T,c as b,r as h,k as e,o as P,j as x,w as O,n as w,af as C,y as R}from"./index-2b36f9e3.js";import"./index-238a0b12.js";import"./BasicForm.vue_vue_type_style_index_0_lang-da06c4a7.js";import{a as k,B as G}from"./index-ab29420a.js";import"./sortable.esm-f208c0d8.js";import{u as c}from"./useRender-e7048bde.js";import{D as r,g as l}from"./dict-d92cc9bc.js";import{u as v,_ as y}from"./useForm-2cb760a4.js";import{g as A,u as B,c as D}from"./index-d617b9a4.js";const Y=[{title:"编号",dataIndex:"id"},{title:"名称",dataIndex:"name"},{title:"备注",dataIndex:"remark"},{title:"状态",dataIndex:"status",customRender:({text:s})=>c.renderDict(s,r.COMMON_STATUS)},{title:"创建时间",dataIndex:"createTime",customRender:({text:s})=>c.renderDate(s)}],z=[{label:"分组名称",field:"name",component:"Input",colProps:{span:8}},{label:"创建时间",field:"createTime",component:"RangePicker",colProps:{span:8}},{label:"状态",field:"status",component:"Select",componentProps:{options:l(r.COMMON_STATUS)},colProps:{span:8}}],F=[{label:"编号",field:"id",show:!1,component:"Input"},{label:"名称",field:"name",required:!0,component:"Input"},{label:"状态",field:"status",component:"Select",componentProps:{options:l(r.COMMON_STATUS)}},{label:"备注",field:"remark",component:"InputTextArea"}],H=T({name:"MemberGroupModal",__name:"GroupModal",emits:["success","register"],setup(s,{emit:m}){const p=m,{t:o}=b(),{createMessage:d}=R(),a=h(!0),[u,{setFieldsValue:f,resetFields:g,validate:M}]=v({labelWidth:120,baseColProps:{span:24},schemas:F,showActionButtonGroup:!1,actionColOptions:{span:23}}),[_,{setModalProps:n,closeModal:I}]=k(async t=>{if(g(),n({confirmLoading:!1}),a.value=!!t?.isUpdate,e(a)){const i=await A(t.record.id);f({...i})}});async function S(){try{const t=await M();n({confirmLoading:!0}),e(a)?await B(t):await D(t),I(),p("success"),d.success(o("common.saveSuccessText"))}finally{n({confirmLoading:!1})}}return(t,i)=>(P(),x(e(G),C(t.$attrs,{title:a.value?e(o)("action.edit"):e(o)("action.create"),onRegister:e(_),onOk:S}),{default:O(()=>[w(e(y),{onRegister:e(u)},null,8,["onRegister"])]),_:1},16,["title","onRegister"]))}});export{H as _,Y as c,z as s};
