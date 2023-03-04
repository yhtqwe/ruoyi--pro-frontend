import{x as e}from"./index-6f87c872.js";import{a as t,g as l,b as i}from"./dict-3e42505d.js";import{u as o}from"./useI18n-56d4bc42.js";import{A as n}from"./runtime-core.esm-bundler-ccc21fcd.js";const a=e=>{const t=n({searchSchema:[],tableSchema:[],formSchema:[],detailSchema:[],printSchema:[]}),l=r(e);t.searchSchema=l||[];const i=s(e);t.tableSchema=i||[];const o=c(e);t.formSchema=o;const a=d(e);t.detailSchema=a;const u=m(e);return t.printSchema=u,{allSchemas:t}},r=l=>{const{t:i}=o(),n=l.searchSpan?l.searchSpan:6,a=24/n,r=[];if(e.eachTree(l.columns,(e=>{var l,o,s,c,d,m,u,p;if((null==e?void 0:e.isSearch)||(null==(l=e.search)?void 0:l.show)){let l=(null==(s=null==(o=null==e?void 0:e.search)?void 0:o.itemRender)?void 0:s.name)||"$input";const h=[];let f={};if(e.dictType){const o={label:"全部",value:""};h.push(o),t(e.dictType).forEach((e=>{h.push(e)})),f.options=h,(null==(d=null==(c=null==e?void 0:e.search)?void 0:c.itemRender)?void 0:d.name)||(l="$select"),f={name:l,options:h,props:{placeholder:i("common.selectText")}}}else f=(null==(m=e.search)?void 0:m.itemRender)?e.search.itemRender:{name:l,props:"$input"==l?{placeholder:i("common.inputText")}:{placeholder:i("common.selectText")}};const v={folding:r.length>a-1,itemRender:e.itemRender?e.itemRender:f,field:e.field,title:(null==(u=e.search)?void 0:u.title)||e.title,slots:null==(p=e.search)?void 0:p.slots,span:n};r.push(v)}})),r.length>0){const e={span:24,align:"right",collapseNode:r.length>a,itemRender:{name:"$buttons",children:[{props:{type:"submit",content:i("common.query"),status:"primary"}},{props:{type:"reset",content:i("common.reset")}}]}};r.push(e)}return r},s=t=>{const{t:l}=o(),i=[];if(t.firstColumn){const e={type:t.firstColumn,width:"50px"};i.push(e)}if(t.primaryKey&&t.primaryType){const e=t.primaryTitle?t.primaryTitle:l("common.index"),o=30*e.length+"px";let n={title:e,field:t.primaryKey,width:o};"id"!=t.primaryType&&(n={...n,type:t.primaryType}),i.push(n)}if(e.eachTree(t.columns,(e=>{var t,l;if(!1!==(null==e?void 0:e.isTable)&&!1!==(null==(t=null==e?void 0:e.table)?void 0:t.show)){const t={...e.table,field:e.field,title:(null==(l=e.table)?void 0:l.title)||e.title,minWidth:"80px"};t.showOverflow="tooltip",(null==e?void 0:e.formatter)&&(t.formatter=e.formatter,t.width=t.width?t.width:160),(null==e?void 0:e.dictType)&&(t.cellRender={name:"XDict",content:e.dictType},t.width=t.width?t.width:160),i.push(t)}})),t.action&&1==t.action){const e={title:t.actionTitle?t.actionTitle:l("table.action"),field:"actionbtns",fixed:"right",width:t.actionWidth?t.actionWidth:"200px",slots:{default:"actionbtns_default"}};i.push(e)}return i},c=o=>{const n=[];return e.eachTree(o.columns,(e=>{var o,a,r,s,c;if(!1!==(null==e?void 0:e.isForm)&&!1!==(null==(o=null==e?void 0:e.form)?void 0:o.show)){let o=(null==(a=null==e?void 0:e.form)?void 0:a.component)||"Input",d="";(null==(r=e.form)?void 0:r.value)?d=null==(s=e.form)?void 0:s.value:"InputNumber"===o&&(d=0);let m={};if(e.dictType){const n=[];e.dictClass&&"number"===e.dictClass?l(e.dictType).forEach((e=>{n.push(e)})):e.dictClass&&"boolean"===e.dictClass?i(e.dictType).forEach((e=>{n.push(e)})):t(e.dictType).forEach((e=>{n.push(e)})),m={options:n},e.form&&e.form.component||(o="Select")}const u={component:o,componentProps:m,value:d,...e.form,field:e.field,label:(null==(c=e.form)?void 0:c.label)||e.title};n.push(u)}})),n},d=t=>{const l=[];return e.eachTree(t.columns,(e=>{var t,i,o,n,a;if(!1!==(null==e?void 0:e.isDetail)&&!1!==(null==(t=e.detail)?void 0:t.show)){const t={...e.detail,field:e.field,label:(null==(i=e.detail)?void 0:i.label)||e.title};e.dictType&&(t.dictType=e.dictType),((null==(o=e.detail)?void 0:o.dateFormat)||"formatDate"==e.formatter)&&(t.dateFormat=(null==(n=null==e?void 0:e.detail)?void 0:n.dateFormat)?null==(a=null==e?void 0:e.detail)?void 0:a.dateFormat:"YYYY-MM-DD HH:mm:ss"),l.push(t)}})),l},m=t=>{const l=[];return e.eachTree(t.columns,(e=>{var t;if(!1!==(null==(t=null==e?void 0:e.print)?void 0:t.show)){const t={field:e.field};l.push(t)}})),l};export{a as u};