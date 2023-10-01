export function createMarkupDescriptionCocktail(arr, container) {
  const markup = arr
    .map(
      item => `
 
    <div class="cocktail-modal">
   
     <div class="cocktail-modal-wrapper">
     <img class="cocktail-modal__image" src="${
       item.drinkThumb
     }" onerror = "this.onerror=null;this.src='/img/no-coctails/no-coktails@1x.png';" alt="${
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
               <a href=${ingredient.id} class="ingredient-link">${ingredient.measure} - ${ingredient.title}</a>
             </li>`
        )
        .join('')}
    </ul>
    </div>
    </div>
      <h3 class="cocktail-modal__subtitle">Instructions:</h3>
      <p class="cocktail-modal__recipe">${item.instructions}</p>
      <ul class="cocktail-modal__buttons">  
    <li class="ingredient-button-item"> <button type="button" class="cocktail-modal__favorite-button" data-action="favorite">
        Add to Favorites
      </button></li>
      <li class="ingredient-button-item">
      <button type="button" class="cocktail-modal__back-button" id="backButton" aria-label="back">
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
