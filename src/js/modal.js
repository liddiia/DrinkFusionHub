import { disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';
import { createMarkupDescriptionCocktail } from './utilities/render-coctale';
import { getCocktail } from './utilities/fetch-data';
import { modal, modalCloseBtn, modalInfoEl } from './utilities/modal-btn';
const galleryEl= document.querySelector(".gallery-list");



 const closeModalHelper =(event)=>{
	modal.classList.toggle("is-open");
	enableBodyScroll(event);	
}
const renderDrink = async(id)=>{
	try {
		const drink = await getCocktail(id);
		createMarkupDescriptionCocktail(drink, modalInfoEl)
	} catch (error) {
		console.log(error);
	}
	
}
const openModal=  (e)=>{
	const idDrinke=e.target.dataset.idDrink;
		if(e.target.classList.contains("cocktail-learn-more-btn")){
		setTimeout(modal.classList.toggle("is-open"), 500)
		 renderDrink(idDrinke);
		disableBodyScroll(e);
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
		
	if(e.target===modalCloseBtn || e.target===modal){
		setTimeout(closeModalHelper(e), 500)
	}
}

galleryEl.addEventListener("click", openModal)
modal.addEventListener("click", closeModal)
