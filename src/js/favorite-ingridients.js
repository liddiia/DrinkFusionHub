import './mob-menu';
// import './modal';
// import './modal-coctail';
// import './modal-igridients';

import { ingredients } from './utilities/local-storage';

import { renderFavIngidients } from './utilities/render-favorite-ingredients';
import { haventAddedFavoriteIngradients } from './no-cocktails';
import { fetchIngredient } from './utilities/fetch-data';

const contNoCoctails = document.querySelector('.container-non-photos');
const gelleryListEl = document.querySelector('.ingredients-cocktails-list');

const showFavIngridient = async (id) => {
	try {
		const ingridient = await fetchIngredient(id);
		renderFavIngidients(ingridient,gelleryListEl );

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
