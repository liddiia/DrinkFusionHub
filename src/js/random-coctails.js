import { fetchRandomCocktails } from '../js/utilities/fetch-data';
import { createCocktailCards } from './utilities/render-gallery';
import { refs } from './utilities/refs';
const randomGallery = document.querySelector('.gallery-list');
const rondomGallery = async () => {
  if (window.innerWidth >= 1280) {
    let render = await fetchRandomCocktails(9);
    createCocktailCards(render, randomGallery);
  } else {
    let render = await fetchRandomCocktails(8);
    createCocktailCards(render, randomGallery);
  }
  refs.paginationContainer.classList.add('is-hidden');
};
rondomGallery();

// const toSearch = document.getElementById('search');
// toSearch.scrollIntoView({behavior: 'smooth'}, true)
