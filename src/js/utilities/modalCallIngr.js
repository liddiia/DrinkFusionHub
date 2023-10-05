
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { modal, modalCloseBtn } from './refs'



export const closeModalHelper = (event) => {
  modal.classList.toggle("is-open");
  enableBodyScroll(event);
}

export function modalCallIngr(el, renderFunc) {
  const openModal = (e) => {

    const { target } = e;
    console.log(target);
    const idIngridient = target.dataset.idIgridient;
    console.log(idIngridient);
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

      }
    
  }

  el.addEventListener("click", openModal);

  modal.addEventListener("click", closeModal);
}
