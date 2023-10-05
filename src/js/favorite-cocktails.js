import './mob-menu';
import './modal-coctail';
import './modal-igridients';
import './utilities/dark-theme';
import { favorites } from './utilities/local-storage';
import { refs } from './utilities/refs';
import { getCocktail } from './utilities/fetch-data';
import { renderFavPagination } from './utilities/favorites-pagination';
import { modalCall } from './utilities/modalCallDrink';
import { renderDrink } from './modal';
import svgUrl from '/img/icons.svg';

const contFavoriteNoCoctails = document.querySelector(
  '.favorite-container-nococktails'
);


export const renderFav = ids => {
  console.log("ids", ids);
  refs.favoritesList.innerHTML = '';
  if (!ids || ids.length === 0) {
    contFavoriteNoCoctails.classList.add('active');
  }
  ids.forEach(async id => {
    const response = await getCocktail(id);
    if (!response[0]) return;
    const data = response[0];
    refs.favoritesList.innerHTML += `<li class="cocktail-card" data-id="${data._id}">
    <div class="cocktail-img-wrap">
      <img
        class="cocktail-img"
        src="${data.drinkThumb}"
        onerror = "this.onerror=null;this.src='/img/no-coctails/no-coktails@1x.png';"
        alt="${data.drink}"
        loading="lazy"
      />
    </div>
    <div class="cocktail-info">
      <h3 class="cocktail-name">${data.drink}</h3>
      <p class="cocktail-description">${data.description}</p>
      <div class="cic-btn-wrapper">
        <button class="cocktail-learn-more-btn" data-id-drink="${data._id}">learn more</button>
        <button class="cocktail-rem-fav-btn" data-type="user-action" id ="${data._id}" data-action="remfromfav">
          <svg
            class="remove-favorites-btn-icon"
            aria-label="remove from favorites button"
          >
            <use
              class="remove-icon"
              href="${svgUrl}#icon-remove"
            ></use>
          </svg>
        </button>
      </div>
    </div>
  </li>`
;
  });
}

console.log("favorites", favorites);
renderFavPagination(favorites);


if (refs.favoritesList) {
  modalCall(refs.favoritesList, renderDrink)
}

