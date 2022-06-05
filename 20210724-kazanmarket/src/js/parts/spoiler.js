let openedSpoiler;


document.addEventListener("click", forSpoilerSummary_onDocument_Click_Handler);


function openSpoiler(elem) {
  elem.setAttribute("open", true)

  if (openedSpoiler) closeSpoiler(openedSpoiler);
  openedSpoiler = elem;

  document.addEventListener("click", forSpoiler_onDocument_Click_Handler);
}


function closeSpoiler(elem) {
  elem.removeAttribute("open")
  openedSpoiler = null;
}


function forSpoilerSummary_onDocument_Click_Handler(evt) {
  let trigger = evt.target.closest("[data-role='spoilerTrigger']");
  if (!trigger) return;
  evt.preventDefault();

  let spoiler = trigger.closest("details");
  
  if (!spoiler.open) {
    openSpoiler(spoiler);
  }
  else if (spoiler.open) {
    closeSpoiler(spoiler);
  }
}


function forSpoiler_onDocument_Click_Handler(evt) {
  if (evt.target.closest("[data-js='answer']")) return;
  if (evt.target.closest("[data-role='spoilerTrigger']")) return;

  closeSpoiler(openedSpoiler);

  document.removeEventListener("click", forSpoiler_onDocument_Click_Handler);
}