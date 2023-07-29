import{n as d,aa as ue,a2 as de,a as Q,a5 as fe,z as B,eN as ge,f as H,bE as ve,W as he,X,cH as pe,O as x,c0 as me,eO as be,dH as ye,b as ne,aj as _e,o as E,h as G,i as J,ax as S,q as N,k as h,aD as oe,G as He,Q as q,R as re,ev as $e,dT as ke,bx as Ce,cO as Pe,ab as b,aA as Fe,aN as xe,a7 as Se,ey as we,c3 as K,j as ee,bc as Be,r as Re,w as z,aI as Te,aJ as Oe,F as Ae,v as Ie,t as Ee,ag as Ne,l as te,bz as se}from"./index-8b526734.js";import{B as je}from"./index-d89d7986.js";import{A as ze}from"./index-1967bd47.js";import{T as De,o as We}from"./onMountedOrActivated-13e9417a.js";import{u as Le}from"./useWindowSizeFn-38cd0f6d.js";import{a as Me}from"./useContentViewHeight-0508c576.js";import{A as Ve}from"./ArrowLeftOutlined-83b12cfe.js";var Xe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"};const qe=Xe;function ae(i){for(var t=1;t<arguments.length;t++){var l=arguments[t]!=null?Object(arguments[t]):{},g=Object.keys(l);typeof Object.getOwnPropertySymbols=="function"&&(g=g.concat(Object.getOwnPropertySymbols(l).filter(function(n){return Object.getOwnPropertyDescriptor(l,n).enumerable}))),g.forEach(function(n){Ge(i,n,l[n])})}return i}function Ge(i,t,l){return t in i?Object.defineProperty(i,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):i[t]=l,i}var U=function(t,l){var g=ae({},t,l.attrs);return d(ue,ae({},g,{icon:qe}),null)};U.displayName="ArrowRightOutlined";U.inheritAttrs=!1;const Je=U;var Qe=function(){return{backIcon:x.any,prefixCls:String,title:x.any,subTitle:x.any,breadcrumb:x.object,tags:x.any,footer:x.any,extra:x.any,avatar:x.object,ghost:{type:Boolean,default:void 0},onBack:Function}},Ue=Q({compatConfig:{MODE:3},name:"APageHeader",props:Qe(),slots:["backIcon","avatar","breadcrumb","title","subTitle","tags","extra","footer"],setup:function(t,l){var g=l.emit,n=l.slots,k=fe("page-header",t),v=k.prefixCls,y=k.direction,_=k.pageHeader,R=B(!1),O=ge(),$=function(e){var a=e.width;O.value||(R.value=a<768)},C=H(function(){var r,e,a;return(r=(e=t.ghost)!==null&&e!==void 0?e:(a=_.value)===null||a===void 0?void 0:a.ghost)!==null&&r!==void 0?r:!0}),P=function(){var e,a,o;return(e=(a=t.backIcon)!==null&&a!==void 0?a:(o=n.backIcon)===null||o===void 0?void 0:o.call(n))!==null&&e!==void 0?e:y.value==="rtl"?d(Je,null,null):d(Ve,null,null)},c=function(e){return!e||!t.onBack?null:d(ye,{componentName:"PageHeader",children:function(o){var s=o.back;return d("div",{class:"".concat(v.value,"-back")},[d(De,{onClick:function(w){g("back",w)},class:"".concat(v.value,"-back-button"),"aria-label":s},{default:function(){return[e]}})])}},null)},F=function(){var e;return t.breadcrumb?d(je,t.breadcrumb,null):(e=n.breadcrumb)===null||e===void 0?void 0:e.call(n)},m=function(){var e,a,o,s,u,w,j,D,W,L=t.avatar,A=(e=t.title)!==null&&e!==void 0?e:(a=n.title)===null||a===void 0?void 0:a.call(n),I=(o=t.subTitle)!==null&&o!==void 0?o:(s=n.subTitle)===null||s===void 0?void 0:s.call(n),M=(u=t.tags)!==null&&u!==void 0?u:(w=n.tags)===null||w===void 0?void 0:w.call(n),V=(j=t.extra)!==null&&j!==void 0?j:(D=n.extra)===null||D===void 0?void 0:D.call(n),T="".concat(v.value,"-heading"),Z=A||I||M||V;if(!Z)return null;var ie=P(),Y=c(ie),ce=Y||L||Z;return d("div",{class:T},[ce&&d("div",{class:"".concat(T,"-left")},[Y,L?d(ze,L,null):(W=n.avatar)===null||W===void 0?void 0:W.call(n),A&&d("span",{class:"".concat(T,"-title"),title:typeof A=="string"?A:void 0},[A]),I&&d("span",{class:"".concat(T,"-sub-title"),title:typeof I=="string"?I:void 0},[I]),M&&d("span",{class:"".concat(T,"-tags")},[M])]),V&&d("span",{class:"".concat(T,"-extra")},[V])])},f=function(){var e,a,o=(e=t.footer)!==null&&e!==void 0?e:me((a=n.footer)===null||a===void 0?void 0:a.call(n));return be(o)?null:d("div",{class:"".concat(v.value,"-footer")},[o])},p=function(e){return d("div",{class:"".concat(v.value,"-content")},[e])};return function(){var r,e,a,o=((r=t.breadcrumb)===null||r===void 0?void 0:r.routes)||n.breadcrumb,s=t.footer||n.footer,u=ve((e=n.default)===null||e===void 0?void 0:e.call(n)),w=he(v.value,(a={"has-breadcrumb":o,"has-footer":s},X(a,"".concat(v.value,"-ghost"),C.value),X(a,"".concat(v.value,"-rtl"),y.value==="rtl"),X(a,"".concat(v.value,"-compact"),R.value),a));return d(pe,{onResize:$},{default:function(){return[d("div",{class:w},[F(),m(),u.length?p(u):null,f()])]}})}}});const Ze=de(Ue),Ye=Q({name:"PageFooter",inheritAttrs:!1,__name:"PageFooter",setup(i){const{prefixCls:t}=ne("page-footer"),{getCalcContentWidth:l}=_e();return(g,n)=>(E(),G("div",{class:N(h(t)),style:oe({width:h(l)})},[J("div",{class:N(`${h(t)}__left`)},[S(g.$slots,"left",{},void 0,!0)],2),S(g.$slots,"default",{},void 0,!0),J("div",{class:N(`${h(t)}__right`)},[S(g.$slots,"right",{},void 0,!0)],2)],6))}});const le=He(Ye,[["__scopeId","data-v-4b71342e"]]);function Ke(i,t,l,g,n=0,k=B(0)){const v=B(null),{footerHeightRef:y}=Me();let _={useLayoutFooter:!0};const R=c=>{_=c};function O(){q(()=>{P()})}function $(c,F="all"){function m(r){return Number(r.replace(/[^\d]/g,""))}let f=0;const p="0px";if(c){const r=getComputedStyle(c),e=m(r?.marginTop??p),a=m(r?.marginBottom??p),o=m(r?.paddingTop??p),s=m(r?.paddingBottom??p);F==="all"?(f+=e,f+=a,f+=o,f+=s):F==="top"?(f+=e,f+=o):(f+=a,f+=s)}return f}function C(c){return c==null?null:c instanceof HTMLDivElement?c:c.$el}async function P(){if(!i.value)return;await q();const c=C(h(t));if(!c)return;const{bottomIncludeBody:F}=$e(c);let m=0;l.forEach(o=>{m+=C(h(o))?.offsetHeight??0});let f=$(c)??0;g.forEach(o=>{f+=$(C(h(o)))});let p=0;function r(o,s){if(o&&s){const u=o.parentElement;u&&(Ce(s)?u.classList.contains(s)?p+=$(u,"bottom"):(p+=$(u,"bottom"),r(u,s)):Pe(s)&&s>0&&(p+=$(u,"bottom"),r(u,--s)))}}ke(n)?r(c,h(n)):r(c,n);let e=F-h(y)-h(k)-m-f-p;const a=()=>{_.elements?.forEach(o=>{e+=C(h(o))?.offsetHeight??0})};_.useLayoutFooter&&h(y)>0,a(),v.value=e}return We(()=>{q(()=>{P()})}),Le(()=>{P()},50,{immediate:!0}),re(()=>[y.value],()=>{P()},{flush:"post",immediate:!0}),{redoHeight:O,setCompensation:R,contentHeight:v}}const et=Q({name:"PageWrapper",inheritAttrs:!1,__name:"PageWrapper",props:{title:b.string,dense:b.bool,ghost:b.bool,content:b.string,contentStyle:{type:Object},contentBackground:b.bool.def(!0),contentFullHeight:b.bool.def(!1),contentClass:b.string,fixedHeight:b.bool,upwardSpace:b.oneOfType([b.number,b.string]).def(0)},setup(i){const t=i,l=Fe(),g=xe(),n=B(null),k=B(null),v=B(null),y=B(null),{prefixCls:_}=ne("page-wrapper");Se(we,H(()=>t.fixedHeight));const R=H(()=>t.contentFullHeight),O=H(()=>t.upwardSpace),{redoHeight:$,setCompensation:C,contentHeight:P}=Ke(R,n,[k,y],[v],O);C({useLayoutFooter:!0,elements:[y]});const c=H(()=>[_,{[`${_}--dense`]:t.dense},g.class??{}]),F=H(()=>t.content||l?.headerContent||t.title||f.value.length),m=H(()=>l?.leftFooter||l?.rightFooter),f=H(()=>Object.keys(K(l,"default","leftFooter","rightFooter","headerContent"))),p=H(()=>{const{contentFullHeight:e,contentStyle:a,fixedHeight:o}=t;if(!e)return{...a};const s=`${h(P)}px`;return{...a,minHeight:s,...o?{height:s}:{}}}),r=H(()=>{const{contentBackground:e,contentClass:a}=t;return[`${_}-content`,a,{[`${_}-content-bg`]:e}]});return re(()=>[m.value],()=>{$()},{flush:"post",immediate:!0}),(e,a)=>(E(),G("div",{class:N(c.value),ref_key:"wrapperRef",ref:n},[F.value?(E(),ee(h(Ze),Ne({key:0,ghost:i.ghost,title:i.title},h(K)(e.$attrs,"class"),{ref_key:"headerRef",ref:k}),Be({default:z(()=>[i.content?(E(),G(Ae,{key:0},[Ie(Ee(i.content),1)],64)):S(e.$slots,"headerContent",{key:1})]),_:2},[Re(f.value,(o,s)=>({name:o,fn:z(u=>[S(e.$slots,o,Te(Oe(u||{})))])}))]),1040,["ghost","title"])):te("",!0),J("div",{class:N(["overflow-hidden",r.value]),style:oe(p.value),ref_key:"contentRef",ref:v},[S(e.$slots,"default")],6),m.value?(E(),ee(le,{key:1,ref_key:"footerRef",ref:y},{left:z(()=>[S(e.$slots,"leftFooter")]),right:z(()=>[S(e.$slots,"rightFooter")]),_:3},512)):te("",!0)],2))}});se(le);const it=se(et);export{it as P};
