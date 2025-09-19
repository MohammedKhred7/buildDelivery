function f(o,t){if(!o)return` -  ${t==="from"?"صباح":"مساء"}`;const[e,i]=o.split(":");let r=parseInt(e,10);return r>12?r-=12:r===0&&(r=12),`${r} ${t==="from"?"صباح":"مساء"}`}export{f as _};
