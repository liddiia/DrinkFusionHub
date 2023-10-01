
import { modalBtn } from "./modal-btn";
 export const renderIngidients = (arr, container) => {
	const markup = arr.map(item => 
		`<h2 class="ingridient-title" data-id-igridient =${item._id}>${item.title}</h2>
		<p class="ingridient-type" >${item.type}</p>
		<p class="ingridient-discription" onerror = "this.onerror=null;this.textContent='Unfortunately we dont have this discription';">${item.description}</span>
		 <ul class="ingidient-dicr-list">
		 <li class="ingridient-discription-item"> Type: ${item.type}</li>
		 <li class="ingridient-discription-item">Country of origin: ${item.country}</li>
		 <li class="ingridient-discription-item">Alcohol by volume: ${item.abv}%</li>
		 <li class="ingridient-discription-item">Flavour:  ${item.flavour}</li></ul>${modalBtn}`
	).join("");

	container.innerHTML = markup;
}
