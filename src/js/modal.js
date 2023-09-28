import { disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';
const galleryEl= document.querySelector(".gallery-list");
const modalEl={
	modal:document.querySelector("[data-modal]"),
	modalCloseBtn:document.querySelector("[data-modal-close]"),
	modalInfoEl:document.querySelector(".modal-info")
};
const {modal, modalCloseBtn, modalInfoEl}=modalEl;

const openModal= (e)=>{
	if(!e.target.classList.contains("button-more")){
	return
	}
	const open =()=>{
		modal.classList.toggle("is-open");
		getCocktail(e.target.dataset.idDrink).then(rez=>{
			createMarkupCartoFav(rez, modalInfoEl)
			
		})
		disableBodyScroll(e)
	}
	
	setTimeout(open, 500)
}
const closeModal = (e)=>{
		
	if(e.target===modalCloseBtn.firstChild || e.target===modal){
		const close =()=>{
			modal.classList.toggle("is-open");
			enableBodyScroll(e);	
		}
		
		setTimeout(close, 500)
	}else{return}
	
}
galleryEl.addEventListener("click", openModal)
modal.addEventListener("click", closeModal)
