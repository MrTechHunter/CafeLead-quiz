(()=>{var e={225:()=>{let e=1;document.documentElement.addEventListener("mouseup",(function(t){!function(t){let n=document.createElement("span");var o={position:"absolute",top:t.clientY+"px",left:t.clientX+"px"};Object.keys(o).forEach((function(t){n.style[t]=o[t],e%5==0&&(n.style.background="rgba(255, 92, 27, 0.88)")})),n.innerHTML=e++,container.appendChild(n)}(t)})),window.addEventListener("resize",(function(){let e=document.getElementsByTagName("span");for(var t=0;t<e.length;t++)e[t].style.left=Math.floor(Math.random()*innerWidth)+"px",e[t].style.top=Math.floor(Math.random()*innerHeight)+"px"})),console.log('Developed by "MahdiHamldar.ir"')}},t={};!function n(o){if(t[o])return t[o].exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}(225)})();