const backButton = document.querySelector('[data-action="back"]');

export function addBackButtonHandler() {
  console.log('Handler is called');

  if (backButton) {
    backButton.addEventListener('click', function (event) {
      history.back();
      event.preventDefault();
    });
  }
}


//  при імпорті:
// Додати обробник кнопки "Back"
// addBackButtonHandler();

// Видалити прослуховувач подій (наприклад: const closeModalAndRemoveEventListeners = e => {
//     closeModalHelper(e);
//     document.removeEventListener('keydown', closeEscape);
//     modal.removeEventListener('click', closeModalAndRemoveEventListeners);
//   };

//   modal.addEventListener('click', closeModalAndRemoveEventListeners);)
