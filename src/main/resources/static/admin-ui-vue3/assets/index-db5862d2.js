import{d as $,l as aa,r as i,f as ea,A as ta,O as la,o as n,c as w,i as a,w as l,a as t,P as S,F as k,k as A,q as u,j as c,B as g,t as I,a1 as ra,T as oa,D as na,M as sa,C as ca,G as ua,_ as pa,H as ia,I as _a,J as ma,a4 as da,K as fa,L as ya,__tla as ga}from"./index-0f589822.js";import{_ as ha,__tla as ba}from"./index.vue_vue_type_script_setup_true_lang-75e3d81d.js";import{_ as wa,__tla as ka}from"./DictTag.vue_vue_type_script_lang-9c2c480d.js";import{_ as va,__tla as xa}from"./ContentWrap.vue_vue_type_script_setup_true_lang-0f1e3633.js";import{_ as Ca,__tla as Va}from"./index-10415b69.js";import{a as Ma,D as P,__tla as Sa}from"./dict-f9a1a53b.js";import{d as q,__tla as Ta}from"./formatTime-58783104.js";import{d as Na}from"./download-20922b56.js";import{_ as Ua,g as Ka,d as Da,e as Oa,__tla as Ya}from"./TenantForm.vue_vue_type_script_setup_true_lang-5768cbe5.js";import{g as Aa,__tla as Ia}from"./index-aa4bce66.js";import{u as Pa,__tla as qa}from"./useMessage-45ab706e.js";import{__tla as za}from"./index-331b9b98.js";import"./color-a8b4eb58.js";import{__tla as Fa}from"./el-card-bbdd700f.js";import"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as Ha}from"./Dialog.vue_vue_type_style_index_0_lang-2d188c85.js";import"./constants-c9e2dac8.js";let z,Ra=Promise.all([(()=>{try{return ga}catch{}})(),(()=>{try{return ba}catch{}})(),(()=>{try{return ka}catch{}})(),(()=>{try{return xa}catch{}})(),(()=>{try{return Va}catch{}})(),(()=>{try{return Sa}catch{}})(),(()=>{try{return Ta}catch{}})(),(()=>{try{return Ya}catch{}})(),(()=>{try{return Ia}catch{}})(),(()=>{try{return qa}catch{}})(),(()=>{try{return za}catch{}})(),(()=>{try{return Fa}catch{}})(),(()=>{try{return Ha}catch{}})()]).then(async()=>{z=$({name:"SystemTenant",__name:"index",setup(Ba){const v=Pa(),{t:F}=aa(),x=i(!0),T=i(0),N=i([]),r=ea({pageNo:1,pageSize:10,name:void 0,contactName:void 0,contactMobile:void 0,status:void 0,createTime:[]}),U=i(),C=i(!1),K=i([]),d=async()=>{x.value=!0;try{const p=await Ka(r);N.value=p.list,T.value=p.total}finally{x.value=!1}},f=()=>{r.pageNo=1,d()},H=()=>{U.value.resetFields(),f()},D=i(),O=(p,o)=>{D.value.open(p,o)},R=async()=>{try{await v.exportConfirm(),C.value=!0;const p=await Oa(r);Na.excel(p,"\u79DF\u6237\u5217\u8868.xls")}catch{}finally{C.value=!1}};return ta(async()=>{await d(),K.value=await Aa()}),(p,o)=>{const B=Ca,V=oa,_=na,G=sa,j=ca,J=ua,h=pa,m=ia,L=_a,Y=va,s=ma,M=da,E=wa,Q=fa,W=ha,b=la("hasPermi"),X=ya;return n(),w(k,null,[a(B,{title:"SaaS \u591A\u79DF\u6237",url:"https://doc.iocoder.cn/saas-tenant/"}),a(Y,null,{default:l(()=>[a(L,{class:"-mb-15px",model:t(r),ref_key:"queryFormRef",ref:U,inline:!0,"label-width":"68px"},{default:l(()=>[a(_,{label:"\u79DF\u6237\u540D",prop:"name"},{default:l(()=>[a(V,{modelValue:t(r).name,"onUpdate:modelValue":o[0]||(o[0]=e=>t(r).name=e),placeholder:"\u8BF7\u8F93\u5165\u79DF\u6237\u540D",clearable:"",onKeyup:S(f,["enter"]),class:"!w-240px"},null,8,["modelValue","onKeyup"])]),_:1}),a(_,{label:"\u8054\u7CFB\u4EBA",prop:"contactName"},{default:l(()=>[a(V,{modelValue:t(r).contactName,"onUpdate:modelValue":o[1]||(o[1]=e=>t(r).contactName=e),placeholder:"\u8BF7\u8F93\u5165\u8054\u7CFB\u4EBA",clearable:"",onKeyup:S(f,["enter"]),class:"!w-240px"},null,8,["modelValue","onKeyup"])]),_:1}),a(_,{label:"\u8054\u7CFB\u624B\u673A",prop:"contactMobile"},{default:l(()=>[a(V,{modelValue:t(r).contactMobile,"onUpdate:modelValue":o[2]||(o[2]=e=>t(r).contactMobile=e),placeholder:"\u8BF7\u8F93\u5165\u8054\u7CFB\u624B\u673A",clearable:"",onKeyup:S(f,["enter"]),class:"!w-240px"},null,8,["modelValue","onKeyup"])]),_:1}),a(_,{label:"\u79DF\u6237\u72B6\u6001",prop:"status"},{default:l(()=>[a(j,{modelValue:t(r).status,"onUpdate:modelValue":o[3]||(o[3]=e=>t(r).status=e),placeholder:"\u8BF7\u9009\u62E9\u79DF\u6237\u72B6\u6001",clearable:"",class:"!w-240px"},{default:l(()=>[(n(!0),w(k,null,A(t(Ma)(t(P).COMMON_STATUS),e=>(n(),u(G,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(_,{label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime"},{default:l(()=>[a(J,{modelValue:t(r).createTime,"onUpdate:modelValue":o[4]||(o[4]=e=>t(r).createTime=e),"value-format":"YYYY-MM-DD HH:mm:ss",type:"daterange","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F","default-time":[new Date("1 00:00:00"),new Date("1 23:59:59")],class:"!w-240px"},null,8,["modelValue","default-time"])]),_:1}),a(_,null,{default:l(()=>[a(m,{onClick:f},{default:l(()=>[a(h,{icon:"ep:search",class:"mr-5px"}),c(" \u641C\u7D22 ")]),_:1}),a(m,{onClick:H},{default:l(()=>[a(h,{icon:"ep:refresh",class:"mr-5px"}),c(" \u91CD\u7F6E ")]),_:1}),g((n(),u(m,{type:"primary",plain:"",onClick:o[5]||(o[5]=e=>O("create"))},{default:l(()=>[a(h,{icon:"ep:plus",class:"mr-5px"}),c(" \u65B0\u589E ")]),_:1})),[[b,["system:tenant:create"]]]),g((n(),u(m,{type:"success",plain:"",onClick:R,loading:t(C)},{default:l(()=>[a(h,{icon:"ep:download",class:"mr-5px"}),c(" \u5BFC\u51FA ")]),_:1},8,["loading"])),[[b,["system:tenant:export"]]])]),_:1})]),_:1},8,["model"])]),_:1}),a(Y,null,{default:l(()=>[g((n(),u(Q,{data:t(N)},{default:l(()=>[a(s,{label:"\u79DF\u6237\u7F16\u53F7",align:"center",prop:"id"}),a(s,{label:"\u79DF\u6237\u540D",align:"center",prop:"name"}),a(s,{label:"\u79DF\u6237\u5957\u9910",align:"center",prop:"packageId"},{default:l(e=>[e.row.packageId===0?(n(),u(M,{key:0,type:"danger"},{default:l(()=>[c("\u7CFB\u7EDF\u79DF\u6237")]),_:1})):(n(!0),w(k,{key:1},A(t(K),y=>(n(),w(k,null,[y.id===e.row.packageId?(n(),u(M,{type:"success",key:y.id},{default:l(()=>[c(I(y.name),1)]),_:2},1024)):ra("",!0)],64))),256))]),_:1}),a(s,{label:"\u8054\u7CFB\u4EBA",align:"center",prop:"contactName"}),a(s,{label:"\u8054\u7CFB\u624B\u673A",align:"center",prop:"contactMobile"}),a(s,{label:"\u8D26\u53F7\u989D\u5EA6",align:"center",prop:"accountCount"},{default:l(e=>[a(M,null,{default:l(()=>[c(I(e.row.accountCount),1)]),_:2},1024)]),_:1}),a(s,{label:"\u8FC7\u671F\u65F6\u95F4",align:"center",prop:"expireTime",width:"180",formatter:t(q)},null,8,["formatter"]),a(s,{label:"\u7ED1\u5B9A\u57DF\u540D",align:"center",prop:"domain",width:"180"}),a(s,{label:"\u79DF\u6237\u72B6\u6001",align:"center",prop:"status"},{default:l(e=>[a(E,{type:t(P).COMMON_STATUS,value:e.row.status},null,8,["type","value"])]),_:1}),a(s,{label:"\u521B\u5EFA\u65F6\u95F4",align:"center",prop:"createTime",width:"180",formatter:t(q)},null,8,["formatter"]),a(s,{label:"\u64CD\u4F5C",align:"center","min-width":"110",fixed:"right"},{default:l(e=>[g((n(),u(m,{link:"",type:"primary",onClick:y=>O("update",e.row.id)},{default:l(()=>[c(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[b,["system:tenant:update"]]]),g((n(),u(m,{link:"",type:"danger",onClick:y=>(async Z=>{try{await v.delConfirm(),await Da(Z),v.success(F("common.delSuccess")),await d()}catch{}})(e.row.id)},{default:l(()=>[c(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[b,["system:tenant:delete"]]])]),_:1})]),_:1},8,["data"])),[[X,t(x)]]),a(W,{total:t(T),page:t(r).pageNo,"onUpdate:page":o[6]||(o[6]=e=>t(r).pageNo=e),limit:t(r).pageSize,"onUpdate:limit":o[7]||(o[7]=e=>t(r).pageSize=e),onPagination:d},null,8,["total","page","limit"])]),_:1}),a(Ua,{ref_key:"formRef",ref:D,onSuccess:d},null,512)],64)}}})});export{Ra as __tla,z as default};
