
import { modalCall } from "./utilities/modalCallDrink";
import { createMarkupDescriptionCocktail } from './utilities/render-coctale'
import { modalInfoEl } from './utilities/refs'
import { getCocktail } from './utilities/fetch-data';
const galleryEl = document.querySelector(".gallery-list");
export const renderDrink = async (id) => {
	try {
		const drink = await getCocktail(id);
		createMarkupDescriptionCocktail(drink, modalInfoEl)
	} catch (error) {
		console.log(error);
	}
}
if (galleryEl) {
	modalCall(galleryEl, renderDrink)
}


