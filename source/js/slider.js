let sliderImages = document.querySelectorAll('.physique-comparison__image');
let sliderUnit = document.querySelector('.physique-comparison__toggle');
let sliderToggles = document.querySelectorAll('.physique-comparison__toggle-item');

console.log (sliderImages);
console.log (sliderUnit);
console.log (sliderToggles);

sliderToggles[0].addEventListener('click', function () {
  sliderUnit.classList.remove('physique-comparison__toggle--after');
  sliderUnit.classList.add('physique-comparison__toggle--before');
  sliderImages[0].classList.remove('visually-hidden');
  sliderImages[1].classList.add('visually-hidden');
});

sliderToggles[1].addEventListener('click', function () {
  sliderUnit.classList.remove('physique-comparison__toggle--before');
  sliderUnit.classList.add('physique-comparison__toggle--after');
  sliderImages[1].classList.remove('visually-hidden');
  sliderImages[0].classList.add('visually-hidden');
});
