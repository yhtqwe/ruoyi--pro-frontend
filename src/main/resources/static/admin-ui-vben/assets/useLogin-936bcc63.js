import{r as v,f as o,k as t,c as y}from"./index-2b36f9e3.js";var F=(e=>(e[e.LOGIN=0]="LOGIN",e[e.REGISTER=1]="REGISTER",e[e.RESET_PASSWORD=2]="RESET_PASSWORD",e[e.MOBILE=3]="MOBILE",e[e.QR_CODE=4]="QR_CODE",e))(F||{});const m=v(0);function p(){function e(s){m.value=s}const r=o(()=>m.value);function a(){e(0)}return{setLoginState:e,getLoginState:r,handleBackLogin:a}}function O(e){const r=o(()=>t(e)?.validate??(u=>Promise.resolve()));async function a(){const s=t(e);return s?await s.validate():void 0}return{validate:r,validForm:a}}function I(e){const{t:r}=y(),a=o(()=>i(r("sys.login.accountPlaceholder"))),s=o(()=>i(r("sys.login.passwordPlaceholder"))),u=o(()=>i(r("sys.login.smsPlaceholder"))),R=o(()=>i(r("sys.login.mobilePlaceholder"))),f=async(c,n)=>n?Promise.resolve():Promise.reject(r("sys.login.policyPlaceholder")),P=c=>async(n,l)=>l?l!==c?Promise.reject(r("sys.login.diffPwd")):Promise.resolve():Promise.reject(r("sys.login.passwordPlaceholder"));return{getFormRules:o(()=>{const c=t(a),n=t(s),l=t(u),g=t(R),d={sms:l,mobile:g};switch(t(m)){case 1:return{account:c,password:n,confirmPassword:[{validator:P(e?.password),trigger:"change"}],policy:[{validator:f,trigger:"change"}],...d};case 2:return{account:c,...d};case 3:return d;default:return{account:c,password:n}}})}}function i(e){return[{required:!0,message:e,trigger:"change"}]}export{F as L,I as a,O as b,p as u};