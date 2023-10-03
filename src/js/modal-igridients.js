import { fetchIngredient } from "./utilities/fetch-data";
import { renderIngidients } from "./utilities/render-ingridients";
import { addToLocalStorage, deleteFromLocalStorage, COCTAILMODAL_ID, INGRIDIENT_ID, ingredients } from "./utilities/local-storage";
import { modal, modalInfoEl } from './utilities/refs'

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
	if (e.target.dataset.type==="ingr-btn") {
		const btn = e.target
		console.log("BTN",btn);
		const ingrID = btn.dataset.idIngridientBtn
		console.log("ingrID",ingrID);
		const ingrAdd = btn.dataset.add
		console.log("ingraction", ingrAdd);
		
		if(ingredients && !ingredients.includes(ingrID)){
btn.dataset.add="igrremovefav";
btn.textContent ="Remove from favorites"
addToLocalStorage(ingrID, ingredients, INGRIDIENT_ID)
		}else{
			btn.dataset.add="ingraddfav";
btn.textContent ="Add to Favorites"
deleteFromLocalStorage(ingrID, ingredients, INGRIDIENT_ID)
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
