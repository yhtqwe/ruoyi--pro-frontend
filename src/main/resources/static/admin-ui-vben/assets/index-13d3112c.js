import{L as e}from"./index-2b36f9e3.js";function o(r){return e.get({url:"/pay/order/page",params:r})}function a(r){return e.get({url:`/pay/order/get?id=${r}`})}function u(r){return e.get({url:`/pay/order/get-detail?id=${r}`})}function d(r){return e.post({url:"/pay/order/submit",data:r})}function n(r){return e.download({url:"/pay/order/export-excel",params:r})}export{u as a,o as b,n as e,a as g,d as s};
