//Cкрипт, который при потере фокуса на инпуте (событие blur),
//проверяет содержимое на количество введённых символов.

// Сколько символов должно быть в инпуте, указывается в его
// атрибуте data - length.

// Если введено подходящее количество символов, 
// то border инпута становится зелёным, если неправильное
//     - красным.
// Для добавления стилей, используй CSS - классы valid и invalid,
// которые мы уже добавили в исходные файлы задания.
const dataLength = document.querySelector(`#validation-input`);

dataLength.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length === Number(dataLength.dataset.length)) {
        dataLength.classList.add(`valid`);
        dataLength.classList.remove(`invalid`)
  } else {
        dataLength.classList.add(`invalid`);
        dataLength.classList.remove(`valid`)
}   
});
console.log(dataLength.dataset.length)



