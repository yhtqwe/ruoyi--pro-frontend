import{fQ as u,d as I,H as f,c as h,o as a,h as _,n as x,w,j as g,k as e,I as m,l as k}from"./index-84bac5b8.js";import"./index-1beb4355.js";import{_ as T}from"./BasicForm.vue_vue_type_style_index_0_lang-f40c69bb.js";import"./index-173d5d49.js";import"./sortable.esm-f208c0d8.js";import{u as i}from"./useRender-70a86cea.js";import{D as b}from"./dict-5c702769.js";import{_ as C}from"./BasicTable.vue_vue_type_script_setup_true_lang-6c55bad0.js";import{u as D}from"./useTable-2040b40a.js";import"./index-f29e621a.js";import{g as R}from"./index-edcd98d7.js";import"./index-b9509bee.js";import"./index-2dea95e5.js";import"./index-d2cf1d1c.js";import"./DownOutlined-a8fe79f2.js";import"./isMobile-174ba801.js";import"./index-d4092c42.js";import"./List-9fcea96e.js";import"./CheckOutlined-c0652f6b.js";import"./index-9bf8eb9e.js";import"./eagerComputed-aaf02481.js";import"./index-343834d4.js";import"./fromPairs-e099444b.js";import"./index-81d4b3c0.js";import"./DoubleRightOutlined-1bb4c7eb.js";import"./useBreakpoint-8b027837.js";import"./responsiveObserve-85850b10.js";import"./zh_CN-1ca40490.js";import"./tree-a6f36781.js";import"./debounce-51e23acd.js";import"./scrollTo-b5e908bd.js";import"./operationUnit-d5166b83.js";import"./index-cc732a41.js";import"./index-831ed906.js";import"./index-3e1b457d.js";import"./get-acbb0bab.js";import"./index-09793f90.js";import"./Col-5c991ea4.js";import"./useFlexGapSupport-7bccf8d7.js";import"./_baseIteratee-de9a7973.js";import"./onMountedOrActivated-78e848f5.js";import"./PlusOutlined-c3a73197.js";import"./index-5d2832e9.js";import"./index-7a2ca6fc.js";import"./copyTextToClipboard-cc995e2b.js";import"./index-723fd4c3.js";import"./useWindowSizeFn-edf59fbd.js";import"./FullscreenOutlined-2d9cb280.js";import"./RedoOutlined-c04dd14b.js";import"./useForm-9e126d4c.js";import"./uniqBy-966a1ca5.js";import"./index-9785aad3.js";const E=[{title:"任务编号",dataIndex:"id",width:100},{title:"任务名称",dataIndex:"name",width:180},{title:"所属流程",dataIndex:"processInstance.name",width:180},{title:"流程发起人",dataIndex:"processInstance.startUserNickname",width:180},{title:"结果",dataIndex:"result",width:180,customRender:({text:t})=>i.renderDict(t,b.BPM_PROCESS_INSTANCE_RESULT)},{title:"审批意见",dataIndex:"reason",width:180},{title:"创建时间",dataIndex:"createTime",width:180,customRender:({text:t})=>i.renderDate(t)},{title:"审批时间",dataIndex:"endTime",width:180,customRender:({text:t})=>i.renderDate(t)},{title:"耗时",dataIndex:"durationInMillis",width:180,customRender:({text:t})=>u(t)}],P=[{label:"流程名",field:"name",component:"Input",colProps:{span:8}},{label:"创建时间",field:"createTime",component:"RangePicker",colProps:{span:8}}],Pt=I({name:"BpmDoneTask",__name:"index",setup(t){const p=f(),{t:r}=h(),[s]=D({title:"审批列表",api:R,columns:E,formConfig:{labelWidth:120,schemas:P},useSearchForm:!0,showTableSetting:!0,actionColumn:{width:140,title:r("common.action"),dataIndex:"action",fixed:"right"}});function d(o){}function c(o){p({name:"BpmProcessInstanceDetail",query:{id:o.id}})}return(o,S)=>(a(),_("div",null,[x(e(C),{onRegister:e(s)},{bodyCell:w(({column:l,record:n})=>[l.key==="action"?(a(),g(e(T),{key:0,actions:[{icon:e(m).VIEW,label:e(r)("action.detail"),onClick:d.bind(null,n)},{icon:e(m).VIEW,label:"流程",onClick:c.bind(null,n)}]},null,8,["actions"])):k("",!0)]),_:1},8,["onRegister"])]))}});export{Pt as default};
