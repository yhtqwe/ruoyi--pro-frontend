import{cm as u,a as S,K as E,c as D,s as x,H as w,o as c,h as R,n as k,w as p,D as y,j as d,k as t,I as m,v as B,l as M,x as O}from"./index-8b526734.js";import{u as A,_ as N}from"./useTable-33ec4cfa.js";import"./index-ec19b8e7.js";import{_ as v}from"./BasicForm.vue_vue_type_style_index_0_lang-42e5fba8.js";import"./index-7aea77c8.js";import"./index-8629d074.js";import"./index-d2d20fb4.js";import"./tree-e6981725.js";import"./index-03ea37ad.js";import"./index-3e87b811.js";import"./index-c8168e27.js";import"./index-40f1f97e.js";import"./sortable.esm-f208c0d8.js";import{u as a}from"./useRender-f65ba3eb.js";import{D as r,g as l}from"./dict-5cefafd8.js";import"./useForm-f7dccb87.js";import"./_stringToArray-c38191b3.js";import"./index-42686290.js";import"./get-11175361.js";import"./uniqBy-f83999c6.js";import"./_baseIteratee-625e56a9.js";import"./index-9e517d44.js";import"./useWindowSizeFn-38cd0f6d.js";import"./onMountedOrActivated-13e9417a.js";import"./RedoOutlined-fa24e892.js";import"./FullscreenOutlined-8b988545.js";import"./index-50e4b4b2.js";import"./index-8e6d9858.js";import"./eagerComputed-6290a54f.js";import"./index-081b541d.js";import"./fromPairs-e099444b.js";import"./scrollTo-67205127.js";import"./index-fb15648b.js";import"./index-47ca6c32.js";import"./useRefs-872c0ad6.js";import"./index-c8286d7f.js";import"./useSize-5af631ed.js";function L(e){return u.get({url:"/bpm/process-instance/my-page",params:e})}function V(e,n){const o={id:e,reason:n};return u.delete({url:"/bpm/process-instance/cancel",data:o})}const q=[{title:"流程编号",dataIndex:"id",width:260},{title:"流程名称",dataIndex:"name",width:100},{title:"流程分类",dataIndex:"category",width:120,customRender:({text:e})=>a.renderDict(e,r.BPM_MODEL_CATEGORY)},{title:"当前审批任务",dataIndex:"tasks",width:120,customRender:({record:e})=>{if(e.tasks&&e.tasks.length>0){const n=[];return e.tasks.forEach(o=>{n.push(o.name)}),a.renderTags(n)}}},{title:"状态",dataIndex:"status",width:180,customRender:({text:e})=>a.renderDict(e,r.BPM_PROCESS_INSTANCE_STATUS)},{title:"提交时间",dataIndex:"createTime",width:180,customRender:({text:e})=>a.renderDate(e)},{title:"结束时间",dataIndex:"endTime",width:180,customRender:({text:e})=>a.renderDate(e)}],G=[{label:"流程名称",field:"name",component:"Input",colProps:{span:8}},{label:"所属流程",field:"processDefinitionId",component:"Input",colProps:{span:8}},{label:"流程分类",field:"category",component:"Select",componentProps:{options:l(r.BPM_MODEL_CATEGORY)},colProps:{span:8}},{label:"状态",field:"status",component:"Select",componentProps:{options:l(r.BPM_PROCESS_INSTANCE_STATUS)},colProps:{span:8}},{label:"结果",field:"result",component:"Select",componentProps:{options:l(r.BPM_PROCESS_INSTANCE_RESULT)},colProps:{span:8}},{label:"提交时间",field:"createTime",component:"RangePicker",colProps:{span:8}}],De=S({name:"InfraApiErrorLog",__name:"index",setup(e){const n=E(),{t:o}=D(),{createMessage:f}=O(),[_,{reload:h}]=A({title:"我的流程列表",api:L,columns:q,formConfig:{labelWidth:120,schemas:G},useSearchForm:!0,showTableSetting:!0,actionColumn:{width:140,title:o("common.action"),dataIndex:"action",fixed:"right"}});function I(){n({name:"BpmProcessInstanceCreate"})}function P(s){n({name:"BpmProcessInstanceDetail",query:{id:s.id}})}async function b(s){await V(s.id,"TODO"),f.success("取消成功"),h()}return(s,U)=>{const g=x("a-button"),C=w("auth");return c(),R("div",null,[k(t(N),{onRegister:t(_)},{toolbar:p(()=>[y((c(),d(g,{type:"warning",preIcon:t(m).ADD,onClick:I},{default:p(()=>[B(" 发起流程 ")]),_:1},8,["preIcon"])),[[C,["bpm:process-instance:query"]]])]),bodyCell:p(({column:T,record:i})=>[T.key==="action"?(c(),d(t(v),{key:0,actions:[{icon:t(m).VIEW,label:t(o)("action.detail"),auth:"bpm:process-instance:query",onClick:P.bind(null,i)},{icon:t(m).DELETE,color:"error",label:t(o)("action.cancel"),ifShow:i.result===1,auth:"bpm:process-instance:cancel",popConfirm:{title:t(o)("action.cancel"),placement:"left",confirm:b.bind(null,i)}}]},null,8,["actions"])):M("",!0)]),_:1},8,["onRegister"])])}}});export{De as default};
