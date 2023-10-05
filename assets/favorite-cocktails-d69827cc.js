import{r as b,s as w,f as A,g as I}from"./icons-87b47864.js";import"./modal-coctail-1fc4f1c9.js";function q(l){b.favoritePaginationContainer.innerHTML=`<button
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
</button>`;const n=document.querySelector(".number-buttons-container"),u=document.getElementById("left-pag-btn"),o=document.getElementById("right-pag-btn");n.innerHTML="";let L=6,t=0,m=null,e=[],d=[],f=[],k=[],p=[],c=[],P=[],a,g;function y(){return!(window.innerWidth>=768)}let B=l.length;B<=L?b.favoritePaginationContainer.classList.add("is-hidden"):b.favoritePaginationContainer.classList.remove("is-hidden");let s=Math.ceil(B/L);const h=H(l,L);console.log("sortedCardsArr[0]",h[0]),E(u,o);function H(r,i){return r.reduce((v,N,_)=>(_%i===0&&v.push([]),v[v.length-1].push(N),v),[])}$(h[0]),u.addEventListener("click",C),o.addEventListener("click",C),n.addEventListener("click",C);function T(){m&&m.classList.remove("pagination-button-item-active"),m=e[t],m.classList.add("pagination-button-item-active")}function x(){switch(n.innerHTML="",d=e.slice(0,3),f=e.slice(0,1),k=e.slice(0,4),p=e.slice(e.length-3,e.length),c=e.slice(e.length-1,e.length),P=e.slice(e.length-4,e.length),n.innerHTML="",a=document.createElement("button"),a.textContent="...",a.setAttribute("disabled",""),a.classList.add("pagination-button-item"),g=document.createElement("button"),g.textContent="...",g.setAttribute("disabled",""),g.setAttribute("data-disable","true"),g.classList.add("pagination-button-item"),y()){case!0:{e.length<=5?n.append(...e):t===0||t===1?n.append(...d,a,...c):t===2?n.append(...k,a,...c):t===s-3?n.append(...f,a,...P):t===s-2||t===s-1?n.append(...f,a,...p):t>=3&&t<=s-4&&n.append(...f,a,g,e[t],a,...c);break}case!1:{e.length<=7?n.append(...e):t===0||t===1?n.append(...d,a,...p):t===2?n.append(...k,a,...c):t===s-3?n.append(...f,a,...P):t===s-2||t===s-1?n.append(...d,a,...p):t>=3&&t<=s-4&&n.append(...f,a,g,...e.slice(t-1,t+2),a,...c);break}}}function C(r){M.classList.remove("pagination-button-item-active");let i=r.target.dataset.action;switch(b.favoritesList.innerHTML="",i){case"leftPag":t-=1,t<0&&(t=0);break;case"rightPag":t+=1,t>=s&&(t=s-1);break;default:isNaN(Number(i))||(t=Number(i-1));break}$(h[t]),console.log("sortedCardsArr[currentPageIndex]",h[t]),x(),T(),E(u,o)}function E(r,i){t===0?r.classList.add("is-hidden"):r.classList.remove("is-hidden"),t===s-1?i.classList.add("is-hidden"):i.classList.remove("is-hidden")}for(let r=1;r<=s;r++){const i=document.createElement("button");i.textContent=r,i.setAttribute("data-action",r),i.classList.add("pagination-button-item"),e.push(i)}switch(d=e.slice(0,3),p=e.slice(e.length-3,e.length),c=e.slice(e.length-1,e.length),a=document.createElement("button"),a.textContent="...",a.setAttribute("disabled",""),a.classList.add("pagination-button-item"),n.innerHTML="",y()){case!0:{e.length<=5?n.append(...e):(t===0||t===1)&&n.append(...d,a,...c);break}case!1:{e.length<=7?n.append(...e):(t===0||t===1)&&n.append(...d,a,...p);break}}const M=document.querySelector('button[data-action="1"]');M.classList.add("pagination-button-item-active")}const F=document.querySelector(".favorite-container-nococktails"),$=l=>{console.log("ids",l),b.favoritesList.innerHTML="",(!l||l.length===0)&&F.classList.add("active"),l.forEach(async n=>{const u=await I(n);if(!u[0])return;const o=u[0];b.favoritesList.innerHTML+=`<li class="cocktail-card" data-id="${o._id}">
    <div class="cocktail-img-wrap">
      <img
        class="cocktail-img"
        src="${o.drinkThumb}"
        onerror = "this.onerror=null;this.src='/img/no-coctails/no-coktails@1x.png';"
        alt="${o.drink}"
        loading="lazy"
      />
    </div>
    <div class="cocktail-info">
      <h3 class="cocktail-name">${o.drink}</h3>
      <p class="cocktail-description">${o.description}</p>
      <div class="cic-btn-wrapper">
        <button class="cocktail-learn-more-btn" data-id-drink="${o._id}">learn more</button>
        <button class="cocktail-rem-fav-btn" data-type="user-action" id ="${o._id}" data-action="remfromfav">
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
  </li>`})};console.log("favorites",A);q(A);console.log("Hello World");
