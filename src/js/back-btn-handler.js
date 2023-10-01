// back-btn-handler.js
import { createMarkupDescriptionCocktail } from './utilities/render-coctale';

const backButton = document.querySelector('[data-action="back"]');

export function addBackButtonHandler() {
  console.log('Handler is called');

  if (backButton) {
    backButton.addEventListener('click', function (event) {
      window.history.back();
      event.preventDefault();
    });
  }
}

//!!!
//  при імпорті:
// Додати обробник кнопки "Back"
// addBackButtonHandler();

// Видалити прослуховувач подій
