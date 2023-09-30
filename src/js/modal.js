import { disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';
import { createMarkupDescriptionCocktail } from './utilities/render-coctale';
import { getCocktail } from './utilities/fetch-data';
const galleryEl= document.querySelector(".gallery-list");
const modalEl={
	modal:document.querySelector("[data-modal]"),
	modalCloseBtn:document.querySelector("[data-modal-close]"),
	modalInfoEl:document.querySelector(".modal-info")
};

const {modal, modalCloseBtn, modalInfoEl}=modalEl;
 const closeModalHelper =(event)=>{
	modal.classList.toggle("is-open");
	enableBodyScroll(event);	
}
const openModal=  (e)=>{
	const idDrink=e.target.dataset.idDrink
	console.log(e.target.dataset.idDrink);
	if(e.target.classList.contains("cocktail-learn-more-btn")){
		const open = async()=>{
			console.log(e.target.dataset.idDrink);
			modal.classList.toggle("is-open");
			try {
				const drink = await getCocktail(idDrink);
				createMarkupDescriptionCocktail(drink, modalInfoEl)
			} catch (error) {
				console.log(error);
			}
			
			disableBodyScroll(e)}
	}
			
		
	setTimeout(open, 500);
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
	}else{return}
	
}

galleryEl.addEventListener("click", openModal)
modal.addEventListener("click", closeModal)
