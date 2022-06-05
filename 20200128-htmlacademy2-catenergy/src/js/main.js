"use strict";

var nav = document.querySelector(".nav");
var navBtn = document.querySelector(".navBtn")


function removeNavOpened() {
  nav.classList.remove("nav--opened");
  nav.classList.remove("nav--nojs");
}
window.onload = removeNavOpened();


navBtn.addEventListener("click", function() {
  nav.classList.toggle("nav--opened");
})