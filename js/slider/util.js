// Изменения при переключение слайда
const getFractionSlide = (slider, fraction) => {
  // фракция
  const mySliderCurrentSlide = fraction.querySelector('.fraction--current')
  let currentSlide = ++slider.realIndex;
  mySliderCurrentSlide.innerHTML = `0${currentSlide}&nbsp;`;
};

// Отоображаем максимальное количество слайдов
const getMaxSlide = (sliderLength, fraction) => {
  // фракция
  const mySliderAllSlides = fraction.querySelector('.fraction--total')
  mySliderAllSlides.innerHTML = `&nbsp;0${sliderLength}`;
}

// Отоображение текущего слайда при change
const renderSlideFraction = (slide, fraction) => {
  slide.on('slideChange', () => {
    getFractionSlide(slide, fraction)
  });
}
// Фракции

// анимации
const addCircleAnimation = (circle) => {
  circle.classList.add('circle-animated')
}

const removeCircleAnimation = (circle) => {
  circle.classList.remove('circle-animated')
}



const onSliderButtonClick = (button, circle) => {
  button.addEventListener('click', () => {
    removeCircleAnimation(circle)
  });
};

// servicesCircleElement.onanimationend = () => {
//   removeCircleAnimation(servicesCircleElement)
// }
const onSlideChange = (slide, circle, fraction) => {
  slide.on('slideChangeTransitionEnd', () => {
    addCircleAnimation(circle);
    // getFractionSlide(slide, fraction)
  });

  circle.onanimationend = () => {
    removeCircleAnimation(circle)
  }


}
// // Изменения при переключение слайда
// const onChangeMainSlide = (slider) => {
//   const mySliderCurrentSlide = slider.el.querySelector('.main-slider__fraction--current')
//   let currentSlide = ++slider.realIndex;
//   mySliderCurrentSlide.innerHTML = currentSlide;
// }


// // Отоображаем максимальное количество слайдов
// const getMaxMainSlide = (slider) => {
//   const mySliderAllSlides = slider.el.querySelector('.main-slider__fraction--total')
//   mySliderAllSlides.innerHTML = slider.slides.length;
// }

// // Отоображение текущего слайда при change
// const renderMainSlideFraction = (slider) => {
//   slider.on('slideChange', () => {
//     onChangeMainSlide(slider)
//   });
// }
export { getFractionSlide, getMaxSlide, renderSlideFraction, addCircleAnimation, removeCircleAnimation, onSliderButtonClick, onSlideChange };
