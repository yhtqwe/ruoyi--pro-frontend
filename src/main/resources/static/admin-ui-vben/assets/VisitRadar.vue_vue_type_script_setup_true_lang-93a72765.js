import{u as i}from"./useECharts-14417650.js";import{d as s,N as o,r as n,a6 as d,o as l,j as m,w as f,i as c,az as h,k as u}from"./index-84bac5b8.js";import{C as p}from"./index-855f7ddd.js";const B=s({__name:"VisitRadar",props:{loading:Boolean,width:o.string.def("100%"),height:o.string.def("300px")},setup(a){const e=a,t=n(null),{setOptions:r}=i(t);return d(()=>e.loading,()=>{e.loading||r({legend:{bottom:0,data:["访问","购买"]},tooltip:{},radar:{radius:"60%",splitNumber:8,indicator:[{name:"电脑"},{name:"充电器"},{name:"耳机"},{name:"手机"},{name:"Ipad"},{name:"耳机"}]},series:[{type:"radar",symbolSize:0,areaStyle:{shadowBlur:0,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1},data:[{value:[90,50,86,40,50,20],name:"访问",itemStyle:{color:"#b6a2de"}},{value:[70,75,70,76,20,85],name:"购买",itemStyle:{color:"#5ab1ef"}}]}]})},{immediate:!0}),(g,w)=>(l(),m(u(p),{title:"转化率",loading:a.loading},{default:f(()=>[c("div",{ref_key:"chartRef",ref:t,style:h({width:a.width,height:a.height})},null,4)]),_:1},8,["loading"]))}});export{B as _};
