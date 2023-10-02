export function renderAddRemoveDrinkButton(id, name, image) {
  if (getDrink(id)) {
    return `<button class="favourite removeFrom" data-id="${id}" data-name="${name}" data-image="${image}">Remove
        <svg class="icon-remove-selected">
            <use href="${icons}#icon-remove"></use>
        </svg>
      </button>`;
  }

  return `<button class="favourite removeFrom" data-id="${id}" data-name="${name}" data-image="${image}">Add to
      <svg class="icon-heart">
        <use href="${icons}#icon-remove"></use>
      </svg>
      </button>`;
}

export function attachFavouritesRemoveClickEvents() {
  let buttons = document.querySelectorAll('.favourite');

  for (let button of buttons) {
    button.onclick = favouritesRemoveClickEvent;
  }
}

// const noCocktailsCont = document.querySelector('.no-cocktails-cont')

// if (localStorage.getItem.favorites.length > 0) {
//   noCocktailsCont.classList.add('is-hiden');
// }

const modalInfoEl = document.querySelectorAll('.favourite')

export const renderADrink = async(id)=>{
	try {
		const drink = await getCocktail(id);
		favouritesMarkup(drink, modalInfoEl)
	} catch (error) {
		console.log(error);
	}
}