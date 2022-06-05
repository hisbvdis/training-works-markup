"use strict";

let navList = document.querySelector(".nav__list");
let currentLink = document.querySelector(".nav__link--active");

navList.addEventListener("click", forNavlink_Navlist_Click_Handler);


function forNavlink_Navlist_Click_Handler(evt) {
  // Если нажали не на ссылку, отмена
  if (!evt.target.classList.contains("nav__link")) return;

  removeClassActive(currentLink);
  addClassActive(evt.target);
  currentLink = evt.target;
}


function removeClassActive(link) {
  link.classList.remove("nav__link--active");
}


function addClassActive(link) {
  link.classList.add("nav__link--active");
}