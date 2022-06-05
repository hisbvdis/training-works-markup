"use strict";

// Вычисление положения указателя относительно элемента `.slides`
export function calcPointerToSlidesPos(evt, slides) {
  // Координата указателя по оси "X" относительно документа
  let pointerX = evt.pageX;

  // Координата левой грани элемента ".slides"
  let slidesLeftBorder = slides.getBoundingClientRect().left;

  // Ширина элемента ".slides"
  let slidesWidth = slides.getBoundingClientRect().width;

  // Расстояние от левой грани элемента ".slides" до указателя
  let distanceFromSlidesLeftToPointer = pointerX - slidesLeftBorder;

  // Расстояние от левой грани элемента ".slides" до указателя - в процентах от ширины ".slides"
  let percents = Math.trunc(distanceFromSlidesLeftToPointer / slidesWidth * 100);


  // Если указатель в левой половине элемента (percents <= 40%), вернуть "prev"
  if (percents <= 40) return "prev";

  // Если указатель в левой половине элемента (percents < 40%), вернуть "prev"
  if (percents > 40) return "next";
}