  let mainMenu = document.querySelector('.main-menu');
  let menuToggle = document.querySelector('.main-menu__toggle');

  mainMenu.classList.remove('main-menu--nojs');

  menuToggle.addEventListener('click', function() {
    if (mainMenu.classList.contains('main-menu--closed')) {
      mainMenu.classList.remove('main-menu--closed');
      mainMenu.classList.add('main-menu--opened');
    } else {
      mainMenu.classList.add('main-menu--closed');
      mainMenu.classList.remove('main-menu--opened');
    }
  });
