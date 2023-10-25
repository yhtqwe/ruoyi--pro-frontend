import{c as k,s as y,_ as I}from"./AccessLogModal.vue_vue_type_script_setup_true_lang-f3db6b85.js";import{L as p,d as T,c as v,v as E,G as M,o as r,h as S,n,w as i,D as A,j as m,k as o,I as s,x as R,t as V,l as D,y as F}from"./index-2b36f9e3.js";import{_ as L}from"./BasicTable.vue_vue_type_script_setup_true_lang-ba4f6a37.js";import"./index-238a0b12.js";import{_ as B}from"./BasicForm.vue_vue_type_style_index_0_lang-da06c4a7.js";import{u as N}from"./useTable-f046c703.js";import"./index-23d73b40.js";import{u as $}from"./index-ab29420a.js";import"./sortable.esm-f208c0d8.js";import"./useRender-e7048bde.js";import"./index-ad076651.js";import"./dict-d92cc9bc.js";import"./index-a69dfc8a.js";import"./responsiveObserve-8393ce72.js";import"./get-8e17be71.js";import"./useDescription-296e4c96.js";import"./useWindowSizeFn-99db3b88.js";import"./onMountedOrActivated-957e2f10.js";import"./useFlexGapSupport-de861fb2.js";import"./index-813f9aca.js";import"./index-dc3889e5.js";import"./index-e3989e7b.js";import"./RedoOutlined-d283afe8.js";import"./FullscreenOutlined-d4fb962a.js";import"./useForm-2cb760a4.js";import"./index-4842c089.js";import"./Col-e08843cf.js";import"./_baseIteratee-d1ad35b8.js";import"./debounce-a0a6c5a0.js";import"./index-cc8e0e79.js";import"./uniqBy-78d0ee5d.js";import"./index-0edc0e06.js";import"./index-4ab0c49d.js";import"./DownOutlined-be102a13.js";import"./isMobile-174ba801.js";import"./index-b3ecbe2f.js";import"./List-d7615df5.js";import"./CheckOutlined-e60d17d3.js";import"./index-3486f0c2.js";import"./eagerComputed-3545aecd.js";import"./index-6a82c206.js";import"./fromPairs-e099444b.js";import"./index-824a8a54.js";import"./DoubleRightOutlined-d560994c.js";import"./useBreakpoint-99376be7.js";import"./zh_CN-1ca40490.js";import"./tree-08cb0ff7.js";import"./scrollTo-b6f1acc0.js";import"./operationUnit-d5166b83.js";import"./index-7ab89d42.js";import"./index-ff730b8b.js";import"./PlusOutlined-2d004a4a.js";import"./index-3483b766.js";import"./copyTextToClipboard-4db710ed.js";function O(e){return p.get({url:"/infra/api-access-log/page",params:e})}function P(e){return p.download({url:"/infra/api-access-log/export-excel",params:e},"访问日志.xls")}const Go=T({name:"InfraApiErrorLog",__name:"index",setup(e){const{t}=v(),{createConfirm:c,createMessage:l}=F(),[u,{getForm:f}]=N({title:"访问日志列表",api:O,columns:k,formConfig:{labelWidth:120,schemas:y},useSearchForm:!0,showTableSetting:!0,showIndexColumn:!1,actionColumn:{width:120,title:t("common.action"),dataIndex:"action",fixed:"right"}}),[d,{openModal:g}]=$();function _(a){g(!0,a)}async function x(){c({title:t("common.exportTitle"),iconType:"warning",content:t("common.exportMessage"),async onOk(){await P(f().getFieldsValue()),l.success(t("common.exportSuccessText"))}})}return(a,W)=>{const h=E("a-button"),C=M("auth");return r(),S("div",null,[n(o(L),{onRegister:o(u)},{toolbar:i(()=>[A((r(),m(h,{"pre-icon":o(s).EXPORT,onClick:x},{default:i(()=>[R(V(o(t)("action.export")),1)]),_:1},8,["pre-icon"])),[[C,["infra:api-access-log:export"]]])]),bodyCell:i(({column:b,record:w})=>[b.key==="action"?(r(),m(o(B),{key:0,actions:[{icon:o(s).VIEW,label:o(t)("action.detail"),onClick:_.bind(null,w)}]},null,8,["actions"])):D("",!0)]),_:1},8,["onRegister"]),n(I,{onRegister:o(d)},null,8,["onRegister"])])}}});export{Go as default};