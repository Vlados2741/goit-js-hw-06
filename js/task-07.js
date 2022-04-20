// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input) и изменяет
// инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться
// размер текста.
const form = document.querySelector(`#font-size-control`);
const textEl = document.querySelector(`#text`)

const fontSizeChanger = (event) => {
  return textEl.style.fontSize = event.currentTarget.value + "px";
}


form.addEventListener("input", fontSizeChanger)
// console.log(form.min)
// console.log(textEl)
// textEl.textContent.style.fontSize = form.min;