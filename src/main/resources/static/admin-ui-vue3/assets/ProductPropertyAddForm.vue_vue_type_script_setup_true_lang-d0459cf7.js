import{d as U,r as s,f as j,af as B,o as c,q as f,w as u,i as d,j as y,a as l,B as D,x as H,T as I,D as R,I as S,H as T,L as z,l as E,__tla as G}from"./index-0f589822.js";import{_ as J,__tla as K}from"./Dialog.vue_vue_type_style_index_0_lang-2d188c85.js";import{e as M,f as N,__tla as O}from"./property-e9306a35.js";import{u as Q,__tla as W}from"./useMessage-45ab706e.js";let v,X=Promise.all([(()=>{try{return G}catch{}})(),(()=>{try{return K}catch{}})(),(()=>{try{return O}catch{}})(),(()=>{try{return W}catch{}})()]).then(async()=>{v=U({name:"ProductPropertyForm",__name:"ProductPropertyAddForm",props:{propertyList:{type:Array,default:()=>{}}},setup(h,{expose:V}){const b=h,{t:w}=E(),x=Q(),t=s(!1),P=s("\u6DFB\u52A0\u5546\u54C1\u5C5E\u6027"),o=s(!1),r=s({name:""}),g=j({name:[{required:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),n=s(),_=s([]);B(()=>b.propertyList,a=>{a&&(_.value=a)},{deep:!0,immediate:!0}),V({open:async()=>{t.value=!0,F()}});const k=async()=>{if(n&&await n.value.validate()){o.value=!0;try{const a=r.value,e=await M({name:a.name});if(e.length===0){const i=await N(a);_.value.push({id:i,...r.value,values:[]})}else e[0].values===null&&(e[0].values=[]),_.value.push(e[0]);x.success(w("common.createSuccess")),t.value=!1}finally{o.value=!1}}},F=()=>{var a;r.value={name:""},(a=n.value)==null||a.resetFields()};return(a,e)=>{const i=I,L=R,q=S,p=T,A=J,C=z;return c(),f(A,{modelValue:l(t),"onUpdate:modelValue":e[2]||(e[2]=m=>H(t)?t.value=m:null),title:l(P)},{footer:u(()=>[d(p,{disabled:l(o),type:"primary",onClick:k},{default:u(()=>[y("\u786E \u5B9A")]),_:1},8,["disabled"]),d(p,{onClick:e[1]||(e[1]=m=>t.value=!1)},{default:u(()=>[y("\u53D6 \u6D88")]),_:1})]),default:u(()=>[D((c(),f(q,{ref_key:"formRef",ref:n,model:l(r),rules:l(g),"label-width":"80px"},{default:u(()=>[d(L,{label:"\u5C5E\u6027\u540D\u79F0",prop:"name"},{default:u(()=>[d(i,{modelValue:l(r).name,"onUpdate:modelValue":e[0]||(e[0]=m=>l(r).name=m),placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[C,l(o)]])]),_:1},8,["modelValue","title"])}}})});export{v as _,X as __tla};
