const galleryId = document.getElementById('search')
const toCocktailsBtn = document.querySelector('.button-on-hero')
const toCocktails = (e) => {
    galleryId.scrollIntoView({ behavior: 'smooth' }, true);
}
toCocktailsBtn.addEventListener('click', toCocktails)