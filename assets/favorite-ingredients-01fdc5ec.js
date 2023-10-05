import{m as a,b as f,e as p,h as m,s as u,i as s,j as b,k as y,l as h}from"./icons-e8922f99.js";const v=e=>{a.classList.toggle("is-open"),m(e)};function k(e,t){const c=i=>{const{target:o}=i;console.log(o);const l=o.dataset.idIgridient;console.log(l),o.classList.contains("cocktail-learn-more-btn")&&(setTimeout(a.classList.toggle("is-open"),500),t(l),f(i));const d=g=>{g.key==="Escape"&&(v(g),document.removeEventListener("keydown",d))};document.addEventListener("keydown",d)},n=i=>{const{target:o}=i;(o===p||o===a)&&v(o)};e.addEventListener("click",c),a.addEventListener("click",n)}const I=(e,t)=>{const c=e.map(n=>` <li class= "fav-ingr-item>
      
         <h2 class="fav-ingridient-title" data-id-igridient =${n._id}>${n.title}</h2>

  <p class="fav-ingridient-type" >${n.type}</p>

  <p class="fav-ingridient-discription"><span class="ingr-title">${n.title}: </span>${L(n.description)}</p>


  <div class="cic-btn-wrapper">
    <button class="cocktail-learn-more-btn" data-id-igridient="${n._id}">learn more
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
  </li>`).join("");t.insertAdjacentHTML("beforeend",c)};function L(e){return e||"Sorry we dont have it yet"}const E=document.querySelector(".container-non-photos"),r=document.querySelector(".fav-ingredients-cocktails-list"),w=async e=>{try{const t=await y(e);I(t,r)}catch(t){console.log(t)}};s.length===0||!s?(console.log(s),b(E)):(console.log(s),s.forEach(e=>{w(e),console.log(e)}));r&&k(r,h);
