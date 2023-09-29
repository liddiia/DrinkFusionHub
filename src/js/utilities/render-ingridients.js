const ingrCardModalEl ={
	ingrAddBtn:document.querySelectorAll(".ingridient-add"),
	ingrBackBtn:document.querySelectorAll

}
const renderIngidients = (array, container) => {
	const markup = array.map(e => {
		`<h2 class="ingridient-title" data-id-igridient ="${e._id}">${e.title}</h2><h3 class="ingridient-type" >${e.type}</h3><p class="ingridient-discription">${e.description}</p> <ul class="ingidient-dicr-list"><li class="ingridient-discription-item"> Type:${e.type}</li><li class="ingridient-discription-item">Country of origin: ${e.country}</li><li class="ingridient-discription-item">Alcohol by volume: ${e.abv}</li><li class="ingridient-discription-item">Flavour : ${e.flavour}</li></ul><ul class="ingridient-button-list"><li class="ingridient-button-item"><button class="ingridient-add">Add to favorite</button></li><li class="ingridient-button-item"><button class="ingridient-back">back</button></li></ul>`
	}).join("");

	container.innerHTML=markup;
}
