import{a as T,c as k,s as v,H as I,o as n,h as w,n as r,w as s,D as E,j as u,k as e,I as i,v as R,t as N,l as $,x as B}from"./index-8b526734.js";import{u as d}from"./index-40f1f97e.js";import{_ as U}from"./TemplateModal.vue_vue_type_script_setup_true_lang-3f5b94b8.js";import{u as V,_ as A}from"./useTable-33ec4cfa.js";import"./index-ec19b8e7.js";import{_ as F}from"./BasicForm.vue_vue_type_style_index_0_lang-42e5fba8.js";import"./index-7aea77c8.js";import"./index-8629d074.js";import{a as L,d as P,e as j,h as H}from"./template.data-17076c3c.js";import{_ as O}from"./SendNotifyModal.vue_vue_type_script_setup_true_lang-f71cdd9c.js";import"./useWindowSizeFn-38cd0f6d.js";import"./FullscreenOutlined-8b988545.js";import"./useForm-f7dccb87.js";import"./index-03ea37ad.js";import"./index-3e87b811.js";import"./_baseIteratee-625e56a9.js";import"./get-11175361.js";import"./useSize-5af631ed.js";import"./index-c8168e27.js";import"./_stringToArray-c38191b3.js";import"./index-42686290.js";import"./uniqBy-f83999c6.js";import"./index-9e517d44.js";import"./index-d2d20fb4.js";import"./tree-e6981725.js";import"./eagerComputed-6290a54f.js";import"./onMountedOrActivated-13e9417a.js";import"./sortable.esm-f208c0d8.js";import"./RedoOutlined-fa24e892.js";import"./index-50e4b4b2.js";import"./index-8e6d9858.js";import"./index-081b541d.js";import"./fromPairs-e099444b.js";import"./scrollTo-67205127.js";import"./index-fb15648b.js";import"./dict-5cefafd8.js";import"./index-47ca6c32.js";import"./useRefs-872c0ad6.js";import"./index-c8286d7f.js";import"./useRender-f65ba3eb.js";import"./index-2d30e53e.js";const Ne=T({name:"SystemMessageTemplate",__name:"index",setup(W){const{t}=k(),{createMessage:f}=B(),[_,{openModal:m}]=d(),[h,{openModal:g}]=d(),[y,{reload:l}]=V({title:"站内信模板列表",api:L,columns:P,formConfig:{labelWidth:120,schemas:j},useSearchForm:!0,showTableSetting:!0,showIndexColumn:!1,actionColumn:{width:200,title:t("common.action"),dataIndex:"action",fixed:"right"}});function b(){m(!0,{isUpdate:!1})}function C(o){m(!0,{record:o,isUpdate:!0})}function x(o){g(!0,o)}async function D(o){await H(o.id),f.success(t("common.delSuccessText")),l()}return(o,p)=>{const M=v("a-button"),S=I("auth");return n(),w("div",null,[r(e(A),{onRegister:e(y)},{toolbar:s(()=>[E((n(),u(M,{type:"primary",preIcon:e(i).ADD,onClick:b},{default:s(()=>[R(N(e(t)("action.create")),1)]),_:1},8,["preIcon"])),[[S,["system:notify-template:create"]]])]),bodyCell:s(({column:c,record:a})=>[c.key==="action"?(n(),u(e(F),{key:0,actions:[{icon:e(i).UPLOAD,label:e(t)("action.send"),auth:"system:notify-template:update",onClick:x.bind(null,a)},{icon:e(i).EDIT,label:e(t)("action.edit"),auth:"system:notify-template:update",onClick:C.bind(null,a)},{icon:e(i).DELETE,color:"error",label:e(t)("action.delete"),auth:"system:notify-template:delete",popConfirm:{title:e(t)("common.delMessage"),placement:"left",confirm:D.bind(null,a)}}]},null,8,["actions"])):$("",!0)]),_:1},8,["onRegister"]),r(U,{onRegister:e(_),onSuccess:p[0]||(p[0]=c=>e(l)())},null,8,["onRegister"]),r(O,{onRegister:e(h)},null,8,["onRegister"])])}}});export{Ne as default};