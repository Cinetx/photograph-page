// Модальное окно
try {
  const modal = document.querySelectorAll(".js-modal");
  const modalOpen = document.querySelectorAll(".js-modal-open");

  modal.forEach((item) => {
    modalOpen.forEach((button) => {
      if (button.dataset.modal == item.dataset.modal) {
        button.addEventListener("click", function (evt) {
          evt.preventDefault();
          item.classList.remove("visually-hidden")
        });
      };
    });

    const modalClose = item.querySelectorAll(".js-modal-close");
    modalClose.forEach((closeButton) => {
      closeButton.addEventListener("click", function (evt) {
        evt.preventDefault();
        item.classList.add("visually-hidden");
      });
    });

    document.addEventListener('keydown', function (event) {
      if (event.code == 'Escape') {
        event.preventDefault();
        item.classList.add("visually-hidden");
      }
    });
  })
} catch {

}
