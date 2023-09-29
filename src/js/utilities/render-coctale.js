export function createMarkupDescriptionCocktail(
  drink,
  drinkThumb,
  ingredients,
  instructions,
  _id
) {
  const markup = `
 
    <div class="cocktail-modal">
   
     <div class="cocktail-modal-wrapper">
     <img class="cocktail-modal__image" src="${drinkThumb}" alt="${drink}" loading="lazy" width="295" >
      <div class="cocktail-modal-wrapper-descr">
      <h2 class="cocktail-modal__title">${drink}</h2>
      <h3 class="cocktail-modal__subtitle">Ingredients:</h3>
      <p class="cocktail-modal__per-cocktail">Per cocktail</p>
     <ul class="cocktail-modal__ingredients">
      ${ingredients
        .map(
          ingredient =>
            `<li class="cocktail-modal__ingredient-item">
               <a href="#${ingredient.id}" class="ingredient-link">${ingredient.measure} - ${ingredient.title}</a>
             </li>`
        )
        .join('')}
    </ul>
    </div>
    </div>
      <h3 class="cocktail-modal__subtitle">Instructions:</h3>
      <p class="cocktail-modal__recipe">${instructions}</p>
    <div class="cocktail-modal__buttons">  <button type="button" class="cocktail-modal__favorite-button" data-action="favorite">
        Add to Favorites
      </button>
      <button type="button" class="cocktail-modal__back-button" aria-label="back">
        BACK
      </button>
      </div>
    </div>
  
  `;
  return markup;
}

// const modal = document.createElement('div');
// modal.innerHTML = markup;

// // Обробка клікабельних інгредієнтів
// const ingredientLinks = modal.querySelectorAll('.ingredient-link');

// ingredientLinks.forEach(link => {
//   link.addEventListener('click', event => {
//     event.preventDefault();
//     const ingredientTitle = link.getAttribute('href').substring(1);
//     const ingredient = ingredients.find(item => item.id === _id);
//     if (ingredient) {
//       // Показати нове модальне вікно з описом інгредієнта?
//     }
//   });
// });
