import{m as a,d as p,a as f,e as m,s as u,n as s,o as b,p as y,b as h}from"./icons-5b53dae8.js";const v=n=>{a.classList.toggle("is-open"),m(n)};function k(n,o){const c=i=>{const{target:t}=i;console.log(t);const l=t.dataset.idIgridient;console.log(l),t.classList.contains("cocktail-learn-more-btn")&&(setTimeout(a.classList.toggle("is-open"),500),o(l),p(i));const d=g=>{g.key==="Escape"&&(v(g),document.removeEventListener("keydown",d))};document.addEventListener("keydown",d)},e=i=>{const{target:t}=i;(t===f||t===a||t.classList.contains("ingridient-modal-back-btn"))&&v(t)};n.addEventListener("click",c),a.addEventListener("click",e)}const I=(n,o)=>{const c=n.map(e=>` <li class= "fav-ingr-item">
      
         <h2 class="fav-ingridient-title" data-id-igridient =${e._id}>${e.title}</h2>

  <p class="fav-ingridient-type" >${e.type}</p>

  <p class="fav-ingridient-discription"><span class="ingr-title">${e.title}: </span>${L(e.description)}</p>


  <div class="cic-btn-wrapper">
    <button class="cocktail-learn-more-btn" data-id-igridient="${e._id}">learn more
   </button>
  
   <button class="cocktail-rem-fav-btn" data-type="user-action" data-action="remfromfav">
  <svg
  class="remove-favorites-btn-icon"
  aria-label="remove from favorites button"
  >
  <use
  class="remove-icon"
  href="${u}#icon-remove"
  ></use>
  </svg>
  </button>
  </div>
  </li>`).join("");o.insertAdjacentHTML("beforeend",c)};function L(n){return n||"Sorry we dont have it yet"}const E=document.querySelector(".container-non-photos"),r=document.querySelector(".fav-ingredients-cocktails-list"),w=async n=>{try{const o=await y(n);I(o,r)}catch(o){console.log(o)}};s.length===0||!s?(console.log(s),b(E)):(console.log(s),s.forEach(n=>{w(n),console.log(n)}));r&&k(r,h);
