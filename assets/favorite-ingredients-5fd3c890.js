import{m as a,b as v,e as m,g as f,i as s,h as u,j as b,s as y}from"./modalCallDrink-4f1fed70.js";import{s as h}from"./icons-16af5d85.js";const p=e=>{a.classList.toggle("is-open"),f(e)};function k(e,n){const c=i=>{const{target:o}=i;console.log(o);const l=o.dataset.idIgridient;console.log(l),o.classList.contains("cocktail-learn-more-btn")&&(setTimeout(a.classList.toggle("is-open"),500),n(l),v(i));const d=g=>{g.key==="Escape"&&(p(g),document.removeEventListener("keydown",d))};document.addEventListener("keydown",d)},t=i=>{const{target:o}=i;(o===m||o===a)&&p(o)};e.addEventListener("click",c),a.addEventListener("click",t)}const I=(e,n)=>{const c=e.map(t=>` <li class= "fav-ingr-item>
         <h2 class="ingridient-title" data-id-igridient =${t._id}>${t.title}</h2>
  <p class="ingridient-type" >${t.type}</p>
  <p class="ingridient-discription"><span class="ingr-title">${t.title}: </span>${L(t.description)}</p>
  <div class="cic-btn-wrapper">
  <button class="cocktail-learn-more-btn" data-id-igridient="${t._id}">learn more</button>
  <button class="cocktail-rem-fav-btn" data-type="user-action" data-action="remfromfav">
  <svg
  class="remove-favorites-btn-icon"
  aria-label="remove from favorites button"
  >
  <use
  class="remove-icon"
  href="${h}#icon-remove"
  ></use>
  </svg>
  </button>
  </div>
  </li>`).join("");n.insertAdjacentHTML("beforeend",c)};function L(e){return e||"Sorry we dont have it yet"}const E=document.querySelector(".container-non-photos"),r=document.querySelector(".ingredients-cocktails-list"),w=async e=>{try{const n=await b(e);I(n,r)}catch(n){console.log(n)}};s.length===0||!s?(console.log(s),u(E)):(console.log(s),s.forEach(e=>{w(e),console.log(e)}));r&&k(r,y);
