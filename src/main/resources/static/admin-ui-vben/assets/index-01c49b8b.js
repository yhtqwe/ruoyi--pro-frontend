import{L as m,u as b,d as w,c as _,r as B,e8 as C,e9 as T,o as c,h as y,n as d,w as u,k as t,j as R,I as f,l as k,y as F}from"./index-84bac5b8.js";import"./index-1beb4355.js";import{V as E,_ as M}from"./BasicForm.vue_vue_type_style_index_0_lang-f40c69bb.js";import"./index-173d5d49.js";import"./sortable.esm-f208c0d8.js";import{u as n}from"./useRender-70a86cea.js";import{_ as z}from"./BasicTable.vue_vue_type_script_setup_true_lang-6c55bad0.js";import{u as P}from"./useTable-2040b40a.js";import{c as S}from"./copyTextToClipboard-cc995e2b.js";import"./index-f29e621a.js";import"./index-b9509bee.js";import"./index-2dea95e5.js";import"./index-d2cf1d1c.js";import"./DownOutlined-a8fe79f2.js";import"./isMobile-174ba801.js";import"./index-d4092c42.js";import"./List-9fcea96e.js";import"./CheckOutlined-c0652f6b.js";import"./index-9bf8eb9e.js";import"./eagerComputed-aaf02481.js";import"./index-343834d4.js";import"./fromPairs-e099444b.js";import"./index-81d4b3c0.js";import"./DoubleRightOutlined-1bb4c7eb.js";import"./useBreakpoint-8b027837.js";import"./responsiveObserve-85850b10.js";import"./zh_CN-1ca40490.js";import"./tree-a6f36781.js";import"./debounce-51e23acd.js";import"./scrollTo-b5e908bd.js";import"./operationUnit-d5166b83.js";import"./index-cc732a41.js";import"./dict-5c702769.js";import"./index-831ed906.js";import"./index-3e1b457d.js";import"./get-acbb0bab.js";import"./index-09793f90.js";import"./Col-5c991ea4.js";import"./useFlexGapSupport-7bccf8d7.js";import"./_baseIteratee-de9a7973.js";import"./onMountedOrActivated-78e848f5.js";import"./PlusOutlined-c3a73197.js";import"./index-5d2832e9.js";import"./index-7a2ca6fc.js";import"./index-723fd4c3.js";import"./useWindowSizeFn-edf59fbd.js";import"./FullscreenOutlined-2d9cb280.js";import"./RedoOutlined-c04dd14b.js";import"./useForm-9e126d4c.js";import"./uniqBy-966a1ca5.js";import"./index-9785aad3.js";const $=[{title:"编号",dataIndex:"id",width:100},{title:"文件名",dataIndex:"name",width:200},{title:"文件 URL",dataIndex:"url",width:180,customRender:({text:e})=>n.renderImg(e)},{title:"文件路径",dataIndex:"path",width:180},{title:"文件大小",dataIndex:"size",width:120,customRender:({text:e})=>{const o=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],r=Number.parseFloat(e),i=Math.floor(Math.log(r)/Math.log(1024));return`${(r/1024**i).toFixed(2)} ${o[i]}`}},{title:"文件类型",dataIndex:"type",width:100,customRender:({text:e})=>n.renderTag(e)},{title:"文件内容",dataIndex:"content",width:180,customRender:({text:e})=>n.renderImg(e)},{title:"上传时间",dataIndex:"createTime",width:180,customRender:({text:e})=>n.renderDate(e)}],A=[{label:"文件路径",field:"path",component:"Input",colProps:{span:8}},{label:"创建时间",field:"createTime",component:"RangePicker",colProps:{span:8}}];function V(e){return m.get({url:"/infra/file/page",params:e})}function v(e){return m.delete({url:`/infra/file/delete?id=${e}`})}const{uploadUrl:D=""}=b();function L(e,o){return m.uploadFile({url:D,onUploadProgress:o},e)}const De=w({name:"InfraFile",__name:"index",setup(e){const{t:o}=_(),{createMessage:r}=F(),i=B({Authorization:`Bearer ${C()}`,"tenant-id":T()}),[s,{reload:l}]=P({title:"文件列表",api:V,columns:$,formConfig:{labelWidth:120,schemas:A},useSearchForm:!0,showTableSetting:!0,showIndexColumn:!1,actionColumn:{width:160,title:o("common.action"),dataIndex:"action",fixed:"right"}});function h(){l()}function g(a){S(a.url)}async function x(a){await v(a.id),r.success(o("common.delSuccessText")),l()}return(a,N)=>(c(),y("div",null,[d(t(z),{onRegister:t(s)},{toolbar:u(()=>[d(t(E),{"max-size":20,"max-number":10,"empty-hide-preview":!0,"upload-params":i.value,api:t(L),class:"my-5",accept:["image/*"],onChange:h},null,8,["upload-params","api"])]),bodyCell:u(({column:I,record:p})=>[I.key==="action"?(c(),R(t(M),{key:0,actions:[{icon:t(f).VIEW,label:"复制链接",onClick:g.bind(null,p)},{icon:t(f).DELETE,danger:!0,label:t(o)("action.delete"),auth:"infra:file:delete",popConfirm:{title:t(o)("common.delMessage"),placement:"left",confirm:x.bind(null,p)}}]},null,8,["actions"])):k("",!0)]),_:1},8,["onRegister"])]))}});export{De as default};