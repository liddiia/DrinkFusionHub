import{r as p,s as y,m as h,d as F,C as q,a as O,b as z,c as U,f as w,e as V,g as W,h as j}from"./icons-5b53dae8.js";import"./modal-coctail-d9a5b3bd.js";function $(c){p.favoritePaginationContainer.innerHTML=`<button
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
  href="${y}#icon-arrow_left"
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
  href="${y}#icon-arrow_right"
  data-action="rightPag"
></use>
</svg>
</button>`;const n=document.querySelector(".number-buttons-container"),u=document.getElementById("left-pag-btn"),i=document.getElementById("right-pag-btn");n.innerHTML="";let g=6,t=0,r=null,e=[],d=[],m=[],C=[],v=[],f=[],P=[],a,b;function B(){return!(window.innerWidth>=768)}let M=c.length;M<=g?p.favoritePaginationContainer.classList.add("is-hidden"):p.favoritePaginationContainer.classList.remove("is-hidden");let o=Math.ceil(M/g);const L=H(c,g);console.log("sortedCardsArr[0]",L[0]),A(u,i);function H(l,s){return l.reduce((k,S,_)=>(_%s===0&&k.push([]),k[k.length-1].push(S),k),[])}N(L[0]),u.addEventListener("click",E),i.addEventListener("click",E),n.addEventListener("click",E);function x(){r&&r.classList.remove("pagination-button-item-active"),r=e[t],r.classList.add("pagination-button-item-active")}function D(){switch(n.innerHTML="",d=e.slice(0,3),m=e.slice(0,1),C=e.slice(0,4),v=e.slice(e.length-3,e.length),f=e.slice(e.length-1,e.length),P=e.slice(e.length-4,e.length),n.innerHTML="",a=document.createElement("button"),a.textContent="...",a.setAttribute("disabled",""),a.classList.add("pagination-button-item"),b=document.createElement("button"),b.textContent="...",b.setAttribute("disabled",""),b.setAttribute("data-disable","true"),b.classList.add("pagination-button-item"),B()){case!0:{e.length<=5?n.append(...e):t===0||t===1?n.append(...d,a,...f):t===2?n.append(...C,a,...f):t===o-3?n.append(...m,a,...P):t===o-2||t===o-1?n.append(...m,a,...v):t>=3&&t<=o-4&&n.append(...m,a,b,e[t],a,...f);break}case!1:{e.length<=7?n.append(...e):t===0||t===1?n.append(...d,a,...v):t===2?n.append(...C,a,...f):t===o-3?n.append(...m,a,...P):t===o-2||t===o-1?n.append(...d,a,...v):t>=3&&t<=o-4&&n.append(...m,a,b,...e.slice(t-1,t+2),a,...f);break}}}function E(l){I.classList.remove("pagination-button-item-active");let s=l.target.dataset.action;switch(p.favoritesList.innerHTML="",s){case"leftPag":t-=1,t<0&&(t=0);break;case"rightPag":t+=1,t>=o&&(t=o-1);break;default:isNaN(Number(s))||(t=Number(s-1));break}N(L[t]),console.log("sortedCardsArr[currentPageIndex]",L[t]),D(),x(),A(u,i)}function A(l,s){t===0?l.classList.add("is-hidden"):l.classList.remove("is-hidden"),t===o-1?s.classList.add("is-hidden"):s.classList.remove("is-hidden")}for(let l=1;l<=o;l++){const s=document.createElement("button");s.textContent=l,s.setAttribute("data-action",l),s.classList.add("pagination-button-item"),e.push(s)}switch(d=e.slice(0,3),v=e.slice(e.length-3,e.length),f=e.slice(e.length-1,e.length),a=document.createElement("button"),a.textContent="...",a.setAttribute("disabled",""),a.classList.add("pagination-button-item"),n.innerHTML="",B()){case!0:{e.length<=5?n.append(...e):(t===0||t===1)&&n.append(...d,a,...f);break}case!1:{e.length<=7?n.append(...e):(t===0||t===1)&&n.append(...d,a,...v);break}}const I=document.querySelector('button[data-action="1"]');I.classList.add("pagination-button-item-active")}const T=c=>{h.classList.toggle("is-open"),V(c)};function G(c,n){const u=g=>{const{target:t}=g;console.log(t);const r=t.dataset.idDrink;console.log(r),t.classList.contains("cocktail-learn-more-btn")&&(setTimeout(h.classList.toggle("is-open"),500),n(r),F(g),console.log(h),localStorage.setItem(q,r));const e=d=>{d.key==="Escape"&&(T(d),document.removeEventListener("keydown",e))};document.addEventListener("keydown",e)},i=g=>{const{target:t}=g;if(t===O||t===h||t.tagName==="A")if(t.tagName==="A"&&t.classList.contains("ingredient-link")){g.preventDefault();const r=t.dataset.idIngridient;z(r),h.addEventListener("click",U);return}else console.log(t.parentNode),T(t),$(w)};c.addEventListener("click",u),h.addEventListener("click",i)}const J=document.querySelector(".favorite-container-nococktails"),N=c=>{console.log("ids",c),p.favoritesList.innerHTML="",(!c||c.length===0)&&J.classList.add("active"),c.forEach(async n=>{const u=await W(n);if(!u[0])return;const i=u[0];p.favoritesList.innerHTML+=`<li class="cocktail-card" data-id="${i._id}">
    <div class="cocktail-img-wrap">
      <img
        class="cocktail-img"
        src="${i.drinkThumb}"
        onerror = "this.onerror=null;this.src='/img/no-coctails/no-coktails@1x.png';"
        alt="${i.drink}"
        loading="lazy"
      />
    </div>
    <div class="cocktail-info">
      <h3 class="cocktail-name">${i.drink}</h3>
      <p class="cocktail-description">${i.description}</p>
      <div class="cic-btn-wrapper">
        <button class="cocktail-learn-more-btn" data-id-drink="${i._id}">learn more</button>
        <button class="cocktail-rem-fav-btn" data-type="user-action" id ="${i._id}" data-action="remfromfav">
          <svg
            class="remove-favorites-btn-icon"
            aria-label="remove from favorites button"
          >
            <use
              class="remove-icon"
              href="${y}#icon-remove"
            ></use>
          </svg>
        </button>
      </div>
    </div>
  </li>`})};console.log("favorites",w);$(w);p.favoritesList&&G(p.favoritesList,j);
