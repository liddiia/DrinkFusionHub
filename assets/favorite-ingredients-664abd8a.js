import{r as p,s as C,m as L,d as F,a as G,l as I,e as R,g as U,n as V,I as W,b as j}from"./icons-5207b62b.js";function w(a){p.favoriteIngPaginationContainer.innerHTML=`<button
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
  href="${C}#icon-arrow_left"
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
  href="${C}#icon-arrow_right"
  data-action="rightPag"
></use>
</svg>
</button>`;const n=document.querySelector(".number-buttons-container"),d=document.getElementById("left-pag-btn"),s=document.getElementById("right-pag-btn");n.innerHTML="";let g=6,t=0,b=null,e=[],l=[],m=[],k=[],v=[],u=[],y=[],i,f;function B(){return!(window.innerWidth>=768)}let M=a.length;M<=g?p.favoriteIngPaginationContainer.classList.add("is-hidden"):p.favoriteIngPaginationContainer.classList.remove("is-hidden");let r=Math.ceil(M/g);const T=S(a,g);$(d,s);function S(c,o){return c.reduce((h,q,D)=>(D%o===0&&h.push([]),h[h.length-1].push(q),h),[])}A(T[0]),d.addEventListener("click",E),s.addEventListener("click",E),n.addEventListener("click",E);function _(){b&&b.classList.remove("pagination-button-item-active"),b=e[t],b.classList.add("pagination-button-item-active")}function x(){switch(n.innerHTML="",l=e.slice(0,3),m=e.slice(0,1),k=e.slice(0,4),v=e.slice(e.length-3,e.length),u=e.slice(e.length-1,e.length),y=e.slice(e.length-4,e.length),n.innerHTML="",i=document.createElement("button"),i.textContent="...",i.setAttribute("disabled",""),i.classList.add("pagination-button-item"),f=document.createElement("button"),f.textContent="...",f.setAttribute("disabled",""),f.setAttribute("data-disable","true"),f.classList.add("pagination-button-item"),B()){case!0:{e.length<=5?n.append(...e):t===0||t===1?n.append(...l,i,...u):t===2?n.append(...k,i,...u):t===r-3?n.append(...m,i,...y):t===r-2||t===r-1?n.append(...m,i,...v):t>=3&&t<=r-4&&n.append(...m,i,f,e[t],i,...u);break}case!1:{e.length<=7?n.append(...e):t===0||t===1?n.append(...l,i,...v):t===2?n.append(...k,i,...u):t===r-3?n.append(...m,i,...y):t===r-2||t===r-1?n.append(...l,i,...v):t>=3&&t<=r-4&&n.append(...m,i,f,...e.slice(t-1,t+2),i,...u);break}}}function E(c){P.classList.remove("pagination-button-item-active");let o=c.target.dataset.action;switch(p.favIngredientsList.innerHTML="",o){case"leftPag":t-=1,t<0&&(t=0);break;case"rightPag":t+=1,t>=r&&(t=r-1);break;default:isNaN(Number(o))||(t=Number(o-1));break}A(T[t]),x(),_(),$(d,s)}function $(c,o){t===0?c.classList.add("is-hidden"):c.classList.remove("is-hidden"),t===r-1?o.classList.add("is-hidden"):o.classList.remove("is-hidden")}for(let c=1;c<=r;c++){const o=document.createElement("button");o.textContent=c,o.setAttribute("data-action",c),o.classList.add("pagination-button-item"),e.push(o)}switch(l=e.slice(0,3),v=e.slice(e.length-3,e.length),u=e.slice(e.length-1,e.length),i=document.createElement("button"),i.textContent="...",i.setAttribute("disabled",""),i.classList.add("pagination-button-item"),n.innerHTML="",B()){case!0:{e.length<=5?n.append(...e):(t===0||t===1)&&n.append(...l,i,...u);break}case!1:{e.length<=7?n.append(...e):(t===0||t===1)&&n.append(...l,i,...v);break}}const P=document.querySelector('button[data-action="1"]');P&&P.classList.add("pagination-button-item-active")}const H=a=>{L.classList.toggle("is-open"),R(a)};function z(a,n){const d=g=>{const{target:t}=g,b=t.dataset.idIgridient;t.classList.contains("cocktail-learn-more-btn")&&(setTimeout(L.classList.toggle("is-open"),500),n(b),F(g));const e=l=>{l.key==="Escape"&&(H(l),document.removeEventListener("keydown",e))};document.addEventListener("keydown",e)},s=g=>{const{target:t}=g;(t===G||t===L||t.classList.contains("ingridient-modal-back-btn"))&&(H(t),w(I))};a.addEventListener("click",d),L.addEventListener("click",s)}const J=document.querySelector(".container-non-photos"),N=document.querySelector(".fav-ingredients-cocktails-list"),A=a=>{p.favIngredientsList.innerHTML="",!a||a.length===0?J.classList.add("active"):a.forEach(async n=>{const d=await V(n);if(!d[0])return;const s=d[0];p.favIngredientsList.innerHTML+=` <li class= "fav-ingr-item">
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
  href="${C}#icon-remove"
  ></use>
  </svg>
  </button>
  </div>
  </li>`})};function K(a){return a||"Sorry we dont have it yet"}w(I);N&&z(N,j);p.favIngredientsList.addEventListener("click",a=>{if(a.target.classList.contains("fav-ingred-remove-button")){const n=a.target.getAttribute("id");U(n,I,W),w(I)}});
