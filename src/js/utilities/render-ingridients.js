import { ingredients } from "./local-storage";

export const renderIngidients = (arr, container) => {
	const markup = arr.map(item =>
		`<h2 class="ingridient-title" data-id-igridient =${item._id}>${item.title}</h2>
		<p class="ingridient-type" >${item.type}</p>
		<p class="ingridient-discription"><span class="ingr-title">${item.title}: </span>${isDicriprion(item.description)}</p>
		 <ul class="ingidient-dicr-list">
		 <li class="ingridient-discription-item"> Type: ${isDicriprion(item.type)}</li>
		 <li class="ingridient-discription-item">Country of origin: ${isDicriprion(item.country)}</li>
		 <li class="ingridient-discription-item">Alcohol by volume: ${isDicriprion(item.abv)}%</li>
		 <li class="ingridient-discription-item">Flavour:  ${isDicriprion(item.flavour)}</li></ul><ul class="cocktail-modal-buttons">
		 <li class="ingredient-button-item"> ${isFavIngr(item._id)}</li>
		   <li class="ingredient-button-item">
		   <button type="button" class="cocktail-modal-back-button ingridient-modal-back-btn">
			 BACK
		   </button>
		   </li>
		   </ul>`
	).join("");

	container.innerHTML = markup;
}
function isFavIngr (id){
  if (ingredients && !ingredients.includes(id)) {
    return `<button type="button" class="cocktail-modal-favorite-button"  data-typeingr ="ingr-btn" data-localingr="ingraddfav" data-id-ingridient-btn=${id}>
    Add to Favorites
    </button>` } else {
         return `<button type="button" class="cocktail-modal-favorite-button" data-typeingr ="ingr-btn" data-localingr="igrremovefav" data-id-ingridient-btn=${id}>
         Remove from favorites
          </button>`
       }

}
function isDicriprion (disc){
	return disc? disc:"Sorry we dont have it yet"
}



