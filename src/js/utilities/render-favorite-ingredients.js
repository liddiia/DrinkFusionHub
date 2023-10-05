import svgUrl from '/img/icons.svg';

export const renderFavIngidients = (arr, container) => {
  const markup = arr
    .map(
      item =>
        ` <li class= "fav-ingr-item>
      
         <h2 class="fav-ingridient-title" data-id-igridient =${item._id}>${
          item.title
        }</h2>

  <p class="fav-ingridient-type" >${item.type}</p>

  <p class="fav-ingridient-discription"><span class="ingr-title">${
    item.title
  }: </span>${isDicriprionIng(item.description)}</p>


  <div class="cic-btn-wrapper">
    <button class="cocktail-learn-more-btn" data-id-igridient="${
    item._id
    }">learn more
   </button>
  
   <button class="cocktail-rem-fav-btn" data-type="user-action" data-action="remfromfav">
  <svg
  class="remove-favorites-btn-icon"
  aria-label="remove from favorites button"
  >
  <use
  class="remove-icon"
  href="${svgUrl}#icon-remove"
  ></use>
  </svg>
  </button>
  </div>
  </li>`
    )
    .join('');

  container.insertAdjacentHTML("beforeend", markup);
};
function isDicriprionIng(disc) {
  return disc ? disc : "Sorry we dont have it yet";
}
