// Напиши скрипт который, при наборе текста
// в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться
//  строка "Anonymous".
const form = document.querySelector("#name-input");
const name = document.querySelector(`#name-output`);

// name.textContent = form.textContent;
    
// const textInput = document.querySelector(".text-input");
// const output = document.querySelector(".output");

form.addEventListener("input", (event) => {
    name.textContent = event.currentTarget.value;
});
form.addEventListener("blur", () => {
  name.textContent = "Anonymous";
});