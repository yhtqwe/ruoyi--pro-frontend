import{eZ as p,e as d,br as f,e_ as u}from"./index-185fe65d.js";function y(e,n={}){const{size:o="small",delay:t=100,timeout:s=3e4,loading:r=!1,retry:a=!0}=n;return p({loader:e,loadingComponent:r?d(f,{spinning:!0,size:o},null):void 0,timeout:s,delay:t,onError:a?(i,c,l,m)=>{i.message.match(/fetch/)&&m<=3?c():l()}:u})}export{y as c};