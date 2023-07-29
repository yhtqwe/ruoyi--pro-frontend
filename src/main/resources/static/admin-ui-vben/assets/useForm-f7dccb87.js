import{cN as Le,f as M,k as e,cO as De,a as Ie,c as Ee,ao as Re,as as _,aF as G,D as Oe,E as je,n as O,cP as _e,cQ as ye,ag as ae,bw as W,v as Me,cR as Ne,cS as $e,aG as q,cT as Q,bx as se,cU as Z,bp as X,cV as me,cW as ke,aM as Ve,R as Y,cX as We,az as qe,Q as oe,al as be,cY as ge,cZ as he,c_ as xe,c$ as Ue,aw as He,aN as ze,B as ve,z as K,b as Je,C as Ke,o as ie,j as Ae,w as te,ax as ne,h as Ye,r as le,F as Xe,bc as Fe,aI as fe,aJ as ue,bu as Ge,T as Qe,d0 as Ze,d1 as et}from"./index-8b526734.js";import{F as Te}from"./index-03ea37ad.js";import"./index-3e87b811.js";import{D as tt}from"./index-c8168e27.js";import{c as we,N as nt,a as Pe,s as st,d as at,h as ot,b as Be,e as rt,f as ct,g as it}from"./BasicForm.vue_vue_type_style_index_0_lang-42e5fba8.js";import{h as lt,s as ft,c as ut}from"./_stringToArray-c38191b3.js";import{C as Ce}from"./index-42686290.js";import{g as dt}from"./get-11175361.js";import{u as mt}from"./uniqBy-f83999c6.js";import{b as ht}from"./index-40f1f97e.js";import{R as pt}from"./index-9e517d44.js";function yt(n){return function(l){l=Le(l);var o=lt(l)?ft(l):void 0,a=o?o[0]:l.charAt(0),m=o?ut(o,1).join(""):l.slice(1);return a[n]()+m}}var bt=yt("toUpperCase");const gt=bt;function vt(n,l){return M(()=>{const o=e(n),{labelCol:a={},wrapperCol:m={}}=o.itemProps||{},{labelWidth:F,disabledLabelWidth:s}=o,{labelWidth:i,labelCol:C,wrapperCol:V,layout:b}=e(l);if(!i&&!F&&!C||s)return a.style={textAlign:"left"},{labelCol:a,wrapperCol:m};let x=F||i;const B={...C,...a},I={...V,...m};return x&&(x=De(x)?`${x}px`:x),{labelCol:{style:{width:x},...B},wrapperCol:{style:{width:b==="vertical"?"100%":`calc(100% - ${x})`},...I}}})}function de(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!_e(n)}const At=Ie({name:"BasicFormItem",inheritAttrs:!1,props:{schema:{type:Object,default:()=>({})},formProps:{type:Object,default:()=>({})},allDefaultValues:{type:Object,default:()=>({})},formModel:{type:Object,default:()=>({})},setFormModel:{type:Function,default:null},tableAction:{type:Object},formActionType:{type:Object},isAdvanced:{type:Boolean}},setup(n,{slots:l}){const{t:o}=Ee(),{schema:a,formProps:m}=Re(n),F=vt(a,m),s=M(()=>{const{allDefaultValues:v,formModel:f,schema:r}=n,{mergeDynamicData:u}=n.formProps;return{field:r.field,model:f,values:{...u,...v,...f},schema:r}}),i=M(()=>{const{schema:v,tableAction:f,formModel:r,formActionType:u}=n;let{componentProps:y={}}=v;return _(y)&&(y=y({schema:v,tableAction:f,formModel:r,formActionType:u})??{}),v.component==="Divider"&&(y=Object.assign({type:"horizontal"},{orientation:"left",plain:!0},y)),y}),C=M(()=>{const{disabled:v}=n.formProps,{dynamicDisabled:f}=n.schema,{disabled:r=!1}=e(i);let u=!!v||r;return G(f)&&(u=f),_(f)&&(u=f(e(s))),u});function V(){const{show:v,ifShow:f}=n.schema,{showAdvancedButton:r}=n.formProps,u=r&&G(n.isAdvanced)?n.isAdvanced:!0;let y=!0,A=!0;return G(v)&&(y=v),G(f)&&(A=f),_(v)&&(y=v(e(s))),_(f)&&(A=f(e(s))),y=y&&u,{isShow:y,isIfShow:A}}function b(){const{rules:v=[],component:f,rulesMessageJoinLabel:r,label:u,dynamicRules:y,required:A}=n.schema;if(_(y))return y(e(s));let w=W(v);const{rulesMessageJoinLabel:E}=n.formProps,T=Reflect.has(n.schema,"rulesMessageJoinLabel")?r:E,t=Pe(f)+`${T?u:""}`;function c(d,g){const S=d.message||t;return g===void 0||$e(g)||Array.isArray(g)&&g.length===0||typeof g=="string"&&g.trim()===""||typeof g=="object"&&Reflect.has(g,"checked")&&Reflect.has(g,"halfChecked")&&Array.isArray(g.checked)&&Array.isArray(g.halfChecked)&&g.checked.length===0&&g.halfChecked.length===0?Promise.reject(S):Promise.resolve()}const P=_(A)?A(e(s)):A;P&&(!w||w.length===0?w=[{required:P,validator:c}]:w.findIndex(g=>Reflect.has(g,"required"))===-1&&w.push({required:P,validator:c}));const h=w.findIndex(d=>Reflect.has(d,"required")&&!Reflect.has(d,"validator"));if(h!==-1){const d=w[h],{isShow:g}=V();if(g||(d.required=!1),f){Reflect.has(d,"type")||(d.type=f==="InputNumber"?"number":"string"),d.message=d.message||t,(f.includes("Input")||f.includes("Textarea"))&&(d.whitespace=!0);const S=e(i)?.valueFormat;st(d,f,S)}}const p=w.findIndex(d=>d.max);return p!==-1&&!w[p].validator&&(w[p].message=w[p].message||o("component.form.maxTip",[w[p].max])),w}function x(){const{renderComponentContent:v,component:f,field:r,changeEvent:u="change",valueField:y}=n.schema,A=f&&["Switch","Checkbox"].includes(f),w=`on${gt(u)}`,E={[w]:(...S)=>{const[U]=S;P[w]&&P[w](...S);const N=U?U.target:null,$=N?A?N.checked:N.value:U;n.setFormModel(r,$,n.schema)}},T=we.get(f),{autoSetPlaceHolder:t,size:c}=n.formProps,P={allowClear:!0,getPopupContainer:S=>S.parentNode,size:c,...e(i),disabled:e(C)};!P.disabled&&t&&f!=="RangePicker"&&f&&(P.placeholder=e(i)?.placeholder||Pe(f)),P.codeField=r,P.formValues=e(s);const p={[y||(A?"checked":"value")]:n.formModel[r]},d={...P,...E,...p};if(!v)return O(T,d,null);const g=_(v)?{...v(e(s))}:{default:()=>v};return O(T,d,de(g)?g:{default:()=>[g]})}function B(){const{label:v,helpMessage:f,helpComponentProps:r,subLabel:u}=n.schema,y=u?O("span",null,[v,Me(" "),O("span",{class:"text-secondary"},[u])]):v,A=_(f)?f(e(s)):f;return!A||Array.isArray(A)&&A.length===0?y:O("span",null,[y,O(Ne,ae({placement:"top",class:"mx-1",text:A},r),null)])}function I(){const{itemProps:v,slot:f,render:r,field:u,suffix:y,component:A}=n.schema,{labelCol:w,wrapperCol:E}=e(F),{colon:T}=n.formProps;if(A==="Divider"){let t;return O(Ce,{span:24},{default:()=>[O(tt,e(i),de(t=B())?t:{default:()=>[t]})]})}else{const t=()=>f?ye(l,f,e(s)):r?r(e(s)):x(),c=!!y,P=_(y)?y(e(s)):y;return nt.includes(A)&&n.schema&&(n.schema.itemProps={autoLink:!1,...n.schema.itemProps}),O(Te.Item,ae({name:u,colon:T,class:{"suffix-item":c}},v,{label:B(),rules:b(),labelCol:w,wrapperCol:E}),{default:()=>[O("div",{style:"display:flex"},[O("div",{style:"flex:1;"},[t()]),c&&O("span",{class:"suffix"},[P])])]})}}return()=>{let v;const{colProps:f={},colSlot:r,renderColContent:u,component:y}=n.schema;if(!we.has(y))return null;const{baseColProps:A={}}=n.formProps,w={...A,...f},{isIfShow:E,isShow:T}=V(),t=e(s);return E&&Oe(O(Ce,w,de(v=(()=>r?ye(l,r,t):u?u(t):I())())?v:{default:()=>[v]}),[[je,T]])}}});function Ft(n,l,o){const a=/^\[(.+)\]$/;if(a.test(n)){const m=n.match(a);if(m&&m[1]){const F=m[1].split(",");return l=Array.isArray(l)?l:[l],F.forEach((s,i)=>{Z(o,s.trim(),l[i])}),!0}}}function wt(n,l,o){const a=/^\{(.+)\}$/;if(a.test(n)){const m=n.match(a);if(m&&m[1]){const F=m[1].split(",");return l=q(l)?l:{},F.forEach(s=>{Z(o,s.trim(),l[s.trim()])}),!0}}}function Pt({defaultValueRef:n,getSchema:l,formModel:o,getProps:a}){function m(i){if(!q(i))return{};const C={};for(const V of Object.entries(i)){let[,b]=V;const[x]=V;if(!x||Q(b)&&b.length===0||_(b))continue;const B=e(a).transformDateFunc;q(b)&&(b=B?.(b)),Q(b)&&b[0]?.format&&b[1]?.format&&(b=b.map(I=>B?.(I))),se(b)&&(b===""?b=void 0:b=b.trim()),!Ft(x,b,C)&&!wt(x,b,C)&&Z(C,x,b)}return F(C)}function F(i){const C=e(a).fieldMapToTime;if(!C||!Array.isArray(C))return i;for(const[V,[b,x],B="YYYY-MM-DD"]of C){if(!V||!b||!x)continue;if(!i[V]){Reflect.deleteProperty(i,V);continue}const[I,v]=i[V],[f,r]=Array.isArray(B)?B:[B,B];i[b]=X(I).format(f),i[x]=X(v).format(r),Reflect.deleteProperty(i,V)}return i}function s(){const i=e(l),C={};i.forEach(V=>{const{defaultValue:b}=V;me(b)||(C[V.field]=b,o[V.field]===void 0&&(o[V.field]=b))}),n.value=W(C)}return{handleFormValues:m,initDefault:s}}const J=24;function Ct({advanceState:n,emit:l,getProps:o,getSchema:a,formModel:m,defaultValueRef:F}){const s=qe(),{realWidthRef:i,screenEnum:C,screenRef:V}=ke(),b=M(()=>{if(!n.isAdvanced)return 0;const r=e(o).emptySpan||0;if(De(r))return r;if(q(r)){const{span:u=0}=r,y=e(V);return r[y.toLowerCase()]||u||0}return 0}),x=Ve(v,30);Y([()=>e(a),()=>n.isAdvanced,()=>e(i)],()=>{const{showAdvancedButton:r}=e(o);r&&x()},{immediate:!0});function B(r,u=0,y=!1){const A=e(i),w=parseInt(r.md)||parseInt(r.xs)||parseInt(r.sm)||r.span||J,E=parseInt(r.lg)||w,T=parseInt(r.xl)||E,t=parseInt(r.xxl)||T;return A<=C.LG?u+=w:A<C.XL?u+=E:A<C.XXL?u+=T:u+=t,y?(n.hideAdvanceBtn=!1,u<=J*2?(n.hideAdvanceBtn=!0,n.isAdvanced=!0):u>J*2&&u<=J*(e(o).autoAdvancedLine||3)?n.hideAdvanceBtn=!1:n.isLoad||(n.isLoad=!0,n.isAdvanced=!n.isAdvanced),{isAdvanced:n.isAdvanced,itemColSum:u}):u>J*(e(o).alwaysShowLines||1)?{isAdvanced:n.isAdvanced,itemColSum:u}:{isAdvanced:!0,itemColSum:u}}const I=We({});function v(){let r=0,u=0;const{baseColProps:y={}}=e(o);for(const A of e(a)){const{show:w,colProps:E}=A;let T=!0;if(G(w)&&(T=w),_(w)&&(T=w({schema:A,model:m,field:A.field,values:{...e(F),...m}})),T&&(E||y)){const{itemColSum:t,isAdvanced:c}=B({...y,...E},r);r=t||0,c&&(u=r),I[A.field]=c}}s?.proxy?.$forceUpdate(),n.actionSpan=u%J+e(b),B(e(o).actionColOptions||{span:J},r,!0),l("advanced-change")}function f(){n.isAdvanced=!n.isAdvanced}return{handleToggleAdvanced:f,fieldsIsAdvancedMap:I}}function Dt(n,l={}){const o=/^\[(.+)\]$/;if(o.test(n)){const a=n.match(o);if(a&&a[1]){const m=a[1].split(",");if(!m.length)return;const F=[];return m.forEach((s,i)=>{Z(F,i,l[s.trim()])}),F.filter(Boolean).length?F:void 0}}}function It(n,l={}){const o=/^\{(.+)\}$/;if(o.test(n)){const a=n.match(o);if(a&&a[1]){const m=a[1].split(",");if(!m.length)return;const F={};return m.forEach(s=>{Z(F,s.trim(),l[s.trim()])}),Object.values(F).filter(Boolean).length?F:void 0}}}function Vt({emit:n,getProps:l,formModel:o,getSchema:a,defaultValueRef:m,formElRef:F,schemaRef:s,handleFormValues:i}){async function C(){const{resetFunc:t,submitOnReset:c}=e(l);t&&_(t)&&await t(),e(F)&&(Object.keys(o).forEach(h=>{const p=e(a).find(S=>S.field===h),d=p?.component&&at.includes(p.component),g=W(m.value[h]);o[h]=d?g||"":g}),oe(()=>w()),n("reset",be(o)),c&&T())}async function V(t){const c=e(a).map(d=>d.field).filter(Boolean),P=".",h=c.filter(d=>String(d).indexOf(P)>=0),p=[];c.forEach(d=>{const g=e(a).find(R=>R.field===d);let S=dt(t,d);const U=Reflect.has(t,d);S=ot(g?.component,S);const{componentProps:N}=g||{};let $=N;typeof N=="function"&&($=$({formModel:e(o)}));const ee=Dt(d,t)||It(d,t);if(U||ee){const R=ee||S;if(u(d))if(Array.isArray(R)){const k=[];for(const H of R)k.push(H?X(H):null);e(o)[d]=k}else e(o)[d]=R?$?.valueFormat?R:X(R):null;else e(o)[d]=R;$?.onChange&&$?.onChange(R),p.push(d)}else h.forEach(R=>{try{const k=R.split(".").reduce((H,re)=>H[re],t);ge(k)&&(e(o)[R]=e(k),p.push(R))}catch{ge(m.value[R])&&(e(o)[R]=W(e(m.value[R])))}})}),y(p).catch(d=>{})}async function b(t){const c=W(e(a));if(!t)return;let P=se(t)?[t]:t;se(t)&&(P=[t]);for(const h of P)x(h,c);s.value=c}function x(t,c){if(se(t)){const P=c.findIndex(h=>h.field===t);P!==-1&&(delete o[t],c.splice(P,1))}}async function B(t,c,P=!1){const h=W(e(a)),p=h.findIndex(g=>g.field===c),d=q(t)?[t]:t;if(!c||p===-1||P){P?h.unshift(...d):h.push(...d),s.value=h,f(t);return}p!==-1&&h.splice(p+1,0,...d),f(t),s.value=h}async function I(t){let c=[];if(q(t)&&c.push(t),Q(t)&&(c=[...t]),!c.every(h=>h.component==="Divider"||Reflect.has(h,"field")&&h.field)){he("All children of the form Schema array that need to be updated must contain the `field` field");return}s.value=c}async function v(t){let c=[];if(q(t)&&c.push(t),Q(t)&&(c=[...t]),!c.every(p=>p.component==="Divider"||Reflect.has(p,"field")&&p.field)){he("All children of the form Schema array that need to be updated must contain the `field` field");return}const h=[];e(a).forEach(p=>{let d;if(c.forEach(g=>{p.field===g.field&&(d=g)}),d!==void 0&&p.field===d.field){const g=xe(p,d);h.push(g)}else h.push(p)}),f(h),s.value=mt(h,"field")}function f(t){let c=[];q(t)&&c.push(t),Q(t)&&(c=[...t]);const P={},h=r();c.forEach(p=>{p.component!="Divider"&&Reflect.has(p,"field")&&p.field&&!me(p.defaultValue)&&(!(p.field in h)||me(h[p.field])||Ue(h[p.field]))&&(P[p.field]=p.defaultValue)}),V(P)}function r(){return e(F)?i(be(e(o))):{}}function u(t){return e(a).some(c=>c.field===t?Be.includes(c.component):!1)}async function y(t){return e(F)?.validateFields(t)}async function A(t){return await e(F)?.validate(t)}async function w(t){await e(F)?.clearValidate(t)}async function E(t,c){await e(F)?.scrollToField(t,c)}async function T(t){t&&t.preventDefault();const{submitFunc:c}=e(l);if(c&&_(c)){await c();return}if(e(F))try{const h=await A(),p=i(h);n("submit",p)}catch(h){if(h?.outOfDate===!1&&h?.errorFields)return;throw new Error(h)}}return{handleSubmit:T,clearValidate:w,validate:A,validateFields:y,getFieldsValue:r,updateSchema:v,resetSchema:I,appendSchemaByField:B,removeSchemaByField:b,resetFields:C,setFieldsValue:V,scrollToField:E}}async function xt({getSchema:n,getProps:l,formElRef:o,isInitedDefault:a}){He(async()=>{if(e(a)||!e(l).autoFocusFirstItem)return;await oe();const m=e(n),F=e(o),s=F?.$el;if(!F||!s||!m||m.length===0||!m[0].component.includes("Input"))return;const C=s.querySelector(".ant-row:first-child input");C&&C?.focus()})}const $t=Ie({name:"BasicForm",__name:"BasicForm",props:rt,emits:["advanced-change","reset","submit","register","field-value-change"],setup(n,{emit:l}){const o=n,a=ze(),m=ve({}),F=ht(),s=ve({isAdvanced:!0,hideAdvanceBtn:!1,isLoad:!1,actionSpan:6}),i=K({}),C=K(!1),V=K({}),b=K(null),x=K(null),{prefixCls:B}=Je("basic-form"),I=M(()=>({...o,...e(V)})),v=M(()=>[B,{[`${B}--compact`]:e(I).compact}]),f=M(()=>{const{baseRowStyle:D={},rowProps:j}=e(I);return{style:D,...j}}),r=M(()=>({...a,...o,...e(I)})),u=M(()=>{const D=e(b)||e(I).schemas;for(const j of D){const{defaultValue:L,component:z,isHandleDateDefaultValue:ce=!0}=j;if(ce&&L&&Be.includes(z))if(!Array.isArray(L))j.defaultValue=X(L);else{const pe=[];L.forEach(Se=>{pe.push(X(Se))}),j.defaultValue=pe}}return e(I).showAdvancedButton?W(D.filter(j=>j.component!=="Divider")):W(D)}),{handleToggleAdvanced:y,fieldsIsAdvancedMap:A}=Ct({advanceState:s,emit:l,getProps:I,getSchema:u,formModel:m,defaultValueRef:i}),{handleFormValues:w,initDefault:E}=Pt({getProps:I,defaultValueRef:i,getSchema:u,formModel:m});xt({getSchema:u,getProps:I,isInitedDefault:C,formElRef:x});const{handleSubmit:T,setFieldsValue:t,clearValidate:c,validate:P,validateFields:h,getFieldsValue:p,updateSchema:d,resetSchema:g,appendSchemaByField:S,removeSchemaByField:U,resetFields:N,scrollToField:$}=Vt({emit:l,getProps:I,formModel:m,getSchema:u,defaultValueRef:i,formElRef:x,schemaRef:b,handleFormValues:w});ct({resetAction:N,submitAction:T}),Y(()=>e(I).model,()=>{const{model:D}=e(I);D&&t(D)},{immediate:!0}),Y(()=>e(I).schemas,D=>{g(D??[])}),Y(()=>u.value,D=>{oe(()=>{F?.redoModalHeight?.()}),!e(C)&&D?.length&&(E(),C.value=!0)}),Y(()=>m,Ve(()=>{e(I).submitOnChange&&T()},300),{deep:!0});async function ee(D){V.value=xe(e(V)||{},D)}function R(D,j,L){m[D]=j,l("field-value-change",D,j),L&&L.itemProps&&!L.itemProps.autoLink&&h([D]).catch(z=>{})}function k(D){const{autoSubmitOnEnter:j}=e(I);if(j&&D.key==="Enter"&&D.target&&D.target instanceof HTMLElement){const L=D.target;L&&L.tagName&&L.tagName.toUpperCase()=="INPUT"&&T()}}const H={getFieldsValue:p,setFieldsValue:t,resetFields:N,updateSchema:d,resetSchema:g,setProps:ee,removeSchemaByField:U,appendSchemaByField:S,clearValidate:c,validateFields:h,validate:P,submit:T,scrollToField:$};Ke(()=>{E(),l("register",H)});const re=M(()=>({...I.value,...s}));return(D,j)=>(ie(),Ae(e(Te),ae(r.value,{class:v.value,ref_key:"formElRef",ref:x,model:m,onKeypress:Ge(k,["enter"])}),{default:te(()=>[O(e(pt),fe(ue(f.value)),{default:te(()=>[ne(D.$slots,"formHeader"),(ie(!0),Ye(Xe,null,le(u.value,L=>(ie(),Ae(At,{key:L.field,isAdvanced:e(A)[L.field],tableAction:D.tableAction,formActionType:H,schema:L,formProps:I.value,allDefaultValues:i.value,formModel:m,setFormModel:R},Fe({_:2},[le(Object.keys(D.$slots),z=>({name:z,fn:te(ce=>[ne(D.$slots,z,fe(ue(ce||{})))])}))]),1032,["isAdvanced","tableAction","formActionType","schema","formProps","allDefaultValues","formModel"]))),128)),O(it,ae(re.value,{onToggleAdvanced:e(y)}),Fe({_:2},[le(["resetBefore","submitBefore","advanceBefore","advanceAfter"],L=>({name:L,fn:te(z=>[ne(D.$slots,L,fe(ue(z||{})))])}))]),1040,["onToggleAdvanced"]),ne(D.$slots,"formFooter")]),_:3},16)]),_:3},16,["class","model","onKeypress"]))}});function kt(n){const l=K(null),o=K(!1);async function a(){const s=e(l);return s||he("The form instance has not been obtained, please make sure that the form has been rendered when performing the form operation!"),await oe(),s}function m(s){Qe(()=>{l.value=null,o.value=null}),!(e(o)&&Ze()&&s===e(l))&&(l.value=s,o.value=!0,Y(()=>n,()=>{n&&s.setProps(et(n))},{immediate:!0,deep:!0}))}return[m,{scrollToField:async(s,i)=>{(await a()).scrollToField(s,i)},setProps:async s=>{(await a()).setProps(s)},updateSchema:async s=>{(await a()).updateSchema(s)},resetSchema:async s=>{(await a()).resetSchema(s)},clearValidate:async s=>{(await a()).clearValidate(s)},resetFields:async()=>{a().then(async s=>{await s.resetFields()})},removeSchemaByField:async s=>{e(l)?.removeSchemaByField(s)},getFieldsValue:()=>e(l)?.getFieldsValue(),setFieldsValue:async s=>{(await a()).setFieldsValue(s)},appendSchemaByField:async(s,i,C)=>{(await a()).appendSchemaByField(s,i,C)},submit:async()=>(await a()).submit(),validate:async s=>(await a()).validate(s),validateFields:async s=>(await a()).validateFields(s)}]}export{$t as _,kt as u};
