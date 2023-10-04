import { favorites } from './local-storage';
import svgUrl from '/img/icons.svg';

export function createCocktailCards(arr, container) {
  const markup = arr
    .map(
      item => `<li class="cocktail-card glow-on-hover" data-id="${item._id}">
      <div class="cocktail-img-wrap">
        <img
          class="cocktail-img"
          src="${item.drinkThumb}"
         onerror = "this.onerror=null;this.src='/img/no-cocktails/no-cocktails@1x.png';"
          alt="${item.drink}"
          loading="lazy"
        />
      </div>
      <div class="cocktail-info">
        <h3 class="cocktail-name">${item.drink}</h3>
        <p class="cocktail-description">${item.description}</p>
        <div class="cic-btn-wrapper">
          <button class="cocktail-learn-more-btn" data-id-drink="${
            item._id
          }">learn more</button>${isFav(item._id)}
        </div>
      </div>
    </li>`
    )
    .join('');

  container.innerHTML = markup;
}

export function isFav(id) {
  if (favorites && !favorites.includes(id)) {
    return `<button class="cocktail-add-fav-btn" id="${id}" data-type="user-action" data-action="addtofav">
            <svg
              class="favorites-btn-icon"
              aria-label="add to favorites button"
            >
              <use
                class="favorites-icon"
                href="${svgUrl}#icon-heart"
              ></use>
            </svg>
            </button>`;
  } else {
    return `<button class="cocktail-add-fav-btn is-favorite" id="${id}" data-type="user-action" data-action="addtofav">
            <svg
              class="favorites-btn-icon"
              aria-label="add to favorites button"
            >
              <use
                class="favorites-icon"
                href="${svgUrl}#icon-heart"
              ></use>
            </svg>
         </button>`;
  }
}
