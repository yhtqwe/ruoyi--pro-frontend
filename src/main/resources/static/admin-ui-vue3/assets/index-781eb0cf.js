import{ab as t,__tla as u}from"./index-0f589822.js";let s,e,l,c,i,m,n=Promise.all([(()=>{try{return u}catch{}})()]).then(async()=>{s=async a=>await t.get({url:"/system/mail-account/page",params:a}),i=async a=>await t.get({url:"/system/mail-account/get?id="+a}),l=async a=>await t.post({url:"/system/mail-account/create",data:a}),m=async a=>await t.put({url:"/system/mail-account/update",data:a}),c=async a=>await t.delete({url:"/system/mail-account/delete?id="+a}),e=async()=>t.get({url:"/system/mail-account/list-all-simple"})});export{n as __tla,s as a,e as b,l as c,c as d,i as g,m as u};
