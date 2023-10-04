import{s as e,g as n,d as l,C as d,f as i,h as m}from"./icons-78da617c.js";import{m as v,r as f}from"./modal-coctail-b72b8586.js";function k(t,a){const r=t.map(o=>`<li class="cocktail-card" data-id="${o._id}">
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
          <button class="cocktail-rem-fav-btn" data-type="user-action" id ="${o._id}" data-action="remfromfav">
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
    </li>`).join("");a.insertAdjacentHTML("beforeend",r)}const c=document.querySelector(".favorite-cocktails-list"),g=async t=>{try{const a=await n(t);k(a,c)}catch(a){console.log(a)}};function u(t){if(t.target.classList.contains(".cocktail-rem-fav-btn")){const a=t.target;log;let o=a.closest("li").dataset.id;l(o,i,d)}}c.addEventListener("click",u);const s=document.querySelector(".favorite-container-nococktails");console.log("fav: ",i);i.length===0||!i?m(s):i.forEach(t=>{s.classList.contains("active")&&s.classList.remove("active"),g(t),console.log(t)});c&&v(c,f);
