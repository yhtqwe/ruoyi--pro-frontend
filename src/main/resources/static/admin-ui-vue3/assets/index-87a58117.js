import{ab as t,__tla as l}from"./index-0f589822.js";let e,s,r,i,y=Promise.all([(()=>{try{return l}catch{}})()]).then(async()=>{s=async()=>await t.get({url:"/system/area/tree"}),e=async a=>await t.get({url:"/system/area/get-children?id="+a}),i=async a=>await t.get({url:"/system/area/get-by-ids?ids="+a}),r=async a=>await t.get({url:"/system/area/get-by-ip?ip="+a})});export{y as __tla,e as a,s as b,r as c,i as g};
