import{fJ as m,n as p,b6 as d,fK as u}from"./index-84bac5b8.js";function y(e,n={}){const{size:o="small",delay:t=100,timeout:s=3e4,loading:a=!1,retry:r=!0}=n;return m({loader:e,loadingComponent:a?p(d,{spinning:!0,size:o},null):void 0,timeout:s,delay:t,onError:r?(i,c,f,l)=>{i.message.match(/fetch/)&&l<=3?c():f()}:u})}export{y as c};
