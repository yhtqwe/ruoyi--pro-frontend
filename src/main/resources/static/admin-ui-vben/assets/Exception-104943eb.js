import{a as N,J as e,z as O,y as R,K as S,L as A,c as k,b as G,f as d,k as s,M as f,n as c,N as v}from"./index-8b526734.js";import{R as P}from"./index-10ea0885.js";const C="/admin-ui-vben/assets/no-data-f7e550cc.svg",D="/admin-ui-vben/assets/net-error-61b7e6df.svg",L=N({name:"ErrorPage",props:{status:{type:Number,default:e.PAGE_NOT_FOUND},title:{type:String,default:""},subTitle:{type:String,default:""},full:{type:Boolean,default:!1}},setup(n){const a=O(new Map),{query:m}=R(),o=S(),r=A(),{t}=k(),{prefixCls:p}=G("app-exception-page"),x=d(()=>{const{status:l}=m,{status:i}=n;return Number(l)||i}),E=d(()=>s(a).get(s(x))),b=t("sys.exception.backLogin"),u=t("sys.exception.backHome");return s(a).set(e.PAGE_NOT_ACCESS,{title:"403",status:`${e.PAGE_NOT_ACCESS}`,subTitle:t("sys.exception.subTitle403"),btnText:n.full?b:u,handler:()=>n.full?o(f.BASE_LOGIN):o()}),s(a).set(e.PAGE_NOT_FOUND,{title:"404",status:`${e.PAGE_NOT_FOUND}`,subTitle:t("sys.exception.subTitle404"),btnText:n.full?b:u,handler:()=>n.full?o(f.BASE_LOGIN):o()}),s(a).set(e.ERROR,{title:"500",status:`${e.ERROR}`,subTitle:t("sys.exception.subTitle500"),btnText:u,handler:()=>o()}),s(a).set(e.PAGE_NOT_DATA,{title:t("sys.exception.noDataTitle"),subTitle:"",btnText:t("common.redo"),handler:()=>r(),icon:C}),s(a).set(e.NET_WORK_ERROR,{title:t("sys.exception.networkErrorTitle"),subTitle:t("sys.exception.networkErrorSubTitle"),btnText:t("common.redo"),handler:()=>r(),icon:D}),()=>{const{title:l,subTitle:i,btnText:T,icon:_,handler:g,status:y}=s(E)||{};return c(P,{class:p,status:y,title:n.title||l,"sub-title":n.subTitle||i},{extra:()=>T&&c(v,{type:"primary",onClick:g},{default:()=>T}),icon:()=>_?c("img",{src:_},null):null})}}});export{L as default};