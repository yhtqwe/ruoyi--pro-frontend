import{u as i,L as e}from"./useLogin-936bcc63.js";import{d as l,c as r,f as a,k as m,o as c,h as g,t as _}from"./index-2b36f9e3.js";const p={class:"enter-x mb-3 text-center text-2xl font-bold xl:text-left xl:text-3xl"},T=l({__name:"LoginFormTitle",setup(u){const{t}=r(),{getLoginState:o}=i(),n=a(()=>({[e.RESET_PASSWORD]:t("sys.login.forgetFormTitle"),[e.LOGIN]:t("sys.login.signInFormTitle"),[e.REGISTER]:t("sys.login.signUpFormTitle"),[e.MOBILE]:t("sys.login.mobileSignInFormTitle"),[e.QR_CODE]:t("sys.login.qrSignInFormTitle")})[m(o)]);return(s,x)=>(c(),g("h2",p,_(n.value),1))}});export{T as _};