
const buttonBottomElement = document.querySelector('.js-button-bottom');
const windowScreenCoords = document.documentElement.clientHeight;
const buttonTopElement = document.querySelectorAll('.button-top');

const scroll100vhDown = () => {
  const scroll = () => {
    if (window.pageYOffset < windowScreenCoords) {
      window.scrollBy(0, 10);
      setTimeout(scroll, 0);
    }
    if (window.pageYOffset > windowScreenCoords) {
      window.scrollTo(0, windowScreenCoords);
    }
  };
  scroll();
}
const scrollTop = () => {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -80);
    setTimeout(scrollTop, 0);
  }
}

try {
  buttonBottomElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    scroll100vhDown();
  });

} catch{}
buttonTopElement.forEach((button) => {
  button.addEventListener('click', (evt) => {
    scrollTop();
    evt.preventDefault();
  });
});
