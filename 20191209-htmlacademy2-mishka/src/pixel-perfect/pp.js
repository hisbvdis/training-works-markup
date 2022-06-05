window.onload = setTimeout(extensionExistingCheck, 1000);

function extensionExistingCheck() {
  if (document.querySelector('.chromeperfectpixel-overlay-container') != null) {
    pp();
  }
}

function pp() {
  // Perfect Pixel layer max-height
  var bodyHeight = document.body.offsetHeight + "px";
  var ppLayer = document.querySelector('.chromeperfectpixel-overlay-container');

  // ppLayer.style.maxHeight = bodyHeight;
  ppLayer.style.overflowY = "hidden";


  // Collapse blocks
  var panel = document.getElementById('chromeperfectpixel-panel');
  var layersBlock = panel.querySelector('.chromeperfectpixel-panel-section--layers');
  var buttonsBlock = panel.querySelector('.chromeperfectpixel-panel-origin');
  var headerBlock = panel.querySelector('.chromeperfectpixel-section-opacity__titles');

  layersBlock.classList.toggle('pp__block--hidden');
  buttonsBlock.classList.toggle('pp__block--hidden');
  headerBlock.classList.toggle('pp__block--hidden');


  // Add button
  var ppHeader = panel.querySelector('.chromeperfectpixel-panel-header');
  var ppTitle = panel.querySelector('.chromeperfectpixel-title-container');
  var ppButton = document.createElement('button');

  ppButton.innerHTML = "%";
  ppHeader.append(ppButton);

  ppButton.addEventListener('click', function(e) {
    e.preventDefault;
    layersBlock.classList.toggle('pp__block--hidden');
    buttonsBlock.classList.toggle('pp__block--hidden');
    headerBlock.classList.toggle('pp__block--hidden');
  })
}