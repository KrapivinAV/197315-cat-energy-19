let linkModalGoods = document.querySelector('.catalog__item-order-popup');
let linkModalExtraGoods = document.querySelector('.extra-goods__item-order-popup');
let popupModal = document.querySelector('.popup');
let closeModal = popupModal.querySelector('.popup__close');

linkModalGoods.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupModal.classList.add('popup--active');
});

linkModalExtraGoods.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupModal.classList.add('popup--active');
});

closeModal.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupModal.classList.remove('popup--active');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupModal.classList.contains('popup--active')) {
      popupModal.classList.remove('popup--active');
    }
  }
});
