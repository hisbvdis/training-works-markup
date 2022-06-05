import {openModal} from "./modal.js";
const sideBtn = document.querySelector(".sideBtn");


sideBtn.addEventListener("click", sideBtn_Click_Handler);



// Нажали на кнопку "Меню"
//   => Добавить/убрать из <body> класс "sideOpened"
function sideBtn_Click_Handler(evt) {
  if (evt.which !== 1) return;

  let id = this.dataset.modal;
  let modal = document.querySelector(`#${id}`);

  // openModal(modal, {trigger: this, bodyClass: "sideOpened"});
  openModal(modal, {
    trigger: this,
    openActions: [() => document.body.classList.add("sideOpened")],
    closeActions: [() => document.body.classList.remove("sideOpened")],
  });
}