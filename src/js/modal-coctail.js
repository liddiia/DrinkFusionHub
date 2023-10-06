import { modal } from "./utilities/refs";
import { favorites, addToLocalStorage, deleteFromLocalStorage, COCKTAIL_ID } from "./utilities/local-storage";
const addToFavCoct = (e) => {
	if (
		e.currentTarget === e.target ||
		e.target.dataset.typecockt !== 'coct-btn'
	) {
		return;
	}
	const btn = e.target;
	let cocktailId = btn.dataset.idCoctail;
	let actionType = btn.dataset.localcockt
	let idx = favorites.indexOf(cocktailId);
	if (actionType === 'favorite' && idx === -1) {
		btn.textContent = "Remove from favorites";
		actionType = "remfromfavorite";
		addToLocalStorage(cocktailId, favorites, COCKTAIL_ID);
		document.getElementById(cocktailId).classList.toggle('is-favorite');
	} else {
		btn.textContent = "Add to favorites";
		actionType = "favorite";
		deleteFromLocalStorage(cocktailId, favorites, COCKTAIL_ID);
		document.getElementById(cocktailId).classList.toggle('is-favorite');
	}}


modal.addEventListener('click', addToFavCoct);
