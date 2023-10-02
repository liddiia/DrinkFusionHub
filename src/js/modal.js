
import { modalCall } from "./modalCallDrink";

export const renderDrink = async (id) => {
	try {
		const drink = await getCocktail(id);
		createMarkupDescriptionCocktail(drink, modalInfoEl)
	} catch (error) {
		console.log(error);
	}}
const galleryEl = document.querySelector(".gallery-list");
modalCall(galleryEl, renderDrink)

