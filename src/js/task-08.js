const loginForm = document.querySelector('.login-form')


const validSubmit = (e) => {
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Все поля должны быть заполнены");
    }

    console.log({ email: email.value, password: password.value })

    event.currentTarget.reset();
}


loginForm.addEventListener("submit", validSubmit);