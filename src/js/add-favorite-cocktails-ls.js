import {
  COCKTAIL_ID,
  favorites,
  addToLocalStorage,
  deleteFromLocalStorage,
} from './utilities/local-storage';

const galleryList = document.querySelector('.gallery-list');

galleryList.addEventListener('click', addToFavorites);

function addToFavorites(evt) {
  if (
    evt.currentTarget === evt.target ||
    evt.target.dataset.type !== 'user-action'
  ) {
    return;
  }

  const btn = evt.target;
  console.log(btn);
  let actionType = btn.dataset.action;
  const listItem = btn.closest('li');
  let cocktailId = listItem.dataset.id;
  console.log(cocktailId);
  let idx = favorites.indexOf(cocktailId);

  if (actionType === 'addtofav' && idx === -1) {
    btn.classList.add('is-favorite');
    actionType = 'removefromfav';
    addToLocalStorage(cocktailId, favorites, COCKTAIL_ID);
    
  } else {
    btn.classList.remove('is-favorite');
    actionType = 'addtofav';
    deleteFromLocalStorage(cocktailId, favorites, COCKTAIL_ID);
  }
  console.log(favorites);
}
