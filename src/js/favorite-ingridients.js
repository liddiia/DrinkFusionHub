import './mob-menu';
import './modal-igridients';
import './utilities/dark-theme';
import { modalCallIngr } from './utilities/modalCallIngr'; 
import { ingredients } from './utilities/local-storage';

import { renderFavIngidients } from './utilities/render-favorite-ingredients';
import { haventAddedFavoriteIngradients } from './no-cocktails';
import { fetchIngredient } from './utilities/fetch-data';
import { showIngridient } from './modal-igridients';

const contNoCoctails = document.querySelector('.container-non-photos');
const favIngListEl = document.querySelector('.fav-ingredients-cocktails-list');

const showFavIngridient = async (id) => {
  try {
    const ingridient = await fetchIngredient(id);
    renderFavIngidients(ingridient, favIngListEl);

  } catch (error) {
    console.log(error);
  }
}


if (ingredients.length === 0 || !ingredients) {
  console.log(ingredients);
  haventAddedFavoriteIngradients(contNoCoctails);
} else {
  console.log(ingredients);
  ingredients.forEach(item => {
    showFavIngridient(item);
    console.log(item);
  });

}
if (favIngListEl) {
  modalCallIngr(favIngListEl, showIngridient)
}