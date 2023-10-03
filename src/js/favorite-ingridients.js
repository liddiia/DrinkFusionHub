import './mob-menu';
//import './modal';
//import './modal-coctail';
//import './modal-igridients';

import  {renderIngidients} from './utilities/render-ingridients';

import {ingredients} from './utilities/local-storage';

import  {renderFavIngidients}  from './utilities/render-favorite-ingredients';
import {haventAddedFavoriteIngradients} from './utilities/no-cocktails';

const contNoCoctails = document.querySelector('.container-non-photos');
const titleGalleryEl = document.querySelector('.gallery-header');
const gelleryListEl = document.querySelector('.gallery-list');

if (ingredients.length === 0 || !ingredients) {
    haventAddedFavoriteIngradients(contNoCoctails, titleGalleryEl);
}
 else
  {titleGalleryEl.textContent = 'Favorite ingredients';
   ingredients.forEach(item => {
          renderFavIngidients(item);
         console.log(item);
     
     } )  };
