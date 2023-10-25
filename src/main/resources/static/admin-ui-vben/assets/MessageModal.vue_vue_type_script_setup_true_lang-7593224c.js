import{L as o,d as T,c as h,r as M,o as w,j as I,w as P,n as b,k as a,af as S,y as x}from"./index-2b36f9e3.js";import"./index-238a0b12.js";import"./BasicForm.vue_vue_type_style_index_0_lang-da06c4a7.js";import{a as R,B as E}from"./index-ab29420a.js";import"./sortable.esm-f208c0d8.js";import{u as t}from"./useRender-e7048bde.js";import{D as u,g as k}from"./dict-d92cc9bc.js";import{f as C}from"./index-cd8c5680.js";import{u as L,_ as $}from"./useForm-2cb760a4.js";const j=[{title:"发送时间",dataIndex:"createTime",width:180,customRender:({text:n})=>t.renderDate(n)},{title:"消息类型",dataIndex:"type",width:80,customRender:({text:n})=>t.renderDict(n,u.MP_MESSAGE_TYPE)},{title:"发送方",dataIndex:"sendFrom",width:180,customRender:({text:n})=>n===1?t.renderTag("粉丝","success"):t.renderTag("公众号","default")},{title:"用户标识",dataIndex:"openid",width:300},{title:"内容",dataIndex:"content",width:300,customRender:({text:n,record:e})=>e.type==="event"&&e.event==="subscribe"?t.renderTag("关注","success"):e.type==="event"&&e.event==="unsubscribe"?t.renderTag("取消关注","warn"):e.type==="event"&&e.event==="CLICK"?t.renderTag(`点击菜单${e.eventKey}`):e.type==="event"&&e.event==="VIEW"?t.renderTag(`点击菜单链接${e.eventKey}`):e.type==="event"&&e.event==="scancode_waitmsg"?t.renderTag(`扫码结果${e.eventKey}`):e.type==="event"&&e.event==="scancode_push"?t.renderTag(`扫码结果${e.eventKey}`):e.type==="event"&&e.event==="pic_sysphoto"?t.renderTag("系统拍照发图"):e.type==="event"&&e.event==="pic_photo_or_album"?t.renderTag("拍照或者相册"):e.type==="event"&&e.event==="pic_weixin"?t.renderTag("微信相册"):e.type==="event"&&e.event==="location_select"?t.renderTag("选择地理位置"):e.type==="event"?t.renderTag("未知事件类型"):e.type==="text"?n:e.type==="voice"?e.mediaUrl:e.type==="image"?t.renderImg(e.mediaUrl):e.type==="video"||e.type==="shortvideo"?e.mediaUrl:e.type==="link"?t.renderLink(e.url,e.title):e.type==="location"?e.label:e.type==="music"?e.title:e.type==="news"?e.articles:t.renderTag("未知消息类型","warn")}],r=await C(),q=[{label:"公众号",field:"accountId",component:"Select",required:!0,defaultValue:r[0].id,componentProps:{options:r,fieldNames:{label:"name",value:"id"}},colProps:{span:8}},{label:"消息类型",field:"type",component:"Select",componentProps:{options:k(u.MP_MESSAGE_TYPE,"string")},colProps:{span:8}},{label:"用户标识",field:"openid",component:"Input",colProps:{span:8}},{label:"创建时间",field:"createTime",component:"RangePicker",colProps:{span:8}}],A=[];function H(n){return o.get({url:"/mp/message/page",params:n})}function B(n){return o.post({url:"/mp/message/send",data:n})}const z=T({name:"MpMessageModal",__name:"MessageModal",emits:["success","register"],setup(n,{emit:e}){const p=e,{t:m}=h(),{createMessage:c}=x(),l=M(0),[f,{resetFields:g,validate:d}]=L({labelWidth:120,baseColProps:{span:24},schemas:A,showActionButtonGroup:!1,actionColOptions:{span:23}}),[v,{setModalProps:i,closeModal:y}]=R(async s=>{g(),i({confirmLoading:!1}),l.value=s.record.userId});async function _(){try{const s=await d();s.userId=l.value,i({confirmLoading:!0}),await B(s),y(),p("success"),c.success(m("common.saveSuccessText"))}finally{i({confirmLoading:!1})}}return(s,D)=>(w(),I(a(E),S(s.$attrs,{title:"发送消息",onRegister:a(v),onOk:_}),{default:P(()=>[b(a($),{onRegister:a(f)},null,8,["onRegister"])]),_:1},16,["onRegister"]))}});export{z as _,j as c,H as g,q as s};
