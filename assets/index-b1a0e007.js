import{f as d,b as W,d as _,C as v}from"./no-cocktails-58ff2382.js";import{c as b,f as S,a as O,r as D,m as A,b as H}from"./modalCallDrink-c24e8f6e.js";var R="Expected a function",E=0/0,P="[object Symbol]",K=/^\s+|\s+$/g,U=/^[-+]0x[0-9a-f]+$/i,X=/^0b[01]+$/i,z=/^0o[0-7]+$/i,J=parseInt,Q=typeof b=="object"&&b&&b.Object===Object&&b,V=typeof self=="object"&&self&&self.Object===Object&&self,Y=Q||V||Function("return this")(),Z=Object.prototype,tt=Z.toString,et=Math.max,nt=Math.min,h=function(){return Y.Date.now()};function rt(t,e,n){var i,a,l,f,o,s,u=0,x=!1,m=!1,T=!0;if(typeof t!="function")throw new TypeError(R);e=F(e)||0,k(n)&&(x=!!n.leading,m="maxWait"in n,l=m?et(F(n.maxWait)||0,e):l,T="trailing"in n?!!n.trailing:T);function p(r){var c=i,g=a;return i=a=void 0,u=r,f=t.apply(g,c),f}function G(r){return u=r,o=setTimeout(y,e),x?p(r):f}function N(r){var c=r-s,g=r-u,C=e-c;return m?nt(C,l-g):C}function I(r){var c=r-s,g=r-u;return s===void 0||c>=e||c<0||m&&g>=l}function y(){var r=h();if(I(r))return j(r);o=setTimeout(y,N(r))}function j(r){return o=void 0,T&&i?p(r):(i=a=void 0,f)}function $(){o!==void 0&&clearTimeout(o),u=0,i=s=a=o=void 0}function w(){return o===void 0?f:j(h())}function L(){var r=h(),c=I(r);if(i=arguments,a=this,s=r,c){if(o===void 0)return G(s);if(m)return o=setTimeout(y,e),p(s)}return o===void 0&&(o=setTimeout(y,e)),f}return L.cancel=$,L.flush=w,L}function it(t,e,n){var i=!0,a=!0;if(typeof t!="function")throw new TypeError(R);return k(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),rt(t,e,{leading:i,maxWait:e,trailing:a})}function k(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function at(t){return!!t&&typeof t=="object"}function ot(t){return typeof t=="symbol"||at(t)&&tt.call(t)==P}function F(t){if(typeof t=="number")return t;if(ot(t))return E;if(k(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=k(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(K,"");var n=X.test(t);return n||z.test(t)?J(t.slice(2),n?2:8):U.test(t)?E:+t}var q=it;const ct=document.querySelector(".input-dark-theme"),st=document.querySelector(".input-dark-theme-mobile"),dt=document.body,B=()=>{dt.classList.toggle("dark-theme")};ct.addEventListener("click",q(B,0));st.addEventListener("click",q(B,0));const M=document.querySelector(".gallery-list"),lt=async()=>{if(window.innerWidth>=1280){let t=await S(9);O(t,M)}else{let t=await S(8);O(t,M)}D.paginationContainer.classList.add("is-hidden")};lt();const ft=document.querySelector(".gallery-list");ft.addEventListener("click",ut);function ut(t){if(t.currentTarget===t.target||t.target.dataset.type!=="user-action")return;const e=t.target;let n=e.dataset.action,a=e.closest("li").dataset.id,l=d.indexOf(a);n==="addtofav"&&l===-1?(e.classList.add("is-favorite"),e.dataset.action="removefromfav",W(a,d,v)):(e.classList.remove("is-favorite"),e.dataset.action="addtofav",_(a,d,v)),console.log(d)}const mt=t=>{if(t.target.classList.contains("cocktail-modal__favorite-button")){const e=t.target;let n=e.dataset.action,i=e.dataset.idCoctail,a=d.indexOf(i);n==="favorite"&&a===-1?(e.textContent="Remove from favorites",e.dataset.action="remfromfavorite",W(i,d,v)):(e.textContent="Add to favorites",e.dataset.action="favorite",_(i,d,v))}},gt=t=>{t.target.classList.contains("cocktail-modal-back")&&setTimeout(H(t.target),500)};A.addEventListener("click",mt);A.addEventListener("click",gt);
