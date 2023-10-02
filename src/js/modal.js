
import { modalCall } from "./modalCallDrink";
import {createMarkupDescriptionCocktail} from './utilities/render-coctale'
import {modalInfoEl} from './utilities/refs'
import { getCocktail } from './utilities/fetch-data';
export const renderDrink = async (id) => {
	try {
		const drink = await getCocktail(id);
		createMarkupDescriptionCocktail(drink, modalInfoEl)
	} catch (error) {
		console.log(error);
	}}
const galleryEl = document.querySelector(".gallery-list");
modalCall(galleryEl, renderDrink)

