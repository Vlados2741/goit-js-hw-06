// Напиши скрипт, который изменяет цвета фона элемента <body>
// через инлайн стиль при клике на button.change - color 
// и выводит значение цвета в span.color.
const refs = {
  colorChangerBtn: document.querySelector(`.change-color`),
  textColorChange: document.querySelector(`.color`),
  bodyEl: document.querySelector(`body`),
};

refs.colorChangerBtn.addEventListener(`click`, onChangeColor);

function onChangeColor() {
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
  refs.textColorChange.textContent = getRandomHexColor();
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
