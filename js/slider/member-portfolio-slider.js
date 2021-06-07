try {
  const memberContainer = document.querySelectorAll('.member-portfolio');
  memberContainer.forEach((item) => {

    const buttonPrev = item.querySelector('.member-portfolio__button--prev')
    const buttonNext = item.querySelector('.member-portfolio__button--next')

    const memberPortfolioSlider = new Swiper(item, {
      slidesPerView: 'auto',

      loop: false,

      breakpoints: {
        1365: {
          slidesPerView: 3,
        },

      },

      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },
    });

    if (memberPortfolioSlider.slides.length <= 3) {
      memberPortfolioSlider.navigation.nextEl.style.display = 'none';
      memberPortfolioSlider.navigation.prevEl.style.display = 'none';
    }

    if (document.body.clientWidth < 1024 && memberPortfolioSlider.slides.length < 2) {
      memberPortfolioSlider.params.centeredSlides = true
      console.log(memberPortfolioSlider.params.slidesPerView = 'auto')
    }
  })
} catch {

}

