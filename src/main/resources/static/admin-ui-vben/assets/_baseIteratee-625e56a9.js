import{cq as p,cr as R,cs as y,bO as M,ct as E,cu as P,cv as _,cw as l,cx as C,cy as I}from"./index-8b526734.js";import{g as L}from"./get-11175361.js";function d(n){return function(r){return r?.[n]}}var w=1,D=2;function G(n,r,e,t){var i=e.length,o=i,a=!t;if(n==null)return!o;for(n=Object(n);i--;){var f=e[i];if(a&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return!1}for(;++i<o;){f=e[i];var u=f[0],s=n[u],A=f[1];if(a&&f[2]){if(s===void 0&&!(u in n))return!1}else{var c=new p;if(t)var O=t(s,A,u,n,r,c);if(!(O===void 0?R(A,s,w|D,t,c):O))return!1}}return!0}function g(n){return n===n&&!y(n)}function m(n){for(var r=M(n),e=r.length;e--;){var t=r[e],i=n[t];r[e]=[t,i,g(i)]}return r}function h(n,r){return function(e){return e==null?!1:e[n]===r&&(r!==void 0||n in Object(e))}}function F(n){var r=m(n);return r.length==1&&r[0][2]?h(r[0][0],r[0][1]):function(e){return e===n||G(e,n,r)}}var x=1,S=2;function b(n,r){return E(n)&&g(r)?h(P(n),r):function(e){var t=L(e,n);return t===void 0&&t===r?_(e,n):R(r,t,x|S)}}function q(n){return function(r){return l(r,n)}}function K(n){return E(n)?d(P(n)):q(n)}function U(n){return typeof n=="function"?n:n==null?C:typeof n=="object"?I(n)?b(n[0],n[1]):F(n):K(n)}export{d as a,U as b};
