import{_ as h}from"./LoginFormTitle.vue_vue_type_script_setup_true_lang-671f13b1.js";import{a as z,bq as i,c as S,z as c,B as F,f as I,k as e,o as R,h as P,n as s,w as t,v as u,t as m,N as p,l as B}from"./index-8b526734.js";import{F as f}from"./index-03ea37ad.js";import"./index-3e87b811.js";import{C as U}from"./index-d2d20fb4.js";import{S as L}from"./index-c8286d7f.js";import{C as N}from"./index-47ca6c32.js";import{u as E,a as V,b as T,L as D}from"./useLogin-ae32d63a.js";const q={key:0},Q=z({__name:"RegisterForm",setup(G){const r=f.Item,g=i.Password,{t:n}=S(),{handleBackLogin:v,getLoginState:y}=E(),d=c(),x=c(!1),a=F({account:"",password:"",confirmPassword:"",mobile:"",sms:"",policy:!1}),{getFormRules:w}=V(a),{validForm:k}=T(d),_=I(()=>e(y)===D.REGISTER);async function b(){await k()}return(C,o)=>_.value?(R(),P("div",q,[s(h,{class:"enter-x"}),s(e(f),{class:"p-4 enter-x",model:a,rules:e(w),ref_key:"formRef",ref:d},{default:t(()=>[s(e(r),{name:"account",class:"enter-x"},{default:t(()=>[s(e(i),{class:"fix-auto-fill",size:"large",value:a.account,"onUpdate:value":o[0]||(o[0]=l=>a.account=l),placeholder:e(n)("sys.login.userName")},null,8,["value","placeholder"])]),_:1}),s(e(r),{name:"mobile",class:"enter-x"},{default:t(()=>[s(e(i),{size:"large",value:a.mobile,"onUpdate:value":o[1]||(o[1]=l=>a.mobile=l),placeholder:e(n)("sys.login.mobile"),class:"fix-auto-fill"},null,8,["value","placeholder"])]),_:1}),s(e(r),{name:"sms",class:"enter-x"},{default:t(()=>[s(e(N),{size:"large",class:"fix-auto-fill",value:a.sms,"onUpdate:value":o[2]||(o[2]=l=>a.sms=l),placeholder:e(n)("sys.login.smsCode")},null,8,["value","placeholder"])]),_:1}),s(e(r),{name:"password",class:"enter-x"},{default:t(()=>[s(e(L),{size:"large",value:a.password,"onUpdate:value":o[3]||(o[3]=l=>a.password=l),placeholder:e(n)("sys.login.password")},null,8,["value","placeholder"])]),_:1}),s(e(r),{name:"confirmPassword",class:"enter-x"},{default:t(()=>[s(e(g),{size:"large",visibilityToggle:"",value:a.confirmPassword,"onUpdate:value":o[4]||(o[4]=l=>a.confirmPassword=l),placeholder:e(n)("sys.login.confirmPassword")},null,8,["value","placeholder"])]),_:1}),s(e(r),{class:"enter-x",name:"policy"},{default:t(()=>[s(e(U),{checked:a.policy,"onUpdate:checked":o[5]||(o[5]=l=>a.policy=l),size:"small"},{default:t(()=>[u(m(e(n)("sys.login.policy")),1)]),_:1},8,["checked"])]),_:1}),s(e(p),{type:"primary",class:"enter-x",size:"large",block:"",onClick:b,loading:x.value},{default:t(()=>[u(m(e(n)("sys.login.registerButton")),1)]),_:1},8,["loading"]),s(e(p),{size:"large",block:"",class:"mt-4 enter-x",onClick:e(v)},{default:t(()=>[u(m(e(n)("sys.login.backSignIn")),1)]),_:1},8,["onClick"])]),_:1},8,["model","rules"])])):B("",!0)}});export{Q as _};
