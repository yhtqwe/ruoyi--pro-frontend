import{u as f,_ as h}from"./useTable-33ec4cfa.js";import"./index-ec19b8e7.js";import"./BasicForm.vue_vue_type_style_index_0_lang-42e5fba8.js";import{a as v,s as x,o as C,h as I,i as t,n as s,k as r,w as a,v as m,cA as b,cB as S,G as g}from"./index-8b526734.js";import"./index-7aea77c8.js";import"./index-8629d074.js";import{c as y}from"./data-c2e000ad.js";import{D as k}from"./index-c8168e27.js";import"./index-d2d20fb4.js";import"./tree-e6981725.js";import"./eagerComputed-6290a54f.js";import"./useForm-f7dccb87.js";import"./index-03ea37ad.js";import"./index-3e87b811.js";import"./_baseIteratee-625e56a9.js";import"./get-11175361.js";import"./useSize-5af631ed.js";import"./_stringToArray-c38191b3.js";import"./index-42686290.js";import"./uniqBy-f83999c6.js";import"./index-40f1f97e.js";import"./useWindowSizeFn-38cd0f6d.js";import"./FullscreenOutlined-8b988545.js";import"./index-9e517d44.js";import"./onMountedOrActivated-13e9417a.js";import"./sortable.esm-f208c0d8.js";import"./RedoOutlined-fa24e892.js";import"./index-50e4b4b2.js";import"./index-8e6d9858.js";import"./index-081b541d.js";import"./fromPairs-e099444b.js";import"./scrollTo-67205127.js";import"./index-fb15648b.js";import"./dict-5cefafd8.js";import"./index-47ca6c32.js";import"./useRefs-872c0ad6.js";import"./index-c8286d7f.js";import"./type-291341e4.js";import"./index-a2b632f4.js";const i=o=>(b("data-v-d7fcf382"),o=o(),S(),o),w={class:"step2"},F={class:"step2-table"},B={class:"step2-button"},R=i(()=>t("h3",null,"说明",-1)),T=i(()=>t("h4",null,"配置字段",-1)),V=i(()=>t("p",null," 配置表的字段类型，增删改查，字典等 ",-1)),D=v({__name:"CloumInfoForm",props:{columnsInfo:{type:Array,default:()=>null}},emits:["next","prev"],setup(o,{emit:n}){const[c,{getDataSource:l}]=f({columns:y,maxHeight:700,pagination:!1,useSearchForm:!1,showTableSetting:!1,showIndexColumn:!1});async function u(){n("prev")}async function _(){const e=l();n("next",e)}function d(e){e.onEdit?.(!0)}return(e,E)=>{const p=x("a-button");return C(),I("div",w,[t("div",F,[s(r(h),{dataSource:o.columnsInfo,onRegister:r(c),onRowClick:d},null,8,["dataSource","onRegister"])]),s(r(k)),t("div",B,[s(p,{onClick:u},{default:a(()=>[m("上一步")]),_:1}),s(p,{type:"primary",onClick:_},{default:a(()=>[m("提交")]),_:1})]),R,T,V])}}});const Io=g(D,[["__scopeId","data-v-d7fcf382"]]);export{Io as default};
