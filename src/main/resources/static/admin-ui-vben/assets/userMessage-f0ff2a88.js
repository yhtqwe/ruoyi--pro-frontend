import{br as t}from"./index-8b526734.js";import{b as n}from"./message-830a24e4.js";const a=t("userMessage",{state:()=>({unreadCount:0}),getters:{getUnreadCount(e){return e.unreadCount}},actions:{async updateUnreadCount(){const e=await n();this.unreadCount=e}}});export{a as u};
