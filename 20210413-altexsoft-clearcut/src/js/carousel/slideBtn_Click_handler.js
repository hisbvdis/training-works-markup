"use strict";

// Импорт двух функций переключения слайдов
import { prevSlide, nextSlide } from "./changeSlide.js";

// Кнопка "Назад"
let prevBtn = document.querySelector(".slides__slideBtn--prev");
// Кнопка "Вперёд"
let nextBtn = document.querySelector(".slides__slideBtn--next");

// Добавить обработчик нажатия на кнопку "Назад"
prevBtn.addEventListener("click", prevBtn_Click_Handler);
// Добавить обработчик нажатия на кнопку "Вперёд"
nextBtn.addEventListener("click", nextBtn_Click_Handler);


// Функция обработчик нажатия кнопки "Назад"
function prevBtn_Click_Handler(evt) {
  // Отменить действие браузера по умочланию (на всякий случай)
  evt.preventDefault();
  // Остановить распространение, чтобы клик не возникал на родительском элементе ".slides"
  evt.stopPropagation();

  // Переключить на один слайд назад
  prevSlide();
}


// Функция обработчик нажатия кнопки "Вперёд"
function nextBtn_Click_Handler(evt) {
  // Отменить действие браузера по умочланию (на всякий случай)
  evt.preventDefault();
  // Остановить распространение, чтобы клик не возникал на родительском элементе ".slides"
  evt.stopPropagation();

  // Переключить на один слайд вперёд
  nextSlide();
}