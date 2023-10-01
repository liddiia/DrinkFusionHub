const noPhoto = `<img
            srcset="/img/no-cocktails/no-cocktails@1x.png 1x, /img/no-cocktails/no-cocktails@2x.png 2x"
  src="/img/no-cocktails/no-cocktails@1x.png"
            alt="no-coctails"
            class="no-coctails-img"
            width="234"
            height="201"
            loading="lazy"
          />`;

export function didntFindCoctails(contNoCoctails) {
  contNoCoctails.innerHTML = `${noPhoto}
          <p class="description-no-coctails">Sorry, we <span class="span-no-coctails">didn’t find</span> any cocktail for you</p>`;
}

export function haventAddedFavoriteCoctails(contNoCoctails) {
  contNoCoctails.innerHTML = `${noPhoto}
          <p class="description-no-coctails">You haven't added any <span class="span-no-coctails">favorite cocktails</span> yet</p>`;
}

export function haventAddedFavoriteIngradients(contNoCoctails) {
  contNoCoctails.innerHTML = `${noPhoto}
          <p class="description-no-coctails">You haven't added any <span class="span-no-coctails">favorite ingredients</span> yet</p>`;
}
