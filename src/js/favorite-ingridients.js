import './mob-menu';
// import './modal';
// import './modal-coctail';
// import './modal-igridients';

import { ingredients } from './utilities/local-storage';

import { renderFavIngidients } from './utilities/render-favorite-ingredients';
import { haventAddedFavoriteIngradients } from './no-cocktails';

const contNoCoctails = document.querySelector('.container-non-photos');
const titleGalleryEl = document.querySelector('.gallery-header');
const gelleryListEl = document.querySelector('.gallery-list');

if (ingredients.length === 0 || !ingredients) {
  console.log(ingredients);
  haventAddedFavoriteIngradients(contNoCoctails, titleGalleryEl);
} else {
  console.log(ingredients);

  titleGalleryEl.textContent = 'Favorite ingredients';
  ingredients.forEach(item => {
    renderFavIngidients(item);
    console.log(item);
  });
}
