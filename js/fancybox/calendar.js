const calendarButton = {
  next:
    `<button type="button" class="calendar__button calendar__button--next button">
      <svg aria-hidden="true" width = "16" height = "16" >
        <use href="img/sprite.svg#arrow"></use></>
    </button>`,

  prev:
    `<button type="button" class="calendar__button calendar__button--prev button">
      <svg aria-hidden="true" width = "16" height = "16" >
        <use href="img/sprite.svg#arrow"></use></>
    </button>`
}

const calendarElement = document.querySelector('.order-photo__item--calendar');
const calendarOpenElement = document.querySelector('.calendar__open')
const calendarSmallTitleElement = document.querySelector('.text-input__small-title--calendar');

const openLabel = () => {
  calendarOpenElement.classList.add('calendar__open--active');
  calendarSmallTitleElement.classList.add('text-input__small-title--active')
};

const closeLabel = () => {
  calendarOpenElement.classList.remove('calendar__open--active');
  calendarSmallTitleElement.classList.remove('text-input__small-title--active')
};

flatpickr.localize(flatpickr.l10ns.ru);
flatpickr(".flatpickr", {
  nextArrow: calendarButton.next,
  prevArrow: calendarButton.prev,
  // Возможность вводить дату в input
  // allowInput: true,
  // Отключает открытие при клике на input
  // clickOpens: false,
  // Статичный месяц(иначе select)
  monthSelectorType: 'static',
  // Функции при открытие, закрытие
  onOpen: openLabel,
  onClose: closeLabel,
  minDate: new Date(),
  // Показывает пользователю удобочитаемую дату (в соответствии с altFormat).
  altInput: true,

  altFormat: "j F, Y",
  dateFormat: "d-m-Y",
  position: 'below',
  defaultDate: new Date(),

  wrap: true,

  disableMobile: "true",


});
