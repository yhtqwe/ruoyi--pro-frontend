import{L as f,d as b,aJ as u,r as t,C as h,o as v,h as y,n as r,k as s,i as g}from"./index-84bac5b8.js";import{D as x}from"./index-d97670a9.js";import{c}from"./createAsyncComponent-fe9cd4de.js";import"./responsiveObserve-85850b10.js";import"./get-acbb0bab.js";const k=[{label:"Redis版本",field:"redis_version"},{label:"运行模式",field:"redis_mode",render:e=>e==="standalone"?"单机":"集群"},{label:"端口",field:"tcp_port"},{label:"客户端数",field:"connected_clients"},{label:"运行时间(天)",field:"uptime_in_days"},{label:"使用内存",field:"used_memory_human"},{label:"使用CPU",field:"tcp_port",render:e=>Number.parseFloat(e).toFixed(2)},{label:"内存配置",field:"maxmemory_human"},{label:"AOF是否开启",field:"maxmemory_human",render:e=>e==="0"?"否":"是"},{label:"RDB是否成功",field:"rdb_last_bgsave_status"},{label:"Key数量",field:"expired_keys"},{label:"网络入口/出口",field:"instantaneous_input_kbps",render:(e,a)=>`${a.instantaneous_input_kbps}kps / ${a.instantaneous_output_kbps}kps`}];function w(){return f.get({url:"/infra/redis/get-monitor-info"})}const E={class:"p-4"},C={class:"enter-y mt-4 md:flex"},L=b({name:"InfraRedis",__name:"index",setup(e){const a=c(()=>u(()=>import("./CommandStats-03b3fef5.js"),["assets/CommandStats-03b3fef5.js","assets/useECharts-14417650.js","assets/index-84bac5b8.js","assets/index-52bc14de.css","assets/index-855f7ddd.js","assets/index-ee59d2b5.js","assets/PlusOutlined-c3a73197.js","assets/isMobile-174ba801.js"])),_=c(()=>u(()=>import("./Memory-23175687.js"),["assets/Memory-23175687.js","assets/useECharts-14417650.js","assets/index-84bac5b8.js","assets/index-52bc14de.css","assets/index-855f7ddd.js","assets/index-ee59d2b5.js","assets/PlusOutlined-c3a73197.js","assets/isMobile-174ba801.js"])),o=t(!0),m=t(),i=t([]),d=t();async function p(){const n=await w();m.value=n.info,d.value=n.info.used_memory_human,await n.commandStats.forEach(l=>{i.value.push({name:l.command,value:l.calls})}),o.value=!1}return h(async()=>{await p()}),(n,l)=>(v(),y("div",E,[r(s(x),{title:"基础信息","collapse-options":{canExpand:!0,helpMessage:"Redis 基本信息"},column:6,data:m.value,schema:s(k)},null,8,["data","schema"]),g("div",C,[r(s(a),{class:"w-full md:w-1/2",loading:o.value,"command-stats":i.value},null,8,["loading","command-stats"]),r(s(_),{class:"w-full !my-4 md:w-1/2 !md:mx-4 !md:my-0",loading:o.value,"memory-human":d.value},null,8,["loading","memory-human"])])]))}});export{L as default};