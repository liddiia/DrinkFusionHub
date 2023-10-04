const noPhoto = `<img
            src="../img/no-cocktails/no-cocktails@2x.png"
            alt="no-coctails"
            class="no-coctails-img"
            width="234"
            height="201"
            loading="lazy"
          />`;

export function didntFindCoctails(contNoCoctails, titleGalleryEl) {
  titleGalleryEl.textContent = '';
  contNoCoctails.classList.add('active');
}

export function haventAddedFavoriteCoctails(
  contNoCoctails,
  titleGalleryEl,
  desc,
  span
) {
  titleGalleryEl.textContent = 'Favorite cocktails';
  contNoCoctails.classList.add('active');
  desc.textContent = "You haven't added any yet";
  span.textContent = 'favorite cocktails';
}

export function haventAddedFavoriteIngradients(
  contNoCoctails,
  titleGalleryEl,
  desc,
  span
) {
  titleGalleryEl.textContent = 'Favorite ingredients';
  contNoCoctails.classList.add('active');
  desc.textContent = "You haven't added any yet";
  span.textContent = 'favorite cocktails';
}
