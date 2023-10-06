import{r as b,s as w,m as k,d as F,a as G,l as h,e as R,g as U,n as V,I as W,b as j}from"./icons-f4eabd23.js";function B(a){b.favoriteIngPaginationContainer.innerHTML=`<button
  class="left-pag-btn pagination-button-item"
  type="button"
  id="left-pag-btn"
  data-action="leftPag"
>
<svg
class="page-left-icon-container"
id="left-pag-btn-svg"
data-action="leftPag"
>
<use
  class="page-left-icon"
  href="${w}#icon-arrow_left"
  data-action="leftPag"
></use>
</svg>
</button>
<div class="number-buttons-container"></div>
<button
  class="right-pag-btn pagination-button-item"
  type="button"
  id="right-pag-btn"
  data-action="rightPag"
>
<svg
class="page-right-icon-container"
id="right-pag-btn-svg"
data-action="rightPag"
>
<use
  class="page-right-icon"
  href="${w}#icon-arrow_right"
  data-action="rightPag"
></use>
</svg>
</button>`;const n=document.querySelector(".number-buttons-container"),d=document.getElementById("left-pag-btn"),s=document.getElementById("right-pag-btn");n.innerHTML="";let g=6,t=0,f=null,e=[],c=[],m=[],y=[],v=[],u=[],P=[],i,p;function M(){return!(window.innerWidth>=768)}let A=a.length;A<=g?b.favoriteIngPaginationContainer.classList.add("is-hidden"):b.favoriteIngPaginationContainer.classList.remove("is-hidden");let r=Math.ceil(A/g);const L=S(a,g);console.log("sortedCardsArr[0]",L[0]),T(d,s);function S(l,o){return l.reduce((I,q,D)=>(D%o===0&&I.push([]),I[I.length-1].push(q),I),[])}N(L[0]),d.addEventListener("click",E),s.addEventListener("click",E),n.addEventListener("click",E);function x(){f&&f.classList.remove("pagination-button-item-active"),f=e[t],f.classList.add("pagination-button-item-active")}function _(){switch(n.innerHTML="",c=e.slice(0,3),m=e.slice(0,1),y=e.slice(0,4),v=e.slice(e.length-3,e.length),u=e.slice(e.length-1,e.length),P=e.slice(e.length-4,e.length),n.innerHTML="",i=document.createElement("button"),i.textContent="...",i.setAttribute("disabled",""),i.classList.add("pagination-button-item"),p=document.createElement("button"),p.textContent="...",p.setAttribute("disabled",""),p.setAttribute("data-disable","true"),p.classList.add("pagination-button-item"),M()){case!0:{e.length<=5?n.append(...e):t===0||t===1?n.append(...c,i,...u):t===2?n.append(...y,i,...u):t===r-3?n.append(...m,i,...P):t===r-2||t===r-1?n.append(...m,i,...v):t>=3&&t<=r-4&&n.append(...m,i,p,e[t],i,...u);break}case!1:{e.length<=7?n.append(...e):t===0||t===1?n.append(...c,i,...v):t===2?n.append(...y,i,...u):t===r-3?n.append(...m,i,...P):t===r-2||t===r-1?n.append(...c,i,...v):t>=3&&t<=r-4&&n.append(...m,i,p,...e.slice(t-1,t+2),i,...u);break}}}function E(l){C.classList.remove("pagination-button-item-active");let o=l.target.dataset.action;switch(b.favIngredientsList.innerHTML="",o){case"leftPag":t-=1,t<0&&(t=0);break;case"rightPag":t+=1,t>=r&&(t=r-1);break;default:isNaN(Number(o))||(t=Number(o-1));break}N(L[t]),console.log("sortedCardsArr[currentPageIndex]",L[t]),_(),x(),T(d,s)}function T(l,o){t===0?l.classList.add("is-hidden"):l.classList.remove("is-hidden"),t===r-1?o.classList.add("is-hidden"):o.classList.remove("is-hidden")}for(let l=1;l<=r;l++){const o=document.createElement("button");o.textContent=l,o.setAttribute("data-action",l),o.classList.add("pagination-button-item"),e.push(o)}switch(c=e.slice(0,3),v=e.slice(e.length-3,e.length),u=e.slice(e.length-1,e.length),i=document.createElement("button"),i.textContent="...",i.setAttribute("disabled",""),i.classList.add("pagination-button-item"),n.innerHTML="",M()){case!0:{e.length<=5?n.append(...e):(t===0||t===1)&&n.append(...c,i,...u);break}case!1:{e.length<=7?n.append(...e):(t===0||t===1)&&n.append(...c,i,...v);break}}const C=document.querySelector('button[data-action="1"]');C&&C.classList.add("pagination-button-item-active")}const $=a=>{k.classList.toggle("is-open"),R(a)};function z(a,n){const d=g=>{const{target:t}=g;console.log(t);const f=t.dataset.idIgridient;console.log(f),t.classList.contains("cocktail-learn-more-btn")&&(setTimeout(k.classList.toggle("is-open"),500),n(f),F(g));const e=c=>{c.key==="Escape"&&($(c),document.removeEventListener("keydown",e))};document.addEventListener("keydown",e)},s=g=>{const{target:t}=g;(t===G||t===k||t.classList.contains("ingridient-modal-back-btn"))&&($(t),B(h))};a.addEventListener("click",d),k.addEventListener("click",s)}const J=document.querySelector(".container-non-photos"),H=document.querySelector(".fav-ingredients-cocktails-list"),N=a=>{console.log("ids",a),b.favIngredientsList.innerHTML="",!a||a.length===0?J.classList.add("active"):a.forEach(async n=>{const d=await V(n);if(!d[0])return;const s=d[0];b.favIngredientsList.innerHTML+=` <li class= "fav-ingr-item">
      <h2 class="fav-ingridient-title" data-id-igridient =${s._id}>${s.title}</h2>

  <p class="fav-ingridient-type" >${s.type}</p>

  <p class="fav-ingridient-discription"><span class="ingr-title">${s.title}: </span>${K(s.description)}</p>


  <div class="cic-btn-wrapper">
  <button class="cocktail-learn-more-btn" data-id-igridient="${s._id}">learn more
  </button>

  <button class="cocktail-rem-fav-btn fav-ingred-remove-button" id ="${s._id}" data-type="user-action" data-action="remfromfav">
  <svg
  class="remove-favorites-btn-icon"
  aria-label="remove from favorites button"
  >
  <use
  class="remove-icon"
  href="${w}#icon-remove"
  ></use>
  </svg>
  </button>
  </div>
  </li>`})};function K(a){return a||"Sorry we dont have it yet"}console.log("ingredients",h);B(h);H&&z(H,j);b.favIngredientsList.addEventListener("click",a=>{if(a.target.classList.contains("fav-ingred-remove-button")){const n=a.target.getAttribute("id");console.log(n),U(n,h,W),B(h)}});
