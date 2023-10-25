import{g as x,c as D,s as I,_ as v,r as T}from"./DemoModal.vue_vue_type_script_setup_true_lang-bc81ff50.js";import{d as $,H as R,c as E,v as S,G as M,o as i,h as O,n as c,w as r,D as B,j as l,k as o,I as n,x as N,l as P,y as V}from"./index-84bac5b8.js";import{u as A}from"./index-173d5d49.js";import{_ as F}from"./BasicTable.vue_vue_type_script_setup_true_lang-6c55bad0.js";import"./index-1beb4355.js";import{_ as G}from"./BasicForm.vue_vue_type_style_index_0_lang-f40c69bb.js";import{u as U}from"./useTable-2040b40a.js";import"./index-f29e621a.js";import"./sortable.esm-f208c0d8.js";import"./useRender-70a86cea.js";import"./index-831ed906.js";import"./dict-5c702769.js";import"./useForm-9e126d4c.js";import"./index-09793f90.js";import"./Col-5c991ea4.js";import"./responsiveObserve-85850b10.js";import"./useFlexGapSupport-7bccf8d7.js";import"./_baseIteratee-de9a7973.js";import"./get-acbb0bab.js";import"./debounce-51e23acd.js";import"./index-723fd4c3.js";import"./index-5d2832e9.js";import"./uniqBy-966a1ca5.js";import"./index-9785aad3.js";import"./useWindowSizeFn-edf59fbd.js";import"./FullscreenOutlined-2d9cb280.js";import"./onMountedOrActivated-78e848f5.js";import"./index-b9509bee.js";import"./index-2dea95e5.js";import"./RedoOutlined-c04dd14b.js";import"./index-d2cf1d1c.js";import"./DownOutlined-a8fe79f2.js";import"./isMobile-174ba801.js";import"./index-d4092c42.js";import"./List-9fcea96e.js";import"./CheckOutlined-c0652f6b.js";import"./index-9bf8eb9e.js";import"./eagerComputed-aaf02481.js";import"./index-343834d4.js";import"./fromPairs-e099444b.js";import"./index-81d4b3c0.js";import"./DoubleRightOutlined-1bb4c7eb.js";import"./useBreakpoint-8b027837.js";import"./zh_CN-1ca40490.js";import"./tree-a6f36781.js";import"./scrollTo-b5e908bd.js";import"./operationUnit-d5166b83.js";import"./index-cc732a41.js";import"./index-3e1b457d.js";import"./PlusOutlined-c3a73197.js";import"./index-7a2ca6fc.js";import"./copyTextToClipboard-cc995e2b.js";const jo=$({name:"PayDemo",__name:"index",setup(j){const u=R(),{t:a}=E(),{createConfirm:d,createMessage:f}=V(),[_,{openModal:h}]=A(),[y,{reload:m}]=U({title:"接入示例列表",api:x,columns:D,formConfig:{labelWidth:120,schemas:I},useSearchForm:!0,showTableSetting:!0,showIndexColumn:!1,actionColumn:{width:180,title:a("common.action"),dataIndex:"action",fixed:"right"}});function g(){h(!0)}function C(t){u(`/pay/cashier?id=${t.payOrderId}&&returnUrl=${encodeURIComponent(`/pay/demo-order?id=${t.id}`)}`)}async function b(t){d({title:"退款",iconType:"warning",content:`是否确认退款编号为"${t.id}"的示例订单?`,async onOk(){await T(t.id),f.success(a("common.successText")),m()}})}return(t,s)=>{const k=S("a-button"),w=M("auth");return i(),O("div",null,[c(o(F),{onRegister:o(y)},{toolbar:r(()=>[B((i(),l(k,{type:"primary","pre-icon":o(n).ADD,onClick:g},{default:r(()=>[N(" 发起订单 ")]),_:1},8,["pre-icon"])),[[w,["pay:app:create"]]])]),bodyCell:r(({column:p,record:e})=>[p.key==="action"?(i(),l(o(G),{key:0,actions:[{icon:o(n).EDIT,label:"前往支付",ifShow:()=>!e.payed,onClick:C.bind(null,e)},{icon:o(n).DELETE,danger:!0,label:"发起退款",ifShow:()=>e.payed&&!e.payRefundId,onClick:b.bind(null,e)}]},null,8,["actions"])):P("",!0)]),_:1},8,["onRegister"]),c(v,{onRegister:o(_),onSuccess:s[0]||(s[0]=p=>o(m)())},null,8,["onRegister"])])}}});export{jo as default};
