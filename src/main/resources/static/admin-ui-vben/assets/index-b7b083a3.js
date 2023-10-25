import{_ as R}from"./UserModal.vue_vue_type_script_setup_true_lang-a484ca9c.js";import{_ as w}from"./UserDetailDrawer.vue_vue_type_script_setup_true_lang-6b7f4b2c.js";import{_ as I}from"./UpdateLevelModal.vue_vue_type_script_setup_true_lang-b7ca7e99.js";import{e as v,h as x,s as D}from"./index-b777da16.js";import{d as M,c as $,o as s,h as E,n as r,w as U,j as S,k as t,I as p,l as T}from"./index-84bac5b8.js";import{u as l}from"./index-173d5d49.js";import{a as y}from"./index-eb572faa.js";import{_ as B}from"./BasicTable.vue_vue_type_script_setup_true_lang-6c55bad0.js";import"./index-1beb4355.js";import{_ as F}from"./BasicForm.vue_vue_type_style_index_0_lang-f40c69bb.js";import{u as L}from"./useTable-2040b40a.js";import"./index-f29e621a.js";import"./useForm-9e126d4c.js";import"./index-09793f90.js";import"./Col-5c991ea4.js";import"./responsiveObserve-85850b10.js";import"./useFlexGapSupport-7bccf8d7.js";import"./_baseIteratee-de9a7973.js";import"./get-acbb0bab.js";import"./debounce-51e23acd.js";import"./index-723fd4c3.js";import"./index-5d2832e9.js";import"./uniqBy-966a1ca5.js";import"./index-9785aad3.js";import"./index-d97670a9.js";import"./useDescription-e7cd1424.js";import"./index-e9ab1be6.js";import"./useBreakpoint-8b027837.js";import"./eagerComputed-aaf02481.js";import"./index-824b2e71.js";import"./index-ae82e726.js";import"./index-d5485fae.js";import"./index-182895e3.js";import"./sortable.esm-f208c0d8.js";import"./useRender-70a86cea.js";import"./index-831ed906.js";import"./dict-5c702769.js";import"./useWindowSizeFn-edf59fbd.js";import"./FullscreenOutlined-2d9cb280.js";import"./ArrowLeftOutlined-c95cdb4d.js";import"./index-28b63220.js";import"./onMountedOrActivated-78e848f5.js";import"./index-b9509bee.js";import"./index-2dea95e5.js";import"./RedoOutlined-c04dd14b.js";import"./index-d2cf1d1c.js";import"./DownOutlined-a8fe79f2.js";import"./isMobile-174ba801.js";import"./index-d4092c42.js";import"./List-9fcea96e.js";import"./CheckOutlined-c0652f6b.js";import"./index-9bf8eb9e.js";import"./index-343834d4.js";import"./fromPairs-e099444b.js";import"./index-81d4b3c0.js";import"./DoubleRightOutlined-1bb4c7eb.js";import"./zh_CN-1ca40490.js";import"./tree-a6f36781.js";import"./scrollTo-b5e908bd.js";import"./operationUnit-d5166b83.js";import"./index-cc732a41.js";import"./index-3e1b457d.js";import"./PlusOutlined-c3a73197.js";import"./index-7a2ca6fc.js";import"./copyTextToClipboard-cc995e2b.js";const Ot=M({name:"MemberUser",__name:"index",setup(V){const{t:i}=$(),[u,{openModal:c}]=l(),[d,{openDrawer:f}]=y(),[_,{openModal:g}]=l(),[b,{reload:a}]=L({title:"会员列表",api:v,columns:x,formConfig:{labelWidth:120,schemas:D},useSearchForm:!0,showTableSetting:!0,showIndexColumn:!1,actionColumn:{width:240,title:i("common.action"),dataIndex:"action",fixed:"right"}});function h(o){f(!0,o)}function C(o){c(!0,{record:o,isUpdate:!0})}function k(o){g(!0,{record:o,isUpdate:!0})}return(o,e)=>(s(),E("div",null,[r(t(B),{onRegister:t(b)},{bodyCell:U(({column:m,record:n})=>[m.key==="action"?(s(),S(t(F),{key:0,actions:[{icon:t(p).VIEW,label:t(i)("action.detail"),auth:"member:user:update",onClick:h.bind(null,n)},{icon:t(p).EDIT,label:t(i)("action.edit"),auth:"member:user:update",onClick:C.bind(null,n)},{icon:t(p).EDIT,label:"修改等级",auth:"member:user:update-level",onClick:k.bind(null,n)}]},null,8,["actions"])):T("",!0)]),_:1},8,["onRegister"]),r(R,{onRegister:t(u),onSuccess:e[0]||(e[0]=m=>t(a)())},null,8,["onRegister"]),r(I,{onRegister:t(_),onSuccess:e[1]||(e[1]=m=>t(a)())},null,8,["onRegister"]),r(w,{onRegister:t(d)},null,8,["onRegister"])]))}});export{Ot as default};