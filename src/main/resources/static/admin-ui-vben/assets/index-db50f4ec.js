import{b as p}from"./index-28027aeb.js";import{L as c,d as h,c as g,v as x,G as I,o as s,h as E,n as w,w as a,D as b,j as P,k as i,I as R,x as y,t as D,y as M}from"./index-2b36f9e3.js";import"./index-238a0b12.js";import"./BasicForm.vue_vue_type_style_index_0_lang-da06c4a7.js";import"./index-ab29420a.js";import"./sortable.esm-f208c0d8.js";import{u as r}from"./useRender-e7048bde.js";import{D as o,g as m}from"./dict-d92cc9bc.js";import{_ as C}from"./BasicTable.vue_vue_type_script_setup_true_lang-ba4f6a37.js";import{u as v}from"./useTable-f046c703.js";import"./index-23d73b40.js";import"./index-813f9aca.js";import"./index-dc3889e5.js";import"./index-4ab0c49d.js";import"./DownOutlined-be102a13.js";import"./isMobile-174ba801.js";import"./index-b3ecbe2f.js";import"./List-d7615df5.js";import"./CheckOutlined-e60d17d3.js";import"./index-3486f0c2.js";import"./eagerComputed-3545aecd.js";import"./index-6a82c206.js";import"./fromPairs-e099444b.js";import"./index-824a8a54.js";import"./DoubleRightOutlined-d560994c.js";import"./useBreakpoint-99376be7.js";import"./responsiveObserve-8393ce72.js";import"./zh_CN-1ca40490.js";import"./tree-08cb0ff7.js";import"./debounce-a0a6c5a0.js";import"./scrollTo-b6f1acc0.js";import"./operationUnit-d5166b83.js";import"./index-7ab89d42.js";import"./index-ad076651.js";import"./index-ff730b8b.js";import"./get-8e17be71.js";import"./index-4842c089.js";import"./Col-e08843cf.js";import"./useFlexGapSupport-de861fb2.js";import"./_baseIteratee-d1ad35b8.js";import"./onMountedOrActivated-957e2f10.js";import"./PlusOutlined-2d004a4a.js";import"./index-e3989e7b.js";import"./index-3483b766.js";import"./copyTextToClipboard-4db710ed.js";import"./index-cc8e0e79.js";import"./useWindowSizeFn-99db3b88.js";import"./FullscreenOutlined-d4fb962a.js";import"./RedoOutlined-d283afe8.js";import"./useForm-2cb760a4.js";import"./uniqBy-78d0ee5d.js";import"./index-0edc0e06.js";let l=[];async function k(){l=await p()}await k();const Y=[{title:"日志编号",dataIndex:"id",width:100},{title:"创建时间",dataIndex:"createTime",width:180,customRender:({text:e})=>r.renderDate(e)},{title:"手机号",dataIndex:"mobile",width:180,customRender:({text:e,record:t})=>t.userType&&t.userId?r.renderDict(t.userType,o.USER_TYPE):e},{title:"短信内容",dataIndex:"templateContent",width:300},{title:"发送状态",dataIndex:"sendStatus",width:180,customRender:({text:e})=>r.renderDict(e,o.SYSTEM_SMS_SEND_STATUS)},{title:"接收状态",dataIndex:"receiveStatus",width:180,customRender:({text:e})=>r.renderDict(e,o.SYSTEM_SMS_RECEIVE_STATUS)},{title:"短信渠道",dataIndex:"channelCode",width:180,customRender:({text:e,record:t})=>{if(!e)return"未设置";for(const n of l)if(t.channelId===n.id)return n.signature;return`找不到签名：${t.channelId}`}},{title:"模板编号",dataIndex:"templateId",width:120},{title:"短信类型",dataIndex:"templateType",width:180,customRender:({text:e})=>r.renderDict(e,o.SYSTEM_SMS_TEMPLATE_TYPE)}],A=[{label:"手机号",field:"mobile",component:"Input",colProps:{span:8}},{label:"短信渠道",field:"channelId",component:"ApiSelect",componentProps:{api:p,fieldNames:{label:"signature",key:"id",value:"id"}},colProps:{span:8}},{label:"模板编号",field:"templateId",component:"Input",colProps:{span:8}},{label:"发送状态",field:"sendStatus",component:"Select",componentProps:{options:m(o.SYSTEM_SMS_SEND_STATUS)},colProps:{span:8}},{label:"发送时间",field:"sendTime",component:"RangePicker",colProps:{span:8}},{label:"接收状态",field:"receiveStatus",component:"Select",componentProps:{options:m(o.SYSTEM_SMS_RECEIVE_STATUS)},colProps:{span:8}},{label:"接收时间",field:"receiveTime",component:"RangePicker",colProps:{span:8}}];function L(e){return c.get({url:"/system/sms-log/page",params:e})}function N(e){return c.download({url:"/system/sms-log/export",params:e},"短信日志.xls")}const Ue=h({name:"SystemSmsLog",__name:"index",setup(e){const{t}=g(),{createConfirm:n,createMessage:d}=M(),[u,{getForm:S}]=v({title:"短信日志列表",api:L,columns:Y,formConfig:{labelWidth:120,schemas:A},useSearchForm:!0,showTableSetting:!0,showIndexColumn:!1});async function _(){n({title:t("common.exportTitle"),iconType:"warning",content:t("common.exportMessage"),async onOk(){await N(S().getFieldsValue()),d.success(t("common.exportSuccessText"))}})}return(U,V)=>{const f=x("a-button"),T=I("auth");return s(),E("div",null,[w(i(C),{onRegister:i(u)},{toolbar:a(()=>[b((s(),P(f,{"pre-icon":i(R).EXPORT,onClick:_},{default:a(()=>[y(D(i(t)("action.export")),1)]),_:1},8,["pre-icon"])),[[T,["system:sms-log:export"]]])]),_:1},8,["onRegister"])])}}});export{Ue as default};
