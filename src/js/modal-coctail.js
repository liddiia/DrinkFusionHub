import { favorites, addToLocalStorage, deleteFromLocalStorage, COCKTAIL_ID } from "./utilities/local-storage";
const addToFavCoct =(e)=>{
	if(e.target.classList.contains(".cocktail-modal__favorite-button")){
		const btn =e.target;
		let actionType =btn.dataset.action;
		let coctailId =btn.dataset.idCoctail;
		let idx =favorites.indexOf(coctailId);
		if(actionType==="favotive" && idx===-1){
			btn.textContent = "Remove from favorites";
			btn.dataset.action ="remfromfavorite";
			addToLocalStorage(coctailId, favorites, COCKTAIL_ID )
		}
	}else{
		btn.textContent="Add to favorites";
	btn.dataset.action="favorite";
	deleteFromLocalStorage(coctailId, favorites, COCKTAIL_ID)
	}
}
