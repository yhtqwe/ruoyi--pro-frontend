import{P as B}from"./index-f93c02cf.js";import{D as n}from"./index-a69dfc8a.js";import{G as v,S as o,D as w}from"./siteSetting-90e4fa4b.js";import{u as l}from"./useDescription-296e4c96.js";import{T as z}from"./index-ad076651.js";import{d as S,o as V,j as q,w as f,i as s,k as t,t as C,x as a,n as c,b1 as y}from"./index-2b36f9e3.js";import"./onMountedOrActivated-957e2f10.js";import"./useFlexGapSupport-de861fb2.js";import"./useWindowSizeFn-99db3b88.js";import"./useContentViewHeight-919c9809.js";import"./ArrowLeftOutlined-99ce5bb5.js";import"./index-2f252cfc.js";import"./DownOutlined-be102a13.js";import"./index-c74a997a.js";import"./useBreakpoint-99376be7.js";import"./responsiveObserve-8393ce72.js";import"./eagerComputed-3545aecd.js";import"./operationUnit-d5166b83.js";import"./get-8e17be71.js";const G={class:"flex items-center justify-between"},L={class:"flex-1"},U=["href"],E=s("br",null,null,-1),N=["href"],ne=S({__name:"index",setup(O){const{pkg:h,lastBuildTime:b}={pkg:{dependencies:{"@ant-design/colors":"^7.0.0","@ant-design/icons-vue":"^7.0.1","@iconify/iconify":"^3.1.1","@videojs-player/vue":"^1.0.0","@vue/runtime-core":"^3.3.7","@vueuse/core":"^10.5.0","@zxcvbn-ts/core":"^3.0.4","ant-design-vue":"^4.0.6",axios:"^1.5.1","benz-amr-recorder":"^1.1.5",codemirror:"5.65.15","cron-parser":"^4.9.0",cropperjs:"^1.6.1","crypto-js":"^4.1.1",dayjs:"^1.11.10",echarts:"^5.4.3","lodash-es":"^4.17.21",nprogress:"^0.2.0","path-to-regexp":"^6.2.1",pinia:"^2.1.7","pinia-plugin-persistedstate":"^3.2.0","print-js":"^1.6.0",qs:"^6.11.2","resize-observer-polyfill":"^1.5.1",sortablejs:"^1.15.0",tinymce:"5.10.7",vditor:"^3.9.6","video-js":"^0.7.0",vue:"^3.3.7","vue-i18n":"^9.5.0","vue-json-pretty":"^2.2.4","vue-router":"^4.2.5","vue-types":"^5.1.1",vuedraggable:"^4.1.0",xlsx:"^0.18.5"},devDependencies:{"@antfu/eslint-config":"^1.0.0-beta.28","@commitlint/cli":"^18.0.0","@commitlint/config-conventional":"^18.0.0","@iconify/json":"^2.2.132","@purge-icons/generated":"^0.9.0","@types/codemirror":"^5.60.12","@types/crypto-js":"^4.1.3","@types/fs-extra":"^11.0.3","@types/inquirer":"^9.0.6","@types/lodash-es":"^4.17.10","@types/node":"^20.8.8","@types/nprogress":"^0.2.2","@types/qs":"^6.9.9","@types/sortablejs":"^1.15.4","@unocss/eslint-config":"^0.57.1","@vitejs/plugin-vue":"4.4.0","@vitejs/plugin-vue-jsx":"^3.0.2","@vue/compiler-sfc":"^3.3.7","cross-env":"^7.0.3","cz-git":"^1.7.1",czg:"^1.7.1",dotenv:"^16.3.1",eslint:"^8.52.0",esno:"^0.17.0","fs-extra":"^11.1.1",husky:"^8.0.3",inquirer:"^9.2.11",less:"^4.2.0","lint-staged":"^15.0.2",picocolors:"^1.0.0",postcss:"^8.4.31","postcss-html":"^1.5.0","postcss-less":"^6.0.0",prettier:"^3.0.3",rimraf:"^5.0.5",rollup:"^4.1.4","rollup-plugin-visualizer":"^5.9.2",stylelint:"^15.11.0","stylelint-config-recess-order":"^4.3.0","stylelint-config-recommended":"^13.0.0","stylelint-config-recommended-vue":"^1.5.0","stylelint-config-standard":"^34.0.0","stylelint-order":"^6.0.3","stylelint-prettier":"^4.0.2",terser:"^5.22.0",typescript:"^5.2.2",unocss:"^0.57.1",vite:"^4.5.0","vite-plugin-compression":"^0.5.1","vite-plugin-mkcert":"^1.16.0","vite-plugin-progress":"^0.0.7","vite-plugin-purge-icons":"^0.9.2","vite-plugin-pwa":"^0.16.5","vite-plugin-svg-icons":"^2.0.1","vite-vue-plugin-html":"^1.0.3","vue-tsc":"^1.8.20"},name:"yudao-ui-admin-vben",version:"1.8.3-snapshot"},lastBuildTime:"2023-10-25 14:24:14"},{dependencies:p,devDependencies:u,name:_,version:j}=h,d=[],m=[],g=e=>r=>y(z,{color:e},()=>r),i=e=>r=>y("a",{href:r,target:"_blank"},e),x=[{label:"版本",field:"version",render:g("blue")},{label:"最后编译时间",field:"lastBuildTime",render:g("blue")},{label:"文档地址",field:"doc",render:i("文档地址")},{label:"预览地址",field:"preview",render:i("预览地址")},{label:"Github",field:"github",render:i("Github")},{label:"外包服务",field:"outsourcing",render:i("外包服务")}],R={version:j,lastBuildTime:b,doc:w,preview:o,github:v,outsourcing:o};Object.keys(p).forEach(e=>{d.push({field:e,label:e})}),Object.keys(u).forEach(e=>{m.push({field:e,label:e})});const[k]=l({title:"生产环境依赖",data:p,schema:d,column:3}),[D]=l({title:"开发环境依赖",data:u,schema:m,column:3}),[T]=l({title:"项目信息",data:R,schema:x,column:2});return(e,r)=>(V(),q(t(B),{title:"关于"},{headerContent:f(()=>[s("div",G,[s("span",L,[s("a",{href:t(v),target:"_blank"},C(t(_)),9,U),a(" 基于Vue3.0、Vite、 Ant-Design-Vue 、TypeScript 的后台解决方案，目标是为中大型项目开发,提供现成的开箱解决方案及丰富的示例,原则上不会限制任何代码用于商用。"),E,a(" 同时，我们也提供"),s("a",{href:t(o),target:"_blank"},"外包服务",8,N),a("。 ")])])]),default:f(()=>[c(t(n),{class:"enter-y",onRegister:t(T)},null,8,["onRegister"]),c(t(n),{class:"enter-y my-4",onRegister:t(k)},null,8,["onRegister"]),c(t(n),{class:"enter-y",onRegister:t(D)},null,8,["onRegister"])]),_:1}))}});export{ne as default};
