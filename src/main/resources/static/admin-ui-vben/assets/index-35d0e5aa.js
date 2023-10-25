import{d as E,c as P,f as A,v as O,o as f,h as D,n as a,w as n,x as _,j as U,k as t,I as b,l as Y,y as F}from"./index-84bac5b8.js";import"./index-1beb4355.js";import{_ as L}from"./BasicForm.vue_vue_type_style_index_0_lang-f40c69bb.js";import{u as B}from"./index-173d5d49.js";import"./sortable.esm-f208c0d8.js";import{u as s}from"./useRender-70a86cea.js";import{D as r,g as p}from"./dict-5c702769.js";import{_ as q}from"./BasicTable.vue_vue_type_script_setup_true_lang-6c55bad0.js";import{u as v}from"./useTable-2040b40a.js";import"./index-f29e621a.js";import{g as G,u as K,a as V}from"./message-b95bc653.js";import{_ as $}from"./MessageInfoModal.vue_vue_type_script_setup_true_lang-268cb313.js";import{u as j}from"./userMessage-77909734.js";import"./index-b9509bee.js";import"./index-2dea95e5.js";import"./index-d2cf1d1c.js";import"./DownOutlined-a8fe79f2.js";import"./isMobile-174ba801.js";import"./index-d4092c42.js";import"./List-9fcea96e.js";import"./CheckOutlined-c0652f6b.js";import"./index-9bf8eb9e.js";import"./eagerComputed-aaf02481.js";import"./index-343834d4.js";import"./fromPairs-e099444b.js";import"./index-81d4b3c0.js";import"./DoubleRightOutlined-1bb4c7eb.js";import"./useBreakpoint-8b027837.js";import"./responsiveObserve-85850b10.js";import"./zh_CN-1ca40490.js";import"./tree-a6f36781.js";import"./debounce-51e23acd.js";import"./scrollTo-b5e908bd.js";import"./operationUnit-d5166b83.js";import"./index-cc732a41.js";import"./index-831ed906.js";import"./index-3e1b457d.js";import"./get-acbb0bab.js";import"./index-09793f90.js";import"./Col-5c991ea4.js";import"./useFlexGapSupport-7bccf8d7.js";import"./_baseIteratee-de9a7973.js";import"./onMountedOrActivated-78e848f5.js";import"./PlusOutlined-c3a73197.js";import"./index-5d2832e9.js";import"./index-7a2ca6fc.js";import"./copyTextToClipboard-cc995e2b.js";import"./index-723fd4c3.js";import"./useWindowSizeFn-edf59fbd.js";import"./FullscreenOutlined-2d9cb280.js";import"./RedoOutlined-c04dd14b.js";import"./useForm-9e126d4c.js";import"./uniqBy-966a1ca5.js";import"./index-9785aad3.js";import"./index-d97670a9.js";import"./useDescription-e7cd1424.js";const W=[{title:"发送人",dataIndex:"templateNickname",width:100},{title:"发送时间",dataIndex:"createTime",width:180,customRender:({text:o})=>s.renderDate(o)},{title:"类型",dataIndex:"templateType",width:180,customRender:({text:o})=>s.renderDict(o,r.SYSTEM_NOTIFY_TEMPLATE_TYPE)},{title:"内容",dataIndex:"templateContent",width:300},{title:"是否已读",dataIndex:"readStatus",width:100,customRender:({text:o})=>s.renderDict(o,r.INFRA_BOOLEAN_STRING)}],z=[{label:"是否已读",field:"readStatus",component:"Select",componentProps:{options:p(r.INFRA_BOOLEAN_STRING)},colProps:{span:8}},{label:"发送时间",field:"createTime",component:"RangePicker",colProps:{span:8}}];p(r.SYSTEM_NOTIFY_TEMPLATE_TYPE),p(r.COMMON_STATUS);const Xe=E({name:"SystemMyMessage",__name:"index",setup(o){const{t:m}=P(),{createMessage:h}=F(),[g,{openModal:T}]=B(),I=j(),[S,{getSelectRowKeys:l,clearSelectedRowKeys:y,reload:w}]=v({title:"我的站内信列表",api:G,columns:W,formConfig:{labelWidth:130,schemas:z},rowSelection:{type:"checkbox",getCheckboxProps:e=>({disabled:e.readStatus})},rowKey:"id",useSearchForm:!0,showTableSetting:!0,showIndexColumn:!1,actionColumn:{width:140,title:m("common.action"),dataIndex:"action",fixed:"right"}}),R=A(()=>l().length===0);function k(){const e=l();d(e)}async function x(e){await d([e.id])}function c(e){h.success(e),I.updateUnreadCount(),w(),y()}async function d(e){await K(e),c("标记已读成功！")}async function M(){await V(),c("全部已读成功！")}function C(e){T(!0,e)}return(e,H)=>{const u=O("a-button");return f(),D("div",null,[a(t(q),{bordered:"",onRegister:t(S)},{toolbar:n(()=>[a(u,{"pre-icon":"solar:check-read-line-duotone",type:"primary",disabled:R.value,onClick:k},{default:n(()=>[_(" 标记已读 ")]),_:1},8,["disabled"]),a(u,{"pre-icon":"solar:check-read-linear",type:"primary",onClick:M},{default:n(()=>[_(" 全部已读 ")]),_:1})]),bodyCell:n(({column:N,record:i})=>[N.key==="action"?(f(),U(t(L),{key:0,"stop-button-propagation":"",actions:[{icon:t(b).EDIT,label:"已读",color:"warning",ifShow:()=>!i.readStatus,onClick:x.bind(null,i)},{icon:t(b).LOG,label:t(m)("action.detail"),onClick:C.bind(null,i)}]},null,8,["actions"])):Y("",!0)]),_:1},8,["onRegister"]),a($,{onRegister:t(g)},null,8,["onRegister"])])}}});export{Xe as default};