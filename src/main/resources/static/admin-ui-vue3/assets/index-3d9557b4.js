import{ab as _,d as M,l as k,r as i,f as j,A as I,o as p,q as m,w as r,B as f,a,i as l,a3 as q,j as A,T as B,D as C,bG as H,bE as L,H as R,I as S,L as T,__tla as z}from"./index-0f589822.js";import{_ as F,__tla as J}from"./ContentWrap.vue_vue_type_script_setup_true_lang-0f1e3633.js";import{u as K,__tla as N}from"./useMessage-45ab706e.js";import{__tla as O}from"./el-card-bbdd700f.js";let y,Q=Promise.all([(()=>{try{return z}catch{}})(),(()=>{try{return J}catch{}})(),(()=>{try{return N}catch{}})(),(()=>{try{return O}catch{}})()]).then(async()=>{y=M({__name:"index",setup(W){const{t:v}=k(),V=K(),h=i(!1),n=i(!1),e=i({id:void 0,tradeDeductEnable:void 0,tradeDeductUnitPrice:void 0,tradeDeductMaxPrice:void 0,tradeGivePoint:void 0}),b=j({}),c=i(),D=async()=>{if(c&&await c.value.validate()){n.value=!0;try{const o=e.value;await(async t=>await _.put({url:"/point/config/save",data:t}))(o),V.success(v("common.updateSuccess")),h.value=!1}finally{n.value=!1}}},P=async()=>{try{const o=await(async()=>await _.get({url:"/point/config/get"}))();e.value=o}finally{}};return I(()=>{P()}),(o,t)=>{const w=B,u=C,x=H,s=L,U=R,E=S,G=F,g=T;return p(),m(G,null,{default:r(()=>[f((p(),m(E,{ref_key:"formRef",ref:c,model:a(e),rules:a(b),"label-width":"120px"},{default:r(()=>[f(l(u,{label:"hideId"},{default:r(()=>[l(w,{modelValue:a(e).id,"onUpdate:modelValue":t[0]||(t[0]=d=>a(e).id=d)},null,8,["modelValue"])]),_:1},512),[[q,!1]]),l(u,{label:"\u79EF\u5206\u62B5\u6263",prop:"tradeDeductEnable"},{default:r(()=>[l(x,{modelValue:a(e).tradeDeductEnable,"onUpdate:modelValue":t[1]||(t[1]=d=>a(e).tradeDeductEnable=d)},null,8,["modelValue"])]),_:1}),l(u,{label:"\u62B5\u6263\u5355\u4F4D(\u5206)",prop:"tradeDeductUnitPrice"},{default:r(()=>[l(s,{modelValue:a(e).tradeDeductUnitPrice,"onUpdate:modelValue":t[2]||(t[2]=d=>a(e).tradeDeductUnitPrice=d),placeholder:"\u8BF7\u8F93\u5165\u62B5\u6263\u5355\u4F4D(\u5206)",style:{width:"300px"}},null,8,["modelValue"])]),_:1}),l(u,{label:"\u79EF\u5206\u62B5\u6263\u6700\u5927\u503C",prop:"tradeDeductMaxPrice"},{default:r(()=>[l(s,{modelValue:a(e).tradeDeductMaxPrice,"onUpdate:modelValue":t[3]||(t[3]=d=>a(e).tradeDeductMaxPrice=d),placeholder:"\u8BF7\u8F93\u5165\u79EF\u5206\u62B5\u6263\u6700\u5927\u503C",style:{width:"300px"}},null,8,["modelValue"])]),_:1}),l(u,{label:"1 \u5143\u8D60\u9001\u591A\u5C11\u5206",prop:"tradeGivePoint"},{default:r(()=>[l(s,{modelValue:a(e).tradeGivePoint,"onUpdate:modelValue":t[4]||(t[4]=d=>a(e).tradeGivePoint=d),placeholder:"\u8BF7\u8F93\u5165 1 \u5143\u8D60\u9001\u591A\u5C11\u79EF\u5206",style:{width:"300px"}},null,8,["modelValue"])]),_:1}),l(u,null,{default:r(()=>[l(U,{type:"primary",onClick:D},{default:r(()=>[A("\u63D0\u4EA4")]),_:1})]),_:1})]),_:1},8,["model","rules"])),[[g,a(n)]])]),_:1})}}})});export{Q as __tla,y as default};