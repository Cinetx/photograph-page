import {
  getFractionSlide,
  getMaxSlide,
  onSliderButtonClick,
  onSlideChange
} from './util.js'

const articleSliderElement = document.querySelector('.article-content')

try {
  const articleButtonNextElement = articleSliderElement.querySelector('.slider-button--next');
const articleButtonPrevElement = articleSliderElement.querySelector('.slider-button--prev');
const articleCircleElement = articleSliderElement.querySelector('.circle--2');

const articleFractionWrapperElement = articleSliderElement.querySelector('.fraction__wrapper')

const articleInstSlider = new Swiper('.article-content__slide', {
  slidesPerView: 'auto',
  loop: true,
  spaceBetween: 10,
  speed: 600,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: articleButtonNextElement,
    prevEl: articleButtonPrevElement,
  },
  pagination: {
    el: articleFractionWrapperElement,
    type: 'custom',
    renderCustom: function (swiper, current, total) {
      return `<span class="fraction fraction--current">0${current}</span>
      <span class="fraction__separator">&nbsp;—&nbsp;</span>
      <span class="fraction fraction--total">0${total}</span>`
    }
  },

  breakpoints: {
    320: {
      spaceBetween: 26,
    },

    1024: {
      spaceBetween: 26,
    },

    1366: {
      spaceBetween: 30,

    },
    1620: {
      spaceBetween: 0,
    }
  }
});

// getFractionSlide(articleInstSlider, articleSliderElement)
// getMaxSlide(articleInstSlider, articleSliderElement)
onSliderButtonClick(articleButtonNextElement, articleCircleElement);
onSliderButtonClick(articleButtonPrevElement, articleCircleElement);
onSlideChange(articleInstSlider, articleCircleElement);

} catch {}
