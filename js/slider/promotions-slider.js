import {
  onSliderButtonClick,
  onSlideChange
} from './util.js'

const promotionsSliderElement = document.querySelector('.promotions');
try {

  const promotionsSliderButtonNextElement = promotionsSliderElement.querySelector('.slider-button--next');
  const promotionsSliderButtonPrevElement = promotionsSliderElement.querySelector('.slider-button--prev');
  const promotionsCircleElement = promotionsSliderElement.querySelector('.circle--2');
  const promotionsFractionElement = promotionsSliderElement.querySelector('.fraction__wrapper');
  const promotionsDescriptionSlider = new Swiper('.promotions__description-slider', {
    slidesPerView: 'auto',

    loop: true,
    loopedSlides: 2,
    speed: 600,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: promotionsSliderButtonNextElement,
      prevEl: promotionsSliderButtonPrevElement,
    },
    pagination: {
      el: promotionsFractionElement,
      type: 'custom',
      renderCustom: function (swiper, current, total) {
        return `<span class="fraction fraction--current">0${current}</span>
      <span class="fraction__separator">&nbsp;—&nbsp;</span>
      <span class="fraction fraction--total">0${total}</span>`
      }
    },

    breakpoints: {
      1024: {
        slidesPerView: 1,
      }
    }
  });

  onSliderButtonClick(promotionsSliderButtonNextElement, promotionsCircleElement);
  onSliderButtonClick(promotionsSliderButtonPrevElement, promotionsCircleElement);
  onSlideChange(promotionsDescriptionSlider, promotionsCircleElement, promotionsSliderElement);

  const promotionsImgSlider = new Swiper('.promotions__img-slider', {
    slidesPerView: 'auto',

    // centeredSlides: true,

    // simulateTouch: false,
    loop: true,
    loopedSlides: 2,
    spaceBetween: 0,
    speed: 600,

    breakpoints: {
      1024: {
        spaceBetween: 23,

      },
      1366: {
        spaceBetween: 30,
      },

    }
  })

  promotionsDescriptionSlider.controller.control = promotionsImgSlider;
  promotionsImgSlider.controller.control = promotionsDescriptionSlider;

} catch {}
