
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import { modal, modalCloseBtn} from './utilities/refs'
import { showIngridient } from './modal-igridients';
import { COCTAILMODAL_ID } from './utilities/local-storage';

export const closeModalHelper = (event) => {
	modal.classList.toggle("is-open");
	enableBodyScroll(event);
}

export function modalCall ( el, renderFunc){
  const openModal = (e) => {
    const { target } = e;
  
    const idDrink = target.dataset.idDrink;
    console.log(idDrink);
    if (target.classList.contains("cocktail-learn-more-btn")) {
      setTimeout(modal.classList.toggle("is-open"), 500)
      renderFunc(idDrink);
      disableBodyScroll(e);
  
      localStorage.setItem(COCTAILMODAL_ID, idDrink)
    }
    const closeEscape = (e => {
      if (e.key === 'Escape') {
        setTimeout(closeModalHelper(e), 500);
        document.removeEventListener("keydown", closeEscape);
      }
    })
    document.addEventListener("keydown", closeEscape)
  }
  const closeModal = (e) => {
    const { target } = e;
    
    if (target === modalCloseBtn || target === modal|| target.tagName === "A") {
      if (target.tagName === "A"&& target.classList.contains("ingredient-link")) {
        e.preventDefault();
       
        const ingrId = target.dataset.idIngridient;
        showIngridient(ingrId)
       return
      }else{
        console.log(target.parentNode);
        setTimeout(closeModalHelper(target), 500)
       
      }
      
      
    }
  }
  
  el.addEventListener("click", openModal);
  
  modal.addEventListener("click", closeModal);
  }
