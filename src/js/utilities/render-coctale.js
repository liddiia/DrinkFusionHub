import { favorites } from "./local-storage";
export function createMarkupDescriptionCocktail(arr, container) {
  const markup = arr
    .map(
      item => `

    <div class="cocktail-modal">

     <div class="cocktail-modal-wrapper">
     <img class="cocktail-modal-image" src="${
       item.drinkThumb
     }" onerror = "this.onerror=null;this.src='/img/no-cocktails/no-cocktails@1x.png';" alt="${
        item.drink
      }" loading="lazy" width="295" >
      <div class="cocktail-modal-wrapper-descr">
      <h2 class="cocktail-modal-title">${item.drink}</h2>
      <h3 class="cocktail-modal-subtitle">Ingredients:</h3>
      <p class="cocktail-modal-per-cocktail">Per cocktail</p>
     <ul class="cocktail-modal-ingredients">
      ${item.ingredients
        .map(
          ingredient =>
            `<li class="cocktail-modal-ingredient-item">
               <a href="#modalinfo" data-id-ingridient=${ingredient.ingredientId} class="ingredient-link"> ${isDicriprion(ingredient)} - ${ingredient.title}</a>
             </li>`
        )
        .join('')}
    </ul>
    </div>
    </div>
      <h3 class="cocktail-modal-subtitle">Instructions:</h3>
      <p class="cocktail-modal-recipe">${item.instructions}</p>
      <ul class="cocktail-modal-buttons">
    <li class="ingredient-button-item"> ${isFavCoct(item._id)}</li>
      <li class="ingredient-button-item">
      <button type="button" class="cocktail-modal-back-button cocktail-modal-back" data-action="back"" aria-label="back">
        BACK
      </button>
      </li>
      </ul>
    </div>

  `
    )
    .join('');
  container.innerHTML = markup;
}

function isFavCoct(id) {
   if (favorites && !favorites.includes(id)) {
     return `<button type="button" class="cocktail-modal-favorite-button" data-localcockt="favorite" data-typecockt="coct-btn" data-id-coctail=${id}>
    Add to Favorites
   </button>`
  }
 else {
    return `<button type="button" class="cocktail-modal-favorite-button" data-typecockt="coct-btn" data-localcockt="remfromfavorite" data-id-coctail=${id}>
    Remove from Favorite
  </button>`
  }
}
function isDicriprion(discr){
    return discr.hasOwnProperty("measure") ?  discr.measure : "Sorry we dont have it yet" ;
}
