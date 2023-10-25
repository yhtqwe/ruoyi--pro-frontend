import{g as v,c as x,s as w,_ as S,a as T}from"./MpUserModal.vue_vue_type_script_setup_true_lang-895a3d8f.js";import{d as E,c as I,v as M,G as D,o as e,h as R,n,w as i,D as F,j as s,k as t,I as p,x as V,t as $,l as B,y as N}from"./index-2b36f9e3.js";import{u as U}from"./index-ab29420a.js";import{_ as j}from"./BasicTable.vue_vue_type_script_setup_true_lang-ba4f6a37.js";import"./index-238a0b12.js";import{_ as G}from"./BasicForm.vue_vue_type_style_index_0_lang-da06c4a7.js";import{u as O}from"./useTable-f046c703.js";import"./index-23d73b40.js";import"./index-cd8c5680.js";import"./index-55c4b3e2.js";import"./sortable.esm-f208c0d8.js";import"./useRender-e7048bde.js";import"./index-ad076651.js";import"./useForm-2cb760a4.js";import"./index-4842c089.js";import"./Col-e08843cf.js";import"./responsiveObserve-8393ce72.js";import"./useFlexGapSupport-de861fb2.js";import"./_baseIteratee-d1ad35b8.js";import"./get-8e17be71.js";import"./debounce-a0a6c5a0.js";import"./index-cc8e0e79.js";import"./index-e3989e7b.js";import"./uniqBy-78d0ee5d.js";import"./index-0edc0e06.js";import"./useWindowSizeFn-99db3b88.js";import"./FullscreenOutlined-d4fb962a.js";import"./onMountedOrActivated-957e2f10.js";import"./index-813f9aca.js";import"./index-dc3889e5.js";import"./RedoOutlined-d283afe8.js";import"./index-4ab0c49d.js";import"./DownOutlined-be102a13.js";import"./isMobile-174ba801.js";import"./index-b3ecbe2f.js";import"./List-d7615df5.js";import"./CheckOutlined-e60d17d3.js";import"./index-3486f0c2.js";import"./eagerComputed-3545aecd.js";import"./index-6a82c206.js";import"./fromPairs-e099444b.js";import"./index-824a8a54.js";import"./DoubleRightOutlined-d560994c.js";import"./useBreakpoint-99376be7.js";import"./zh_CN-1ca40490.js";import"./tree-08cb0ff7.js";import"./scrollTo-b6f1acc0.js";import"./operationUnit-d5166b83.js";import"./index-7ab89d42.js";import"./dict-d92cc9bc.js";import"./index-ff730b8b.js";import"./PlusOutlined-2d004a4a.js";import"./index-3483b766.js";import"./copyTextToClipboard-4db710ed.js";const Wt=E({name:"MpUser",__name:"index",setup(P){const{t:o}=I(),{createConfirm:c,createMessage:l}=N(),[u,{openModal:d}]=U(),[_,{getForm:f,reload:g}]=O({title:"公众号账号列表",api:v,columns:x,formConfig:{labelWidth:120,schemas:w},useSearchForm:!0,showTableSetting:!0,actionColumn:{width:140,title:o("common.action"),dataIndex:"action",fixed:"right"}});async function h(){c({title:o("action.sync"),iconType:"warning",content:"是否确认同步粉丝?",async onOk(){await T(f().getFieldsValue().accountId),l.success("开始从微信公众号同步粉丝信息，同步需要一段时间，建议稍后再查询")}})}function y(r){d(!0,{record:r})}return(r,a)=>{const b=M("a-button"),C=D("auth");return e(),R("div",null,[n(t(j),{onRegister:t(_)},{toolbar:i(()=>[F((e(),s(b,{type:"primary","pre-icon":t(p).RESET,onClick:h},{default:i(()=>[V($(t(o)("action.sync")),1)]),_:1},8,["pre-icon"])),[[C,["mp:user:sync"]]])]),bodyCell:i(({column:m,record:k})=>[m.key==="action"?(e(),s(t(G),{key:0,actions:[{icon:t(p).EDIT,label:t(o)("action.edit"),auth:"mp:user:update",onClick:y.bind(null,k)}]},null,8,["actions"])):B("",!0)]),_:1},8,["onRegister"]),n(S,{onRegister:t(u),onSuccess:a[0]||(a[0]=m=>t(g)())},null,8,["onRegister"])])}}});export{Wt as default};
