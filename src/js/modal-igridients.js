import { fetchIngredient } from "./utilities/fetch-data";
import { renderIngidients } from "./utilities/render-ingridients";
import { addToLocalStorage, deleteFromLocalStorage, COCTAILMODAL_ID, INGRIDIENT_ID, ingredients } from "./utilities/local-storage";
import { modal, modalInfoEl } from './utilities/refs'
import { closeModalHelper } from "./utilities/modalCallDrink";
import { renderDrink } from "./modal";
export const showIngridient = async (id) => {
	try {
		const ingridient = await fetchIngredient(id);
		renderIngidients(ingridient, modalInfoEl);

	} catch (error) {
		console.log(error);
	}
}
const addToFavIngr = (e) => {
	if (
		e.currentTarget === e.target ||
		e.target.dataset.typeingr !== 'ingr-btn'
	) {
		return;
	}

	const btn = e.target;
	console.log("BTN", btn);
	let ingrId = btn.dataset.idIngridientBtn;
	console.log("ingrID", ingrId);
	let actionType = btn.dataset.localingr
	console.log("ingraction", actionType);
	let idx = ingredients.indexOf(ingrId);
	if (actionType === 'ingraddfav' && idx === -1) {
		actionType = "igrremovefav";
		btn.textContent = "Remove from favorites"
		addToLocalStorage(ingrId, ingredients, INGRIDIENT_ID)
	} else {
		actionType = "ingraddfav";
		btn.textContent = "Add to Favorites"
		deleteFromLocalStorage(ingrId, ingredients, INGRIDIENT_ID)
	}





}

export const backIngridients = (e) => {
	if (e.target.classList.contains("ingridient-modal-back-btn")) {
		const id = localStorage.getItem(COCTAILMODAL_ID);
		if (id) {
			renderDrink(id);
		}
		else (
			setTimeout(closeModalHelper(e), 500)
		)
		return
	}
}
modal.addEventListener("click", addToFavIngr);
