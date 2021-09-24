function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;

}
// console.log(getRandomHexColor())

document.querySelector('.change-color').addEventListener('click', () => {
  return document.querySelector('body').style.backgroundColor = getRandomHexColor();

})