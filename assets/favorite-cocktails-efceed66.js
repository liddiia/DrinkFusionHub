import{r as l,s as w,f as A,m as I,g as q,a as F}from"./icons-944421b6.js";import"./modal-coctail-cd68825f.js";function S(d){l.favoritePaginationContainer.innerHTML=`<button
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
</button>`;const a=document.querySelector(".number-buttons-container"),f=document.getElementById("left-pag-btn"),o=document.getElementById("right-pag-btn");a.innerHTML="";let L=6,t=0,m=null,e=[],g=[],p=[],k=[],b=[],c=[],P=[],n,u;function y(){return!(window.innerWidth>=768)}let B=d.length;B<=L?l.favoritePaginationContainer.classList.add("is-hidden"):l.favoritePaginationContainer.classList.remove("is-hidden");let s=Math.ceil(B/L);const h=T(d,L);console.log("sortedCardsArr[0]",h[0]),E(f,o);function T(r,i){return r.reduce((v,N,_)=>(_%i===0&&v.push([]),v[v.length-1].push(N),v),[])}$(h[0]),f.addEventListener("click",C),o.addEventListener("click",C),a.addEventListener("click",C);function H(){m&&m.classList.remove("pagination-button-item-active"),m=e[t],m.classList.add("pagination-button-item-active")}function x(){switch(a.innerHTML="",g=e.slice(0,3),p=e.slice(0,1),k=e.slice(0,4),b=e.slice(e.length-3,e.length),c=e.slice(e.length-1,e.length),P=e.slice(e.length-4,e.length),a.innerHTML="",n=document.createElement("button"),n.textContent="...",n.setAttribute("disabled",""),n.classList.add("pagination-button-item"),u=document.createElement("button"),u.textContent="...",u.setAttribute("disabled",""),u.setAttribute("data-disable","true"),u.classList.add("pagination-button-item"),y()){case!0:{e.length<=5?a.append(...e):t===0||t===1?a.append(...g,n,...c):t===2?a.append(...k,n,...c):t===s-3?a.append(...p,n,...P):t===s-2||t===s-1?a.append(...p,n,...b):t>=3&&t<=s-4&&a.append(...p,n,u,e[t],n,...c);break}case!1:{e.length<=7?a.append(...e):t===0||t===1?a.append(...g,n,...b):t===2?a.append(...k,n,...c):t===s-3?a.append(...p,n,...P):t===s-2||t===s-1?a.append(...g,n,...b):t>=3&&t<=s-4&&a.append(...p,n,u,...e.slice(t-1,t+2),n,...c);break}}}function C(r){M.classList.remove("pagination-button-item-active");let i=r.target.dataset.action;switch(l.favoritesList.innerHTML="",i){case"leftPag":t-=1,t<0&&(t=0);break;case"rightPag":t+=1,t>=s&&(t=s-1);break;default:isNaN(Number(i))||(t=Number(i-1));break}$(h[t]),console.log("sortedCardsArr[currentPageIndex]",h[t]),x(),H(),E(f,o)}function E(r,i){t===0?r.classList.add("is-hidden"):r.classList.remove("is-hidden"),t===s-1?i.classList.add("is-hidden"):i.classList.remove("is-hidden")}for(let r=1;r<=s;r++){const i=document.createElement("button");i.textContent=r,i.setAttribute("data-action",r),i.classList.add("pagination-button-item"),e.push(i)}switch(g=e.slice(0,3),b=e.slice(e.length-3,e.length),c=e.slice(e.length-1,e.length),n=document.createElement("button"),n.textContent="...",n.setAttribute("disabled",""),n.classList.add("pagination-button-item"),a.innerHTML="",y()){case!0:{e.length<=5?a.append(...e):(t===0||t===1)&&a.append(...g,n,...c);break}case!1:{e.length<=7?a.append(...e):(t===0||t===1)&&a.append(...g,n,...b);break}}const M=document.querySelector('button[data-action="1"]');M.classList.add("pagination-button-item-active")}const z=document.querySelector(".favorite-container-nococktails"),$=d=>{console.log("ids",d),l.favoritesList.innerHTML="",(!d||d.length===0)&&z.classList.add("active"),d.forEach(async a=>{const f=await q(a);if(!f[0])return;const o=f[0];l.favoritesList.innerHTML+=`<li class="cocktail-card" data-id="${o._id}">
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
  </li>`})};console.log("favorites",A);S(A);l.favoritesList&&I(l.favoritesList,F);
