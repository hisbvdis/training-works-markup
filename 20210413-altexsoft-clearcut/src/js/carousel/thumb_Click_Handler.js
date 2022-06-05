"use strict";

// Импорт функции переключения слайда
import { showSlide } from "./changeSlide.js";

// Элемент ".thumbs"
let thumbs = document.querySelector(".thumbs__list");


// Добавить обработчик кликов на элемент ".thumbs"
thumbs.addEventListener("click", thumbs_Click_Handler);


// Функция-обработчик кликов на элемент ".thumbs"
function thumbs_Click_Handler(evt) {
  // Если нажатие было мышью, но не левой кнопкой, остановить обработчик
  if (evt.pointerType === "mouse" && evt.which !== 1) return;

  // Список DOM-элементов эксизов преобразовать в массив
  let thumbsList = Array.from(thumbs.children);
  // Определить DOM-элемент текущего эскиза
  let currentItem = evt.target.closest(".thumbs__item");
  // Определить индекс текущего элемента в массиве
  let index = thumbsList.indexOf(currentItem);

  // Переключиться на картинку с данным индексом
  // "+1", потому что в массиве отсчёт начинается с "0"
  showSlide(index + 1);
}