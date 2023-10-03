import throttle from 'lodash.throttle';

const toggle = document.querySelector('.input-dark-theme');

const toggle2 = document.querySelector('.input-dark-theme-mobile');

const body = document.body;

const darkTheme = () => {
  body.classList.toggle('dark-theme');
};

toggle.addEventListener('click', throttle(darkTheme, 0));
toggle2.addEventListener('click', throttle(darkTheme, 0));
