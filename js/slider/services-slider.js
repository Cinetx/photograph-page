import {onSliderButtonClick, onSlideChange} from './util.js'

const servicesSliderElement = document.querySelector('.services-slider');
try {
  const servicesSliderContainerElement = servicesSliderElement.querySelectorAll('.services-slider__container');
const servicesSliderButtonNextElement = servicesSliderElement.querySelector('.slider-button--next');
const servicesSliderButtonPrevElement = servicesSliderElement.querySelector('.slider-button--prev');
const servicesCircleElement = servicesSliderElement.querySelector('.circle--2');
const servicesFractionElement = servicesSliderElement.querySelector('.fraction__wrapper');
servicesSliderContainerElement.forEach((sliderContainer) => {
  const servicesSlider = new Swiper(sliderContainer, {
    slidesPerView: 'auto',
    loop: true,
    speed: 600,
    // simulateTouch: 0,
    breakpoints: {
      1024: {
        // simulateTouch: 0,
      }
    },
    // breakpoints: {
    //   1024: {
    //     // simulateTouch: true,
    //     centeredSlides: false,
    //   },
    //   1024: {
    //     // loop: false,
    //     simulateTouch: false,
    //   },
    // },
    // breakpoints: {
    //   // when window width is >= 320px
    //   320: {
    //     slidesPerView: 2,
    //     spaceBetween: 20,
    //     simulateTouch: false,
    //   },
    //   // when window width is >= 480px
    //   480: {
    //     slidesPerView: 3,
    //     spaceBetween: 30
    //   },
    //   // when window width is >= 640px
    //   640: {
    //     slidesPerView: 4,
    //     spaceBetween: 40
    //   }
    // },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: servicesSliderButtonNextElement,
      prevEl: servicesSliderButtonPrevElement,
    },
    pagination: {
      el: servicesFractionElement,
      type: 'custom',
      renderCustom: function (swiper, current, total) {
        return `<span class="fraction fraction--current">0${current}</span>
        <span class="fraction__separator">&nbsp;—&nbsp;</span>
        <span class="fraction fraction--total">0${total}</span>`
      }
    },

  });
   servicesSlider.allowTouchMove = false;
   if (document.body.clientWidth < 1366) {
    servicesSlider.allowTouchMove = true;
   }
   console.log(servicesSlider.params.simulateTouch)
  onSliderButtonClick(servicesSliderButtonNextElement, servicesCircleElement);
  onSliderButtonClick(servicesSliderButtonPrevElement, servicesCircleElement);
  onSlideChange(servicesSlider, servicesCircleElement, servicesSliderElement);
})

} catch {}
