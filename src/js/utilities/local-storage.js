const galleryList = document.querySelector('.gallery-list');
galleryList.addEventListener('click', addToFavorites);

export const COCKTAIL_ID = 'favorites';

export let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

export function addToFavorites(evt) {
  if (
    evt.currentTarget === evt.target ||
    evt.target.dataset.type !== 'user-action'
  ) {
    return;
  }

  const btn = evt.target;
  const svg = btn.firstElementChild;
  let actionType = btn.dataset.action;
  const listItem = btn.closest('li');
  let cocktailId = listItem.dataset.id;
  let idx = favorites.indexOf(cocktailId);

  if (actionType === 'addtofav' && idx === -1) {
    svg.classList.add('is-favorite');
    btn.dataset.action = 'removefromfav';
    addToLocalStorage(cocktailId, favorites, COCKTAIL_ID);
  } else {
    svg.classList.remove('is-favorite');
    btn.dataset.action = 'addtofav';
    deleteFromLocalStorage(cocktailId, favorites, COCKTAIL_ID);
  }
  console.log(favorites);
}

export function addToLocalStorage(id, arr, keyLS) {
  arr.push(id);
  localStorage.setItem(keyLS, JSON.stringify(arr));
}

export function deleteFromLocalStorage(id, arr, keyLS) {
  let index = arr.indexOf(id);
  console.log(index);
  if (index === -1) {
    return;
  }
  arr.splice(index, 1);
  localStorage.setItem(keyLS, JSON.stringify(arr));
}
