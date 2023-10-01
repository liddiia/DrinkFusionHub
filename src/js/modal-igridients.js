import { fetchIngredient } from "./utilities/fetch-data";
import { renderIngidients } from "./utilities/render-ingridients";
import { addToLocalStorage, deleteFromLocalStorage } from "./utilities/local-storage";
import { modal, modalInfoEl } from './refs'
import { COCTAILMODAL_ID } from "./modal";
import { renderDrink } from "./modal";
export const showIngridient = async(id)=>{
	 try {
		const ingridient = await fetchIngredient(id);
		console.log(ingridient);
        renderIngidients(ingridient, modalInfoEl);
	
	 } catch (error) {
		console.log(error);
	 }
}

 export const INGRIDIENT_ID ="ingridients";
 let ingredients = JSON.parse(localStorage.getItem('ingridients'))||[];

 const addToFavIngr = (e)=>{
	if(e.target.classList.contains("ingridient-modal-favorite-btn")){
	const btn = e.target;
	let actionType =btn.dataset.action;
	let ingridientId=btn.dataset.idIngridientBtn;
	console.log(ingridientId);
	let idx = ingredients.indexOf(ingridientId);
	console.log(idx);
	if(actionType ==="addtofav" && idx ===-1){
		btn.textContent = "Remove from favorites";
		btn.dataset.action ="removefromfav"
	addToLocalStorage(ingridientId, ingredients, INGRIDIENT_ID)
}else{
	btn.textContent="Add to favorites";
	btn.dataset.action="addtofav";
	deleteFromLocalStorage(ingridientId, ingredients, INGRIDIENT_ID)

}
	}
	

 }
 modal.addEventListener("click", addToFavIngr)

 const backIngridients =(e)=>{
if(e.target.classList.contains("ingridient-modal-back-btn")){
	const id =localStorage.getItem(COCTAILMODAL_ID);
	localStorage.removeItem(COCTAILMODAL_ID)
    renderDrink(id);
	return
}
 }
 modal.addEventListener("click", backIngridients);
