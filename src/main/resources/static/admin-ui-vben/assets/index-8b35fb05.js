import{c as x,_ as S}from"./DataSourceConfigModal.vue_vue_type_script_setup_true_lang-b215d509.js";import{d as w,c as k,v,G as y,o as r,h as E,n as l,w as a,D as I,j as u,k as t,I as n,x as T,t as M,l as R,y as $}from"./index-2b36f9e3.js";import{u as B}from"./index-ab29420a.js";import{_ as N}from"./BasicTable.vue_vue_type_script_setup_true_lang-ba4f6a37.js";import"./index-238a0b12.js";import{_ as V}from"./BasicForm.vue_vue_type_style_index_0_lang-da06c4a7.js";import{u as L}from"./useTable-f046c703.js";import"./index-23d73b40.js";import{g as U,d as j}from"./index-1c10723d.js";import"./sortable.esm-f208c0d8.js";import"./useRender-e7048bde.js";import"./index-ad076651.js";import"./useForm-2cb760a4.js";import"./index-4842c089.js";import"./Col-e08843cf.js";import"./responsiveObserve-8393ce72.js";import"./useFlexGapSupport-de861fb2.js";import"./_baseIteratee-d1ad35b8.js";import"./get-8e17be71.js";import"./debounce-a0a6c5a0.js";import"./index-cc8e0e79.js";import"./index-e3989e7b.js";import"./uniqBy-78d0ee5d.js";import"./index-0edc0e06.js";import"./useWindowSizeFn-99db3b88.js";import"./FullscreenOutlined-d4fb962a.js";import"./onMountedOrActivated-957e2f10.js";import"./index-813f9aca.js";import"./index-dc3889e5.js";import"./RedoOutlined-d283afe8.js";import"./index-4ab0c49d.js";import"./DownOutlined-be102a13.js";import"./isMobile-174ba801.js";import"./index-b3ecbe2f.js";import"./List-d7615df5.js";import"./CheckOutlined-e60d17d3.js";import"./index-3486f0c2.js";import"./eagerComputed-3545aecd.js";import"./index-6a82c206.js";import"./fromPairs-e099444b.js";import"./index-824a8a54.js";import"./DoubleRightOutlined-d560994c.js";import"./useBreakpoint-99376be7.js";import"./zh_CN-1ca40490.js";import"./tree-08cb0ff7.js";import"./scrollTo-b6f1acc0.js";import"./operationUnit-d5166b83.js";import"./index-7ab89d42.js";import"./dict-d92cc9bc.js";import"./index-ff730b8b.js";import"./PlusOutlined-2d004a4a.js";import"./index-3483b766.js";import"./copyTextToClipboard-4db710ed.js";const At=w({name:"InfraDataSourceConfig",__name:"index",setup(A){const{t:o}=k(),{createMessage:d}=$(),[f,{openModal:m}]=B(),[g,{reload:s}]=L({title:"数据源列表",api:U,columns:x,pagination:!1,useSearchForm:!1,showTableSetting:!0,showIndexColumn:!1,actionColumn:{width:140,title:o("common.action"),dataIndex:"action",fixed:"right"}});function _(){m(!0,{isUpdate:!1})}function h(e){m(!0,{record:e,isUpdate:!0})}async function C(e){await j(e.id),d.success(o("common.delSuccessText")),s()}return(e,p)=>{const D=v("a-button"),b=y("auth");return r(),E("div",null,[l(t(N),{onRegister:t(g)},{toolbar:a(()=>[I((r(),u(D,{type:"primary","pre-icon":t(n).ADD,onClick:_},{default:a(()=>[T(M(t(o)("action.create")),1)]),_:1},8,["pre-icon"])),[[b,["infra:data-source-config:create"]]])]),bodyCell:a(({column:c,record:i})=>[c.key==="action"?(r(),u(t(V),{key:0,actions:[{icon:t(n).EDIT,label:t(o)("action.edit"),ifShow:i.id!==0,auth:"infra:data-source-config:update",onClick:h.bind(null,i)},{icon:t(n).DELETE,danger:!0,label:t(o)("action.delete"),ifShow:i.id!==0,auth:"infra:data-source-config:delete",popConfirm:{title:t(o)("common.delMessage"),placement:"left",confirm:C.bind(null,i)}}]},null,8,["actions"])):R("",!0)]),_:1},8,["onRegister"]),l(S,{onRegister:t(f),onSuccess:p[0]||(p[0]=c=>t(s)())},null,8,["onRegister"])])}}});export{At as default};