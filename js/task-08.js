// Обработка отправки формы form.login - form должна быть по 
// событию submit.

// При отправке формы страница не должна перезагружаться.

// Если в форме есть незаполненные поля, выводи alert с 
// предупреждением о том, что все поля должны быть заполнены.

// Если пользователь заполнил все поля и отправил форму, собери
// значения полей в обьект, где имя поля будет именем свойства,
// а значение поля - значением свойства.
// Для доступа к элементам формы используй свойство elements.

// Выведи обьект с введенными данными в консоль и очисти 
// значения полей формы методом reset.
 
const refs = {
    form: document.querySelector(`.login-form`),
    passwordInput: document.querySelector(`[name="password"]`),
    emailInput: document.querySelector(`[name="email"]`),
    btnSubmit: document.querySelector(`button`),
};
// console.log(refs.form)
refs.form.addEventListener("submit", onformSubmit)
    
    function onformSubmit (event) {
        event.preventDefault();
        if (refs.passwordInput.value === "" || refs.emailInput.value === "") {
        alert("Все поля должны быть заполнены")
    }
        const formData = new FormData(event.currentTarget);

        console.log(formData)

            formData.forEach((value) => {
                console.log(value)
        });
}; 