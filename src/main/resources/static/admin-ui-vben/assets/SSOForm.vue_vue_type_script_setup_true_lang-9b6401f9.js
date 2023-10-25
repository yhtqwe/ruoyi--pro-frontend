import{d as M,c as V,z as $,b as A,r as C,B as y,C as L,v as N,o as g,h as w,i as U,t as f,k as r,n as i,w as c,x as p,F as S,s as q,j as K,be as j,y as O}from"./index-84bac5b8.js";import{u as G,b as H}from"./useLogin-d3e9f2d3.js";import{b as J,d as P}from"./login-98a6ed31.js";import{F}from"./index-09793f90.js";import{C as Q}from"./index-b9509bee.js";import{R as W}from"./index-9785aad3.js";import{C as X}from"./index-723fd4c3.js";const Y={class:"enter-x mb-3 text-center text-2xl font-bold xl:text-left xl:text-3xl"},ce=M({__name:"SSOForm",setup(Z){const h=F.Item,{t:a}=V(),{query:l}=$(),{notification:z,createErrorModal:I}=O(),{prefixCls:T}=A("login"),{handleBackLogin:B}=G(),_=C(),d=C(!1),m=y({scopes:[]}),s=y({responseType:void 0,clientId:void 0,redirectUri:void 0,state:void 0,scopes:[]});let k=y({name:"",logo:""});const{validForm:D}=H(_);async function R(){if(s.responseType=l.response_type,s.clientId=l.client_id,s.redirectUri=l.redirect_uri,s.state=l.state,l.scope&&(s.scopes=l.scope.split(" ")),s.scopes.length>0){const o=await v(!0,s.scopes,[]);if(!o)return;location.href=o}const n=await J(s.clientId);k=n.client;let t;if(s.scopes.length>0){t=[];for(const e of n.scopes)s.scopes.includes(e.key)&&t.push(e)}else{t=n.scopes;for(const e of t)s.scopes.push(e.key)}for(const e of t)e.value&&m.scopes.push(e.key)}async function x(n){if(await D())try{d.value=!0;let e,o;n?(e=m.scopes,o=s.scopes.filter(u=>!e.includes(u))):(e=[],o=s.scopes);const b=await v(!1,e,o);if(b){const u=b;if(!u)return;location.href=u,z.success({message:a("sys.login.loginSuccessTitle"),description:`${a("sys.login.loginSuccessDesc")}`,duration:3})}}catch(e){I({title:a("sys.api.errorTip"),content:e.message||a("sys.api.networkExceptionMsg"),getContainer:()=>document.body.querySelector(`.${T}`)||document.body})}finally{d.value=!1}}async function v(n,t,e){return await P(s.responseType,s.clientId,s.redirectUri,s.state,n,t,e)}function E(n){switch(n){case"user.read":return a("sys.login.ssoInfoDesc");case"user.write":return a("sys.login.ssoEditDesc");default:return n}}return L(()=>{R()}),(n,t)=>{const e=N("a-button");return g(),w(S,null,[U("h2",Y,f(r(k).name+r(a)("sys.login.ssoSignInFormTitle")),1),i(r(F),{ref_key:"formRef",ref:_,class:"enter-x p-4",model:m,onKeypress:t[1]||(t[1]=j(o=>x(!0),["enter"]))},{default:c(()=>[p(" 此第三方应用请求获取以下权限： "),i(r(W),{class:"enter-x"},{default:c(()=>[i(r(X),{span:12},{default:c(()=>[(g(!0),w(S,null,q(s.scopes,o=>(g(),K(r(h),{key:o},{default:c(()=>[i(r(Q),{checked:o,size:"small"},{default:c(()=>[i(e,{type:"link",size:"small"},{default:c(()=>[p(f(E(o)),1)]),_:2},1024)]),_:2},1032,["checked"])]),_:2},1024))),128))]),_:1})]),_:1}),i(r(h),{class:"enter-x"},{default:c(()=>[i(e,{type:"primary",size:"large",block:"",loading:d.value,onClick:t[0]||(t[0]=o=>x(!0))},{default:c(()=>[p(f(r(a)("sys.login.loginButton")),1)]),_:1},8,["loading"]),i(e,{size:"large",class:"enter-x mt-4",block:"",onClick:r(B)},{default:c(()=>[p(f(r(a)("common.cancelText")),1)]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])],64)}}});export{ce as _};
