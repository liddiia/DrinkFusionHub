import './mob-menu';
import './modal-igridients';
import './utilities/dark-theme';
import { modalCallIngr } from './utilities/modalCallIngr';
import { ingredients, deleteFromLocalStorage, INGRIDIENT_ID } from './utilities/local-storage';

// import { renderFavIngidients } from './utilities/render-favorite-ingredients';
import { haventAddedFavoriteIngradients } from './no-cocktails';
import { showIngridient } from './modal-igridients';
import { refs } from './utilities/refs';
import { fetchIngredient } from './utilities/fetch-data';
import { renderFavIngPagination } from './utilities/ingredients-pagination';
import svgUrl from '/img/icons.svg';

const contNoCoctails = document.querySelector('.container-non-photos');
const favIngListEl = document.querySelector('.fav-ingredients-cocktails-list');

export const renderIngFav = ids => {
  console.log('ids', ids);
  refs.favIngredientsList.innerHTML = '';
  if (!ids || ids.length === 0) {
    contNoCoctails.classList.add('active');
  } else {

    ids.forEach(async id => {
      const response = await fetchIngredient(id);
      if (!response[0]) return;
      const data = response[0];
      refs.favIngredientsList.innerHTML += ` <li class= "fav-ingr-item">
      <h2 class="fav-ingridient-title" data-id-igridient =${data._id}>${
        data.title
      }</h2>

  <p class="fav-ingridient-type" >${data.type}</p>

  <p class="fav-ingridient-discription"><span class="ingr-title">${
        data.title
      }: </span>${isDicriprionIng(data.description)}</p>


  <div class="cic-btn-wrapper">
  <button class="cocktail-learn-more-btn" data-id-igridient="${
        data._id
      }">learn more
  </button>

  <button class="cocktail-rem-fav-btn fav-ingred-remove-button" id ="${data._id}" data-type="user-action" data-action="remfromfav">
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
  </li>`;
    });
  }
};

function isDicriprionIng(disc) {
  return disc ? disc : "Sorry we dont have it yet";
}


console.log('ingredients', ingredients);
renderFavIngPagination(ingredients);


if (favIngListEl) {
  modalCallIngr(favIngListEl, showIngridient);
}

refs.favIngredientsList.addEventListener('click', (e) =>{
  if (e.target.classList.contains('fav-ingred-remove-button')) {
    const ingredientId = e.target.getAttribute('id');
    console.log(ingredientId);
    deleteFromLocalStorage(ingredientId, ingredients, INGRIDIENT_ID);
    renderFavIngPagination(ingredients)
  }
})