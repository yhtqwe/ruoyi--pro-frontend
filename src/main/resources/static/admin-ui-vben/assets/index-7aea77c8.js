import{a as F,a5 as S,f as h,W as j,X as d,n as s,ed as M,ee as U,z,aw as V,F as X,ec as q,O as N,a9 as G}from"./index-8b526734.js";var H=function(){return{prefixCls:String,checked:{type:Boolean,default:void 0},onChange:{type:Function},onClick:{type:Function},"onUpdate:checked":Function}},J=F({compatConfig:{MODE:3},name:"ACheckableTag",props:H(),setup:function(e,i){var l=i.slots,r=i.emit,g=S("tag",e),u=g.prefixCls,o=function(C){var v=e.checked;r("update:checked",!v),r("change",!v),r("click",C)},p=h(function(){var n;return j(u.value,(n={},d(n,"".concat(u.value,"-checkable"),!0),d(n,"".concat(u.value,"-checkable-checked"),e.checked),n))});return function(){var n;return s("span",{class:p.value,onClick:o},[(n=l.default)===null||n===void 0?void 0:n.call(l)])}}});const m=J;var K=new RegExp("^(".concat(M.join("|"),")(-inverse)?$")),L=new RegExp("^(".concat(U.join("|"),")$")),Q=function(){return{prefixCls:String,color:{type:String},closable:{type:Boolean,default:!1},closeIcon:N.any,visible:{type:Boolean,default:void 0},onClose:{type:Function},"onUpdate:visible":Function,icon:N.any}},f=F({compatConfig:{MODE:3},name:"ATag",props:Q(),slots:["closeIcon","icon"],setup:function(e,i){var l=i.slots,r=i.emit,g=i.attrs,u=S("tag",e),o=u.prefixCls,p=u.direction,n=z(!0);V(function(){e.visible!==void 0&&(n.value=e.visible)});var C=function(t){t.stopPropagation(),r("update:visible",!1),r("close",t),!t.defaultPrevented&&e.visible===void 0&&(n.value=!1)},v=h(function(){var a=e.color;return a?K.test(a)||L.test(a):!1}),E=h(function(){var a;return j(o.value,(a={},d(a,"".concat(o.value,"-").concat(e.color),v.value),d(a,"".concat(o.value,"-has-color"),e.color&&!v.value),d(a,"".concat(o.value,"-hidden"),!n.value),d(a,"".concat(o.value,"-rtl"),p.value==="rtl"),a))});return function(){var a,t,k,b=e.icon,w=b===void 0?(a=l.icon)===null||a===void 0?void 0:a.call(l):b,y=e.color,P=e.closeIcon,T=P===void 0?(t=l.closeIcon)===null||t===void 0?void 0:t.call(l):P,x=e.closable,O=x===void 0?!1:x,R=function(){return O?T?s("span",{class:"".concat(o.value,"-close-icon"),onClick:C},[T]):s(G,{class:"".concat(o.value,"-close-icon"),onClick:C},null):null},B={backgroundColor:y&&!v.value?y:void 0},I=w||null,$=(k=l.default)===null||k===void 0?void 0:k.call(l),W=I?s(X,null,[I,s("span",null,[$])]):$,A="onClick"in g,_=s("span",{class:E.value,style:B},[W,R()]);return A?s(q,null,{default:function(){return[_]}}):_}}});f.CheckableTag=m;f.install=function(c){return c.component(f.name,f),c.component(m.name,m),c};const Z=f;export{Z as T};
