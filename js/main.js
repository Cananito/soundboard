// Public

function rg_buttonWasClicked(element) {
  console.log("Element clicked: " + element.id + " - " + element.innerHTML);
  var soundFilePath = "TODO"
  _rg_play(soundFilePath);
};

// Private

function _rg_play(soundFilePath) {
  console.log("Sound file path: " + soundFilePath);
};

function _rg_setUpDOM() {
  let quackButton = document.getElementById("rg_button_quack");
  quackButton.onclick = function() {
    rg_buttonWasClicked(quackButton);
  };
};

// DOM set-up

document.addEventListener("DOMContentLoaded", _rg_setUpDOM);
