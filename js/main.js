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

function createButton(id, innerHTML, clickEventListener) {
  const button = document.createElement("button");
  button.id = id;
  button.innerHTML = innerHTML;
  button.addEventListener("click", clickEventListener);
  button.style.fontSize = "5vmax";
  button.style.flexBasis = "50%";
  button.style.height = "50vh";
  return button;
}

function setUpDOM() {
  const html = document.body;
  html.style.margin = "0";
  html.style.padding = "0";

  const buttonContainer = document.createElement("div");
  buttonContainer.style.display = "flex";
  buttonContainer.style.flexWrap = "wrap";

  const quackButton = createButton("button_quack", "Quack!", function(e) {
    buttonWasClicked(quackButton);
  });
  buttonContainer.appendChild(quackButton);

  const woofButton = createButton("button_woof", "Woof!", function(e) {
    buttonWasClicked(woofButton);
  });
  buttonContainer.appendChild(woofButton);

  const meowButton = createButton("button_meow", "Meow!", function(e) {
    buttonWasClicked(meowButton);
  });
  buttonContainer.appendChild(meowButton);

  const moooButton = createButton("button_mooo", "Mooo!", function(e) {
    buttonWasClicked(moooButton);
  });
  buttonContainer.appendChild(moooButton);

  const body = document.body;
  body.appendChild(buttonContainer);
};

document.addEventListener("DOMContentLoaded", setUpDOM);
