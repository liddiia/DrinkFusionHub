
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { modal, modalCloseBtn } from './refs'
import { ingredients } from './local-storage';
import { renderFavIngPagination } from './ingredients-pagination';


export const closeModalHelper = (event) => {
  modal.classList.toggle("is-open");
  enableBodyScroll(event);
}

export function modalCallIngr(el, renderFunc) {
  const openModal = (e) => {

    const { target } = e;

    const idIngridient = target.dataset.idIgridient;

    if (target.classList.contains("cocktail-learn-more-btn")) {
      setTimeout(modal.classList.toggle("is-open"), 500)
      renderFunc(idIngridient);
      disableBodyScroll(e);
      
      
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

    if (target === modalCloseBtn || target === modal|| target.classList.contains("ingridient-modal-back-btn") ) {
          closeModalHelper(target)
          renderFavIngPagination(ingredients)
      }
    
  }

  el.addEventListener("click", openModal);

  modal.addEventListener("click", closeModal);
}
