import{c as C,s as x,_ as T}from"./TenantPackageModal.vue_vue_type_script_setup_true_lang-d7c19f9c.js";import{d as D,c as v,v as w,G as E,o as i,h as S,n as l,w as r,D as I,j as u,k as t,I as a,x as M,t as P,l as R,y as $}from"./index-84bac5b8.js";import{u as B}from"./index-173d5d49.js";import{_ as N}from"./BasicTable.vue_vue_type_script_setup_true_lang-6c55bad0.js";import"./index-1beb4355.js";import{_ as V}from"./BasicForm.vue_vue_type_style_index_0_lang-f40c69bb.js";import{u as F}from"./useTable-2040b40a.js";import"./index-f29e621a.js";import{b as U,d as j}from"./index-2f314944.js";import"./sortable.esm-f208c0d8.js";import"./useRender-70a86cea.js";import"./index-831ed906.js";import"./dict-5c702769.js";import"./useForm-9e126d4c.js";import"./index-09793f90.js";import"./Col-5c991ea4.js";import"./responsiveObserve-85850b10.js";import"./useFlexGapSupport-7bccf8d7.js";import"./_baseIteratee-de9a7973.js";import"./get-acbb0bab.js";import"./debounce-51e23acd.js";import"./index-723fd4c3.js";import"./index-5d2832e9.js";import"./uniqBy-966a1ca5.js";import"./index-9785aad3.js";import"./index-5d8c1269.js";import"./fromPairs-e099444b.js";import"./tree-a6f36781.js";import"./List-9fcea96e.js";import"./eagerComputed-aaf02481.js";import"./index-2dea95e5.js";import"./index-efb38e20.js";import"./without-2c1646bf.js";import"./useWindowSizeFn-edf59fbd.js";import"./FullscreenOutlined-2d9cb280.js";import"./onMountedOrActivated-78e848f5.js";import"./index-b9509bee.js";import"./RedoOutlined-c04dd14b.js";import"./index-d2cf1d1c.js";import"./DownOutlined-a8fe79f2.js";import"./isMobile-174ba801.js";import"./index-d4092c42.js";import"./CheckOutlined-c0652f6b.js";import"./index-9bf8eb9e.js";import"./index-343834d4.js";import"./index-81d4b3c0.js";import"./DoubleRightOutlined-1bb4c7eb.js";import"./useBreakpoint-8b027837.js";import"./zh_CN-1ca40490.js";import"./scrollTo-b5e908bd.js";import"./operationUnit-d5166b83.js";import"./index-cc732a41.js";import"./index-3e1b457d.js";import"./PlusOutlined-c3a73197.js";import"./index-7a2ca6fc.js";import"./copyTextToClipboard-cc995e2b.js";const Wt=D({name:"SystemTenantPackage",__name:"index",setup(A){const{t:e}=v(),{createMessage:d}=$(),[f,{openModal:n}]=B(),[g,{reload:m}]=F({title:"租户套餐列表",api:U,columns:C,formConfig:{labelWidth:120,schemas:x},useSearchForm:!0,showTableSetting:!0,showIndexColumn:!1,actionColumn:{width:140,title:e("common.action"),dataIndex:"action",fixed:"right"}});function _(){n(!0,{isUpdate:!1})}function h(o){n(!0,{record:o,isUpdate:!0})}async function k(o){await j(o.id),d.success(e("common.delSuccessText")),m()}return(o,s)=>{const b=w("a-button"),y=E("auth");return i(),S("div",null,[l(t(N),{onRegister:t(g)},{toolbar:r(()=>[I((i(),u(b,{type:"primary","pre-icon":t(a).ADD,onClick:_},{default:r(()=>[M(P(t(e)("action.create")),1)]),_:1},8,["pre-icon"])),[[y,["system:tenant-package:create"]]])]),bodyCell:r(({column:p,record:c})=>[p.key==="action"?(i(),u(t(V),{key:0,actions:[{icon:t(a).EDIT,label:t(e)("action.edit"),auth:"system:tenant-package:update",onClick:h.bind(null,c)},{icon:t(a).DELETE,danger:!0,label:t(e)("action.delete"),auth:"system:tenant-package:delete",popConfirm:{title:t(e)("common.delMessage"),placement:"left",confirm:k.bind(null,c)}}]},null,8,["actions"])):R("",!0)]),_:1},8,["onRegister"]),l(T,{onRegister:t(f),onSuccess:s[0]||(s[0]=p=>t(m)())},null,8,["onRegister"])])}}});export{Wt as default};