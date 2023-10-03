import { refs } from './refs';
import { createCocktailCards } from './render-gallery';

const galleryEl = document.querySelector('.gallery-list');

export function renderPagination(cocktailArr) {
  refs.paginationNumberBtnsContainer.innerHTML = '';
  let cardsPerPage;

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

  if (window.innerWidth >= 1280) {
    cardsPerPage = 9;
  } else {
    cardsPerPage = 8;
  }

  let totalCocktailCount = cocktailArr.length;

  if (totalCocktailCount <= cardsPerPage) {
    refs.paginationContainer.classList.add('is-hidden');
  }

  let totalPagesNum = Math.ceil(totalCocktailCount / cardsPerPage);

  const sortedCardsArr = createPagesArr(cocktailArr, cardsPerPage);

  arrowCheck();

  function createPagesArr(arr, cardsPerPageNum) {
    return arr.reduce((result, item, index) => {
      if (index % cardsPerPageNum === 0) {
        result.push([]);
      }
      result[result.length - 1].push(item);
      return result;
    }, []);
  }

  createCocktailCards(sortedCardsArr[0], galleryEl);

  refs.leftPagBtn[0].addEventListener('click', onPaginationBtnClick);
  refs.rightPagBtn[0].addEventListener('click', onPaginationBtnClick);
  refs.paginationNumberBtnsContainer.addEventListener(
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
    refs.paginationNumberBtnsContainer.innerHTML = '';

    start = pageBtns.slice(0, 3);
    start2 = pageBtns.slice(0, 1);
    start3 = pageBtns.slice(0, 4);
    finish = pageBtns.slice(pageBtns.length - 3, pageBtns.length);
    finish2 = pageBtns.slice(pageBtns.length - 1, pageBtns.length);
    finish3 = pageBtns.slice(pageBtns.length - 4, pageBtns.length);

    refs.paginationNumberBtnsContainer.innerHTML = '';
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
          refs.paginationNumberBtnsContainer.append(...pageBtns);
        } else {

          if (currentPageIndex === 0 || currentPageIndex === 1) {
            refs.paginationNumberBtnsContainer.append(
              ...start,
              moreBtn,
              ...finish2
            );
          } else if (currentPageIndex === 2) {
            refs.paginationNumberBtnsContainer.append(
              ...start3,
              moreBtn,
              ...finish2
            );
          } else if (currentPageIndex === totalPagesNum - 3) {
            refs.paginationNumberBtnsContainer.append(
              ...start2,
              moreBtn,
              ...finish3
            );
          } else if (
            currentPageIndex === totalPagesNum - 2 ||
            currentPageIndex === totalPagesNum - 1
          ) {
            refs.paginationNumberBtnsContainer.append(
              ...start2,
              moreBtn,
              ...finish
            );
          } else if (
            currentPageIndex >= 3 &&
            currentPageIndex <= totalPagesNum - 4
          ) {
            refs.paginationNumberBtnsContainer.append(
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
          refs.paginationNumberBtnsContainer.append(...pageBtns);
        } else {

          if (currentPageIndex === 0 || currentPageIndex === 1) {
            refs.paginationNumberBtnsContainer.append(
              ...start,
              moreBtn,
              ...finish
            );
          } else if (currentPageIndex === 2) {
            refs.paginationNumberBtnsContainer.append(
              ...start3,
              moreBtn,
              ...finish2
            );
          } else if (currentPageIndex === totalPagesNum - 3) {
            refs.paginationNumberBtnsContainer.append(
              ...start2,
              moreBtn,
              ...finish3
            );
          } else if (
            currentPageIndex === totalPagesNum - 2 ||
            currentPageIndex === totalPagesNum - 1
          ) {
            refs.paginationNumberBtnsContainer.append(
              ...start,
              moreBtn,
              ...finish
            );
          } else if (
            currentPageIndex >= 3 &&
            currentPageIndex <= totalPagesNum - 4
          ) {
            refs.paginationNumberBtnsContainer.append(
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
    const toSearch = document.getElementById('search');
    console.log("btns", refs.paginationNumberBtnsContainer);
    console.log("pagebtns", pageBtns);
    toSearch.scrollIntoView({ behavior: 'smooth' }, true);
    defaultActiveBtn.classList.remove('pagination-button-item-active');
    let btnValue = evt.target.dataset.action;

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

    createCocktailCards(sortedCardsArr[currentPageIndex], galleryEl);
    updateButtonLayout();
    updatePaginationButtons();
    arrowCheck();
  }

  function arrowCheck() {
    if (currentPageIndex === 0) {
      refs.leftPagBtn[0].classList.add('is-hidden');
    } else {
      refs.leftPagBtn[0].classList.remove('is-hidden');
    }
    if (currentPageIndex === totalPagesNum - 1) {
      refs.rightPagBtn[0].classList.add('is-hidden');
    } else {
      refs.rightPagBtn[0].classList.remove('is-hidden');
    }
  }

  // Initialize pagination
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

  refs.paginationNumberBtnsContainer.innerHTML = '';

  switch (isMobile()) {
    case true: {
      if (pageBtns.length <= 5) {
        refs.paginationNumberBtnsContainer.append(...pageBtns);
      } else {

        if (currentPageIndex === 0 || currentPageIndex === 1) {
          refs.paginationNumberBtnsContainer.append(
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
        refs.paginationNumberBtnsContainer.append(...pageBtns);
      } else {

        if (currentPageIndex === 0 || currentPageIndex === 1) {
          refs.paginationNumberBtnsContainer.append(
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
