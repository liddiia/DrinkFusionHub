import { INGRIDIENT_ID } from "../modal-igridients";
export const renderIngidients = (arr, container) => {
	const markup = arr.map(item => 
		`<h2 class="ingridient-title" data-id-igridient =${item._id}>${item.title}</h2>
		<p class="ingridient-type" >${item.type}</p>
		<p class="ingridient-discription" onerror = "this.onerror=null;this.textContent='Unfortunately we dont have this discription';">${isDicriprionIng(item.description)}</span>
		 <ul class="ingidient-dicr-list">
		 <li class="ingridient-discription-item"> Type: ${item.type}</li>
		 <li class="ingridient-discription-item">Country of origin: ${item.country}</li>
		 <li class="ingridient-discription-item">Alcohol by volume: ${item.abv}%</li>
		 <li class="ingridient-discription-item">Flavour:  ${item.flavour}</li></ul><ul class="cocktail-modal__buttons">  
		 <li class="ingredient-button-item"> ${isFavIngr(item._id)}</li>
		   <li class="ingredient-button-item">
		   <button type="button" class="cocktail-modal__back-button ingridient-modal-back-btn" id="backButton" aria-label="back">
			 BACK
		   </button>
		   </li>
		   </ul>`
	).join("");

	container.innerHTML = markup;
}
function isFavIngr (id){
	let storageArr = JSON.parse(localStorage.getItem(INGRIDIENT_ID));
	return storageArr.includes(id)?
	`<button type="button" class="cocktail-modal__favorite-button ingridient-modal-favorite-btn" data-action="favorite" data-action="addtofav" data-id-ingridient-btn=${id}>
			Remove from favorites
		   </button>`:
		   `<button type="button" class="cocktail-modal__favorite-button ingridient-modal-favorite-btn" data-action="favorite" data-action="addtofav" data-id-ingridient-btn=${id}>
			 Add to Favorites
		   </button>`

}
function isDicriprionIng (disc){
	disc? disc:"Unfortunatly we dont have it yet"	
}
