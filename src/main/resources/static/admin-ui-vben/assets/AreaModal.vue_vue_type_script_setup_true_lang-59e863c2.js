import{u as d,_ as p}from"./useForm-f7dccb87.js";import"./BasicForm.vue_vue_type_style_index_0_lang-42e5fba8.js";import{cm as o,a as f,o as g,j as _,w as h,n as y,k as t,ag as I}from"./index-8b526734.js";import{a as w,B as b}from"./index-40f1f97e.js";const C=[{title:"编号",dataIndex:"id",width:100,align:"left"},{title:"名字",dataIndex:"name",width:180}],B=[{label:"IP",field:"ip",required:!0,component:"Input"},{label:"地址",field:"result",component:"Input"}];function F(){return o.get({url:"/system/area/tree"})}function M(n){return o.get({url:"/system/area/get-by-ip?ip="+n})}const R=f({name:"SystemAreaModal",__name:"AreaModal",setup(n){const[r,{setFieldsValue:i,resetFields:l,validate:c}]=d({labelWidth:120,baseColProps:{span:24},schemas:B,showActionButtonGroup:!1,actionColOptions:{span:23}}),[m,{setModalProps:a}]=w(async()=>{l(),a({confirmLoading:!1})});async function u(){try{const e=await c();a({confirmLoading:!0});const s=await M(e.ip);s&&(e.result=s,i({...e}))}finally{a({confirmLoading:!1})}}return(e,s)=>(g(),_(t(b),I(e.$attrs,{onRegister:t(m),title:"IP 查询",onOk:u}),{default:h(()=>[y(t(p),{onRegister:t(r)},null,8,["onRegister"])]),_:1},16,["onRegister"]))}});export{R as _,C as c,F as g};
