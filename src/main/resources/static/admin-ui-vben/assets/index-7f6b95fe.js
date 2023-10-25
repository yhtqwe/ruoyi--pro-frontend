import{c as v,s as w,_ as M}from"./TagModal.vue_vue_type_script_setup_true_lang-ffa74613.js";import{d as I,c as R,v as F,G as V,o as i,h as $,n as g,w as r,D as _,j as n,k as t,I as a,x as h,t as y,l as B,y as N}from"./index-84bac5b8.js";import{u as U}from"./index-173d5d49.js";import{_ as j}from"./BasicTable.vue_vue_type_script_setup_true_lang-6c55bad0.js";import"./index-1beb4355.js";import{_ as A}from"./BasicForm.vue_vue_type_style_index_0_lang-f40c69bb.js";import{u as G}from"./useTable-2040b40a.js";import"./index-f29e621a.js";import{a as L,s as O,d as P}from"./index-3e37ab29.js";import"./index-aab9a46b.js";import"./sortable.esm-f208c0d8.js";import"./useRender-70a86cea.js";import"./index-831ed906.js";import"./useForm-9e126d4c.js";import"./index-09793f90.js";import"./Col-5c991ea4.js";import"./responsiveObserve-85850b10.js";import"./useFlexGapSupport-7bccf8d7.js";import"./_baseIteratee-de9a7973.js";import"./get-acbb0bab.js";import"./debounce-51e23acd.js";import"./index-723fd4c3.js";import"./index-5d2832e9.js";import"./uniqBy-966a1ca5.js";import"./index-9785aad3.js";import"./useWindowSizeFn-edf59fbd.js";import"./FullscreenOutlined-2d9cb280.js";import"./onMountedOrActivated-78e848f5.js";import"./index-b9509bee.js";import"./index-2dea95e5.js";import"./RedoOutlined-c04dd14b.js";import"./index-d2cf1d1c.js";import"./DownOutlined-a8fe79f2.js";import"./isMobile-174ba801.js";import"./index-d4092c42.js";import"./List-9fcea96e.js";import"./CheckOutlined-c0652f6b.js";import"./index-9bf8eb9e.js";import"./eagerComputed-aaf02481.js";import"./index-343834d4.js";import"./fromPairs-e099444b.js";import"./index-81d4b3c0.js";import"./DoubleRightOutlined-1bb4c7eb.js";import"./useBreakpoint-8b027837.js";import"./zh_CN-1ca40490.js";import"./tree-a6f36781.js";import"./scrollTo-b5e908bd.js";import"./operationUnit-d5166b83.js";import"./index-cc732a41.js";import"./dict-5c702769.js";import"./index-3e1b457d.js";import"./PlusOutlined-c3a73197.js";import"./index-7a2ca6fc.js";import"./copyTextToClipboard-cc995e2b.js";const qt=I({name:"MpTag",__name:"index",setup(W){const{t:e}=R(),{createConfirm:T,createMessage:m}=N(),[C,{openModal:s}]=U(),[b,{getForm:x,reload:c}]=G({title:"标签列表",api:L,columns:v,formConfig:{labelWidth:120,schemas:w},useSearchForm:!0,showTableSetting:!0,actionColumn:{width:140,title:e("common.action"),dataIndex:"action",fixed:"right"}});function k(){s(!0,{isUpdate:!1})}function D(o){s(!0,{record:o,isUpdate:!0})}async function E(){T({title:e("action.sync"),iconType:"warning",content:e("common.exportMessage"),async onOk(){await O(x().getFieldsValue().accountId),m.success(e("common.exportSuccessText"))}})}async function S(o){await P(o.id),m.success(e("common.delSuccessText")),c()}return(o,p)=>{const l=F("a-button"),u=V("auth");return i(),$("div",null,[g(t(j),{onRegister:t(b)},{toolbar:r(()=>[_((i(),n(l,{type:"primary","pre-icon":t(a).ADD,onClick:k},{default:r(()=>[h(y(t(e)("action.create")),1)]),_:1},8,["pre-icon"])),[[u,["mp:tag:create"]]]),_((i(),n(l,{"pre-icon":t(a).RESET,onClick:E},{default:r(()=>[h(y(t(e)("action.sync")),1)]),_:1},8,["pre-icon"])),[[u,["mp:tag:sync"]]])]),bodyCell:r(({column:d,record:f})=>[d.key==="action"?(i(),n(t(A),{key:0,actions:[{icon:t(a).EDIT,label:t(e)("action.edit"),auth:"mp:tag:update",onClick:D.bind(null,f)},{icon:t(a).DELETE,danger:!0,label:t(e)("action.delete"),auth:"mp:tag:delete",popConfirm:{title:t(e)("common.delMessage"),placement:"left",confirm:S.bind(null,f)}}]},null,8,["actions"])):B("",!0)]),_:1},8,["onRegister"]),g(M,{onRegister:t(C),onSuccess:p[0]||(p[0]=d=>t(c)())},null,8,["onRegister"])])}}});export{qt as default};
