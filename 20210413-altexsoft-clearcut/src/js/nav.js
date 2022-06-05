let page = document.querySelector(".page");
let navBtn = document.querySelector(".navBtn");

navBtn.addEventListener("click", navBtn_Click_Handler);


function navBtn_Click_Handler() {
  page.classList.toggle("openedNav");
}