const main = document.querySelector(`.main`);

export const getElementFromTemplate = (template) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = template;
  return wrapper;
};

export const appendScreen = (screen) => {
  main.innerHTML = ``;
  main.appendChild(screen);
};

export const getOneOfThreeRandomInt = () => Math.round(Math.random() * 2);
