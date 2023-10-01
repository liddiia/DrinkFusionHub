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

const selectElement = document.getElementById('mySelect');
const btnHeroKeyboardEl = document.querySelector('.js-list-let-num');
const galleryEl = document.querySelector('.gallery-list');
const formEl = document.querySelector('.js-form');

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

  fetchCocktailByFirstLetter(selecteByLetAndChar).then(resp => {
    createMarkupCard(resp, galleryEl);
    changeGalleryTitle();
  });
}

function onKeyboardClick(evt) {
  if (evt.currentTarget === evt.target) {
    return;
  }
  const btn = evt.target.getAttribute('data-name');
  fetchCocktailByFirstLetter(btn).then(resp => {
    createCocktailCards(resp, galleryEl);
    changeGalleryTitle();
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
    didntFindCoctails(galleryEl);
    alert('non foto');
    return;
  }
  fetchCocktailByName(query).then(resp => {
    console.log(resp);
    createCocktailCards(resp, galleryEl);
    changeGalleryTitle();
  });
}
