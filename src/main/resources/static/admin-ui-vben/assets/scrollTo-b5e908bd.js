import{cy as r}from"./index-84bac5b8.js";function a(n,c,i,s){const o=i-c;return n/=s/2,n<1?o/2*n*n*n+c:o/2*((n-=2)*n*n+2)+c}function f(n){return n!=null&&n===n.window}function p(n,c){var i,s;if(typeof window>"u")return 0;const o=c?"scrollTop":"scrollLeft";let e=0;return f(n)?e=n[c?"pageYOffset":"pageXOffset"]:n instanceof Document?e=n.documentElement[o]:(n instanceof HTMLElement||n)&&(e=n[o]),n&&!f(n)&&typeof e!="number"&&(e=(s=((i=n.ownerDocument)!==null&&i!==void 0?i:n).documentElement)===null||s===void 0?void 0:s[o]),e}function D(n){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{getContainer:i=()=>window,callback:s,duration:o=450}=c,e=i(),m=p(e,!0),d=Date.now(),u=()=>{const t=Date.now()-d,l=a(t>o?o:t,m,n,o);f(e)?e.scrollTo(window.pageXOffset,l):e instanceof Document||e.constructor.name==="HTMLDocument"?e.documentElement.scrollTop=l:e.scrollTop=l,t<o?r(u):typeof s=="function"&&s()};r(u)}export{p as g,D as s};