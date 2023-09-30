const mobileMenu = document.querySelector('.js-menu-container')
const openBtnMenu = document.querySelector('.js-open-menu')
const closeBtnMenu = document.querySelector('.js-close-menu')

const svg = document.querySelector('.opn-sub-icon')

console.log(svg);

openBtnMenu.addEventListener('click', onMobileMenu)
closeBtnMenu.addEventListener('click', onMobileMenu)

function onMobileMenu(){
  mobileMenu.classList.toggle("active")
}

const btnSubMenu = document.querySelector('.js-btn-sub-menu')
const subMenu = document.querySelector('.sub-menu')
console.log(subMenu);
subMenu.classList.add('is-hidden')

btnSubMenu.addEventListener('click', onSubMenu)

function onSubMenu(e){
  console.log(e);
    subMenu.classList.toggle('is-hidden')
    svg.classList.toggle('rotate')
}

const deskSubMenu = document.querySelector('.desktop-menu-sub-list')
const opnBtnHedSubMenu = document.querySelector('.btn-hed-sub-menu')
const hederSvg = document.querySelector('.heder-sub-icon')

opnBtnHedSubMenu.addEventListener('click', onDeskSubMenu)

function onDeskSubMenu(){
  deskSubMenu.classList.toggle('is-hidden')
  hederSvg.classList.toggle('rotate')
}