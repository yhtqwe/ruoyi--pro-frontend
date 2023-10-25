import{eb as s}from"./index-84bac5b8.js";function t(r,e="已成功复制到剪切板!"){navigator.clipboard.writeText(r).then(()=>{e&&s.success(e)},a=>{s.error(`复制失败!${a.message}`)})}export{t as c};
