import{m as r,f as a,k as i,i as s,g as d}from"./icons-1e3529a7.js";const n=o=>{if(o.currentTarget===o.target||o.target.dataset.typecockt!=="coct-btn")return;const e=o.target;console.log(e);let t=e.dataset.idCoctail;console.log(t);let c=e.dataset.localcockt,l=a.indexOf(t);c==="favorite"&&l===-1?(e.textContent="Remove from favorites",c="remfromfavorite",i(t,a,s),document.getElementById(t).classList.toggle("is-favorite"),console.log(a)):(e.textContent="Add to favorites",c="favorite",d(t,a,s),document.getElementById(t).classList.toggle("is-favorite"))};r.addEventListener("click",n);
