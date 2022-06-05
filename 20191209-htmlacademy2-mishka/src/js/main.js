var navBtn = document.querySelector('.js-navBtn');
var nav = document.querySelector('.nav');


// Default nav opened classes delete
function navRemoveOpen() {
  nav.classList.remove('nav--opened');
  nav.classList.remove('nav--nojs');
}
document.onload = navRemoveOpen();


// Nav button click
navBtn.addEventListener('click', function(e) {
  e.preventDefault();
  nav.classList.toggle('nav--opened');
})


// Отслеживание нажатия на кнопку открытия модального окна
// ++ Кнопка открытия модалки
var addCartBtn = document.querySelector('.js-addCartBtn');
addCartBtn.addEventListener('click', function(e) {
  e.preventDefault();
  showModal('js-addCart'); // Открытие модального окна
})


// ++ Функция открытия модального окна
function showModal(modalClass) {
  var modal = document.querySelector('.' + modalClass);
  modal.classList.add('modal--show');

  showModalUnderlay(modal); // Открытие подложки
  modalEnterDetect(modal); // Отслеживание Enter
  modalEscDetect(modal); // Отслеживание Escape
}


// ++ Функция открытия подложки модального окна
var underlay = document.querySelector('.modalUnderlay');
function showModalUnderlay(modal) {
  underlay.classList.add('modalUnderlay--show');

  // Отслеживание Esc для подложки
  window.addEventListener('keydown', function(e) {
    if (e.keyCode == 27 && underlay.classList.contains('modalUnderlay--show')) {
      e.preventDefault();
      closeModalUnderlay(underlay); // Закрытие подложки
    }
  })

  // Отслеживание нажатия на подложку => закрытие подложки и модального окна
  underlay.addEventListener('click', function(e) {
    e.preventDefault();
    closeModalUnderlay(underlay); // Закрытие подложки
    closeModal(modal); // Закрытие модального окна
  })
}


// ++ Функция отслеживания Enter => нажатие на кнопку действия в модальном окне
function modalEnterDetect(modal) {
  var modalEnter = modal.querySelector('.js-modalEnterBtn');
  window.addEventListener('keydown', function(e) {
    if (e.keyCode == 13 && modal.classList.contains('modal--show')) {
      e.preventDefault();
      modalEnter.click(); // Нажатие на кнопку действия
    }
  })
}


// ++ Функция отслеживания нажатия Esc => закрытие модального окна
function modalEscDetect(modal) {
  window.addEventListener('keydown', function(e) {
    if (e.keyCode == 27 && modal.classList.contains('modal--show')) {
      e.preventDefault();
      closeModal(modal); // Закрытие модального окна
    }
  })
}


// ++ Функция закрытия модального окна
function closeModal(modal) {
  modal.classList.remove('modal--show')
}


// ++ Функция закрытия подложки модальных окон
function closeModalUnderlay(underlay) {
  underlay.classList.remove('modalUnderlay--show');
}