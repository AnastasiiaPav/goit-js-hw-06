const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
console.dir(list);

const element = ingredients.map( ingredient => {
 const element = document.createElement("li");
 element.classList = 'item';
  element.textContent = ingredient;

  return element;
})

console.log(...element);

list.append(...element);

