import{L as n}from"./index-84bac5b8.js";function t(e){return n.get({url:"/system/sms-channel/page",params:e})}function a(){return n.get({url:"/system/sms-channel/list-all-simple"})}function l(e){return n.get({url:`/system/sms-channel/get?id=${e}`})}function r(e){return n.post({url:"/system/sms-channel/create",data:e})}function m(e){return n.put({url:"/system/sms-channel/update",data:e})}function u(e){return n.delete({url:`/system/sms-channel/delete?id=${e}`})}export{t as a,a as b,r as c,u as d,l as g,m as u};
