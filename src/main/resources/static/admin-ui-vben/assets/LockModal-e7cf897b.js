import{d as g,a_ as x,f as i,v as S,o as y,j as B,w as n,af as I,k as t,c as b,i as o,t as p,n as m,x as L}from"./index-84bac5b8.js";import{u as M,_ as R}from"./useForm-9e126d4c.js";import"./BasicForm.vue_vue_type_style_index_0_lang-f40c69bb.js";import{a as C,B as F}from"./index-173d5d49.js";import{u as N}from"./lock-55087502.js";import{h as P}from"./header-55b09394.js";import"./index-09793f90.js";import"./Col-5c991ea4.js";import"./responsiveObserve-85850b10.js";import"./useFlexGapSupport-7bccf8d7.js";import"./_baseIteratee-de9a7973.js";import"./get-acbb0bab.js";import"./debounce-51e23acd.js";import"./index-723fd4c3.js";import"./index-5d2832e9.js";import"./uniqBy-966a1ca5.js";import"./index-9785aad3.js";import"./index-3e1b457d.js";import"./index-b9509bee.js";import"./index-2dea95e5.js";import"./index-d4092c42.js";import"./List-9fcea96e.js";import"./isMobile-174ba801.js";import"./DownOutlined-a8fe79f2.js";import"./CheckOutlined-c0652f6b.js";import"./tree-a6f36781.js";import"./eagerComputed-aaf02481.js";import"./onMountedOrActivated-78e848f5.js";import"./index-81d4b3c0.js";import"./DoubleRightOutlined-1bb4c7eb.js";import"./useBreakpoint-8b027837.js";import"./zh_CN-1ca40490.js";import"./index-343834d4.js";import"./PlusOutlined-c3a73197.js";import"./index-831ed906.js";import"./index-7a2ca6fc.js";import"./copyTextToClipboard-cc995e2b.js";import"./index-d2cf1d1c.js";import"./index-9bf8eb9e.js";import"./useWindowSizeFn-edf59fbd.js";import"./FullscreenOutlined-2d9cb280.js";const U={class:"relative rounded-10 px-8 pb-8 pt-30"},V={class:"absolute left-[calc(50%-45px)] top-0 w-auto text-center"},$=["src"],j={class:"mt-2"},q={class:"mt-4 text-center"},Lt=g({name:"LockModal",__name:"LockModal",setup(A){const{t:r}=b(),s=x(),c=N(),l=i(()=>s.getUserInfo?.user.nickname),[d,{closeModal:u}]=C(),[_,{validateFields:f,resetFields:h}]=M({showActionButtonGroup:!1,schemas:[{field:"password",label:r("layout.header.lockScreenPassword"),colProps:{span:24},component:"InputPassword",required:!0}]});async function k(){const a=(await f()).password;u(),c.setLockInfo({isLock:!0,pwd:a}),await h()}const v=i(()=>{const{avatar:e}=s.getUserInfo.user;return e||P});return(e,a)=>{const w=S("a-button");return y(),B(t(F),I({footer:null,width:"25%",title:t(r)("layout.header.lockScreen")},e.$attrs,{onRegister:t(d)}),{default:n(()=>[o("div",U,[o("div",V,[o("img",{src:v.value,class:"w-18 rounded-50%"},null,8,$),o("p",j,p(l.value),1)]),m(t(R),{onRegister:t(_)},null,8,["onRegister"]),o("div",q,[m(w,{type:"primary",block:"",class:"mt-2",onClick:k},{default:n(()=>[L(p(t(r)("layout.header.lockScreenBtn")),1)]),_:1})])])]),_:1},16,["title","onRegister"])}}});export{Lt as default};
