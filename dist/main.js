!function(e){var t={};function l(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=t,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l(l.s=0)}([function(e,t){let l=[],r=document.querySelector(".field");r.querySelectorAll(".row").forEach(e=>{let t=e.querySelectorAll(".cell"),r=[];t.forEach(e=>{r.push(e),e.addEventListener("click",h)}),l.push(r)});let n=[{name:"cross",className:"ch",plural:"Crosses"},{name:"round",className:"r",plural:"Toes"}],a=["horizontal","vertical","diagonal-right","diagonal-left"],o=[],s=[],c=l.length,i=document.querySelector(".won-title"),d=document.querySelector(".won-message"),u=document.querySelector(".undo-btn"),f=document.querySelector(".redo-btn"),m=document.querySelector(".restart-btn");u.addEventListener("click",(function(){let e=o.pop();s.push(e),n.forEach(t=>{v(e.target).classList.remove(t.className)}),b(),g()})),f.addEventListener("click",(function(){let e=s.pop();o.push(e),v(e.target).classList.add(e.player.className),b(),g()})),m.addEventListener("click",(function(e=!1){r.querySelectorAll(".cell").forEach(e=>{n.forEach(t=>e.classList.remove(t.className)),a.forEach(t=>e.classList.remove(t)),e.classList.remove("win")}),u.disabled=!0,f.disabled=!0,i.classList.add("hidden"),o=[],s=[],!0!==e&&localStorage.setItem("ticTacToeMoves",JSON.stringify([]))}));let y=JSON.parse(localStorage.getItem("ticTacToeMoves"));if(y&&y.length>0){let e=y[0],t=y[1];e.forEach(e=>p(v(e.target),e.player)),t&&t.length>0&&(s=t)}function g(){localStorage.setItem("ticTacToeMoves",JSON.stringify([o,s]))}function h(e){if(i.classList.contains("hidden")){let t=n[o.length%n.length];p(e.target,t)}}function p(e,t,r=!1){s=[],e.classList.add(t.className),o.push({target:e.id,player:t}),b(),function(e,t,l){let r=t.filter(t=>t.includes(e))[0];if(r.every(e=>e.classList.contains(l.className)))return S(l,[r,"horizontal"]);let n=Array.from(document.querySelectorAll(".cell:nth-child(3n+"+(+e.id.slice(2)%3+1).toString()+")"));if(n.every(e=>e.classList.contains(l.className)))return S(l,[n,"vertical"]);if(+e.id.slice(2)%(c+1)==0){let e=Array.from(document.querySelectorAll(".cell")).filter(e=>+e.id.slice(2)%(c+1)==0);if(e.every(e=>e.classList.contains(l.className)))return S(l,[e,"diagonal-right"])}if(+e.id.slice(2)%(c-1)==0){let e=Array.from(document.querySelectorAll(".cell")).filter(e=>+e.id.slice(2)%(c-1)==0&&0!=+e.id.slice(2)&&+e.id.slice(2)!=c*c-1);if(e.every(e=>e.classList.contains(l.className)))return S(l,[e,"diagonal-left"])}if(0===document.querySelectorAll(".cell:not(.ch):not(.r) ").length)return S(!1)}(e,l,t),r||localStorage.setItem("ticTacToeMoves",JSON.stringify([o,s]))}function v(e){return document.querySelector("#"+e)}function S(e=!1,t=null){return i.classList.remove("hidden"),e?(d.textContent=e.plural+" won!",t[0].forEach(e=>{e.classList.add(t[1]),e.classList.add("win")})):d.textContent="It's a draw!",f.disabled=!0,u.disabled=!0,!0}function b(){f.disabled=0===s.length,u.disabled=0===o.length,i.classList.contains("hidden")||(f.disabled=u.disabled=!0)}window.addEventListener("storage",(function(e){if("ticTacToeMoves"===e.key&&e.oldValue!==e.newValue){let t=e.newValue;resetGame(!0);let l=JSON.parse(t)[1];savedMoves=JSON.parse(t)[0],savedTurns&&savedTurns.forEach(e=>p(v(e.target),e.player,!0)),l&&l.length>0&&(s=l),b()}}))}]);