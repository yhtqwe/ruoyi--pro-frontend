import{D as T}from"./dict-5c702769.js";import{L as h,d as w,H as B,c as M,r as s,v as E,o as a,j as p,w as i,i as m,n as r,k as t,I as R,l as c,h as S,M as $,x as C,y as L}from"./index-84bac5b8.js";import"./index-1beb4355.js";import{_ as N}from"./BasicForm.vue_vue_type_style_index_0_lang-f40c69bb.js";import"./index-173d5d49.js";import"./sortable.esm-f208c0d8.js";import{u as y}from"./useRender-70a86cea.js";import{P as V}from"./index-501fd3a5.js";import{_ as G}from"./BasicTable.vue_vue_type_script_setup_true_lang-6c55bad0.js";import{u as H}from"./useTable-2040b40a.js";import"./index-f29e621a.js";import{c as O}from"./index-9839d5a9.js";import{C as X}from"./index-855f7ddd.js";import{S as l}from"./index-250db773.js";import"./index-b9509bee.js";import"./index-2dea95e5.js";import"./index-d2cf1d1c.js";import"./DownOutlined-a8fe79f2.js";import"./isMobile-174ba801.js";import"./index-d4092c42.js";import"./List-9fcea96e.js";import"./CheckOutlined-c0652f6b.js";import"./index-9bf8eb9e.js";import"./eagerComputed-aaf02481.js";import"./index-343834d4.js";import"./fromPairs-e099444b.js";import"./index-81d4b3c0.js";import"./DoubleRightOutlined-1bb4c7eb.js";import"./useBreakpoint-8b027837.js";import"./responsiveObserve-85850b10.js";import"./zh_CN-1ca40490.js";import"./tree-a6f36781.js";import"./debounce-51e23acd.js";import"./scrollTo-b5e908bd.js";import"./operationUnit-d5166b83.js";import"./index-cc732a41.js";import"./index-831ed906.js";import"./index-3e1b457d.js";import"./get-acbb0bab.js";import"./index-09793f90.js";import"./Col-5c991ea4.js";import"./useFlexGapSupport-7bccf8d7.js";import"./_baseIteratee-de9a7973.js";import"./onMountedOrActivated-78e848f5.js";import"./PlusOutlined-c3a73197.js";import"./index-5d2832e9.js";import"./index-7a2ca6fc.js";import"./copyTextToClipboard-cc995e2b.js";import"./index-723fd4c3.js";import"./useWindowSizeFn-edf59fbd.js";import"./FullscreenOutlined-2d9cb280.js";import"./useContentViewHeight-ac910085.js";import"./ArrowLeftOutlined-c95cdb4d.js";import"./index-1c73a8ff.js";import"./index-e9ab1be6.js";import"./RedoOutlined-c04dd14b.js";import"./useForm-9e126d4c.js";import"./uniqBy-966a1ca5.js";import"./index-9785aad3.js";import"./index-ee59d2b5.js";const Y=[{title:"流程名称",dataIndex:"name",width:120},{title:"流程分类",dataIndex:"category",width:120,customRender:({text:e})=>y.renderDict(e,T.BPM_MODEL_CATEGORY)},{title:"流程版本",dataIndex:"name",width:120,customRender:({text:e})=>y.renderTag(e)},{title:"流程描述",dataIndex:"description",width:200}];function j(e){return h.get({url:"/bpm/process-definition/list",params:e})}function A(e){return h.get({url:`/bpm/process-definition/get-bpmn-xml?id=${e}`})}const F={class:"mx-auto my-0 mt-2.5 w-200"},W={class:"m-5"},q={key:1},z=m("p",null,"表单",-1),J=m("p",null,"流程图",-1),oe=w({name:"BpmProcessInstanceCreate",__name:"index",setup(e){const u=B(),{t:v}=M(),{createMessage:g}=L(),x=s(0),b=s(null),n=s(),[I]=H({api:j,columns:Y,actionColumn:{width:140,title:v("common.action"),dataIndex:"action",fixed:"right"}});async function k(o){n.value=o,o.formType===10?b.value=await A(o.id):o.formCustomCreatePath&&await u({path:o.formCustomCreatePath})}async function P(o){try{await O({processDefinitionId:n.value.id,variables:o}),g.success("发起流程成功"),u()}finally{}}return(o,d)=>{const f=E("a-button");return a(),p(t(V),null,{default:i(()=>[m("div",F,[r(t(l),{current:x.value},{default:i(()=>[r(t(l).Step,{title:"选择流程"}),r(t(l).Step,{title:"流程提交"})]),_:1},8,["current"])]),m("div",W,[n.value?c("",!0):(a(),p(t(G),{key:0,onRegister:t(I)},{bodyCell:i(({column:_,record:D})=>[_.key==="action"?(a(),p(t(N),{key:0,actions:[{icon:t(R).SEND,label:"选择",onClick:k.bind(null,D)}]},null,8,["actions"])):c("",!0)]),_:1},8,["onRegister"])),n.value?(a(),S("div",q,[r(t(X),{title:`申请信息——【${n.value.name}】`},{extra:i(()=>[r(f,{type:"primary",onClick:d[0]||(d[0]=_=>n.value=void 0)},{default:i(()=>[r(t($),{icon:"ep:delete"}),C(" 选择其它流程 ")]),_:1})]),default:i(()=>[z,r(f,{type:"primary",onClick:P},{default:i(()=>[C(" 提交 ")]),_:1}),J]),_:1},8,["title"])])):c("",!0)])]),_:1})}}});export{oe as default};