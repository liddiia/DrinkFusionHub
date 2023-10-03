import{d as s,C as l,f as e,h as n}from"./local-storage-6871dffa.js";import{g as d,m,r as u}from"./modal-coctail-b04c2592.js";function v(t,a){const c=t.map(o=>`<li class="cocktail-card" data-id="${o._id}">
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
        </div>
      </div>
    </li>`).join("");a.insertAdjacentHTML("beforeend",c)}document.querySelector(".interactive-section");const r=document.querySelector(".gallery-list"),g=async t=>{try{const a=await d(t);v(a,r)}catch(a){console.log(a)}};function k(t){if(t.target.classList.contains(".cocktail-rem-fav-btn")){let o=t.target.closest("li").dataset.id;s(o,e,l)}}r.addEventListener("click",k);const f=document.querySelector(".container-non-photos"),i=document.querySelector(".gallery-header");document.querySelector(".gallery-list");console.log("fav: ",e);e.length===0||!e?n(f,i):e.forEach(t=>{g(t),console.log(t)});m(i,u);
