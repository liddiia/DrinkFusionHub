import{i as n,e as a}from"./local-storage-8345f622.js";import{s}from"./icons-c254f37e.js";const l=(e,i)=>{const r=e.map(t=>`<h2 class="ingridient-title" data-id-igridient =${t._id}>${t.title}</h2>
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
  href="${s}#icon-remove"
  ></use>
  </svg>
  </button>
  </div>`).join("");i.innerHTML=r};function c(e){return e||"Unfortunately we don't have it yet"}const d=document.querySelector(".container-non-photos"),o=document.querySelector(".gallery-header");document.querySelector(".gallery-list");n.length===0||!n?(console.log(n),a(d,o)):(console.log(n),o.textContent="Favorite ingredients",n.forEach(e=>{l(e),console.log(e)}));
