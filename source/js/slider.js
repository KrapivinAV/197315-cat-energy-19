let sliderImages = document.querySelectorAll('.physique-comparison__image');
let sliderUnit = document.querySelector('.physique-comparison__toggle');
let sliderToggles = document.querySelectorAll('.physique-comparison__toggle-item');

sliderToggles[0].addEventListener('click', function () {
  sliderUnit.classList.remove('physique-comparison__toggle--after');
  sliderUnit.classList.add('physique-comparison__toggle--before');
  sliderImages[0].classList.remove('physique-comparison__image--invisible');
  sliderImages[0].classList.add('physique-comparison__image--visible');
  sliderImages[1].classList.remove('physique-comparison__image--visible');
  sliderImages[1].classList.add('physique-comparison__image--invisible');
});

sliderToggles[1].addEventListener('click', function () {
  sliderUnit.classList.remove('physique-comparison__toggle--before');
  sliderUnit.classList.add('physique-comparison__toggle--after');
  sliderImages[1].classList.remove('physique-comparison__image--invisible');
  sliderImages[1].classList.add('physique-comparison__image--visible');
  sliderImages[0].classList.remove('physique-comparison__image--visible');
  sliderImages[0].classList.add('physique-comparison__image--invisible');
});
