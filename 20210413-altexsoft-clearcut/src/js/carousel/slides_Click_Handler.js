"use strict";

// Импорт функции вычисления положения указателя относительно ".slides"
import { calcPointerToSlidesPos } from "./calcPointerToSlidesPos.js";
// Импорт функций переключения слайдов
import { prevSlide, nextSlide } from "./changeSlide.js";

// Элемент ".slides"
let slides = document.querySelector(".slides");


// Добавить обработчик "нажатий указателя"
slides.addEventListener("click", slides_Click_Handler);


// Функция-обработчик нажатий
function slides_Click_Handler(evt) {
  // Если было нажатие мышью, но не левой кнопкой, отменить прекратить обработчик
  if (evt.pointerType === "mouse" && evt.which !== 1) return;

  // Если нажатие было на слайд, а не на описание слайда
  if (!evt.target.classList.contains("slides__img")) return;

  // Определить положение указателя относительно ".slides"
  let pointerArea = calcPointerToSlidesPos(evt, slides);

  // Если функция определения положения возвращает "prev", переключить слайд назад
  if (pointerArea === "prev") prevSlide();
  // Если функция определения положения возвращает "next", переключить слайд вперёд
  if (pointerArea === "next") nextSlide();
}