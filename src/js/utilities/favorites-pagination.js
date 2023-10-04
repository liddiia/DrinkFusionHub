
import { refs } from "./refs";
import { renderFav } from "../favorite-cocktails";
import svgUrl from '/img/icons.svg';



export function renderFavPagination(cocktailArr) {
  refs.favoritePaginationContainer.innerHTML = `<button
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
  href="${svgUrl}#icon-arrow_left"
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
  href="${svgUrl}#icon-arrow_right"
  data-action="rightPag"
></use>
</svg>
</button>`;


const paginationNumberBtnsContainer = document.querySelector(
  '.number-buttons-container'
);
const leftPagBtn = document.getElementById('left-pag-btn');
const rightPagBtn = document.getElementById('right-pag-btn');
paginationNumberBtnsContainer.innerHTML = '';


let cardsPerPage = 6;

  let currentPageIndex = 0;
  let currentButton = null;
  let pageBtns = [];
  let start = [];
  let start2 = [];
  let start3 = [];
  let finish = [];
  let finish2 = [];
  let finish3 = [];
  let moreBtn;
  let dots;

  function isMobile() {
    if (window.innerWidth >= 768) {
      return false;
    } else {
      return true;
    }
  }

  let totalCocktailCount = cocktailArr.length;

  if (totalCocktailCount <= cardsPerPage) {
    refs.favoritePaginationContainer.classList.add('is-hidden');
  } else refs.favoritePaginationContainer.classList.remove('is-hidden');


  let totalPagesNum = Math.ceil(totalCocktailCount / cardsPerPage);

  const sortedCardsArr = createPagesArr(cocktailArr, cardsPerPage);


  console.log("sortedCardsArr[0]", sortedCardsArr[0]);

  arrowCheck(leftPagBtn, rightPagBtn);

  function createPagesArr(arr, cardsPerPageNum) {
    return arr.reduce((result, item, index) => {
      if (index % cardsPerPageNum === 0) {
        result.push([]);
      }
      result[result.length - 1].push(item);
      return result;
    }, []);
  }

  renderFav(sortedCardsArr[0]);

  leftPagBtn.addEventListener('click', onPaginationBtnClick);
  rightPagBtn.addEventListener('click', onPaginationBtnClick);
  paginationNumberBtnsContainer.addEventListener(
    'click',
    onPaginationBtnClick
  );

  function updatePaginationButtons() {
    // Remove the 'pagination-button-item-active' class from the previous currentButton
    if (currentButton) {
      currentButton.classList.remove('pagination-button-item-active');
    }

    // Update currentButton to the newly clicked button
    currentButton = pageBtns[currentPageIndex];
    currentButton.classList.add('pagination-button-item-active');
  }

  function updateButtonLayout() {
    paginationNumberBtnsContainer.innerHTML = '';

    start = pageBtns.slice(0, 3);
    start2 = pageBtns.slice(0, 1);
    start3 = pageBtns.slice(0, 4);
    finish = pageBtns.slice(pageBtns.length - 3, pageBtns.length);
    finish2 = pageBtns.slice(pageBtns.length - 1, pageBtns.length);
    finish3 = pageBtns.slice(pageBtns.length - 4, pageBtns.length);

    paginationNumberBtnsContainer.innerHTML = '';
    moreBtn = document.createElement('button');
    moreBtn.textContent = '...';
    moreBtn.setAttribute('disabled', '');
    moreBtn.classList.add('pagination-button-item');

    dots = document.createElement('button');
    dots.textContent = '...';
    dots.setAttribute('disabled', '');
    dots.setAttribute('data-disable', 'true');
    dots.classList.add('pagination-button-item');


    switch (isMobile()) {
      case true: {
        if (pageBtns.length <= 5) {
          paginationNumberBtnsContainer.append(...pageBtns);
        } else {

          if (currentPageIndex === 0 || currentPageIndex === 1) {
            paginationNumberBtnsContainer.append(
              ...start,
              moreBtn,
              ...finish2
            );
          } else if (currentPageIndex === 2) {
            paginationNumberBtnsContainer.append(
              ...start3,
              moreBtn,
              ...finish2
            );
          } else if (currentPageIndex === totalPagesNum - 3) {
            paginationNumberBtnsContainer.append(
              ...start2,
              moreBtn,
              ...finish3
            );
          } else if (
            currentPageIndex === totalPagesNum - 2 ||
            currentPageIndex === totalPagesNum - 1
          ) {
            paginationNumberBtnsContainer.append(
              ...start2,
              moreBtn,
              ...finish
            );
          } else if (
            currentPageIndex >= 3 &&
            currentPageIndex <= totalPagesNum - 4
          ) {
            paginationNumberBtnsContainer.append(
              ...start2,
              moreBtn,
              dots,
              ...[pageBtns[currentPageIndex]],
              moreBtn,
              ...finish2
            );
          }
        }
        break;
      }

      case false: {
        if (pageBtns.length <= 7) {
          paginationNumberBtnsContainer.append(...pageBtns);
        } else {

          if (currentPageIndex === 0 || currentPageIndex === 1) {
            paginationNumberBtnsContainer.append(
              ...start,
              moreBtn,
              ...finish
            );
          } else if (currentPageIndex === 2) {
            paginationNumberBtnsContainer.append(
              ...start3,
              moreBtn,
              ...finish2
            );
          } else if (currentPageIndex === totalPagesNum - 3) {
            paginationNumberBtnsContainer.append(
              ...start2,
              moreBtn,
              ...finish3
            );
          } else if (
            currentPageIndex === totalPagesNum - 2 ||
            currentPageIndex === totalPagesNum - 1
          ) {
            paginationNumberBtnsContainer.append(
              ...start,
              moreBtn,
              ...finish
            );
          } else if (
            currentPageIndex >= 3 &&
            currentPageIndex <= totalPagesNum - 4
          ) {
            paginationNumberBtnsContainer.append(
              ...start2,
              moreBtn,
              dots,
              ...pageBtns.slice(currentPageIndex - 1, currentPageIndex + 2),
              moreBtn, // Add another moreBtn here
              ...finish2
            );
          }
        }
        break;
      }
    }
  }


  function onPaginationBtnClick(evt) {

    defaultActiveBtn.classList.remove('pagination-button-item-active');
    let btnValue = evt.target.dataset.action;
    refs.favoritesList.innerHTML = '';


    switch (btnValue) {
      case 'leftPag':
        {
          currentPageIndex -= 1;
          if (currentPageIndex < 0) {
            currentPageIndex = 0;
          }
        }
        break;

      case 'rightPag':
        {
          currentPageIndex += 1;
          if (currentPageIndex >= totalPagesNum) {
            currentPageIndex = totalPagesNum - 1;
          }
        }
        break;

      default:
        {
          if (!isNaN(Number(btnValue))) {
            currentPageIndex = Number(btnValue - 1);
          }
        }
        break;
    }


    renderFav(sortedCardsArr[currentPageIndex]);
    console.log("sortedCardsArr[currentPageIndex]", sortedCardsArr[currentPageIndex]);
    updateButtonLayout();
    updatePaginationButtons();
    arrowCheck(leftPagBtn, rightPagBtn);
  }

  function arrowCheck(leftPagBtn, rightPagBtn) {
    if (currentPageIndex === 0) {
      leftPagBtn.classList.add('is-hidden');
    } else {
      leftPagBtn.classList.remove('is-hidden');
    }
    if (currentPageIndex === totalPagesNum - 1) {
      rightPagBtn.classList.add('is-hidden');
    } else {
      rightPagBtn.classList.remove('is-hidden');
    }
  }

  for (let i = 1; i <= totalPagesNum; i++) {
    const pageBtn = document.createElement('button');
    pageBtn.textContent = i;
    pageBtn.setAttribute('data-action', i);
    pageBtn.classList.add('pagination-button-item');
    pageBtns.push(pageBtn);
  }

  start = pageBtns.slice(0, 3);
  finish = pageBtns.slice(pageBtns.length - 3, pageBtns.length);
  finish2 = pageBtns.slice(pageBtns.length - 1, pageBtns.length);

  moreBtn = document.createElement('button');
  moreBtn.textContent = '...';
  moreBtn.setAttribute('disabled', '');
  moreBtn.classList.add('pagination-button-item');

  paginationNumberBtnsContainer.innerHTML = '';

  switch (isMobile()) {
    case true: {
      if (pageBtns.length <= 5) {
        paginationNumberBtnsContainer.append(...pageBtns);
      } else {

        if (currentPageIndex === 0 || currentPageIndex === 1) {
          paginationNumberBtnsContainer.append(
            ...start,
            moreBtn,
            ...finish2
          );
        }
      }
      break;
    }

    case false: {
      if (pageBtns.length <= 7) {
        paginationNumberBtnsContainer.append(...pageBtns);
      } else {

        if (currentPageIndex === 0 || currentPageIndex === 1) {
          paginationNumberBtnsContainer.append(
            ...start,
            moreBtn,
            ...finish
          );
        }
      }
      break;
    }
  }

  const defaultActiveBtn = document.querySelector('button[data-action="1"]');
  defaultActiveBtn.classList.add('pagination-button-item-active');
}
