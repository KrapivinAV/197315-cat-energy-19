var sliderImages = document.querySelectorAll('.physique-comparison__image');
var sliderUnit = document.querySelector('.physique-comparison__toggle');
var sliderToggles = document.querySelectorAll('.physique-comparison__toggle-item');
var sliderModule = document.querySelector('.physique-comparison__slider-slides');

sliderToggles[0].addEventListener('click', function () {
  sliderUnit.classList.remove('physique-comparison__toggle--after');
  sliderUnit.classList.add('physique-comparison__toggle--before');
  sliderImages[0].classList.remove('physique-comparison__image--invisible');
  sliderImages[0].classList.add('physique-comparison__image--visible');
  sliderImages[1].classList.remove('physique-comparison__image--visible');
  sliderImages[1].classList.add('physique-comparison__image--invisible');
  sliderModule.classList.remove('physique-comparison__slider-slides--up');
  sliderModule.classList.add('physique-comparison__slider-slides--down');
});

sliderToggles[1].addEventListener('click', function () {
  sliderUnit.classList.remove('physique-comparison__toggle--before');
  sliderUnit.classList.add('physique-comparison__toggle--after');
  sliderImages[1].classList.remove('physique-comparison__image--invisible');
  sliderImages[1].classList.add('physique-comparison__image--visible');
  sliderImages[0].classList.remove('physique-comparison__image--visible');
  sliderImages[0].classList.add('physique-comparison__image--invisible');
  sliderModule.classList.remove('physique-comparison__slider-slides--down');
  sliderModule.classList.add('physique-comparison__slider-slides--up');
});
