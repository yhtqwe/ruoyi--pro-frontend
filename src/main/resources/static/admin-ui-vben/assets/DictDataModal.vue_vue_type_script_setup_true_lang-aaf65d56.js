import{d as w,c as S,r as T,k as t,g2 as D,o as M,j as _,w as C,n as x,af as y,g3 as O,g4 as P,y as k}from"./index-84bac5b8.js";import"./index-1beb4355.js";import"./BasicForm.vue_vue_type_style_index_0_lang-f40c69bb.js";import{a as F,B as R}from"./index-173d5d49.js";import"./sortable.esm-f208c0d8.js";import{u as i}from"./useRender-70a86cea.js";import{D as c,g as p}from"./dict-5c702769.js";import{u as A,_ as q}from"./useForm-9e126d4c.js";const B=[{value:"",label:"无"},{value:"processing",label:"主要"},{value:"success",label:"成功"},{value:"default",label:"默认"},{value:"warning",label:"警告"},{value:"error",label:"危险"},{value:"pink",label:"pink"},{value:"red",label:"red"},{value:"orange",label:"orange"},{value:"green",label:"green"},{value:"cyan",label:"cyan"},{value:"blue",label:"blue"},{value:"purple",label:"purple"}];function N(){return B.map(e=>{const{value:l,label:n}=e;return l===""?e:{label:i.renderTag(n,l),value:l}})}const z=[{title:"字典编码",dataIndex:"id",width:100},{title:"字典标签",dataIndex:"label",width:180},{title:"字典键值",dataIndex:"value",width:100},{title:"字典排序",dataIndex:"sort",width:120},{title:"状态",dataIndex:"status",width:180,customRender:({text:e})=>i.renderDict(e,c.COMMON_STATUS)},{title:"颜色类型",dataIndex:"colorType",width:180},{title:"CSS Class",dataIndex:"cssClass",width:180},{title:"备注",dataIndex:"remark",width:180},{title:"创建时间",dataIndex:"createTime",width:180,customRender:({text:e})=>i.renderDate(e)}],H=[{label:"字典标签",field:"label",component:"Input",colProps:{span:8}},{label:"状态",field:"status",component:"Select",componentProps:{options:p(c.COMMON_STATUS)},colProps:{span:8}}],U=[{label:"编号",field:"id",show:!1,component:"Input"},{label:"字典类型",field:"dictType",required:!0,component:"Input",dynamicDisabled:({values:e})=>!!e.dictType},{label:"数据标签",field:"label",required:!0,component:"Input"},{label:"数据键值",field:"value",required:!0,component:"Input"},{label:"显示排序",field:"sort",required:!0,defaultValue:0,component:"InputNumber"},{label:"状态",field:"status",component:"Select",componentProps:{options:p(c.COMMON_STATUS)}},{label:"颜色类型",field:"colorType",component:"Select",componentProps:{options:N()}},{label:"CSS Class",field:"cssClass",component:"Input",helpMessage:"输入hex模式的颜色, 例如#108ee9",rules:[{required:!1,message:"输入正确的16进制颜色",pattern:/^#([0-9a-fA-F]{3}){1,2}$/,trigger:"blur"}]},{label:"备注",field:"remark",component:"InputTextArea"}],J=w({name:"SystemDictDataModal",__name:"DictDataModal",emits:["success","register"],setup(e,{emit:l}){const n=l,{t:o}=S(),{createMessage:m}=k(),s=T(!0),[f,{setFieldsValue:d,resetFields:b,validate:g}]=A({labelWidth:120,baseColProps:{span:24},schemas:U,showActionButtonGroup:!1,actionColOptions:{span:23}}),[v,{setModalProps:r,closeModal:h}]=F(async a=>{if(b(),r({confirmLoading:!1}),s.value=!!a?.isUpdate,t(s)){const u=await D(a.record.id);d({...u})}else d({dictType:a.record})});async function I(){try{const a=await g();r({confirmLoading:!0}),t(s)?await O(a):await P(a),h(),n("success"),m.success(o("common.saveSuccessText"))}finally{r({confirmLoading:!1})}}return(a,u)=>(M(),_(t(R),y(a.$attrs,{title:s.value?t(o)("action.edit"):t(o)("action.create"),onRegister:t(v),onOk:I}),{default:C(()=>[x(t(q),{onRegister:t(f)},null,8,["onRegister"])]),_:1},16,["title","onRegister"]))}});export{J as _,H as a,z as d};