// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.
    
let counterValue = 0;
const currentValue = document.querySelector(`#value`);
const decrementValue = document.querySelector(`[data-action="decrement"]`);
const incrementValue = document.querySelector(`[data-action="increment"]`);

const counterValueincrement = () => {
    counterValue = counterValue + 1;
    currentValue.textContent = counterValue;
}    
const counterValuedecrement = () => {
    counterValue = counterValue - 1;
    currentValue.textContent = counterValue;
}
decrementValue.addEventListener("click", counterValuedecrement);
incrementValue.addEventListener("click", counterValueincrement);
