import { fetchIngredient } from "./utilities/fetch-data";
import { renderIngidients } from "./utilities/render-ingridients";
const ingidientLinkEl= document.querySelectorAll(".ingredient-link");
import { modal, modalCloseBtn, modalInfoEl } from './refs'

if(modal.classList.contains("is-open")){
	if(ingidientLinkEl.length>0){
		ingidientLinkEl.forEach(el=>{
			el.addEventListener("click", function(e){
				const ingrId = ingidientLinkEl.getAttribute('href');
				console.log(ingrId);
				e.preventDefault();
				console.log(ingrId);
			} )
		})
	}
}


const showIngridient = async(id)=>{
	 try {
		const ingridient = await fetchIngredient(id);
        renderIngidients(ingridient, modalInfoEl)
	 } catch (error) {
		console.log(error);
	 }
}

