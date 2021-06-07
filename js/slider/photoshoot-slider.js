import {

  onSliderButtonClick,
  onSlideChange
} from './util.js';

const photoshootElement = document.querySelector('.photoshoot');

try {
  const photoshootButtonNextElement = photoshootElement.querySelector('.slider-button--next')
const photoshootButtonPrevtElement = photoshootElement.querySelector('.slider-button--prev')
const photoshootCircleElement = photoshootElement.querySelector('.circle--2')
const photoshootFractionElement = photoshootElement.querySelector('.fraction__wrapper');
const photoshootSlider = new Swiper('.photoshoot-slider--photo', {
  slidesPerView: 'auto',
  loop: true,
  speed: 600,
  // autoplay: {
  //   delay: 4000,
  //   disableOnInteraction: false,
  // },
  navigation: {
    nextEl: photoshootButtonNextElement,
    prevEl: photoshootButtonPrevtElement,
  },

  pagination: {
    el: photoshootFractionElement,
    type: 'custom',
    renderCustom: function (swiper, current, total) {
      return `<span class="fraction fraction--current">0${current}</span>
      <span class="fraction__separator">&nbsp;—&nbsp;</span>
      <span class="fraction fraction--total">0${total}</span>`
    }
  },
})
onSliderButtonClick(photoshootButtonNextElement, photoshootCircleElement);
onSliderButtonClick(photoshootButtonPrevtElement, photoshootCircleElement);
onSlideChange(photoshootSlider, photoshootCircleElement);

} catch {}
