import{g as l,c as u,s as d,_ as f}from"./NotifyModal.vue_vue_type_script_setup_true_lang-b5d9d5b8.js";import{d as _,c as h,o as i,h as g,n as m,w as y,j as k,k as t,I as b,l as C}from"./index-2b36f9e3.js";import{u as x}from"./index-ab29420a.js";import{_ as I}from"./BasicTable.vue_vue_type_script_setup_true_lang-ba4f6a37.js";import"./index-238a0b12.js";import{_ as w}from"./BasicForm.vue_vue_type_style_index_0_lang-da06c4a7.js";import{u as N}from"./useTable-f046c703.js";import"./index-23d73b40.js";import"./index-6d9cd4eb.js";import"./sortable.esm-f208c0d8.js";import"./useRender-e7048bde.js";import"./index-ad076651.js";import"./dict-d92cc9bc.js";import"./index-a69dfc8a.js";import"./responsiveObserve-8393ce72.js";import"./get-8e17be71.js";import"./index-e3989e7b.js";import"./useWindowSizeFn-99db3b88.js";import"./FullscreenOutlined-d4fb962a.js";import"./onMountedOrActivated-957e2f10.js";import"./useFlexGapSupport-de861fb2.js";import"./index-813f9aca.js";import"./index-dc3889e5.js";import"./RedoOutlined-d283afe8.js";import"./useForm-2cb760a4.js";import"./index-4842c089.js";import"./Col-e08843cf.js";import"./_baseIteratee-d1ad35b8.js";import"./debounce-a0a6c5a0.js";import"./index-cc8e0e79.js";import"./uniqBy-78d0ee5d.js";import"./index-0edc0e06.js";import"./index-4ab0c49d.js";import"./DownOutlined-be102a13.js";import"./isMobile-174ba801.js";import"./index-b3ecbe2f.js";import"./List-d7615df5.js";import"./CheckOutlined-e60d17d3.js";import"./index-3486f0c2.js";import"./eagerComputed-3545aecd.js";import"./index-6a82c206.js";import"./fromPairs-e099444b.js";import"./index-824a8a54.js";import"./DoubleRightOutlined-d560994c.js";import"./useBreakpoint-99376be7.js";import"./zh_CN-1ca40490.js";import"./tree-08cb0ff7.js";import"./scrollTo-b6f1acc0.js";import"./operationUnit-d5166b83.js";import"./index-7ab89d42.js";import"./index-ff730b8b.js";import"./PlusOutlined-2d004a4a.js";import"./index-3483b766.js";import"./copyTextToClipboard-4db710ed.js";const Bt=_({name:"PayNotify",__name:"index",setup(R){const{t:o}=h(),[e,{openModal:p}]=x(),[a]=N({title:"通知列表",api:l,columns:u,formConfig:{labelWidth:120,schemas:d},useSearchForm:!0,showTableSetting:!0,actionColumn:{width:140,title:o("common.action"),dataIndex:"action",fixed:"right"}});async function n(r){p(!0,{record:r,isUpdate:!0})}return(r,T)=>(i(),g("div",null,[m(t(I),{onRegister:t(a)},{bodyCell:y(({column:s,record:c})=>[s.key==="action"?(i(),k(t(w),{key:0,actions:[{icon:t(b).VIEW,label:t(o)("action.detail"),auth:"pay:order:query",onClick:n.bind(null,c)}]},null,8,["actions"])):C("",!0)]),_:1},8,["onRegister"]),m(f,{onRegister:t(e)},null,8,["onRegister"])]))}});export{Bt as default};
