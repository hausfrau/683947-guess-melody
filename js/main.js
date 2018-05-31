'use strict';

const RIGHT_ARROW = 39;
const LEFT_ARROW = 37;
const BEFORE_END = `beforeEnd`;
const ARROW_WRAP_HTML = `<div class="arrows__wrap"> <style>  
.arrows__wrap { 
  position: absolute; 
  top: 135px;
  left: 50%;
  margin-left: -56px;
}
.arrows__btn {
  background: none;
  border: 2px solid black;
  padding: 5px 20px;
}
</style>
<button class="arrows__btn"><-</button>
  <button class="arrows__btn">-></button>
</div>`;

const app = document.querySelector(`.app`);
const main = app.querySelector(`.main`);
const template = document.querySelector(`template`);
const screens = Array.from(template.content.querySelectorAll(`section.main`)).map((it) => it.cloneNode(true));

let currentScreen = 0;

const swap = (left, right) => {
  const temp = screens[left];
  screens[left] = screens[right];
  screens[right] = temp;
};

const getScreen = (ind) => {
  return screens[ind];
};

const appendScreen = (screen) => {
  main.innerHTML = ``;
  main.appendChild(getScreen(screen));
};

const selectScreen = (index) => {
  index = index < 0 ? screens.length - 1 : index;
  index = index >= screens.length ? 0 : index;
  currentScreen = index;
  appendScreen(currentScreen);
};

const onLeftArrowButtonClick = () => {
  selectScreen(currentScreen - 1);
};

const onRightArrowButtonClick = () => {
  selectScreen(currentScreen + 1);
};

document.addEventListener(`keydown`, (evt) => {
  switch (evt.keyCode) {
    case RIGHT_ARROW:
      onRightArrowButtonClick();
      break;
    case LEFT_ARROW:
      onLeftArrowButtonClick();
      break;
  }
});

const addButtons = () => app.insertAdjacentHTML(BEFORE_END, ARROW_WRAP_HTML);

const bindButtonsListeners = () => {
  const buttons = app.querySelectorAll(`.arrows__btn`);
  buttons.forEach((it, index) => {
    it.addEventListener(`click`, index ? onRightArrowButtonClick : onLeftArrowButtonClick);
  });
};

swap(1, 2);
selectScreen(0);
addButtons();
bindButtonsListeners();
