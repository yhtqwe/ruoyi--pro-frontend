import{g as x,c as D,s as k,_ as v,d as w}from"./ClientModal.vue_vue_type_script_setup_true_lang-94934faf.js";import{d as E,c as S,v as T,G as I,o as i,h as M,n as l,w as r,D as R,j as u,k as t,I as a,x as $,t as A,l as B,y as N}from"./index-2b36f9e3.js";import{u as V}from"./index-ab29420a.js";import{_ as F}from"./BasicTable.vue_vue_type_script_setup_true_lang-ba4f6a37.js";import"./index-238a0b12.js";import{_ as O}from"./BasicForm.vue_vue_type_style_index_0_lang-da06c4a7.js";import{u as U}from"./useTable-f046c703.js";import"./index-23d73b40.js";import"./sortable.esm-f208c0d8.js";import"./useRender-e7048bde.js";import"./index-ad076651.js";import"./dict-d92cc9bc.js";import"./useForm-2cb760a4.js";import"./index-4842c089.js";import"./Col-e08843cf.js";import"./responsiveObserve-8393ce72.js";import"./useFlexGapSupport-de861fb2.js";import"./_baseIteratee-d1ad35b8.js";import"./get-8e17be71.js";import"./debounce-a0a6c5a0.js";import"./index-cc8e0e79.js";import"./index-e3989e7b.js";import"./uniqBy-78d0ee5d.js";import"./index-0edc0e06.js";import"./useWindowSizeFn-99db3b88.js";import"./FullscreenOutlined-d4fb962a.js";import"./onMountedOrActivated-957e2f10.js";import"./index-813f9aca.js";import"./index-dc3889e5.js";import"./RedoOutlined-d283afe8.js";import"./index-4ab0c49d.js";import"./DownOutlined-be102a13.js";import"./isMobile-174ba801.js";import"./index-b3ecbe2f.js";import"./List-d7615df5.js";import"./CheckOutlined-e60d17d3.js";import"./index-3486f0c2.js";import"./eagerComputed-3545aecd.js";import"./index-6a82c206.js";import"./fromPairs-e099444b.js";import"./index-824a8a54.js";import"./DoubleRightOutlined-d560994c.js";import"./useBreakpoint-99376be7.js";import"./zh_CN-1ca40490.js";import"./tree-08cb0ff7.js";import"./scrollTo-b6f1acc0.js";import"./operationUnit-d5166b83.js";import"./index-7ab89d42.js";import"./index-ff730b8b.js";import"./PlusOutlined-2d004a4a.js";import"./index-3483b766.js";import"./copyTextToClipboard-4db710ed.js";const Ut=E({name:"SystemClient",__name:"index",setup(j){const{t:e}=S(),{createMessage:d}=N(),[f,{openModal:m}]=V(),[h,{reload:n}]=U({title:"应用列表",api:x,columns:D,formConfig:{labelWidth:120,schemas:k},useSearchForm:!0,showTableSetting:!0,showIndexColumn:!1,actionColumn:{width:140,title:e("common.action"),dataIndex:"action",fixed:"right"}});function _(){m(!0,{isUpdate:!1})}function g(o){m(!0,{record:o,isUpdate:!0})}async function C(o){await w(o.id),d.success(e("common.delSuccessText")),n()}return(o,s)=>{const b=T("a-button"),y=I("auth");return i(),M("div",null,[l(t(F),{onRegister:t(h)},{toolbar:r(()=>[R((i(),u(b,{type:"primary","pre-icon":t(a).ADD,onClick:_},{default:r(()=>[$(A(t(e)("action.create")),1)]),_:1},8,["pre-icon"])),[[y,["system:oauth2-client:create"]]])]),bodyCell:r(({column:p,record:c})=>[p.key==="action"?(i(),u(t(O),{key:0,actions:[{icon:t(a).EDIT,label:t(e)("action.edit"),auth:"system:oauth2-client:update",onClick:g.bind(null,c)},{icon:t(a).DELETE,danger:!0,label:t(e)("action.delete"),auth:"system:oauth2-client:delete",popConfirm:{title:t(e)("common.delMessage"),placement:"left",confirm:C.bind(null,c)}}]},null,8,["actions"])):B("",!0)]),_:1},8,["onRegister"]),l(v,{onRegister:t(f),onSuccess:s[0]||(s[0]=p=>t(n)())},null,8,["onRegister"])])}}});export{Ut as default};
