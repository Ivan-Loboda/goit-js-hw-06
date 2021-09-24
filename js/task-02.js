const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const res = ingredients.map(item => {
  const li = document.createElement('li');
  li.textContent = item;
  li.classList.add('item');
  return li
})
// console.log(res);

document.querySelector('ul#ingredients').append(...res);
