"use strict";import{showSlide}from"./changeSlide.js";let thumbs=document.querySelector(".thumbs__list");function thumbs_Click_Handler(t){if("mouse"!==t.pointerType||1===t.which){let e=Array.from(thumbs.children);t=t.target.closest(".thumbs__item"),t=e.indexOf(t);showSlide(t+1)}}thumbs.addEventListener("click",thumbs_Click_Handler);