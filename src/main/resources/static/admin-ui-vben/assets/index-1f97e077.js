import{c as u,s as d,_ as f}from"./MailLogModal.vue_vue_type_script_setup_true_lang-dc83c4cd.js";import{L as _,d as g,c as h,o as m,h as C,n as e,w as b,j as k,k as o,I as x,l as I}from"./index-2b36f9e3.js";import{_ as w}from"./BasicTable.vue_vue_type_script_setup_true_lang-ba4f6a37.js";import"./index-238a0b12.js";import{_ as y}from"./BasicForm.vue_vue_type_style_index_0_lang-da06c4a7.js";import{u as S}from"./useTable-f046c703.js";import"./index-23d73b40.js";import{u as M}from"./index-ab29420a.js";import"./sortable.esm-f208c0d8.js";import"./useRender-e7048bde.js";import"./index-ad076651.js";import"./dict-d92cc9bc.js";import"./account-e37a37f3.js";import"./index-a69dfc8a.js";import"./responsiveObserve-8393ce72.js";import"./get-8e17be71.js";import"./useDescription-296e4c96.js";import"./useWindowSizeFn-99db3b88.js";import"./onMountedOrActivated-957e2f10.js";import"./useFlexGapSupport-de861fb2.js";import"./index-813f9aca.js";import"./index-dc3889e5.js";import"./index-e3989e7b.js";import"./RedoOutlined-d283afe8.js";import"./FullscreenOutlined-d4fb962a.js";import"./useForm-2cb760a4.js";import"./index-4842c089.js";import"./Col-e08843cf.js";import"./_baseIteratee-d1ad35b8.js";import"./debounce-a0a6c5a0.js";import"./index-cc8e0e79.js";import"./uniqBy-78d0ee5d.js";import"./index-0edc0e06.js";import"./index-4ab0c49d.js";import"./DownOutlined-be102a13.js";import"./isMobile-174ba801.js";import"./index-b3ecbe2f.js";import"./List-d7615df5.js";import"./CheckOutlined-e60d17d3.js";import"./index-3486f0c2.js";import"./eagerComputed-3545aecd.js";import"./index-6a82c206.js";import"./fromPairs-e099444b.js";import"./index-824a8a54.js";import"./DoubleRightOutlined-d560994c.js";import"./useBreakpoint-99376be7.js";import"./zh_CN-1ca40490.js";import"./tree-08cb0ff7.js";import"./scrollTo-b6f1acc0.js";import"./operationUnit-d5166b83.js";import"./index-7ab89d42.js";import"./index-ff730b8b.js";import"./PlusOutlined-2d004a4a.js";import"./index-3483b766.js";import"./copyTextToClipboard-4db710ed.js";function R(t){return _.get({url:"/system/mail-log/page",params:t})}const Vo=g({name:"SystemOperateLog",__name:"index",setup(t){const{t:r}=h(),[p]=S({title:"邮件日志列表",api:R,columns:u,formConfig:{labelWidth:120,schemas:d},useSearchForm:!0,showTableSetting:!0,showIndexColumn:!1,actionColumn:{width:140,title:r("common.action"),dataIndex:"action",fixed:"right"}}),[a,{openModal:n}]=M();function s(i){n(!0,i)}return(i,B)=>(m(),C("div",null,[e(o(w),{onRegister:o(p)},{bodyCell:b(({column:c,record:l})=>[c.key==="action"?(m(),k(o(y),{key:0,actions:[{icon:o(x).VIEW,label:o(r)("action.detail"),onClick:s.bind(null,l)}]},null,8,["actions"])):I("",!0)]),_:1},8,["onRegister"]),e(f,{onRegister:o(a)},null,8,["onRegister"])]))}});export{Vo as default};
