"use strict";

// Импорт функции вычисления положения указателя относительно ".slides"
import { calcPointerToSlidesPos } from "./calcPointerToSlidesPos.js";

// Элемент ".slides"
let slides = document.querySelector(".slides");
// Кнопка "Назад"
let slideBtnPrev = document.querySelector(".slides__slideBtn--prev");
// // Кнопка "Вперёд"
let slideBtnNext = document.querySelector(".slides__slideBtn--next");


// Добавить обработчик события "движение указателя над элементом"
slides.addEventListener("pointermove", slides_Pointermove_Handler);


// Функция-обработчик
function slides_Pointermove_Handler(evt) {
  let pointerArea = calcPointerToSlidesPos(evt, slides);

  if (pointerArea === "prev") {
    removeOpacityModif(slideBtnNext);
    addOpacityModif(slideBtnPrev);
  }

  if (pointerArea === "next") {
    removeOpacityModif(slideBtnPrev);
    addOpacityModif(slideBtnNext);
  }
}


// Добавить класс-модификатор прозрачности к кнопке
function addOpacityModif(slideBtn) {
  slideBtn.classList.add("slideBtn--highlight");
}


// Удалить класс-модификатор прозрачности у кнопки
function removeOpacityModif(slideBtn) {
  slideBtn.classList.remove("slideBtn--highlight");
}
