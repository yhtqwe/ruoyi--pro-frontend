import{L as s,d as f,c as x,v as _,G as h,o as i,h as I,n as T,w as n,D as w,j as b,x as y,t as S,k as o,y as L}from"./index-84bac5b8.js";import"./index-1beb4355.js";import"./BasicForm.vue_vue_type_style_index_0_lang-f40c69bb.js";import"./index-173d5d49.js";import"./sortable.esm-f208c0d8.js";import{u as r}from"./useRender-70a86cea.js";import{D as a}from"./dict-5c702769.js";import{_ as k}from"./BasicTable.vue_vue_type_script_setup_true_lang-6c55bad0.js";import{u as v}from"./useTable-2040b40a.js";import"./index-f29e621a.js";import"./index-b9509bee.js";import"./index-2dea95e5.js";import"./index-d2cf1d1c.js";import"./DownOutlined-a8fe79f2.js";import"./isMobile-174ba801.js";import"./index-d4092c42.js";import"./List-9fcea96e.js";import"./CheckOutlined-c0652f6b.js";import"./index-9bf8eb9e.js";import"./eagerComputed-aaf02481.js";import"./index-343834d4.js";import"./fromPairs-e099444b.js";import"./index-81d4b3c0.js";import"./DoubleRightOutlined-1bb4c7eb.js";import"./useBreakpoint-8b027837.js";import"./responsiveObserve-85850b10.js";import"./zh_CN-1ca40490.js";import"./tree-a6f36781.js";import"./debounce-51e23acd.js";import"./scrollTo-b5e908bd.js";import"./operationUnit-d5166b83.js";import"./index-cc732a41.js";import"./index-831ed906.js";import"./index-3e1b457d.js";import"./get-acbb0bab.js";import"./index-09793f90.js";import"./Col-5c991ea4.js";import"./useFlexGapSupport-7bccf8d7.js";import"./_baseIteratee-de9a7973.js";import"./onMountedOrActivated-78e848f5.js";import"./PlusOutlined-c3a73197.js";import"./index-5d2832e9.js";import"./index-7a2ca6fc.js";import"./copyTextToClipboard-cc995e2b.js";import"./index-723fd4c3.js";import"./useWindowSizeFn-edf59fbd.js";import"./FullscreenOutlined-2d9cb280.js";import"./RedoOutlined-c04dd14b.js";import"./useForm-9e126d4c.js";import"./uniqBy-966a1ca5.js";import"./index-9785aad3.js";const D=[{title:"访问编号",dataIndex:"id",width:100},{title:"日志类型",dataIndex:"logType",width:120,customRender:({text:t})=>r.renderDict(t,a.SYSTEM_LOGIN_TYPE)},{title:"用户名称",dataIndex:"username",width:120},{title:"登录地址",dataIndex:"userIp",width:120},{title:"userAgent",dataIndex:"userAgent",width:400},{title:"结果",dataIndex:"result",width:100,customRender:({text:t})=>r.renderDict(t,a.SYSTEM_LOGIN_RESULT)},{title:"登录日期",dataIndex:"createTime",width:180,customRender:({text:t})=>r.renderDate(t)}],P=[{label:"登录地址",field:"userIp",component:"Input",colProps:{span:8}},{label:"用户名称",field:"username",component:"Input",colProps:{span:8}},{label:"结果",field:"result",component:"Select",componentProps:{options:[{label:"成功",value:"true",key:"true"},{label:"失败",value:"false",key:"false"}]},colProps:{span:8}},{label:"登录时间",field:"createTime",component:"RangePicker",colProps:{span:8}}];function C(t){return s.get({url:"/system/login-log/page",params:t})}function R(t){return s.download({url:"/system/login-log/export",params:t},"登录日志.xls")}const Rt=f({name:"SystemLoginLog",__name:"index",setup(t){const{t:e}=x(),{createConfirm:m,createMessage:p}=L(),[l,{getForm:c}]=v({title:"登录日志列表",api:C,columns:D,formConfig:{labelWidth:120,schemas:P},useSearchForm:!0,showTableSetting:!0,showIndexColumn:!1});async function u(){m({title:e("common.exportTitle"),iconType:"warning",content:e("common.exportMessage"),async onOk(){await R(c().getFieldsValue()),p.success(e("common.exportSuccessText"))}})}return(E,M)=>{const d=_("a-button"),g=h("auth");return i(),I("div",null,[T(o(k),{onRegister:o(l)},{toolbar:n(()=>[w((i(),b(d,{onClick:u},{default:n(()=>[y(S(o(e)("action.export")),1)]),_:1})),[[g,["system:login-log:export"]]])]),_:1},8,["onRegister"])])}}});export{Rt as default};
