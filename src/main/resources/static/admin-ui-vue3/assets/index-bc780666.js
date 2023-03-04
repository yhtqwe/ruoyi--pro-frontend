import{_ as e}from"./XModal.vue_vue_type_script_setup_true_lang-c47b87cf.js";import{_ as t}from"./Descriptions-8db90f03.js";import{_ as i}from"./Form-a0e23abc.js";import{_ as o}from"./ContentWrap.vue_vue_type_script_setup_true_lang-63555901.js";import{_ as s}from"./XTable.vue_vue_type_style_index_0_lang-9c560634.js";import{_ as r}from"./XTextButton-ab77381a.js";import{_ as a}from"./XButton-39866472.js";import{g as l,d as p,a as m,c as n,u}from"./index-1e0c357f.js";import{u as c}from"./useI18n-56d4bc42.js";import{r as d}from"./formRules-a3380b28.js";import{u as j}from"./useVxeCrudSchemas-8bec068b.js";import{A as _,d as f,r as v,Q as y,o as g,i as x,l as b,w as h,f as w,b as k,a as C,h as T,M as I,F as S}from"./runtime-core.esm-bundler-ccc21fcd.js";import{u as D}from"./useMessage-5e709b20.js";import{u as F}from"./useXTable-bf420a68.js";import"./base-085523fd.js";/* empty css                     */import"./propTypes-5cfdbdab.js";import"./index-be3181b1.js";import"./aria-8fadfbe9.js";import"./runtime-dom.esm-bundler-daa7e741.js";import"./el-notification-c7d5f4ea.js";import"./el-button-6b012e5e.js";import"./index-4665dced.js";import"./index-c2caee16.js";import"./is-a7957d81.js";import"./focus-trap-f53979c5.js";import"./index-7a379d2e.js";import"./el-descriptions-item-d373bc22.js";import"./DictTag.vue_vue_type_script_lang-a5ff2643.js";import"./color-a8b4eb58.js";/* empty css               */import"./dict-3e42505d.js";import"./useCache-d48cf6c5.js";import"./index-a7ef0ded.js";import"./el-message-7ddf9388.js";import"./auth-2fa258a0.js";import"./vue-router-0864a153.js";import"./cloneDeep-8298b498.js";import"./_flatRest-ac7abae6.js";import"./index-795de047.js";import"./el-tooltip-4ed993c7.js";/* empty css                  */import"./Icon.vue_vue_type_script_setup_true_lang-4448c023.js";import"./dayjs.min-65a6b1e4.js";import"./app-41ac77cd.js";import"./index-cf52a0ab.js";import"./index-7486e100.js";import"./index-183fdc84.js";import"./_plugin-vue_export-helper-1b428a4d.js";import"./Form.vue_vue_type_style_index_0_scoped_f983cb9f_lang-54d674bd.js";import"./el-form-item-8022b942.js";import"./el-row-ad412a39.js";import"./el-col-613bea3c.js";import"./el-checkbox-cd7dd8c1.js";import"./isEqual-6e1d5dd6.js";import"./el-radio-group-d1c0e064.js";import"./el-input-number-4fe7018b.js";/* empty css                  */import"./el-tree-39cab679.js";import"./el-tree-select-6f481715.js";import"./index-168f367d.js";import"./strings-777507ad.js";import"./debounce-eb6bb100.js";import"./index-9d88d8a4.js";import"./el-switch-4b318cc1.js";/* empty css                   */import"./InputPassword-d0077663.js";import"./el-image-viewer-f62c5b85.js";import"./el-progress-64245232.js";import"./isArrayLikeObject-26c677c4.js";import"./index-653de86a.js";/* empty css                        *//* empty css                                                                   *//* empty css                    */import"./el-card-d8ab0074.js";import"./download-20922b56.js";import"./XTextButton.vue_vue_type_style_index_0_scoped_0fcea4df_lang-41ab76b9.js";import"./index-6f87c872.js";const{t:R}=c(),V=_({name:[d],url:[d],username:[d],password:[d]}),X=_({primaryKey:"id",primaryType:"seq",action:!0,columns:[{title:"数据源名称",field:"name"},{title:"数据源连接",field:"url",form:{component:"Input",componentProps:{type:"textarea",rows:4},colProps:{span:24}}},{title:"用户名",field:"username"},{title:"密码",field:"password",isTable:!1},{title:R("common.createTime"),field:"createTime",formatter:"formatDate",isForm:!1}]}),{allSchemas:M}=j(X),P=f({name:"DataSourceConfig"}),q=f({...P,setup(d){const{t:j}=c(),_=D(),[f,{reload:R,deleteData:X}]=F({allSchemas:M,isList:!0,getListApi:l,deleteApi:p}),P=v(!1),q=v(""),A=v(!1),B=v("edit"),L=v(),z=v(),E=e=>{B.value=j("action."+e),q.value=e,A.value=!0};return(l,p)=>{const c=a,d=r,v=s,D=o,F=i,J=t,K=e,O=y("hasPermi");return g(),x(S,null,[b(D,null,{default:h((()=>[b(v,{onRegister:w(f)},{toolbar_buttons:h((()=>[k(b(c,{type:"primary",preIcon:"ep:zoom-in",title:w(j)("action.add"),onClick:p[0]||(p[0]=e=>{E("create")})},null,8,["title"]),[[O,["infra:data-source-config:create"]]])])),actionbtns_default:h((({row:e})=>[k(b(d,{preIcon:"ep:edit",title:w(j)("action.edit"),onClick:t=>(async e=>{var t;E("update");const i=await m(e);null==(t=w(L))||t.setValues(i)})(e.id)},null,8,["title","onClick"]),[[O,["infra:data-source-config:update"]]]),k(b(d,{preIcon:"ep:view",title:w(j)("action.detail"),onClick:t=>(async e=>{const t=await m(e);z.value=t,E("detail")})(e.id)},null,8,["title","onClick"]),[[O,["infra:data-source-config:query"]]]),k(b(d,{preIcon:"ep:delete",title:w(j)("action.del"),onClick:t=>w(X)(e.id)},null,8,["title","onClick"]),[[O,["infra:data-source-config:delete"]]])])),_:1},8,["onRegister"])])),_:1}),b(K,{modelValue:w(A),"onUpdate:modelValue":p[3]||(p[3]=e=>I(A)?A.value=e:null),title:w(B)},{footer:h((()=>[["create","update"].includes(w(q))?(g(),C(c,{key:0,type:"primary",title:w(j)("action.save"),loading:w(P),onClick:p[1]||(p[1]=e=>(async()=>{var e;const t=null==(e=w(L))?void 0:e.getElFormRef();t&&t.validate((async e=>{var t;if(e){P.value=!0;try{const e=null==(t=w(L))?void 0:t.formModel;"create"===q.value?(await n(e),_.success(j("common.createSuccess"))):(await u(e),_.success(j("common.updateSuccess"))),A.value=!1}finally{P.value=!1,await R()}}}))})())},null,8,["title","loading"])):T("",!0),b(c,{loading:w(P),title:w(j)("dialog.close"),onClick:p[2]||(p[2]=e=>A.value=!1)},null,8,["loading","title"])])),default:h((()=>[["create","update"].includes(w(q))?(g(),C(F,{key:0,schema:w(M).formSchema,rules:w(V),ref_key:"formRef",ref:L},null,8,["schema","rules"])):T("",!0),"detail"===w(q)?(g(),C(J,{key:1,schema:w(M).detailSchema,data:w(z)},null,8,["schema","data"])):T("",!0)])),_:1},8,["modelValue","title"])],64)}}});export{q as default};