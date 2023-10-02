import './mob-menu';
//import './modal';
//import './modal-coctail';
//import './modal-igridients';
import { ingredients } from './utilities/local-storage'; 
import haventAddedFavoriteIngradients from "./utilities/no-cocktails";

const contNoCoctails = document.querySelector('container-non-photos');
const titleGalleryEl = document.querySelector('gallery-header');
const gelleryListEl = document.querySelector('gallery-list');

if (ingredients.lenght===0 || !ingredients) {
haventAddedFavoriteIngradients(contNoCoctails,titleGalleryEl);
}
else {
console.log( ingredients );
}
//renderFavIngidients
