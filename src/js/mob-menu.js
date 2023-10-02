const mobileMenu = document.querySelector('.js-menu-container')
const openBtnMenu = document.querySelector('.js-open-menu')
const closeBtnMenu = document.querySelector('.js-close-menu')

openBtnMenu.addEventListener('click', onMobileMenu)
closeBtnMenu.addEventListener('click', onMobileMenu)

function onMobileMenu(){
  mobileMenu.classList.toggle("is-hidden")
}

const btnSubMenu = document.querySelector('.js-btn-sub-menu')
const subMenu = document.querySelector('.sub-menu')
const svg = document.querySelector('.opn-sub-icon')

// subMenu.classList.add('is-hidden')

btnSubMenu.addEventListener('click', onSubMenu)

function onSubMenu(){
    subMenu.classList.toggle('is-open')
    svg.classList.toggle('rotate')
}

const deskSubMenu = document.querySelector('.desktop-menu-sub-list')
const opnBtnHedSubMenu = document.querySelector('.btn-hed-sub-menu')
const hederSvg = document.querySelector('.heder-sub-icon')

opnBtnHedSubMenu.addEventListener('click', onDeskSubMenu)

function onDeskSubMenu(){
  deskSubMenu.classList.toggle('is-open')
  hederSvg.classList.toggle('rotate')
}