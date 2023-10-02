import { fetchIngredient } from "./utilities/fetch-data";
import { renderIngidients } from "./utilities/render-ingridients";
import { addToLocalStorage, deleteFromLocalStorage } from "./utilities/local-storage";
import { modal, modalInfoEl } from './utilities/refs'
import { COCTAILMODAL_ID } from "./modal";
import { renderDrink } from "./modal";
export const showIngridient = async (id) => {
	try {
		const ingridient = await fetchIngredient(id);
		renderIngidients(ingridient, modalInfoEl);

	} catch (error) {
		console.log(error);
	}
}

const INGRIDIENT_ID = "ingridients";
export let ingredients = JSON.parse(localStorage.getItem('ingridients')) || [];

const addToFavIngr = (e) => {
	if (e.target.classList.contains("ingridient-modal-favorite-btn")) {
		const btn = e.target;
		let actionType = btn.dataset.action;
		let ingridientId = btn.dataset.idIngridientBtn;
		let idx = ingredients.indexOf(ingridientId);
		if (actionType === "addtofav" && idx === -1) {
			btn.textContent = "Remove from favorites";
			btn.dataset.action = "removefromfav"
			addToLocalStorage(ingridientId, ingredients, INGRIDIENT_ID)
		} else {
			btn.textContent = "Add to favorites";
			btn.dataset.action = "addtofav";
			deleteFromLocalStorage(ingridientId, ingredients, INGRIDIENT_ID)

		}
	}

}

const backIngridients = (e) => {
	if (e.target.classList.contains("ingridient-modal-back-btn")) {
		const id = localStorage.getItem(COCTAILMODAL_ID);
		renderDrink(id);
		return
	}
}
modal.addEventListener("click", addToFavIngr);
modal.addEventListener("click", backIngridients);
