import './mob-menu';
import { favorites } from './utilities/local-storage';
import { haventAddedFavoriteCoctails } from './utilities/no-cocktails';
import { renderADrink } from './favorite';

const contNoCoctails = document.querySelector('.container-non-photos');
const titleGalleryEl = document.querySelector('.gallery-header');
const gelleryListEl = document.querySelector('.gallery-list');

console.log('fav: ', favorites);

if (favorites.length === 0 || !favorites) {
  haventAddedFavoriteCoctails(contNoCoctails, titleGalleryEl);
} else {
  favorites.forEach(item => {
    renderADrink(item);
    console.log(item);
  });
}
