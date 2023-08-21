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
  // TODO: Clean this up to avoid repeating so much code.

  const buttonGridDiv = document.createElement("div");
  buttonGridDiv.id = "rg_button_grid";
  buttonGridDiv.style.display = "grid";
  buttonGridDiv.style.gridTemplateColumns = "40% 40%";
  buttonGridDiv.style.gap = "10%";

  const buttonGridItem_1_1 = document.createElement("div");
  buttonGridItem_1_1.id = "rg_button_grid_item_1_1";
  buttonGridItem_1_1.style.gridRow = "1";
  buttonGridItem_1_1.style.gridColumn = "1";
  buttonGridDiv.appendChild(buttonGridItem_1_1);
  const quackButton = document.createElement("button");
  quackButton.id = "rg_button_quack";
  quackButton.innerHTML = "Quack!";
  quackButton.onclick = function() {
    rg_buttonWasClicked(quackButton);
  };
  quackButton.style.borderRadius = "12px";
  quackButton.style.fontSize = "5vmax";
  quackButton.style.width = "100%";
  quackButton.style.height = "43vh";
  buttonGridItem_1_1.appendChild(quackButton);

  const buttonGridItem_1_2 = document.createElement("div");
  buttonGridItem_1_2.id = "rg_button_grid_item_1_2";
  buttonGridItem_1_2.style.gridRow = "1";
  buttonGridItem_1_2.style.gridColumn = "2";
  buttonGridDiv.appendChild(buttonGridItem_1_2);
  const woofButton = document.createElement("button");
  woofButton.id = "rg_button_woof";
  woofButton.innerHTML = "Woof!";
  woofButton.onclick = function() {
    rg_buttonWasClicked(woofButton);
  };
  woofButton.style.borderRadius = "12px";
  woofButton.style.fontSize = "5vmax";
  woofButton.style.width = "100%";
  woofButton.style.height = "43vh";
  buttonGridItem_1_2.appendChild(woofButton);

  const buttonGridItem_2_1 = document.createElement("div");
  buttonGridItem_2_1.id = "rg_button_grid_item_2_1";
  buttonGridItem_2_1.style.gridRow = "2";
  buttonGridItem_2_1.style.gridColumn = "1";
  buttonGridDiv.appendChild(buttonGridItem_2_1);
  const meowButton = document.createElement("button");
  meowButton.id = "rg_button_meow";
  meowButton.innerHTML = "Meow!";
  meowButton.onclick = function() {
    rg_buttonWasClicked(meowButton);
  };
  meowButton.style.borderRadius = "12px";
  meowButton.style.fontSize = "5vmax";
  meowButton.style.width = "100%";
  meowButton.style.height = "43vh";
  buttonGridItem_2_1.appendChild(meowButton);

  const buttonGridItem_2_2 = document.createElement("div");
  buttonGridItem_2_2.id = "rg_button_grid_item_2_2";
  buttonGridItem_2_2.style.gridRow = "2";
  buttonGridItem_2_2.style.gridColumn = "2";
  buttonGridDiv.appendChild(buttonGridItem_2_2);
  const moooButton = document.createElement("button");
  moooButton.id = "rg_button_mooo";
  moooButton.innerHTML = "Mooo!";
  moooButton.onclick = function() {
    rg_buttonWasClicked(moooButton);
  };
  moooButton.style.borderRadius = "12px";
  moooButton.style.fontSize = "5vmax";
  moooButton.style.width = "100%";
  moooButton.style.height = "43vh";
  buttonGridItem_2_2.appendChild(moooButton);

  const body = document.body;
  body.appendChild(buttonGridDiv);
};

// DOM set-up

document.addEventListener("DOMContentLoaded", _rg_setUpDOM);
