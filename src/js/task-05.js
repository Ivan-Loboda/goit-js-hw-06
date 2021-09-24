const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');



const inputHandler = (e) => {
    if (nameInput.value !== '') {
        nameOutput.textContent = nameInput.value;
        return;
    }
    nameOutput.textContent = 'Anonymous';
}

nameInput.addEventListener('input', inputHandler)