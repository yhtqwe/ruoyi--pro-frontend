import{a as x,i as v,j as M,bc as S,o as a,f as A,e as _,w as r,L as g,c as n,u as t,I as i,k as h,af as y,h as R,l as F}from"./index-185fe65d.js";import{a as V}from"./index-b9c40b5d.js";import{g as $,c as B,s as N,_ as P,e as L,d as O}from"./AppModal.vue_vue_type_script_setup_true_name_PayAppModal_lang-f6599bd9.js";import{_ as U}from"./index-c3c80eae.js";import{_ as j}from"./useForm-8fd7b992.js";import{u as W}from"./useTable-e1aa62c8.js";import"./index-3ea574b4.js";import"./index-ea6c9550.js";import"./useWindowSizeFn-513fc031.js";import"./FullscreenOutlined-32991190.js";import"./index-c85a8cb3.js";import"./useRender-7b752cf7.js";import"./systemEnum-97385b69.js";import"./dict-411628cd.js";import"./index-55063501.js";import"./index-a51ee13a.js";import"./tree-1cdc2dee.js";import"./eagerComputed-625aaa6f.js";import"./index-341544d4.js";import"./index-a2353b1b.js";import"./index-a331c47c.js";import"./useSize-536e554d.js";import"./useContentViewHeight-f2cd4d02.js";import"./ArrowLeftOutlined-b0e96cce.js";import"./index-1091f5b3.js";import"./transButton-4d2a5fee.js";import"./index-726b028f.js";import"./get-99b39cda.js";import"./index-69b45e12.js";import"./sortable.esm-261924ea.js";import"./RedoOutlined-4bac5e59.js";import"./fromPairs-e099444b.js";import"./index-ad77ec72.js";import"./index-273d53fa.js";import"./index-e80a262d.js";import"./_baseIteratee-ef666e06.js";import"./scrollTo-360190e5.js";import"./index-0e02bec4.js";import"./index-55aee596.js";import"./index-4d2a3b0b.js";import"./useRefs-d524c1a2.js";import"./index-e8479e4b.js";import"./index-109393d4.js";import"./uniqBy-074073a7.js";const X=x({name:"PayApp"}),Bt=x({...X,setup(q){const{t:e}=v(),{createConfirm:b,createMessage:p}=F(),[C,{openModal:s}]=V(),[T,{getForm:k,reload:m}]=W({title:"应用列表",api:$,columns:B,formConfig:{labelWidth:120,schemas:N},useSearchForm:!0,showTableSetting:!0,actionColumn:{width:140,title:e("common.action"),dataIndex:"action",fixed:"right"}});function w(){s(!0,{isUpdate:!1})}function E(o){s(!0,{record:o,isUpdate:!0})}async function I(){b({title:e("common.exportTitle"),iconType:"warning",content:e("common.exportMessage"),async onOk(){await L(k().getFieldsValue()),p.success(e("common.exportSuccessText"))}})}async function D(o){await O(o.id),p.success(e("common.delSuccessText")),m()}return(o,c)=>{const l=M("a-button"),u=S("auth");return a(),A("div",null,[_(t(U),{onRegister:t(T)},{toolbar:r(()=>[g((a(),n(l,{type:"primary",preIcon:t(i).ADD,onClick:w},{default:r(()=>[h(y(t(e)("action.create")),1)]),_:1},8,["preIcon"])),[[u,["pay:app:create"]]]),g((a(),n(l,{type:"warning",preIcon:t(i).EXPORT,onClick:I},{default:r(()=>[h(y(t(e)("action.export")),1)]),_:1},8,["preIcon"])),[[u,["pay:app:export"]]])]),bodyCell:r(({column:d,record:f})=>[d.key==="action"?(a(),n(t(j),{key:0,actions:[{icon:t(i).EDIT,label:t(e)("action.edit"),auth:"pay:app:update",onClick:E.bind(null,f)},{icon:t(i).DELETE,color:"error",label:t(e)("action.delete"),auth:"pay:app:delete",popConfirm:{title:t(e)("common.delMessage"),placement:"left",confirm:D.bind(null,f)}}]},null,8,["actions"])):R("",!0)]),_:1},8,["onRegister"]),_(P,{onRegister:t(C),onSuccess:c[0]||(c[0]=d=>t(m)())},null,8,["onRegister"])])}}});export{Bt as default};