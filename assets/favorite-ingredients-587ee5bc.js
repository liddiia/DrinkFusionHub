import{s as r,i as n,e as a}from"./icons-0a1897c0.js";const s=(e,o)=>{const i=e.map(t=>`<h2 class="ingridient-title" data-id-igridient =${t._id}>${t.title}</h2>
  <p class="ingridient-type" >${t.type}</p>
  <p class="ingridient-discription"><span class="ingr-title">${t.title}: </span>${c(t.description)}</p>
  <div class="cic-btn-wrapper">
  <button class="cocktail-learn-more-btn" data-id-drink="${t._id}">learn more</button>
  <button class="cocktail-rem-fav-btn" data-type="user-action" data-action="remfromfav">
  <svg
  class="remove-favorites-btn-icon"
  aria-label="remove from favorites button"
  >
  <use
  class="remove-icon"
  href="${r}#icon-remove"
  ></use>
  </svg>
  </button>
  </div>`).join("");o.innerHTML=i};function c(e){return e||"Unfortunately we don't have it yet"}const l=document.querySelector(".container-non-photos"),d=document.querySelector(".gallery-header");document.querySelector(".description-no-coctails");document.querySelector("span-no-coctails");document.querySelector(".gallery-list");n.length===0||!n?(console.log(n),a(l)):(console.log(n),d.textContent="Favorite ingredients",n.forEach(e=>{s(e),console.log(e)}));
