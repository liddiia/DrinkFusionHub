import { modal} from "./utilities/refs";
import { closeModalHelper } from "./modalCallDrink";
import { favorites, addToLocalStorage, deleteFromLocalStorage, COCKTAIL_ID } from "./utilities/local-storage";
const addToFavCoct =(e)=>{
	if(e.target.classList.contains("cocktail-modal__favorite-button")){
		const btn =e.target;
		let actionType =btn.dataset.action;
		let cocktailId =btn.dataset.idCoctail;
		let idx =favorites.indexOf(cocktailId);
		
		if(actionType === "favorite"&& idx === -1){
			btn.textContent = "Remove from favorites";
			btn.dataset.action ="remfromfavorite";
			addToLocalStorage(cocktailId, favorites, COCKTAIL_ID)

		}else{
			btn.textContent = "Add to favorites";
			btn.dataset.action="favorite";
			deleteFromLocalStorage(cocktailId, favorites, COCKTAIL_ID)
		}
}
}
export const coctailBackModal = (e)=>{
	if(e.target.classList.contains("cocktail-modal-back")){
		setTimeout(closeModalHelper(e.target), 500)
	}
}

modal.addEventListener('click', addToFavCoct);
modal.addEventListener('click', coctailBackModal);
