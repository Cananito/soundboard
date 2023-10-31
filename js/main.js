const soundFilePathsById = {
  "button_quack": "resources/quack.m4a",
  "button_woof": "resources/woof.m4a",
  "button_meow": "resources/meow.m4a",
  "button_mooo": "resources/mooo.m4a",
};

function buttonWasClicked(element) {
  var soundFilePath = soundFilePathsById[element.id];
  play(soundFilePath);
};

function play(soundFilePath) {
  let audio = new Audio(soundFilePath);
  audio.play();
};


// DOM set-up

function setUpDOM() {
  // TODO: Clean this up to avoid repeating so much code.

  const html = document.body;
  html.style.margin = "0";
  html.style.padding = "0";
  html.style.boxSizing = "border-box";

  const buttonContainer = document.createElement("div");
  buttonContainer.style.display = "flex";
  buttonContainer.style.flexWrap = "wrap";

  const quackButton = document.createElement("button");
  quackButton.id = "button_quack";
  quackButton.innerHTML = "Quack!";
  quackButton.addEventListener("click", function(e) {
    buttonWasClicked(quackButton);
  });
  quackButton.style.fontSize = "5vmax";
  quackButton.style.flexBasis = "50%";
  quackButton.style.height = "50vh";
  buttonContainer.appendChild(quackButton);

  const woofButton = document.createElement("button");
  woofButton.id = "button_woof";
  woofButton.innerHTML = "Woof!";
  woofButton.addEventListener("click", function(e) {
    buttonWasClicked(woofButton);
  });
  woofButton.style.fontSize = "5vmax";
  woofButton.style.flexBasis = "50%";
  woofButton.style.height = "50vh";
  buttonContainer.appendChild(woofButton);

  const meowButton = document.createElement("button");
  meowButton.id = "button_meow";
  meowButton.innerHTML = "Meow!";
  meowButton.addEventListener("click", function(e) {
    buttonWasClicked(meowButton);
  });
  meowButton.style.fontSize = "5vmax";
  meowButton.style.flexBasis = "50%";
  meowButton.style.height = "50vh";
  buttonContainer.appendChild(meowButton);

  const moooButton = document.createElement("button");
  moooButton.id = "button_mooo";
  moooButton.innerHTML = "Mooo!";
  moooButton.addEventListener("click", function(e) {
    buttonWasClicked(moooButton);
  });
  moooButton.style.fontSize = "5vmax";
  moooButton.style.flexBasis = "50%";
  moooButton.style.height = "50vh";
  buttonContainer.appendChild(moooButton);

  const body = document.body;
  body.appendChild(buttonContainer);
};

document.addEventListener("DOMContentLoaded", setUpDOM);
