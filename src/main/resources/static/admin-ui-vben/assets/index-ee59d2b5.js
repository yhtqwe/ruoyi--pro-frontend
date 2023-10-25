import{bL as W,bQ as Ne,cy as ye,d as ie,r as Z,f as H,n as p,cz as U,bz as oe,ar as Pe,_ as T,cA as L,C as Re,a6 as se,cB as ut,cC as vt,ah as bt,ag as pt,cD as ft,bX as Ie,c8 as F,as as ht,aB as mt,cE as $e,cF as Ge,bA as q,cG as qe,c3 as xe,cH as gt,cI as Xe,bB as $t,bC as yt,cJ as xt,bF as et,cK as tt,b$ as at,cf as St,cL as Ct,c5 as _e,c6 as _t,c4 as Tt,bw as wt,cM as Pt,cd as Rt,cN as De,bN as It,cO as je,cP as Et}from"./index-84bac5b8.js";import{u as Bt,P as Lt}from"./PlusOutlined-c3a73197.js";import{i as At}from"./isMobile-174ba801.js";function kt(e){const t=W(),a=W(!1);function i(){for(var o=arguments.length,l=new Array(o),n=0;n<o;n++)l[n]=arguments[n];a.value||(ye.cancel(t.value),t.value=ye(()=>{e(...l)}))}return Ne(()=>{a.value=!0,ye.cancel(t.value)}),i}function Dt(e){const t=W([]),a=W(typeof e=="function"?e():e),i=kt(()=>{let l=a.value;t.value.forEach(n=>{l=n(l)}),t.value=[],a.value=l});function o(l){t.value.push(l),i()}return[a,o]}const Mt=ie({compatConfig:{MODE:3},name:"TabNode",props:{id:{type:String},prefixCls:{type:String},tab:{type:Object},active:{type:Boolean},closable:{type:Boolean},editable:{type:Object},onClick:{type:Function},onResize:{type:Function},renderWrapper:{type:Function},removeAriaLabel:{type:String},onFocus:{type:Function}},emits:["click","resize","remove","focus"],setup(e,t){let{expose:a,attrs:i}=t;const o=Z();function l(f){var u;!((u=e.tab)===null||u===void 0)&&u.disabled||e.onClick(f)}a({domRef:o});function n(f){var u;f.preventDefault(),f.stopPropagation(),e.editable.onEdit("remove",{key:(u=e.tab)===null||u===void 0?void 0:u.key,event:f})}const h=H(()=>{var f;return e.editable&&e.closable!==!1&&!(!((f=e.tab)===null||f===void 0)&&f.disabled)});return()=>{var f;const{prefixCls:u,id:v,active:S,tab:{key:b,tab:s,disabled:y,closeIcon:x},renderWrapper:w,removeAriaLabel:C,editable:k,onFocus:K}=e,D=`${u}-tab`,r=p("div",{key:b,ref:o,class:oe(D,{[`${D}-with-remove`]:h.value,[`${D}-active`]:S,[`${D}-disabled`]:y}),style:i.style,onClick:l},[p("div",{role:"tab","aria-selected":S,id:v&&`${v}-tab-${b}`,class:`${D}-btn`,"aria-controls":v&&`${v}-panel-${b}`,"aria-disabled":y,tabindex:y?null:0,onClick:g=>{g.stopPropagation(),l(g)},onKeydown:g=>{[U.SPACE,U.ENTER].includes(g.which)&&(g.preventDefault(),l(g))},onFocus:K},[typeof s=="function"?s():s]),h.value&&p("button",{type:"button","aria-label":C||"remove",tabindex:0,class:`${D}-remove`,onClick:g=>{g.stopPropagation(),n(g)}},[x?.()||((f=k.removeIcon)===null||f===void 0?void 0:f.call(k))||"×"])]);return w?w(r):r}}}),Fe={width:0,height:0,left:0,top:0};function Nt(e,t){const a=Z(new Map);return Pe(()=>{var i,o;const l=new Map,n=e.value,h=t.value.get((i=n[0])===null||i===void 0?void 0:i.key)||Fe,f=h.left+h.width;for(let u=0;u<n.length;u+=1){const{key:v}=n[u];let S=t.value.get(v);S||(S=t.value.get((o=n[u-1])===null||o===void 0?void 0:o.key)||Fe);const b=l.get(v)||T({},S);b.right=f-b.left-b.width,l.set(v,b)}a.value=new Map(l)}),a}const nt=ie({compatConfig:{MODE:3},name:"AddButton",inheritAttrs:!1,props:{prefixCls:String,editable:{type:Object},locale:{type:Object,default:void 0}},setup(e,t){let{expose:a,attrs:i}=t;const o=Z();return a({domRef:o}),()=>{const{prefixCls:l,editable:n,locale:h}=e;return!n||n.showAdd===!1?null:p("button",{ref:o,type:"button",class:`${l}-nav-add`,style:i.style,"aria-label":h?.addAriaLabel||"Add tab",onClick:f=>{n.onEdit("add",{event:f})}},[n.addIcon?n.addIcon():"+"])}}}),Ot={prefixCls:{type:String},id:{type:String},tabs:{type:Object},rtl:{type:Boolean},tabBarGutter:{type:Number},activeKey:{type:[String,Number]},mobile:{type:Boolean},moreIcon:Ie.any,moreTransitionName:{type:String},editable:{type:Object},locale:{type:Object,default:void 0},removeAriaLabel:String,onTabClick:{type:Function},popupClassName:String,getPopupContainer:F()},Wt=ie({compatConfig:{MODE:3},name:"OperationNode",inheritAttrs:!1,props:Ot,emits:["tabClick"],slots:Object,setup(e,t){let{attrs:a,slots:i}=t;const[o,l]=L(!1),[n,h]=L(null),f=s=>{const y=e.tabs.filter(C=>!C.disabled);let x=y.findIndex(C=>C.key===n.value)||0;const w=y.length;for(let C=0;C<w;C+=1){x=(x+s+w)%w;const k=y[x];if(!k.disabled){h(k.key);return}}},u=s=>{const{which:y}=s;if(!o.value){[U.DOWN,U.SPACE,U.ENTER].includes(y)&&(l(!0),s.preventDefault());return}switch(y){case U.UP:f(-1),s.preventDefault();break;case U.DOWN:f(1),s.preventDefault();break;case U.ESC:l(!1);break;case U.SPACE:case U.ENTER:n.value!==null&&e.onTabClick(n.value,s);break}},v=H(()=>`${e.id}-more-popup`),S=H(()=>n.value!==null?`${v.value}-${n.value}`:null),b=(s,y)=>{s.preventDefault(),s.stopPropagation(),e.editable.onEdit("remove",{key:y,event:s})};return Re(()=>{se(n,()=>{const s=document.getElementById(S.value);s&&s.scrollIntoView&&s.scrollIntoView(!1)},{flush:"post",immediate:!0})}),se(o,()=>{o.value||h(null)}),ut({}),()=>{var s;const{prefixCls:y,id:x,tabs:w,locale:C,mobile:k,moreIcon:K=((s=i.moreIcon)===null||s===void 0?void 0:s.call(i))||p(vt,null,null),moreTransitionName:D,editable:r,tabBarGutter:g,rtl:c,onTabClick:$,popupClassName:E}=e;if(!w.length)return null;const P=`${y}-dropdown`,G=C?.dropdownAriaLabel,le={[c?"marginRight":"marginLeft"]:g};w.length||(le.visibility="hidden",le.order=1);const ce=oe({[`${P}-rtl`]:c,[`${E}`]:!0}),be=k?null:p(ft,{prefixCls:P,trigger:["hover"],visible:o.value,transitionName:D,onVisibleChange:l,overlayClassName:ce,mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:e.getPopupContainer},{overlay:()=>p(bt,{onClick:R=>{let{key:J,domEvent:M}=R;$(J,M),l(!1)},id:v.value,tabindex:-1,role:"listbox","aria-activedescendant":S.value,selectedKeys:[n.value],"aria-label":G!==void 0?G:"expanded dropdown"},{default:()=>[w.map(R=>{var J,M;const V=r&&R.closable!==!1&&!R.disabled;return p(pt,{key:R.key,id:`${v.value}-${R.key}`,role:"option","aria-controls":x&&`${x}-panel-${R.key}`,disabled:R.disabled},{default:()=>[p("span",null,[typeof R.tab=="function"?R.tab():R.tab]),V&&p("button",{type:"button","aria-label":e.removeAriaLabel||"remove",tabindex:0,class:`${P}-menu-item-remove`,onClick:Y=>{Y.stopPropagation(),b(Y,R.key)}},[((J=R.closeIcon)===null||J===void 0?void 0:J.call(R))||((M=r.removeIcon)===null||M===void 0?void 0:M.call(r))||"×"])]})})]}),default:()=>p("button",{type:"button",class:`${y}-nav-more`,style:le,tabindex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":v.value,id:`${x}-more`,"aria-expanded":o.value,onKeydown:u},[K])});return p("div",{class:oe(`${y}-nav-operations`,a.class),style:a.style},[be,p(nt,{prefixCls:y,locale:C,editable:r},null)])}}}),ot=Symbol("tabsContextKey"),Ht=e=>{ht(ot,e)},it=()=>mt(ot,{tabs:Z([]),prefixCls:Z()}),zt=.1,Ve=.01,Te=20,Ye=Math.pow(.995,Te);function Kt(e,t){const[a,i]=L(),[o,l]=L(0),[n,h]=L(0),[f,u]=L(),v=Z();function S(r){const{screenX:g,screenY:c}=r.touches[0];i({x:g,y:c}),clearInterval(v.value)}function b(r){if(!a.value)return;r.preventDefault();const{screenX:g,screenY:c}=r.touches[0],$=g-a.value.x,E=c-a.value.y;t($,E),i({x:g,y:c});const P=Date.now();h(P-o.value),l(P),u({x:$,y:E})}function s(){if(!a.value)return;const r=f.value;if(i(null),u(null),r){const g=r.x/n.value,c=r.y/n.value,$=Math.abs(g),E=Math.abs(c);if(Math.max($,E)<zt)return;let P=g,G=c;v.value=setInterval(()=>{if(Math.abs(P)<Ve&&Math.abs(G)<Ve){clearInterval(v.value);return}P*=Ye,G*=Ye,t(P*Te,G*Te)},Te)}}const y=Z();function x(r){const{deltaX:g,deltaY:c}=r;let $=0;const E=Math.abs(g),P=Math.abs(c);E===P?$=y.value==="x"?g:c:E>P?($=g,y.value="x"):($=c,y.value="y"),t(-$,-$)&&r.preventDefault()}const w=Z({onTouchStart:S,onTouchMove:b,onTouchEnd:s,onWheel:x});function C(r){w.value.onTouchStart(r)}function k(r){w.value.onTouchMove(r)}function K(r){w.value.onTouchEnd(r)}function D(r){w.value.onWheel(r)}Re(()=>{var r,g;document.addEventListener("touchmove",k,{passive:!1}),document.addEventListener("touchend",K,{passive:!1}),(r=e.value)===null||r===void 0||r.addEventListener("touchstart",C,{passive:!1}),(g=e.value)===null||g===void 0||g.addEventListener("wheel",D,{passive:!1})}),Ne(()=>{document.removeEventListener("touchmove",k),document.removeEventListener("touchend",K)})}function Ue(e,t){const a=Z(e);function i(o){const l=typeof o=="function"?o(a.value):o;l!==a.value&&t(l,a.value),a.value=l}return[a,i]}const Ze={width:0,height:0,left:0,top:0,right:0},Gt=()=>({id:{type:String},tabPosition:{type:String},activeKey:{type:[String,Number]},rtl:{type:Boolean},animated:xe(),editable:xe(),moreIcon:Ie.any,moreTransitionName:{type:String},mobile:{type:Boolean},tabBarGutter:{type:Number},renderTabBar:{type:Function},locale:xe(),popupClassName:String,getPopupContainer:F(),onTabClick:{type:Function},onTabScroll:{type:Function}}),Je=ie({compatConfig:{MODE:3},name:"TabNavList",inheritAttrs:!1,props:Gt(),slots:Object,emits:["tabClick","tabScroll"],setup(e,t){let{attrs:a,slots:i}=t;const{tabs:o,prefixCls:l}=it(),n=W(),h=W(),f=W(),u=W(),[v,S]=Bt(),b=H(()=>e.tabPosition==="top"||e.tabPosition==="bottom"),[s,y]=Ue(0,(m,d)=>{b.value&&e.onTabScroll&&e.onTabScroll({direction:m>d?"left":"right"})}),[x,w]=Ue(0,(m,d)=>{!b.value&&e.onTabScroll&&e.onTabScroll({direction:m>d?"top":"bottom"})}),[C,k]=L(0),[K,D]=L(0),[r,g]=L(null),[c,$]=L(null),[E,P]=L(0),[G,le]=L(0),[ce,be]=Dt(new Map),R=Nt(o,ce),J=H(()=>`${l.value}-nav-operations-hidden`),M=W(0),V=W(0);Pe(()=>{b.value?e.rtl?(M.value=0,V.value=Math.max(0,C.value-r.value)):(M.value=Math.min(0,r.value-C.value),V.value=0):(M.value=Math.min(0,c.value-K.value),V.value=0)});const Y=m=>m<M.value?M.value:m>V.value?V.value:m,pe=W(),[z,fe]=L(),he=()=>{fe(Date.now())},me=()=>{clearTimeout(pe.value)},Se=(m,d)=>{m(_=>Y(_+d))};Kt(n,(m,d)=>{if(b.value){if(r.value>=C.value)return!1;Se(y,m)}else{if(c.value>=K.value)return!1;Se(w,d)}return me(),he(),!0}),se(z,()=>{me(),z.value&&(pe.value=setTimeout(()=>{fe(0)},100))});const de=function(){let m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activeKey;const d=R.value.get(m)||{width:0,height:0,left:0,right:0,top:0};if(b.value){let _=s.value;e.rtl?d.right<s.value?_=d.right:d.right+d.width>s.value+r.value&&(_=d.right+d.width-r.value):d.left<-s.value?_=-d.left:d.left+d.width>-s.value+r.value&&(_=-(d.left+d.width-r.value)),w(0),y(Y(_))}else{let _=x.value;d.top<-x.value?_=-d.top:d.top+d.height>-x.value+c.value&&(_=-(d.top+d.height-c.value)),y(0),w(Y(_))}},Ee=W(0),Be=W(0);Pe(()=>{let m,d,_,I,N,O;const re=R.value;["top","bottom"].includes(e.tabPosition)?(m="width",I=r.value,N=C.value,O=E.value,d=e.rtl?"right":"left",_=Math.abs(s.value)):(m="height",I=c.value,N=C.value,O=G.value,d="top",_=-x.value);let X=I;N+O>I&&N<I&&(X=I-O);const Q=o.value;if(!Q.length)return[Ee.value,Be.value]=[0,0];const te=Q.length;let ue=te;for(let A=0;A<te;A+=1){const j=re.get(Q[A].key)||Ze;if(j[d]+j[m]>_+X){ue=A-1;break}}let B=0;for(let A=te-1;A>=0;A-=1)if((re.get(Q[A].key)||Ze)[d]<_){B=A+1;break}return[Ee.value,Be.value]=[B,ue]});const Le=()=>{var m,d,_,I,N;const O=((m=n.value)===null||m===void 0?void 0:m.offsetWidth)||0,re=((d=n.value)===null||d===void 0?void 0:d.offsetHeight)||0,X=((_=u.value)===null||_===void 0?void 0:_.$el)||{},Q=X.offsetWidth||0,te=X.offsetHeight||0;g(O),$(re),P(Q),le(te);const ue=(((I=h.value)===null||I===void 0?void 0:I.offsetWidth)||0)-Q,B=(((N=h.value)===null||N===void 0?void 0:N.offsetHeight)||0)-te;k(ue),D(B),be(()=>{const A=new Map;return o.value.forEach(j=>{let{key:ve}=j;const ae=S.value.get(ve),ne=ae?.$el||ae;ne&&A.set(ve,{width:ne.offsetWidth,height:ne.offsetHeight,left:ne.offsetLeft,top:ne.offsetTop})}),A})},Oe=H(()=>[...o.value.slice(0,Ee.value),...o.value.slice(Be.value+1)]),[rt,st]=L(),ee=H(()=>R.value.get(e.activeKey)),We=W(),He=()=>{ye.cancel(We.value)};se([ee,b,()=>e.rtl],()=>{const m={};ee.value&&(b.value?(e.rtl?m.right=$e(ee.value.right):m.left=$e(ee.value.left),m.width=$e(ee.value.width)):(m.top=$e(ee.value.top),m.height=$e(ee.value.height))),He(),We.value=ye(()=>{st(m)})}),se([()=>e.activeKey,ee,R,b],()=>{de()},{flush:"post"}),se([()=>e.rtl,()=>e.tabBarGutter,()=>e.activeKey,()=>o.value],()=>{Le()},{flush:"post"});const Ae=m=>{let{position:d,prefixCls:_,extra:I}=m;if(!I)return null;const N=I?.({position:d});return N?p("div",{class:`${_}-extra-content`},[N]):null};return Ne(()=>{me(),He()}),()=>{const{id:m,animated:d,activeKey:_,rtl:I,editable:N,locale:O,tabPosition:re,tabBarGutter:X,onTabClick:Q}=e,{class:te,style:ue}=a,B=l.value,A=!!Oe.value.length,j=`${B}-nav-wrap`;let ve,ae,ne,ze;b.value?I?(ae=s.value>0,ve=s.value+r.value<C.value):(ve=s.value<0,ae=-s.value+r.value<C.value):(ne=x.value<0,ze=-x.value+c.value<K.value);const Ce={};re==="top"||re==="bottom"?Ce[I?"marginRight":"marginLeft"]=typeof X=="number"?`${X}px`:X:Ce.marginTop=typeof X=="number"?`${X}px`:X;const Ke=o.value.map((ke,ct)=>{const{key:ge}=ke;return p(Mt,{id:m,prefixCls:B,key:ge,tab:ke,style:ct===0?void 0:Ce,closable:ke.closable,editable:N,active:ge===_,removeAriaLabel:O?.removeAriaLabel,ref:v(ge),onClick:dt=>{Q(ge,dt)},onFocus:()=>{de(ge),he(),n.value&&(I||(n.value.scrollLeft=0),n.value.scrollTop=0)}},i)});return p("div",{role:"tablist",class:oe(`${B}-nav`,te),style:ue,onKeydown:()=>{he()}},[p(Ae,{position:"left",prefixCls:B,extra:i.leftExtra},null),p(Ge,{onResize:Le},{default:()=>[p("div",{class:oe(j,{[`${j}-ping-left`]:ve,[`${j}-ping-right`]:ae,[`${j}-ping-top`]:ne,[`${j}-ping-bottom`]:ze}),ref:n},[p(Ge,{onResize:Le},{default:()=>[p("div",{ref:h,class:`${B}-nav-list`,style:{transform:`translate(${s.value}px, ${x.value}px)`,transition:z.value?"none":void 0}},[Ke,p(nt,{ref:u,prefixCls:B,locale:O,editable:N,style:T(T({},Ke.length===0?void 0:Ce),{visibility:A?"hidden":null})},null),p("div",{class:oe(`${B}-ink-bar`,{[`${B}-ink-bar-animated`]:d.inkBar}),style:rt.value},null)])]})])]}),p(Wt,q(q({},e),{},{removeAriaLabel:O?.removeAriaLabel,ref:f,prefixCls:B,tabs:Oe.value,class:!A&&J.value}),qe(i,["moreIcon"])),p(Ae,{position:"right",prefixCls:B,extra:i.rightExtra},null),p(Ae,{position:"right",prefixCls:B,extra:i.tabBarExtraContent},null)])}}}),Xt=ie({compatConfig:{MODE:3},name:"TabPanelList",inheritAttrs:!1,props:{activeKey:{type:[String,Number]},id:{type:String},rtl:{type:Boolean},animated:{type:Object,default:void 0},tabPosition:{type:String},destroyInactiveTabPane:{type:Boolean}},setup(e){const{tabs:t,prefixCls:a}=it();return()=>{const{id:i,activeKey:o,animated:l,tabPosition:n,rtl:h,destroyInactiveTabPane:f}=e,u=l.tabPane,v=a.value,S=t.value.findIndex(b=>b.key===o);return p("div",{class:`${v}-content-holder`},[p("div",{class:[`${v}-content`,`${v}-content-${n}`,{[`${v}-content-animated`]:u}],style:S&&u?{[h?"marginRight":"marginLeft"]:`-${S}00%`}:null},[t.value.map(b=>gt(b.node,{key:b.key,prefixCls:v,tabKey:b.key,id:i,animated:u,active:b.key===o,destroyInactiveTabPane:f}))])])}}}),jt=e=>{const{componentCls:t,motionDurationSlow:a}=e;return[{[t]:{[`${t}-switch`]:{"&-appear, &-enter":{transition:"none","&-start":{opacity:0},"&-active":{opacity:1,transition:`opacity ${a}`}},"&-leave":{position:"absolute",transition:"none",inset:0,"&-start":{opacity:1},"&-active":{opacity:0,transition:`opacity ${a}`}}}}},[Xe(e,"slide-up"),Xe(e,"slide-down")]]},Ft=jt,Vt=e=>{const{componentCls:t,tabsCardHorizontalPadding:a,tabsCardHeadBackground:i,tabsCardGutter:o,colorSplit:l}=e;return{[`${t}-card`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{margin:0,padding:a,background:i,border:`${e.lineWidth}px ${e.lineType} ${l}`,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`},[`${t}-tab-active`]:{color:e.colorPrimary,background:e.colorBgContainer},[`${t}-ink-bar`]:{visibility:"hidden"}},[`&${t}-top, &${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginLeft:{_skip_check_:!0,value:`${o}px`}}}},[`&${t}-top`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`},[`${t}-tab-active`]:{borderBottomColor:e.colorBgContainer}}},[`&${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`},[`${t}-tab-active`]:{borderTopColor:e.colorBgContainer}}},[`&${t}-left, &${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginTop:`${o}px`}}},[`&${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${e.borderRadiusLG}px 0 0 ${e.borderRadiusLG}px`}},[`${t}-tab-active`]:{borderRightColor:{_skip_check_:!0,value:e.colorBgContainer}}}},[`&${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px 0`}},[`${t}-tab-active`]:{borderLeftColor:{_skip_check_:!0,value:e.colorBgContainer}}}}}}},Yt=e=>{const{componentCls:t,tabsHoverColor:a,dropdownEdgeChildVerticalPadding:i}=e;return{[`${t}-dropdown`]:T(T({},et(e)),{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:e.zIndexPopup,display:"block","&-hidden":{display:"none"},[`${t}-dropdown-menu`]:{maxHeight:e.tabsDropdownHeight,margin:0,padding:`${i}px 0`,overflowX:"hidden",overflowY:"auto",textAlign:{_skip_check_:!0,value:"left"},listStyleType:"none",backgroundColor:e.colorBgContainer,backgroundClip:"padding-box",borderRadius:e.borderRadiusLG,outline:"none",boxShadow:e.boxShadowSecondary,"&-item":T(T({},xt),{display:"flex",alignItems:"center",minWidth:e.tabsDropdownWidth,margin:0,padding:`${e.paddingXXS}px ${e.paddingSM}px`,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"> span":{flex:1,whiteSpace:"nowrap"},"&-remove":{flex:"none",marginLeft:{_skip_check_:!0,value:e.marginSM},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:0,cursor:"pointer","&:hover":{color:a}},"&:hover":{background:e.controlItemBgHover},"&-disabled":{"&, &:hover":{color:e.colorTextDisabled,background:"transparent",cursor:"not-allowed"}}})}})}},Ut=e=>{const{componentCls:t,margin:a,colorSplit:i}=e;return{[`${t}-top, ${t}-bottom`]:{flexDirection:"column",[`> ${t}-nav, > div > ${t}-nav`]:{margin:`0 0 ${a}px 0`,"&::before":{position:"absolute",right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},borderBottom:`${e.lineWidth}px ${e.lineType} ${i}`,content:"''"},[`${t}-ink-bar`]:{height:e.lineWidthBold,"&-animated":{transition:`width ${e.motionDurationSlow}, left ${e.motionDurationSlow},
            right ${e.motionDurationSlow}`}},[`${t}-nav-wrap`]:{"&::before, &::after":{top:0,bottom:0,width:e.controlHeight},"&::before":{left:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowLeft},"&::after":{right:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowRight},[`&${t}-nav-wrap-ping-left::before`]:{opacity:1},[`&${t}-nav-wrap-ping-right::after`]:{opacity:1}}}},[`${t}-top`]:{[`> ${t}-nav,
        > div > ${t}-nav`]:{"&::before":{bottom:0},[`${t}-ink-bar`]:{bottom:0}}},[`${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,marginTop:`${a}px`,marginBottom:0,"&::before":{top:0},[`${t}-ink-bar`]:{top:0}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0}},[`${t}-left, ${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{flexDirection:"column",minWidth:e.controlHeight*1.25,[`${t}-tab`]:{padding:`${e.paddingXS}px ${e.paddingLG}px`,textAlign:"center"},[`${t}-tab + ${t}-tab`]:{margin:`${e.margin}px 0 0 0`},[`${t}-nav-wrap`]:{flexDirection:"column","&::before, &::after":{right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},height:e.controlHeight},"&::before":{top:0,boxShadow:e.boxShadowTabsOverflowTop},"&::after":{bottom:0,boxShadow:e.boxShadowTabsOverflowBottom},[`&${t}-nav-wrap-ping-top::before`]:{opacity:1},[`&${t}-nav-wrap-ping-bottom::after`]:{opacity:1}},[`${t}-ink-bar`]:{width:e.lineWidthBold,"&-animated":{transition:`height ${e.motionDurationSlow}, top ${e.motionDurationSlow}`}},[`${t}-nav-list, ${t}-nav-operations`]:{flex:"1 0 auto",flexDirection:"column"}}},[`${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-ink-bar`]:{right:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{marginLeft:{_skip_check_:!0,value:`-${e.lineWidth}px`},borderLeft:{_skip_check_:!0,value:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingLeft:{_skip_check_:!0,value:e.paddingLG}}}},[`${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,[`${t}-ink-bar`]:{left:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0,marginRight:{_skip_check_:!0,value:-e.lineWidth},borderRight:{_skip_check_:!0,value:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingRight:{_skip_check_:!0,value:e.paddingLG}}}}}},Zt=e=>{const{componentCls:t,padding:a}=e;return{[t]:{"&-small":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:`${e.paddingXS}px 0`,fontSize:e.fontSize}}},"&-large":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:`${a}px 0`,fontSize:e.fontSizeLG}}}},[`${t}-card`]:{[`&${t}-small`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:`${e.paddingXXS*1.5}px ${a}px`}},[`&${t}-bottom`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`0 0 ${e.borderRadius}px ${e.borderRadius}px`}},[`&${t}-top`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`${e.borderRadius}px ${e.borderRadius}px 0 0`}},[`&${t}-right`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${e.borderRadius}px ${e.borderRadius}px 0`}}},[`&${t}-left`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${e.borderRadius}px 0 0 ${e.borderRadius}px`}}}},[`&${t}-large`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:`${e.paddingXS}px ${a}px ${e.paddingXXS*1.5}px`}}}}}},Jt=e=>{const{componentCls:t,tabsActiveColor:a,tabsHoverColor:i,iconCls:o,tabsHorizontalGutter:l}=e,n=`${t}-tab`;return{[n]:{position:"relative",display:"inline-flex",alignItems:"center",padding:`${e.paddingSM}px 0`,fontSize:`${e.fontSize}px`,background:"transparent",border:0,outline:"none",cursor:"pointer","&-btn, &-remove":T({"&:focus:not(:focus-visible), &:active":{color:a}},tt(e)),"&-btn":{outline:"none",transition:"all 0.3s"},"&-remove":{flex:"none",marginRight:{_skip_check_:!0,value:-e.marginXXS},marginLeft:{_skip_check_:!0,value:e.marginXS},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:"none",outline:"none",cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"&:hover":{color:e.colorTextHeading}},"&:hover":{color:i},[`&${n}-active ${n}-btn`]:{color:e.colorPrimary,textShadow:e.tabsActiveTextShadow},[`&${n}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed"},[`&${n}-disabled ${n}-btn, &${n}-disabled ${t}-remove`]:{"&:focus, &:active":{color:e.colorTextDisabled}},[`& ${n}-remove ${o}`]:{margin:0},[o]:{marginRight:{_skip_check_:!0,value:e.marginSM}}},[`${n} + ${n}`]:{margin:{_skip_check_:!0,value:`0 0 0 ${l}px`}}}},Qt=e=>{const{componentCls:t,tabsHorizontalGutter:a,iconCls:i,tabsCardGutter:o}=e;return{[`${t}-rtl`]:{direction:"rtl",[`${t}-nav`]:{[`${t}-tab`]:{margin:{_skip_check_:!0,value:`0 0 0 ${a}px`},[`${t}-tab:last-of-type`]:{marginLeft:{_skip_check_:!0,value:0}},[i]:{marginRight:{_skip_check_:!0,value:0},marginLeft:{_skip_check_:!0,value:`${e.marginSM}px`}},[`${t}-tab-remove`]:{marginRight:{_skip_check_:!0,value:`${e.marginXS}px`},marginLeft:{_skip_check_:!0,value:`-${e.marginXXS}px`},[i]:{margin:0}}}},[`&${t}-left`]:{[`> ${t}-nav`]:{order:1},[`> ${t}-content-holder`]:{order:0}},[`&${t}-right`]:{[`> ${t}-nav`]:{order:0},[`> ${t}-content-holder`]:{order:1}},[`&${t}-card${t}-top, &${t}-card${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginRight:{_skip_check_:!0,value:`${o}px`},marginLeft:{_skip_check_:!0,value:0}}}}},[`${t}-dropdown-rtl`]:{direction:"rtl"},[`${t}-menu-item`]:{[`${t}-dropdown-rtl`]:{textAlign:{_skip_check_:!0,value:"right"}}}}},qt=e=>{const{componentCls:t,tabsCardHorizontalPadding:a,tabsCardHeight:i,tabsCardGutter:o,tabsHoverColor:l,tabsActiveColor:n,colorSplit:h}=e;return{[t]:T(T(T(T({},et(e)),{display:"flex",[`> ${t}-nav, > div > ${t}-nav`]:{position:"relative",display:"flex",flex:"none",alignItems:"center",[`${t}-nav-wrap`]:{position:"relative",display:"flex",flex:"auto",alignSelf:"stretch",overflow:"hidden",whiteSpace:"nowrap",transform:"translate(0)","&::before, &::after":{position:"absolute",zIndex:1,opacity:0,transition:`opacity ${e.motionDurationSlow}`,content:"''",pointerEvents:"none"}},[`${t}-nav-list`]:{position:"relative",display:"flex",transition:`opacity ${e.motionDurationSlow}`},[`${t}-nav-operations`]:{display:"flex",alignSelf:"stretch"},[`${t}-nav-operations-hidden`]:{position:"absolute",visibility:"hidden",pointerEvents:"none"},[`${t}-nav-more`]:{position:"relative",padding:a,background:"transparent",border:0,"&::after":{position:"absolute",right:{_skip_check_:!0,value:0},bottom:0,left:{_skip_check_:!0,value:0},height:e.controlHeightLG/8,transform:"translateY(100%)",content:"''"}},[`${t}-nav-add`]:T({minWidth:`${i}px`,marginLeft:{_skip_check_:!0,value:`${o}px`},padding:`0 ${e.paddingXS}px`,background:"transparent",border:`${e.lineWidth}px ${e.lineType} ${h}`,borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`,outline:"none",cursor:"pointer",color:e.colorText,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`,"&:hover":{color:l},"&:active, &:focus:not(:focus-visible)":{color:n}},tt(e))},[`${t}-extra-content`]:{flex:"none"},[`${t}-ink-bar`]:{position:"absolute",background:e.colorPrimary,pointerEvents:"none"}}),Jt(e)),{[`${t}-content`]:{position:"relative",display:"flex",width:"100%","&-animated":{transition:"margin 0.3s"}},[`${t}-content-holder`]:{flex:"auto",minWidth:0,minHeight:0},[`${t}-tabpane`]:{outline:"none",flex:"none",width:"100%"}}),[`${t}-centered`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-nav-wrap`]:{[`&:not([class*='${t}-nav-wrap-ping'])`]:{justifyContent:"center"}}}}}},ea=$t("Tabs",e=>{const t=e.controlHeightLG,a=yt(e,{tabsHoverColor:e.colorPrimaryHover,tabsActiveColor:e.colorPrimaryActive,tabsCardHorizontalPadding:`${(t-Math.round(e.fontSize*e.lineHeight))/2-e.lineWidth}px ${e.padding}px`,tabsCardHeight:t,tabsCardGutter:e.marginXXS/2,tabsHorizontalGutter:32,tabsCardHeadBackground:e.colorFillAlter,dropdownEdgeChildVerticalPadding:e.paddingXXS,tabsActiveTextShadow:"0 0 0.25px currentcolor",tabsDropdownHeight:200,tabsDropdownWidth:120});return[Zt(a),Qt(a),Ut(a),Yt(a),Vt(a),qt(a),Ft(a)]},e=>({zIndexPopup:e.zIndexPopupBase+50}));let Qe=0;const lt=()=>({prefixCls:{type:String},id:{type:String},popupClassName:String,getPopupContainer:F(),activeKey:{type:[String,Number]},defaultActiveKey:{type:[String,Number]},direction:_e(),animated:_t([Boolean,Object]),renderTabBar:F(),tabBarGutter:{type:Number},tabBarStyle:xe(),tabPosition:_e(),destroyInactiveTabPane:Tt(),hideAdd:Boolean,type:_e(),size:_e(),centered:Boolean,onEdit:F(),onChange:F(),onTabClick:F(),onTabScroll:F(),"onUpdate:activeKey":F(),locale:xe(),onPrevClick:F(),onNextClick:F(),tabBarExtraContent:Ie.any});function ta(e){return e.map(t=>{if(wt(t)){const a=T({},t.props||{});for(const[b,s]of Object.entries(a))delete a[b],a[Pt(b)]=s;const i=t.children||{},o=t.key!==void 0?t.key:void 0,{tab:l=i.tab,disabled:n,forceRender:h,closable:f,animated:u,active:v,destroyInactiveTabPane:S}=a;return T(T({key:o},a),{node:t,closeIcon:i.closeIcon,tab:l,disabled:n===""||n,forceRender:h===""||h,closable:f===""||f,animated:u===""||u,active:v===""||v,destroyInactiveTabPane:S===""||S})}return null}).filter(t=>t)}const aa=ie({compatConfig:{MODE:3},name:"InternalTabs",inheritAttrs:!1,props:T(T({},at(lt(),{tabPosition:"top",animated:{inkBar:!0,tabPane:!1}})),{tabs:Rt()}),slots:Object,setup(e,t){let{attrs:a,slots:i}=t;De(e.onPrevClick===void 0&&e.onNextClick===void 0,"Tabs","`onPrevClick / @prevClick` and `onNextClick / @nextClick` has been removed. Please use `onTabScroll / @tabScroll` instead."),De(e.tabBarExtraContent===void 0,"Tabs","`tabBarExtraContent` prop has been removed. Please use `rightExtra` slot instead."),De(i.tabBarExtraContent===void 0,"Tabs","`tabBarExtraContent` slot is deprecated. Please use `rightExtra` slot instead.");const{prefixCls:o,direction:l,size:n,rootPrefixCls:h,getPopupContainer:f}=It("tabs",e),[u,v]=ea(o),S=H(()=>l.value==="rtl"),b=H(()=>{const{animated:c,tabPosition:$}=e;return c===!1||["left","right"].includes($)?{inkBar:!1,tabPane:!1}:c===!0?{inkBar:!0,tabPane:!0}:T({inkBar:!0,tabPane:!1},typeof c=="object"?c:{})}),[s,y]=L(!1);Re(()=>{y(At())});const[x,w]=je(()=>{var c;return(c=e.tabs[0])===null||c===void 0?void 0:c.key},{value:H(()=>e.activeKey),defaultValue:e.defaultActiveKey}),[C,k]=L(()=>e.tabs.findIndex(c=>c.key===x.value));Pe(()=>{var c;let $=e.tabs.findIndex(E=>E.key===x.value);$===-1&&($=Math.max(0,Math.min(C.value,e.tabs.length-1)),w((c=e.tabs[$])===null||c===void 0?void 0:c.key)),k($)});const[K,D]=je(null,{value:H(()=>e.id)}),r=H(()=>s.value&&!["left","right"].includes(e.tabPosition)?"top":e.tabPosition);Re(()=>{e.id||(D(`rc-tabs-${Qe}`),Qe+=1)});const g=(c,$)=>{var E,P;(E=e.onTabClick)===null||E===void 0||E.call(e,c,$);const G=c!==x.value;w(c),G&&((P=e.onChange)===null||P===void 0||P.call(e,c))};return Ht({tabs:H(()=>e.tabs),prefixCls:o}),()=>{const{id:c,type:$,tabBarGutter:E,tabBarStyle:P,locale:G,destroyInactiveTabPane:le,renderTabBar:ce=i.renderTabBar,onTabScroll:be,hideAdd:R,centered:J}=e,M={id:K.value,activeKey:x.value,animated:b.value,tabPosition:r.value,rtl:S.value,mobile:s.value};let V;$==="editable-card"&&(V={onEdit:(fe,he)=>{let{key:me,event:Se}=he;var de;(de=e.onEdit)===null||de===void 0||de.call(e,fe==="add"?Se:me,fe)},removeIcon:()=>p(Et,null,null),addIcon:i.addIcon?i.addIcon:()=>p(Lt,null,null),showAdd:R!==!0});let Y;const pe=T(T({},M),{moreTransitionName:`${h.value}-slide-up`,editable:V,locale:G,tabBarGutter:E,onTabClick:g,onTabScroll:be,style:P,getPopupContainer:f.value,popupClassName:oe(e.popupClassName,v.value)});ce?Y=ce(T(T({},pe),{DefaultTabBar:Je})):Y=p(Je,pe,qe(i,["moreIcon","leftExtra","rightExtra","tabBarExtraContent"]));const z=o.value;return u(p("div",q(q({},a),{},{id:c,class:oe(z,`${z}-${r.value}`,{[v.value]:!0,[`${z}-${n.value}`]:n.value,[`${z}-card`]:["card","editable-card"].includes($),[`${z}-editable-card`]:$==="editable-card",[`${z}-centered`]:J,[`${z}-mobile`]:s.value,[`${z}-editable`]:$==="editable-card",[`${z}-rtl`]:S.value},a.class)}),[Y,p(Xt,q(q({destroyInactiveTabPane:le},M),{},{animated:b.value}),null)]))}}}),we=ie({compatConfig:{MODE:3},name:"ATabs",inheritAttrs:!1,props:at(lt(),{tabPosition:"top",animated:{inkBar:!0,tabPane:!1}}),slots:Object,setup(e,t){let{attrs:a,slots:i,emit:o}=t;const l=n=>{o("update:activeKey",n),o("change",n)};return()=>{var n;const h=ta(St((n=i.default)===null||n===void 0?void 0:n.call(i)));return p(aa,q(q(q({},Ct(e,["onUpdate:activeKey"])),a),{},{onChange:l,tabs:h}),i)}}}),na=()=>({tab:Ie.any,disabled:{type:Boolean},forceRender:{type:Boolean},closable:{type:Boolean},animated:{type:Boolean},active:{type:Boolean},destroyInactiveTabPane:{type:Boolean},prefixCls:{type:String},tabKey:{type:[String,Number]},id:{type:String}}),Me=ie({compatConfig:{MODE:3},name:"ATabPane",inheritAttrs:!1,__ANT_TAB_PANE:!0,props:na(),slots:Object,setup(e,t){let{attrs:a,slots:i}=t;const o=Z(e.forceRender);se([()=>e.active,()=>e.destroyInactiveTabPane],()=>{e.active?o.value=!0:e.destroyInactiveTabPane&&(o.value=!1)},{immediate:!0});const l=H(()=>e.active?{}:e.animated?{visibility:"hidden",height:0,overflowY:"hidden"}:{display:"none"});return()=>{var n;const{prefixCls:h,forceRender:f,id:u,active:v,tabKey:S}=e;return p("div",{id:u&&`${u}-panel-${S}`,role:"tabpanel",tabindex:v?0:-1,"aria-labelledby":u&&`${u}-tab-${S}`,"aria-hidden":!v,style:[l.value,a.style],class:[`${h}-tabpane`,v&&`${h}-tabpane-active`,a.class]},[(v||o.value||f)&&((n=i.default)===null||n===void 0?void 0:n.call(i))])}}});we.TabPane=Me;we.install=function(e){return e.component(we.name,we),e.component(Me.name,Me),e};export{Me as T,we as a};
