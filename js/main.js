const audiosById = {};

function buttonWasClicked(element) {
  var audio = audiosById[element.id];
  if (!audio) {
    return;
  }
  audio.play();
};

function createButton(id, innerHTML, clickEventListener) {
  const button = document.createElement("button");
  button.id = id;
  button.innerHTML = innerHTML;
  button.addEventListener("click", clickEventListener);
  button.style.fontSize = "5vmax";
  button.style.flexBasis = "50%";
  button.style.height = "50vh";
  return button;
};

function initializeUI() {
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

function loadAudios() {
  quackAudio = new Audio("resources/quack.m4a");
  audiosById["button_quack"] = quackAudio;
  woofAudio = new Audio("resources/woof.m4a");
  audiosById["button_woof"] = woofAudio;
  meowAudio = new Audio("resources/meow.m4a");
  audiosById["button_meow"] = meowAudio;
  moooAudio = new Audio("resources/mooo.m4a");
  audiosById["button_mooo"] = moooAudio;
};

function main() {
  loadAudios();
  initializeUI();
};

document.addEventListener("DOMContentLoaded", main);
