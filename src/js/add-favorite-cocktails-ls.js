import { COCKTAIL_ID, favorites, addToLocalStorage, deleteFromLocalStorage } from "./utilities/local-storage";
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