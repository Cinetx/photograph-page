import {getMaxSlide, renderSlideFraction, getFractionSlide} from './util.js'

const reviewsContainerElement = document.querySelector('.reviews');

try {
  const reviewsButtonNextElement = reviewsContainerElement.querySelector('.main-slider__button--next');
const reviewsButtonPrevElement = reviewsContainerElement.querySelector('.main-slider__button--prev');
const reviewsProgressBarElement = reviewsContainerElement.querySelector('.main-slider__progressbar');

const reviewsSwiper = new Swiper('.reviews__wrapper', {
  slidesPerView: 'auto',
  spaceBetween: 7,
  speed: 600,
  loop: true,
  loopedSlides: 1,
  pagination: {
    el: reviewsProgressBarElement,
    type: 'progressbar',
  },

  navigation: {
    nextEl: reviewsButtonNextElement,
    prevEl: reviewsButtonPrevElement,
  },


  breakpoints: {
    1024: {
      spaceBetween: 4,
      slidesPerView: 'auto',
      centeredSlides: true,
    },
    1366: {
      spaceBetween: 6,
      centeredSlides: true,
    },
    1620: {
      spaceBetween: 0,
      centeredSlides: true,
    }
  }

});

 // Так как установлено  loop: true, loopedSlides: 1,
  // это значит что он добавляет по одному слайдеру с каждой стороны (всего 2)
  // Поэтому мы вычитаем два слайда
getMaxSlide(reviewsSwiper.slides.length - 2, reviewsContainerElement)
getFractionSlide(reviewsSwiper, reviewsContainerElement)
renderSlideFraction(reviewsSwiper, reviewsContainerElement);

} catch {}
