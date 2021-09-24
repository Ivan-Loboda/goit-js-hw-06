const inputData = document.querySelector('#font-size-control');
const outputText = document.querySelector('#text')

inputData.addEventListener('input', (e) => {
    outputText.style.fontSize = `${inputData.value}px`;

})