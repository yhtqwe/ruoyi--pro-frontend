import{a as R,ab as w,z as E,ap as A,b as I,aX as $,K as D,aw as N,s as S,o as i,h as v,n as T,w as b,k as u,j as k,af as V,l as z,t as y,v as L,q as O,c as j,bx as q,ar as G,aT as K,an as X,f4 as F}from"./index-8b526734.js";import{B as H}from"./index-d89d7986.js";const J={key:1},W=R({name:"LayoutBreadcrumb",__name:"Breadcrumb",props:{theme:w.oneOf(["dark","light"])},setup(B){const m=E([]),{currentRoute:c}=A(),{prefixCls:f}=I("layout-breadcrumb"),{getShowBreadCrumbIcon:C}=$(),h=D(),{t:d}=j();N(async()=>{if(c.value.name===G)return;const a=await K(),t=c.value.matched,n=t?.[t.length-1];let e=c.value.path;n&&n?.meta?.currentActiveMenu&&(e=n.meta.currentActiveMenu);const s=X(a,e),o=a.filter(g=>g.path===s[0]),r=p(o,s);if(!r||r.length===0)return;const l=M(r);c.value.meta?.currentActiveMenu&&l.push({...c.value,name:c.value.meta?.title||c.value.name}),m.value=l});function p(a,t){const n=[];return a.forEach(e=>{t.includes(e.path)&&n.push({...e,name:e.meta?.title||e.name}),e.children?.length&&n.push(...p(e.children,t))}),n}function M(a){return F(a,t=>{const{meta:n,name:e}=t;if(!n)return!!e;const{title:s,hideBreadcrumb:o,hideMenu:r}=n;return!(!s||o||r)}).filter(t=>!t.meta?.hideBreadcrumb)}function x(a,t,n){n?.preventDefault();const{children:e,redirect:s,meta:o}=a;if(e?.length&&!s){n?.stopPropagation();return}if(!o?.carryParam)if(s&&q(s))h(s);else{let r="";t.length===1?r=t[0]:r=`${t.slice(1).pop()||""}`,r=/^\//.test(r)?r:`/${r}`,h(r)}}function P(a,t){return a.indexOf(t)!==a.length-1}function _(a){return a.icon||a.meta?.icon}return(a,t)=>{const n=S("router-link");return i(),v("div",{class:O([u(f),`${u(f)}--${B.theme}`])},[T(u(H),{routes:m.value},{itemRender:b(({route:e,routes:s,paths:o})=>[u(C)&&_(e)?(i(),k(u(V),{key:0,icon:_(e)},null,8,["icon"])):z("",!0),P(s,e)?(i(),k(n,{key:2,to:"",onClick:r=>x(e,o,r)},{default:b(()=>[L(y(u(d)(e.name||e.meta.title)),1)]),_:2},1032,["onClick"])):(i(),v("span",J,y(u(d)(e.name||e.meta.title)),1))]),_:1},8,["routes"])],2)}}});export{W as default};
