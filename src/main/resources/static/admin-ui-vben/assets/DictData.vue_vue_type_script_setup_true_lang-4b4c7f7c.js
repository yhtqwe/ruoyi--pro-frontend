import{a as x,c as w,fw as S,R as k,s as v,H as E,o as s,h as T,n as f,w as n,D as M,j as p,k as e,I as c,v as R,t as $,l as B,fx as N,x as V}from"./index-8b526734.js";import{u as j}from"./index-40f1f97e.js";import{d as F,a as O,_ as U}from"./DictDataModal.vue_vue_type_script_setup_true_lang-fc7da915.js";import{u as A,_ as H}from"./useTable-33ec4cfa.js";import"./index-ec19b8e7.js";import{_ as L}from"./BasicForm.vue_vue_type_style_index_0_lang-42e5fba8.js";import"./index-7aea77c8.js";import"./index-8629d074.js";const X=x({name:"SystemDictData",__name:"DictData",props:{searchInfo:{type:Object,default:()=>({})}},setup(i){const r=i,{t}=w(),{createMessage:h}=V(),[_,{openModal:l}]=j(),[D,{reload:o}]=A({title:"字典数据列表",api:S,columns:F,formConfig:{labelWidth:120,schemas:O,autoSubmitOnEnter:!0},useSearchForm:!0,showTableSetting:!0,showIndexColumn:!1,actionColumn:{width:140,title:t("common.action"),dataIndex:"action",fixed:"right"}});function g(){l(!0,{record:r.searchInfo.dictType,isUpdate:!1})}function b(a){l(!0,{record:a,isUpdate:!0})}async function I(a){await N(a.id),h.success(t("common.delSuccessText")),o()}return k(()=>r.searchInfo,a=>{a&&o()},{deep:!0}),(a,m)=>{const y=v("a-button"),C=E("auth");return s(),T("div",null,[f(e(H),{onRegister:e(D),searchInfo:i.searchInfo},{toolbar:n(()=>[M((s(),p(y,{type:"primary",preIcon:e(c).ADD,onClick:g},{default:n(()=>[R($(e(t)("action.create")),1)]),_:1},8,["preIcon"])),[[C,["system:dict:create"]]])]),bodyCell:n(({column:u,record:d})=>[u.key==="action"?(s(),p(e(L),{key:0,actions:[{icon:e(c).EDIT,label:e(t)("action.edit"),auth:"system:dict:update",onClick:b.bind(null,d)},{icon:e(c).DELETE,color:"error",label:e(t)("action.delete"),auth:"system:dict:delete",popConfirm:{title:e(t)("common.delMessage"),placement:"left",confirm:I.bind(null,d)}}]},null,8,["actions"])):B("",!0)]),_:1},8,["onRegister","searchInfo"]),f(U,{onRegister:e(_),onSuccess:m[0]||(m[0]=u=>e(o)())},null,8,["onRegister"])])}}});export{X as _};
