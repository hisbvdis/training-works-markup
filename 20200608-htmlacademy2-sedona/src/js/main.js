var navBtn = document.querySelector(".navBtn");
var nav = document.querySelector(".nav");

navBtn.onclick = function() {
  nav.classList.toggle("nav--opened");
}


function navOpenedRemove() {
  nav.classList.remove("nav--opened");
  nav.classList.remove("nav--noJS");
}
document.onload = navOpenedRemove();