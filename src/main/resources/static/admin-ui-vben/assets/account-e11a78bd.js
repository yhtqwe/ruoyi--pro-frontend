import{L as e}from"./index-84bac5b8.js";function a(t){return e.post({url:"/system/mail-account/create",data:t})}function c(t){return e.put({url:"/system/mail-account/update",data:t})}function n(t){return e.delete({url:`/system/mail-account/delete?id=${t}`})}function l(t){return e.get({url:`/system/mail-account/get?id=${t}`})}function i(t){return e.get({url:"/system/mail-account/page",params:t})}function r(){return e.get({url:"/system/mail-account/list-all-simple"})}export{i as a,r as b,a as c,n as d,l as g,c as u};
