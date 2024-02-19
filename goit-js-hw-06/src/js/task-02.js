const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listElement = document.querySelector("#ingredients");
const itemElement = ingredients.map(el => {
  const itemElement = document.createElement("li");
  itemElement.classList.add("item");
  itemElement.textContent = el;
  return itemElement;
});

listElement.append(...itemElement);
