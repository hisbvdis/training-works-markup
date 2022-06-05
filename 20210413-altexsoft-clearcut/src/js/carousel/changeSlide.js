"use strict";

// Список элементов "слайдов"
let slides = document.querySelector(".slides__list").children;
// Список элементов "эскизов"
let thumbs = document.querySelector(".thumbs__list").children;

// Элемент "текущего слайда"
let currentSlideElem = slides[0];
// Элемент "текущего эскиза"
let currentThumbElem = thumbs[0];

// Текущий индекс по умолчанию = "1"
let currentIndex = 1;



// Переключить слайд "назад"
export function prevSlide() {
  showSlide(currentIndex - 1);          /* Функция 0: Переключить слайд */
}


// Переключить слайд "вперёд"
export function nextSlide() {
  showSlide(currentIndex + 1);          /* Функция 0: Переключить слайд */
}


// 0. Собирательная функция "Переключить слайд"
export function showSlide(index) {
  let nextIndex = calcNextIndex(index); /* Функция 1:  Вычислить следующий индекс */
  changeSlide(nextIndex);               /* Функция 2:  Сменить слайд */
  changeThumb(nextIndex);               /* Функция 3:  Сменить эскиз */
  updateThings(nextIndex);              /* Функция 4:  Обновить значения и переменные */
}


// 1. Вычислить следующий индекс
function calcNextIndex(index) {
  // 1.1. Если полученный индекс больше количества слайдов, вернуть "1"
  if (index > slides.length) return 1;

  // 1.2. Если полученный индекс меньше нуля, вернуть "индекс последнего слайда"
  if (index < 1) return slides.length;

  // 1.3. Иначе - вернуть индекс в исходном виде
  return index;
}


// 2. Сменить слайд
function changeSlide(nextIndex) {
  // 2.1. Скрыть элемент текущего слайда
  currentSlideElem.classList.remove("slides__item--visible");

  // 2.2. Показать элемент слайда с заданным индексом
  slides[nextIndex - 1].classList.add("slides__item--visible");
}


// 3. Сменить эскиз
function changeThumb(nextIndex) {
  // 3.1. Убрать отметку с элемента текущего эскиза
  currentThumbElem.classList.remove("thumbs__item--active");

  // 3.2. Пометить элемент эскиза с заданным индексом
  thumbs[nextIndex - 1].classList.add("thumbs__item--active");
}


// 4. Обновить значения и переменные
function updateThings(nextIndex) {
  // Обновить "текущий индекс" (задать значение "следующего индекса")
  currentIndex = nextIndex;

  // Обновить элемент "текущего слайда"
  currentSlideElem = slides[nextIndex - 1];

  // Обновить элемент "текущего эскиза"
  currentThumbElem = thumbs[nextIndex - 1];
}