import{a as x,c as S,s as D,H as k,o as a,h as v,n as p,w as i,D as I,j as u,k as e,I as n,v as w,t as E,l as T,x as M}from"./index-8b526734.js";import{u as R}from"./index-40f1f97e.js";import{c as $,s as B,_ as N}from"./SmsChannelModal.vue_vue_type_script_setup_true_lang-ace3f135.js";import{u as V,_ as F}from"./useTable-33ec4cfa.js";import"./index-ec19b8e7.js";import{_ as U}from"./BasicForm.vue_vue_type_style_index_0_lang-42e5fba8.js";import"./index-7aea77c8.js";import"./index-8629d074.js";import{a as j,d as A}from"./index-aa18a34f.js";import"./useWindowSizeFn-38cd0f6d.js";import"./FullscreenOutlined-8b988545.js";import"./useForm-f7dccb87.js";import"./index-03ea37ad.js";import"./index-3e87b811.js";import"./_baseIteratee-625e56a9.js";import"./get-11175361.js";import"./useSize-5af631ed.js";import"./index-c8168e27.js";import"./_stringToArray-c38191b3.js";import"./index-42686290.js";import"./uniqBy-f83999c6.js";import"./index-9e517d44.js";import"./index-d2d20fb4.js";import"./tree-e6981725.js";import"./eagerComputed-6290a54f.js";import"./sortable.esm-f208c0d8.js";import"./useRender-f65ba3eb.js";import"./dict-5cefafd8.js";import"./onMountedOrActivated-13e9417a.js";import"./RedoOutlined-fa24e892.js";import"./index-50e4b4b2.js";import"./index-8e6d9858.js";import"./index-081b541d.js";import"./fromPairs-e099444b.js";import"./scrollTo-67205127.js";import"./index-fb15648b.js";import"./index-47ca6c32.js";import"./useRefs-872c0ad6.js";import"./index-c8286d7f.js";const Ie=x({name:"SystemSmsChannel",__name:"index",setup(H){const{t}=S(),{createMessage:d}=M(),[f,{openModal:s}]=R(),[h,{reload:r}]=V({title:"短信渠道列表",api:j,columns:$,formConfig:{labelWidth:120,schemas:B},useSearchForm:!0,showTableSetting:!0,showIndexColumn:!1,actionColumn:{width:140,title:t("common.action"),dataIndex:"action",fixed:"right"}});function _(){s(!0,{isUpdate:!1})}function g(o){s(!0,{record:o,isUpdate:!0})}async function C(o){await A(o.id),d.success(t("common.delSuccessText")),r()}return(o,m)=>{const b=D("a-button"),y=k("auth");return a(),v("div",null,[p(e(F),{onRegister:e(h)},{toolbar:i(()=>[I((a(),u(b,{type:"primary",preIcon:e(n).ADD,onClick:_},{default:i(()=>[w(E(e(t)("action.create")),1)]),_:1},8,["preIcon"])),[[y,["system:sms-channel:create"]]])]),bodyCell:i(({column:c,record:l})=>[c.key==="action"?(a(),u(e(U),{key:0,actions:[{icon:e(n).EDIT,label:e(t)("action.edit"),auth:"system:sms-channel:update",onClick:g.bind(null,l)},{icon:e(n).DELETE,color:"error",label:e(t)("action.delete"),auth:"system:sms-channel:delete",popConfirm:{title:e(t)("common.delMessage"),placement:"left",confirm:C.bind(null,l)}}]},null,8,["actions"])):T("",!0)]),_:1},8,["onRegister"]),p(N,{onRegister:e(f),onSuccess:m[0]||(m[0]=c=>e(r)())},null,8,["onRegister"])])}}});export{Ie as default};