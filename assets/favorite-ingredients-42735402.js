import{i as n,e as s}from"./local-storage-a05408d6.js";import{s as a}from"./icons-16af5d85.js";const c=(e,r)=>{const i=e.map(t=>`<h2 class="ingridient-title" data-id-igridient =${t._id}>${t.title}</h2>
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
  href="${a}#icon-remove"
  ></use>
  </svg>
  </button>
  </div>`).join("");r.innerHTML=i};function l(e){return e||"Unfortunately we don't have it yet"}const d=document.querySelector(".container-non-photos"),o=document.querySelector(".gallery-header"),p=document.querySelector(".description-no-coctails"),u=document.querySelector("span-no-coctails");document.querySelector(".gallery-list");n.length===0||!n?(console.log(n),s(d,o,p,u)):(console.log(n),o.textContent="Favorite ingredients",n.forEach(e=>{c(e),console.log(e)}));
