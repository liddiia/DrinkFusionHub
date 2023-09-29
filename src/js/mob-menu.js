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

subMenu.classList.add('is-hidden')

btnSubMenu.addEventListener('click', onSubMenu)

function onSubMenu(){
    subMenu.classList.toggle('is-hidden')
    svg.classList.toggle('rotate')
}

