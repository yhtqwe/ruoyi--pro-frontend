import{L as p,d as m,o as n,h as a,n as d,k as o}from"./index-84bac5b8.js";import"./index-1beb4355.js";import"./BasicForm.vue_vue_type_style_index_0_lang-f40c69bb.js";import"./index-173d5d49.js";import"./sortable.esm-f208c0d8.js";import{u as e}from"./useRender-70a86cea.js";import{D as i,g as l}from"./dict-5c702769.js";import{_ as s}from"./BasicTable.vue_vue_type_script_setup_true_lang-6c55bad0.js";import{u as c}from"./useTable-2040b40a.js";import"./index-f29e621a.js";import"./index-b9509bee.js";import"./index-2dea95e5.js";import"./index-d2cf1d1c.js";import"./DownOutlined-a8fe79f2.js";import"./isMobile-174ba801.js";import"./index-d4092c42.js";import"./List-9fcea96e.js";import"./CheckOutlined-c0652f6b.js";import"./index-9bf8eb9e.js";import"./eagerComputed-aaf02481.js";import"./index-343834d4.js";import"./fromPairs-e099444b.js";import"./index-81d4b3c0.js";import"./DoubleRightOutlined-1bb4c7eb.js";import"./useBreakpoint-8b027837.js";import"./responsiveObserve-85850b10.js";import"./zh_CN-1ca40490.js";import"./tree-a6f36781.js";import"./debounce-51e23acd.js";import"./scrollTo-b5e908bd.js";import"./operationUnit-d5166b83.js";import"./index-cc732a41.js";import"./index-831ed906.js";import"./index-3e1b457d.js";import"./get-acbb0bab.js";import"./index-09793f90.js";import"./Col-5c991ea4.js";import"./useFlexGapSupport-7bccf8d7.js";import"./_baseIteratee-de9a7973.js";import"./onMountedOrActivated-78e848f5.js";import"./PlusOutlined-c3a73197.js";import"./index-5d2832e9.js";import"./index-7a2ca6fc.js";import"./copyTextToClipboard-cc995e2b.js";import"./index-723fd4c3.js";import"./useWindowSizeFn-edf59fbd.js";import"./FullscreenOutlined-2d9cb280.js";import"./RedoOutlined-c04dd14b.js";import"./useForm-9e126d4c.js";import"./uniqBy-966a1ca5.js";import"./index-9785aad3.js";const u=[{title:"编号",dataIndex:"id",width:100},{title:"用户",dataIndex:"nickname",width:200},{title:"获得积分",dataIndex:"point",width:100,customRender:({text:t})=>e.renderTag(t,t>0?"blue":"red")},{title:"总积分",dataIndex:"totalPoint",width:100},{title:"标题",dataIndex:"title",width:180},{title:"描述",dataIndex:"description",width:180},{title:"业务编码",dataIndex:"bizId",width:100},{title:"业务类型",dataIndex:"bizType",width:100,customRender:({text:t})=>e.renderDict(t,i.MEMBER_POINT_BIZ_TYPE)}],f=[{label:"用户",field:"nickname",component:"Input",colProps:{span:8}},{label:"业务类型",field:"bizType",component:"Select",componentProps:{options:l(i.MEMBER_POINT_BIZ_TYPE)},colProps:{span:8}},{label:"积分标题",field:"title",component:"Input",colProps:{span:8}},{label:"获得时间",field:"createTime",component:"RangePicker",colProps:{span:8}}];function _(t){return p.get({url:"/member/point/record/page",params:t})}const _t=m({name:"PointRecord",__name:"index",setup(t){const[r]=c({title:"积分记录列表",api:_,columns:u,formConfig:{labelWidth:120,schemas:f},useSearchForm:!0,showTableSetting:!0,showIndexColumn:!1});return(h,I)=>(n(),a("div",null,[d(o(s),{onRegister:o(r)},null,8,["onRegister"])]))}});export{_t as default};