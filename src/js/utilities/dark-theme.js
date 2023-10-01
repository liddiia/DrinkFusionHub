// import throttle from 'lodash.throttle';

const toggle = document.querySelector('.input-dark-theme');

const toggle2 = document.querySelector('.input-dark-theme-mobile');

const body = document.body;

const darkTheme = () => {
  body.classList.toggle('dark-theme');
  const isDarkTheme = body.classList.contains('dark-theme');
  localStorage.setItem('isDarkTheme', isDarkTheme);
};

toggle.addEventListener('click', darkTheme);
toggle2.addEventListener('click', darkTheme);


const isStoredDarkTheme = localStorage.getItem('isDarkTheme');
if (isStoredDarkTheme === 'true') {
  body.classList.add('dark-theme');
}
