'use strict';

const burger = document.querySelector('.header__burger');
const links = document.querySelector('.header__nav');
const button = document.querySelector('.gallery__button-link');

burger.addEventListener('click', () => {
  links.classList.toggle('header__nav--active');
  burger.classList.toggle('header__burger--active');
});

button.addEventListener('click', () => {
  button.classList.toggle('gallery__button-link--active');
});
