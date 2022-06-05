"use strict";

var navBtn = document.querySelector(".navBtn");
var nav = document.querySelector(".nav");
navBtn.addEventListener("click", function(event) {
  event.preventDefault();
  nav.classList.toggle("nav--opened");
})


function removeNavOpened() {
  nav.classList.remove("nav--opened");
  nav.classList.remove("nav--nojs");
}
window.onload = removeNavOpened();