
const menuElement = document.querySelector('.js-menu');



const burgerButtonElement = menuElement.querySelector('.js-burger');
const menuWrapperElement = menuElement.querySelector('.js-menu__wrapper');
const userMenuElement = document.querySelector('.user-menu');

burgerButtonElement.addEventListener('click', (evt) => {
  userMenuElement.classList.add('user-menu--hidden')
  evt.preventDefault();
  burgerButtonElement.classList.remove('burger--back');
  if (!burgerButtonElement.classList.contains('burger--active')) {
    menuWrapperElement.classList.remove('visually-hidden');
    burgerButtonElement.classList.add('burger--active');
  } else if (burgerButtonElement.classList.contains('burger--active')) {
    menuWrapperElement.classList.add('visually-hidden');
    burgerButtonElement.classList.remove('burger--active');

    userMenuElement.classList.remove('user-menu--hidden')
  }
});


const menuButtonElement = menuElement.querySelectorAll('.js-menu__button');
const menuNav = menuElement.querySelectorAll('.js-menu__nav');

menuButtonElement.forEach((button) => {

  button.addEventListener('click', (evt) => {
    evt.preventDefault();

    if (button !== burgerButtonElement) {
      burgerButtonElement.classList.add('burger--back');
      burgerButtonElement.classList.remove('burger--active');
    }

    menuNav.forEach((menu) => {


      if (button.dataset.menu === menu.dataset.menu) {
        menu.classList.remove('visually-hidden');
      } else {
        menu.classList.add('visually-hidden');

      }
    });
  });
});
