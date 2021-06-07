const gallerySlideElement = document.querySelector('.gallery-slide');
try {
  const gallerySlideButton = new Swiper('.gallery-slide__bottom', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 3,

    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,


    breakpoints: {
      560: {
        spaceBetween: 10,
        slidesPerView: 4,
      },
    }

  })

  const gallerySlideTop = new Swiper('.gallery-slide__top', {
    // slidesPerView: 1,
    // centeredSlides: true,
    spaceBetween: 20,

    loop: true,

    thumbs: {
      swiper: gallerySlideButton,
    },

    navigation: {
      nextEl: '.gallery-slide__button--next',
      prevEl: '.gallery-slide__button--prev',
    },
    breakpoints: {
      560: {
        spaceBetween: 10,
      },
    }

  });

  // gallerySlideTop.controller.control = gallerySlideButton;
  // gallerySlideButton.controller.control = gallerySlideTop;
} catch { }
