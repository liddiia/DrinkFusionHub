import SlimSelect from 'slim-select';
import { didntFindCoctails } from './utilities/no-cocktails';
import { arrayLettersAndNumbers } from './utilities/data-letters-numbers';
import { changeGalleryTitle } from './utilities/chane-title';
import { createKeyboardBtn } from './utilities/render-keyboard-btn';
import {
  fetchCocktailByFirstLetter,
  fetchCocktailByName,
} from './utilities/fetch-data';
import { createCocktailCards } from './utilities/render-gallery';
import { renderPagination } from './utilities/pagination';
import { refs } from './utilities/refs';

const selectElement = document.getElementById('mySelect');
const btnHeroKeyboardEl = document.querySelector('.js-list-let-num');
export const galleryEl = document.querySelector('.gallery-list');
const formEl = document.querySelector('.js-form');
const contNoPhotoEl = document.querySelector('.container-non-photos');
export const titleGalleryEl = document.querySelector('.gallery-header');

const slim = new SlimSelect({
  select: selectElement,
  data: arrayLettersAndNumbers.map(item => ({ text: item, value: item })),
  showSearch: true,
  searchPlaceholder: 'search',
  placeholder: 'element',
  allowDeselect: true,
});

formEl.addEventListener('submit', onSearchFormSubmit);
selectElement.addEventListener('change', onChangeSelect);
btnHeroKeyboardEl.addEventListener('click', onKeyboardClick);

createKeyboardBtn(arrayLettersAndNumbers, btnHeroKeyboardEl);

function onChangeSelect(evt) {
  const selecteByLetAndChar = evt.target.value;
  changeGalleryTitle();

  fetchCocktailByFirstLetter(selecteByLetAndChar).then(resp => {
    createCocktailCards(resp, galleryEl);
    renderPagination(resp);
    if (
      refs.paginationNumberBtnsContainer.classList.contains(
        'number-buttons-container-search'
      )
    ) {
      refs.paginationNumberBtnsContainer.classList.remove(
        'number-buttons-container-search'
      );
    }
    if (window.innerWidth >= 320 && resp.length >= 8) {
      refs.paginationContainer.classList.remove('is-hidden');
    }
  });
}

function onKeyboardClick(evt) {
  if (evt.currentTarget === evt.target) {
    return;
  }
  const btn = evt.target.getAttribute('data-name');
  changeGalleryTitle();

  fetchCocktailByFirstLetter(btn).then(resp => {
    createCocktailCards(resp, galleryEl);
    renderPagination(resp);
    if (
      refs.paginationNumberBtnsContainer.classList.contains(
        'number-buttons-container-search'
      )
    ) {
      refs.paginationNumberBtnsContainer.classList.remove(
        'number-buttons-container-search'
      );
    }

    if (window.innerWidth >= 1280 && resp.length >= 9) {
      refs.paginationContainer.classList.remove('is-hidden');
    }
    if (window.innerWidth >= 768 && resp.length >= 8) {
      refs.paginationContainer.classList.remove('is-hidden');
    }
  });

  const currentActiveBtn = document.querySelector(
    '.hero-keyboard-btn.hero-keyboard-btn-active'
  );
  if (currentActiveBtn) {
    currentActiveBtn.classList.remove('hero-keyboard-btn-active');
  }
  const currentBtn = evt.target;
  currentBtn.classList.add('hero-keyboard-btn-active');
}

function onSearchFormSubmit(evt) {
  evt.preventDefault();
  const query = evt.currentTarget.elements['user-search-query'].value.trim();
  if (query === '') {
    galleryEl.innerHTML = '';
    didntFindCoctails(contNoPhotoEl, titleGalleryEl);
    return;
  }
  fetchCocktailByName(query).then(resp => {
    console.log(resp);
    createCocktailCards(resp, galleryEl);
    renderPagination(resp);
    if (
      !refs.paginationNumberBtnsContainer.classList.contains(
        'number-buttons-container-search'
      )
    ) {
      refs.paginationNumberBtnsContainer.classList.add(
        'number-buttons-container-search'
      );
    }
    if (window.innerWidth >= 1280 && resp.length >= 9) {
      refs.paginationContainer.classList.remove('is-hidden');
    }
    if (window.innerWidth >= 768 && resp.length >= 8) {
      refs.paginationContainer.classList.remove('is-hidden');
    }
    if (window.innerWidth >= 320 && resp.length >= 8) {
      refs.paginationContainer.classList.remove('is-hidden');
    }
    changeGalleryTitle();
  });
}
