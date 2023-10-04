import './mob-menu';
// import './modal';
// import './modal-coctail';
// import './modal-igridients';

import { ingredients } from './utilities/local-storage';

import { renderFavIngidients } from './utilities/render-favorite-ingredients';
import { haventAddedFavoriteIngradients } from './no-cocktails';

const contNoCoctails = document.querySelector('.container-non-photos');
const titleGalleryEl = document.querySelector('.gallery-header');
const desc = document.querySelector('.description-no-coctails');
const span = document.querySelector('span-no-coctails');
const gelleryListEl = document.querySelector('.gallery-list');

if (ingredients.length === 0 || !ingredients) {
  console.log(ingredients);
  haventAddedFavoriteIngradients(contNoCoctails, titleGalleryEl, desc, span);
} else {
  console.log(ingredients);

  titleGalleryEl.textContent = 'Favorite ingredients';
  ingredients.forEach(item => {
    renderFavIngidients(item);
    console.log(item);
  });
}
