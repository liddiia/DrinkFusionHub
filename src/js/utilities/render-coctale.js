import { COCKTAIL_ID } from "./local-storage";
export function createMarkupDescriptionCocktail(arr, container) {
  const markup = arr
    .map(
      item => `
 
    <div class="cocktail-modal">
   
     <div class="cocktail-modal-wrapper">
     <img class="cocktail-modal__image" src="${
       item.drinkThumb
     }" onerror = "this.onerror=null;this.src='/img/no-cocktails/no-cocktails@1x.png';" alt="${
        item.drink
      }" loading="lazy" width="295" >
      <div class="cocktail-modal-wrapper-descr">
      <h2 class="cocktail-modal__title">${item.drink}</h2>
      <h3 class="cocktail-modal__subtitle">Ingredients:</h3>
      <p class="cocktail-modal__per-cocktail">Per cocktail</p>
     <ul class="cocktail-modal__ingredients">
      ${item.ingredients
        .map(
          ingredient =>
            `<li class="cocktail-modal__ingredient-item">
               <a href="#modalinfo" data-id-ingridient=${ingredient.ingredientId} class="ingredient-link"> ${isDicriprion(ingredient)} - ${ingredient.title}</a>
             </li>`
        )
        .join('')}
    </ul>
    </div>
    </div>
      <h3 class="cocktail-modal__subtitle">Instructions:</h3>
      <p class="cocktail-modal__recipe">${item.instructions}</p>
      <ul class="cocktail-modal__buttons">  
    <li class="ingredient-button-item"> ${isFavCoct(item._id)}</li>
      <li class="ingredient-button-item">
      <button type="button" class="cocktail-modal__back-button" data-action="back"" aria-label="back">
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
  let storageArr = JSON.parse(localStorage.getItem(COCKTAIL_ID));
  return storageArr.includes(id)
    ? `<button type="button" class="cocktail-modal__favorite-button" data-action="favorite" data-id-coctail=${id}>
    Remove from Favorite
  </button>`
    : `<button type="button" class="cocktail-modal__favorite-button" data-action="favorite" data-id-coctail=${id}>
    Add to Favorites
  </button>`;
}
function isDicriprion(discr){
  console.log(discr.measure);
  console.log(discr.hasOwnProperty("measure"));
  
  return discr.hasOwnProperty("measure") ?  discr.measure : "🧐" ;
}
