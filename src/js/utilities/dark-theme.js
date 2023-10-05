import throttle from 'lodash.throttle';

const toggle = document.querySelector('.input-dark-theme');

const toggle2 = document.querySelector('.input-dark-theme-mobile');

const body = document.body;

const darkTheme = () => {
  body.classList.toggle('dark-theme');
  const isDarkTheme = body.classList.contains('dark-theme');
  localStorage.setItem('isDarkTheme', isDarkTheme);

};

toggle.addEventListener('click', throttle(darkTheme, 0));
toggle2.addEventListener('click', throttle(darkTheme, 0));

const isStoredDarkTheme = localStorage.getItem('isDarkTheme');
if (isStoredDarkTheme === 'true') {
  body.classList.add('dark-theme');
  toggle.checked = true;
  toggle2.checked = true;

}
