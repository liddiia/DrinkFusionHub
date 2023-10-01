import { disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';
import { createMarkupDescriptionCocktail } from './utilities/render-coctale';
import { getCocktail } from './utilities/fetch-data';
import { modal, modalCloseBtn, modalInfoEl } from './refs'
const galleryEl= document.querySelector(".gallery-list");
import { showIngridient } from './modal-igridients';
export const COCTAILMODAL_ID="modalcoctail";
 const closeModalHelper =(event)=>{
	modal.classList.toggle("is-open");
	enableBodyScroll(event);	
}
export const renderDrink = async(id)=>{
	try {
		const drink = await getCocktail(id);
		createMarkupDescriptionCocktail(drink, modalInfoEl)
	} catch (error) {
		console.log(error);
	}
	
}
const openModal=  (e)=>{
	const {target} =e;

	const idDrink = target.dataset.idDrink;
		if(target.classList.contains("cocktail-learn-more-btn")){
		setTimeout(modal.classList.toggle("is-open"), 500)
		 renderDrink(idDrink);
		disableBodyScroll(e);
		
        localStorage.setItem(COCTAILMODAL_ID, idDrink)
	}
	const closeEscape =(e=>{
		if(e.key ==='Escape'){
			setTimeout(closeModalHelper(e), 500);
			document.removeEventListener("keydown", closeEscape);
		}
	})
	document.addEventListener("keydown", closeEscape)	
}
const closeModal = (e)=>{
		const {target} =e;
	if(target===modalCloseBtn || target===modal||target.tagName==="A"){
		if(target.tagName==="A"){
			e.preventDefault();
			console.log(target);
			const ingrId = target.dataset.idIngridient;
			console.log(ingrId);
			showIngridient(ingrId)
			return
		} 
		
		setTimeout(closeModalHelper(e), 500)
	}
}

galleryEl.addEventListener("click", openModal)
modal.addEventListener("click", closeModal)
