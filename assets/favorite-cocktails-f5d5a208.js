import{g as r,d as s,C as l,f as a,h as n}from"./fetch-data-3afd6672.js";function d(t,e){const c=t.map(o=>`<li class="cocktail-card" data-id="${o._id}">
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
    </li>`).join("");e.insertAdjacentHTML("beforeend",c)}document.querySelector(".interactive-section");const i=document.querySelector(".gallery-list"),m=async t=>{try{const e=await r(t);d(e,i)}catch(e){console.log(e)}};function u(t){if(t.target.classList.contains(".cocktail-rem-fav-btn")){let o=t.target.closest("li").dataset.id;s(o,a,l)}}i.addEventListener("click",u);const v=document.querySelector(".container-non-photos"),g=document.querySelector(".gallery-header");document.querySelector(".gallery-list");console.log("fav: ",a);a.length===0||!a?n(v,g):a.forEach(t=>{m(t),console.log(t)});
