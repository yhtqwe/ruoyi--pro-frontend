import{a as D,c as k,s as v,H as y,o as r,h as E,n as l,w as i,D as I,j as u,k as e,I as a,v as T,t as w,l as M,x as S}from"./index-8b526734.js";import{u as B}from"./index-40f1f97e.js";import{g as R,c as U,s as $,_ as G,d as N}from"./GroupModal.vue_vue_type_script_setup_true_lang-24de301c.js";import{u as V,_ as F}from"./useTable-33ec4cfa.js";import"./index-ec19b8e7.js";import{_ as j}from"./BasicForm.vue_vue_type_style_index_0_lang-42e5fba8.js";import"./index-7aea77c8.js";import"./index-8629d074.js";import"./useWindowSizeFn-38cd0f6d.js";import"./FullscreenOutlined-8b988545.js";import"./useForm-f7dccb87.js";import"./index-03ea37ad.js";import"./index-3e87b811.js";import"./_baseIteratee-625e56a9.js";import"./get-11175361.js";import"./useSize-5af631ed.js";import"./index-c8168e27.js";import"./_stringToArray-c38191b3.js";import"./index-42686290.js";import"./uniqBy-f83999c6.js";import"./index-9e517d44.js";import"./index-d2d20fb4.js";import"./tree-e6981725.js";import"./eagerComputed-6290a54f.js";import"./sortable.esm-f208c0d8.js";import"./useRender-f65ba3eb.js";import"./dict-5cefafd8.js";import"./index-2d30e53e.js";import"./onMountedOrActivated-13e9417a.js";import"./RedoOutlined-fa24e892.js";import"./index-50e4b4b2.js";import"./index-8e6d9858.js";import"./index-081b541d.js";import"./fromPairs-e099444b.js";import"./scrollTo-67205127.js";import"./index-fb15648b.js";import"./index-47ca6c32.js";import"./useRefs-872c0ad6.js";import"./index-c8286d7f.js";const Ie=D({name:"BpmGroup",__name:"index",setup(A){const{t}=k(),{createMessage:d}=S(),[f,{openModal:s}]=B(),[_,{reload:n}]=V({title:"用户分组列表",api:R,columns:U,formConfig:{labelWidth:120,schemas:$},useSearchForm:!0,showTableSetting:!0,actionColumn:{width:140,title:t("common.action"),dataIndex:"action",fixed:"right"}});function g(){s(!0,{isUpdate:!1})}function h(o){s(!0,{record:o,isUpdate:!0})}async function b(o){await N(o.id),d.success(t("common.delSuccessText")),n()}return(o,m)=>{const C=v("a-button"),x=y("auth");return r(),E("div",null,[l(e(F),{onRegister:e(_)},{toolbar:i(()=>[I((r(),u(C,{type:"primary",preIcon:e(a).ADD,onClick:g},{default:i(()=>[T(w(e(t)("action.create")),1)]),_:1},8,["preIcon"])),[[x,["bpm:user-group:create"]]])]),bodyCell:i(({column:p,record:c})=>[p.key==="action"?(r(),u(e(j),{key:0,actions:[{icon:e(a).EDIT,label:e(t)("action.edit"),auth:"bpm:user-group:update",onClick:h.bind(null,c)},{icon:e(a).DELETE,color:"error",label:e(t)("action.delete"),auth:"bpm:user-group:delete",popConfirm:{title:e(t)("common.delMessage"),placement:"left",confirm:b.bind(null,c)}}]},null,8,["actions"])):M("",!0)]),_:1},8,["onRegister"]),l(G,{onRegister:e(f),onSuccess:m[0]||(m[0]=p=>e(n)())},null,8,["onRegister"])])}}});export{Ie as default};
