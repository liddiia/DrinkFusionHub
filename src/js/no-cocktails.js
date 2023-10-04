export function didntFindCoctails(container, titleGalleryEl) {
  titleGalleryEl.textContent = '';
  container.classList.add('active');
}

export function haventAddedFavoriteCoctails(container) {
  container.classList.add('active');
}

export function haventAddedFavoriteIngradients(container) {
  container.classList.add('active');
}
