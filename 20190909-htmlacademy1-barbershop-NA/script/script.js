// Modals showing
var loginLink = document.querySelector(".login-link");
var mapLink = document.querySelector('.open-map');
var modalOverlay = document.querySelector('.modal-overlay');

var loginForm = document.querySelector('.login-form');
var loginField = document.getElementById('login-form-login');
var passField = document.getElementById('login-form-pass');

var localStorageSupport = true;
var userLogin = '';


// Local Storage accessiblility
try {
    userLogin = localStorage.getItem("userLogin");
} catch (err) {
    localStorageSupport = false;
}

// Modal Login open
loginLink.addEventListener("click", function(evt) {
    evt.preventDefault();

    var modal = document.querySelector(".modal-login")
    modal.classList.add("modal-show");
    modalOverlay.classList.add('modal-show');

    var modalCloseBtn = modal.querySelector(".modal-close-btn");
    modalCloseBtn.addEventListener("click", function(evt) {
        evt.preventDefault();
        modal.classList.remove("modal-show");
        modalOverlay.classList.remove("modal-show");
    })

    modalOverlay.addEventListener("click", function(evt) {
        evt.preventDefault();
        modal.classList.remove("modal-show");
        modalOverlay.classList.remove("modal-show");
    })

    if (localStorageSupport && userLogin) {
        loginField.value = userLogin;
        passField.focus();
    } else {
        loginField.focus();
    }

    window.addEventListener('keydown', function(evt) {
        if (evt.keyCode === 27 && modal.classList.contains("modal-show")) {
            evt.preventDefault();
            modal.classList.remove("modal-show");
            modalOverlay.classList.remove("modal-show");
        }
    })
});

// Login form checking
loginForm.addEventListener('submit', function(evt) {
    if (!loginField.value || !passField.value) {
        evt.preventDefault();
        console.log("Need to fill in the fields");
    } else {
        if (localStorageSupport) {
            localStorage.setItem('userLogin', loginField.value);
        }
    }
})

// Modal Map open
mapLink.addEventListener('click', function(evt) {
    evt.preventDefault();

    var modal = document.querySelector(".modal-map")
    modal.classList.add("modal-show");
    modalOverlay.classList.add('modal-show');

    var modalCloseBtn = modal.querySelector(".modal-close-btn");
    modalCloseBtn.addEventListener("click", function(evt) {
        evt.preventDefault();
        modal.classList.remove("modal-show");
        modalOverlay.classList.remove("modal-show");
    })

    modalOverlay.addEventListener("click", function(evt) {
        evt.preventDefault();
        modal.classList.remove("modal-show");
        modalOverlay.classList.remove("modal-show");
    })

    window.addEventListener('keydown', function(evt) {
        if (evt.keyCode === 27 && modal.classList.contains("modal-show")) {
            evt.preventDefault();
            modal.classList.remove("modal-show");
            modalOverlay.classList.remove("modal-show");
        }
    })
})