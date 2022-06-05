var nav = document.querySelector('.nav');
var navButton = document.querySelector('.nav__btn');
var navUnderlay = nav.querySelector('.nav__underlay');

var userPanelLoginBtn = document.querySelector('.user-panel__login-btn');
var loginModal = document.querySelector('.login');
var modalUnderlay = document.querySelector('.modal-underlay');


// Mobile navigation open/close
function removeShow() {
  nav.classList.remove('nav--opened');
  nav.classList.remove('nav--nojs');
};

navButton.addEventListener('click', function(e) {
  e.preventDefault();
  nav.classList.toggle('nav--opened');
});

document.onload = removeShow();

navUnderlay.addEventListener('click', function(e) {
  e.preventDefault();
  nav.classList.toggle('nav--opened');
})


// Login modal open/close
userPanelLoginBtn.addEventListener('click', function(e) {
  e.preventDefault();
  nav.classList.remove('nav--opened');
  loginModal.classList.add('modal--show');
  modalUnderlay.classList.add('modal-underlay--show');

  var modalCloseBtn = loginModal.querySelector('.modal__close-btn');
  modalCloseBtn.addEventListener('click', function(e) {
    loginModal.classList.remove('modal--show');
    modalUnderlay.classList.remove('modal-underlay--show');
  })

  modalUnderlay.addEventListener('click', function(e) {
    e.preventDefault();
    loginModal.classList.remove('modal--show');
    modalUnderlay.classList.remove('modal-underlay--show');
  })

  window.addEventListener('keydown', function(e) {
    if (e.keyCode == 27 && loginModal.classList.contains('modal--show')) {
      e.preventDefault();
      loginModal.classList.remove('modal--show');
      modalUnderlay.classList.remove('modal-underlay--show');
    }
  })
})