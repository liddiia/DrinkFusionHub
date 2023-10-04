import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { didntFindCoctails } from '../no-cocktails';

const BASE_URL = 'https://drinkify.b.goit.study/api/v1/';
const RANDOM_ENDPOINT = `cocktails/?r=`;
const COCKT_SEARCH = `cocktails/search/?`;
const COCKT_LOOKUP_ID = `cocktails/lookup/?id=`;
const INGRED_ENDPOINT = `ingredients/`;
const INGRED_SEARCH_NAME = `ingredients/search/?`;

const contNoPhotoEl = document.querySelector('.container-non-photos');
const titleGalleryEl = document.querySelector('.gallery-header');
const galleryEl = document.querySelector('.gallery-list');
const paginContainer = document.querySelector('.pagination-buttons-container');

export async function fetchRandomCocktails(num) {
  const response = await fetch(`${BASE_URL}${RANDOM_ENDPOINT}${num}`);
  const responseJson = await response.json();
  return lookupMultipleCocktails(responseJson);
}

async function lookupMultipleCocktails(arr) {
  try {
    const getByID = arr.map(async data => {
      const res = await fetch(`${BASE_URL}${COCKT_LOOKUP_ID}${data._id}`);
      return res.json();
    });

    const cockts = await Promise.all(getByID);
    return cockts.map(data => data[0]);
  } catch (error) {
    console.error(error);
  }
}

export async function fetchCocktailByName(query) {
  const params = new URLSearchParams({
    s: query,
  });

  try {
    const response = await axios.get(`${BASE_URL}${COCKT_SEARCH}${params}`);
    return response.data;
  } catch (error) {
    console.log(error);
    galleryEl.innerHTML = '';
    paginContainer.classList.add('isHidden');
    didntFindCoctails(contNoPhotoEl, titleGalleryEl);
    Notify.failure('Oops, cocktail not found, try another one!');
  }
}

export async function fetchCocktailByFirstLetter(query) {
  const params = new URLSearchParams({
    f: query,
  });

  try {
    const response = await axios.get(`${BASE_URL}${COCKT_SEARCH}${params}`);
    return response.data;
  } catch (error) {
    console.log(error);
    galleryEl.innerHTML = '';
    paginContainer.classList.add('isHidden');
    didntFindCoctails(contNoPhotoEl, titleGalleryEl);
    Notify.failure('Oops, cocktail not found, try another one!');
  }
}

//* Modals *//
export async function getCocktail(id) {
  return await axios.get(`${BASE_URL}${COCKT_LOOKUP_ID}${id}`).then(res => {
    if (res.status !== 200) {
      throw new Error(res.statusText);
    }
    return res.data;
  });
}

export async function getIngredient(ingredName) {
  const params = new URLSearchParams({
    s: ingredName,
  });
  return await axios
    .get(`${BASE_URL}${INGRED_SEARCH_NAME}${params}`)
    .then(res => {
      if (res.status !== 200) {
        throw new Error(res.statusText);
      }
      return res.data;
    });
}

export const fetchIngredient = async id => {
  const response = await fetch(`${BASE_URL}${INGRED_ENDPOINT}${id}`);
  const responseJson = await response.json();
  return responseJson;
};
