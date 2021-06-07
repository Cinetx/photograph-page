const videoSectionElement = document.querySelector('.video-section');


// Показать кнопку
const hiddenVideoButton = (button) => {
  button.classList.add('play__button--hidden');

}

// Скрыть кнопку
const visibleVideoButton = (button) => {
  button.classList.remove('play__button--hidden');
}

// Показ кнопки при движении и скрытие когда курсор на месте
const showHiddenButton = (button, timer) => {
  visibleVideoButton(button);
  clearTimeout(timer);
  timer = setTimeout(hiddenVideoButton, 1000, button);
}


try {
  const videoElement = videoSectionElement.querySelector('.main-video');
  const videoButtonPlayElement = videoSectionElement.querySelector('.play__button');
  const videoCircleAnimatedElement = videoButtonPlayElement.querySelector('.play__animated');
  let showButtonTimeout;

  videoElement.addEventListener('mousemove', () => {
    showHiddenButton(videoButtonPlayElement, showButtonTimeout)
  });

  // Когда видеко включено показывает браузерные кнопки управления видео
  // А так же показывает кнопку паузы
  videoElement.onplaying = () => {
    videoElement.setAttribute('controls', true);
    videoButtonPlayElement.classList.add('play__button--pause');
  }

  if (document.body.clientWidth < 1024) {
    videoElement.setAttribute('controls', true);
  }

  // Скрывает кнопку паузы, когда видео на паузе
  videoElement.onpause = () => {
    videoButtonPlayElement.classList.remove('play__button--pause');
  }

  // Добавляет активное состояние для элемента video
  // в зависимости от того на пазуе или нет видео
  videoButtonPlayElement.addEventListener('click', () => {
    videoElement.paused ? videoElement.play() : videoElement.pause();
    videoSectionElement.classList.add('video-section--active');
  })

  // Запускает таймер видео. Таймер включения зависит от анимации в css .play__animated--active
  const startVideoTimer = () => {
    videoCircleAnimatedElement.classList.add('play__animated--active');
  };

  // Останавливает таймер
  const stopVideoTimer = () => {
    videoCircleAnimatedElement.classList.remove('play__animated--active');
  }

  // Запускает видео когда заканчивается анимация на кнопке
  videoButtonPlayElement.onanimationend = () => {
    videoSectionElement.classList.add('video-section--active');
    videoElement.play();
  }

  // Запуск видео когда оно на экране и переход его в активное состояние
  // Получаем нужный элемент
  const getTargertVisible = (target) => {
    // Все позиции элемента
    const targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top,

      bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
      // Получаем позиции окна
      windowPosition = {
        top: window.pageYOffset,

        bottom: window.pageYOffset + document.documentElement.clientHeight
      };

    if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
      targetPosition.top < windowPosition.bottom) {
      // Если элемент полностью видно, то запускаем следующий код
      startVideoTimer()
    } else {
      // Если элемент не видно, то запускаем этот код
      stopVideoTimer()
    };
  };

  // Запускаем функцию при прокрутке страницы
  window.addEventListener('scroll', function () {
    getTargertVisible(videoButtonPlayElement);
  });

  // А также запустим функцию сразу. А то вдруг, элемент изначально видно
  getTargertVisible(videoButtonPlayElement);

} catch { }


try {
  const memberPortfolioVideoContainer = document.querySelectorAll('.member-portfolio__item--video');
  memberPortfolioVideoContainer.forEach((container) => {
    const memberPortfolioPlayButtonElement = container.querySelector('.play__button');
    const videoElement = container.querySelector('video')



    memberPortfolioPlayButtonElement.addEventListener('click', (evt) => {
      evt.preventDefault();
      videoElement.paused ? videoElement.play() : videoElement.pause();
      container.classList.add('member-portfolio__item--video-active');
    });


    videoElement.onplaying = () => {
      container.classList.add('member-portfolio__item--video-active');

      let showButtonTimeout;

      videoElement.addEventListener('mousemove', () => {
        showHiddenButton(memberPortfolioPlayButtonElement, showButtonTimeout)
      });
    };

    videoElement.onpause = () => {
      container.classList.remove('member-portfolio__item--video-active');
    };

    if (document.body.clientWidth < 1024) {
      videoElement.setAttribute('controls', true);
    }

  });
} catch {

}


try {
  const videoBlock = document.querySelectorAll('.video-block');
  videoBlock.forEach((container) => {
    const videoBlockPlayButtonElement = container.querySelector('.play__button');
    const videoElement = container.querySelector('video')


    videoBlockPlayButtonElement.addEventListener('click', (evt) => {
      evt.preventDefault();
      videoElement.paused ? videoElement.play() : videoElement.pause();
      container.classList.add('video-block--active');
    });


    videoElement.onplaying = () => {
      container.classList.add('video-block--active');

      let showButtonTimeout;

      videoElement.addEventListener('mousemove', () => {
        showHiddenButton(videoBlockPlayButtonElement, showButtonTimeout)
      });
    };

    videoElement.onpause = () => {
      container.classList.remove('video-block--active');
    };

    if (document.body.clientWidth < 1024) {
      videoElement.setAttribute('controls', true);
      console.log(videoElement)
    }

  });
} catch {

}
