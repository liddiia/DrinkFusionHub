import{i as n,a}from"./fetch-data-3afd6672.js";import"./render-ingridients-b18445b1.js";const s=(t,o)=>{const r=t.map(e=>`<h2 class="ingridient-title" data-id-igridient =${e._id}>${e.title}</h2>
  <p class="ingridient-type" >${e.type}</p>
  <p class="ingridient-discription"><span class="ingr-title">${e.title}: </span>${c(e.description)}</p>
  <div class="cic-btn-wrapper">
  <button class="cocktail-learn-more-btn" data-id-drink="${e._id}">learn more</button>
  <button class="cocktail-rem-fav-btn" data-type="user-action" data-action="remfromfav">
  <svg
  class="remove-favorites-btn-icon"
  aria-label="remove from favorites button"
  >
  <use
  class="remove-icon"
  href="/img/icons.svg#icon-remove"
  ></use>
  </svg>
  </button>
  </div>`).join("");o.innerHTML=r};function c(t){return t||"Unfortunately we don't have it yet"}const l=document.querySelector(".container-non-photos"),i=document.querySelector(".gallery-header");document.querySelector(".gallery-list");n.length===0||!n?a(l,i):(i.textContent="Favorite ingredients",n.forEach(t=>{s(t),console.log(t)}));
