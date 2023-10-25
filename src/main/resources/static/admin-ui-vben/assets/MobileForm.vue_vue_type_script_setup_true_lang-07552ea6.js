import{_ as P}from"./LoginFormTitle.vue_vue_type_script_setup_true_lang-42215462.js";import{u as j,a as q,b as G,L as O}from"./useLogin-d3e9f2d3.js";import{C as A}from"./index-3e1b457d.js";import{d as H,c as J,b as K,u as Q,a_ as W,a3 as X,r as i,B as Y,f as Z,k as e,v as ee,o as v,h as ae,n as o,w as l,j as oe,ba as C,l as _,x,t as h,y as se,bf as te}from"./index-84bac5b8.js";import{V as ne}from"./index-a451c852.js";import{s as le,g as ie}from"./login-98a6ed31.js";import{F as k}from"./index-09793f90.js";const re={key:0},be=H({__name:"MobileForm",setup(ce){const c=k.Item,{t:s}=J(),{prefixCls:S}=K("login"),{createMessage:w,notification:I,createErrorModal:N}=se(),{handleBackLogin:T,getLoginState:z}=j(),{tenantEnable:d,captchaEnable:B}=Q(),{getFormRules:F}=q(),L=W(),E=X(),f=i(),u=i(!1),m=i(0),V=i(21),p=i(),M=i("blockPuzzle"),t=Y({tenantName:"芋道源码",mobile:"",mobileCode:"",captchaVerification:""}),{validForm:g}=G(f),D=Z(()=>e(z)===O.MOBILE);async function R(){B==="false"?await y():p.value.show()}async function U(){if(d==="true"){const n=await ie(t.tenantName);te(n)}}async function y(){const n=await g();if(n)try{u.value=!0;const a=await L.smsLogin({mobile:n.mobile,code:n.mobileCode,mode:"none"});a&&(await E.changePermissionCode(a.permissions),I.success({message:s("sys.login.loginSuccessTitle"),description:`${s("sys.login.loginSuccessDesc")}: ${a.user.nickname}`,duration:3}))}catch(a){N({title:s("sys.api.errorTip"),content:a.message||s("sys.api.networkExceptionMsg"),getContainer:()=>document.body.querySelector(`.${S}`)||document.body})}finally{u.value=!1}}async function $(){if(await U(),m.value>0||!await g())return;await le(t.mobile,V.value)&&(w.success(s("common.successText")),m.value=60)}return(n,a)=>{const b=ee("a-button");return D.value?(v(),ae("div",re,[o(P,{class:"enter-x"}),o(e(k),{ref_key:"formRef",ref:f,class:"enter-x p-4",model:t,rules:e(F)},{default:l(()=>[o(e(c),{name:"tenantName",class:"enter-x"},{default:l(()=>[e(d)==="true"?(v(),oe(e(C),{key:0,value:t.tenantName,"onUpdate:value":a[0]||(a[0]=r=>t.tenantName=r),size:"large",placeholder:e(s)("sys.login.tenantName"),class:"fix-auto-fill"},null,8,["value","placeholder"])):_("",!0)]),_:1}),o(e(c),{name:"mobile",class:"enter-x"},{default:l(()=>[o(e(C),{value:t.mobile,"onUpdate:value":a[1]||(a[1]=r=>t.mobile=r),size:"large",placeholder:e(s)("sys.login.mobile"),class:"fix-auto-fill"},null,8,["value","placeholder"])]),_:1}),o(e(c),{name:"mobileCode",class:"enter-x"},{default:l(()=>[o(e(A),{value:t.mobileCode,"onUpdate:value":a[2]||(a[2]=r=>t.mobileCode=r),size:"large",class:"fix-auto-fill",count:m.value,"send-code-api":$,placeholder:e(s)("sys.login.smsCode")},null,8,["value","count","placeholder"])]),_:1}),o(e(c),{class:"enter-x"},{default:l(()=>[o(b,{type:"primary",size:"large",block:"",loading:u.value,onClick:R},{default:l(()=>[x(h(e(s)("sys.login.loginButton")),1)]),_:1},8,["loading"]),o(b,{size:"large",block:"",class:"mt-4",onClick:e(T)},{default:l(()=>[x(h(e(s)("sys.login.backSignIn")),1)]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"]),o(e(ne),{ref_key:"verify",ref:p,mode:"pop","captcha-type":M.value,"img-size":{width:"400px",height:"200px"},onSuccess:y},null,8,["captcha-type"])])):_("",!0)}}});export{be as _};
