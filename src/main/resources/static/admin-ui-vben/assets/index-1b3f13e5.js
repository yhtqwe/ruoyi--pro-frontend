import{cm as e}from"./index-8b526734.js";function o(s){return e.get({url:"/system/permission/list-role-resources?roleId="+s})}function t(s){return e.post({url:"/system/permission/assign-role-menu",data:s})}function n(s){return e.post({url:"/system/permission/assign-role-data-scope",data:s})}function i(s){return e.get({url:"/system/permission/list-user-roles?userId="+s})}function u(s){return e.post({url:"/system/permission/assign-user-role",data:s})}export{t as a,n as b,i as c,u as d,o as l};
