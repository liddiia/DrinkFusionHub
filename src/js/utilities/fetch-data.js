import axios from 'axios';

const BASE_URL = 'https://drinkify.b.goit.study/api/v1/';
const RANDOM_ENDPOINT = `cocktails/?r=`;
const COCKT_SEARCH = `cocktails/search/?`;
const COCKT_LOOKUP_ID = `cocktails/lookup/?id=`;
const INGRED_ENDPOINT = `ingredients/`;
const INGRED_SEARCH_NAME = `ingredients/search/?`;

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
    console.error(error);
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
    console.error(error);
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
