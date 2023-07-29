import{a as D,c as v,s as S,H as M,o as r,h as R,n as _,w as i,D as g,j as n,k as e,I as a,v as h,t as x,l as F,x as V}from"./index-8b526734.js";import{u as $}from"./index-40f1f97e.js";import{g as B,c as N,s as O,_ as P,e as U,d as j}from"./ErrorCodeModal.vue_vue_type_script_setup_true_lang-cc979263.js";import{u as A,_ as H}from"./useTable-33ec4cfa.js";import"./index-ec19b8e7.js";import{_ as L}from"./BasicForm.vue_vue_type_style_index_0_lang-42e5fba8.js";import"./index-7aea77c8.js";import"./index-8629d074.js";import"./useWindowSizeFn-38cd0f6d.js";import"./FullscreenOutlined-8b988545.js";import"./useForm-f7dccb87.js";import"./index-03ea37ad.js";import"./index-3e87b811.js";import"./_baseIteratee-625e56a9.js";import"./get-11175361.js";import"./useSize-5af631ed.js";import"./index-c8168e27.js";import"./_stringToArray-c38191b3.js";import"./index-42686290.js";import"./uniqBy-f83999c6.js";import"./index-9e517d44.js";import"./index-d2d20fb4.js";import"./tree-e6981725.js";import"./eagerComputed-6290a54f.js";import"./sortable.esm-f208c0d8.js";import"./useRender-f65ba3eb.js";import"./dict-5cefafd8.js";import"./onMountedOrActivated-13e9417a.js";import"./RedoOutlined-fa24e892.js";import"./index-50e4b4b2.js";import"./index-8e6d9858.js";import"./index-081b541d.js";import"./fromPairs-e099444b.js";import"./scrollTo-67205127.js";import"./index-fb15648b.js";import"./index-47ca6c32.js";import"./useRefs-872c0ad6.js";import"./index-c8286d7f.js";const Se=D({name:"SystemErrorCode",__name:"index",setup(W){const{t}=v(),{createConfirm:C,createMessage:s}=V(),[y,{openModal:m}]=$(),[E,{getForm:b,reload:c}]=A({title:"错误码列表",api:B,columns:N,formConfig:{labelWidth:120,schemas:O},useSearchForm:!0,showTableSetting:!0,showIndexColumn:!1,actionColumn:{width:140,title:t("common.action"),dataIndex:"action",fixed:"right"}});function T(){m(!0,{isUpdate:!1})}function k(o){m(!0,{record:o,isUpdate:!0})}async function w(){C({title:t("common.exportTitle"),iconType:"warning",content:t("common.exportMessage"),async onOk(){await U(b().getFieldsValue()),s.success(t("common.exportSuccessText"))}})}async function I(o){await j(o.id),s.success(t("common.delSuccessText")),c()}return(o,p)=>{const l=S("a-button"),d=M("auth");return r(),R("div",null,[_(e(H),{onRegister:e(E)},{toolbar:i(()=>[g((r(),n(l,{type:"primary",preIcon:e(a).ADD,onClick:T},{default:i(()=>[h(x(e(t)("action.create")),1)]),_:1},8,["preIcon"])),[[d,["system:error-code:create"]]]),g((r(),n(l,{type:"warning",preIcon:e(a).EXPORT,onClick:w},{default:i(()=>[h(x(e(t)("action.export")),1)]),_:1},8,["preIcon"])),[[d,["system:error-code:export"]]])]),bodyCell:i(({column:u,record:f})=>[u.key==="action"?(r(),n(e(L),{key:0,actions:[{icon:e(a).EDIT,label:e(t)("action.edit"),auth:"system:error-code:update",onClick:k.bind(null,f)},{icon:e(a).DELETE,color:"error",label:e(t)("action.delete"),auth:"system:error-code:delete",popConfirm:{title:e(t)("common.delMessage"),placement:"left",confirm:I.bind(null,f)}}]},null,8,["actions"])):F("",!0)]),_:1},8,["onRegister"]),_(P,{onRegister:e(y),onSuccess:p[0]||(p[0]=u=>e(c)())},null,8,["onRegister"])])}}});export{Se as default};
