import{s,i,e as r,c as a}from"./icons-78da617c.js";const c=(n,e)=>{const o=n.map(t=>` <li class= "fav-ingr-item>
         <h2 class="ingridient-title" data-id-igridient =${t._id}>${t.title}</h2>
  <p class="ingridient-type" >${t.type}</p>
  <p class="ingridient-discription"><span class="ingr-title">${t.title}: </span>${l(t.description)}</p>
  <div class="cic-btn-wrapper">
  <button class="cocktail-learn-more-btn" data-id-drink="${t._id}">learn more</button>
  <button class="cocktail-rem-fav-btn" data-type="user-action" data-action="remfromfav">
  <svg
  class="remove-favorites-btn-icon"
  aria-label="remove from favorites button"
  >
  <use
  class="remove-icon"
  href="${s}#icon-remove"
  ></use>
  </svg>
  </button>
  </div>
  </li>`).join("");e.insertAdjacentHTML("beforeend",o)};function l(n){return n||"Unfortunately we don't have it yet"}const d=document.querySelector(".container-non-photos"),g=document.querySelector(".ingredients-cocktails-list"),v=async n=>{try{const e=await a(n);c(e,g)}catch(e){console.log(e)}};i.length===0||!i?(console.log(i),r(d)):(console.log(i),i.forEach(n=>{v(n),console.log(n)}));
