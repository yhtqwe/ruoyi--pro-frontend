import{ag as te,aU as O,bX as se,aW as ne,d as $,bn as oe,ah as ie,b2 as re,d5 as ce,r as c,b as u,b9 as f,af as ue,A as de,o as i,c as d,al as S,g as N,t as ve,a,V as g,F as T,a2 as pe,a1 as y,q as fe,w as ye,au as me,aj as ge,a9 as we,d6 as he,aX as _e,d7 as ke,ct as j,d8 as be,d9 as ze,an as Se,__tla as xe}from"./index-0f589822.js";import{E as Ee,__tla as Ie}from"./el-image-viewer-863e3dd0.js";let q,Ce=Promise.all([(()=>{try{return xe}catch{}})(),(()=>{try{return Ie}catch{}})()]).then(async()=>{const M=te({hideOnClickModal:Boolean,src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:Boolean,scrollContainer:{type:O([String,Object])},previewSrcList:{type:O(Array),default:()=>se([])},previewTeleported:Boolean,zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2}}),P={load:n=>n instanceof Event,error:n=>n instanceof Event,switch:n=>ne(n),close:()=>!0,show:()=>!0},R=["src","loading"],X={key:0},F=$({name:"ElImage",inheritAttrs:!1});q=Se(ge($({...F,props:M,emits:P,setup(n,{emit:v}){const l=n;let x="";const{t:Y}=oe(),o=ie("image"),D=re(),H=ce(),w=c(),p=c(!1),r=c(!0),h=c(!1),m=c(),s=c(),K=f&&"loading"in HTMLImageElement.prototype;let _,k;const U=u(()=>[o.e("inner"),b.value&&o.e("preview"),r.value&&o.is("loading")]),V=u(()=>D.style),W=u(()=>{const{fit:e}=l;return f&&e?{objectFit:e}:{}}),b=u(()=>{const{previewSrcList:e}=l;return Array.isArray(e)&&e.length>0}),G=u(()=>{const{previewSrcList:e,initialIndex:t}=l;let B=t;return t>e.length-1&&(B=0),B}),E=u(()=>l.loading!=="eager"&&(!K&&l.loading==="lazy"||l.lazy)),z=()=>{f&&(r.value=!0,p.value=!1,w.value=l.src)};function J(e){r.value=!1,p.value=!1,v("load",e)}function Q(e){r.value=!1,p.value=!0,v("error",e)}function I(){be(m.value,s.value)&&(z(),A())}const C=ze(I,200,!0);async function L(){var e;if(!f)return;await we();const{scrollContainer:t}=l;he(t)?s.value=t:_e(t)&&t!==""?s.value=(e=document.querySelector(t))!=null?e:void 0:m.value&&(s.value=ke(m.value)),s.value&&(_=j(s,"scroll",C),setTimeout(()=>I(),100))}function A(){f&&s.value&&C&&(_==null||_(),s.value=void 0)}function Z(e){if(e.ctrlKey)return e.deltaY<0||e.deltaY>0?(e.preventDefault(),!1):void 0}function ee(){b.value&&(k=j("wheel",Z,{passive:!1}),x=document.body.style.overflow,document.body.style.overflow="hidden",h.value=!0,v("show"))}function ae(){k==null||k(),document.body.style.overflow=x,h.value=!1,v("close")}function le(e){v("switch",e)}return ue(()=>l.src,()=>{E.value?(r.value=!0,p.value=!1,A(),L()):z()}),de(()=>{E.value?L():z()}),(e,t)=>(i(),d("div",{ref_key:"container",ref:m,class:g([a(o).b(),e.$attrs.class]),style:me(a(V))},[p.value?S(e.$slots,"error",{key:0},()=>[N("div",{class:g(a(o).e("error"))},ve(a(Y)("el.image.error")),3)]):(i(),d(T,{key:1},[w.value!==void 0?(i(),d("img",pe({key:0},a(H),{src:w.value,loading:e.loading,style:a(W),class:a(U),onClick:ee,onLoad:J,onError:Q}),null,16,R)):y("v-if",!0),r.value?(i(),d("div",{key:1,class:g(a(o).e("wrapper"))},[S(e.$slots,"placeholder",{},()=>[N("div",{class:g(a(o).e("placeholder"))},null,2)])],2)):y("v-if",!0)],64)),a(b)?(i(),d(T,{key:2},[h.value?(i(),fe(a(Ee),{key:0,"z-index":e.zIndex,"initial-index":a(G),infinite:e.infinite,"zoom-rate":e.zoomRate,"url-list":e.previewSrcList,"hide-on-click-modal":e.hideOnClickModal,teleported:e.previewTeleported,"close-on-press-escape":e.closeOnPressEscape,onClose:ae,onSwitch:le},{default:ye(()=>[e.$slots.viewer?(i(),d("div",X,[S(e.$slots,"viewer")])):y("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):y("v-if",!0)],64)):y("v-if",!0)],6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/image/src/image.vue"]]))});export{q as E,Ce as __tla};