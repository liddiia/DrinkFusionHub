
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import { modal, modalCloseBtn } from './refs'
import { showIngridient } from '../modal-igridients';
import { COCTAILMODAL_ID } from './local-storage';
import { backIngridients } from '../modal-igridients';
export const closeModalHelper = (event) => {
  modal.classList.toggle("is-open");
  enableBodyScroll(event);
}

export function modalCall(el, renderFunc) {
  const openModal = (e) => {

    const { target } = e;
    console.log(target);
    const idDrink = target.dataset.idDrink;
    console.log(idDrink);
    if (target.classList.contains("cocktail-learn-more-btn")) {
      setTimeout(modal.classList.toggle("is-open"), 500)
      renderFunc(idDrink);
      disableBodyScroll(e);
      console.log(modal);
      localStorage.setItem(COCTAILMODAL_ID, idDrink)
    }
    const closeEscape = (e => {
      if (e.key === 'Escape') {
        closeModalHelper(e);
        document.removeEventListener("keydown", closeEscape);
      }
    })
    document.addEventListener("keydown", closeEscape)
  }
  const closeModal = (e) => {
    const { target } = e;

    if (target === modalCloseBtn || target === modal || target.tagName === "A") {
      if (target.tagName === "A" && target.classList.contains("ingredient-link")) {
        e.preventDefault();

        const ingrId = target.dataset.idIngridient;
        showIngridient(ingrId)
        modal.addEventListener("click", backIngridients);

        return
      } else {
        console.log(target.parentNode);
        closeModalHelper(target)

      }


    }
  }

  el.addEventListener("click", openModal);

  modal.addEventListener("click", closeModal);
}
