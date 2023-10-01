import {
  renderAddRemoveDrinkButton,
  attachFavouritesRemoveClickEvents,
} from '../favorite';
import { refs } from '../refs';
import { VIEWPORT_SIZES } from '../const';
import { viewportWidthCheck } from '../mainblock/mainblock';
import { pagination } from '../pagination';
export let getValueC = [];

const {
  favoritesList,
  // favoritesTitle,
  favoriteSearchItem,
  prewButton,
  nextButton,
  pagContainer,
  favNococktails,
} = refs;

//use function updateSize to render elements on click
export function initializeFavourites() {
  favoriteSearchItem.classList.add('is-hidden');
  let windowWidth = window.innerWidth;
  const localStorageLength = JSON.parse(
    localStorage.getItem('favorite-cocktail')
  );
  getValueC.length = 0;

  if (localStorageLength === null || localStorageLength.length === 0) {
    favoritesList.innerHTML = '';
    favNococktails.textContent = "You haven't added any favorite cocktails yet";
    favNococktails.classList.remove('is-hidden');
    prewButton.classList.add('is-hiden');
    nextButton.classList.add('is-hiden');
    pagination(0, 1);
    return;
  }
  favNococktails.classList.add('is-hidden');
  let totalPage = Math.ceil(
    localStorageLength.length / viewportWidthCheck(VIEWPORT_SIZES)
  );

  for (
    let i = 0;
    i < localStorageLength.length;
    i += viewportWidthCheck(VIEWPORT_SIZES)
  ) {
    let myChunk = localStorageLength.slice(
      i,
      i + viewportWidthCheck(VIEWPORT_SIZES)
    );
    getValueC.push(myChunk);
  }

  if (windowWidth < 768) {
    favouritesMarkup(0, 3);
  } else if (windowWidth < 1280) {
    favouritesMarkup(0, 6);
  } else {
    favouritesMarkup(0, 9);
  }
  if (totalPage > 1) {
    prewButton.classList.remove('is-hiden');
    nextButton.classList.remove('is-hiden');
    nextButton.removeAttribute('disabled');
    pagContainer.classList.add('pading');
    pagination(totalPage, 1);
  } else {
    pagContainer.classList.add('pading');
    prewButton.classList.add('is-hiden');
    nextButton.classList.add('is-hiden');
    pagination(0, 1);
  }
}

function favouritesMarkup(start, end) {
    const cocktailsArr = JSON.parse(localStorage.getItem('favorites'));
    let arr = cocktailsArr.slice(start, end);
    favoritesList.innerHTML = arr.map(
    e =>
     `<li class="cocktail-card" data-id="${item._id}">
      <div class="cocktail-img-wrap">
        <img
          class="cocktail-img"
          src="${item.drinkThumb}"
          onerror = "this.onerror=null;this.src='/img/no-coctails/no-coktails@1x.png';"
          alt="${item.drink}"
          loading="lazy"
        />
      </div>
      <div class="cocktail-info">
        <h3 class="cocktail-name">${item.drink}</h3>
        <p class="cocktail-description">${item.description}</p>
        <div class="cic-btn-wrapper">
          <button class="cocktail-learn-more-btn" data-id-drink="${item._id}">learn more</button>
          <button class="cocktail-rem-fav-btn" data-type="user-action" data-action="remfav">
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
    </li>`
    )
        .join('');

    attachFavouritesRemoveClickEvents();
}