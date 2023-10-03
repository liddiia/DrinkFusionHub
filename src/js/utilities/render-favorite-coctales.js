// // import {
// //   renderAddRemoveDrinkButton,
// //   attachFavouritesRemoveClickEvents,
// // } from './favorite';
// // import { refs } from './refs';
// // import { pagination } from './pagination';


// // const {
// //   favoritesList,
// //   favoriteSearchItem,
// //   prewButton,
// //   nextButton,
// //   pagContainer,
// //   favNococktails,
// // } = refs
import svgUrl from '/img/icons.svg'

export function favouritesMarkup(arr, container) {
  // getCocktail(id)
  // let arr = JSON.parse(localStorage.getItem('favorites'));
  const markup = arr
    .map(
      e =>
        `<li class="cocktail-card" data-id="${e._id}">
      <div class="cocktail-img-wrap">
        <img
          class="cocktail-img"
          src="${e.drinkThumb}"
          onerror = "this.onerror=null;this.src='/img/no-coctails/no-coktails@1x.png';"
          alt="${e.drink}"
          loading="lazy"
        />
      </div>
      <div class="cocktail-info">
        <h3 class="cocktail-name">${e.drink}</h3>
        <p class="cocktail-description">${e.description}</p>
        <div class="cic-btn-wrapper">
          <button class="cocktail-learn-more-btn" data-id-drink="${e._id}">learn more</button>
          <button class="cocktail-rem-fav-btn" data-type="user-action" id ="${e._id}" data-action="remfromfav">
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
    )
    .join('');

  container.insertAdjacentHTML("beforeend", markup);
}
