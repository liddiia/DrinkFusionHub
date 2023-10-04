import './mob-menu';
import './modal-coctail'
import './modal-igridients'
import { favorites } from './utilities/local-storage';
import { haventAddedFavoriteCoctails } from './no-cocktails';
import { renderADrink } from './favorite';
import { modalCall } from './modalCallDrink';
import { renderDrink } from './modal';
import { modal, modalCloseBtn } from './utilities/refs';

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

modalCall(titleGalleryEl, renderDrink)