import{ag as q,aS as $,d as z,bn as U,b as h,o as c,c as C,t as L,q as M,w as G,ay as Y,a,aT as Z,aj as K,bg as Ve,aU as ee,bX as ae,aV as te,ah as V,r as w,af as H,bt as Oe,i as ne,F as le,k as se,M as We,C as $e,V as k,g as re,T as Je,ax as Xe,a1 as J,cy as De,cz as ie,cA as Ge,P as He,a8 as Qe,bB as Re,bu as Ye,h as I,aW as F,cm as Ze,cn as ea,an as aa,__tla as ta}from"./index-0f589822.js";let ue,na=Promise.all([(()=>{try{return ta}catch{}})()]).then(async()=>{const Q=Symbol("elPaginationKey"),oe=q({disabled:Boolean,currentPage:{type:Number,default:1},prevText:{type:String},prevIcon:{type:$}}),pe={click:e=>e instanceof MouseEvent},ce=["disabled","aria-label","aria-disabled"],ge={key:0},de=z({name:"ElPaginationPrev"});var be=K(z({...de,props:oe,emits:pe,setup(e){const u=e,{t:n}=U(),g=h(()=>u.disabled||u.currentPage<=1);return(r,o)=>(c(),C("button",{type:"button",class:"btn-prev",disabled:a(g),"aria-label":r.prevText||a(n)("el.pagination.prev"),"aria-disabled":a(g),onClick:o[0]||(o[0]=b=>r.$emit("click",b))},[r.prevText?(c(),C("span",ge,L(r.prevText),1)):(c(),M(a(Z),{key:1},{default:G(()=>[(c(),M(Y(r.prevIcon)))]),_:1}))],8,ce))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/prev.vue"]]);const ve=q({disabled:Boolean,currentPage:{type:Number,default:1},pageCount:{type:Number,default:50},nextText:{type:String},nextIcon:{type:$}}),me=["disabled","aria-label","aria-disabled"],fe={key:0},Ce=z({name:"ElPaginationNext"});var ye=K(z({...Ce,props:ve,emits:["click"],setup(e){const u=e,{t:n}=U(),g=h(()=>u.disabled||u.currentPage===u.pageCount||u.pageCount===0);return(r,o)=>(c(),C("button",{type:"button",class:"btn-next",disabled:a(g),"aria-label":r.nextText||a(n)("el.pagination.next"),"aria-disabled":a(g),onClick:o[0]||(o[0]=b=>r.$emit("click",b))},[r.nextText?(c(),C("span",fe,L(r.nextText),1)):(c(),M(a(Z),{key:1},{default:G(()=>[(c(),M(Y(r.nextIcon)))]),_:1}))],8,me))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/next.vue"]]);const X=()=>Ve(Q,{}),xe=q({pageSize:{type:Number,required:!0},pageSizes:{type:ee(Array),default:()=>ae([10,20,30,40,50,100])},popperClass:{type:String},disabled:Boolean,size:{type:String,values:te}}),Pe=z({name:"ElPaginationSizes"});var ze=K(z({...Pe,props:xe,emits:["page-size-change"],setup(e,{emit:u}){const n=e,{t:g}=U(),r=V("pagination"),o=X(),b=w(n.pageSize);H(()=>n.pageSizes,(d,y)=>{if(!Oe(d,y)&&Array.isArray(d)){const p=d.includes(n.pageSize)?n.pageSize:n.pageSizes[0];u("page-size-change",p)}}),H(()=>n.pageSize,d=>{b.value=d});const P=h(()=>n.pageSizes);function B(d){var y;d!==b.value&&(b.value=d,(y=o.handleSizeChange)==null||y.call(o,Number(d)))}return(d,y)=>(c(),C("span",{class:k(a(r).e("sizes"))},[ne(a($e),{"model-value":b.value,disabled:d.disabled,"popper-class":d.popperClass,size:d.size,"validate-event":!1,onChange:B},{default:G(()=>[(c(!0),C(le,null,se(a(P),p=>(c(),M(a(We),{key:p,value:p,label:p+a(g)("el.pagination.pagesize")},null,8,["value","label"]))),128))]),_:1},8,["model-value","disabled","popper-class","size"])],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/sizes.vue"]]);const he=q({size:{type:String,values:te}}),ke=["disabled"],Se=z({name:"ElPaginationJumper"});var Ne=K(z({...Se,props:he,setup(e){const{t:u}=U(),n=V("pagination"),{pageCount:g,disabled:r,currentPage:o,changeEvent:b}=X(),P=w(),B=h(()=>{var p;return(p=P.value)!=null?p:o==null?void 0:o.value});function d(p){P.value=p?+p:""}function y(p){p=Math.trunc(+p),b==null||b(p),P.value=void 0}return(p,S)=>(c(),C("span",{class:k(a(n).e("jump")),disabled:a(r)},[re("span",{class:k([a(n).e("goto")])},L(a(u)("el.pagination.goto")),3),ne(a(Je),{size:p.size,class:k([a(n).e("editor"),a(n).is("in-pagination")]),min:1,max:a(g),disabled:a(r),"model-value":a(B),"validate-event":!1,label:a(u)("el.pagination.page"),type:"number","onUpdate:modelValue":d,onChange:y},null,8,["size","class","max","disabled","model-value","label"]),re("span",{class:k([a(n).e("classifier")])},L(a(u)("el.pagination.pageClassifier")),3)],10,ke))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/jumper.vue"]]);const _e=q({total:{type:Number,default:1e3}}),Te=["disabled"],Ee=z({name:"ElPaginationTotal"});var we=K(z({...Ee,props:_e,setup(e){const{t:u}=U(),n=V("pagination"),{disabled:g}=X();return(r,o)=>(c(),C("span",{class:k(a(n).e("total")),disabled:a(g)},L(a(u)("el.pagination.total",{total:r.total})),11,Te))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/total.vue"]]);const Be=q({currentPage:{type:Number,default:1},pageCount:{type:Number,required:!0},pagerCount:{type:Number,default:7},disabled:Boolean}),Me=["onKeyup"],Ie=["aria-current","aria-label","tabindex"],Ae=["tabindex","aria-label"],je=["aria-current","aria-label","tabindex"],qe=["tabindex","aria-label"],Ue=["aria-current","aria-label","tabindex"],Le=z({name:"ElPaginationPager"});var Fe=K(z({...Le,props:Be,emits:["change"],setup(e,{emit:u}){const n=e,g=V("pager"),r=V("icon"),{t:o}=U(),b=w(!1),P=w(!1),B=w(!1),d=w(!1),y=w(!1),p=w(!1),S=h(()=>{const t=n.pagerCount,l=(t-1)/2,s=Number(n.currentPage),N=Number(n.pageCount);let E=!1,_=!1;N>t&&(s>t-l&&(E=!0),s<N-l&&(_=!0));const T=[];if(E&&!_)for(let x=N-(t-2);x<N;x++)T.push(x);else if(!E&&_)for(let x=2;x<t;x++)T.push(x);else if(E&&_){const x=Math.floor(t/2)-1;for(let D=s-x;D<=s+x;D++)T.push(D)}else for(let x=2;x<N;x++)T.push(x);return T}),f=h(()=>["more","btn-quickprev",r.b(),g.is("disabled",n.disabled)]),O=h(()=>["more","btn-quicknext",r.b(),g.is("disabled",n.disabled)]),A=h(()=>n.disabled?-1:0);function W(t=!1){n.disabled||(t?B.value=!0:d.value=!0)}function j(t=!1){t?y.value=!0:p.value=!0}function i(t){const l=t.target;if(l.tagName.toLowerCase()==="li"&&Array.from(l.classList).includes("number")){const s=Number(l.textContent);s!==n.currentPage&&u("change",s)}else l.tagName.toLowerCase()==="li"&&Array.from(l.classList).includes("more")&&v(t)}function v(t){const l=t.target;if(l.tagName.toLowerCase()==="ul"||n.disabled)return;let s=Number(l.textContent);const N=n.pageCount,E=n.currentPage,_=n.pagerCount-2;l.className.includes("more")&&(l.className.includes("quickprev")?s=E-_:l.className.includes("quicknext")&&(s=E+_)),Number.isNaN(+s)||(s<1&&(s=1),s>N&&(s=N)),s!==E&&u("change",s)}return Xe(()=>{const t=(n.pagerCount-1)/2;b.value=!1,P.value=!1,n.pageCount>n.pagerCount&&(n.currentPage>n.pagerCount-t&&(b.value=!0),n.currentPage<n.pageCount-t&&(P.value=!0))}),(t,l)=>(c(),C("ul",{class:k(a(g).b()),onClick:v,onKeyup:He(i,["enter"])},[t.pageCount>0?(c(),C("li",{key:0,class:k([[a(g).is("active",t.currentPage===1),a(g).is("disabled",t.disabled)],"number"]),"aria-current":t.currentPage===1,"aria-label":a(o)("el.pagination.currentPage",{pager:1}),tabindex:a(A)}," 1 ",10,Ie)):J("v-if",!0),b.value?(c(),C("li",{key:1,class:k(a(f)),tabindex:a(A),"aria-label":a(o)("el.pagination.prevPages",{pager:t.pagerCount-2}),onMouseenter:l[0]||(l[0]=s=>W(!0)),onMouseleave:l[1]||(l[1]=s=>B.value=!1),onFocus:l[2]||(l[2]=s=>j(!0)),onBlur:l[3]||(l[3]=s=>y.value=!1)},[!B.value&&!y.value||t.disabled?(c(),M(a(ie),{key:1})):(c(),M(a(De),{key:0}))],42,Ae)):J("v-if",!0),(c(!0),C(le,null,se(a(S),s=>(c(),C("li",{key:s,class:k([[a(g).is("active",t.currentPage===s),a(g).is("disabled",t.disabled)],"number"]),"aria-current":t.currentPage===s,"aria-label":a(o)("el.pagination.currentPage",{pager:s}),tabindex:a(A)},L(s),11,je))),128)),P.value?(c(),C("li",{key:2,class:k(a(O)),tabindex:a(A),"aria-label":a(o)("el.pagination.nextPages",{pager:t.pagerCount-2}),onMouseenter:l[4]||(l[4]=s=>W()),onMouseleave:l[5]||(l[5]=s=>d.value=!1),onFocus:l[6]||(l[6]=s=>j()),onBlur:l[7]||(l[7]=s=>p.value=!1)},[!d.value&&!p.value||t.disabled?(c(),M(a(ie),{key:1})):(c(),M(a(Ge),{key:0}))],42,qe)):J("v-if",!0),t.pageCount>1?(c(),C("li",{key:3,class:k([[a(g).is("active",t.currentPage===t.pageCount),a(g).is("disabled",t.disabled)],"number"]),"aria-current":t.currentPage===t.pageCount,"aria-label":a(o)("el.pagination.currentPage",{pager:t.pageCount}),tabindex:a(A)},L(t.pageCount),11,Ue)):J("v-if",!0)],42,Me))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/pager.vue"]]);const m=e=>typeof e!="number",Ke=q({pageSize:Number,defaultPageSize:Number,total:Number,pageCount:Number,pagerCount:{type:Number,validator:e=>F(e)&&Math.trunc(e)===e&&e>4&&e<22&&e%2==1,default:7},currentPage:Number,defaultCurrentPage:Number,layout:{type:String,default:["prev","pager","next","jumper","->","total"].join(", ")},pageSizes:{type:ee(Array),default:()=>ae([10,20,30,40,50,100])},popperClass:{type:String,default:""},prevText:{type:String,default:""},prevIcon:{type:$,default:()=>Ze},nextText:{type:String,default:""},nextIcon:{type:$,default:()=>ea},small:Boolean,background:Boolean,disabled:Boolean,hideOnSinglePage:Boolean}),R="ElPagination";ue=aa(z({name:R,props:Ke,emits:{"update:current-page":e=>F(e),"update:page-size":e=>F(e),"size-change":e=>F(e),"current-change":e=>F(e),"prev-click":e=>F(e),"next-click":e=>F(e)},setup(e,{emit:u,slots:n}){const{t:g}=U(),r=V("pagination"),o=Qe().vnode.props||{},b="onUpdate:currentPage"in o||"onUpdate:current-page"in o||"onCurrentChange"in o,P="onUpdate:pageSize"in o||"onUpdate:page-size"in o||"onSizeChange"in o,B=h(()=>{if(m(e.total)&&m(e.pageCount)||!m(e.currentPage)&&!b)return!1;if(e.layout.includes("sizes")){if(m(e.pageCount)){if(!m(e.total)&&!m(e.pageSize)&&!P)return!1}else if(!P)return!1}return!0}),d=w(m(e.defaultPageSize)?10:e.defaultPageSize),y=w(m(e.defaultCurrentPage)?1:e.defaultCurrentPage),p=h({get:()=>m(e.pageSize)?d.value:e.pageSize,set(i){m(e.pageSize)&&(d.value=i),P&&(u("update:page-size",i),u("size-change",i))}}),S=h(()=>{let i=0;return m(e.pageCount)?m(e.total)||(i=Math.max(1,Math.ceil(e.total/p.value))):i=e.pageCount,i}),f=h({get:()=>m(e.currentPage)?y.value:e.currentPage,set(i){let v=i;i<1?v=1:i>S.value&&(v=S.value),m(e.currentPage)&&(y.value=v),b&&(u("update:current-page",v),u("current-change",v))}});function O(i){f.value=i}function A(){e.disabled||(f.value-=1,u("prev-click",f.value))}function W(){e.disabled||(f.value+=1,u("next-click",f.value))}function j(i,v){i&&(i.props||(i.props={}),i.props.class=[i.props.class,v].join(" "))}return H(S,i=>{f.value>i&&(f.value=i)}),Re(Q,{pageCount:S,disabled:h(()=>e.disabled),currentPage:f,changeEvent:O,handleSizeChange:function(i){p.value=i;const v=S.value;f.value>v&&(f.value=v)}}),()=>{var i,v;if(!B.value)return Ye(R,g("el.pagination.deprecationWarning")),null;if(!e.layout||e.hideOnSinglePage&&S.value<=1)return null;const t=[],l=[],s=I("div",{class:r.e("rightwrapper")},l),N={prev:I(be,{disabled:e.disabled,currentPage:f.value,prevText:e.prevText,prevIcon:e.prevIcon,onClick:A}),jumper:I(Ne,{size:e.small?"small":"default"}),pager:I(Fe,{currentPage:f.value,pageCount:S.value,pagerCount:e.pagerCount,onChange:O,disabled:e.disabled}),next:I(ye,{disabled:e.disabled,currentPage:f.value,pageCount:S.value,nextText:e.nextText,nextIcon:e.nextIcon,onClick:W}),sizes:I(ze,{pageSize:p.value,pageSizes:e.pageSizes,popperClass:e.popperClass,disabled:e.disabled,size:e.small?"small":"default"}),slot:(v=(i=n==null?void 0:n.default)==null?void 0:i.call(n))!=null?v:null,total:I(we,{total:m(e.total)?0:e.total})},E=e.layout.split(",").map(T=>T.trim());let _=!1;return E.forEach(T=>{T!=="->"?_?l.push(N[T]):t.push(N[T]):_=!0}),j(t[0],r.is("first")),j(t[t.length-1],r.is("last")),_&&l.length>0&&(j(l[0],r.is("first")),j(l[l.length-1],r.is("last")),t.push(s)),I("div",{class:[r.b(),r.is("background",e.background),{[r.m("small")]:e.small}]},t)}}}))});export{ue as E,na as __tla};
