import{d as B,c7 as E,b as H,r as V,f as S,o as n,c as I,a as r,g as w,t as T,i as a,w as l,q as P,j as g,x as Q,n as R,_ as W,H as D,cd as F,E as G,b7 as J,$ as K,a0 as L,__tla as N}from"./index-0f589822.js";import{W as O,__tla as X}from"./main-35b60c4f.js";import Y,{__tla as Z}from"./main-825c456e.js";import{u as aa,U as ta,__tla as ea}from"./useUpload-1decc2bd.js";import{u as la,__tla as ra}from"./useMessage-45ab706e.js";import{_ as _a}from"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as sa}from"./index.vue_vue_type_script_setup_true_lang-75e3d81d.js";import{__tla as ca}from"./index-331b9b98.js";import{__tla as oa}from"./main-9544ad63.js";import{__tla as ua}from"./el-image-9c2dd802.js";import{__tla as ia}from"./el-image-viewer-863e3dd0.js";import{__tla as na}from"./main.vue_vue_type_script_setup_true_lang-18c2634c.js";import{__tla as ma}from"./index-c94142a7.js";import{__tla as da}from"./index-309bb1eb.js";import{__tla as pa}from"./formatTime-58783104.js";let k,fa=Promise.all([(()=>{try{return N}catch{}})(),(()=>{try{return X}catch{}})(),(()=>{try{return Z}catch{}})(),(()=>{try{return ea}catch{}})(),(()=>{try{return ra}catch{}})(),(()=>{try{return sa}catch{}})(),(()=>{try{return ca}catch{}})(),(()=>{try{return oa}catch{}})(),(()=>{try{return ua}catch{}})(),(()=>{try{return ia}catch{}})(),(()=>{try{return na}catch{}})(),(()=>{try{return ma}catch{}})(),(()=>{try{return da}catch{}})(),(()=>{try{return pa}catch{}})()]).then(async()=>{let m,d,p;m={key:0,class:"select-item2"},d={class:"item-name"},p=(_=>(K("data-v-4ce36eb4"),_=_(),L(),_))(()=>w("div",{class:"el-upload__tip"}," \u683C\u5F0F\u652F\u6301 mp3/wma/wav/amr\uFF0C\u6587\u4EF6\u5927\u5C0F\u4E0D\u8D85\u8FC7 2M\uFF0C\u64AD\u653E\u957F\u5EA6\u4E0D\u8D85\u8FC7 60s ",-1)),k=_a(B({__name:"TabVoice",props:{modelValue:{}},emits:["update:modelValue"],setup(_,{emit:x}){const j=_,M=la(),C={Authorization:"Bearer "+E()},e=H({get:()=>j.modelValue,set:t=>x("update:modelValue",t)}),s=V(!1),f=V([]),o=S({accountId:e.value.accountId,type:"voice",title:"",introduction:""}),U=t=>aa(ta.Voice,10)(t),$=t=>{if(t.code!==0)return M.error("\u4E0A\u4F20\u51FA\u9519\uFF1A"+t.msg),!1;f.value=[],o.title="",o.introduction="",y(t.data)},q=()=>{e.value.mediaId=null,e.value.url=null,e.value.name=null},y=t=>{s.value=!1,e.value.mediaId=t.mediaId,e.value.url=t.url,e.value.name=t.name};return(t,c)=>{const u=R,h=W,i=D,z=F,v=G,A=J;return n(),I("div",null,[r(e).url?(n(),I("div",m,[w("p",d,T(r(e).name),1),a(u,{class:"ope-row",justify:"center"},{default:l(()=>[a(r(Y),{url:r(e).url},null,8,["url"])]),_:1}),a(u,{class:"ope-row",justify:"center"},{default:l(()=>[a(i,{type:"danger",circle:"",onClick:q},{default:l(()=>[a(h,{icon:"ep:delete"})]),_:1})]),_:1})])):(n(),P(u,{key:1,style:{"text-align":"center"}},{default:l(()=>[a(v,{span:12,class:"col-select"},{default:l(()=>[a(i,{type:"success",onClick:c[0]||(c[0]=b=>s.value=!0)},{default:l(()=>[g(" \u7D20\u6750\u5E93\u9009\u62E9"),a(h,{icon:"ep:circle-check"})]),_:1}),a(z,{title:"\u9009\u62E9\u8BED\u97F3",modelValue:r(s),"onUpdate:modelValue":c[1]||(c[1]=b=>Q(s)?s.value=b:null),width:"90%","append-to-body":"","destroy-on-close":""},{default:l(()=>[a(r(O),{type:"voice","account-id":r(e).accountId,onSelectMaterial:y},null,8,["account-id"])]),_:1},8,["modelValue"])]),_:1}),a(v,{span:12,class:"col-add"},{default:l(()=>[a(A,{action:"/admin-api/mp/material/upload-temporary",headers:C,multiple:"",limit:1,"file-list":r(f),data:r(o),"before-upload":U,"on-success":$},{tip:l(()=>[p]),default:l(()=>[a(i,{type:"primary"},{default:l(()=>[g("\u70B9\u51FB\u4E0A\u4F20")]),_:1})]),_:1},8,["file-list","data"])]),_:1})]),_:1}))])}}}),[["__scopeId","data-v-4ce36eb4"]])});export{fa as __tla,k as default};