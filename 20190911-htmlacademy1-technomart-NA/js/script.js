var feedbackBtn = document.querySelector('.js-btn--feedback');
var feedbackModal = document.querySelector('.modal-feedback');
var feedbackForm = feedbackModal.querySelector('.feedback-form');
var feedbackName = feedbackForm.querySelector('[name="name"]');
var feedbackEmail = feedbackForm.querySelector('[name="email"]');
var feedbackMessage = feedbackForm.querySelector('[name="message"]');
var feedbackSubmitBtn = feedbackForm.querySelector('.submit-btn');

var mapBtn = document.querySelector('.contacts-map-btn');
var mapModal = document.querySelector('.modal-map');

var cartBtn = document.querySelector('.cart');
var cartModal = document.querySelector('.modal-cart');

var modalOverlay = document.querySelector('.modal-overlay');

var localStorageLogin = localStorage.getItem('userLogin');

// Feedback modal
feedbackBtn.addEventListener('click', function(e) {
    e.preventDefault();
    feedbackModal.classList.add('modal--show');
    modalOverlay.classList.add('modal--show');

    if (localStorageLogin) {
        feedbackName.value = localStorageLogin;
        feedbackEmail.focus();
    } else {
        feedbackName.focus();
    }

    var closeModalBtn = feedbackModal.querySelector('.modal-close');
    closeModalBtn.addEventListener('click', function(e) {
        e.preventDefault();
        feedbackModal.classList.remove('modal--show');
        modalOverlay.classList.remove('modal--show');
    })

    modalOverlay.addEventListener('click', function(e) {
        feedbackModal.classList.remove('modal--show');
        modalOverlay.classList.remove('modal--show');
    })

    window.addEventListener('keydown', function(e) {
        if (e.keyCode == 27) {
            e.preventDefault();
            feedbackModal.classList.remove('modal--show');
            modalOverlay.classList.remove('modal--show');
        }
    })

    feedbackForm.addEventListener('submit', function(e) {
        if (!feedbackName.value || !feedbackEmail.value || !feedbackMessage.value) {
            e.preventDefault();
            feedbackSubmitBtn.textContent = 'Заполните поля';
        } else {
            localStorage.setItem('userLogin', feedbackName.value);
        }
    })
});


// Map modal
mapBtn.addEventListener('click', function(e) {
    e.preventDefault();
    mapModal.classList.add('modal--show');
    modalOverlay.classList.add('modal--show');

    if (localStorageLogin) {
        feedbackName.value = localStorageLogin;
        feedbackEmail.focus();
    } else {
        feedbackName.focus();
    }

    var closeModalBtn = mapModal.querySelector('.modal-close');
    closeModalBtn.addEventListener('click', function(e) {
        e.preventDefault();
        mapModal.classList.remove('modal--show');
        modalOverlay.classList.remove('modal--show');
    })

    modalOverlay.addEventListener('click', function(e) {
        mapModal.classList.remove('modal--show');
        modalOverlay.classList.remove('modal--show');
    })

    window.addEventListener('keydown', function(e) {
        if (e.keyCode == 27) {
            e.preventDefault();
            mapModal.classList.remove('modal--show');
            modalOverlay.classList.remove('modal--show');
        }
    })
});


// Cart modal
cartBtn.addEventListener('click', function(e) {
    e.preventDefault();
    cartModal.classList.add('modal--show');
    modalOverlay.classList.add('modal--show');

    if (localStorageLogin) {
        feedbackName.value = localStorageLogin;
        feedbackEmail.focus();
    } else {
        feedbackName.focus();
    }

    var closeModalBtn = cartModal.querySelector('.modal-close');
    closeModalBtn.addEventListener('click', function(e) {
        e.preventDefault();
        cartModal.classList.remove('modal--show');
        modalOverlay.classList.remove('modal--show');
    })

    modalOverlay.addEventListener('click', function(e) {
        cartModal.classList.remove('modal--show');
        modalOverlay.classList.remove('modal--show');
    })

    window.addEventListener('keydown', function(e) {
        if (e.keyCode == 27) {
            e.preventDefault();
            cartModal.classList.remove('modal--show');
            modalOverlay.classList.remove('modal--show');
        }
    })
});