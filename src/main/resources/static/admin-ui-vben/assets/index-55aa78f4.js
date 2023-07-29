import{a as R,K as O,c as V,s as A,H as F,o as c,h as L,n as _,w as l,D as x,j as d,k as t,I as n,v as C,t as T,l as N,x as P}from"./index-8b526734.js";import{u as $}from"./index-40f1f97e.js";import{g as B,c as U,s as q,_ as G,u as H,r as W,e as K,d as X}from"./JobModal.vue_vue_type_script_setup_true_lang-2ddfc186.js";import{u as z,_ as Q}from"./useTable-33ec4cfa.js";import"./index-ec19b8e7.js";import{_ as Y}from"./BasicForm.vue_vue_type_style_index_0_lang-42e5fba8.js";import"./index-7aea77c8.js";import"./index-8629d074.js";import{a as k}from"./systemEnum-4af82c45.js";import"./useWindowSizeFn-38cd0f6d.js";import"./FullscreenOutlined-8b988545.js";import"./index-4cdc1ad4.js";import"./useForm-f7dccb87.js";import"./index-03ea37ad.js";import"./index-3e87b811.js";import"./_baseIteratee-625e56a9.js";import"./get-11175361.js";import"./useSize-5af631ed.js";import"./index-c8168e27.js";import"./_stringToArray-c38191b3.js";import"./index-42686290.js";import"./uniqBy-f83999c6.js";import"./index-9e517d44.js";import"./index-0f4dcf74.js";import"./index-d2d20fb4.js";import"./tree-e6981725.js";import"./eagerComputed-6290a54f.js";import"./sortable.esm-f208c0d8.js";import"./useRender-f65ba3eb.js";import"./dict-5cefafd8.js";/* empty css              */import"./index-e8507731.js";import"./useRefs-872c0ad6.js";import"./useDescription-c4a08efa.js";import"./onMountedOrActivated-13e9417a.js";import"./RedoOutlined-fa24e892.js";import"./index-50e4b4b2.js";import"./index-8e6d9858.js";import"./index-081b541d.js";import"./fromPairs-e099444b.js";import"./scrollTo-67205127.js";import"./index-fb15648b.js";import"./index-47ca6c32.js";import"./index-c8286d7f.js";const qt=R({name:"InfraJob",__name:"index",setup(Z){const f=O(),{t:e}=V(),{createConfirm:m,createMessage:s}=P(),[w,{openModal:u}]=$(),[y,{getForm:E,reload:b}]=z({title:"定时任务列表",api:B,columns:U,formConfig:{labelWidth:120,schemas:q},useSearchForm:!0,showTableSetting:!0,showIndexColumn:!1,actionColumn:{width:140,title:e("common.action"),dataIndex:"action",fixed:"right"}});function I(){u(!0,{isEdit:!0,isUpdate:!1})}function S(o){u(!0,{record:o,isEdit:!0,isUpdate:!0})}function g(o,a){let r=a?k.NORMAL:k.STOP;m({title:"调整状态",iconType:"warning",content:"是否确认"+(a?"开启":"关闭")+'定时任务编号为"'+o.id+'"的数据项?',async onOk(){await H(o.id,r),s.success(e("common.successText"))}})}function j(o){m({title:"执行",iconType:"warning",content:'确认要立即执行一次"'+o.name+'"任务吗?',async onOk(){await W(o.id),s.success(e("common.successText"))}})}function D(o){u(!0,{record:o,isEdit:!1})}function v(o){o.id>0?f("/job/job-log?id="+o.id):f("/job/job-log")}async function J(){m({title:e("common.exportTitle"),iconType:"warning",content:e("common.exportMessage"),async onOk(){await K(E().getFieldsValue()),s.success(e("common.exportSuccessText"))}})}async function M(o){await X(o.id),s.success(e("common.delSuccessText")),b()}return(o,a)=>{const r=A("a-button"),p=F("auth");return c(),L("div",null,[_(t(Q),{onRegister:t(y)},{toolbar:l(()=>[x((c(),d(r,{type:"primary",preIcon:t(n).ADD,onClick:I},{default:l(()=>[C(T(t(e)("action.create")),1)]),_:1},8,["preIcon"])),[[p,["infra:job:create"]]]),x((c(),d(r,{type:"warning",preIcon:t(n).EXPORT,onClick:J},{default:l(()=>[C(T(t(e)("action.export")),1)]),_:1},8,["preIcon"])),[[p,["infra:job:export"]]])]),bodyCell:l(({column:h,record:i})=>[h.key==="action"?(c(),d(t(Y),{key:0,actions:[{icon:t(n).EDIT,label:t(e)("action.edit"),onClick:S.bind(null,i)}],dropDownActions:[{icon:t(n).AUTH,label:"开启",auth:"infra:job:update",onClick:g.bind(null,i,!0)},{icon:t(n).EDIT,label:"暂停",auth:"infra:job:update",onClick:g.bind(null,i,!1)},{icon:t(n).TEST,label:"执行一次",auth:"infra:job:trigger",onClick:j.bind(null,i)},{icon:t(n).PREVIEW,label:"任务详细",auth:"infra:job:query",onClick:D.bind(null,i)},{icon:t(n).LOG,label:"调度日志",auth:"infra:job:query",onClick:v.bind(null,i)},{icon:t(n).DELETE,color:"error",label:t(e)("action.delete"),auth:"infra:job:delete",popConfirm:{title:t(e)("common.delMessage"),placement:"left",confirm:M.bind(null,i)}}]},null,8,["actions","dropDownActions"])):N("",!0)]),_:1},8,["onRegister"]),_(G,{onRegister:t(w),onSuccess:a[0]||(a[0]=h=>t(b)())},null,8,["onRegister"])])}}});export{qt as default};
