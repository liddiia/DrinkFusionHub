import{f as k,g as $,b as A,d as C,c as q}from"./fetch-data-0038364b.js";const et={favoritesList:document.querySelector(".fav-cocktails__list"),favoritesTitle:document.querySelector(".fav-cocktails__title"),favoriteSearchItem:document.querySelector(".fav-cocktails__item"),prewButton:document.querySelector(".prew-button"),nextButton:document.querySelector(".next-button"),pagContainer:document.querySelector(".pagination"),favNococktails:document.querySelector(".fav-nofav__cock"),mainCocktailsGallery:document.querySelector(".gallery .gallery-list"),paginationContainer:document.querySelector(".pagination-buttons-container"),leftPagBtn:document.querySelectorAll("[data-action='leftPag']"),rightPagBtn:document.querySelectorAll("[data-action='rightPag']"),paginationNumberBtnsContainer:document.querySelector(".number-buttons-container")},P={modal:document.querySelector("[data-modal]"),modalCloseBtn:document.querySelector("[data-modal-close]"),modalInfoEl:document.querySelector(".modal-info"),coctailModalBackBtn:document.querySelector(".cocktail-modal__back-button")},{modal:c,modalCloseBtn:D,modalInfoEl:S,coctailModalBackBtn:ot}=P;function M(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}else return Array.from(e)}var y=!1;if(typeof window<"u"){var h={get passive(){y=!0}};window.addEventListener("testPassive",null,h),window.removeEventListener("testPassive",null,h)}var m=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),r=[],v=!1,I=-1,d=void 0,l=void 0,s=void 0,T=function(t){return r.some(function(o){return!!(o.options.allowTouchMove&&o.options.allowTouchMove(t))})},g=function(t){var o=t||window.event;return T(o.target)||o.touches.length>1?!0:(o.preventDefault&&o.preventDefault(),!1)},x=function(t){if(s===void 0){var o=!!t&&t.reserveScrollBarGap===!0,n=window.innerWidth-document.documentElement.clientWidth;if(o&&n>0){var i=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);s=document.body.style.paddingRight,document.body.style.paddingRight=i+n+"px"}}d===void 0&&(d=document.body.style.overflow,document.body.style.overflow="hidden")},E=function(){s!==void 0&&(document.body.style.paddingRight=s,s=void 0),d!==void 0&&(document.body.style.overflow=d,d=void 0)},F=function(){return window.requestAnimationFrame(function(){if(l===void 0){l={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var t=window,o=t.scrollY,n=t.scrollX,i=t.innerHeight;document.body.style.position="fixed",document.body.style.top=-o,document.body.style.left=-n,setTimeout(function(){return window.requestAnimationFrame(function(){var a=i-window.innerHeight;a&&o>=i&&(document.body.style.top=-(o+a))})},300)}})},O=function(){if(l!==void 0){var t=-parseInt(document.body.style.top,10),o=-parseInt(document.body.style.left,10);document.body.style.position=l.position,document.body.style.top=l.top,document.body.style.left=l.left,window.scrollTo(o,t),l=void 0}},H=function(t){return t?t.scrollHeight-t.scrollTop<=t.clientHeight:!1},R=function(t,o){var n=t.targetTouches[0].clientY-I;return T(t.target)?!1:o&&o.scrollTop===0&&n>0||H(o)&&n<0?g(t):(t.stopPropagation(),!0)},N=function(t,o){if(!t){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!r.some(function(i){return i.targetElement===t})){var n={targetElement:t,options:o||{}};r=[].concat(M(r),[n]),m?F():x(o),m&&(t.ontouchstart=function(i){i.targetTouches.length===1&&(I=i.targetTouches[0].clientY)},t.ontouchmove=function(i){i.targetTouches.length===1&&R(i,t)},v||(document.addEventListener("touchmove",g,y?{passive:!1}:void 0),v=!0))}},j=function(t){if(!t){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}r=r.filter(function(o){return o.targetElement!==t}),m&&(t.ontouchstart=null,t.ontouchmove=null,v&&r.length===0&&(document.removeEventListener("touchmove",g,y?{passive:!1}:void 0),v=!1)),m?O():E()};const B="modalcoctail",w=e=>{c.classList.toggle("is-open"),j(e)};function Y(e,t){const o=i=>{const{target:a}=i;console.log(a);const f=a.dataset.idDrink;a.classList.contains("cocktail-learn-more-btn")&&(setTimeout(c.classList.toggle("is-open"),500),t(f),N(i),localStorage.setItem(B,f));const p=b=>{b.key==="Escape"&&(setTimeout(w(b),500),document.removeEventListener("keydown",p))};document.addEventListener("keydown",p)},n=i=>{const{target:a}=i;if(a===D||a===c||a.tagName==="A"){if(a.tagName==="A"&&a.classList.contains("ingredient-link")){i.preventDefault(),console.log(a);const f=a.dataset.idIngridient;J(f);return}setTimeout(w(a),500)}};e.addEventListener("click",o),c.addEventListener("click",n)}function G(e,t){const o=e.map(n=>`

    <div class="cocktail-modal">

     <div class="cocktail-modal-wrapper">
     <img class="cocktail-modal__image" src="${n.drinkThumb}" onerror = "this.onerror=null;this.src='/img/no-cocktails/no-cocktails@1x.png';" alt="${n.drink}" loading="lazy" width="295" >
      <div class="cocktail-modal-wrapper-descr">
      <h2 class="cocktail-modal__title">${n.drink}</h2>
      <h3 class="cocktail-modal__subtitle">Ingredients:</h3>
      <p class="cocktail-modal__per-cocktail">Per cocktail</p>
     <ul class="cocktail-modal__ingredients">
      ${n.ingredients.map(i=>`<li class="cocktail-modal__ingredient-item">
               <a href="#modalinfo" data-id-ingridient=${i.ingredientId} class="ingredient-link"> ${W(i)} - ${i.title}</a>
             </li>`).join("")}
    </ul>
    </div>
    </div>
      <h3 class="cocktail-modal__subtitle">Instructions:</h3>
      <p class="cocktail-modal__recipe">${n.instructions}</p>
      <ul class="cocktail-modal__buttons">
    <li class="ingredient-button-item"> ${K(n._id)}</li>
      <li class="ingredient-button-item">
      <button type="button" class="cocktail-modal__back-button cocktail-modal-back" data-action="back"" aria-label="back">
        BACK
      </button>
      </li>
      </ul>
    </div>

  `).join("");t.innerHTML=o}function K(e){return k&&!k.includes(e)?`<button type="button" class="cocktail-modal__favorite-button" data-action="favorite" data-id-coctail=${e}>
    Add to Favorites
   </button>`:`<button type="button" class="cocktail-modal__favorite-button" data-action="remfromfavorite" data-id-coctail=${e}>
    Remove from Favorite
  </button>`}function W(e){return e.hasOwnProperty("measure")?e.measure:"🧐"}const L=async e=>{try{const t=await $(e);G(t,S)}catch(t){console.log(t)}},z=document.querySelector(".gallery-list");Y(z,L);const J=async e=>{try{const t=await q(e);X(t,S)}catch(t){console.log(t)}},_="ingridients";let u=JSON.parse(localStorage.getItem("ingridients"))||[];const U=e=>{if(e.target.classList.contains("ingridient-modal-favorite-btn")){const t=e.target;let o=t.dataset.action,n=t.dataset.idIngridientBtn,i=u.indexOf(n);o==="addtofav"&&i===-1?(t.textContent="Remove from favorites",t.dataset.action="removefromfav",A(n,u,_)):(t.textContent="Add to favorites",t.dataset.action="addtofav",C(n,u,_))}},V=e=>{if(e.target.classList.contains("ingridient-modal-back-btn")){const t=localStorage.getItem(B);L(t);return}};c.addEventListener("click",U);c.addEventListener("click",V);const X=(e,t)=>{const o=e.map(n=>`<h2 class="ingridient-title" data-id-igridient =${n._id}>${n.title}</h2>
		<p class="ingridient-type" >${n.type}</p>
		<p class="ingridient-discription"><span class="ingr-title">${n.title}: </span>${Z(n.description)}</p>
		 <ul class="ingidient-dicr-list">
		 <li class="ingridient-discription-item"> Type: ${n.type}</li>
		 <li class="ingridient-discription-item">Country of origin: ${n.country}</li>
		 <li class="ingridient-discription-item">Alcohol by volume: ${n.abv}%</li>
		 <li class="ingridient-discription-item">Flavour:  ${n.flavour}</li></ul><ul class="cocktail-modal__buttons">
		 <li class="ingredient-button-item"> ${Q(n._id)}</li>
		   <li class="ingredient-button-item">
		   <button type="button" class="cocktail-modal__back-button ingridient-modal-back-btn" id="backButton" aria-label="back">
			 BACK
		   </button>
		   </li>
		   </ul>`).join("");t.innerHTML=o};function Q(e){return u&&!u.includes(e)?`<button type="button" class="cocktail-modal__favorite-button ingridient-modal-favorite-btn"  data-action="addtofav" data-id-ingridient-btn=${e}>
    Add to Favorites
    </button>`:`<button type="button" class="cocktail-modal__favorite-button ingridient-modal-favorite-btn" data-action="removefromfav" data-id-ingridient-btn=${e}>
         Remove from favorites
          </button>`}function Z(e){return e||"Unfortunately we dont have it yet"}export{w as c,c as m,et as r};
