import{b as r}from"./props-8b0ad601.js";import{u as s}from"./useECharts-14417650.js";import{d as i,r as l,C as n,o as p,h,az as m}from"./index-84bac5b8.js";const d=i({__name:"VisitAnalysis",props:{...r},setup(c){const t=l(null),{setOptions:o}=s(t);return n(()=>{o({tooltip:{trigger:"axis",axisPointer:{lineStyle:{width:1,color:"#019680"}}},xAxis:{type:"category",boundaryGap:!1,data:[...Array.from({length:18})].map((e,a)=>`${a+6}:00`),splitLine:{show:!0,lineStyle:{width:1,type:"solid",color:"rgba(226,226,226,0.5)"}},axisTick:{show:!1}},yAxis:[{type:"value",max:8e4,splitNumber:4,axisTick:{show:!1},splitArea:{show:!0,areaStyle:{color:["rgba(255,255,255,0.2)","rgba(226,226,226,0.2)"]}}}],grid:{left:"1%",right:"1%",top:"2  %",bottom:0,containLabel:!0},series:[{smooth:!0,data:[111,222,4e3,18e3,33333,55555,66666,33333,14e3,36e3,66666,44444,22222,11111,4e3,2e3,500,333,222,111],type:"line",areaStyle:{},itemStyle:{color:"#5ab1ef"}},{smooth:!0,data:[33,66,88,333,3333,5e3,18e3,3e3,1200,13e3,22e3,11e3,2221,1201,390,198,60,30,22,11],type:"line",areaStyle:{},itemStyle:{color:"#019680"}}]})}),(e,a)=>(p(),h("div",{ref_key:"chartRef",ref:t,style:m({height:e.height,width:e.width})},null,4))}});export{d as _};
