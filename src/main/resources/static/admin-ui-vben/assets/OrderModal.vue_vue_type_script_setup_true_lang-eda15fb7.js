import{a as c,B as p}from"./index-40f1f97e.js";import{D as m}from"./index-0f4dcf74.js";import{g as u}from"./index-5e56383b.js";import{a as f,z as h,o as b,j as _,w as T,n as R,k as a,ag as D}from"./index-8b526734.js";import"./index-ec19b8e7.js";import"./BasicForm.vue_vue_type_style_index_0_lang-42e5fba8.js";import"./index-d2d20fb4.js";import"./tree-e6981725.js";import"./index-03ea37ad.js";import"./index-3e87b811.js";import"./index-c8168e27.js";import"./sortable.esm-f208c0d8.js";import{u as t}from"./useRender-f65ba3eb.js";import{D as r,g as n}from"./dict-5cefafd8.js";import{a as P}from"./index-e679b945.js";const k=[{title:"订单编号",dataIndex:"id",width:100},{title:"支付渠道",children:[{title:"商户名称",dataIndex:"merchantName",width:120},{title:"应用名称",dataIndex:"appName",width:120},{title:"渠道名称",dataIndex:"channelCodeName",width:160}]},{title:"支付订单",children:[{title:"商户",dataIndex:"merchantOrderId",width:100},{title:"支付",dataIndex:"channelOrderNo",width:200}]},{title:"商品标题",dataIndex:"subject",width:200},{title:"支付金额(元)",dataIndex:"amount",width:120,customRender:({text:e})=>"￥"+parseFloat(e||0/100).toFixed(2)},{title:"手续金额(元)",dataIndex:"channelFeeAmount",width:120,customRender:({text:e})=>"￥"+parseFloat(e||0/100).toFixed(2)},{title:"退款金额(元)",dataIndex:"refundAmount",width:120,customRender:({text:e})=>"￥"+parseFloat(e||0/100).toFixed(2)},{title:"支付状态",dataIndex:"status",width:100,customRender:({text:e})=>t.renderDict(e,r.PAY_ORDER_STATUS)},{title:"回调状态",dataIndex:"notifyStatus",width:100,customRender:({text:e})=>t.renderDict(e,r.PAY_ORDER_NOTIFY_STATUS)},{title:"创建时间",dataIndex:"createTime",width:180,customRender:({text:e})=>t.renderDate(e)},{title:"支付时间",dataIndex:"successTime",width:180,customRender:({text:e})=>t.renderDate(e)}],j=[{label:"所属商户",field:"merchantId",component:"ApiSelect",componentProps:{api:()=>u("")},colProps:{span:8}},{label:"应用编号",field:"appId",component:"Input",colProps:{span:8}},{label:"渠道编码",field:"channelCode",component:"Select",componentProps:{options:n(r.PAY_CHANNEL_CODE_TYPE)},colProps:{span:8}},{label:"商户订单编号",field:"merchantOrderId",component:"Input",colProps:{span:8}},{label:"渠道订单号",field:"channelOrderNo",component:"Input",colProps:{span:8}},{label:"支付状态",field:"status",component:"Select",componentProps:{options:n(r.PAY_ORDER_STATUS)},colProps:{span:8}},{label:"退款状态",field:"refundStatus",component:"Select",componentProps:{options:n(r.PAY_ORDER_REFUND_STATUS)},colProps:{span:8}},{label:"回调商户状态",field:"notifyStatus",component:"Select",componentProps:{options:n(r.PAY_ORDER_NOTIFY_STATUS)},colProps:{span:8}},{label:"创建时间",field:"createTime",component:"RangePicker",colProps:{span:8}}],I=[{label:"商户名称",field:"merchantName"},{label:"应用名称",field:"appName"},{label:"商品名称",field:"subject"},{label:"商户订单号",field:"merchantOrderId",render:e=>t.renderTag(e)},{label:"渠道订单号",field:"channelOrderNo",render:e=>t.renderTag(e)},{label:"支付订单号",field:"payOrderExtension.no",render:e=>t.renderTag(e)},{label:"支付金额",field:"amount",render:e=>"￥"+parseFloat(e||0/100).toFixed(2)},{label:"手续费",field:"channelFeeAmount",render:e=>"￥"+parseFloat(e||0/100).toFixed(2)},{label:"手续费比例",field:"channelFeeRate",render:e=>parseFloat(e||0/100).toFixed(2)+"%"},{label:"支付状态",field:"status",render:e=>t.renderDict(e,r.PAY_ORDER_STATUS)},{label:"回调状态",field:"notifyStatus",render:e=>t.renderDict(e,r.PAY_ORDER_NOTIFY_STATUS)},{label:"回调地址",field:"notifyUrl"},{label:"创建时间",field:"createTime",render:e=>t.renderDate(e)},{label:"支付时间",field:"successTime",render:e=>t.renderDate(e)},{label:"失效时间",field:"expireTime",render:e=>t.renderDate(e)},{label:"通知时间",field:"notifyTime",render:e=>t.renderDate(e)},{label:"支付渠道",field:"channelCodeName"},{label:"支付IP",field:"userIp"},{label:"退款状态",field:"notifyStatus",render:e=>t.renderDict(e,r.PAY_ORDER_REFUND_STATUS)},{label:"退款次数",field:"refundTimes"},{label:"退款金额",field:"refundAmount",render:e=>"￥"+parseFloat(e/100).toFixed(2)},{label:"商品描述",field:"body"},{label:"支付通道异步回调内容",field:"payOrderExtension.channelNotifyData"}],L=f({name:"PayRefundModal",__name:"OrderModal",setup(e){const d=h(),[i,{setModalProps:s}]=c(async l=>{s({confirmLoading:!1});const o=await P(l.record.id);d.value=o});return(l,o)=>(b(),_(a(p),D(l.$attrs,{width:"60%",onRegister:a(i),title:"查看详情",showOkBtn:!1}),{default:T(()=>[R(a(m),{bordered:!1,column:3,data:d.value,schema:a(I)},null,8,["data","schema"])]),_:1},16,["onRegister"]))}});export{L as _,k as c,j as s};
