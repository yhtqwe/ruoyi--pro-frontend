import{ab as n,d as x,r as h,N as A,A as F,af as B,o as u,q as I,w as p,i as o,g as w,t as J,c as g,j as v,F as U,a as K,J as N,K as P,__tla as R}from"./index-0f589822.js";import{_ as z,__tla as D}from"./XTextButton-f2bb1cf5.js";import{S as k}from"./constants-c9e2dac8.js";import{g as E,__tla as G}from"./profile-1a5a9953.js";import{u as H,__tla as L}from"./useMessage-45ab706e.js";let b,M=Promise.all([(()=>{try{return R}catch{}})(),(()=>{try{return D}catch{}})(),(()=>{try{return G}catch{}})(),(()=>{try{return L}catch{}})()]).then(async()=>{let d,y;d=["src"],y={class:"mr-5"},b=x({name:"UserSocial",__name:"UserSocial",setup(O){const _=H(),m=h([]),i=h(),f=async()=>{var e;const t=await E();i.value=t;for(const a in k){const s={...k[a]};if(m.value.push(s),(e=i.value)==null?void 0:e.socialUsers){for(const l in i.value.socialUsers)if(s.type===i.value.socialUsers[l].type){s.openid=i.value.socialUsers[l].openid;break}}}},c=A(),q=()=>{const t=c.query.type,e=c.query.code,a=c.query.state;e&&((s,l,r)=>n.post({url:"/system/social-user/bind",data:{type:s,code:l,state:r}}))(t,e,a).then(()=>{_.success("\u7ED1\u5B9A\u6210\u529F"),f()})},C=t=>{const e=location.origin+"/user/profile?type="+t.type;((a,s)=>n.get({url:"/system/auth/social-auth-redirect?type="+a+"&redirectUri="+s}))(t.type,encodeURIComponent(e)).then(a=>{window.location.href=a})},S=async t=>{var e,a;await(e=t.type,a=t.openid,n.delete({url:"/system/social-user/unbind",data:{type:e,openid:a}}))&&(t.openid=void 0),_.success("\u89E3\u7ED1\u6210\u529F")};return F(async()=>{await f()}),B(()=>c,t=>{q()},{immediate:!0}),(t,e)=>{const a=N,s=z,l=P;return u(),I(l,{data:K(m),"show-header":!1},{default:p(()=>[o(a,{fixed:"left",title:"\u5E8F\u53F7",type:"seq",width:"60"}),o(a,{align:"left",label:"\u793E\u4EA4\u5E73\u53F0",width:"120"},{default:p(({row:r})=>[w("img",{src:r.img,alt:"",class:"h-5 align-middle"},null,8,d),w("p",y,J(r.title),1)]),_:1}),o(a,{align:"center",label:"\u64CD\u4F5C"},{default:p(({row:r})=>[r.openid?(u(),g(U,{key:0},[v(" \u5DF2\u7ED1\u5B9A "),o(s,{class:"mr-5",title:"(\u89E3\u7ED1)",type:"primary",onClick:j=>S(r)},null,8,["onClick"])],64)):(u(),g(U,{key:1},[v(" \u672A\u7ED1\u5B9A "),o(s,{class:"mr-5",title:"(\u7ED1\u5B9A)",type:"primary",onClick:j=>C(r)},null,8,["onClick"])],64))]),_:1})]),_:1},8,["data"])}}})});export{b as _,M as __tla};
