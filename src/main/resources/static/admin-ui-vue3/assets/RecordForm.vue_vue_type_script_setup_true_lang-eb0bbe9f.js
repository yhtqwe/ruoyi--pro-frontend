import{ab as _,d as N,l as O,r as n,f as G,o as m,q as f,w as d,i as t,a,j as I,B as H,c as U,F as P,k as x,x as L,T as Y,D as Z,M as J,C as K,G as Q,I as W,H as X,L as $,__tla as ee}from"./index-0f589822.js";import{_ as ae,__tla as le}from"./Dialog.vue_vue_type_style_index_0_lang-2d188c85.js";import{_ as te,__tla as oe}from"./style.css_vue_type_style_index_0_src_true_lang-317ea815.js";import{c as de,D,a as ue,__tla as ie}from"./dict-f9a1a53b.js";import{u as re,__tla as se}from"./useMessage-45ab706e.js";let k,E,pe=Promise.all([(()=>{try{return ee}catch{}})(),(()=>{try{return le}catch{}})(),(()=>{try{return oe}catch{}})(),(()=>{try{return ie}catch{}})(),(()=>{try{return se}catch{}})()]).then(async()=>{E=async h=>await _.get({url:"/point/record/page",params:h}),k=N({__name:"RecordForm",emits:["success"],setup(h,{expose:M,emit:B}){const{t:V}=O(),T=re(),s=n(!1),g=n(""),p=n(!1),w=n(""),o=n({id:void 0,bizId:void 0,bizType:void 0,type:void 0,title:void 0,description:void 0,point:void 0,totalPoint:void 0,status:void 0,userId:void 0,freezingTime:void 0,thawingTime:void 0,createDate:void 0}),C=G({totalPoint:[{required:!0,message:"\u53D8\u52A8\u540E\u7684\u79EF\u5206\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),c=n();M({open:async(i,e)=>{if(s.value=!0,g.value=V("action."+i),w.value=i,S(),e){p.value=!0;try{o.value=await(async r=>await _.get({url:"/point/record/get?id="+r}))(e)}finally{p.value=!1}}}});const R=async()=>{if(c&&await c.value.validate()){p.value=!0;try{const i=o.value;w.value==="create"?(await(async e=>await _.post({url:"/point/record/create",data:e}))(i),T.success(V("common.createSuccess"))):(await(async e=>await _.put({url:"/point/record/update",data:e}))(i),T.success(V("common.updateSuccess"))),s.value=!1,B("success")}finally{p.value=!1}}},S=()=>{var i;o.value={id:void 0,bizId:void 0,bizType:void 0,type:void 0,title:void 0,description:void 0,point:void 0,totalPoint:void 0,status:void 0,userId:void 0,freezingTime:void 0,thawingTime:void 0,createDate:void 0},(i=c.value)==null||i.resetFields()};return(i,e)=>{const r=Y,u=Z,v=J,b=K,F=te,y=Q,j=W,z=X,q=ae,A=$;return m(),f(q,{title:a(g),modelValue:a(s),"onUpdate:modelValue":e[12]||(e[12]=l=>L(s)?s.value=l:null)},{footer:d(()=>[t(z,{onClick:R,type:"primary",disabled:a(p)},{default:d(()=>[I("\u786E \u5B9A")]),_:1},8,["disabled"]),t(z,{onClick:e[11]||(e[11]=l=>s.value=!1)},{default:d(()=>[I("\u53D6 \u6D88")]),_:1})]),default:d(()=>[H((m(),f(j,{ref_key:"formRef",ref:c,model:a(o),rules:a(C),"label-width":"120px"},{default:d(()=>[t(u,{label:"\u4E1A\u52A1\u7F16\u7801",prop:"bizId"},{default:d(()=>[t(r,{modelValue:a(o).bizId,"onUpdate:modelValue":e[0]||(e[0]=l=>a(o).bizId=l),placeholder:"\u8BF7\u8F93\u5165\u4E1A\u52A1\u7F16\u7801"},null,8,["modelValue"])]),_:1}),t(u,{label:"\u4E1A\u52A1\u7C7B\u578B",prop:"bizType"},{default:d(()=>[t(b,{modelValue:a(o).bizType,"onUpdate:modelValue":e[1]||(e[1]=l=>a(o).bizType=l),placeholder:"\u8BF7\u9009\u62E9\u4E1A\u52A1\u7C7B\u578B"},{default:d(()=>[(m(!0),U(P,null,x(a(de)(a(D).MEMBER_POINT_BIZ_TYPE),l=>(m(),f(v,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(u,{label:"\u64CD\u4F5C\u7C7B\u578B",prop:"type"},{default:d(()=>[t(b,{modelValue:a(o).type,"onUpdate:modelValue":e[2]||(e[2]=l=>a(o).type=l),placeholder:"\u64CD\u4F5C\u7C7B\u578B"},{default:d(()=>[t(v,{label:"\u589E\u52A0",value:"1"}),t(v,{label:"\u6263\u51CF",value:"0"})]),_:1},8,["modelValue"])]),_:1}),t(u,{label:"\u79EF\u5206\u6807\u9898",prop:"title"},{default:d(()=>[t(r,{modelValue:a(o).title,"onUpdate:modelValue":e[3]||(e[3]=l=>a(o).title=l),placeholder:"\u8BF7\u8F93\u5165\u79EF\u5206\u6807\u9898"},null,8,["modelValue"])]),_:1}),t(u,{label:"\u79EF\u5206\u63CF\u8FF0"},{default:d(()=>[t(F,{"model-value":a(o).description,height:"150px"},null,8,["model-value"])]),_:1}),t(u,{label:"\u79EF\u5206",prop:"point"},{default:d(()=>[t(r,{modelValue:a(o).point,"onUpdate:modelValue":e[4]||(e[4]=l=>a(o).point=l),placeholder:"\u8BF7\u8F93\u5165\u79EF\u5206"},null,8,["modelValue"])]),_:1}),t(u,{label:"\u53D8\u52A8\u540E\u7684\u79EF\u5206",prop:"totalPoint"},{default:d(()=>[t(r,{modelValue:a(o).totalPoint,"onUpdate:modelValue":e[5]||(e[5]=l=>a(o).totalPoint=l),placeholder:"\u8BF7\u8F93\u5165\u53D8\u52A8\u540E\u7684\u79EF\u5206"},null,8,["modelValue"])]),_:1}),t(u,{label:"\u79EF\u5206\u72B6\u6001",prop:"status"},{default:d(()=>[t(b,{modelValue:a(o).status,"onUpdate:modelValue":e[6]||(e[6]=l=>a(o).status=l),placeholder:"\u79EF\u5206\u72B6\u6001"},{default:d(()=>[(m(!0),U(P,null,x(a(ue)(a(D).MEMBER_POINT_STATUS),l=>(m(),f(v,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(u,{label:"\u7528\u6237id",prop:"userId"},{default:d(()=>[t(r,{modelValue:a(o).userId,"onUpdate:modelValue":e[7]||(e[7]=l=>a(o).userId=l),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237id"},null,8,["modelValue"])]),_:1}),t(u,{label:"\u51BB\u7ED3\u65F6\u95F4",prop:"freezingTime"},{default:d(()=>[t(y,{modelValue:a(o).freezingTime,"onUpdate:modelValue":e[8]||(e[8]=l=>a(o).freezingTime=l),type:"date","value-format":"x",placeholder:"\u9009\u62E9\u51BB\u7ED3\u65F6\u95F4"},null,8,["modelValue"])]),_:1}),t(u,{label:"\u89E3\u51BB\u65F6\u95F4",prop:"thawingTime"},{default:d(()=>[t(y,{modelValue:a(o).thawingTime,"onUpdate:modelValue":e[9]||(e[9]=l=>a(o).thawingTime=l),type:"date","value-format":"x",placeholder:"\u9009\u62E9\u89E3\u51BB\u65F6\u95F4"},null,8,["modelValue"])]),_:1}),t(u,{label:"\u53D1\u751F\u65F6\u95F4",prop:"createDate"},{default:d(()=>[t(y,{modelValue:a(o).createDate,"onUpdate:modelValue":e[10]||(e[10]=l=>a(o).createDate=l),type:"date","value-format":"x",placeholder:"\u9009\u62E9\u53D1\u751F\u65F6\u95F4"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[A,a(p)]])]),_:1},8,["title","modelValue"])}}})});export{k as _,pe as __tla,E as g};
