import{r as u,s as w,m as h,d as F,C as q,a as O,b as j,c as z,f as k,e as K,g as U,h as V,i as W,j as G}from"./icons-5207b62b.js";import"./modal-coctail-233edfbb.js";function B(i){u.favoritePaginationContainer.innerHTML=`<button
  class="left-pag-btn pagination-button-item"
  type="button"
  id="left-pag-btn"
  data-action="leftPag"
>
<svg
class="page-left-icon-container"
id="left-pag-btn-svg"
data-action="leftPag"
>
<use
  class="page-left-icon"
  href="${w}#icon-arrow_left"
  data-action="leftPag"
></use>
</svg>
</button>
<div class="number-buttons-container"></div>
<button
  class="right-pag-btn pagination-button-item"
  type="button"
  id="right-pag-btn"
  data-action="rightPag"
>
<svg
class="page-right-icon-container"
id="right-pag-btn-svg"
data-action="rightPag"
>
<use
  class="page-right-icon"
  href="${w}#icon-arrow_right"
  data-action="rightPag"
></use>
</svg>
</button>`;const a=document.querySelector(".number-buttons-container"),f=document.getElementById("left-pag-btn"),s=document.getElementById("right-pag-btn");a.innerHTML="";let d=6,t=0,g=null,e=[],r=[],m=[],C=[],v=[],p=[],P=[],n,b;function M(){return!(window.innerWidth>=768)}let A=i.length;A<=d?u.favoritePaginationContainer.classList.add("is-hidden"):u.favoritePaginationContainer.classList.remove("is-hidden");let c=Math.ceil(A/d);const I=N(i,d);T(f,s);function N(l,o){return l.reduce((L,_,x)=>(x%o===0&&L.push([]),L[L.length-1].push(_),L),[])}H(I[0]),f.addEventListener("click",E),s.addEventListener("click",E),a.addEventListener("click",E);function D(){g&&g.classList.remove("pagination-button-item-active"),g=e[t],g.classList.add("pagination-button-item-active")}function S(){switch(a.innerHTML="",r=e.slice(0,3),m=e.slice(0,1),C=e.slice(0,4),v=e.slice(e.length-3,e.length),p=e.slice(e.length-1,e.length),P=e.slice(e.length-4,e.length),a.innerHTML="",n=document.createElement("button"),n.textContent="...",n.setAttribute("disabled",""),n.classList.add("pagination-button-item"),b=document.createElement("button"),b.textContent="...",b.setAttribute("disabled",""),b.setAttribute("data-disable","true"),b.classList.add("pagination-button-item"),M()){case!0:{e.length<=5?a.append(...e):t===0||t===1?a.append(...r,n,...p):t===2?a.append(...C,n,...p):t===c-3?a.append(...m,n,...P):t===c-2||t===c-1?a.append(...m,n,...v):t>=3&&t<=c-4&&a.append(...m,n,b,e[t],n,...p);break}case!1:{e.length<=7?a.append(...e):t===0||t===1?a.append(...r,n,...v):t===2?a.append(...C,n,...p):t===c-3?a.append(...m,n,...P):t===c-2||t===c-1?a.append(...r,n,...v):t>=3&&t<=c-4&&a.append(...m,n,b,...e.slice(t-1,t+2),n,...p);break}}}function E(l){y.classList.remove("pagination-button-item-active");let o=l.target.dataset.action;switch(u.favoritesList.innerHTML="",o){case"leftPag":t-=1,t<0&&(t=0);break;case"rightPag":t+=1,t>=c&&(t=c-1);break;default:isNaN(Number(o))||(t=Number(o-1));break}H(I[t]),S(),D(),T(f,s)}function T(l,o){t===0?l.classList.add("is-hidden"):l.classList.remove("is-hidden"),t===c-1?o.classList.add("is-hidden"):o.classList.remove("is-hidden")}for(let l=1;l<=c;l++){const o=document.createElement("button");o.textContent=l,o.setAttribute("data-action",l),o.classList.add("pagination-button-item"),e.push(o)}switch(r=e.slice(0,3),v=e.slice(e.length-3,e.length),p=e.slice(e.length-1,e.length),n=document.createElement("button"),n.textContent="...",n.setAttribute("disabled",""),n.classList.add("pagination-button-item"),a.innerHTML="",M()){case!0:{e.length<=5?a.append(...e):(t===0||t===1)&&a.append(...r,n,...p);break}case!1:{e.length<=7?a.append(...e):(t===0||t===1)&&a.append(...r,n,...v);break}}const y=document.querySelector('button[data-action="1"]');y&&y.classList.add("pagination-button-item-active")}const $=i=>{h.classList.toggle("is-open"),K(i)};function J(i,a){const f=d=>{const{target:t}=d,g=t.dataset.idDrink;t.classList.contains("cocktail-learn-more-btn")&&(setTimeout(h.classList.toggle("is-open"),500),a(g),F(d),localStorage.setItem(q,g));const e=r=>{r.key==="Escape"&&($(r),document.removeEventListener("keydown",e))};document.addEventListener("keydown",e)},s=d=>{const{target:t}=d;if(t===O||t===h||t.classList.contains("cocktail-modal-back")||t.tagName==="A")if(t.tagName==="A"&&t.classList.contains("ingredient-link")){d.preventDefault();const g=t.dataset.idIngridient;j(g),h.addEventListener("click",z);return}else $(t),B(k)};i.addEventListener("click",f),h.addEventListener("click",s)}const Q=document.querySelector(".favorite-container-nococktails"),H=i=>{u.favoritesList.innerHTML="",!i||i.length===0?Q.classList.add("active"):i.forEach(async a=>{const f=await V(a);if(!f[0])return;const s=f[0];u.favoritesList.innerHTML+=`<li class="cocktail-card" data-id="${s._id}">
      <div class="cocktail-img-wrap">
        <img
          class="cocktail-img"
          src="${s.drinkThumb}"
          onerror = "this.onerror=null;this.src='/img/no-coctails/no-coktails@1x.png';"
          alt="${s.drink}"
          loading="lazy"
        />
      </div>
      <div class="cocktail-info">
        <h3 class="cocktail-name">${s.drink}</h3>
        <p class="cocktail-description">${s.description}</p>
        <div class="cic-btn-wrapper">
          <button class="cocktail-learn-more-btn" data-id-drink="${s._id}">learn more</button>
          <button class="cocktail-rem-fav-btn remove-from-fav-btn" data-type="user-action" id ="${s._id}" data-action="remfromfav">
            <svg
              class="remove-favorites-btn-icon"
              aria-label="remove from favorites button"
            >
              <use
                class="remove-icon"
                href="${w}#icon-remove"
              ></use>
            </svg>
          </button>
        </div>
      </div>
    </li>`})};B(k);u.favoritesList&&J(u.favoritesList,G);u.favoritesList.addEventListener("click",i=>{if(i.target.classList.contains("remove-from-fav-btn")){const a=i.target.getAttribute("id");U(a,k,W),B(k)}});
