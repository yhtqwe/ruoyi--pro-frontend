import{L as n}from"./index-84bac5b8.js";function r(e){return n.get({url:"/bpm/process-instance/my-page",params:e})}function a(e){return n.post({url:"/bpm/process-instance/create",data:e})}function o(e,s){const t={id:e,reason:s};return n.delete({url:"/bpm/process-instance/cancel",data:t})}export{o as a,a as c,r as g};