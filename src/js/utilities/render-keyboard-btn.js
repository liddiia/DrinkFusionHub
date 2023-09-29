export function createKeyboardBtn(array, container) {
  const markup = array
    .map(item => {
      return `<li class='hero-item' >
        <button class="hero-keyboard-btn  my-button" data-name=${item}>${item}</button>
        </li>`;
    })
    .join('');
  container.innerHTML = markup;
}
