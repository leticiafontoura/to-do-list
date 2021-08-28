var e;!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const t=document.querySelector("[data-js='form']"),o=document.querySelector("[data-js='to-do']"),l=document.querySelector("[data-js='date']"),a=document.querySelector("[data-js='time']"),n=document.querySelector("table");function r(){const e=JSON.parse(localStorage.getItem("items")),t=document.querySelector("tbody"),o=document.querySelector("thead");t&&t.remove(),o&&o.remove();const l=document.createElement("tbody"),a=document.createElement("thead");n.appendChild(a),n.appendChild(l);for(let n=0;n<e.length;n++){const t=new Date(e[n].date);a.innerHTML="<th>When</th><th>What</th><th>Action</th>",l.insertAdjacentHTML("beforeend",`\n    <tr class="list-row" data-js="list-row">\n       \n        <td label="When" class="date-time-cell" data-js="date-time-cell">\n        <input class="date-input" data-js="date-input" type="date" readonly value="${t.getFullYear()}-${t.getMonth()+1<10?"0"+(t.getMonth()+1).toString():t.getMonth()+1}-${t.getDate()+1<10?"0"+(t.getDate()+1).toString():t.getDate()+1}">\n        </br>\n        <input class="time-input" data-js="time-input" type="time" readonly value="${e[n].time}"></td>\n        <td label="What" class="todo-cell" data-js="todo-cell"><div class="todo-item" data-js="todo-item" readonly>${e[n].item}</div></td>\n        <td label="Action" class="btns" data-js="btns">\n            <button class="done-btn" data-js="done-btn" value="done"><i class="fas fa-check"></i></button>\n            <button class="del-btn" data-js="del-btn" value="delete"><i class="fas fa-trash"></i></button>\n            <button class="save-btn" data-js="save-btn" value="save"><i class="fas fa-save"></i></button>\n        </td>\n    </tr>\n    `),Array.from(document.querySelectorAll("[data-js='save-btn']"))[n].style.display="none"}const r=Array.from(document.querySelectorAll("[data-js='done-btn']")),s=Array.from(document.querySelectorAll("[data-js='del-btn']")),i=Array.from(document.querySelectorAll("[data-js='save-btn']")),d=Array.from(document.querySelectorAll("[data-js='list-row']")),c=Array.from(document.querySelectorAll("[data-js='todo-item']")),u=Array.from(document.querySelectorAll("[data-js='date-input']")),m=Array.from(document.querySelectorAll("[data-js='time-input']")),y=Array.from(document.querySelectorAll("[data-js='btns']"));for(let n=0;n<r.length;n++)r[n].onclick=()=>{r[n].classList.toggle("done"),d[n].classList.toggle("strikethrough"),d[n].classList.contains("strikethrough")?e[n]={date:u[n].value,time:m[n].value,item:c[n].textContent,done:!0}:e[n]={date:u[n].value,time:m[n].value,item:c[n].textContent,done:!1},localStorage.setItem("items",JSON.stringify(e))},c[n].onclick=()=>{c[n].removeAttribute("readonly"),i[n].style.display="inline-block",c[n].setAttribute("contenteditable","true"),r[n].remove(),s[n].remove(),c[n].focus(),"none"===i[n].style.display&&(i[n].style.display="inline-block"),d[n].classList.contains("strikethrough")&&d[n].classList.remove("strikethrough")},u[n].onclick=()=>{c[n].removeAttribute("readonly"),u[n].removeAttribute("readonly"),m[n].removeAttribute("readonly"),i[n].style.display="inline-block",r[n].remove(),s[n].remove(),"none"===i[n].style.display&&(i[n].style.display="inline-block"),d[n].classList.contains("strikethrough")&&d[n].classList.remove("strikethrough")},m[n].onclick=()=>{c[n].removeAttribute("readonly"),u[n].removeAttribute("readonly"),m[n].removeAttribute("readonly"),i[n].style.display="inline-block",r[n].remove(),s[n].remove(),"none"===i[n].style.display&&(i[n].style.display="inline-block"),d[n].classList.contains("strikethrough")&&d[n].classList.remove("strikethrough")},i[n].onclick=()=>{c[n].readOnly=!0,e[n]={date:u[n].value,time:m[n].value,item:c[n].textContent,done:e[n].done},!0===e[n].done&&d[n].classList.add("strikethrough"),c[n].setAttribute("readonly",""),u[n].setAttribute("readonly",""),m[n].setAttribute("readonly",""),localStorage.setItem("items",JSON.stringify(e)),y[n].appendChild(r[n]),y[n].appendChild(s[n]),"inline-block"===i[n].style.display&&(i[n].style.display="none")};for(let n=0;n<s.length;n++)s[n].addEventListener("click",(()=>{d[n].remove(),e.splice(n,1),localStorage.setItem("items",JSON.stringify(e))}));for(let n=0;n<e.length;n++)!0===e[n].done&&(r[n].classList.toggle("done"),d[n].classList.toggle("strikethrough"))}const s=null!=(e=JSON.parse(localStorage.getItem("items")))?e:[];t.addEventListener("submit",(e=>{if(e.preventDefault(),0===s.length)return s.push({date:l.value,time:a.value,item:o.value,done:!1}),localStorage.setItem("items",JSON.stringify(s)),r();const t=JSON.parse(localStorage.getItem("items"));t.push({date:l.value,time:a.value,item:o.value,done:!1}),localStorage.setItem("items",JSON.stringify(t)),o.value="",l.value="",a.value="",o.focus(),r()})),r();
