import './mob-menu';
import './modal-coctail';
import './modal-igridients';
import { favorites } from './utilities/local-storage';
import { haventAddedFavoriteCoctails } from './no-cocktails';
import { renderADrink } from './favorite';
import { modalCall } from './modalCallDrink';
import { renderDrink } from './modal';
import { favoriteCoctailsList } from './favorite';
const contFavoriteNoCoctails = document.querySelector(
  '.favorite-container-nococktails'
);
console.log('fav: ', favorites);

if (favorites.length === 0 || !favorites) {
  haventAddedFavoriteCoctails(contFavoriteNoCoctails);
} else {
  favorites.forEach(item => {
    if (contFavoriteNoCoctails.classList.contains('active')) {
      contFavoriteNoCoctails.classList.remove('active');
    }
    renderADrink(item);
    console.log(item);
  });
}
if (favoriteCoctailsList) {
  modalCall(favoriteCoctailsList, renderDrink);
}
