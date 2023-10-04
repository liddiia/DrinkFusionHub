import{s as e,g as n,d as l,C as d,f as i,h as m,m as v,r as f}from"./icons-7816f8dc.js";import"./modal-coctail-58fc20c1.js";function k(o,a){const r=o.map(t=>`<li class="cocktail-card" data-id="${t._id}">
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
                href="${e}#icon-remove"
              ></use>
            </svg>
          </button>
        </div>
      </div>
    </li>`).join("");a.insertAdjacentHTML("beforeend",r)}const c=document.querySelector(".favorite-cocktails-list"),g=async o=>{try{const a=await n(o);k(a,c)}catch(a){console.log(a)}};function u(o){if(o.target.classList.contains(".cocktail-rem-fav-btn")){const a=o.target;log;let t=a.closest("li").dataset.id;l(t,i,d)}}c.addEventListener("click",u);const s=document.querySelector(".favorite-container-nococktails");console.log("fav: ",i);i.length===0||!i?m(s):i.forEach(o=>{s.classList.contains("active")&&s.classList.remove("active"),g(o),console.log(o)});console.log(c);c&&v(c,f);
