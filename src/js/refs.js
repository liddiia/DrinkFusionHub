/** add your listiener here */
export const refs = {
    favoritesList: document.querySelector('.fav-cocktails__list'),
    favoritesTitle: document.querySelector('.fav-cocktails__title'),
    favoriteSearchItem: document.querySelector('.fav-cocktails__item'),
    prewButton: document.querySelector('.prew-button'),
    nextButton: document.querySelector('.next-button'),
    pagContainer: document.querySelector('.pagination'),
    favNococktails: document.querySelector('.fav-nofav__cock'),
};

 const modalEl={
	modal:document.querySelector("[data-modal]"),
	modalCloseBtn:document.querySelector("[data-modal-close]"),
	modalInfoEl:document.querySelector(".modal-info")
};

export const {modal, modalCloseBtn, modalInfoEl}=modalEl;

