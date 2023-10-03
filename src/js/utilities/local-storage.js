export const COCKTAIL_ID = 'favorites';
export let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
export const INGRIDIENT_ID = "ingridients";
export let ingredients = JSON.parse(localStorage.getItem('ingridients')) || [];
export const COCTAILMODAL_ID = "modalcoctail";

export function addToLocalStorage(id, arr, keyLS) {
  arr.push(id);
  localStorage.setItem(keyLS, JSON.stringify(arr));
}

export function deleteFromLocalStorage(id, arr, keyLS) {
  let index = arr.indexOf(id);
  console.log(index);
  if (index === -1) {
    return;
  }
  arr.splice(index, 1);
  localStorage.setItem(keyLS, JSON.stringify(arr));
}
