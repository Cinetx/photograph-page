

import {onSliderButtonClick, onSlideChange} from './util.js'

const photoshootInstSliderElement = document.querySelector('.related-services')

try {
  const photoshootInstButtonNextElement = photoshootInstSliderElement.querySelector('.slider-button--next');
const photoshootInstButtonPrevElement = photoshootInstSliderElement.querySelector('.slider-button--prev');
const photoshootInsCircleElement = photoshootInstSliderElement.querySelector('.circle--2')
const photoshootInsFractionElement = photoshootInstSliderElement.querySelector('.fraction__wrapper');


const photoshootInstSlider = new Swiper('.related-services__wrapper', {
  slidesPerView: 'auto',
  loop: true,
  speed: 600,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: photoshootInstButtonNextElement,
    prevEl: photoshootInstButtonPrevElement,
  },
  pagination: {
    el: photoshootInsFractionElement,
    type: 'custom',
    renderCustom: function (swiper, current, total) {
      return `<span class="fraction fraction--current">0${current}</span>
      <span class="fraction__separator">&nbsp;—&nbsp;</span>
      <span class="fraction fraction--total">0${total}</span>`
    }
  },
});

onSliderButtonClick(photoshootInstButtonNextElement, photoshootInsCircleElement);
onSliderButtonClick(photoshootInstButtonPrevElement, photoshootInsCircleElement);
onSlideChange(photoshootInstSlider, photoshootInsCircleElement);

} catch {}
