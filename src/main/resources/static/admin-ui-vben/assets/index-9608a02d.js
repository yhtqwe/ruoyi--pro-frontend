import{cm as n}from"./index-8b526734.js";function r(e){return n.get({url:"/infra/codegen/table/page",params:e})}function a(e){return n.get({url:"/infra/codegen/detail?tableId="+e})}function d(e){return n.put({url:"/infra/codegen/update",data:e})}function o(e){return n.put({url:"/infra/codegen/sync-from-db?tableId="+e})}function u(e){return n.get({url:"/infra/codegen/preview?tableId="+e})}function l(e){return n.download({url:"/infra/codegen/download?tableId="+e.id},e.tableName+".zip")}function i(e){return n.get({url:"/infra/codegen/db/table/list",params:e})}function g(e){return n.post({url:"/infra/codegen/create-list",data:e})}function c(e){return n.delete({url:"/infra/codegen/delete?tableId="+e})}export{i as a,r as b,g as c,l as d,c as e,a as g,u as p,o as s,d as u};
