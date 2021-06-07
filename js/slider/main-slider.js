import {getFractionSlide, getMaxSlide, renderSlideFraction, onSlideChange} from './util.js'

const mainSliderContainerElement = document.querySelector('.main-slider');

try {
  const mainSliderButtonNextElement = mainSliderContainerElement.querySelector('.main-slider__button--next')
  const mainSliderButtonPrevElement = mainSliderContainerElement.querySelector('.main-slider__button--prev')
  const mainSliderProgressbarElement = mainSliderContainerElement.querySelector('.main-slider__progressbar')



const mainSwiper = new Swiper('.main-slider__container ', {
  slidesPerView: 'auto',
  centeredSlides: true,

  pagination: {
    el: mainSliderProgressbarElement,
    type: 'progressbar',
  },

  breakpoints: {
    1024: {
      slidesPerView: 'auto',
    },
    1320: {
      slidesPerView: 1,
      centeredSlides: true,
      // slidesPerView: 'auto',
      // spaceBetween: 'auto',
    }
  },
  navigation: {
    nextEl: mainSliderButtonNextElement,
    prevEl: mainSliderButtonPrevElement,
  },

});


getMaxSlide(mainSwiper.slides.length, mainSliderContainerElement)
getFractionSlide(mainSwiper, mainSliderContainerElement)
renderSlideFraction(mainSwiper, mainSliderContainerElement);
} catch {

}


