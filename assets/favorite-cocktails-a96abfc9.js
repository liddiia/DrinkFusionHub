import{s as r,d as s,C as n,f as c,h as l}from"./icons-e4221401.js";import{g as d,m,r as u}from"./modal-coctail-b246d070.js";function v(o,a){const i=o.map(t=>`<li class="cocktail-card" data-id="${t._id}">
      <div class="cocktail-img-wrap">
        <img
          class="cocktail-img"
          src="${t.drinkThumb}"
          onerror = "this.onerror=null;this.src='/img/no-coctails/no-coktails@1x.png';"
          alt="${t.drink}"
          loading="lazy"
        />
      </div>
      <div class="cocktail-info">
        <h3 class="cocktail-name">${t.drink}</h3>
        <p class="cocktail-description">${t.description}</p>
        <div class="cic-btn-wrapper">
          <button class="cocktail-learn-more-btn" data-id-drink="${t._id}">learn more</button>
          <button class="cocktail-rem-fav-btn" data-type="user-action" id ="${t._id}" data-action="remfromfav">
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
        </div>
      </div>
    </li>`).join("");a.insertAdjacentHTML("beforeend",i)}const e=document.querySelector(".favorite-cocktails-list"),f=async o=>{try{const a=await d(o);v(a,e)}catch(a){console.log(a)}};function k(o){if(o.target.classList.contains(".cocktail-rem-fav-btn")){const a=o.target;log;let t=a.closest("li").dataset.id;s(t,c,n)}}e.addEventListener("click",k);const g=document.querySelector(".container-non-photos"),p=document.querySelector(".gallery-header");document.querySelector(".gallery-list");const b=document.querySelector(".description-no-coctails"),h=document.querySelector("span-no-coctails");console.log("fav: ",c);c.length===0||!c?l(g,p,b,h):c.forEach(o=>{f(o),console.log(o)});e&&m(e,u);
