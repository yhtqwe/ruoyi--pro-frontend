import"./base-085523fd.js";import{E as e,a}from"./el-descriptions-item-d373bc22.js";import{_ as s}from"./DictTag.vue_vue_type_script_lang-a5ff2643.js";import"./el-tooltip-4ed993c7.js";/* empty css                  */import{u as t,_ as r}from"./Icon.vue_vue_type_script_setup_true_lang-4448c023.js";import{v as o}from"./runtime-dom.esm-bundler-daa7e741.js";import{d as l}from"./dayjs.min-65a6b1e4.js";import{p as i}from"./propTypes-5cfdbdab.js";import{u as d}from"./app-41ac77cd.js";import{E as n}from"./index-7486e100.js";import{E as p}from"./index-183fdc84.js";import{d as c,c as m,aX as f,u,r as b,o as _,i as v,n as x,f as y,e as j,k as g,t as k,a as h,w,h as $,l as T,b as D,v as E,y as F,j as O,F as z,z as C}from"./runtime-core.esm-bundler-ccc21fcd.js";import{_ as I}from"./_plugin-vue_export-helper-1b428a4d.js";const A={class:"flex items-center"},M=I(c({__name:"Descriptions",props:{title:i.string.def(""),message:i.string.def(""),collapse:i.bool.def(!0),columns:i.number.def(1),schema:{type:Array,default:()=>[]},data:{type:Object,default:()=>({})}},setup(i){const c=i,I=d(),M=m((()=>I.getMobile)),P=f(),X=u(),{getPrefixCls:q}=t(),B=q("descriptions"),G=m((()=>{const e=["title","message","collapse","schema","data","class"],a={...P,...c};for(const s in a)-1!==e.indexOf(s)&&delete a[s];return a})),H=b(!0),J=()=>{c.collapse&&(H.value=!y(H))};return(t,d)=>{const m=r,f=n,u=s,b=e,I=a,P=p;return _(),v("div",{class:x([y(B),"bg-[var(--el-color-white)] dark:bg-[var(--el-bg-color)] dark:border-[var(--el-border-color)] dark:border-1px"])},[i.title?(_(),v("div",{key:0,class:x([`${y(B)}-header`,"h-50px flex justify-between items-center mb-10px border-bottom-1 border-solid border-[var(--tags-view-border-color)] px-10px cursor-pointer dark:border-[var(--el-border-color)]"]),onClick:J},[j("div",{class:x([`${y(B)}-header__title`,"relative font-18px font-bold ml-10px"])},[j("div",A,[g(k(i.title)+" ",1),i.message?(_(),h(f,{key:0,content:i.message,placement:"right"},{default:w((()=>[T(m,{icon:"ep:warning",class:"ml-5px"})])),_:1},8,["content"])):$("",!0)])],2),i.collapse?(_(),h(m,{key:0,icon:y(H)?"ep:arrow-down":"ep:arrow-up"},null,8,["icon"])):$("",!0)],2)):$("",!0),T(P,null,{default:w((()=>[D(j("div",{class:x([`${y(B)}-content`,"p-10px"])},[T(I,E({column:c.columns,border:"",direction:y(M)?"vertical":"horizontal"},y(G)),F({default:w((()=>[(_(!0),v(z,null,C(i.schema,(e=>(_(),h(b,E({key:e.field,"min-width":"80"},(e=>{const a=["field"],s={...e};for(const t in s)-1!==a.indexOf(t)&&delete s[t];return s})(e)),{label:w((()=>[O(t.$slots,`${e.field}-label`,{label:e.label},(()=>[g(k(e.label),1)]),!0)])),default:w((()=>[e.dateFormat?O(t.$slots,"default",{key:0},(()=>[g(k(null!==i.data[e.field]?y(l)(i.data[e.field]).format(e.dateFormat):""),1)]),!0):e.dictType?O(t.$slots,"default",{key:1},(()=>[T(u,{type:e.dictType,value:i.data[e.field]+""},null,8,["type","value"])]),!0):O(t.$slots,e.field,{key:2,row:i.data},(()=>[g(k(i.data[e.field]),1)]),!0)])),_:2},1040)))),128))])),_:2},[y(X).extra?{name:"extra",fn:w((()=>[O(t.$slots,"extra",{},void 0,!0)])),key:"0"}:void 0]),1040,["column","direction"])],2),[[o,y(H)]])])),_:3})],2)}}}),[["__scopeId","data-v-7f726b62"]]);export{M as _};