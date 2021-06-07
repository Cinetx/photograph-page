import './swiper.js';
import './nav-menu.js';
import './fancybox/jquery.fancybox.min.js';
import './fancybox/calendar.js';
import './video.js';
import './modal.js';
import './masked/jquery.maskedinput.js';
import './masked/masked.js';
import './bottom-top-button.js';
import './nouislider/nouislider.min.js';
import './nouislider/noui-setting.js';
import './justified/jquery.justifiedGallery.min.js';
import './number.js';
import './twentytwenty/compare-twentytwenty.js'



$('textarea').keyup(function () {
  $(this).height(36); // min-height
  $(this).height(this.scrollHeight);
});

const textBlock = document.querySelectorAll('.js-text-block');

try {
  textBlock.forEach((block) => {
    const textButton = block.querySelector('.js-text-button')
    const textElement = block.querySelectorAll('.js-text');
    let textButtonText = textButton.innerText;
    let windowLocation;
    textButton.addEventListener('click', (evt) => {
      evt.preventDefault();


      if (!block.classList.contains('js-text-block-active')) {
        textElement.forEach((item) => {
          item.classList.add('js-text-active');
          textButton.innerText = 'Свернуть'
          block.classList.add('js-text-block-active')
          windowLocation = window.pageYOffset;


        });

        return
      }

      textElement.forEach((item) => {
        item.classList.remove('js-text-active');
        block.classList.remove('js-text-block-active')
        textButton.innerText = textButtonText;
        window.scrollTo(0, windowLocation)
      });



    });
  });
} catch {

}




$("#basicExample").justifiedGallery({
  rowHeight: 320,
  lastRow: 'justify',
  margins: 3,
  // maxRowHeight: 600,
  margins: 20,
});

if (document.body.clientWidth < 1366) {
  $("#basicExample").justifiedGallery({
    rowHeight: 120,
    // lastRow : 'justify',
    // margins : 3,
    // // maxRowHeight: 600,
    margins: 5,
  });
}


const inputWrapper = document.querySelectorAll('.js-input-item');
inputWrapper.forEach((item) => {
  const input = item.querySelector('.js-input');
  const inputTitle = item.querySelector('.text-input__small-title')


  $(input).on('change', () => {
    input.value ?
      inputTitle.classList.add('text-input__small-title--active') :
      inputTitle.classList.remove('text-input__small-title--active')
  })

})

