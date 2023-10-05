import{r as u,s as w,m as h,d as F,C as q,a as O,b as j,c as z,f as L,e as K,g as U,h as V,i as W,j as G}from"./icons-d3163b46.js";import"./modal-coctail-45683c72.js";function B(i){u.favoritePaginationContainer.innerHTML=`<button
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
</button>`;const n=document.querySelector(".number-buttons-container"),f=document.getElementById("left-pag-btn"),s=document.getElementById("right-pag-btn");n.innerHTML="";let g=6,t=0,r=null,e=[],d=[],m=[],P=[],v=[],p=[],E=[],a,b;function I(){return!(window.innerWidth>=768)}let M=i.length;M<=g?u.favoritePaginationContainer.classList.add("is-hidden"):u.favoritePaginationContainer.classList.remove("is-hidden");let c=Math.ceil(M/g);const k=H(i,g);console.log("sortedCardsArr[0]",k[0]),T(f,s);function H(l,o){return l.reduce((C,S,_)=>(_%o===0&&C.push([]),C[C.length-1].push(S),C),[])}$(k[0]),f.addEventListener("click",y),s.addEventListener("click",y),n.addEventListener("click",y);function D(){r&&r.classList.remove("pagination-button-item-active"),r=e[t],r.classList.add("pagination-button-item-active")}function x(){switch(n.innerHTML="",d=e.slice(0,3),m=e.slice(0,1),P=e.slice(0,4),v=e.slice(e.length-3,e.length),p=e.slice(e.length-1,e.length),E=e.slice(e.length-4,e.length),n.innerHTML="",a=document.createElement("button"),a.textContent="...",a.setAttribute("disabled",""),a.classList.add("pagination-button-item"),b=document.createElement("button"),b.textContent="...",b.setAttribute("disabled",""),b.setAttribute("data-disable","true"),b.classList.add("pagination-button-item"),I()){case!0:{e.length<=5?n.append(...e):t===0||t===1?n.append(...d,a,...p):t===2?n.append(...P,a,...p):t===c-3?n.append(...m,a,...E):t===c-2||t===c-1?n.append(...m,a,...v):t>=3&&t<=c-4&&n.append(...m,a,b,e[t],a,...p);break}case!1:{e.length<=7?n.append(...e):t===0||t===1?n.append(...d,a,...v):t===2?n.append(...P,a,...p):t===c-3?n.append(...m,a,...E):t===c-2||t===c-1?n.append(...d,a,...v):t>=3&&t<=c-4&&n.append(...m,a,b,...e.slice(t-1,t+2),a,...p);break}}}function y(l){A.classList.remove("pagination-button-item-active");let o=l.target.dataset.action;switch(u.favoritesList.innerHTML="",o){case"leftPag":t-=1,t<0&&(t=0);break;case"rightPag":t+=1,t>=c&&(t=c-1);break;default:isNaN(Number(o))||(t=Number(o-1));break}$(k[t]),console.log("sortedCardsArr[currentPageIndex]",k[t]),x(),D(),T(f,s)}function T(l,o){t===0?l.classList.add("is-hidden"):l.classList.remove("is-hidden"),t===c-1?o.classList.add("is-hidden"):o.classList.remove("is-hidden")}for(let l=1;l<=c;l++){const o=document.createElement("button");o.textContent=l,o.setAttribute("data-action",l),o.classList.add("pagination-button-item"),e.push(o)}switch(d=e.slice(0,3),v=e.slice(e.length-3,e.length),p=e.slice(e.length-1,e.length),a=document.createElement("button"),a.textContent="...",a.setAttribute("disabled",""),a.classList.add("pagination-button-item"),n.innerHTML="",I()){case!0:{e.length<=5?n.append(...e):(t===0||t===1)&&n.append(...d,a,...p);break}case!1:{e.length<=7?n.append(...e):(t===0||t===1)&&n.append(...d,a,...v);break}}const A=document.querySelector('button[data-action="1"]');A&&A.classList.add("pagination-button-item-active")}const N=i=>{h.classList.toggle("is-open"),K(i)};function J(i,n){const f=g=>{const{target:t}=g;console.log(t);const r=t.dataset.idDrink;console.log(r),t.classList.contains("cocktail-learn-more-btn")&&(setTimeout(h.classList.toggle("is-open"),500),n(r),F(g),console.log(h),localStorage.setItem(q,r));const e=d=>{d.key==="Escape"&&(N(d),document.removeEventListener("keydown",e))};document.addEventListener("keydown",e)},s=g=>{const{target:t}=g;if(t===O||t===h||t.classList.contains("cocktail-modal-back")||t.tagName==="A")if(t.tagName==="A"&&t.classList.contains("ingredient-link")){g.preventDefault();const r=t.dataset.idIngridient;j(r),h.addEventListener("click",z);return}else console.log(t.parentNode),N(t),B(L)};i.addEventListener("click",f),h.addEventListener("click",s)}const Q=document.querySelector(".favorite-container-nococktails"),$=i=>{console.log("ids",i),u.favoritesList.innerHTML="",!i||i.length===0?Q.classList.add("active"):i.forEach(async n=>{const f=await V(n);if(!f[0])return;const s=f[0];u.favoritesList.innerHTML+=`<li class="cocktail-card" data-id="${s._id}">
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
    </li>`})};console.log("favorites",L);B(L);u.favoritesList&&J(u.favoritesList,G);u.favoritesList.addEventListener("click",i=>{if(i.target.classList.contains("remove-from-fav-btn")){const n=i.target.getAttribute("id");console.log(n),U(n,L,W),B(L)}});
