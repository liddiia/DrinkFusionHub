import { modal } from "./utilities/refs";
import { closeModalHelper } from "./utilities/modalCallDrink";
import { favorites, addToLocalStorage, deleteFromLocalStorage, COCKTAIL_ID } from "./utilities/local-storage";
const addToFavCoct = (e) => {
	if (
		e.currentTarget === e.target ||
		e.target.dataset.typecockt !== 'coct-btn'
	) {
		return;
	}
	const btn = e.target;
	console.log(btn);
	let cocktailId = btn.dataset.idCoctail;
	console.log(cocktailId);
	let actionType = btn.dataset.localcockt
	let idx = favorites.indexOf(cocktailId);
	if (actionType === 'favorite' && idx === -1) {
		btn.textContent = "Remove from favorites";
		actionType = "remfromfavorite";
		addToLocalStorage(cocktailId, favorites, COCKTAIL_ID);
		document.getElementById(cocktailId).classList.add('is-favorite');
		console.log(favorites);
	} else {
		btn.textContent = "Add to favorites";
		actionType = "favorite";
		deleteFromLocalStorage(cocktailId, favorites, COCKTAIL_ID);
		document.getElementById(cocktailId).classList.remove('is-favorite');
	}

}
export const coctailBackModal = (e) => {
	if (e.target.classList.contains("cocktail-modal-back")) {
		setTimeout(closeModalHelper(e.target), 500)
	}
}

modal.addEventListener('click', addToFavCoct);
modal.addEventListener('click', coctailBackModal);
