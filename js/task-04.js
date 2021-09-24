let counterValue = 0;
const btnContainer = document.querySelector('#counter')

btnContainer.addEventListener('click', e => {
    console.log(e);
    console.log(counterValue);
    if (e.target.dataset.action === 'decrement') --counterValue;
    if (e.target.dataset.action === 'increment') ++counterValue;
    document.querySelector('#value').textContent = counterValue;
});

