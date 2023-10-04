import{i as u,f as s,g as D,a as B,I as w,d as L,b as C,c as x,C as S}from"./icons-34fc0dad.js";const it={favoritesList:document.querySelector(".fav-cocktails__list"),favoritesTitle:document.querySelector(".fav-cocktails__title"),favoriteSearchItem:document.querySelector(".fav-cocktails__item"),prewButton:document.querySelector(".prew-button"),nextButton:document.querySelector(".next-button"),pagContainer:document.querySelector(".pagination"),favNococktails:document.querySelector(".fav-nofav__cock"),mainCocktailsGallery:document.querySelector(".gallery .gallery-list"),paginationContainer:document.querySelector(".pagination-buttons-container"),leftPagBtn:document.querySelectorAll("[data-action='leftPag']"),rightPagBtn:document.querySelectorAll("[data-action='rightPag']"),paginationNumberBtnsContainer:document.querySelector(".number-buttons-container")},E={modal:document.querySelector("[data-modal='modal']"),modalCloseBtn:document.querySelector("[data-close='close']"),modalInfoEl:document.querySelector(".modal-info"),coctailModalBackBtn:document.querySelector(".cocktail-modal__back-button")},{modal:l,modalCloseBtn:M,modalInfoEl:$,coctailModalBackBtn:at}=E;function _(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}else return Array.from(e)}var b=!1;if(typeof window<"u"){var I={get passive(){b=!0}};window.addEventListener("testPassive",null,I),window.removeEventListener("testPassive",null,I)}var m=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),c=[],v=!1,A=-1,f=void 0,r=void 0,g=void 0,q=function(t){return c.some(function(o){return!!(o.options.allowTouchMove&&o.options.allowTouchMove(t))})},y=function(t){var o=t||window.event;return q(o.target)||o.touches.length>1?!0:(o.preventDefault&&o.preventDefault(),!1)},F=function(t){if(g===void 0){var o=!!t&&t.reserveScrollBarGap===!0,n=window.innerWidth-document.documentElement.clientWidth;if(o&&n>0){var i=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);g=document.body.style.paddingRight,document.body.style.paddingRight=i+n+"px"}}f===void 0&&(f=document.body.style.overflow,document.body.style.overflow="hidden")},O=function(){g!==void 0&&(document.body.style.paddingRight=g,g=void 0),f!==void 0&&(document.body.style.overflow=f,f=void 0)},H=function(){return window.requestAnimationFrame(function(){if(r===void 0){r={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var t=window,o=t.scrollY,n=t.scrollX,i=t.innerHeight;document.body.style.position="fixed",document.body.style.top=-o,document.body.style.left=-n,setTimeout(function(){return window.requestAnimationFrame(function(){var a=i-window.innerHeight;a&&o>=i&&(document.body.style.top=-(o+a))})},300)}})},R=function(){if(r!==void 0){var t=-parseInt(document.body.style.top,10),o=-parseInt(document.body.style.left,10);document.body.style.position=r.position,document.body.style.top=r.top,document.body.style.left=r.left,window.scrollTo(o,t),r=void 0}},N=function(t){return t?t.scrollHeight-t.scrollTop<=t.clientHeight:!1},j=function(t,o){var n=t.targetTouches[0].clientY-A;return q(t.target)?!1:o&&o.scrollTop===0&&n>0||N(o)&&n<0?y(t):(t.stopPropagation(),!0)},K=function(t,o){if(!t){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!c.some(function(i){return i.targetElement===t})){var n={targetElement:t,options:o||{}};c=[].concat(_(c),[n]),m?H():F(o),m&&(t.ontouchstart=function(i){i.targetTouches.length===1&&(A=i.targetTouches[0].clientY)},t.ontouchmove=function(i){i.targetTouches.length===1&&j(i,t)},v||(document.addEventListener("touchmove",y,b?{passive:!1}:void 0),v=!0))}},Y=function(t){if(!t){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}c=c.filter(function(o){return o.targetElement!==t}),m&&(t.ontouchstart=null,t.ontouchmove=null,v&&c.length===0&&(document.removeEventListener("touchmove",y,b?{passive:!1}:void 0),v=!1)),m?R():O()};const G=(e,t)=>{const o=e.map(n=>`<h2 class="ingridient-title" data-id-igridient =${n._id}>${n.title}</h2>
		<p class="ingridient-type" >${n.type}</p>
		<p class="ingridient-discription"><span class="ingr-title">${n.title}: </span>${z(n.description)}</p>
		 <ul class="ingidient-dicr-list">
		 <li class="ingridient-discription-item"> Type: ${n.type}</li>
		 <li class="ingridient-discription-item">Country of origin: ${n.country}</li>
		 <li class="ingridient-discription-item">Alcohol by volume: ${n.abv}%</li>
		 <li class="ingridient-discription-item">Flavour:  ${n.flavour}</li></ul><ul class="cocktail-modal-buttons">
		 <li class="ingredient-button-item"> ${W(n._id)}</li>
		   <li class="ingredient-button-item">
		   <button type="button" class="cocktail-modal-back-button ingridient-modal-back-btn">
			 BACK
		   </button>
		   </li>
		   </ul>`).join("");t.innerHTML=o};function W(e){return u&&!u.includes(e)?`<button type="button" class="cocktail-modal-favorite-button"  data-typeingr ="ingr-btn" data-localingr="ingraddfav" data-id-ingridient-btn=${e}>
    Add to Favorites
    </button>`:`<button type="button" class="cocktail-modal-favorite-button" data-typeingr ="ingr-btn" data-localingr="igrremovefav" data-id-ingridient-btn=${e}>
         Remove from favorites
          </button>`}function z(e){return e||"Unfortunately we dont have it yet"}function U(e,t){const o=e.map(n=>`

    <div class="cocktail-modal">

     <div class="cocktail-modal-wrapper">
     <img class="cocktail-modal-image" src="${n.drinkThumb}" onerror = "this.onerror=null;this.src='/img/no-cocktails/no-cocktails@1x.png';" alt="${n.drink}" loading="lazy" width="295" >
      <div class="cocktail-modal-wrapper-descr">
      <h2 class="cocktail-modal-title">${n.drink}</h2>
      <h3 class="cocktail-modal-subtitle">Ingredients:</h3>
      <p class="cocktail-modal-per-cocktail">Per cocktail</p>
     <ul class="cocktail-modal-ingredients">
      ${n.ingredients.map(i=>`<li class="cocktail-modal-ingredient-item">
               <a href="#modalinfo" data-id-ingridient=${i.ingredientId} class="ingredient-link"> ${X(i)} - ${i.title}</a>
             </li>`).join("")}
    </ul>
    </div>
    </div>
      <h3 class="cocktail-modal-subtitle">Instructions:</h3>
      <p class="cocktail-modal-recipe">${n.instructions}</p>
      <ul class="cocktail-modal-buttons">
    <li class="ingredient-button-item"> ${V(n._id)}</li>
      <li class="ingredient-button-item">
      <button type="button" class="cocktail-modal-back-button cocktail-modal-back" data-action="back"" aria-label="back">
        BACK
      </button>
      </li>
      </ul>
    </div>

  `).join("");t.innerHTML=o}function V(e){return s&&!s.includes(e)?`<button type="button" class="cocktail-modal-favorite-button" data-localcockt="favorite" data-typecockt="coct-btn" data-id-coctail=${e}>
    Add to Favorites
   </button>`:`<button type="button" class="cocktail-modal-favorite-button" data-typecockt="coct-btn" data-localcockt="remfromfavorite" data-id-coctail=${e}>
    Remove from Favorite
  </button>`}function X(e){return e.hasOwnProperty("measure")?e.measure:"🧐"}const T=document.querySelector(".gallery-list"),P=async e=>{try{const t=await D(e);U(t,$)}catch(t){console.log(t)}};T&&tt(T,P);const J=async e=>{try{const t=await x(e);G(t,$)}catch(t){console.log(t)}},Q=e=>{if(e.currentTarget===e.target||e.target.dataset.typeingr!=="ingr-btn")return;const t=e.target;console.log("BTN",t);let o=t.dataset.idIngridientBtn;console.log("ingrID",o);let n=t.dataset.localingr;console.log("ingraction",n);let i=u.indexOf(o);n==="ingraddfav"&&i===-1?(n="igrremovefav",t.textContent="Remove from favorites",B(o,u,w)):(n="ingraddfav",t.textContent="Add to Favorites",L(o,u,w))},Z=e=>{if(e.target.classList.contains("ingridient-modal-back-btn")){const t=localStorage.getItem(C);P(t);return}};l.addEventListener("click",Q);l.addEventListener("click",Z);const p=e=>{l.classList.toggle("is-open"),Y(e)};function tt(e,t){const o=i=>{const{target:a}=i,d=a.dataset.idDrink;console.log(d),a.classList.contains("cocktail-learn-more-btn")&&(setTimeout(l.classList.toggle("is-open"),500),t(d),K(i),localStorage.setItem(C,d));const k=h=>{h.key==="Escape"&&(p(h),document.removeEventListener("keydown",k))};document.addEventListener("keydown",k)},n=i=>{const{target:a}=i;if(a===M||a===l||a.tagName==="A")if(a.tagName==="A"&&a.classList.contains("ingredient-link")){i.preventDefault();const d=a.dataset.idIngridient;J(d);return}else console.log(a.parentNode),p(a)};e.addEventListener("click",o),l.addEventListener("click",n)}const et=e=>{if(e.currentTarget===e.target||e.target.dataset.typecockt!=="coct-btn")return;const t=e.target;console.log(t);let o=t.dataset.idCoctail;console.log(o);let n=t.dataset.localcockt,i=s.indexOf(o);n==="favorite"&&i===-1?(t.textContent="Remove from favorites",n="remfromfavorite",B(o,s,S),document.getElementById(o).classList.add("is-favorite"),console.log(s)):(t.textContent="Add to favorites",n="favorite",L(o,s,S),document.getElementById(o).classList.remove("is-favorite"))},ot=e=>{e.target.classList.contains("cocktail-modal-back")&&setTimeout(p(e.target),500)};l.addEventListener("click",et);l.addEventListener("click",ot);export{it as a,tt as m,P as r};
