document.addEventListener("click", forcarouselbtn_onDocument_Click_Handler);



// =================================================================
// ФУНКЦИИ
// =================================================================
// Предыдущий элемент
function prevSlide(currentItem) {
  let prevItem = currentItem.previousElementSibling;
  if (!prevItem) return;

  currentItem.classList.remove("carousel__item--visible");
  prevItem.classList.add("carousel__item--visible");
}

// Следующий элемент
function nextSlide(currentItem) {
  let nextItem = currentItem.nextElementSibling;
  if (!nextItem) return;

  currentItem.classList.remove("carousel__item--visible");
  nextItem.classList.add("carousel__item--visible");
}


// =================================================================
// ОБРАБОТЧИКИ
// =================================================================
// Нажали кнопку листания
//    => Пролистать
function forcarouselbtn_onDocument_Click_Handler(evt) {
  let trigger = evt.target.closest("[data-trigger='carousel']");
  if (!trigger) return;
  evt.preventDefault();

  let direction = trigger.dataset.dir;
  let slides = document.querySelector(trigger.dataset.target);
  let currentItem = slides.querySelector(".carousel__item--visible")
  
  if (direction === "prev") prevSlide(currentItem);
  if (direction === "next") nextSlide(currentItem);
}