/** add your listiener here */
export const refs = {
    favoritesList: document.querySelector('.favorite-cocktails-list'),
    favoritesTitle: document.querySelector('.fav-cocktails-title'),
    favoriteSearchItem: document.querySelector('.fav-cocktails-item'),
    prewButton: document.querySelector('.prew-button'),
    nextButton: document.querySelector('.next-button'),
    pagContainer: document.querySelector('.pagination'),
    favNococktails: document.querySelector('.fav-nofav__cock'),
    mainCocktailsGallery: document.querySelector('.gallery .gallery-list'),
    paginationContainer: document.querySelector('.pagination-buttons-container'),
    favoritePaginationContainer: document.querySelector('.favorite-pagination-buttons-container'),
    leftPagBtn: document.querySelectorAll("[data-action='leftPag']"),
    rightPagBtn: document.querySelectorAll("[data-action='rightPag']"),
    paginationNumberBtnsContainer: document.querySelector(
    '.number-buttons-container'),


};

 const modalEl={
	modal:document.querySelector("[data-modal='modal']"),
	modalCloseBtn:document.querySelector("[data-close='close']"),
	modalInfoEl:document.querySelector(".modal-info"),
    coctailModalBackBtn:document.querySelector(".cocktail-modal__back-button")
};

export const {modal, modalCloseBtn, modalInfoEl, coctailModalBackBtn }=modalEl;

