var modalOverlay = document.querySelector('.modal-overlay');
var modalFeedback = document.querySelector('.modal-feedback');
var buttonFeedback = document.querySelector('.feedback-button');

var modalClose;
var keyDown = '';

var form = modalFeedback.querySelector('.feedback-form');
var buttonSubmit = modalFeedback.querySelector('.btn');
var inputName = modalFeedback.querySelector('[name="name"');
var inputEmail = modalFeedback.querySelector('[name="email"');
var inputMessage = modalFeedback.querySelector('[name="message"');
var localStorageLogin = localStorage.getItem('login');

buttonFeedback.addEventListener('click', function(evt) {
    evt.preventDefault();
    modalOverlay.classList.add('modal-show');
    modalFeedback.classList.add('modal-show');
    if (localStorageLogin) {
        inputName.value = localStorageLogin;
        inputEmail.focus();
    } else {
        inputName.focus();
    }

    modalClose = modalFeedback.querySelector('.modal-close');
    modalClose.addEventListener('click', function(evt) {
        evt.preventDefault();
        modalOverlay.classList.remove('modal-show');
        modalFeedback.classList.remove('modal-show');
    })
    modalOverlay.addEventListener('click', function(evt) {
        evt.preventDefault();
        modalOverlay.classList.remove('modal-show');
        modalFeedback.classList.remove('modal-show');
    })

    window.addEventListener('keydown', function(evt) {
        if (evt.keyCode == 27) {
            modalOverlay.classList.remove('modal-show');
            modalFeedback.classList.remove('modal-show');
        }
    })
})

form.addEventListener('submit', function(evt) {
    if (!inputName.value || !inputEmail.value || !inputMessage.value) {
        evt.preventDefault();
        buttonSubmit.textContent = 'Заполните поля';
    } else {
        localStorage.setItem('login', inputName.value);
    }
})