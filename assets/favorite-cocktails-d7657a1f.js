import{d as i,C as s,f as c,h as n}from"./local-storage-a05408d6.js";import{g as l,m as d,r as m}from"./modal-coctail-973ef70e.js";function u(t,e){const a=t.map(o=>`<li class="cocktail-card" data-id="${o._id}">
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
    </li>`).join("");e.insertAdjacentHTML("beforeend",a)}document.querySelector(".interactive-section");const r=document.querySelector(".gallery-list"),g=async t=>{try{const e=await l(t);u(e,r)}catch(e){console.log(e)}};function v(t){if(t.target.classList.contains(".cocktail-rem-fav-btn")){let o=t.target.closest("li").dataset.id;i(o,c,s)}}r.addEventListener("click",v);const k=document.querySelector(".container-non-photos"),f=document.querySelector(".gallery-header"),p=document.querySelector(".description-no-coctails"),y=document.querySelector("span-no-coctails"),b=document.querySelector(".gallery-list");console.log("fav: ",c);c.length===0||!c?n(k,f,p,y):c.forEach(t=>{g(t),console.log(t)});d(b,m);
