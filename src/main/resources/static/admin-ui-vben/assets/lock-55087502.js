import{bb as c,bc as e,bd as t,a_ as a}from"./index-84bac5b8.js";const k=c("app-lock",{state:()=>({lockInfo:e.getLocal(t)}),getters:{getLockInfo(o){return o.lockInfo}},actions:{setLockInfo(o){this.lockInfo=Object.assign({},this.lockInfo,o),e.setLocal(t,this.lockInfo,!0)},resetLockInfo(){e.removeLocal(t,!0),this.lockInfo=null},async unLock(o){const n=a();return this.lockInfo?.pwd===o?(this.resetLockInfo(),!0):await(async()=>{try{const s=n.getUserInfo?.user.nickname,r=await n.login({username:s,password:o,goHome:!1,mode:"none",captchaVerification:""});return r&&this.resetLockInfo(),r}catch{return!1}})()}}});export{k as u};
