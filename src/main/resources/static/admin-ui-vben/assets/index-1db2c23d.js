import{u as E,_ as v}from"./useTable-33ec4cfa.js";import"./index-ec19b8e7.js";import{_ as S}from"./BasicForm.vue_vue_type_style_index_0_lang-42e5fba8.js";import{a as M,c as R,s as F,H as V,o as n,h as $,n as _,w as a,D as g,j as r,k as e,I as i,v as h,t as x,l as B,x as N}from"./index-8b526734.js";import"./index-7aea77c8.js";import"./index-8629d074.js";import{g as O,c as P,s as U,_ as j,e as A,d as H}from"./TenantModal.vue_vue_type_script_setup_true_lang-3117d7c8.js";import{u as L}from"./index-40f1f97e.js";import"./index-d2d20fb4.js";import"./tree-e6981725.js";import"./eagerComputed-6290a54f.js";import"./useForm-f7dccb87.js";import"./index-03ea37ad.js";import"./index-3e87b811.js";import"./_baseIteratee-625e56a9.js";import"./get-11175361.js";import"./useSize-5af631ed.js";import"./index-c8168e27.js";import"./_stringToArray-c38191b3.js";import"./index-42686290.js";import"./uniqBy-f83999c6.js";import"./index-9e517d44.js";import"./useWindowSizeFn-38cd0f6d.js";import"./onMountedOrActivated-13e9417a.js";import"./sortable.esm-f208c0d8.js";import"./RedoOutlined-fa24e892.js";import"./FullscreenOutlined-8b988545.js";import"./index-50e4b4b2.js";import"./index-8e6d9858.js";import"./index-081b541d.js";import"./fromPairs-e099444b.js";import"./scrollTo-67205127.js";import"./index-fb15648b.js";import"./dict-5cefafd8.js";import"./index-47ca6c32.js";import"./useRefs-872c0ad6.js";import"./index-c8286d7f.js";import"./index-855bdeff.js";import"./useRender-f65ba3eb.js";const Me=M({name:"SystemTenant",__name:"index",setup(W){const{t}=R(),{createConfirm:y,createMessage:s}=N(),[T,{openModal:m}]=L(),[C,{getForm:b,reload:c}]=E({title:"租户列表",api:O,columns:P,formConfig:{labelWidth:120,schemas:U},useSearchForm:!0,showTableSetting:!0,showIndexColumn:!1,actionColumn:{width:140,title:t("common.action"),dataIndex:"action",fixed:"right"}});function k(){m(!0,{isUpdate:!1})}function w(o){m(!0,{record:o,isUpdate:!0})}async function I(){y({title:t("common.exportTitle"),iconType:"warning",content:t("common.exportMessage"),async onOk(){await A(b().getFieldsValue()),s.success(t("common.exportSuccessText"))}})}async function D(o){await H(o.id),s.success(t("common.delSuccessText")),c()}return(o,p)=>{const l=F("a-button"),u=V("auth");return n(),$("div",null,[_(e(v),{onRegister:e(C)},{toolbar:a(()=>[g((n(),r(l,{type:"primary",preIcon:e(i).ADD,onClick:k},{default:a(()=>[h(x(e(t)("action.create")),1)]),_:1},8,["preIcon"])),[[u,["system:tenant:create"]]]),g((n(),r(l,{type:"warning",preIcon:e(i).EXPORT,onClick:I},{default:a(()=>[h(x(e(t)("action.export")),1)]),_:1},8,["preIcon"])),[[u,["system:tenant:export"]]])]),bodyCell:a(({column:d,record:f})=>[d.key==="action"?(n(),r(e(S),{key:0,actions:[{icon:e(i).EDIT,label:e(t)("action.edit"),auth:"system:tenant:update",onClick:w.bind(null,f)},{icon:e(i).DELETE,color:"error",label:e(t)("action.delete"),auth:"system:tenant:delete",popConfirm:{title:e(t)("common.delMessage"),placement:"left",confirm:D.bind(null,f)}}]},null,8,["actions"])):B("",!0)]),_:1},8,["onRegister"]),_(j,{onRegister:e(T),onSuccess:p[0]||(p[0]=d=>e(c)())},null,8,["onRegister"])])}}});export{Me as default};
